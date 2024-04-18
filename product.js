(function() {
    window.ec = window.ec || {};
    if (window.ec.static_category_evaluated === true) {
        return;
    }
    window.ec.static_category_evaluated = true;
    var Grid = function() {
        var params = {
            productListImageSize: "MEDIUM",
            categoryImageSize: "MEDIUM",
            productCellSpacing: "",
            categoryCellSpacing: ""
        };
        var settings = {
            productBreakpoints: {
                LARGE: [0, 680, 1060, 1440, 10000],
                MEDIUM: [0, 260, 680, 1060, 1370, 1700, 10000],
                SMALL: [0, 260, 520, 680, 870, 1060, 1280, 1450, 1750, 10000]
            },
            categoryBreakpoints: {
                LARGE: [0, 680, 1060, 1440, 10000],
                MEDIUM: [0, 480, 680, 1060, 1370, 1700, 10000],
                SMALL: [0, 390, 520, 680, 870, 1060, 1280, 1450, 1750, 10000]
            }
        };
        function setAttributes(grids, breakpoints) {
            if (!grids) {
                return;
            }
            grids.forEach(function(grid) {
                var w = grid.offsetWidth;
                var columnCount = 0;
                for (var i = 1; i <= breakpoints.length; i++) {
                    if (w < Math.ceil(breakpoints[i])) {
                        if (i !== columnCount) {
                            columnCount = i;
                            grid.setAttribute('data-cols', i);
                        }
                        break;
                    }
                }
            });
        }
        function checkProductGridsLayout() {
            var productGrids = document.querySelectorAll('.grid__products');
            var productBreakpoints = settings.productBreakpoints[params.productListImageSize];
            setAttributes(productGrids, productBreakpoints);
        }
        function checkCategoryGridsLayout() {
            var categoryGrids = document.querySelectorAll('.grid__categories');
            var categoryBreakpoints = settings.categoryBreakpoints[params.categoryImageSize];
            setAttributes(categoryGrids, categoryBreakpoints);
        }
        function checkLayout() {
            checkProductGridsLayout();
            checkCategoryGridsLayout();
        }
        function setCellInterval(p, c) {
            var style = document.getElementById('customCss') || document.createElement('div');
            style.id = 'customCss';
            document.body.appendChild(style);
            var css = '';
            if (+p == p && p != "") {
                p = +p;
                css += '.ec-size .ec-store .grid__products { margin-left: -' + Math.max(0, p / 2 - .4) + 'px; margin-right: -' + p / 2 + 'px; }';
                css += '.ec-size .ec-store .grid__products .grid-product__wrap { padding: ' + p / 2 + 'px; }';
                css += '.ec-size:not(.ec-size--s) .ec-store .grid__products { margin-left: -' + Math.max(0, Math.min(16, p) / 2 - .4) + 'px; margin-right: -' + Math.min(16, p) / 2 + 'px; }';
                css += '.ec-size:not(.ec-size--s) .ec-store .grid__products .grid-product__wrap { padding: ' + Math.min(16, p) / 2 + 'px; }';
            }
            if (+c == c && c != "") {
                c = +c;
                css += '.ec-size .ec-store .grid__categories { margin-left: -' + Math.max(0, c / 2 - .4) + 'px; margin-right: -' + c / 2 + 'px; }';
                css += '.ec-size .ec-store .grid-category__wrap { padding: ' + c / 2 + 'px; }';
                css += '.ec-size:not(.ec-size--s) .ec-store .grid__categories { margin-left: -' + Math.max(0, Math.min(16, c) / 2 - .4) + 'px; margin-right: -' + Math.min(16, c) / 2 + 'px; }';
                css += '.ec-size:not(.ec-size--s) .ec-store .grid__categories .grid-category__wrap { padding: ' + Math.min(16, c) / 2 + 'px; }';
            }
            style.innerHTML = '<style>' + css + '</style>';
        }
        function init() {
            setCellInterval(params.productCellSpacing, params.categoryCellSpacing);
            checkLayout();
            window.addEventListener('resize', function() {
                checkLayout();
            });
        }
        init();
    };
    var ecwidContainer = document.querySelector('.ec-static-container .ec-size');
    var breakpoints = {
        320: 'ec-size--xxs',
        414: 'ec-size--xs',
        480: 'ec-size--s',
        768: 'ec-size--m',
        1024: 'ec-size--l',
        1100: 'ec-size--xl',
        1440: 'ec-size--xxl'
    };
    function onResize() {
        var w = ecwidContainer.offsetWidth;
        for (var i in breakpoints) {
            if (w >= i) {
                ecwidContainer.classList.add(breakpoints[i]);
            } else {
                ecwidContainer.classList.remove(breakpoints[i]);
            }
        }
    }
    onResize();
    window.addEventListener('load', onResize);
    window.addEventListener('resize', onResize);
    var links = document.querySelectorAll(".ec-static-container a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.addEventListener('click', function() {
            document.querySelector('.ec-static-container').classList.add("ec-static-container__wait");
        })
    }
    var grid = new Grid();
}
)();