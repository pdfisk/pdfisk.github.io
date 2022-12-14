(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.virtual.selection.Abstract": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Fabian Jakobs (fjakobs)
       * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */

  /**
   * EXPERIMENTAL!
   *
   * Row selection manager
   */
  qx.Class.define("qx.ui.virtual.selection.Row", {
    extend: qx.ui.virtual.selection.Abstract,

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      /**
       * Returns the number of all items in the pane. This number may contain
       * unselectable items as well.
       *
       * @return {Integer} number of items
       */
      _getItemCount: function _getItemCount() {
        return this._pane.getRowConfig().getItemCount();
      },

      /*
      ---------------------------------------------------------------------------
        IMPLEMENT ABSTRACT METHODS
      ---------------------------------------------------------------------------
      */
      // overridden
      _getSelectableFromPointerEvent: function _getSelectableFromPointerEvent(event) {
        var cell = this._pane.getCellAtPosition(event.getDocumentLeft(), event.getDocumentTop());

        if (!cell) {
          return null;
        }

        return this._isSelectable(cell.row) ? cell.row : null;
      },
      // overridden
      getSelectables: function getSelectables(all) {
        var selectables = [];

        for (var i = 0, l = this._getItemCount(); i < l; i++) {
          if (this._isSelectable(i)) {
            selectables.push(i);
          }
        }

        return selectables;
      },
      // overridden
      _getSelectableRange: function _getSelectableRange(item1, item2) {
        var selectables = [];
        var min = Math.min(item1, item2);
        var max = Math.max(item1, item2);

        for (var i = min; i <= max; i++) {
          if (this._isSelectable(i)) {
            selectables.push(i);
          }
        }

        return selectables;
      },
      // overridden
      _getFirstSelectable: function _getFirstSelectable() {
        var count = this._getItemCount();

        for (var i = 0; i < count; i++) {
          if (this._isSelectable(i)) {
            return i;
          }
        }

        return null;
      },
      // overridden
      _getLastSelectable: function _getLastSelectable() {
        var count = this._getItemCount();

        for (var i = count - 1; i >= 0; i--) {
          if (this._isSelectable(i)) {
            return i;
          }
        }

        return null;
      },
      // overridden
      _getRelatedSelectable: function _getRelatedSelectable(item, relation) {
        if (relation == "above") {
          var startIndex = item - 1;
          var endIndex = 0;
          var increment = -1;
        } else if (relation == "under") {
          var startIndex = item + 1;
          var endIndex = this._getItemCount() - 1;
          var increment = 1;
        } else {
          return null;
        }

        for (var i = startIndex; i !== endIndex + increment; i += increment) {
          if (this._isSelectable(i)) {
            return i;
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
      },
      // overridden
      _selectableToHashCode: function _selectableToHashCode(item) {
        return item;
      },
      // overridden
      _scrollItemIntoView: function _scrollItemIntoView(item) {
        if (this._autoScrollIntoView) {
          this._pane.scrollRowIntoView(item);
        }
      },
      // overridden
      _getSelectableLocationX: function _getSelectableLocationX(item) {
        return {
          left: 0,
          right: this._pane.getColumnConfig().getTotalSize() - 1
        };
      },
      // overridden
      _getSelectableLocationY: function _getSelectableLocationY(item) {
        var rowConfig = this._pane.getRowConfig();

        var itemTop = rowConfig.getItemPosition(item);
        var itemBottom = itemTop + rowConfig.getItemSize(item) - 1;
        return {
          top: itemTop,
          bottom: itemBottom
        };
      }
    }
  });
  qx.ui.virtual.selection.Row.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Row.js.map?dt=1566750111377