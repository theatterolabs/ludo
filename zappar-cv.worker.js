(() => {
    var e = {
            238: function(e, t, r) {
                var i;
                ! function(a, n) {
                    "use strict";
                    var o = "function",
                        s = "undefined",
                        _ = "object",
                        c = "string",
                        u = "model",
                        f = "name",
                        l = "type",
                        d = "vendor",
                        p = "version",
                        h = "architecture",
                        m = "console",
                        b = "mobile",
                        w = "tablet",
                        g = "smarttv",
                        y = "wearable",
                        v = "embedded",
                        E = "Amazon",
                        A = "Apple",
                        T = "ASUS",
                        x = "BlackBerry",
                        k = "Browser",
                        R = "Chrome",
                        L = "Firefox",
                        F = "Google",
                        z = "Huawei",
                        M = "LG",
                        I = "Microsoft",
                        P = "Motorola",
                        O = "Opera",
                        S = "Samsung",
                        B = "Sharp",
                        D = "Sony",
                        C = "Xiaomi",
                        U = "Zebra",
                        V = "Facebook",
                        N = function(e) {
                            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
                            return t
                        },
                        q = function(e, t) {
                            return typeof e === c && -1 !== G(t).indexOf(G(e))
                        },
                        G = function(e) {
                            return e.toLowerCase()
                        },
                        W = function(e, t) {
                            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 350)
                        },
                        H = function(e, t) {
                            for (var r, i, a, s, c, u, f = 0; f < t.length && !c;) {
                                var l = t[f],
                                    d = t[f + 1];
                                for (r = i = 0; r < l.length && !c;)
                                    if (c = l[r++].exec(e))
                                        for (a = 0; a < d.length; a++) u = c[++i], typeof(s = d[a]) === _ && s.length > 0 ? 2 === s.length ? typeof s[1] == o ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== o || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : n : this[s[0]] = u ? s[1].call(this, u, s[2]) : n : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : n) : this[s] = u || n;
                                f += 2
                            }
                        },
                        Y = function(e, t) {
                            for (var r in t)
                                if (typeof t[r] === _ && t[r].length > 0) {
                                    for (var i = 0; i < t[r].length; i++)
                                        if (q(t[r][i], e)) return "?" === r ? n : r
                                } else if (q(t[r], e)) return "?" === r ? n : r;
                            return e
                        },
                        X = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        Z = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [p, [f, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [p, [f, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [f, p],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [p, [f, O + " Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [p, [f, O]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [f, p],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [p, [f, "UC" + k]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                [p, [f, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [p, [f, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [p, [f, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [p, [f, "IE"]],
                                [/yabrowser\/([\w\.]+)/i],
                                [p, [f, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 Secure " + k], p
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [p, [f, L + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [p, [f, O + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [p, [f, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [p, [f, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [p, [f, O + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [p, [f, "MIUI " + k]],
                                [/fxios\/([-\w\.]+)/i],
                                [p, [f, L]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [f, "360 " + k]
                                ],
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 " + k], p
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [f, /_/g, " "], p
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [f, p],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [f],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [f, V], p
                                ],
                                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                [f, p],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [p, [f, "GSA"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [p, [f, R + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [f, R + " WebView"], p
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [p, [f, "Android " + k]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [f, p],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [p, [f, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [p, f],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [f, [p, Y, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [f, p],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [f, "Netscape"], p
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [p, [f, L + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                [f, p],
                                [/(cobalt)\/([\w\.]+)/i],
                                [f, [p, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [h, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [h, G]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [h, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [h, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [h, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [h, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [h, /ower/, "", G]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [h, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [h, G]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [u, [d, S],
                                    [l, w]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [u, [d, S],
                                    [l, b]
                                ],
                                [/\((ip(?:hone|od)[\w ]*);/i],
                                [u, [d, A],
                                    [l, b]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [u, [d, A],
                                    [l, w]
                                ],
                                [/(macintosh);/i],
                                [u, [d, A]],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [u, [d, z],
                                    [l, w]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [u, [d, z],
                                    [l, b]
                                ],
                                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [u, /_/g, " "],
                                    [d, C],
                                    [l, b]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [u, /_/g, " "],
                                    [d, C],
                                    [l, w]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [u, [d, "OPPO"],
                                    [l, b]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [u, [d, "Vivo"],
                                    [l, b]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [u, [d, "Realme"],
                                    [l, b]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [u, [d, P],
                                    [l, b]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [u, [d, P],
                                    [l, w]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [u, [d, M],
                                    [l, w]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [u, [d, M],
                                    [l, b]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [u, [d, "Lenovo"],
                                    [l, w]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [u, /_/g, " "],
                                    [d, "Nokia"],
                                    [l, b]
                                ],
                                [/(pixel c)\b/i],
                                [u, [d, F],
                                    [l, w]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [u, [d, F],
                                    [l, b]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [u, [d, D],
                                    [l, b]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [u, "Xperia Tablet"],
                                    [d, D],
                                    [l, w]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [u, [d, "OnePlus"],
                                    [l, b]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [u, [d, E],
                                    [l, w]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [u, /(.+)/g, "Fire Phone $1"],
                                    [d, E],
                                    [l, b]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [u, d, [l, w]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [u, [d, x],
                                    [l, b]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [u, [d, T],
                                    [l, w]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [u, [d, T],
                                    [l, b]
                                ],
                                [/(nexus 9)/i],
                                [u, [d, "HTC"],
                                    [l, w]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [d, [u, /_/g, " "],
                                    [l, b]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [u, [d, "Acer"],
                                    [l, w]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [u, [d, "Meizu"],
                                    [l, b]
                                ],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [u, [d, B],
                                    [l, b]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [d, u, [l, b]],
                                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [d, u, [l, w]],
                                [/(surface duo)/i],
                                [u, [d, I],
                                    [l, w]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [u, [d, "Fairphone"],
                                    [l, b]
                                ],
                                [/(u304aa)/i],
                                [u, [d, "AT&T"],
                                    [l, b]
                                ],
                                [/\bsie-(\w*)/i],
                                [u, [d, "Siemens"],
                                    [l, b]
                                ],
                                [/\b(rct\w+) b/i],
                                [u, [d, "RCA"],
                                    [l, w]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [u, [d, "Dell"],
                                    [l, w]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [u, [d, "Verizon"],
                                    [l, w]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [u, [d, "Barnes & Noble"],
                                    [l, w]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [u, [d, "NuVision"],
                                    [l, w]
                                ],
                                [/\b(k88) b/i],
                                [u, [d, "ZTE"],
                                    [l, w]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [u, [d, "ZTE"],
                                    [l, b]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [u, [d, "Swiss"],
                                    [l, b]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [u, [d, "Swiss"],
                                    [l, w]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [u, [d, "Zeki"],
                                    [l, w]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [d, "Dragon Touch"], u, [l, w]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [u, [d, "Insignia"],
                                    [l, w]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [u, [d, "NextBook"],
                                    [l, w]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [d, "Voice"], u, [l, b]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [d, "LvTel"], u, [l, b]
                                ],
                                [/\b(ph-1) /i],
                                [u, [d, "Essential"],
                                    [l, b]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [u, [d, "Envizen"],
                                    [l, w]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [u, [d, "MachSpeed"],
                                    [l, w]
                                ],
                                [/\btu_(1491) b/i],
                                [u, [d, "Rotor"],
                                    [l, w]
                                ],
                                [/(shield[\w ]+) b/i],
                                [u, [d, "Nvidia"],
                                    [l, w]
                                ],
                                [/(sprint) (\w+)/i],
                                [d, u, [l, b]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [u, /\./g, " "],
                                    [d, I],
                                    [l, b]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [u, [d, U],
                                    [l, w]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [u, [d, U],
                                    [l, b]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [d, u, [l, m]],
                                [/droid.+; (shield) bui/i],
                                [u, [d, "Nvidia"],
                                    [l, m]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [u, [d, D],
                                    [l, m]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [u, [d, I],
                                    [l, m]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [d, [l, g]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [u, /^/, "SmartTV"],
                                    [d, S],
                                    [l, g]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [d, M],
                                    [l, g]
                                ],
                                [/(apple) ?tv/i],
                                [d, [u, A + " TV"],
                                    [l, g]
                                ],
                                [/crkey/i],
                                [
                                    [u, R + "cast"],
                                    [d, F],
                                    [l, g]
                                ],
                                [/droid.+aft(\w)( bui|\))/i],
                                [u, [d, E],
                                    [l, g]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [u, [d, B],
                                    [l, g]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [u, [d, D],
                                    [l, g]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [u, [d, C],
                                    [l, g]
                                ],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                [
                                    [d, W],
                                    [u, W],
                                    [l, g]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [l, g]
                                ],
                                [/((pebble))app/i],
                                [d, u, [l, y]],
                                [/droid.+; (glass) \d/i],
                                [u, [d, F],
                                    [l, y]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [u, [d, U],
                                    [l, y]
                                ],
                                [/(quest( 2)?)/i],
                                [u, [d, V],
                                    [l, y]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [d, [l, v]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [u, [l, b]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [u, [l, w]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [l, w]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [l, b]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [u, [d, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [p, [f, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [p, [f, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                [f, p],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [p, f]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [f, p],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [f, [p, Y, X]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [f, "Windows"],
                                    [p, Y, X]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [p, /_/g, "."],
                                    [f, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [f, "Mac OS"],
                                    [p, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [p, f],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [f, p],
                                [/\(bb(10);/i],
                                [p, [f, x]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [p, [f, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [p, [f, L + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [p, [f, "webOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [p, [f, R + "cast"]],
                                [/(cros) [\w]+ ([\w\.]+\w)/i],
                                [
                                    [f, "Chromium OS"], p
                                ],
                                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [f, p],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [f, "Solaris"], p
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                [f, p]
                            ]
                        },
                        j = function(e, t) {
                            if (typeof e === _ && (t = e, e = n), !(this instanceof j)) return new j(e, t).getResult();
                            var r = e || (typeof a !== s && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : ""),
                                i = t ? function(e, t) {
                                    var r = {};
                                    for (var i in e) t[i] && t[i].length % 2 == 0 ? r[i] = t[i].concat(e[i]) : r[i] = e[i];
                                    return r
                                }(Z, t) : Z;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t[f] = n, t[p] = n, H.call(t, r, i.browser), t.major = typeof(e = t.version) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : n, t
                            }, this.getCPU = function() {
                                var e = {};
                                return e[h] = n, H.call(e, r, i.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[d] = n, e[u] = n, e[l] = n, H.call(e, r, i.device), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[f] = n, e[p] = n, H.call(e, r, i.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[f] = n, e[p] = n, H.call(e, r, i.os), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return r
                            }, this.setUA = function(e) {
                                return r = typeof e === c && e.length > 350 ? W(e, 350) : e, this
                            }, this.setUA(r), this
                        };
                    j.VERSION = "1.0.33", j.BROWSER = N([f, p, "major"]), j.CPU = N([h]), j.DEVICE = N([u, d, l, m, b, g, w, y, v]), j.ENGINE = j.OS = N([f, p]), typeof t !== s ? (e.exports && (t = e.exports = j), t.UAParser = j) : r.amdO ? (i = function() {
                        return j
                    }.call(t, r, t, e)) === n || (e.exports = i) : typeof a !== s && (a.UAParser = j);
                    var K = typeof a !== s && (a.jQuery || a.Zepto);
                    if (K && !K.ua) {
                        var J = new j;
                        K.ua = J.getResult(), K.ua.get = function() {
                            return J.getUA()
                        }, K.ua.set = function(e) {
                            J.setUA(e);
                            var t = J.getResult();
                            for (var r in t) K.ua[r] = t[r]
                        }
                    }
                }("object" == typeof window ? window : this)
            },
            751: (e, t, r) => {
                "use strict";
                e.exports = r.p + "17b53fcc0ff7ee6350b4.wasm"
            }
        },
        t = {};

    function r(i) {
        var a = t[i];
        if (void 0 !== a) return a.exports;
        var n = t[i] = {
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, r), n.exports
    }
    r.m = e, r.amdO = {}, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var i = t.getElementsByTagName("script");
            i.length && (e = i[i.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e
    })(), r.b = self.location + "", (() => {
        "use strict";
        var e;
        const t = (e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function(t) {
            var r, i, a;
            t = t || {}, r || (r = void 0 !== t ? t : {}), r.ready = new Promise((function(e, t) {
                i = e, a = t
            }));
            var n, o = {};
            for (n in r) r.hasOwnProperty(n) && (o[n] = r[n]);
            var s = "./this.program";

            function _(e, t) {
                throw t
            }
            var c, u = "";
            u = self.location.href, e && (u = e), u = 0 !== u.indexOf("blob:") ? u.substr(0, u.lastIndexOf("/") + 1) : "", c = function(e) {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
            };
            var f, l, d = r.print || console.log.bind(console),
                p = r.printErr || console.warn.bind(console);
            for (n in o) o.hasOwnProperty(n) && (r[n] = o[n]);
            o = null, r.thisProgram && (s = r.thisProgram), r.quit && (_ = r.quit), r.wasmBinary && (l = r.wasmBinary);
            var h = r.noExitRuntime || !0;
            "object" != typeof WebAssembly && j("no native wasm support detected");
            var m, b, w = !1;

            function g(e, t) {
                e || j("Assertion failed: " + t)
            }

            function y(e) {
                var t = r["_" + e];
                return g(t, "Cannot call unknown function " + e + ", make sure it is exported"), t
            }
            var v, E, A, T, x, k, R, L, F, z = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

            function M(e, t, r) {
                var i = t + r;
                for (r = t; e[r] && !(r >= i);) ++r;
                if (16 < r - t && e.subarray && z) return z.decode(e.subarray(t, r));
                for (i = ""; t < r;) {
                    var a = e[t++];
                    if (128 & a) {
                        var n = 63 & e[t++];
                        if (192 == (224 & a)) i += String.fromCharCode((31 & a) << 6 | n);
                        else {
                            var o = 63 & e[t++];
                            65536 > (a = 224 == (240 & a) ? (15 & a) << 12 | n << 6 | o : (7 & a) << 18 | n << 12 | o << 6 | 63 & e[t++]) ? i += String.fromCharCode(a) : (a -= 65536, i += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a))
                        }
                    } else i += String.fromCharCode(a)
                }
                return i
            }

            function I(e, t) {
                return e ? M(A, e, t) : ""
            }

            function P(e, t, r, i) {
                if (!(0 < i)) return 0;
                var a = r;
                i = r + i - 1;
                for (var n = 0; n < e.length; ++n) {
                    var o = e.charCodeAt(n);
                    if (55296 <= o && 57343 >= o && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++n)), 127 >= o) {
                        if (r >= i) break;
                        t[r++] = o
                    } else {
                        if (2047 >= o) {
                            if (r + 1 >= i) break;
                            t[r++] = 192 | o >> 6
                        } else {
                            if (65535 >= o) {
                                if (r + 2 >= i) break;
                                t[r++] = 224 | o >> 12
                            } else {
                                if (r + 3 >= i) break;
                                t[r++] = 240 | o >> 18, t[r++] = 128 | o >> 12 & 63
                            }
                            t[r++] = 128 | o >> 6 & 63
                        }
                        t[r++] = 128 | 63 & o
                    }
                }
                return t[r] = 0, r - a
            }

            function O(e) {
                for (var t = 0, r = 0; r < e.length; ++r) {
                    var i = e.charCodeAt(r);
                    55296 <= i && 57343 >= i && (i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++r)), 127 >= i ? ++t : t = 2047 >= i ? t + 2 : 65535 >= i ? t + 3 : t + 4
                }
                return t
            }

            function S(e) {
                var t = O(e) + 1,
                    r = _r(t);
                return r && P(e, E, r, t), r
            }

            function B(e, t) {
                for (var r = 0; r < e.length; ++r) E[t++ >> 0] = e.charCodeAt(r);
                E[t >> 0] = 0
            }

            function D() {
                var e = m.buffer;
                v = e, r.HEAP8 = E = new Int8Array(e), r.HEAP16 = T = new Int16Array(e), r.HEAP32 = k = new Int32Array(e), r.HEAPU8 = A = new Uint8Array(e), r.HEAPU16 = x = new Uint16Array(e), r.HEAPU32 = R = new Uint32Array(e), r.HEAPF32 = L = new Float32Array(e), r.HEAPF64 = F = new Float64Array(e)
            }
            var C, U = [],
                V = [],
                N = [],
                q = [];

            function G() {
                var e = r.preRun.shift();
                U.unshift(e)
            }
            var W = 0,
                H = null,
                Y = null;

            function X() {
                W++, r.monitorRunDependencies && r.monitorRunDependencies(W)
            }

            function Z() {
                if (W--, r.monitorRunDependencies && r.monitorRunDependencies(W), 0 == W && (null !== H && (clearInterval(H), H = null), Y)) {
                    var e = Y;
                    Y = null, e()
                }
            }

            function j(e) {
                throw r.onAbort && r.onAbort(e), p(e), w = !0, b = 1, e = new WebAssembly.RuntimeError("abort(" + e + "). Build with -s ASSERTIONS=1 for more info."), a(e), e
            }
            r.preloadedImages = {}, r.preloadedAudios = {};
            var K, J, $, Q = "zappar-cv.wasm";
            if (String.prototype.startsWith ? !Q.startsWith("data:application/octet-stream;base64,") : 0 !== Q.indexOf("data:application/octet-stream;base64,")) {
                var ee = Q;
                Q = r.locateFile ? r.locateFile(ee, u) : u + ee
            }

            function te(e) {
                for (; 0 < e.length;) {
                    var t = e.shift();
                    if ("function" == typeof t) t(r);
                    else {
                        var i = t.vd;
                        "number" == typeof i ? void 0 === t.Oc ? C.get(i)() : C.get(i)(t.Oc) : i(void 0 === t.Oc ? null : t.Oc)
                    }
                }
            }

            function re(e, t) {
                if (0 === e) e = Date.now();
                else {
                    if (1 !== e && 4 !== e) return k[ur() >> 2] = 28, -1;
                    e = $()
                }
                return k[t >> 2] = e / 1e3 | 0, k[t + 4 >> 2] = e % 1e3 * 1e6 | 0, 0
            }

            function ie(e) {
                this.Hc = e - 16, this.Md = function(e) {
                    k[this.Hc + 8 >> 2] = e
                }, this.Jd = function(e) {
                    k[this.Hc + 0 >> 2] = e
                }, this.Kd = function() {
                    k[this.Hc + 4 >> 2] = 0
                }, this.Id = function() {
                    E[this.Hc + 12 >> 0] = 0
                }, this.Ld = function() {
                    E[this.Hc + 13 >> 0] = 0
                }, this.yd = function(e, t) {
                    this.Md(e), this.Jd(t), this.Kd(), this.Id(), this.Ld()
                }
            }

            function ae(e, t) {
                for (var r = 0, i = e.length - 1; 0 <= i; i--) {
                    var a = e[i];
                    "." === a ? e.splice(i, 1) : ".." === a ? (e.splice(i, 1), r++) : r && (e.splice(i, 1), r--)
                }
                if (t)
                    for (; r; r--) e.unshift("..");
                return e
            }

            function ne(e) {
                var t = "/" === e.charAt(0),
                    r = "/" === e.substr(-1);
                return (e = ae(e.split("/").filter((function(e) {
                    return !!e
                })), !t).join("/")) || t || (e = "."), e && r && (e += "/"), (t ? "/" : "") + e
            }

            function oe(e) {
                var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
                return e = t[0], t = t[1], e || t ? (t && (t = t.substr(0, t.length - 1)), e + t) : "."
            }

            function se(e) {
                if ("/" === e) return "/";
                var t = (e = (e = ne(e)).replace(/\/$/, "")).lastIndexOf("/");
                return -1 === t ? e : e.substr(t + 1)
            }

            function _e() {
                for (var e = "", t = !1, r = arguments.length - 1; - 1 <= r && !t; r--) {
                    if ("string" != typeof(t = 0 <= r ? arguments[r] : "/")) throw new TypeError("Arguments to path.resolve must be strings");
                    if (!t) return "";
                    e = t + "/" + e, t = "/" === t.charAt(0)
                }
                return (t ? "/" : "") + (e = ae(e.split("/").filter((function(e) {
                    return !!e
                })), !t).join("/")) || "."
            }
            $ = function() {
                return performance.now()
            };
            var ce = [];

            function ue(e, t) {
                ce[e] = {
                    input: [],
                    wc: [],
                    Gc: t
                }, Se(e, fe)
            }
            var fe = {
                    open: function(e) {
                        var t = ce[e.node.Lc];
                        if (!t) throw new Ee(43);
                        e.uc = t, e.seekable = !1
                    },
                    close: function(e) {
                        e.uc.Gc.flush(e.uc)
                    },
                    flush: function(e) {
                        e.uc.Gc.flush(e.uc)
                    },
                    read: function(e, t, r, i) {
                        if (!e.uc || !e.uc.Gc.hd) throw new Ee(60);
                        for (var a = 0, n = 0; n < i; n++) {
                            try {
                                var o = e.uc.Gc.hd(e.uc)
                            } catch (e) {
                                throw new Ee(29)
                            }
                            if (void 0 === o && 0 === a) throw new Ee(6);
                            if (null == o) break;
                            a++, t[r + n] = o
                        }
                        return a && (e.node.timestamp = Date.now()), a
                    },
                    write: function(e, t, r, i) {
                        if (!e.uc || !e.uc.Gc.$c) throw new Ee(60);
                        try {
                            for (var a = 0; a < i; a++) e.uc.Gc.$c(e.uc, t[r + a])
                        } catch (e) {
                            throw new Ee(29)
                        }
                        return i && (e.node.timestamp = Date.now()), a
                    }
                },
                le = {
                    hd: function(e) {
                        if (!e.input.length) {
                            var t = null;
                            if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (t = window.prompt("Input: ")) && (t += "\n") : "function" == typeof readline && null !== (t = readline()) && (t += "\n"), !t) return null;
                            e.input = ar(t, !0)
                        }
                        return e.input.shift()
                    },
                    $c: function(e, t) {
                        null === t || 10 === t ? (d(M(e.wc, 0)), e.wc = []) : 0 != t && e.wc.push(t)
                    },
                    flush: function(e) {
                        e.wc && 0 < e.wc.length && (d(M(e.wc, 0)), e.wc = [])
                    }
                },
                de = {
                    $c: function(e, t) {
                        null === t || 10 === t ? (p(M(e.wc, 0)), e.wc = []) : 0 != t && e.wc.push(t)
                    },
                    flush: function(e) {
                        e.wc && 0 < e.wc.length && (p(M(e.wc, 0)), e.wc = [])
                    }
                },
                pe = {
                    zc: null,
                    Bc: function() {
                        return pe.createNode(null, "/", 16895, 0)
                    },
                    createNode: function(e, t, r, i) {
                        if (24576 == (61440 & r) || 4096 == (61440 & r)) throw new Ee(63);
                        return pe.zc || (pe.zc = {
                            dir: {
                                node: {
                                    yc: pe.qc.yc,
                                    Ac: pe.qc.Ac,
                                    Jc: pe.qc.Jc,
                                    Qc: pe.qc.Qc,
                                    nd: pe.qc.nd,
                                    Wc: pe.qc.Wc,
                                    od: pe.qc.od,
                                    Rc: pe.qc.Rc,
                                    Sc: pe.qc.Sc
                                },
                                stream: {
                                    Ec: pe.sc.Ec
                                }
                            },
                            file: {
                                node: {
                                    yc: pe.qc.yc,
                                    Ac: pe.qc.Ac
                                },
                                stream: {
                                    Ec: pe.sc.Ec,
                                    read: pe.sc.read,
                                    write: pe.sc.write,
                                    cd: pe.sc.cd,
                                    jd: pe.sc.jd,
                                    ld: pe.sc.ld
                                }
                            },
                            link: {
                                node: {
                                    yc: pe.qc.yc,
                                    Ac: pe.qc.Ac,
                                    Mc: pe.qc.Mc
                                },
                                stream: {}
                            },
                            dd: {
                                node: {
                                    yc: pe.qc.yc,
                                    Ac: pe.qc.Ac
                                },
                                stream: Oe
                            }
                        }), 16384 == (61440 & (r = Le(e, t, r, i)).mode) ? (r.qc = pe.zc.dir.node, r.sc = pe.zc.dir.stream, r.rc = {}) : 32768 == (61440 & r.mode) ? (r.qc = pe.zc.file.node, r.sc = pe.zc.file.stream, r.tc = 0, r.rc = null) : 40960 == (61440 & r.mode) ? (r.qc = pe.zc.link.node, r.sc = pe.zc.link.stream) : 8192 == (61440 & r.mode) && (r.qc = pe.zc.dd.node, r.sc = pe.zc.dd.stream), r.timestamp = Date.now(), e && (e.rc[t] = r, e.timestamp = r.timestamp), r
                    },
                    Yd: function(e) {
                        return e.rc ? e.rc.subarray ? e.rc.subarray(0, e.tc) : new Uint8Array(e.rc) : new Uint8Array(0)
                    },
                    ed: function(e, t) {
                        var r = e.rc ? e.rc.length : 0;
                        r >= t || (t = Math.max(t, r * (1048576 > r ? 2 : 1.125) >>> 0), 0 != r && (t = Math.max(t, 256)), r = e.rc, e.rc = new Uint8Array(t), 0 < e.tc && e.rc.set(r.subarray(0, e.tc), 0))
                    },
                    Gd: function(e, t) {
                        if (e.tc != t)
                            if (0 == t) e.rc = null, e.tc = 0;
                            else {
                                var r = e.rc;
                                e.rc = new Uint8Array(t), r && e.rc.set(r.subarray(0, Math.min(t, e.tc))), e.tc = t
                            }
                    },
                    qc: {
                        yc: function(e) {
                            var t = {};
                            return t.td = 8192 == (61440 & e.mode) ? e.id : 1, t.Zc = e.id, t.mode = e.mode, t.Ed = 1, t.uid = 0, t.wd = 0, t.Lc = e.Lc, 16384 == (61440 & e.mode) ? t.size = 4096 : 32768 == (61440 & e.mode) ? t.size = e.tc : 40960 == (61440 & e.mode) ? t.size = e.link.length : t.size = 0, t.pd = new Date(e.timestamp), t.Dd = new Date(e.timestamp), t.sd = new Date(e.timestamp), t.qd = 4096, t.rd = Math.ceil(t.size / t.qd), t
                        },
                        Ac: function(e, t) {
                            void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && pe.Gd(e, t.size)
                        },
                        Jc: function() {
                            throw Ae[44]
                        },
                        Qc: function(e, t, r, i) {
                            return pe.createNode(e, t, r, i)
                        },
                        nd: function(e, t, r) {
                            if (16384 == (61440 & e.mode)) {
                                try {
                                    var i = Re(t, r)
                                } catch (e) {}
                                if (i)
                                    for (var a in i.rc) throw new Ee(55)
                            }
                            delete e.parent.rc[e.name], e.parent.timestamp = Date.now(), e.name = r, t.rc[r] = e, t.timestamp = e.parent.timestamp, e.parent = t
                        },
                        Wc: function(e, t) {
                            delete e.rc[t], e.timestamp = Date.now()
                        },
                        od: function(e, t) {
                            var r, i = Re(e, t);
                            for (r in i.rc) throw new Ee(55);
                            delete e.rc[t], e.timestamp = Date.now()
                        },
                        Rc: function(e) {
                            var t, r = [".", ".."];
                            for (t in e.rc) e.rc.hasOwnProperty(t) && r.push(t);
                            return r
                        },
                        Sc: function(e, t, r) {
                            return (e = pe.createNode(e, t, 41471, 0)).link = r, e
                        },
                        Mc: function(e) {
                            if (40960 != (61440 & e.mode)) throw new Ee(28);
                            return e.link
                        }
                    },
                    sc: {
                        read: function(e, t, r, i, a) {
                            var n = e.node.rc;
                            if (a >= e.node.tc) return 0;
                            if (8 < (e = Math.min(e.node.tc - a, i)) && n.subarray) t.set(n.subarray(a, a + e), r);
                            else
                                for (i = 0; i < e; i++) t[r + i] = n[a + i];
                            return e
                        },
                        write: function(e, t, r, i, a, n) {
                            if (t.buffer === E.buffer && (n = !1), !i) return 0;
                            if ((e = e.node).timestamp = Date.now(), t.subarray && (!e.rc || e.rc.subarray)) {
                                if (n) return e.rc = t.subarray(r, r + i), e.tc = i;
                                if (0 === e.tc && 0 === a) return e.rc = t.slice(r, r + i), e.tc = i;
                                if (a + i <= e.tc) return e.rc.set(t.subarray(r, r + i), a), i
                            }
                            if (pe.ed(e, a + i), e.rc.subarray && t.subarray) e.rc.set(t.subarray(r, r + i), a);
                            else
                                for (n = 0; n < i; n++) e.rc[a + n] = t[r + n];
                            return e.tc = Math.max(e.tc, a + i), i
                        },
                        Ec: function(e, t, r) {
                            if (1 === r ? t += e.position : 2 === r && 32768 == (61440 & e.node.mode) && (t += e.node.tc), 0 > t) throw new Ee(28);
                            return t
                        },
                        cd: function(e, t, r) {
                            pe.ed(e.node, t + r), e.node.tc = Math.max(e.node.tc, t + r)
                        },
                        jd: function(e, t, r, i, a, n) {
                            if (0 !== t) throw new Ee(28);
                            if (32768 != (61440 & e.node.mode)) throw new Ee(43);
                            if (e = e.node.rc, 2 & n || e.buffer !== v) {
                                for ((0 < i || i + r < e.length) && (e = e.subarray ? e.subarray(i, i + r) : Array.prototype.slice.call(e, i, i + r)), i = !0, n = 16384 * Math.ceil(r / 16384), t = _r(n); r < n;) E[t + r++] = 0;
                                if (!(r = t)) throw new Ee(48);
                                E.set(e, r)
                            } else i = !1, r = e.byteOffset;
                            return {
                                Hc: r,
                                Ud: i
                            }
                        },
                        ld: function(e, t, r, i, a) {
                            if (32768 != (61440 & e.node.mode)) throw new Ee(43);
                            return 2 & a || pe.sc.write(e, t, 0, i, r, !1), 0
                        }
                    }
                },
                he = null,
                me = {},
                be = [],
                we = 1,
                ge = null,
                ye = !0,
                ve = {},
                Ee = null,
                Ae = {};

            function Te(e, t) {
                if (t = t || {}, !(e = _e("/", e))) return {
                    path: "",
                    node: null
                };
                var r, i = {
                    fd: !0,
                    ad: 0
                };
                for (r in i) void 0 === t[r] && (t[r] = i[r]);
                if (8 < t.ad) throw new Ee(32);
                e = ae(e.split("/").filter((function(e) {
                    return !!e
                })), !1);
                var a = he;
                for (i = "/", r = 0; r < e.length; r++) {
                    var n = r === e.length - 1;
                    if (n && t.parent) break;
                    if (a = Re(a, e[r]), i = ne(i + "/" + e[r]), a.Kc && (!n || n && t.fd) && (a = a.Kc.root), !n || t.Pc)
                        for (n = 0; 40960 == (61440 & a.mode);)
                            if (a = Ne(i), a = Te(i = _e(oe(i), a), {
                                    ad: t.ad
                                }).node, 40 < n++) throw new Ee(32)
                }
                return {
                    path: i,
                    node: a
                }
            }

            function xe(e) {
                for (var t;;) {
                    if (e === e.parent) return e = e.Bc.kd, t ? "/" !== e[e.length - 1] ? e + "/" + t : e + t : e;
                    t = t ? e.name + "/" + t : e.name, e = e.parent
                }
            }

            function ke(e, t) {
                for (var r = 0, i = 0; i < t.length; i++) r = (r << 5) - r + t.charCodeAt(i) | 0;
                return (e + r >>> 0) % ge.length
            }

            function Re(e, t) {
                var r;
                if (r = (r = Me(e, "x")) ? r : e.qc.Jc ? 0 : 2) throw new Ee(r, e);
                for (r = ge[ke(e.id, t)]; r; r = r.Fc) {
                    var i = r.name;
                    if (r.parent.id === e.id && i === t) return r
                }
                return e.qc.Jc(e, t)
            }

            function Le(e, t, r, i) {
                return t = ke((e = new ir(e, t, r, i)).parent.id, e.name), e.Fc = ge[t], ge[t] = e
            }
            var Fe = {
                r: 0,
                "r+": 2,
                w: 577,
                "w+": 578,
                a: 1089,
                "a+": 1090
            };

            function ze(e) {
                var t = ["r", "w", "rw"][3 & e];
                return 512 & e && (t += "w"), t
            }

            function Me(e, t) {
                return ye || (-1 === t.indexOf("r") || 292 & e.mode) && (-1 === t.indexOf("w") || 146 & e.mode) && (-1 === t.indexOf("x") || 73 & e.mode) ? 0 : 2
            }

            function Ie(e, t) {
                try {
                    return Re(e, t), 20
                } catch (e) {}
                return Me(e, "wx")
            }
            var Pe, Oe = {
                open: function(e) {
                    e.sc = me[e.node.Lc].sc, e.sc.open && e.sc.open(e)
                },
                Ec: function() {
                    throw new Ee(70)
                }
            };

            function Se(e, t) {
                me[e] = {
                    sc: t
                }
            }

            function Be(e, t) {
                var r = "/" === t,
                    i = !t;
                if (r && he) throw new Ee(10);
                if (!r && !i) {
                    var a = Te(t, {
                        fd: !1
                    });
                    if (t = a.path, (a = a.node).Kc) throw new Ee(10);
                    if (16384 != (61440 & a.mode)) throw new Ee(54)
                }
                t = {
                    type: e,
                    be: {},
                    kd: t,
                    Cd: []
                }, (e = e.Bc(t)).Bc = t, t.root = e, r ? he = e : a && (a.Kc = t, a.Bc && a.Bc.Cd.push(t))
            }

            function De(e, t, r) {
                var i = Te(e, {
                    parent: !0
                }).node;
                if (!(e = se(e)) || "." === e || ".." === e) throw new Ee(28);
                var a = Ie(i, e);
                if (a) throw new Ee(a);
                if (!i.qc.Qc) throw new Ee(63);
                return i.qc.Qc(i, e, t, r)
            }

            function Ce(e) {
                return De(e, 16895, 0)
            }

            function Ue(e, t, r) {
                void 0 === r && (r = t, t = 438), De(e, 8192 | t, r)
            }

            function Ve(e, t) {
                if (!_e(e)) throw new Ee(44);
                var r = Te(t, {
                    parent: !0
                }).node;
                if (!r) throw new Ee(44);
                var i = Ie(r, t = se(t));
                if (i) throw new Ee(i);
                if (!r.qc.Sc) throw new Ee(63);
                r.qc.Sc(r, t, e)
            }

            function Ne(e) {
                if (!(e = Te(e).node)) throw new Ee(44);
                if (!e.qc.Mc) throw new Ee(28);
                return _e(xe(e.parent), e.qc.Mc(e))
            }

            function qe(e, t) {
                if (!(e = Te(e, {
                        Pc: !t
                    }).node)) throw new Ee(44);
                if (!e.qc.yc) throw new Ee(63);
                return e.qc.yc(e)
            }

            function Ge(e) {
                return qe(e, !0)
            }

            function We(e, t, i, a) {
                if ("" === e) throw new Ee(44);
                if ("string" == typeof t) {
                    var n = Fe[t];
                    if (void 0 === n) throw Error("Unknown file open mode: " + t);
                    t = n
                }
                if (i = 64 & t ? 4095 & (void 0 === i ? 438 : i) | 32768 : 0, "object" == typeof e) var o = e;
                else {
                    e = ne(e);
                    try {
                        o = Te(e, {
                            Pc: !(131072 & t)
                        }).node
                    } catch (e) {}
                }
                if (n = !1, 64 & t)
                    if (o) {
                        if (128 & t) throw new Ee(20)
                    } else o = De(e, i, 0), n = !0;
                if (!o) throw new Ee(44);
                if (8192 == (61440 & o.mode) && (t &= -513), 65536 & t && 16384 != (61440 & o.mode)) throw new Ee(54);
                if (!n && (i = o ? 40960 == (61440 & o.mode) ? 32 : 16384 == (61440 & o.mode) && ("r" !== ze(t) || 512 & t) ? 31 : Me(o, ze(t)) : 44)) throw new Ee(i);
                if (512 & t) {
                    if (!(i = "string" == typeof(i = o) ? Te(i, {
                            Pc: !0
                        }).node : i).qc.Ac) throw new Ee(63);
                    if (16384 == (61440 & i.mode)) throw new Ee(31);
                    if (32768 != (61440 & i.mode)) throw new Ee(28);
                    if (n = Me(i, "w")) throw new Ee(n);
                    i.qc.Ac(i, {
                        size: 0,
                        timestamp: Date.now()
                    })
                }
                t &= -131713, (a = function(e, t) {
                    je || ((je = function() {}).prototype = {});
                    var r, i = new je;
                    for (r in e) i[r] = e[r];
                    return e = i, t = function(e) {
                        for (e = e || 0; e <= 4096; e++)
                            if (!be[e]) return e;
                        throw new Ee(33)
                    }(t), e.Cc = t, be[t] = e
                }({
                    node: o,
                    path: xe(o),
                    flags: t,
                    seekable: !0,
                    position: 0,
                    sc: o.sc,
                    Rd: [],
                    error: !1
                }, a)).sc.open && a.sc.open(a), !r.logReadFiles || 1 & t || (Ke || (Ke = {}), e in Ke || (Ke[e] = 1, p("FS.trackingDelegate error on read file: " + e)));
                try {
                    ve.onOpenFile && (o = 0, 1 != (2097155 & t) && (o |= 1), 0 != (2097155 & t) && (o |= 2), ve.onOpenFile(e, o))
                } catch (t) {
                    p("FS.trackingDelegate['onOpenFile']('" + e + "', flags) threw an exception: " + t.message)
                }
                return a
            }

            function He(e, t, r) {
                if (null === e.Cc) throw new Ee(8);
                if (!e.seekable || !e.sc.Ec) throw new Ee(70);
                if (0 != r && 1 != r && 2 != r) throw new Ee(28);
                return e.position = e.sc.Ec(e, t, r), e.Rd = [], e.position
            }

            function Ye() {
                Ee || ((Ee = function(e, t) {
                    this.node = t, this.Hd = function(e) {
                        this.vc = e
                    }, this.Hd(e), this.message = "FS error"
                }).prototype = Error(), Ee.prototype.constructor = Ee, [44].forEach((function(e) {
                    Ae[e] = new Ee(e), Ae[e].stack = "<generic error, no stack>"
                })))
            }

            function Xe(e, t, r) {
                e = ne("/dev/" + e);
                var i = function(e, t) {
                    var r = 0;
                    return e && (r |= 365), t && (r |= 146), r
                }(!!t, !!r);
                Ze || (Ze = 64);
                var a = Ze++ << 8 | 0;
                Se(a, {
                    open: function(e) {
                        e.seekable = !1
                    },
                    close: function() {
                        r && r.buffer && r.buffer.length && r(10)
                    },
                    read: function(e, r, i, a) {
                        for (var n = 0, o = 0; o < a; o++) {
                            try {
                                var s = t()
                            } catch (e) {
                                throw new Ee(29)
                            }
                            if (void 0 === s && 0 === n) throw new Ee(6);
                            if (null == s) break;
                            n++, r[i + o] = s
                        }
                        return n && (e.node.timestamp = Date.now()), n
                    },
                    write: function(e, t, i, a) {
                        for (var n = 0; n < a; n++) try {
                            r(t[i + n])
                        } catch (e) {
                            throw new Ee(29)
                        }
                        return a && (e.node.timestamp = Date.now()), n
                    }
                }), Ue(e, i, a)
            }
            var Ze, je, Ke, Je = {};

            function $e(e, t, r) {
                try {
                    var i = e(t)
                } catch (e) {
                    if (e && e.node && ne(t) !== ne(xe(e.node))) return -54;
                    throw e
                }
                return k[r >> 2] = i.td, k[r + 4 >> 2] = 0, k[r + 8 >> 2] = i.Zc, k[r + 12 >> 2] = i.mode, k[r + 16 >> 2] = i.Ed, k[r + 20 >> 2] = i.uid, k[r + 24 >> 2] = i.wd, k[r + 28 >> 2] = i.Lc, k[r + 32 >> 2] = 0, J = [i.size >>> 0, (K = i.size, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[r + 40 >> 2] = J[0], k[r + 44 >> 2] = J[1], k[r + 48 >> 2] = 4096, k[r + 52 >> 2] = i.rd, k[r + 56 >> 2] = i.pd.getTime() / 1e3 | 0, k[r + 60 >> 2] = 0, k[r + 64 >> 2] = i.Dd.getTime() / 1e3 | 0, k[r + 68 >> 2] = 0, k[r + 72 >> 2] = i.sd.getTime() / 1e3 | 0, k[r + 76 >> 2] = 0, J = [i.Zc >>> 0, (K = i.Zc, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[r + 80 >> 2] = J[0], k[r + 84 >> 2] = J[1], 0
            }
            var Qe = void 0;

            function et() {
                return k[(Qe += 4) - 4 >> 2]
            }

            function tt(e) {
                if (!(e = be[e])) throw new Ee(8);
                return e
            }

            function rt(e) {
                try {
                    e()
                } catch (e) {
                    if (!(e instanceof br) && "unwind" !== e) throw e && "object" == typeof e && e.stack && p("exception thrown: " + [e, e.stack]), e
                }
            }
            var it, at, nt, ot = !1,
                st = null,
                _t = 0,
                ct = null,
                ut = 0,
                ft = 0,
                lt = 0,
                dt = [],
                pt = {},
                ht = !1,
                mt = !1,
                bt = [];

            function wt(e, t, i, a) {
                if (t && r.Yc && e == r.canvas) return r.Yc;
                var n;
                if (t) {
                    var o = {
                        antialias: !1,
                        alpha: !1,
                        Bd: 1
                    };
                    if (a)
                        for (var s in a) o[s] = a[s];
                    if (void 0 !== Kt && (n = function(e, t) {
                            e.gd || (e.gd = e.getContext, e.getContext = function(t, r) {
                                return "webgl" == t == (r = e.gd(t, r)) instanceof WebGLRenderingContext ? r : null
                            });
                            var r = e.getContext("webgl", t);
                            return r ? function(e, t) {
                                var r = Yt(Ht),
                                    i = {
                                        Zd: r,
                                        attributes: t,
                                        version: t.Bd,
                                        Xc: e
                                    };
                                return e.canvas && (e.canvas.Td = i), Ht[r] = i, (void 0 === t.ud || t.ud) && function(e) {
                                    if (e || (e = Zt), !e.zd) {
                                        e.zd = !0;
                                        var t = e.Xc;
                                        ! function(e) {
                                            var t = e.getExtension("ANGLE_instanced_arrays");
                                            t && (e.vertexAttribDivisor = function(e, r) {
                                                t.vertexAttribDivisorANGLE(e, r)
                                            }, e.drawArraysInstanced = function(e, r, i, a) {
                                                t.drawArraysInstancedANGLE(e, r, i, a)
                                            }, e.drawElementsInstanced = function(e, r, i, a, n) {
                                                t.drawElementsInstancedANGLE(e, r, i, a, n)
                                            })
                                        }(t),
                                        function(e) {
                                            var t = e.getExtension("OES_vertex_array_object");
                                            t && (e.createVertexArray = function() {
                                                return t.createVertexArrayOES()
                                            }, e.deleteVertexArray = function(e) {
                                                t.deleteVertexArrayOES(e)
                                            }, e.bindVertexArray = function(e) {
                                                t.bindVertexArrayOES(e)
                                            }, e.isVertexArray = function(e) {
                                                return t.isVertexArrayOES(e)
                                            })
                                        }(t),
                                        function(e) {
                                            var t = e.getExtension("WEBGL_draw_buffers");
                                            t && (e.drawBuffers = function(e, r) {
                                                t.drawBuffersWEBGL(e, r)
                                            })
                                        }(t), t.Wd = t.getExtension("EXT_disjoint_timer_query"), t.$d = t.getExtension("WEBGL_multi_draw"), (t.getSupportedExtensions() || []).forEach((function(e) {
                                            0 > e.indexOf("lose_context") && 0 > e.indexOf("debug") && t.getExtension(e)
                                        }))
                                    }
                                }(i), r
                            }(r, t) : 0
                        }(e, o))) var _ = Ht[n].Xc
                } else _ = e.getContext("2d");
                return _ ? (i && (t || g(void 0 === Qt, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), r.Yc = _, t && (Zt = Ht[n], r.Yc = Qt = Zt && Zt.Xc), r.ee = t, bt.forEach((function(e) {
                    e()
                })), function() {
                    function e() {
                        mt = document.pointerLockElement === r.canvas || document.mozPointerLockElement === r.canvas || document.webkitPointerLockElement === r.canvas || document.msPointerLockElement === r.canvas
                    }
                    if (r.preloadPlugins || (r.preloadPlugins = []), !Rt) {
                        Rt = !0;
                        try {
                            Lt = !0
                        } catch (e) {
                            Lt = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes")
                        }
                        Ft = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Lt ? null : console.log("warning: no BlobBuilder"), zt = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0, r.md || void 0 !== zt || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), r.md = !0), r.preloadPlugins.push({
                            canHandle: function(e) {
                                return !r.md && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                            },
                            handle: function(e, t, i, a) {
                                var n = null;
                                if (Lt) try {
                                    (n = new Blob([e], {
                                        type: kt(t)
                                    })).size !== e.length && (n = new Blob([new Uint8Array(e).buffer], {
                                        type: kt(t)
                                    }))
                                } catch (e) {
                                    ! function(e) {
                                        f || (f = {}), f[e] || (f[e] = 1, p(e))
                                    }("Blob constructor present but fails: " + e + "; falling back to blob builder")
                                }
                                n || ((n = new Ft).append(new Uint8Array(e).buffer), n = n.getBlob());
                                var o = zt.createObjectURL(n),
                                    s = new Image;
                                s.onload = function() {
                                    g(s.complete, "Image " + t + " could not be decoded");
                                    var a = document.createElement("canvas");
                                    a.width = s.width, a.height = s.height, a.getContext("2d").drawImage(s, 0, 0), r.preloadedImages[t] = a, zt.revokeObjectURL(o), i && i(e)
                                }, s.onerror = function() {
                                    console.log("Image " + o + " could not be decoded"), a && a()
                                }, s.src = o
                            }
                        }), r.preloadPlugins.push({
                            canHandle: function(e) {
                                return !r.ae && e.substr(-4) in {
                                    ".ogg": 1,
                                    ".wav": 1,
                                    ".mp3": 1
                                }
                            },
                            handle: function(e, t, i, a) {
                                function n(a) {
                                    s || (s = !0, r.preloadedAudios[t] = a, i && i(e))
                                }

                                function o() {
                                    s || (s = !0, r.preloadedAudios[t] = new Audio, a && a())
                                }
                                var s = !1;
                                if (!Lt) return o();
                                try {
                                    var _ = new Blob([e], {
                                        type: kt(t)
                                    })
                                } catch (e) {
                                    return o()
                                }
                                _ = zt.createObjectURL(_);
                                var c = new Audio;
                                c.addEventListener("canplaythrough", (function() {
                                    n(c)
                                }), !1), c.onerror = function() {
                                    if (!s) {
                                        console.log("warning: browser could not fully decode audio " + t + ", trying slower base64 approach");
                                        for (var r = "", i = 0, a = 0, o = 0; o < e.length; o++)
                                            for (i = i << 8 | e[o], a += 8; 6 <= a;) {
                                                var _ = i >> a - 6 & 63;
                                                a -= 6, r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [_]
                                            }
                                        2 == a ? (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(3 & i) << 4], r += "==") : 4 == a && (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(15 & i) << 2], r += "="), c.src = "data:audio/x-" + t.substr(-3) + ";base64," + r, n(c)
                                    }
                                }, c.src = _, xt((function() {
                                    n(c)
                                }), 1e4)
                            }
                        });
                        var t = r.canvas;
                        t && (t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock || t.msRequestPointerLock || function() {}, t.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, t.exitPointerLock = t.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", e, !1), document.addEventListener("mozpointerlockchange", e, !1), document.addEventListener("webkitpointerlockchange", e, !1), document.addEventListener("mspointerlockchange", e, !1), r.elementPointerLock && t.addEventListener("click", (function(e) {
                            !mt && r.canvas.requestPointerLock && (r.canvas.requestPointerLock(), e.preventDefault())
                        }), !1))
                    }
                }()), _) : null
            }
            var gt = !1,
                yt = void 0,
                vt = void 0;

            function Et() {
                return !!ht && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []), !0)
            }
            var At = 0;

            function Tt(e) {
                if ("function" == typeof requestAnimationFrame) requestAnimationFrame(e);
                else {
                    var t = Date.now();
                    if (0 === At) At = t + 1e3 / 60;
                    else
                        for (; t + 2 >= At;) At += 1e3 / 60;
                    setTimeout(e, Math.max(At - t, 0))
                }
            }

            function xt(e, t) {
                setTimeout((function() {
                    rt(e)
                }), t)
            }

            function kt(e) {
                return {
                    jpg: "image/jpeg",
                    jpeg: "image/jpeg",
                    png: "image/png",
                    bmp: "image/bmp",
                    ogg: "audio/ogg",
                    wav: "audio/wav",
                    mp3: "audio/mpeg"
                } [e.substr(e.lastIndexOf(".") + 1)]
            }
            var Rt, Lt, Ft, zt, Mt = [];

            function It() {
                var e = r.canvas;
                Mt.forEach((function(t) {
                    t(e.width, e.height)
                }))
            }

            function Pt(e, t, i) {
                t && i ? (e.Sd = t, e.xd = i) : (t = e.Sd, i = e.xd);
                var a = t,
                    n = i;
                if (r.forcedAspectRatio && 0 < r.forcedAspectRatio && (a / n < r.forcedAspectRatio ? a = Math.round(n * r.forcedAspectRatio) : n = Math.round(a / r.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
                    var o = Math.min(screen.width / a, screen.height / n);
                    a = Math.round(a * o), n = Math.round(n * o)
                }
                vt ? (e.width != a && (e.width = a), e.height != n && (e.height = n), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != i && (e.height = i), void 0 !== e.style && (a != t || n != i ? (e.style.setProperty("width", a + "px", "important"), e.style.setProperty("height", n + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))))
            }

            function Ot() {
                return !1
            }
            r._emscripten_is_main_browser_thread = Ot;
            var St, Bt = [];

            function Dt(e, t) {
                R[e >> 2] = t, R[e + 4 >> 2] = t / 4294967296 | 0
            }

            function Ct(e, t, r, i, a) {
                function n(t) {
                    var r = 0,
                        i = 0;
                    t && (i = y.response ? y.response.byteLength : 0, r = _r(i), A.set(new Uint8Array(y.response), r)), R[e + 12 >> 2] = r, Dt(e + 16, i)
                }
                var o = R[e + 8 >> 2];
                if (o) {
                    var s = I(o),
                        _ = e + 112,
                        c = I(_);
                    c || (c = "GET");
                    var u = R[_ + 52 >> 2],
                        f = R[_ + 56 >> 2],
                        l = !!R[_ + 60 >> 2],
                        d = R[_ + 68 >> 2],
                        p = R[_ + 72 >> 2];
                    o = R[_ + 76 >> 2];
                    var h = R[_ + 80 >> 2],
                        m = R[_ + 84 >> 2];
                    _ = R[_ + 88 >> 2];
                    var b = !!(1 & u),
                        w = !!(2 & u);
                    u = !!(64 & u), d = d ? I(d) : void 0, p = p ? I(p) : void 0;
                    var g = h ? I(h) : void 0,
                        y = new XMLHttpRequest;
                    if (y.withCredentials = l, y.open(c, s, !u, d, p), u || (y.timeout = f), y.ce = s, y.responseType = "arraybuffer", h && y.overrideMimeType(g), o)
                        for (;
                            (c = R[o >> 2]) && (s = R[o + 4 >> 2]);) o += 8, c = I(c), s = I(s), y.setRequestHeader(c, s);
                    Bt.push(y), R[e + 0 >> 2] = Bt.length, o = m && _ ? A.slice(m, m + _) : null, y.onload = function(i) {
                        n(b && !w);
                        var a = y.response ? y.response.byteLength : 0;
                        Dt(e + 24, 0), a && Dt(e + 32, a), x[e + 40 >> 1] = y.readyState, x[e + 42 >> 1] = y.status, y.statusText && P(y.statusText, A, e + 44, 64), 200 <= y.status && 300 > y.status ? t && t(e, y, i) : r && r(e, y, i)
                    }, y.onerror = function(t) {
                        n(b);
                        var i = y.status;
                        Dt(e + 24, 0), Dt(e + 32, y.response ? y.response.byteLength : 0), x[e + 40 >> 1] = y.readyState, x[e + 42 >> 1] = i, r && r(e, y, t)
                    }, y.ontimeout = function(t) {
                        r && r(e, y, t)
                    }, y.onprogress = function(t) {
                        var r = b && w && y.response ? y.response.byteLength : 0,
                            a = 0;
                        b && w && (a = _r(r), A.set(new Uint8Array(y.response), a)), R[e + 12 >> 2] = a, Dt(e + 16, r), Dt(e + 24, t.loaded - r), Dt(e + 32, t.total), x[e + 40 >> 1] = y.readyState, 3 <= y.readyState && 0 === y.status && 0 < t.loaded && (y.status = 200), x[e + 42 >> 1] = y.status, y.statusText && P(y.statusText, A, e + 44, 64), i && i(e, y, t), a && sr(a)
                    }, y.onreadystatechange = function(t) {
                        x[e + 40 >> 1] = y.readyState, 2 <= y.readyState && (x[e + 42 >> 1] = y.status), a && a(e, y, t)
                    };
                    try {
                       // y.send(o)
                    } catch (t) {
                        //r && r(e, y, t)
                    }
                } // else r(e, 0, "no url specified!")
            }

            function Ut(e, t, r, i) {
                var a = St;
                if (a) {
                    var n = R[e + 112 + 64 >> 2];
                    n || (n = R[e + 8 >> 2]);
                    var o = I(n);
                    try {
                        var s = a.transaction(["FILES"], "readwrite").objectStore("FILES").put(t, o);
                        s.onsuccess = function() {
                            x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 200, P("OK", A, e + 44, 64), r(e, 0, o)
                        }, s.onerror = function(t) {
                            x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 413, P("Payload Too Large", A, e + 44, 64), i(e, 0, t)
                        }
                    } catch (t) {
                        i(e, 0, t)
                    }
                } else i(e, 0, "IndexedDB not available!")
            }
            var Vt, Nt = {};

            function qt() {
                if (!Vt) {
                    var e, t = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                        _: s || "./this.program"
                    };
                    for (e in Nt) t[e] = Nt[e];
                    var r = [];
                    for (e in t) r.push(e + "=" + t[e]);
                    Vt = r
                }
                return Vt
            }
            var Gt = 1,
                Wt = [],
                Ht = [];

            function Yt(e) {
                for (var t = Gt++, r = e.length; r < t; r++) e[r] = null;
                return t
            }
            var Xt, Zt, jt, Kt = {};

            function Jt(e) {
                return 0 == e % 4 && (0 != e % 100 || 0 == e % 400)
            }

            function $t(e, t) {
                for (var r = 0, i = 0; i <= t; r += e[i++]);
                return r
            }
            var Qt, er = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                tr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function rr(e, t) {
                for (e = new Date(e.getTime()); 0 < t;) {
                    var r = e.getMonth(),
                        i = (Jt(e.getFullYear()) ? er : tr)[r];
                    if (!(t > i - e.getDate())) {
                        e.setDate(e.getDate() + t);
                        break
                    }
                    t -= i - e.getDate() + 1, e.setDate(1), 11 > r ? e.setMonth(r + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1))
                }
                return e
            }

            function ir(e, t, r, i) {
                e || (e = this), this.parent = e, this.Bc = e.Bc, this.Kc = null, this.id = we++, this.name = t, this.mode = r, this.qc = {}, this.sc = {}, this.Lc = i
            }

            function ar(e, t) {
                var r = Array(O(e) + 1);
                return e = P(e, r, 0, r.length), t && (r.length = e), r
            }
            Object.defineProperties(ir.prototype, {
                    read: {
                        get: function() {
                            return 365 == (365 & this.mode)
                        },
                        set: function(e) {
                            e ? this.mode |= 365 : this.mode &= -366
                        }
                    },
                    write: {
                        get: function() {
                            return 146 == (146 & this.mode)
                        },
                        set: function(e) {
                            e ? this.mode |= 146 : this.mode &= -147
                        }
                    }
                }), Ye(), ge = Array(4096), Be(pe, "/"), Ce("/tmp"), Ce("/home"), Ce("/home/web_user"),
                function() {
                    Ce("/dev"), Se(259, {
                        read: function() {
                            return 0
                        },
                        write: function(e, t, r, i) {
                            return i
                        }
                    }), Ue("/dev/null", 259), ue(1280, le), ue(1536, de), Ue("/dev/tty", 1280), Ue("/dev/tty1", 1536);
                    var e = function() {
                        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                            var e = new Uint8Array(1);
                            return function() {
                                return crypto.getRandomValues(e), e[0]
                            }
                        }
                        return function() {
                            j("randomDevice")
                        }
                    }();
                    Xe("random", e), Xe("urandom", e), Ce("/dev/shm"), Ce("/dev/shm/tmp")
                }(),
                function() {
                    Ce("/proc");
                    var e = Ce("/proc/self");
                    Ce("/proc/self/fd"), Be({
                        Bc: function() {
                            var t = Le(e, "fd", 16895, 73);
                            return t.qc = {
                                Jc: function(e, t) {
                                    var r = be[+t];
                                    if (!r) throw new Ee(8);
                                    return (e = {
                                        parent: null,
                                        Bc: {
                                            kd: "fake"
                                        },
                                        qc: {
                                            Mc: function() {
                                                return r.path
                                            }
                                        }
                                    }).parent = e
                                }
                            }, t
                        }
                    }, "/proc/self/fd")
                }(), r.requestFullscreen = function(e, t) {
                    ! function(e, t) {
                        function i() {
                            ht = !1;
                            var e = a.parentNode;
                            (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (a.exitFullscreen = Et, yt && a.requestPointerLock(), ht = !0, vt ? ("undefined" != typeof SDL && (k[SDL.screen >> 2] = 8388608 | R[SDL.screen >> 2]), Pt(r.canvas), It()) : Pt(a)) : (e.parentNode.insertBefore(a, e), e.parentNode.removeChild(e), vt ? ("undefined" != typeof SDL && (k[SDL.screen >> 2] = -8388609 & R[SDL.screen >> 2]), Pt(r.canvas), It()) : Pt(a)), r.onFullScreen && r.onFullScreen(ht), r.onFullscreen && r.onFullscreen(ht)
                        }
                        void 0 === (yt = e) && (yt = !0), void 0 === (vt = t) && (vt = !1);
                        var a = r.canvas;
                        gt || (gt = !0, document.addEventListener("fullscreenchange", i, !1), document.addEventListener("mozfullscreenchange", i, !1), document.addEventListener("webkitfullscreenchange", i, !1), document.addEventListener("MSFullscreenChange", i, !1));
                        var n = document.createElement("div");
                        a.parentNode.insertBefore(n, a), n.appendChild(a), n.requestFullscreen = n.requestFullscreen || n.mozRequestFullScreen || n.msRequestFullscreen || (n.webkitRequestFullscreen ? function() {
                            n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                        } : null) || (n.webkitRequestFullScreen ? function() {
                            n.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                        } : null), n.requestFullscreen()
                    }(e, t)
                }, r.requestAnimationFrame = function(e) {
                    Tt(e)
                }, r.setCanvasSize = function(e, t, i) {
                    Pt(r.canvas, e, t), i || It()
                }, r.pauseMainLoop = function() {
                    st = null, _t++
                }, r.resumeMainLoop = function() {
                    _t++;
                    var e = ut,
                        t = ft,
                        i = ct;
                    ct = null,
                        function(e) {
                            function t() {
                                if (i < _t) {
                                    if (!h) try {
                                        gr(b)
                                    } catch (e) {
                                        if (!(e instanceof br)) throw e
                                    }
                                    return !1
                                }
                                return !0
                            }
                            g(!ct, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), ct = e;
                            var i = _t;
                            ot = !1, at = function() {
                                if (!w)
                                    if (0 < dt.length) {
                                        var i = Date.now(),
                                            a = dt.shift();
                                        if (a.vd(a.Oc), nt) {
                                            var n = nt,
                                                o = 0 == n % 1 ? n - 1 : Math.floor(n);
                                            nt = a.Vd ? o : (8 * n + (o + .5)) / 9
                                        }
                                        console.log('main loop blocker "' + a.name + '" took ' + (Date.now() - i) + " ms"), r.setStatus && (i = r.statusMessage || "Please wait...", n = pt.Xd, (a = nt) ? a < n ? r.setStatus(i + " (" + (n - a) + "/" + n + ")") : r.setStatus(i) : r.setStatus("")), t() && setTimeout(at, 0)
                                    } else t() && (lt = lt + 1 | 0, 1 == ut && 1 < ft && 0 != lt % ft ? st() : (0 == ut && (it = $()), w || r.preMainLoop && !1 === r.preMainLoop() || (rt(e), r.postMainLoop && r.postMainLoop()), t() && ("object" == typeof SDL && SDL.audio && SDL.audio.Fd && SDL.audio.Fd(), st())))
                            }
                        }(i),
                        function(e, t) {
                            if (ut = e, ft = t, ct)
                                if (ot || (ot = !0), 0 == e) st = function() {
                                    var e = 0 | Math.max(0, it + t - $());
                                    setTimeout(at, e)
                                };
                                else if (1 == e) st = function() {
                                Tt(at)
                            };
                            else if (2 == e) {
                                if ("undefined" == typeof setImmediate) {
                                    var i = [];
                                    addEventListener("message", (function(e) {
                                        "setimmediate" !== e.data && "setimmediate" !== e.data.target || (e.stopPropagation(), i.shift()())
                                    }), !0), setImmediate = function(e) {
                                        i.push(e), void 0 === r.setImmediates && (r.setImmediates = []), r.setImmediates.push(e), postMessage({
                                            target: "setimmediate"
                                        })
                                    }
                                }
                                st = function() {
                                    setImmediate(at)
                                }
                            }
                        }(e, t), st()
                }, r.getUserMedia = function() {
                    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(void 0)
                }, r.createContext = function(e, t, r, i) {
                    return wt(e, t, r, i)
                },
                function(e, t) {
                    try {
                        var r = indexedDB.open("emscripten_filesystem", 1)
                    } catch (e) {
                        return void t()
                    }
                    r.onupgradeneeded = function(e) {
                        (e = e.target.result).objectStoreNames.contains("FILES") && e.deleteObjectStore("FILES"), e.createObjectStore("FILES")
                    }, r.onsuccess = function(e) {
                        ! function(e) {
                            St = e, Z()
                        }(e.target.result)
                    }, r.onerror = function(e) {
                        t()
                    }
                }(0, (function() {
                    St = !1, Z()
                })), "undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || X();
            var nr = {
                    I: function(e, t) {
                        return re(e, t)
                    },
                    a: function(e) {
                        return _r(e + 16) + 16
                    },
                    b: function(e, t, r) {
                        throw new ie(e).yd(t, r), e
                    },
                    e: function(e, t, r) {
                        Qe = r;
                        try {
                            var i = tt(e);
                            switch (t) {
                                case 0:
                                    var a = et();
                                    return 0 > a ? -28 : We(i.path, i.flags, 0, a).Cc;
                                case 1:
                                case 2:
                                case 13:
                                case 14:
                                    return 0;
                                case 3:
                                    return i.flags;
                                case 4:
                                    return a = et(), i.flags |= a, 0;
                                case 12:
                                    return a = et(), T[a + 0 >> 1] = 2, 0;
                                case 16:
                                case 8:
                                default:
                                    return -28;
                                case 9:
                                    return k[ur() >> 2] = 28, -1
                            }
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    E: function(e, t, r) {
                        try {
                            var i = tt(e);
                            if (!i.Dc) {
                                var a = Te(i.path, {
                                    Pc: !0
                                }).node;
                                if (!a.qc.Rc) throw new Ee(54);
                                var n = a.qc.Rc(a);
                                i.Dc = n
                            }
                            e = 0;
                            for (var o = He(i, 0, 1), s = Math.floor(o / 280); s < i.Dc.length && e + 280 <= r;) {
                                var _ = i.Dc[s];
                                if ("." === _[0]) var c = 1,
                                    u = 4;
                                else {
                                    var f = Re(i.node, _);
                                    c = f.id, u = 8192 == (61440 & f.mode) ? 2 : 16384 == (61440 & f.mode) ? 4 : 40960 == (61440 & f.mode) ? 10 : 8
                                }
                                J = [c >>> 0, (K = c, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[t + e >> 2] = J[0], k[t + e + 4 >> 2] = J[1], J = [280 * (s + 1) >>> 0, (K = 280 * (s + 1), 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[t + e + 8 >> 2] = J[0], k[t + e + 12 >> 2] = J[1], T[t + e + 16 >> 1] = 280, E[t + e + 18 >> 0] = u, P(_, A, t + e + 19, 256), e += 280, s += 1
                            }
                            return He(i, 280 * s, 0), e
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    n: function() {
                        return 42
                    },
                    G: function(e, t, r) {
                        Qe = r;
                        try {
                            var i = tt(e);
                            switch (t) {
                                case 21509:
                                case 21505:
                                case 21510:
                                case 21511:
                                case 21512:
                                case 21506:
                                case 21507:
                                case 21508:
                                case 21523:
                                case 21524:
                                    return i.uc ? 0 : -59;
                                case 21519:
                                    if (!i.uc) return -59;
                                    var a = et();
                                    return k[a >> 2] = 0;
                                case 21520:
                                    return i.uc ? -28 : -59;
                                case 21531:
                                    if (e = a = et(), !i.sc.Ad) throw new Ee(59);
                                    return i.sc.Ad(i, t, e);
                                default:
                                    j("bad ioctl syscall " + t)
                            }
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    H: function(e, t) {
                        try {
                            return $e(Ge, e = I(e), t)
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    p: function(e, t, r) {
                        Qe = r;
                        try {
                            return We(I(e), t, r ? et() : 0).Cc
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    J: function(e, t) {
                        try {
                            return $e(qe, e = I(e), t)
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    C: function(e, t) {
                        try {
                            return Ve(e = I(e), t = I(t)), 0
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    K: function(e) {
                        try {
                            if (!e) return -21;
                            var t = {
                                __size__: 390,
                                domainname: 325,
                                machine: 260,
                                nodename: 65,
                                release: 130,
                                sysname: 0,
                                version: 195
                            };
                            return B("Emscripten", e + t.sysname), B("emscripten", e + t.nodename), B("1.0", e + t.release), B("#1", e + t.version), B("wasm32", e + t.machine), 0
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    D: function(e) {
                        try {
                            var t = Te(e = I(e), {
                                    parent: !0
                                }).node,
                                r = se(e),
                                i = Re(t, r);
                            e: {
                                try {
                                    var a = Re(t, r)
                                } catch (e) {
                                    var n = e.vc;
                                    break e
                                }
                                n = Me(t, "wx") || (16384 == (61440 & a.mode) ? 31 : 0)
                            }
                            if (n) throw new Ee(n);
                            if (!t.qc.Wc) throw new Ee(63);
                            if (i.Kc) throw new Ee(10);
                            try {
                                ve.willDeletePath && ve.willDeletePath(e)
                            } catch (t) {
                                p("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + t.message)
                            }
                            t.qc.Wc(t, r);
                            var o = ke(i.parent.id, i.name);
                            if (ge[o] === i) ge[o] = i.Fc;
                            else
                                for (var s = ge[o]; s;) {
                                    if (s.Fc === i) {
                                        s.Fc = i.Fc;
                                        break
                                    }
                                    s = s.Fc
                                }
                            try {
                                ve.onDeletePath && ve.onDeletePath(e)
                            } catch (t) {
                                p("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + t.message)
                            }
                            return 0
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
                        }
                    },
                    L: function(e) {
                        delete Bt[e - 1]
                    },
                    c: function() {
                        j()
                    },
                    h: re,
                    P: function(e, t) {
                        return e - t
                    },
                    R: function() {
                        self.postMessage({
                            t: "gfx"
                        })
                    },
                    t: function() {
                        var e = new URL(location.origin).hostname;
                        if (0 === e.length && (e = new URL(location.href.replace("blob:", "")).hostname), /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)) 0 === e.indexOf("10.") && (e = "10.*"), 0 === e.indexOf("192.168.") && (e = "192.168.*"), 0 === e.indexOf("172.") && (e = "172.*"), 0 === e.indexOf("127.") && (e = "127.*");
                        else {
                            var t = new RegExp("(" + String.fromCharCode(92) + ".ngrok" + String.fromCharCode(92) + ".io)$", "i");
                            t.test(e) && (e = "*.ngrok.io"), (t = new RegExp("(" + String.fromCharCode(92) + ".arweb" + String.fromCharCode(92) + ".app)$", "i")).test(e) && (e = "*.arweb.app")
                        }
                        t = O(e) + 1;
                        var r = _r(t);
                        return P(e, A, r, t + 1), r
                    },
                    s: function() {
                        self.postMessage({
                            t: "licerr"
                        })
                    },
                    l: function(e, t, r) {
                        function i() {
                            C.get(e)(t)
                        }
                        0 <= r ? xt(i, r) : function(e) {
                            Tt((function() {
                                rt(e)
                            }))
                        }(i)
                    },
                    x: function() {
                        return 2147483648
                    },
                    N: Ot,
                    v: function(e, t, r) {
                        A.copyWithin(e, t, t + r)
                    },
                    w: function(e) {
                        var t = A.length;
                        if (2147483648 < e) return !1;
                        for (var r = 1; 4 >= r; r *= 2) {
                            var i = t * (1 + .2 / r);
                            i = Math.min(i, e + 100663296), 0 < (i = Math.max(e, i)) % 65536 && (i += 65536 - i % 65536);
                            e: {
                                try {
                                    m.grow(Math.min(2147483648, i) - v.byteLength + 65535 >>> 16), D();
                                    var a = 1;
                                    break e
                                } catch (e) {}
                                a = void 0
                            }
                            if (a) return !0
                        }
                        return !1
                    },
                    M: function(e, t, r, i, a) {
                        function n(e, r) {
                            Ut(e, r.response, (function(e) {
                                rt((function() {
                                    l ? C.get(l)(e) : t && t(e)
                                }))
                            }), (function(e) {
                                rt((function() {
                                    l ? C.get(l)(e) : t && t(e)
                                }))
                            }))
                        }

                        function o(e) {
                            rt((function() {
                                h ? C.get(h)(e) : a && a(e)
                            }))
                        }

                        function s(e) {
                            rt((function() {
                                d ? C.get(d)(e) : r && r(e)
                            }))
                        }

                        function _(e) {
                            rt((function() {
                                p ? C.get(p)(e) : i && i(e)
                            }))
                        }

                        function c(e) {
                            rt((function() {
                                l ? C.get(l)(e) : t && t(e)
                            }))
                        }
                        var u = e + 112,
                            f = I(u),
                            l = R[u + 36 >> 2],
                            d = R[u + 40 >> 2],
                            p = R[u + 44 >> 2],
                            h = R[u + 48 >> 2],
                            m = R[u + 52 >> 2],
                            b = !!(4 & m),
                            w = !!(32 & m);
                        if (m = !!(16 & m), "EM_IDB_STORE" === f) f = R[u + 84 >> 2], Ut(e, A.slice(f, f + R[u + 88 >> 2]), c, s);
                        else if ("EM_IDB_DELETE" === f) ! function(e, t, r) {
                            var i = St;
                            if (i) {
                                var a = R[e + 112 + 64 >> 2];
                                a || (a = R[e + 8 >> 2]), a = I(a);
                                try {
                                    var n = i.transaction(["FILES"], "readwrite").objectStore("FILES").delete(a);
                                    n.onsuccess = function(r) {
                                        r = r.target.result, R[e + 12 >> 2] = 0, Dt(e + 16, 0), Dt(e + 24, 0), Dt(e + 32, 0), x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 200, P("OK", A, e + 44, 64), t(e, 0, r)
                                    }, n.onerror = function(t) {
                                        /*x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 404, P("OK", A, e + 44, 64), r(e, 0, t)*/
                                    }
                                } catch (t) {
                                    r(e, 0, t)
                                }
                            } else r(e, 0, "IndexedDB not available!")
                        }(e, c, s);
                        else if (m) {
                            if (w) return 0;
                            Ct(e, b ? n : c, s, _, o)
                        } else ! function(e, t, r) {
                            var i = St;
                            if (i) {
                                var a = R[e + 112 + 64 >> 2];
                                a || (a = R[e + 8 >> 2]), a = I(a);
                                try {
                                    var n = i.transaction(["FILES"], "readonly").objectStore("FILES").get(a);
                                    n.onsuccess = function(i) {
                                        if (i.target.result) {
                                            var a = (i = i.target.result).byteLength || i.length,
                                                n = _r(a);
                                            A.set(new Uint8Array(i), n), R[e + 12 >> 2] = n, Dt(e + 16, a), Dt(e + 24, 0), Dt(e + 32, a), x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 200, P("OK", A, e + 44, 64), t(e, 0, i)
                                        } else x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 404, P("Not Found", A, e + 44, 64), r(e, 0, "no data")
                                    }, n.onerror = function(t) {
                                        x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 404, P("Not Found", A, e + 44, 64), r(e, 0, t)
                                    }
                                } catch (t) {
                                    r(e, 0, t)
                                }
                            } else r(e, 0, "IndexedDB not available!")
                        }(e, c, w ? s : b ? function(e) {
                            Ct(e, n, s, _, o)
                        } : function(e) {
                            Ct(e, c, s, _, o)
                        });
                        return e
                    },
                    A: function(e, t) {
                        try {
                            var r = 0;
                            return qt().forEach((function(i, a) {
                                var n = t + r;
                                k[e + 4 * a >> 2] = n, B(i, n), r += i.length + 1
                            })), 0
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
                        }
                    },
                    B: function(e, t) {
                        try {
                            var r = qt();
                            k[e >> 2] = r.length;
                            var i = 0;
                            return r.forEach((function(e) {
                                i += e.length + 1
                            })), k[t >> 2] = i, 0
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
                        }
                    },
                    O: function(e) {
                        gr(e)
                    },
                    g: function(e) {
                        try {
                            var t = tt(e);
                            if (null === t.Cc) throw new Ee(8);
                            t.Dc && (t.Dc = null);
                            try {
                                t.sc.close && t.sc.close(t)
                            } catch (e) {
                                throw e
                            } finally {
                                be[t.Cc] = null
                            }
                            return t.Cc = null, 0
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
                        }
                    },
                    F: function(e, t, r, i) {
                        try {
                            e: {
                                for (var a = tt(e), n = e = 0; n < r; n++) {
                                    var o = k[t + (8 * n + 4) >> 2],
                                        s = a,
                                        _ = k[t + 8 * n >> 2],
                                        c = o,
                                        u = void 0,
                                        f = E;
                                    if (0 > c || 0 > u) throw new Ee(28);
                                    if (null === s.Cc) throw new Ee(8);
                                    if (1 == (2097155 & s.flags)) throw new Ee(8);
                                    if (16384 == (61440 & s.node.mode)) throw new Ee(31);
                                    if (!s.sc.read) throw new Ee(28);
                                    var l = void 0 !== u;
                                    if (l) {
                                        if (!s.seekable) throw new Ee(70)
                                    } else u = s.position;
                                    var d = s.sc.read(s, f, _, c, u);
                                    l || (s.position += d);
                                    var p = d;
                                    if (0 > p) {
                                        var h = -1;
                                        break e
                                    }
                                    if (e += p, p < o) break
                                }
                                h = e
                            }
                            return k[i >> 2] = h,
                            0
                        }
                        catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
                        }
                    },
                    u: function(e, t, r, i, a) {
                        try {
                            var n = tt(e);
                            return -9007199254740992 >= (e = 4294967296 * r + (t >>> 0)) || 9007199254740992 <= e ? -61 : (He(n, e, i), J = [n.position >>> 0, (K = n.position, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[a >> 2] = J[0], k[a + 4 >> 2] = J[1], n.Dc && 0 === e && 0 === i && (n.Dc = null), 0)
                        } catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
                        }
                    },
                    k: function(e, t, r, i) {
                        try {
                            e: {
                                for (var a = tt(e), n = e = 0; n < r; n++) {
                                    var o = a,
                                        s = k[t + 8 * n >> 2],
                                        _ = k[t + (8 * n + 4) >> 2],
                                        c = void 0,
                                        u = E;
                                    if (0 > _ || 0 > c) throw new Ee(28);
                                    if (null === o.Cc) throw new Ee(8);
                                    if (0 == (2097155 & o.flags)) throw new Ee(8);
                                    if (16384 == (61440 & o.node.mode)) throw new Ee(31);
                                    if (!o.sc.write) throw new Ee(28);
                                    o.seekable && 1024 & o.flags && He(o, 0, 2);
                                    var f = void 0 !== c;
                                    if (f) {
                                        if (!o.seekable) throw new Ee(70)
                                    } else c = o.position;
                                    var l = o.sc.write(o, u, s, _, c, void 0);
                                    f || (o.position += l);
                                    try {
                                        o.path && ve.onWriteToFile && ve.onWriteToFile(o.path)
                                    } catch (e) {
                                        p("FS.trackingDelegate['onWriteToFile']('" + o.path + "') threw an exception: " + e.message)
                                    }
                                    var d = l;
                                    if (0 > d) {
                                        var h = -1;
                                        break e
                                    }
                                    e += d
                                }
                                h = e
                            }
                            return k[i >> 2] = h,
                            0
                        }
                        catch (e) {
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
                        }
                    },
                    f: function(e) {
                        var t = Date.now();
                        return k[e >> 2] = t / 1e3 | 0, k[e + 4 >> 2] = t % 1e3 * 1e3 | 0, 0
                    },
                    m: function(e, t) {
                        Qt.bindTexture(e, Wt[t])
                    },
                    o: function(e, t) {
                        for (var r = 0; r < e; r++) {
                            var i = Qt.createTexture(),
                                a = i && Yt(Wt);
                            i ? (i.name = a, Wt[a] = i) : Xt || (Xt = 1282), k[t + 4 * r >> 2] = a
                        }
                    },
                    i: function(e, t, r, i, a, n, o, s, _) {
                        var c = Qt,
                            u = c.texImage2D;
                        if (_) {
                            var f = s - 5120;
                            f = 1 == f ? A : 4 == f ? k : 6 == f ? L : 5 == f || 28922 == f ? R : x;
                            var l = 31 - Math.clz32(f.BYTES_PER_ELEMENT);
                            _ = f.subarray(_ >> l, _ + a * (i * ({
                                5: 3,
                                6: 4,
                                8: 2,
                                29502: 3,
                                29504: 4
                            } [o - 6402] || 1) * (1 << l) + 4 - 1 & -4) >> l)
                        } else _ = null;
                        u.call(c, e, t, r, i, a, n, o, s, _)
                    },
                    j: function(e, t, r) {
                        Qt.texParameteri(e, t, r)
                    },
                    r: function e(t, r) {
                        return t = new Date(1e3 * k[t >> 2]), k[r >> 2] = t.getUTCSeconds(), k[r + 4 >> 2] = t.getUTCMinutes(), k[r + 8 >> 2] = t.getUTCHours(), k[r + 12 >> 2] = t.getUTCDate(), k[r + 16 >> 2] = t.getUTCMonth(), k[r + 20 >> 2] = t.getUTCFullYear() - 1900, k[r + 24 >> 2] = t.getUTCDay(), k[r + 36 >> 2] = 0, k[r + 32 >> 2] = 0, k[r + 28 >> 2] = (t.getTime() - Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0, e.bd || (e.bd = S("GMT")), k[r + 40 >> 2] = e.bd, r
                    },
                    q: function(e, t) {
                        ! function() {
                            function e(e) {
                                return (e = e.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? e[1] : "GMT"
                            }
                            if (!jt) {
                                jt = !0;
                                var t = (new Date).getFullYear(),
                                    r = new Date(t, 0, 1),
                                    i = new Date(t, 6, 1);
                                t = r.getTimezoneOffset();
                                var a = i.getTimezoneOffset(),
                                    n = Math.max(t, a);
                                k[dr() >> 2] = 60 * n, k[lr() >> 2] = Number(t != a), r = e(r), i = e(i), r = S(r), i = S(i), a < t ? (k[fr() >> 2] = r, k[fr() + 4 >> 2] = i) : (k[fr() >> 2] = i, k[fr() + 4 >> 2] = r)
                            }
                        }(), e = new Date(1e3 * k[e >> 2]), k[t >> 2] = e.getSeconds(), k[t + 4 >> 2] = e.getMinutes(), k[t + 8 >> 2] = e.getHours(), k[t + 12 >> 2] = e.getDate(), k[t + 16 >> 2] = e.getMonth(), k[t + 20 >> 2] = e.getFullYear() - 1900, k[t + 24 >> 2] = e.getDay();
                        var r = new Date(e.getFullYear(), 0, 1);
                        k[t + 28 >> 2] = (e.getTime() - r.getTime()) / 864e5 | 0, k[t + 36 >> 2] = -60 * e.getTimezoneOffset();
                        var i = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
                        return e = 0 | (i != (r = r.getTimezoneOffset()) && e.getTimezoneOffset() == Math.min(r, i)), k[t + 32 >> 2] = e, e = k[fr() + (e ? 4 : 0) >> 2], k[t + 40 >> 2] = e, t
                    },
                    Q: function() {
                        return 6
                    },
                    y: function() {
                        return 28
                    },
                    z: function(e, t, r, i) {
                        return function(e, t, r, i) {
                            function a(e, t, r) {
                                for (e = "number" == typeof e ? e.toString() : e || ""; e.length < t;) e = r[0] + e;
                                return e
                            }

                            function n(e, t) {
                                return a(e, t, "0")
                            }

                            function o(e, t) {
                                function r(e) {
                                    return 0 > e ? -1 : 0 < e ? 1 : 0
                                }
                                var i;
                                return 0 === (i = r(e.getFullYear() - t.getFullYear())) && 0 === (i = r(e.getMonth() - t.getMonth())) && (i = r(e.getDate() - t.getDate())), i
                            }

                            function s(e) {
                                switch (e.getDay()) {
                                    case 0:
                                        return new Date(e.getFullYear() - 1, 11, 29);
                                    case 1:
                                        return e;
                                    case 2:
                                        return new Date(e.getFullYear(), 0, 3);
                                    case 3:
                                        return new Date(e.getFullYear(), 0, 2);
                                    case 4:
                                        return new Date(e.getFullYear(), 0, 1);
                                    case 5:
                                        return new Date(e.getFullYear() - 1, 11, 31);
                                    case 6:
                                        return new Date(e.getFullYear() - 1, 11, 30)
                                }
                            }

                            function _(e) {
                                e = rr(new Date(e.xc + 1900, 0, 1), e.Vc);
                                var t = new Date(e.getFullYear() + 1, 0, 4),
                                    r = s(new Date(e.getFullYear(), 0, 4));
                                return t = s(t), 0 >= o(r, e) ? 0 >= o(t, e) ? e.getFullYear() + 1 : e.getFullYear() : e.getFullYear() - 1
                            }
                            var c = k[i + 40 >> 2];
                            for (var u in i = {
                                    Pd: k[i >> 2],
                                    Od: k[i + 4 >> 2],
                                    Tc: k[i + 8 >> 2],
                                    Nc: k[i + 12 >> 2],
                                    Ic: k[i + 16 >> 2],
                                    xc: k[i + 20 >> 2],
                                    Uc: k[i + 24 >> 2],
                                    Vc: k[i + 28 >> 2],
                                    de: k[i + 32 >> 2],
                                    Nd: k[i + 36 >> 2],
                                    Qd: c ? I(c) : ""
                                }, r = I(r), c = {
                                    "%c": "%a %b %d %H:%M:%S %Y",
                                    "%D": "%m/%d/%y",
                                    "%F": "%Y-%m-%d",
                                    "%h": "%b",
                                    "%r": "%I:%M:%S %p",
                                    "%R": "%H:%M",
                                    "%T": "%H:%M:%S",
                                    "%x": "%m/%d/%y",
                                    "%X": "%H:%M:%S",
                                    "%Ec": "%c",
                                    "%EC": "%C",
                                    "%Ex": "%m/%d/%y",
                                    "%EX": "%H:%M:%S",
                                    "%Ey": "%y",
                                    "%EY": "%Y",
                                    "%Od": "%d",
                                    "%Oe": "%e",
                                    "%OH": "%H",
                                    "%OI": "%I",
                                    "%Om": "%m",
                                    "%OM": "%M",
                                    "%OS": "%S",
                                    "%Ou": "%u",
                                    "%OU": "%U",
                                    "%OV": "%V",
                                    "%Ow": "%w",
                                    "%OW": "%W",
                                    "%Oy": "%y"
                                }) r = r.replace(new RegExp(u, "g"), c[u]);
                            var f = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                                l = "January February March April May June July August September October November December".split(" ");
                            for (u in c = {
                                    "%a": function(e) {
                                        return f[e.Uc].substring(0, 3)
                                    },
                                    "%A": function(e) {
                                        return f[e.Uc]
                                    },
                                    "%b": function(e) {
                                        return l[e.Ic].substring(0, 3)
                                    },
                                    "%B": function(e) {
                                        return l[e.Ic]
                                    },
                                    "%C": function(e) {
                                        return n((e.xc + 1900) / 100 | 0, 2)
                                    },
                                    "%d": function(e) {
                                        return n(e.Nc, 2)
                                    },
                                    "%e": function(e) {
                                        return a(e.Nc, 2, " ")
                                    },
                                    "%g": function(e) {
                                        return _(e).toString().substring(2)
                                    },
                                    "%G": function(e) {
                                        return _(e)
                                    },
                                    "%H": function(e) {
                                        return n(e.Tc, 2)
                                    },
                                    "%I": function(e) {
                                        return 0 == (e = e.Tc) ? e = 12 : 12 < e && (e -= 12), n(e, 2)
                                    },
                                    "%j": function(e) {
                                        return n(e.Nc + $t(Jt(e.xc + 1900) ? er : tr, e.Ic - 1), 3)
                                    },
                                    "%m": function(e) {
                                        return n(e.Ic + 1, 2)
                                    },
                                    "%M": function(e) {
                                        return n(e.Od, 2)
                                    },
                                    "%n": function() {
                                        return "\n"
                                    },
                                    "%p": function(e) {
                                        return 0 <= e.Tc && 12 > e.Tc ? "AM" : "PM"
                                    },
                                    "%S": function(e) {
                                        return n(e.Pd, 2)
                                    },
                                    "%t": function() {
                                        return "\t"
                                    },
                                    "%u": function(e) {
                                        return e.Uc || 7
                                    },
                                    "%U": function(e) {
                                        var t = new Date(e.xc + 1900, 0, 1),
                                            r = 0 === t.getDay() ? t : rr(t, 7 - t.getDay());
                                        return 0 > o(r, e = new Date(e.xc + 1900, e.Ic, e.Nc)) ? n(Math.ceil((31 - r.getDate() + ($t(Jt(e.getFullYear()) ? er : tr, e.getMonth() - 1) - 31) + e.getDate()) / 7), 2) : 0 === o(r, t) ? "01" : "00"
                                    },
                                    "%V": function(e) {
                                        var t = new Date(e.xc + 1901, 0, 4),
                                            r = s(new Date(e.xc + 1900, 0, 4));
                                        t = s(t);
                                        var i = rr(new Date(e.xc + 1900, 0, 1), e.Vc);
                                        return 0 > o(i, r) ? "53" : 0 >= o(t, i) ? "01" : n(Math.ceil((r.getFullYear() < e.xc + 1900 ? e.Vc + 32 - r.getDate() : e.Vc + 1 - r.getDate()) / 7), 2)
                                    },
                                    "%w": function(e) {
                                        return e.Uc
                                    },
                                    "%W": function(e) {
                                        var t = new Date(e.xc, 0, 1),
                                            r = 1 === t.getDay() ? t : rr(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1);
                                        return 0 > o(r, e = new Date(e.xc + 1900, e.Ic, e.Nc)) ? n(Math.ceil((31 - r.getDate() + ($t(Jt(e.getFullYear()) ? er : tr, e.getMonth() - 1) - 31) + e.getDate()) / 7), 2) : 0 === o(r, t) ? "01" : "00"
                                    },
                                    "%y": function(e) {
                                        return (e.xc + 1900).toString().substring(2)
                                    },
                                    "%Y": function(e) {
                                        return e.xc + 1900
                                    },
                                    "%z": function(e) {
                                        var t = 0 <= (e = e.Nd);
                                        return e = Math.abs(e) / 60, (t ? "+" : "-") + String("0000" + (e / 60 * 100 + e % 60)).slice(-4)
                                    },
                                    "%Z": function(e) {
                                        return e.Qd
                                    },
                                    "%%": function() {
                                        return "%"
                                    }
                                }) 0 <= r.indexOf(u) && (r = r.replace(new RegExp(u, "g"), c[u](i)));
                            return (u = ar(r, !1)).length > t ? 0 : (E.set(u, e), u.length - 1)
                        }(e, t, r, i)
                    },
                    d: function(e) {
                        var t = Date.now() / 1e3 | 0;
                        return e && (k[e >> 2] = t), t
                    }
                },
                or = function() {
                    function e(e) {
                        r.asm = e.exports, m = r.asm.S, D(), C = r.asm.X, V.unshift(r.asm.T), Z()
                    }
                    var t = {
                        a: nr
                    };
                    if (X(), r.instantiateWasm) try {
                        return r.instantiateWasm(t, e)
                    } catch (e) {
                        return p("Module.instantiateWasm callback failed with error: " + e), !1
                    }
                    return t = function(e) {
                        var t = Q;
                        try {
                            e: {
                                try {
                                    if (t == Q && l) {
                                        var r = new Uint8Array(l);
                                        break e
                                    }
                                    if (c) {
                                        r = c(t);
                                        break e
                                    }
                                    throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)"
                                } catch (e) {
                                    j(e)
                                }
                                r = void 0
                            }
                            var i = new WebAssembly.Module(r),
                                a = new WebAssembly.Instance(i, e)
                        }
                        catch (t) {
                            throw e = t.toString(), p("failed to compile wasm module: " + e), (0 <= e.indexOf("imported Memory") || 0 <= e.indexOf("memory import")) && p("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."), t
                        }
                        return [a, i]
                    }(t), e(t[0]), r.asm
                }();
            r.___wasm_call_ctors = or.T, r._zappar_has_initialized = or.U, r._zappar_invert = or.V, r._zappar_loaded = or.W, r._zappar_pipeline_create = or.Y, r._zappar_pipeline_destroy = or.Z, r._zappar_pipeline_camera_frame_submit = or._, r._zappar_pipeline_camera_frame_submit_raw_pointer = or.$, r._zappar_pipeline_frame_update = or.aa, r._zappar_pipeline_camera_frame_user_data = or.ba, r._zappar_pipeline_camera_model = or.ca, r._zappar_pipeline_frame_number = or.da, r._zappar_pipeline_motion_accelerometer_submit = or.ea, r._zappar_pipeline_motion_rotation_rate_submit = or.fa, r._zappar_pipeline_motion_attitude_submit = or.ga, r._zappar_pipeline_motion_attitude_matrix_submit = or.ha, r._zappar_pipeline_camera_frame_user_facing = or.ia, r._zappar_pipeline_camera_frame_texture_matrix = or.ja, r._zappar_pipeline_camera_pose_with_attitude = or.ka, r._zappar_pipeline_camera_pose_with_origin = or.la, r._zappar_pipeline_camera_frame_camera_attitude = or.ma, r._zappar_pipeline_camera_frame_device_attitude = or.na, r._zappar_pipeline_camera_frame_texture_gl = or.oa, r._zappar_pipeline_camera_frame_upload_gl = or.pa, r._zappar_pipeline_sequence_record_start = or.qa, r._zappar_pipeline_sequence_record_stop = or.ra, r._zappar_pipeline_sequence_record_clear = or.sa, r._zappar_pipeline_sequence_record_device_attitude_matrices_set = or.ta, r._zappar_pipeline_sequence_record_data_size = or.ua, r._zappar_pipeline_sequence_record_data = or.va, r._zappar_pipeline_process_gl = or.wa, r._zappar_pipeline_camera_pose_default = or.xa, r._zappar_instant_world_tracker_create = or.ya, r._zappar_instant_world_tracker_destroy = or.za, r._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw = or.Aa, r._zappar_instant_world_tracker_anchor_pose_raw = or.Ba, r._zappar_instant_world_tracker_enabled_set = or.Ca, r._zappar_instant_world_tracker_enabled = or.Da, r._zappar_image_tracker_create = or.Ea, r._zappar_image_tracker_destroy = or.Fa, r._zappar_image_tracker_target_load_from_memory = or.Ga, r.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc = or.Ha;
            var sr = r._free = or.Ia;
            r._zappar_image_tracker_anchor_count = or.Ja, r._zappar_image_tracker_anchor_id = or.Ka, r._zappar_image_tracker_anchor_pose_raw = or.La, r._zappar_image_tracker_enabled_set = or.Ma, r._zappar_image_tracker_enabled = or.Na, r._zappar_image_tracker_target_loaded_version = or.Oa, r.__Z33zappar_image_tracker_target_countP23zappar_image_tracker_ti = or.Pa, r.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii = or.Qa, r.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii = or.Ra, r.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii = or.Sa, r.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii = or.Ta, r.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii = or.Ua, r.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii = or.Va, r.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii = or.Wa, r.__Z38zappar_image_tracker_target_radius_topP23zappar_image_tracker_tii = or.Xa, r.__Z41zappar_image_tracker_target_radius_bottomP23zappar_image_tracker_tii = or.Ya, r.__Z39zappar_image_tracker_target_side_lengthP23zappar_image_tracker_tii = or.Za, r.__Z49zappar_image_tracker_target_physical_scale_factorP23zappar_image_tracker_tii = or._a, r.__Z49zappar_image_tracker_target_preview_mesh_verticesP23zappar_image_tracker_tii = or.$a, r.__Z48zappar_image_tracker_target_preview_mesh_normalsP23zappar_image_tracker_tii = or.ab, r.__Z44zappar_image_tracker_target_preview_mesh_uvsP23zappar_image_tracker_tii = or.bb, r.__Z48zappar_image_tracker_target_preview_mesh_indicesP23zappar_image_tracker_tii = or.cb, r.__Z54zappar_image_tracker_target_preview_mesh_vertices_sizeP23zappar_image_tracker_tii = or.db, r.__Z53zappar_image_tracker_target_preview_mesh_normals_sizeP23zappar_image_tracker_tii = or.eb, r.__Z49zappar_image_tracker_target_preview_mesh_uvs_sizeP23zappar_image_tracker_tii = or.fb, r.__Z53zappar_image_tracker_target_preview_mesh_indices_sizeP23zappar_image_tracker_tii = or.gb, r.__Z32zappar_image_tracker_target_typeP23zappar_image_tracker_tii = or.hb, r._zappar_face_tracker_create = or.ib, r._zappar_face_tracker_destroy = or.jb, r._zappar_face_tracker_model_load_from_memory = or.kb, r._zappar_face_tracker_anchor_count = or.lb, r._zappar_face_tracker_anchor_id = or.mb, r._zappar_face_tracker_anchor_pose_raw = or.nb, r._zappar_face_tracker_anchor_identity_coefficients = or.ob, r._zappar_face_tracker_anchor_expression_coefficients = or.pb, r._zappar_face_tracker_enabled_set = or.qb, r._zappar_face_tracker_enabled = or.rb, r._zappar_face_tracker_max_faces_set = or.sb, r._zappar_face_tracker_max_faces = or.tb, r._zappar_face_tracker_model_loaded_version = or.ub, r._zappar_face_landmark_create = or.vb, r._zappar_face_landmark_destroy = or.wb, r.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i = or.xb, r._zappar_face_landmark_anchor_pose = or.yb, r._zappar_barcode_finder_create = or.zb, r._zappar_barcode_finder_destroy = or.Ab, r._zappar_barcode_finder_found_number = or.Bb, r._zappar_barcode_finder_found_text = or.Cb, r._zappar_barcode_finder_enabled_set = or.Db, r._zappar_barcode_finder_enabled = or.Eb, r._zappar_barcode_finder_found_format = or.Fb, r._zappar_barcode_finder_formats = or.Gb, r._zappar_barcode_finder_formats_set = or.Hb;
            var _r = r._malloc = or.Ib;
            r._zappar_face_mesh_create = or.Jb, r._zappar_face_mesh_destroy = or.Kb, r.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii = or.Lb, r.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti = or.Mb, r.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti = or.Nb, r.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti = or.Ob, r.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti = or.Pb, r.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti = or.Qb, r.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti = or.Rb, r.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti = or.Sb, r.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i = or.Tb, r.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti = or.Ub, r.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti = or.Vb, r._zappar_camera_source_create = or.Wb, r._zappar_camera_source_destroy = or.Xb, r._zappar_camera_source_start = or.Yb, r._zappar_camera_source_pause = or.Zb, r._zappar_camera_default_device_id = or._b, r._zappar_sequence_source_create = or.$b, r.__Z28zappar_sequence_source_startP25zappar_sequence_source_ti = or.ac, r.__Z39zappar_sequence_source_load_from_memoryP25zappar_sequence_source_tiPKci = or.bc, r.__Z28zappar_sequence_source_pauseP25zappar_sequence_source_ti = or.cc, r._zappar_sequence_source_destroy = or.dc, r._zappar_sequence_source_max_playback_fps_set = or.ec, r._zappar_log_level_set = or.fc, r._zappar_log_level = or.gc, r.__Z23zappar_log_redirect_setPFv18zappar_log_level_tPKcE = or.hc, r._zappar_analytics_project_id_set = or.ic;
            var cr, ur = r.___errno_location = or.jc,
                fr = r.__get_tzname = or.kc,
                lr = r.__get_daylight = or.lc,
                dr = r.__get_timezone = or.mc,
                pr = r.stackSave = or.nc,
                hr = r.stackRestore = or.oc,
                mr = r.stackAlloc = or.pc;

            function br(e) {
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
            }

            function wr() {
                function e() {
                    if (!cr && (cr = !0, r.calledRun = !0, !w)) {
                        if (r.noFSInit || Pe || (Pe = !0, Ye(), r.stdin = r.stdin, r.stdout = r.stdout, r.stderr = r.stderr, r.stdin ? Xe("stdin", r.stdin) : Ve("/dev/tty", "/dev/stdin"), r.stdout ? Xe("stdout", null, r.stdout) : Ve("/dev/tty", "/dev/stdout"), r.stderr ? Xe("stderr", null, r.stderr) : Ve("/dev/tty1", "/dev/stderr"), We("/dev/stdin", 0), We("/dev/stdout", 1), We("/dev/stderr", 1)), te(V), ye = !1, te(N), i(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), r.postRun)
                            for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) {
                                var e = r.postRun.shift();
                                q.unshift(e)
                            }
                        te(q)
                    }
                }
                if (!(0 < W)) {
                    if (r.preRun)
                        for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) G();
                    te(U), 0 < W || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                        setTimeout((function() {
                            r.setStatus("")
                        }), 1), e()
                    }), 1)) : e())
                }
            }

            function gr(e) {
                b = e, h || (r.onExit && r.onExit(e), w = !0), _(e, new br(e))
            }
            if (r.cwrap = function(e, t, r, i) {
                    var a = (r = r || []).every((function(e) {
                        return "number" === e
                    }));
                    return "string" !== t && a && !i ? y(e) : function() {
                        return function(e, t, r, i) {
                            var a, n = {
                                    string: function(e) {
                                        var t = 0;
                                        if (null != e && 0 !== e) {
                                            var r = 1 + (e.length << 2);
                                            t = mr(r), P(e, A, t, r)
                                        }
                                        return t
                                    },
                                    array: function(e) {
                                        var t = mr(e.length);
                                        return E.set(e, t), t
                                    }
                                },
                                o = y(e),
                                s = [];
                            if (e = 0, i)
                                for (var _ = 0; _ < i.length; _++) {
                                    var c = n[r[_]];
                                    c ? (0 === e && (e = pr()), s[_] = c(i[_])) : s[_] = i[_]
                                }
                            return a = r = o.apply(null, s), r = "string" === t ? I(a) : "boolean" === t ? !!a : a, 0 !== e && hr(e), r
                        }(e, t, r, arguments)
                    }
                }, r.setValue = function(e, t, r) {
                    switch ("*" === (r = r || "i8").charAt(r.length - 1) && (r = "i32"), r) {
                        case "i1":
                        case "i8":
                            E[e >> 0] = t;
                            break;
                        case "i16":
                            T[e >> 1] = t;
                            break;
                        case "i32":
                            k[e >> 2] = t;
                            break;
                        case "i64":
                            J = [t >>> 0, (K = t, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[e >> 2] = J[0], k[e + 4 >> 2] = J[1];
                            break;
                        case "float":
                            L[e >> 2] = t;
                            break;
                        case "double":
                            F[e >> 3] = t;
                            break;
                        default:
                            j("invalid type for setValue: " + r)
                    }
                }, r.getValue = function(e, t) {
                    switch ("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"), t) {
                        case "i1":
                        case "i8":
                            return E[e >> 0];
                        case "i16":
                            return T[e >> 1];
                        case "i32":
                        case "i64":
                            return k[e >> 2];
                        case "float":
                            return L[e >> 2];
                        case "double":
                            return F[e >> 3];
                        default:
                            j("invalid type for getValue: " + t)
                    }
                    return null
                }, r.UTF8ToString = I, Y = function e() {
                    cr || wr(), cr || (Y = e)
                }, r.run = wr, r.preInit)
                for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); 0 < r.preInit.length;) r.preInit.pop()();
            return wr(), t
        });
        class i {
            constructor(e) {
                this._messageSender = e, this._freeBufferPool = [], this._buffer = new ArrayBuffer(16), this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u8cView = new Uint8ClampedArray(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), this._offset = 1, this._startOffset = -1, this._timeoutSet = !1, this._appender = {
                    int: e => this.int(e),
                    bool: e => this.int(e ? 1 : 0),
                    float: e => this.float(e),
                    string: e => this.string(e),
                    dataWithLength: e => this.arrayBuffer(e),
                    type: e => this.int(e),
                    matrix4x4: e => this.float32ArrayBuffer(e),
                    matrix3x3: e => this.float32ArrayBuffer(e),
                    identityCoefficients: e => this.float32ArrayBuffer(e),
                    expressionCoefficients: e => this.float32ArrayBuffer(e),
                    cameraModel: e => this.float32ArrayBuffer(e),
                    timestamp: e => this.double(e),
                    barcodeFormat: e => this.int(e),
                    faceLandmarkName: e => this.int(e),
                    instantTrackerTransformOrientation: e => this.int(e),
                    logLevel: e => this.int(e)
                }, this._freeBufferPool.push(new ArrayBuffer(16)), this._freeBufferPool.push(new ArrayBuffer(16))
            }
            bufferReturn(e) {
                this._freeBufferPool.push(e)
            }
            _ensureArrayBuffer(e) {
                let t, r = 4 * (this._offset + e + 8);
                if (this._buffer && this._buffer.byteLength >= r) return;
                if (!t) {
                    let e = r;
                    e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, t = new ArrayBuffer(e)
                }
                let i = this._buffer ? this._i32View : void 0;
                this._buffer = t, this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u8cView = new Uint8ClampedArray(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), i && this._i32View.set(i.subarray(0, this._offset))
            }
            sendMessage(e, t) {
                this._ensureArrayBuffer(4), this._startOffset = this._offset, this._i32View[this._offset + 1] = e, this._offset += 2, t(this._appender), this._i32View[this._startOffset] = this._offset - this._startOffset, this._startOffset = -1, this._sendOneTime()
            }
            _sendOneTime() {
                !1 === this._timeoutSet && (this._timeoutSet = !0, setTimeout((() => {
                    this._timeoutSet = !1, this._send()
                }), 0))
            }
            _send() {
                0 !== this._freeBufferPool.length ? (this._i32View[0] = this._offset, this._messageSender(this._buffer), this._buffer = void 0, this._buffer = this._freeBufferPool.pop(), this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u8cView = new Uint8ClampedArray(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), this._offset = 1, this._startOffset = -1) : this._sendOneTime()
            }
            int(e) {
                this._ensureArrayBuffer(1), this._i32View[this._offset] = e, this._offset++
            }
            double(e) {
                this._ensureArrayBuffer(2), this._offset % 2 == 1 && this._offset++, this._f64View[this._offset / 2] = e, this._offset += 2
            }
            float(e) {
                this._ensureArrayBuffer(1), this._f32View[this._offset] = e, this._offset++
            }
            int32Array(e) {
                this._ensureArrayBuffer(e.length);
                for (let t = 0; t < e.length; ++t) this._i32View[this._offset + t] = e[t];
                this._offset += e.length
            }
            float32Array(e) {
                this._ensureArrayBuffer(e.length);
                for (let t = 0; t < e.length; ++t) this._f32View[this._offset + t] = e[t];
                this._offset += e.length
            }
            booleanArray(e) {
                this._ensureArrayBuffer(e.length);
                for (let t = 0; t < e.length; ++t) this._i32View[this._offset + t] = e[t] ? 1 : 0;
                this._offset += e.length
            }
            uint8ArrayBuffer(e) {
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.byteLength, this._offset++, this._u8View.set(e, 4 * this._offset), this._offset += e.byteLength >> 2, 0 != (3 & e.byteLength) && this._offset++
            }
            arrayBuffer(e) {
                let t = new Uint8Array(e);
                this.uint8ArrayBuffer(t)
            }
            uint8ClampedArrayBuffer(e) {
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.byteLength, this._offset++, this._u8cView.set(e, 4 * this._offset), this._offset += e.byteLength >> 2, 0 != (3 & e.byteLength) && this._offset++
            }
            float32ArrayBuffer(e) {
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.length, this._offset++, this._f32View.set(e, this._offset), this._offset += e.length
            }
            uint16ArrayBuffer(e) {
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.length, this._offset++;
                let t = 2 * this._offset;
                this._u16View.set(e, t), this._offset += e.length >> 1, 0 != (1 & e.length) && this._offset++
            }
            int32ArrayBuffer(e) {
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.length, this._offset++, this._i32View.set(e, this._offset), this._offset += e.length
            }
            uint32ArrayBuffer(e) {
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.length, this._offset++, this._u32View.set(e, this._offset), this._offset += e.length
            }
            string(e) {
                let t = (new TextEncoder).encode(e);
                this._ensureArrayBuffer(t.byteLength / 4), this._i32View[this._offset] = t.byteLength, this._offset++, this._u8View.set(t, 4 * this._offset), this._offset += t.byteLength >> 2, 0 != (3 & t.byteLength) && this._offset++
            }
        }
        class a {
            constructor() {
                this._buffer = new ArrayBuffer(0), this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), this._offset = 0, this._length = 0, this._startOffset = -1, this._processor = {
                    int: () => this._i32View[this._startOffset++],
                    bool: () => 1 === this._i32View[this._startOffset++],
                    type: () => this._i32View[this._startOffset++],
                    float: () => this._f32View[this._startOffset++],
                    timestamp: () => {
                        this._startOffset % 2 == 1 && this._startOffset++;
                        let e = this._f64View[this._startOffset / 2];
                        return this._startOffset += 2, e
                    },
                    string: () => {
                        let e = this._i32View[this._startOffset++],
                            t = (new TextDecoder).decode(new Uint8Array(this._buffer, 4 * this._startOffset, e));
                        return this._startOffset += e >> 2, 0 != (3 & e) && this._startOffset++, t
                    },
                    dataWithLength: () => {
                        let e = this._i32View[this._startOffset++],
                            t = new Uint8Array(e);
                        return t.set(this._u8View.subarray(4 * this._startOffset, 4 * this._startOffset + e)), this._startOffset += t.byteLength >> 2, 0 != (3 & t.byteLength) && this._startOffset++, t.buffer
                    },
                    matrix4x4: () => {
                        let e = this._i32View[this._startOffset++],
                            t = new Float32Array(e);
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 16)), this._startOffset += e, t
                    },
                    matrix3x3: () => {
                        let e = this._i32View[this._startOffset++],
                            t = new Float32Array(e);
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 9)), this._startOffset += e, t
                    },
                    identityCoefficients: () => {
                        let e = this._i32View[this._startOffset++],
                            t = new Float32Array(e);
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 50)), this._startOffset += e, t
                    },
                    expressionCoefficients: () => {
                        let e = this._i32View[this._startOffset++],
                            t = new Float32Array(e);
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 29)), this._startOffset += e, t
                    },
                    cameraModel: () => {
                        let e = this._i32View[this._startOffset++],
                            t = new Float32Array(e);
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 6)), this._startOffset += e, t
                    },
                    barcodeFormat: () => this._i32View[this._startOffset++],
                    faceLandmarkName: () => this._i32View[this._startOffset++],
                    instantTrackerTransformOrientation: () => this._i32View[this._startOffset++],
                    logLevel: () => this._i32View[this._startOffset++]
                }
            }
            setData(e) {
                this._buffer = e, this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), this._offset = 0, this._length = 0, e.byteLength >= 4 && (this._offset = 1, this._length = this._i32View[0]), this._startOffset = -1
            }
            hasMessage() {
                return this._offset + 1 < this._length
            }
            forMessages(e) {
                for (; this.hasMessage();) {
                    let t = this._i32View[this._offset],
                        r = this._i32View[this._offset + 1];
                    this._startOffset = this._offset + 2, this._offset += t, e(r, this._processor)
                }
            }
        }
        class n {
            constructor(e, t) {
                this._impl = e, this._sender = t, this._deserializer = new a, this.serializersByPipelineId = new Map, this._pipeline_id_by_pipeline_id = new Map, this._pipeline_by_instance = new Map, this._pipeline_id_by_camera_source_id = new Map, this._camera_source_by_instance = new Map, this._pipeline_id_by_sequence_source_id = new Map, this._sequence_source_by_instance = new Map, this._pipeline_id_by_image_tracker_id = new Map, this._image_tracker_by_instance = new Map, this._pipeline_id_by_face_tracker_id = new Map, this._face_tracker_by_instance = new Map, this._pipeline_id_by_face_mesh_id = new Map, this._face_mesh_by_instance = new Map, this._pipeline_id_by_face_landmark_id = new Map, this._face_landmark_by_instance = new Map, this._pipeline_id_by_barcode_finder_id = new Map, this._barcode_finder_by_instance = new Map, this._pipeline_id_by_instant_world_tracker_id = new Map, this._instant_world_tracker_by_instance = new Map
            }
            processBuffer(e) {
                this._deserializer.setData(e), this._deserializer.forMessages(((e, t) => {
                    switch (e) {
                        case 34:
                            this._impl.log_level_set(t.logLevel());
                            break;
                        case 31:
                            this._impl.analytics_project_id_set(t.string(), t.string());
                            break;
                        case 27: {
                            let e = t.type(),
                                r = this._impl.pipeline_create();
                            this._pipeline_by_instance.set(e, r), this._pipeline_id_by_pipeline_id.set(e, e), this.serializersByPipelineId.set(e, new i((t => {
                                this._sender(e, t)
                            })));
                            break
                        }
                        case 28: {
                            let e = t.type(),
                                r = this._pipeline_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.pipeline_destroy(r), this._pipeline_by_instance.delete(e);
                            break
                        }
                        case 9: {
                            let e = t.type(),
                                r = this._pipeline_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.pipeline_frame_update(r);
                            break
                        }
                        case 8: {
                            let e = t.type(),
                                r = this._pipeline_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.pipeline_camera_frame_submit(r, t.dataWithLength(), t.int(), t.int(), t.int(), t.matrix4x4(), t.cameraModel(), t.bool());
                            break
                        }
                        case 10: {
                            let e = t.type(),
                                r = this._pipeline_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.pipeline_motion_accelerometer_submit(r, t.timestamp(), t.float(), t.float(), t.float());
                            break
                        }
                        case 11: {
                            let e = t.type(),
                                r = this._pipeline_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.pipeline_motion_rotation_rate_submit(r, t.timestamp(), t.float(), t.float(), t.float());
                            break
                        }
                        case 12: {
                            let e = t.type(),
                                r = this._pipeline_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.pipeline_motion_attitude_submit(r, t.timestamp(), t.float(), t.float(), t.float());
                            break
                        }
                        case 13: {
                            let e = t.type(),
                                r = this._pipeline_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.pipeline_motion_attitude_matrix_submit(r, t.matrix4x4());
                            break
                        }
                        case 29: {
                            let e = t.type(),
                                r = t.type(),
                                i = this._pipeline_by_instance.get(r),
                                a = t.string(),
                                n = this._impl.camera_source_create(i, a);
                            this._camera_source_by_instance.set(e, n), this._pipeline_id_by_camera_source_id.set(e, r);
                            break
                        }
                        case 30: {
                            let e = t.type(),
                                r = this._camera_source_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.camera_source_destroy(r), this._camera_source_by_instance.delete(e);
                            break
                        }
                        case 35: {
                            let e = t.type(),
                                r = t.type(),
                                i = this._pipeline_by_instance.get(r),
                                a = this._impl.sequence_source_create(i);
                            this._sequence_source_by_instance.set(e, a), this._pipeline_id_by_sequence_source_id.set(e, r);
                            break
                        }
                        case 36: {
                            let e = t.type(),
                                r = this._sequence_source_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.sequence_source_destroy(r), this._sequence_source_by_instance.delete(e);
                            break
                        }
                        case 2: {
                            let e = t.type(),
                                r = t.type(),
                                i = this._pipeline_by_instance.get(r),
                                a = this._impl.image_tracker_create(i);
                            this._image_tracker_by_instance.set(e, a), this._pipeline_id_by_image_tracker_id.set(e, r);
                            break
                        }
                        case 14: {
                            let e = t.type(),
                                r = this._image_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.image_tracker_destroy(r), this._image_tracker_by_instance.delete(e);
                            break
                        }
                        case 4: {
                            let e = t.type(),
                                r = this._image_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.image_tracker_target_load_from_memory(r, t.dataWithLength());
                            break
                        }
                        case 3: {
                            let e = t.type(),
                                r = this._image_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.image_tracker_enabled_set(r, t.bool());
                            break
                        }
                        case 20: {
                            let e = t.type(),
                                r = t.type(),
                                i = this._pipeline_by_instance.get(r),
                                a = this._impl.face_tracker_create(i);
                            this._face_tracker_by_instance.set(e, a), this._pipeline_id_by_face_tracker_id.set(e, r);
                            break
                        }
                        case 21: {
                            let e = t.type(),
                                r = this._face_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.face_tracker_destroy(r), this._face_tracker_by_instance.delete(e);
                            break
                        }
                        case 22: {
                            let e = t.type(),
                                r = this._face_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.face_tracker_model_load_from_memory(r, t.dataWithLength());
                            break
                        }
                        case 23: {
                            let e = t.type(),
                                r = this._face_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.face_tracker_enabled_set(r, t.bool());
                            break
                        }
                        case 24: {
                            let e = t.type(),
                                r = this._face_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.face_tracker_max_faces_set(r, t.int());
                            break
                        }
                        case 25: {
                            let e = t.type(),
                                r = this._impl.face_mesh_create();
                            this._face_mesh_by_instance.set(e, r);
                            break
                        }
                        case 26: {
                            let e = t.type(),
                                r = this._face_mesh_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.face_mesh_destroy(r), this._face_mesh_by_instance.delete(e);
                            break
                        }
                        case 32: {
                            let e = t.type(),
                                r = t.faceLandmarkName(),
                                i = this._impl.face_landmark_create(r);
                            this._face_landmark_by_instance.set(e, i);
                            break
                        }
                        case 33: {
                            let e = t.type(),
                                r = this._face_landmark_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.face_landmark_destroy(r), this._face_landmark_by_instance.delete(e);
                            break
                        }
                        case 16: {
                            let e = t.type(),
                                r = t.type(),
                                i = this._pipeline_by_instance.get(r),
                                a = this._impl.barcode_finder_create(i);
                            this._barcode_finder_by_instance.set(e, a), this._pipeline_id_by_barcode_finder_id.set(e, r);
                            break
                        }
                        case 17: {
                            let e = t.type(),
                                r = this._barcode_finder_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.barcode_finder_destroy(r), this._barcode_finder_by_instance.delete(e);
                            break
                        }
                        case 18: {
                            let e = t.type(),
                                r = this._barcode_finder_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.barcode_finder_enabled_set(r, t.bool());
                            break
                        }
                        case 19: {
                            let e = t.type(),
                                r = this._barcode_finder_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.barcode_finder_formats_set(r, t.barcodeFormat());
                            break
                        }
                        case 5: {
                            let e = t.type(),
                                r = t.type(),
                                i = this._pipeline_by_instance.get(r),
                                a = this._impl.instant_world_tracker_create(i);
                            this._instant_world_tracker_by_instance.set(e, a), this._pipeline_id_by_instant_world_tracker_id.set(e, r);
                            break
                        }
                        case 15: {
                            let e = t.type(),
                                r = this._instant_world_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.instant_world_tracker_destroy(r), this._instant_world_tracker_by_instance.delete(e);
                            break
                        }
                        case 6: {
                            let e = t.type(),
                                r = this._instant_world_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.instant_world_tracker_enabled_set(r, t.bool());
                            break
                        }
                        case 7: {
                            let e = t.type(),
                                r = this._instant_world_tracker_by_instance.get(e);
                            if (void 0 === r) return;
                            this._impl.instant_world_tracker_anchor_pose_set_from_camera_offset_raw(r, t.float(), t.float(), t.float(), t.instantTrackerTransformOrientation());
                            break
                        }
                    }
                }))
            }
            exploreState() {
                for (let [e, t] of this._pipeline_by_instance) {
                    let r = this._pipeline_id_by_pipeline_id.get(e);
                    if (!r) continue;
                    let i = this.serializersByPipelineId.get(r);
                    i && (i.sendMessage(7, (r => {
                        r.type(e), r.int(this._impl.pipeline_frame_number(t))
                    })), i.sendMessage(6, (r => {
                        r.type(e), r.cameraModel(this._impl.pipeline_camera_model(t))
                    })), i.sendMessage(5, (r => {
                        r.type(e), r.int(this._impl.pipeline_camera_frame_user_data(t))
                    })), i.sendMessage(11, (r => {
                        r.type(e), r.matrix4x4(this._impl.pipeline_camera_frame_camera_attitude(t))
                    })), i.sendMessage(12, (r => {
                        r.type(e), r.matrix4x4(this._impl.pipeline_camera_frame_device_attitude(t))
                    })))
                }
                for (let [e, t] of this._camera_source_by_instance) {
                    let t = this._pipeline_id_by_camera_source_id.get(e);
                    t && this.serializersByPipelineId.get(t)
                }
                for (let [e, t] of this._sequence_source_by_instance) {
                    let t = this._pipeline_id_by_sequence_source_id.get(e);
                    t && this.serializersByPipelineId.get(t)
                }
                for (let [e, t] of this._image_tracker_by_instance) {
                    let r = this._pipeline_id_by_image_tracker_id.get(e);
                    if (!r) continue;
                    let i = this.serializersByPipelineId.get(r);
                    if (i) {
                        i.sendMessage(19, (r => {
                            r.type(e), r.int(this._impl.image_tracker_target_loaded_version(t))
                        })), i.sendMessage(1, (r => {
                            r.type(e), r.int(this._impl.image_tracker_anchor_count(t))
                        }));
                        for (let r = 0; r < this._impl.image_tracker_anchor_count(t); r++) i.sendMessage(2, (i => {
                            i.type(e), i.int(r), i.string(this._impl.image_tracker_anchor_id(t, r))
                        }));
                        for (let r = 0; r < this._impl.image_tracker_anchor_count(t); r++) i.sendMessage(3, (i => {
                            i.type(e), i.int(r), i.matrix4x4(this._impl.image_tracker_anchor_pose_raw(t, r))
                        }))
                    }
                }
                for (let [e, t] of this._face_tracker_by_instance) {
                    let r = this._pipeline_id_by_face_tracker_id.get(e);
                    if (!r) continue;
                    let i = this.serializersByPipelineId.get(r);
                    if (i) {
                        i.sendMessage(18, (r => {
                            r.type(e), r.int(this._impl.face_tracker_model_loaded_version(t))
                        })), i.sendMessage(13, (r => {
                            r.type(e), r.int(this._impl.face_tracker_anchor_count(t))
                        }));
                        for (let r = 0; r < this._impl.face_tracker_anchor_count(t); r++) i.sendMessage(14, (i => {
                            i.type(e), i.int(r), i.string(this._impl.face_tracker_anchor_id(t, r))
                        }));
                        for (let r = 0; r < this._impl.face_tracker_anchor_count(t); r++) i.sendMessage(15, (i => {
                            i.type(e), i.int(r), i.matrix4x4(this._impl.face_tracker_anchor_pose_raw(t, r))
                        }));
                        for (let r = 0; r < this._impl.face_tracker_anchor_count(t); r++) i.sendMessage(16, (i => {
                            i.type(e), i.int(r), i.identityCoefficients(this._impl.face_tracker_anchor_identity_coefficients(t, r))
                        }));
                        for (let r = 0; r < this._impl.face_tracker_anchor_count(t); r++) i.sendMessage(17, (i => {
                            i.type(e), i.int(r), i.expressionCoefficients(this._impl.face_tracker_anchor_expression_coefficients(t, r))
                        }))
                    }
                }
                for (let [e, t] of this._face_mesh_by_instance) {
                    let t = this._pipeline_id_by_face_mesh_id.get(e);
                    t && this.serializersByPipelineId.get(t)
                }
                for (let [e, t] of this._face_landmark_by_instance) {
                    let t = this._pipeline_id_by_face_landmark_id.get(e);
                    t && this.serializersByPipelineId.get(t)
                }
                for (let [e, t] of this._barcode_finder_by_instance) {
                    let r = this._pipeline_id_by_barcode_finder_id.get(e);
                    if (!r) continue;
                    let i = this.serializersByPipelineId.get(r);
                    if (i) {
                        i.sendMessage(8, (r => {
                            r.type(e), r.int(this._impl.barcode_finder_found_number(t))
                        }));
                        for (let r = 0; r < this._impl.barcode_finder_found_number(t); r++) i.sendMessage(9, (i => {
                            i.type(e), i.int(r), i.string(this._impl.barcode_finder_found_text(t, r))
                        }));
                        for (let r = 0; r < this._impl.barcode_finder_found_number(t); r++) i.sendMessage(10, (i => {
                            i.type(e), i.int(r), i.barcodeFormat(this._impl.barcode_finder_found_format(t, r))
                        }))
                    }
                }
                for (let [e, t] of this._instant_world_tracker_by_instance) {
                    let r = this._pipeline_id_by_instant_world_tracker_id.get(e);
                    if (!r) continue;
                    let i = this.serializersByPipelineId.get(r);
                    i && i.sendMessage(4, (r => {
                        r.type(e), r.matrix4x4(this._impl.instant_world_tracker_anchor_pose_raw(t))
                    }))
                }
            }
        }
        class o {
            constructor() {
                this._funcs = []
            }
            bind(e) {
                this._funcs.push(e)
            }
            unbind(e) {
                let t = this._funcs.indexOf(e);
                t > -1 && this._funcs.splice(t, 1)
            }
            emit() {
                for (var e = 0, t = this._funcs.length; e < t; e++) this._funcs[e]()
            }
        }
        class s {
            constructor() {
                this._funcs = []
            }
            bind(e) {
                this._funcs.push(e)
            }
            unbind(e) {
                let t = this._funcs.indexOf(e);
                t > -1 && this._funcs.splice(t, 1)
            }
            emit(e) {
                for (var t = 0, r = this._funcs.length; t < r; t++) this._funcs[t](e)
            }
        }
        var _, c, u, f, l, d, p = "undefined" != typeof Float32Array ? Float32Array : Array;

        function h() {
            var e = new p(16);
            return p != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e
        }

        function m(e) {
            return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
        }
        Math.random, Math.PI, Math.hypot || (Math.hypot = function() {
                for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
                return Math.sqrt(e)
            }),
            function(e) {
                e[e.UNKNOWN = 131072] = "UNKNOWN", e[e.AZTEC = 1] = "AZTEC", e[e.CODABAR = 2] = "CODABAR", e[e.CODE_39 = 4] = "CODE_39", e[e.CODE_93 = 8] = "CODE_93", e[e.CODE_128 = 16] = "CODE_128", e[e.DATA_MATRIX = 32] = "DATA_MATRIX", e[e.EAN_8 = 64] = "EAN_8", e[e.EAN_13 = 128] = "EAN_13", e[e.ITF = 256] = "ITF", e[e.MAXICODE = 512] = "MAXICODE", e[e.PDF_417 = 1024] = "PDF_417", e[e.QR_CODE = 2048] = "QR_CODE", e[e.RSS_14 = 4096] = "RSS_14", e[e.RSS_EXPANDED = 8192] = "RSS_EXPANDED", e[e.UPC_A = 16384] = "UPC_A", e[e.UPC_E = 32768] = "UPC_E", e[e.UPC_EAN_EXTENSION = 65536] = "UPC_EAN_EXTENSION", e[e.ALL = 131071] = "ALL"
            }(_ || (_ = {})),
            function(e) {
                e[e.EYE_LEFT = 0] = "EYE_LEFT", e[e.EYE_RIGHT = 1] = "EYE_RIGHT", e[e.EAR_LEFT = 2] = "EAR_LEFT", e[e.EAR_RIGHT = 3] = "EAR_RIGHT", e[e.NOSE_BRIDGE = 4] = "NOSE_BRIDGE", e[e.NOSE_TIP = 5] = "NOSE_TIP", e[e.NOSE_BASE = 6] = "NOSE_BASE", e[e.LIP_TOP = 7] = "LIP_TOP", e[e.LIP_BOTTOM = 8] = "LIP_BOTTOM", e[e.MOUTH_CENTER = 9] = "MOUTH_CENTER", e[e.CHIN = 10] = "CHIN", e[e.EYEBROW_LEFT = 11] = "EYEBROW_LEFT", e[e.EYEBROW_RIGHT = 12] = "EYEBROW_RIGHT"
            }(c || (c = {})),
            function(e) {
                e[e.WORLD = 3] = "WORLD", e[e.MINUS_Z_AWAY_FROM_USER = 4] = "MINUS_Z_AWAY_FROM_USER", e[e.MINUS_Z_HEADING = 5] = "MINUS_Z_HEADING", e[e.UNCHANGED = 6] = "UNCHANGED"
            }(u || (u = {})),
            function(e) {
                e[e.LOG_LEVEL_NONE = 0] = "LOG_LEVEL_NONE", e[e.LOG_LEVEL_ERROR = 1] = "LOG_LEVEL_ERROR", e[e.LOG_LEVEL_WARNING = 2] = "LOG_LEVEL_WARNING", e[e.LOG_LEVEL_VERBOSE = 3] = "LOG_LEVEL_VERBOSE"
            }(f || (f = {})),
            function(e) {
                e[e.FRAME_PIXEL_FORMAT_I420 = 0] = "FRAME_PIXEL_FORMAT_I420", e[e.FRAME_PIXEL_FORMAT_I420A = 1] = "FRAME_PIXEL_FORMAT_I420A", e[e.FRAME_PIXEL_FORMAT_I422 = 2] = "FRAME_PIXEL_FORMAT_I422", e[e.FRAME_PIXEL_FORMAT_I444 = 3] = "FRAME_PIXEL_FORMAT_I444", e[e.FRAME_PIXEL_FORMAT_NV12 = 4] = "FRAME_PIXEL_FORMAT_NV12", e[e.FRAME_PIXEL_FORMAT_RGBA = 5] = "FRAME_PIXEL_FORMAT_RGBA", e[e.FRAME_PIXEL_FORMAT_BGRA = 6] = "FRAME_PIXEL_FORMAT_BGRA", e[e.FRAME_PIXEL_FORMAT_Y = 7] = "FRAME_PIXEL_FORMAT_Y"
            }(l || (l = {})),
            function(e) {
                e[e.IMAGE_TRACKER_TYPE_PLANAR = 0] = "IMAGE_TRACKER_TYPE_PLANAR", e[e.IMAGE_TRACKER_TYPE_CYLINDRICAL = 1] = "IMAGE_TRACKER_TYPE_CYLINDRICAL", e[e.IMAGE_TRACKER_TYPE_CONICAL = 2] = "IMAGE_TRACKER_TYPE_CONICAL"
            }(d || (d = {}));
        const b = new Map;
        class w {
            constructor(e) {
                this._gl = e, this._viewports = [], this._underlyingViewport = this._gl.viewport, this._viewports.push(this._gl.getParameter(this._gl.VIEWPORT)), this._gl.viewport = (e, t, r, i) => {
                    this._viewports[this._viewports.length - 1] = [e, t, r, i], this._underlyingViewport.call(this._gl, e, t, r, i)
                }
            }
            static get(e) {
                let t = b.get(e);
                return t || (t = new w(e), b.set(e, t)), t
            }
            push() {
                this._viewports.push(this._viewports[this._viewports.length - 1])
            }
            pop() {
                const e = this._viewports.pop(),
                    t = this._viewports[this._viewports.length - 1];
                e && e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] || this._underlyingViewport.call(this._gl, t[0], t[1], t[2], t[3])
            }
        }
        var g, y = r(238);
        ! function(e) {
            e[e.OBJECT_URL = 0] = "OBJECT_URL", e[e.SRC_OBJECT = 1] = "SRC_OBJECT"
        }(g || (g = {}));
        let v = {
            deviceMotionMutliplier: -1,
            blacklisted: !1,
            showGyroPermissionsWarningIfNecessary: !1,
            showSafariPermissionsResetIfNecessary: !1,
            requestHighFrameRate: !1,
            videoWidth: 640,
            videoHeight: 480,
            dataWidth: 320,
            dataHeight: 240,
            videoElementInDOM: !1,
            preferMediaStreamTrackProcessorCamera: !1,
            preferImageBitmapCamera: !1,
            ios164CameraSelection: !1,
            forceWindowOrientation: !1
        };
        "undefined" != typeof window && (window.zeeProfile = v, window.location.href.indexOf("_mstppipeline") >= 0 && (console.log("Configuring for MSTP camera pipeline (if supported)"), v.preferMediaStreamTrackProcessorCamera = !0), window.location.href.indexOf("_imagebitmappipeline") >= 0 && (console.log("Configuring for ImageBitmap camera pipeline (if supported)"), v.preferImageBitmapCamera = !0));
        let E = new y.UAParser,
            A = (E.getOS().name || "unknown").toLowerCase(),
            T = (E.getEngine().name || "unknown").toLowerCase();

        function x(e) {
            v.forceWindowOrientation = !0;
            let t = e.split(".");
            if (t.length >= 2) {
                const e = parseInt(t[0]),
                    r = parseInt(t[1]);
                (e < 11 || 11 === e && r < 3) && (v.blacklisted = !0), (e < 12 || 12 === e && r < 2) && (v.videoElementInDOM = !0), (12 === e && r >= 2 || e >= 13) && (v.showGyroPermissionsWarningIfNecessary = !0), e >= 13 && (v.showSafariPermissionsResetIfNecessary = !0), (e >= 12 && r > 1 || e >= 13) && navigator.mediaDevices && navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().frameRate && (v.requestHighFrameRate = !0, e < 14 && (v.videoHeight = 360, v.dataHeight = 180)), (16 === e && r >= 4 || e > 16) && (v.ios164CameraSelection = !0)
            }
        }

        function k(e, t, r) {
            let i = e.createShader(t);
            if (!i) throw new Error("Unable to create shader");
            e.shaderSource(i, r), e.compileShader(i);
            let a = e.getShaderInfoLog(i);
            if (a && a.trim().length > 0) throw new Error("Shader compile error: " + a);
            return i
        }
        "webkit" === T && "ios" !== A && (v.deviceMotionMutliplier = 1, "undefined" != typeof window && void 0 !== window.orientation && x("15.0")), "webkit" === T && "ios" === A && (v.deviceMotionMutliplier = 1, x(E.getOS().version || "15.0"));
        class R {
            constructor(e) {
                this._gl = e, this._isPaused = !0, this._hadFrames = !1, this._isUserFacing = !1, this._cameraToScreenRotation = 0, this._isUploadFrame = !0, this._computedTransformRotation = -1, this._computedFrontCameraRotation = !1, this._cameraUvTransform = h(), this._framebufferWidth = 0, this._framebufferHeight = 0, this._framebufferId = null, this._renderTexture = null, this._isWebGL2 = !1, this._isWebGL2 = e.getParameter(e.VERSION).indexOf("WebGL 2") >= 0, this._isWebGL2 || (this._instancedArraysExtension = this._gl.getExtension("ANGLE_instanced_arrays"))
            }
            resetGLContext() {
                this._framebufferId = null, this._renderTexture = null, this._vertexBuffer = void 0, this._indexBuffer = void 0, this._greyscaleShader = void 0
            }
            destroy() {
                this.resetGLContext()
            }
            uploadFrame(e, t, r, i) {
                let a = this._gl;
                const n = w.get(a);
                n.push();
                const o = a.isEnabled(a.SCISSOR_TEST),
                    s = a.isEnabled(a.DEPTH_TEST),
                    _ = a.isEnabled(a.BLEND),
                    c = a.isEnabled(a.CULL_FACE),
                    u = a.isEnabled(a.STENCIL_TEST),
                    f = a.getParameter(a.ACTIVE_TEXTURE),
                    l = a.getParameter(a.UNPACK_FLIP_Y_WEBGL),
                    d = a.getParameter(a.CURRENT_PROGRAM);
                a.activeTexture(a.TEXTURE0);
                const p = a.getParameter(a.TEXTURE_BINDING_2D),
                    h = a.getParameter(a.FRAMEBUFFER_BINDING),
                    m = a.getParameter(a.ARRAY_BUFFER_BINDING),
                    b = a.getParameter(a.ELEMENT_ARRAY_BUFFER_BINDING);
                a.disable(a.SCISSOR_TEST), a.disable(a.DEPTH_TEST), a.disable(a.BLEND), a.disable(a.CULL_FACE), a.disable(a.STENCIL_TEST), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1), a.bindTexture(a.TEXTURE_2D, e);
                const g = a.RGBA,
                    y = a.RGBA,
                    E = a.UNSIGNED_BYTE;
                a.texImage2D(a.TEXTURE_2D, 0, g, y, E, t);
                let A = 0,
                    T = 0;
                "undefined" != typeof HTMLVideoElement && t instanceof HTMLVideoElement ? (A = t.videoWidth, T = t.videoHeight) : (A = t.width, T = t.height), T > A && (T = [A, A = T][0]), this._updateTransforms(r, i);
                let x = this._getFramebuffer(a, v.dataWidth / 4, v.dataHeight),
                    k = this._getVertexBuffer(a),
                    R = this._getIndexBuffer(a),
                    L = this._getGreyscaleShader(a);
                const F = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_SIZE),
                    z = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_TYPE),
                    M = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_NORMALIZED),
                    I = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_STRIDE),
                    P = a.getVertexAttribOffset(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_POINTER),
                    O = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_ENABLED),
                    S = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
                    B = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_SIZE),
                    D = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_TYPE),
                    C = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_NORMALIZED),
                    U = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_STRIDE),
                    V = a.getVertexAttribOffset(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_POINTER),
                    N = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
                    q = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_ENABLED);
                let G = 0,
                    W = 0;
                this._isWebGL2 ? (G = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_DIVISOR), W = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_DIVISOR), a.vertexAttribDivisor(L.aVertexPositionLoc, 0), a.vertexAttribDivisor(L.aTextureCoordLoc, 0)) : this._instancedArraysExtension && (G = a.getVertexAttrib(L.aVertexPositionLoc, this._instancedArraysExtension.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE), W = a.getVertexAttrib(L.aTextureCoordLoc, this._instancedArraysExtension.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE), this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aVertexPositionLoc, 0), this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aTextureCoordLoc, 0)), a.bindFramebuffer(a.FRAMEBUFFER, x), a.viewport(0, 0, this._framebufferWidth, this._framebufferHeight), a.clear(a.COLOR_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, k), a.vertexAttribPointer(L.aVertexPositionLoc, 2, a.FLOAT, !1, 16, 0), a.enableVertexAttribArray(L.aVertexPositionLoc), a.vertexAttribPointer(L.aTextureCoordLoc, 2, a.FLOAT, !1, 16, 8), a.enableVertexAttribArray(L.aTextureCoordLoc), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, R), a.useProgram(L.program), a.uniform1f(L.uTexWidthLoc, v.dataWidth), a.uniformMatrix4fv(L.uUvTransformLoc, !1, this._cameraUvTransform), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, e), a.uniform1i(L.uSamplerLoc, 0), a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0), a.bindBuffer(a.ARRAY_BUFFER, S), a.vertexAttribPointer(L.aVertexPositionLoc, F, z, M, I, P), a.bindBuffer(a.ARRAY_BUFFER, N), a.vertexAttribPointer(L.aTextureCoordLoc, B, D, C, U, V), a.bindBuffer(a.ARRAY_BUFFER, m), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, b), O || a.disableVertexAttribArray(L.aVertexPositionLoc), q || a.disableVertexAttribArray(L.aTextureCoordLoc), this._isWebGL2 ? (a.vertexAttribDivisor(L.aVertexPositionLoc, G), a.vertexAttribDivisor(L.aTextureCoordLoc, W)) : this._instancedArraysExtension && (this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aVertexPositionLoc, G), this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aTextureCoordLoc, W)), a.bindFramebuffer(a.FRAMEBUFFER, h), a.useProgram(d), a.bindTexture(a.TEXTURE_2D, p), a.activeTexture(f), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, l), n.pop(), _ && a.enable(a.BLEND), c && a.enable(a.CULL_FACE), s && a.enable(a.DEPTH_TEST), o && a.enable(a.SCISSOR_TEST), u && a.enable(a.STENCIL_TEST)
            }
            readFrame(e, t) {
                let r = this._gl,
                    i = new Uint8Array(t);
                const a = r.getParameter(r.FRAMEBUFFER_BINDING);
                let n = this._getFramebuffer(r, v.dataWidth / 4, v.dataHeight);
                return r.bindFramebuffer(r.FRAMEBUFFER, n), r.readPixels(0, 0, this._framebufferWidth, this._framebufferHeight, r.RGBA, r.UNSIGNED_BYTE, i), r.bindFramebuffer(r.FRAMEBUFFER, a), {
                    uvTransform: this._cameraUvTransform,
                    data: t,
                    texture: e,
                    dataWidth: v.dataWidth,
                    dataHeight: v.dataHeight,
                    userFacing: this._computedFrontCameraRotation
                }
            }
            _updateTransforms(e, t) {
                e == this._computedTransformRotation && t == this._computedFrontCameraRotation || (this._computedTransformRotation = e, this._computedFrontCameraRotation = t, this._cameraUvTransform = this._getCameraUvTransform())
            }
            _getCameraUvTransform() {
                switch (this._computedTransformRotation) {
                    case 270:
                        return new Float32Array([0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1]);
                    case 180:
                        return new Float32Array([-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1]);
                    case 90:
                        return new Float32Array([0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1])
                }
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            }
            _getFramebuffer(e, t, r) {
                if (this._framebufferWidth === t && this._framebufferHeight === r && this._framebufferId) return this._framebufferId;
                if (this._framebufferId && (e.deleteFramebuffer(this._framebufferId), this._framebufferId = null), this._renderTexture && (e.deleteTexture(this._renderTexture), this._renderTexture = null), this._framebufferId = e.createFramebuffer(), !this._framebufferId) throw new Error("Unable to create framebuffer");
                if (e.bindFramebuffer(e.FRAMEBUFFER, this._framebufferId), this._renderTexture = e.createTexture(), !this._renderTexture) throw new Error("Unable to create render texture");
                e.activeTexture(e.TEXTURE0);
                const i = e.getParameter(e.TEXTURE_BINDING_2D);
                e.bindTexture(e.TEXTURE_2D, this._renderTexture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t, r, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameterf(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this._renderTexture, 0);
                let a = e.checkFramebufferStatus(e.FRAMEBUFFER);
                if (a !== e.FRAMEBUFFER_COMPLETE) throw new Error("Framebuffer not complete: " + a.toString());
                return this._framebufferWidth = t, this._framebufferHeight = r, e.bindTexture(e.TEXTURE_2D, i), e.bindFramebuffer(e.FRAMEBUFFER, null), this._framebufferId
            }
            _getVertexBuffer(e) {
                if (this._vertexBuffer) return this._vertexBuffer;
                if (this._vertexBuffer = e.createBuffer(), !this._vertexBuffer) throw new Error("Unable to create vertex buffer");
                e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
                let t = new Float32Array([-1, -1, 0, 0, -1, 1, 0, 1, 1, 1, 1, 1, 1, -1, 1, 0]);
                return e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), this._vertexBuffer
            }
            _getIndexBuffer(e) {
                if (this._indexBuffer) return this._indexBuffer;
                if (this._indexBuffer = e.createBuffer(), !this._indexBuffer) throw new Error("Unable to create index buffer");
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
                let t = new Uint16Array([0, 1, 2, 0, 2, 3]);
                return e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, e.STATIC_DRAW), this._indexBuffer
            }
            _getGreyscaleShader(e) {
                if (this._greyscaleShader) return this._greyscaleShader;
                let t = e.createProgram();
                if (!t) throw new Error("Unable to create program");
                let r = k(e, e.VERTEX_SHADER, I),
                    i = k(e, e.FRAGMENT_SHADER, P);
                e.attachShader(t, r), e.attachShader(t, i),
                    function(e, t) {
                        e.linkProgram(t);
                        let r = e.getProgramInfoLog(t);
                        if (r && r.trim().length > 0) throw new Error("Unable to link: " + r)
                    }(e, t);
                let a = e.getUniformLocation(t, "uTexWidth");
                if (!a) throw new Error("Unable to get uniform location uTexWidth");
                let n = e.getUniformLocation(t, "uUvTransform");
                if (!n) throw new Error("Unable to get uniform location uUvTransform");
                let o = e.getUniformLocation(t, "uSampler");
                if (!o) throw new Error("Unable to get uniform location uSampler");
                return this._greyscaleShader = {
                    program: t,
                    aVertexPositionLoc: e.getAttribLocation(t, "aVertexPosition"),
                    aTextureCoordLoc: e.getAttribLocation(t, "aTextureCoord"),
                    uTexWidthLoc: a,
                    uUvTransformLoc: n,
                    uSamplerLoc: o
                }, this._greyscaleShader
            }
        }
        let L, F, z, M, I = "\n    attribute vec4 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    varying highp vec2 vTextureCoord1;\n    varying highp vec2 vTextureCoord2;\n    varying highp vec2 vTextureCoord3;\n    varying highp vec2 vTextureCoord4;\n\n    uniform float uTexWidth;\n\tuniform mat4 uUvTransform;\n\n    void main(void) {\n      highp vec2 offset1 = vec2(1.5 / uTexWidth, 0);\n      highp vec2 offset2 = vec2(0.5 / uTexWidth, 0);\n\n      gl_Position = aVertexPosition;\n      vTextureCoord1 = (uUvTransform * vec4(aTextureCoord - offset1, 0, 1)).xy;\n      vTextureCoord2 = (uUvTransform * vec4(aTextureCoord - offset2, 0, 1)).xy;\n      vTextureCoord3 = (uUvTransform * vec4(aTextureCoord + offset2, 0, 1)).xy;\n      vTextureCoord4 = (uUvTransform * vec4(aTextureCoord + offset1, 0, 1)).xy;\n    }\n",
            P = "\n  varying highp vec2 vTextureCoord1;\n  varying highp vec2 vTextureCoord2;\n  varying highp vec2 vTextureCoord3;\n  varying highp vec2 vTextureCoord4;\n\n  uniform sampler2D uSampler;\n\n  const lowp vec3 colorWeights = vec3(77.0 / 256.0, 150.0 / 256.0, 29.0 / 256.0);\n\n  void main(void) {\n    lowp vec4 outpx;\n\n    outpx.r = dot(colorWeights, texture2D(uSampler, vTextureCoord1).xyz);\n    outpx.g = dot(colorWeights, texture2D(uSampler, vTextureCoord2).xyz);\n    outpx.b = dot(colorWeights, texture2D(uSampler, vTextureCoord3).xyz);\n    outpx.a = dot(colorWeights, texture2D(uSampler, vTextureCoord4).xyz);\n\n    gl_FragColor = outpx;\n  }\n";
        var O = function(e, t, r, i) {
            return new(r || (r = Promise))((function(a, n) {
                function o(e) {
                    try {
                        _(i.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function s(e) {
                    try {
                        _(i.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function _(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                        e(t)
                    }))).then(o, s)
                }
                _((i = i.apply(e, t || [])).next())
            }))
        };
        let S = new class {
                constructor() {
                    this.onOutgoingMessage = new o, this.onIncomingMessage = new s, this._outgoingMessages = []
                }
                postIncomingMessage(e) {
                    this.onIncomingMessage.emit(e)
                }
                postOutgoingMessage(e, t) {
                    this._outgoingMessages.push({
                        msg: e,
                        transferables: t
                    }), this.onOutgoingMessage.emit()
                }
                getOutgoingMessages() {
                    let e = this._outgoingMessages;
                    return this._outgoingMessages = [], e
                }
            },
            B = 0;

        function D(e) {
            return O(this, void 0, void 0, (function*() {
                let r = t({
                    locateFile: (t, r) => t.endsWith("zappar-cv.wasm") ? e : r + t,
                    onRuntimeInitialized: () => {
                        let e = function(e) {
                                let t = e.cwrap("zappar_log_level", "number", []),
                                    r = e.cwrap("zappar_log_level_set", null, ["number"]),
                                    i = e.cwrap("zappar_analytics_project_id_set", null, ["string", "string"]),
                                    a = e.cwrap("zappar_pipeline_create", "number", []),
                                    n = e.cwrap("zappar_pipeline_destroy", null, ["number"]),
                                    o = e.cwrap("zappar_pipeline_frame_update", null, ["number"]),
                                    s = e.cwrap("zappar_pipeline_frame_number", "number", ["number"]),
                                    _ = e.cwrap("zappar_pipeline_camera_model", "number", ["number"]),
                                    c = e.cwrap("zappar_pipeline_camera_frame_user_data", "number", ["number"]),
                                    u = e.cwrap("zappar_pipeline_camera_frame_submit", null, ["number", "number", "number", "number", "number", "number", "number", "number", "number"]),
                                    f = e.cwrap("zappar_pipeline_camera_frame_submit_raw_pointer", null, ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]),
                                    l = e.cwrap("zappar_pipeline_camera_frame_camera_attitude", "number", ["number"]),
                                    d = e.cwrap("zappar_pipeline_camera_frame_device_attitude", "number", ["number"]),
                                    p = e.cwrap("zappar_pipeline_motion_accelerometer_submit", null, ["number", "number", "number", "number", "number"]),
                                    h = e.cwrap("zappar_pipeline_motion_rotation_rate_submit", null, ["number", "number", "number", "number", "number"]),
                                    m = e.cwrap("zappar_pipeline_motion_attitude_submit", null, ["number", "number", "number", "number", "number"]),
                                    b = e.cwrap("zappar_pipeline_motion_attitude_matrix_submit", null, ["number", "number"]),
                                    w = e.cwrap("zappar_camera_source_create", "number", ["number", "string"]),
                                    g = e.cwrap("zappar_camera_source_destroy", null, ["number"]),
                                    y = e.cwrap("zappar_sequence_source_create", "number", ["number"]),
                                    v = e.cwrap("zappar_sequence_source_destroy", null, ["number"]),
                                    E = e.cwrap("zappar_image_tracker_create", "number", ["number"]),
                                    A = e.cwrap("zappar_image_tracker_destroy", null, ["number"]),
                                    T = e.cwrap("zappar_image_tracker_target_load_from_memory", null, ["number", "number", "number"]),
                                    x = e.cwrap("zappar_image_tracker_target_loaded_version", "number", ["number"]),
                                    k = e.cwrap("zappar_image_tracker_enabled", "number", ["number"]),
                                    R = e.cwrap("zappar_image_tracker_enabled_set", null, ["number", "number"]),
                                    L = e.cwrap("zappar_image_tracker_anchor_count", "number", ["number"]),
                                    F = e.cwrap("zappar_image_tracker_anchor_id", "string", ["number", "number"]),
                                    z = e.cwrap("zappar_image_tracker_anchor_pose_raw", "number", ["number", "number"]),
                                    M = e.cwrap("zappar_face_tracker_create", "number", ["number"]),
                                    I = e.cwrap("zappar_face_tracker_destroy", null, ["number"]),
                                    P = e.cwrap("zappar_face_tracker_model_load_from_memory", null, ["number", "number", "number"]),
                                    O = e.cwrap("zappar_face_tracker_model_loaded_version", "number", ["number"]),
                                    S = e.cwrap("zappar_face_tracker_enabled_set", null, ["number", "number"]),
                                    B = e.cwrap("zappar_face_tracker_enabled", "number", ["number"]),
                                    D = e.cwrap("zappar_face_tracker_max_faces_set", null, ["number", "number"]),
                                    C = e.cwrap("zappar_face_tracker_max_faces", "number", ["number"]),
                                    U = e.cwrap("zappar_face_tracker_anchor_count", "number", ["number"]),
                                    V = e.cwrap("zappar_face_tracker_anchor_id", "string", ["number", "number"]),
                                    N = e.cwrap("zappar_face_tracker_anchor_pose_raw", "number", ["number", "number"]),
                                    q = e.cwrap("zappar_face_tracker_anchor_identity_coefficients", "number", ["number", "number"]),
                                    G = e.cwrap("zappar_face_tracker_anchor_expression_coefficients", "number", ["number", "number"]),
                                    W = e.cwrap("zappar_face_mesh_create", "number", []),
                                    H = e.cwrap("zappar_face_mesh_destroy", null, ["number"]),
                                    Y = e.cwrap("zappar_face_landmark_create", "number", ["number"]),
                                    X = e.cwrap("zappar_face_landmark_destroy", null, ["number"]),
                                    Z = e.cwrap("zappar_barcode_finder_create", "number", ["number"]),
                                    j = e.cwrap("zappar_barcode_finder_destroy", null, ["number"]),
                                    K = e.cwrap("zappar_barcode_finder_enabled_set", null, ["number", "number"]),
                                    J = e.cwrap("zappar_barcode_finder_enabled", "number", ["number"]),
                                    $ = e.cwrap("zappar_barcode_finder_found_number", "number", ["number"]),
                                    Q = e.cwrap("zappar_barcode_finder_found_text", "string", ["number", "number"]),
                                    ee = e.cwrap("zappar_barcode_finder_found_format", "number", ["number", "number"]),
                                    te = e.cwrap("zappar_barcode_finder_formats", "number", ["number"]),
                                    re = e.cwrap("zappar_barcode_finder_formats_set", null, ["number", "number"]),
                                    ie = e.cwrap("zappar_instant_world_tracker_create", "number", ["number"]),
                                    ae = e.cwrap("zappar_instant_world_tracker_destroy", null, ["number"]),
                                    ne = e.cwrap("zappar_instant_world_tracker_enabled_set", null, ["number", "number"]),
                                    oe = e.cwrap("zappar_instant_world_tracker_enabled", "number", ["number"]),
                                    se = e.cwrap("zappar_instant_world_tracker_anchor_pose_raw", "number", ["number"]),
                                    _e = e.cwrap("zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw", null, ["number", "number", "number", "number", "number"]),
                                    ce = 32,
                                    ue = e._malloc(ce),
                                    fe = (e._malloc(64), new Map),
                                    le = (t, r) => {
                                        let i = fe.get(t);
                                        return (!i || i[0] < r) && (i && e._free(i[1]), i = [r, e._malloc(r)], fe.set(t, i)), i[1]
                                    };
                                return {
                                    log_level: () => t(),
                                    log_level_set: e => r(e),
                                    analytics_project_id_set: (e, t) => i(e, t),
                                    pipeline_create: () => a(),
                                    pipeline_destroy: () => {
                                        n()
                                    },
                                    pipeline_frame_update: e => o(e),
                                    pipeline_frame_number: e => s(e),
                                    pipeline_camera_model: t => {
                                        let r = _(t),
                                            i = new Float32Array(6);
                                        return i.set(e.HEAPF32.subarray(r / 4, 6 + r / 4)), r = i, r
                                    },
                                    pipeline_camera_frame_user_data: e => c(e),
                                    pipeline_camera_frame_submit: (t, r, i, a, n, o, s, _) => {
                                        ce < r.byteLength && (e._free(ue), ce = r.byteLength, ue = e._malloc(ce));
                                        let c = ue,
                                            f = r.byteLength;
                                        e.HEAPU8.set(new Uint8Array(r), ue);
                                        let l = i,
                                            d = a,
                                            p = n,
                                            h = le(4, o.byteLength);
                                        e.HEAPF32.set(o, h / 4);
                                        let m = le(5, s.byteLength);
                                        return e.HEAPF32.set(s, m / 4), u(t, c, f, l, d, p, h, m, _ ? 1 : 0)
                                    },
                                    pipeline_camera_frame_submit_raw_pointer: (t, r, i, a, n, o, s, _, c, u, l) => {
                                        let d = r,
                                            p = i,
                                            h = a,
                                            m = n,
                                            b = o,
                                            w = s,
                                            g = le(6, _.byteLength);
                                        e.HEAPF32.set(_, g / 4);
                                        let y = c,
                                            v = le(8, u.byteLength);
                                        return e.HEAPF32.set(u, v / 4), f(t, d, p, h, m, b, w, g, y, v, l ? 1 : 0)
                                    },
                                    pipeline_camera_frame_camera_attitude: t => {
                                        let r = l(t),
                                            i = new Float32Array(16);
                                        return i.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), r = i, r
                                    },
                                    pipeline_camera_frame_device_attitude: t => {
                                        let r = d(t),
                                            i = new Float32Array(16);
                                        return i.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), r = i, r
                                    },
                                    pipeline_motion_accelerometer_submit: (e, t, r, i, a) => p(e, t, r, i, a),
                                    pipeline_motion_rotation_rate_submit: (e, t, r, i, a) => h(e, t, r, i, a),
                                    pipeline_motion_attitude_submit: (e, t, r, i, a) => m(e, t, r, i, a),
                                    pipeline_motion_attitude_matrix_submit: (t, r) => {
                                        let i = le(0, r.byteLength);
                                        return e.HEAPF32.set(r, i / 4), b(t, i)
                                    },
                                    camera_source_create: (e, t) => w(e, t),
                                    camera_source_destroy: () => {
                                        g()
                                    },
                                    sequence_source_create: e => y(e),
                                    sequence_source_destroy: () => {
                                        v()
                                    },
                                    image_tracker_create: e => E(e),
                                    image_tracker_destroy: () => {
                                        A()
                                    },
                                    image_tracker_target_load_from_memory: (t, r) => {
                                        ce < r.byteLength && (e._free(ue), ce = r.byteLength, ue = e._malloc(ce));
                                        let i = ue,
                                            a = r.byteLength;
                                        return e.HEAPU8.set(new Uint8Array(r), ue), T(t, i, a)
                                    },
                                    image_tracker_target_loaded_version: e => x(e),
                                    image_tracker_enabled: e => {
                                        let t = k(e);
                                        return t = 1 === t, t
                                    },
                                    image_tracker_enabled_set: (e, t) => R(e, t ? 1 : 0),
                                    image_tracker_anchor_count: e => L(e),
                                    image_tracker_anchor_id: (e, t) => F(e, t),
                                    image_tracker_anchor_pose_raw: (t, r) => {
                                        let i = z(t, r),
                                            a = new Float32Array(16);
                                        return a.set(e.HEAPF32.subarray(i / 4, 16 + i / 4)), i = a, i
                                    },
                                    face_tracker_create: e => M(e),
                                    face_tracker_destroy: () => {
                                        I()
                                    },
                                    face_tracker_model_load_from_memory: (t, r) => {
                                        ce < r.byteLength && (e._free(ue), ce = r.byteLength, ue = e._malloc(ce));
                                        let i = ue,
                                            a = r.byteLength;
                                        return e.HEAPU8.set(new Uint8Array(r), ue), P(t, i, a)
                                    },
                                    face_tracker_model_loaded_version: e => O(e),
                                    face_tracker_enabled_set: (e, t) => S(e, t ? 1 : 0),
                                    face_tracker_enabled: e => {
                                        let t = B(e);
                                        return t = 1 === t, t
                                    },
                                    face_tracker_max_faces_set: (e, t) => D(e, t),
                                    face_tracker_max_faces: e => C(e),
                                    face_tracker_anchor_count: e => U(e),
                                    face_tracker_anchor_id: (e, t) => V(e, t),
                                    face_tracker_anchor_pose_raw: (t, r) => {
                                        let i = N(t, r),
                                            a = new Float32Array(16);
                                        return a.set(e.HEAPF32.subarray(i / 4, 16 + i / 4)), i = a, i
                                    },
                                    face_tracker_anchor_identity_coefficients: (t, r) => {
                                        let i = q(t, r),
                                            a = new Float32Array(50);
                                        return a.set(e.HEAPF32.subarray(i / 4, 50 + i / 4)), i = a, i
                                    },
                                    face_tracker_anchor_expression_coefficients: (t, r) => {
                                        let i = G(t, r),
                                            a = new Float32Array(29);
                                        return a.set(e.HEAPF32.subarray(i / 4, 29 + i / 4)), i = a, i
                                    },
                                    face_mesh_create: () => W(),
                                    face_mesh_destroy: () => {
                                        H()
                                    },
                                    face_landmark_create: e => Y(e),
                                    face_landmark_destroy: () => {
                                        X()
                                    },
                                    barcode_finder_create: e => Z(e),
                                    barcode_finder_destroy: () => {
                                        j()
                                    },
                                    barcode_finder_enabled_set: (e, t) => K(e, t ? 1 : 0),
                                    barcode_finder_enabled: e => {
                                        let t = J(e);
                                        return t = 1 === t, t
                                    },
                                    barcode_finder_found_number: e => $(e),
                                    barcode_finder_found_text: (e, t) => Q(e, t),
                                    barcode_finder_found_format: (e, t) => ee(e, t),
                                    barcode_finder_formats: e => te(e),
                                    barcode_finder_formats_set: (e, t) => re(e, t),
                                    instant_world_tracker_create: e => ie(e),
                                    instant_world_tracker_destroy: () => {
                                        ae()
                                    },
                                    instant_world_tracker_enabled_set: (e, t) => ne(e, t ? 1 : 0),
                                    instant_world_tracker_enabled: e => {
                                        let t = oe(e);
                                        return t = 1 === t, t
                                    },
                                    instant_world_tracker_anchor_pose_raw: t => {
                                        let r = se(t),
                                            i = new Float32Array(16);
                                        return i.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), r = i, r
                                    },
                                    instant_world_tracker_anchor_pose_set_from_camera_offset_raw: (e, t, r, i, a) => _e(e, t, r, i, a)
                                }
                            }(r),
                            t = new n(e, ((e, t) => {
                                S.postOutgoingMessage({
                                    p: e,
                                    t: "zappar",
                                    d: t
                                }, [t])
                            }));
                        S.postOutgoingMessage("loaded", []), S.onIncomingMessage.bind((i => {
                            var a;
                            switch (i.t) {
                                case "zappar":
                                    t.processBuffer(i.d), S.postOutgoingMessage({
                                        t: "buf",
                                        d: i.d
                                    }, [i.d]);
                                    break;
                                case "buf":
                                    null === (a = t.serializersByPipelineId.get(i.p)) || void 0 === a || a.bufferReturn(i.d);
                                    break;
                                case "cameraFrameC2S": {
                                    let r, a = i,
                                        n = t._pipeline_by_instance.get(a.p);
                                    n && (e.pipeline_camera_frame_submit(n, a.d, a.width, a.height, a.token, a.c2d, a.cm, a.userFacing), e.pipeline_frame_update(n), r = e.pipeline_camera_frame_device_attitude(n), t.exploreState());
                                    let o = {
                                        token: a.token,
                                        d: a.d,
                                        p: a.p,
                                        t: "cameraFrameRecycleS2C",
                                        att: r
                                    };
                                    S.postOutgoingMessage(o, [a.d]);
                                    break
                                }
                                case "streamC2S": {
                                    let a = i;
                                    ! function(e, t, r, i, a, n, o) {
                                        O(this, void 0, void 0, (function*() {
                                            const s = yield r.getReader();
                                            for (;;) {
                                                let r = yield s.read();
                                                if (r.done) return void console.log("Stream done");
                                                let u = r.value,
                                                    f = u.allocationSize();
                                                f > U && (C > 0 && e._free(C), C = e._malloc(f), U = f), yield u.copyTo(e.HEAPU8.subarray(C, C + U));
                                                let l = V;
                                                V++;
                                                const d = u.visibleRect.width,
                                                    p = u.visibleRect.height;
                                                let h, b = d,
                                                    w = p;
                                                switch (B) {
                                                    case 270:
                                                        h = new Float32Array([0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1]), b = p, w = d;
                                                        break;
                                                    case 180:
                                                        h = new Float32Array([-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1]);
                                                        break;
                                                    case 90:
                                                        h = new Float32Array([0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1]), b = p, w = d;
                                                        break;
                                                    default:
                                                        h = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                                                }
                                                let g = u.clone();
                                                a ? (c = [-1, 1, -1], (_ = N)[0] = c[0], _[1] = 0, _[2] = 0, _[3] = 0, _[4] = 0, _[5] = c[1], _[6] = 0, _[7] = 0, _[8] = 0, _[9] = 0, _[10] = c[2], _[11] = 0, _[12] = 0, _[13] = 0, _[14] = 0, _[15] = 1) : m(N);
                                                let y = 300 * v.dataWidth / 320;
                                                q[0] = y, q[1] = y, q[2] = .5 * v.dataWidth, q[3] = .5 * v.dataHeight;
                                                const E = {
                                                    token: l,
                                                    d: g,
                                                    p: i,
                                                    t: "videoFrameS2C",
                                                    userFacing: a,
                                                    uvTransform: h,
                                                    w: b,
                                                    h: w,
                                                    cameraToDevice: N,
                                                    cameraModel: q,
                                                    source: o
                                                };
                                                S.postOutgoingMessage(E, [E.d, E.uvTransform.buffer]);
                                                const A = n._pipeline_by_instance.get(i);
                                                A && (t.pipeline_camera_frame_submit_raw_pointer(A, C, f, G(u.format), d, p, l, N, B, q, a), t.pipeline_frame_update(A), n.exploreState()), u.close()
                                            }
                                            var _, c
                                        }))
                                    }(r, e, a.s, a.p, a.userFacing, t, a.source);
                                    break
                                }
                                case "cameraToScreenC2S":
                                    B = i.r;
                                    break;
                                case "imageBitmapC2S":
                                    ! function(e, t, r, i) {
                                        const [a, n] = function() {
                                            if (!z || !M) {
                                                const e = new OffscreenCanvas(1, 1);
                                                if (M = e.getContext("webgl"), !M) throw new Error("Unable to get offscreen GL context");
                                                z = new R(M)
                                            }
                                            return [z, M]
                                        }();
                                        if (F || (F = n.createTexture(), n.bindTexture(n.TEXTURE_2D, F), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR)), !F) return;
                                        (!L || L.byteLength < v.dataWidth * v.dataHeight) && (console.log("Generating pixel buffer", v.dataWidth * v.dataHeight), L = new ArrayBuffer(v.dataWidth * v.dataHeight)), a.uploadFrame(F, e.i, e.r, e.userFacing);
                                        let o = a.readFrame(F, L),
                                            s = {
                                                t: "imageBitmapS2C",
                                                dataWidth: o.dataWidth,
                                                dataHeight: o.dataHeight,
                                                frame: e.i,
                                                userFacing: o.userFacing,
                                                uvTransform: o.uvTransform || h(),
                                                tokenId: e.tokenId,
                                                p: e.p
                                            };
                                        i.postOutgoingMessage(s, [e.i]);
                                        let _ = r._pipeline_by_instance.get(e.p);
                                        _ && (t.pipeline_camera_frame_submit(_, L, o.dataWidth, o.dataHeight, e.tokenId, e.cameraToDevice, e.cameraModel, o.userFacing), t.pipeline_frame_update(_), r.exploreState())
                                    }(i, e, t, S)
                            }
                        }))
                    }
                })
            }))
        }
        let C = 0,
            U = 0,
            V = 1;
        const N = h(),
            q = new Float32Array([300, 300, 160, 120, 0, 0]);

        function G(e) {
            switch (e) {
                case "I420":
                    return l.FRAME_PIXEL_FORMAT_I420;
                case "I420A":
                    return l.FRAME_PIXEL_FORMAT_I420A;
                case "I422":
                    return l.FRAME_PIXEL_FORMAT_I422;
                case "I444":
                    return l.FRAME_PIXEL_FORMAT_I444;
                case "NV12":
                    return l.FRAME_PIXEL_FORMAT_NV12;
                case "RGBA":
                case "RGBX":
                    return l.FRAME_PIXEL_FORMAT_RGBA;
                case "BGRA":
                case "BGRX":
                    return l.FRAME_PIXEL_FORMAT_BGRA
            }
            return l.FRAME_PIXEL_FORMAT_Y
        }
        const W = self;
        S.onOutgoingMessage.bind((() => {
            let e = S.getOutgoingMessages();
            for (let t of e) W.postMessage(t.msg, t.transferables)
        }));
        let H = e => {
            e && e.data && "wasm" === e.data.t && (D(location.href.startsWith("blob") ? e.data.url : new URL(r(751), r.b).toString()), W.removeEventListener("message", H))
        };
        W.addEventListener("message", H), W.addEventListener("message", (e => {
            S.postIncomingMessage(e.data)
        }))
    })()
})();
