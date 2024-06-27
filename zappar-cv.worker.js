js-beautify
(v1.15.1)
Beautify JavaScript, JSON, React.js, HTML, CSS, SCSS, and SASS

Enable Dark Mode

Beautify JavaScript
Beautify Code (ctrl‑enter)

Copy to Clipboard
 
Select All
 
Clear
 No file chosen
Options

Indent with 4 spaces

Allow 5 newlines between tokens

Do not wrap lines

Braces with control statement
HTML <style>, <script> formatting:


Add one indent level
  End script and style with newline?
Support e4x/jsx syntax
Use comma-first list style?
Detect packers and obfuscators? (unsafe)
Preserve inline braces/code blocks?
Keep array indentation?
Break lines on chained methods?
Space before conditional: "if(x)" / "if (x)"
Unescape printable chars encoded as \xNN or \uNNNN?
Use JSLint-happy formatting tweaks?
Indent <head> and <body> sections?
Keep indentation on empty lines?
Use a simple textarea for code input?
Additional Settings (JSON):

{}
Your Selected Options (JSON):

{
  "indent_size": "4",
  "indent_char": " ",
  "max_preserve_newlines": "5",
  "preserve_newlines": true,
  "keep_array_indentation": false,
  "break_chained_methods": false,
  "indent_scripts": "normal",
  "brace_style": "collapse",
  "space_before_conditional": true,
  "unescape_strings": false,
  "jslint_happy": false,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": false,
  "e4x": false,
  "indent_empty_lines": false
}
Created by Einar Lielmanis, maintained and evolved by Liam Newman.

All of the source code is completely free and open, available on GitHub under MIT licence, and we have a command-line version, python library and a node package as well.

We use the wonderful CodeMirror syntax highlighting editor, written by Marijn Haverbeke.

Made with a great help of many contributors. Special thanks to:
Jason Diamond, Patrick Hof, Nochum Sossonko, Andreas Schneider, Dave Vasilevsky, Vital Batmanov, Ron Baldwin, Gabriel Harrison, Chris J. Shull, Mathias Bynens, Vittorio Gambaletta, Stefano Sanfilippo and Daniel Stockman.

1
(() => {
2
    var e = {
3
            238: function(e, t, r) {
4
                var i;
5
                ! function(a, n) {
6
                    "use strict";
7
                    var o = "function",
8
                        s = "undefined",
9
                        _ = "object",
10
                        c = "string",
11
                        u = "model",
12
                        f = "name",
13
                        l = "type",
14
                        d = "vendor",
15
                        p = "version",
16
                        h = "architecture",
17
                        m = "console",
18
                        b = "mobile",
19
                        w = "tablet",
20
                        g = "smarttv",
21
                        y = "wearable",
22
                        v = "embedded",
23
                        E = "Amazon",
24
                        A = "Apple",
25
                        T = "ASUS",
26
                        x = "BlackBerry",
27
                        k = "Browser",
28
                        R = "Chrome",
29
                        L = "Firefox",
30
                        F = "Google",
31
                        z = "Huawei",
32
                        M = "LG",
33
                        I = "Microsoft",
34
                        P = "Motorola",
35
                        O = "Opera",
36
                        S = "Samsung",
37
                        B = "Sharp",
38
                        D = "Sony",
39
                        C = "Xiaomi",
40
                        U = "Zebra",
41
                        V = "Facebook",
42
                        N = function(e) {
43
                            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
44
                            return t
45
                        },
46
                        q = function(e, t) {
47
                            return typeof e === c && -1 !== G(t).indexOf(G(e))
48
                        },
49
                        G = function(e) {
50
                            return e.toLowerCase()
51
                        },
52
                        W = function(e, t) {
53
                            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 350)
54
                        },
55
                        H = function(e, t) {
56
                            for (var r, i, a, s, c, u, f = 0; f < t.length && !c;) {
57
                                var l = t[f],
58
                                    d = t[f + 1];
59
                                for (r = i = 0; r < l.length && !c;)
60
                                    if (c = l[r++].exec(e))
61
                                        for (a = 0; a < d.length; a++) u = c[++i], typeof(s = d[a]) === _ && s.length > 0 ? 2 === s.length ? typeof s[1] == o ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== o || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : n : this[s[0]] = u ? s[1].call(this, u, s[2]) : n : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : n) : this[s] = u || n;
62
                                f += 2
63
                            }
64
                        },
65
                        Y = function(e, t) {
66
                            for (var r in t)
67
                                if (typeof t[r] === _ && t[r].length > 0) {
68
                                    for (var i = 0; i < t[r].length; i++)
69
                                        if (q(t[r][i], e)) return "?" === r ? n : r
70
                                } else if (q(t[r], e)) return "?" === r ? n : r;
71
                            return e
72
                        },
73
                        X = {
74
                            ME: "4.90",
75
                            "NT 3.11": "NT3.51",
76
                            "NT 4.0": "NT4.0",
77
                            2e3: "NT 5.0",
78
                            XP: ["NT 5.1", "NT 5.2"],
79
                            Vista: "NT 6.0",
80
                            7: "NT 6.1",
81
                            8: "NT 6.2",
82
                            8.1: "NT 6.3",
83
                            10: ["NT 6.4", "NT 10.0"],
84
                            RT: "ARM"
85
                        },
86
                        Z = {
87
                            browser: [
88
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
89
                                [p, [f, "Chrome"]],
90
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
91
                                [p, [f, "Edge"]],
92
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
93
                                [f, p],
94
                                [/opios[\/ ]+([\w\.]+)/i],
95
                                [p, [f, O + " Mini"]],
96
                                [/\bopr\/([\w\.]+)/i],
97
                                [p, [f, O]],
98
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
99
                                [f, p],
100
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
101
                                [p, [f, "UC" + k]],
102
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
103
                                [p, [f, "WeChat(Win) Desktop"]],
104
                                [/micromessenger\/([\w\.]+)/i],
105
                                [p, [f, "WeChat"]],
106
                                [/konqueror\/([\w\.]+)/i],
107
                                [p, [f, "Konqueror"]],
108
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
109
                                [p, [f, "IE"]],
110
                                [/yabrowser\/([\w\.]+)/i],
111
                                [p, [f, "Yandex"]],
112
                                [/(avast|avg)\/([\w\.]+)/i],
113
                                [
114
                                    [f, /(.+)/, "$1 Secure " + k], p
115
                                ],
116
                                [/\bfocus\/([\w\.]+)/i],
117
                                [p, [f, L + " Focus"]],
118
                                [/\bopt\/([\w\.]+)/i],
119
                                [p, [f, O + " Touch"]],
120
                                [/coc_coc\w+\/([\w\.]+)/i],
121
                                [p, [f, "Coc Coc"]],
122
                                [/dolfin\/([\w\.]+)/i],
123
                                [p, [f, "Dolphin"]],
124
                                [/coast\/([\w\.]+)/i],
125
                                [p, [f, O + " Coast"]],
126
                                [/miuibrowser\/([\w\.]+)/i],
127
                                [p, [f, "MIUI " + k]],
128
                                [/fxios\/([-\w\.]+)/i],
129
                                [p, [f, L]],
130
                                [/\bqihu|(qi?ho?o?|360)browser/i],
131
                                [
132
                                    [f, "360 " + k]
133
                                ],
134
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
135
                                [
136
                                    [f, /(.+)/, "$1 " + k], p
137
                                ],
138
                                [/(comodo_dragon)\/([\w\.]+)/i],
139
                                [
140
                                    [f, /_/g, " "], p
141
                                ],
142
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
143
                                [f, p],
144
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
145
                                [f],
146
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
147
                                [
148
                                    [f, V], p
149
                                ],
150
                                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
151
                                [f, p],
152
                                [/\bgsa\/([\w\.]+) .*safari\//i],
153
                                [p, [f, "GSA"]],
154
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
155
                                [p, [f, R + " Headless"]],
156
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
157
                                [
158
                                    [f, R + " WebView"], p
159
                                ],
160
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
161
                                [p, [f, "Android " + k]],
162
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
163
                                [f, p],
164
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
165
                                [p, [f, "Mobile Safari"]],
166
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
167
                                [p, f],
168
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
169
                                [f, [p, Y, {
170
                                    "1.0": "/8",
171
                                    1.2: "/1",
172
                                    1.3: "/3",
173
                                    "2.0": "/412",
174
                                    "2.0.2": "/416",
175
                                    "2.0.3": "/417",
176
                                    "2.0.4": "/419",
177
                                    "?": "/"
178
                                }]],
179
                                [/(webkit|khtml)\/([\w\.]+)/i],
180
                                [f, p],
181
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
182
                                [
183
                                    [f, "Netscape"], p
184
                                ],
185
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
186
                                [p, [f, L + " Reality"]],
187
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
188
                                [f, p],
189
                                [/(cobalt)\/([\w\.]+)/i],
190
                                [f, [p, /master.|lts./, ""]]
191
                            ],
192
                            cpu: [
193
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
194
                                [
195
                                    [h, "amd64"]
196
                                ],
197
                                [/(ia32(?=;))/i],
198
                                [
199
                                    [h, G]
200
                                ],
201
                                [/((?:i[346]|x)86)[;\)]/i],
202
                                [
203
                                    [h, "ia32"]
204
                                ],
205
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
206
                                [
207
                                    [h, "arm64"]
208
                                ],
209
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
210
                                [
211
                                    [h, "armhf"]
212
                                ],
213
                                [/windows (ce|mobile); ppc;/i],
214
                                [
215
                                    [h, "arm"]
216
                                ],
217
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
218
                                [
219
                                    [h, /ower/, "", G]
220
                                ],
221
                                [/(sun4\w)[;\)]/i],
222
                                [
223
                                    [h, "sparc"]
224
                                ],
225
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
226
                                [
227
                                    [h, G]
228
                                ]
229
                            ],
230
                            device: [
231
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
232
                                [u, [d, S],
233
                                    [l, w]
234
                                ],
235
                                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
236
                                [u, [d, S],
237
                                    [l, b]
238
                                ],
239
                                [/\((ip(?:hone|od)[\w ]*);/i],
240
                                [u, [d, A],
241
                                    [l, b]
242
                                ],
243
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
244
                                [u, [d, A],
245
                                    [l, w]
246
                                ],
247
                                [/(macintosh);/i],
248
                                [u, [d, A]],
249
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
250
                                [u, [d, z],
251
                                    [l, w]
252
                                ],
253
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
254
                                [u, [d, z],
255
                                    [l, b]
256
                                ],
257
                                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
258
                                [
259
                                    [u, /_/g, " "],
260
                                    [d, C],
261
                                    [l, b]
262
                                ],
263
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
264
                                [
265
                                    [u, /_/g, " "],
266
                                    [d, C],
267
                                    [l, w]
268
                                ],
269
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
270
                                [u, [d, "OPPO"],
271
                                    [l, b]
272
                                ],
273
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
274
                                [u, [d, "Vivo"],
275
                                    [l, b]
276
                                ],
277
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
278
                                [u, [d, "Realme"],
279
                                    [l, b]
280
                                ],
281
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
282
                                [u, [d, P],
283
                                    [l, b]
284
                                ],
285
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
286
                                [u, [d, P],
287
                                    [l, w]
288
                                ],
289
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
290
                                [u, [d, M],
291
                                    [l, w]
292
                                ],
293
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
294
                                [u, [d, M],
295
                                    [l, b]
296
                                ],
297
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
298
                                [u, [d, "Lenovo"],
299
                                    [l, w]
300
                                ],
301
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
302
                                [
303
                                    [u, /_/g, " "],
304
                                    [d, "Nokia"],
305
                                    [l, b]
306
                                ],
307
                                [/(pixel c)\b/i],
308
                                [u, [d, F],
309
                                    [l, w]
310
                                ],
311
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
312
                                [u, [d, F],
313
                                    [l, b]
314
                                ],
315
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
316
                                [u, [d, D],
317
                                    [l, b]
318
                                ],
319
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
320
                                [
321
                                    [u, "Xperia Tablet"],
322
                                    [d, D],
323
                                    [l, w]
324
                                ],
325
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
326
                                [u, [d, "OnePlus"],
327
                                    [l, b]
328
                                ],
329
                                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
330
                                [u, [d, E],
331
                                    [l, w]
332
                                ],
333
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
334
                                [
335
                                    [u, /(.+)/g, "Fire Phone $1"],
336
                                    [d, E],
337
                                    [l, b]
338
                                ],
339
                                [/(playbook);[-\w\),; ]+(rim)/i],
340
                                [u, d, [l, w]],
341
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
342
                                [u, [d, x],
343
                                    [l, b]
344
                                ],
345
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
346
                                [u, [d, T],
347
                                    [l, w]
348
                                ],
349
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
350
                                [u, [d, T],
351
                                    [l, b]
352
                                ],
353
                                [/(nexus 9)/i],
354
                                [u, [d, "HTC"],
355
                                    [l, w]
356
                                ],
357
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
358
                                [d, [u, /_/g, " "],
359
                                    [l, b]
360
                                ],
361
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
362
                                [u, [d, "Acer"],
363
                                    [l, w]
364
                                ],
365
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
366
                                [u, [d, "Meizu"],
367
                                    [l, b]
368
                                ],
369
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
370
                                [u, [d, B],
371
                                    [l, b]
372
                                ],
373
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
374
                                [d, u, [l, b]],
375
                                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
376
                                [d, u, [l, w]],
377
                                [/(surface duo)/i],
378
                                [u, [d, I],
379
                                    [l, w]
380
                                ],
381
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
382
                                [u, [d, "Fairphone"],
383
                                    [l, b]
384
                                ],
385
                                [/(u304aa)/i],
386
                                [u, [d, "AT&T"],
387
                                    [l, b]
388
                                ],
389
                                [/\bsie-(\w*)/i],
390
                                [u, [d, "Siemens"],
391
                                    [l, b]
392
                                ],
393
                                [/\b(rct\w+) b/i],
394
                                [u, [d, "RCA"],
395
                                    [l, w]
396
                                ],
397
                                [/\b(venue[\d ]{2,7}) b/i],
398
                                [u, [d, "Dell"],
399
                                    [l, w]
400
                                ],
401
                                [/\b(q(?:mv|ta)\w+) b/i],
402
                                [u, [d, "Verizon"],
403
                                    [l, w]
404
                                ],
405
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
406
                                [u, [d, "Barnes & Noble"],
407
                                    [l, w]
408
                                ],
409
                                [/\b(tm\d{3}\w+) b/i],
410
                                [u, [d, "NuVision"],
411
                                    [l, w]
412
                                ],
413
                                [/\b(k88) b/i],
414
                                [u, [d, "ZTE"],
415
                                    [l, w]
416
                                ],
417
                                [/\b(nx\d{3}j) b/i],
418
                                [u, [d, "ZTE"],
419
                                    [l, b]
420
                                ],
421
                                [/\b(gen\d{3}) b.+49h/i],
422
                                [u, [d, "Swiss"],
423
                                    [l, b]
424
                                ],
425
                                [/\b(zur\d{3}) b/i],
426
                                [u, [d, "Swiss"],
427
                                    [l, w]
428
                                ],
429
                                [/\b((zeki)?tb.*\b) b/i],
430
                                [u, [d, "Zeki"],
431
                                    [l, w]
432
                                ],
433
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
434
                                [
435
                                    [d, "Dragon Touch"], u, [l, w]
436
                                ],
437
                                [/\b(ns-?\w{0,9}) b/i],
438
                                [u, [d, "Insignia"],
439
                                    [l, w]
440
                                ],
441
                                [/\b((nxa|next)-?\w{0,9}) b/i],
442
                                [u, [d, "NextBook"],
443
                                    [l, w]
444
                                ],
445
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
446
                                [
447
                                    [d, "Voice"], u, [l, b]
448
                                ],
449
                                [/\b(lvtel\-)?(v1[12]) b/i],
450
                                [
451
                                    [d, "LvTel"], u, [l, b]
452
                                ],
453
                                [/\b(ph-1) /i],
454
                                [u, [d, "Essential"],
455
                                    [l, b]
456
                                ],
457
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
458
                                [u, [d, "Envizen"],
459
                                    [l, w]
460
                                ],
461
                                [/\b(trio[-\w\. ]+) b/i],
462
                                [u, [d, "MachSpeed"],
463
                                    [l, w]
464
                                ],
465
                                [/\btu_(1491) b/i],
466
                                [u, [d, "Rotor"],
467
                                    [l, w]
468
                                ],
469
                                [/(shield[\w ]+) b/i],
470
                                [u, [d, "Nvidia"],
471
                                    [l, w]
472
                                ],
473
                                [/(sprint) (\w+)/i],
474
                                [d, u, [l, b]],
475
                                [/(kin\.[onetw]{3})/i],
476
                                [
477
                                    [u, /\./g, " "],
478
                                    [d, I],
479
                                    [l, b]
480
                                ],
481
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
482
                                [u, [d, U],
483
                                    [l, w]
484
                                ],
485
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
486
                                [u, [d, U],
487
                                    [l, b]
488
                                ],
489
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
490
                                [d, u, [l, m]],
491
                                [/droid.+; (shield) bui/i],
492
                                [u, [d, "Nvidia"],
493
                                    [l, m]
494
                                ],
495
                                [/(playstation [345portablevi]+)/i],
496
                                [u, [d, D],
497
                                    [l, m]
498
                                ],
499
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
500
                                [u, [d, I],
501
                                    [l, m]
502
                                ],
503
                                [/smart-tv.+(samsung)/i],
504
                                [d, [l, g]],
505
                                [/hbbtv.+maple;(\d+)/i],
506
                                [
507
                                    [u, /^/, "SmartTV"],
508
                                    [d, S],
509
                                    [l, g]
510
                                ],
511
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
512
                                [
513
                                    [d, M],
514
                                    [l, g]
515
                                ],
516
                                [/(apple) ?tv/i],
517
                                [d, [u, A + " TV"],
518
                                    [l, g]
519
                                ],
520
                                [/crkey/i],
521
                                [
522
                                    [u, R + "cast"],
523
                                    [d, F],
524
                                    [l, g]
525
                                ],
526
                                [/droid.+aft(\w)( bui|\))/i],
527
                                [u, [d, E],
528
                                    [l, g]
529
                                ],
530
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
531
                                [u, [d, B],
532
                                    [l, g]
533
                                ],
534
                                [/(bravia[\w ]+)( bui|\))/i],
535
                                [u, [d, D],
536
                                    [l, g]
537
                                ],
538
                                [/(mitv-\w{5}) bui/i],
539
                                [u, [d, C],
540
                                    [l, g]
541
                                ],
542
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
543
                                [
544
                                    [d, W],
545
                                    [u, W],
546
                                    [l, g]
547
                                ],
548
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
549
                                [
550
                                    [l, g]
551
                                ],
552
                                [/((pebble))app/i],
553
                                [d, u, [l, y]],
554
                                [/droid.+; (glass) \d/i],
555
                                [u, [d, F],
556
                                    [l, y]
557
                                ],
558
                                [/droid.+; (wt63?0{2,3})\)/i],
559
                                [u, [d, U],
560
                                    [l, y]
561
                                ],
562
                                [/(quest( 2)?)/i],
563
                                [u, [d, V],
564
                                    [l, y]
565
                                ],
566
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
567
                                [d, [l, v]],
568
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
569
                                [u, [l, b]],
570
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
571
                                [u, [l, w]],
572
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
573
                                [
574
                                    [l, w]
575
                                ],
576
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
577
                                [
578
                                    [l, b]
579
                                ],
580
                                [/(android[-\w\. ]{0,9});.+buil/i],
581
                                [u, [d, "Generic"]]
582
                            ],
583
                            engine: [
584
                                [/windows.+ edge\/([\w\.]+)/i],
585
                                [p, [f, "EdgeHTML"]],
586
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
587
                                [p, [f, "Blink"]],
588
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
589
                                [f, p],
590
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
591
                                [p, f]
592
                            ],
593
                            os: [
594
                                [/microsoft (windows) (vista|xp)/i],
595
                                [f, p],
596
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
597
                                [f, [p, Y, X]],
598
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
599
                                [
600
                                    [f, "Windows"],
601
                                    [p, Y, X]
602
                                ],
603
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
604
                                [
605
                                    [p, /_/g, "."],
606
                                    [f, "iOS"]
607
                                ],
608
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
609
                                [
610
                                    [f, "Mac OS"],
611
                                    [p, /_/g, "."]
612
                                ],
613
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
614
                                [p, f],
615
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
616
                                [f, p],
617
                                [/\(bb(10);/i],
618
                                [p, [f, x]],
619
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
620
                                [p, [f, "Symbian"]],
621
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
622
                                [p, [f, L + " OS"]],
623
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
624
                                [p, [f, "webOS"]],
625
                                [/crkey\/([\d\.]+)/i],
626
                                [p, [f, R + "cast"]],
627
                                [/(cros) [\w]+ ([\w\.]+\w)/i],
628
                                [
629
                                    [f, "Chromium OS"], p
630
                                ],
631
                                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
632
                                [f, p],
633
                                [/(sunos) ?([\w\.\d]*)/i],
634
                                [
635
                                    [f, "Solaris"], p
636
                                ],
637
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
638
                                [f, p]
639
                            ]
640
                        },
641
                        j = function(e, t) {
642
                            if (typeof e === _ && (t = e, e = n), !(this instanceof j)) return new j(e, t).getResult();
643
                            var r = e || (typeof a !== s && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : ""),
644
                                i = t ? function(e, t) {
645
                                    var r = {};
646
                                    for (var i in e) t[i] && t[i].length % 2 == 0 ? r[i] = t[i].concat(e[i]) : r[i] = e[i];
647
                                    return r
648
                                }(Z, t) : Z;
649
                            return this.getBrowser = function() {
650
                                var e, t = {};
651
                                return t[f] = n, t[p] = n, H.call(t, r, i.browser), t.major = typeof(e = t.version) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : n, t
652
                            }, this.getCPU = function() {
653
                                var e = {};
654
                                return e[h] = n, H.call(e, r, i.cpu), e
655
                            }, this.getDevice = function() {
656
                                var e = {};
657
                                return e[d] = n, e[u] = n, e[l] = n, H.call(e, r, i.device), e
658
                            }, this.getEngine = function() {
659
                                var e = {};
660
                                return e[f] = n, e[p] = n, H.call(e, r, i.engine), e
661
                            }, this.getOS = function() {
662
                                var e = {};
663
                                return e[f] = n, e[p] = n, H.call(e, r, i.os), e
664
                            }, this.getResult = function() {
665
                                return {
666
                                    ua: this.getUA(),
667
                                    browser: this.getBrowser(),
668
                                    engine: this.getEngine(),
669
                                    os: this.getOS(),
670
                                    device: this.getDevice(),
671
                                    cpu: this.getCPU()
672
                                }
673
                            }, this.getUA = function() {
674
                                return r
675
                            }, this.setUA = function(e) {
676
                                return r = typeof e === c && e.length > 350 ? W(e, 350) : e, this
677
                            }, this.setUA(r), this
678
                        };
679
                    j.VERSION = "1.0.33", j.BROWSER = N([f, p, "major"]), j.CPU = N([h]), j.DEVICE = N([u, d, l, m, b, g, w, y, v]), j.ENGINE = j.OS = N([f, p]), typeof t !== s ? (e.exports && (t = e.exports = j), t.UAParser = j) : r.amdO ? (i = function() {
680
                        return j
681
                    }.call(t, r, t, e)) === n || (e.exports = i) : typeof a !== s && (a.UAParser = j);
682
                    var K = typeof a !== s && (a.jQuery || a.Zepto);
683
                    if (K && !K.ua) {
684
                        var J = new j;
685
                        K.ua = J.getResult(), K.ua.get = function() {
686
                            return J.getUA()
687
                        }, K.ua.set = function(e) {
688
                            J.setUA(e);
689
                            var t = J.getResult();
690
                            for (var r in t) K.ua[r] = t[r]
691
                        }
692
                    }
693
                }("object" == typeof window ? window : this)
694
            },
695
            751: (e, t, r) => {
696
                "use strict";
697
                e.exports = r.p + "5749b2c77a081c5836b0.wasm"
698
            }
699
        },
700
        t = {};
701
​
702
    function r(i) {
703
        var a = t[i];
704
        if (void 0 !== a) return a.exports;
705
        var n = t[i] = {
706
            exports: {}
707
        };
708
        return e[i].call(n.exports, n, n.exports, r), n.exports
709
    }
710
    r.m = e, r.amdO = {}, r.g = function() {
711
        if ("object" == typeof globalThis) return globalThis;
712
        try {
713
            return this || new Function("return this")()
714
        } catch (e) {
715
            if ("object" == typeof window) return window
716
        }
717
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
718
        var e;
719
        r.g.importScripts && (e = r.g.location + "");
720
        var t = r.g.document;
721
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
722
            var i = t.getElementsByTagName("script");
723
            i.length && (e = i[i.length - 1].src)
724
        }
