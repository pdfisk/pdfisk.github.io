(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Decoration": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Theme.define("qxlib.theme.Decoration", {
    extend: qx.theme.indigo.Decoration,
    decorations: {
      "button-box": {
        style: {
          radius: 3
        }
      },
      "tabview-page-button-top": {
        style: {
          width: [1, 1, 2, 1],
          colorTop: "windowFrame",
          colorLeft: "windowFrame",
          colorRight: "windowFrame",
          colorBottom: "tabSelected",
          radius: [3, 3, 0, 0]
        }
      },
      "tabview-pane-top-checked": {
        style: {
          widthTop: 5,
          colorTop: "tabSelected",
          style: "solid"
        }
      },
      "window": {
        style: {
          width: 1,
          color: "inactiveBorder",
          innerWidth: 4,
          innerColor: "inactiveBorder",
          shadowLength: 1,
          shadowBlurRadius: 3,
          shadowColor: "shadow",
          backgroundColor: "background"
        }
      },
      "window-active": {
        include: "window",
        style: {
          color: "activeBorder",
          innerColor: "activeBorder",
          shadowLength: 2,
          shadowBlurRadius: 5
        }
      },
      "window-caption": {
        style: {
          color: "inactiveCaptionText"
        }
      },
      "window-caption-active": {
        style: {
          color: "activeCaptionText"
        }
      }
    }
  });
  qxlib.theme.Decoration.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Decoration.js.map?dt=1566750092767