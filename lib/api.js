const API_URL = "https://var_src_domain/graphql";

const MAX_RETRIES = 5;
const RETRY_BASE_DELAY = 2000;
const RETRY_MAX_DELAY = 60000;

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

    try {
      const res = await fetch(`${API_URL}?${new URLSearchParams({ query })}`, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
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
    }
  }

  console.log(`fetchAPI failed after ${MAX_RETRIES + 1} attempts: ${lastError?.message}; query: ${query.slice(0, 160)}`);
  return undefined;
}
