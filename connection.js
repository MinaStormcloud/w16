if ('serviceWorker'in navigator) {
    var isOffline = false;
    function XMLHttpRequestConnection(no, yes) {
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if (yes instanceof Function) {
                    yes();
                }
            }
            ;
            xhr.onerror = function() {
                if (no instanceof Function) {
                    no();
                }
            }
            ;
            xhr.open("GET", "sitemap.xml", true);
            xhr.send();
        }
    }
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
        var offLine = function() {
            if (navigator.onLine) {
                return;
            }

            if (!document.body.classList.contains('offline')) {
                isOffline = true;
                addOfflineBlock();
                document.body.classList.add('offline');
            }
        }
        var onLine = function() {
            document.body.classList.remove('offline');
            if (isOffline && typeof Ecwid !== 'undefined') {
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                var isEdge = /Edge/.test(navigator.userAgent);
                if (isSafari || isEdge)
                    location.reload();
                var menu = document.querySelector('.menu .container');
                if (menu)
                    menu.innerHTML = '';
                var pushmenu = document.querySelector('.pushmenu .container');
                if (pushmenu)
                    pushmenu.innerHTML = '';
                insertStore();
                var timer = setInterval(function() {
                    var placeholder = document.getElementById('ecwidStorefrontPlaceholder');
                    if (placeholder)
                        placeholder.parentNode.removeChild(placeholder);
                }, 200);
                setTimeout(function() {
                    clearInterval(timer);
                }, 2000);
                if (typeof (Event) === 'function') {
                    window.dispatchEvent(new Event('resize'));
                } else {
                    var evt = window.document.createEvent('UIEvents');
                    evt.initUIEvent('resize', true, false, window, 0);
                    window.dispatchEvent(evt);
                }
                isOffline = false;
            }

        }
        function handleNetworkChange(event) {
            if (!!navigator.userAgent.match(/Trident\/7\./)) {
                // for IE 11
                XMLHttpRequestConnection(offLine, onLine);
            } else {
                if (navigator.onLine) {
                    onLine();
                } else {
                    setTimeout(function() {
                        offLine();
                    }, 5000)
                }
            }
        }
        function addOfflineBlock() {
            if (document.querySelector('.block-offline') == null) {
                var div = document.createElement('div');
                div.className = 'block-offline';
                div.innerHTML = '<div class="block-offline__panel"><div class="block-offline__panel-title">You are offline</div><div class="block-offline__panel-text">Connect to the Internet to browse and shop our products.</div></div>';
                var bodyDiv = document.querySelector('.body');
                var parentDiv = bodyDiv.parentNode;
                parentDiv.insertBefore(div, bodyDiv);
            }
        }
        window.addEventListener("online", handleNetworkChange);
        window.addEventListener("offline", handleNetworkChange);
        handleNetworkChange();
    });
}