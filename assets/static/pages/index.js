(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    "/6c9": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.YouTube = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(r), !0).forEach((function(t) {
                    h(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function f(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function p(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? y(e) : t
        }
        function y(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function d() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function b(e) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function m(e, t) {
            return (m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function h(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function v(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var r = []
                  , n = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (l) {
                    o = !0,
                    a = l
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return r
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return g(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return g(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var w = "YT"
          , O = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/
          , P = /list=([a-zA-Z0-9_-]+)/;
        function j(e) {
            return P.test(e) ? {
                listType: "playlist",
                list: v(e.match(P), 2)[1]
            } : {}
        }
        var k = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && m(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = b(t);
                if (d()) {
                    var n = b(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return p(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return h(y(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                h(y(e), "onStateChange", (function(t) {
                    var r = t.data
                      , n = e.props
                      , o = n.onPlay
                      , a = n.onPause
                      , i = n.onBuffer
                      , u = n.onBufferEnd
                      , l = n.onEnded
                      , c = n.onReady
                      , s = n.loop
                      , f = window[w].PlayerState
                      , p = f.PLAYING
                      , y = f.PAUSED
                      , d = f.BUFFERING
                      , b = f.ENDED
                      , m = f.CUED;
                    if (r === p && (o(),
                    u()),
                    r === y && a(),
                    r === d && i(),
                    r === b) {
                        var h = !!e.callPlayer("getPlaylist");
                        s && !h && e.play(),
                        l()
                    }
                    r === m && c()
                }
                )),
                h(y(e), "mute", (function() {
                    e.callPlayer("mute")
                }
                )),
                h(y(e), "unmute", (function() {
                    e.callPlayer("unMute")
                }
                )),
                h(y(e), "ref", (function(t) {
                    e.container = t
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "load",
                value: function(e, t) {
                    var r = this
                      , n = this.props
                      , o = n.playing
                      , i = n.muted
                      , u = n.playsinline
                      , l = n.controls
                      , c = n.loop
                      , f = n.config
                      , p = n.onError
                      , y = f.youtube
                      , d = y.playerVars
                      , b = y.embedOptions
                      , m = e && e.match(O)[1];
                    if (t)
                        return P.test(e) ? void this.player.loadPlaylist(j(e)) : void this.player.cueVideoById({
                            videoId: m,
                            startSeconds: (0,
                            a.parseStartTime)(e) || d.start,
                            endSeconds: (0,
                            a.parseEndTime)(e) || d.end
                        });
                    (0,
                    a.getSDK)("https://www.youtube.com/iframe_api", w, "onYouTubeIframeAPIReady", (function(e) {
                        return e.loaded
                    }
                    )).then((function(t) {
                        r.container && (r.player = new t.Player(r.container,s({
                            width: "100%",
                            height: "100%",
                            videoId: m,
                            playerVars: s({
                                autoplay: o ? 1 : 0,
                                mute: i ? 1 : 0,
                                controls: l ? 1 : 0,
                                start: (0,
                                a.parseStartTime)(e),
                                end: (0,
                                a.parseEndTime)(e),
                                origin: window.location.origin,
                                playsinline: u
                            }, j(e), {}, d),
                            events: {
                                onReady: function() {
                                    c && r.player.setLoop(!0),
                                    r.props.onReady()
                                },
                                onStateChange: r.onStateChange,
                                onError: function(e) {
                                    return p(e.data)
                                }
                            }
                        }, b)))
                    }
                    ), p)
                }
            }, {
                key: "play",
                value: function() {
                    this.callPlayer("playVideo")
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pauseVideo")
                }
            }, {
                key: "stop",
                value: function() {
                    document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo")
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("seekTo", e),
                    this.props.playing || this.pause()
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.callPlayer("setVolume", 100 * e)
                }
            }, {
                key: "setPlaybackRate",
                value: function(e) {
                    this.callPlayer("setPlaybackRate", e)
                }
            }, {
                key: "setLoop",
                value: function(e) {
                    this.callPlayer("setLoop", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.callPlayer("getDuration")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.callPlayer("getCurrentTime")
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return this.callPlayer("getVideoLoadedFraction") * this.getDuration()
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                        width: "100%",
                        height: "100%",
                        display: this.props.display
                    };
                    return o.default.createElement("div", {
                        style: e
                    }, o.default.createElement("div", {
                        ref: this.ref
                    }))
                }
            }]) && f(r.prototype, n),
            i && f(r, i),
            l
        }(o.Component);
        t.YouTube = k,
        h(k, "displayName", "YouTube"),
        h(k, "canPlay", (function(e) {
            return O.test(e)
        }
        ));
        var S = (0,
        i.default)(k);
        t.default = S
    },
    "08Bn": function(e, t, r) {
        "use strict";
        var n = r("wTIg");
        r("qKvR");
        var o = {
            name: "bbwnde",
            styles: "left:50%;margin-left:-50px;"
        }
          , a = Object(n.a)("p", {
            target: "escgod10"
        })("position:relative;text-align:", (function(e) {
            return e.center ? "center" : "left"
        }
        ), ";color:#2880ce;font-weight:bold;&::before{content:' ';position:absolute;bottom:-0.5em;left:0;width:100px;min-height:0;border:0;height:2px;background-color:#ffd629;border-radius:2px 2px 0 0;", (function(e) {
            return e.center && o
        }
        ), ";}");
        t.a = a
    },
    "5Cgt": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Mixcloud = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function f(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? p(e) : t
        }
        function p(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function y() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e, t) {
            return (b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function m(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var h = /mixcloud\.com\/([^/]+\/[^/]+)/
          , v = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && b(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = d(t);
                if (y()) {
                    var n = d(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return f(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return m(p(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                m(p(e), "duration", null),
                m(p(e), "currentTime", null),
                m(p(e), "secondsLoaded", null),
                m(p(e), "mute", (function() {}
                )),
                m(p(e), "unmute", (function() {}
                )),
                m(p(e), "ref", (function(t) {
                    e.iframe = t
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "load",
                value: function(e) {
                    var t = this;
                    (0,
                    a.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then((function(e) {
                        t.player = e.PlayerWidget(t.iframe),
                        t.player.ready.then((function() {
                            t.player.events.play.on(t.props.onPlay),
                            t.player.events.pause.on(t.props.onPause),
                            t.player.events.ended.on(t.props.onEnded),
                            t.player.events.error.on(t.props.error),
                            t.player.events.progress.on((function(e, r) {
                                t.currentTime = e,
                                t.duration = r
                            }
                            )),
                            t.props.onReady()
                        }
                        ))
                    }
                    ), this.props.onError)
                }
            }, {
                key: "play",
                value: function() {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("seek", e)
                }
            }, {
                key: "setVolume",
                value: function(e) {}
            }, {
                key: "getDuration",
                value: function() {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.url
                      , r = e.config
                      , n = t.match(h)[1]
                      , i = (0,
                    a.queryString)(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(r), !0).forEach((function(t) {
                                m(e, t, r[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }
                            ))
                        }
                        return e
                    }({}, r.mixcloud.options, {
                        feed: "/".concat(n, "/")
                    }));
                    return o.default.createElement("iframe", {
                        key: n,
                        ref: this.ref,
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        src: "https://www.mixcloud.com/widget/iframe/?".concat(i),
                        frameBorder: "0"
                    })
                }
            }]) && s(r.prototype, n),
            i && s(r, i),
            l
        }(o.Component);
        t.Mixcloud = v,
        m(v, "displayName", "Mixcloud"),
        m(v, "canPlay", (function(e) {
            return h.test(e)
        }
        )),
        m(v, "loopOnEnded", !0);
        var g = (0,
        i.default)(v);
        t.default = g
    },
    "6tYh": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "FilePlayer", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }),
        Object.defineProperty(t, "YouTube", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }),
        Object.defineProperty(t, "SoundCloud", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(t, "Vimeo", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }),
        Object.defineProperty(t, "Facebook", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }),
        Object.defineProperty(t, "Streamable", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }),
        Object.defineProperty(t, "Wistia", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }),
        Object.defineProperty(t, "Twitch", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }),
        Object.defineProperty(t, "DailyMotion", {
            enumerable: !0,
            get: function() {
                return v.default
            }
        }),
        Object.defineProperty(t, "Mixcloud", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }),
        t.default = void 0;
        var n = P(r("q1tI"))
          , o = r("QXAm")
          , a = r("tbWI")
          , i = w(r("zuFh"))
          , u = w(r("q+qS"))
          , l = w(r("fflM"))
          , c = P(r("bq/u"))
          , s = w(r("fn3U"))
          , f = w(r("/6c9"))
          , p = w(r("xkkJ"))
          , y = w(r("LLoX"))
          , d = w(r("f77o"))
          , b = w(r("GdC5"))
          , m = w(r("W4/P"))
          , h = w(r("bA2t"))
          , v = w(r("Rom6"))
          , g = w(r("5Cgt"));
        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function O() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return O = function() {
                return e
            }
            ,
            e
        }
        function P(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== j(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = O();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            t && t.set(e, r),
            r
        }
        function j(e) {
            return (j = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function k(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(r), !0).forEach((function(t) {
                    L(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function E() {
            return (E = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function _(e) {
            return function(e) {
                if (Array.isArray(e))
                    return x(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return x(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return x(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function x(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function D(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function R(e, t) {
            return !t || "object" !== j(t) && "function" !== typeof t ? T(e) : t
        }
        function T(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function I() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function A(e) {
            return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function M(e, t) {
            return (M = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function L(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var C = Object.keys(o.propTypes)
          , N = []
          , V = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && M(e, t)
            }(d, e);
            var t, r, f, p, y = (t = d,
            function() {
                var e, r = A(t);
                if (I()) {
                    var n = A(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return R(this, e)
            }
            );
            function d() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, d);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return L(T(e = y.call.apply(y, [this].concat(r))), "config", (0,
                a.getConfig)(e.props, o.defaultProps, !0)),
                L(T(e), "state", {
                    showPreview: !!e.props.light
                }),
                L(T(e), "handleClickPreview", (function() {
                    e.setState({
                        showPreview: !1
                    })
                }
                )),
                L(T(e), "showPreview", (function() {
                    e.setState({
                        showPreview: !0
                    })
                }
                )),
                L(T(e), "getDuration", (function() {
                    return e.player ? e.player.getDuration() : null
                }
                )),
                L(T(e), "getCurrentTime", (function() {
                    return e.player ? e.player.getCurrentTime() : null
                }
                )),
                L(T(e), "getSecondsLoaded", (function() {
                    return e.player ? e.player.getSecondsLoaded() : null
                }
                )),
                L(T(e), "getInternalPlayer", (function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                    return e.player ? e.player.getInternalPlayer(t) : null
                }
                )),
                L(T(e), "seekTo", (function(t, r) {
                    if (!e.player)
                        return null;
                    e.player.seekTo(t, r)
                }
                )),
                L(T(e), "handleReady", (function() {
                    e.props.onReady(T(e))
                }
                )),
                L(T(e), "wrapperRef", (function(t) {
                    e.wrapper = t
                }
                )),
                L(T(e), "activePlayerRef", (function(t) {
                    e.player = t
                }
                )),
                e
            }
            return r = d,
            (f = [{
                key: "componentDidMount",
                value: function() {
                    this.props.progressFrequency && console.warn("ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead", "font-weight: bold", "", "font-weight: bold", "")
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return !(0,
                    a.isEqual)(this.props, e) || !(0,
                    a.isEqual)(this.state, t)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.light;
                    this.config = (0,
                    a.getConfig)(this.props, o.defaultProps),
                    !e.light && t && this.setState({
                        showPreview: !0
                    }),
                    e.light && !t && this.setState({
                        showPreview: !1
                    })
                }
            }, {
                key: "getActivePlayer",
                value: function(e) {
                    for (var t = 0, r = [].concat(_(N), _(i.default)); t < r.length; t++) {
                        var n = r[t];
                        if (n.canPlay(e))
                            return n
                    }
                    return c.FilePlayer
                }
            }, {
                key: "renderActivePlayer",
                value: function(e, t) {
                    return e ? n.default.createElement(u.default, E({}, this.props, {
                        key: t.displayName,
                        ref: this.activePlayerRef,
                        config: this.config,
                        activePlayer: t,
                        onReady: this.handleReady
                    })) : null
                }
            }, {
                key: "sortPlayers",
                value: function(e, t) {
                    return e && t ? e.key < t.key ? -1 : 1 : 0
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.url
                      , r = e.controls
                      , i = e.style
                      , u = e.width
                      , c = e.height
                      , f = e.light
                      , p = e.playIcon
                      , y = e.wrapper
                      , d = this.state.showPreview && t
                      , b = (0,
                    a.omit)(this.props, C, o.DEPRECATED_CONFIG_PROPS)
                      , m = this.getActivePlayer(t)
                      , h = this.renderActivePlayer(t, m)
                      , v = (0,
                    s.default)(t, r, this.config)
                      , g = [h].concat(_(v)).sort(this.sortPlayers)
                      , w = n.default.createElement(l.default, {
                        url: t,
                        light: f,
                        playIcon: p,
                        onClick: this.handleClickPreview
                    });
                    return n.default.createElement(y, E({
                        ref: this.wrapperRef,
                        style: S({}, i, {
                            width: u,
                            height: c
                        })
                    }, b), d ? w : g)
                }
            }]) && D(r.prototype, f),
            p && D(r, p),
            d
        }(n.Component);
        t.default = V,
        L(V, "addCustomPlayer", (function(e) {
            N.push(e)
        }
        )),
        L(V, "removeCustomPlayers", (function() {
            N = []
        }
        )),
        L(V, "displayName", "ReactPlayer"),
        L(V, "propTypes", o.propTypes),
        L(V, "defaultProps", o.defaultProps),
        L(V, "canPlay", (function(e) {
            for (var t = 0, r = [].concat(_(N), _(i.default)); t < r.length; t++) {
                if (r[t].canPlay(e))
                    return !0
            }
            return !1
        }
        )),
        L(V, "canEnablePIP", (function(e) {
            for (var t = 0, r = [].concat(_(N), _(i.default)); t < r.length; t++) {
                var n = r[t];
                if (n.canEnablePIP && n.canEnablePIP(e))
                    return !0
            }
            return !1
        }
        ))
    },
    BFPz: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r("gDgk")
        }
        ])
    },
    BbJO: function(e, t, r) {
        "use strict";
        var n = r("wx14")
          , o = r("Ff2n")
          , a = r("q1tI")
          , i = r.n(a)
          , u = r("J1y8")
          , l = r.n(u)
          , c = r("TSYQ")
          , s = r.n(c)
          , f = r("qKvR");
        i.a.createElement;
        t.a = function(e) {
            var t = e.logos
              , r = e.className
              , a = Object(o.a)(e, ["logos", "className"]);
            return Object(f.d)("ul", Object(n.a)({
                className: s()(l.a.list, r)
            }, a), t.map((function(e, t) {
                return Object(f.d)("li", {
                    key: t
                }, e.url ? Object(f.d)("a", {
                    href: e.url,
                    target: "_blank"
                }, Object(f.d)("img", {
                    src: e.img,
                    style: {
                        transform: "scale(".concat(e.size || 1, ")")
                    },
                    alt: e.alt
                })) : Object(f.d)("img", {
                    src: e.img,
                    style: {
                        transform: "scale(".concat(e.size || 1, ")")
                    },
                    alt: e.alt
                }))
            }
            )))
        }
    },
    GdC5: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Streamable = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function s(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? f(e) : t
        }
        function f(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function p() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function b(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var m = /streamable\.com\/([a-z0-9]+)$/
          , h = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = y(t);
                if (p()) {
                    var n = y(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return s(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return b(f(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                b(f(e), "duration", null),
                b(f(e), "currentTime", null),
                b(f(e), "secondsLoaded", null),
                b(f(e), "mute", (function() {
                    e.callPlayer("mute")
                }
                )),
                b(f(e), "unmute", (function() {
                    e.callPlayer("unmute")
                }
                )),
                b(f(e), "ref", (function(t) {
                    e.iframe = t
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "load",
                value: function(e) {
                    var t = this;
                    (0,
                    a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function(e) {
                        t.iframe && (t.player = new e.Player(t.iframe),
                        t.player.setLoop(t.props.loop),
                        t.player.on("ready", t.props.onReady),
                        t.player.on("play", t.props.onPlay),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seeked", t.props.onSeek),
                        t.player.on("ended", t.props.onEnded),
                        t.player.on("error", t.props.onError),
                        t.player.on("timeupdate", (function(e) {
                            var r = e.duration
                              , n = e.seconds;
                            t.duration = r,
                            t.currentTime = n
                        }
                        )),
                        t.player.on("buffered", (function(e) {
                            var r = e.percent;
                            t.duration && (t.secondsLoaded = t.duration * r)
                        }
                        )),
                        t.props.muted && t.player.mute())
                    }
                    ), this.props.onError)
                }
            }, {
                key: "play",
                value: function() {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("setCurrentTime", e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.callPlayer("setVolume", 100 * e)
                }
            }, {
                key: "setLoop",
                value: function(e) {
                    this.callPlayer("setLoop", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return this.secondsLoaded
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.url.match(m)[1];
                    return o.default.createElement("iframe", {
                        ref: this.ref,
                        src: "https://streamable.com/o/".concat(e),
                        frameBorder: "0",
                        scrolling: "no",
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        allowFullScreen: !0
                    })
                }
            }]) && c(r.prototype, n),
            i && c(r, i),
            l
        }(o.Component);
        t.Streamable = h,
        b(h, "displayName", "Streamable"),
        b(h, "canPlay", (function(e) {
            return m.test(e)
        }
        ));
        var v = (0,
        i.default)(h);
        t.default = v
    },
    J1y8: function(e, t, r) {
        e.exports = {
            list: "style_list__3C0KU"
        }
    },
    LLoX: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Vimeo = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function f(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? p(e) : t
        }
        function p(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function y() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e, t) {
            return (b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function m(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var h = /vimeo\.com\/.+/
          , v = /vimeo\.com\/external\/[0-9]+\..+/
          , g = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && b(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = d(t);
                if (y()) {
                    var n = d(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return f(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return m(p(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                m(p(e), "duration", null),
                m(p(e), "currentTime", null),
                m(p(e), "secondsLoaded", null),
                m(p(e), "mute", (function() {
                    e.setVolume(0)
                }
                )),
                m(p(e), "unmute", (function() {
                    null !== e.props.volume && e.setVolume(e.props.volume)
                }
                )),
                m(p(e), "ref", (function(t) {
                    e.container = t
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "load",
                value: function(e) {
                    var t = this;
                    this.duration = null,
                    (0,
                    a.getSDK)("https://player.vimeo.com/api/player.js", "Vimeo").then((function(r) {
                        t.container && (t.player = new r.Player(t.container,function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? c(Object(r), !0).forEach((function(t) {
                                    m(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }({
                            url: e,
                            autoplay: t.props.playing,
                            muted: t.props.muted,
                            loop: t.props.loop,
                            playsinline: t.props.playsinline,
                            controls: t.props.controls
                        }, t.props.config.vimeo.playerOptions)),
                        t.player.ready().then((function() {
                            var e = t.container.querySelector("iframe");
                            e.style.width = "100%",
                            e.style.height = "100%"
                        }
                        )).catch(t.props.onError),
                        t.player.on("loaded", (function() {
                            t.props.onReady(),
                            t.refreshDuration()
                        }
                        )),
                        t.player.on("play", (function() {
                            t.props.onPlay(),
                            t.refreshDuration()
                        }
                        )),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seeked", (function(e) {
                            return t.props.onSeek(e.seconds)
                        }
                        )),
                        t.player.on("ended", t.props.onEnded),
                        t.player.on("error", t.props.onError),
                        t.player.on("timeupdate", (function(e) {
                            var r = e.seconds;
                            t.currentTime = r
                        }
                        )),
                        t.player.on("progress", (function(e) {
                            var r = e.seconds;
                            t.secondsLoaded = r
                        }
                        )))
                    }
                    ), this.props.onError)
                }
            }, {
                key: "refreshDuration",
                value: function() {
                    var e = this;
                    this.player.getDuration().then((function(t) {
                        e.duration = t
                    }
                    ))
                }
            }, {
                key: "play",
                value: function() {
                    var e = this.callPlayer("play");
                    e && e.catch(this.props.onError)
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function() {
                    this.callPlayer("unload")
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("setCurrentTime", e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.callPlayer("setVolume", e)
                }
            }, {
                key: "setLoop",
                value: function(e) {
                    this.callPlayer("setLoop", e)
                }
            }, {
                key: "setPlaybackRate",
                value: function(e) {
                    this.callPlayer("setPlaybackRate", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return this.secondsLoaded
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        display: this.props.display
                    };
                    return o.default.createElement("div", {
                        key: this.props.url,
                        ref: this.ref,
                        style: e
                    })
                }
            }]) && s(r.prototype, n),
            i && s(r, i),
            l
        }(o.Component);
        t.Vimeo = g,
        m(g, "displayName", "Vimeo"),
        m(g, "forceLoad", !0),
        m(g, "canPlay", (function(e) {
            return !v.test(e) && h.test(e)
        }
        ));
        var w = (0,
        i.default)(g);
        t.default = w
    },
    LVMo: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t, r;
            return r = t = function(t) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && v(e, t)
                }(l, t);
                var r, n = (r = l,
                function() {
                    var e, t = h(r);
                    if (m()) {
                        var n = h(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return d(this, e)
                }
                );
                function l() {
                    var e;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, l);
                    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                        r[o] = arguments[o];
                    return g(b(e = n.call.apply(n, [this].concat(r))), "config", (0,
                    i.getConfig)(e.props, a.defaultProps, !0)),
                    g(b(e), "getDuration", (function() {
                        return e.player ? e.player.getDuration() : null
                    }
                    )),
                    g(b(e), "getCurrentTime", (function() {
                        return e.player ? e.player.getCurrentTime() : null
                    }
                    )),
                    g(b(e), "getSecondsLoaded", (function() {
                        return e.player ? e.player.getSecondsLoaded() : null
                    }
                    )),
                    g(b(e), "getInternalPlayer", (function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                        return e.player ? e.player.getInternalPlayer(t) : null
                    }
                    )),
                    g(b(e), "seekTo", (function(t, r) {
                        if (!e.player)
                            return null;
                        e.player.seekTo(t, r)
                    }
                    )),
                    g(b(e), "ref", (function(t) {
                        e.player = t
                    }
                    )),
                    e
                }
                return function(e, t, r) {
                    t && y(e.prototype, t);
                    r && y(e, r)
                }(l, [{
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return !(0,
                        i.isEqual)(this.props, e)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.config = (0,
                        i.getConfig)(this.props, a.defaultProps)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.config.file
                          , r = t.forceVideo
                          , n = t.forceAudio
                          , l = t.forceHLS
                          , c = t.forceDASH
                          , f = r || n || l || c;
                        if (!e.canPlay(this.props.url) && !f)
                            return null;
                        var y = this.props
                          , d = y.style
                          , b = y.width
                          , m = y.height
                          , h = y.wrapper
                          , v = (0,
                        i.omit)(this.props, w, a.DEPRECATED_CONFIG_PROPS);
                        return o.default.createElement(h, s({
                            style: p({}, d, {
                                width: b,
                                height: m
                            })
                        }, v), o.default.createElement(u.default, s({}, this.props, {
                            ref: this.ref,
                            activePlayer: e,
                            config: this.config
                        })))
                    }
                }]),
                l
            }(o.Component),
            g(t, "displayName", "".concat(e.displayName, "Player")),
            g(t, "propTypes", a.propTypes),
            g(t, "defaultProps", a.defaultProps),
            g(t, "canPlay", e.canPlay),
            r
        }
        ;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== c(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = l();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("QXAm"), i = r("tbWI"), u = (n = r("q+qS")) && n.__esModule ? n : {
            default: n
        };
        function l() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return l = function() {
                return e
            }
            ,
            e
        }
        function c(e) {
            return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function f(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(r), !0).forEach((function(t) {
                    g(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function y(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function d(e, t) {
            return !t || "object" !== c(t) && "function" !== typeof t ? b(e) : t
        }
        function b(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function m() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function g(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var w = Object.keys(a.propTypes)
    },
    MuZe: function(e, t) {
        function r(e, t) {
            e.onload = function() {
                this.onerror = this.onload = null,
                t(null, e)
            }
            ,
            e.onerror = function() {
                this.onerror = this.onload = null,
                t(new Error("Failed to load " + this.src), e)
            }
        }
        function n(e, t) {
            e.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null,
                t(null, e))
            }
        }
        e.exports = function(e, t, o) {
            var a = document.head || document.getElementsByTagName("head")[0]
              , i = document.createElement("script");
            "function" === typeof t && (o = t,
            t = {}),
            t = t || {},
            o = o || function() {}
            ,
            i.type = t.type || "text/javascript",
            i.charset = t.charset || "utf8",
            i.async = !("async"in t) || !!t.async,
            i.src = e,
            t.attrs && function(e, t) {
                for (var r in t)
                    e.setAttribute(r, t[r])
            }(i, t.attrs),
            t.text && (i.text = "" + t.text),
            ("onload"in i ? r : n)(i, o),
            i.onload || r(i, o),
            a.appendChild(i)
        }
    },
    PE4B: function(e, t, r) {
        "use strict";
        var n = function(e) {
            return function(e) {
                return !!e && "object" === typeof e
            }(e) && !function(e) {
                var t = Object.prototype.toString.call(e);
                return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                    return e.$$typeof === o
                }(e)
            }(e)
        };
        var o = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
        function a(e, t) {
            return !1 !== t.clone && t.isMergeableObject(e) ? s((r = e,
            Array.isArray(r) ? [] : {}), e, t) : e;
            var r
        }
        function i(e, t, r) {
            return e.concat(t).map((function(e) {
                return a(e, r)
            }
            ))
        }
        function u(e) {
            return Object.keys(e).concat(function(e) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                    return e.propertyIsEnumerable(t)
                }
                )) : []
            }(e))
        }
        function l(e, t) {
            try {
                return t in e
            } catch (r) {
                return !1
            }
        }
        function c(e, t, r) {
            var n = {};
            return r.isMergeableObject(e) && u(e).forEach((function(t) {
                n[t] = a(e[t], r)
            }
            )),
            u(t).forEach((function(o) {
                (function(e, t) {
                    return l(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                }
                )(e, o) || (l(e, o) && r.isMergeableObject(t[o]) ? n[o] = function(e, t) {
                    if (!t.customMerge)
                        return s;
                    var r = t.customMerge(e);
                    return "function" === typeof r ? r : s
                }(o, r)(e[o], t[o], r) : n[o] = a(t[o], r))
            }
            )),
            n
        }
        function s(e, t, r) {
            (r = r || {}).arrayMerge = r.arrayMerge || i,
            r.isMergeableObject = r.isMergeableObject || n,
            r.cloneUnlessOtherwiseSpecified = a;
            var o = Array.isArray(t);
            return o === Array.isArray(e) ? o ? r.arrayMerge(e, t, r) : c(e, t, r) : a(t, r)
        }
        s.all = function(e, t) {
            if (!Array.isArray(e))
                throw new Error("first argument should be an array");
            return e.reduce((function(e, r) {
                return s(e, r, t)
            }
            ), {})
        }
        ;
        var f = s;
        e.exports = f
    },
    QXAm: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DEPRECATED_CONFIG_PROPS = t.defaultProps = t.propTypes = void 0;
        var n, o = (n = r("17x9")) && n.__esModule ? n : {
            default: n
        };
        var a = o.default.string
          , i = o.default.bool
          , u = o.default.number
          , l = o.default.array
          , c = o.default.oneOfType
          , s = o.default.shape
          , f = o.default.object
          , p = o.default.func
          , y = o.default.node
          , d = {
            url: c([a, l, f]),
            playing: i,
            loop: i,
            controls: i,
            volume: u,
            muted: i,
            playbackRate: u,
            width: c([a, u]),
            height: c([a, u]),
            style: f,
            progressInterval: u,
            playsinline: i,
            pip: i,
            light: c([i, a]),
            playIcon: y,
            wrapper: c([a, p, s({
                render: p.isRequired
            })]),
            config: s({
                soundcloud: s({
                    options: f,
                    preload: i
                }),
                youtube: s({
                    playerVars: f,
                    embedOptions: f,
                    preload: i
                }),
                facebook: s({
                    appId: a,
                    version: a,
                    playerId: a
                }),
                dailymotion: s({
                    params: f,
                    preload: i
                }),
                vimeo: s({
                    playerOptions: f,
                    preload: i
                }),
                file: s({
                    attributes: f,
                    tracks: l,
                    forceVideo: i,
                    forceAudio: i,
                    forceHLS: i,
                    forceDASH: i,
                    hlsOptions: f,
                    hlsVersion: a,
                    dashVersion: a
                }),
                wistia: s({
                    options: f
                }),
                mixcloud: s({
                    options: f
                }),
                twitch: s({
                    options: f,
                    playerId: a
                })
            }),
            onReady: p,
            onStart: p,
            onPlay: p,
            onPause: p,
            onBuffer: p,
            onBufferEnd: p,
            onEnded: p,
            onError: p,
            onDuration: p,
            onSeek: p,
            onProgress: p,
            onEnablePIP: p,
            onDisablePIP: p
        };
        t.propTypes = d;
        t.defaultProps = {
            playing: !1,
            loop: !1,
            controls: !1,
            volume: null,
            muted: !1,
            playbackRate: 1,
            width: "640px",
            height: "360px",
            style: {},
            progressInterval: 1e3,
            playsinline: !1,
            pip: !1,
            light: !1,
            wrapper: "div",
            config: {
                soundcloud: {
                    options: {
                        visual: !0,
                        buying: !1,
                        liking: !1,
                        download: !1,
                        sharing: !1,
                        show_comments: !1,
                        show_playcount: !1
                    }
                },
                youtube: {
                    playerVars: {
                        playsinline: 1,
                        showinfo: 0,
                        rel: 0,
                        iv_load_policy: 3,
                        modestbranding: 1
                    },
                    embedOptions: {},
                    preload: !1
                },
                facebook: {
                    appId: "1309697205772819",
                    version: "v3.3",
                    playerId: null
                },
                dailymotion: {
                    params: {
                        api: 1,
                        "endscreen-enable": !1
                    },
                    preload: !1
                },
                vimeo: {
                    playerOptions: {
                        autopause: !1,
                        byline: !1,
                        portrait: !1,
                        title: !1
                    },
                    preload: !1
                },
                file: {
                    attributes: {},
                    tracks: [],
                    forceVideo: !1,
                    forceAudio: !1,
                    forceHLS: !1,
                    forceDASH: !1,
                    hlsOptions: {},
                    hlsVersion: "0.13.1",
                    dashVersion: "2.9.2"
                },
                wistia: {
                    options: {}
                },
                mixcloud: {
                    options: {
                        hide_cover: 1
                    }
                },
                twitch: {
                    options: {},
                    playerId: null
                }
            },
            onReady: function() {},
            onStart: function() {},
            onPlay: function() {},
            onPause: function() {},
            onBuffer: function() {},
            onBufferEnd: function() {},
            onEnded: function() {},
            onError: function() {},
            onDuration: function() {},
            onSeek: function() {},
            onProgress: function() {},
            onEnablePIP: function() {},
            onDisablePIP: function() {}
        };
        t.DEPRECATED_CONFIG_PROPS = ["soundcloudConfig", "youtubeConfig", "facebookConfig", "dailymotionConfig", "vimeoConfig", "fileConfig", "wistiaConfig"]
    },
    Rom6: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.DailyMotion = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(r), !0).forEach((function(t) {
                    g(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function f(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var r = []
                  , n = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (l) {
                    o = !0,
                    a = l
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return r
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return p(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return p(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function y(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function d(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? b(e) : t
        }
        function b(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function m() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function g(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var w = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/
          , O = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && v(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = h(t);
                if (m()) {
                    var n = h(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return d(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return g(b(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                g(b(e), "onDurationChange", (function() {
                    var t = e.getDuration();
                    e.props.onDuration(t)
                }
                )),
                g(b(e), "mute", (function() {
                    e.callPlayer("setMuted", !0)
                }
                )),
                g(b(e), "unmute", (function() {
                    e.callPlayer("setMuted", !1)
                }
                )),
                g(b(e), "ref", (function(t) {
                    e.container = t
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "load",
                value: function(e) {
                    var t = this
                      , r = this.props
                      , n = r.controls
                      , o = r.config
                      , i = r.onError
                      , u = r.playing
                      , l = f(e.match(w), 2)[1];
                    this.player ? this.player.load(l, {
                        start: (0,
                        a.parseStartTime)(e),
                        autoplay: u
                    }) : (0,
                    a.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", (function(e) {
                        return e.player
                    }
                    )).then((function(r) {
                        if (t.container) {
                            var u = r.player;
                            t.player = new u(t.container,{
                                width: "100%",
                                height: "100%",
                                video: l,
                                params: s({
                                    controls: n,
                                    autoplay: t.props.playing,
                                    mute: t.props.muted,
                                    start: (0,
                                    a.parseStartTime)(e),
                                    origin: window.location.origin
                                }, o.dailymotion.params),
                                events: {
                                    apiready: t.props.onReady,
                                    seeked: function() {
                                        return t.props.onSeek(t.player.currentTime)
                                    },
                                    video_end: t.props.onEnded,
                                    durationchange: t.onDurationChange,
                                    pause: t.props.onPause,
                                    playing: t.props.onPlay,
                                    waiting: t.props.onBuffer,
                                    error: function(e) {
                                        return i(e)
                                    }
                                }
                            })
                        }
                    }
                    ), i)
                }
            }, {
                key: "play",
                value: function() {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("seek", e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.callPlayer("setVolume", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.player.duration || null
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.player.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return this.player.bufferedTime
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                        width: "100%",
                        height: "100%",
                        display: this.props.display
                    };
                    return o.default.createElement("div", {
                        style: e
                    }, o.default.createElement("div", {
                        ref: this.ref
                    }))
                }
            }]) && y(r.prototype, n),
            i && y(r, i),
            l
        }(o.Component);
        t.DailyMotion = O,
        g(O, "displayName", "DailyMotion"),
        g(O, "canPlay", (function(e) {
            return w.test(e)
        }
        )),
        g(O, "loopOnEnded", !0);
        var P = (0,
        i.default)(O);
        t.default = P
    },
    TSYQ: function(e, t, r) {
        var n;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var a = typeof n;
                        if ("string" === a || "number" === a)
                            e.push(n);
                        else if (Array.isArray(n) && n.length) {
                            var i = o.apply(null, n);
                            i && e.push(i)
                        } else if ("object" === a)
                            for (var u in n)
                                r.call(n, u) && n[u] && e.push(u)
                    }
                }
                return e.join(" ")
            }
            e.exports ? (o.default = o,
            e.exports = o) : void 0 === (n = function() {
                return o
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    "W4/P": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Wistia = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(r), !0).forEach((function(t) {
                    h(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function f(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function p(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? y(e) : t
        }
        function y(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function d() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function b(e) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function m(e, t) {
            return (m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function h(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var v = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/
          , g = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && m(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = b(t);
                if (d()) {
                    var n = b(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return p(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return h(y(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                h(y(e), "onPlay", (function() {
                    var t;
                    return (t = e.props).onPlay.apply(t, arguments)
                }
                )),
                h(y(e), "onPause", (function() {
                    var t;
                    return (t = e.props).onPause.apply(t, arguments)
                }
                )),
                h(y(e), "onSeek", (function() {
                    var t;
                    return (t = e.props).onSeek.apply(t, arguments)
                }
                )),
                h(y(e), "onEnded", (function() {
                    var t;
                    return (t = e.props).onEnded.apply(t, arguments)
                }
                )),
                h(y(e), "mute", (function() {
                    e.callPlayer("mute")
                }
                )),
                h(y(e), "unmute", (function() {
                    e.callPlayer("unmute")
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "getID",
                value: function(e) {
                    return e && e.match(v)[1]
                }
            }, {
                key: "load",
                value: function(e) {
                    var t = this
                      , r = this.props
                      , n = r.playing
                      , o = r.muted
                      , i = r.controls
                      , u = r.onReady
                      , l = r.config
                      , c = r.onError;
                    (0,
                    a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then((function() {
                        window._wq = window._wq || [],
                        window._wq.push({
                            id: t.getID(e),
                            options: s({
                                autoPlay: n,
                                silentAutoPlay: "allow",
                                muted: o,
                                controlsVisibleOnLoad: i
                            }, l.wistia.options),
                            onReady: function(e) {
                                t.player = e,
                                t.unbind(),
                                t.player.bind("play", t.onPlay),
                                t.player.bind("pause", t.onPause),
                                t.player.bind("seek", t.onSeek),
                                t.player.bind("end", t.onEnded),
                                u()
                            }
                        })
                    }
                    ), c)
                }
            }, {
                key: "unbind",
                value: function() {
                    this.player.unbind("play", this.onPlay),
                    this.player.unbind("pause", this.onPause),
                    this.player.unbind("seek", this.onSeek),
                    this.player.unbind("end", this.onEnded)
                }
            }, {
                key: "play",
                value: function() {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function() {
                    this.unbind(),
                    this.callPlayer("remove")
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("time", e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.callPlayer("volume", e)
                }
            }, {
                key: "setPlaybackRate",
                value: function(e) {
                    this.callPlayer("playbackRate", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.callPlayer("duration")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.callPlayer("time")
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getID(this.props.url)
                      , t = "wistia_embed wistia_async_".concat(e);
                    return o.default.createElement("div", {
                        key: e,
                        className: t,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })
                }
            }]) && f(r.prototype, n),
            i && f(r, i),
            l
        }(o.Component);
        t.Wistia = g,
        h(g, "displayName", "Wistia"),
        h(g, "canPlay", (function(e) {
            return v.test(e)
        }
        )),
        h(g, "loopOnEnded", !0);
        var w = (0,
        i.default)(g);
        t.default = w
    },
    bA2t: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Twitch = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function f(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? p(e) : t
        }
        function p(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function y() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e, t) {
            return (b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function m(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var h = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/
          , v = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/
          , g = "twitch-player-"
          , w = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && b(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = d(t);
                if (y()) {
                    var n = d(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return f(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return m(p(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                m(p(e), "playerID", e.props.config.twitch.playerId || "".concat(g).concat((0,
                a.randomString)())),
                m(p(e), "mute", (function() {
                    e.callPlayer("setMuted", !0)
                }
                )),
                m(p(e), "unmute", (function() {
                    e.callPlayer("setMuted", !1)
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "load",
                value: function(e, t) {
                    var r = this
                      , n = this.props
                      , o = n.playsinline
                      , i = n.onError
                      , u = n.config
                      , l = n.controls
                      , s = v.test(e)
                      , f = s ? e.match(v)[1] : e.match(h)[1];
                    t ? s ? this.player.setChannel(f) : this.player.setVideo("v" + f) : (0,
                    a.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then((function(e) {
                        r.player = new e.Player(r.playerID,function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? c(Object(r), !0).forEach((function(t) {
                                    m(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }({
                            video: s ? "" : f,
                            channel: s ? f : "",
                            height: "100%",
                            width: "100%",
                            playsinline: o,
                            autoplay: r.props.playing,
                            muted: r.props.muted,
                            controls: !!s || l
                        }, u.twitch.options));
                        var t = e.Player
                          , n = t.READY
                          , a = t.PLAYING
                          , i = t.PAUSE
                          , p = t.ENDED
                          , y = t.ONLINE
                          , d = t.OFFLINE;
                        r.player.addEventListener(n, r.props.onReady),
                        r.player.addEventListener(a, r.props.onPlay),
                        r.player.addEventListener(i, r.props.onPause),
                        r.player.addEventListener(p, r.props.onEnded),
                        r.player.addEventListener(y, r.props.onLoaded),
                        r.player.addEventListener(d, r.props.onLoaded)
                    }
                    ), i)
                }
            }, {
                key: "play",
                value: function() {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("seek", e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.callPlayer("setVolume", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.callPlayer("getDuration")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.callPlayer("getCurrentTime")
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return null
                }
            }, {
                key: "render",
                value: function() {
                    return o.default.createElement("div", {
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        id: this.playerID
                    })
                }
            }]) && s(r.prototype, n),
            i && s(r, i),
            l
        }(o.Component);
        t.Twitch = w,
        m(w, "displayName", "Twitch"),
        m(w, "canPlay", (function(e) {
            return h.test(e) || v.test(e)
        }
        )),
        m(w, "loopOnEnded", !0);
        var O = (0,
        i.default)(w);
        t.default = O
    },
    "bq/u": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.FilePlayer = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c() {
            return (c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function f(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? p(e) : t
        }
        function p(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function y() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e, t) {
            return (b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function m(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function h(e) {
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return v(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return v(e, t)
                }(e))) {
                    var t = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return t >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[t++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, o, a = !0, i = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    i = !0,
                    o = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
            }
        }
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var g = "undefined" !== typeof navigator && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
          , w = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i
          , O = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i
          , P = /\.(m3u8)($|\?)/i
          , j = /\.(mpd)($|\?)/i
          , k = /www\.dropbox\.com\/.+/;
        function S(e) {
            if (e instanceof Array) {
                var t, r = h(e);
                try {
                    for (r.s(); !(t = r.n()).done; ) {
                        var n = t.value;
                        if ("string" === typeof n && S(n))
                            return !0;
                        if (S(n.src))
                            return !0
                    }
                } catch (o) {
                    r.e(o)
                } finally {
                    r.f()
                }
                return !1
            }
            return !!(0,
            a.isMediaStream)(e) || (w.test(e) || O.test(e) || P.test(e) || j.test(e))
        }
        function E(e) {
            return e || (e = document.createElement("video")),
            e.webkitSupportsPresentationMode && "function" === typeof e.webkitSetPresentationMode && !/iPhone|iPod/.test(navigator.userAgent)
        }
        var _ = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && b(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = d(t);
                if (y()) {
                    var n = d(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return f(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return m(p(e = u.call.apply(u, [this].concat(r))), "onReady", (function() {
                    var t;
                    return (t = e.props).onReady.apply(t, arguments)
                }
                )),
                m(p(e), "onPlay", (function() {
                    var t;
                    return (t = e.props).onPlay.apply(t, arguments)
                }
                )),
                m(p(e), "onBuffer", (function() {
                    var t;
                    return (t = e.props).onBuffer.apply(t, arguments)
                }
                )),
                m(p(e), "onBufferEnd", (function() {
                    var t;
                    return (t = e.props).onBufferEnd.apply(t, arguments)
                }
                )),
                m(p(e), "onPause", (function() {
                    var t;
                    return (t = e.props).onPause.apply(t, arguments)
                }
                )),
                m(p(e), "onEnded", (function() {
                    var t;
                    return (t = e.props).onEnded.apply(t, arguments)
                }
                )),
                m(p(e), "onError", (function() {
                    var t;
                    return (t = e.props).onError.apply(t, arguments)
                }
                )),
                m(p(e), "onEnablePIP", (function() {
                    var t;
                    return (t = e.props).onEnablePIP.apply(t, arguments)
                }
                )),
                m(p(e), "onDisablePIP", (function(t) {
                    var r = e.props
                      , n = r.onDisablePIP
                      , o = r.playing;
                    n(t),
                    o && e.play()
                }
                )),
                m(p(e), "onPresentationModeChange", (function(t) {
                    if (e.player && E(e.player)) {
                        var r = e.player.webkitPresentationMode;
                        "picture-in-picture" === r ? e.onEnablePIP(t) : "inline" === r && e.onDisablePIP(t)
                    }
                }
                )),
                m(p(e), "onSeek", (function(t) {
                    e.props.onSeek(t.target.currentTime)
                }
                )),
                m(p(e), "mute", (function() {
                    e.player.muted = !0
                }
                )),
                m(p(e), "unmute", (function() {
                    e.player.muted = !1
                }
                )),
                m(p(e), "renderSourceElement", (function(e, t) {
                    return "string" === typeof e ? o.default.createElement("source", {
                        key: t,
                        src: e
                    }) : o.default.createElement("source", c({
                        key: t
                    }, e))
                }
                )),
                m(p(e), "renderTrack", (function(e, t) {
                    return o.default.createElement("track", c({
                        key: t
                    }, e))
                }
                )),
                m(p(e), "ref", (function(t) {
                    e.player && (e.prevPlayer = e.player),
                    e.player = t
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    this.addListeners(this.player),
                    g && this.player.load()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer),
                    this.addListeners(this.player))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.removeListeners(this.player),
                    this.hls && this.hls.destroy()
                }
            }, {
                key: "addListeners",
                value: function(e) {
                    var t = this.props.playsinline;
                    e.addEventListener("canplay", this.onReady),
                    e.addEventListener("play", this.onPlay),
                    e.addEventListener("waiting", this.onBuffer),
                    e.addEventListener("playing", this.onBufferEnd),
                    e.addEventListener("pause", this.onPause),
                    e.addEventListener("seeked", this.onSeek),
                    e.addEventListener("ended", this.onEnded),
                    e.addEventListener("error", this.onError),
                    e.addEventListener("enterpictureinpicture", this.onEnablePIP),
                    e.addEventListener("leavepictureinpicture", this.onDisablePIP),
                    e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange),
                    t && (e.setAttribute("playsinline", ""),
                    e.setAttribute("webkit-playsinline", ""),
                    e.setAttribute("x5-playsinline", ""))
                }
            }, {
                key: "removeListeners",
                value: function(e) {
                    e.removeEventListener("canplay", this.onReady),
                    e.removeEventListener("play", this.onPlay),
                    e.removeEventListener("waiting", this.onBuffer),
                    e.removeEventListener("playing", this.onBufferEnd),
                    e.removeEventListener("pause", this.onPause),
                    e.removeEventListener("seeked", this.onSeek),
                    e.removeEventListener("ended", this.onEnded),
                    e.removeEventListener("error", this.onError),
                    e.removeEventListener("enterpictureinpicture", this.onEnablePIP),
                    e.removeEventListener("leavepictureinpicture", this.onDisablePIP),
                    e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange)
                }
            }, {
                key: "shouldUseAudio",
                value: function(e) {
                    return !e.config.file.forceVideo && !e.config.file.attributes.poster && (w.test(e.url) || e.config.file.forceAudio)
                }
            }, {
                key: "shouldUseHLS",
                value: function(e) {
                    return P.test(e) && !g || this.props.config.file.forceHLS
                }
            }, {
                key: "shouldUseDASH",
                value: function(e) {
                    return j.test(e) || this.props.config.file.forceDASH
                }
            }, {
                key: "load",
                value: function(e) {
                    var t = this
                      , r = this.props.config.file
                      , n = r.hlsVersion
                      , o = r.dashVersion;
                    if (this.shouldUseHLS(e) && (0,
                    a.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION", n), "Hls").then((function(r) {
                        t.hls = new r(t.props.config.file.hlsOptions),
                        t.hls.on(r.Events.ERROR, (function(e, n) {
                            t.props.onError(e, n, t.hls, r)
                        }
                        )),
                        t.hls.loadSource(e),
                        t.hls.attachMedia(t.player)
                    }
                    )),
                    this.shouldUseDASH(e) && (0,
                    a.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION", o), "dashjs").then((function(r) {
                        t.dash = r.MediaPlayer().create(),
                        t.dash.initialize(t.player, e, t.props.playing),
                        t.dash.on("error", t.props.onError),
                        t.dash.getDebug().setLogToBrowserConsole(!1)
                    }
                    )),
                    e instanceof Array)
                        this.player.load();
                    else if ((0,
                    a.isMediaStream)(e))
                        try {
                            this.player.srcObject = e
                        } catch (i) {
                            this.player.src = window.URL.createObjectURL(e)
                        }
                }
            }, {
                key: "play",
                value: function() {
                    var e = this.player.play();
                    e && e.catch(this.props.onError)
                }
            }, {
                key: "pause",
                value: function() {
                    this.player.pause()
                }
            }, {
                key: "stop",
                value: function() {
                    this.player.removeAttribute("src"),
                    this.dash && this.dash.reset()
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    this.player.currentTime = e
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.player.volume = e
                }
            }, {
                key: "enablePIP",
                value: function() {
                    this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : E(this.player) && "picture-in-picture" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("picture-in-picture")
                }
            }, {
                key: "disablePIP",
                value: function() {
                    document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : E(this.player) && "inline" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("inline")
                }
            }, {
                key: "setPlaybackRate",
                value: function(e) {
                    this.player.playbackRate = e
                }
            }, {
                key: "getDuration",
                value: function() {
                    if (!this.player)
                        return null;
                    var e = this.player
                      , t = e.duration
                      , r = e.seekable;
                    return t === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : t
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.player ? this.player.currentTime : null
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    if (!this.player)
                        return null;
                    var e = this.player.buffered;
                    if (0 === e.length)
                        return 0;
                    var t = e.end(e.length - 1)
                      , r = this.getDuration();
                    return t > r ? r : t
                }
            }, {
                key: "getSource",
                value: function(e) {
                    var t = this.shouldUseHLS(e)
                      , r = this.shouldUseDASH(e);
                    if (!(e instanceof Array || (0,
                    a.isMediaStream)(e) || t || r))
                        return k.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.url
                      , r = e.playing
                      , n = e.loop
                      , a = e.controls
                      , i = e.muted
                      , u = e.config
                      , l = e.width
                      , s = e.height
                      , f = this.shouldUseAudio(this.props) ? "audio" : "video"
                      , p = {
                        width: "auto" === l ? l : "100%",
                        height: "auto" === s ? s : "100%"
                    };
                    return o.default.createElement(f, c({
                        ref: this.ref,
                        src: this.getSource(t),
                        style: p,
                        preload: "auto",
                        autoPlay: r || void 0,
                        controls: a,
                        muted: i,
                        loop: n
                    }, u.file.attributes), t instanceof Array && t.map(this.renderSourceElement), u.file.tracks.map(this.renderTrack))
                }
            }]) && s(r.prototype, n),
            i && s(r, i),
            l
        }(o.Component);
        t.FilePlayer = _,
        m(_, "displayName", "FilePlayer"),
        m(_, "canPlay", S),
        m(_, "canEnablePIP", (function(e) {
            return S(e) && (!!document.pictureInPictureEnabled || E()) && !w.test(e)
        }
        ));
        var x = (0,
        i.default)(_);
        t.default = x
    },
    f77o: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Facebook = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function s(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? f(e) : t
        }
        function f(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function p() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function b(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var m = "https://connect.facebook.net/en_US/sdk.js"
          , h = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/
          , v = "facebook-player-"
          , g = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = y(t);
                if (p()) {
                    var n = y(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return s(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return b(f(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                b(f(e), "playerID", e.props.config.facebook.playerId || "".concat(v).concat((0,
                a.randomString)())),
                b(f(e), "mute", (function() {
                    e.callPlayer("mute")
                }
                )),
                b(f(e), "unmute", (function() {
                    e.callPlayer("unmute")
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "load",
                value: function(e, t) {
                    var r = this;
                    t ? (0,
                    a.getSDK)(m, "FB", "fbAsyncInit").then((function(e) {
                        return e.XFBML.parse()
                    }
                    )) : (0,
                    a.getSDK)(m, "FB", "fbAsyncInit").then((function(e) {
                        e.init({
                            appId: r.props.config.facebook.appId,
                            xfbml: !0,
                            version: r.props.config.facebook.version
                        }),
                        e.Event.subscribe("xfbml.render", (function(e) {
                            r.props.onLoaded()
                        }
                        )),
                        e.Event.subscribe("xfbml.ready", (function(e) {
                            "video" === e.type && e.id === r.playerID && (r.player = e.instance,
                            r.player.subscribe("startedPlaying", r.props.onPlay),
                            r.player.subscribe("paused", r.props.onPause),
                            r.player.subscribe("finishedPlaying", r.props.onEnded),
                            r.player.subscribe("startedBuffering", r.props.onBuffer),
                            r.player.subscribe("finishedBuffering", r.props.onBufferEnd),
                            r.player.subscribe("error", r.props.onError),
                            r.props.muted || r.callPlayer("unmute"),
                            r.props.onReady(),
                            document.getElementById(r.playerID).querySelector("iframe").style.visibility = "visible")
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "play",
                value: function() {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("seek", e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.callPlayer("setVolume", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.callPlayer("getDuration")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.callPlayer("getCurrentPosition")
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return null
                }
            }, {
                key: "render",
                value: function() {
                    return o.default.createElement("div", {
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        id: this.playerID,
                        className: "fb-video",
                        "data-href": this.props.url,
                        "data-autoplay": this.props.playing ? "true" : "false",
                        "data-allowfullscreen": "true",
                        "data-controls": this.props.controls ? "true" : "false"
                    })
                }
            }]) && c(r.prototype, n),
            i && c(r, i),
            l
        }(o.Component);
        t.Facebook = g,
        b(g, "displayName", "Facebook"),
        b(g, "canPlay", (function(e) {
            return h.test(e)
        }
        )),
        b(g, "loopOnEnded", !0);
        var w = (0,
        i.default)(g);
        t.default = w
    },
    fflM: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== a(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = o();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var u = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                    u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI"));
        function o() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return o = function() {
                return e
            }
            ,
            e
        }
        function a(e) {
            return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(r), !0).forEach((function(t) {
                    d(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function c(e, t) {
            return !t || "object" !== a(t) && "function" !== typeof t ? s(e) : t
        }
        function s(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function f() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function p(e) {
            return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function y(e, t) {
            return (y = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function d(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var b = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && y(e, t)
            }(b, e);
            var t, r, o, a, i = (t = b,
            function() {
                var e, r = p(t);
                if (f()) {
                    var n = p(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return c(this, e)
            }
            );
            function b() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, b);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return d(s(e = i.call.apply(i, [this].concat(r))), "mounted", !1),
                d(s(e), "state", {
                    image: null
                }),
                e
            }
            return r = b,
            (o = [{
                key: "componentDidMount",
                value: function() {
                    this.mounted = !0,
                    this.fetchImage(this.props)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , r = t.url
                      , n = t.light;
                    e.url === r && e.light === n || this.fetchImage(this.props)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.mounted = !1
                }
            }, {
                key: "fetchImage",
                value: function(e) {
                    var t = this
                      , r = e.url
                      , n = e.light;
                    if ("string" !== typeof n)
                        return this.setState({
                            image: null
                        }),
                        window.fetch("https://noembed.com/embed?url=".concat(r)).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            if (e.thumbnail_url && t.mounted) {
                                var r = e.thumbnail_url.replace("height=100", "height=480");
                                t.setState({
                                    image: r
                                })
                            }
                        }
                        ));
                    this.setState({
                        image: n
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.onClick
                      , r = e.playIcon
                      , o = this.state.image
                      , a = {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                      , i = {
                        preview: u({
                            width: "100%",
                            height: "100%",
                            backgroundImage: o ? "url(".concat(o, ")") : void 0,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            cursor: "pointer"
                        }, a),
                        shadow: u({
                            background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                            borderRadius: "64px",
                            width: "64px",
                            height: "64px"
                        }, a),
                        playIcon: {
                            borderStyle: "solid",
                            borderWidth: "16px 0 16px 26px",
                            borderColor: "transparent transparent transparent white",
                            marginLeft: "7px"
                        }
                    }
                      , l = n.default.createElement("div", {
                        style: i.shadow,
                        className: "react-player__shadow"
                    }, n.default.createElement("div", {
                        style: i.playIcon,
                        className: "react-player__play-icon"
                    }));
                    return n.default.createElement("div", {
                        style: i.preview,
                        className: "react-player__preview",
                        onClick: t
                    }, r || l)
                }
            }]) && l(r.prototype, o),
            a && l(r, a),
            b
        }(n.Component);
        t.default = b
    },
    fn3U: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, r) {
            var a, i = [], u = function(e) {
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = function(e, t) {
                        if (!e)
                            return;
                        if ("string" === typeof e)
                            return s(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r)
                            return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                            return s(e, t)
                    }(e))) {
                        var t = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, o, a = !0, i = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done,
                        e
                    },
                    e: function(e) {
                        i = !0,
                        o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                }
            }(f);
            try {
                for (u.s(); !(a = u.n()).done; ) {
                    var l = a.value;
                    !l.Player.canPlay(e) && r[l.configKey].preload && i.push(n.default.createElement(o.default, {
                        key: l.Player.displayName,
                        activePlayer: l.Player,
                        url: l.url,
                        controls: t,
                        playing: !0,
                        muted: !0,
                        display: "none"
                    }))
                }
            } catch (c) {
                u.e(c)
            } finally {
                u.f()
            }
            return i
        }
        ;
        var n = c(r("q1tI"))
          , o = c(r("q+qS"))
          , a = r("/6c9")
          , i = r("xkkJ")
          , u = r("LLoX")
          , l = r("Rom6");
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var f = [{
            Player: a.YouTube,
            configKey: "youtube",
            url: "https://www.youtube.com/watch?v=GlCmAC4MHek"
        }, {
            Player: i.SoundCloud,
            configKey: "soundcloud",
            url: "https://soundcloud.com/seucheu/john-cage-433-8-bit-version"
        }, {
            Player: u.Vimeo,
            configKey: "vimeo",
            url: "https://vimeo.com/300970506"
        }, {
            Player: l.DailyMotion,
            configKey: "dailymotion",
            url: "http://www.dailymotion.com/video/xqdpyk"
        }]
    },
    gDgk: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("q1tI")
          , o = r.n(n)
          , a = r("8Kt/")
          , i = r.n(a)
          , u = r("8bpD")
          , l = r("Fl18")
          , c = r("wx14")
          , s = r("qKvR")
          , f = r("GBuR");
        o.a.createElement;
        var p = "https://dashboard.prakerja.go.id";
        var y = function(e) {
            return Object(s.d)("section", Object(c.a)({
                css: d
            }, e), Object(s.d)("div", {
                className: "sm:tw-hidden tw-w-11/12 tw-float-right tw-mb-12"
            }, Object(s.d)("img", {
                src: "/images/home-illustration.png",
                alt: "",
                className: "tw-object-contain"
            })), Object(s.d)("div", {
                css: b,
                className: "tw-container tw-flex tw-justify-center sm:tw-block"
            }, Object(s.d)("div", null, Object(s.d)("h1", {
                className: "tw-text-primary tw-font-bold tw-text-lg lg:tw-text-3xl tw-mb-5"
            }, "Tingkatkan Kompetensi Kerja", Object(s.d)("br", null), " dengan Kartu Prakerja"), Object(s.d)("p", {
                className: "tw-text-primary lg:tw-text-xl tw-mb-5"
            }, "Galau cari kerja? Pengen lebih kompeten?", Object(s.d)("br", null), "Mau ngembangin diri tanpa pusing mikirin biaya?", Object(s.d)("br", null), "Bekali dirimu dengan Kartu Prakerja dan", Object(s.d)("br", null), Object(s.d)("span", {
                className: "tw-font-bold tw-text-lg lg:tw-text-2xl"
            }, "#SiapDariSekarang")), Object(s.d)("div", null, Object(s.d)("a", {
                href: "".concat(p, "/daftar"),
                className: "tw-mr-5"
            }, Object(s.d)(f.Button, {
                variant: "primary"
            }, "Daftar Sekarang")), Object(s.d)("a", {
                href: "#how-to"
            }, Object(s.d)(f.Button, {
                variant: "outline-primary"
            }, "Cara Daftar"))))))
        }
          , d = {
            name: "oc9r8",
            styles: "@media (min-width:640px){background:url(/images/home-illustration.png) top right / contain no-repeat;min-height:360px;}@media (min-width:1024px){min-height:620px;}"
        }
          , b = {
            name: "11ru2qs",
            styles: "padding-bottom:100px;background:url(/images/dots.png) left bottom / auto 70px no-repeat;@media (min-width:640px){background-size:auto 110px;padding-bottom:150px;padding-top:90px;}@media (min-width:1024px){padding-top:140px;}"
        }
          , m = r("Ff2n")
          , h = r("nOHt")
          , v = r.n(h)
          , g = r("TSYQ")
          , w = r.n(g)
          , O = r("08Bn");
        o.a.createElement;
        var P = function(e) {
            var t = e.className
              , r = Object(m.a)(e, ["className"]);
            return Object(s.d)("section", Object(c.a)({
                className: w()("tw-container", t)
            }, r), Object(s.d)(O.a, {
                as: "h1",
                center: !0,
                className: "tw-text-lg lg:tw-text-2xl tw-mb-10"
            }, "APA ITU KARTU PRAKERJA?"), Object(s.d)("p", {
                className: "sm:tw-text-center tw-mb-8"
            }, "Kartu Prakerja adalah program", " ", Object(s.d)("strong", null, "pengembangan kompetensi berupa bantuan biaya"), Object(s.d)("br", null), "yang ditujukan untuk pencari kerja, pekerja ter-PHK atau pekerja yang membutuhkan peningkatan kompetensi."), Object(s.d)("div", {
                className: "tw-text-center"
            }, Object(s.d)(f.Button, {
                onClick: function() {
                    return v.a.push("/tentang-kami")
                },
                variant: "outline-primary"
            }, "Baca lebih lanjut")))
        }
          , j = r("wTIg")
          , k = r("6tYh")
          , S = r.n(k);
        o.a.createElement;
        var E = function(e) {
            var t = e.width
              , r = e.video
              , n = e.preview
              , o = e.children
              , a = Object(m.a)(e, ["width", "video", "preview", "children"]);
            return Object(s.d)("div", Object(c.a)({
                css: x,
                className: "tw-mx-auto"
            }, a), Object(s.d)("div", {
                css: D,
                style: {
                    width: t
                }
            }, Object(s.d)("div", {
                css: R,
                className: "tw-flex"
            }, Object(s.d)("div", {
                className: "tw-absolute tw-w-full tw-h-full"
            }, o), Object(s.d)(_, {
                preview: n
            }), Object(s.d)("div", {
                className: "tw-z-0 tw-w-full tw-h-full"
            }, Object(s.d)(S.a, {
                url: r,
                light: !0,
                playing: !0,
                width: "100%",
                height: "100%",
                controls: !0
            })))))
        }
          , _ = Object(j.a)("div", {
            target: "eozhq0l0"
        })("position:absolute;top:0;width:100%;height:100%;background-image:url(", (function(e) {
            return e.preview
        }
        ), ");background-size:contain;background-repeat:no-repeat;background-position:center;")
          , x = {
            name: "1gc3jqs",
            styles: "width:fit-content;height:fit-content;@media (max-width:639px){max-width:100%;}"
        }
          , D = {
            name: "ql5s8",
            styles: "position:relative;padding-top:56.25%;max-width:100%;"
        }
          , R = {
            name: "t37t6d",
            styles: "position:absolute;top:0;bottom:0;left:0;right:0;"
        };
        o.a.createElement;
        var T = function(e) {
            var t = e.className
              , r = Object(m.a)(e, ["className"]);
            return Object(s.d)("section", Object(c.a)({
                css: I,
                className: w()("", t)
            }, r), Object(s.d)("div", {
                className: "tw-container tw-py-12 tw-px-6"
            }, Object(s.d)(O.a, {
                as: "h1",
                center: !0,
                className: "tw-text-lg lg:tw-text-2xl tw-mb-10"
            }, "7 TAHAP PROGRAM KARTU PRAKERJA"), Object(s.d)(E, {
                width: "540px",
                video: "/videos/7-tahap-kartu-prakerja.mp4",
                preview: "/images/7-tahap-kartu-prakerja.png"
            })))
        }
          , I = {
            name: "77f9my",
            styles: "position:relative;background-color:#e9f2fe;background-image:url(/images/7-steps-background.png);background-size:cover;&::before{content:'';position:absolute;top:0;left:50%;height:0;width:0;border:solid transparent;opacity:1;pointer-events:none;border-color:transparent;border-width:35px;border-top-color:#ffffff;margin-left:-35px;}@media (max-width:639px){&::before{border-width:25px;margin-left:-25px;}}"
        };
        o.a.createElement;
        var A = function(e) {
            var t = e.className
              , r = Object(m.a)(e, ["className"])
              , o = Object(n.useRef)();
            return Object(s.d)("section", Object(c.a)({
                css: C,
                className: w()("tw-container", t)
            }, r), Object(s.d)("div", {
                ref: o,
                className: "tw-relative md:tw-flex md:tw-justify-between md:tw-items-center tw-max-w-3xl tw-mx-auto"
            }, Object(s.d)(E, {
                width: "320px",
                video: "/videos/prakerja-pendaftaran.mp4",
                preview: "/images/3-langkah-mudah.png",
                className: "tw-mb-12 md:tw-mb-0 md:tw-w-1/2 tw-mx-auto tw-shadow",
                css: L
            }, Object(s.d)("div", {
                css: M
            })), Object(s.d)("div", {
                className: "md:tw-ml-10 tw-max-w-md tw-mx-auto"
            }, Object(s.d)("h1", {
                className: "tw-text-primary tw-text-lg lg:tw-text-2xl tw-text-center sm:tw-text-left tw-font-bold tw-mb-10"
            }, "Keuntungan Kartu Prakerja"), Object(s.d)("p", {
                className: "tw-mb-10"
            }, "Jika kamu menyelesaikan pelatihan baik ", Object(s.d)("strong", null, "online"), " ", "maupun ", Object(s.d)("strong", null, "offline"), ", kamu akan mendapatkan", " ", Object(s.d)("strong", null, "sertifikat"), " dan ", Object(s.d)("strong", null, "insentif"), "."), Object(s.d)(f.Button, {
                variant: "primary",
                onClick: function() {
                    var e = o.current.querySelector(".react-player__play-icon");
                    e && e.click()
                }
            }, "Lihat Video"))))
        }
          , M = {
            name: "120vob5",
            styles: "width:100%;height:100%;background-color:rgba(110,162,234,0.7);border-radius:10px;transform:rotate(-3deg);"
        }
          , L = {
            name: "b2nu4d",
            styles: "@media (max-width:639px){max-width:85%;}"
        }
          , C = {
            name: "12dqi10",
            styles: "padding-bottom:30px;background:url(/images/squiggle.png) right bottom / auto 30px no-repeat;@media (min-width:640px){padding-bottom:50px;background-size:auto 50px;}@media (min-width:1024px){padding-bottom:60px;background-size:auto 60px;}"
        };
        o.a.createElement;
        var N = function(e) {
            var t = e.className
              , r = Object(m.a)(e, ["className"]);
            return Object(s.d)("section", Object(c.a)({
                className: w()("tw-container", t)
            }, r), Object(s.d)(O.a, {
                as: "h1",
                center: !0,
                className: "tw-text-lg lg:tw-text-2xl tw-mb-10"
            }, "Tren Lowongan di Indonesia"), Object(s.d)("p", {
                className: "sm:tw-text-center tw-mx-auto tw-mb-8 tw-max-w-xl"
            }, "Tren lowongan di Indonesia akan membantu kamu dalam", " ", Object(s.d)("strong", null, "memilih pelatihan"), " di Prakerja agar", " ", Object(s.d)("strong", null, "sesuai kebutuhan pasar"), " di Indonesia"), Object(s.d)("div", {
                className: "tw-text-center"
            }, Object(s.d)(f.Button, {
                onClick: function() {
                    return v.a.push("/pekerjaan")
                },
                variant: "primary"
            }, "Cek Tren")))
        };
        o.a.createElement;
        var V = "https://dashboard.prakerja.go.id";
        var q = function(e) {
            return Object(s.d)("section", Object(c.a)({
                css: W
            }, e), Object(s.d)("div", {
                className: "tw-container"
            }, Object(s.d)(O.a, {
                as: "h1",
                center: !0,
                className: "tw-text-lg lg:tw-text-2xl tw-mb-10"
            }, "CARA DAFTAR"), Object(s.d)("p", {
                className: "tw-text-center tw-text-primary tw-mb-8"
            }, "Pelajari dan ikuti panduan di bawah ini untuk mengikuti program"), Object(s.d)("div", {
                className: "tw-max-w-lg tw-mx-auto",
                css: B
            }, Object(s.d)("div", {
                className: "sm:tw-flex sm:tw-items-center sm:tw-justify-center"
            }, Object(s.d)("img", {
                src: "/images/step-01-register.png"
            }), Object(s.d)("div", {
                className: "sm:tw-pl-6"
            }, Object(s.d)("span", {
                className: "tw-text-orange-600 tw-font-bold tw-block tw-mb-4"
            }, "LANGKAH 1"), Object(s.d)("h3", {
                className: "tw-text-primary tw-text-lg tw-font-bold"
            }, "Daftarkan dirimu"), Object(s.d)("p", {
                className: "tw-mb-0"
            }, "Sebelum daftar, pastikan kamu:"), Object(s.d)("ul", {
                css: K
            }, Object(s.d)("li", null, "WNI"), Object(s.d)("li", null, "Minimal berusia 18 tahun"), Object(s.d)("li", null, "Sedang tidak menempuh pendidikan formal")))), Object(s.d)("div", null, Object(s.d)("div", {
                className: "tw-text-center"
            }, Object(s.d)("img", {
                src: "/images/step-01-verification.png",
                style: {
                    margin: "0 auto 2rem"
                }
            })), Object(s.d)("h3", {
                className: "tw-text-center tw-text-orange-500 tw-font-medium"
            }, "Setelah daftar, data kamu akan kami verifikasi")), Object(s.d)("div", {
                className: "sm:tw-flex sm:tw-items-center sm:tw-justify-center"
            }, Object(s.d)("img", {
                src: "/images/step-02-interest.png",
                className: "sm:tw-order-last"
            }), Object(s.d)("div", {
                className: "sm:tw-pr-6"
            }, Object(s.d)("span", {
                className: "tw-text-orange-600 tw-font-bold tw-block tw-mb-4"
            }, "LANGKAH 2"), Object(s.d)("h3", {
                className: "tw-text-primary tw-text-lg tw-font-bold"
            }, "Tes Motivasi dan Kemampuan Dasar"), Object(s.d)("p", null, "Tes ini bertujuan untuk mengenali kompetensi dan potensi yang kamu miliki. Penggunaan alat bantu corat-coret seperti kertas, pensil/pulpen diperbolehkan untuk menyelesaikan soal."))), Object(s.d)("div", {
                className: "sm:tw-flex sm:tw-items-center sm:tw-justify-center"
            }, Object(s.d)("img", {
                src: "/images/step-03-course.png"
            }), Object(s.d)("div", {
                className: "sm:tw-pl-6"
            }, Object(s.d)("span", {
                className: "tw-text-orange-600 tw-font-bold tw-block tw-mb-4"
            }, "LANGKAH 3"), Object(s.d)("h3", {
                className: "tw-text-primary tw-text-lg tw-font-bold"
            }, "Pilih Pelatihan yang Kamu Inginkan"), Object(s.d)("p", null, "Pastikan kamu mengikuti dan menyelesaikan semua kelas pelatihan yang kamu pilih."))), Object(s.d)("div", {
                className: "sm:tw-flex sm:tw-items-center sm:tw-justify-center"
            }, Object(s.d)("img", {
                src: "/images/step-04-sign-up.png",
                className: "sm:tw-order-last"
            }), Object(s.d)("div", {
                className: "sm:tw-pr-6"
            }, Object(s.d)("span", {
                className: "tw-text-orange-600 tw-font-bold tw-block tw-mb-4"
            }, "LANGKAH 4"), Object(s.d)("h3", {
                className: "tw-text-primary tw-text-lg tw-font-bold"
            }, "Tunggu Apalagi?"), Object(s.d)("p", {
                className: "tw-mb-8"
            }, "Belajar gratis, dapat insentif pula. Dengan Kartu Prakerja, raih masa depan lebih cerah!"), Object(s.d)("div", null, Object(s.d)("a", {
                href: "".concat(V, "/daftar"),
                target: "_blank"
            }, Object(s.d)(f.Button, {
                variant: "primary"
            }, "Mulai Sekarang")), Object(s.d)(f.Button, {
                onClick: function() {
                    return v.a.push("/faq")
                },
                variant: "outline-primary",
                className: "tw-ml-5"
            }, "Lihat FAQ")))))))
        }
          , W = {
            name: "oo3tth",
            styles: "img{max-height:180px;max-width:200px;display:block;margin:0 auto 2rem;@media (min-width:640px){margin:0;}}"
        }
          , B = {
            name: "f5tq6n",
            styles: "> div{margin-bottom:2rem;}"
        }
          , K = {
            name: "b1f401",
            styles: "padding-left:2em;& li{list-style-type:none;position:relative;&::before{content:' ';position:absolute;top:0.3em;left:-2em;width:1em;height:1em;background-color:#2880ce;-webkit-mask-image:url('/images/checklist.png');mask-image:url('/images/checklist.png');-webkit-mask-size:cover;mask-size:cover;}}"
        }
          , U = r("BbJO")
          , F = (o.a.createElement,
        [{
            url: "http://www.tokopedia.com/",
            img: "/images/mitra-tokopedia.png",
            alt: "Tokopedia"
        }, {
            url: "http://prakerja.skillacademy.com",
            img: "/images/mitra-skillacademy.png",
            alt: "Skill Academy"
        }, {
            url: "http://ovo.id",
            img: "/images/mitra-ovo.png",
            alt: "OVO",
            size: .87
        }, {
            url: "https://hacktiv8.com/",
            img: "/images/mitra-hacktiv8.png",
            alt: "Hacktiv8"
        }, {
            url: "https://maubelajarapa.com",
            img: "/images/mitra-maubelajarapa.png",
            alt: "Mau Belajar Apa",
            size: 1.2
        }, {
            url: "https://www.linkaja.id",
            img: "/images/mitra-link-aja.png",
            alt: "Link Aja",
            size: .8
        }, {
            url: "https://www.g2academy.co/",
            img: "/images/mitra-g2.png",
            alt: "G2 Academy",
            size: 1.2
        }]);
        var z = function(e) {
            return Object(s.d)("section", e, Object(s.d)("div", {
                className: "tw-container"
            }, Object(s.d)("div", {
                className: "tw-max-w-2xl tw-mx-auto"
            }, Object(s.d)("p", {
                className: "tw-text-center tw-mb-6"
            }, "Program ini adalah hasil kolaborasi antara pemerintah dengan sektor swasta. Pada tahap awal pengembangan situs program kartu prakerja banyak dibantu oleh:"), Object(s.d)(U.a, {
                logos: F
            }))))
        }
          , H = (o.a.createElement,
        [{
            url: "https://www.tokopedia.com/discovery/kartu-prakerja/?utm_source=website&utm_medium=others&utm_campaign=prakerjasite",
            img: "/images/mitra-tokopedia.png",
            alt: "Tokopedia"
        }, {
            url: "https://prakerja.kemnaker.go.id/",
            img: "/images/kemnaker.png",
            alt: "Kemnaker"
        }, {
            url: "https://www.bukalapak.com/kartu-prakerja",
            img: "/images/mitra-bukalapak.png",
            alt: "Bukalapak"
        }, {
            url: "https://www.pintaria.com/kartuprakerja",
            img: "/images/mitra-pintaria.png",
            alt: "Pintaria"
        }, {
            url: "http://pijarmahir.id/",
            img: "/images/mitra-pijar-mahir.png",
            alt: "Pijar Mahir",
            size: .875
        }, {
            url: "https://maubelajarapa.com/kartuprakerja/",
            img: "/images/mitra-maubelajarapa.png",
            alt: "MauBelajarApa",
            size: 1.2
        }, {
            url: "https://www.sekolah.mu/kartuprakerja/",
            img: "/images/mitra-sekolahmu.png",
            alt: "Sekolahmu"
        }]);
        var G = function(e) {
            return Object(s.d)("section", e, Object(s.d)("div", {
                className: "tw-container"
            }, Object(s.d)("div", {
                className: "tw-max-w-2xl tw-mx-auto"
            }, Object(s.d)(O.a, {
                as: "h1",
                center: !0,
                className: "tw-text-lg lg:tw-text-2xl tw-mb-10"
            }, "MITRA PLATFORM DIGITAL"), Object(s.d)(U.a, {
                logos: H
            }))))
        }
          , $ = (o.a.createElement,
        [{
            url: "https://m.bnizona.com/events/view/2712",
            img: "/images/bni.png",
            alt: "BNI",
            size: .9
        }, {
            url: "http://ovo.id",
            img: "/images/mitra-ovo.png",
            alt: "OVO",
            size: .87
        }, {
            url: "https://www.linkaja.id",
            img: "/images/mitra-link-aja.png",
            alt: "Link Aja",
            size: .8
        }, {
            url: "https://www.gojek.com/gopay",
            img: "/images/gopay.png",
            alt: "GoPay",
            size: 1.2
        }]);
        var Y = function(e) {
            return Object(s.d)("section", e, Object(s.d)("div", {
                className: "tw-container"
            }, Object(s.d)("div", {
                className: "tw-max-w-2xl tw-mx-auto"
            }, Object(s.d)(O.a, {
                as: "h1",
                center: !0,
                className: "tw-text-lg lg:tw-text-2xl tw-mb-10"
            }, "MITRA PEMBAYARAN"), Object(s.d)(U.a, {
                logos: $
            }))))
        };
        o.a.createElement;
        t.default = function() {
            return Object(s.d)(o.a.Fragment, null, Object(s.d)(i.a, null, Object(s.d)("title", null, "Kartu Prakerja - Home")), Object(s.d)(u.a, null), Object(s.d)("section", {
                className: "tw-mb-12"
            }, Object(s.d)(y, {
                className: "tw-mb-10 sm:tw-mb-16"
            }), Object(s.d)(P, {
                className: "tw-mb-10 sm:tw-mb-16"
            }), Object(s.d)(T, {
                className: "tw-mb-16"
            }), Object(s.d)(A, {
                className: "tw-mb-20"
            }), Object(s.d)(N, {
                className: "tw-mb-16"
            }), Object(s.d)(q, {
                id: "how-to",
                className: "tw-mb-20"
            }), Object(s.d)(G, {
                className: "tw-mb-20"
            }), Object(s.d)(Y, {
                className: "tw-mb-12"
            }), Object(s.d)(z, {
                className: "tw-mb-12"
            })), Object(s.d)(l.a, null))
        }
    },
    "q+qS": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== u(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = i();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI"))
          , o = r("QXAm")
          , a = r("tbWI");
        function i() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }
            ,
            e
        }
        function u(e) {
            return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function s(e, t) {
            return !t || "object" !== u(t) && "function" !== typeof t ? f(e) : t
        }
        function f(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function p() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function b(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var m = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(m, e);
            var t, r, o, i, u = (t = m,
            function() {
                var e, r = y(t);
                if (p()) {
                    var n = y(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return s(this, e)
            }
            );
            function m() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, m);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return b(f(e = u.call.apply(u, [this].concat(r))), "mounted", !1),
                b(f(e), "isReady", !1),
                b(f(e), "isPlaying", !1),
                b(f(e), "isLoading", !0),
                b(f(e), "loadOnReady", null),
                b(f(e), "startOnPlay", !0),
                b(f(e), "seekOnPlay", null),
                b(f(e), "onDurationCalled", !1),
                b(f(e), "getInternalPlayer", (function(t) {
                    return e.player ? e.player[t] : null
                }
                )),
                b(f(e), "progress", (function() {
                    if (e.props.url && e.player && e.isReady) {
                        var t = e.getCurrentTime() || 0
                          , r = e.getSecondsLoaded()
                          , n = e.getDuration();
                        if (n) {
                            var o = {
                                playedSeconds: t,
                                played: t / n
                            };
                            null !== r && (o.loadedSeconds = r,
                            o.loaded = r / n),
                            o.playedSeconds === e.prevPlayed && o.loadedSeconds === e.prevLoaded || e.props.onProgress(o),
                            e.prevPlayed = o.playedSeconds,
                            e.prevLoaded = o.loadedSeconds
                        }
                    }
                    e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
                }
                )),
                b(f(e), "handleReady", (function() {
                    if (e.mounted) {
                        e.isReady = !0,
                        e.isLoading = !1;
                        var t = e.props
                          , r = t.onReady
                          , n = t.playing
                          , o = t.volume
                          , a = t.muted;
                        r(),
                        a || null === o || e.player.setVolume(o),
                        e.loadOnReady ? (e.player.load(e.loadOnReady, !0),
                        e.loadOnReady = null) : n && e.player.play(),
                        e.handleDurationCheck()
                    }
                }
                )),
                b(f(e), "handlePlay", (function() {
                    e.isPlaying = !0,
                    e.isLoading = !1;
                    var t = e.props
                      , r = t.onStart
                      , n = t.onPlay
                      , o = t.playbackRate;
                    e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o),
                    r(),
                    e.startOnPlay = !1),
                    n(),
                    e.seekOnPlay && (e.seekTo(e.seekOnPlay),
                    e.seekOnPlay = null),
                    e.handleDurationCheck()
                }
                )),
                b(f(e), "handlePause", (function(t) {
                    e.isPlaying = !1,
                    e.isLoading || e.props.onPause(t)
                }
                )),
                b(f(e), "handleEnded", (function() {
                    var t = e.props
                      , r = t.activePlayer
                      , n = t.loop
                      , o = t.onEnded;
                    r.loopOnEnded && n && e.seekTo(0),
                    n || (e.isPlaying = !1,
                    o())
                }
                )),
                b(f(e), "handleError", (function() {
                    var t;
                    e.isLoading = !1,
                    (t = e.props).onError.apply(t, arguments)
                }
                )),
                b(f(e), "handleDurationCheck", (function() {
                    clearTimeout(e.durationCheckTimeout);
                    var t = e.getDuration();
                    t ? e.onDurationCalled || (e.props.onDuration(t),
                    e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
                }
                )),
                b(f(e), "handleLoaded", (function() {
                    e.isLoading = !1
                }
                )),
                b(f(e), "ref", (function(t) {
                    t && (e.player = t)
                }
                )),
                e
            }
            return r = m,
            (o = [{
                key: "componentDidMount",
                value: function() {
                    this.mounted = !0,
                    this.player.load(this.props.url),
                    this.progress()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearTimeout(this.progressTimeout),
                    clearTimeout(this.durationCheckTimeout),
                    this.isReady && this.player.stop(),
                    this.player.disablePIP && this.player.disablePIP(),
                    this.mounted = !1
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this
                      , r = this.props
                      , n = r.url
                      , o = r.playing
                      , i = r.volume
                      , u = r.muted
                      , l = r.playbackRate
                      , c = r.pip
                      , s = r.loop
                      , f = r.activePlayer;
                    if (!(0,
                    a.isEqual)(e.url, n)) {
                        if (this.isLoading && !f.forceLoad)
                            return console.warn("ReactPlayer: the attempt to load ".concat(n, " is being deferred until the player has loaded")),
                            void (this.loadOnReady = n);
                        this.isLoading = !0,
                        this.startOnPlay = !0,
                        this.onDurationCalled = !1,
                        this.player.load(n, this.isReady)
                    }
                    e.playing || !o || this.isPlaying || this.player.play(),
                    e.playing && !o && this.isPlaying && this.player.pause(),
                    !e.pip && c && this.player.enablePIP && this.player.enablePIP(),
                    e.pip && !c && this.player.disablePIP && this.player.disablePIP(),
                    e.volume !== i && null !== i && this.player.setVolume(i),
                    e.muted !== u && (u ? this.player.mute() : (this.player.unmute(),
                    null !== i && setTimeout((function() {
                        return t.player.setVolume(i)
                    }
                    )))),
                    e.playbackRate !== l && this.player.setPlaybackRate && this.player.setPlaybackRate(l),
                    e.loop !== s && this.player.setLoop && this.player.setLoop(s)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.isReady ? this.player.getDuration() : null
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.isReady ? this.player.getCurrentTime() : null
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return this.isReady ? this.player.getSecondsLoaded() : null
                }
            }, {
                key: "seekTo",
                value: function(e, t) {
                    var r = this;
                    if (!this.isReady && 0 !== e)
                        return this.seekOnPlay = e,
                        void setTimeout((function() {
                            r.seekOnPlay = null
                        }
                        ), 5e3);
                    if (t ? "fraction" === t : e > 0 && e < 1) {
                        var n = this.player.getDuration();
                        return n ? void this.player.seekTo(n * e) : void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")
                    }
                    this.player.seekTo(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.activePlayer;
                    return e ? n.default.createElement(e, l({}, this.props, {
                        ref: this.ref,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError
                    })) : null
                }
            }]) && c(r.prototype, o),
            i && c(r, i),
            m
        }(n.Component);
        t.default = m,
        b(m, "displayName", "Player"),
        b(m, "propTypes", o.propTypes),
        b(m, "defaultProps", o.defaultProps)
    },
    tbWI: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.parseStartTime = function(e) {
            return h(e, y)
        }
        ,
        t.parseEndTime = function(e) {
            return h(e, d)
        }
        ,
        t.randomString = function() {
            return Math.random().toString(36).substr(2, 5)
        }
        ,
        t.queryString = function(e) {
            return Object.keys(e).map((function(t) {
                return "".concat(t, "=").concat(e[t])
            }
            )).join("&")
        }
        ,
        t.getSDK = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                return !0
            }
              , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.default;
            if (window[t] && n(window[t]))
                return Promise.resolve(window[t]);
            return new Promise((function(n, o) {
                if (v[e])
                    v[e].push({
                        resolve: n,
                        reject: o
                    });
                else {
                    v[e] = [{
                        resolve: n,
                        reject: o
                    }];
                    var i = function(t) {
                        v[e].forEach((function(e) {
                            return e.resolve(t)
                        }
                        ))
                    };
                    if (r) {
                        var u = window[r];
                        window[r] = function() {
                            u && u(),
                            i(window[t])
                        }
                    }
                    a(e, (function(n) {
                        n ? (v[e].forEach((function(e) {
                            return e.reject(n)
                        }
                        )),
                        v[e] = null) : r || i(window[t])
                    }
                    ))
                }
            }
            ))
        }
        ,
        t.getConfig = function(e, t, r) {
            var n, o = (0,
            a.default)(t.config, e.config), u = function(e) {
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = f(e))) {
                        var t = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, o, a = !0, i = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done,
                        e
                    },
                    e: function(e) {
                        i = !0,
                        o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                }
            }(i.DEPRECATED_CONFIG_PROPS);
            try {
                for (u.s(); !(n = u.n()).done; ) {
                    var l = n.value;
                    if (e[l]) {
                        var s = l.replace(/Config$/, "");
                        if (o = (0,
                        a.default)(o, c({}, s, e[l])),
                        r) {
                            var p = "ReactPlayer: %c".concat(l, " %cis deprecated, please use the config prop instead \u2013 ").concat("https://github.com/CookPete/react-player#config-prop");
                            console.warn(p, "font-weight: bold", "")
                        }
                    }
                }
            } catch (y) {
                u.e(y)
            } finally {
                u.f()
            }
            return o
        }
        ,
        t.omit = function(e) {
            for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                n[o - 1] = arguments[o];
            for (var a = (t = []).concat.apply(t, n), i = {}, u = Object.keys(e), l = 0, c = u; l < c.length; l++) {
                var s = c[l];
                -1 === a.indexOf(s) && (i[s] = e[s])
            }
            return i
        }
        ,
        t.callPlayer = function(e) {
            var t;
            if (!this.player || !this.player[e]) {
                var r = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c \u2013 ");
                return this.player ? this.player[e] || (r += "The method was not available") : r += "The player was not available",
                console.warn(r, "font-weight: bold", ""),
                null
            }
            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                o[a - 1] = arguments[a];
            return (t = this.player)[e].apply(t, o)
        }
        ,
        t.isObject = g,
        t.isEqual = function e(t, r) {
            if ("function" === typeof t && "function" === typeof r)
                return !0;
            if ((0,
            n.isValidElement)(t) && (0,
            n.isValidElement)(r))
                return !0;
            if (t instanceof Array && r instanceof Array) {
                if (t.length !== r.length)
                    return !1;
                for (var o = 0; o !== t.length; o++)
                    if (!e(t[o], r[o]))
                        return !1;
                return !0
            }
            if (g(t) && g(r)) {
                if (Object.keys(t).length !== Object.keys(r).length)
                    return !1;
                for (var a = 0, i = Object.keys(t); a < i.length; a++) {
                    var u = i[a];
                    if (!e(t[u], r[u]))
                        return !1
                }
                return !0
            }
            return t === r
        }
        ,
        t.isMediaStream = function(e) {
            return "undefined" !== typeof window && "undefined" !== typeof window.MediaStream && e instanceof window.MediaStream
        }
        ;
        var n = r("q1tI")
          , o = u(r("MuZe"))
          , a = u(r("PE4B"))
          , i = r("QXAm");
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function s(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var r = []
                  , n = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (l) {
                    o = !0,
                    a = l
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return r
            }(e, t) || f(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return p(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
            }
        }
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var y = /[?&#](?:start|t)=([0-9hms]+)/
          , d = /[?&#]end=([0-9hms]+)/
          , b = /(\d+)(h|m|s)/g
          , m = /^\d+$/;
        function h(e, t) {
            var r = e.match(t);
            if (r) {
                var n = r[1];
                if (n.match(b))
                    return function(e) {
                        var t = 0
                          , r = b.exec(e);
                        for (; null !== r; ) {
                            var n = s(r, 3)
                              , o = n[1]
                              , a = n[2];
                            "h" === a && (t += 60 * parseInt(o, 10) * 60),
                            "m" === a && (t += 60 * parseInt(o, 10)),
                            "s" === a && (t += parseInt(o, 10)),
                            r = b.exec(e)
                        }
                        return t
                    }(n);
                if (m.test(n))
                    return parseInt(n)
            }
        }
        var v = {};
        function g(e) {
            return null !== e && "object" === l(e)
        }
    },
    wx14: function(e, t, r) {
        "use strict";
        function n() {
            return (n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        r.d(t, "a", (function() {
            return n
        }
        ))
    },
    xkkJ: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.SoundCloud = void 0;
        var n, o = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var r = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            r.default = e,
            t && t.set(e, r);
            return r
        }(r("q1tI")), a = r("tbWI"), i = (n = r("LVMo")) && n.__esModule ? n : {
            default: n
        };
        function u() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function f(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? p(e) : t
        }
        function p(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function y() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e, t) {
            return (b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function m(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var h = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/
          , v = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && b(e, t)
            }(l, e);
            var t, r, n, i, u = (t = l,
            function() {
                var e, r = d(t);
                if (y()) {
                    var n = d(this).constructor;
                    e = Reflect.construct(r, arguments, n)
                } else
                    e = r.apply(this, arguments);
                return f(this, e)
            }
            );
            function l() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return m(p(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer),
                m(p(e), "duration", null),
                m(p(e), "currentTime", null),
                m(p(e), "fractionLoaded", null),
                m(p(e), "mute", (function() {
                    e.setVolume(0)
                }
                )),
                m(p(e), "unmute", (function() {
                    null !== e.props.volume && e.setVolume(e.props.volume)
                }
                )),
                m(p(e), "ref", (function(t) {
                    e.iframe = t
                }
                )),
                e
            }
            return r = l,
            (n = [{
                key: "load",
                value: function(e, t) {
                    var r = this;
                    (0,
                    a.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then((function(n) {
                        if (r.iframe) {
                            var o = n.Widget.Events
                              , a = o.PLAY
                              , i = o.PLAY_PROGRESS
                              , u = o.PAUSE
                              , l = o.FINISH
                              , s = o.ERROR;
                            t || (r.player = n.Widget(r.iframe),
                            r.player.bind(a, r.props.onPlay),
                            r.player.bind(u, r.props.onPause),
                            r.player.bind(i, (function(e) {
                                r.currentTime = e.currentPosition / 1e3,
                                r.fractionLoaded = e.loadedProgress
                            }
                            )),
                            r.player.bind(l, (function() {
                                return r.props.onEnded()
                            }
                            )),
                            r.player.bind(s, (function(e) {
                                return r.props.onError(e)
                            }
                            ))),
                            r.player.load(e, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                                        m(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({}, r.props.config.soundcloud.options, {
                                callback: function() {
                                    r.player.getDuration((function(e) {
                                        r.duration = e / 1e3,
                                        r.props.onReady()
                                    }
                                    ))
                                }
                            }))
                        }
                    }
                    ))
                }
            }, {
                key: "play",
                value: function() {
                    this.callPlayer("play")
                }
            }, {
                key: "pause",
                value: function() {
                    this.callPlayer("pause")
                }
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "seekTo",
                value: function(e) {
                    this.callPlayer("seekTo", 1e3 * e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.callPlayer("setVolume", 100 * e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.duration
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.currentTime
                }
            }, {
                key: "getSecondsLoaded",
                value: function() {
                    return this.fractionLoaded * this.duration
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                        width: "100%",
                        height: "100%",
                        display: this.props.display
                    };
                    return o.default.createElement("iframe", {
                        ref: this.ref,
                        src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                        style: e,
                        frameBorder: 0,
                        allow: "autoplay"
                    })
                }
            }]) && s(r.prototype, n),
            i && s(r, i),
            l
        }(o.Component);
        t.SoundCloud = v,
        m(v, "displayName", "SoundCloud"),
        m(v, "canPlay", (function(e) {
            return h.test(e)
        }
        )),
        m(v, "loopOnEnded", !0);
        var g = (0,
        i.default)(v);
        t.default = g
    },
    zuFh: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = r("/6c9")
          , o = r("xkkJ")
          , a = r("LLoX")
          , i = r("f77o")
          , u = r("GdC5")
          , l = r("W4/P")
          , c = r("bA2t")
          , s = r("Rom6")
          , f = r("5Cgt")
          , p = r("bq/u")
          , y = [n.YouTube, o.SoundCloud, a.Vimeo, i.Facebook, u.Streamable, l.Wistia, c.Twitch, s.DailyMotion, f.Mixcloud, p.FilePlayer];
        t.default = y
    }
}, [["BFPz", 0, 2, 1, 3]]]);
