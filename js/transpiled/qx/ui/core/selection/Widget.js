(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.selection.Abstract": {
        "construct": true,
        "require": true
      },
      "qx.bom.element.Location": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
  
  ************************************************************************ */

  /**
   * A selection manager, which handles the selection in widgets.
   */
  qx.Class.define("qx.ui.core.selection.Widget", {
    extend: qx.ui.core.selection.Abstract,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param widget {qx.ui.core.Widget} The widget to connect to
     */
    construct: function construct(widget) {
      qx.ui.core.selection.Abstract.constructor.call(this);
      this.__widget = widget;
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      __widget: null,

      /*
      ---------------------------------------------------------------------------
        BASIC SUPPORT
      ---------------------------------------------------------------------------
      */
      // overridden
      _isSelectable: function _isSelectable(item) {
        return this._isItemSelectable(item) && item.getLayoutParent() === this.__widget;
      },
      // overridden
      _selectableToHashCode: function _selectableToHashCode(item) {
        return item.$$hash;
      },
      // overridden
      _styleSelectable: function _styleSelectable(item, type, enabled) {
        enabled ? item.addState(type) : item.removeState(type);
      },
      // overridden
      _capture: function _capture() {
        this.__widget.capture();
      },
      // overridden
      _releaseCapture: function _releaseCapture() {
        this.__widget.releaseCapture();
      },

      /**
       * Helper to return the selectability of the item concerning the
       * user interaction.
       *
       * @param item {qx.ui.core.Widget} The item to check.
       * @return {Boolean} true, if the item is selectable.
       */
      _isItemSelectable: function _isItemSelectable(item) {
        if (this._userInteraction) {
          return item.isVisible() && item.isEnabled();
        } else {
          return item.isVisible();
        }
      },

      /**
       * Returns the connected widget.
       * @return {qx.ui.core.Widget} The widget
       */
      _getWidget: function _getWidget() {
        return this.__widget;
      },

      /*
      ---------------------------------------------------------------------------
        DIMENSION AND LOCATION
      ---------------------------------------------------------------------------
      */
      // overridden
      _getLocation: function _getLocation() {
        var elem = this.__widget.getContentElement().getDomElement();

        return elem ? qx.bom.element.Location.get(elem) : null;
      },
      // overridden
      _getDimension: function _getDimension() {
        return this.__widget.getInnerSize();
      },
      // overridden
      _getSelectableLocationX: function _getSelectableLocationX(item) {
        var computed = item.getBounds();

        if (computed) {
          return {
            left: computed.left,
            right: computed.left + computed.width
          };
        }
      },
      // overridden
      _getSelectableLocationY: function _getSelectableLocationY(item) {
        var computed = item.getBounds();

        if (computed) {
          return {
            top: computed.top,
            bottom: computed.top + computed.height
          };
        }
      },

      /*
      ---------------------------------------------------------------------------
        SCROLL SUPPORT
      ---------------------------------------------------------------------------
      */
      // overridden
      _getScroll: function _getScroll() {
        return {
          left: 0,
          top: 0
        };
      },
      // overridden
      _scrollBy: function _scrollBy(xoff, yoff) {// empty implementation
      },
      // overridden
      _scrollItemIntoView: function _scrollItemIntoView(item) {
        this.__widget.scrollChildIntoView(item);
      },

      /*
      ---------------------------------------------------------------------------
        QUERY SUPPORT
      ---------------------------------------------------------------------------
      */
      // overridden
      getSelectables: function getSelectables(all) {
        // if only the user selectables should be returned
        var oldUserInteraction = false;

        if (!all) {
          oldUserInteraction = this._userInteraction;
          this._userInteraction = true;
        }

        var children = this.__widget.getChildren();

        var result = [];
        var child;

        for (var i = 0, l = children.length; i < l; i++) {
          child = children[i];

          if (this._isItemSelectable(child)) {
            result.push(child);
          }
        } // reset to the former user interaction state


        this._userInteraction = oldUserInteraction;
        return result;
      },
      // overridden
      _getSelectableRange: function _getSelectableRange(item1, item2) {
        // Fast path for identical items
        if (item1 === item2) {
          return [item1];
        } // Iterate over children and collect all items
        // between the given two (including them)


        var children = this.__widget.getChildren();

        var result = [];
        var active = false;
        var child;

        for (var i = 0, l = children.length; i < l; i++) {
          child = children[i];

          if (child === item1 || child === item2) {
            if (active) {
              result.push(child);
              break;
            } else {
              active = true;
            }
          }

          if (active && this._isItemSelectable(child)) {
            result.push(child);
          }
        }

        return result;
      },
      // overridden
      _getFirstSelectable: function _getFirstSelectable() {
        var children = this.__widget.getChildren();

        for (var i = 0, l = children.length; i < l; i++) {
          if (this._isItemSelectable(children[i])) {
            return children[i];
          }
        }

        return null;
      },
      // overridden
      _getLastSelectable: function _getLastSelectable() {
        var children = this.__widget.getChildren();

        for (var i = children.length - 1; i > 0; i--) {
          if (this._isItemSelectable(children[i])) {
            return children[i];
          }
        }

        return null;
      },
      // overridden
      _getRelatedSelectable: function _getRelatedSelectable(item, relation) {
        var vertical = this.__widget.getOrientation() === "vertical";

        var children = this.__widget.getChildren();

        var index = children.indexOf(item);
        var sibling;

        if (vertical && relation === "above" || !vertical && relation === "left") {
          for (var i = index - 1; i >= 0; i--) {
            sibling = children[i];

            if (this._isItemSelectable(sibling)) {
              return sibling;
            }
          }
        } else if (vertical && relation === "under" || !vertical && relation === "right") {
          for (var i = index + 1; i < children.length; i++) {
            sibling = children[i];

            if (this._isItemSelectable(sibling)) {
              return sibling;
            }
          }
        }

        return null;
      },
      // overridden
      _getPage: function _getPage(lead, up) {
        if (up) {
          return this._getFirstSelectable();
        } else {
          return this._getLastSelectable();
        }
      }
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.__widget = null;
    }
  });
  qx.ui.core.selection.Widget.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Widget.js.map?dt=1566750111844