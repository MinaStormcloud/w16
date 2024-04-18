if ('serviceWorker'in navigator) {
    var controller = navigator.serviceWorker.controller;
    if (controller && controller.state == 'activated') {
        document.body.classList.remove('loading');
        document.body.classList.add('sw-activated');
    }
}