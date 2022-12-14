(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.toolbar.ToolBar": {
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
  
  ************************************************************************ */

  /**
   * Container for menubar buttons to display a classic application menu.
   */
  qx.Class.define("qx.ui.menubar.MenuBar", {
    extend: qx.ui.toolbar.ToolBar,

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */
    properties: {
      /** Appearance of the widget */
      appearance: {
        refine: true,
        init: "menubar"
      }
    }
  });
  qx.ui.menubar.MenuBar.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MenuBar.js.map?dt=1566750091063