725
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
726
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e
727
    })(), r.b = self.location + "", (() => {
728
        "use strict";
729
        var e;
730
        const t = (e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function(t) {
731
            var r, i, a;
732
            t = t || {}, r || (r = void 0 !== t ? t : {}), r.ready = new Promise((function(e, t) {
733
                i = e, a = t
734
            }));
735
            var n, o = {};
736
            for (n in r) r.hasOwnProperty(n) && (o[n] = r[n]);
737
            var s = "./this.program";
738
​
739
            function _(e, t) {
740
                throw t
741
            }
742
            var c, u = "";
743
            u = self.location.href, e && (u = e), u = 0 !== u.indexOf("blob:") ? u.substr(0, u.lastIndexOf("/") + 1) : "", c = function(e) {
744
                var t = new XMLHttpRequest;
745
                return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
746
            };
747
            var f, l, d = r.print || console.log.bind(console),
748
                p = r.printErr || console.warn.bind(console);
749
            for (n in o) o.hasOwnProperty(n) && (r[n] = o[n]);
750
            o = null, r.thisProgram && (s = r.thisProgram), r.quit && (_ = r.quit), r.wasmBinary && (l = r.wasmBinary);
751
            var h = r.noExitRuntime || !0;
752
            "object" != typeof WebAssembly && j("no native wasm support detected");
753
            var m, b, w = !1;
754
​
755
            function g(e, t) {
756
                e || j("Assertion failed: " + t)
757
            }
758
​
759
            function y(e) {
760
                var t = r["_" + e];
761
                return g(t, "Cannot call unknown function " + e + ", make sure it is exported"), t
762
            }
763
            var v, E, A, T, x, k, R, L, F, z = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
764
​
765
            function M(e, t, r) {
766
                var i = t + r;
767
                for (r = t; e[r] && !(r >= i);) ++r;
768
                if (16 < r - t && e.subarray && z) return z.decode(e.subarray(t, r));
769
                for (i = ""; t < r;) {
770
                    var a = e[t++];
771
                    if (128 & a) {
772
                        var n = 63 & e[t++];
773
                        if (192 == (224 & a)) i += String.fromCharCode((31 & a) << 6 | n);
774
                        else {
775
                            var o = 63 & e[t++];
776
                            65536 > (a = 224 == (240 & a) ? (15 & a) << 12 | n << 6 | o : (7 & a) << 18 | n << 12 | o << 6 | 63 & e[t++]) ? i += String.fromCharCode(a) : (a -= 65536, i += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a))
777
                        }
778
                    } else i += String.fromCharCode(a)
779
                }
780
                return i
781
            }
782
​
783
            function I(e, t) {
784
                return e ? M(A, e, t) : ""
785
            }
786
​
787
            function P(e, t, r, i) {
788
                if (!(0 < i)) return 0;
789
                var a = r;
790
                i = r + i - 1;
791
                for (var n = 0; n < e.length; ++n) {
792
                    var o = e.charCodeAt(n);
793
                    if (55296 <= o && 57343 >= o && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++n)), 127 >= o) {
794
                        if (r >= i) break;
795
                        t[r++] = o
796
                    } else {
797
                        if (2047 >= o) {
798
                            if (r + 1 >= i) break;
799
                            t[r++] = 192 | o >> 6
800
                        } else {
801
                            if (65535 >= o) {
802
                                if (r + 2 >= i) break;
803
                                t[r++] = 224 | o >> 12
804
                            } else {
805
                                if (r + 3 >= i) break;
806
                                t[r++] = 240 | o >> 18, t[r++] = 128 | o >> 12 & 63
807
                            }
808
                            t[r++] = 128 | o >> 6 & 63
809
                        }
810
                        t[r++] = 128 | 63 & o
811
                    }
812
                }
813
                return t[r] = 0, r - a
814
            }
815
​
816
            function O(e) {
817
                for (var t = 0, r = 0; r < e.length; ++r) {
818
                    var i = e.charCodeAt(r);
819
                    55296 <= i && 57343 >= i && (i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++r)), 127 >= i ? ++t : t = 2047 >= i ? t + 2 : 65535 >= i ? t + 3 : t + 4
820
                }
821
                return t
822
            }
823
​
824
            function S(e) {
825
                var t = O(e) + 1,
826
                    r = _r(t);
827
                return r && P(e, E, r, t), r
828
            }
829
​
830
            function B(e, t) {
831
                for (var r = 0; r < e.length; ++r) E[t++ >> 0] = e.charCodeAt(r);
832
                E[t >> 0] = 0
833
            }
834
​
835
            function D() {
836
                var e = m.buffer;
837
                v = e, r.HEAP8 = E = new Int8Array(e), r.HEAP16 = T = new Int16Array(e), r.HEAP32 = k = new Int32Array(e), r.HEAPU8 = A = new Uint8Array(e), r.HEAPU16 = x = new Uint16Array(e), r.HEAPU32 = R = new Uint32Array(e), r.HEAPF32 = L = new Float32Array(e), r.HEAPF64 = F = new Float64Array(e)
838
            }
839
            var C, U = [],
840
                V = [],
841
                N = [],
842
                q = [];
843
​
844
            function G() {
845
                var e = r.preRun.shift();
846
                U.unshift(e)
847
            }
848
            var W = 0,
849
                H = null,
850
                Y = null;
851
​
852
            function X() {
853
                W++, r.monitorRunDependencies && r.monitorRunDependencies(W)
854
            }
855
​
856
            function Z() {
857
                if (W--, r.monitorRunDependencies && r.monitorRunDependencies(W), 0 == W && (null !== H && (clearInterval(H), H = null), Y)) {
858
                    var e = Y;
859
                    Y = null, e()
860
                }
861
            }
862
​
863
            function j(e) {
864
                throw r.onAbort && r.onAbort(e), p(e), w = !0, b = 1, e = new WebAssembly.RuntimeError("abort(" + e + "). Build with -s ASSERTIONS=1 for more info."), a(e), e
865
            }
866
            r.preloadedImages = {}, r.preloadedAudios = {};
867
            var K, J, $, Q = "zappar-cv.wasm";
868
            if (String.prototype.startsWith ? !Q.startsWith("data:application/octet-stream;base64,") : 0 !== Q.indexOf("data:application/octet-stream;base64,")) {
869
                var ee = Q;
870
                Q = r.locateFile ? r.locateFile(ee, u) : u + ee
871
            }
872
​
873
            function te(e) {
874
                for (; 0 < e.length;) {
875
                    var t = e.shift();
876
                    if ("function" == typeof t) t(r);
877
                    else {
878
                        var i = t.vd;
879
                        "number" == typeof i ? void 0 === t.Oc ? C.get(i)() : C.get(i)(t.Oc) : i(void 0 === t.Oc ? null : t.Oc)
880
                    }
881
                }
882
            }
883
​
884
            function re(e, t) {
885
                if (0 === e) e = Date.now();
886
                else {
887
                    if (1 !== e && 4 !== e) return k[ur() >> 2] = 28, -1;
888
                    e = $()
889
                }
890
                return k[t >> 2] = e / 1e3 | 0, k[t + 4 >> 2] = e % 1e3 * 1e6 | 0, 0
891
            }
892
​
893
            function ie(e) {
894
                this.Hc = e - 16, this.Md = function(e) {
895
                    k[this.Hc + 8 >> 2] = e
896
                }, this.Jd = function(e) {
897
                    k[this.Hc + 0 >> 2] = e
898
                }, this.Kd = function() {
899
                    k[this.Hc + 4 >> 2] = 0
900
                }, this.Id = function() {
901
                    E[this.Hc + 12 >> 0] = 0
902
                }, this.Ld = function() {
903
                    E[this.Hc + 13 >> 0] = 0
904
                }, this.yd = function(e, t) {
905
                    this.Md(e), this.Jd(t), this.Kd(), this.Id(), this.Ld()
906
                }
907
            }
908
​
909
            function ae(e, t) {
910
                for (var r = 0, i = e.length - 1; 0 <= i; i--) {
911
                    var a = e[i];
912
                    "." === a ? e.splice(i, 1) : ".." === a ? (e.splice(i, 1), r++) : r && (e.splice(i, 1), r--)
913
                }
914
                if (t)
915
                    for (; r; r--) e.unshift("..");
916
                return e
917
            }
918
​
919
            function ne(e) {
920
                var t = "/" === e.charAt(0),
921
                    r = "/" === e.substr(-1);
922
                return (e = ae(e.split("/").filter((function(e) {
923
                    return !!e
924
                })), !t).join("/")) || t || (e = "."), e && r && (e += "/"), (t ? "/" : "") + e
925
            }
926
​
927
            function oe(e) {
928
                var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
929
                return e = t[0], t = t[1], e || t ? (t && (t = t.substr(0, t.length - 1)), e + t) : "."
930
            }
931
​
932
            function se(e) {
933
                if ("/" === e) return "/";
934
                var t = (e = (e = ne(e)).replace(/\/$/, "")).lastIndexOf("/");
935
                return -1 === t ? e : e.substr(t + 1)
936
            }
937
​
938
            function _e() {
939
                for (var e = "", t = !1, r = arguments.length - 1; - 1 <= r && !t; r--) {
940
                    if ("string" != typeof(t = 0 <= r ? arguments[r] : "/")) throw new TypeError("Arguments to path.resolve must be strings");
941
                    if (!t) return "";
942
                    e = t + "/" + e, t = "/" === t.charAt(0)
943
                }
944
                return (t ? "/" : "") + (e = ae(e.split("/").filter((function(e) {
945
                    return !!e
946
                })), !t).join("/")) || "."
947
            }
948
            $ = function() {
949
                return performance.now()
950
            };
951
            var ce = [];
952
​
953
            function ue(e, t) {
954
                ce[e] = {
955
                    input: [],
956
                    wc: [],
957
                    Gc: t
958
                }, Se(e, fe)
959
            }
960
            var fe = {
961
                    open: function(e) {
962
                        var t = ce[e.node.Lc];
963
                        if (!t) throw new Ee(43);
964
                        e.uc = t, e.seekable = !1
965
                    },
966
                    close: function(e) {
967
                        e.uc.Gc.flush(e.uc)
968
                    },
969
                    flush: function(e) {
970
                        e.uc.Gc.flush(e.uc)
971
                    },
972
                    read: function(e, t, r, i) {
973
                        if (!e.uc || !e.uc.Gc.hd) throw new Ee(60);
974
                        for (var a = 0, n = 0; n < i; n++) {
975
                            try {
976
                                var o = e.uc.Gc.hd(e.uc)
977
                            } catch (e) {
978
                                throw new Ee(29)
979
                            }
980
                            if (void 0 === o && 0 === a) throw new Ee(6);
981
                            if (null == o) break;
982
                            a++, t[r + n] = o
983
                        }
984
                        return a && (e.node.timestamp = Date.now()), a
985
                    },
986
                    write: function(e, t, r, i) {
987
                        if (!e.uc || !e.uc.Gc.$c) throw new Ee(60);
988
                        try {
989
                            for (var a = 0; a < i; a++) e.uc.Gc.$c(e.uc, t[r + a])
990
                        } catch (e) {
991
                            throw new Ee(29)
992
                        }
993
                        return i && (e.node.timestamp = Date.now()), a
994
                    }
995
                },
996
                le = {
997
                    hd: function(e) {
998
                        if (!e.input.length) {
999
                            var t = null;
1000
                            if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (t = window.prompt("Input: ")) && (t += "\n") : "function" == typeof readline && null !== (t = readline()) && (t += "\n"), !t) return null;
1001
                            e.input = ar(t, !0)
1002
                        }
1003
                        return e.input.shift()
1004
                    },
1005
                    $c: function(e, t) {
1006
                        null === t || 10 === t ? (d(M(e.wc, 0)), e.wc = []) : 0 != t && e.wc.push(t)
1007
                    },
1008
                    flush: function(e) {
1009
                        e.wc && 0 < e.wc.length && (d(M(e.wc, 0)), e.wc = [])
1010
                    }
1011
                },
1012
                de = {
1013
                    $c: function(e, t) {
1014
                        null === t || 10 === t ? e.wc.push(t) : 0 != t && e.wc.push(t)
1015
                    },
1016
                    flush: function(e) {
1017
                        e.wc && 0 < e.wc.length && (p(M(e.wc, 0)), e.wc = [])
1018
                    }
1019
                },
1020
                pe = {
1021
                    zc: null,
1022
                    Bc: function() {
1023
                        return pe.createNode(null, "/", 16895, 0)
1024
                    },
1025
                    createNode: function(e, t, r, i) {
1026
                        if (24576 == (61440 & r) || 4096 == (61440 & r)) throw new Ee(63);
1027
                        return pe.zc || (pe.zc = {
1028
                            dir: {
1029
                                node: {
1030
                                    yc: pe.qc.yc,
1031
                                    Ac: pe.qc.Ac,
1032
                                    Jc: pe.qc.Jc,
1033
                                    Qc: pe.qc.Qc,
1034
                                    nd: pe.qc.nd,
1035
                                    Wc: pe.qc.Wc,
1036
                                    od: pe.qc.od,
1037
                                    Rc: pe.qc.Rc,
1038
                                    Sc: pe.qc.Sc
1039
                                },
1040
                                stream: {
1041
                                    Ec: pe.sc.Ec
1042
                                }
1043
                            },
1044
                            file: {
1045
                                node: {
1046
                                    yc: pe.qc.yc,
1047
                                    Ac: pe.qc.Ac
1048
                                },
1049
                                stream: {
1050
                                    Ec: pe.sc.Ec,
1051
                                    read: pe.sc.read,
1052
                                    write: pe.sc.write,
1053
                                    cd: pe.sc.cd,
1054
                                    jd: pe.sc.jd,
1055
                                    ld: pe.sc.ld
1056
                                }
1057
                            },
1058
                            link: {
1059
                                node: {
1060
                                    yc: pe.qc.yc,
1061
                                    Ac: pe.qc.Ac,
1062
                                    Mc: pe.qc.Mc
1063
                                },
1064
                                stream: {}
1065
                            },
1066
                            dd: {
1067
                                node: {
1068
                                    yc: pe.qc.yc,
1069
                                    Ac: pe.qc.Ac
1070
                                },
1071
                                stream: Oe
1072
                            }
1073
                        }), 16384 == (61440 & (r = Le(e, t, r, i)).mode) ? (r.qc = pe.zc.dir.node, r.sc = pe.zc.dir.stream, r.rc = {}) : 32768 == (61440 & r.mode) ? (r.qc = pe.zc.file.node, r.sc = pe.zc.file.stream, r.tc = 0, r.rc = null) : 40960 == (61440 & r.mode) ? (r.qc = pe.zc.link.node, r.sc = pe.zc.link.stream) : 8192 == (61440 & r.mode) && (r.qc = pe.zc.dd.node, r.sc = pe.zc.dd.stream), r.timestamp = Date.now(), e && (e.rc[t] = r, e.timestamp = r.timestamp), r
1074
                    },
1075
                    Yd: function(e) {
1076
                        return e.rc ? e.rc.subarray ? e.rc.subarray(0, e.tc) : new Uint8Array(e.rc) : new Uint8Array(0)
1077
                    },
1078
                    ed: function(e, t) {
1079
                        var r = e.rc ? e.rc.length : 0;
1080
                        r >= t || (t = Math.max(t, r * (1048576 > r ? 2 : 1.125) >>> 0), 0 != r && (t = Math.max(t, 256)), r = e.rc, e.rc = new Uint8Array(t), 0 < e.tc && e.rc.set(r.subarray(0, e.tc), 0))
1081
                    },
1082
                    Gd: function(e, t) {
1083
                        if (e.tc != t)
1084
                            if (0 == t) e.rc = null, e.tc = 0;
1085
                            else {
1086
                                var r = e.rc;
1087
                                e.rc = new Uint8Array(t), r && e.rc.set(r.subarray(0, Math.min(t, e.tc))), e.tc = t
1088
                            }
1089
                    },
1090
                    qc: {
1091
                        yc: function(e) {
1092
                            var t = {};
1093
                            return t.td = 8192 == (61440 & e.mode) ? e.id : 1, t.Zc = e.id, t.mode = e.mode, t.Ed = 1, t.uid = 0, t.wd = 0, t.Lc = e.Lc, 16384 == (61440 & e.mode) ? t.size = 4096 : 32768 == (61440 & e.mode) ? t.size = e.tc : 40960 == (61440 & e.mode) ? t.size = e.link.length : t.size = 0, t.pd = new Date(e.timestamp), t.Dd = new Date(e.timestamp), t.sd = new Date(e.timestamp), t.qd = 4096, t.rd = Math.ceil(t.size / t.qd), t
1094
                        },
1095
                        Ac: function(e, t) {
1096
                            void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && pe.Gd(e, t.size)
1097
                        },
1098
                        Jc: function() {
1099
                            throw Ae[44]
1100
                        },
1101
                        Qc: function(e, t, r, i) {
1102
                            return pe.createNode(e, t, r, i)
1103
                        },
1104
                        nd: function(e, t, r) {
1105
                            if (16384 == (61440 & e.mode)) {
1106
                                try {
1107
                                    var i = Re(t, r)
1108
                                } catch (e) {}
1109
                                if (i)
1110
                                    for (var a in i.rc) throw new Ee(55)
1111
                            }
1112
                            delete e.parent.rc[e.name], e.parent.timestamp = Date.now(), e.name = r, t.rc[r] = e, t.timestamp = e.parent.timestamp, e.parent = t
1113
                        },
1114
                        Wc: function(e, t) {
1115
                            delete e.rc[t], e.timestamp = Date.now()
1116
                        },
1117
                        od: function(e, t) {
1118
                            var r, i = Re(e, t);
1119
                            for (r in i.rc) throw new Ee(55);
1120
                            delete e.rc[t], e.timestamp = Date.now()
1121
                        },
1122
                        Rc: function(e) {
1123
                            var t, r = [".", ".."];
1124
                            for (t in e.rc) e.rc.hasOwnProperty(t) && r.push(t);
1125
                            return r
1126
                        },
1127
                        Sc: function(e, t, r) {
1128
                            return (e = pe.createNode(e, t, 41471, 0)).link = r, e
1129
                        },
1130
                        Mc: function(e) {
1131
                            if (40960 != (61440 & e.mode)) throw new Ee(28);
1132
                            return e.link
1133
                        }
1134
                    },
1135
                    sc: {
1136
                        read: function(e, t, r, i, a) {
1137
                            var n = e.node.rc;
1138
                            if (a >= e.node.tc) return 0;
1139
                            if (8 < (e = Math.min(e.node.tc - a, i)) && n.subarray) t.set(n.subarray(a, a + e), r);
1140
                            else
1141
                                for (i = 0; i < e; i++) t[r + i] = n[a + i];
1142
                            return e
1143
                        },
1144
                        write: function(e, t, r, i, a, n) {
1145
                            if (t.buffer === E.buffer && (n = !1), !i) return 0;
1146
                            if ((e = e.node).timestamp = Date.now(), t.subarray && (!e.rc || e.rc.subarray)) {
1147
                                if (n) return e.rc = t.subarray(r, r + i), e.tc = i;
1148
                                if (0 === e.tc && 0 === a) return e.rc = t.slice(r, r + i), e.tc = i;
1149
                                if (a + i <= e.tc) return e.rc.set(t.subarray(r, r + i), a), i
1150
                            }
1151
                            if (pe.ed(e, a + i), e.rc.subarray && t.subarray) e.rc.set(t.subarray(r, r + i), a);
1152
                            else
1153
                                for (n = 0; n < i; n++) e.rc[a + n] = t[r + n];
1154
                            return e.tc = Math.max(e.tc, a + i), i
1155
                        },
1156
                        Ec: function(e, t, r) {
1157
                            if (1 === r ? t += e.position : 2 === r && 32768 == (61440 & e.node.mode) && (t += e.node.tc), 0 > t) throw new Ee(28);
1158
                            return t
1159
                        },
1160
                        cd: function(e, t, r) {
1161
                            pe.ed(e.node, t + r), e.node.tc = Math.max(e.node.tc, t + r)
1162
                        },
1163
                        jd: function(e, t, r, i, a, n) {
1164
                            if (0 !== t) throw new Ee(28);
1165
                            if (32768 != (61440 & e.node.mode)) throw new Ee(43);
1166
                            if (e = e.node.rc, 2 & n || e.buffer !== v) {
1167
                                for ((0 < i || i + r < e.length) && (e = e.subarray ? e.subarray(i, i + r) : Array.prototype.slice.call(e, i, i + r)), i = !0, n = 16384 * Math.ceil(r / 16384), t = _r(n); r < n;) E[t + r++] = 0;
1168
                                if (!(r = t)) throw new Ee(48);
1169
                                E.set(e, r)
1170
                            } else i = !1, r = e.byteOffset;
1171
                            return {
1172
                                Hc: r,
1173
                                Ud: i
1174
                            }
1175
                        },
1176
                        ld: function(e, t, r, i, a) {
1177
                            if (32768 != (61440 & e.node.mode)) throw new Ee(43);
1178
                            return 2 & a || pe.sc.write(e, t, 0, i, r, !1), 0
1179
                        }
1180
                    }
1181
                },
1182
                he = null,
1183
                me = {},
1184
                be = [],
1185
                we = 1,
1186
                ge = null,
1187
                ye = !0,
1188
                ve = {},
1189
                Ee = null,
1190
                Ae = {};
1191
​
1192
            function Te(e, t) {
1193
                if (t = t || {}, !(e = _e("/", e))) return {
1194
                    path: "",
1195
                    node: null
1196
                };
1197
                var r, i = {
1198
                    fd: !0,
1199
                    ad: 0
1200
                };
1201
                for (r in i) void 0 === t[r] && (t[r] = i[r]);
1202
                if (8 < t.ad) throw new Ee(32);
1203
                e = ae(e.split("/").filter((function(e) {
1204
                    return !!e
1205
                })), !1);
1206
                var a = he;
1207
                for (i = "/", r = 0; r < e.length; r++) {
1208
                    var n = r === e.length - 1;
1209
                    if (n && t.parent) break;
1210
                    if (a = Re(a, e[r]), i = ne(i + "/" + e[r]), a.Kc && (!n || n && t.fd) && (a = a.Kc.root), !n || t.Pc)
1211
                        for (n = 0; 40960 == (61440 & a.mode);)
1212
                            if (a = Ne(i), a = Te(i = _e(oe(i), a), {
1213
                                    ad: t.ad
1214
                                }).node, 40 < n++) throw new Ee(32)
1215
                }
1216
                return {
1217
                    path: i,
1218
                    node: a
1219
                }
1220
            }
1221
​
1222
            function xe(e) {
1223
                for (var t;;) {
1224
                    if (e === e.parent) return e = e.Bc.kd, t ? "/" !== e[e.length - 1] ? e + "/" + t : e + t : e;
1225
                    t = t ? e.name + "/" + t : e.name, e = e.parent
1226
                }
1227
            }
1228
​
1229
            function ke(e, t) {
1230
                for (var r = 0, i = 0; i < t.length; i++) r = (r << 5) - r + t.charCodeAt(i) | 0;
1231
                return (e + r >>> 0) % ge.length
1232
            }
1233
​
1234
            function Re(e, t) {
1235
                var r;
1236
                if (r = (r = Me(e, "x")) ? r : e.qc.Jc ? 0 : 2) throw new Ee(r, e);
1237
                for (r = ge[ke(e.id, t)]; r; r = r.Fc) {
1238
                    var i = r.name;
1239
                    if (r.parent.id === e.id && i === t) return r
1240
                }
1241
                return e.qc.Jc(e, t)
1242
            }
1243
​
1244
            function Le(e, t, r, i) {
1245
                return t = ke((e = new ir(e, t, r, i)).parent.id, e.name), e.Fc = ge[t], ge[t] = e
1246
            }
1247
            var Fe = {
1248
                r: 0,
1249
                "r+": 2,
1250
                w: 577,
1251
                "w+": 578,
1252
                a: 1089,
1253
                "a+": 1090
1254
            };
1255
​
1256
            function ze(e) {
1257
                var t = ["r", "w", "rw"][3 & e];
1258
                return 512 & e && (t += "w"), t
1259
            }
1260
​
1261
            function Me(e, t) {
1262
                return ye || (-1 === t.indexOf("r") || 292 & e.mode) && (-1 === t.indexOf("w") || 146 & e.mode) && (-1 === t.indexOf("x") || 73 & e.mode) ? 0 : 2
1263
            }
1264
​
1265
            function Ie(e, t) {
1266
                try {
1267
                    return Re(e, t), 20
1268
                } catch (e) {}
1269
                return Me(e, "wx")
1270
            }
1271
            var Pe, Oe = {
1272
                open: function(e) {
1273
                    e.sc = me[e.node.Lc].sc, e.sc.open && e.sc.open(e)
1274
                },
1275
                Ec: function() {
1276
                    throw new Ee(70)
1277
                }
1278
            };
1279
​
1280
            function Se(e, t) {
1281
                me[e] = {
1282
                    sc: t
1283
                }
1284
            }
1285
​
1286
            function Be(e, t) {
1287
                var r = "/" === t,
1288
                    i = !t;
1289
                if (r && he) throw new Ee(10);
1290
                if (!r && !i) {
1291
                    var a = Te(t, {
1292
                        fd: !1
1293
                    });
1294
                    if (t = a.path, (a = a.node).Kc) throw new Ee(10);
1295
                    if (16384 != (61440 & a.mode)) throw new Ee(54)
1296
                }
1297
                t = {
1298
                    type: e,
1299
                    be: {},
1300
                    kd: t,
1301
                    Cd: []
1302
                }, (e = e.Bc(t)).Bc = t, t.root = e, r ? he = e : a && (a.Kc = t, a.Bc && a.Bc.Cd.push(t))
1303
            }
1304
​
1305
            function De(e, t, r) {
1306
                var i = Te(e, {
1307
                    parent: !0
1308
                }).node;
1309
                if (!(e = se(e)) || "." === e || ".." === e) throw new Ee(28);
1310
                var a = Ie(i, e);
1311
                if (a) throw new Ee(a);
1312
                if (!i.qc.Qc) throw new Ee(63);
1313
                return i.qc.Qc(i, e, t, r)
1314
            }
1315
​
1316
            function Ce(e) {
1317
                return De(e, 16895, 0)
1318
            }
1319
​
1320
            function Ue(e, t, r) {
1321
                void 0 === r && (r = t, t = 438), De(e, 8192 | t, r)
1322
            }
1323
​
1324
            function Ve(e, t) {
1325
                if (!_e(e)) throw new Ee(44);
1326
                var r = Te(t, {
1327
                    parent: !0
1328
                }).node;
1329
                if (!r) throw new Ee(44);
1330
                var i = Ie(r, t = se(t));
1331
                if (i) throw new Ee(i);
1332
                if (!r.qc.Sc) throw new Ee(63);
1333
                r.qc.Sc(r, t, e)
1334
            }
1335
​
1336
            function Ne(e) {
1337
                if (!(e = Te(e).node)) throw new Ee(44);
1338
                if (!e.qc.Mc) throw new Ee(28);
1339
                return _e(xe(e.parent), e.qc.Mc(e))
1340
            }
1341
​
1342
            function qe(e, t) {
1343
                if (!(e = Te(e, {
1344
                        Pc: !t
1345
                    }).node)) throw new Ee(44);
1346
                if (!e.qc.yc) throw new Ee(63);
1347
                return e.qc.yc(e)
1348
            }
