(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.scroll.AbstractScrollArea": {
        "construct": true,
        "require": true
      },
      "qx.ui.core.MContentPadding": {
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
   * Container, which allows vertical and horizontal scrolling if the contents is
   * larger than the container.
   *
   * Note that this class can only have one child widget. This container has a
   * fixed layout, which cannot be changed.
   *
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *   // create scroll container
   *   var scroll = new qx.ui.container.Scroll().set({
   *     width: 300,
   *     height: 200
   *   });
   *
   *   // add a widget which is larger than the container
   *   scroll.add(new qx.ui.core.Widget().set({
   *     width: 600,
   *     minWidth: 600,
   *     height: 400,
   *     minHeight: 400
   *   }));
   *
   *   this.getRoot().add(scroll);
   * </pre>
   *
   * This example creates a scroll container and adds a widget, which is larger
   * than the container. This will cause the container to display vertical
   * and horizontal toolbars.
   *
   * *External Documentation*
   *
   * <a href='http://manual.qooxdoo.org/${qxversion}/pages/widget/scroll.html' target='_blank'>
   * Documentation of this widget in the qooxdoo manual.</a>
   */
  qx.Class.define("qx.ui.container.Scroll", {
    extend: qx.ui.core.scroll.AbstractScrollArea,
    include: [qx.ui.core.MContentPadding],

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param content {qx.ui.core.LayoutItem?null} The content widget of the scroll
     *    container.
     */
    construct: function construct(content) {
      qx.ui.core.scroll.AbstractScrollArea.constructor.call(this);

      if (content) {
        this.add(content);
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      /**
       * Sets the content of the scroll container. Scroll containers
       * may only have one child, so it always replaces the current
       * child with the given one.
       *
       * @param widget {qx.ui.core.Widget} Widget to insert
       */
      add: function add(widget) {
        this.getChildControl("pane").add(widget);
      },

      /**
       * Returns the content of the scroll area.
       *
       * @param widget {qx.ui.core.Widget} Widget to remove
       */
      remove: function remove(widget) {
        this.getChildControl("pane").remove(widget);
      },

      /**
       * Returns the content of the scroll container.
       *
       * Scroll containers may only have one child. This
       * method returns an array containing the child or an empty array.
       *
       * @return {Object[]} The child array
       */
      getChildren: function getChildren() {
        return this.getChildControl("pane").getChildren();
      },

      /**
       * Returns the element, to which the content padding should be applied.
       *
       * @return {qx.ui.core.Widget} The content padding target.
       */
      _getContentPaddingTarget: function _getContentPaddingTarget() {
        return this.getChildControl("pane");
      }
    }
  });
  qx.ui.container.Scroll.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Scroll.js.map?dt=1566750088139