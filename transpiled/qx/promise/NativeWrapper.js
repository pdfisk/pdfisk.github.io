function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.Promise": {},
      "qx.util.ConcurrencyLimiter": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2016 Zenesis Limited, http://www.zenesis.com
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
   * John Spackman (john.spackman@zenesis.com)
   * Patryk Malinowski (pmalinowski@vmn.digital)
  
   ************************************************************************ */

  /**
   * Wrapper around a native promise, adding some extra helpful methods which are found in Bluebird.js,
   * such as .map, .reduce, .filter, and many more.
   *
   * @ignore(AggregateError)
   */
  qx.Class.define("qx.promise.NativeWrapper", {
    extend: qx.core.Object,
    /**
     * @overload
     * @param {(resolve: Function, reject: Function) => void} arg0 The executor for the promise
     *
     * @overload
     * Wraps a native promise in the wrapper class
     * @param {Promise} arg0 A native Promise
     */
    construct: function construct(arg0) {
      qx.core.Object.constructor.call(this);
      if (typeof arg0 === "function") {
        this.__promise__P_82_0 = new Promise(arg0);
      } else if (_typeof(arg0) === "object" && arg0.constructor === Promise) {
        this.__promise__P_82_0 = arg0;
      }
    },
    members: {
      /**
       * @type {Object} The context that this promise is bound to
       */
      __context__P_82_1: null,
      /**
       * Creates a new promise just like this one, but with a context set
       * @see
       * @param {Object} context
       * @returns
       */
      bind: function bind(context) {
        var promise = new qx.promise.NativeWrapper(this.__promise__P_82_0);
        return promise.__setContext__P_82_2(context);
      },
      /**
       * Same as for Native Promise
       * @returns {qx.promise.NativeWrapper}
       */
      then: function then(onResolved, onRejected) {
        onResolved = onResolved.bind(this.__context__P_82_1);
        if (onRejected) {
          onRejected = onRejected.bind(this.__context__P_82_1);
        }
        return qx.promise.NativeWrapper.__wrap__P_82_3(this.__promise__P_82_0.then(onResolved, onRejected)).__setContext__P_82_2(this.__context__P_82_1);
      },
      /**
       * Same as for Native Promise
       * @returns {qx.promise.NativeWrapper}
       */
      "catch": function _catch(handler) {
        handler = handler.bind(this.__context__P_82_1);
        return qx.promise.NativeWrapper.__wrap__P_82_3(this.__promise__P_82_0["catch"](handler)).__setContext__P_82_2(this.__context__P_82_1);
      },
      /**
       * Same as for Native Promise
       * @returns {qx.promise.NativeWrapper}
       */
      spread: function spread(fulfilledHandler) {
        return this.then(function (values) {
          return fulfilledHandler.apply(void 0, _toConsumableArray(values));
        });
      },
      /**
       * Same as for Native Promise
       * @returns {qx.promise.NativeWrapper}
       */
      "finally": function _finally(handler) {
        handler = handler.bind(this.__context__P_82_1);
        return qx.promise.NativeWrapper.__wrap__P_82_3(this.__promise__P_82_0["finally"](handler)).__setContext__P_82_2(this.__context__P_82_1);
      },
      /**
       * Due to the high complexity of implementing this feature, it is not supported in qx.promise.NativeWrapper
       */
      cancel: function cancel() {
        throw new Error("qx.promise.NativeWrapper does not support canceling promises");
      },
      /**
       * Note: Only call when this promise will resolve to an array
       * Same as Promise.all, but passed with the array that this promise resolves to
       * @returns {qx.promise.NativeWrapper}
       */
      all: function all() {
        var _qx$promise$NativeWra;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_qx$promise$NativeWra = qx.promise.NativeWrapper).all.apply(_qx$promise$NativeWra, [this].concat(args));
      },
      /**
       * Note: Only call when this promise will resolve to an array
       * Same as Promise.race, but passed with the array that this promise resolves to
       * @returns {qx.promise.NativeWrapper}
       */
      race: function race() {
        return qx.promise.NativeWrapper.race(this);
      },
      /**
       * Note: Only call when this promise will resolve to an array
       * Same as Promise.any, but passed with the array that this promise resolves to
       * @returns {qx.promise.NativeWrapper}
       */
      any: function any() {
        return qx.promise.NativeWrapper.any(this);
      },
      /**
       * Same as {@link qx.promise.NativeWrapper.some} except that it iterates over the value of this promise, when
       * it is fulfilled; return a promise that is fulfilled as soon as count promises are fulfilled
       * in the array. The fulfillment value is an array with count values in the order they were fulfilled.
       *
       * @param count {Integer}
       * @return {qx.promise.NativeWrapper}
       */
      some: function some(count) {
        return qx.promise.NativeWrapper.some(this, count);
      },
      /**
       * Same as {@link qx.promise.NativeWrapper.each} except that it iterates over the value of this promise, when
       * it is fulfilled; iterates over the values with the given <code>iterator</code> function with the signature
       * <code>(value, index, length)</code> where <code>value</code> is the resolved value. Iteration happens
       * serially. If any promise is rejected the returned promise is rejected as well.
       *
       * Resolves to the original array unmodified, this method is meant to be used for side effects. If the iterator
       * function returns a promise or a thenable, then the result of the promise is awaited, before continuing with
       * next iteration.
       *
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @return {qx.promise.NativeWrapper}
       */
      each: function each(iterator) {
        return qx.promise.NativeWrapper.each(this, iterator);
      },
      /**
       * Same as {@link qx.promise.NativeWrapper.filter} except that it iterates over the value of this promise, when it is fulfilled;
       * iterates over all the values into an array and filter the array to another using the given filterer function.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @param options {Object?} options; can be:
       *  <code>concurrency</code> max nuber of simultaneous filters, default is <code>Infinity</code>
       * @return {qx.promise.NativeWrapper}
       */
      filter: function filter(iterator, options) {
        return qx.promise.NativeWrapper.filter(this, iterator, options);
      },
      /**
       * Same as {@link qx.promise.NativeWrapper.map} except that it iterates over the value of this promise, when it is fulfilled;
       * iterates over all the values into an array and map the array to another using the given mapper function.
       *
       * Promises returned by the mapper function are awaited for and the returned promise doesn't fulfill
       * until all mapped promises have fulfilled as well. If any promise in the array is rejected, or
       * any promise returned by the mapper function is rejected, the returned promise is rejected as well.
       *
       * The mapper function for a given item is called as soon as possible, that is, when the promise
       * for that item's index in the input array is fulfilled. This doesn't mean that the result array
       * has items in random order, it means that .map can be used for concurrency coordination unlike
       * .all.
       *
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @param options {Object?} * A native object with one key: <code>concurrency</code>: max number of simultaneous maps, default is <code>Infinity</code>
       * @return {qx.promise.NativeWrapper}
       */
      map: function map(iterator, options) {
        return qx.promise.NativeWrapper.map(this, iterator, options);
      },
      /**
       * Same as {@link qx.promise.NativeWrapper.mapSeries} except that it iterates over the value of this promise, when
       * it is fulfilled; iterates over all the values into an array and iterate over the array serially,
       * in-order.
       *
       * Returns a promise for an array that contains the values returned by the iterator function in their
       * respective positions. The iterator won't be called for an item until its previous item, and the
       * promise returned by the iterator for that item are fulfilled. This results in a mapSeries kind of
       * utility but it can also be used simply as a side effect iterator similar to Array#forEach.
       *
       * If any promise in the input array is rejected or any promise returned by the iterator function is
       * rejected, the result will be rejected as well.
       *
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @return {qx.promise.NativeWrapper}
       */
      mapSeries: function mapSeries(iterator, options) {
        return qx.promise.NativeWrapper.mapSeries(this, iterator, options);
      },
      /**
       * Same as {@link qx.promise.NativeWrapper.reduce} except that it iterates over the value of this promise, when
       * it is fulfilled; iterates over all the values in the <code>Iterable</code> into an array and
       * reduce the array to a value using the given reducer function.
       *
       * If the reducer function returns a promise, then the result of the promise is awaited, before
       * continuing with next iteration. If any promise in the array is rejected or a promise returned
       * by the reducer function is rejected, the result is rejected as well.
       *
       * If initialValue is undefined (or a promise that resolves to undefined) and the iterable contains
       * only 1 item, the callback will not be called and the iterable's single item is returned. If the
       * iterable is empty, the callback will not be called and initialValue is returned (which may be
       * undefined).
       *
       * qx.promise.NativeWrapper.reduce will start calling the reducer as soon as possible, this is why you might want to
       * use it over qx.promise.NativeWrapper.all (which awaits for the entire array before you can call Array#reduce on it).
       *
       * @param reducer {Function} the callback, with <code>(value, index, length)</code>
       * @param initialValue {Object?} optional initial value
       * @return {qx.promise.NativeWrapper}
       */
      reduce: function reduce(reducer, initialValue) {
        return qx.promise.NativeWrapper.reduce(this, reducer, initialValue);
      },
      /**
       *
       * @param {Object} context
       * @returns {qx.promise.NativeWrapper} this object to support chaining
       */
      __setContext__P_82_2: function __setContext__P_82_2(context) {
        this.__context__P_82_1 = context;
        return this;
      }
    },
    statics: {
      /**
       * Wraps a promise in a qx.promise.NativeWrapper
       * @param {Promise} promise
       * @returns
       */
      __wrap__P_82_3: function __wrap__P_82_3(promise) {
        {
          if (promise.constructor !== Promise) {
            throw new Error("Only native promises can be wrapped!");
          }
        }
        return new qx.promise.NativeWrapper(promise);
      },
      /**
       * Returns a Promise object that is resolved with the given value. If the value is a thenable (i.e.
       * has a then method), the returned promise will "follow" that thenable, adopting its eventual
       * state; otherwise the returned promise will be fulfilled with the value. Generally, if you
       * don't know if a value is a promise or not, Promise.resolve(value) it instead and work with
       * the return value as a promise.
       *
       * @param value {Object}
       * @return {qx.promise.NativeWrapper}
       */
      resolve: function resolve(value) {
        return qx.promise.NativeWrapper.__wrap__P_82_3(Promise.resolve(value));
      },
      /**
       * Returns a Promise object that is rejected with the given reason.
       * @param reason {Object?} Reason why this Promise rejected. A warning is generated if not instanceof Error. If undefined, a default Error is used.
       * @return {qx.promise.NativeWrapper}
       */
      reject: function reject(reason) {
        return qx.promise.NativeWrapper.__wrap__P_82_3(Promise.reject(reason));
      },
      /**
       * Returns a promise that resolves when all of the promises in the object properties have resolved,
       * or rejects with the reason of the first passed promise that rejects.  The result of each property
       * is placed back in the object, replacing the promise.  Note that non-promise values are untouched.
       *
       * @param value {var} An object
       * @return {qx.promise.NativeWrapper}
       */
      allOf: function allOf(value) {
        function action(value) {
          var arr = [];
          var names = [];
          for (var name in value) {
            if (value.hasOwnProperty(name) && qx.Promise.isPromise(value[name])) {
              arr.push(value[name]);
              names.push(name);
            }
          }
          return qx.promise.NativeWrapper.all(arr).then(function (arr) {
            arr.forEach(function (item, index) {
              value[names[index]] = item;
            });
            return value;
          });
        }
        return qx.Promise.isPromise(value) ? value.then(action) : action(value);
      },
      /**
       * Returns a promise that resolves when all of the promises in the iterable argument have resolved,
       * or rejects with the reason of the first passed promise that rejects.  Note that non-promise values
       * are untouched.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @return {qx.promise.NativeWrapper}
       */
      all: function all(iterable) {
        return qx.promise.NativeWrapper.resolve(iterable).then(function (iterable) {
          return qx.promise.NativeWrapper.__wrap__P_82_3(Promise.all(iterable));
        });
      },
      /**
       * Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves
       * or rejects, with the value or reason from that promise.
       * @param iterable {Iterable} An iterable object, such as an Array
       * @return {qx.promise.NativeWrapper}
       */
      race: function race(iterable) {
        return qx.promise.NativeWrapper.resolve(iterable).then(function (iterableResolved) {
          return new qx.promise.NativeWrapper(Promise.race(iterableResolved));
        });
      },
      /* *********************************************************************************
       *
       * Extension API methods
       *
       */
      /**
       * Like Promise.some, with 1 as count. However, if the promise fulfills, the fulfillment value is not an
       * array of 1 but the value directly.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @return {qx.promise.NativeWrapper}
       */
      any: function any(iterable) {
        return qx.promise.NativeWrapper.resolve(iterable).then(function (iterableResolved) {
          return new qx.promise.NativeWrapper(Promise.any(iterableResolved));
        });
      },
      /**
       * Given an Iterable (arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix
       * of promises and values), iterate over all the values in the Iterable into an array and return a promise
       * that is fulfilled as soon as count promises are fulfilled in the array. The fulfillment value is an
       * array with count values in the order they were fulfilled.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param count {Integer}
       * @return {qx.promise.NativeWrapper}
       */
      some: function some(iterable, count) {
        return new qx.promise.NativeWrapper(function (resolve, reject) {
          qx.promise.NativeWrapper.resolve(iterable).then(function (iterable) {
            var resolved = [];
            var rejected = [];
            var minToReject = iterable.length - count + 1;
            var onResolved = function onResolved(value) {
              if (resolved.length >= count) {
                return;
              }
              resolved.push(value);
              if (resolved.length == count) {
                resolve(resolved);
              }
            };
            var onRejected = function onRejected(reason) {
              rejected.push(reason);
              if (--minToReject == 0) {
                reject(new AggregateError(rejected));
              }
            };
            iterable.forEach(function (elem, index) {
              if (qx.Promise.isPromise(elem)) {
                elem.then(onResolved, onRejected);
              } else {
                onResolved(elem);
              }
            });
          });
        });
      },
      /**
       * Iterate over an array, or a promise of an array, which contains promises (or a mix of promises and values)
       * with the given <code>iterator</code> function with the signature <code>(value, index, length)</code> where
       * <code>value</code> is the resolved value of a respective promise in the input array. Iteration happens
       * serially. If any promise in the input array is rejected the returned promise is rejected as well.
       *
       * Resolves to the original array unmodified, this method is meant to be used for side effects. If the iterator
       * function returns a promise or a thenable, then the result of the promise is awaited, before continuing with
       * next iteration.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @return {qx.promise.NativeWrapper}
       */
      each: function each(iterable, iterator) {
        var f = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var iterableValue, index, _iterator, _step, item, itemResolved;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return iterable;
                case 2:
                  iterableValue = _context.sent;
                  index = 0;
                  _iterator = _createForOfIteratorHelper(iterableValue);
                  _context.prev = 5;
                  _iterator.s();
                case 7:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 16;
                    break;
                  }
                  item = _step.value;
                  _context.next = 11;
                  return item;
                case 11:
                  itemResolved = _context.sent;
                  _context.next = 14;
                  return iterator(itemResolved, index++, iterable.length);
                case 14:
                  _context.next = 7;
                  break;
                case 16:
                  _context.next = 21;
                  break;
                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](5);
                  _iterator.e(_context.t0);
                case 21:
                  _context.prev = 21;
                  _iterator.f();
                  return _context.finish(21);
                case 24:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[5, 18, 21, 24]]);
          }));
          return function f() {
            return _ref.apply(this, arguments);
          };
        }();
        return new qx.promise.NativeWrapper(f());
      },
      /**
       * Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of
       * promises and values), iterate over all the values in the Iterable into an array and filter the array to
       * another using the given filterer function.
       *
       * It is essentially an efficient shortcut for doing a .map and then Array#filter:
       * <pre>
       *   qx.promise.NativeWrapper.map(valuesToBeFiltered, function(value, index, length) {
       *       return Promise.all([filterer(value, index, length), value]);
       *   }).then(function(values) {
       *       return values.filter(function(stuff) {
       *           return stuff[0] == true
       *       }).map(function(stuff) {
       *           return stuff[1];
       *       });
       *   });
       * </pre>
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @param options {Object?} Either:
       *   A native object with one key: <code>concurrency</code>: max number of simultaneous filters, default is <code>Infinity</code>
       * Or: any other object, in which case this will be the context for the iterator
       * @return {qx.promise.NativeWrapper}
       */
      filter: function filter(iterable, iterator, options) {
        var limiter = new qx.util.ConcurrencyLimiter(options === null || options === void 0 ? void 0 : options.concurrency);
        var doit = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var iterableResolved, resultsPromises, values;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return iterable;
                case 2:
                  iterableResolved = _context3.sent;
                  resultsPromises = iterableResolved.map(function (item, index) {
                    return limiter.add(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      var itemResolved, keep;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return item;
                          case 2:
                            itemResolved = _context2.sent;
                            _context2.next = 5;
                            return iterator(itemResolved, index, iterableResolved.length);
                          case 5:
                            keep = _context2.sent;
                            return _context2.abrupt("return", {
                              keep: keep,
                              val: itemResolved
                            });
                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    })));
                  });
                  _context3.next = 6;
                  return qx.promise.NativeWrapper.all(resultsPromises);
                case 6:
                  values = _context3.sent;
                  return _context3.abrupt("return", values.filter(function (_ref4) {
                    var keep = _ref4.keep;
                    return keep;
                  }).map(function (_ref5) {
                    var val = _ref5.val;
                    return val;
                  }));
                case 8:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function doit() {
            return _ref2.apply(this, arguments);
          };
        }();
        return new qx.promise.NativeWrapper(doit());
      },
      /**
       * Given an <code>Iterable</code> (arrays are <code>Iterable</code>), or a promise of an
       * <code>Iterable</code>, which produces promises (or a mix of promises and values), iterate over
       * all the values in the <code>Iterable</code> into an array and map the array to another using
       * the given mapper function.
       *
       * Promises returned by the mapper function are awaited for and the returned promise doesn't fulfill
       * until all mapped promises have fulfilled as well. If any promise in the array is rejected, or
       * any promise returned by the mapper function is rejected, the returned promise is rejected as well.
       *
       * The mapper function for a given item is called as soon as possible, that is, when the promise
       * for that item's index in the input array is fulfilled. This doesn't mean that the result array
       * has items in random order, it means that .map can be used for concurrency coordination unlike
       * .all.
       *
       * A common use of Promise.map is to replace the .push+Promise.all boilerplate:
       *
       * <pre>
       *   var promises = [];
       *   for (var i = 0; i < fileNames.length; ++i) {
       *       promises.push(fs.readFileAsync(fileNames[i]));
       *   }
       *   qx.promise.NativeWrapper.all(promises).then(function() {
       *       console.log("done");
       *   });
       *
       *   // Using Promise.map:
       *   qx.promise.NativeWrapper.map(fileNames, function(fileName) {
       *       // Promise.map awaits for returned promises as well.
       *       return fs.readFileAsync(fileName);
       *   }).then(function() {
       *       console.log("done");
       *   });
       * </pre>
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @param options {Object?} * A native object with one key: <code>concurrency</code>: max number of simultaneous maps, default is <code>Infinity</code>
       * @return {qx.promise.NativeWrapper}
       */
      map: function map(iterable, iterator, options) {
        return qx.promise.NativeWrapper.resolve(iterable).then(function (iterable) {
          var limiter = new qx.util.ConcurrencyLimiter(options === null || options === void 0 ? void 0 : options.concurrency);
          var resultsPromises = iterable.map(function (item, index) {
            return limiter.add(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var itemResolved, result;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return item;
                  case 2:
                    itemResolved = _context4.sent;
                    _context4.next = 5;
                    return iterator(itemResolved, index, iterable.length);
                  case 5:
                    result = _context4.sent;
                    return _context4.abrupt("return", result);
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            })));
          });
          return qx.promise.NativeWrapper.all(resultsPromises);
        });
      },
      /**
       * Given an <code>Iterable</code>(arrays are <code>Iterable</code>), or a promise of an
       * <code>Iterable</code>, which produces promises (or a mix of promises and values), iterate over
       * all the values in the <code>Iterable</code> into an array and iterate over the array serially,
       * in-order.
       *
       * Returns a promise for an array that contains the values returned by the iterator function in their
       * respective positions. The iterator won't be called for an item until its previous item, and the
       * promise returned by the iterator for that item are fulfilled. This results in a mapSeries kind of
       * utility but it can also be used simply as a side effect iterator similar to Array#forEach.
       *
       * If any promise in the input array is rejected or any promise returned by the iterator function is
       * rejected, the result will be rejected as well.
       *
       * Example where .mapSeries(the instance method) is used for iterating with side effects:
       *
       * <pre>
       * // Source: http://jakearchibald.com/2014/es7-async-functions/
       * function loadStory() {
       *   return getJSON('story.json')
       *     .then(function(story) {
       *       addHtmlToPage(story.heading);
       *       return story.chapterURLs.map(getJSON);
       *     })
       *     .mapSeries(function(chapter) { addHtmlToPage(chapter.html); })
       *     .then(function() { addTextToPage("All done"); })
       *     .catch(function(err) { addTextToPage("Argh, broken: " + err.message); })
       *     .then(function() { document.querySelector('.spinner').style.display = 'none'; });
       * }
       * </pre>
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @return {qx.promise.NativeWrapper}
       */
      mapSeries: function mapSeries(iterable, iterator) {
        return new qx.promise.NativeWrapper(/*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
            var failed, fail, result, index, _iterator2, _step2, promise, value, mapped;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  failed = false;
                  fail = function fail(reason) {
                    if (!failed) {
                      failed = true;
                      reject(reason);
                    }
                  }; //We must handle the rejections of promises ASAP
                  //to prevent unhandled promise rejections
                  qx.promise.NativeWrapper.all(iterable)["catch"](fail);
                  result = [];
                  _context5.next = 6;
                  return iterable;
                case 6:
                  iterable = _context5.sent;
                  _context5.prev = 7;
                  index = 0;
                  _iterator2 = _createForOfIteratorHelper(iterable);
                  _context5.prev = 10;
                  _iterator2.s();
                case 12:
                  if ((_step2 = _iterator2.n()).done) {
                    _context5.next = 23;
                    break;
                  }
                  promise = _step2.value;
                  _context5.next = 16;
                  return promise;
                case 16:
                  value = _context5.sent;
                  _context5.next = 19;
                  return iterator(value, index++, iterable.length);
                case 19:
                  mapped = _context5.sent;
                  result.push(mapped);
                case 21:
                  _context5.next = 12;
                  break;
                case 23:
                  _context5.next = 28;
                  break;
                case 25:
                  _context5.prev = 25;
                  _context5.t0 = _context5["catch"](10);
                  _iterator2.e(_context5.t0);
                case 28:
                  _context5.prev = 28;
                  _iterator2.f();
                  return _context5.finish(28);
                case 31:
                  _context5.next = 36;
                  break;
                case 33:
                  _context5.prev = 33;
                  _context5.t1 = _context5["catch"](7);
                  fail(_context5.t1);
                case 36:
                  resolve(result);
                case 37:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, null, [[7, 33], [10, 25, 28, 31]]);
          }));
          return function (_x, _x2) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      /**
       * Given an <code>Iterable</code> (arrays are <code>Iterable</code>), or a promise of an
       * <code>Iterable</code>, which produces promises (or a mix of promises and values), iterate
       * over all the values in the <code>Iterable</code> into an array and reduce the array to a
       * value using the given reducer function.
       *
       * If the reducer function returns a promise, then the result of the promise is awaited, before
       * continuing with next iteration. If any promise in the array is rejected or a promise returned
       * by the reducer function is rejected, the result is rejected as well.
       *
       * Read given files sequentially while summing their contents as an integer. Each file contains
       * just the text 10.
       *
       * <pre>
       *   qx.promise.NativeWrapper.reduce(["file1.txt", "file2.txt", "file3.txt"], function(total, fileName) {
       *       return fs.readFileAsync(fileName, "utf8").then(function(contents) {
       *           return total + parseInt(contents, 10);
       *       });
       *   }, 0).then(function(total) {
       *       //Total is 30
       *   });
       * </pre>
       *
       * If initialValue is undefined (or a promise that resolves to undefined) and the iterable contains
       * only 1 item, the callback will not be called and the iterable's single item is returned. If the
       * iterable is empty, the callback will not be called and initialValue is returned (which may be
       * undefined).
       *
       * Promise.reduce will start calling the reducer as soon as possible, this is why you might want to
       * use it over Promise.all (which awaits for the entire array before you can call Array#reduce on it).
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param reducer {Function} the callback, with <code>(value, index, length)</code>
       * @param initialValue {Object?} optional initial value
       * @return {qx.promise.NativeWrapper}
       */
      reduce: function reduce(iterable, reducer, initialValue) {
        return new qx.promise.NativeWrapper(/*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
            var failed, fail, iterableResolved, accum, index, _iterator3, _step3, promise, data;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  fail = function _fail(reason) {
                    if (!failed) {
                      failed = true;
                      reject(reason);
                    }
                  };
                  failed = false;
                  _context6.prev = 2;
                  _context6.next = 5;
                  return iterable;
                case 5:
                  iterableResolved = _context6.sent;
                  //We must handle the rejections of promises ASAP
                  //to prevent unhandled promise rejections
                  iterableResolved.forEach(function (item, index) {
                    if (qx.Promise.isPromise(item)) {
                      item["catch"](fail);
                    }
                  });
                  accum = initialValue;
                  index = 0;
                  _iterator3 = _createForOfIteratorHelper(iterableResolved);
                  _context6.prev = 10;
                  _iterator3.s();
                case 12:
                  if ((_step3 = _iterator3.n()).done) {
                    _context6.next = 23;
                    break;
                  }
                  promise = _step3.value;
                  _context6.next = 16;
                  return promise;
                case 16:
                  data = _context6.sent;
                  _context6.next = 19;
                  return reducer(accum, data, index, iterableResolved.length);
                case 19:
                  accum = _context6.sent;
                  index++;
                case 21:
                  _context6.next = 12;
                  break;
                case 23:
                  _context6.next = 28;
                  break;
                case 25:
                  _context6.prev = 25;
                  _context6.t0 = _context6["catch"](10);
                  _iterator3.e(_context6.t0);
                case 28:
                  _context6.prev = 28;
                  _iterator3.f();
                  return _context6.finish(28);
                case 31:
                  resolve(accum);
                  _context6.next = 37;
                  break;
                case 34:
                  _context6.prev = 34;
                  _context6.t1 = _context6["catch"](2);
                  fail(_context6.t1);
                case 37:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, null, [[2, 34], [10, 25, 28, 31]]);
          }));
          return function (_x3, _x4) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      /**
       * Returns a new function that wraps the given function fn. The new function will always return a promise that is
       * fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
       * @param cb {Function}
       * @return {Function}
       */
      method: function method(cb) {
        var _this = this;
        return function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return new qx.promise.NativeWrapper(function (resolve) {
            return resolve(cb.call.apply(cb, [_this.__context__P_82_1].concat(args)));
          });
        };
      },
      /**
       * Like .all but for object properties or Maps* entries instead of iterated values. Returns a promise that
       * is fulfilled when all the properties of the object or the Map's' values** are fulfilled. The promise's
       * fulfillment value is an object or a Map with fulfillment values at respective keys to the original object
       * or a Map. If any promise in the object or Map rejects, the returned promise is rejected with the rejection
       * reason.
       *
       * If object is a trusted Promise, then it will be treated as a promise for object rather than for its
       * properties. All other objects (except Maps) are treated for their properties as is returned by
       * Object.keys - the object's own enumerable properties.
       *
       * @param input {Object} An Object
       * @return {qx.promise.NativeWrapper}
       */
      props: function props(input) {
        return qx.promise.NativeWrapper.resolve(input).then(function (input) {
          var entries = Object.entries(input);
          var promises = entries.map(function (entry) {
            return new qx.promise.NativeWrapper(/*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve) {
                var value;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return entry[1];
                    case 2:
                      value = _context7.sent;
                      resolve([entry[0], value]);
                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
              }));
              return function (_x5) {
                return _ref9.apply(this, arguments);
              };
            }());
          });
          return qx.promise.NativeWrapper.all(promises).then(function (values) {
            var result = {};
            values.forEach(function (entry) {
              result[entry[0]] = entry[1];
            });
            return result;
          });
        });
      }
    }
  });
  qx.promise.NativeWrapper.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=NativeWrapper.js.map?dt=1747169156005