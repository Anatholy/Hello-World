(self.AMP = self.AMP || []).push({
    n: "amp-sidebar",
    v: "1498157073711",
    f: (function(AMP) {
        function f(a, b) {
            function d() {}
            d.prototype = b.prototype;
            a.prototype = new d;
            a.prototype.constructor = a;
            for (var c in b)
                if (Object.defineProperties) {
                    var g = Object.getOwnPropertyDescriptor(b, c);
                    g && Object.defineProperty(a, c, g)
                } else a[c] = b[c]
        };
        Date.now();
        self.log = self.log || {
            user: null,
            dev: null
        };
        var h, k;

        function l(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        };

        function n(a, b) {
            a = a.__AMP_TOP || a;
            return p(a, b)
        }

        function q(a) {
            a = t(a);
            a = t(a);
            a = a.isSingleDoc() ? a.win : a;
            return p(a, "history")
        }

        function t(a) {
            return a.nodeType ? n((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function p(a, b) {
            var d = a.services;
            d || (d = a.services = {});
            var c = d;
            a = c[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        };

        function u(a, b) {
            for (var d, c = a; c && c !== d; c = c.parentElement)
                if (b(c)) return c;
            return null
        }

        function v(a) {
            var b = "A";
            if (a.closest) return a.closest(b);
            b = b.toUpperCase();
            return u(a, function(a) {
                return a.tagName == b
            })
        };
        var w, x = "Webkit webkit Moz moz ms O o".split(" ");

        function y(a, b) {
            var d = void 0;
            if (2 > b.length ? 0 : 0 == b.lastIndexOf("--", 0)) return b;
            w || (w = Object.create(null));
            var c = w[b];
            if (!c || d) {
                c = b;
                if (void 0 === a[b]) {
                    var g = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (var r = 0; r < x.length; r++) {
                            var e = x[r] + g;
                            if (void 0 !== a[e]) {
                                g = e;
                                break a
                            }
                        }
                        g = ""
                    }
                    var m = g;
                    void 0 !== a[m] && (c = m)
                }
                d || (w[b] = c)
            }
            return c
        }

        function z(a, b, d) {
            var c;
            (b = y(a.style, b)) && (a.style[b] = c ? d + c : d)
        }

        function A(a, b) {
            if (void 0 === b) {
                var d;
                d = (d = y(a.style, "display")) ? a.style[d] : void 0;
                b = "none" == d
            }
            z(a, "display", b ? "" : "none")
        };

        function B(a) {
            AMP.BaseElement.call(this, a);
            this.l = null;
            this.m = n(this.win, "vsync");
            this.f = null;
            this.c = this.win.document;
            this.s = this.c.documentElement;
            this.g = null;
            var b = n(this.win, "platform");
            this.u = b.isIos() && b.isSafari();
            this.h = -1;
            this.o = !1;
            this.j = n(this.win, "timer");
            this.b = null
        }
        f(B, AMP.BaseElement);
        B.prototype.isLayoutSupported = function(a) {
            return "nodisplay" == a
        };
        B.prototype.buildCallback = function() {
            var a = this;
            this.g = this.element.getAttribute("side");
            this.l = this.getViewport();
            this.l.addToFixedLayer(this.element, !0);
            if ("left" != this.g && "right" != this.g) {
                var b = this.c.body.getAttribute("dir") || this.s.getAttribute("dir") || "ltr";
                this.g = "rtl" == b ? "right" : "left";
                this.element.setAttribute("side", this.g)
            }
            this.u && C(this);
            D(this) ? this.i() : this.element.setAttribute("aria-hidden", "true");
            this.element.hasAttribute("role") || this.element.setAttribute("role", "menu");
            this.element.tabIndex = -1;
            this.s.addEventListener("keydown", function(b) {
                27 == b.keyCode && a.a()
            });
            var d = this.c.createElement("button");
            d.textContent = "Close the sidebar";
            d.classList.add("i-amphtml-screen-reader");
            d.tabIndex = -1;
            d.addEventListener("click", function() {
                a.a()
            });
            this.element.appendChild(d);
            this.registerAction("toggle", this.v.bind(this));
            this.registerAction("open", this.i.bind(this));
            this.registerAction("close", this.a.bind(this));
            this.element.addEventListener("click", function(b) {
                if ((b = v(b.target)) && b.href) {
                    var d;
                    d =
                        b.href;
                    h || (h = self.document.createElement("a"), k = self.UrlCache || (self.UrlCache = Object.create(null)));
                    var c = k[d];
                    if (c) d = c;
                    else {
                        c = h;
                        c.href = d;
                        c.protocol || (c.href = c.href);
                        var e = {
                            href: c.href,
                            protocol: c.protocol,
                            host: c.host,
                            hostname: c.hostname,
                            port: "0" == c.port ? "" : c.port,
                            pathname: c.pathname,
                            search: c.search,
                            hash: c.hash,
                            origin: null
                        };
                        "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname);
                        if ("http:" == e.protocol && 80 == e.port || "https:" == e.protocol && 443 == e.port) e.port = "", e.host = e.hostname;
                        e.origin = c.origin && "null" != c.origin ?
                            c.origin : "data:" != e.protocol && e.host ? e.protocol + "//" + e.host : e.href;
                        d = k[d] = e
                    }
                    var m = d,
                        E = a.getAmpDoc().win.location.href;
                    l(b.href) == l(E) && m.hash && a.a()
                }
            }, !0)
        };

        function D(a) {
            return a.element.hasAttribute("open")
        }
        B.prototype.activate = function() {
            this.i()
        };
        B.prototype.v = function() {
            D(this) ? this.a() : this.i()
        };
        B.prototype.i = function() {
            var a = this;
            D(this) || (this.l.enterOverlayMode(), this.m.mutate(function() {
                A(a.element, !0);
                F(a);
                a.u && G(a);
                a.element.scrollTop = 1;
                a.m.mutate(function() {
                    a.element.setAttribute("open", "");
                    a.element.setAttribute("aria-hidden", "false");
                    a.b && a.j.cancel(a.b);
                    a.b = a.j.delay(function() {
                        var b = a.getRealChildren();
                        a.scheduleLayout(b);
                        a.scheduleResume(b);
                        try {
                            a.element.focus()
                        } catch (d) {}
                    }, 550)
                })
            }), q(this.getAmpDoc()).push(this.a.bind(this)).then(function(b) {
                a.h = b
            }))
        };
        B.prototype.a = function() {
            var a = this;
            D(this) && (this.l.leaveOverlayMode(), this.m.mutate(function() {
                a.f && A(a.f, !1);
                a.element.removeAttribute("open");
                a.element.setAttribute("aria-hidden", "true");
                a.b && a.j.cancel(a.b);
                a.b = a.j.delay(function() {
                    D(a) || a.m.mutate(function() {
                        A(a.element, !1);
                        a.schedulePause(a.getRealChildren())
                    })
                }, 550)
            }), -1 != this.h && (q(this.getAmpDoc()).pop(this.h), this.h = -1))
        };

        function F(a) {
            if (!a.f) {
                var b = a.c.createElement("div");
                b.classList.add("i-amphtml-sidebar-mask");
                b.addEventListener("click", function() {
                    a.a()
                });
                a.element.ownerDocument.body.appendChild(b);
                b.addEventListener("touchmove", function(a) {
                    a.preventDefault()
                });
                a.f = b
            }
            A(a.f, !0)
        }

        function C(a) {
            a.element.addEventListener("scroll", function(b) {
                D(a) && (1 > a.element.scrollTop ? (a.element.scrollTop = 1, b.preventDefault()) : a.element.scrollHeight == a.element.scrollTop + a.element.offsetHeight && (--a.element.scrollTop, b.preventDefault()))
            })
        }

        function G(a) {
            if (!a.o) {
                var b = a.c.createElement("div"),
                    d = {
                        height: "10vh",
                        width: "100%",
                        "background-color": "transparent"
                    },
                    c;
                for (c in d) z(b, c, d[c]);
                a.element.appendChild(b);
                a.o = !0
            }
        }(function(a) {
            a.registerElement("amp-sidebar", B, "amp-sidebar{position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw!important;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;-webkit-transform:translateX(-100%)!important;transform:translateX(-100%)!important}amp-sidebar[side=right]{right:0!important;-webkit-transform:translateX(100%)!important;transform:translateX(100%)!important}amp-sidebar[side][open]{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}amp-sidebar[side]{-webkit-transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1);transition:transform 233ms cubic-bezier(0,0,.21,1),-webkit-transform 233ms cubic-bezier(0,0,.21,1)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;opacity:0.2;background-image:none!important;background-color:#000;z-index:2147483646}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")
        })(self.AMP);
    })
});
//# sourceMappingURL=amp-sidebar-0.1.js.map
