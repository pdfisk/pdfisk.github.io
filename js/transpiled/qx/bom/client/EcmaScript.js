(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["ecmascript.array.indexof", "ecmascript.array.lastindexof", "ecmascript.array.foreach", "ecmascript.array.filter", "ecmascript.array.map", "ecmascript.array.some", "ecmascript.array.find", "ecmascript.array.findIndex", "ecmascript.array.every", "ecmascript.array.reduce", "ecmascript.array.reduceright", "ecmascript.array.includes", "ecmascript.date.now", "ecmascript.date.parse", "ecmascript.error.toString", "ecmascript.error.stacktrace", "ecmascript.function.bind", "ecmascript.object.keys", "ecmascript.object.values", "ecmascript.object.is", "ecmascript.number.EPSILON", "ecmascript.string.startsWith", "ecmascript.string.endsWith", "ecmascript.string.trim", "ecmascript.function.async", "ecmascript.mutationobserver", "ecmascript.promise.native"],
      "required": {}
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
   * The main purpose of this class to hold all checks about ECMAScript.
   *
   * This class is used by {@link qx.core.Environment} and should not be used
   * directly. Please check its class comment for details how to use it.
   *
   * @internal
   */
  qx.Bootstrap.define("qx.bom.client.EcmaScript", {
    statics: {
      /**
       * Returns the name of the Error object property that holds stack trace
       * information or null if the client does not provide any.
       *
       * @internal
       * @return {String|null} <code>stack</code>, <code>stacktrace</code> or
       * <code>null</code>
       */
      getStackTrace: function getStackTrace() {
        var propName;
        var e = new Error("e");
        propName = e.stack ? "stack" : e.stacktrace ? "stacktrace" : null; // only thrown errors have the stack property in IE10 and PhantomJS

        if (!propName) {
          try {
            throw e;
          } catch (ex) {
            e = ex;
          }
        }

        return e.stacktrace ? "stacktrace" : e.stack ? "stack" : null;
      },

      /**
       * Checks if 'MutationObserver' is supported.
       * @internal
       * @ignore(MutationObserver)
       * @return {Boolean} <code>true</code>, if MutationObserver is available.
       */
      getMutationObserver: function getMutationObserver() {
        return typeof MutationObserver != "undefined";
      },

      /**
       * Checks if 'indexOf' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayIndexOf: function getArrayIndexOf() {
        return !!Array.prototype.indexOf;
      },

      /**
       * Checks if 'lastIndexOf' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayLastIndexOf: function getArrayLastIndexOf() {
        return !!Array.prototype.lastIndexOf;
      },

      /**
       * Checks if 'forEach' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayForEach: function getArrayForEach() {
        return !!Array.prototype.forEach;
      },

      /**
       * Checks if 'filter' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayFilter: function getArrayFilter() {
        return !!Array.prototype.filter;
      },

      /**
       * Checks if 'map' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayMap: function getArrayMap() {
        return !!Array.prototype.map;
      },

      /**
       * Checks if 'some' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArraySome: function getArraySome() {
        return !!Array.prototype.some;
      },

      /**
       * Checks if 'find' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayFind: function getArrayFind() {
        return !!Array.prototype.find;
      },

      /**
       * Checks if 'findIndex' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayFindIndex: function getArrayFindIndex() {
        return !!Array.prototype.findIndex;
      },

      /**
       * Checks if 'every' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayEvery: function getArrayEvery() {
        return !!Array.prototype.every;
      },

      /**
       * Checks if 'reduce' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayReduce: function getArrayReduce() {
        return !!Array.prototype.reduce;
      },

      /**
       * Checks if 'reduceRight' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayReduceRight: function getArrayReduceRight() {
        return !!Array.prototype.reduceRight;
      },

      /**
       * Checks if 'includes' is supported on the Array object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getArrayIncludes: function getArrayIncludes() {
        return !!Array.prototype.includes;
      },

      /**
       * Checks if 'toString' is supported on the Error object and
       * its working as expected.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getErrorToString: function getErrorToString() {
        return typeof Error.prototype.toString == "function" && Error.prototype.toString() !== "[object Error]";
      },

      /**
       * Checks if 'bind' is supported on the Function object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getFunctionBind: function getFunctionBind() {
        return typeof Function.prototype.bind === "function";
      },

      /**
       * Checks if creating async functions are supported
       *
       * @lint ignoreDeprecated(alert, eval)
       *
       * @internal
       * @return {Boolean} <code>true</code>, if async functions are supported
       */
      getAsyncFunction: function getAsyncFunction() {
        var f;

        try {
          eval("f = async function(){};");
        } catch (e) {
          return false;
        }

        ;
        return qx.Bootstrap.getClass(f) === "AsyncFunction";
      },

      /**
       * Checks if 'keys' is supported on the Object object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getObjectKeys: function getObjectKeys() {
        return !!Object.keys;
      },

      /**
       * Checks if 'values' is supported on the Object object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getObjectValues: function getObjectValues() {
        return !!Object.values;
      },

      /**
       * Checks if 'is' is supported on the Object object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getObjectIs: function getObjectIs() {
        return !!Object.is;
      },

      /**
       * Checks if 'now' is supported on the Date object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getDateNow: function getDateNow() {
        return !!Date.now;
      },

      /**
       * Checks if 'parse' is supported on the Date object and whether it
       * supports ISO-8601 parsing. Additionally it checks if 'parse' takes
       * ISO-8601 date strings without timezone specifier and treats them as
       * local (as per specification)
       * @internal
       * @return {Boolean} <code>true</code>, if the method supports ISO-8601
       *   dates.
       */
      getDateParse: function getDateParse() {
        return typeof Date.parse === "function" // Date.parse() is present...
        && Date.parse("2001-02-03T04:05:06.007") != // ...and it treats local
        Date.parse("2001-02-03T04:05:06.007Z"); // dates as expected
      },

      /**
       * Checks if 'startsWith' is supported on the String object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getStringStartsWith: function getStringStartsWith() {
        return typeof String.prototype.startsWith === "function";
      },

      /**
       * Checks if 'endsWith' is supported on the String object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getStringEndsWith: function getStringEndsWith() {
        return typeof String.prototype.endsWith === "function";
      },

      /**
       * Checks if 'trim' is supported on the String object.
       * @internal
       * @return {Boolean} <code>true</code>, if the method is available.
       */
      getStringTrim: function getStringTrim() {
        return typeof String.prototype.trim === "function";
      },

      /**
       * Checks whether Native promises are available
       */
      getPromiseNative: function getPromiseNative() {
        return typeof window.Promise !== "undefined" && window.Promise.toString().indexOf("[native code]") !== -1;
      },

      /**
       * Checks whether Native promises are available
       */
      getEpsilon: function getEpsilon() {
        return typeof Number.prototype.EPSILON !== "undefined";
      }
    },
    defer: function defer(statics) {
      // array polyfill
      qx.core.Environment.add("ecmascript.array.indexof", statics.getArrayIndexOf);
      qx.core.Environment.add("ecmascript.array.lastindexof", statics.getArrayLastIndexOf);
      qx.core.Environment.add("ecmascript.array.foreach", statics.getArrayForEach);
      qx.core.Environment.add("ecmascript.array.filter", statics.getArrayFilter);
      qx.core.Environment.add("ecmascript.array.map", statics.getArrayMap);
      qx.core.Environment.add("ecmascript.array.some", statics.getArraySome);
      qx.core.Environment.add("ecmascript.array.find", statics.getArrayFind);
      qx.core.Environment.add("ecmascript.array.findIndex", statics.getArrayFindIndex);
      qx.core.Environment.add("ecmascript.array.every", statics.getArrayEvery);
      qx.core.Environment.add("ecmascript.array.reduce", statics.getArrayReduce);
      qx.core.Environment.add("ecmascript.array.reduceright", statics.getArrayReduceRight);
      qx.core.Environment.add("ecmascript.array.includes", statics.getArrayIncludes); // date polyfill

      qx.core.Environment.add("ecmascript.date.now", statics.getDateNow);
      qx.core.Environment.add("ecmascript.date.parse", statics.getDateParse); // error bugfix

      qx.core.Environment.add("ecmascript.error.toString", statics.getErrorToString);
      qx.core.Environment.add("ecmascript.error.stacktrace", statics.getStackTrace); // function polyfill

      qx.core.Environment.add("ecmascript.function.bind", statics.getFunctionBind); // object polyfill

      qx.core.Environment.add("ecmascript.object.keys", statics.getObjectKeys);
      qx.core.Environment.add("ecmascript.object.values", statics.getObjectValues);
      qx.core.Environment.add("ecmascript.object.is", statics.getObjectIs); // number polyfill

      qx.core.Environment.add("ecmascript.number.EPSILON", statics.getEpsilon); // string polyfill

      qx.core.Environment.add("ecmascript.string.startsWith", statics.getStringStartsWith);
      qx.core.Environment.add("ecmascript.string.endsWith", statics.getStringEndsWith);
      qx.core.Environment.add("ecmascript.string.trim", statics.getStringTrim); // ES7 async function support

      qx.core.Environment.add("ecmascript.function.async", statics.getAsyncFunction); // MutationObserver

      qx.core.Environment.add("ecmascript.mutationobserver", statics.getMutationObserver); // Promises

      qx.core.Environment.add("ecmascript.promise.native", statics.getPromiseNative);
    }
  });
  qx.bom.client.EcmaScript.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=EcmaScript.js.map?dt=1566750099714