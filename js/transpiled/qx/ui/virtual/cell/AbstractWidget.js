(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.ui.virtual.cell.IWidgetCell": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /**
   * Abstract base class for widget based cell renderer.
   */
  qx.Class.define("qx.ui.virtual.cell.AbstractWidget", {
    extend: qx.core.Object,
    implement: [qx.ui.virtual.cell.IWidgetCell],
    construct: function construct() {
      qx.core.Object.constructor.call(this);
      this.__pool = [];
    },
    events: {
      /** Fired when a new <code>LayoutItem</code> is created. */
      "created": "qx.event.type.Data"
    },
    members: {
      __pool: null,

      /**
       * Creates the widget instance.
       *
       * @abstract
       * @return {qx.ui.core.LayoutItem} The widget used to render a cell
       */
      _createWidget: function _createWidget() {
        throw new Error("abstract method call");
      },
      // interface implementation
      updateData: function updateData(widget, data) {
        throw new Error("abstract method call");
      },
      // interface implementation
      updateStates: function updateStates(widget, states) {
        var oldStates = widget.getUserData("cell.states"); // remove old states

        if (oldStates) {
          var newStates = states || {};

          for (var state in oldStates) {
            if (!newStates[state]) {
              widget.removeState(state);
            }
          }
        } else {
          oldStates = {};
        } // apply new states


        if (states) {
          for (var state in states) {
            if (!oldStates.state) {
              widget.addState(state);
            }
          }
        }

        widget.setUserData("cell.states", states);
      },
      // interface implementation
      getCellWidget: function getCellWidget(data, states) {
        var widget = this.__getWidgetFromPool();

        this.updateStates(widget, states);
        this.updateData(widget, data);
        return widget;
      },
      // interface implementation
      pool: function pool(widget) {
        this.__pool.push(widget);
      },

      /**
       * Cleanup all <code>LayoutItem</code> and destroy them.
       */
      _cleanupPool: function _cleanupPool() {
        var widget = this.__pool.pop();

        while (widget) {
          widget.destroy();
          widget = this.__pool.pop();
        }
      },

      /**
       * Returns a <code>LayoutItem</code> from the pool, when the pool is empty
       * a new <code>LayoutItem</code> is created.
       *
       * @return {qx.ui.core.LayoutItem} The cell widget
       */
      __getWidgetFromPool: function __getWidgetFromPool() {
        var widget = this.__pool.shift();

        if (widget == null) {
          widget = this._createWidget();
          this.fireDataEvent("created", widget);
        }

        return widget;
      }
    },

    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this._cleanupPool();

      this.__pool = null;
    }
  });
  qx.ui.virtual.cell.AbstractWidget.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=AbstractWidget.js.map?dt=1566750115059