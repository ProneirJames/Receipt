self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
});

// Optional: listen for fetch events (not caching)
self.addEventListener("fetch", () => {});
