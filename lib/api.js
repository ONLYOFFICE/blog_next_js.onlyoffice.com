const API_URL = "https://var_src_domain/graphql";

export async function fetchAPI(query = "") {
  try {
    const res = await fetch(`${API_URL}?${new URLSearchParams({query})}`, {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    });
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log(error.message);
  }
}