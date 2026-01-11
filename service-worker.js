self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("quotes-v1").then(c =>
      c.addAll(["/", "/index.html"])
    )
  );
});