1349
​
1350
            function Ge(e) {
1351
                return qe(e, !0)
1352
            }
1353
​
1354
            function We(e, t, i, a) {
1355
                if ("" === e) throw new Ee(44);
1356
                if ("string" == typeof t) {
1357
                    var n = Fe[t];
1358
                    if (void 0 === n) throw Error("Unknown file open mode: " + t);
1359
                    t = n
1360
                }
1361
                if (i = 64 & t ? 4095 & (void 0 === i ? 438 : i) | 32768 : 0, "object" == typeof e) var o = e;
1362
                else {
1363
                    e = ne(e);
1364
                    try {
1365
                        o = Te(e, {
1366
                            Pc: !(131072 & t)
1367
                        }).node
1368
                    } catch (e) {}
1369
                }
1370
                if (n = !1, 64 & t)
1371
                    if (o) {
1372
                        if (128 & t) throw new Ee(20)
1373
                    } else o = De(e, i, 0), n = !0;
1374
                if (!o) throw new Ee(44);
1375
                if (8192 == (61440 & o.mode) && (t &= -513), 65536 & t && 16384 != (61440 & o.mode)) throw new Ee(54);
1376
                if (!n && (i = o ? 40960 == (61440 & o.mode) ? 32 : 16384 == (61440 & o.mode) && ("r" !== ze(t) || 512 & t) ? 31 : Me(o, ze(t)) : 44)) throw new Ee(i);
1377
                if (512 & t) {
1378
                    if (!(i = "string" == typeof(i = o) ? Te(i, {
1379
                            Pc: !0
1380
                        }).node : i).qc.Ac) throw new Ee(63);
1381
                    if (16384 == (61440 & i.mode)) throw new Ee(31);
1382
                    if (32768 != (61440 & i.mode)) throw new Ee(28);
1383
                    if (n = Me(i, "w")) throw new Ee(n);
1384
                    i.qc.Ac(i, {
1385
                        size: 0,
1386
                        timestamp: Date.now()
1387
                    })
1388
                }
1389
                t &= -131713, (a = function(e, t) {
1390
                    je || ((je = function() {}).prototype = {});
1391
                    var r, i = new je;
1392
                    for (r in e) i[r] = e[r];
1393
                    return e = i, t = function(e) {
1394
                        for (e = e || 0; e <= 4096; e++)
1395
                            if (!be[e]) return e;
1396
                        throw new Ee(33)
1397
                    }(t), e.Cc = t, be[t] = e
1398
                }({
1399
                    node: o,
1400
                    path: xe(o),
1401
                    flags: t,
1402
                    seekable: !0,
1403
                    position: 0,
1404
                    sc: o.sc,
1405
                    Rd: [],
1406
                    error: !1
1407
                }, a)).sc.open && a.sc.open(a), !r.logReadFiles || 1 & t || (Ke || (Ke = {}), e in Ke || (Ke[e] = 1, p("FS.trackingDelegate error on read file: " + e)));
1408
                try {
1409
                    ve.onOpenFile && (o = 0, 1 != (2097155 & t) && (o |= 1), 0 != (2097155 & t) && (o |= 2), ve.onOpenFile(e, o))
1410
                } catch (t) {
1411
                    p("FS.trackingDelegate['onOpenFile']('" + e + "', flags) threw an exception: " + t.message)
1412
                }
1413
                return a
1414
            }
1415
​
1416
            function He(e, t, r) {
1417
                if (null === e.Cc) throw new Ee(8);
1418
                if (!e.seekable || !e.sc.Ec) throw new Ee(70);
1419
                if (0 != r && 1 != r && 2 != r) throw new Ee(28);
1420
                return e.position = e.sc.Ec(e, t, r), e.Rd = [], e.position
1421
            }
1422
​
1423
            function Ye() {
1424
                Ee || ((Ee = function(e, t) {
1425
                    this.node = t, this.Hd = function(e) {
1426
                        this.vc = e
1427
                    }, this.Hd(e), this.message = "FS error"
1428
                }).prototype = Error(), Ee.prototype.constructor = Ee, [44].forEach((function(e) {
1429
                    Ae[e] = new Ee(e), Ae[e].stack = "<generic error, no stack>"
1430
                })))
1431
            }
1432
​
1433
            function Xe(e, t, r) {
1434
                e = ne("/dev/" + e);
1435
                var i = function(e, t) {
1436
                    var r = 0;
1437
                    return e && (r |= 365), t && (r |= 146), r
1438
                }(!!t, !!r);
1439
                Ze || (Ze = 64);
1440
                var a = Ze++ << 8 | 0;
1441
                Se(a, {
1442
                    open: function(e) {
1443
                        e.seekable = !1
1444
                    },
1445
                    close: function() {
1446
                        r && r.buffer && r.buffer.length && r(10)
1447
                    },
1448
                    read: function(e, r, i, a) {
1449
                        for (var n = 0, o = 0; o < a; o++) {
1450
                            try {
1451
                                var s = t()
1452
                            } catch (e) {
1453
                                throw new Ee(29)
1454
                            }
1455
                            if (void 0 === s && 0 === n) throw new Ee(6);
1456
                            if (null == s) break;
1457
                            n++, r[i + o] = s
1458
                        }
1459
                        return n && (e.node.timestamp = Date.now()), n
1460
                    },
1461
                    write: function(e, t, i, a) {
1462
                        for (var n = 0; n < a; n++) try {
1463
                            r(t[i + n])
1464
                        } catch (e) {
1465
                            throw new Ee(29)
1466
                        }
1467
                        return a && (e.node.timestamp = Date.now()), n
1468
                    }
1469
                }), Ue(e, i, a)
1470
            }
1471
            var Ze, je, Ke, Je = {};
1472
​
1473
            function $e(e, t, r) {
1474
                try {
1475
                    var i = e(t)
1476
                } catch (e) {
1477
                    if (e && e.node && ne(t) !== ne(xe(e.node))) return -54;
1478
                    throw e
1479
                }
1480
                return k[r >> 2] = i.td, k[r + 4 >> 2] = 0, k[r + 8 >> 2] = i.Zc, k[r + 12 >> 2] = i.mode, k[r + 16 >> 2] = i.Ed, k[r + 20 >> 2] = i.uid, k[r + 24 >> 2] = i.wd, k[r + 28 >> 2] = i.Lc, k[r + 32 >> 2] = 0, J = [i.size >>> 0, (K = i.size, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[r + 40 >> 2] = J[0], k[r + 44 >> 2] = J[1], k[r + 48 >> 2] = 4096, k[r + 52 >> 2] = i.rd, k[r + 56 >> 2] = i.pd.getTime() / 1e3 | 0, k[r + 60 >> 2] = 0, k[r + 64 >> 2] = i.Dd.getTime() / 1e3 | 0, k[r + 68 >> 2] = 0, k[r + 72 >> 2] = i.sd.getTime() / 1e3 | 0, k[r + 76 >> 2] = 0, J = [i.Zc >>> 0, (K = i.Zc, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[r + 80 >> 2] = J[0], k[r + 84 >> 2] = J[1], 0
1481
            }
1482
            var Qe = void 0;
1483
​
1484
            function et() {
1485
                return k[(Qe += 4) - 4 >> 2]
1486
            }
1487
​
1488
            function tt(e) {
1489
                if (!(e = be[e])) throw new Ee(8);
1490
                return e
1491
            }
1492
​
1493
            function rt(e) {
1494
                try {
1495
                    e()
1496
                } catch (e) {
1497
                    if (!(e instanceof br) && "unwind" !== e) throw e && "object" == typeof e && e.stack && p("exception thrown: " + [e, e.stack]), e
1498
                }
1499
            }
1500
            var it, at, nt, ot = !1,
1501
                st = null,
1502
                _t = 0,
1503
                ct = null,
1504
                ut = 0,
1505
                ft = 0,
1506
                lt = 0,
1507
                dt = [],
1508
                pt = {},
1509
                ht = !1,
1510
                mt = !1,
1511
                bt = [];
1512
​
1513
            function wt(e, t, i, a) {
1514
                if (t && r.Yc && e == r.canvas) return r.Yc;
1515
                var n;
1516
                if (t) {
1517
                    var o = {
1518
                        antialias: !1,
1519
                        alpha: !1,
1520
                        Bd: 1
1521
                    };
1522
                    if (a)
1523
                        for (var s in a) o[s] = a[s];
1524
                    if (void 0 !== Kt && (n = function(e, t) {
1525
                            e.gd || (e.gd = e.getContext, e.getContext = function(t, r) {
1526
                                return "webgl" == t == (r = e.gd(t, r)) instanceof WebGLRenderingContext ? r : null
1527
                            });
1528
                            var r = e.getContext("webgl", t);
1529
                            return r ? function(e, t) {
1530
                                var r = Yt(Ht),
1531
                                    i = {
1532
                                        Zd: r,
1533
                                        attributes: t,
1534
                                        version: t.Bd,
1535
                                        Xc: e
1536
                                    };
1537
                                return e.canvas && (e.canvas.Td = i), Ht[r] = i, (void 0 === t.ud || t.ud) && function(e) {
1538
                                    if (e || (e = Zt), !e.zd) {
1539
                                        e.zd = !0;
1540
                                        var t = e.Xc;
1541
                                        ! function(e) {
1542
                                            var t = e.getExtension("ANGLE_instanced_arrays");
1543
                                            t && (e.vertexAttribDivisor = function(e, r) {
1544
                                                t.vertexAttribDivisorANGLE(e, r)
1545
                                            }, e.drawArraysInstanced = function(e, r, i, a) {
1546
                                                t.drawArraysInstancedANGLE(e, r, i, a)
1547
                                            }, e.drawElementsInstanced = function(e, r, i, a, n) {
1548
                                                t.drawElementsInstancedANGLE(e, r, i, a, n)
1549
                                            })
1550
                                        }(t),
1551
                                        function(e) {
1552
                                            var t = e.getExtension("OES_vertex_array_object");
1553
                                            t && (e.createVertexArray = function() {
1554
                                                return t.createVertexArrayOES()
1555
                                            }, e.deleteVertexArray = function(e) {
1556
                                                t.deleteVertexArrayOES(e)
1557
                                            }, e.bindVertexArray = function(e) {
1558
                                                t.bindVertexArrayOES(e)
1559
                                            }, e.isVertexArray = function(e) {
1560
                                                return t.isVertexArrayOES(e)
1561
                                            })
1562
                                        }(t),
1563
                                        function(e) {
1564
                                            var t = e.getExtension("WEBGL_draw_buffers");
1565
                                            t && (e.drawBuffers = function(e, r) {
1566
                                                t.drawBuffersWEBGL(e, r)
1567
                                            })
1568
                                        }(t), t.Wd = t.getExtension("EXT_disjoint_timer_query"), t.$d = t.getExtension("WEBGL_multi_draw"), (t.getSupportedExtensions() || []).forEach((function(e) {
1569
                                            0 > e.indexOf("lose_context") && 0 > e.indexOf("debug") && t.getExtension(e)
1570
                                        }))
1571
                                    }
1572
                                }(i), r
1573
                            }(r, t) : 0
1574
                        }(e, o))) var _ = Ht[n].Xc
1575
                } else _ = e.getContext("2d");
1576
                return _ ? (i && (t || g(void 0 === Qt, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), r.Yc = _, t && (Zt = Ht[n], r.Yc = Qt = Zt && Zt.Xc), r.ee = t, bt.forEach((function(e) {
1577
                    e()
1578
                })), function() {
1579
                    function e() {
1580
                        mt = document.pointerLockElement === r.canvas || document.mozPointerLockElement === r.canvas || document.webkitPointerLockElement === r.canvas || document.msPointerLockElement === r.canvas
1581
                    }
1582
                    if (r.preloadPlugins || (r.preloadPlugins = []), !Rt) {
1583
                        Rt = !0;
1584
                        try {
1585
                            Lt = !0
1586
                        } catch (e) {
1587
                            Lt = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes")
1588
                        }
1589
                        Ft = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Lt ? null : console.log("warning: no BlobBuilder"), zt = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0, r.md || void 0 !== zt || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), r.md = !0), r.preloadPlugins.push({
1590
                            canHandle: function(e) {
1591
                                return !r.md && /\.(jpg|jpeg|png|bmp)$/i.test(e)
1592
                            },
1593
                            handle: function(e, t, i, a) {
1594
                                var n = null;
1595
                                if (Lt) try {
1596
                                    (n = new Blob([e], {
1597
                                        type: kt(t)
1598
                                    })).size !== e.length && (n = new Blob([new Uint8Array(e).buffer], {
1599
                                        type: kt(t)
1600
                                    }))
1601
                                } catch (e) {
1602
                                    ! function(e) {
1603
                                        f || (f = {}), f[e] || (f[e] = 1, p(e))
1604
                                    }("Blob constructor present but fails: " + e + "; falling back to blob builder")
1605
                                }
1606
                                n || ((n = new Ft).append(new Uint8Array(e).buffer), n = n.getBlob());
1607
                                var o = zt.createObjectURL(n),
1608
                                    s = new Image;
1609
                                s.onload = function() {
1610
                                    g(s.complete, "Image " + t + " could not be decoded");
1611
                                    var a = document.createElement("canvas");
1612
                                    a.width = s.width, a.height = s.height, a.getContext("2d").drawImage(s, 0, 0), r.preloadedImages[t] = a, zt.revokeObjectURL(o), i && i(e)
1613
                                }, s.onerror = function() {
1614
                                    console.log("Image " + o + " could not be decoded"), a && a()
1615
                                }, s.src = o
1616
                            }
1617
                        }), r.preloadPlugins.push({
1618
                            canHandle: function(e) {
1619
                                return !r.ae && e.substr(-4) in {
1620
                                    ".ogg": 1,
1621
                                    ".wav": 1,
1622
                                    ".mp3": 1
1623
                                }
1624
                            },
1625
                            handle: function(e, t, i, a) {
1626
                                function n(a) {
1627
                                    s || (s = !0, r.preloadedAudios[t] = a, i && i(e))
1628
                                }
1629
​
1630
                                function o() {
1631
                                    s || (s = !0, r.preloadedAudios[t] = new Audio, a && a())
1632
                                }
1633
                                var s = !1;
1634
                                if (!Lt) return o();
1635
                                try {
1636
                                    var _ = new Blob([e], {
1637
                                        type: kt(t)
1638
                                    })
1639
                                } catch (e) {
1640
                                    return o()
1641
                                }
1642
                                _ = zt.createObjectURL(_);
1643
                                var c = new Audio;
1644
                                c.addEventListener("canplaythrough", (function() {
1645
                                    n(c)
1646
                                }), !1), c.onerror = function() {
1647
                                    if (!s) {
1648
                                        console.log("warning: browser could not fully decode audio " + t + ", trying slower base64 approach");
1649
                                        for (var r = "", i = 0, a = 0, o = 0; o < e.length; o++)
1650
                                            for (i = i << 8 | e[o], a += 8; 6 <= a;) {
1651
                                                var _ = i >> a - 6 & 63;
1652
                                                a -= 6, r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [_]
1653
                                            }
1654
                                        2 == a ? (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(3 & i) << 4], r += "==") : 4 == a && (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(15 & i) << 2], r += "="), c.src = "data:audio/x-" + t.substr(-3) + ";base64," + r, n(c)
1655
                                    }
1656
                                }, c.src = _, xt((function() {
1657
                                    n(c)
1658
                                }), 1e4)
1659
                            }
1660
                        });
1661
                        var t = r.canvas;
1662
                        t && (t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock || t.msRequestPointerLock || function() {}, t.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, t.exitPointerLock = t.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", e, !1), document.addEventListener("mozpointerlockchange", e, !1), document.addEventListener("webkitpointerlockchange", e, !1), document.addEventListener("mspointerlockchange", e, !1), r.elementPointerLock && t.addEventListener("click", (function(e) {
1663
                            !mt && r.canvas.requestPointerLock && (r.canvas.requestPointerLock(), e.preventDefault())
1664
                        }), !1))
1665
                    }
1666
                }()), _) : null
1667
            }
1668
            var gt = !1,
1669
                yt = void 0,
1670
                vt = void 0;
1671
​
1672
            function Et() {
1673
                return !!ht && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []), !0)
1674
            }
1675
            var At = 0;
1676
​
1677
            function Tt(e) {
1678
                if ("function" == typeof requestAnimationFrame) requestAnimationFrame(e);
1679
                else {
1680
                    var t = Date.now();
1681
                    if (0 === At) At = t + 1e3 / 60;
1682
                    else
1683
                        for (; t + 2 >= At;) At += 1e3 / 60;
1684
                    setTimeout(e, Math.max(At - t, 0))
1685
                }
1686
            }
1687
​
1688
            function xt(e, t) {
1689
                setTimeout((function() {
1690
                    rt(e)
1691
                }), t)
1692
            }
1693
​
1694
            function kt(e) {
1695
                return {
1696
                    jpg: "image/jpeg",
1697
                    jpeg: "image/jpeg",
1698
                    png: "image/png",
1699
                    bmp: "image/bmp",
1700
                    ogg: "audio/ogg",
1701
                    wav: "audio/wav",
1702
                    mp3: "audio/mpeg"
1703
                } [e.substr(e.lastIndexOf(".") + 1)]
1704
            }
1705
            var Rt, Lt, Ft, zt, Mt = [];
1706
​
1707
            function It() {
1708
                var e = r.canvas;
1709
                Mt.forEach((function(t) {
1710
                    t(e.width, e.height)
1711
                }))
1712
            }
1713
​
1714
            function Pt(e, t, i) {
1715
                t && i ? (e.Sd = t, e.xd = i) : (t = e.Sd, i = e.xd);
1716
                var a = t,
1717
                    n = i;
1718
                if (r.forcedAspectRatio && 0 < r.forcedAspectRatio && (a / n < r.forcedAspectRatio ? a = Math.round(n * r.forcedAspectRatio) : n = Math.round(a / r.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
1719
                    var o = Math.min(screen.width / a, screen.height / n);
1720
                    a = Math.round(a * o), n = Math.round(n * o)
1721
                }
1722
                vt ? (e.width != a && (e.width = a), e.height != n && (e.height = n), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != i && (e.height = i), void 0 !== e.style && (a != t || n != i ? (e.style.setProperty("width", a + "px", "important"), e.style.setProperty("height", n + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))))
1723
            }
1724
​
1725
            function Ot() {
1726
                return !1
1727
            }
1728
            r._emscripten_is_main_browser_thread = Ot;
1729
            var St, Bt = [];
1730
​
1731
            function Dt(e, t) {
1732
                R[e >> 2] = t, R[e + 4 >> 2] = t / 4294967296 | 0
1733
            }
1734
​
1735
            function Ct(e, t, r, i, a) {
1736
                function n(t) {
1737
                    var r = 0,
1738
                        i = 0;
1739
                    t && (i = y.response ? y.response.byteLength : 0, r = _r(i), A.set(new Uint8Array(y.response), r)), R[e + 12 >> 2] = r, Dt(e + 16, i)
1740
                }
1741
                var o = R[e + 8 >> 2];
1742
                if (o) {
1743
                    var s = I(o),
1744
                        _ = e + 112,
1745
                        c = I(_);
1746
                    c || (c = "GET");
1747
                    var u = R[_ + 52 >> 2],
1748
                        f = R[_ + 56 >> 2],
1749
                        l = !!R[_ + 60 >> 2],
1750
                        d = R[_ + 68 >> 2],
1751
                        p = R[_ + 72 >> 2];
1752
                    o = R[_ + 76 >> 2];
1753
                    var h = R[_ + 80 >> 2],
1754
                        m = R[_ + 84 >> 2];
1755
                    _ = R[_ + 88 >> 2];
1756
                    var b = !!(1 & u),
1757
                        w = !!(2 & u);
1758
                    u = !!(64 & u), d = d ? I(d) : void 0, p = p ? I(p) : void 0;
1759
                    var g = h ? I(h) : void 0,
1760
                        y = new XMLHttpRequest;
1761
                    if (y.withCredentials = l, y.open(c, s, !u, d, p), u || (y.timeout = f), y.ce = s, y.responseType = "arraybuffer", h && y.overrideMimeType(g), o)
1762
                        for (;
1763
                            (c = R[o >> 2]) && (s = R[o + 4 >> 2]);) o += 8, c = I(c), s = I(s), y.setRequestHeader(c, s);
1764
                    Bt.push(y), R[e + 0 >> 2] = Bt.length, o = m && _ ? A.slice(m, m + _) : null, y.onload = function(i) {
1765
                        n(b && !w);
1766
                        var a = y.response ? y.response.byteLength : 0;
1767
                        Dt(e + 24, 0), a && Dt(e + 32, a), x[e + 40 >> 1] = y.readyState, x[e + 42 >> 1] = y.status, y.statusText && P(y.statusText, A, e + 44, 64), 200 <= y.status && 300 > y.status ? t && t(e, y, i) : r && r(e, y, i)
1768
                    }, y.onerror = function(t) {
1769
                        n(b);
1770
                        var i = y.status;
1771
                        Dt(e + 24, 0), Dt(e + 32, y.response ? y.response.byteLength : 0), x[e + 40 >> 1] = y.readyState, x[e + 42 >> 1] = i, r && r(e, y, t)
1772
                    }, y.ontimeout = function(t) {
1773
                        r && r(e, y, t)
1774
                    }, y.onprogress = function(t) {
1775
                        var r = b && w && y.response ? y.response.byteLength : 0,
1776
                            a = 0;
1777
                        b && w && (a = _r(r), A.set(new Uint8Array(y.response), a)), R[e + 12 >> 2] = a, Dt(e + 16, r), Dt(e + 24, t.loaded - r), Dt(e + 32, t.total), x[e + 40 >> 1] = y.readyState, 3 <= y.readyState && 0 === y.status && 0 < t.loaded && (y.status = 200), x[e + 42 >> 1] = y.status, y.statusText && P(y.statusText, A, e + 44, 64), i && i(e, y, t), a && sr(a)
1778
                    }, y.onreadystatechange = function(t) {
1779
                        x[e + 40 >> 1] = y.readyState, 2 <= y.readyState && (x[e + 42 >> 1] = y.status), a && a(e, y, t)
1780
                    };
1781
                    try {
1782
                        y.send(o)
1783
                    } catch (t) {
1784
                        r && r(e, y, t)
1785
                    }
1786
                } else r(e, 0, "no url specified!")
1787
            }
1788
​
1789
            function Ut(e, t, r, i) {
1790
                var a = St;
1791
                if (a) {
1792
                    var n = R[e + 112 + 64 >> 2];
1793
                    n || (n = R[e + 8 >> 2]);
1794
                    var o = I(n);
1795
                    try {
1796
                        var s = a.transaction(["FILES"], "readwrite").objectStore("FILES").put(t, o);
1797
                        s.onsuccess = function() {
1798
                            x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 200, P("OK", A, e + 44, 64), r(e, 0, o)
1799
                        }, s.onerror = function(t) {
1800
                            x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 413, P("Payload Too Large", A, e + 44, 64), i(e, 0, t)
1801
                        }
1802
                    } catch (t) {
1803
                        i(e, 0, t)
1804
                    }
1805
                } else i(e, 0, "IndexedDB not available!")
1806
            }
1807
            var Vt, Nt = {};
1808
​
1809
            function qt() {
1810
                if (!Vt) {
1811
                    var e, t = {
1812
                        USER: "web_user",
1813
                        LOGNAME: "web_user",
1814
                        PATH: "/",
1815
                        PWD: "/",
1816
                        HOME: "/home/web_user",
1817
                        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
1818
                        _: s || "./this.program"
1819
                    };
1820
                    for (e in Nt) t[e] = Nt[e];
1821
                    var r = [];
1822
                    for (e in t) r.push(e + "=" + t[e]);
1823
                    Vt = r
1824
                }
1825
                return Vt
1826
            }
1827
            var Gt = 1,
1828
                Wt = [],
1829
                Ht = [];
1830
​
1831
            function Yt(e) {
1832
                for (var t = Gt++, r = e.length; r < t; r++) e[r] = null;
1833
                return t
1834
            }
1835
            var Xt, Zt, jt, Kt = {};
1836
​
1837
            function Jt(e) {
1838
                return 0 == e % 4 && (0 != e % 100 || 0 == e % 400)
1839
            }
1840
​
1841
            function $t(e, t) {
1842
                for (var r = 0, i = 0; i <= t; r += e[i++]);
1843
                return r
1844
            }
1845
            var Qt, er = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
1846
                tr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
1847
​
1848
            function rr(e, t) {
1849
                for (e = new Date(e.getTime()); 0 < t;) {
1850
                    var r = e.getMonth(),
1851
                        i = (Jt(e.getFullYear()) ? er : tr)[r];
1852
                    if (!(t > i - e.getDate())) {
1853
                        e.setDate(e.getDate() + t);
1854
                        break
1855
                    }
1856
                    t -= i - e.getDate() + 1, e.setDate(1), 11 > r ? e.setMonth(r + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1))
1857
                }
1858
                return e
1859
            }
1860
​
1861
            function ir(e, t, r, i) {
1862
                e || (e = this), this.parent = e, this.Bc = e.Bc, this.Kc = null, this.id = we++, this.name = t, this.mode = r, this.qc = {}, this.sc = {}, this.Lc = i
1863
            }
1864
​
1865
            function ar(e, t) {
1866
                var r = Array(O(e) + 1);
1867
                return e = P(e, r, 0, r.length), t && (r.length = e), r
1868
            }
1869
            Object.defineProperties(ir.prototype, {
1870
                    read: {
1871
                        get: function() {
1872
                            return 365 == (365 & this.mode)
1873
                        },
1874
                        set: function(e) {
1875
                            e ? this.mode |= 365 : this.mode &= -366
1876
                        }
1877
                    },
1878
                    write: {
1879
                        get: function() {
1880
                            return 146 == (146 & this.mode)
1881
                        },
1882
                        set: function(e) {
1883
                            e ? this.mode |= 146 : this.mode &= -147
1884
                        }
1885
                    }
1886
                }), Ye(), ge = Array(4096), Be(pe, "/"), Ce("/tmp"), Ce("/home"), Ce("/home/web_user"),
1887
                function() {
1888
                    Ce("/dev"), Se(259, {
1889
                        read: function() {
1890
                            return 0
1891
                        },
1892
                        write: function(e, t, r, i) {
1893
                            return i
1894
                        }
1895
                    }), Ue("/dev/null", 259), ue(1280, le), ue(1536, de), Ue("/dev/tty", 1280), Ue("/dev/tty1", 1536);
1896
                    var e = function() {
1897
                        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
1898
                            var e = new Uint8Array(1);
1899
                            return function() {
1900
                                return crypto.getRandomValues(e), e[0]
1901
                            }
1902
                        }
1903
                        return function() {
1904
                            j("randomDevice")
1905
                        }
1906
                    }();
1907
                    Xe("random", e), Xe("urandom", e), Ce("/dev/shm"), Ce("/dev/shm/tmp")
1908
                }(),
