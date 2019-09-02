(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Theme.define("qxlib.theme.Appearance", {
    extend: qx.theme.indigo.Appearance,
    appearances: {
      "button/label": {
        alias: "atom/label",
        style: function style(states) {
          var properties = {
            cursor: 'pointer',
            opacity: 1,
            padding: 10,
            textColor: 'buttonText'
          };

          if (states.checked) {
            properties.textColor = 'windowText';
          }

          if (states.disabled) {
            properties.cursor = 'default';
            properties.opacity = 0.5;
          }

          if (states.focused) {}

          if (states.hovered) {}

          if (states.pressed) {
            properties.textColor = 'buttonText';
          }

          return properties;
        }
      },
      "button-frame": {
        alias: "atom",
        style: function style(states) {
          var decorator = "button-box";
          var properties = {
            backgroundColor: 'buttonFace',
            decorator: decorator
          };
          return properties;
        }
      },
      "tabview-page/button": {
        style: function style(states) {
          var decorator, padding, margin; // default padding

          if (states.barTop || states.barBottom) {
            padding = [8, 16, 8, 13];
          } else {
            padding = [8, 4, 8, 4];
          }

          if (states.checked) margin = [0, 0, 0, 0];else margin = [0, 0, -1, 0]; // decorator
          // if (states.checked) {

          if (states.barTop) {
            decorator = "tabview-page-button-top";
          } else if (states.barBottom) {
            decorator = "tabview-page-button-bottom";
          } else if (states.barRight) {
            decorator = "tabview-page-button-right";
          } else if (states.barLeft) {
            decorator = "tabview-page-button-left";
          } // } else {
          // 	for (var i = 0; i < padding.length; i++) {
          // 		padding[i] += 1;
          // 	}
          // 		if (states.barTop) {
          // 		padding[2] -= 1;
          // 	} else if (states.barBottom) {
          // 		padding[0] -= 1;
          // 	} else if (states.barRight) {
          // 		padding[3] -= 1;
          // 	} else if (states.barLeft) {
          // 		padding[1] -= 1;
          // 	}
          // }


          return {
            zIndex: states.checked ? 10 : 5,
            backgroundColor: states.checked ? "tabSelected" : "tabFace",
            margin: margin,
            decorator: decorator,
            textColor: states.checked ? "tabSelectedText" : "windowFrame",
            padding: padding,
            cursor: "pointer"
          };
        }
      },
      // "tabview/bar":
      // {
      // 	alias: "slidebar",
      // 	style: function (states) {
      // 		var marginTop = 0, marginRight = 0, marginBottom = 0, marginLeft = 0;
      // 		if (states.barTop) {
      // 			marginBottom -= 1;
      // 		} else if (states.barBottom) {
      // 			marginTop -= 1;
      // 		} else if (states.barRight) {
      // 			marginLeft -= 1;
      // 		} else {
      // 			marginRight -= 1;
      // 		}
      // 		return {
      // 			marginBottom: marginBottom,
      // 			marginTop: marginTop,
      // 			marginLeft: marginLeft,
      // 			marginRight: marginRight,
      // 			widthTop: 5
      // 		};
      // 	}
      // },
      "tabview/pane": {
        style: function style(states) {
          return {
            // borderColor: "red",
            // marginTop: 1,
            // border: [5, 0, 0, 0],
            // color: "buttonFace",
            decorator: "tabview-pane-top-checked",
            padding: 2
          };
        }
      },
      "treevirtual": {
        include: "textfield",
        alias: "table",
        style: function style(states, superStyles) {
          return {
            padding: [superStyles.padding[0] + 2, superStyles.padding[1] + 1]
          };
        }
      },
      "treevirtual/folder": {
        style: function style(states) {
          return {
            icon: states.opened ? "resource/qx/icon/16/places/folder-open.png" : "resource/qx/icon/16/places/folder.png",
            opacity: states.drag ? 0.5 : undefined
          };
        }
      },
      "treevirtual/file": {
        include: "treevirtual-folder",
        alias: "treevirtual-folder",
        style: function style(states) {
          return {
            icon: "resource/qx/icon/16/mimetypes/text-plain.png",
            opacity: states.drag ? 0.5 : undefined
          };
        }
      },
      "window/captionbar": {
        style: function style(states) {
          return {
            backgroundColor: states.active ? "activeCaption" : "inactiveCaption",
            padding: [0, 10, 4, 10],
            height: 38,
            font: "window-title",
            cursor: "move",
            textColor: "activeCaptionText",
            decorator: "window-caption"
          };
        }
      },
      "window/title": {
        style: function style(states) {
          return {
            textColor: states.active ? "activeCaptionText" : "inactiveCaptionText",
            font: "window-title",
            textAlign: "left",
            alignY: "middle"
          };
        }
      }
    }
  });
  qxlib.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Appearance.js.map?dt=1566750092841