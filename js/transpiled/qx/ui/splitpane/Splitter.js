(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.ui.basic.Image": {}
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
       * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */

  /**
   * The splitter is the element between the two panes.
   *
   * @internal
   *
   * @childControl knob {qx.ui.basic.Image} knob to resize the splitpane
   */
  qx.Class.define("qx.ui.splitpane.Splitter", {
    extend: qx.ui.core.Widget,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param parentWidget {qx.ui.splitpane.Pane} The underlaying split pane.
     */
    construct: function construct(parentWidget) {
      qx.ui.core.Widget.constructor.call(this); // set layout

      if (parentWidget.getOrientation() == "vertical") {
        this._setLayout(new qx.ui.layout.HBox(0, "center"));

        this._getLayout().setAlignY("middle");
      } else {
        this._setLayout(new qx.ui.layout.VBox(0, "middle"));

        this._getLayout().setAlignX("center");
      } // create knob child control


      if (this.getVisible()) {
        this._createChildControl("knob");
      }
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */
    properties: {
      // overridden
      allowShrinkX: {
        refine: true,
        init: false
      },
      // overridden
      allowShrinkY: {
        refine: true,
        init: false
      },

      /**
       * The visibility of the splitter.
       * Allows to remove the splitter in favor of other visual separation means like background color differences.
       */
      visible: {
        init: true,
        check: "Boolean",
        themeable: true,
        apply: "_applyVisible"
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      // overridden
      _createChildControlImpl: function _createChildControlImpl(id, hash) {
        var control;

        switch (id) {
          // Create splitter knob
          case "knob":
            control = new qx.ui.basic.Image();

            this._add(control);

            break;
        }

        return control || qx.ui.splitpane.Splitter.prototype._createChildControlImpl.base.call(this, id);
      },
      _applyVisible: function _applyVisible(visible, old) {
        this.getChildControl("knob").setVisibility(visible ? "visible" : "excluded");
      }
    }
  });
  qx.ui.splitpane.Splitter.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Splitter.js.map?dt=1566750102862