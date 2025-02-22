export function loadStyleResources(url) {
  let element;
  if (url.endsWith(".js")) {
    element = document.createElement("script");
    element.src = url;
    element.defer = true;
  } else if (url.endsWith(".css")) {
    element = document.createElement("link");
    element.rel = "stylesheet";
    element.type = "text/css";
    element.href = url;
  } else {
    console.error("Unsupported file type: " + url);
    return;
  }
  document.head.appendChild(element);
}

export function loadStylesandScripts() {
  loadStyleResources("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"  );
  loadStyleResources("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
  loadStyleResources("https://jeroldcuico.github.io/apacbuddy/assets/apacbuddy.css");
  loadStyleResources("https://unpkg.com/boxicons@2.1.4/dist/boxicons.js");
  loadStyleResources("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
}
