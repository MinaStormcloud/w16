const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (!isSafari) {
                const preloadLink = document.createElement("link");
                preloadLink.href = "https://app.ecwid.com/script.js?16830190&data_platform=startersite_v2";
                preloadLink.rel = "preload";
                preloadLink.as = "script";
                document.head.appendChild(preloadLink);
            }