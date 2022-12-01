/*! modernizr 3.12.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cors-cryptography-cssanimations-cssfilters-displaytable-es5date-es5function-es5object-es5undefined-es6array-es6collections-es6string-fetch-flexbox-json-localstorage-objectfit-promises-resizeobserver-sandbox-svg-svgasimg-svgfilters-urlparser-urlsearchparams !*/
!(function (e, t, n, r) {
    function o(e, t) {
        return typeof e === t;
    }
    function i(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function s() {
        return "function" != typeof n.createElement
            ? n.createElement(arguments[0])
            : O
            ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
            : n.createElement.apply(n, arguments);
    }
    function a() {
        var e = n.body;
        return e || ((e = s(O ? "svg" : "body")), (e.fake = !0)), e;
    }
    function l(e, t, r, o) {
        var i,
            l,
            f,
            d,
            u = "modernizr",
            c = s("div"),
            p = a();
        if (parseInt(r, 10)) for (; r--; ) (f = s("div")), (f.id = o ? o[r] : u + (r + 1)), c.appendChild(f);
        return (
            (i = s("style")),
            (i.type = "text/css"),
            (i.id = "s" + u),
            (p.fake ? p : c).appendChild(i),
            p.appendChild(c),
            i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(n.createTextNode(e)),
            (c.id = u),
            p.fake &&
                ((p.style.background = ""),
                (p.style.overflow = "hidden"),
                (d = x.style.overflow),
                (x.style.overflow = "hidden"),
                x.appendChild(p)),
            (l = t(c, e)),
            p.fake && p.parentNode
                ? (p.parentNode.removeChild(p), (x.style.overflow = d), x.offsetHeight)
                : c.parentNode.removeChild(c),
            !!l
        );
    }
    function f(e) {
        return e
            .replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function d(e, n, r) {
        var o;
        if ("getComputedStyle" in t) {
            o = getComputedStyle.call(t, e, n);
            var i = t.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else o = !n && e.currentStyle && e.currentStyle[r];
        return o;
    }
    function u(e, n) {
        var o = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; o--; ) if (t.CSS.supports(f(e[o]), n)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in t) {
            for (var i = []; o--; ) i.push("(" + f(e[o]) + ":" + n + ")");
            return (
                (i = i.join(" or ")),
                l("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" === d(e, null, "position");
                })
            );
        }
        return r;
    }
    function c(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function (e, t, n) {
                return t + n.toUpperCase();
            })
            .replace(/^-/, "");
    }
    function p(e, t, n, a) {
        function l() {
            d && (delete P.style, delete P.modElem);
        }
        if (((a = !o(a, "undefined") && a), !o(n, "undefined"))) {
            var f = u(e, n);
            if (!o(f, "undefined")) return f;
        }
        for (var d, p, y, m, v, g = ["modernizr", "tspan", "samp"]; !P.style && g.length; )
            (d = !0), (P.modElem = s(g.shift())), (P.style = P.modElem.style);
        for (y = e.length, p = 0; p < y; p++)
            if (((m = e[p]), (v = P.style[m]), i(m, "-") && (m = c(m)), P.style[m] !== r)) {
                if (a || o(n, "undefined")) return l(), "pfx" !== t || m;
                try {
                    P.style[m] = n;
                } catch (e) {}
                if (P.style[m] !== v) return l(), "pfx" !== t || m;
            }
        return l(), !1;
    }
    function y(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }
    function m(e, t, n) {
        var r;
        for (var i in e) if (e[i] in t) return !1 === n ? e[i] : ((r = t[e[i]]), o(r, "function") ? y(r, n || t) : r);
        return !1;
    }
    function v(e, t, n, r, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + _.join(s + " ") + s).split(" ");
        return o(t, "string") || o(t, "undefined")
            ? p(a, t, r, i)
            : ((a = (e + " " + E.join(s + " ") + s).split(" ")), m(a, t, n));
    }
    function g(e, t, n) {
        return v(e, r, r, t, n);
    }
    function h(e) {
        var t = x.className,
            n = Modernizr._config.classPrefix || "";
        if ((O && (t = t.baseVal), Modernizr._config.enableJSClass)) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2");
        }
        Modernizr._config.enableClasses &&
            (e.length > 0 && (t += " " + n + e.join(" " + n)), O ? (x.className.baseVal = t) : (x.className = t));
    }
    function S(e, t) {
        if ("object" == typeof e) for (var n in e) k(e, n) && S(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                o = Modernizr[r[0]];
            if ((2 === r.length && (o = o[r[1]]), void 0 !== o)) return Modernizr;
            (t = "function" == typeof t ? t() : t),
                1 === r.length
                    ? (Modernizr[r[0]] = t)
                    : (!Modernizr[r[0]] ||
                          Modernizr[r[0]] instanceof Boolean ||
                          (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                      (Modernizr[r[0]][r[1]] = t)),
                h([(t && !1 !== t ? "" : "no-") + r.join("-")]),
                Modernizr._trigger(e, t);
        }
        return Modernizr;
    }
    var b = [],
        w = {
            _version: "3.12.0",
            _config: { classPrefix: "", enableClasses: !1, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e]);
                }, 0);
            },
            addTest: function (e, t, n) {
                b.push({ name: e, fn: t, options: n });
            },
            addAsyncTest: function (e) {
                b.push({ name: null, fn: e });
            },
        },
        Modernizr = function () {};
    (Modernizr.prototype = w), (Modernizr = new Modernizr());
    var T = [],
        C = "Moz O ms Webkit",
        _ = w._config.usePrefixes ? C.split(" ") : [];
    w._cssomPrefixes = _;
    var x = n.documentElement,
        O = "svg" === x.nodeName.toLowerCase(),
        j = { elem: s("modernizr") };
    Modernizr._q.push(function () {
        delete j.elem;
    });
    var P = { style: j.elem.style };
    Modernizr._q.unshift(function () {
        delete P.style;
    });
    var E = w._config.usePrefixes ? C.toLowerCase().split(" ") : [];
    (w._domPrefixes = E),
        (w.testAllProps = v),
        (w.testAllProps = g),
        Modernizr.addTest("cssanimations", g("animationName", "a", !0)),
        (w.testStyles = l)(
            "#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",
            function (e) {
                var t,
                    n = e.childNodes;
                (t = n[0].offsetLeft < n[1].offsetLeft),
                    Modernizr.addTest("displaytable", t, { aliases: ["display-table"] });
            },
            2,
        );
    var z = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = z;
    var A = "CSS" in t && "supports" in t.CSS,
        N = "supportsCSS" in t;
    Modernizr.addTest("supports", A || N),
        Modernizr.addTest("cssfilters", function () {
            if (Modernizr.supports) return g("filter", "blur(2px)");
            var e = s("a");
            return (
                (e.style.cssText = z.join("filter:blur(2px); ")),
                !!e.style.length && (n.documentMode === r || n.documentMode > 9)
            );
        }),
        Modernizr.addTest("flexbox", g("flexBasis", "1px", !0));
    var R = function (e) {
        var n,
            o = z.length,
            i = t.CSSRule;
        if (void 0 === i) return r;
        if (!e) return !1;
        if (((e = e.replace(/^@/, "")), (n = e.replace(/-/g, "_").toUpperCase() + "_RULE") in i)) return "@" + e;
        for (var s = 0; s < o; s++) {
            var a = z[s];
            if (a.toUpperCase() + "_" + n in i) return "@-" + a.toLowerCase() + "-" + e;
        }
        return !1;
    };
    w.atRule = R;
    var L = (w.prefixed = function (e, t, n) {
        return 0 === e.indexOf("@") ? R(e) : (-1 !== e.indexOf("-") && (e = c(e)), t ? v(e, t, n) : v(e, "pfx"));
    });
    Modernizr.addTest("objectfit", !!L("objectFit"), { aliases: ["object-fit"] }),
        Modernizr.addTest("es5date", function () {
            var e = !1;
            try {
                e = !!Date.parse("2013-04-12T06:06:37.307Z");
            } catch (e) {}
            return !!(Date.now && Date.prototype && Date.prototype.toISOString && Date.prototype.toJSON && e);
        }),
        Modernizr.addTest("es5function", function () {
            return !(!Function.prototype || !Function.prototype.bind);
        }),
        Modernizr.addTest("es5object", function () {
            return !!(
                Object.keys &&
                Object.create &&
                Object.getPrototypeOf &&
                Object.getOwnPropertyNames &&
                Object.isSealed &&
                Object.isFrozen &&
                Object.isExtensible &&
                Object.getOwnPropertyDescriptor &&
                Object.defineProperty &&
                Object.defineProperties &&
                Object.seal &&
                Object.freeze &&
                Object.preventExtensions
            );
        }),
        Modernizr.addTest("es5undefined", function () {
            var e, n;
            try {
                (n = t.undefined), (t.undefined = 12345), (e = void 0 === t.undefined), (t.undefined = n);
            } catch (e) {
                return !1;
            }
            return e;
        }),
        Modernizr.addTest(
            "es6array",
            !!(
                Array.prototype &&
                Array.prototype.copyWithin &&
                Array.prototype.fill &&
                Array.prototype.find &&
                Array.prototype.findIndex &&
                Array.prototype.keys &&
                Array.prototype.entries &&
                Array.prototype.values &&
                Array.from &&
                Array.of
            ),
        ),
        Modernizr.addTest("es6collections", !!(t.Map && t.Set && t.WeakMap && t.WeakSet)),
        Modernizr.addTest("promises", function () {
            return (
                "Promise" in t &&
                "resolve" in t.Promise &&
                "reject" in t.Promise &&
                "all" in t.Promise &&
                "race" in t.Promise &&
                (function () {
                    var e;
                    return (
                        new t.Promise(function (t) {
                            e = t;
                        }),
                        "function" == typeof e
                    );
                })()
            );
        }),
        Modernizr.addTest(
            "es6string",
            !!(
                String.fromCodePoint &&
                String.raw &&
                String.prototype.codePointAt &&
                String.prototype.repeat &&
                String.prototype.startsWith &&
                String.prototype.endsWith &&
                String.prototype.includes
            ),
        ),
        Modernizr.addTest(
            "svg",
            !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        );
    var k;
    !(function () {
        var e = {}.hasOwnProperty;
        k =
            o(e, "undefined") || o(e.call, "undefined")
                ? function (e, t) {
                      return t in e && o(e.constructor.prototype[t], "undefined");
                  }
                : function (t, n) {
                      return e.call(t, n);
                  };
    })(),
        (w._l = {}),
        (w.on = function (e, t) {
            this._l[e] || (this._l[e] = []),
                this._l[e].push(t),
                Modernizr.hasOwnProperty(e) &&
                    setTimeout(function () {
                        Modernizr._trigger(e, Modernizr[e]);
                    }, 0);
        }),
        (w._trigger = function (e, t) {
            if (this._l[e]) {
                var n = this._l[e];
                setTimeout(function () {
                    var e;
                    for (e = 0; e < n.length; e++) (0, n[e])(t);
                }, 0),
                    delete this._l[e];
            }
        }),
        Modernizr._q.push(function () {
            w.addTest = S;
        }),
        Modernizr.addTest("svgasimg", n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")),
        Modernizr.addTest("svgfilters", function () {
            var e = !1;
            try {
                e = "SVGFEColorMatrixElement" in t && 2 === SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
            } catch (e) {}
            return e;
        }),
        Modernizr.addTest("urlparser", function () {
            var e;
            try {
                return (e = new URL("http://modernizr.com/")), "http://modernizr.com/" === e.href;
            } catch (e) {
                return !1;
            }
        }),
        Modernizr.addTest("urlsearchparams", "URLSearchParams" in t),
        Modernizr.addTest("cors", "XMLHttpRequest" in t && "withCredentials" in new XMLHttpRequest());
    var M = L("crypto", t);
    Modernizr.addTest("crypto", !!L("subtle", M)),
        Modernizr.addTest("sandbox", "sandbox" in s("iframe")),
        Modernizr.addTest("json", "JSON" in t && "parse" in JSON && "stringify" in JSON),
        Modernizr.addTest("fetch", "fetch" in t),
        Modernizr.addTest("localstorage", function () {
            var e = "modernizr";
            try {
                return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
            } catch (e) {
                return !1;
            }
        }),
        Modernizr.addTest("resizeobserver", "ResizeObserver" in t),
        (function () {
            var e, t, n, r, i, s, a;
            for (var l in b)
                if (b.hasOwnProperty(l)) {
                    if (
                        ((e = []),
                        (t = b[l]),
                        t.name &&
                            (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    )
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (r = o(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)
                        (s = e[i]),
                            (a = s.split(".")),
                            1 === a.length
                                ? (Modernizr[a[0]] = r)
                                : ((Modernizr[a[0]] && (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean)) ||
                                      (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                                  (Modernizr[a[0]][a[1]] = r)),
                            T.push((r ? "" : "no-") + a.join("-"));
                }
        })(),
        delete w.addTest,
        delete w.addAsyncTest;
    for (var V = 0; V < Modernizr._q.length; V++) Modernizr._q[V]();
    e.Modernizr = Modernizr;
})(window, window, document);
