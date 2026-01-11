const text = document.getElementById("quote-text");
const author = document.getElementById("quote-author");

async function loadQuote() {
  text.textContent = "Thinking...";
  const data = await fetchQuote();
  text.textContent = `"${data.quote}"`;
  author.textContent = `— ${data.author}`;
}

document.getElementById("new-quote").onclick = loadQuote;
document.getElementById("favorite").onclick = () =>
  saveFavorite(text.textContent);

loadQuote();
