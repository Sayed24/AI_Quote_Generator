function saveFavorite(q) {
  const f = JSON.parse(localStorage.getItem("favorites")) || [];
  f.push(q);
  localStorage.setItem("favorites", JSON.stringify(f));
}

const list = document.getElementById("favorites");
if (list) {
  JSON.parse(localStorage.getItem("favorites") || "[]")
    .forEach(q => {
      const li = document.createElement("li");
      li.textContent = q;
      list.appendChild(li);
    });
}
