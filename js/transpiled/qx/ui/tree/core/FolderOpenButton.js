(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.basic.Image": {
        "construct": true,
        "require": true
      },
      "qx.ui.core.MExecutable": {
        "require": true
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
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * The small folder open/close button
   */
  qx.Class.define("qx.ui.tree.core.FolderOpenButton", {
    extend: qx.ui.basic.Image,
    include: qx.ui.core.MExecutable,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      qx.ui.basic.Image.constructor.call(this);
      this.initOpen();
      this.addListener("tap", this._onTap);
      this.addListener("pointerdown", this._stopPropagation, this);
      this.addListener("pointerup", this._stopPropagation, this);
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */
    properties: {
      /**
       * Whether the button state is "open"
       */
      open: {
        check: "Boolean",
        init: false,
        event: "changeOpen",
        apply: "_applyOpen"
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      // property apply
      _applyOpen: function _applyOpen(value, old) {
        value ? this.addState("opened") : this.removeState("opened");
        this.execute();
      },

      /**
       * Stop tap event propagation
       *
       * @param e {qx.event.type.Event} The event object
       */
      _stopPropagation: function _stopPropagation(e) {
        e.stopPropagation();
      },

      /**
       * Pointer tap event listener
       *
       * @param e {qx.event.type.Pointer} Pointer event
       */
      _onTap: function _onTap(e) {
        this.toggleOpen();
        e.stopPropagation();
      }
    }
  });
  qx.ui.tree.core.FolderOpenButton.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=FolderOpenButton.js.map?dt=1566750111714