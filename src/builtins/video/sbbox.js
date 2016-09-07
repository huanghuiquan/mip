! function(n, o) {
    function e(n, o) {
        return d.cleanObj.toString.call(n).slice(8, -1) === o }

    function t(n) {
        var o = f[n];
        if (o) return o.exports;
        throw "module " + n + " is undefined" }

    function r(n, o) {
        for (var e, r, i = n.split(":"), s = i.pop().split("/"), a = d; e = s.shift();) "bdbox" !== e && (r = e, s.length && (a = a[e] = a[e] || {}));
        var c = f[n] = { exports: {} },
            u = d.isFunction(o) ? o.apply(c, [t, c.exports, c, d]) : o;
        u && (c.exports = u), a[r] = c.exports
    }

    function i() { p.forEach(function(n) { n() }), p.length = 0, v = !0 }

    function s(n) {
        var o;
        return null == n ? o = String(n) : (o = Object.prototype.toString.call(n).toLowerCase(), o = o.substring(8, o.length - 1)), o }

    function a(o) {
        var e = o.success || g,
            t = { imageUrl: "", mediaType: "all", title: "", content: "", linkUrl: location.href },
            r = o.error || g;
        return d.isFunction(o.success) && (e = "_xSHARE_SUCCESS_" + d.getId(), n[e] = o.success, t.success = e), d.isFunction(o.error) && (r = "_xSHARE_FAIL_" + d.getId(), n[r] = o.error, t.error = r), d.each(o, function(n, e) { "success" !== e && "error" !== e && (e in b ? e = b[e] : "content" !== e || o.title || (t.title = n), t[e] = n) }), d.isArray(t.mediaType) && (t.mediaType = "all"), n.BoxShareData || (n.BoxShareData = { successcallback: e, errorcallback: r, options: t }), t
    }
    var c = +new Date,
        u = (c + "").slice(-3),
        l = navigator.userAgent,
        d = {
            isBox: / baiduboxapp\//i.test(l),
            isIOS: /(iPhone|iPod|iPad)/.test(l),
            isAndroid: /(Android);?[\s\/]+([\d.]+)?/.test(l),
            getId: function() {
                return u++ },
            emptyArr: [],
            emptyFn: function() {},
            cleanObj: {},
            byId: function(n) {
                return d.isString(n) ? o.getElementById(n) : n
            },
            toArray: function(n) {
                return d.emptyArr.slice.call(n) },
            $: function(n, e) {
                return e = e && 1 === e.nodeType ? e : o, d.toArray(e.querySelectorAll(n)) }
        };
    "Function,String,Array,Number,RegExp".replace(/[^, ]+/g, function(n) { d["is" + n] = function(o) {
            return e(o, n) } }), d.isBoolean = function(n) {
        return n === !0 || n === !1 }, d.isObject = function(n) {
        return "object" == typeof n
    }, d.isUndefined = function(n) {
        return void 0 === n }, d.isWindow = function(n) {
        return null != n && n == n.window }, d.isPlainObject = function(n) {
        return d.isObject(n) && !d.isWindow(n) && Object.getPrototypeOf(n) == Object.prototype };
    var f = {};
    d.define = r;
    var m = function(n, o, e) {
            for (var t, r, i = n.split("."), s = e || m; t = i.shift();) "Box" !== t && (r = t, i.length && (s = s[t] = s[t] || {}));
            return s[r] = o || {}, s[r]
        },
        p = [],
        v = !1;
    m.init = function(n) {
        return "function" != typeof n ? this : (v ? n() : p.push(n), this) }, "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? i() : o.addEventListener("DOMContentLoaded", i, !1), r("common:bdbox/utils/getVersion", function(o, e, t) {
        var r = function() {
            var o = 0;
            if (n.baiduboxapp_version) o = n.baiduboxapp_version;
            else {
                var e, t = navigator.userAgent;
                (e = /([\d+.]+)_(?:diordna|enohpi)_/.exec(t)) ? (e = e[1].split("."), o = e.reverse().join(".")) : (e = /baiduboxapp\/([\d+.]+)/.exec(t)) && (o = e[1]) }
            return r = function() {
                return o }, o
        };
        t.exports = r
    }), r("common:bdbox/utils/version_compare", function(n, o, e) {
        var t = function(n, o) {
            o += "", n += "";
            for (var e = n.split("."), t = o.split("."), r = 0, i = Math.max(e.length, t.length); i > r; r++) {
                if (e[r] && !t[r] && parseInt(e[r]) > 0 || parseInt(e[r]) > parseInt(t[r])) return 1;
                if (t[r] && !e[r] && parseInt(t[r]) > 0 || parseInt(e[r]) < parseInt(t[r])) return -1 }
            return 0
        };
        e.exports = t
    }), r("common:bdbox/ios/invokeApp", function(e, t, r, i) {
        r.exports = function(e, t, r) {
            if (e && i.isBox) {
                var s = [];
                if (i.isFunction(t)) r = t;
                else
                    for (var a in t) s.push(a + "=" + t[a]);
                if (i.isFunction(r)) {
                    var c = "_bdbox_js_" + i.getId();
                    n[c] = function() { r.apply(n, [].slice.call(arguments, 0)) }, s.push("func=" + c) } else r && s.push("func=" + r);
                s = "baiduboxapp://" + e + "?" + s.join("&");
                var u = "_bdbox_ios_jsbridge",
                    l = o.getElementById(u);
                l ? l.src = s : (l = o.createElement("iframe"), l.style.display = "none", l.id = u, l.src = s, (o.body || o.getElementsByTagName("body")[0]).appendChild(l))
            }
        }
    }), r("common:bdbox/android/invokeApp", function(o, e, t, r) {
        function i(o, e, t) {
            if (t && !r.isArray(t) && (t = Array.prototype.slice.call(arguments, 0).slice(2)), n[o] && n[o][e]) {
                var i = n[o][e].apply(n[o], t);
                return { error: 0, result: i, __from: "js" } }
            var u = c();
            if (a(u, 4.8) >= 0) {
                var l = s(o, e, t);
                return l = l ? JSON.parse(l) : {}, l.__from = "app", l
            }
            if ("4.7.1" === u || "4.7" == u) {
                var d = s(o, e, t);
                return { error: 0, result: d, __from: "app4.7" } }
            return { error: 200 }
        }

        function s(o, e, t) {
            if (!r.isBox) return { error: 201 };
            if (!r.isAndroid) return { error: 202 };
            var i = { obj: o, func: e, args: t ? t : [] };
            try {
                return n.prompt("BdboxApp:" + JSON.stringify(i)) } catch (s) {
                return { error: 201 } } }
        var a = o("common:bdbox/utils/version_compare"),
            c = o("common:bdbox/utils/getVersion");
        t.exports = i
    }), r("common:bdbox/utils/detect", function(o, e, t, r) {
        function i(o) {
            var e = { name: "unknown", version: 0 };
            this === n || this.os || (this.os = e), o = o || navigator.userAgent;
            var t = { Weibo: /weibo/i, Wechat: /micromessenger\//i, QQ: /QQ\// };
            for (var r in t) t.hasOwnProperty(r) && (e["is" + r] = t[r].test(o));
            e.isUC = o.match(/UC/) || n.ucweb || n.ucbrowser;
            var i = o.match(/(Android);?\s+([\d.]+)?/);
            if (i) return e.android = !0, e.version = i[2], e.name = "android", e;
            var s = o.match(/(iPad).*OS\s([\d_]+)/),
                a = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !s && o.match(/(iPhone\sOS)\s([\d_]+)/);
            return c && !a ? (e.ios = e.iphone = !0, e.version = c[2].replace(/_/g, "."), e.name = "ios", e) : s ? (e.ios = e.ipad = !0, e.name = "ios", e.version = s[2].replace(/_/g, "."), e) : a ? (e.name = "ios", e.ios = e.ipod = !0, e.version = a[3] ? a[3].replace(/_/g, ".") : null, e) : e
        }
        i.apply(r), t.exports = i
    }), r("common:bdbox/each", function(n, o, e) {
        function t(n) {
            var o;
            return null == n ? o = String(n) : (o = Object.prototype.toString.call(n).toLowerCase(), o = o.substring(8, o.length - 1)), o }
        e.exports = function(n, o, e) {
            if ("object" == typeof n) {
                var r, i, s = t(n);
                if (e = e || n, "array" === s || "arguments" === s || "nodelist" === s) {
                    for (r = 0, i = n.length; i > r; r++)
                        if (o.call(e, n[r], r, n) === !1) return
                } else
                    for (r in n)
                        if (n.hasOwnProperty(r) && o.call(e, n[r], r, n) === !1) return
            }
        }
    }), r("common:bdbox/client/nativeShare", function(e, t, r, i) {
        function s(o) {
            var e = { wechatIcon: location.protocol + "//m.baidu.com/static/search/logo300.png", type: "url", mediaType: "all", linkUrl: location.href, title: c.title, success: "console.log", error: "console.log" };
            each(o || {}, function(n, o) { e[o] = n }), e.image && (e.imageUrl = e.image), e.iconUrl && !e.imageUrl && "url" === e.type && (e.imageUrl = e.iconUrl);
            var t = {};
            ["success", "error"].forEach(function(o) {
                var r = o;
                i.isFunction(e[o]) && (r = "_xSHARE_SUCCESS_" + i.getId(), n[r] = e[o]), t[o + "callback"] = r, delete e[o] }), t.options = e, t.options.imageUrl && i.isAndroid && a(i.version, "6.5") < 0 && delete t.options.imageUrl, n.BoxShareData = t;
            var r = e.wechatIcon;
            if (/micromessenger\//i.test(navigator.userAgent) && r && r.length > 20) {
                var s = c.createElement("div");
                s.id = "wa-generalevent-wx-logo", s.style.display = "none", s.innerHTML = '<img src="' + r + '"/>';
                var u = c.body.firstChild;
                u ? c.body.insertBefore(s, u) : c.body.appendChild(s) }
        }
        var a = e("common:bdbox/utils/version_compare"),
            c = o;
        r.exports = s
    }), r("common:bdbox/utils/ready", function(n, e, t) {
        function r() { s.forEach(function(n) { n() }), s.length = 0, a = !0 }

        function i(n) { "function" == typeof n && (a ? n() : s.push(n)) }
        var s = [],
            a = !1;
        "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? r() : o.addEventListener("DOMContentLoaded", r, !1), t.exports = i
    });
    if (d.version = d.utils.getVersion(), d.version_compare = d.utils.version_compare, each = d.each, d.nativeShare = d.client.nativeShare, d.type = s, d.canI = function(n, o, e) {
            return d.version_compare(d.version, n) >= 0 ? d.isFunction(o) && o() : d.isFunction(e) && e(), d }, r("common:bdbox/client/o2o", function(n, o, e, t) {
            var r = n("common:bdbox/android/invokeApp"),
                i = n("common:bdbox/ios/invokeApp"),
                s = encodeURIComponent,
                a = n("common:bdbox/each"),
                c = t.isAndroid ? function(n, o) {
                    t.isObject(n) && (o = n, n = n.url, delete o.url);
                    var e = ["S.bdsb_light_start_url=" + s(n)];
                    if (t.isObject(o)) {
                        var i = { color: "i.extra_actionbar_color_id", appid: "S.bdsb_wallet_appid" };
                        a(o, function(n, o) { "color" === o && (n = 4278190080 | parseInt("0x" + n)), o = i[o] || o, e.push(o + "=" + n) }) }
                    e = e.join(";"), r("Bdbox_android_utils", "command", [JSON.stringify({ intent: "intent:#Intent;" + e + ";end", "class": "com.baidu.searchbox.wallet.WalletServiceActivity", min_v: "16783629", mode: "0" })])
                } : function(n, o) { t.isObject(n) && (o = n, n = n.url, delete o.url);
                    var e = { openurl: s(n), minver: "5.3.0.0", isla: 0, opentype: 1, append: 0, rbtnstyle: 2 };
                    if (t.isObject(o)) {
                        var r = { color: "barcolor" };
                        a(o, function(n, o) { o = r[o] || o, e[o] = n }) }
                    e.appid && (e.isla = 1), i("easybrowse", e) };
            e.exports = c
        }), d.o2o = d.client.o2o, "android" === d.os.name ? m("card", {
            query: function(n, o) {
                if (m.version_compare(m.version, "5.0") < 0) return this;
                var e, t;
                m.isArray(n) ? e = [JSON.stringify(n)] : (t = m.toArray(arguments), o = t.pop(), m.isFunction(o) ? e = t : (e = m.toArray(arguments), o = null), e = [JSON.stringify(e)]);
                var r = m.android.invokeApp("Bdbox_android_card", "mquery", e);
                return r = 0 === r.error && r.result ? JSON.parse(r.result) : !1, m.isFunction(o) && o(r), r
            },
            add: function(o, e) {
                if (m.version_compare(m.version, "5.0") < 0) return this;
                var t, r;
                m.isString(o) ? t = [o] : m.isArray(o) ? t = [JSON.stringify(o)] : (r = m.toArray(arguments), e = r.pop(), m.isFunction(e) ? t = r : (t = m.toArray(arguments), e = null), t = [JSON.stringify(t)]);
                var i = null;
                if (m.version_compare(m.version, "5.5") >= 0) {
                    var s = "";
                    m.isFunction(e) && (s = "__box_card_" + m.getId(), n[s] = function(n) {
                        var o = JSON.parse(n),
                            t = !1;
                        for (var r in o) { t = o[r].st;
                            break }
                        e(t)
                    }), i = m.android.invokeApp("Bdbox_android_card", "madd", t.concat([s, 0]))
                } else i = m.android.invokeApp("Bdbox_android_card", "madd", t);
                return i
            }
        }) : m("card", {
            query: function(n, o) {
                if (m.version_compare(m.version, "5.0") < 0) return this;
                var e, t;
                m.isArray(n) ? e = [JSON.stringify(n)] : (t = m.toArray(arguments), o = t.pop(), m.isFunction(o) ? e = t : (e = m.toArray(arguments), o = null), e = [JSON.stringify(e)]);
                var r = function(n) { m.isFunction(o) && o(JSON.parse(n)), r = null };
                m.ios.invokeApp("cardMquery", { params: encodeURIComponent(e) }, r)
            },
            add: function(n, o) {
                if (m.version_compare(m.version, "5.0") < 0) return this;
                var e, t;
                m.isString(n) ? e = [n] : m.isArray(n) ? e = [JSON.stringify(n)] : (t = m.toArray(arguments), o = t.pop(), m.isFunction(o) ? e = t : (e = m.toArray(arguments), o = null), e = [JSON.stringify(e)]);
                var r = function(n) {
                    var e = JSON.parse(n),
                        t = !1;
                    for (var i in e) { t = e[i].st;
                        break }
                    m.isFunction(o) && o(t), r = null };
                return m.ios.invokeApp("cardMadd", { params: encodeURIComponent(e), gohome: "0" }, r), !0
            }
        }), r("common:bdbox/utils/jsonToQuery", function(n, o, e, t) {
            e.exports = function(n) {
                if (t.isString(n)) return n;
                var o = [];
                for (var e in n) o.push(e + "=" + n[e]);
                return o.join("&")
            }
        }), r("common:bdbox/io/loadJS", function(e, t, r, i) {
            function s(e, t, r) {
                var s, u, l, d = o.createElement("script");
                i.isString(e) ? (s = e, i.isFunction(t) && (r = t, t = null)) : (s = e.url, t = e.data, r = e.success, u = e.error || i.emptyFn, l = e.timeout), i.isObject(t) && (t = c(t)), t && (s += (-1 === s.indexOf("?") ? "?" : "&") + t), s = s.replace(/[&?]{1,2}/, "?");
                var f;
                /=\?/.test(s) && (f = "_box_jsonp" + i.getId(), s = s.replace(/=\?/, "=" + f));
                var m = a();
                l = l || 2e4, d.type = "text/javascript", d.src = s;
                var p, v = !0,
                    h = function() { f && delete n[f], p && clearTimeout(p), d.onload = d.onreadystatechange = d.onerror = null, d = null },
                    b = function() {
                        !d || d.readyState && !/loaded|complete/.test(d.readyState) || (h(), v && i.isFunction(r) && r.apply(null, i.toArray(arguments)), v = !1)
                    },
                    g = function(n) { h(), v && u(n), v = !1 };
                f && (n[f] = b), p = setTimeout(function() { h(), v && u("timeout"), v = !1 }, l), d.onload = d.onreadystatechange = d.onerror = b, d.onerror = g, m.appendChild(d)
            }

            function a() {
                return o.head || o.getElementsByTagName("head")[0] || o.documentElement }
            var c = e("common:bdbox/utils/jsonToQuery");
            i.emptyFn, r.exports = s
        }), r("common:bdbox/utils/queryToJson", function(n, o, e) { e.exports = function(n) {
                try { n = n ? decodeURIComponent(n) : "" } catch (o) { n = "" }
                var e = n.split("?"),
                    t = e[1] ? e[1] : e[0],
                    r = t.split("&"),
                    i = {};
                return r.forEach(function(n) { n = n.split("="), n[0].length > 0 && (i[n[0]] = n[1] || "") }), i } }), r("common:bdbox/extend", function(n, o, e, t) {
            function r(n, o, e) {
                for (var t in o) e && (i(o[t]) || s(o[t])) ? (i(o[t]) && !i(n[t]) && (n[t] = {}), s(o[t]) && !s(n[t]) && (n[t] = []), r(n[t], o[t], e)) : c(o[t]) || (n[t] = o[t])
            }
            var i = t.isPlainObject,
                s = t.isArray,
                a = t.isBoolean,
                c = t.isUndefined;
            e.exports = function(n) {
                var o, e = t.emptyArr.slice.call(arguments, 1);
                return a(n) && (o = n, n = e.shift()), e.forEach(function(e) { r(n, e, o) }), n }
        }), r("common:bdbox/utils/ready", function(n, e, t) {
            function r() { s.forEach(function(n) { n() }), s.length = 0, a = !0 }

            function i(n) {
                "function" == typeof n && (a ? n() : s.push(n))
            }
            var s = [],
                a = !1;
            "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? r() : o.addEventListener("DOMContentLoaded", r, !1), t.exports = i
        }), r("common:bdbox/utils/detect", function(o, e, t, r) {
            function i(o) {
                var e = { name: "unknown", version: 0 };
                this === n || this.os || (this.os = e), o = o || navigator.userAgent;
                var t = { Weibo: /weibo/i, Wechat: /micromessenger\//i, QQ: /QQ\// };
                for (var r in t) t.hasOwnProperty(r) && (e["is" + r] = t[r].test(o));
                e.isUC = o.match(/UC/) || n.ucweb || n.ucbrowser;
                var i = o.match(/(Android);?\s+([\d.]+)?/);
                if (i) return e.android = !0, e.version = i[2], e.name = "android", e;
                var s = o.match(/(iPad).*OS\s([\d_]+)/),
                    a = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                    c = !s && o.match(/(iPhone\sOS)\s([\d_]+)/);
                return c && !a ? (e.ios = e.iphone = !0, e.version = c[2].replace(/_/g, "."), e.name = "ios", e) : s ? (e.ios = e.ipad = !0, e.name = "ios", e.version = s[2].replace(/_/g, "."), e) : a ? (e.name = "ios", e.ios = e.ipod = !0, e.version = a[3] ? a[3].replace(/_/g, ".") : null, e) : e
            }
            i.apply(r), t.exports = i
        }), r("common:bdbox/schema", function(n, e, t, r) {
            function i(n, e) {
                if (!n) return void e(!0);
                if (e = e || r.emptyFn, !r.isBox && r.isIOS && c(a.version, "9.0") >= 0) return void u(function() { s(n, e) });
                var t = Date.now(),
                    i = o.createElement("IFRAME");
                i.src = n, i.style.position = "absolute", i.style.left = "-2000px", i.style.top = "-1000px", i.style.width = "1px", i.style.height = "1px", i.style.webkitTransition = "all 0.9s", i.style.transition = "all 0.9s", o.body.appendChild(i);
                var l = function() { o.body.removeChild(i), e(Date.now() - t < 1500 ? !0 : !1) };
                i.addEventListener("webkitTransitionEnd", l, !1), i.addEventListener("transitionEnd", l, !1), setTimeout(function() { i.style.left = "-1000px" }, 20)
            }

            function s(n, o) { location.href = n, l && clearTimeout(l), l = setTimeout(function() { o(!0) }, 3e3) }
            var a = n("common:bdbox/utils/detect")(),
                c = n("common:bdbox/utils/version_compare"),
                u = n("common:bdbox/utils/ready"),
                l = null;
            t.exports = i
        }), r("common:bdbox/monitor", function(o, e, t, r) {
            var i = encodeURIComponent,
                s = function(n, o) { n += n.indexOf("?") < 0 ? "?" : "&", this.url = n, this.options = o };
            s.prototype.report = function(o) {
                o = o || "";
                var e = new Image(1, 1),
                    t = [];
                if (r.isObject(o)) {
                    for (var s in o) t.push(s + "=" + i(String(o[s])));
                    o = t.join("&") }
                var a = "_box_mt" + r.getId();
                n[a] = e, e.onload = e.onerror = e.onabort = function() { e.onload = e.onerror = e.onabort = null, n[a] = e = null };
                var c = this.url + o;
                return r.isFunction(this.options.customHandler) && (c = this.options.customHandler(c)), e.src = c + "&_rnd=" + Math.floor(2147483648 * Math.random()), this
            }, s.prototype.main = function(n, o) {
                return n && r.isFunction(this[n]) && this[n].apply(this, r.toArray(o || [])), this
            }, t.exports = function(n, o) {
                return new s(n, o) }
        }), r("common:bdbox/clone", function(n, o, e) {
            var t = Object.prototype.toString,
                r = function(n, o, e) {
                    var t = 0;
                    for (var r in n)
                        if (n.hasOwnProperty(r))
                            if (e) o[r] = n[r];
                            else if (o(r, n[r], t++)) break },
                i = function(n) {
                    var o;
                    switch (t.call(n)) {
                        case "[object Object]":
                            o = {}, r(n, function(n, e) {
                                o[n] = i(e)
                            });
                            break;
                        case "[object Array]":
                            o = [], n.forEach(function(n) { o.push(i(n)) });
                            break;
                        default:
                            o = n
                    }
                    return o
                };
            e.exports = i
        }), r("common:bdbox/monitor/pblog", function(n, o, e, t) {
            var r = n("common:bdbox/monitor"),
                i = n("common:bdbox/extend"),
                s = n("common:bdbox/utils/queryToJson"),
                a = n("common:bdbox/utils/getVersion"),
                c = n("common:bdbox/clone"),
                u = s(location.search),
                l = navigator.userAgent,
                d = "//m.baidu.com/tcbox",
                f = { service: "bdbox", action: "pblog", ctv: 2, cen: "uid_ua_ut", data: { appid: "1", dataid: "2", actiontype: "1", actionid: "2", actiondata: { ref: u.ref || "", gmv: u.vmgdb || "", source: u.from || u.ref || "", boxVersion: a(), boxPlatform: l.match(/(iPad|iPhone|iPod)/gim) ? "ios" : "android" } } },
                m = encodeURIComponent;
            u.uid && u.osname && ["osname", "ua", "ut", "from", "cfrom", "uid", "pkgname"].forEach(function(n) { u[n] && (f[n] = u[n]) });
            var p, v = r(d, {
                customHandler: function(n) {
                    var o = [];
                    if (p)
                        for (var e in p)
                            if (p.hasOwnProperty(e)) {
                                var r = p[e];
                                t.isPlainObject(r) && (r = JSON.stringify(r)), o.push(e + "=" + m(r)) }
                    return o.length && (n += o.join("&")), n
                }
            });
            v.init = function(n, o) { t.isPlainObject(o) && (f = i(f, o)), f.data.cateid = n }, v.pv = function(n, o) { p = c(f);
                var e = p.data;
                e.actionid = "1";
                var t = {};
                return t.url = n || location.href, o && (t.u = o), e.actiondata = i(e.actiondata, t), v.report() }, v.event = function(n, o, e) {
                if (!n) throw "monitor.tc.event need a evtName";
                if (t.isPlainObject(o) && !e) {
                    var r = { evtName: n };
                    for (var s in o) r[s] = o[s]
                } else var r = { evtName: n, evtType: o || "", evtTag: e || "" };
                p = c(f);
                var a = p.data;
                return a.actionid = "2", a.actiondata = i(a.actiondata, r), v.report()
            }, e.exports = function() { v.main.apply(v, arguments) }
        }), r("common:bdbox/moplus", function(n, o, e, t) {
            var r = n("common:bdbox/utils/jsonToQuery"),
                i = n("common:bdbox/io/loadJS"),
                s = n("common:bdbox/utils/version_compare"),
                a = n("common:bdbox/monitor/pblog"),
                c = n("common:bdbox/schema"),
                u = "com.baidu.searchbox",
                l = "http://127.0.0.1:6259/",
                d = "http://127.0.0.1:40310/",
                f = "inapp_boxserver",
                m = "https:" === location.protocol,
                p = 500,
                v = null,
                h = "__moplus_host__",
                b = {
                    isSendPv: !1,
                    isHit: !1,
                    parseUA: function() {
                        var n, o, e = navigator.userAgent,
                            t = { uc: /UCBrowser\/(\S*) \S*/g, bd: /baidubrowser\/(\S*) \(Baidu/g, qq: /MQQBrowser\/(\S*) Mobile/g, chr: /Chrome\/(\S*) Mobile/g, qh: /360 Aphone Browser \((\S*)\)/g, sg: /SogouMobileBrowser\/(\S*)/g, mi: /MiuiBrowser\/(\S*)/g };
                        for (var r in t) {
                            var i = t[r].exec(e);
                            if (i) { n = r, o = i[1];
                                break } }
                        return n = n ? n : "other", o = o ? o : "0", { t: n, v: o }
                    },
                    parseHost: function() {
                        return g.curHost === d ? 1 : 0 },
                    sendEvt: function(n, o, e, t) { this.isHit && this.send(n, o, e, t) },
                    send: function(n, o, e, t) {
                        var r = this.parseUA(),
                            i = r.t,
                            s = r.v,
                            c = m ? 0 : 1,
                            u = this.parseHost();
                        a("event", [n, { evtType: o || "", brName: i, brVer: s, isHttp: c, isNew: u, source: e || "", intent: t || "" }])
                    },
                    init: function() { this.isHit = Date.now() % 100 === 1, a("init", [2]) }
                },
                g = function(n, o, e) { this.version = "2.0", this.isHttps = m, this.curHost = e || "", this.newHost = d, this.oldHost = this.isHttps ? d : l, this.MCMDF = o || f, this._infoFuncs = [], this._verFuncs = [], this.minVersion = n ? n : 0, this.pkgName = u, b.init() },
                y = function(n, o) {
                    try {
                        sessionStorage.setItem(n, o)
                    } catch (e) {}
                },
                x = function(n) {
                    var o;
                    try { o = sessionStorage.getItem(n) } catch (e) {}
                    return o };
            g.prototype = {
                constructor: g,
                setMcmdf: function(n) {
                    return this.MCMDF = n, this },
                setHost: function(n) {
                    return this.curHost = n, y(h, n), this },
                getHost: function() {
                    if (this.isHttps) return this.curHost = this.newHost, this.newHost;
                    var n = x(h);
                    return n ? (this.curHost = n, this.curHost) : void 0
                },
                api: function(n, o, e, i) {
                    if (!n) throw "Moplus.api need an action";
                    t.isFunction(o) && (i = e, e = o, o = {});
                    var s = n + (~n.indexOf("?") ? "&" : "?") + r(o);
                    return ~s.indexOf("mcmdf") || (s += "&mcmdf=" + this.MCMDF), b.sendEvt("api", "send:" + n, this.MCMDF, s), this.request(s, function(o) {
                        b.sendEvt("api", (t.isPlainObject(o) && 0 == o.error ? "success:" : "fail:") + n, this.MCMDF, s), e(o)
                    }, i)
                },
                getInfo: function(n, o) {
                    if (v) return n(v);
                    if (this._infoFuncs.push(n), !(this._infoFuncs.length > 1)) {
                        var e = this,
                            r = function(n, o) {!o && t.isPlainObject(n) && (v = n);
                                var r;
                                for (o && (n = { error: 33 }); r = e._infoFuncs.shift();) r(n) },
                            s = "getsearchboxinfo?mcmdf=" + this.MCMDF;
                        if (this.getHost()) {
                            var a = {
                                url: this.curHost + s + "&callback=?",
                                success: r,
                                error: function() {
                                    r(null, !0)
                                },
                                timeout: o
                            };
                            i(a)
                        } else this.request(s, function(n) {
                            return 33 === n.error ? r(null, !0) : void r(n) }, o);
                        return this
                    }
                },
                getHVersion: function(n, o) {
                    this._verFuncs.push(n);
                    var e = this;
                    if (!(this._verFuncs.length > 1)) {
                        var t = function(n) {
                            var o;
                            for (n = e.parseInfo(n); o = e._verFuncs.shift();) o(n) };
                        return this.getInfo(t, o), this
                    }
                },
                parseInfo: function(n, o) {
                    n = n || v, o = o || this.minVersion;
                    var e = n.package_infos;
                    if (!e || 0 === e.length) return !1;
                    var t = u,
                        r = { offic: { name: u, version: 0 }, oem: { version: 0 } };
                    return e.forEach(function(n) {
                        var e = n.version_name,
                            i = n.package_name;
                        s(e, o) >= 0 && (i === t ? 1 === s(e, r.offic.version) && (r.offic = { version: e, name: u }) : 1 === s(e, r.oem.version) && (r.oem = { version: e, name: i }))
                    }), 0 === r.oem.version && 0 === r.offic.version ? !1 : 0 !== r.offic.version ? r.offic : 0 !== r.oem.version ? r.oem : void 0
                },
                schema: function(n, o) {
                    if (!n.intent) throw "schema intent is empty";
                    n.mcmdf || (n.mcmdf = this.MCMDF);
                    var e = function() {
                            b.sendEvt("schema", "success", n.source, n.intent), t.isFunction(o) && o({ error: 0, from: "schema" })
                        },
                        r = function() { b.sendEvt("schema", "fail", n.source, n.intent), t.isFunction(o) && o({ error: 20, from: "schema" }) },
                        i = n.schema || "";
                    if (n.intent && !n.schema) {
                        var s = n.intent; - 1 == s.indexOf(u) && (b.sendEvt("defaultPKGName", "fail", n.source || "", n.intent), n.minver = n.minver ? n.minver : "6.9.1") }
                    i || (i = "baiduboxapp://utils?action=sendIntent&params=" + encodeURIComponent(JSON.stringify(n)) + "&minver=" + (n.minver ? n.minver : "6.9")), c(i, function(n) {
                        n ? r() : e()
                    })
                },
                sendIntent: function(n, o, e) {
                    var r = {};
                    if (n && t.isString(n)) {
                        var i, s = this,
                            a = !0;
                        return t.isPlainObject(e) ? (r = e, i = e.source || "", e.needlog ? b.isHit = e.needlog : r.needlog = b.isHit ? 1 : 0, e = e.timeout) : t.isBoolean(e) && (a = e), r.intent = n, b.sendEvt("sendintent", "send", i, n), this.api("sendintent", { intent: encodeURIComponent(n) }, function(e) {
                            !e || e && 33 === e.error || !t.isPlainObject(e) ? (b.sendEvt("sendintent", "fail", i, n), a ? s.schema(r, o) : (e = e || {}, e.from = "moplus", o(e))) : (b.sendEvt("sendintent", "success", i, n), o(e))
                        }, e)
                    }
                    return this
                },
                request: function(n, o, e) {
                    var r, s, a = this,
                        c = { timeout: e };
                    t.isFunction(o) && !~n.indexOf("callback=") && (n += "&callback=?");
                    var u = function(n) { r = "success", t.isFunction(o) && o(n) },
                        l = function() { t.isFunction(o) && o({ error: 33 }) };
                    if (a.getHost()) c.url = a.curHost + n, c.success = u, c.error = l, i(c);
                    else if (c.url = a.newHost + n, c.success = function(n) {
                            "success" !== r && (s && clearTimeout(s), a.setHost(a.newHost), u(n))
                        }, c.error = function() { a.isHttps ? (r = "error", l()) : "error" === r && l(), r = "error" }, i(c), !a.isHttps) {
                        var d = { timeout: e, url: a.oldHost + n, error: c.error };
                        d.success = function(n) { "success" !== r && ("error" === r ? (a.setHost(a.oldHost), u(n)) : s = setTimeout(function() { a.setHost(a.oldHost), u(n) }, p)) }, i(d) }
                    return this
                }
            }, e.exports = function(n, o) {
                return new g(n, o)
            }, e.exports.Moplus = g
        }), d.version_compare(d.version, "5.3.5") >= 0) {
        var h, b = { image: "imageUrl", url: "linkUrl", order: "mediaType" },
            g = "";
        n[g] = d.emptyFn, d.isAndroid ? (h = function(n) {
            if (n.id && d.byId(n.id)) {
                var o = n.eventType || "touchstart";
                d.byId(n.id).addEventListener(o, function() { e(n) }, !0) }
            var e = function(o) {
                o = a(o || n);
                var e = o.error,
                    t = o.success;
                o.iconUrl && o.imageUrl && delete o.imageUrl, d.android.invokeApp("Bdbox_android_utils", "callShare", [JSON.stringify(o), t || "console.log", e || "console.log"])
            };
            return e
        }, m("share", h)) : (h = function(n) {
            if (n.id && d.byId(n.id)) {
                var o = n.eventType || "touchstart";
                d.byId(n.id).addEventListener(o, function() {
                    e(n)
                }, !0)
            }
            var e = function(o) { o = a(o || n);
                var e = o.error,
                    t = o.success;
                o.iconUrl && !o.imageUrl && (o.imageUrl = o.iconUrl), o = JSON.stringify(o), d.ios.invokeApp("callShare", { options: encodeURIComponent(o), errorcallback: e || "console.log", successcallback: t || "console.log" }) };
            return e
        }, m("share", h))
    } else {
        var y = [],
            x = function() {
                m._socShare && m._socShare.init ? y.forEach(function(n) {
                    m._socShare.init(n)
                }) : setTimeout(x, 3e3)
            };
        d.io.loadJS("//m.baidu.com/static/searchbox/openjs/share.js?v=1.2", x);
        var _ = { source: "client_id", id: "dom_id", image: "pic_url", success: "afterRender" },
            h = function(n) {
                var o = { content: "", client_id: "ZVEpDSsmZ0qxa1gmgDAh1Fje", theme: "native", dom_id: "share", animate: !0, pic_url: "", url: encodeURIComponent(location.href) };
                return d.isObject(n) && d.each(n, function(n, e) {
                        if (e in _ && (e = _[e]), "order" === e && d.isArray(n)) {
                            var t = [];
                            n.forEach(function(n) { "email" === n && (n = "mail"), t.push(n) }) }
                        o[e] = n }), delete o.success, delete o.error, delete o.afterRender, "all" === o.order ? o.order = ["qqdenglu", "sinaweibo", "renren", "kaixin", "mail", "sms"] : d.isString(o.order) && (o.order = o.order.split(",")), m._socShare && m._socShare.init ? m._socShare.init(o) : y.push(o),
                    function() {
                        m._socShare.ui._shareBtnClickHandler()
                    }
            };
        m("share", h)
    }
    if (r("common:bdbox/distribute", function(n, o, e, t) {
            var r = n("common:bdbox/schema");
            n("common:bdbox/utils/detect");
            var i = n("common:bdbox/each"),
                s = n("common:bdbox/moplus"),
                a = t.emptyFn,
                c = { qqDownloadUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox", androidDownloadUrl: "", iosDownloadUrl: "", iosFailCallback: a, androidFailCallback: a, iosSchema: "", androidSchema: "", androidIntent: "", inBoxCallback: a },
                u = function(n) {
                    var o = this;
                    n && i(c, function(o, e) { n[e] = n[e] || o });
                    var e = this.url = n.url;
                    e && "" !== e ? (this.androidIntent = "intent://" + e.replace(/^http[s]?:\/\//, "") + "#Intent;scheme=http;action=com.baidu.searchbox.action.VIEW;category=android.intent.category.DEFAULT;end", this.iosSchema = "baiduboxapp://easybrowse?openurl=" + encodeURIComponent(e) + "&opentype=0&isla=0&append=0&minver=5.3.0.0") : ["androidIntent", "iosSchema", "androidSchema"].forEach(function(e) {
                        o[e] = n[e]
                    }), this.options = n, this.fail = function() {
                        if (console.log(t.os.name + " fail"), t.isFunction(n[t.os.name + "FailCallback"])) {
                            var o = n[t.os.name + "FailCallback"]();
                            if (t.isBoolean(o) && !o) return }
                        var e = n[t.os.name + "DownloadUrl"];
                        e && "" !== e && (location.href = n[t.os.name + "DownloadUrl"]) }, this.success = function() {
                        return console.log(t.os.name + " success"), t.isFunction(n[t.os.name + "SuccessCallback"]) ? n[t.os.name + "SuccessCallback"]() : void 0
                    }
                };
            u.prototype.wechat = function() {
                var n = this.options;
                if (t.isFunction(n.wechatCallback)) {
                    var o = n.wechatCallback();
                    if (t.isBoolean(o) && !o) return }
                n.qqDownloadUrl && "" !== n.qqDownloadUrl && (location.href = n.qqDownloadUrl) }, u.prototype.run = function() {
                var n = this,
                    o = (n.url, n.options);
                return t.os.isWechat ? n.wechat() : t.isBox && t.isFunction(o.inBoxCallback) ? o.inBoxCallback() : void this.invoke()
            }, u.prototype.invoke = function() {
                var n = this;
                if (t.os.android) {
                    var o = s();
                    o.getHVersion(function(e) { e ? o.sendIntent(n.androidIntent, function(o) { 0 == o.error ? n.success() : n.fail() }, 1e3) : n.androidSchema ? r(n.androidSchema, function(o) { o ? n.fail() : n.success() }) : n.fail() }) } else r(n.iosSchema, function(o) {
                    o ? n.fail() : n.success()
                })
            }, e.exports = function(n) {
                return new u(n) }
        }), each(d, function(n, o) { m[o] = n }), n.Box && n.Box.$)
        for (var S in m) n.Box[S] = n.Box[S] || m[S];
    else n.Box = m
}(window, document);
