(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Mobile": {
        "require": true
      },
      "qx.log.appender.Native": {},
      "qx.log.appender.Console": {},
      "pyquest.page.Login": {},
      "pyquest.page.Overview": {},
      "qx.ui.mobile.page.Manager": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2025 
  
     License: MIT license
  
     Authors: 
  
  ************************************************************************ */

  /**
   * This is the main application class of your custom application "${Name}"
   *
   * @asset(pyquest/*)
   */
  qx.Class.define("pyquest.Application", {
    extend: qx.application.Mobile,
    members: {
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       */
      main: function main() {
        // Call super class
        pyquest.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        {
          // support native logging capabilities, e.g. Firebug for Firefox
          qx.log.appender.Native;
          // support additional cross-browser console.
          // Trigger a "longtap" event on the navigation bar for opening it.
          qx.log.appender.Console;
        }

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
          Remove or edit the following code to create your application.
        -------------------------------------------------------------------------
        */

        var login = new pyquest.page.Login();
        var overview = new pyquest.page.Overview();

        // Add the pages to the page manager.
        var manager = new qx.ui.mobile.page.Manager(false);
        manager.addDetail([login, overview]);

        // Initialize the application routing
        this.getRouting().onGet("/", this._show, login);
        this.getRouting().onGet("/overview", this._show, overview);
        this.getRouting().init();
      },
      /**
       * Default behaviour when a route matches. Displays the corresponding page on screen.
       * @param data {Map} the animation properties
       */
      _show: function _show(data) {
        this.show(data.customData);
      }
    }
  });
  pyquest.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1747169144938