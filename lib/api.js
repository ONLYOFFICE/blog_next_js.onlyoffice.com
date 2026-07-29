const API_URL = "https://var_src_domain/graphql";

const MAX_RETRIES = 5;
const RETRY_BASE_DELAY = 2000;
const RETRY_MAX_DELAY = 60000;

// Hard per-request timeout. Without it a request to a dying/restarting WP
// pod can hang indefinitely; combined with the concurrency cap below, a few
// hung requests would permanently occupy semaphore slots and stall the whole
// worker process (observed 2026-07-28: build crawled at ~45 pages/min while
// pods were restarting). A timed-out request aborts, releases its slot and
// goes through the normal backoff-retry path.
const FETCH_TIMEOUT = 90000;

// Cap on concurrent GraphQL requests per process (adaptive backpressure).
// While WP answers fast the cap is never felt; when responses slow down
// (cold cache, DB saturation) new requests queue client-side instead of
// piling onto the database - the same self-limiting effect as a
// high-latency network link, but only when the backend is struggling.
// Build workers are separate processes, so the effective build-wide cap is
// workers x GRAPHQL_MAX_CONCURRENT. Tune via env (e.g. 2 for cold builds).
const MAX_CONCURRENT = Number(process.env.GRAPHQL_MAX_CONCURRENT) || 4;

let inFlight = 0;
const waiters = [];

const acquire = () =>
  new Promise((resolve) => {
    if (inFlight < MAX_CONCURRENT) {
      inFlight++;
      resolve();
    } else {
      waiters.push(resolve);
    }
  });

const release = () => {
  const next = waiters.shift();
  if (next) {
    next();
  } else {
    inFlight--;
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchAPI(query = "") {
  let lastError;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      // Exponential backoff with jitter: under DB-side load storms (cold
      // cache, AHI warm-up) synchronized retries from parallel build workers
      // amplify the storm. Longer, randomized waits shed load and let the
      // database drain its queue instead of re-hitting it in lockstep.
      const backoff = Math.min(RETRY_BASE_DELAY * 2 ** (attempt - 1), RETRY_MAX_DELAY);
      await sleep(backoff * (0.5 + Math.random() * 0.5));
    }

    await acquire();
    try {
      const res = await fetch(`${API_URL}?${new URLSearchParams({ query })}`, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
        signal: AbortSignal.timeout(FETCH_TIMEOUT),
      });

      if (!res.ok) {
        lastError = new Error(`HTTP ${res.status} ${res.statusText}`);
        continue;
      }

      const text = await res.text();
      const json = JSON.parse(text);
      return json.data;
    } catch (error) {
      lastError = error;
    } finally {
      release();
    }
  }

  console.log(`fetchAPI failed after ${MAX_RETRIES + 1} attempts: ${lastError?.message}; query: ${query.slice(0, 160)}`);
  return undefined;
}
