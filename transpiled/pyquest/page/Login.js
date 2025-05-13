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
      "qx.ui.mobile.form.TextField": {},
      "qx.ui.mobile.form.PasswordField": {},
      "qx.ui.mobile.form.Button": {},
      "qx.ui.mobile.form.Form": {},
      "qx.ui.mobile.form.renderer.Single": {},
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
  qx.Class.define("pyquest.page.Login", {
    extend: qx.ui.mobile.page.NavigationPage,
    construct: function construct() {
      qx.ui.mobile.page.NavigationPage.constructor.call(this);
      this.setTitle("Login");
    },
    members: {
      __form__P_5_0: null,
      // overridden
      _initialize: function _initialize() {
        pyquest.page.Login.superclass.prototype._initialize.call(this);

        // Username
        var user = new qx.ui.mobile.form.TextField();
        user.setRequired(true);

        // Password
        var pwd = new qx.ui.mobile.form.PasswordField();
        pwd.setRequired(true);

        // Login Button
        var loginButton = new qx.ui.mobile.form.Button("Login");
        loginButton.addListener("tap", this._onButtonTap, this);
        var loginForm = this.__form__P_5_0 = new qx.ui.mobile.form.Form();
        loginForm.add(user, "Username");
        loginForm.add(pwd, "Password");

        // Use form renderer
        this.getContent().add(new qx.ui.mobile.form.renderer.Single(loginForm));
        this.getContent().add(loginButton);
      },
      /**
       * Event handler for <code>tap</code> on the login button.
       */
      _onButtonTap: function _onButtonTap() {
        // use form validation
        if (this.__form__P_5_0.validate()) {
          qx.core.Init.getApplication().getRouting().executeGet("/overview");
        }
      }
    }
  });
  pyquest.page.Login.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Login.js.map?dt=1747169145960