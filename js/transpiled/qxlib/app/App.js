(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      },
      "qxlib.app.handlers.CreateHandler": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxlib.app.App", {
    type: "singleton",
    extend: qx.core.Object,
    statics: {
      createWidget: function createWidget(proxyClass, args) {
        return qxlib.app.handlers.CreateHandler.createWidget(proxyClass, args);
      }
    },
    properties: {
      root: {}
    },
    members: {
      start: function start(root) {
        this.setRoot(root);

        if (window.VistaQx) {
          if (window.VistaQx.App) {
            window.VistaQx.App.Start(root);
          }
        } else {
          console.log('VistaQx.App not found');
        }
      }
    }
  });
  qxlib.app.App.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=App.js.map?dt=1566750087200