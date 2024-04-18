var hero, cover, Hero = function() {
    var t = 16
      , o = document.querySelector(".hero")
      , i = o.querySelector(".background")
      , n = o.querySelector(".layout")
      , e = document.querySelector(".overlay-main")
      , r = document.documentElement.clientWidth
      , a = document.documentElement.clientHeight
      , l = {
        w: 0,
        h: 0
    }
      , s = {
        w: 0,
        h: 0
    };
    function c() {
        t = 16,
        o.style.fontSize = t + "px",
        o.style.height = a + "px",
        i.style.height = a + "px",
        function e() {
            5 < t && (n.offsetHeight > o.offsetHeight || n.offsetWidth > o.offsetWidth) && (o.style.fontSize = --t + "px",
            e())
        }()
    }
    function u() {
        return r > 480 + y() ? "desktop" : "mobile"
    }
    function d(t) {
        var o, i, e;
        t && ((o = !!document.querySelector(".hero").classList.contains("empty")) ? (t.style.backgroundSize = "auto",
        t.style.backgroundRepeat = "repeat",
        t.style.visibility = "visible") : (t.style.backgroundSize = "",
        t.style.backgroundRepeat = ""),
        "mobile" == u() && 0 < s.w && !o ? m(t, s) : "desktop" == u() && 0 < l.w && !o ? m(t, l) : ((i = new Image).onload = function() {
            var e = "naturalHeight"in (e = i) ? {
                w: e.naturalWidth,
                h: e.naturalHeight
            } : {
                w: e.width,
                h: e.height
            };
            "mobile" == u() ? s = e : l = e,
            o || m(t, e)
        }
        ,
        t && "none" !== (e = h(t)) && (i.src = e)))
    }
    function p() {
        l = {
            w: 0,
            h: 0
        },
        s = {
            w: 0,
            h: 0
        }
    }
    function m(e, t) {
        var o = e.offsetWidth
          , i = e.offsetHeight
          , t = t.w / t.h
          , n = 0
          , r = 0
          , a = 0
          , l = 0
          , n = t < o / i ? (r = y(),
        (i - (l = (a = o) / t)) / 2) : (a = i * t,
        r = y() + (o - (l = i) * t) / 2,
        0);
        e.style.backgroundSize = a + "px " + l + "px",
        e.style.backgroundPosition = r + "px " + n + "px",
        e.style.visibility = "visible"
    }
    function y() {
        return e ? e.offsetLeft : 0
    }
    function h(e) {
        try {
            var t = getComputedStyle(e).backgroundImage;
            return t ? t.match(/url[\("']+(.*?)["'\)]+$/)[1] : "none"
        } catch (e) {
            return console.error(e),
            "none"
        }
    }
    function f() {
        var e, t, o = i.querySelector(".video");
        o ? o.addEventListener("load", function() {
            document.body.classList.remove("loading")
        }, !1) : (o = i.querySelector("." + u() + "Picture")) && "none" !== (o = h(o)) && (o = o,
        e = new Image,
        t = document.body.classList.contains("sw-activated") ? 0 : 600,
        e.onload = function() {
            document.body.classList.remove("loading"),
            setTimeout(function() {
                i.querySelector(".mobileThumbnail") && i.removeChild(i.querySelector(".mobileThumbnail")),
                i.querySelector(".desktopThumbnail") && i.removeChild(i.querySelector(".desktopThumbnail")),
                i.style.backgroundImage = "",
                p()
            }, t)
        }
        ,
        e.src = o)
    }
    function v() {
        c(),
        window.sseditmode && (d(i.querySelector("." + u() + "Picture")),
        d(i.querySelector("." + u() + "Thumbnail")))
    }
    this.init = function() {
        window.addEventListener("resize", function() {
            var e = document.documentElement.clientWidth
              , t = document.documentElement.clientHeight;
            void 0 !== window.orientation && e == r || 1.8 * (r = e) <= (a = t) && (a = 768),
            v()
        }),
        navigator.userAgent.indexOf("Page Speed") < 0 && (window.sseditmode ? d(i.querySelector("." + u() + "Thumbnail")) : i.style.backgroundImage = i.querySelector("." + u() + "Thumbnail").style.backgroundImage,
        f()),
        v()
    }
    ,
    this.render = c,
    this.getDevice = u,
    this.fitBackground = function() {
        d(i.querySelector("." + u() + "Picture")),
        d(i.querySelector("." + u() + "Thumbnail"))
    }
    ,
    this.setBGImageSize = m,
    this.clearCacheBGImageSize = p
}, Cover = (document.querySelector(".hero") && (hero = new Hero).init(),
!function(o) {
    var i = {};
    function n(e) {
        var t;
        return (i[e] || (t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        },
        o[e].call(t.exports, t, t.exports, n),
        t.l = !0,
        t)).exports
    }
    n.m = o,
    n.c = i,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(o, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 10)
}([, , function(e, t) {
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}
, function(t, e, o) {
    !function(e) {
        e = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
        t.exports = e
    }
    .call(this, o(4))
}
, function(e, t) {
    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    e.exports = i
}
, , , , , , function(e, t, o) {
    e.exports = o(11)
}
, function(e, t, o) {
    "use strict";
    o.r(t);
    var t = o(2)
      , t = o.n(t)
      , n = o(3)
      , r = o(12);
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var i, l = n.window.jarallax;
    n.window.jarallax = r.default,
    n.window.jarallax.noConflict = function() {
        return n.window.jarallax = l,
        this
    }
    ,
    void 0 !== n.jQuery && ((o = function() {
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
            t[o] = arguments[o];
        Array.prototype.unshift.call(t, this);
        var i = r.default.apply(n.window, t);
        return "object" !== a(i) ? i : this
    }
    ).constructor = r.default.constructor,
    i = n.jQuery.fn.jarallax,
    n.jQuery.fn.jarallax = o,
    n.jQuery.fn.jarallax.noConflict = function() {
        return n.jQuery.fn.jarallax = i,
        this
    }
    ),
    t()(function() {
        Object(r.default)(document.querySelectorAll("[data-jarallax]"))
    })
}
, function(e, t, o) {
    "use strict";
    o.r(t);
    var i = o(2)
      , i = o.n(i)
      , m = o(3);
    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, i = new Array(t); o < t; o++)
            i[o] = e[o];
        return i
    }
    function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function n(e, t) {
        for (var o = 0; o < t.length; o++) {
            var i = t[o];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var r, y, u = m.window.navigator, a = -1 < u.userAgent.indexOf("MSIE ") || -1 < u.userAgent.indexOf("Trident/") || -1 < u.userAgent.indexOf("Edge/"), l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent), d = function() {
        for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), o = 0; o < e.length; o += 1)
            if (t && void 0 !== t.style[e[o]])
                return e[o];
        return !1
    }();
    function p() {
        y = l ? (!r && document.body && ((r = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",
        document.body.appendChild(r)),
        (r ? r.clientHeight : 0) || m.window.innerHeight || document.documentElement.clientHeight) : m.window.innerHeight || document.documentElement.clientHeight
    }
    p(),
    m.window.addEventListener("resize", p),
    m.window.addEventListener("orientationchange", p),
    m.window.addEventListener("load", p),
    i()(function() {
        p()
    });
    var h = [];
    function f() {
        h.length && (h.forEach(function(e, t) {
            var o = e.instance
              , e = e.oldData
              , i = o.$item.getBoundingClientRect()
              , i = {
                width: i.width,
                height: i.height,
                top: i.top,
                bottom: i.bottom,
                wndW: m.window.innerWidth,
                wndH: y
            }
              , n = !e || e.wndW !== i.wndW || e.wndH !== i.wndH || e.width !== i.width || e.height !== i.height
              , e = n || !e || e.top !== i.top || e.bottom !== i.bottom;
            h[t].oldData = i,
            n && o.onResize(),
            e && o.onScroll()
        }),
        m.window.requestAnimationFrame(f))
    }
    function v(e, t) {
        for (var o, i = (e = ("object" === ("undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement)) ? e instanceof HTMLElement : e && "object" === c(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? [e] : e).length, n = 0, r = arguments.length, a = new Array(2 < r ? r - 2 : 0), l = 2; l < r; l++)
            a[l - 2] = arguments[l];
        for (; n < i; n += 1)
            if ("object" === c(t) || void 0 === t ? e[n].jarallax || (e[n].jarallax = new b(e[n],t)) : e[n].jarallax && (o = e[n].jarallax[t].apply(e[n].jarallax, a)),
            void 0 !== o)
                return o;
        return e
    }
    var g = 0
      , b = (n(w.prototype, [{
        key: "css",
        value: function(t, o) {
            return "string" == typeof o ? m.window.getComputedStyle(t).getPropertyValue(o) : (o.transform && d && (o[d] = o.transform),
            Object.keys(o).forEach(function(e) {
                t.style[e] = o[e]
            }),
            t)
        }
    }, {
        key: "extend",
        value: function(o) {
            for (var e = arguments.length, i = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++)
                i[t - 1] = arguments[t];
            return o = o || {},
            Object.keys(i).forEach(function(t) {
                i[t] && Object.keys(i[t]).forEach(function(e) {
                    o[e] = i[t][e]
                })
            }),
            o
        }
    }, {
        key: "getWindowData",
        value: function() {
            return {
                width: m.window.innerWidth || document.documentElement.clientWidth,
                height: y,
                y: document.documentElement.scrollTop
            }
        }
    }, {
        key: "initImg",
        value: function() {
            var e = this
              , t = e.options.imgElement;
            return (t = t && "string" == typeof t ? e.$item.querySelector(t) : t)instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null),
            t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t,
            e.image.$itemParent = t.parentNode),
            e.image.useImgTag = !0),
            !(!e.image.$item && (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            e.image.bgImage = e.css(e.$item, "background-image")),
            !e.image.bgImage || "none" === e.image.bgImage))
        }
    }, {
        key: "canInitParallax",
        value: function() {
            return d && !this.options.disableParallax()
        }
    }, {
        key: "init",
        value: function() {
            var e, t = this, o = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden"
            }, i = {
                pointerEvents: "none",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform,opacity"
            };
            !t.options.keepImg && ((e = t.$item.getAttribute("style")) && t.$item.setAttribute("data-jarallax-original-styles", e),
            t.image.useImgTag) && (e = t.image.$item.getAttribute("style")) && t.image.$item.setAttribute("data-jarallax-original-styles", e),
            "static" === t.css(t.$item, "position") && t.css(t.$item, {
                position: "relative"
            }),
            "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {
                zIndex: 0
            }),
            t.image.$container = document.createElement("div"),
            t.css(t.image.$container, o),
            t.css(t.image.$container, {
                "z-index": t.options.zIndex
            }),
            a && t.css(t.image.$container, {
                opacity: .9999
            }),
            t.image.$container.setAttribute("id", "jarallax-container-".concat(t.instanceID)),
            t.$item.appendChild(t.image.$container),
            t.image.useImgTag ? i = t.extend({
                "object-fit": t.options.imgSize,
                "object-position": t.options.imgPosition,
                "font-family": "object-fit: ".concat(t.options.imgSize, "; object-position: ").concat(t.options.imgPosition, ";"),
                "max-width": "none"
            }, o, i) : (t.image.$item = document.createElement("div"),
            t.image.src && (i = t.extend({
                "background-position": t.options.imgPosition,
                "background-size": t.options.imgSize,
                "background-repeat": t.options.imgRepeat,
                "background-image": t.image.bgImage || 'url("'.concat(t.image.src, '")')
            }, o, i))),
            "opacity" !== t.options.type && "scale" !== t.options.type && "scale-opacity" !== t.options.type && 1 !== t.options.speed || (t.image.position = "absolute"),
            "fixed" === t.image.position && (e = function(e) {
                for (var t = []; null !== e.parentElement; )
                    1 === (e = e.parentElement).nodeType && t.push(e);
                return t
            }(t.$item).filter(function(e) {
                var e = m.window.getComputedStyle(e)
                  , t = e["-webkit-transform"] || e["-moz-transform"] || e.transform;
                return t && "none" !== t || /(auto|scroll)/.test(e.overflow + e["overflow-y"] + e["overflow-x"])
            }),
            t.image.position = e.length ? "absolute" : "fixed"),
            i.position = t.image.position,
            t.css(t.image.$item, i),
            t.image.$container.appendChild(t.image.$item),
            t.onResize(),
            t.onScroll(!0),
            t.options.onInit && t.options.onInit.call(t),
            "none" !== t.css(t.$item, "background-image") && t.css(t.$item, {
                "background-image": "none"
            }),
            t.addToParallaxList()
        }
    }, {
        key: "addToParallaxList",
        value: function() {
            h.push({
                instance: this
            }),
            1 === h.length && m.window.requestAnimationFrame(f)
        }
    }, {
        key: "removeFromParallaxList",
        value: function() {
            var o = this;
            h.forEach(function(e, t) {
                e.instance.instanceID === o.instanceID && h.splice(t, 1)
            })
        }
    }, {
        key: "destroy",
        value: function() {
            var e = this;
            e.removeFromParallaxList();
            var t, o = e.$item.getAttribute("data-jarallax-original-styles");
            e.$item.removeAttribute("data-jarallax-original-styles"),
            o ? e.$item.setAttribute("style", o) : e.$item.removeAttribute("style"),
            e.image.useImgTag && (t = e.image.$item.getAttribute("data-jarallax-original-styles"),
            e.image.$item.removeAttribute("data-jarallax-original-styles"),
            t ? e.image.$item.setAttribute("style", o) : e.image.$item.removeAttribute("style"),
            e.image.$itemParent) && e.image.$itemParent.appendChild(e.image.$item),
            e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles),
            e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container),
            e.options.onDestroy && e.options.onDestroy.call(e),
            delete e.$item.jarallax
        }
    }, {
        key: "clipContainer",
        value: function() {
            var e, t, o;
            "fixed" === this.image.position && (o = (t = (e = this).image.$container.getBoundingClientRect()).width,
            t = t.height,
            e.$clipStyles || (e.$clipStyles = document.createElement("style"),
            e.$clipStyles.setAttribute("type", "text/css"),
            e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)),
            (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),
            o = "#jarallax-container-".concat(e.instanceID, " {\n            clip: rect(0 ").concat(o, "px ").concat(t, "px 0);\n            clip: rect(0, ").concat(o, "px, ").concat(t, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),
            e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = o : e.$clipStyles.innerHTML = o)
        }
    }, {
        key: "coverImage",
        value: function() {
            var e = this
              , t = e.image.$container.getBoundingClientRect()
              , o = t.height
              , i = e.options.speed
              , n = "scroll" === e.options.type || "scroll-opacity" === e.options.type
              , r = 0
              , a = o;
            return n && (i < 0 ? (r = i * Math.max(o, y),
            y < o && (r -= i * (o - y))) : r = i * (o + y),
            1 < i ? a = Math.abs(r - y) : i < 0 ? a = r / i + Math.abs(r) : a += (y - o) * (1 - i),
            r /= 2),
            e.parallaxScrollDistance = r,
            i = n ? (y - a) / 2 : (o - a) / 2,
            e.css(e.image.$item, {
                height: "".concat(a, "px"),
                marginTop: "".concat(i, "px"),
                left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
                width: "".concat(t.width, "px")
            }),
            e.options.onCoverImage && e.options.onCoverImage.call(e),
            {
                image: {
                    height: a,
                    marginTop: i
                },
                container: t
            }
        }
    }, {
        key: "isVisible",
        value: function() {
            return this.isElementInViewport || !1
        }
    }, {
        key: "onScroll",
        value: function(e) {
            var t, o, i, n, r, a, l = this, s = l.$item.getBoundingClientRect(), c = s.top, u = s.height, d = {}, p = s;
            l.options.elementInViewport && (p = l.options.elementInViewport.getBoundingClientRect()),
            l.isElementInViewport = 0 <= p.bottom && 0 <= p.right && p.top <= y && p.left <= m.window.innerWidth,
            (e || l.isElementInViewport) && (p = Math.max(0, c),
            e = Math.max(0, u + c),
            t = Math.max(0, -c),
            o = Math.max(0, c + u - y),
            i = Math.max(0, u - (c + u - y)),
            n = Math.max(0, -c + y - u),
            r = 1 - (y - c) / (y + u) * 2,
            a = 1,
            u < y ? a = 1 - (t || o) / u : e <= y ? a = e / y : i <= y && (a = i / y),
            "opacity" !== l.options.type && "scale-opacity" !== l.options.type && "scroll-opacity" !== l.options.type || (d.transform = "translate3d(0,0,0)",
            d.opacity = a),
            "scale" !== l.options.type && "scale-opacity" !== l.options.type || (u = 1,
            l.options.speed < 0 ? u -= l.options.speed * a : u += l.options.speed * (1 - a),
            d.transform = "scale(".concat(u, ") translate3d(0,0,0)")),
            "scroll" !== l.options.type && "scroll-opacity" !== l.options.type || (u = l.parallaxScrollDistance * r,
            "absolute" === l.image.position && (u -= c),
            d.transform = "translate3d(0,".concat(u, "px,0)")),
            l.css(l.image.$item, d),
            l.options.onScroll) && l.options.onScroll.call(l, {
                section: s,
                beforeTop: p,
                beforeTopEnd: e,
                afterTop: t,
                beforeBottom: o,
                beforeBottomEnd: i,
                afterBottom: n,
                visiblePercent: a,
                fromViewportCenter: r
            })
        }
    }, {
        key: "onResize",
        value: function() {
            this.coverImage(),
            this.clipContainer()
        }
    }]),
    w);
    function w(e, t) {
        if (!(this instanceof w))
            throw new TypeError("Cannot call a class as a function");
        var o = this;
        o.instanceID = g,
        g += 1,
        o.$item = e,
        o.defaults = {
            type: "scroll",
            speed: .5,
            imgSrc: null,
            imgElement: ".jarallax-img",
            imgSize: "cover",
            imgPosition: "50% 50%",
            imgRepeat: "no-repeat",
            keepImg: !1,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: !1,
            disableVideo: !1,
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: !0,
            videoPlayOnlyVisible: !0,
            videoLazyLoading: !0,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null
        };
        var i, n, r, a = o.$item.dataset || {}, l = {}, e = (Object.keys(a).forEach(function(e) {
            var t = e.substr(0, 1).toLowerCase() + e.substr(1);
            t && void 0 !== o.defaults[t] && (l[t] = a[e])
        }),
        o.options = o.extend({}, o.defaults, l, t),
        o.pureOptions = o.extend({}, o.options),
        Object.keys(o.options).forEach(function(e) {
            "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
        }),
        o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))),
        "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)),
        o.options.disableParallax instanceof RegExp && (i = o.options.disableParallax,
        o.options.disableParallax = function() {
            return i.test(u.userAgent)
        }
        ),
        "function" != typeof o.options.disableParallax && (o.options.disableParallax = function() {
            return !1
        }
        ),
        "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)),
        o.options.disableVideo instanceof RegExp && (n = o.options.disableVideo,
        o.options.disableVideo = function() {
            return n.test(u.userAgent)
        }
        ),
        "function" != typeof o.options.disableVideo && (o.options.disableVideo = function() {
            return !1
        }
        ),
        o.options.elementInViewport);
        e && "object" === c(e) && void 0 !== e.length && (t = 1,
        e = (function(e) {
            if (Array.isArray(e))
                return e
        }(r = e) || function(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var o = []
                  , i = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (o.push(a.value),
                    !t || o.length !== t); i = !0)
                        ;
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
                return o
            }
        }(r, t) || function(e, t) {
            var o;
            if (e)
                return "string" == typeof e ? s(e, t) : "Map" === (o = "Object" === (o = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : o) || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(e, t) : void 0
        }(r, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }())[0]),
        e instanceof Element || (e = null),
        o.options.elementInViewport = e,
        o.image = {
            src: o.options.imgSrc || null,
            $container: null,
            useImgTag: !1,
            position: /iPad|iPhone|iPod|Android/.test(u.userAgent) ? "absolute" : "fixed"
        },
        o.initImg() && o.canInitParallax() && o.init()
    }
    v.constructor = b,
    t.default = v
}
]),
!function(o) {
    var i = {};
    function n(e) {
        var t;
        return (i[e] || (t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        },
        o[e].call(t.exports, t, t.exports, n),
        t.l = !0,
        t)).exports
    }
    n.m = o,
    n.c = i,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(o, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 6)
}([, , function(e, t) {
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}
, function(t, e, o) {
    !function(e) {
        e = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
        t.exports = e
    }
    .call(this, o(4))
}
, function(e, t) {
    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    e.exports = i
}
, , function(e, t, o) {
    e.exports = o(7)
}
, function(e, t, o) {
    "use strict";
    o.r(t);
    var t = o(8)
      , i = o(3)
      , n = o.n(i)
      , i = o(2)
      , i = o.n(i)
      , o = o(9);
    n.a.VideoWorker = n.a.VideoWorker || t.default,
    Object(o.default)(),
    i()(function() {
        void 0 !== n.a.jarallax && n.a.jarallax(document.querySelectorAll("[data-jarallax-video]"))
    })
}
, function(e, t, o) {
    "use strict";
    o.r(t),
    o.d(t, "default", function() {
        return y
    });
    var t = o(3)
      , u = o.n(t);
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function n(e, t) {
        for (var o = 0; o < t.length; o++) {
            var i = t[o];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r() {
        this.doneCallbacks = [],
        this.failCallbacks = []
    }
    r.prototype = {
        execute: function(e, t) {
            var o = e.length;
            for (t = Array.prototype.slice.call(t); o; )
                e[--o].apply(null, t)
        },
        resolve: function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                t[o] = arguments[o];
            this.execute(this.doneCallbacks, t)
        },
        reject: function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                t[o] = arguments[o];
            this.execute(this.failCallbacks, t)
        },
        done: function(e) {
            this.doneCallbacks.push(e)
        },
        fail: function(e) {
            this.failCallbacks.push(e)
        }
    };
    var a = 0
      , l = 0
      , s = 0
      , c = 0
      , d = 0
      , p = new r
      , m = new r
      , y = (n(h.prototype, [{
        key: "extend",
        value: function() {
            for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++)
                o[t] = arguments[t];
            var i = o[0] || {};
            return Object.keys(o).forEach(function(t) {
                o[t] && Object.keys(o[t]).forEach(function(e) {
                    i[e] = o[t][e]
                })
            }),
            i
        }
    }, {
        key: "parseURL",
        value: function(e) {
            var t, o, i = !(!(i = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== i[1].length) && i[1], n = !(!(n = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)) || !n[3]) && n[3], e = (e = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),
            t = {},
            o = 0,
            e.forEach(function(e) {
                e = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                e && e[1] && e[2] && (t["ogv" === e[1] ? "ogg" : e[1]] = e[2],
                o = 1)
            }),
            !!o && t);
            return i ? (this.type = "youtube",
            i) : n ? (this.type = "vimeo",
            n) : !!e && (this.type = "local",
            e)
        }
    }, {
        key: "isValid",
        value: function() {
            return !!this.videoID
        }
    }, {
        key: "on",
        value: function(e, t) {
            this.userEventsList = this.userEventsList || [],
            (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
        }
    }, {
        key: "off",
        value: function(o, i) {
            var n = this;
            this.userEventsList && this.userEventsList[o] && (i ? this.userEventsList[o].forEach(function(e, t) {
                e === i && (n.userEventsList[o][t] = !1)
            }) : delete this.userEventsList[o])
        }
    }, {
        key: "fire",
        value: function(e) {
            for (var t = this, o = arguments.length, i = new Array(1 < o ? o - 1 : 0), n = 1; n < o; n++)
                i[n - 1] = arguments[n];
            this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(function(e) {
                e && e.apply(t, i)
            })
        }
    }, {
        key: "play",
        value: function(e) {
            var t = this;
            t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0),
            u.a.YT.PlayerState.PLAYING !== t.player.getPlayerState()) && t.player.playVideo(),
            "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e),
            t.player.getPaused().then(function(e) {
                e && t.player.play()
            })),
            "local" === t.type) && (void 0 !== e && (t.player.currentTime = e),
            t.player.paused) && t.player.play()
        }
    }, {
        key: "pause",
        value: function() {
            var t = this;
            t.player && ("youtube" === t.type && t.player.pauseVideo && u.a.YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(),
            "vimeo" === t.type && t.player.getPaused().then(function(e) {
                e || t.player.pause()
            }),
            "local" === t.type) && !t.player.paused && t.player.pause()
        }
    }, {
        key: "mute",
        value: function() {
            this.player && ("youtube" === this.type && this.player.mute && this.player.mute(),
            "vimeo" === this.type && this.player.setVolume && this.player.setVolume(0),
            "local" === this.type) && (this.$video.muted = !0)
        }
    }, {
        key: "unmute",
        value: function() {
            this.player && ("youtube" === this.type && this.player.mute && this.player.unMute(),
            "vimeo" === this.type && this.player.setVolume && this.player.setVolume(this.options.volume),
            "local" === this.type) && (this.$video.muted = !1)
        }
    }, {
        key: "setVolume",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            this.player && e && ("youtube" === this.type && this.player.setVolume && this.player.setVolume(e),
            "vimeo" === this.type && this.player.setVolume && this.player.setVolume(e),
            "local" === this.type) && (this.$video.volume = e / 100)
        }
    }, {
        key: "getVolume",
        value: function(t) {
            this.player ? ("youtube" === this.type && this.player.getVolume && t(this.player.getVolume()),
            "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function(e) {
                t(e)
            }),
            "local" === this.type && t(100 * this.$video.volume)) : t(!1)
        }
    }, {
        key: "getMuted",
        value: function(t) {
            this.player ? ("youtube" === this.type && this.player.isMuted && t(this.player.isMuted()),
            "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function(e) {
                t(!!e)
            }),
            "local" === this.type && t(this.$video.muted)) : t(null)
        }
    }, {
        key: "getImageURL",
        value: function(t) {
            var e, o, i, n = this;
            n.videoImage ? t(n.videoImage) : ("youtube" === n.type && (e = ["maxresdefault", "sddefault", "hqdefault", "0"],
            o = 0,
            (i = new Image).onload = function() {
                120 !== (this.naturalWidth || this.width) || o === e.length - 1 ? (n.videoImage = "https://img.youtube.com/vi/".concat(n.videoID, "/").concat(e[o], ".jpg"),
                t(n.videoImage)) : (o += 1,
                this.src = "https://img.youtube.com/vi/".concat(n.videoID, "/").concat(e[o], ".jpg"))
            }
            ,
            i.src = "https://img.youtube.com/vi/".concat(n.videoID, "/").concat(e[o], ".jpg")),
            "vimeo" === n.type && ((i = new XMLHttpRequest).open("GET", "https://vimeo.com/api/v2/video/".concat(n.videoID, ".json"), !0),
            i.onreadystatechange = function() {
                var e;
                4 === this.readyState && 200 <= this.status && this.status < 400 && (e = JSON.parse(this.responseText),
                n.videoImage = e[0].thumbnail_large,
                t(n.videoImage))
            }
            ,
            i.send()))
        }
    }, {
        key: "getIframe",
        value: function(e) {
            this.getVideo(e)
        }
    }, {
        key: "getVideo",
        value: function(s) {
            var c = this;
            c.$video ? s(c.$video) : c.onAPIready(function() {
                var e, t, o, i, n, r, a, l;
                c.$video || ((e = document.createElement("div")).style.display = "none"),
                "youtube" === c.type && (c.playerOptions = {
                    host: "https://www.youtube-nocookie.com",
                    videoId: c.videoID,
                    playerVars: {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0,
                        playsinline: 1
                    }
                },
                c.options.showContols || (c.playerOptions.playerVars.iv_load_policy = 3,
                c.playerOptions.playerVars.modestbranding = 1,
                c.playerOptions.playerVars.controls = 0,
                c.playerOptions.playerVars.showinfo = 0,
                c.playerOptions.playerVars.disablekb = 1),
                c.playerOptions.events = {
                    onReady: function(t) {
                        c.options.mute ? t.target.mute() : c.options.volume && t.target.setVolume(c.options.volume),
                        c.options.autoplay && c.play(c.options.startTime),
                        c.fire("ready", t),
                        c.options.loop && !c.options.endTime && (c.options.endTime = c.player.getDuration() - .1),
                        setInterval(function() {
                            c.getVolume(function(e) {
                                c.options.volume !== e && (c.options.volume = e,
                                c.fire("volumechange", t))
                            })
                        }, 150)
                    },
                    onStateChange: function(e) {
                        c.options.loop && e.data === u.a.YT.PlayerState.ENDED && c.play(c.options.startTime),
                        o || e.data !== u.a.YT.PlayerState.PLAYING || (o = 1,
                        c.fire("started", e)),
                        e.data === u.a.YT.PlayerState.PLAYING && c.fire("play", e),
                        e.data === u.a.YT.PlayerState.PAUSED && c.fire("pause", e),
                        e.data === u.a.YT.PlayerState.ENDED && c.fire("ended", e),
                        e.data === u.a.YT.PlayerState.PLAYING ? i = setInterval(function() {
                            c.fire("timeupdate", e),
                            c.options.endTime && c.player.getCurrentTime() >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                        }, 150) : clearInterval(i)
                    },
                    onError: function(e) {
                        c.fire("error", e)
                    }
                },
                (n = !c.$video) && ((r = document.createElement("div")).setAttribute("id", c.playerID),
                e.appendChild(r),
                document.body.appendChild(e)),
                c.player = c.player || new u.a.YT.Player(c.playerID,c.playerOptions),
                n) && (c.$video = document.getElementById(c.playerID),
                c.videoWidth = parseInt(c.$video.getAttribute("width"), 10) || 1280,
                c.videoHeight = parseInt(c.$video.getAttribute("height"), 10) || 720),
                "vimeo" === c.type && (c.playerOptions = {
                    dnt: 1,
                    id: c.videoID,
                    autopause: 0,
                    transparent: 0,
                    autoplay: c.options.autoplay ? 1 : 0,
                    loop: c.options.loop ? 1 : 0,
                    muted: c.options.mute ? 1 : 0
                },
                c.options.volume && (c.playerOptions.volume = c.options.volume),
                c.options.showContols || (c.playerOptions.badge = 0,
                c.playerOptions.byline = 0,
                c.playerOptions.portrait = 0,
                c.playerOptions.title = 0,
                c.playerOptions.background = 1),
                c.$video || (a = "",
                Object.keys(c.playerOptions).forEach(function(e) {
                    "" !== a && (a += "&"),
                    a += "".concat(e, "=").concat(encodeURIComponent(c.playerOptions[e]))
                }),
                c.$video = document.createElement("iframe"),
                c.$video.setAttribute("id", c.playerID),
                c.$video.setAttribute("src", "https://player.vimeo.com/video/".concat(c.videoID, "?").concat(a)),
                c.$video.setAttribute("frameborder", "0"),
                c.$video.setAttribute("mozallowfullscreen", ""),
                c.$video.setAttribute("allowfullscreen", ""),
                e.appendChild(c.$video),
                document.body.appendChild(e)),
                c.player = c.player || new u.a.Vimeo.Player(c.$video,c.playerOptions),
                c.options.startTime && c.options.autoplay && c.player.setCurrentTime(c.options.startTime),
                c.player.getVideoWidth().then(function(e) {
                    c.videoWidth = e || 1280
                }),
                c.player.getVideoHeight().then(function(e) {
                    c.videoHeight = e || 720
                }),
                c.player.on("timeupdate", function(e) {
                    l || (c.fire("started", e),
                    l = 1),
                    c.fire("timeupdate", e),
                    c.options.endTime && c.options.endTime && e.seconds >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                }),
                c.player.on("play", function(e) {
                    c.fire("play", e),
                    c.options.startTime && 0 === e.seconds && c.play(c.options.startTime)
                }),
                c.player.on("pause", function(e) {
                    c.fire("pause", e)
                }),
                c.player.on("ended", function(e) {
                    c.fire("ended", e)
                }),
                c.player.on("loaded", function(e) {
                    c.fire("ready", e)
                }),
                c.player.on("volumechange", function(e) {
                    c.fire("volumechange", e)
                }),
                c.player.on("error", function(e) {
                    c.fire("error", e)
                })),
                "local" === c.type && (c.$video || (c.$video = document.createElement("video"),
                c.options.showContols && (c.$video.controls = !0),
                c.options.mute ? c.$video.muted = !0 : c.$video.volume && (c.$video.volume = c.options.volume / 100),
                c.options.loop && (c.$video.loop = !0),
                c.$video.setAttribute("playsinline", ""),
                c.$video.setAttribute("webkit-playsinline", ""),
                c.$video.setAttribute("id", c.playerID),
                e.appendChild(c.$video),
                document.body.appendChild(e),
                Object.keys(c.videoID).forEach(function(e) {
                    var t, o = c.$video, i = c.videoID[e], e = "video/".concat(e);
                    (t = document.createElement("source")).src = i,
                    t.type = e,
                    o.appendChild(t)
                })),
                c.player = c.player || c.$video,
                c.player.addEventListener("playing", function(e) {
                    t || c.fire("started", e),
                    t = 1
                }),
                c.player.addEventListener("timeupdate", function(e) {
                    c.fire("timeupdate", e),
                    c.options.endTime && c.options.endTime && this.currentTime >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                }),
                c.player.addEventListener("play", function(e) {
                    c.fire("play", e)
                }),
                c.player.addEventListener("pause", function(e) {
                    c.fire("pause", e)
                }),
                c.player.addEventListener("ended", function(e) {
                    c.fire("ended", e)
                }),
                c.player.addEventListener("loadedmetadata", function() {
                    c.videoWidth = this.videoWidth || 1280,
                    c.videoHeight = this.videoHeight || 720,
                    c.fire("ready"),
                    c.options.autoplay && c.play(c.options.startTime)
                }),
                c.player.addEventListener("volumechange", function(e) {
                    c.getVolume(function(e) {
                        c.options.volume = e
                    }),
                    c.fire("volumechange", e)
                }),
                c.player.addEventListener("error", function(e) {
                    c.fire("error", e)
                })),
                s(c.$video)
            })
        }
    }, {
        key: "init",
        value: function() {
            this.playerID = "VideoWorker-".concat(this.ID)
        }
    }, {
        key: "loadAPI",
        value: function() {
            if (!l || !s) {
                var e, t, o = "";
                if ("youtube" !== this.type || l || (l = 1,
                o = "https://www.youtube.com/iframe_api"),
                "vimeo" === this.type && !s) {
                    if (s = 1,
                    void 0 !== u.a.Vimeo)
                        return;
                    o = "https://player.vimeo.com/api/player.js"
                }
                o && (e = document.createElement("script"),
                t = document.getElementsByTagName("head")[0],
                e.src = o,
                t.appendChild(e),
                t = null)
            }
        }
    }, {
        key: "onAPIready",
        value: function(e) {
            var t;
            "youtube" === this.type && (void 0 !== u.a.YT && 0 !== u.a.YT.loaded || c ? "object" === i(u.a.YT) && 1 === u.a.YT.loaded ? e() : p.done(function() {
                e()
            }) : (c = 1,
            window.onYouTubeIframeAPIReady = function() {
                window.onYouTubeIframeAPIReady = null,
                p.resolve("done"),
                e()
            }
            )),
            "vimeo" === this.type && (void 0 !== u.a.Vimeo || d ? void 0 !== u.a.Vimeo ? e() : m.done(function() {
                e()
            }) : (d = 1,
            t = setInterval(function() {
                void 0 !== u.a.Vimeo && (clearInterval(t),
                m.resolve("done"),
                e())
            }, 20))),
            "local" === this.type && e()
        }
    }]),
    h);
    function h(e, t) {
        if (!(this instanceof h))
            throw new TypeError("Cannot call a class as a function");
        this.url = e,
        this.options_default = {
            autoplay: !1,
            loop: !1,
            mute: !1,
            volume: 100,
            showContols: !0,
            startTime: 0,
            endTime: 0
        },
        this.options = this.extend({}, this.options_default, t),
        this.videoID = this.parseURL(e),
        this.videoID && (this.ID = a,
        a += 1,
        this.loadAPI(),
        this.init())
    }
}
, function(e, t, o) {
    "use strict";
    o.r(t),
    o.d(t, "default", function() {
        return i
    });
    var r = o(8)
      , t = o(3)
      , l = o.n(t);
    function i() {
        var e, a, t, n, o, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : l.a.jarallax;
        void 0 !== i && (i = i.constructor,
        e = i.prototype.onScroll,
        i.prototype.onScroll = function() {
            var o = this;
            e.apply(o),
            o.isVideoInserted || !o.video || o.options.videoLazyLoading && !o.isElementInViewport || o.options.disableVideo() || (o.isVideoInserted = !0,
            o.video.getVideo(function(e) {
                var t = e.parentNode;
                o.css(e, {
                    position: o.image.position,
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    maxWidth: "none",
                    maxHeight: "none",
                    pointerEvents: "none",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform,opacity",
                    margin: 0,
                    zIndex: -1
                }),
                o.$video = e,
                "local" === o.video.type && (o.image.src ? o.$video.setAttribute("poster", o.image.src) : o.image.$item && "IMG" === o.image.$item.tagName && o.image.$item.src && o.$video.setAttribute("poster", o.image.$item.src)),
                o.image.$container.appendChild(e),
                t.parentNode.removeChild(t)
            }))
        }
        ,
        a = i.prototype.coverImage,
        i.prototype.coverImage = function() {
            var e, t, o, i, n = a.apply(this), r = !!this.image.$item && this.image.$item.nodeName;
            return n && this.video && r && ("IFRAME" === r || "VIDEO" === r) && (t = (e = n.image.height) * this.image.width / this.image.height,
            o = (n.container.width - t) / 2,
            i = n.image.marginTop,
            n.container.width > t && (e = (t = n.container.width) * this.image.height / this.image.width,
            o = 0,
            i += (n.image.height - e) / 2),
            "IFRAME" === r && (e += 400,
            i -= 200),
            this.css(this.$video, {
                width: "".concat(t, "px"),
                marginLeft: "".concat(o, "px"),
                height: "".concat(e, "px"),
                marginTop: "".concat(i, "px")
            })),
            n
        }
        ,
        t = i.prototype.initImg,
        i.prototype.initImg = function() {
            var e = t.apply(this);
            return this.options.videoSrc || (this.options.videoSrc = this.$item.getAttribute("data-jarallax-video") || null),
            this.options.videoSrc ? (this.defaultInitImgResult = e,
            !0) : e
        }
        ,
        n = i.prototype.canInitParallax,
        i.prototype.canInitParallax = function() {
            var o = this
              , e = n.apply(o);
            if (o.options.videoSrc) {
                var t = new r.default(o.options.videoSrc,{
                    autoplay: !0,
                    loop: o.options.videoLoop,
                    showContols: !1,
                    startTime: o.options.videoStartTime || 0,
                    endTime: o.options.videoEndTime || 0,
                    mute: o.options.videoVolume ? 0 : 1,
                    volume: o.options.videoVolume || 0
                });
                if (t.isValid())
                    if (this.options.disableParallax() && (e = !0,
                    o.image.position = "absolute",
                    o.options.type = "scroll",
                    o.options.speed = 1),
                    e) {
                        if (t.on("ready", function() {
                            var e;
                            o.options.videoPlayOnlyVisible ? (e = o.onScroll,
                            o.onScroll = function() {
                                e.apply(o),
                                o.videoError || !o.options.videoLoop && (o.options.videoLoop || o.videoEnded) || (o.isVisible() ? t.play() : t.pause())
                            }
                            ) : t.play()
                        }),
                        t.on("started", function() {
                            o.image.$default_item = o.image.$item,
                            o.image.$item = o.$video,
                            o.image.width = o.video.videoWidth || 1280,
                            o.image.height = o.video.videoHeight || 720,
                            o.coverImage(),
                            o.clipContainer(),
                            o.onScroll(),
                            o.image.$default_item && (o.image.$default_item.style.opacity = "0",
                            setTimeout(function() {
                                o.image.$default_item.style.display = "none",
                                o.css(o.$video, {
                                    opacity: 1
                                })
                            }, 1e3))
                        }),
                        t.on("ended", function() {
                            o.videoEnded = !0,
                            o.options.videoLoop || i()
                        }),
                        t.on("error", function() {
                            o.videoError = !0,
                            i()
                        }),
                        o.video = t,
                        !o.defaultInitImgResult && (o.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                        "local" !== t.type))
                            return t.getImageURL(function(e) {
                                o.image.bgImage = 'url("'.concat(e, '")'),
                                o.init()
                            }),
                            !1
                    } else
                        o.defaultInitImgResult || t.getImageURL(function(e) {
                            var t = o.$item.getAttribute("style");
                            t && o.$item.setAttribute("data-jarallax-original-styles", t),
                            o.css(o.$item, {
                                "background-image": 'url("'.concat(e, '")'),
                                "background-position": "center",
                                "background-size": "cover"
                            })
                        })
            }
            return e;
            function i() {
                o.image.$default_item && (o.image.$item = o.image.$default_item,
                o.image.$item.style.display = "block",
                o.coverImage(),
                o.clipContainer(),
                o.onScroll())
            }
        }
        ,
        o = i.prototype.destroy,
        i.prototype.destroy = function() {
            this.image.$default_item && (this.image.$item = this.image.$default_item,
            delete this.image.$default_item),
            o.apply(this)
        }
        )
    }
}
]),
function() {
    var v = document.querySelector(".tiles")
      , n = document.querySelector(".cover__background")
      , i = document.querySelector(".cover__image")
      , e = document.querySelector(".overlay-main")
      , g = document.querySelector(".header")
      , t = "MENU" == x() ? document.querySelector(".cover__header .cover-title") : document.querySelector(".cover__body .cover-title")
      , o = document.querySelector(".cover__body .cover__subtitle")
      , r = document.querySelector(".cover__body .cover__subtitle .cover-text")
      , O = document.querySelector(".parallax-container")
      , b = {
        header: {
            el: document.querySelector(".cover__header"),
            priority: 0
        },
        logo: {
            el: document.querySelector(".cover__logo"),
            priority: 1
        },
        title: {
            el: document.querySelector(".cover__title"),
            priority: 2
        },
        menu: {
            el: document.querySelector(".cover__menu"),
            priority: 8
        },
        phone: {
            el: document.querySelector(".cover__phone"),
            priority: 4
        },
        directions: {
            el: document.querySelector(".cover__directions"),
            priority: 5
        },
        hours: {
            el: document.querySelector(".cover__hours"),
            priority: 6
        },
        social: {
            el: document.querySelector(".cover__social"),
            priority: 7
        },
        cart: {
            el: document.querySelector(".cover__cart"),
            priority: 3
        }
    }
      , a = document.documentElement.clientWidth
      , l = document.documentElement.clientHeight
      , s = {
        w: 0,
        h: 0
    }
      , c = {
        w: 0,
        h: 0
    };
    function H() {
        var e, t, o;
        j(),
        n.getAttribute("data-video-src") && jarallax(n),
        null !== i && (e = i.querySelector("." + $() + "Picture")) && "none" !== (e = C(e)) && (e = e,
        t = new Image,
        o = document.body.classList.contains("sw-activated") ? 0 : 600,
        t.onload = function() {
            document.body.classList.remove("loading"),
            setTimeout(function() {
                i.removeChild(i.querySelector(".mobileThumbnail")),
                i.removeChild(i.querySelector(".desktopThumbnail")),
                i.style.backgroundImage = "",
                L()
            }, o)
        }
        ,
        t.src = e)
    }
    function u(e) {
        if (e) {
            if ("transparent" === e.toLowerCase())
                return [0, 0, 0, 0];
            if ("#" === e[0])
                return e.length < 7 && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (4 < e.length ? e[4] + e[4] : "")),
                [parseInt(e.substr(1, 2), 16), parseInt(e.substr(3, 2), 16), parseInt(e.substr(5, 2), 16), 7 < e.length ? parseInt(e.substr(7, 2), 16) / 255 : 1];
            if (-1 === e.indexOf("rgb")) {
                var t = document.body.appendChild(document.createElement("fictum"))
                  , o = "rgb(1, 2, 3)";
                if (t.style.color = o,
                t.style.color !== o)
                    return;
                if (t.style.color = e,
                t.style.color === o || "" === t.style.color)
                    return;
                e = getComputedStyle(t).color,
                document.body.removeChild(t)
            }
            return 0 === e.indexOf("rgb") ? (-1 === e.indexOf("rgba") && (e += ",1"),
            e.match(/[\.\d]+/g).map(function(e) {
                return +e
            })) : void 0
        }
    }
    function d(e) {
        e = u(e);
        return !!(200 < Math.sqrt(e[0] * e[0] * .299 + e[1] * e[1] * .587 + e[2] * e[2] * .114))
    }
    function p(e) {
        (void 0 !== e ? [e] : [".header .cover__menu", ".header .cover-title", ".header .header__item:last-child", ".cover__title h1", ".cover__subtitle h2", ".cover__button", ".cover__body .cover__phone", ".cover__body .cover__social", ".cover__footer .forward"]).forEach(function(e) {
            e = document.querySelectorAll(e);
            [].forEach.call(e, function(e) {
                d("BUTTON" !== e.nodeName ? getComputedStyle(e).color : getComputedStyle(e).backgroundColor) ? e.classList.add("shadow") : e.classList.remove("shadow")
            })
        })
    }
    function w(e, t, o) {
        o ? e.classList.contains(t) || e.classList.add(t) : e.classList.remove(t)
    }
    function m() {
        var e = new RegExp("\\b(header--[\\w\\-]+)","g");
        b.header.el.className = b.header.el.className.replace(e, ""),
        y()
    }
    function S(e) {
        var t = window.getComputedStyle(b[e].el);
        return b[e].el.offsetWidth + parseInt(t.marginLeft) + parseInt(t.marginRight)
    }
    function x() {
        return v.className.match("cover-layout--([\\w]+)")[1].toUpperCase()
    }
    function I(e) {
        var t, o = 0;
        return null !== e && (e = e.querySelector(".content")) && ((t = e.cloneNode(!0)).classList.add("clone"),
        t.setAttribute("style", "display: inline-block !important"),
        e.parentNode.insertBefore(t, e.nextSibling),
        style = getComputedStyle(t),
        o = t.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight),
        t.parentNode.removeChild(t)),
        o
    }
    function A(e) {
        var t, o = 0, e = e.querySelector(".content");
        return e && ((t = e.cloneNode(!0)).classList.add("clone"),
        t.setAttribute("style", "display: block !important;"),
        e.parentNode.insertBefore(t, e.nextSibling),
        e = t.offsetHeight,
        t.setAttribute("style", "display: block !important;position: absolute !important;width: 10000px"),
        o = Math.round(e / t.offsetHeight),
        t.parentNode.removeChild(t)),
        o
    }
    function y() {
        var e = window.getComputedStyle(b.header.el)
          , t = (b.header.width = b.header.el.offsetWidth - parseInt(e.paddingLeft) - parseInt(e.paddingRight),
        x())
          , o = v.className.match("cover-align--([\\w]+)")[1].toUpperCase()
          , i = !("MENU" != t || "CENTER" != o)
          , n = (w(g, "header--hide-icon-text", i),
        document.querySelector(".header__item:nth-child(2)"))
          , r = document.querySelector(".header__item:nth-child(3)")
          , a = !v.classList.contains("cover-logo--hide")
          , l = I(a ? document.querySelector(".header .cover__logo") : document.querySelector(".header .cover__title"))
          , e = window.getComputedStyle(g)
          , e = g.offsetWidth - parseInt(e.paddingLeft) - parseInt(e.paddingRight)
          , s = [".cover__phone", ".cover__directions", ".cover__hours", ".cover__cart", ".cover__social"]
          , c = 0;
        if ("MENU" == t && "CENTER" == o) {
            t = a ? (e - l) / e / 2 * 100 - .5 : Math.floor(.4 * e < l ? 30 : (e - l) / e / 2 * 100) - .5;
            n.style.flexBasis = t + "%",
            r.style.flexBasis = t + "%";
            2 < A(document.querySelector(".cover__menu")) ? g.classList.contains("header--hide-menu") || g.classList.add("header--hide-menu") : g.classList.remove("header--hide-menu");
            for (var u = r.offsetWidth, d = 0; d < s.length; d++) {
                var p = s[d]
                  , m = (c += I(document.querySelector(p)),
                "header--hide-" + p.replace(/(.cover__)/g, ""));
                c < u ? g.classList.remove(m) : g.classList.contains(m) || g.classList.add(m)
            }
        } else {
            n.style.flexBasis = "",
            r.style.flexBasis = "";
            for (d = 1; d < Object.keys(b).length; d++) {
                var y, h, f, p = function(e) {
                    for (var t in b)
                        if (b[t].priority == e)
                            return t;
                    return !1
                }(d);
                (y = b[p].el) && (h = I(y),
                f = A(document.querySelector(".cover__menu")),
                u = b.header.width,
                c += h,
                1 < f && !b.header.el.classList.contains("header--hide-icon-text") && b.header.el.classList.add("header--hide-icon-text"),
                u < c ? "phone" == p || "directions" == p || "hours" == p ? (g.classList.add("header--hide-icon-text"),
                i = !0,
                b.phone.width && (c = (c -= b.phone.width) + S("phone")),
                b.directions.width && (c = (c -= b.directions.width) + S("directions")),
                b.hours.width && (c = (c -= b.hours.width) + S("hours"))) : g.classList.contains("header--hide-icon-text") ? "menu" !== p ? (w(b.header.el, "header--hide-" + p, c > b.header.width),
                c -= I(y)) : (w(b.header.el, "header--hide-" + p, 2 < f),
                2 < f && (c -= I(y))) : (g.classList.add("header--hide-icon-text"),
                i = !0) : "hours" != p || i ? "menu" == p ? w(b.header.el, "header--hide-" + p, 2 < f) : b.header.el.classList.remove("header--hide-" + p) : b.header.el.classList.remove("header--hide-icon-text"))
            }
        }
        g.classList.add("header--show");
        o = !!window.MSInputMethodContext && !!document.documentMode;
        document.querySelector(".cover") && o && /cover-layout--full|cover-layout—left|cover-layout—right/.test(v.className) && (o = document.querySelector(".cover__container"),
        a = document.querySelector(".cover__content"),
        l = document.querySelector(".cover__header"),
        e = document.querySelector(".cover__footer"),
        o.offsetHeight) && (l = Math.round((o.offsetHeight - l.offsetHeight - e.offsetHeight) / o.offsetHeight * 100) + "vh",
        a.style.msGridRows = "minmax(" + l + ", 1fr)")
    }
    function h(e) {
        document.querySelector(".cover");
        if (!(-1 < v.className.indexOf("cover-logo--hide"))) {
            if (void 0 === e) {
                if (!(-1 < v.className.indexOf("cover-layout--menu")))
                    return;
                e = document.querySelector(".cover__header .logo img")
            }
            var t = e.naturalWidth
              , o = e.naturalHeight
              , i = 50
              , n = 75
              , r = 200
              , a = 6;
            -1 < v.className.indexOf("cover-logo--circle") ? (e.parentNode.style.width = o < i && t < r ? i + 2 * a + "px" : n <= o || o < n && r < t ? n + 2 * a + "px" : o + 2 * a + "px",
            e.parentNode.style.height = e.parentNode.style.width,
            e.style.minHeight = "0") : (e.style.minHeight = o < i && t < r ? i + 2 * a + "px" : "0",
            e.parentNode.style.width = "auto",
            e.parentNode.style.height = "auto")
        }
    }
    function f(e) {
        let t = (e = !function(e) {
            let o = !1;
            return e.split(" ").reverse().forEach(function(e, t) {
                t <= 1 && e.includes("</a>") && (o = !0)
            }),
            o
        }(e = e.replace(/\s\s+/g, " ")) ? e.replace(/(\w+\s[^\s]+)$/, "<span>$1</span>") : e).length;
        for (var o = /(\s|^)(([a-zA-Z-_(]{1,2}('|’)*[a-zA-Z-_,;]{0,1}?\s)+)/gi; 0 < t--; )
            e = e.replace(o, function(e, t, o) {
                return t + o.replace(/\s/g, "&#160;")
            });
        return e
    }
    function E(e) {
        e.innerHTML = f(e.innerHTML),
        e.classList.toggle("cover-title--long", 60 < e.innerHTML.length)
    }
    function $() {
        return a > 480 + P() ? "desktop" : "mobile"
    }
    function _() {
        var e = document.querySelectorAll(".tile")
          , e = !e || e[0].classList.contains("tile-cover");
        "FULL" == x() && e ? (k(i.querySelector("." + $() + "Picture")),
        k(i.querySelector("." + $() + "Thumbnail"))) : (i.querySelector("." + $() + "Picture").style.backgroundSize = "",
        i.querySelector("." + $() + "Picture").style.backgroundPosition = "")
    }
    function k(t) {
        var o, i, e;
        t && ((o = !!n.classList.contains("empty")) ? (t.style.backgroundSize = "auto",
        t.style.backgroundRepeat = "repeat",
        t.style.visibility = "visible") : (t.style.backgroundSize = "",
        t.style.backgroundRepeat = ""),
        "mobile" == $() && 0 < c.w && !o ? T(t, c) : "desktop" == $() && 0 < s.w && !o ? T(t, s) : ((i = new Image).onload = function() {
            var e = "naturalHeight"in (e = i) ? {
                w: e.naturalWidth,
                h: e.naturalHeight
            } : {
                w: e.width,
                h: e.height
            };
            "mobile" == $() ? c = e : s = e,
            o || T(t, e)
        }
        ,
        t && "none" !== (e = C(t)) && (i.src = e)))
    }
    function L() {
        s = {
            w: 0,
            h: 0
        },
        c = {
            w: 0,
            h: 0
        }
    }
    function T(e, t) {
        var o, i, n, r, a, l;
        "FULL" !== x() ? (e.style.backgroundSize = "",
        e.style.backgroundPosition = "") : (o = e.offsetWidth,
        i = e.offsetHeight,
        a = r = n = l = 0,
        l = (t = t.w / t.h) < o / i ? (n = P(),
        (i - (a = (r = o) / t)) / 2) : (r = i * t,
        n = P() + (o - (a = i) * t) / 2,
        0),
        e.style.backgroundSize = r + "px " + a + "px",
        e.style.backgroundPosition = n + "px " + l + "px",
        e.style.visibility = "visible")
    }
    function P() {
        return e ? e.offsetLeft : 0
    }
    function C(e) {
        try {
            var t = getComputedStyle(e).backgroundImage;
            return t ? t.match(/url[\("']+(.*?)["'\)]+$/)[1] : "none"
        } catch (e) {
            return console.error(e),
            "none"
        }
    }
    function j() {
        var e = document.documentElement.clientWidth;
        e !== a && (V(),
        a = e),
        "FULL" == x() ? n.style.height = l + "px" : n.style.height = "",
        O.style.height = l + "px"
    }
    function V() {
        var e = .01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", e + "px")
    }
    function q() {
        j(),
        window.sseditmode && _(),
        y()
    }
    this.init = function() {
        var e;
        window.addEventListener("resize", function() {
            var e = document.documentElement.clientWidth
              , t = document.documentElement.clientHeight;
            void 0 !== window.orientation && e == a || (1.8 * (a = e) <= (l = t) && (l = 768),
            q())
        }),
        navigator.userAgent.indexOf("Page Speed") < 0 && (window.sseditmode ? k(i.querySelector("." + $() + "Thumbnail")) : null !== i && (i.style.backgroundImage = i.querySelector("." + $() + "Thumbnail").style.backgroundImage),
        H()),
        t && E(t),
        r && (e = r,
        o.classList.toggle("cover-title--long", 60 < o.innerHTML.length),
        e.innerHTML = f(e.innerHTML)),
        m(),
        document.querySelector(".cover"),
        (e = -1 < v.className.indexOf("cover-layout--menu") ? document.querySelector(".cover__header .logo img") : -1 < v.className.indexOf("cover-layout--half") ? document.querySelector(".cover__body .logo img") : null) && e.addEventListener("load", function() {
            h(this)
        }),
        p(),
        V(),
        q()
    }
    ,
    this.getColor = u,
    this.setShadow = p,
    this.isColorLight = d,
    this.initHeader = m,
    this.updateHeader = y,
    this.updateLogo = h,
    this.getDevice = $,
    this.render = j,
    this.fitBackground = _,
    this.setBGImageSize = T,
    this.clearCacheBGImageSize = L,
    this.formatTypo = f,
    this.formatElement = E
}
);
document.querySelector(".cover") && (cover = new Cover).init();