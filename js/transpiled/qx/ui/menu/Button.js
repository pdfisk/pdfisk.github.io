(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.menu.AbstractButton": {
        "construct": true,
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
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * The real menu button class which supports a command and an icon. All
   * other features are inherited from the {@link qx.ui.menu.AbstractButton}
   * class.
   */
  qx.Class.define("qx.ui.menu.Button", {
    extend: qx.ui.menu.AbstractButton,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param label {String} Initial label
     * @param icon {String} Initial icon
     * @param command {qx.ui.command.Command} Initial command (shortcut)
     * @param menu {qx.ui.menu.Menu} Initial sub menu
     */
    construct: function construct(label, icon, command, menu) {
      qx.ui.menu.AbstractButton.constructor.call(this); // Initialize with incoming arguments

      if (label != null) {
        this.setLabel(label);
      }

      if (icon != null) {
        this.setIcon(icon);
      }

      if (command != null) {
        this.setCommand(command);
      }

      if (menu != null) {
        this.setMenu(menu);
      }
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */
    properties: {
      // overridden
      appearance: {
        refine: true,
        init: "menu-button"
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER
      ---------------------------------------------------------------------------
      */
      // overridden
      _onTap: function _onTap(e) {
        if (e.isLeftPressed() && this.getMenu()) {
          this.execute(); // don't close menus if the button is a sub menu button

          this.getMenu().open();
          return;
        }

        qx.ui.menu.Button.prototype._onTap.base.call(this, e);
      }
    }
  });
  qx.ui.menu.Button.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Button.js.map?dt=1566750090730