1909
                function() {
1910
                    Ce("/proc");
1911
                    var e = Ce("/proc/self");
1912
                    Ce("/proc/self/fd"), Be({
1913
                        Bc: function() {
1914
                            var t = Le(e, "fd", 16895, 73);
1915
                            return t.qc = {
1916
                                Jc: function(e, t) {
1917
                                    var r = be[+t];
1918
                                    if (!r) throw new Ee(8);
1919
                                    return (e = {
1920
                                        parent: null,
1921
                                        Bc: {
1922
                                            kd: "fake"
1923
                                        },
1924
                                        qc: {
1925
                                            Mc: function() {
1926
                                                return r.path
1927
                                            }
1928
                                        }
1929
                                    }).parent = e
1930
                                }
1931
                            }, t
1932
                        }
1933
                    }, "/proc/self/fd")
1934
                }(), r.requestFullscreen = function(e, t) {
1935
                    ! function(e, t) {
1936
                        function i() {
1937
                            ht = !1;
1938
                            var e = a.parentNode;
1939
                            (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (a.exitFullscreen = Et, yt && a.requestPointerLock(), ht = !0, vt ? ("undefined" != typeof SDL && (k[SDL.screen >> 2] = 8388608 | R[SDL.screen >> 2]), Pt(r.canvas), It()) : Pt(a)) : (e.parentNode.insertBefore(a, e), e.parentNode.removeChild(e), vt ? ("undefined" != typeof SDL && (k[SDL.screen >> 2] = -8388609 & R[SDL.screen >> 2]), Pt(r.canvas), It()) : Pt(a)), r.onFullScreen && r.onFullScreen(ht), r.onFullscreen && r.onFullscreen(ht)
1940
                        }
1941
                        void 0 === (yt = e) && (yt = !0), void 0 === (vt = t) && (vt = !1);
1942
                        var a = r.canvas;
1943
                        gt || (gt = !0, document.addEventListener("fullscreenchange", i, !1), document.addEventListener("mozfullscreenchange", i, !1), document.addEventListener("webkitfullscreenchange", i, !1), document.addEventListener("MSFullscreenChange", i, !1));
1944
                        var n = document.createElement("div");
1945
                        a.parentNode.insertBefore(n, a), n.appendChild(a), n.requestFullscreen = n.requestFullscreen || n.mozRequestFullScreen || n.msRequestFullscreen || (n.webkitRequestFullscreen ? function() {
1946
                            n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
1947
                        } : null) || (n.webkitRequestFullScreen ? function() {
1948
                            n.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
1949
                        } : null), n.requestFullscreen()
1950
                    }(e, t)
1951
                }, r.requestAnimationFrame = function(e) {
1952
                    Tt(e)
1953
                }, r.setCanvasSize = function(e, t, i) {
1954
                    Pt(r.canvas, e, t), i || It()
1955
                }, r.pauseMainLoop = function() {
1956
                    st = null, _t++
1957
                }, r.resumeMainLoop = function() {
1958
                    _t++;
1959
                    var e = ut,
1960
                        t = ft,
1961
                        i = ct;
1962
                    ct = null,
1963
                        function(e) {
1964
                            function t() {
1965
                                if (i < _t) {
1966
                                    if (!h) try {
1967
                                        gr(b)
1968
                                    } catch (e) {
1969
                                        if (!(e instanceof br)) throw e
1970
                                    }
1971
                                    return !1
1972
                                }
1973
                                return !0
1974
                            }
1975
                            g(!ct, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), ct = e;
1976
                            var i = _t;
1977
                            ot = !1, at = function() {
1978
                                if (!w)
1979
                                    if (0 < dt.length) {
1980
                                        var i = Date.now(),
1981
                                            a = dt.shift();
1982
                                        if (a.vd(a.Oc), nt) {
1983
                                            var n = nt,
1984
                                                o = 0 == n % 1 ? n - 1 : Math.floor(n);
1985
                                            nt = a.Vd ? o : (8 * n + (o + .5)) / 9
1986
                                        }
1987
                                        console.log('main loop blocker "' + a.name + '" took ' + (Date.now() - i) + " ms"), r.setStatus && (i = r.statusMessage || "Please wait...", n = pt.Xd, (a = nt) ? a < n ? r.setStatus(i + " (" + (n - a) + "/" + n + ")") : r.setStatus(i) : r.setStatus("")), t() && setTimeout(at, 0)
1988
                                    } else t() && (lt = lt + 1 | 0, 1 == ut && 1 < ft && 0 != lt % ft ? st() : (0 == ut && (it = $()), w || r.preMainLoop && !1 === r.preMainLoop() || (rt(e), r.postMainLoop && r.postMainLoop()), t() && ("object" == typeof SDL && SDL.audio && SDL.audio.Fd && SDL.audio.Fd(), st())))
1989
                            }
1990
                        }(i),
1991
                        function(e, t) {
1992
                            if (ut = e, ft = t, ct)
1993
                                if (ot || (ot = !0), 0 == e) st = function() {
1994
                                    var e = 0 | Math.max(0, it + t - $());
1995
                                    setTimeout(at, e)
1996
                                };
1997
                                else if (1 == e) st = function() {
1998
                                Tt(at)
1999
                            };
2000
                            else if (2 == e) {
2001
                                if ("undefined" == typeof setImmediate) {
2002
                                    var i = [];
2003
                                    addEventListener("message", (function(e) {
2004
                                        "setimmediate" !== e.data && "setimmediate" !== e.data.target || (e.stopPropagation(), i.shift()())
2005
                                    }), !0), setImmediate = function(e) {
2006
                                        i.push(e), void 0 === r.setImmediates && (r.setImmediates = []), r.setImmediates.push(e), postMessage({
2007
                                            target: "setimmediate"
2008
                                        })
2009
                                    }
2010
                                }
2011
                                st = function() {
2012
                                    setImmediate(at)
2013
                                }
2014
                            }
2015
                        }(e, t), st()
2016
                }, r.getUserMedia = function() {
2017
                    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(void 0)
2018
                }, r.createContext = function(e, t, r, i) {
2019
                    return wt(e, t, r, i)
2020
                },
2021
                function(e, t) {
2022
                    try {
2023
                        var r = indexedDB.open("emscripten_filesystem", 1)
2024
                    } catch (e) {
2025
                        return void t()
2026
                    }
2027
                    r.onupgradeneeded = function(e) {
2028
                        (e = e.target.result).objectStoreNames.contains("FILES") && e.deleteObjectStore("FILES"), e.createObjectStore("FILES")
2029
                    }, r.onsuccess = function(e) {
2030
                        ! function(e) {
2031
                            St = e, Z()
2032
                        }(e.target.result)
2033
                    }, r.onerror = function(e) {
2034
                        t()
2035
                    }
2036
                }(0, (function() {
2037
                    St = !1, Z()
2038
                })), "undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || X();
2039
            var nr = {
2040
                    I: function(e, t) {
2041
                        return re(e, t)
2042
                    },
2043
                    a: function(e) {
2044
                        return _r(e + 16) + 16
2045
                    },
2046
                    b: function(e, t, r) {
2047
                        throw new ie(e).yd(t, r), e
2048
                    },
2049
                    e: function(e, t, r) {
2050
                        Qe = r;
2051
                        try {
2052
                            var i = tt(e);
2053
                            switch (t) {
2054
                                case 0:
2055
                                    var a = et();
2056
                                    return 0 > a ? -28 : We(i.path, i.flags, 0, a).Cc;
2057
                                case 1:
2058
                                case 2:
2059
                                case 13:
2060
                                case 14:
2061
                                    return 0;
2062
                                case 3:
2063
                                    return i.flags;
2064
                                case 4:
2065
                                    return a = et(), i.flags |= a, 0;
2066
                                case 12:
2067
                                    return a = et(), T[a + 0 >> 1] = 2, 0;
2068
                                case 16:
2069
                                case 8:
2070
                                default:
2071
                                    return -28;
2072
                                case 9:
2073
                                    return k[ur() >> 2] = 28, -1
2074
                            }
2075
                        } catch (e) {
2076
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2077
                        }
2078
                    },
2079
                    E: function(e, t, r) {
2080
                        try {
2081
                            var i = tt(e);
2082
                            if (!i.Dc) {
2083
                                var a = Te(i.path, {
2084
                                    Pc: !0
2085
                                }).node;
2086
                                if (!a.qc.Rc) throw new Ee(54);
2087
                                var n = a.qc.Rc(a);
2088
                                i.Dc = n
2089
                            }
2090
                            e = 0;
2091
                            for (var o = He(i, 0, 1), s = Math.floor(o / 280); s < i.Dc.length && e + 280 <= r;) {
2092
                                var _ = i.Dc[s];
2093
                                if ("." === _[0]) var c = 1,
2094
                                    u = 4;
2095
                                else {
2096
                                    var f = Re(i.node, _);
2097
                                    c = f.id, u = 8192 == (61440 & f.mode) ? 2 : 16384 == (61440 & f.mode) ? 4 : 40960 == (61440 & f.mode) ? 10 : 8
2098
                                }
2099
                                J = [c >>> 0, (K = c, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[t + e >> 2] = J[0], k[t + e + 4 >> 2] = J[1], J = [280 * (s + 1) >>> 0, (K = 280 * (s + 1), 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[t + e + 8 >> 2] = J[0], k[t + e + 12 >> 2] = J[1], T[t + e + 16 >> 1] = 280, E[t + e + 18 >> 0] = u, P(_, A, t + e + 19, 256), e += 280, s += 1
2100
                            }
2101
                            return He(i, 280 * s, 0), e
2102
                        } catch (e) {
2103
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2104
                        }
2105
                    },
2106
                    n: function() {
2107
                        return 42
2108
                    },
2109
                    G: function(e, t, r) {
2110
                        Qe = r;
2111
                        try {
2112
                            var i = tt(e);
2113
                            switch (t) {
2114
                                case 21509:
2115
                                case 21505:
2116
                                case 21510:
2117
                                case 21511:
2118
                                case 21512:
2119
                                case 21506:
2120
                                case 21507:
2121
                                case 21508:
2122
                                case 21523:
2123
                                case 21524:
2124
                                    return i.uc ? 0 : -59;
2125
                                case 21519:
2126
                                    if (!i.uc) return -59;
2127
                                    var a = et();
2128
                                    return k[a >> 2] = 0;
2129
                                case 21520:
2130
                                    return i.uc ? -28 : -59;
2131
                                case 21531:
2132
                                    if (e = a = et(), !i.sc.Ad) throw new Ee(59);
2133
                                    return i.sc.Ad(i, t, e);
2134
                                default:
2135
                                    j("bad ioctl syscall " + t)
2136
                            }
2137
                        } catch (e) {
2138
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2139
                        }
2140
                    },
2141
                    H: function(e, t) {
2142
                        try {
2143
                            return $e(Ge, e = I(e), t)
2144
                        } catch (e) {
2145
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2146
                        }
2147
                    },
2148
                    p: function(e, t, r) {
2149
                        Qe = r;
2150
                        try {
2151
                            return We(I(e), t, r ? et() : 0).Cc
2152
                        } catch (e) {
2153
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2154
                        }
2155
                    },
2156
                    J: function(e, t) {
2157
                        try {
2158
                            return $e(qe, e = I(e), t)
2159
                        } catch (e) {
2160
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2161
                        }
2162
                    },
2163
                    C: function(e, t) {
2164
                        try {
2165
                            return Ve(e = I(e), t = I(t)), 0
2166
                        } catch (e) {
2167
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2168
                        }
2169
                    },
2170
                    K: function(e) {
2171
                        try {
2172
                            if (!e) return -21;
2173
                            var t = {
2174
                                __size__: 390,
2175
                                domainname: 325,
2176
                                machine: 260,
2177
                                nodename: 65,
2178
                                release: 130,
2179
                                sysname: 0,
2180
                                version: 195
2181
                            };
2182
                            return B("Emscripten", e + t.sysname), B("emscripten", e + t.nodename), B("1.0", e + t.release), B("#1", e + t.version), B("wasm32", e + t.machine), 0
2183
                        } catch (e) {
2184
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2185
                        }
2186
                    },
2187
                    D: function(e) {
2188
                        try {
2189
                            var t = Te(e = I(e), {
2190
                                    parent: !0
2191
                                }).node,
2192
                                r = se(e),
2193
                                i = Re(t, r);
2194
                            e: {
2195
                                try {
2196
                                    var a = Re(t, r)
2197
                                } catch (e) {
2198
                                    var n = e.vc;
2199
                                    break e
2200
                                }
2201
                                n = Me(t, "wx") || (16384 == (61440 & a.mode) ? 31 : 0)
2202
                            }
2203
                            if (n) throw new Ee(n);
2204
                            if (!t.qc.Wc) throw new Ee(63);
2205
                            if (i.Kc) throw new Ee(10);
2206
                            try {
2207
                                ve.willDeletePath && ve.willDeletePath(e)
2208
                            } catch (t) {
2209
                                p("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + t.message)
2210
                            }
2211
                            t.qc.Wc(t, r);
2212
                            var o = ke(i.parent.id, i.name);
2213
                            if (ge[o] === i) ge[o] = i.Fc;
2214
                            else
2215
                                for (var s = ge[o]; s;) {
2216
                                    if (s.Fc === i) {
2217
                                        s.Fc = i.Fc;
2218
                                        break
2219
                                    }
2220
                                    s = s.Fc
2221
                                }
2222
                            try {
2223
                                ve.onDeletePath && ve.onDeletePath(e)
2224
                            } catch (t) {
2225
                                p("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + t.message)
2226
                            }
2227
                            return 0
2228
                        } catch (e) {
2229
                            return void 0 !== Je && e instanceof Ee || j(e), -e.vc
2230
                        }
2231
                    },
2232
                    L: function(e) {
2233
                        delete Bt[e - 1]
2234
                    },
2235
                    c: function() {
2236
                        j()
2237
                    },
2238
                    h: re,
2239
                    P: function(e, t) {
2240
                        return e - t
2241
                    },
2242
                    R: function() {
2243
                        self.postMessage({
2244
                            t: "gfx"
2245
                        })
2246
                    },
2247
                    t: function() {
2248
                        var e = new URL(location.origin).hostname;
2249
                        if (0 === e.length && (e = new URL(location.href.replace("blob:", "")).hostname), /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)) 0 === e.indexOf("10.") && (e = "10.*"), 0 === e.indexOf("192.168.") && (e = "192.168.*"), 0 === e.indexOf("172.") && (e = "172.*"), 0 === e.indexOf("127.") && (e = "127.*");
2250
                        else {
2251
                            var t = new RegExp("(" + String.fromCharCode(92) + ".ngrok" + String.fromCharCode(92) + ".io)$", "i");
2252
                            t.test(e) && (e = "*.ngrok.io"), (t = new RegExp("(" + String.fromCharCode(92) + ".arweb" + String.fromCharCode(92) + ".app)$", "i")).test(e) && (e = "*.arweb.app")
2253
                        }
2254
                        t = O(e) + 1;
2255
                        var r = _r(t);
2256
                        return P(e, A, r, t + 1), r
2257
                    },
2258
                    s: function() {
2259
                        self.postMessage({
2260
                            t: "licerr"
2261
                        })
2262
                    },
2263
                    l: function(e, t, r) {
2264
                        function i() {
2265
                            C.get(e)(t)
2266
                        }
2267
                        0 <= r ? xt(i, r) : function(e) {
2268
                            Tt((function() {
2269
                                rt(e)
2270
                            }))
2271
                        }(i)
2272
                    },
2273
                    x: function() {
2274
                        return 2147483648
2275
                    },
2276
                    N: Ot,
2277
                    v: function(e, t, r) {
2278
                        A.copyWithin(e, t, t + r)
2279
                    },
2280
                    w: function(e) {
2281
                        var t = A.length;
2282
                        if (2147483648 < e) return !1;
2283
                        for (var r = 1; 4 >= r; r *= 2) {
2284
                            var i = t * (1 + .2 / r);
2285
                            i = Math.min(i, e + 100663296), 0 < (i = Math.max(e, i)) % 65536 && (i += 65536 - i % 65536);
2286
                            e: {
2287
                                try {
2288
                                    m.grow(Math.min(2147483648, i) - v.byteLength + 65535 >>> 16), D();
2289
                                    var a = 1;
2290
                                    break e
2291
                                } catch (e) {}
2292
                                a = void 0
2293
                            }
2294
                            if (a) return !0
2295
                        }
2296
                        return !1
2297
                    },
2298
                    M: function(e, t, r, i, a) {
2299
                        function n(e, r) {
2300
                            Ut(e, r.response, (function(e) {
2301
                                rt((function() {
2302
                                    l ? C.get(l)(e) : t && t(e)
2303
                                }))
2304
                            }), (function(e) {
2305
                                rt((function() {
2306
                                    l ? C.get(l)(e) : t && t(e)
2307
                                }))
2308
                            }))
2309
                        }
2310
​
2311
                        function o(e) {
2312
                            rt((function() {
2313
                                h ? C.get(h)(e) : a && a(e)
2314
                            }))
2315
                        }
2316
​
2317
                        function s(e) {
2318
                            rt((function() {
2319
                                d ? C.get(d)(e) : r && r(e)
2320
                            }))
2321
                        }
2322
​
2323
                        function _(e) {
2324
                            rt((function() {
2325
                                p ? C.get(p)(e) : i && i(e)
2326
                            }))
2327
                        }
2328
​
2329
                        function c(e) {
2330
                            rt((function() {
2331
                                l ? C.get(l)(e) : t && t(e)
2332
                            }))
2333
                        }
2334
                        var u = e + 112,
2335
                            f = I(u),
2336
                            l = R[u + 36 >> 2],
2337
                            d = R[u + 40 >> 2],
2338
                            p = R[u + 44 >> 2],
2339
                            h = R[u + 48 >> 2],
2340
                            m = R[u + 52 >> 2],
2341
                            b = !!(4 & m),
2342
                            w = !!(32 & m);
2343
                        if (m = !!(16 & m), "EM_IDB_STORE" === f) f = R[u + 84 >> 2], Ut(e, A.slice(f, f + R[u + 88 >> 2]), c, s);
2344
                        else if ("EM_IDB_DELETE" === f) ! function(e, t, r) {
2345
                            var i = St;
2346
                            if (i) {
2347
                                var a = R[e + 112 + 64 >> 2];
2348
                                a || (a = R[e + 8 >> 2]), a = I(a);
2349
                                try {
2350
                                    var n = i.transaction(["FILES"], "readwrite").objectStore("FILES").delete(a);
2351
                                    n.onsuccess = function(r) {
2352
                                        r = r.target.result, R[e + 12 >> 2] = 0, Dt(e + 16, 0), Dt(e + 24, 0), Dt(e + 32, 0), x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 200, P("OK", A, e + 44, 64), t(e, 0, r)
2353
                                    }, n.onerror = function(t) {
2354
                                        x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 404, P("Not Found", A, e + 44, 64), r(e, 0, t)
2355
                                    }
2356
                                } catch (t) {
2357
                                    r(e, 0, t)
2358
                                }
2359
                            } else r(e, 0, "IndexedDB not available!")
2360
                        }(e, c, s);
2361
                        else if (m) {
2362
                            if (w) return 0;
2363
                            Ct(e, b ? n : c, s, _, o)
2364
                        } else ! function(e, t, r) {
2365
                            var i = St;
2366
                            if (i) {
2367
                                var a = R[e + 112 + 64 >> 2];
2368
                                a || (a = R[e + 8 >> 2]), a = I(a);
2369
                                try {
2370
                                    var n = i.transaction(["FILES"], "readonly").objectStore("FILES").get(a);
2371
                                    n.onsuccess = function(i) {
2372
                                        if (i.target.result) {
2373
                                            var a = (i = i.target.result).byteLength || i.length,
2374
                                                n = _r(a);
2375
                                            A.set(new Uint8Array(i), n), R[e + 12 >> 2] = n, Dt(e + 16, a), Dt(e + 24, 0), Dt(e + 32, a), x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 200, P("OK", A, e + 44, 64), t(e, 0, i)
2376
                                        } else x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 404, P("Not Found", A, e + 44, 64), r(e, 0, "no data")
2377
                                    }, n.onerror = function(t) {
2378
                                        x[e + 40 >> 1] = 4, x[e + 42 >> 1] = 404, P("Not Found", A, e + 44, 64), r(e, 0, t)
2379
                                    }
2380
                                } catch (t) {
2381
                                    r(e, 0, t)
2382
                                }
2383
                            } else r(e, 0, "IndexedDB not available!")
2384
                        }(e, c, w ? s : b ? function(e) {
2385
                            Ct(e, n, s, _, o)
2386
                        } : function(e) {
2387
                            Ct(e, c, s, _, o)
2388
                        });
2389
                        return e
2390
                    },
2391
                    A: function(e, t) {
2392
                        try {
2393
                            var r = 0;
2394
                            return qt().forEach((function(i, a) {
2395
                                var n = t + r;
2396
                                k[e + 4 * a >> 2] = n, B(i, n), r += i.length + 1
2397
                            })), 0
2398
                        } catch (e) {
2399
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
2400
                        }
2401
                    },
2402
                    B: function(e, t) {
2403
                        try {
2404
                            var r = qt();
2405
                            k[e >> 2] = r.length;
2406
                            var i = 0;
2407
                            return r.forEach((function(e) {
2408
                                i += e.length + 1
2409
                            })), k[t >> 2] = i, 0
2410
                        } catch (e) {
2411
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
2412
                        }
2413
                    },
2414
                    O: function(e) {
2415
                        gr(e)
2416
                    },
2417
                    g: function(e) {
2418
                        try {
2419
                            var t = tt(e);
2420
                            if (null === t.Cc) throw new Ee(8);
2421
                            t.Dc && (t.Dc = null);
2422
                            try {
2423
                                t.sc.close && t.sc.close(t)
2424
                            } catch (e) {
2425
                                throw e
2426
                            } finally {
2427
                                be[t.Cc] = null
2428
                            }
2429
                            return t.Cc = null, 0
2430
                        } catch (e) {
2431
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
2432
                        }
2433
                    },
2434
                    F: function(e, t, r, i) {
2435
                        try {
2436
                            e: {
2437
                                for (var a = tt(e), n = e = 0; n < r; n++) {
2438
                                    var o = k[t + (8 * n + 4) >> 2],
2439
                                        s = a,
2440
                                        _ = k[t + 8 * n >> 2],
2441
                                        c = o,
2442
                                        u = void 0,
2443
                                        f = E;
2444
                                    if (0 > c || 0 > u) throw new Ee(28);
2445
                                    if (null === s.Cc) throw new Ee(8);
2446
                                    if (1 == (2097155 & s.flags)) throw new Ee(8);
2447
                                    if (16384 == (61440 & s.node.mode)) throw new Ee(31);
2448
                                    if (!s.sc.read) throw new Ee(28);
2449
                                    var l = void 0 !== u;
2450
                                    if (l) {
2451
                                        if (!s.seekable) throw new Ee(70)
2452
                                    } else u = s.position;
2453
                                    var d = s.sc.read(s, f, _, c, u);
2454
                                    l || (s.position += d);
2455
                                    var p = d;
2456
                                    if (0 > p) {
2457
                                        var h = -1;
2458
                                        break e
2459
                                    }
2460
                                    if (e += p, p < o) break
2461
                                }
2462
                                h = e
2463
                            }
2464
                            return k[i >> 2] = h,
2465
                            0
2466
                        }
2467
                        catch (e) {
2468
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
2469
                        }
2470
                    },
2471
                    u: function(e, t, r, i, a) {
2472
                        try {
2473
                            var n = tt(e);
2474
                            return -9007199254740992 >= (e = 4294967296 * r + (t >>> 0)) || 9007199254740992 <= e ? -61 : (He(n, e, i), J = [n.position >>> 0, (K = n.position, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[a >> 2] = J[0], k[a + 4 >> 2] = J[1], n.Dc && 0 === e && 0 === i && (n.Dc = null), 0)
2475
                        } catch (e) {
2476
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
2477
                        }
2478
                    },
2479
                    k: function(e, t, r, i) {
2480
                        try {
2481
                            e: {
2482
                                for (var a = tt(e), n = e = 0; n < r; n++) {
2483
                                    var o = a,
2484
                                        s = k[t + 8 * n >> 2],
2485
                                        _ = k[t + (8 * n + 4) >> 2],
2486
                                        c = void 0,
2487
                                        u = E;
2488
                                    if (0 > _ || 0 > c) throw new Ee(28);
2489
                                    if (null === o.Cc) throw new Ee(8);
2490
                                    if (0 == (2097155 & o.flags)) throw new Ee(8);
2491
                                    if (16384 == (61440 & o.node.mode)) throw new Ee(31);
2492
                                    if (!o.sc.write) throw new Ee(28);
2493
                                    o.seekable && 1024 & o.flags && He(o, 0, 2);
2494
                                    var f = void 0 !== c;
2495
                                    if (f) {
2496
                                        if (!o.seekable) throw new Ee(70)
2497
                                    } else c = o.position;
2498
                                    var l = o.sc.write(o, u, s, _, c, void 0);
2499
                                    f || (o.position += l);
2500
                                    try {
2501
                                        o.path && ve.onWriteToFile && ve.onWriteToFile(o.path)
2502
                                    } catch (e) {
2503
                                        p("FS.trackingDelegate['onWriteToFile']('" + o.path + "') threw an exception: " + e.message)
2504
                                    }
2505
                                    var d = l;
2506
                                    if (0 > d) {
2507
                                        var h = -1;
2508
                                        break e
2509
                                    }
2510
                                    e += d
2511
                                }
2512
                                h = e
2513
                            }
2514
                            return k[i >> 2] = h,
2515
                            0
2516
                        }
2517
                        catch (e) {
2518
                            return void 0 !== Je && e instanceof Ee || j(e), e.vc
2519
                        }
2520
                    },
2521
                    f: function(e) {
2522
                        var t = Date.now();
2523
                        return k[e >> 2] = t / 1e3 | 0, k[e + 4 >> 2] = t % 1e3 * 1e3 | 0, 0
2524
                    },
2525
                    m: function(e, t) {
2526
                        Qt.bindTexture(e, Wt[t])
2527
                    },
2528
                    o: function(e, t) {
2529
                        for (var r = 0; r < e; r++) {
2530
                            var i = Qt.createTexture(),
2531
                                a = i && Yt(Wt);
2532
                            i ? (i.name = a, Wt[a] = i) : Xt || (Xt = 1282), k[t + 4 * r >> 2] = a
2533
                        }
2534
                    },
2535
                    i: function(e, t, r, i, a, n, o, s, _) {
2536
                        var c = Qt,
2537
                            u = c.texImage2D;
2538
                        if (_) {
2539
                            var f = s - 5120;
2540
                            f = 1 == f ? A : 4 == f ? k : 6 == f ? L : 5 == f || 28922 == f ? R : x;
2541
                            var l = 31 - Math.clz32(f.BYTES_PER_ELEMENT);
2542
                            _ = f.subarray(_ >> l, _ + a * (i * ({
2543
                                5: 3,
2544
                                6: 4,
2545
                                8: 2,
2546
                                29502: 3,
2547
                                29504: 4
2548
                            } [o - 6402] || 1) * (1 << l) + 4 - 1 & -4) >> l)
2549
                        } else _ = null;
2550
                        u.call(c, e, t, r, i, a, n, o, s, _)
2551
                    },
2552
                    j: function(e, t, r) {
2553
                        Qt.texParameteri(e, t, r)
2554
                    },
2555
                    r: function e(t, r) {
2556
                        return t = new Date(1e3 * k[t >> 2]), k[r >> 2] = t.getUTCSeconds(), k[r + 4 >> 2] = t.getUTCMinutes(), k[r + 8 >> 2] = t.getUTCHours(), k[r + 12 >> 2] = t.getUTCDate(), k[r + 16 >> 2] = t.getUTCMonth(), k[r + 20 >> 2] = t.getUTCFullYear() - 1900, k[r + 24 >> 2] = t.getUTCDay(), k[r + 36 >> 2] = 0, k[r + 32 >> 2] = 0, k[r + 28 >> 2] = (t.getTime() - Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0, e.bd || (e.bd = S("GMT")), k[r + 40 >> 2] = e.bd, r
2557
                    },
2558
                    q: function(e, t) {
2559
                        ! function() {
2560
                            function e(e) {
2561
                                return (e = e.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? e[1] : "GMT"
2562
                            }
2563
                            if (!jt) {
2564
                                jt = !0;
2565
                                var t = (new Date).getFullYear(),
2566
                                    r = new Date(t, 0, 1),
2567
                                    i = new Date(t, 6, 1);
2568
                                t = r.getTimezoneOffset();
2569
                                var a = i.getTimezoneOffset(),
2570
                                    n = Math.max(t, a);
2571
                                k[dr() >> 2] = 60 * n, k[lr() >> 2] = Number(t != a), r = e(r), i = e(i), r = S(r), i = S(i), a < t ? (k[fr() >> 2] = r, k[fr() + 4 >> 2] = i) : (k[fr() >> 2] = i, k[fr() + 4 >> 2] = r)
2572
                            }
2573
                        }(), e = new Date(1e3 * k[e >> 2]), k[t >> 2] = e.getSeconds(), k[t + 4 >> 2] = e.getMinutes(), k[t + 8 >> 2] = e.getHours(), k[t + 12 >> 2] = e.getDate(), k[t + 16 >> 2] = e.getMonth(), k[t + 20 >> 2] = e.getFullYear() - 1900, k[t + 24 >> 2] = e.getDay();
2574
                        var r = new Date(e.getFullYear(), 0, 1);
2575
                        k[t + 28 >> 2] = (e.getTime() - r.getTime()) / 864e5 | 0, k[t + 36 >> 2] = -60 * e.getTimezoneOffset();
2576
                        var i = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
2577
                        return e = 0 | (i != (r = r.getTimezoneOffset()) && e.getTimezoneOffset() == Math.min(r, i)), k[t + 32 >> 2] = e, e = k[fr() + (e ? 4 : 0) >> 2], k[t + 40 >> 2] = e, t
2578
                    },
2579
                    Q: function() {
2580
                        return 6
2581
                    },
2582
                    y: function() {
2583
                        return 28
2584
                    },
2585
                    z: function(e, t, r, i) {
2586
                        return function(e, t, r, i) {
2587
                            function a(e, t, r) {
2588
                                for (e = "number" == typeof e ? e.toString() : e || ""; e.length < t;) e = r[0] + e;
2589
                                return e
2590
                            }
2591
​
2592
                            function n(e, t) {
2593
                                return a(e, t, "0")
2594
                            }
2595
​
2596
                            function o(e, t) {
2597
                                function r(e) {
2598
                                    return 0 > e ? -1 : 0 < e ? 1 : 0
2599
                                }
2600
                                var i;
2601
                                return 0 === (i = r(e.getFullYear() - t.getFullYear())) && 0 === (i = r(e.getMonth() - t.getMonth())) && (i = r(e.getDate() - t.getDate())), i
2602
                            }
2603
​
2604
                            function s(e) {
2605
                                switch (e.getDay()) {
2606
                                    case 0:
2607
                                        return new Date(e.getFullYear() - 1, 11, 29);
2608
                                    case 1:
2609
                                        return e;
2610
                                    case 2:
2611
                                        return new Date(e.getFullYear(), 0, 3);
2612
                                    case 3:
2613
                                        return new Date(e.getFullYear(), 0, 2);
2614
                                    case 4:
2615
                                        return new Date(e.getFullYear(), 0, 1);
2616
                                    case 5:
2617
                                        return new Date(e.getFullYear() - 1, 11, 31);
2618
                                    case 6:
2619
                                        return new Date(e.getFullYear() - 1, 11, 30)
2620
                                }
2621
                            }
2622
​
2623
                            function _(e) {
2624
                                e = rr(new Date(e.xc + 1900, 0, 1), e.Vc);
2625
                                var t = new Date(e.getFullYear() + 1, 0, 4),
2626
                                    r = s(new Date(e.getFullYear(), 0, 4));
2627
                                return t = s(t), 0 >= o(r, e) ? 0 >= o(t, e) ? e.getFullYear() + 1 : e.getFullYear() : e.getFullYear() - 1
2628
                            }
2629
                            var c = k[i + 40 >> 2];
2630
                            for (var u in i = {
2631
                                    Pd: k[i >> 2],
2632
                                    Od: k[i + 4 >> 2],
2633
                                    Tc: k[i + 8 >> 2],
2634
                                    Nc: k[i + 12 >> 2],
2635
                                    Ic: k[i + 16 >> 2],
2636
                                    xc: k[i + 20 >> 2],
2637
                                    Uc: k[i + 24 >> 2],
2638
                                    Vc: k[i + 28 >> 2],
2639
                                    de: k[i + 32 >> 2],
2640
                                    Nd: k[i + 36 >> 2],
2641
                                    Qd: c ? I(c) : ""
2642
                                }, r = I(r), c = {
2643
                                    "%c": "%a %b %d %H:%M:%S %Y",
2644
                                    "%D": "%m/%d/%y",
2645
                                    "%F": "%Y-%m-%d",
2646
                                    "%h": "%b",
2647
                                    "%r": "%I:%M:%S %p",
2648
                                    "%R": "%H:%M",
2649
                                    "%T": "%H:%M:%S",
2650
                                    "%x": "%m/%d/%y",
2651
                                    "%X": "%H:%M:%S",
2652
                                    "%Ec": "%c",
2653
                                    "%EC": "%C",
2654
                                    "%Ex": "%m/%d/%y",
2655
                                    "%EX": "%H:%M:%S",
2656
                                    "%Ey": "%y",
2657
                                    "%EY": "%Y",
2658
                                    "%Od": "%d",
2659
                                    "%Oe": "%e",
2660
                                    "%OH": "%H",
2661
                                    "%OI": "%I",
2662
                                    "%Om": "%m",
2663
                                    "%OM": "%M",
2664
                                    "%OS": "%S",
2665
                                    "%Ou": "%u",
2666
                                    "%OU": "%U",
2667
                                    "%OV": "%V",
2668
                                    "%Ow": "%w",
2669
                                    "%OW": "%W",
2670
                                    "%Oy": "%y"
2671
                                }) r = r.replace(new RegExp(u, "g"), c[u]);
2672
                            var f = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
2673
                                l = "January February March April May June July August September October November December".split(" ");
2674
                            for (u in c = {
2675
                                    "%a": function(e) {
2676
                                        return f[e.Uc].substring(0, 3)
2677
                                    },
2678
                                    "%A": function(e) {
2679
                                        return f[e.Uc]
2680
                                    },
2681
                                    "%b": function(e) {
2682
                                        return l[e.Ic].substring(0, 3)
2683
                                    },
2684
                                    "%B": function(e) {
2685
                                        return l[e.Ic]
2686
                                    },
2687
                                    "%C": function(e) {
2688
                                        return n((e.xc + 1900) / 100 | 0, 2)
2689
                                    },
2690
                                    "%d": function(e) {
2691
                                        return n(e.Nc, 2)
2692
                                    },
2693
                                    "%e": function(e) {
2694
                                        return a(e.Nc, 2, " ")
2695
                                    },
2696
                                    "%g": function(e) {
2697
                                        return _(e).toString().substring(2)
2698
                                    },
2699
                                    "%G": function(e) {
2700
                                        return _(e)
2701
                                    },
2702
                                    "%H": function(e) {
2703
                                        return n(e.Tc, 2)
2704
                                    },
2705
                                    "%I": function(e) {
2706
                                        return 0 == (e = e.Tc) ? e = 12 : 12 < e && (e -= 12), n(e, 2)
2707
                                    },
2708
                                    "%j": function(e) {
2709
                                        return n(e.Nc + $t(Jt(e.xc + 1900) ? er : tr, e.Ic - 1), 3)
2710
                                    },
2711
                                    "%m": function(e) {
2712
                                        return n(e.Ic + 1, 2)
2713
                                    },
2714
                                    "%M": function(e) {
2715
                                        return n(e.Od, 2)
2716
                                    },
2717
                                    "%n": function() {
2718
                                        return "\n"
2719
                                    },
2720
                                    "%p": function(e) {
2721
                                        return 0 <= e.Tc && 12 > e.Tc ? "AM" : "PM"
2722
                                    },
2723
                                    "%S": function(e) {
2724
                                        return n(e.Pd, 2)
2725
                                    },
2726
                                    "%t": function() {
2727
                                        return "\t"
2728
                                    },
2729
                                    "%u": function(e) {
2730
                                        return e.Uc || 7
2731
                                    },
2732
                                    "%U": function(e) {
2733
                                        var t = new Date(e.xc + 1900, 0, 1),
2734
                                            r = 0 === t.getDay() ? t : rr(t, 7 - t.getDay());
2735
                                        return 0 > o(r, e = new Date(e.xc + 1900, e.Ic, e.Nc)) ? n(Math.ceil((31 - r.getDate() + ($t(Jt(e.getFullYear()) ? er : tr, e.getMonth() - 1) - 31) + e.getDate()) / 7), 2) : 0 === o(r, t) ? "01" : "00"
2736
                                    },
2737
                                    "%V": function(e) {
2738
                                        var t = new Date(e.xc + 1901, 0, 4),
2739
                                            r = s(new Date(e.xc + 1900, 0, 4));
2740
                                        t = s(t);
2741
                                        var i = rr(new Date(e.xc + 1900, 0, 1), e.Vc);
2742
                                        return 0 > o(i, r) ? "53" : 0 >= o(t, i) ? "01" : n(Math.ceil((r.getFullYear() < e.xc + 1900 ? e.Vc + 32 - r.getDate() : e.Vc + 1 - r.getDate()) / 7), 2)
2743
                                    },
2744
                                    "%w": function(e) {
2745
                                        return e.Uc
2746
                                    },
2747
                                    "%W": function(e) {
2748
                                        var t = new Date(e.xc, 0, 1),
2749
                                            r = 1 === t.getDay() ? t : rr(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1);
2750
                                        return 0 > o(r, e = new Date(e.xc + 1900, e.Ic, e.Nc)) ? n(Math.ceil((31 - r.getDate() + ($t(Jt(e.getFullYear()) ? er : tr, e.getMonth() - 1) - 31) + e.getDate()) / 7), 2) : 0 === o(r, t) ? "01" : "00"
2751
                                    },
2752
                                    "%y": function(e) {
2753
                                        return (e.xc + 1900).toString().substring(2)
2754
                                    },
2755
                                    "%Y": function(e) {
2756
                                        return e.xc + 1900
2757
                                    },
2758
                                    "%z": function(e) {
2759
                                        var t = 0 <= (e = e.Nd);
2760
                                        return e = Math.abs(e) / 60, (t ? "+" : "-") + String("0000" + (e / 60 * 100 + e % 60)).slice(-4)
2761
                                    },
2762
                                    "%Z": function(e) {
2763
                                        return e.Qd
2764
                                    },
2765
                                    "%%": function() {
2766
                                        return "%"
2767
                                    }
2768
                                }) 0 <= r.indexOf(u) && (r = r.replace(new RegExp(u, "g"), c[u](i)));
2769
                            return (u = ar(r, !1)).length > t ? 0 : (E.set(u, e), u.length - 1)
2770
                        }(e, t, r, i)
2771
                    },
2772
                    d: function(e) {
2773
                        var t = Date.now() / 1e3 | 0;
2774
                        return e && (k[e >> 2] = t), t
2775
                    }
2776
                },
2777
                or = function() {
2778
                    function e(e) {
2779
                        r.asm = e.exports, m = r.asm.S, D(), C = r.asm.X, V.unshift(r.asm.T), Z()
2780
                    }
2781
                    var t = {
2782
                        a: nr
2783
                    };
2784
                    if (X(), r.instantiateWasm) try {
2785
                        return r.instantiateWasm(t, e)
2786
                    } catch (e) {
2787
                        return p("Module.instantiateWasm callback failed with error: " + e), !1
2788
                    }
2789
                    return t = function(e) {
2790
                        var t = Q;
2791
                        try {
2792
                            e: {
2793
                                try {
2794
                                    if (t == Q && l) {
2795
                                        var r = new Uint8Array(l);
2796
                                        break e
2797
                                    }
2798
                                    if (c) {
2799
                                        r = c(t);
2800
                                        break e
2801
                                    }
2802
                                    throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)"
2803
                                } catch (e) {
2804
                                    j(e)
2805
                                }
2806
                                r = void 0
2807
                            }
2808
                            var i = new WebAssembly.Module(r),
2809
                                a = new WebAssembly.Instance(i, e)
2810
                        }
2811
                        catch (t) {
2812
                            throw e = t.toString(), p("failed to compile wasm module: " + e), (0 <= e.indexOf("imported Memory") || 0 <= e.indexOf("memory import")) && p("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."), t
2813
                        }
2814
                        return [a, i]
2815
                    }(t), e(t[0]), r.asm
2816
                }();
2817
            r.___wasm_call_ctors = or.T, r._zappar_has_initialized = or.U, r._zappar_invert = or.V, r._zappar_loaded = or.W, r._zappar_pipeline_create = or.Y, r._zappar_pipeline_destroy = or.Z, r._zappar_pipeline_camera_frame_submit = or._, r._zappar_pipeline_camera_frame_submit_raw_pointer = or.$, r._zappar_pipeline_frame_update = or.aa, r._zappar_pipeline_camera_frame_user_data = or.ba, r._zappar_pipeline_camera_model = or.ca, r._zappar_pipeline_frame_number = or.da, r._zappar_pipeline_motion_accelerometer_submit = or.ea, r._zappar_pipeline_motion_rotation_rate_submit = or.fa, r._zappar_pipeline_motion_attitude_submit = or.ga, r._zappar_pipeline_motion_attitude_matrix_submit = or.ha, r._zappar_pipeline_camera_frame_user_facing = or.ia, r._zappar_pipeline_camera_frame_texture_matrix = or.ja, r._zappar_pipeline_camera_pose_with_attitude = or.ka, r._zappar_pipeline_camera_pose_with_origin = or.la, r._zappar_pipeline_camera_frame_camera_attitude = or.ma, r._zappar_pipeline_camera_frame_device_attitude = or.na, r._zappar_pipeline_camera_frame_texture_gl = or.oa, r._zappar_pipeline_camera_frame_upload_gl = or.pa, r._zappar_pipeline_sequence_record_start = or.qa, r._zappar_pipeline_sequence_record_stop = or.ra, r._zappar_pipeline_sequence_record_clear = or.sa, r._zappar_pipeline_sequence_record_device_attitude_matrices_set = or.ta, r._zappar_pipeline_sequence_record_data_size = or.ua, r._zappar_pipeline_sequence_record_data = or.va, r._zappar_pipeline_process_gl = or.wa, r._zappar_pipeline_camera_pose_default = or.xa, r._zappar_instant_world_tracker_create = or.ya, r._zappar_instant_world_tracker_destroy = or.za, r._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw = or.Aa, r._zappar_instant_world_tracker_anchor_pose_raw = or.Ba, r._zappar_instant_world_tracker_enabled_set = or.Ca, r._zappar_instant_world_tracker_enabled = or.Da, r._zappar_image_tracker_create = or.Ea, r._zappar_image_tracker_destroy = or.Fa, r._zappar_image_tracker_target_load_from_memory = or.Ga, r.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc = or.Ha;
2818
            var sr = r._free = or.Ia;
2819
            r._zappar_image_tracker_anchor_count = or.Ja, r._zappar_image_tracker_anchor_id = or.Ka, r._zappar_image_tracker_anchor_pose_raw = or.La, r._zappar_image_tracker_enabled_set = or.Ma, r._zappar_image_tracker_enabled = or.Na, r._zappar_image_tracker_target_loaded_version = or.Oa, r.__Z33zappar_image_tracker_target_countP23zappar_image_tracker_ti = or.Pa, r.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii = or.Qa, r.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii = or.Ra, r.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii = or.Sa, r.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii = or.Ta, r.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii = or.Ua, r.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii = or.Va, r.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii = or.Wa, r.__Z38zappar_image_tracker_target_radius_topP23zappar_image_tracker_tii = or.Xa, r.__Z41zappar_image_tracker_target_radius_bottomP23zappar_image_tracker_tii = or.Ya, r.__Z39zappar_image_tracker_target_side_lengthP23zappar_image_tracker_tii = or.Za, r.__Z49zappar_image_tracker_target_physical_scale_factorP23zappar_image_tracker_tii = or._a, r.__Z49zappar_image_tracker_target_preview_mesh_verticesP23zappar_image_tracker_tii = or.$a, r.__Z48zappar_image_tracker_target_preview_mesh_normalsP23zappar_image_tracker_tii = or.ab, r.__Z44zappar_image_tracker_target_preview_mesh_uvsP23zappar_image_tracker_tii = or.bb, r.__Z48zappar_image_tracker_target_preview_mesh_indicesP23zappar_image_tracker_tii = or.cb, r.__Z54zappar_image_tracker_target_preview_mesh_vertices_sizeP23zappar_image_tracker_tii = or.db, r.__Z53zappar_image_tracker_target_preview_mesh_normals_sizeP23zappar_image_tracker_tii = or.eb, r.__Z49zappar_image_tracker_target_preview_mesh_uvs_sizeP23zappar_image_tracker_tii = or.fb, r.__Z53zappar_image_tracker_target_preview_mesh_indices_sizeP23zappar_image_tracker_tii = or.gb, r.__Z32zappar_image_tracker_target_typeP23zappar_image_tracker_tii = or.hb, r._zappar_face_tracker_create = or.ib, r._zappar_face_tracker_destroy = or.jb, r._zappar_face_tracker_model_load_from_memory = or.kb, r._zappar_face_tracker_anchor_count = or.lb, r._zappar_face_tracker_anchor_id = or.mb, r._zappar_face_tracker_anchor_pose_raw = or.nb, r._zappar_face_tracker_anchor_identity_coefficients = or.ob, r._zappar_face_tracker_anchor_expression_coefficients = or.pb, r._zappar_face_tracker_enabled_set = or.qb, r._zappar_face_tracker_enabled = or.rb, r._zappar_face_tracker_max_faces_set = or.sb, r._zappar_face_tracker_max_faces = or.tb, r._zappar_face_tracker_model_loaded_version = or.ub, r._zappar_face_landmark_create = or.vb, r._zappar_face_landmark_destroy = or.wb, r.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i = or.xb, r._zappar_face_landmark_anchor_pose = or.yb, r._zappar_barcode_finder_create = or.zb, r._zappar_barcode_finder_destroy = or.Ab, r._zappar_barcode_finder_found_number = or.Bb, r._zappar_barcode_finder_found_text = or.Cb, r._zappar_barcode_finder_enabled_set = or.Db, r._zappar_barcode_finder_enabled = or.Eb, r._zappar_barcode_finder_found_format = or.Fb, r._zappar_barcode_finder_formats = or.Gb, r._zappar_barcode_finder_formats_set = or.Hb;
2820
            var _r = r._malloc = or.Ib;
2821
            r._zappar_face_mesh_create = or.Jb, r._zappar_face_mesh_destroy = or.Kb, r.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii = or.Lb, r.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti = or.Mb, r.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti = or.Nb, r.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti = or.Ob, r.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti = or.Pb, r.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti = or.Qb, r.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti = or.Rb, r.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti = or.Sb, r.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i = or.Tb, r.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti = or.Ub, r.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti = or.Vb, r._zappar_camera_source_create = or.Wb, r._zappar_camera_source_destroy = or.Xb, r._zappar_camera_source_start = or.Yb, r._zappar_camera_source_pause = or.Zb, r._zappar_camera_default_device_id = or._b, r._zappar_sequence_source_create = or.$b, r.__Z28zappar_sequence_source_startP25zappar_sequence_source_ti = or.ac, r.__Z39zappar_sequence_source_load_from_memoryP25zappar_sequence_source_tiPKci = or.bc, r.__Z28zappar_sequence_source_pauseP25zappar_sequence_source_ti = or.cc, r._zappar_sequence_source_destroy = or.dc, r._zappar_sequence_source_max_playback_fps_set = or.ec, r._zappar_log_level_set = or.fc, r._zappar_log_level = or.gc, r.__Z23zappar_log_redirect_setPFv18zappar_log_level_tPKcE = or.hc, r._zappar_analytics_project_id_set = or.ic;
2822
            var cr, ur = r.___errno_location = or.jc,
2823
                fr = r.__get_tzname = or.kc,
2824
                lr = r.__get_daylight = or.lc,
2825
                dr = r.__get_timezone = or.mc,
2826
                pr = r.stackSave = or.nc,
2827
                hr = r.stackRestore = or.oc,
2828
                mr = r.stackAlloc = or.pc;
2829
​
2830
            function br(e) {
2831
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
2832
            }
2833
​
2834
            function wr() {
2835
                function e() {
2836
                    if (!cr && (cr = !0, r.calledRun = !0, !w)) {
2837
                        if (r.noFSInit || Pe || (Pe = !0, Ye(), r.stdin = r.stdin, r.stdout = r.stdout, r.stderr = r.stderr, r.stdin ? Xe("stdin", r.stdin) : Ve("/dev/tty", "/dev/stdin"), r.stdout ? Xe("stdout", null, r.stdout) : Ve("/dev/tty", "/dev/stdout"), r.stderr ? Xe("stderr", null, r.stderr) : Ve("/dev/tty1", "/dev/stderr"), We("/dev/stdin", 0), We("/dev/stdout", 1), We("/dev/stderr", 1)), te(V), ye = !1, te(N), i(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), r.postRun)
2838
                            for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) {
2839
                                var e = r.postRun.shift();
2840
                                q.unshift(e)
2841
                            }
2842
                        te(q)
2843
                    }
2844
                }
2845
                if (!(0 < W)) {
2846
                    if (r.preRun)
2847
                        for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) G();
2848
                    te(U), 0 < W || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
2849
                        setTimeout((function() {
2850
                            r.setStatus("")
2851
                        }), 1), e()
2852
                    }), 1)) : e())
2853
                }
2854
            }
2855
​
2856
            function gr(e) {
2857
                b = e, h || (r.onExit && r.onExit(e), w = !0), _(e, new br(e))
2858
            }
2859
            if (r.cwrap = function(e, t, r, i) {
2860
                    var a = (r = r || []).every((function(e) {
2861
                        return "number" === e
2862
                    }));
2863
                    return "string" !== t && a && !i ? y(e) : function() {
2864
                        return function(e, t, r, i) {
2865
                            var a, n = {
2866
                                    string: function(e) {
2867
                                        var t = 0;
2868
                                        if (null != e && 0 !== e) {
2869
                                            var r = 1 + (e.length << 2);
2870
                                            t = mr(r), P(e, A, t, r)
2871
                                        }
2872
                                        return t
2873
                                    },
2874
                                    array: function(e) {
2875
                                        var t = mr(e.length);
2876
                                        return E.set(e, t), t
2877
                                    }
2878
                                },
2879
                                o = y(e),
2880
                                s = [];
2881
                            if (e = 0, i)
2882
                                for (var _ = 0; _ < i.length; _++) {
2883
                                    var c = n[r[_]];
2884
                                    c ? (0 === e && (e = pr()), s[_] = c(i[_])) : s[_] = i[_]
2885
                                }
2886
                            return a = r = o.apply(null, s), r = "string" === t ? I(a) : "boolean" === t ? !!a : a, 0 !== e && hr(e), r
2887
                        }(e, t, r, arguments)
2888
                    }
2889
                }, r.setValue = function(e, t, r) {
2890
                    switch ("*" === (r = r || "i8").charAt(r.length - 1) && (r = "i32"), r) {
2891
                        case "i1":
2892
                        case "i8":
2893
                            E[e >> 0] = t;
2894
                            break;
2895
                        case "i16":
2896
                            T[e >> 1] = t;
2897
                            break;
2898
                        case "i32":
2899
                            k[e >> 2] = t;
2900
                            break;
2901
                        case "i64":
2902
                            J = [t >>> 0, (K = t, 1 <= +Math.abs(K) ? 0 < K ? (0 | Math.min(+Math.floor(K / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)], k[e >> 2] = J[0], k[e + 4 >> 2] = J[1];
2903
                            break;
2904
                        case "float":
2905
                            L[e >> 2] = t;
2906
                            break;
2907
                        case "double":
2908
                            F[e >> 3] = t;
2909
                            break;
2910
                        default:
2911
                            j("invalid type for setValue: " + r)
2912
                    }
2913
                }, r.getValue = function(e, t) {
2914
                    switch ("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"), t) {
2915
                        case "i1":
2916
                        case "i8":
2917
                            return E[e >> 0];
2918
                        case "i16":
2919
                            return T[e >> 1];
2920
                        case "i32":
2921
                        case "i64":
2922
                            return k[e >> 2];
2923
                        case "float":
2924
                            return L[e >> 2];
2925
                        case "double":
2926
                            return F[e >> 3];
2927
                        default:
2928
                            j("invalid type for getValue: " + t)
2929
                    }
2930
                    return null
2931
                }, r.UTF8ToString = I, Y = function e() {
2932
                    cr || wr(), cr || (Y = e)
2933
                }, r.run = wr, r.preInit)
2934
                for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); 0 < r.preInit.length;) r.preInit.pop()();
2935
            return wr(), t
2936
        });
