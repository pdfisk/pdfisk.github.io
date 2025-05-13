(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.page.NavigationPage": {
        "construct": true,
        "require": true
      },
      "qx.ui.mobile.basic.Label": {},
      "qx.core.Init": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */

  /**
   * TODO: needs documentation
   */
  qx.Class.define("pyquest.page.Overview", {
    extend: qx.ui.mobile.page.NavigationPage,
    construct: function construct() {
      qx.ui.mobile.page.NavigationPage.constructor.call(this);
      this.setTitle("Overview");
      this.setShowBackButton(true);
      this.setBackButtonText("Back");
    },
    members: {
      // overridden
      _initialize: function _initialize() {
        pyquest.page.Overview.superclass.prototype._initialize.call(this, arguments);
        this.getContent().add(new qx.ui.mobile.basic.Label("Your first app."));
      },
      // overridden
      _back: function _back(triggeredByKeyEvent) {
        qx.core.Init.getApplication().getRouting().back();
      }
    }
  });
  pyquest.page.Overview.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Overview.js.map?dt=1747169145994