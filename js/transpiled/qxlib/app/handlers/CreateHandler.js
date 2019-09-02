function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxlib.app.handlers.CreateHandler", {
    type: "singleton",
    extend: qx.core.Object,
    statics: {
      createWidget: function createWidget(message, args) {
        return this.getInstance().createWidget(message, args);
      }
    },
    properties: {},
    members: {
      createWidget: function createWidget(proxyClass, args) {
        if (!args) args = [];
        var ctor = this.resolveFromName(proxyClass);
        if (!ctor) return null;
        var obj = Object.create(ctor.prototype);
        obj.constructor = ctor;
        var newobj = ctor.apply(obj, args);
        if (_typeof(newobj) === "object") obj = newobj;
        return obj;
      },
      resolveFromName: function resolveFromName(name) {
        var ns = window;
        name.split(".").forEach(function (x) {
          ns = ns === null ? null : ns[x];
        });
        return ns;
      }
    }
  });
  qxlib.app.handlers.CreateHandler.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=CreateHandler.js.map?dt=1566750094040