2937
        class i {
2938
            constructor(e) {
2939
                this._messageSender = e, this._freeBufferPool = [], this._buffer = new ArrayBuffer(16), this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u8cView = new Uint8ClampedArray(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), this._offset = 1, this._startOffset = -1, this._timeoutSet = !1, this._appender = {
2940
                    int: e => this.int(e),
2941
                    bool: e => this.int(e ? 1 : 0),
2942
                    float: e => this.float(e),
2943
                    string: e => this.string(e),
2944
                    dataWithLength: e => this.arrayBuffer(e),
2945
                    type: e => this.int(e),
2946
                    matrix4x4: e => this.float32ArrayBuffer(e),
2947
                    matrix3x3: e => this.float32ArrayBuffer(e),
2948
                    identityCoefficients: e => this.float32ArrayBuffer(e),
2949
                    expressionCoefficients: e => this.float32ArrayBuffer(e),
2950
                    cameraModel: e => this.float32ArrayBuffer(e),
2951
                    timestamp: e => this.double(e),
2952
                    barcodeFormat: e => this.int(e),
2953
                    faceLandmarkName: e => this.int(e),
2954
                    instantTrackerTransformOrientation: e => this.int(e),
2955
                    logLevel: e => this.int(e)
2956
                }, this._freeBufferPool.push(new ArrayBuffer(16)), this._freeBufferPool.push(new ArrayBuffer(16))
2957
            }
2958
            bufferReturn(e) {
2959
                this._freeBufferPool.push(e)
2960
            }
2961
            _ensureArrayBuffer(e) {
2962
                let t, r = 4 * (this._offset + e + 8);
2963
                if (this._buffer && this._buffer.byteLength >= r) return;
2964
                if (!t) {
2965
                    let e = r;
2966
                    e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, t = new ArrayBuffer(e)
2967
                }
2968
                let i = this._buffer ? this._i32View : void 0;
2969
                this._buffer = t, this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u8cView = new Uint8ClampedArray(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), i && this._i32View.set(i.subarray(0, this._offset))
2970
            }
2971
            sendMessage(e, t) {
2972
                this._ensureArrayBuffer(4), this._startOffset = this._offset, this._i32View[this._offset + 1] = e, this._offset += 2, t(this._appender), this._i32View[this._startOffset] = this._offset - this._startOffset, this._startOffset = -1, this._sendOneTime()
2973
            }
2974
            _sendOneTime() {
2975
                !1 === this._timeoutSet && (this._timeoutSet = !0, setTimeout((() => {
2976
                    this._timeoutSet = !1, this._send()
2977
                }), 0))
2978
            }
2979
            _send() {
2980
                0 !== this._freeBufferPool.length ? (this._i32View[0] = this._offset, this._messageSender(this._buffer), this._buffer = void 0, this._buffer = this._freeBufferPool.pop(), this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u8cView = new Uint8ClampedArray(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), this._offset = 1, this._startOffset = -1) : this._sendOneTime()
2981
            }
2982
            int(e) {
2983
                this._ensureArrayBuffer(1), this._i32View[this._offset] = e, this._offset++
2984
            }
2985
            double(e) {
2986
                this._ensureArrayBuffer(2), this._offset % 2 == 1 && this._offset++, this._f64View[this._offset / 2] = e, this._offset += 2
2987
            }
2988
            float(e) {
2989
                this._ensureArrayBuffer(1), this._f32View[this._offset] = e, this._offset++
2990
            }
2991
            int32Array(e) {
2992
                this._ensureArrayBuffer(e.length);
2993
                for (let t = 0; t < e.length; ++t) this._i32View[this._offset + t] = e[t];
2994
                this._offset += e.length
2995
            }
2996
            float32Array(e) {
2997
                this._ensureArrayBuffer(e.length);
2998
                for (let t = 0; t < e.length; ++t) this._f32View[this._offset + t] = e[t];
2999
                this._offset += e.length
3000
            }
3001
            booleanArray(e) {
3002
                this._ensureArrayBuffer(e.length);
3003
                for (let t = 0; t < e.length; ++t) this._i32View[this._offset + t] = e[t] ? 1 : 0;
3004
                this._offset += e.length
3005
            }
3006
            uint8ArrayBuffer(e) {
3007
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.byteLength, this._offset++, this._u8View.set(e, 4 * this._offset), this._offset += e.byteLength >> 2, 0 != (3 & e.byteLength) && this._offset++
3008
            }
3009
            arrayBuffer(e) {
3010
                let t = new Uint8Array(e);
3011
                this.uint8ArrayBuffer(t)
3012
            }
3013
            uint8ClampedArrayBuffer(e) {
3014
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.byteLength, this._offset++, this._u8cView.set(e, 4 * this._offset), this._offset += e.byteLength >> 2, 0 != (3 & e.byteLength) && this._offset++
3015
            }
3016
            float32ArrayBuffer(e) {
3017
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.length, this._offset++, this._f32View.set(e, this._offset), this._offset += e.length
3018
            }
3019
            uint16ArrayBuffer(e) {
3020
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.length, this._offset++;
3021
                let t = 2 * this._offset;
3022
                this._u16View.set(e, t), this._offset += e.length >> 1, 0 != (1 & e.length) && this._offset++
3023
            }
3024
            int32ArrayBuffer(e) {
3025
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.length, this._offset++, this._i32View.set(e, this._offset), this._offset += e.length
3026
            }
3027
            uint32ArrayBuffer(e) {
3028
                this._ensureArrayBuffer(e.byteLength / 4), this._i32View[this._offset] = e.length, this._offset++, this._u32View.set(e, this._offset), this._offset += e.length
3029
            }
3030
            string(e) {
3031
                let t = (new TextEncoder).encode(e);
3032
                this._ensureArrayBuffer(t.byteLength / 4), this._i32View[this._offset] = t.byteLength, this._offset++, this._u8View.set(t, 4 * this._offset), this._offset += t.byteLength >> 2, 0 != (3 & t.byteLength) && this._offset++
3033
            }
3034
        }
