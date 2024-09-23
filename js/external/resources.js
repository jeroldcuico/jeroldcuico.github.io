export function loadStyleResources(url) {
    let element;
    if (url.endsWith('.js')) {
        element = document.createElement('script');
        element.src = url;
        element.defer =  true;
    } else if (url.endsWith('.css')) {
        element = document.createElement('link');
        element.rel = 'stylesheet';
        element.type = 'text/css'
        element.href = url;
    } else {
        console.error('Unsupported file type: ' + url);
        return;
    }
    document.head.appendChild(element);
}
