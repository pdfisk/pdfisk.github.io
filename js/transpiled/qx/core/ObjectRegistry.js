(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.log.Logger": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
  
  ************************************************************************ */

  /**
   * Registration for all instances of qooxdoo classes. Mainly
   * used to manage them for the final shutdown sequence and to
   * use weak references when connecting widgets to DOM nodes etc.
   *
   * @ignore(qx.dev, qx.dev.Debug.*)
   */
  qx.Bootstrap.define("qx.core.ObjectRegistry", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */
    statics: {
      /** 
       * @type {Boolean} Whether the application is in the shutdown phase
       * @deprecated {6.0} shutdown is not a valid mechanism to terminate apps 
       * */
      inShutDown: false,

      /** @type {Map} Internal data structure to store objects */
      __registry: {},

      /** @type {Integer} Next new hash code. */
      __nextHash: 0,

      /** @type {Array} List of all free hash codes */
      __freeHashes: [],

      /** @type {String} Post id for hash code creation. */
      __postId: "",

      /** @type {Map} Object hashes to stack traces (for dispose profiling only) */
      __stackTraces: {},

      /**
       * Registers an object into the database. This adds a hashcode
       * to the object (if not already done before) and stores it under
       * this hashcode. You can access this object later using the hashcode
       * by calling {@link #fromHashCode}.
       *
       * All registered objects are automatically disposed on application
       * shutdown. Each registered object must at least have a method
       * called <code>dispose</code>.
       *
       * @param obj {Object} Any object with a dispose() method
       */
      register: function register(obj) {
        var registry = this.__registry;

        if (!registry) {
          return;
        }

        var hash = obj.$$hash;

        if (hash == null) {
          // Create new hash code
          var cache = this.__freeHashes;

          if (cache.length > 0 && true) {
            hash = cache.pop();
          } else {
            hash = this.__nextHash++ + this.__postId;
          } // Store hash code


          obj.$$hash = hash;
        }

        {
          if (!obj.dispose) {
            throw new Error("Invalid object: " + obj);
          }
        }
        registry[hash] = obj;
      },

      /**
       * Removes the given object from the database.
       *
       * @param obj {Object} Any previously registered object
       */
      unregister: function unregister(obj) {
        var hash = obj.$$hash;

        if (hash == null) {
          return;
        }

        var registry = this.__registry;

        if (registry && registry[hash]) {
          delete registry[hash];

          this.__freeHashes.push(hash);
        } // Delete the hash code


        try {
          delete obj.$$hash;
        } catch (ex) {
          // IE has trouble directly removing the hash
          // but it's ok with using removeAttribute
          if (obj.removeAttribute) {
            obj.removeAttribute("$$hash");
          }
        }
      },

      /**
       * Returns an unique identifier for the given object. If such an identifier
       * does not yet exist, create it.
       *
       * @param obj {Object} the object to get the hashcode for
       * @return {String} unique identifier for the given object
       */
      toHashCode: function toHashCode(obj) {
        {
          if (obj == null) {
            throw new Error("Invalid object: " + obj);
          }
        }
        var hash = obj.$$hash;

        if (hash != null) {
          return hash;
        } // Create new hash code


        var cache = this.__freeHashes;

        if (cache.length > 0) {
          hash = cache.pop();
        } else {
          hash = this.__nextHash++ + this.__postId;
        } // Store


        return obj.$$hash = hash;
      },

      /**
       * Clears the unique identifier on the given object.
       *
       * @param obj {Object} the object to clear the hashcode for
       */
      clearHashCode: function clearHashCode(obj) {
        {
          if (obj == null) {
            throw new Error("Invalid object: " + obj);
          }
        }
        var hash = obj.$$hash;

        if (hash != null) {
          this.__freeHashes.push(hash); // Delete the hash code


          try {
            delete obj.$$hash;
          } catch (ex) {
            // IE has trouble directly removing the hash
            // but it's ok with using removeAttribute
            if (obj.removeAttribute) {
              obj.removeAttribute("$$hash");
            }
          }
        }
      },

      /**
       * Get an object instance by its hash code as returned by {@link #toHashCode}.
       * If the object is already disposed or the hashCode is invalid,
       * <code>null</code> is returned.
       *
       * @param hash {String} The object's hash code.
       * @param suppressWarnings {Boolean?} if true warnings are suppressed; default is false
       * @return {qx.core.Object} The corresponding object or <code>null</code>.
       */
      fromHashCode: function fromHashCode(hash, suppressWarnings) {
        var obj = this.__registry[hash] || null;

        if (!obj && !suppressWarnings) {
          qx.log.Logger.warn(this, "Object with hash code " + hash + " does not exist (since Qooxdoo 6.0 fromHashCode requires that you explicitly register objects with qx.core.ObjectRegistry.register)");
        }

        return obj;
      },

      /**
       * Detects whether an object instance is indexed by its hash code as returned by {@link #toHashCode}.
       * Unlike {@link #fromHashCode} this does not output warnings if the object does not exist
       *
       * @param hash {String} The object's hash code.
       * @return {qx.core.Object} The corresponding object or <code>null</code>.
       */
      hasHashCode: function hasHashCode(hash) {
        return !!this.__registry[hash];
      },

      /**
       * Disposing all registered object and cleaning up registry. This is
       * automatically executed at application shutdown.
       * 
       * @deprecated {6.0} shutdown is not a valid means to clean up because destruction order
       * is not defined and dispose()/destructors are deprecated in favour of automatic
       * garbage collection
       */
      shutdown: function shutdown() {
        this.inShutDown = true;
        var registry = this.__registry;
        var hashes = [];

        for (var hash in registry) {
          hashes.push(hash);
        } // sort the objects! Remove the objecs created at startup
        // as late as possible


        hashes.sort(function (a, b) {
          return parseInt(b, 10) - parseInt(a, 10);
        });
        var obj,
            i = 0,
            l = hashes.length;

        while (true) {
          try {
            for (; i < l; i++) {
              hash = hashes[i];
              obj = registry[hash];

              if (obj && obj.dispose) {
                obj.dispose();
              }
            }
          } catch (ex) {
            qx.Bootstrap.error(this, "Could not dispose object " + obj.toString() + ": " + ex, ex);

            if (i !== l) {
              i++;
              continue;
            }
          }

          break;
        }

        qx.Bootstrap.debug(this, "Disposed " + l + " objects");
        delete this.__registry;
      },

      /**
       * Returns the object registry.
       *
       * @return {Object} The registry
       */
      getRegistry: function getRegistry() {
        return this.__registry;
      },

      /**
       * Returns the next hash code that will be used
       *
       * @return {Integer} The next hash code
       * @internal
       */
      getNextHash: function getNextHash() {
        return this.__nextHash;
      },

      /**
       * Returns the postfix that identifies the current iframe
       *
       * @return {Integer} The next hash code
       * @internal
       */
      getPostId: function getPostId() {
        return this.__postId;
      },

      /**
       * Returns the map of stack traces recorded when objects are registered
       * (for dispose profiling)
       * @return {Map} Map: object hash codes to stack traces
       * @internal
       */
      getStackTraces: function getStackTraces() {
        return this.__stackTraces;
      }
    },
    defer: function defer(statics) {
      if (window && window.top) {
        var frames = window.top.frames;

        for (var i = 0; i < frames.length; i++) {
          if (frames[i] === window) {
            statics.__postId = "-" + (i + 1);
            return;
          }
        }
      }

      statics.__postId = "-0";
    }
  });
  qx.core.ObjectRegistry.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ObjectRegistry.js.map?dt=1566750098977