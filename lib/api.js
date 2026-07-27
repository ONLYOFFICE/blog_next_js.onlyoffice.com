const API_URL = "https://var_src_domain/graphql";

const MAX_RETRIES = 5;
const RETRY_BASE_DELAY = 500;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchAPI(query = "") {
  let lastError;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      await sleep(RETRY_BASE_DELAY * 2 ** (attempt - 1));
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

  console.log(`fetchAPI failed after ${MAX_RETRIES + 1} attempts: ${lastError?.message}`);
  return undefined;
}
