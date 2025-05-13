function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.bom.webfonts.Validator": {},
      "qx.bom.webfonts.WebFont": {},
      "qx.util.ResourceManager": {},
      "qx.lang.Array": {},
      "qx.Promise": {},
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.Stylesheet": {},
      "qx.bom.client.OperatingSystem": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        },
        "engine.version": {
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "className": "qx.bom.client.Browser"
        },
        "browser.name": {
          "className": "qx.bom.client.Browser"
        },
        "browser.version": {
          "className": "qx.bom.client.Browser"
        },
        "os.name": {
          "className": "qx.bom.client.OperatingSystem"
        },
        "os.version": {
          "className": "qx.bom.client.OperatingSystem"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
  ************************************************************************ */

  /**
   * Loads web fonts
   */
  qx.Class.define("qx.bom.webfonts.WebFontLoader", {
    extend: qx.core.Object,
    construct: function construct(fontFamily) {
      qx.core.Object.constructor.call(this);
      this.setFontFamily(fontFamily);
      this.__validators__P_213_0 = {};
    },
    properties: {
      /** The font name that this font is known by */
      fontFamily: {
        check: "String"
      },
      /** The fontFaces which need to be defined */
      fontFaces: {
        nullable: true,
        apply: "_applyFontFaces"
      },
      /** CSS urls or paths which need to be loaded */
      css: {
        nullable: true,
        check: "Array"
      },
      /**
       * Characters that are used to test if the font has loaded properly. These
       * default to "WEei" in `qx.bom.webfont.Validator` and can be overridden
       * for certain cases like icon fonts that do not provide the predefined
       * characters.
       */
      comparisonString: {
        check: "String",
        init: null,
        nullable: true
      },
      /**
       * Version identifier that is appended to the URL to be loaded. Fonts
       * that are defined thru themes may be managed by the resource manager.
       * In this case updated fonts persist due to aggressive fontface caching
       * of some browsers. To get around this, set the `version` property to
       * the version of your font. It will be appended to the CSS URL and forces
       * the browser to re-validate.
       *
       * The version needs to be URL friendly, so only characters, numbers,
       * dash and dots are allowed here.
       */
      version: {
        check: function check(value) {
          return value === null || typeof value === "string" && /^[a-zA-Z0-9.-]+$/.test(value);
        },
        init: null,
        nullable: true
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __fontFacesQueue__P_213_1: null,
      __fontFacesCreatedPromise__P_213_2: null,
      _validators: null,
      getValidator: function getValidator(fontWeight, fontStyle) {
        fontWeight = fontWeight || "normal";
        fontStyle = fontStyle || "normal";
        var id = fontWeight + "::" + fontStyle;
        var validator = this.__validators__P_213_0[id];
        if (!validator) {
          validator = this.__validators__P_213_0[id] = new qx.bom.webfonts.Validator(this.getFontFamily(), this.getComparisonString(), fontWeight, fontStyle);
          validator.setTimeout(qx.bom.webfonts.WebFont.VALIDATION_TIMEOUT);
          validator.validate();
        }
        return validator;
      },
      /**
       * Called to load the font details into the browser
       */
      load: function load() {
        var _this = this;
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var fontFaces;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                (_this.getCss() || []).forEach(function (url) {
                  if (!url.match(/^https?:/)) {
                    url = qx.util.ResourceManager.getInstance().toUri(url);
                  }
                  if (_this.getVersion()) {
                    url += url.indexOf("?") < 0 ? "?" : "&";
                    url += _this.getVersion();
                  }
                  qx.bom.webfonts.WebFontLoader.__loadStylesheet__P_213_3(url);
                });
                fontFaces = _this.getFontFaces();
                if (fontFaces) {
                  fontFaces.forEach(function (fontFace) {
                    if (fontFace.paths) {
                      fontFace.paths = fontFace.paths.map(function (path) {
                        if (!path.match(/^https?:/)) {
                          path = qx.util.ResourceManager.getInstance().toUri(path);
                        }
                        if (_this.getVersion()) {
                          path += path.indexOf("?") < 0 ? "?" : "&";
                          path += _this.getVersion();
                        }
                        return path;
                      });
                    }
                  });
                  _this.__fontFacesQueue__P_213_1 = qx.lang.Array.clone(fontFaces);
                  _this.__fontFacesCreatedPromise__P_213_2 = new qx.Promise();
                }
                _this.__dequeueFontFaces__P_213_4();
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      promiseLoaded: function promiseLoaded() {
        var _this2 = this;
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.__fontFacesCreatedPromise__P_213_2;
              case 2:
                return _context2.abrupt("return", _context2.sent);
              case 3:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      /**
       * Adds the font faces in __fontFacesQueue
       */
      __dequeueFontFaces__P_213_4: function __dequeueFontFaces__P_213_4() {
        var _this3 = this;
        if (this.__fontFacesQueue__P_213_1 == null) {
          return;
        }
        var fontFace = this.__fontFacesQueue__P_213_1.pop();
        this.__addFontFace__P_213_5(fontFace);
        if (this.__fontFacesQueue__P_213_1.length == 0) {
          this.__fontFacesQueue__P_213_1 = null;
          this.__fontFacesCreatedPromise__P_213_2.resolve(true);
        }
        if (qx.core.Environment.get("engine.name") == "mshtml" && (parseInt(qx.core.Environment.get("engine.version")) < 9 || qx.core.Environment.get("browser.documentmode") < 9)) {
          // old IEs need a break in between adding @font-face rules
          setTimeout(function () {
            return _this3.__dequeueFontFaces__P_213_4();
          }, 100);
        } else {
          this.__dequeueFontFaces__P_213_4();
        }
      },
      /**
       * Adds a font face definition to the browser
       *
       * @param {*} fontFace - POJO of from the array in Manifest.json
       * @returns
       */
      __addFontFace__P_213_5: function __addFontFace__P_213_5(fontFace) {
        var fontFamily = fontFace.fontFamily || this.getFontFamily();
        var fontLookupKey = qx.bom.webfonts.WebFontLoader.createFontLookupKey(fontFamily, fontFace.fontWeight || "normal", fontFace.fontStyle || "normal");
        if (qx.bom.webfonts.WebFontLoader.__addedFontFaces__P_213_6[fontLookupKey]) {
          return;
        }
        if (!qx.bom.webfonts.WebFontLoader.__styleSheet__P_213_7) {
          var _styleSheet = qx.bom.Stylesheet.createElement();
          qx.bom.webfonts.WebFontLoader.__styleSheet__P_213_7 = _styleSheet;
          {
            _styleSheet.ownerNode.setAttribute("data-qx-created-by", qx.bom.webfonts.WebFontLoader.classname);
            _styleSheet.ownerNode.$$qxObject = this;
          }
        }
        var sourcesMap = {};
        var MATCH_FORMAT = new RegExp(".(" + qx.bom.webfonts.WebFontLoader.getPreferredFormats().join("|") + ")");

        /*
         * When compiling a `@font-face` rule, note that the first "src:" must never specify a format
         * and that EOT must go first if there is one
         */

        var fontFaceSrcRules = [];
        for (var i = 0; i < fontFace.paths.length; i++) {
          var match = MATCH_FORMAT.exec(fontFace.paths[i]);
          if (!match) {
            continue;
          }
          var fontFormat = match[1];
          var url = fontFace.paths[i];
          if (this.getVersion()) {
            url += "?" + this.getVersion();
          }
          fontFaceSrcRules.push({
            url: url,
            format: fontFormat
          });
          if (fontFormat == "eot") {
            fontFaceSrcRules.push({
              url: url + "?#iefix'",
              format: "embedded-opentype"
            });
          }
        }
        fontFaceSrcRules = fontFaceSrcRules.sort(function (a, b) {
          a.fontFormat == "embedded-opentype" ? -1 : 0;
        });
        var strSources = "src: ";
        for (var _i = 0; _i < fontFaceSrcRules.length; _i++) {
          if (_i > 0) {
            strSources += ", ";
          }
          strSources += "url('" + new URL(fontFaceSrcRules[_i].url, document.baseURI).href + "')";
          if (_i > 0) {
            strSources += " format('" + fontFaceSrcRules[_i].format + "')";
          }
        }
        strSources += ";\n";
        var rule = "font-family: " + fontFamily + ";\n";
        rule += strSources + "\n";
        rule += "font-style: " + (fontFace.fontStyle || "normal") + ";\n";
        rule += "font-weight: " + (fontFace.fontWeight || "normal") + ";\n";
        rule = "@font-face {\n" + rule + "}\n";
        var styleSheet = qx.bom.webfonts.WebFontLoader.__styleSheet__P_213_7;
        try {
          if (qx.core.Environment.get("browser.name") == "ie" && qx.core.Environment.get("browser.documentmode") < 9) {
            var cssText = qx.bom.webfonts.WebFontLoader.__fixCssText__P_213_8(styleSheet.cssText);
            cssText += rule;
            styleSheet.cssText = cssText;
          } else {
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
          }
        } catch (ex) {
          {
            this.warn("Error while adding @font-face rule:", ex.message);
            return;
          }
        }
        qx.bom.webfonts.WebFontLoader.__addedFontFaces__P_213_6[fontLookupKey] = true;
      },
      // property apply
      _applyFontFaces: function _applyFontFaces(fontFaces, old) {
        var families = [];
        for (var i = 0, l = fontFaces.length; i < l; i++) {
          var fontFace = fontFaces[i];
          var familyName = this._quoteFontFamily(fontFace.family || this.getFontFamily());
          if (families.indexOf(familyName) < 0) {
            families.push(familyName);
          }
        }
      },
      /**
       * Makes sure font-family names containing spaces are properly quoted
       *
       * @param familyName {String} A font-family CSS value
       * @return {String} The quoted family name
       */
      _quoteFontFamily: function _quoteFontFamily(familyName) {
        return familyName.replace(/["']/g, "");
      }
    },
    statics: {
      /**
       * List of known font definition formats (i.e. file extensions). Used to
       * identify the type of each font file configured for a web font.
       */
      FONT_FORMATS: ["eot", "woff2", "woff", "ttf", "svg"],
      /**
       * Timeout (in ms) to wait before deciding that a web font was not loaded.
       */
      VALIDATION_TIMEOUT: 5000,
      /** @type{String[]} array of supported font formats, most preferred first */
      __preferredFormats__P_213_9: null,
      /** */
      __loadedStylesheets__P_213_10: {},
      __addedFontFaces__P_213_6: {},
      /** Loader instances indexed by font family name */
      __loaders__P_213_11: {},
      /**
       * Gets/creates a loader
       *
       * @param {String} name font family name
       * @param {Boolean?} create whether to create one if one does not exist (default to false)
       * @returns
       */
      getLoader: function getLoader(name, create) {
        var loader = qx.bom.webfonts.WebFontLoader.__loaders__P_213_11[name];
        if (!loader && create) {
          loader = qx.bom.webfonts.WebFontLoader.__loaders__P_213_11[name] = new qx.bom.webfonts.WebFontLoader(name);
        }
        return loader;
      },
      /**
       * Adds a stylesheet, once per url
       *
       * @param {String} url
       */
      __loadStylesheet__P_213_3: function __loadStylesheet__P_213_3(url) {
        if (qx.bom.webfonts.WebFontLoader.__loadedStylesheets__P_213_10[url]) {
          return;
        }
        qx.bom.Stylesheet.includeFile(url);
        qx.bom.webfonts.WebFontLoader.__loadedStylesheets__P_213_10[url] = true;
      },
      /**
       * Creates a lookup key to index the created fonts.
       * @param familyName {String} font-family name
       * @param fontWeight {String} the font-weight.
       * @param fontStyle {String} the font-style.
       * @return {string} the font lookup key
       */
      createFontLookupKey: function createFontLookupKey(familyName, fontWeight, fontStyle) {
        var lookupKey = familyName + "_" + (fontWeight ? fontWeight : "normal") + "_" + (fontStyle ? fontStyle : "normal");
        return lookupKey;
      },
      /**
       * Uses a naive regExp match to determine the format of each defined source
       * file for a webFont. Returns a map with the format names as keys and the
       * corresponding source URLs as values.
       *
       * @param sources {String[]} Array of source URLs
       * @return {Map} Map of formats and URLs
       */
      __getSourcesMap__P_213_12: function __getSourcesMap__P_213_12(sources) {
        var formats = qx.bom.webfonts.WebFontLoader.FONT_FORMATS;
        var sourcesMap = {};
        var reg = new RegExp(".(" + formats.join("|") + ")");
        for (var i = 0, l = sources.length; i < l; i++) {
          var match = reg.exec(sources[i]);
          if (match) {
            var type = match[1];
            sourcesMap[type] = sources[i];
          }
        }
        return sourcesMap;
      },
      /**
       * Returns the preferred font format(s) for the currently used browser. Some
       * browsers support multiple formats, e.g. WOFF and TTF or WOFF and EOT. In
       * those cases, WOFF is considered the preferred format.
       *
       * @return {String[]} List of supported font formats ordered by preference
       * or empty Array if none could be determined
       */
      getPreferredFormats: function getPreferredFormats() {
        if (qx.bom.webfonts.WebFontLoader.__preferredFormats__P_213_9) {
          return qx.bom.webfonts.WebFontLoader.__preferredFormats__P_213_9;
        }
        var preferredFormats = [];
        var browser = qx.core.Environment.get("browser.name");
        var browserVersion = qx.core.Environment.get("browser.version");
        var os = qx.core.Environment.get("os.name");
        var osVersion = qx.core.Environment.get("os.version");
        if (browser == "edge" && browserVersion >= 14 || browser == "firefox" && browserVersion >= 69 || browser == "chrome" && browserVersion >= 36) {
          preferredFormats.push("woff2");
        }
        if (browser == "ie" && qx.core.Environment.get("browser.documentmode") >= 9 || browser == "edge" && browserVersion >= 12 || browser == "firefox" && browserVersion >= 3.6 || browser == "chrome" && browserVersion >= 6) {
          preferredFormats.push("woff");
        }
        if (browser == "edge" && browserVersion >= 12 || browser == "opera" && browserVersion >= 10 || browser == "safari" && browserVersion >= 3.1 || browser == "firefox" && browserVersion >= 3.5 || browser == "chrome" && browserVersion >= 4 || browser == "mobile safari" && os == "ios" && osVersion >= 4.2) {
          preferredFormats.push("ttf");
        }
        if (browser == "ie" && browserVersion >= 4) {
          preferredFormats.push("eot");
        }
        if (browser == "mobileSafari" && os == "ios" && osVersion >= 4.1) {
          preferredFormats.push("svg");
        }
        return qx.bom.webfonts.WebFontLoader.__preferredFormats__P_213_9 = preferredFormats;
      },
      /**
       * IE 6 and 7 omit the trailing quote after the format name when
       * querying cssText. This needs to be fixed before cssText is replaced
       * or all rules will be invalid and no web fonts will work any more.
       *
       * @param cssText {String} CSS text
       * @return {String} Fixed CSS text
       */
      __fixCssText__P_213_8: function __fixCssText__P_213_8(cssText) {
        return cssText.replace("'eot)", "'eot')").replace("('embedded-opentype)", "('embedded-opentype')");
      }
    }
  });
  qx.bom.webfonts.WebFontLoader.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=WebFontLoader.js.map?dt=1747169167286