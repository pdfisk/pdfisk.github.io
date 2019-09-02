(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qxlib.theme.Color": {
        "require": true
      },
      "qxlib.theme.Decoration": {
        "require": true
      },
      "qxlib.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "qxlib.theme.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */
  qx.Theme.define("qxlib.theme.Theme", {
    meta: {
      color: qxlib.theme.Color,
      decoration: qxlib.theme.Decoration,
      font: qxlib.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: qxlib.theme.Appearance
    }
  });
  qxlib.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Theme.js.map?dt=1566750086268