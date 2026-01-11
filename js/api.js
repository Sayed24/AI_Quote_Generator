const AI_ENDPOINT = "https://YOUR-VERCEL-PROJECT.vercel.app/api/ai-quote";

async function fetchQuote() {
  const res = await fetch(AI_ENDPOINT);
  return await res.json();
}
