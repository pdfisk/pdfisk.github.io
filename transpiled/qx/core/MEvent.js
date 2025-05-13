function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.dispatch.Direct": {},
      "qx.event.handler.Object": {},
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.Registration": {
        "require": true
      },
      "qx.Promise": {},
      "qx.event.type.Data": {}
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
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * This mixin offers basic event handling capabilities. It includes the
   * commonly known methods for managing event listeners and firing events.
   *
   * @use(qx.event.dispatch.Direct)
   * @use(qx.event.handler.Object)
   */
  qx.Mixin.define("qx.core.MEvent", {
    members: {
      /** @type {Class} Pointer to the regular event registration class */
      __Registration__P_43_0: qx.event.Registration,
      /**
       * Add event listener to this object.
       *
       * @param type {String} name of the event type
       * @param listener {Function} event callback function
       * @param self {Object ? null} Reference to the 'this' variable inside
       *         the event listener. When not given, the corresponding dispatcher
       *         usually falls back to a default, which is the target
       *         by convention. Note this is not a strict requirement, i.e.
       *         custom dispatchers can follow a different strategy.
       * @param capture {Boolean ? false} Whether to attach the event to the
       *         capturing phase or the bubbling phase of the event. The default is
       *         to attach the event handler to the bubbling phase.
       * @return {String} An opaque id, which can be used to remove the event listener
       *         using the {@link #removeListenerById} method.
       */
      addListener: function addListener(type, listener, self, capture) {
        if (!this.$$disposed) {
          return this.__Registration__P_43_0.addListener(this, type, listener, self, capture);
        }
        return null;
      },
      /**
       * Add event listener to this object, which is only called once. After the
       * listener is called the event listener gets removed.
       *
       * @param type {String} name of the event type
       * @param listener {Function} event callback function
       * @param context {Object ? window} reference to the 'this' variable inside the callback
       * @param capture {Boolean ? false} Whether to attach the event to the
       *         capturing phase or the bubbling phase of the event. The default is
       *         to attach the event handler to the bubbling phase.
       * @return {String} An opaque id, which can be used to remove the event listener
       *         using the {@link #removeListenerById} method.
       */
      addListenerOnce: function addListenerOnce(type, listener, context, capture) {
        var self = this; // self is needed to remove the listener inside the callback
        if (!context) {
          context = this;
        }
        var id; // store id in closure context
        var callback = function callback(e) {
          self.removeListenerById(id);
          listener.call(context, e);
        };
        // check for wrapped callback storage
        if (!listener.$$wrapped_callback) {
          listener.$$wrapped_callback = {};
        }
        // store the call for each type in case the listener is
        // used for more than one type [BUG #8038]
        listener.$$wrapped_callback[type + this.toHashCode()] = callback;
        id = this.addListener(type, callback, context, capture);
        return id;
      },
      /**
       * Remove event listener from this object
       *
       * @param type {String} name of the event type
       * @param listener {Function} event callback function
       * @param self {Object ? null} reference to the 'this' variable inside the callback
       * @param capture {Boolean} Whether to remove the event listener of
       *   the bubbling or of the capturing phase.
       * @return {Boolean} Whether the event was removed successfully (has existed)
       */
      removeListener: function removeListener(type, listener, self, capture) {
        if (!this.$$disposed) {
          // special handling for wrapped once listener
          if (listener.$$wrapped_callback && listener.$$wrapped_callback[type + this.$$hash]) {
            var callback = listener.$$wrapped_callback[type + this.$$hash];
            delete listener.$$wrapped_callback[type + this.$$hash];
            listener = callback;
          }
          return this.__Registration__P_43_0.removeListener(this, type, listener, self, capture);
        }
        return false;
      },
      /**
       * Removes an event listener from an event target by an id returned by
       * {@link #addListener}
       *
       * @param id {String} The id returned by {@link #addListener}
       * @return {Boolean} Whether the event was removed successfully (has existed)
       */
      removeListenerById: function removeListenerById(id) {
        if (!this.$$disposed) {
          return this.__Registration__P_43_0.removeListenerById(this, id);
        }
        return false;
      },
      /**
       * Check if there are one or more listeners for an event type.
       *
       * @param type {String} name of the event type
       * @param capture {Boolean ? false} Whether to check for listeners of
       *         the bubbling or of the capturing phase.
       * @return {Boolean} Whether the object has a listener of the given type.
       */
      hasListener: function hasListener(type, capture) {
        return this.__Registration__P_43_0.hasListener(this, type, capture);
      },
      /**
       * Dispatch an event on this object
       *
       * @param evt {qx.event.type.Event} event to dispatch
       * @return {Boolean} Whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      dispatchEvent: function dispatchEvent(evt) {
        if (!this.$$disposed) {
          return this.__Registration__P_43_0.dispatchEvent(this, evt);
        }
        return true;
      },
      /** @type{Object<String,qx.Promise>} list of pending events, indexed by hash code */
      __pendingEvents__P_43_1: null,
      /** @type{qx.Promise} promise that callers are waiting on, ready for when all events are finished */
      __promiseWaitForPendingEvents__P_43_2: null,
      /**
       * Internal helper method to track promises returned from event handlers
       *
       * @param {var} result the result from the event handler
       * @returns {qx.Promise|var} the value to return
       */
      __trackPendingEvent__P_43_3: function __trackPendingEvent__P_43_3(result) {
        var _this = this;
        {
          if (!qx.Promise.isPromise(result)) {
            return result;
          }
          if (!this.__pendingEvents__P_43_1) {
            this.__pendingEvents__P_43_1 = {};
          }
          if (!(result instanceof qx.Promise)) {
            result = qx.Promise.resolve(result);
          }
          var hashCode = result.toHashCode();
          var newPromise = result.then(function (result) {
            delete _this.__pendingEvents__P_43_1[hashCode];
            var promise = _this.__promiseWaitForPendingEvents__P_43_2;
            if (promise && Object.keys(_this.__pendingEvents__P_43_1).length == 0) {
              _this.__pendingEvents__P_43_1 = null;
              _this.__promiseWaitForPendingEvents__P_43_2 = null;
              promise.resolve();
            }
            return result;
          })["catch"](function (err) {
            delete _this.__pendingEvents__P_43_1[hashCode];
            var promise = _this.__promiseWaitForPendingEvents__P_43_2;
            if (promise && Object.keys(_this.__pendingEvents__P_43_1).length == 0) {
              _this.__pendingEvents__P_43_1 = null;
              _this.__promiseWaitForPendingEvents__P_43_2 = null;
              promise.reject(err);
            }
            throw err;
          });
          this.__pendingEvents__P_43_1[hashCode] = newPromise;
          return newPromise;
        }
      },
      /**
       * Waits for all pending events to be resolved
       */
      waitForPendingEvents: function waitForPendingEvents() {
        var _this2 = this;
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var promise;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (_this2.__pendingEvents__P_43_1) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                if (!_this2.__promiseWaitForPendingEvents__P_43_2) {
                  _this2.__promiseWaitForPendingEvents__P_43_2 = new qx.Promise();
                }
                promise = _this2.__promiseWaitForPendingEvents__P_43_2;
                _context.next = 6;
                return promise;
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      /**
       * Creates and dispatches an event on this object.
       *
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {Boolean|qx.Promise} whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      fireEvent: function fireEvent(type, clazz, args) {
        if (!this.$$disposed) {
          return this.__trackPendingEvent__P_43_3(this.__Registration__P_43_0.fireEvent(this, type, clazz, args));
        }
        return true;
      },
      /**
       * Creates and dispatches an event on this object; equivalent to fireEvent, except that it
       * always returns a promise
       *
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {qx.Promise} a promise aggregated from the event handlers;
       *  if the default was prevented, the promise is rejected
       */
      fireEventAsync: function fireEventAsync(type, clazz, args) {
        if (!this.$$disposed) {
          return this.__trackPendingEvent__P_43_3(this.__Registration__P_43_0.fireEventAsync(this, type, clazz, args));
        }
        return qx.Promise.resolve(true);
      },
      /**
       * Create an event object and dispatch it on this object.
       * The event dispatched with this method does never bubble! Use only if you
       * are sure that bubbling is not required.
       *
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {Boolean} Whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      fireNonBubblingEvent: function fireNonBubblingEvent(type, clazz, args) {
        if (!this.$$disposed) {
          return this.__trackPendingEvent__P_43_3(this.__Registration__P_43_0.fireNonBubblingEvent(this, type, clazz, args));
        }
        return true;
      },
      /**
       * Create an event object and dispatch it on this object; equivalent to fireNonBubblingEvent,
       * except that it always returns a promise.
       *
       * The event dispatched with this method does never bubble! Use only if you
       * are sure that bubbling is not required.
       *
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {qx.Promise} a promise aggregated from the event handlers;
       *  if the default was prevented, the promise is rejected
       */
      fireNonBubblingEventAsync: function fireNonBubblingEventAsync(type, clazz, args) {
        if (!this.$$disposed) {
          return this.__trackPendingEvent__P_43_3(this.__Registration__P_43_0.fireNonBubblingEventAsync(this, type, clazz, args));
        }
        return qx.Promise.resolve(true);
      },
      /**
       * Creates and dispatches an non-bubbling data event on this object.
       *
       * @param type {String} Event type to fire
       * @param data {var} User defined data attached to the event object
       * @param oldData {var?null} The event's old data (optional)
       * @param cancelable {Boolean?false} Whether or not an event can have its default
       *     action prevented. The default action can either be the browser's
       *     default action of a native event (e.g. open the context menu on a
       *     right click) or the default action of a qooxdoo class (e.g. close
       *     the window widget). The default action can be prevented by calling
       *     {@link qx.event.type.Event#preventDefault}
       * @return {Boolean|qx.Promise} whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      fireDataEvent: function fireDataEvent(type, data, oldData, cancelable) {
        if (!this.$$disposed) {
          if (oldData === undefined) {
            oldData = null;
          }
          return this.__trackPendingEvent__P_43_3(this.__Registration__P_43_0.fireEvent(this, type, qx.event.type.Data, [data, oldData, !!cancelable]));
        }
        return true;
      },
      /**
       * Creates and dispatches an non-bubbling data event on this object; equivalent to
       * fireEvent, except that it always returns a promise.
       *
       * @param type {String} Event type to fire
       * @param data {var} User defined data attached to the event object
       * @param oldData {var?null} The event's old data (optional)
       * @param cancelable {Boolean?false} Whether or not an event can have its default
       *     action prevented. The default action can either be the browser's
       *     default action of a native event (e.g. open the context menu on a
       *     right click) or the default action of a qooxdoo class (e.g. close
       *     the window widget). The default action can be prevented by calling
       *     {@link qx.event.type.Event#preventDefault}
       * @return {qx.Promise} a promise aggregated from the event handlers;
       *  if the default was prevented, the promise is rejected
       */
      fireDataEventAsync: function fireDataEventAsync(type, data, oldData, cancelable) {
        if (!this.$$disposed) {
          if (oldData === undefined) {
            oldData = null;
          }
          return this.__trackPendingEvent__P_43_3(this.__Registration__P_43_0.fireEventAsync(this, type, qx.event.type.Data, [data, oldData, !!cancelable]));
        }
        return qx.Promise.resolve(true);
      }
    }
  });
  qx.core.MEvent.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MEvent.js.map?dt=1747169151118