(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qxlib.app.App": {},
      "qx.bom.Cookie": {},
      "qx.data.Array": {},
      "qx.data.marshal.Json": {},
      "qx.event.type.Event": {},
      "qx.io.request.Xhr": {},
      "qx.lang.String": {},
      "qx.ui.basic.Atom": {},
      "qx.ui.basic.Image": {},
      "qx.ui.container.Composite": {},
      "qx.ui.container.Scroll": {},
      "qx.ui.core.Widget": {},
      "qx.ui.decoration.Decorator": {},
      "qx.ui.embed.Html": {},
      "qx.ui.embed.Iframe": {},
      "qx.ui.embed.ThemedIframe": {},
      "qx.ui.form.AbstractField": {},
      "qx.ui.form.AbstractSelectBox": {},
      "qx.ui.form.Button": {},
      "qx.ui.form.CheckBox": {},
      "qx.ui.form.DateField": {},
      "qx.ui.form.Form": {},
      "qx.ui.form.IForm": {},
      "qx.ui.form.MenuButton": {},
      "qx.ui.form.PasswordField": {},
      "qx.ui.form.RadioButton": {},
      "qx.ui.form.RadioButtonGroup": {},
      "qx.ui.form.SelectBox": {},
      "qx.ui.form.SplitButton": {},
      "qx.ui.form.TextArea": {},
      "qx.ui.form.TextField": {},
      "qx.ui.form.VirtualComboBox": {},
      "qx.ui.form.VirtualSelectBox": {},
      "qx.ui.form.renderer.Single": {},
      "qx.ui.form.validation.Manager": {},
      "qx.ui.layout.Dock": {},
      "qx.ui.layout.Grid": {},
      "qx.ui.layout.Grow": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.menu.Button": {},
      "qx.ui.menu.CheckBox": {},
      "qx.ui.menu.Menu": {},
      "qx.ui.menu.Manager": {},
      "qx.ui.menu.RadioButton": {},
      "qx.ui.menu.Separator": {},
      "qx.ui.menubar.Button": {},
      "qx.ui.menubar.MenuBar": {},
      "qx.ui.splitpane.Pane": {},
      "qx.ui.table.columnmodel.Resize": {},
      "qx.ui.table.columnmodel.resizebehavior.Abstract": {},
      "qx.ui.table.model.Simple": {},
      "qx.ui.table.Table": {},
      "qx.ui.tabview.Page": {},
      "qx.ui.tabview.TabButton": {},
      "qx.ui.tabview.TabView": {},
      "qx.ui.tree.Tree": {},
      "qx.ui.tree.TreeFile": {},
      "qx.ui.tree.TreeFolder": {},
      "qx.ui.tree.VirtualTree": {},
      "qx.ui.tree.VirtualTreeItem": {},
      "qx.ui.tree.selection.SelectionManager": {},
      "qx.ui.window.Desktop": {},
      "qx.ui.window.Window": {},
      "qx.util.DeferredCall": {},
      "qx.util.TimerManager": {},
      "qx.util.format.DateFormat": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxlib.Application", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxlib.Application.prototype.main.base.call(this);
        this.buildLib();
        var root = this.getRoot();
        qxlib.app.App.getInstance().start(root);
      },
      buildLib: function buildLib() {
        var dummy = qx.bom.Cookie;
        dummy = qx.data.Array;
        dummy = qx.data.marshal.Json;
        dummy = qx.event.type.Event;
        dummy = qx.io.request.Xhr;
        dummy = qx.lang.String;
        dummy = qx.ui.basic.Atom;
        dummy = qx.ui.basic.Image;
        dummy = qx.ui.container.Composite;
        dummy = qx.ui.container.Scroll;
        dummy = qx.ui.core.Widget;
        dummy = qx.ui.decoration.Decorator;
        dummy = qx.ui.embed.Html;
        dummy = qx.ui.embed.Iframe;
        dummy = qx.ui.embed.ThemedIframe;
        dummy = qx.ui.form.AbstractField;
        dummy = qx.ui.form.AbstractSelectBox;
        dummy = qx.ui.form.Button;
        dummy = qx.ui.form.CheckBox;
        dummy = qx.ui.form.DateField;
        dummy = qx.ui.form.Form;
        dummy = qx.ui.form.IForm;
        dummy = qx.ui.form.MenuButton;
        dummy = qx.ui.form.PasswordField;
        dummy = qx.ui.form.RadioButton;
        dummy = qx.ui.form.RadioButtonGroup;
        dummy = qx.ui.form.SelectBox;
        dummy = qx.ui.form.SplitButton;
        dummy = qx.ui.form.TextArea;
        dummy = qx.ui.form.TextField;
        dummy = qx.ui.form.VirtualComboBox;
        dummy = qx.ui.form.VirtualSelectBox;
        dummy = qx.ui.form.renderer.Single;
        dummy = qx.ui.form.validation.Manager;
        dummy = qx.ui.layout.Dock;
        dummy = qx.ui.layout.Grid;
        dummy = qx.ui.layout.Grow;
        dummy = qx.ui.layout.HBox;
        dummy = qx.ui.layout.VBox;
        dummy = qx.ui.menu.Button;
        dummy = qx.ui.menu.CheckBox;
        dummy = qx.ui.menu.Menu;
        dummy = qx.ui.menu.Manager;
        dummy = qx.ui.menu.RadioButton;
        dummy = qx.ui.menu.Separator;
        dummy = qx.ui.menubar.Button;
        dummy = qx.ui.menubar.MenuBar;
        dummy = qx.ui.splitpane.Pane;
        dummy = qx.ui.table.columnmodel.Resize;
        dummy = qx.ui.table.columnmodel.resizebehavior.Abstract;
        dummy = qx.ui.table.model.Simple;
        dummy = qx.ui.table.Table;
        dummy = qx.ui.table.columnmodel.Resize;
        dummy = qx.ui.tabview.Page;
        dummy = qx.ui.tabview.TabButton;
        dummy = qx.ui.tabview.TabView;
        dummy = qx.ui.tree.Tree;
        dummy = qx.ui.tree.TreeFile;
        dummy = qx.ui.tree.TreeFolder;
        dummy = qx.ui.tree.VirtualTree;
        dummy = qx.ui.tree.VirtualTreeItem;
        dummy = qx.ui.tree.selection.SelectionManager;
        dummy = qx.ui.window.Desktop;
        dummy = qx.ui.window.Window;
        dummy = qx.util.DeferredCall;
        dummy = qx.util.TimerManager;
        dummy = qx.util.format.DateFormat;
      }
    }
  });
  qxlib.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1566750086214