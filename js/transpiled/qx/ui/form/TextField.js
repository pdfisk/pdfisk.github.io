(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.AbstractField": {
        "require": true
      },
      "qx.bom.client.Engine": {},
      "qx.bom.client.Browser": {},
      "qx.bom.client.Device": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        },
        "engine.version": {
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "className": "qx.bom.client.Browser"
        },
        "device.type": {
          "className": "qx.bom.client.Device"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Andreas Ecker (ecker)
       * Fabian Jakobs (fjakobs)
       * Adrian Olaru (adrianolaru)
  
  ************************************************************************ */

  /**
   * The TextField is a single-line text input field.
   */
  qx.Class.define("qx.ui.form.TextField", {
    extend: qx.ui.form.AbstractField,

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */
    properties: {
      // overridden
      appearance: {
        refine: true,
        init: "textfield"
      },
      // overridden
      allowGrowY: {
        refine: true,
        init: false
      },
      // overridden
      allowShrinkY: {
        refine: true,
        init: false
      }
    },
    members: {
      // overridden
      _renderContentElement: function _renderContentElement(innerHeight, element) {
        if (qx.core.Environment.get("engine.name") == "mshtml" && (parseInt(qx.core.Environment.get("engine.version"), 10) < 9 || qx.core.Environment.get("browser.documentmode") < 9)) {
          element.setStyles({
            "line-height": innerHeight + 'px'
          });
        }
      },
      // overridden
      _createContentElement: function _createContentElement() {
        var el = qx.ui.form.TextField.prototype._createContentElement.base.call(this);

        var deviceType = qx.core.Environment.get("device.type");

        if (deviceType == "tablet" || deviceType == "mobile") {
          el.addListener("keypress", this._onKeyPress, this);
        }

        return el;
      },

      /**
      * Close the virtual keyboard if the Enter key is pressed.
      * @param evt {qx.event.type.KeySequence} the keypress event.
      */
      _onKeyPress: function _onKeyPress(evt) {
        // On return
        if (evt.getKeyIdentifier() == "Enter") {
          if (this.isFocusable()) {
            this.blur();
          } else {
            // When the text field is not focusable, blur() will raise an exception on
            // touch devices and the virtual keyboard is not closed. To work around this
            // issue, we're enabling the focus just for the blur() call.
            this.setFocusable(true);
            this.blur();
            this.setFocusable(false);
          }
        }
      }
    },
    destruct: function destruct() {
      this.getContentElement().removeListener("keypress", this._onKeyPress, this);
    }
  });
  qx.ui.form.TextField.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TextField.js.map?dt=1566750089978