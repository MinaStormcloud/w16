var abTestNewFeatures = ""
            var ecwidDomain = "company.site";
            var channelId = "";
            var ecwid_no_body_height = true;
            var ecwidStoreURL = "https://app.ecwid.com"
              , ecwidStoreID = "16830190"
              , ecwidStoreParams = "data_platform=startersite_v2"
              , ecwidStoreName = "Munamii Cakery"
              , ecwidStoreSettings = {
                categoriesPerRow: 3,
                gridViewRows: 20,
                gridViewCols: 3,
                listViewRows: 60,
                tableViewRows: 60,
                customMaxProductsPerPage: ""
            };

            var navigationEnabled = true;

            window.Ecwid = window.Ecwid || {}
            window.EcwidV2 = window.EcwidV2 || {}
            window.Ecwid.restoreCartData = window.EcwidV2.restoreCartData = undefined;

            window.ec = window.ec || {};
            window.ec.config = window.ec.config || {};
            window.ec.config.enable_canonical_urls = true;
            window.ec.config.interactive = true;
            window.ec.config.facebookWebView = false;
            window.ec.config.scroll_indent = 32;
            window.ec.storefront = window.ec.storefront || {};
            window.ec.storefront.sharing_button_link = "DIRECT_PAGE_URL";
            window.ec.storefront.enable_navigation = navigationEnabled;

            window.ec.config.canonical_base_url = "https://munamii.com/";

            window.ec.config.chameleon = window.ec.config.chameleon || {};
            window.ec.config.chameleon.colors = window.ec.config.chameleon.colors || {
                "color-foreground": "#191919",
                "color-background": "#fff",
                "color-link": "#1a7ac4",
                "color-button": "#333",
                "color-price": "#191919"
            };

            window.ec.config.storefrontUrls = window.ec.config.storefrontUrls || {};
            window.ec.config.storefrontUrls.cleanUrls = true;

            document.body.classList.add((!!('ontouchstart'in window)) ? 'touchable' : 'no-touch');

            function animateScroll(tile) {
                if (typeof $ == 'undefined') {
                    document.querySelector(tile).scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    $('html, body').animate({
                        'scrollTop': $(tile).offset().top
                    }, 300);
                }
            }

            function scrollToTile(tile, isReloaded) {
                var isReloaded = isReloaded || false;
                animateScroll(tile);
                if (isReloaded) {
                    window.ec.config.navigation_scrolling = 'CUSTOM';
                    window.ec.config.custom_scroller = function() {
                        delete window.ec.config.navigation_scrolling;
                        delete window.ec.config.custom_scroller;
                    }
                }
            }

            function getQueryParams(qs) {
                qs = qs.split('+').join(' ');
                var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;

                while (tokens = re.exec(qs)) {
                    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
                }
                return params;
            }

            var query = getQueryParams(document.location.search);

            if (query.hide_header == 'true') {
                document.body.classList.add('hide-header');
            }

            /* get hash params */
            function getParams(h) {
                var r = {};
                if (h) {
                    h = decodeURIComponent(h.replace(/\?|\#/g, "")).split(/\&/);
                    h.forEach(function(c, i) {
                        c = c.split("=");
                        var key = c[0].toLowerCase();
                        var value = c[1];
                        if (/^(null|false|true|[0-9]+)$/.test(value)) {
                            value = JSON.parse(value);
                        }
                        if (key.match(/\[\]/g)) {
                            key = key.replace(/\[\]/g, "");
                            if (!r[key]) {
                                r[key] = [];
                            }
                            r[key].push(value);
                        } else {
                            r[key] = value;
                        }
                    });
                }
                return r;
            }
            ;
            var params = getParams(document.location.hash);
            if (params.mode == 'preview' && window.innerWidth < 768) {
                document.body.classList.add('preview-mode');
            }