if (window.location.pathname.match(/^.*-p\d+$/)) {
    var pb = document.querySelector('#ecwid-products');
    if (pb) {
        var timeLimit = 3000;
        var waiter = setInterval(function() {
            var distPbTopToPageBottom = document.body.clientHeight - pb.offsetTop;
            if (distPbTopToPageBottom >= window.innerHeight) {
                clearInterval(waiter);
                pb.scrollIntoView();
            }
            timeLimit -= 20;
            if (timeLimit <= 0)
                clearInterval(waiter);
        }, 20);
    }
}