3035
        class a {
3036
            constructor() {
3037
                this._buffer = new ArrayBuffer(0), this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), this._offset = 0, this._length = 0, this._startOffset = -1, this._processor = {
3038
                    int: () => this._i32View[this._startOffset++],
3039
                    bool: () => 1 === this._i32View[this._startOffset++],
3040
                    type: () => this._i32View[this._startOffset++],
3041
                    float: () => this._f32View[this._startOffset++],
3042
                    timestamp: () => {
3043
                        this._startOffset % 2 == 1 && this._startOffset++;
3044
                        let e = this._f64View[this._startOffset / 2];
3045
                        return this._startOffset += 2, e
3046
                    },
3047
                    string: () => {
3048
                        let e = this._i32View[this._startOffset++],
3049
                            t = (new TextDecoder).decode(new Uint8Array(this._buffer, 4 * this._startOffset, e));
3050
                        return this._startOffset += e >> 2, 0 != (3 & e) && this._startOffset++, t
3051
                    },
3052
                    dataWithLength: () => {
3053
                        let e = this._i32View[this._startOffset++],
3054
                            t = new Uint8Array(e);
3055
                        return t.set(this._u8View.subarray(4 * this._startOffset, 4 * this._startOffset + e)), this._startOffset += t.byteLength >> 2, 0 != (3 & t.byteLength) && this._startOffset++, t.buffer
3056
                    },
3057
                    matrix4x4: () => {
3058
                        let e = this._i32View[this._startOffset++],
3059
                            t = new Float32Array(e);
3060
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 16)), this._startOffset += e, t
3061
                    },
3062
                    matrix3x3: () => {
3063
                        let e = this._i32View[this._startOffset++],
3064
                            t = new Float32Array(e);
3065
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 9)), this._startOffset += e, t
3066
                    },
3067
                    identityCoefficients: () => {
3068
                        let e = this._i32View[this._startOffset++],
3069
                            t = new Float32Array(e);
3070
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 50)), this._startOffset += e, t
3071
                    },
3072
                    expressionCoefficients: () => {
3073
                        let e = this._i32View[this._startOffset++],
3074
                            t = new Float32Array(e);
3075
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 29)), this._startOffset += e, t
3076
                    },
3077
                    cameraModel: () => {
3078
                        let e = this._i32View[this._startOffset++],
3079
                            t = new Float32Array(e);
3080
                        return t.set(this._f32View.subarray(this._startOffset, this._startOffset + 6)), this._startOffset += e, t
3081
                    },
3082
                    barcodeFormat: () => this._i32View[this._startOffset++],
3083
                    faceLandmarkName: () => this._i32View[this._startOffset++],
3084
                    instantTrackerTransformOrientation: () => this._i32View[this._startOffset++],
3085
                    logLevel: () => this._i32View[this._startOffset++]
3086
                }
3087
            }
3088
            setData(e) {
3089
                this._buffer = e, this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer), this._f64View = new Float64Array(this._buffer), this._u8View = new Uint8Array(this._buffer), this._u16View = new Uint16Array(this._buffer), this._u32View = new Uint32Array(this._buffer), this._offset = 0, this._length = 0, e.byteLength >= 4 && (this._offset = 1, this._length = this._i32View[0]), this._startOffset = -1
3090
            }
3091
            hasMessage() {
3092
                return this._offset + 1 < this._length
3093
            }
3094
            forMessages(e) {
3095
                for (; this.hasMessage();) {
3096
                    let t = this._i32View[this._offset],
3097
                        r = this._i32View[this._offset + 1];
3098
                    this._startOffset = this._offset + 2, this._offset += t, e(r, this._processor)
3099
                }
3100
            }
3101
        }
3102
        class n {
3103
            constructor(e, t) {
3104
                this._impl = e, this._sender = t, this._deserializer = new a, this.serializersByPipelineId = new Map, this._pipeline_id_by_pipeline_id = new Map, this._pipeline_by_instance = new Map, this._pipeline_id_by_camera_source_id = new Map, this._camera_source_by_instance = new Map, this._pipeline_id_by_sequence_source_id = new Map, this._sequence_source_by_instance = new Map, this._pipeline_id_by_image_tracker_id = new Map, this._image_tracker_by_instance = new Map, this._pipeline_id_by_face_tracker_id = new Map, this._face_tracker_by_instance = new Map, this._pipeline_id_by_face_mesh_id = new Map, this._face_mesh_by_instance = new Map, this._pipeline_id_by_face_landmark_id = new Map, this._face_landmark_by_instance = new Map, this._pipeline_id_by_barcode_finder_id = new Map, this._barcode_finder_by_instance = new Map, this._pipeline_id_by_instant_world_tracker_id = new Map, this._instant_world_tracker_by_instance = new Map
3105
            }
3106
            processBuffer(e) {
3107
                this._deserializer.setData(e), this._deserializer.forMessages(((e, t) => {
3108
                    switch (e) {
3109
                        case 34:
3110
                            this._impl.log_level_set(t.logLevel());
3111
                            break;
3112
                        case 31:
3113
                            this._impl.analytics_project_id_set(t.string(), t.string());
3114
                            break;
3115
                        case 27: {
3116
                            let e = t.type(),
3117
                                r = this._impl.pipeline_create();
3118
                            this._pipeline_by_instance.set(e, r), this._pipeline_id_by_pipeline_id.set(e, e), this.serializersByPipelineId.set(e, new i((t => {
3119
                                this._sender(e, t)
3120
                            })));
3121
                            break
3122
                        }
3123
                        case 28: {
3124
                            let e = t.type(),
3125
                                r = this._pipeline_by_instance.get(e);
3126
                            if (void 0 === r) return;
3127
                            this._impl.pipeline_destroy(r), this._pipeline_by_instance.delete(e);
3128
                            break
3129
                        }
3130
                        case 9: {
3131
                            let e = t.type(),
3132
                                r = this._pipeline_by_instance.get(e);
3133
                            if (void 0 === r) return;
3134
                            this._impl.pipeline_frame_update(r);
3135
                            break
3136
                        }
3137
                        case 8: {
3138
                            let e = t.type(),
3139
                                r = this._pipeline_by_instance.get(e);
3140
                            if (void 0 === r) return;
3141
                            this._impl.pipeline_camera_frame_submit(r, t.dataWithLength(), t.int(), t.int(), t.int(), t.matrix4x4(), t.cameraModel(), t.bool());
3142
                            break
3143
                        }
3144
                        case 10: {
3145
                            let e = t.type(),
3146
                                r = this._pipeline_by_instance.get(e);
3147
                            if (void 0 === r) return;
3148
                            this._impl.pipeline_motion_accelerometer_submit(r, t.timestamp(), t.float(), t.float(), t.float());
3149
                            break
3150
                        }
3151
                        case 11: {
3152
                            let e = t.type(),
3153
                                r = this._pipeline_by_instance.get(e);
3154
                            if (void 0 === r) return;
3155
                            this._impl.pipeline_motion_rotation_rate_submit(r, t.timestamp(), t.float(), t.float(), t.float());
3156
                            break
3157
                        }
3158
                        case 12: {
3159
                            let e = t.type(),
3160
                                r = this._pipeline_by_instance.get(e);
3161
                            if (void 0 === r) return;
3162
                            this._impl.pipeline_motion_attitude_submit(r, t.timestamp(), t.float(), t.float(), t.float());
3163
                            break
3164
                        }
3165
                        case 13: {
3166
                            let e = t.type(),
3167
                                r = this._pipeline_by_instance.get(e);
3168
                            if (void 0 === r) return;
3169
                            this._impl.pipeline_motion_attitude_matrix_submit(r, t.matrix4x4());
3170
                            break
3171
                        }
3172
                        case 29: {
3173
                            let e = t.type(),
3174
                                r = t.type(),
3175
                                i = this._pipeline_by_instance.get(r),
3176
                                a = t.string(),
3177
                                n = this._impl.camera_source_create(i, a);
3178
                            this._camera_source_by_instance.set(e, n), this._pipeline_id_by_camera_source_id.set(e, r);
3179
                            break
3180
                        }
3181
                        case 30: {
3182
                            let e = t.type(),
3183
                                r = this._camera_source_by_instance.get(e);
3184
                            if (void 0 === r) return;
3185
                            this._impl.camera_source_destroy(r), this._camera_source_by_instance.delete(e);
3186
                            break
3187
                        }
3188
                        case 35: {
3189
                            let e = t.type(),
3190
                                r = t.type(),
3191
                                i = this._pipeline_by_instance.get(r),
3192
                                a = this._impl.sequence_source_create(i);
3193
                            this._sequence_source_by_instance.set(e, a), this._pipeline_id_by_sequence_source_id.set(e, r);
3194
                            break
3195
                        }
3196
                        case 36: {
3197
                            let e = t.type(),
3198
                                r = this._sequence_source_by_instance.get(e);
3199
                            if (void 0 === r) return;
3200
                            this._impl.sequence_source_destroy(r), this._sequence_source_by_instance.delete(e);
3201
                            break
3202
                        }
3203
                        case 2: {
3204
                            let e = t.type(),
3205
                                r = t.type(),
3206
                                i = this._pipeline_by_instance.get(r),
3207
                                a = this._impl.image_tracker_create(i);
3208
                            this._image_tracker_by_instance.set(e, a), this._pipeline_id_by_image_tracker_id.set(e, r);
3209
                            break
3210
                        }
3211
                        case 14: {
3212
                            let e = t.type(),
3213
                                r = this._image_tracker_by_instance.get(e);
3214
                            if (void 0 === r) return;
3215
                            this._impl.image_tracker_destroy(r), this._image_tracker_by_instance.delete(e);
3216
                            break
3217
                        }
3218
                        case 4: {
3219
                            let e = t.type(),
3220
                                r = this._image_tracker_by_instance.get(e);
3221
                            if (void 0 === r) return;
3222
                            this._impl.image_tracker_target_load_from_memory(r, t.dataWithLength());
3223
                            break
3224
                        }
3225
                        case 3: {
3226
                            let e = t.type(),
3227
                                r = this._image_tracker_by_instance.get(e);
3228
                            if (void 0 === r) return;
3229
                            this._impl.image_tracker_enabled_set(r, t.bool());
3230
                            break
3231
                        }
3232
                        case 20: {
3233
                            let e = t.type(),
3234
                                r = t.type(),
3235
                                i = this._pipeline_by_instance.get(r),
3236
                                a = this._impl.face_tracker_create(i);
3237
                            this._face_tracker_by_instance.set(e, a), this._pipeline_id_by_face_tracker_id.set(e, r);
3238
                            break
3239
                        }
3240
                        case 21: {
3241
                            let e = t.type(),
3242
                                r = this._face_tracker_by_instance.get(e);
3243
                            if (void 0 === r) return;
3244
                            this._impl.face_tracker_destroy(r), this._face_tracker_by_instance.delete(e);
3245
                            break
3246
                        }
3247
                        case 22: {
3248
                            let e = t.type(),
3249
                                r = this._face_tracker_by_instance.get(e);
3250
                            if (void 0 === r) return;
3251
                            this._impl.face_tracker_model_load_from_memory(r, t.dataWithLength());
3252
                            break
3253
                        }
3254
                        case 23: {
3255
                            let e = t.type(),
3256
                                r = this._face_tracker_by_instance.get(e);
3257
                            if (void 0 === r) return;
3258
                            this._impl.face_tracker_enabled_set(r, t.bool());
3259
                            break
3260
                        }
3261
                        case 24: {
3262
                            let e = t.type(),
3263
                                r = this._face_tracker_by_instance.get(e);
3264
                            if (void 0 === r) return;
3265
                            this._impl.face_tracker_max_faces_set(r, t.int());
3266
                            break
3267
                        }
3268
                        case 25: {
3269
                            let e = t.type(),
3270
                                r = this._impl.face_mesh_create();
3271
                            this._face_mesh_by_instance.set(e, r);
3272
                            break
3273
                        }
3274
                        case 26: {
3275
                            let e = t.type(),
3276
                                r = this._face_mesh_by_instance.get(e);
3277
                            if (void 0 === r) return;
3278
                            this._impl.face_mesh_destroy(r), this._face_mesh_by_instance.delete(e);
3279
                            break
3280
                        }
3281
                        case 32: {
3282
                            let e = t.type(),
3283
                                r = t.faceLandmarkName(),
3284
                                i = this._impl.face_landmark_create(r);
3285
                            this._face_landmark_by_instance.set(e, i);
3286
                            break
3287
                        }
3288
                        case 33: {
3289
                            let e = t.type(),
3290
                                r = this._face_landmark_by_instance.get(e);
3291
                            if (void 0 === r) return;
3292
                            this._impl.face_landmark_destroy(r), this._face_landmark_by_instance.delete(e);
3293
                            break
3294
                        }
3295
                        case 16: {
3296
                            let e = t.type(),
3297
                                r = t.type(),
3298
                                i = this._pipeline_by_instance.get(r),
3299
                                a = this._impl.barcode_finder_create(i);
3300
                            this._barcode_finder_by_instance.set(e, a), this._pipeline_id_by_barcode_finder_id.set(e, r);
3301
                            break
3302
                        }
3303
                        case 17: {
3304
                            let e = t.type(),
3305
                                r = this._barcode_finder_by_instance.get(e);
3306
                            if (void 0 === r) return;
3307
                            this._impl.barcode_finder_destroy(r), this._barcode_finder_by_instance.delete(e);
3308
                            break
3309
                        }
3310
                        case 18: {
3311
                            let e = t.type(),
3312
                                r = this._barcode_finder_by_instance.get(e);
3313
                            if (void 0 === r) return;
3314
                            this._impl.barcode_finder_enabled_set(r, t.bool());
3315
                            break
3316
                        }
3317
                        case 19: {
3318
                            let e = t.type(),
3319
                                r = this._barcode_finder_by_instance.get(e);
3320
                            if (void 0 === r) return;
3321
                            this._impl.barcode_finder_formats_set(r, t.barcodeFormat());
3322
                            break
3323
                        }
3324
                        case 5: {
3325
                            let e = t.type(),
3326
                                r = t.type(),
3327
                                i = this._pipeline_by_instance.get(r),
3328
                                a = this._impl.instant_world_tracker_create(i);
3329
                            this._instant_world_tracker_by_instance.set(e, a), this._pipeline_id_by_instant_world_tracker_id.set(e, r);
3330
                            break
3331
                        }
3332
                        case 15: {
3333
                            let e = t.type(),
3334
                                r = this._instant_world_tracker_by_instance.get(e);
3335
                            if (void 0 === r) return;
3336
                            this._impl.instant_world_tracker_destroy(r), this._instant_world_tracker_by_instance.delete(e);
3337
                            break
3338
                        }
3339
                        case 6: {
3340
                            let e = t.type(),
3341
                                r = this._instant_world_tracker_by_instance.get(e);
3342
                            if (void 0 === r) return;
3343
                            this._impl.instant_world_tracker_enabled_set(r, t.bool());
3344
                            break
3345
                        }
3346
                        case 7: {
3347
                            let e = t.type(),
3348
                                r = this._instant_world_tracker_by_instance.get(e);
3349
                            if (void 0 === r) return;
3350
                            this._impl.instant_world_tracker_anchor_pose_set_from_camera_offset_raw(r, t.float(), t.float(), t.float(), t.instantTrackerTransformOrientation());
3351
                            break
3352
                        }
3353
                    }
3354
                }))
3355
            }
3356
            exploreState() {
3357
                for (let [e, t] of this._pipeline_by_instance) {
3358
                    let r = this._pipeline_id_by_pipeline_id.get(e);
3359
                    if (!r) continue;
3360
                    let i = this.serializersByPipelineId.get(r);
3361
                    i && (i.sendMessage(7, (r => {
3362
                        r.type(e), r.int(this._impl.pipeline_frame_number(t))
3363
                    })), i.sendMessage(6, (r => {
3364
                        r.type(e), r.cameraModel(this._impl.pipeline_camera_model(t))
3365
                    })), i.sendMessage(5, (r => {
3366
                        r.type(e), r.int(this._impl.pipeline_camera_frame_user_data(t))
3367
                    })), i.sendMessage(11, (r => {
3368
                        r.type(e), r.matrix4x4(this._impl.pipeline_camera_frame_camera_attitude(t))
3369
                    })), i.sendMessage(12, (r => {
3370
                        r.type(e), r.matrix4x4(this._impl.pipeline_camera_frame_device_attitude(t))
3371
                    })))
3372
                }
3373
                for (let [e, t] of this._camera_source_by_instance) {
3374
                    let t = this._pipeline_id_by_camera_source_id.get(e);
3375
                    t && this.serializersByPipelineId.get(t)
3376
                }
3377
                for (let [e, t] of this._sequence_source_by_instance) {
3378
                    let t = this._pipeline_id_by_sequence_source_id.get(e);
3379
                    t && this.serializersByPipelineId.get(t)
3380
                }
3381
                for (let [e, t] of this._image_tracker_by_instance) {
3382
                    let r = this._pipeline_id_by_image_tracker_id.get(e);
3383
                    if (!r) continue;
3384
                    let i = this.serializersByPipelineId.get(r);
3385
                    if (i) {
3386
                        i.sendMessage(19, (r => {
3387
                            r.type(e), r.int(this._impl.image_tracker_target_loaded_version(t))
3388
                        })), i.sendMessage(1, (r => {
3389
                            r.type(e), r.int(this._impl.image_tracker_anchor_count(t))
3390
                        }));
3391
                        for (let r = 0; r < this._impl.image_tracker_anchor_count(t); r++) i.sendMessage(2, (i => {
3392
                            i.type(e), i.int(r), i.string(this._impl.image_tracker_anchor_id(t, r))
3393
                        }));
3394
                        for (let r = 0; r < this._impl.image_tracker_anchor_count(t); r++) i.sendMessage(3, (i => {
3395
                            i.type(e), i.int(r), i.matrix4x4(this._impl.image_tracker_anchor_pose_raw(t, r))
3396
                        }))
3397
                    }
3398
                }
3399
                for (let [e, t] of this._face_tracker_by_instance) {
3400
                    let r = this._pipeline_id_by_face_tracker_id.get(e);
3401
                    if (!r) continue;
3402
                    let i = this.serializersByPipelineId.get(r);
3403
                    if (i) {
3404
                        i.sendMessage(18, (r => {
3405
                            r.type(e), r.int(this._impl.face_tracker_model_loaded_version(t))
3406
                        })), i.sendMessage(13, (r => {
3407
                            r.type(e), r.int(this._impl.face_tracker_anchor_count(t))
3408
                        }));
3409
                        for (let r = 0; r < this._impl.face_tracker_anchor_count(t); r++) i.sendMessage(14, (i => {
3410
                            i.type(e), i.int(r), i.string(this._impl.face_tracker_anchor_id(t, r))
3411
                        }));
3412
                        for (let r = 0; r < this._impl.face_tracker_anchor_count(t); r++) i.sendMessage(15, (i => {
3413
                            i.type(e), i.int(r), i.matrix4x4(this._impl.face_tracker_anchor_pose_raw(t, r))
3414
                        }));
3415
                        for (let r = 0; r < this._impl.face_tracker_anchor_count(t); r++) i.sendMessage(16, (i => {
3416
                            i.type(e), i.int(r), i.identityCoefficients(this._impl.face_tracker_anchor_identity_coefficients(t, r))
3417
                        }));
3418
                        for (let r = 0; r < this._impl.face_tracker_anchor_count(t); r++) i.sendMessage(17, (i => {
3419
                            i.type(e), i.int(r), i.expressionCoefficients(this._impl.face_tracker_anchor_expression_coefficients(t, r))
3420
                        }))
3421
                    }
3422
                }
3423
                for (let [e, t] of this._face_mesh_by_instance) {
3424
                    let t = this._pipeline_id_by_face_mesh_id.get(e);
3425
                    t && this.serializersByPipelineId.get(t)
3426
                }
3427
                for (let [e, t] of this._face_landmark_by_instance) {
3428
                    let t = this._pipeline_id_by_face_landmark_id.get(e);
3429
                    t && this.serializersByPipelineId.get(t)
3430
                }
3431
                for (let [e, t] of this._barcode_finder_by_instance) {
3432
                    let r = this._pipeline_id_by_barcode_finder_id.get(e);
3433
                    if (!r) continue;
3434
                    let i = this.serializersByPipelineId.get(r);
3435
                    if (i) {
3436
                        i.sendMessage(8, (r => {
3437
                            r.type(e), r.int(this._impl.barcode_finder_found_number(t))
3438
                        }));
3439
                        for (let r = 0; r < this._impl.barcode_finder_found_number(t); r++) i.sendMessage(9, (i => {
3440
                            i.type(e), i.int(r), i.string(this._impl.barcode_finder_found_text(t, r))
3441
                        }));
3442
                        for (let r = 0; r < this._impl.barcode_finder_found_number(t); r++) i.sendMessage(10, (i => {
3443
                            i.type(e), i.int(r), i.barcodeFormat(this._impl.barcode_finder_found_format(t, r))
3444
                        }))
3445
                    }
3446
                }
3447
                for (let [e, t] of this._instant_world_tracker_by_instance) {
3448
                    let r = this._pipeline_id_by_instant_world_tracker_id.get(e);
3449
                    if (!r) continue;
3450
                    let i = this.serializersByPipelineId.get(r);
3451
                    i && i.sendMessage(4, (r => {
3452
                        r.type(e), r.matrix4x4(this._impl.instant_world_tracker_anchor_pose_raw(t))
3453
                    }))
3454
                }
3455
            }
3456
        }
