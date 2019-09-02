(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Font": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Theme.define("qxlib.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {
      "default": {
        "size": 13,
        "family": ["helvetica", "arial", "verdana", "sans-serif"]
      },
      "window-title": {
        "size": 16,
        "family": ["helvetica", "arial", "  verdana", "sans-serif"],
        "bold": false
      },
      "defaultBold": {
        "size": 13,
        "family": ["helvetica", "arial", " verdana", "sans-serif"],
        "bold": true
      },
      "menu": {
        "size": 13,
        "family": ["arial", "verdana", "sans-serif"]
      }
    }
  });
  qxlib.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Font.js.map?dt=1566750092784