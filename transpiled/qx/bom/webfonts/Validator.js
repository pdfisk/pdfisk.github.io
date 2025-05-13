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
      "qx.Promise": {
        "construct": true
      },
      "qx.bom.Label": {},
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.event.Timer": {},
      "qx.bom.element.Dimension": {},
      "qx.lang.Object": {},
      "qx.bom.element.Style": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "browser.name": {
          "className": "qx.bom.client.Browser"
        },
        "browser.version": {
          "className": "qx.bom.client.Browser"
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
   * Checks whether a given font is available on the document and fires events
   * accordingly.
   *
   * This class does not need to be disposed, unless you want to abort the validation
   * early
   */
  qx.Class.define("qx.bom.webfonts.Validator", {
    extend: qx.core.Object,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param fontFamily {String} The name of the font to be verified
     * @param comparisonString {String?} String to be used to detect whether a font was loaded or not
     * @param fontWeight {String?} the weight of the font to be verified
     * @param fontStyle {String?} the style of the font to be verified
     * whether the font has loaded properly
     */
    construct: function construct(fontFamily, comparisonString, fontWeight, fontStyle) {
      qx.core.Object.constructor.call(this);
      if (comparisonString) {
        this.setComparisonString(comparisonString);
      }
      if (fontWeight) {
        this.setFontWeight(fontWeight);
      }
      if (fontStyle) {
        this.setFontStyle(fontStyle);
      }
      if (fontFamily) {
        this.setFontFamily(fontFamily);
        this.__requestedHelpers__P_223_0 = this._getRequestedHelpers();
      }
      this.__promiseValid__P_223_1 = new qx.Promise();
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Sets of serif and sans-serif fonts to be used for size comparisons.
       * At least one of these fonts should be present on any system.
       */
      COMPARISON_FONTS: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Times New Roman", "Georgia", "serif"]
      },
      /**
       * Map of common CSS attributes to be used for all  size comparison elements
       */
      HELPER_CSS: {
        position: "absolute",
        margin: "0",
        padding: "0",
        top: "-1000px",
        left: "-1000px",
        fontSize: "350px",
        width: "auto",
        height: "auto",
        lineHeight: "normal",
        fontVariant: "normal",
        visibility: "hidden"
      },
      /**
       * The string to be used in the size comparison elements. This is the default string
       * which is used for the {@link #COMPARISON_FONTS} and the font to be validated. It
       * can be overridden for the font to be validated using the {@link #comparisonString}
       * property.
       */
      COMPARISON_STRING: "WEei",
      __defaultSizes__P_223_2: null,
      __defaultHelpers__P_223_3: null,
      /**
       * Removes the two common helper elements used for all size comparisons from
       * the DOM
       */
      removeDefaultHelperElements: function removeDefaultHelperElements() {
        var defaultHelpers = qx.bom.webfonts.Validator.__defaultHelpers__P_223_3;
        if (defaultHelpers) {
          for (var prop in defaultHelpers) {
            document.body.removeChild(defaultHelpers[prop]);
          }
        }
        delete qx.bom.webfonts.Validator.__defaultHelpers__P_223_3;
      }
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /**
       * The font-family this validator should check
       */
      fontFamily: {
        nullable: true,
        init: null,
        apply: "_applyFontFamily"
      },
      /** The font weight to check */
      fontWeight: {
        nullable: true,
        check: "String",
        apply: "_applyFontWeight"
      },
      /** The font style to check */
      fontStyle: {
        nullable: true,
        check: "String",
        apply: "_applyFontStyle"
      },
      /**
       * Comparison string used to check whether the font has loaded or not.
       */
      comparisonString: {
        nullable: true,
        init: null
      },
      /**
       * Time in milliseconds from the beginning of the check until it is assumed
       * that a font is not available
       */
      timeout: {
        check: "Integer",
        init: 5000
      }
    },
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /**
       * Fired when the status of a web font has been determined. The event data
       * is a map with the keys "family" (the font-family name) and "valid"
       * (Boolean).
       */
      changeStatus: "qx.event.type.Data"
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __requestedHelpers__P_223_0: null,
      __checkTimer__P_223_4: null,
      __checkStarted__P_223_5: null,
      __promiseValid__P_223_1: null,
      /*
      ---------------------------------------------------------------------------
        PUBLIC API
      ---------------------------------------------------------------------------
      */
      /**
       * Validates the font
       */
      validate: function validate() {
        var _this = this;
        if (this.__checkStarted__P_223_5) {
          return;
        }
        var setValidImpl = function setValidImpl(valid) {
          if (_this.__checkTimer__P_223_4) {
            _this.__checkTimer__P_223_4.stop();
          }
          _this._reset();
          _this.__promiseValid__P_223_1.resolve(valid);
          _this.fireDataEvent("changeStatus", {
            family: _this.getFontFamily(),
            valid: valid
          });
        };
        if (document.fonts && typeof document.fonts.load == "function") {
          this.__checkStarted__P_223_5 = new Date().getTime();
          var fontExpr = "".concat(this.getFontStyle() || "normal", " ").concat(this.getFontWeight() || "normal", " 14px ").concat(this.getFontFamily());
          var loadImpl = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return document.fonts.load(fontExpr);
                  case 3:
                    _context.next = 5;
                    return document.fonts.ready;
                  case 5:
                    qx.bom.Label.getTextSize("Hello World", {
                      fontFamily: _this.getFontFamily(),
                      fontStyle: _this.getFontStyle(),
                      fontWeight: _this.getFontWeight()
                    });
                    setTimeout(function () {
                      return setValidImpl(_this._isFontValid());
                    }, 100);
                    _context.next = 13;
                    break;
                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](0);
                    _this.warn("Exception while loading font ".concat(fontExpr, ": ") + _context.t0);
                    setValidImpl(false);
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 9]]);
            }));
            return function loadImpl() {
              return _ref.apply(this, arguments);
            };
          }();
          loadImpl();
        } else {
          this.__checkStarted__P_223_5 = new Date().getTime();
          var _fontExpr = "".concat(this.getFontStyle() || "normal", " ").concat(this.getFontWeight() || "normal", " 14px ").concat(this.getFontFamily());
          var timerCheck = function timerCheck() {
            if (_this._isFontValid()) {
              // safari has trouble resizing, adding it again fixed the issue [BUG #8786]
              if (qx.core.Environment.get("browser.name") == "safari" && parseFloat(qx.core.Environment.get("browser.version")) >= 8) {
                setTimeout(function () {
                  return setValidImpl(true);
                }, 100);
              } else {
                setValidImpl(true);
              }
            } else {
              var now = new Date().getTime();
              if (now - _this.__checkStarted__P_223_5 >= _this.getTimeout()) {
                setValidImpl(false);
              }
            }
          };

          // Give the browser a chance to render the new elements
          qx.event.Timer.once(function () {
            _this.__checkTimer__P_223_4 = new qx.event.Timer(100);
            _this.__checkTimer__P_223_4.addListener("interval", timerCheck);
            _this.__checkTimer__P_223_4.start();
          }, this, 0);
        }
      },
      /**
       * Waits for the font to become invalid or valid
       *
       * @returns {Boolean} whether valid or not
       */
      isValid: function isValid() {
        var _this2 = this;
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.__promiseValid__P_223_1;
              case 2:
                return _context2.abrupt("return", _context2.sent);
              case 3:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      /*
      ---------------------------------------------------------------------------
        PROTECTED API
      ---------------------------------------------------------------------------
      */
      /**
       * Removes the helper elements from the DOM
       */
      _reset: function _reset() {
        if (this.__requestedHelpers__P_223_0) {
          for (var prop in this.__requestedHelpers__P_223_0) {
            var elem = this.__requestedHelpers__P_223_0[prop];
            document.body.removeChild(elem);
          }
          this.__requestedHelpers__P_223_0 = null;
        }
      },
      /**
       * Checks if the font is available by comparing the widths of the elements
       * using the generic fonts to the widths of the elements using the font to
       * be validated
       *
       * @return {Boolean} Whether or not the font caused the elements to differ
       * in size
       */
      _isFontValid: function _isFontValid() {
        if (!qx.bom.webfonts.Validator.__defaultSizes__P_223_2) {
          this.__init__P_223_6();
        }
        if (!this.__requestedHelpers__P_223_0) {
          this.__requestedHelpers__P_223_0 = this._getRequestedHelpers();
        }

        // force rerendering for chrome
        this.__requestedHelpers__P_223_0.sans.style.visibility = "visible";
        this.__requestedHelpers__P_223_0.sans.style.visibility = "hidden";
        this.__requestedHelpers__P_223_0.serif.style.visibility = "visible";
        this.__requestedHelpers__P_223_0.serif.style.visibility = "hidden";
        var requestedSans = qx.bom.element.Dimension.getWidth(this.__requestedHelpers__P_223_0.sans);
        var requestedSerif = qx.bom.element.Dimension.getWidth(this.__requestedHelpers__P_223_0.serif);
        var cls = qx.bom.webfonts.Validator;
        if (requestedSans !== cls.__defaultSizes__P_223_2.sans || requestedSerif !== cls.__defaultSizes__P_223_2.serif) {
          return true;
        }
        return false;
      },
      /**
       * Creates the two helper elements styled with the font to be checked
       *
       * @return {Map} A map with the keys <pre>sans</pre> and <pre>serif</pre>
       * and the created span elements as values
       */
      _getRequestedHelpers: function _getRequestedHelpers() {
        var fontsSans = [this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);
        var fontsSerif = [this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);
        return {
          sans: this._getHelperElement(fontsSans, this.getComparisonString()),
          serif: this._getHelperElement(fontsSerif, this.getComparisonString())
        };
      },
      /**
       * Creates a span element with the comparison text (either {@link #COMPARISON_STRING} or
       * {@link #comparisonString}) and styled with the default CSS ({@link #HELPER_CSS}) plus
       * the given font-family value and appends it to the DOM
       *
       * @param fontFamily {String} font-family string
       * @param comparisonString {String?} String to be used to detect whether a font was loaded or not
       * @return {Element} the created DOM element
       */
      _getHelperElement: function _getHelperElement(fontFamily, comparisonString) {
        var styleMap = qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);
        if (fontFamily) {
          if (styleMap.fontFamily) {
            styleMap.fontFamily += "," + fontFamily.join(",");
          } else {
            styleMap.fontFamily = fontFamily.join(",");
          }
        }
        if (this.getFontWeight()) {
          styleMap.fontWeight = this.getFontWeight();
        }
        if (this.getFontStyle()) {
          styleMap.fontStyle = this.getFontStyle();
        }
        var elem = document.createElement("span");
        elem.innerHTML = comparisonString || qx.bom.webfonts.Validator.COMPARISON_STRING;
        qx.bom.element.Style.setStyles(elem, styleMap);
        document.body.appendChild(elem);
        return elem;
      },
      // property apply
      _applyFontFamily: function _applyFontFamily(value, old) {
        if (value !== old) {
          this._reset();
        }
      },
      // property apply
      _applyFontWeight: function _applyFontWeight(value, old) {
        if (value !== old) {
          this._reset();
        }
      },
      // property apply
      _applyFontStyle: function _applyFontStyle(value, old) {
        if (value !== old) {
          this._reset();
        }
      },
      /*
      ---------------------------------------------------------------------------
        PRIVATE API
      ---------------------------------------------------------------------------
      */
      /**
       * Creates the default helper elements and gets their widths
       */
      __init__P_223_6: function __init__P_223_6() {
        var cls = qx.bom.webfonts.Validator;
        if (!cls.__defaultHelpers__P_223_3) {
          cls.__defaultHelpers__P_223_3 = {
            sans: this._getHelperElement(cls.COMPARISON_FONTS.sans),
            serif: this._getHelperElement(cls.COMPARISON_FONTS.serif)
          };
        }
        cls.__defaultSizes__P_223_2 = {
          sans: qx.bom.element.Dimension.getWidth(cls.__defaultHelpers__P_223_3.sans),
          serif: qx.bom.element.Dimension.getWidth(cls.__defaultHelpers__P_223_3.serif)
        };
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._reset();
      if (this.__checkTimer__P_223_4 != null) {
        this.__checkTimer__P_223_4.stop();
      }
      this._disposeObjects("__checkTimer__P_223_4");
    }
  });
  qx.bom.webfonts.Validator.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Validator.js.map?dt=1747169168254