3457
        class o {
3458
            constructor() {
3459
                this._funcs = []
3460
            }
3461
            bind(e) {
3462
                this._funcs.push(e)
3463
            }
3464
            unbind(e) {
3465
                let t = this._funcs.indexOf(e);
3466
                t > -1 && this._funcs.splice(t, 1)
3467
            }
3468
            emit() {
3469
                for (var e = 0, t = this._funcs.length; e < t; e++) this._funcs[e]()
3470
            }
3471
        }
3472
        class s {
3473
            constructor() {
3474
                this._funcs = []
3475
            }
3476
            bind(e) {
3477
                this._funcs.push(e)
3478
            }
3479
            unbind(e) {
3480
                let t = this._funcs.indexOf(e);
3481
                t > -1 && this._funcs.splice(t, 1)
3482
            }
3483
            emit(e) {
3484
                for (var t = 0, r = this._funcs.length; t < r; t++) this._funcs[t](e)
3485
            }
3486
        }
3487
        var _, c, u, f, l, d, p = "undefined" != typeof Float32Array ? Float32Array : Array;
3488
​
3489
        function h() {
3490
            var e = new p(16);
3491
            return p != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e
3492
        }
3493
​
3494
        function m(e) {
3495
            return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
3496
        }
3497
        Math.random, Math.PI, Math.hypot || (Math.hypot = function() {
3498
                for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
3499
                return Math.sqrt(e)
3500
            }),
3501
            function(e) {
3502
                e[e.UNKNOWN = 131072] = "UNKNOWN", e[e.AZTEC = 1] = "AZTEC", e[e.CODABAR = 2] = "CODABAR", e[e.CODE_39 = 4] = "CODE_39", e[e.CODE_93 = 8] = "CODE_93", e[e.CODE_128 = 16] = "CODE_128", e[e.DATA_MATRIX = 32] = "DATA_MATRIX", e[e.EAN_8 = 64] = "EAN_8", e[e.EAN_13 = 128] = "EAN_13", e[e.ITF = 256] = "ITF", e[e.MAXICODE = 512] = "MAXICODE", e[e.PDF_417 = 1024] = "PDF_417", e[e.QR_CODE = 2048] = "QR_CODE", e[e.RSS_14 = 4096] = "RSS_14", e[e.RSS_EXPANDED = 8192] = "RSS_EXPANDED", e[e.UPC_A = 16384] = "UPC_A", e[e.UPC_E = 32768] = "UPC_E", e[e.UPC_EAN_EXTENSION = 65536] = "UPC_EAN_EXTENSION", e[e.ALL = 131071] = "ALL"
3503
            }(_ || (_ = {})),
3504
            function(e) {
3505
                e[e.EYE_LEFT = 0] = "EYE_LEFT", e[e.EYE_RIGHT = 1] = "EYE_RIGHT", e[e.EAR_LEFT = 2] = "EAR_LEFT", e[e.EAR_RIGHT = 3] = "EAR_RIGHT", e[e.NOSE_BRIDGE = 4] = "NOSE_BRIDGE", e[e.NOSE_TIP = 5] = "NOSE_TIP", e[e.NOSE_BASE = 6] = "NOSE_BASE", e[e.LIP_TOP = 7] = "LIP_TOP", e[e.LIP_BOTTOM = 8] = "LIP_BOTTOM", e[e.MOUTH_CENTER = 9] = "MOUTH_CENTER", e[e.CHIN = 10] = "CHIN", e[e.EYEBROW_LEFT = 11] = "EYEBROW_LEFT", e[e.EYEBROW_RIGHT = 12] = "EYEBROW_RIGHT"
3506
            }(c || (c = {})),
3507
            function(e) {
3508
                e[e.WORLD = 3] = "WORLD", e[e.MINUS_Z_AWAY_FROM_USER = 4] = "MINUS_Z_AWAY_FROM_USER", e[e.MINUS_Z_HEADING = 5] = "MINUS_Z_HEADING", e[e.UNCHANGED = 6] = "UNCHANGED"
3509
            }(u || (u = {})),
3510
            function(e) {
3511
                e[e.LOG_LEVEL_NONE = 0] = "LOG_LEVEL_NONE", e[e.LOG_LEVEL_ERROR = 1] = "LOG_LEVEL_ERROR", e[e.LOG_LEVEL_WARNING = 2] = "LOG_LEVEL_WARNING", e[e.LOG_LEVEL_VERBOSE = 3] = "LOG_LEVEL_VERBOSE"
3512
            }(f || (f = {})),
3513
            function(e) {
3514
                e[e.FRAME_PIXEL_FORMAT_I420 = 0] = "FRAME_PIXEL_FORMAT_I420", e[e.FRAME_PIXEL_FORMAT_I420A = 1] = "FRAME_PIXEL_FORMAT_I420A", e[e.FRAME_PIXEL_FORMAT_I422 = 2] = "FRAME_PIXEL_FORMAT_I422", e[e.FRAME_PIXEL_FORMAT_I444 = 3] = "FRAME_PIXEL_FORMAT_I444", e[e.FRAME_PIXEL_FORMAT_NV12 = 4] = "FRAME_PIXEL_FORMAT_NV12", e[e.FRAME_PIXEL_FORMAT_RGBA = 5] = "FRAME_PIXEL_FORMAT_RGBA", e[e.FRAME_PIXEL_FORMAT_BGRA = 6] = "FRAME_PIXEL_FORMAT_BGRA", e[e.FRAME_PIXEL_FORMAT_Y = 7] = "FRAME_PIXEL_FORMAT_Y"
3515
            }(l || (l = {})),
3516
            function(e) {
3517
                e[e.IMAGE_TRACKER_TYPE_PLANAR = 0] = "IMAGE_TRACKER_TYPE_PLANAR", e[e.IMAGE_TRACKER_TYPE_CYLINDRICAL = 1] = "IMAGE_TRACKER_TYPE_CYLINDRICAL", e[e.IMAGE_TRACKER_TYPE_CONICAL = 2] = "IMAGE_TRACKER_TYPE_CONICAL"
3518
            }(d || (d = {}));
3519
        const b = new Map;
3520
        class w {
3521
            constructor(e) {
3522
                this._gl = e, this._viewports = [], this._underlyingViewport = this._gl.viewport, this._viewports.push(this._gl.getParameter(this._gl.VIEWPORT)), this._gl.viewport = (e, t, r, i) => {
3523
                    this._viewports[this._viewports.length - 1] = [e, t, r, i], this._underlyingViewport.call(this._gl, e, t, r, i)
3524
                }
3525
            }
3526
            static get(e) {
3527
                let t = b.get(e);
3528
                return t || (t = new w(e), b.set(e, t)), t
3529
            }
3530
            push() {
3531
                this._viewports.push(this._viewports[this._viewports.length - 1])
3532
            }
3533
            pop() {
3534
                const e = this._viewports.pop(),
3535
                    t = this._viewports[this._viewports.length - 1];
3536
                e && e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] || this._underlyingViewport.call(this._gl, t[0], t[1], t[2], t[3])
3537
            }
3538
        }
3539
        var g, y = r(238);
3540
        ! function(e) {
3541
            e[e.OBJECT_URL = 0] = "OBJECT_URL", e[e.SRC_OBJECT = 1] = "SRC_OBJECT"
3542
        }(g || (g = {}));
3543
        let v = {
3544
            deviceMotionMutliplier: -1,
3545
            blacklisted: !1,
3546
            showGyroPermissionsWarningIfNecessary: !1,
3547
            showSafariPermissionsResetIfNecessary: !1,
3548
            requestHighFrameRate: !1,
3549
            videoWidth: 640,
3550
            videoHeight: 480,
3551
            dataWidth: 320,
3552
            dataHeight: 240,
3553
            videoElementInDOM: !1,
3554
            preferMediaStreamTrackProcessorCamera: !1,
3555
            preferImageBitmapCamera: !1,
3556
            ios164CameraSelection: !1
3557
        };
3558
        "undefined" != typeof window && (window.zeeProfile = v, window.location.href.indexOf("_mstppipeline") >= 0 && (console.log("Configuring for MSTP camera pipeline (if supported)"), v.preferMediaStreamTrackProcessorCamera = !0), window.location.href.indexOf("_imagebitmappipeline") >= 0 && (console.log("Configuring for ImageBitmap camera pipeline (if supported)"), v.preferImageBitmapCamera = !0));
3559
        let E = new y.UAParser,
3560
            A = (E.getOS().name || "unknown").toLowerCase(),
3561
            T = (E.getEngine().name || "unknown").toLowerCase();
3562
​
3563
        function x(e) {
3564
            let t = e.split(".");
3565
            if (t.length >= 2) {
3566
                const e = parseInt(t[0]),
3567
                    r = parseInt(t[1]);
3568
                (e < 11 || 11 === e && r < 3) && (v.blacklisted = !0), (e < 12 || 12 === e && r < 2) && (v.videoElementInDOM = !0), (12 === e && r >= 2 || e >= 13) && (v.showGyroPermissionsWarningIfNecessary = !0), e >= 13 && (v.showSafariPermissionsResetIfNecessary = !0), (e >= 12 && r > 1 || e >= 13) && navigator.mediaDevices && navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().frameRate && (v.requestHighFrameRate = !0, e < 14 && (v.videoHeight = 360, v.dataHeight = 180)), (16 === e && r >= 4 || e > 16) && (v.ios164CameraSelection = !0)
3569
            }
3570
        }
3571
​
3572
        function k(e, t, r) {
3573
            let i = e.createShader(t);
3574
            if (!i) throw new Error("Unable to create shader");
3575
            e.shaderSource(i, r), e.compileShader(i);
3576
            let a = e.getShaderInfoLog(i);
3577
            if (a && a.trim().length > 0) throw new Error("Shader compile error: " + a);
3578
            return i
3579
        }
3580
        "webkit" === T && "ios" !== A && (v.deviceMotionMutliplier = 1, "undefined" != typeof window && void 0 !== window.orientation && x("15.0")), "webkit" === T && "ios" === A && (v.deviceMotionMutliplier = 1, x(E.getOS().version || "15.0"));
3581
        class R {
3582
            constructor(e) {
3583
                this._gl = e, this._isPaused = !0, this._hadFrames = !1, this._isUserFacing = !1, this._cameraToScreenRotation = 0, this._isUploadFrame = !0, this._computedTransformRotation = -1, this._computedFrontCameraRotation = !1, this._cameraUvTransform = h(), this._framebufferWidth = 0, this._framebufferHeight = 0, this._framebufferId = null, this._renderTexture = null, this._isWebGL2 = !1, this._isWebGL2 = e.getParameter(e.VERSION).indexOf("WebGL 2") >= 0, this._isWebGL2 || (this._instancedArraysExtension = this._gl.getExtension("ANGLE_instanced_arrays"))
3584
            }
3585
            resetGLContext() {
3586
                this._framebufferId = null, this._renderTexture = null, this._vertexBuffer = void 0, this._indexBuffer = void 0, this._greyscaleShader = void 0
3587
            }
3588
            destroy() {
3589
                this.resetGLContext()
3590
            }
3591
            uploadFrame(e, t, r, i) {
3592
                let a = this._gl;
3593
                const n = w.get(a);
3594
                n.push();
3595
                const o = a.isEnabled(a.SCISSOR_TEST),
3596
                    s = a.isEnabled(a.DEPTH_TEST),
3597
                    _ = a.isEnabled(a.BLEND),
3598
                    c = a.isEnabled(a.CULL_FACE),
3599
                    u = a.isEnabled(a.STENCIL_TEST),
3600
                    f = a.getParameter(a.ACTIVE_TEXTURE),
3601
                    l = a.getParameter(a.UNPACK_FLIP_Y_WEBGL),
3602
                    d = a.getParameter(a.CURRENT_PROGRAM);
3603
                a.activeTexture(a.TEXTURE0);
3604
                const p = a.getParameter(a.TEXTURE_BINDING_2D),
3605
                    h = a.getParameter(a.FRAMEBUFFER_BINDING),
3606
                    m = a.getParameter(a.ARRAY_BUFFER_BINDING),
3607
                    b = a.getParameter(a.ELEMENT_ARRAY_BUFFER_BINDING);
3608
                a.disable(a.SCISSOR_TEST), a.disable(a.DEPTH_TEST), a.disable(a.BLEND), a.disable(a.CULL_FACE), a.disable(a.STENCIL_TEST), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1), a.bindTexture(a.TEXTURE_2D, e);
3609
                const g = a.RGBA,
3610
                    y = a.RGBA,
3611
                    E = a.UNSIGNED_BYTE;
3612
                a.texImage2D(a.TEXTURE_2D, 0, g, y, E, t);
3613
                let A = 0,
3614
                    T = 0;
3615
                "undefined" != typeof HTMLVideoElement && t instanceof HTMLVideoElement ? (A = t.videoWidth, T = t.videoHeight) : (A = t.width, T = t.height), T > A && (T = [A, A = T][0]), this._updateTransforms(r, i);
3616
                let x = this._getFramebuffer(a, v.dataWidth / 4, v.dataHeight),
3617
                    k = this._getVertexBuffer(a),
3618
                    R = this._getIndexBuffer(a),
3619
                    L = this._getGreyscaleShader(a);
3620
                const F = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_SIZE),
3621
                    z = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_TYPE),
3622
                    M = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_NORMALIZED),
3623
                    I = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_STRIDE),
3624
                    P = a.getVertexAttribOffset(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_POINTER),
3625
                    O = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_ENABLED),
3626
                    S = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
3627
                    B = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_SIZE),
3628
                    D = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_TYPE),
3629
                    C = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_NORMALIZED),
3630
                    U = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_STRIDE),
3631
                    V = a.getVertexAttribOffset(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_POINTER),
3632
                    N = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
3633
                    q = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_ENABLED);
3634
                let G = 0,
3635
                    W = 0;
3636
                this._isWebGL2 ? (G = a.getVertexAttrib(L.aVertexPositionLoc, a.VERTEX_ATTRIB_ARRAY_DIVISOR), W = a.getVertexAttrib(L.aTextureCoordLoc, a.VERTEX_ATTRIB_ARRAY_DIVISOR), a.vertexAttribDivisor(L.aVertexPositionLoc, 0), a.vertexAttribDivisor(L.aTextureCoordLoc, 0)) : this._instancedArraysExtension && (G = a.getVertexAttrib(L.aVertexPositionLoc, this._instancedArraysExtension.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE), W = a.getVertexAttrib(L.aTextureCoordLoc, this._instancedArraysExtension.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE), this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aVertexPositionLoc, 0), this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aTextureCoordLoc, 0)), a.bindFramebuffer(a.FRAMEBUFFER, x), a.viewport(0, 0, this._framebufferWidth, this._framebufferHeight), a.clear(a.COLOR_BUFFER_BIT), a.bindBuffer(a.ARRAY_BUFFER, k), a.vertexAttribPointer(L.aVertexPositionLoc, 2, a.FLOAT, !1, 16, 0), a.enableVertexAttribArray(L.aVertexPositionLoc), a.vertexAttribPointer(L.aTextureCoordLoc, 2, a.FLOAT, !1, 16, 8), a.enableVertexAttribArray(L.aTextureCoordLoc), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, R), a.useProgram(L.program), a.uniform1f(L.uTexWidthLoc, v.dataWidth), a.uniformMatrix4fv(L.uUvTransformLoc, !1, this._cameraUvTransform), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, e), a.uniform1i(L.uSamplerLoc, 0), a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0), a.bindBuffer(a.ARRAY_BUFFER, S), a.vertexAttribPointer(L.aVertexPositionLoc, F, z, M, I, P), a.bindBuffer(a.ARRAY_BUFFER, N), a.vertexAttribPointer(L.aTextureCoordLoc, B, D, C, U, V), a.bindBuffer(a.ARRAY_BUFFER, m), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, b), O || a.disableVertexAttribArray(L.aVertexPositionLoc), q || a.disableVertexAttribArray(L.aTextureCoordLoc), this._isWebGL2 ? (a.vertexAttribDivisor(L.aVertexPositionLoc, G), a.vertexAttribDivisor(L.aTextureCoordLoc, W)) : this._instancedArraysExtension && (this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aVertexPositionLoc, G), this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aTextureCoordLoc, W)), a.bindFramebuffer(a.FRAMEBUFFER, h), a.useProgram(d), a.bindTexture(a.TEXTURE_2D, p), a.activeTexture(f), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, l), n.pop(), _ && a.enable(a.BLEND), c && a.enable(a.CULL_FACE), s && a.enable(a.DEPTH_TEST), o && a.enable(a.SCISSOR_TEST), u && a.enable(a.STENCIL_TEST)
3637
            }
3638
            readFrame(e, t) {
3639
                let r = this._gl,
3640
                    i = new Uint8Array(t);
3641
                const a = r.getParameter(r.FRAMEBUFFER_BINDING);
3642
                let n = this._getFramebuffer(r, v.dataWidth / 4, v.dataHeight);
3643
                return r.bindFramebuffer(r.FRAMEBUFFER, n), r.readPixels(0, 0, this._framebufferWidth, this._framebufferHeight, r.RGBA, r.UNSIGNED_BYTE, i), r.bindFramebuffer(r.FRAMEBUFFER, a), {
3644
                    uvTransform: this._cameraUvTransform,
3645
                    data: t,
3646
                    texture: e,
3647
                    dataWidth: v.dataWidth,
3648
                    dataHeight: v.dataHeight,
3649
                    userFacing: this._computedFrontCameraRotation
3650
                }
3651
            }
3652
            _updateTransforms(e, t) {
3653
                e == this._computedTransformRotation && t == this._computedFrontCameraRotation || (this._computedTransformRotation = e, this._computedFrontCameraRotation = t, this._cameraUvTransform = this._getCameraUvTransform())
3654
            }
3655
            _getCameraUvTransform() {
3656
                switch (this._computedTransformRotation) {
3657
                    case 270:
3658
                        return new Float32Array([0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1]);
3659
                    case 180:
3660
                        return new Float32Array([-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1]);
3661
                    case 90:
3662
                        return new Float32Array([0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1])
3663
                }
3664
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
3665
            }
3666
            _getFramebuffer(e, t, r) {
3667
                if (this._framebufferWidth === t && this._framebufferHeight === r && this._framebufferId) return this._framebufferId;
3668
                if (this._framebufferId && (e.deleteFramebuffer(this._framebufferId), this._framebufferId = null), this._renderTexture && (e.deleteTexture(this._renderTexture), this._renderTexture = null), this._framebufferId = e.createFramebuffer(), !this._framebufferId) throw new Error("Unable to create framebuffer");
3669
                if (e.bindFramebuffer(e.FRAMEBUFFER, this._framebufferId), this._renderTexture = e.createTexture(), !this._renderTexture) throw new Error("Unable to create render texture");
3670
                e.activeTexture(e.TEXTURE0);
3671
                const i = e.getParameter(e.TEXTURE_BINDING_2D);
3672
                e.bindTexture(e.TEXTURE_2D, this._renderTexture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t, r, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameterf(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this._renderTexture, 0);
3673
                let a = e.checkFramebufferStatus(e.FRAMEBUFFER);
3674
                if (a !== e.FRAMEBUFFER_COMPLETE) throw new Error("Framebuffer not complete: " + a.toString());
3675
                return this._framebufferWidth = t, this._framebufferHeight = r, e.bindTexture(e.TEXTURE_2D, i), e.bindFramebuffer(e.FRAMEBUFFER, null), this._framebufferId
3676
            }
3677
            _getVertexBuffer(e) {
3678
                if (this._vertexBuffer) return this._vertexBuffer;
3679
                if (this._vertexBuffer = e.createBuffer(), !this._vertexBuffer) throw new Error("Unable to create vertex buffer");
3680
                e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
3681
                let t = new Float32Array([-1, -1, 0, 0, -1, 1, 0, 1, 1, 1, 1, 1, 1, -1, 1, 0]);
3682
                return e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), this._vertexBuffer
3683
            }
3684
            _getIndexBuffer(e) {
3685
                if (this._indexBuffer) return this._indexBuffer;
3686
                if (this._indexBuffer = e.createBuffer(), !this._indexBuffer) throw new Error("Unable to create index buffer");
3687
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
3688
                let t = new Uint16Array([0, 1, 2, 0, 2, 3]);
3689
                return e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, e.STATIC_DRAW), this._indexBuffer
3690
            }
3691
            _getGreyscaleShader(e) {
3692
                if (this._greyscaleShader) return this._greyscaleShader;
3693
                let t = e.createProgram();
3694
                if (!t) throw new Error("Unable to create program");
3695
                let r = k(e, e.VERTEX_SHADER, I),
3696
                    i = k(e, e.FRAGMENT_SHADER, P);
3697
                e.attachShader(t, r), e.attachShader(t, i),
3698
                    function(e, t) {
3699
                        e.linkProgram(t);
3700
                        let r = e.getProgramInfoLog(t);
3701
                        if (r && r.trim().length > 0) throw new Error("Unable to link: " + r)
3702
                    }(e, t);
3703
                let a = e.getUniformLocation(t, "uTexWidth");
3704
                if (!a) throw new Error("Unable to get uniform location uTexWidth");
3705
                let n = e.getUniformLocation(t, "uUvTransform");
3706
                if (!n) throw new Error("Unable to get uniform location uUvTransform");
3707
                let o = e.getUniformLocation(t, "uSampler");
3708
                if (!o) throw new Error("Unable to get uniform location uSampler");
3709
                return this._greyscaleShader = {
3710
                    program: t,
3711
                    aVertexPositionLoc: e.getAttribLocation(t, "aVertexPosition"),
3712
                    aTextureCoordLoc: e.getAttribLocation(t, "aTextureCoord"),
3713
                    uTexWidthLoc: a,
3714
                    uUvTransformLoc: n,
3715
                    uSamplerLoc: o
3716
                }, this._greyscaleShader
3717
            }
3718
        }
3719
        let L, F, z, M, I = "\n    attribute vec4 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    varying highp vec2 vTextureCoord1;\n    varying highp vec2 vTextureCoord2;\n    varying highp vec2 vTextureCoord3;\n    varying highp vec2 vTextureCoord4;\n\n    uniform float uTexWidth;\n\tuniform mat4 uUvTransform;\n\n    void main(void) {\n      highp vec2 offset1 = vec2(1.5 / uTexWidth, 0);\n      highp vec2 offset2 = vec2(0.5 / uTexWidth, 0);\n\n      gl_Position = aVertexPosition;\n      vTextureCoord1 = (uUvTransform * vec4(aTextureCoord - offset1, 0, 1)).xy;\n      vTextureCoord2 = (uUvTransform * vec4(aTextureCoord - offset2, 0, 1)).xy;\n      vTextureCoord3 = (uUvTransform * vec4(aTextureCoord + offset2, 0, 1)).xy;\n      vTextureCoord4 = (uUvTransform * vec4(aTextureCoord + offset1, 0, 1)).xy;\n    }\n",
