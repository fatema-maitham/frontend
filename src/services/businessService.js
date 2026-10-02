// Talks to the FastAPI backend. In development, Vite forwards /api to localhost:8000.
const API = "/api";

export async function getBusinesses() {
  const res = await fetch(`${API}/businesses`);
  if (!res.ok) throw new Error(`Could not load businesses (${res.status})`);
  const data = await res.json();
  // accept either a plain list or a paginated object
  if (Array.isArray(data)) return data;
  return data.items || data.businesses || data.results || [];
}
