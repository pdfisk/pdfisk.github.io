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
      "qx.ui.core.MChildrenHandling": {
        "require": true
      },
      "qx.ui.window.MDesktop": {
        "require": true
      },
      "qx.ui.core.MBlocker": {
        "require": true
      },
      "qx.ui.window.IDesktop": {
        "require": true
      },
      "qx.ui.window.Window": {
        "construct": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
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
   * The desktop is a widget, which can act as container for windows. It can be
   * used to define a clipping region for internal windows e.g. to create
   * an MDI like application.
   */
  qx.Class.define("qx.ui.window.Desktop", {
    extend: qx.ui.core.Widget,
    include: [qx.ui.core.MChildrenHandling, qx.ui.window.MDesktop, qx.ui.core.MBlocker],
    implement: qx.ui.window.IDesktop,

    /**
     * @param windowManager {qx.ui.window.IWindowManager} The window manager to use for the desktop.
     *    If not provided, an instance of {@link qx.ui.window.Window#DEFAULT_MANAGER_CLASS} is used.
     */
    construct: function construct(windowManager) {
      qx.ui.core.Widget.constructor.call(this);
      windowManager = windowManager || new qx.ui.window.Window.DEFAULT_MANAGER_CLASS();
      this.getContentElement().disableScrolling();

      this._setLayout(new qx.ui.layout.Canvas().set({
        desktop: true
      }));

      this.setWindowManager(windowManager);
    }
  });
  qx.ui.window.Desktop.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Desktop.js.map?dt=1566750092197