3720
            P = "\n  varying highp vec2 vTextureCoord1;\n  varying highp vec2 vTextureCoord2;\n  varying highp vec2 vTextureCoord3;\n  varying highp vec2 vTextureCoord4;\n\n  uniform sampler2D uSampler;\n\n  const lowp vec3 colorWeights = vec3(77.0 / 256.0, 150.0 / 256.0, 29.0 / 256.0);\n\n  void main(void) {\n    lowp vec4 outpx;\n\n    outpx.r = dot(colorWeights, texture2D(uSampler, vTextureCoord1).xyz);\n    outpx.g = dot(colorWeights, texture2D(uSampler, vTextureCoord2).xyz);\n    outpx.b = dot(colorWeights, texture2D(uSampler, vTextureCoord3).xyz);\n    outpx.a = dot(colorWeights, texture2D(uSampler, vTextureCoord4).xyz);\n\n    gl_FragColor = outpx;\n  }\n";
3721
        var O = function(e, t, r, i) {
3722
            return new(r || (r = Promise))((function(a, n) {
3723
                function o(e) {
3724
                    try {
3725
                        _(i.next(e))
3726
                    } catch (e) {
3727
                        n(e)
3728
                    }
3729
                }
3730
​
3731
                function s(e) {
3732
                    try {
3733
                        _(i.throw(e))
3734
                    } catch (e) {
3735
                        n(e)
3736
                    }
3737
                }
3738
​
3739
                function _(e) {
3740
                    var t;
3741
                    e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
3742
                        e(t)
3743
                    }))).then(o, s)
3744
                }
3745
                _((i = i.apply(e, t || [])).next())
3746
            }))
3747
        };
3748
        let S = new class {
3749
                constructor() {
3750
                    this.onOutgoingMessage = new o, this.onIncomingMessage = new s, this._outgoingMessages = []
3751
                }
3752
                postIncomingMessage(e) {
3753
                    this.onIncomingMessage.emit(e)
3754
                }
3755
                postOutgoingMessage(e, t) {
3756
                    this._outgoingMessages.push({
3757
                        msg: e,
3758
                        transferables: t
3759
                    }), this.onOutgoingMessage.emit()
3760
                }
3761
                getOutgoingMessages() {
3762
                    let e = this._outgoingMessages;
3763
                    return this._outgoingMessages = [], e
3764
                }
3765
            },
3766
            B = 0;
3767
​
3768
        function D(e) {
3769
            return O(this, void 0, void 0, (function*() {
3770
                let r = t({
3771
                    locateFile: (t, r) => t.endsWith("zappar-cv.wasm") ? e : r + t,
3772
                    onRuntimeInitialized: () => {
3773
                        let e = function(e) {
3774
                                let t = e.cwrap("zappar_log_level", "number", []),
3775
                                    r = e.cwrap("zappar_log_level_set", null, ["number"]),
3776
                                    i = e.cwrap("zappar_analytics_project_id_set", null, ["string", "string"]),
3777
                                    a = e.cwrap("zappar_pipeline_create", "number", []),
3778
                                    n = e.cwrap("zappar_pipeline_destroy", null, ["number"]),
3779
                                    o = e.cwrap("zappar_pipeline_frame_update", null, ["number"]),
3780
                                    s = e.cwrap("zappar_pipeline_frame_number", "number", ["number"]),
3781
                                    _ = e.cwrap("zappar_pipeline_camera_model", "number", ["number"]),
3782
                                    c = e.cwrap("zappar_pipeline_camera_frame_user_data", "number", ["number"]),
3783
                                    u = e.cwrap("zappar_pipeline_camera_frame_submit", null, ["number", "number", "number", "number", "number", "number", "number", "number", "number"]),
3784
                                    f = e.cwrap("zappar_pipeline_camera_frame_submit_raw_pointer", null, ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]),
3785
                                    l = e.cwrap("zappar_pipeline_camera_frame_camera_attitude", "number", ["number"]),
3786
                                    d = e.cwrap("zappar_pipeline_camera_frame_device_attitude", "number", ["number"]),
3787
                                    p = e.cwrap("zappar_pipeline_motion_accelerometer_submit", null, ["number", "number", "number", "number", "number"]),
3788
                                    h = e.cwrap("zappar_pipeline_motion_rotation_rate_submit", null, ["number", "number", "number", "number", "number"]),
3789
                                    m = e.cwrap("zappar_pipeline_motion_attitude_submit", null, ["number", "number", "number", "number", "number"]),
3790
                                    b = e.cwrap("zappar_pipeline_motion_attitude_matrix_submit", null, ["number", "number"]),
3791
                                    w = e.cwrap("zappar_camera_source_create", "number", ["number", "string"]),
3792
                                    g = e.cwrap("zappar_camera_source_destroy", null, ["number"]),
3793
                                    y = e.cwrap("zappar_sequence_source_create", "number", ["number"]),
3794
                                    v = e.cwrap("zappar_sequence_source_destroy", null, ["number"]),
3795
                                    E = e.cwrap("zappar_image_tracker_create", "number", ["number"]),
3796
                                    A = e.cwrap("zappar_image_tracker_destroy", null, ["number"]),
3797
                                    T = e.cwrap("zappar_image_tracker_target_load_from_memory", null, ["number", "number", "number"]),
3798
                                    x = e.cwrap("zappar_image_tracker_target_loaded_version", "number", ["number"]),
3799
                                    k = e.cwrap("zappar_image_tracker_enabled", "number", ["number"]),
3800
                                    R = e.cwrap("zappar_image_tracker_enabled_set", null, ["number", "number"]),
3801
                                    L = e.cwrap("zappar_image_tracker_anchor_count", "number", ["number"]),
3802
                                    F = e.cwrap("zappar_image_tracker_anchor_id", "string", ["number", "number"]),
3803
                                    z = e.cwrap("zappar_image_tracker_anchor_pose_raw", "number", ["number", "number"]),
3804
                                    M = e.cwrap("zappar_face_tracker_create", "number", ["number"]),
3805
                                    I = e.cwrap("zappar_face_tracker_destroy", null, ["number"]),
3806
                                    P = e.cwrap("zappar_face_tracker_model_load_from_memory", null, ["number", "number", "number"]),
3807
                                    O = e.cwrap("zappar_face_tracker_model_loaded_version", "number", ["number"]),
3808
                                    S = e.cwrap("zappar_face_tracker_enabled_set", null, ["number", "number"]),
3809
                                    B = e.cwrap("zappar_face_tracker_enabled", "number", ["number"]),
3810
                                    D = e.cwrap("zappar_face_tracker_max_faces_set", null, ["number", "number"]),
3811
                                    C = e.cwrap("zappar_face_tracker_max_faces", "number", ["number"]),
3812
                                    U = e.cwrap("zappar_face_tracker_anchor_count", "number", ["number"]),
3813
                                    V = e.cwrap("zappar_face_tracker_anchor_id", "string", ["number", "number"]),
3814
                                    N = e.cwrap("zappar_face_tracker_anchor_pose_raw", "number", ["number", "number"]),
3815
                                    q = e.cwrap("zappar_face_tracker_anchor_identity_coefficients", "number", ["number", "number"]),
3816
                                    G = e.cwrap("zappar_face_tracker_anchor_expression_coefficients", "number", ["number", "number"]),
3817
                                    W = e.cwrap("zappar_face_mesh_create", "number", []),
3818
                                    H = e.cwrap("zappar_face_mesh_destroy", null, ["number"]),
3819
                                    Y = e.cwrap("zappar_face_landmark_create", "number", ["number"]),
3820
                                    X = e.cwrap("zappar_face_landmark_destroy", null, ["number"]),
3821
                                    Z = e.cwrap("zappar_barcode_finder_create", "number", ["number"]),
3822
                                    j = e.cwrap("zappar_barcode_finder_destroy", null, ["number"]),
3823
                                    K = e.cwrap("zappar_barcode_finder_enabled_set", null, ["number", "number"]),
3824
                                    J = e.cwrap("zappar_barcode_finder_enabled", "number", ["number"]),
3825
                                    $ = e.cwrap("zappar_barcode_finder_found_number", "number", ["number"]),
3826
                                    Q = e.cwrap("zappar_barcode_finder_found_text", "string", ["number", "number"]),
3827
                                    ee = e.cwrap("zappar_barcode_finder_found_format", "number", ["number", "number"]),
3828
                                    te = e.cwrap("zappar_barcode_finder_formats", "number", ["number"]),
3829
                                    re = e.cwrap("zappar_barcode_finder_formats_set", null, ["number", "number"]),
3830
                                    ie = e.cwrap("zappar_instant_world_tracker_create", "number", ["number"]),
3831
                                    ae = e.cwrap("zappar_instant_world_tracker_destroy", null, ["number"]),
3832
                                    ne = e.cwrap("zappar_instant_world_tracker_enabled_set", null, ["number", "number"]),
3833
                                    oe = e.cwrap("zappar_instant_world_tracker_enabled", "number", ["number"]),
3834
                                    se = e.cwrap("zappar_instant_world_tracker_anchor_pose_raw", "number", ["number"]),
3835
                                    _e = e.cwrap("zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw", null, ["number", "number", "number", "number", "number"]),
3836
                                    ce = 32,
3837
                                    ue = e._malloc(ce),
3838
                                    fe = (e._malloc(64), new Map),
3839
                                    le = (t, r) => {
3840
                                        let i = fe.get(t);
3841
                                        return (!i || i[0] < r) && (i && e._free(i[1]), i = [r, e._malloc(r)], fe.set(t, i)), i[1]
3842
                                    };
3843
                                return {
3844
                                    log_level: () => t(),
3845
                                    log_level_set: e => r(e),
3846
                                    analytics_project_id_set: (e, t) => i(e, t),
3847
                                    pipeline_create: () => a(),
3848
                                    pipeline_destroy: () => {
3849
                                        n()
3850
                                    },
3851
                                    pipeline_frame_update: e => o(e),
3852
                                    pipeline_frame_number: e => s(e),
3853
                                    pipeline_camera_model: t => {
3854
                                        let r = _(t),
3855
                                            i = new Float32Array(6);
3856
                                        return i.set(e.HEAPF32.subarray(r / 4, 6 + r / 4)), r = i, r
3857
                                    },
3858
                                    pipeline_camera_frame_user_data: e => c(e),
3859
                                    pipeline_camera_frame_submit: (t, r, i, a, n, o, s, _) => {
3860
                                        ce < r.byteLength && (e._free(ue), ce = r.byteLength, ue = e._malloc(ce));
3861
                                        let c = ue,
3862
                                            f = r.byteLength;
3863
                                        e.HEAPU8.set(new Uint8Array(r), ue);
3864
                                        let l = i,
3865
                                            d = a,
3866
                                            p = n,
3867
                                            h = le(4, o.byteLength);
3868
                                        e.HEAPF32.set(o, h / 4);
3869
                                        let m = le(5, s.byteLength);
3870
                                        return e.HEAPF32.set(s, m / 4), u(t, c, f, l, d, p, h, m, _ ? 1 : 0)
3871
                                    },
3872
                                    pipeline_camera_frame_submit_raw_pointer: (t, r, i, a, n, o, s, _, c, u, l) => {
3873
                                        let d = r,
3874
                                            p = i,
3875
                                            h = a,
3876
                                            m = n,
3877
                                            b = o,
3878
                                            w = s,
3879
                                            g = le(6, _.byteLength);
3880
                                        e.HEAPF32.set(_, g / 4);
3881
                                        let y = c,
3882
                                            v = le(8, u.byteLength);
3883
                                        return e.HEAPF32.set(u, v / 4), f(t, d, p, h, m, b, w, g, y, v, l ? 1 : 0)
3884
                                    },
3885
                                    pipeline_camera_frame_camera_attitude: t => {
3886
                                        let r = l(t),
3887
                                            i = new Float32Array(16);
3888
                                        return i.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), r = i, r
3889
                                    },
3890
                                    pipeline_camera_frame_device_attitude: t => {
3891
                                        let r = d(t),
3892
                                            i = new Float32Array(16);
3893
                                        return i.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), r = i, r
3894
                                    },
3895
                                    pipeline_motion_accelerometer_submit: (e, t, r, i, a) => p(e, t, r, i, a),
3896
                                    pipeline_motion_rotation_rate_submit: (e, t, r, i, a) => h(e, t, r, i, a),
3897
                                    pipeline_motion_attitude_submit: (e, t, r, i, a) => m(e, t, r, i, a),
3898
                                    pipeline_motion_attitude_matrix_submit: (t, r) => {
3899
                                        let i = le(0, r.byteLength);
3900
                                        return e.HEAPF32.set(r, i / 4), b(t, i)
3901
                                    },
3902
                                    camera_source_create: (e, t) => w(e, t),
3903
                                    camera_source_destroy: () => {
3904
                                        g()
3905
                                    },
3906
                                    sequence_source_create: e => y(e),
3907
                                    sequence_source_destroy: () => {
3908
                                        v()
3909
                                    },
3910
                                    image_tracker_create: e => E(e),
3911
                                    image_tracker_destroy: () => {
3912
                                        A()
3913
                                    },
3914
                                    image_tracker_target_load_from_memory: (t, r) => {
3915
                                        ce < r.byteLength && (e._free(ue), ce = r.byteLength, ue = e._malloc(ce));
3916
                                        let i = ue,
3917
                                            a = r.byteLength;
3918
                                        return e.HEAPU8.set(new Uint8Array(r), ue), T(t, i, a)
3919
                                    },
3920
                                    image_tracker_target_loaded_version: e => x(e),
3921
                                    image_tracker_enabled: e => {
3922
                                        let t = k(e);
3923
                                        return t = 1 === t, t
3924
                                    },
3925
                                    image_tracker_enabled_set: (e, t) => R(e, t ? 1 : 0),
3926
                                    image_tracker_anchor_count: e => L(e),
3927
                                    image_tracker_anchor_id: (e, t) => F(e, t),
3928
                                    image_tracker_anchor_pose_raw: (t, r) => {
3929
                                        let i = z(t, r),
3930
                                            a = new Float32Array(16);
3931
                                        return a.set(e.HEAPF32.subarray(i / 4, 16 + i / 4)), i = a, i
3932
                                    },
3933
                                    face_tracker_create: e => M(e),
3934
                                    face_tracker_destroy: () => {
3935
                                        I()
3936
                                    },
3937
                                    face_tracker_model_load_from_memory: (t, r) => {
3938
                                        ce < r.byteLength && (e._free(ue), ce = r.byteLength, ue = e._malloc(ce));
3939
                                        let i = ue,
3940
                                            a = r.byteLength;
3941
                                        return e.HEAPU8.set(new Uint8Array(r), ue), P(t, i, a)
3942
                                    },
3943
                                    face_tracker_model_loaded_version: e => O(e),
3944
                                    face_tracker_enabled_set: (e, t) => S(e, t ? 1 : 0),
3945
                                    face_tracker_enabled: e => {
3946
                                        let t = B(e);
3947
                                        return t = 1 === t, t
3948
                                    },
3949
                                    face_tracker_max_faces_set: (e, t) => D(e, t),
3950
                                    face_tracker_max_faces: e => C(e),
3951
                                    face_tracker_anchor_count: e => U(e),
3952
                                    face_tracker_anchor_id: (e, t) => V(e, t),
3953
                                    face_tracker_anchor_pose_raw: (t, r) => {
3954
                                        let i = N(t, r),
3955
                                            a = new Float32Array(16);
3956
                                        return a.set(e.HEAPF32.subarray(i / 4, 16 + i / 4)), i = a, i
3957
                                    },
3958
                                    face_tracker_anchor_identity_coefficients: (t, r) => {
3959
                                        let i = q(t, r),
3960
                                            a = new Float32Array(50);
3961
                                        return a.set(e.HEAPF32.subarray(i / 4, 50 + i / 4)), i = a, i
3962
                                    },
3963
                                    face_tracker_anchor_expression_coefficients: (t, r) => {
3964
                                        let i = G(t, r),
3965
                                            a = new Float32Array(29);
3966
                                        return a.set(e.HEAPF32.subarray(i / 4, 29 + i / 4)), i = a, i
3967
                                    },
3968
                                    face_mesh_create: () => W(),
3969
                                    face_mesh_destroy: () => {
3970
                                        H()
3971
                                    },
3972
                                    face_landmark_create: e => Y(e),
3973
                                    face_landmark_destroy: () => {
3974
                                        X()
3975
                                    },
3976
                                    barcode_finder_create: e => Z(e),
3977
                                    barcode_finder_destroy: () => {
3978
                                        j()
3979
                                    },
3980
                                    barcode_finder_enabled_set: (e, t) => K(e, t ? 1 : 0),
3981
                                    barcode_finder_enabled: e => {
3982
                                        let t = J(e);
3983
                                        return t = 1 === t, t
3984
                                    },
3985
                                    barcode_finder_found_number: e => $(e),
3986
                                    barcode_finder_found_text: (e, t) => Q(e, t),
3987
                                    barcode_finder_found_format: (e, t) => ee(e, t),
3988
                                    barcode_finder_formats: e => te(e),
3989
                                    barcode_finder_formats_set: (e, t) => re(e, t),
3990
                                    instant_world_tracker_create: e => ie(e),
3991
                                    instant_world_tracker_destroy: () => {
3992
                                        ae()
3993
                                    },
3994
                                    instant_world_tracker_enabled_set: (e, t) => ne(e, t ? 1 : 0),
3995
                                    instant_world_tracker_enabled: e => {
3996
                                        let t = oe(e);
3997
                                        return t = 1 === t, t
3998
                                    },
3999
                                    instant_world_tracker_anchor_pose_raw: t => {
4000
                                        let r = se(t),
4001
                                            i = new Float32Array(16);
4002
                                        return i.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), r = i, r
4003
                                    },
4004
                                    instant_world_tracker_anchor_pose_set_from_camera_offset_raw: (e, t, r, i, a) => _e(e, t, r, i, a)
4005
                                }
4006
                            }(r),
4007
                            t = new n(e, ((e, t) => {
4008
                                S.postOutgoingMessage({
4009
                                    p: e,
4010
                                    t: "zappar",
4011
                                    d: t
4012
                                }, [t])
4013
                            }));
4014
                        S.postOutgoingMessage("loaded", []), S.onIncomingMessage.bind((i => {
4015
                            var a;
4016
                            switch (i.t) {
4017
                                case "zappar":
4018
                                    t.processBuffer(i.d), S.postOutgoingMessage({
4019
                                        t: "buf",
4020
                                        d: i.d
4021
                                    }, [i.d]);
4022
                                    break;
4023
                                case "buf":
4024
                                    null === (a = t.serializersByPipelineId.get(i.p)) || void 0 === a || a.bufferReturn(i.d);
4025
                                    break;
4026
                                case "cameraFrameC2S": {
4027
                                    let r, a = i,
4028
                                        n = t._pipeline_by_instance.get(a.p);
4029
                                    n && (e.pipeline_camera_frame_submit(n, a.d, a.width, a.height, a.token, a.c2d, a.cm, a.userFacing), e.pipeline_frame_update(n), r = e.pipeline_camera_frame_device_attitude(n), t.exploreState());
4030
                                    let o = {
4031
                                        token: a.token,
4032
                                        d: a.d,
4033
                                        p: a.p,
4034
                                        t: "cameraFrameRecycleS2C",
4035
                                        att: r
4036
                                    };
4037
                                    S.postOutgoingMessage(o, [a.d]);
4038
                                    break
4039
                                }
4040
                                case "streamC2S": {
4041
                                    let a = i;
4042
                                    ! function(e, t, r, i, a, n, o) {
4043
                                        O(this, void 0, void 0, (function*() {
4044
                                            const s = yield r.getReader();
4045
                                            for (;;) {
4046
                                                let r = yield s.read();
4047
                                                if (r.done) return void console.log("Stream done");
4048
                                                let u = r.value,
4049
                                                    f = u.allocationSize();
4050
                                                f > U && (C > 0 && e._free(C), C = e._malloc(f), U = f), yield u.copyTo(e.HEAPU8.subarray(C, C + U));
4051
                                                let l = V;
4052
                                                V++;
4053
                                                const d = u.visibleRect.width,
4054
                                                    p = u.visibleRect.height;
4055
                                                let h, b = d,
4056
                                                    w = p;
4057
                                                switch (B) {
4058
                                                    case 270:
4059
                                                        h = new Float32Array([0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1]), b = p, w = d;
4060
                                                        break;
4061
                                                    case 180:
4062
                                                        h = new Float32Array([-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1]);
4063
                                                        break;
4064
                                                    case 90:
4065
                                                        h = new Float32Array([0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1]), b = p, w = d;
4066
                                                        break;
4067
                                                    default:
4068
                                                        h = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
4069
                                                }
4070
                                                let g = u.clone();
4071
                                                a ? (c = [-1, 1, -1], (_ = N)[0] = c[0], _[1] = 0, _[2] = 0, _[3] = 0, _[4] = 0, _[5] = c[1], _[6] = 0, _[7] = 0, _[8] = 0, _[9] = 0, _[10] = c[2], _[11] = 0, _[12] = 0, _[13] = 0, _[14] = 0, _[15] = 1) : m(N);
4072
                                                let y = 300 * v.dataWidth / 320;
4073
                                                q[0] = y, q[1] = y, q[2] = .5 * v.dataWidth, q[3] = .5 * v.dataHeight;
4074
                                                const E = {
4075
                                                    token: l,
4076
                                                    d: g,
4077
                                                    p: i,
4078
                                                    t: "videoFrameS2C",
4079
                                                    userFacing: a,
4080
                                                    uvTransform: h,
4081
                                                    w: b,
4082
                                                    h: w,
4083
                                                    cameraToDevice: N,
4084
                                                    cameraModel: q,
4085
                                                    source: o
4086
                                                };
4087
                                                S.postOutgoingMessage(E, [E.d, E.uvTransform.buffer]);
4088
                                                const A = n._pipeline_by_instance.get(i);
4089
                                                A && (t.pipeline_camera_frame_submit_raw_pointer(A, C, f, G(u.format), d, p, l, N, B, q, a), t.pipeline_frame_update(A), n.exploreState()), u.close()
4090
                                            }
4091
                                            var _, c
4092
                                        }))
4093
                                    }(r, e, a.s, a.p, a.userFacing, t, a.source);
4094
                                    break
4095
                                }
4096
                                case "cameraToScreenC2S":
4097
                                    B = i.r;
4098
                                    break;
4099
                                case "imageBitmapC2S":
4100
                                    ! function(e, t, r, i) {
4101
                                        const [a, n] = function() {
4102
                                            if (!z || !M) {
4103
                                                const e = new OffscreenCanvas(1, 1);
4104
                                                if (M = e.getContext("webgl"), !M) throw new Error("Unable to get offscreen GL context");
4105
                                                z = new R(M)
4106
                                            }
4107
                                            return [z, M]
4108
                                        }();
4109
                                        if (F || (F = n.createTexture(), n.bindTexture(n.TEXTURE_2D, F), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR)), !F) return;
4110
                                        (!L || L.byteLength < v.dataWidth * v.dataHeight) && (console.log("Generating pixel buffer", v.dataWidth * v.dataHeight), L = new ArrayBuffer(v.dataWidth * v.dataHeight)), a.uploadFrame(F, e.i, e.r, e.userFacing);
4111
                                        let o = a.readFrame(F, L),
4112
                                            s = {
4113
                                                t: "imageBitmapS2C",
4114
                                                dataWidth: o.dataWidth,
4115
                                                dataHeight: o.dataHeight,
4116
                                                frame: e.i,
4117
                                                userFacing: o.userFacing,
4118
                                                uvTransform: o.uvTransform || h(),
4119
                                                tokenId: e.tokenId,
4120
                                                p: e.p
4121
                                            };
4122
                                        i.postOutgoingMessage(s, [e.i]);
4123
                                        let _ = r._pipeline_by_instance.get(e.p);
4124
                                        _ && (t.pipeline_camera_frame_submit(_, L, o.dataWidth, o.dataHeight, e.tokenId, e.cameraToDevice, e.cameraModel, o.userFacing), t.pipeline_frame_update(_), r.exploreState())
4125
                                    }(i, e, t, S)
4126
                            }
4127
                        }))
4128
                    }
4129
                })
4130
            }))
4131
        }
4132
        let C = 0,
4133
            U = 0,
4134
            V = 1;
4135
        const N = h(),
4136
            q = new Float32Array([300, 300, 160, 120, 0, 0]);
4137
​
4138
        function G(e) {
4139
            switch (e) {
4140
                case "I420":
4141
                    return l.FRAME_PIXEL_FORMAT_I420;
4142
                case "I420A":
4143
                    return l.FRAME_PIXEL_FORMAT_I420A;
4144
                case "I422":
4145
                    return l.FRAME_PIXEL_FORMAT_I422;
4146
                case "I444":
4147
                    return l.FRAME_PIXEL_FORMAT_I444;
4148
                case "NV12":
4149
                    return l.FRAME_PIXEL_FORMAT_NV12;
4150
                case "RGBA":
4151
                case "RGBX":
4152
                    return l.FRAME_PIXEL_FORMAT_RGBA;
4153
                case "BGRA":
4154
                case "BGRX":
4155
                    return l.FRAME_PIXEL_FORMAT_BGRA
4156
            }
4157
            return l.FRAME_PIXEL_FORMAT_Y
4158
        }
4159
        const W = self;
4160
        S.onOutgoingMessage.bind((() => {
4161
            let e = S.getOutgoingMessages();
4162
            for (let t of e) W.postMessage(t.msg, t.transferables)
4163
        }));
4164
        let H = e => {
4165
            e && e.data && "wasm" === e.data.t && (D(location.href.startsWith("blob") ? e.data.url : new URL(r(751), r.b).toString()), W.removeEventListener("message", H))
4166
        };
4167
        W.addEventListener("message", H), W.addEventListener("message", (e => {
4168
            S.postIncomingMessage(e.data)
4169
        }))
4170
    })()
4171
})();
