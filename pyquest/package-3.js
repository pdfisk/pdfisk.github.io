(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.element.Style": {},
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.dom.Node": {},
      "qx.bom.Viewport": {},
      "qx.bom.element.Location": {},
      "qx.event.Registration": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        }
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
   * Contains methods to control and query the element's scroll properties
   */
  qx.Class.define("qx.bom.element.Scroll", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {Integer} The typical native scrollbar size in the environment */
      __scrollbarSize__P_46_0: null,
      /**
       * Get the typical native scrollbar size in the environment
       *
       * @return {Number} The native scrollbar size
       */
      getScrollbarWidth: function getScrollbarWidth() {
        if (this.__scrollbarSize__P_46_0 !== null) {
          return this.__scrollbarSize__P_46_0;
        }
        var Style = qx.bom.element.Style;
        var getStyleSize = function getStyleSize(el, propertyName) {
          return parseInt(Style.get(el, propertyName), 10) || 0;
        };
        var getBorderRight = function getBorderRight(el) {
          return Style.get(el, "borderRightStyle") == "none" ? 0 : getStyleSize(el, "borderRightWidth");
        };
        var getBorderLeft = function getBorderLeft(el) {
          return Style.get(el, "borderLeftStyle") == "none" ? 0 : getStyleSize(el, "borderLeftWidth");
        };
        var getInsetRight = qx.core.Environment.select("engine.name", {
          mshtml: function mshtml(el) {
            if (Style.get(el, "overflowY") == "hidden" || el.clientWidth == 0) {
              return getBorderRight(el);
            }
            return Math.max(0, el.offsetWidth - el.clientLeft - el.clientWidth);
          },
          "default": function _default(el) {
            // Alternative method if clientWidth is unavailable
            // clientWidth == 0 could mean both: unavailable or really 0
            if (el.clientWidth == 0) {
              var ov = Style.get(el, "overflow");
              var sbv = ov == "scroll" || ov == "-moz-scrollbars-vertical" ? 16 : 0;
              return Math.max(0, getBorderRight(el) + sbv);
            }
            return Math.max(0, el.offsetWidth - el.clientWidth - getBorderLeft(el));
          }
        });
        var getScrollBarSizeRight = function getScrollBarSizeRight(el) {
          return getInsetRight(el) - getBorderRight(el);
        };
        var t = document.createElement("div");
        var s = t.style;
        s.height = s.width = "100px";
        s.overflow = "scroll";
        document.body.appendChild(t);
        var c = getScrollBarSizeRight(t);
        this.__scrollbarSize__P_46_0 = c;
        document.body.removeChild(t);
        return this.__scrollbarSize__P_46_0;
      },
      /*
      ---------------------------------------------------------------------------
        SCROLL INTO VIEW
      ---------------------------------------------------------------------------
      */
      /**
       * The method scrolls the element into view (x-axis only).
       *
       * @param element {Element} DOM element to scroll into view
       * @param stop {Element?null} Any parent element which functions as
       *   outermost element to scroll. Default is the HTML document.
       * @param align {String?null} Alignment of the element. Allowed values:
       *   <code>left</code> or <code>right</code>. Could also be null.
       *   Without a given alignment the method tries to scroll the widget
       *   with the minimum effort needed.
       */
      intoViewX: function intoViewX(element, stop, align) {
        var parent = element.parentNode;
        var doc = qx.dom.Node.getDocument(element);
        var body = doc.body;
        var parentLocation, parentLeft, parentRight;
        var parentOuterWidth, parentClientWidth, parentScrollWidth;
        var parentLeftBorder, parentRightBorder, parentScrollBarWidth;
        var elementLocation, elementLeft, elementRight, elementWidth;
        var leftOffset, rightOffset, scrollDiff;
        var alignLeft = align === "left";
        var alignRight = align === "right";

        // Correcting stop position
        stop = stop ? stop.parentNode : doc;

        // Go up the parent chain
        while (parent && parent != stop) {
          // "overflow" is always visible for both: document.body and document.documentElement
          if (parent.scrollWidth > parent.clientWidth && (parent === body || qx.bom.element.Style.get(parent, "overflowY") != "visible")) {
            // Calculate parent data
            // Special handling for body element
            if (parent === body) {
              parentLeft = parent.scrollLeft;
              parentRight = parentLeft + qx.bom.Viewport.getWidth();
              parentOuterWidth = qx.bom.Viewport.getWidth();
              parentClientWidth = parent.clientWidth;
              parentScrollWidth = parent.scrollWidth;
              parentLeftBorder = 0;
              parentRightBorder = 0;
              parentScrollBarWidth = 0;
            } else {
              parentLocation = qx.bom.element.Location.get(parent);
              parentLeft = parentLocation.left;
              parentRight = parentLocation.right;
              parentOuterWidth = parent.offsetWidth;
              parentClientWidth = parent.clientWidth;
              parentScrollWidth = parent.scrollWidth;
              parentLeftBorder = parseInt(qx.bom.element.Style.get(parent, "borderLeftWidth"), 10) || 0;
              parentRightBorder = parseInt(qx.bom.element.Style.get(parent, "borderRightWidth"), 10) || 0;
              parentScrollBarWidth = parentOuterWidth - parentClientWidth - parentLeftBorder - parentRightBorder;
            }

            // Calculate element data
            elementLocation = qx.bom.element.Location.get(element);
            elementLeft = elementLocation.left;
            elementRight = elementLocation.right;
            elementWidth = element.offsetWidth;

            // Relative position from each other
            leftOffset = elementLeft - parentLeft - parentLeftBorder;
            rightOffset = elementRight - parentRight + parentRightBorder;

            // Scroll position rearrangement
            scrollDiff = 0;

            // be sure that element is on left edge
            if (alignLeft) {
              scrollDiff = leftOffset;
            }

            // be sure that element is on right edge
            else if (alignRight) {
              scrollDiff = rightOffset + parentScrollBarWidth;
            }

            // element must go down
            // * when current left offset is smaller than 0
            // * when width is bigger than the inner width of the parent
            else if (leftOffset < 0 || elementWidth > parentClientWidth) {
              scrollDiff = leftOffset;
            }

            // element must go up
            // * when current right offset is bigger than 0
            else if (rightOffset > 0) {
              scrollDiff = rightOffset + parentScrollBarWidth;
            }
            parent.scrollLeft += scrollDiff;

            // Browsers that follow the CSSOM View Spec fire the "scroll"
            // event asynchronously. See #intoViewY for more details.
            qx.event.Registration.fireNonBubblingEvent(parent, "scroll");
          }
          if (parent === body) {
            break;
          }
          parent = parent.parentNode;
        }
      },
      /**
       * The method scrolls the element into view (y-axis only).
       *
       * @param element {Element} DOM element to scroll into view
       * @param stop {Element?null} Any parent element which functions as
       *   outermost element to scroll. Default is the HTML document.
       * @param align {String?null} Alignment of the element. Allowed values:
       *   <code>top</code> or <code>bottom</code>. Could also be null.
       *   Without a given alignment the method tries to scroll the widget
       *   with the minimum effort needed.
       */
      intoViewY: function intoViewY(element, stop, align) {
        var parent = element.parentNode;
        var doc = qx.dom.Node.getDocument(element);
        var body = doc.body;
        var parentLocation, parentTop, parentBottom;
        var parentOuterHeight, parentClientHeight, parentScrollHeight;
        var parentTopBorder, parentBottomBorder, parentScrollBarHeight;
        var elementLocation, elementTop, elementBottom, elementHeight;
        var topOffset, bottomOffset, scrollDiff;
        var alignTop = align === "top";
        var alignBottom = align === "bottom";

        // Correcting stop position
        stop = stop ? stop.parentNode : doc;

        // Go up the parent chain
        while (parent && parent != stop) {
          // "overflow" is always visible for both: document.body and document.documentElement
          if (parent.scrollHeight > parent.clientHeight && (parent === body || qx.bom.element.Style.get(parent, "overflowY") != "visible")) {
            // Calculate parent data
            // Special handling for body element
            if (parent === body) {
              parentTop = parent.scrollTop;
              parentBottom = parentTop + qx.bom.Viewport.getHeight();
              parentOuterHeight = qx.bom.Viewport.getHeight();
              parentClientHeight = parent.clientHeight;
              parentScrollHeight = parent.scrollHeight;
              parentTopBorder = 0;
              parentBottomBorder = 0;
              parentScrollBarHeight = 0;
            } else {
              parentLocation = qx.bom.element.Location.get(parent);
              parentTop = parentLocation.top;
              parentBottom = parentLocation.bottom;
              parentOuterHeight = parent.offsetHeight;
              parentClientHeight = parent.clientHeight;
              parentScrollHeight = parent.scrollHeight;
              parentTopBorder = parseInt(qx.bom.element.Style.get(parent, "borderTopWidth"), 10) || 0;
              parentBottomBorder = parseInt(qx.bom.element.Style.get(parent, "borderBottomWidth"), 10) || 0;
              parentScrollBarHeight = parentOuterHeight - parentClientHeight - parentTopBorder - parentBottomBorder;
            }

            // Calculate element data
            elementLocation = qx.bom.element.Location.get(element);
            elementTop = elementLocation.top;
            elementBottom = elementLocation.bottom;
            elementHeight = element.offsetHeight;

            // Relative position from each other
            topOffset = elementTop - parentTop - parentTopBorder;
            bottomOffset = elementBottom - parentBottom + parentBottomBorder;

            // Scroll position rearrangement
            scrollDiff = 0;

            // be sure that element is on top edge
            if (alignTop) {
              scrollDiff = topOffset;
            }

            // be sure that element is on bottom edge
            else if (alignBottom) {
              scrollDiff = bottomOffset + parentScrollBarHeight;
            }

            // element must go down
            // * when current top offset is smaller than 0
            // * when height is bigger than the inner height of the parent
            else if (topOffset < 0 || elementHeight > parentClientHeight) {
              scrollDiff = topOffset;
            }

            // element must go up
            // * when current bottom offset is bigger than 0
            else if (bottomOffset > 0) {
              scrollDiff = bottomOffset + parentScrollBarHeight;
            }
            parent.scrollTop += scrollDiff;

            // Browsers that follow the CSSOM View Spec fire the "scroll"
            // event asynchronously.
            //
            // The widget layer expects the "scroll" event to be fired before
            // the "appear" event. Fire non-bubbling "scroll" in all browsers,
            // since a duplicate "scroll" should not cause any issues and it
            // is hard to track which version of the browser engine started to
            // follow the CSSOM Spec. Fixes [BUG #4570].
            qx.event.Registration.fireNonBubblingEvent(parent, "scroll");
          }
          if (parent === body) {
            break;
          }
          parent = parent.parentNode;
        }
      },
      /**
       * The method scrolls the element into view.
       *
       * @param element {Element} DOM element to scroll into view
       * @param stop {Element?null} Any parent element which functions as
       *   outermost element to scroll. Default is the HTML document.
       * @param alignX {String} Alignment of the element. Allowed values:
       *   <code>left</code> or <code>right</code>. Could also be undefined.
       *   Without a given alignment the method tries to scroll the widget
       *   with the minimum effort needed.
       * @param alignY {String} Alignment of the element. Allowed values:
       *   <code>top</code> or <code>bottom</code>. Could also be undefined.
       *   Without a given alignment the method tries to scroll the widget
       *   with the minimum effort needed.
       */
      intoView: function intoView(element, stop, alignX, alignY) {
        this.intoViewX(element, stop, alignX);
        this.intoViewY(element, stop, alignY);
      }
    }
  });
  qx.bom.element.Scroll.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.event.Messaging": {
        "construct": true
      },
      "qx.bom.History": {
        "construct": true
      },
      "qx.core.Assert": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   *
   * Basic application routing manager.
   *
   * Define routes to react on certain GET / POST / DELETE / PUT operations.
   *
   * * GET is triggered when the hash value of the url is changed. Can be called
   *   manually by calling the {@link #executeGet} method.
   * * POST / DELETE / PUT has to be triggered manually right now (will be changed later)
   *    by calling the {@link #executePost}, {@link #executeDelete}, {@link #executePut} method.
   *
   * This manager can also be used to provide browser history.
   *
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *   var r = new qx.application.Routing();
   *
   *   // show the start page, when no hash is given or the hash is "#/"
   *   r.onGet("/", function(data) {
   *     startPage.show();
   *   }, this);
   *
   *   // whenever the url /address is called show the address book page.
   *   r.onGet("/address", function(data) {
   *     addressBookPage.show();
   *   }, this);
   *
   *   // address with the parameter "id"
   *   r.onGet("/address/{id}", function(data) {
   *     addressPage.show();
   *     model.loadAddress(data.params.id);
   *   }, this);
   *
   *   // Alternative you can use regExp for a route
   *   r.onGet(/address\/(.*)/, function(data) {
   *     addressPage.show();
   *     model.loadAddress(data.params.0);
   *   }, this);
   *
   *   // make sure that the data is always loaded
   *   r.onGet("/address.*", function(data) {
   *     if (!model.isLoaded()) {
   *       model.loadAddresses();
   *     }
   *   }, this);
   *
   *   // update the address
   *   r.onPost("/address/{id}", function(data) {
   *     model.updateAddress(data.params.id);
   *   }, this);
   *
   *   // delete the address and navigate back
   *   r.onDelete("/address/{id}", function(data) {
   *     model.deleteAddress(data.params.id);
   *     r.executeGet("/address", {reverse:true});
   *   }, this);
   * </pre>
   *
   * This example defines different routes to handle navigation events.
   *
   * Note this class must be disposed after use
   */
  qx.Bootstrap.define("qx.application.Routing", {
    implement: [qx.core.IDisposable],
    construct: function construct() {
      this.__messaging__P_15_0 = new qx.event.Messaging();
      this.__navigationHandler__P_15_1 = qx.bom.History.getInstance();
      this.__navigationHandler__P_15_1.addListener("changeState", this.__onChangeHash__P_15_2, this);
    },
    statics: {
      DEFAULT_PATH: "/",
      __back__P_15_3: [],
      __forward__P_15_4: []
    },
    members: {
      __navigationHandler__P_15_1: null,
      __messaging__P_15_0: null,
      __currentGetPath__P_15_5: null,
      /**
       * Initialization method used to execute the get route for the currently set history path.
       * If no path is set, either the given argument named <code>defaultPath</code>
       * or the {@link #DEFAULT_PATH} will be used for initialization.
       *
       * @param defaultPath {String?} Optional default path for initialization.
       */
      init: function init(defaultPath) {
        {
          if (defaultPath != null) {
            qx.core.Assert.assertString(defaultPath, "Invalid argument 'defaultPath'");
          }
        }
        var path = this.getState();
        path = this._getPathOrFallback(path, defaultPath);
        this._executeGet(path, null, true);
      },
      /**
       * Checks if path is valid and registered in channel "get" and then just returns it.
       * If the path is not valid either the <code>defaultPath</code> (if given) or the
       * {@link #DEFAULT_PATH} will be returned.
       *
       * @param path {String} Path which gets checked.
       * @param defaultPath {String?} Optional default path.
       * @return {String} A valid path.
       */
      _getPathOrFallback: function _getPathOrFallback(path, defaultPath) {
        if (path == "" || path == null || !this.__messaging__P_15_0.has("get", path)) {
          path = defaultPath || qx.application.Routing.DEFAULT_PATH;
        }
        return path;
      },
      /**
       * Adds a route handler for the "get" operation. The route gets called
       * when the {@link #executeGet} method found a match.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches.
       * @param handler {Function} The handler to call, when the route matches with the executed path.
       * @param scope {Object} The scope of the handler.
       * @return {String} Event listener ID
       */
      onGet: function onGet(route, handler, scope) {
        return this.__messaging__P_15_0.on("get", route, handler, scope);
      },
      /**
       * This is a shorthand for {@link #onGet}.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches.
       * @param handler {Function} The handler to call, when the route matches with the executed path.
       * @param scope {Object} The scope of the handler.
       * @return {String} Event listener ID
       */
      on: function on(route, handler, scope) {
        return this.onGet(route, handler, scope);
      },
      /**
       * Adds a route handler for the "post" operation. The route gets called
       * when the {@link #executePost} method found a match.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches.
       * @param handler {Function} The handler to call, when the route matches with the executed path.
       * @param scope {Object} The scope of the handler.
       * @return {String} Event listener ID
       */
      onPost: function onPost(route, handler, scope) {
        return this.__messaging__P_15_0.on("post", route, handler, scope);
      },
      /**
       * Adds a route handler for the "put" operation. The route gets called
       * when the {@link #executePut} method found a match.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches
       * @param handler {Function} The handler to call, when the route matches with the executed path
       * @param scope {Object} The scope of the handler
       * @return {String} Event listener ID
       */
      onPut: function onPut(route, handler, scope) {
        return this.__messaging__P_15_0.on("put", route, handler, scope);
      },
      /**
       * Adds a route handler for the "delete" operation. The route gets called
       * when the {@link #executeDelete} method found a match.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches
       * @param handler {Function} The handler to call, when the route matches with the executed path
       * @param scope {Object} The scope of the handler
       * @return {String} Event listener ID
       */
      onDelete: function onDelete(route, handler, scope) {
        return this.__messaging__P_15_0.on("delete", route, handler, scope);
      },
      /**
       * Adds a route handler for the "any" operation. The "any" operation is called
       * before all other operations.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches
       * @param handler {Function} The handler to call, when the route matches with the executed path
       * @param scope {Object} The scope of the handler
       * @return {String} Event listener ID
       */
      onAny: function onAny(route, handler, scope) {
        return this.__messaging__P_15_0.onAny(route, handler, scope);
      },
      /**
       * Removes a registered route by the given id.
       *
       * @param id {String} The id of the registered route
       */
      remove: function remove(id) {
        this.__messaging__P_15_0.remove(id);
      },
      /**
       * Hash change event handler.
       *
       * @param evt {qx.event.type.Data} The changeHash event.
       */
      __onChangeHash__P_15_2: function __onChangeHash__P_15_2(evt) {
        var path = evt.getData();
        path = this._getPathOrFallback(path);
        if (path != this.__currentGetPath__P_15_5) {
          this._executeGet(path, null, true);
        }
      },
      /**
       * Executes the get operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param customData {var} The given custom data that should be propagated
       * @param fromEvent {var} Determines whether this method was called from history
       *
       */
      _executeGet: function _executeGet(path, customData, fromEvent) {
        this.__currentGetPath__P_15_5 = path;
        var history = this.__getFromHistory__P_15_6(path);
        if (history) {
          if (!customData) {
            customData = history.data.customData || {};
            customData.fromHistory = true;
            customData.action = history.action;
            customData.fromEvent = fromEvent;
          } else {
            this.__replaceCustomData__P_15_7(path, customData);
          }
        } else {
          this.__addToHistory__P_15_8(path, customData);
          qx.application.Routing.__forward__P_15_4 = [];
        }
        this.__navigationHandler__P_15_1.setState(path);
        this.__messaging__P_15_0.emit("get", path, null, customData);
      },
      /**
       * Executes the get operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param customData {var} The given custom data that should be propagated
       */
      executeGet: function executeGet(path, customData) {
        this._executeGet(path, customData);
      },
      /**
       * This is a shorthand for {@link #executeGet}.
       *
       * @param path {String} The path to execute
       * @param customData {var} The given custom data that should be propagated
       */
      execute: function execute(path, customData) {
        this.executeGet(path, customData);
      },
      /**
       * Executes the post operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       */
      executePost: function executePost(path, params, customData) {
        this.__messaging__P_15_0.emit("post", path, params, customData);
      },
      /**
       * Executes the put operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       */
      executePut: function executePut(path, params, customData) {
        this.__messaging__P_15_0.emit("put", path, params, customData);
      },
      /**
       * Executes the delete operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       */
      executeDelete: function executeDelete(path, params, customData) {
        this.__messaging__P_15_0.emit("delete", path, params, customData);
      },
      /**
       * Returns state value (history hash) of the navigation handler.
       * @return {String} State of history navigation handler
       */
      getState: function getState() {
        return this.__navigationHandler__P_15_1.getState();
      },
      /**
       * Adds the custom data of a given path to the history.
       *
       * @param path {String} The path to store.
       * @param customData {var} The custom data to store
       */
      __addToHistory__P_15_8: function __addToHistory__P_15_8(path, customData) {
        qx.application.Routing.__back__P_15_3.unshift({
          path: path,
          customData: customData
        });
      },
      /**
       * Replaces the customData in the history objects with the recent custom data.
       * @param path {String} The path to replace.
       * @param customData {var} The custom data to store.
       */
      __replaceCustomData__P_15_7: function __replaceCustomData__P_15_7(path, customData) {
        var register = [qx.application.Routing.__back__P_15_3, qx.application.Routing.__forward__P_15_4];
        for (var i = 0; i < register.length; i++) {
          for (var j = 0; j < register[i].length; j++) {
            if (register[i][j].path == path) {
              register[i][j].customData = customData;
            }
          }
        }
      },
      /**
       * Returns a history entry for a certain path.
       *
       * @param path {String} The path of the entry
       * @return {Map|null} The retrieved entry. <code>null</code> when no entry was found.
       */
      __getFromHistory__P_15_6: function __getFromHistory__P_15_6(path) {
        var back = qx.application.Routing.__back__P_15_3;
        var forward = qx.application.Routing.__forward__P_15_4;
        var found = false;
        var entry = null;
        var length = back.length;
        for (var i = 0; i < length; i++) {
          if (back[i].path == path) {
            entry = back[i];
            var toForward = back.splice(0, i);
            for (var a = 0; a < toForward.length; a++) {
              forward.unshift(toForward[a]);
            }
            found = true;
            break;
          }
        }
        if (found) {
          return {
            data: entry,
            action: "back"
          };
        }
        var length = forward.length;
        for (var i = 0; i < length; i++) {
          if (forward[i].path == path) {
            entry = forward[i];
            var toBack = forward.splice(0, i + 1);
            for (var a = 0; a < toBack.length; a++) {
              back.unshift(toBack[a]);
            }
            break;
          }
        }
        if (entry) {
          return {
            data: entry,
            action: "forward"
          };
        }
        return entry;
      },
      /**
       * Navigates back to the previously executed path.
       *
       * @param customData {Map?} The given custom data that should be propagated.
       *   If it contains a key <code>defaultPath</code> and no history data is
       *   available, its value is used as a target path. If it does not include
       *   such a key, the routing's default path is used instead (again only for
       *   empty history).
       *   This behavior is useful for instance when reloading a page during
       *   development but expecting the page's back button always to work.
       */
      back: function back(customData) {
        var data = customData;
        if (data) {
          data["action"] = "back";
        } else {
          data = {
            action: "back"
          };
        }
        var path,
          back = qx.application.Routing.__back__P_15_3;
        if (back.length > 0) {
          // Remove current state
          back.shift();
        }
        if (back.length > 0) {
          // Get previous state
          var state = back.shift();
          this._executeGet(state.path, data);
        } else if (data.defaultPath) {
          path = data.defaultPath;
          delete data.defaultPath;
          this._executeGet(path, data);
        } else if (qx.application.Routing.DEFAULT_PATH) {
          this._executeGet(qx.application.Routing.DEFAULT_PATH, data);
        }
      },
      /**
       * Decouples the Routing from the navigation handler.
       */
      dispose: function dispose() {
        this.__navigationHandler__P_15_1.removeListener("changeState", this.__onChangeHash__P_15_2, this);
      }
    }
  });
  qx.application.Routing.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.Registration": {
        "require": true
      },
      "qx.event.handler.Application": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Alexander Steitz (aback)
  
  ************************************************************************ */

  /**
   * Low-level application life-cycle management.
   *
   * One can use the static methods {@link #onReady} and {@link #onShutdown} to
   * add callback functions, in order to get informed about the ready state or
   * the shutdown of the low-level application, respectively.
   *
   * @require(qx.event.Registration)
   * @require(qx.event.handler.Application)
   */
  qx.Class.define("qx.bom.Lifecycle", {
    statics: {
      /**
       * Register a callback function, which is called in the optionally provided
       * context, when the application is ready.
       *
       * @param callback {Function} callback function
       * @param context {Object?window} context in which the callback is called
       */
      onReady: function onReady(callback, context) {
        var Registration = qx.event.Registration;
        var appHandler = Registration.getManager(window).getHandler(qx.event.handler.Application);

        // If the application is already available, execute the callback
        // immediately. Otherwise listen to the "ready" event to call it later.
        if (appHandler && appHandler.isApplicationReady()) {
          callback.call(context);
        } else {
          Registration.addListener(window, "ready", callback, context);
        }
      },
      /**
       * Register a callback function, which is called in the optionally provided
       * context, when the application is shutdown.
       * <b>IMPORTANT NOTE</b>: Since it is <i>not</i> guaranteed that a
       * <code>shutdown</code> event is fired, you <i>cannot</i> fully rely on
       * getting informed.
       *
       * @param callback {Function} callback function
       * @param context {Object?window} context in which the callback is called
       */
      onShutdown: function onShutdown(callback, context) {
        qx.event.Registration.addListener(window, "shutdown", callback, context);
      }
    }
  });
  qx.bom.Lifecycle.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.Style": {},
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["css.transform", "css.transform.3d"],
      "required": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * Responsible for checking all relevant CSS transform properties.
   *
   * Specs:
   * http://www.w3.org/TR/css3-2d-transforms/
   * http://www.w3.org/TR/css3-3d-transforms/
   *
   * @internal
   */
  qx.Bootstrap.define("qx.bom.client.CssTransform", {
    statics: {
      /**
       * Main check method which returns an object if CSS animations are
       * supported. This object contains all necessary keys to work with CSS
       * animations.
       * <ul>
       *  <li><code>name</code> The name of the css transform style</li>
       *  <li><code>style</code> The name of the css transform-style style</li>
       *  <li><code>origin</code> The name of the transform-origin style</li>
       *  <li><code>3d</code> Whether 3d transforms are supported</li>
       *  <li><code>perspective</code> The name of the perspective style</li>
       *  <li><code>perspective-origin</code> The name of the perspective-origin style</li>
       *  <li><code>backface-visibility</code> The name of the backface-visibility style</li>
       * </ul>
       *
       * @internal
       * @return {Object|null} The described object or null, if animations are
       *   not supported.
       */
      getSupport: function getSupport() {
        var name = qx.bom.client.CssTransform.getName();
        if (name != null) {
          return {
            name: name,
            style: qx.bom.client.CssTransform.getStyle(),
            origin: qx.bom.client.CssTransform.getOrigin(),
            "3d": qx.bom.client.CssTransform.get3D(),
            perspective: qx.bom.client.CssTransform.getPerspective(),
            "perspective-origin": qx.bom.client.CssTransform.getPerspectiveOrigin(),
            "backface-visibility": qx.bom.client.CssTransform.getBackFaceVisibility()
          };
        }
        return null;
      },
      /**
       * Checks for the style name used to set the transform origin.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getStyle: function getStyle() {
        return qx.bom.Style.getPropertyName("transformStyle");
      },
      /**
       * Checks for the style name used to set the transform origin.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getPerspective: function getPerspective() {
        return qx.bom.Style.getPropertyName("perspective");
      },
      /**
       * Checks for the style name used to set the perspective origin.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getPerspectiveOrigin: function getPerspectiveOrigin() {
        return qx.bom.Style.getPropertyName("perspectiveOrigin");
      },
      /**
       * Checks for the style name used to set the backface visibility.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getBackFaceVisibility: function getBackFaceVisibility() {
        return qx.bom.Style.getPropertyName("backfaceVisibility");
      },
      /**
       * Checks for the style name used to set the transform origin.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getOrigin: function getOrigin() {
        return qx.bom.Style.getPropertyName("transformOrigin");
      },
      /**
       * Checks for the style name used for transforms.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getName: function getName() {
        return qx.bom.Style.getPropertyName("transform");
      },
      /**
       * Checks if 3D transforms are supported.
       * @internal
       * @return {Boolean} <code>true</code>, if 3D transformations are supported
       */
      get3D: function get3D() {
        return qx.bom.client.CssTransform.getPerspective() != null;
      }
    },
    defer: function defer(statics) {
      qx.core.Environment.add("css.transform", statics.getSupport);
      qx.core.Environment.add("css.transform.3d", statics.get3D);
    }
  });
  qx.bom.client.CssTransform.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.ui.mobile.core.EventHandler": {
        "defer": "runtime"
      },
      "qx.bom.Lifecycle": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.locale.MTranslation": {
        "require": true
      },
      "qx.core.Assert": {},
      "qx.event.GlobalError": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.handler.Appear": {},
      "qx.ui.mobile.core.DomUpdatedHandler": {},
      "qx.dom.Element": {},
      "qx.lang.Array": {},
      "qx.ui.mobile.layout.Abstract": {},
      "qx.bom.client.CssTransform": {
        "require": true
      },
      "qx.bom.element.Style": {},
      "qx.bom.element.Attribute": {},
      "qx.bom.element.Class": {},
      "qx.core.ObjectRegistry": {},
      "qx.event.Registration": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "css.transform.3d": {
          "className": "qx.bom.client.CssTransform"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * This is the base class for all mobile widgets.
   *
   * @use(qx.ui.mobile.core.EventHandler)
   * @require(qx.bom.Lifecycle)
   */
  qx.Class.define("qx.ui.mobile.core.Widget", {
    extend: qx.core.Object,
    include: [qx.locale.MTranslation],
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      qx.core.Object.constructor.call(this);
      this._setContainerElement(this._createContainerElement());

      // Init member variables

      this.__children__P_72_0 = [];
      this.setId(this.getId());
      this.initDefaultCssClass();
      this.initName();
      this.initAnonymous();
      this.initActivatable();
    },
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /** Fired if the mouse cursor moves over the widget. */
      mousemove: "qx.event.type.Mouse",
      /** Fired if the mouse cursor enters the widget. */
      mouseover: "qx.event.type.Mouse",
      /** Fired if the mouse cursor leaves widget. */
      mouseout: "qx.event.type.Mouse",
      /** Mouse button is pressed on the widget. */
      mousedown: "qx.event.type.Mouse",
      /** Mouse button is released on the widget. */
      mouseup: "qx.event.type.Mouse",
      /** Widget is clicked using left or middle button.
          {@link qx.event.type.Mouse#getButton} for more details.*/
      click: "qx.event.type.Mouse",
      /** Widget is double clicked using left or middle button.
          {@link qx.event.type.Mouse#getButton} for more details.*/
      dblclick: "qx.event.type.Mouse",
      /** Widget is clicked using the right mouse button. */
      contextmenu: "qx.event.type.Mouse",
      /** Fired before the context menu is opened. */
      beforeContextmenuOpen: "qx.event.type.Mouse",
      /** Fired if the mouse wheel is used over the widget. */
      mousewheel: "qx.event.type.MouseWheel",
      /** Fired if a touch at the screen is started. */
      touchstart: "qx.event.type.Touch",
      /** Fired if a touch at the screen has ended. */
      touchend: "qx.event.type.Touch",
      /** Fired during a touch at the screen. */
      touchmove: "qx.event.type.Touch",
      /** Fired if a touch at the screen is canceled. */
      touchcancel: "qx.event.type.Touch",
      /** Fired when a finger taps on the screen. */
      tap: "qx.event.type.Tap",
      /** Fired when a finger holds on the screen. */
      longtap: "qx.event.type.Tap",
      /** Fired when a finger swipes over the screen. */
      swipe: "qx.event.type.Touch",
      /** Fired when two pointers performing a rotate gesture on the screen. */
      rotate: "qx.event.type.Rotate",
      /** Fired when two pointers performing a pinch in/out gesture on the screen. */
      pinch: "qx.event.type.Pinch",
      /** Fired when an active pointer moves on the screen (after pointerdown till pointerup). */
      track: "qx.event.type.Track",
      /**
       * This event if fired if a keyboard key is released.
       **/
      keyup: "qx.event.type.KeySequence",
      /**
       * This event if fired if a keyboard key is pressed down. This event is
       * only fired once if the user keeps the key pressed for a while.
       */
      keydown: "qx.event.type.KeySequence",
      /**
       * This event is fired any time a key is pressed. It will be repeated if
       * the user keeps the key pressed. The pressed key can be determined using
       * {@link qx.event.type.KeySequence#getKeyIdentifier}.
       */
      keypress: "qx.event.type.KeySequence",
      /**
       * This event is fired if the pressed key or keys result in a printable
       * character. Since the character is not necessarily associated with a
       * single physical key press, the event does not have a key identifier
       * getter. This event gets repeated if the user keeps pressing the key(s).
       *
       * The unicode code of the pressed key can be read using
       * {@link qx.event.type.KeyInput#getCharCode}.
       */
      keyinput: "qx.event.type.KeyInput",
      /**
       * Fired after a massive DOM manipulation, e.g. when DOM elements were
       * added or styles were changed. Listen to this event, if you need to
       * recalculate a layout or have to update your view.
       */
      domupdated: "qx.event.type.Event",
      /**
       * Fired after the widget appears on the screen.
       */
      appear: "qx.event.type.Event",
      /**
       * Fired after the widget disappears from the screen.
       */
      disappear: "qx.event.type.Event",
      /**
       * The event is fired when the widget gets focused.
       */
      focus: "qx.event.type.Focus",
      /**
       * The event is fired when the widget gets blurred.
       */
      blur: "qx.event.type.Focus",
      /**
       * When the widget itself or any child of the widget receive the focus.
       */
      focusin: "qx.event.type.Focus",
      /**
       * When the widget itself or any child of the widget lost the focus.
       */
      focusout: "qx.event.type.Focus",
      /**
       * When the widget gets active (receives keyboard events etc.)
       */
      activate: "qx.event.type.Focus",
      /**
       * When the widget gets inactive
       */
      deactivate: "qx.event.type.Focus",
      /**
       * Fired when an active pointer moves on the screen or the mouse wheel is used.
       */
      roll: "qx.event.type.Roll"
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /**
       * The default CSS class used for this widget. The default CSS class
       * should contain the common appearance of the widget.
       * It is set to the container element of the widget. Use {@link #addCssClass}
       * to enhance the default appearance of the widget.
       */
      defaultCssClass: {
        check: "String",
        init: null,
        nullable: true,
        apply: "_applyDefaultCssClass"
      },
      /**
       * Whether this widget is enabled or not
       */
      enabled: {
        init: true,
        check: "Boolean",
        nullable: false,
        event: "changeEnabled",
        apply: "_applyEnabled"
      },
      /**
       * The name attribute of the container element. Useful when you want to find
       * an element by its name attribute.
       */
      name: {
        check: "String",
        init: null,
        nullable: true,
        apply: "_applyAttribute"
      },
      /**
       * Whether the widget should be the target of an event. Set this property
       * to <code>false</code> when the widget is a child of another widget and
       * shouldn't react on events.
       */
      anonymous: {
        check: "Boolean",
        init: null,
        nullable: true,
        apply: "_applyStyle"
      },
      /**
       * The ID of the widget. When the ID is set to <code>null</code> an auto
       * id will be generated.
       */
      id: {
        check: "String",
        init: null,
        nullable: true,
        apply: "_applyId",
        transform: "_transformId",
        event: "changeId"
      },
      /**
       * Controls the visibility. Valid values are:
       *
       * <ul>
       *   <li><b>visible</b>: Render the widget</li>
       *   <li><b>hidden</b>: Hide the widget. The space will be still available.</li>
       *   <li><b>excluded</b>: Hide the widget. The space will be released.</li>
       * </ul>
       */
      visibility: {
        check: ["visible", "hidden", "excluded"],
        init: "visible",
        apply: "_applyVisibility",
        event: "changeVisibility"
      },
      /**
       * Whether the widget can be activated or not. When the widget is activated
       * a css class <code>active</code> is automatically added to the widget, which
       * can indicate the activation status.
       */
      activatable: {
        check: "Boolean",
        init: false,
        apply: "_applyAttribute"
      },
      /**
       * Rotates the widget. Negative and positive values are allowed.
       */
      rotation: {
        check: "Number",
        nullable: true,
        init: null,
        apply: "_transform"
      },
      /**
       * This property controls whether the transformation uses the length unit <code>px<code> or <code>rem</code>.
       * This feature is important for creating a resolution independent transformation.
       */
      transformUnit: {
        check: ["rem", "px"],
        nullable: false,
        init: "rem",
        apply: "_transform"
      },
      /**
       * Scales the widget in X direction (width).
       */
      scaleX: {
        check: "Number",
        nullable: true,
        init: null,
        apply: "_transform"
      },
      /**
       * Scales the widget in Y direction (height).
       */
      scaleY: {
        check: "Number",
        nullable: true,
        init: null,
        apply: "_transform"
      },
      /**
       * Moves the widget on X axis.
       */
      translateX: {
        check: "Number",
        nullable: true,
        init: 0,
        apply: "_transform"
      },
      /**
       * Moves the widget on Y axis.
       */
      translateY: {
        check: "Number",
        nullable: true,
        init: 0,
        apply: "_transform"
      },
      /**
       * Moves the widget on Z axis.
       */
      translateZ: {
        check: "Number",
        nullable: true,
        init: 0,
        apply: "_transform"
      }
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {String} Prefix for the auto id */
      ID_PREFIX: "qx_id_",
      /** @type {Map} Internal data structure to store widgets */
      __registry__P_72_1: {},
      /** @type {Integer} Incremental counter of the current id */
      __idCounter__P_72_2: 0,
      /** @type {Integer} ID of the timeout for the DOM update */
      __domUpdatedScheduleId__P_72_3: null,
      /**
       * Event handler. Called when the application is in shutdown.
       * @internal
       */
      onShutdown: function onShutdown() {
        window.clearTimeout(qx.ui.mobile.core.Widget.__domUpdatedScheduleId__P_72_3);
        delete qx.ui.mobile.core.Widget.__registry__P_72_1;
      },
      /**
       * Returns the current widget id of the registry.
       * @return {Integer} The current id
       * @internal
       */
      getCurrentId: function getCurrentId() {
        return qx.ui.mobile.core.Widget.__idCounter__P_72_2;
      },
      /**
       * Registers a widget with its id for internal widget handling.
       *
       * @param widget {qx.ui.core.Widget} The widget to register
       *
       * @internal
       */
      registerWidget: function registerWidget(widget) {
        var id = widget.getId();
        var registry = qx.ui.mobile.core.Widget.__registry__P_72_1;
        {
          qx.core.Assert.assertUndefined(registry[id], "Widget with the id '" + id + "' is already registered");
        }
        registry[id] = widget;
      },
      /**
       * Unregisters the widget with the given id.
       *
       * @param id {String} The id of the widget to unregister
       *
       * @internal
       */
      unregisterWidget: function unregisterWidget(id) {
        delete qx.ui.mobile.core.Widget.__registry__P_72_1[id];
      },
      /**
       * Returns the widget with the given id.
       *
       * @param id {String} The id of the widget
       * @return {qx.ui.core.Widget} The widget with the given id
       */
      getWidgetById: function getWidgetById(id) {
        return qx.ui.mobile.core.Widget.__registry__P_72_1[id];
      },
      /**
       * Schedules the {@link #domUpdated} method. The method will be called after a timeout
       * to prevent the triggered events to be fired too often, during massive DOM manipulations.
       *
       * @internal
       */
      scheduleDomUpdated: function scheduleDomUpdated() {
        if (qx.ui.mobile.core.Widget.__domUpdatedScheduleId__P_72_3 == null) {
          qx.ui.mobile.core.Widget.__domUpdatedScheduleId__P_72_3 = window.setTimeout(qx.ui.mobile.core.Widget.domUpdated, 0);
        }
      },
      /**
       * Fires the DOM updated event directly. Triggers the {@link qx.event.handler.Appear#refresh} and
       * {@link qx.ui.mobile.core.DomUpdatedHandler#refresh} methods. Do not use this
       * method during massive DOM manipulations. Use {@link #scheduleDomUpdated} instead.
       *
       * @internal
       */
      domUpdated: qx.event.GlobalError.observeMethod(function () {
        var clazz = qx.ui.mobile.core.Widget;
        window.clearTimeout(clazz.__domUpdatedScheduleId__P_72_3);
        clazz.__domUpdatedScheduleId__P_72_3 = null;
        qx.event.handler.Appear.refresh();
        qx.ui.mobile.core.DomUpdatedHandler.refresh();
      }),
      /**
       * Adds an attribute mapping entry. This entry is used by the {@link #_applyAttribute}
       * method. Shortcut when the property name differs from the real
       * attribute name. Use this method if you want to add an attribute entry to the mapping
       * from the defer function of a different widget.
       *
       * e.g.:
       * "selectable" :
       * {
       *   attribute : "data-selectable",
       *   values :
       *   {
       *     "true" : null,
       *     "false" : "false"
       *   }
       * }
       *
       * @param property {String} The property name
       * @param attribute {String} The real attribute name
       * @param values {Map} Values of the property to the real attribute value.
       *      Use null, when you want not to set the attribute.
       */
      addAttributeMapping: function addAttributeMapping(property, attribute, values) {
        {
          var attributeMapping = qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING;
          qx.core.Assert.assertUndefined(attributeMapping[property], "Attribute mapping for " + property + " already exists");
        }
        qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[property] = {
          attribute: attribute,
          values: values
        };
      },
      /**
       * Adds a style mapping entry. This entry is used by the {@link #_applyStyle}
       * method. Shortcut when the property name differs from the real
       * style name. Use this method if you want to add a style entry to the mapping
       * from the defer function of a different widget.
       *
       * e.g.:
       * "anonymous" :
       * {
       *  style : "pointer-events",
       *  values :
       *  {
       *    "true" : "none",
       *    "false" : null
       *  }
       * }
       *
       * @param property {String} The property name
       * @param style {String} The real style name
       * @param values {Map} Values of the property to the real style value.
       *      Use null, when you want not to set the style.
       */
      addStyleMapping: function addStyleMapping(property, style, values) {
        {
          var styleMapping = qx.ui.mobile.core.Widget.STYLE_MAPPING;
          qx.core.Assert.assertUndefined(styleMapping[property], "Style mapping for " + property + " already exists");
        }
        qx.ui.mobile.core.Widget.STYLE_MAPPING[property] = {
          style: style,
          values: values
        };
      },
      /**
       * Mapping of attribute properties to their real attribute name.
       *
       * @internal
       */
      ATTRIBUTE_MAPPING: {
        selectable: {
          attribute: "data-selectable",
          values: {
            "true": null,
            "false": "false"
          }
        },
        activatable: {
          attribute: "data-activatable",
          values: {
            "true": "true",
            "false": null
          }
        },
        readOnly: {
          attribute: "readonly"
        }
      },
      /**
       * Mapping of style properties to their real style name.
       *
       * @internal
       */
      STYLE_MAPPING: {
        anonymous: {
          style: "pointerEvents",
          values: {
            "true": "none",
            "false": null
          }
        }
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __containerElement__P_72_4: null,
      __contentElement__P_72_5: null,
      __layoutParent__P_72_6: null,
      __children__P_72_0: null,
      __layoutManager__P_72_7: null,
      /*
      ---------------------------------------------------------------------------
        Basic Template
      ---------------------------------------------------------------------------
      */
      /**
       * Returns the tag name of the container element of this widget.
       * Override this method if you want to create a custom widget.
       * @return {String} The container element's tag name
       */
      _getTagName: function _getTagName() {
        return "div";
      },
      /**
       * Creates the container DOM element of the widget.
       * Override this method if you want to create a custom widget.
       *
       * @return {Element} the container element.
       */
      _createContainerElement: function _createContainerElement() {
        return qx.dom.Element.create(this._getTagName());
      },
      /**
       * Triggers the {@link #scheduleDomUpdated} method. This method needs to be called
       * when the DOM has changed, e.g. an element was added / removed / styled.
       */
      _domUpdated: function _domUpdated() {
        qx.ui.mobile.core.Widget.scheduleDomUpdated();
      },
      /*
      ---------------------------------------------------------------------------
        ID Handling
      ---------------------------------------------------------------------------
      */
      /**
       * Transforms the value of the ID property. When the value is null, an auto
       * generated ID is set. This makes sure that an ID is always set.
       *
       * @param value {String} The set id of the widget
       * @return {String} The transformed ID
       */
      _transformId: function _transformId(value) {
        if (value == null) {
          var clazz = qx.ui.mobile.core.Widget;
          value = clazz.ID_PREFIX + clazz.__idCounter__P_72_2++;
        }
        return value;
      },
      // property apply
      _applyId: function _applyId(value, old) {
        if (old != null) {
          // Unregister widget with old id
          qx.ui.mobile.core.Widget.unregisterWidget(old);
        }
        // Change the id of the DOM element
        var element = this.getContainerElement();
        element.id = value;
        // Register the widget
        qx.ui.mobile.core.Widget.registerWidget(this);
      },
      /**
       * Sets the enable property to the new value
       * @param value {Boolean}, the new value of the widget
       * @param old {Boolean?}, the old value of the widget
       *
       */
      _applyEnabled: function _applyEnabled(value, old) {
        if (value) {
          this.removeCssClass("disabled");
          this._setStyle("anonymous", this.getAnonymous());
        } else {
          this.addCssClass("disabled");
          this._setStyle("anonymous", true);
        }
      },
      /*
      ---------------------------------------------------------------------------
        Child Handling
      ---------------------------------------------------------------------------
      */
      /**
       * Adds a new child widget.
       *
       * @param child {qx.ui.core.Widget} the widget to add.
       * @param layoutProperties {Map?null} Optional layout data for widget.
       */
      _add: function _add(child, layoutProperties) {
        {
          if (child.getLayoutParent() === this) {
            throw new Error("The widget is already added this widget. Please remove it first.");
          }
        }
        this._initializeChildLayout(child, layoutProperties);
        this.getContentElement().appendChild(child.getContainerElement());
        this.__children__P_72_0.push(child);
        this._domUpdated();
      },
      /**
       * Add a child widget at the specified index
       *
       * @param child {qx.ui.core.Widget} widget to add
       * @param index {Integer} Index, at which the widget will be inserted. If no
       *   widget exists at the given index, the new widget gets appended to the
       *   current list of children.
       * @param options {Map?null} Optional layout data for widget.
       */
      _addAt: function _addAt(child, index, options) {
        // When moving in the same widget, remove widget first
        if (child.getLayoutParent() == this) {
          qx.lang.Array.remove(this.__children__P_72_0, child);
        }
        var ref = this.__children__P_72_0[index];
        if (ref) {
          this._addBefore(child, ref, options);
        } else {
          this._add(child, options);
        }
      },
      /**
       * Add a widget before another already inserted widget
       *
       * @param child {qx.ui.core.Widget} widget to add
       * @param beforeWidget {qx.ui.core.Widget} widget before the new widget will be inserted.
       * @param layoutProperties {Map?null} Optional layout data for widget.
       */
      _addBefore: function _addBefore(child, beforeWidget, layoutProperties) {
        {
          if (child.getLayoutParent() === this) {
            throw new Error("The widget is already added this widget. Please remove it first.");
          }
          this.assertInArray(beforeWidget, this._getChildren(), "The 'before' widget is not a child of this widget!");
        }
        if (child == beforeWidget) {
          return;
        }
        this._initializeChildLayout(child, layoutProperties);
        this.getContentElement().insertBefore(child.getContainerElement(), beforeWidget.getContainerElement());
        qx.lang.Array.insertBefore(this.__children__P_72_0, child, beforeWidget);
        this._domUpdated();
      },
      /**
       * Add a widget after another already inserted widget.
       *
       * @param child {qx.ui.core.Widget} The widget to add.
       * @param afterWidget {qx.ui.core.Widget} Widget, after which the new widget will be inserted.
       * @param layoutProperties {Map?null} Optional layout data for widget.
       */
      _addAfter: function _addAfter(child, afterWidget, layoutProperties) {
        {
          if (child.getLayoutParent() === this) {
            throw new Error("The child is already added to this widget. Please remove it first.");
          }
          this.assertInArray(afterWidget, this._getChildren(), "The 'after' widget is not a child of this widget!");
        }
        if (child == afterWidget) {
          return;
        }
        this._initializeChildLayout(child, layoutProperties);
        var length = this._getChildren().length;
        var index = this._indexOf(afterWidget);
        if (index == length - 1) {
          this.getContentElement().appendChild(child.getContainerElement());
        } else {
          var beforeWidget = this._getChildren()[index + 1];
          this.getContentElement().insertBefore(child.getContainerElement(), beforeWidget.getContainerElement());
        }
        qx.lang.Array.insertAfter(this.__children__P_72_0, child, afterWidget);
        this._domUpdated();
      },
      /**
       * Removes a given child from the widget.
       *
       * @param child {qx.ui.core.Widget} The widget to remove.
       */
      _remove: function _remove(child) {
        child.setLayoutParent(null);
        this._domUpdated();
      },
      /**
       * Remove the widget at the specified index.
       *
       * @param index {Integer} Index of the widget to remove.
       */
      _removeAt: function _removeAt(index) {
        if (!this.__children__P_72_0) {
          throw new Error("This widget has no children!");
        }
        var child = this.__children__P_72_0[index];
        this._remove(child);
      },
      /**
       * Removes all children from the widget.
       * @return {Array} An Array including the removed children.
       */
      _removeAll: function _removeAll() {
        // create a copy of the array
        var children = this.__children__P_72_0.concat();
        for (var i = 0, l = children.length; i < l; i++) {
          this._remove(children[i]);
        }
        return children;
      },
      /**
       * Returns the index position of the given widget if it is
       * a child widget. Otherwise it returns <code>-1</code>.
       *
       * @param child {qx.ui.core.Widget} the widget to query for
       * @return {Integer} The index position or <code>-1</code> when
       *   the given widget is no child of this layout.
       */
      _indexOf: function _indexOf(child) {
        var children = this.__children__P_72_0;
        if (!children) {
          return -1;
        }
        return children.indexOf(child);
      },
      /**
       * Internal method. Sets the layout parent.
       *
       * @param parent {qx.ui.mobile.core.Widget} The parent widget
       *
       * @internal
       */
      setLayoutParent: function setLayoutParent(parent) {
        if (this.__layoutParent__P_72_6 === parent) {
          return;
        }
        var oldParent = this.__layoutParent__P_72_6;
        if (oldParent && !oldParent.$$disposed) {
          this.__layoutParent__P_72_6.removeChild(this);
        }
        this.__layoutParent__P_72_6 = parent || null;
      },
      /**
       * Internal method. Removes a given child widget and the corresponding DOM element.
       *
       * @param child {qx.ui.core.Widget} The widget to remove
       *
       * @internal
       */
      removeChild: function removeChild(child) {
        qx.lang.Array.remove(this.__children__P_72_0, child);
        this.getContentElement().removeChild(child.getContainerElement());
        var layout = this._getLayout();
        if (layout) {
          layout.disconnectFromChildWidget(child);
        }
      },
      /**
       * Returns the parent widget of this widget.
       *
       * @return {qx.ui.core.Widget} The parent of the widget
       */
      getLayoutParent: function getLayoutParent() {
        return this.__layoutParent__P_72_6;
      },
      /**
       * Returns the children of the widget.
       *
       * @return {qx.ui.core.Widget[]} The children of the widget
       */
      _getChildren: function _getChildren() {
        return this.__children__P_72_0;
      },
      /**
       * Whether the widget has child widgets.
       *
       * @return {Boolean} Whether the widget has children or not.
       */
      _hasChildren: function _hasChildren() {
        return this.__children__P_72_0 && this.__children__P_72_0.length > 0;
      },
      /*
       ---------------------------------------------------------------------------
         Layout handling
       ---------------------------------------------------------------------------
       */
      /**
       * Set a layout manager for the widget. A layout manager can only be connected
       * with one widget. Reset the connection with a previous widget first, if you
       * like to use it in another widget instead.
       *
       * @param layout {qx.ui.mobile.layout.Abstract} The new layout or
       *     <code>null</code> to reset the layout.
       */
      _setLayout: function _setLayout(layout) {
        {
          if (layout) {
            this.assertInstance(layout, qx.ui.mobile.layout.Abstract);
          }
        }
        if (this.__layoutManager__P_72_7) {
          this.__layoutManager__P_72_7.connectToWidget(null);
          for (var i = 0; i < this._getChildren().length; i++) {
            var child = this._getChildren()[i];
            this.__layoutManager__P_72_7.disconnectFromChildWidget(child);
          }
        }
        if (layout) {
          layout.connectToWidget(this);
        }
        this.__layoutManager__P_72_7 = layout;
        this._domUpdated();
      },
      /**
       * Initializes the layout of the given child widget.
       *
       * @param child {qx.ui.core.Widget} The child widget
       * @param layoutProperties {Map?null} Optional layout data for widget
       */
      _initializeChildLayout: function _initializeChildLayout(child, layoutProperties) {
        child.setLayoutParent(this);
        child.setLayoutProperties(layoutProperties);
        var layout = this._getLayout();
        if (layout) {
          layout.connectToChildWidget(child);
        }
      },
      /**
       * Returns the set layout manager for the widget.
       *
       * @return  {qx.ui.mobile.layout.Abstract} the layout manager of the widget.
       */
      _getLayout: function _getLayout() {
        return this.__layoutManager__P_72_7;
      },
      /**
       * Stores the given layout properties.
       *
       * @param properties {Map} Incoming layout property data
       */
      setLayoutProperties: function setLayoutProperties(properties) {
        // Check values through parent
        var parent = this.getLayoutParent();
        if (parent) {
          parent.updateLayoutProperties(this, properties);
        }
      },
      /**
       * Updates the layout properties of a given widget.
       *
       * @param widget {qx.ui.mobile.core.Widget} The widget that should be updated
       * @param properties {Map} Incoming layout property data
       *
       * @internal
       */
      updateLayoutProperties: function updateLayoutProperties(widget, properties) {
        var layout = this._getLayout();
        if (layout) {
          layout.setLayoutProperties(widget, properties);
        }
        this._domUpdated();
      },
      /**
       * Updates the layout with the given arguments.
       *
       * @param widget {qx.ui.mobile.core.Widget} The target widget
       * @param action {String} The causing action that triggered the layout update.
       * @param properties {Map} The animation properties to set. Key / value pairs.
       *
       * @internal
       */
      updateLayout: function updateLayout(widget, action, properties) {
        var layout = this._getLayout();
        if (layout) {
          layout.updateLayout(widget, action, properties);
        }
        this._domUpdated();
      },
      /*
      ---------------------------------------------------------------------------
        Content handling
      ---------------------------------------------------------------------------
      */
      /**
       * Sets the innerHTML of the content element and calls the {@link #_domUpdated}
       * method.
       *
       * @param value {String?""} The html to set in the content element.
       */
      _setHtml: function _setHtml(value) {
        this.getContentElement().innerHTML = value || "";
        this._domUpdated();
      },
      /**
       * Transforms this widget (rotate, scale, translate3d)
       */
      _transform: function _transform() {
        var propertyValue = "";
        if (this.getRotation() != null) {
          propertyValue = propertyValue + "rotate(" + this.getRotation() + "deg) ";
        }
        if (this.getScaleX() != null && this.getScaleY() != null) {
          propertyValue = propertyValue + "scale(" + this.getScaleX() + "," + this.getScaleY() + ") ";
        }
        var resolutionFactor = 1;
        if (this.getTransformUnit() == "rem") {
          resolutionFactor = 16;
        }
        if (this.getTranslateX() != null && this.getTranslateY() != null) {
          var isTransform3d = qx.core.Environment.get("css.transform.3d");
          if (isTransform3d && this.getTranslateZ() != null) {
            propertyValue = propertyValue + "translate3d(" + this.getTranslateX() / resolutionFactor + this.getTransformUnit() + "," + this.getTranslateY() / resolutionFactor + this.getTransformUnit() + "," + this.getTranslateZ() / resolutionFactor + this.getTransformUnit() + ") ";
          } else {
            propertyValue = propertyValue + "translate(" + this.getTranslateX() / resolutionFactor + this.getTransformUnit() + "," + this.getTranslateY() / resolutionFactor + this.getTransformUnit() + ") ";
          }
        }
        qx.bom.element.Style.set(this.getContainerElement(), "transform", propertyValue);
      },
      /*
      ---------------------------------------------------------------------------
        Attributes handling
      ---------------------------------------------------------------------------
      */
      /**
       * Shortcut for each property that should change a certain attribute of the
       * container element.
       * Use the {@link #addAttributeMapping} method to add a property to attribute
       * mapping when the attribute name or value differs from the property name or
       * value.
       *
       * @param value {var} The set value
       * @param old {var} The old value
       * @param attribute {String} The property name
       */
      _applyAttribute: function _applyAttribute(value, old, attribute) {
        this._setAttribute(attribute, value);
      },
      /**
       * Sets an attribute with the given value of the container element. The
       * <code>null</code> value resets the attribute.
       *
       * @param attribute {String} The attribute name.
       * @param value {var} The attribute value. <code>Null</code> will reset the attribute.
       */
      _setAttribute: function _setAttribute(attribute, value) {
        var mapping = qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[attribute];
        if (mapping) {
          attribute = mapping.attribute || attribute;
          var values = mapping.values;
          value = values && typeof values[value] !== "undefined" ? values[value] : value;
        }
        var element = this.getContainerElement();
        if (value != null) {
          qx.bom.element.Attribute.set(element, attribute, value);
        } else {
          qx.bom.element.Attribute.reset(element, attribute);
        }
        this._domUpdated();
      },
      /**
       * Returns the set value of the given attribute.
       *
       * @param attribute {String} The attribute name
       * @return {var} The attribute's value
       */
      _getAttribute: function _getAttribute(attribute) {
        var element = this.getContainerElement();
        return qx.bom.element.Attribute.get(element, attribute);
      },
      /*
      ---------------------------------------------------------------------------
        Styles handling
      ---------------------------------------------------------------------------
      */
      /**
       * Shortcut for each property that should change a certain style of the container
       * element.
       * Use the {@link #addStyleMapping} method to add a property to style
       * mapping when the style name or value differs from the property name or
       * value.
       */
      _applyStyle: function _applyStyle(value, old, style) {
        this._setStyle(style, value);
      },
      /**
       * Sets the value of a certain style of the container element. The
       * <code>null</code> value resets the attribute.
       *
       * @param style {String} The style of which the value should be set
       * @param value {var} The value of the style. <code>Null</code> will reset the attribute.
       */
      _setStyle: function _setStyle(style, value) {
        var mapping = qx.ui.mobile.core.Widget.STYLE_MAPPING[style];
        if (mapping) {
          style = mapping.style || style;
          value = mapping.values[value];
        }
        var element = this.getContainerElement();
        if (value != null) {
          qx.bom.element.Style.set(element, style, value);
        } else {
          qx.bom.element.Style.reset(element, style);
        }
        this._domUpdated();
      },
      /**
       * Returns the value of a certain style of the container element.
       *
       * @param style {String} The style name of which the value should be returned
       * @return {var} The value of the style
       */
      _getStyle: function _getStyle(style) {
        var element = this.getContainerElement();
        return qx.bom.element.Style.get(element, style);
      },
      /*
      ---------------------------------------------------------------------------
        CSS Handling
      ---------------------------------------------------------------------------
      */
      // property apply
      _applyDefaultCssClass: function _applyDefaultCssClass(value, old) {
        if (old) {
          this.removeCssClass(old);
        }
        if (value) {
          this.addCssClass(value);
        }
      },
      /**
       * Adds a CSS class to the container element of the widget. Use this method
       * to enhance the default appearance of the widget.
       *
       * @param cssClass {String} The CSS class to add
       */
      addCssClass: function addCssClass(cssClass) {
        qx.bom.element.Class.add(this.getContainerElement(), cssClass);
        this._domUpdated();
      },
      /**
       * Adds an array of CSS classes to the container element of the widget. Use this method
       * to enhance the default appearance of the widget.
       *
       * @param cssClasses {String[]} The CSS classes to add, wrapped by an array.
       */
      addCssClasses: function addCssClasses(cssClasses) {
        if (cssClasses) {
          qx.bom.element.Class.addClasses(this.getContainerElement(), cssClasses);
          this._domUpdated();
        }
      },
      /**
       * Removes a CSS class from the container element of the widget.
       *
       * @param cssClass {String} The CSS class to remove
       */
      removeCssClass: function removeCssClass(cssClass) {
        if (this.hasCssClass(cssClass)) {
          qx.bom.element.Class.remove(this.getContainerElement(), cssClass);
          this._domUpdated();
        }
      },
      /**
       * Removes an array of CSS classes from the container element of the widget.
       *
       * @param cssClasses {String[]} The CSS classes to remove from widget.
       */
      removeCssClasses: function removeCssClasses(cssClasses) {
        if (cssClasses) {
          qx.bom.element.Class.removeClasses(this.getContainerElement(), cssClasses);
          this._domUpdated();
        }
      },
      /**
       * Toggles the given CSS. Adds or removes the CSS class from the container element of the widget.
       *
       * @param cssClass {String} The CSS class to toggle
       */
      toggleCssClass: function toggleCssClass(cssClass) {
        if (this.hasCssClass(cssClass)) {
          this.removeCssClass(cssClass);
        } else {
          this.addCssClass(cssClass);
        }
      },
      /**
       * Checks if the widget has a certain CSS class set.
       *
       * @param cssClass {String} The CSS class to check
       * @return {Boolean} Whether the CSS class is set or not
       */
      hasCssClass: function hasCssClass(cssClass) {
        return qx.bom.element.Class.has(this.getContainerElement(), cssClass);
      },
      /*
      ---------------------------------------------------------------------------
        Visibility handling
      ---------------------------------------------------------------------------
      */
      // property apply
      _applyVisibility: function _applyVisibility(value, old) {
        if (value == "excluded") {
          this.addCssClass("exclude");
        } else if (value == "visible") {
          this.removeCssClass("exclude");
          this._setStyle("visibility", "visible");
        } else if (value == "hidden") {
          this._setStyle("visibility", "hidden");
        }
        this._domUpdated();
      },
      /**
       * Sets the visibility of the widget.
       *
       * @param action {String} The causing action that triggered the layout update.
       * @param properties {Map} The animation properties to set. Key / value pairs.
       */
      __setVisibility__P_72_8: function __setVisibility__P_72_8(action, properties) {
        this.setVisibility(action);
        var parent = this.getLayoutParent();
        if (parent) {
          parent.updateLayout(this, action, properties);
        }
      },
      /**
       * Make this widget visible.
       *
       * @param properties {Map} The animation properties to set. Key / value pairs.
       *
       */
      show: function show(properties) {
        this.__setVisibility__P_72_8("visible", properties);
      },
      /**
       * Hide this widget.
       *
       * @param properties {Map} The animation properties to set. Key / value pairs.
       *
       */
      hide: function hide(properties) {
        this.__setVisibility__P_72_8("hidden", properties);
      },
      /**
       * Hide this widget and exclude it from the underlying layout.
       *
       * @param properties {Map} The animation properties to set. Key / value pairs.
       *
       */
      exclude: function exclude(properties) {
        this.__setVisibility__P_72_8("excluded", properties);
      },
      /**
       * Whether the widget is locally visible.
       *
       * Note: This method does not respect the hierarchy.
       *
       * @return {Boolean} Returns <code>true</code> when the widget is visible
       */
      isVisible: function isVisible() {
        return this.getVisibility() === "visible";
      },
      /**
       * Whether the widget is locally hidden.
       *
       * Note: This method does not respect the hierarchy.
       *
       * @return {Boolean} Returns <code>true</code> when the widget is hidden
       */
      isHidden: function isHidden() {
        return this.getVisibility() !== "visible";
      },
      /**
       * Whether the widget is locally excluded.
       *
       * Note: This method does not respect the hierarchy.
       *
       * @return {Boolean} Returns <code>true</code> when the widget is excluded
       */
      isExcluded: function isExcluded() {
        return this.getVisibility() === "excluded";
      },
      /**
       * Detects if the widget and all its parents are visible.
       *
       * Warning: forces rendering of the browser. Do not use this method during
       * animations or performance critical tasks.
       * @return {Boolean} <code>true</code>if the widget is seeable
       */
      isSeeable: function isSeeable() {
        return this.getContainerElement().offsetWidth > 0;
      },
      /*
      ---------------------------------------------------------------------------
       Element handling
      ---------------------------------------------------------------------------
      */
      /**
       * Sets the container DOM element of the widget.
       *
       * @param element {Element} The container DOM element of the widget
       */
      _setContainerElement: function _setContainerElement(element) {
        this.__containerElement__P_72_4 = element;
      },
      /**
       * Returns the container DOM element of the widget.
       *
       * @return {Element} the container DOM element of the widget
       *
       * @internal
       */
      getContainerElement: function getContainerElement() {
        return this.__containerElement__P_72_4;
      },
      /**
       * Returns the content DOM element of the widget.
       *
       * @return {Element} the content DOM element of the widget
       *
       * @internal
       */
      getContentElement: function getContentElement() {
        if (!this.__contentElement__P_72_5) {
          this.__contentElement__P_72_5 = this._getContentElement();
        }
        return this.__contentElement__P_72_5;
      },
      /**
       * Returns the content DOM element of the widget.
       * Override this method, to define another element as the content element.
       *
       * Note: Most times this element points to to the container element.
       * When the widget has a more complex element structure,
       * the function should return a reference of the element that should contain
       * the content.
       *
       * @return {Element} the content DOM element of the widget
       */
      _getContentElement: function _getContentElement() {
        return this.getContainerElement();
      },
      /*
      ---------------------------------------------------------------------------
        ENHANCED DISPOSE SUPPORT
      ---------------------------------------------------------------------------
      */
      /**
       * Removes this widget from its parent and disposes it.
       */
      destroy: function destroy() {
        if (this.$$disposed) {
          return;
        }
        var parent = this.__layoutParent__P_72_6;
        if (parent) {
          parent._remove(this);
        }
        this.dispose();
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      if (!qx.core.ObjectRegistry.inShutDown) {
        // Cleanup event listeners
        // Needed as we rely on the containerElement in the qx.ui.mobile.core.EventHandler
        qx.event.Registration.removeAllListeners(this);
        if (this.getId()) {
          qx.ui.mobile.core.Widget.unregisterWidget(this.getId());
        }
      }
      this.__layoutParent__P_72_6 = this.__containerElement__P_72_4 = this.__contentElement__P_72_5 = null;
      if (this.__layoutManager__P_72_7) {
        this.__layoutManager__P_72_7.dispose();
      }
      this.__layoutManager__P_72_7 = null;
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.bom.Lifecycle.onShutdown(statics.onShutdown, statics);
    }
  });
  qx.ui.mobile.core.Widget.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.event.IEventHandler": {
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * This handler accepts the useraction event fired by the keyboard, mouse and
   * pointer handlers after an user triggered action has occurred.
   */
  qx.Class.define("qx.event.handler.UserAction", {
    extend: qx.core.Object,
    implement: qx.event.IEventHandler,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      qx.core.Object.constructor.call(this);

      // Define shorthands
      this.__manager__P_52_0 = manager;
      this.__window__P_52_1 = manager.getWindow();
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {Integer} Priority of this handler */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL,
      /** @type {Map} Supported event types */
      SUPPORTED_TYPES: {
        useraction: 1
      },
      /** @type {Integer} Which target check to use */
      TARGET_CHECK: qx.event.IEventHandler.TARGET_WINDOW,
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __manager__P_52_0: null,
      __window__P_52_1: null,
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER INTERFACE
      ---------------------------------------------------------------------------
      */
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {},
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        // Nothing needs to be done here
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.__manager__P_52_0 = this.__window__P_52_1 = null;
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.event.Registration.addHandler(statics);
    }
  });
  qx.event.handler.UserAction.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.event.IEventHandler": {
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      },
      "qx.lang.Function": {},
      "qx.bom.Event": {},
      "qx.event.GlobalError": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.client.OperatingSystem": {
        "require": true
      },
      "qx.bom.Viewport": {},
      "qx.event.type.Orientation": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "os.name": {
          "className": "qx.bom.client.OperatingSystem"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
     ======================================================================
  
     This class contains code based on the following work:
  
     * Unify Project
  
       Homepage:
         http://unify-project.org
  
       Copyright:
         2009-2010 Deutsche Telekom AG, Germany, http://telekom.com
  
       License:
         MIT: http://www.opensource.org/licenses/mit-license.php
  
  ************************************************************************ */

  /**
   * This class provides a handler for the orientation event.
   *
   * NOTE: Instances of this class must be disposed of after use
   *
   */
  qx.Class.define("qx.event.handler.Orientation", {
    extend: qx.core.Object,
    implement: [qx.event.IEventHandler, qx.core.IDisposable],
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      qx.core.Object.constructor.call(this);

      // Define shorthands
      this.__manager__P_155_0 = manager;
      this.__window__P_155_1 = manager.getWindow();
      this._initObserver();
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {Integer} Priority of this handler */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL,
      /** @type {Map} Supported event types */
      SUPPORTED_TYPES: {
        orientationchange: 1
      },
      /** @type {Integer} Which target check to use */
      TARGET_CHECK: qx.event.IEventHandler.TARGET_WINDOW,
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __manager__P_155_0: null,
      __window__P_155_1: null,
      __nativeEventType__P_155_2: null,
      _currentOrientation: null,
      __onNativeWrapper__P_155_3: null,
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER INTERFACE
      ---------------------------------------------------------------------------
      */
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {
        // Nothing needs to be done here
      },
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      /*
      ---------------------------------------------------------------------------
        OBSERVER INIT
      ---------------------------------------------------------------------------
      */
      /**
       * Initializes the native orientation change event listeners.
       */
      _initObserver: function _initObserver() {
        this.__onNativeWrapper__P_155_3 = qx.lang.Function.listener(this._onNative, this);

        // Handle orientation change event for Android devices by the resize event.
        // See http://stackoverflow.com/questions/1649086/detect-rotation-of-android-phone-in-the-browser-with-javascript
        // for more information.
        this.__nativeEventType__P_155_2 = qx.bom.Event.supportsEvent(this.__window__P_155_1, "orientationchange") ? "orientationchange" : "resize";
        var Event = qx.bom.Event;
        Event.addNativeListener(this.__window__P_155_1, this.__nativeEventType__P_155_2, this.__onNativeWrapper__P_155_3);
      },
      /*
      ---------------------------------------------------------------------------
        OBSERVER STOP
      ---------------------------------------------------------------------------
      */
      /**
       * Disconnects the native orientation change event listeners.
       */
      _stopObserver: function _stopObserver() {
        var Event = qx.bom.Event;
        Event.removeNativeListener(this.__window__P_155_1, this.__nativeEventType__P_155_2, this.__onNativeWrapper__P_155_3);
      },
      /*
      ---------------------------------------------------------------------------
        NATIVE EVENT OBSERVERS
      ---------------------------------------------------------------------------
      */

      /**
       * Handler for the native orientation change event.
       *
       * @signature function(domEvent)
       * @param domEvent {Event} The touch event from the browser.
       */
      _onNative: qx.event.GlobalError.observeMethod(function (domEvent) {
        var detectOrientationChangeDelay = 0;
        if (qx.core.Environment.get("os.name") == "android") {
          // On Android Devices the detection of orientation mode has to be delayed.
          // See: http://stackoverflow.com/questions/8985805/orientation-change-in-android-using-javascript
          detectOrientationChangeDelay = 300;
        }
        qx.lang.Function.delay(this._onOrientationChange, detectOrientationChangeDelay, this, domEvent);
      }),
      /**
       * Handler for the detection of an orientation change.
       * @param domEvent {Event} The touch event from the browser.
       */
      _onOrientationChange: function _onOrientationChange(domEvent) {
        var Viewport = qx.bom.Viewport;
        var orientation = Viewport.getOrientation(domEvent.target);
        if (this._currentOrientation != orientation) {
          this._currentOrientation = orientation;
          var mode = Viewport.isLandscape(domEvent.target) ? "landscape" : "portrait";
          qx.event.Registration.fireEvent(this.__window__P_155_1, "orientationchange", qx.event.type.Orientation, [orientation, mode]);
        }
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._stopObserver();
      this.__manager__P_155_0 = this.__window__P_155_1 = null;
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.event.Registration.addHandler(statics);
    }
  });
  qx.event.handler.Orientation.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Native": {
        "require": true
      },
      "qx.bom.client.OperatingSystem": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "os.name": {
          "className": "qx.bom.client.OperatingSystem"
        },
        "engine.name": {
          "className": "qx.bom.client.Engine"
        }
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
       * Andreas Ecker (ecker)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * Common base class for all DOM events.
   */
  qx.Class.define("qx.event.type.Dom", {
    extend: qx.event.type.Native,
    statics: {
      /** @type {Integer} The modifier mask for the shift key. */
      SHIFT_MASK: 1,
      /** @type {Integer} The modifier mask for the control key. */
      CTRL_MASK: 2,
      /** @type {Integer} The modifier mask for the alt key. */
      ALT_MASK: 4,
      /** @type {Integer} The modifier mask for the meta key (e.g. apple key on Macs). */
      META_MASK: 8,
      /** @type {Integer} The modifier mask for the CapsLock modifier. */
      CAPSLOCK_MASK: 16,
      /** @type {Integer} The modifier mask for the NumLock modifier. */
      NUMLOCK_MASK: 32,
      /** @type {Integer} The modifier mask for the ScrollLock modifier. */
      SCROLLLOCK_MASK: 64
    },
    members: {
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Dom.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        clone.shiftKey = nativeEvent.shiftKey;
        clone.ctrlKey = nativeEvent.ctrlKey;
        clone.altKey = nativeEvent.altKey;
        clone.metaKey = nativeEvent.metaKey;
        if (typeof nativeEvent.getModifierState === "function") {
          clone.numLock = nativeEvent.getModifierState("NumLock");
          clone.capsLock = nativeEvent.getModifierState("CapsLock");
          clone.scrollLock = nativeEvent.getModifierState("ScrollLock");
        } else {
          clone.numLock = false;
          clone.capsLock = false;
          clone.scrollLock = false;
        }
        return clone;
      },
      /**
       * Return in a bit map, which modifier keys are pressed. The constants
       * {@link #SHIFT_MASK}, {@link #CTRL_MASK}, {@link #ALT_MASK},
       * {@link #META_MASK} and {@link #CAPSLOCK_MASK} define the bit positions
       * of the corresponding keys.
       *
       * @return {Integer} A bit map with the pressed modifier keys.
       */
      getModifiers: function getModifiers() {
        var mask = 0;
        var evt = this._native;
        if (evt.shiftKey) {
          mask |= qx.event.type.Dom.SHIFT_MASK;
        }
        if (evt.ctrlKey) {
          mask |= qx.event.type.Dom.CTRL_MASK;
        }
        if (evt.altKey) {
          mask |= qx.event.type.Dom.ALT_MASK;
        }
        if (evt.metaKey) {
          mask |= qx.event.type.Dom.META_MASK;
        }
        return mask;
      },
      /**
       * Return in a bit map, which lock keys are pressed. The constants
       * {@link #CAPSLOCK_MASK}, {@link #NUMLOCK_MASK}, and {@link #SCROLLLOCK_MASK}
       * define the bit positions of the corresponding keys.
       *
       * @return {Integer} A bit map with the locked keys.
       */
      getKeyLockState: function getKeyLockState() {
        var mask = 0;
        var evt = this._native;
        if (evt.capsLock) {
          mask |= qx.event.type.Dom.CAPSLOCK_MASK;
        }
        if (evt.numLock) {
          mask |= qx.event.type.Dom.NUMLOCK_MASK;
        }
        if (evt.scrollLock) {
          mask |= qx.event.type.Dom.SCROLLLOCK_MASK;
        }
        return mask;
      },
      /**
       * Returns whether the ctrl key is pressed.
       *
       * @return {Boolean} whether the ctrl key is pressed.
       */
      isCtrlPressed: function isCtrlPressed() {
        return this._native.ctrlKey;
      },
      /**
       * Returns whether the shift key is pressed.
       *
       * @return {Boolean} whether the shift key is pressed.
       */
      isShiftPressed: function isShiftPressed() {
        return this._native.shiftKey;
      },
      /**
       * Returns whether the alt key is pressed.
       *
       * @return {Boolean} whether the alt key is pressed.
       */
      isAltPressed: function isAltPressed() {
        return this._native.altKey;
      },
      /**
       * Returns whether the meta key is pressed.
       *
       * @return {Boolean} whether the meta key is pressed.
       */
      isMetaPressed: function isMetaPressed() {
        return this._native.metaKey;
      },
      /**
       * Returns whether the caps-lock modifier is active
       *
       * @return {Boolean} whether the CapsLock key is pressed.
       */
      isCapsLocked: function isCapsLocked() {
        return this._native.capsLock;
      },
      /**
       * Returns whether the num-lock modifier is active
       *
       * @return {Boolean} whether the NumLock key is pressed.
       */
      isNumLocked: function isNumLocked() {
        return this._native.numLock;
      },
      /**
       * Returns whether the scroll-lock modifier is active
       *
       * @return {Boolean} whether the ScrollLock key is pressed.
       */
      isScrollLocked: function isScrollLocked() {
        return this._native.scrollLock;
      },
      /**
       * Returns whether the ctrl key or (on the Mac) the command key is pressed.
       *
       * @return {Boolean} <code>true</code> if the command key is pressed on the Mac
       *           or the ctrl key is pressed on another system.
       */
      isCtrlOrCommandPressed: function isCtrlOrCommandPressed() {
        // Opera seems to use ctrlKey for the cmd key so don't fix that for opera
        // on mac [BUG #5884]
        if (qx.core.Environment.get("os.name") == "osx" && qx.core.Environment.get("engine.name") != "opera") {
          return this._native.metaKey;
        } else {
          return this._native.ctrlKey;
        }
      }
    }
  });
  qx.event.type.Dom.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Dom": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.dom.Node": {},
      "qx.bom.Viewport": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "browser.name": {
          "className": "qx.bom.client.Browser"
        },
        "browser.documentmode": {
          "className": "qx.bom.client.Browser"
        },
        "engine.name": {
          "className": "qx.bom.client.Engine"
        }
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
       * Andreas Ecker (ecker)
       * Fabian Jakobs (fjakobs)
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */

  /**
   * Mouse event object.
   *
   * the interface of this class is based on the DOM Level 2 mouse event
   * interface: http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-mouseevents
   */
  qx.Class.define("qx.event.type.Mouse", {
    extend: qx.event.type.Dom,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    /* eslint-disable @qooxdoo/qx/no-refs-in-members */
    members: {
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Mouse.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        // Fix for #9619 pointermove/mousemove events return wrong result in isLeftPressed()
        // button only valid in button events. Undefined otherwise.
        // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
        switch (nativeEvent.type) {
          case "mousemove":
          case "mouseenter":
          case "mouseleave":
          case "mouseover":
          case "mouseout":
            clone.button = -1;
            break;
          default:
            clone.button = nativeEvent.button;
            break;
        }
        clone.buttons = nativeEvent.buttons;
        clone.clientX = Math.round(nativeEvent.clientX);
        clone.clientY = Math.round(nativeEvent.clientY);
        clone.pageX = nativeEvent.pageX ? Math.round(nativeEvent.pageX) : undefined;
        clone.pageY = nativeEvent.pageY ? Math.round(nativeEvent.pageY) : undefined;
        clone.screenX = Math.round(nativeEvent.screenX);
        clone.screenY = Math.round(nativeEvent.screenY);
        clone.wheelDelta = nativeEvent.wheelDelta;
        clone.wheelDeltaX = nativeEvent.wheelDeltaX;
        clone.wheelDeltaY = nativeEvent.wheelDeltaY;
        clone.delta = nativeEvent.delta;
        clone.deltaX = nativeEvent.deltaX;
        clone.deltaY = nativeEvent.deltaY;
        clone.deltaZ = nativeEvent.deltaZ;
        clone.detail = nativeEvent.detail;
        clone.axis = nativeEvent.axis;
        clone.wheelX = nativeEvent.wheelX;
        clone.wheelY = nativeEvent.wheelY;
        clone.HORIZONTAL_AXIS = nativeEvent.HORIZONTAL_AXIS;
        clone.srcElement = nativeEvent.srcElement;
        clone.target = nativeEvent.target;
        return clone;
      },
      /**
       * @type {Map} Contains the button ID to identifier data.
       *
       * @lint ignoreReferenceField(__buttonsDom2EventModel)
       */
      __buttonsDom2EventModel__P_62_0: {
        0: "left",
        2: "right",
        1: "middle"
      },
      /**
       * @type {Map} Contains the button ID to identifier data.
       *
       * @lint ignoreReferenceField(__buttonsDom3EventModel)
       */
      __buttonsDom3EventModel__P_62_1: {
        0: "none",
        1: "left",
        2: "right",
        4: "middle"
      },
      /**
       * @type {Map} Contains the button ID to identifier data.
       *
       * @lint ignoreReferenceField(__buttonsMshtmlEventModel)
       */
      __buttonsMshtmlEventModel__P_62_2: {
        1: "left",
        2: "right",
        4: "middle"
      },
      // overridden
      stop: function stop() {
        this.stopPropagation();
      },
      /**
       * During mouse events caused by the depression or release of a mouse button,
       * this method can be used to check which mouse button changed state.
       *
       * Only internet explorer can compute the button during mouse move events. For
       * all other browsers the button only contains sensible data during
       * "click" events like "click", "dblclick", "mousedown", "mouseup" or "contextmenu".
       *
       * But still, browsers act different on click:
       * <pre>
       * <- = left mouse button
       * -> = right mouse button
       * ^  = middle mouse button
       *
       * Browser | click, dblclick | contextmenu
       * ---------------------------------------
       * Firefox | <- ^ ->         | ->
       * Chrome  | <- ^            | ->
       * Safari  | <- ^            | ->
       * IE      | <- (^ is <-)    | ->
       * Opera   | <-              | -> (twice)
       * </pre>
       *
       * @return {String} One of "left", "right", "middle" or "none"
       */
      getButton: function getButton() {
        switch (this._type) {
          case "contextmenu":
            return "right";
          case "click":
            // IE does not support buttons on click --> assume left button
            if (qx.core.Environment.get("browser.name") === "ie" && qx.core.Environment.get("browser.documentmode") < 9) {
              return "left";
            }
          default:
            if (!(qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") <= 8)) {
              // if the button value is -1, we should use the DOM level 3 .buttons attribute
              // the value -1 is only set for pointer events: http://msdn.microsoft.com/en-us/library/ie/ff974877(v=vs.85).aspx
              if (this._native.button === -1) {
                return this.__buttonsDom3EventModel__P_62_1[this._native.buttons] || "none";
              }
              return this.__buttonsDom2EventModel__P_62_0[this._native.button] || "none";
            } else {
              return this.__buttonsMshtmlEventModel__P_62_2[this._native.button] || "none";
            }
        }
      },
      /**
       * Whether the left button is pressed
       *
       * @return {Boolean} true when the left button is pressed
       */
      isLeftPressed: function isLeftPressed() {
        return this.getButton() === "left";
      },
      /**
       * Whether the middle button is pressed
       *
       * @return {Boolean} true when the middle button is pressed
       */
      isMiddlePressed: function isMiddlePressed() {
        return this.getButton() === "middle";
      },
      /**
       * Whether the right button is pressed
       *
       * @return {Boolean} true when the right button is pressed
       */
      isRightPressed: function isRightPressed() {
        return this.getButton() === "right";
      },
      /**
       * Get a secondary event target related to an UI event. This attribute is
       * used with the mouseover event to indicate the event target which the
       * pointing device exited and with the mouseout event to indicate the
       * event target which the pointing device entered.
       *
       * @return {Element} The secondary event target.
       * @signature function()
       */
      getRelatedTarget: function getRelatedTarget() {
        return this._relatedTarget;
      },
      /**
       * Get the he horizontal coordinate at which the event occurred relative
       * to the viewport.
       *
       * @return {Integer} The horizontal mouse position
       */
      getViewportLeft: function getViewportLeft() {
        return Math.round(this._native.clientX);
      },
      /**
       * Get the vertical coordinate at which the event occurred relative
       * to the viewport.
       *
       * @return {Integer} The vertical mouse position
       * @signature function()
       */
      getViewportTop: function getViewportTop() {
        return Math.round(this._native.clientY);
      },
      /**
       * Get the horizontal position at which the event occurred relative to the
       * left of the document. This property takes into account any scrolling of
       * the page.
       *
       * @return {Integer} The horizontal mouse position in the document.
       */
      getDocumentLeft: function getDocumentLeft() {
        if (this._native.pageX !== undefined) {
          return Math.round(this._native.pageX);
        } else if (this._native.srcElement) {
          var win = qx.dom.Node.getWindow(this._native.srcElement);
          return Math.round(this._native.clientX) + qx.bom.Viewport.getScrollLeft(win);
        } else {
          return Math.round(this._native.clientX) + qx.bom.Viewport.getScrollLeft(window);
        }
      },
      /**
       * Get the vertical position at which the event occurred relative to the
       * top of the document. This property takes into account any scrolling of
       * the page.
       *
       * @return {Integer} The vertical mouse position in the document.
       */
      getDocumentTop: function getDocumentTop() {
        if (this._native.pageY !== undefined) {
          return Math.round(this._native.pageY);
        } else if (this._native.srcElement) {
          var win = qx.dom.Node.getWindow(this._native.srcElement);
          return Math.round(this._native.clientY) + qx.bom.Viewport.getScrollTop(win);
        } else {
          return Math.round(this._native.clientY) + qx.bom.Viewport.getScrollTop(window);
        }
      },
      /**
       * Get the horizontal coordinate at which the event occurred relative to
       * the origin of the screen coordinate system.
       *
       * Note: This value is usually not very useful unless you want to
       * position a native popup window at this coordinate.
       *
       * @return {Integer} The horizontal mouse position on the screen.
       */
      getScreenLeft: function getScreenLeft() {
        return Math.round(this._native.screenX);
      },
      /**
       * Get the vertical coordinate at which the event occurred relative to
       * the origin of the screen coordinate system.
       *
       * Note: This value is usually not very useful unless you want to
       * position a native popup window at this coordinate.
       *
       * @return {Integer} The vertical mouse position on the screen.
       */
      getScreenTop: function getScreenTop() {
        return Math.round(this._native.screenY);
      }
    }
  });
  qx.event.type.Mouse.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Mouse": {
        "require": true
      },
      "qx.bom.Event": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * Pointer event object.
   *
   * the interface of this class is based on the pointer event interface:
   * http://www.w3.org/TR/pointerevents/
   */
  qx.Class.define("qx.event.type.Pointer", {
    extend: qx.event.type.Mouse,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        clone = qx.event.type.Pointer.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        clone.pointerId = nativeEvent.pointerId;
        clone.width = nativeEvent.width;
        clone.height = nativeEvent.height;
        clone.pressure = nativeEvent.pressure;
        clone.tiltX = nativeEvent.tiltX;
        clone.tiltY = nativeEvent.tiltY;
        clone.pointerType = nativeEvent.pointerType;
        clone.isPrimary = nativeEvent.isPrimary;
        clone._original = nativeEvent._original;
        clone.MSPOINTER_TYPE_MOUSE = nativeEvent.MSPOINTER_TYPE_MOUSE;
        clone.MSPOINTER_TYPE_PEN = nativeEvent.MSPOINTER_TYPE_PEN;
        clone.MSPOINTER_TYPE_TOUCH = nativeEvent.MSPOINTER_TYPE_TOUCH;
        return clone;
      },
      // overridden
      getDocumentLeft: function getDocumentLeft() {
        var x = qx.event.type.Pointer.superclass.prototype.getDocumentLeft.call(this);
        // iOS 6 does not copy pageX over to the fake pointer event
        if (x == 0 && this.getPointerType() == "touch" && this._native._original !== undefined) {
          x = Math.round(this._native._original.changedTouches[0].pageX) || 0;
        }
        return x;
      },
      // overridden
      getDocumentTop: function getDocumentTop() {
        var y = qx.event.type.Pointer.superclass.prototype.getDocumentTop.call(this);
        // iOS 6 does not copy pageY over to the fake pointer event
        if (y == 0 && this.getPointerType() == "touch" && this._native._original !== undefined) {
          y = Math.round(this._native._original.changedTouches[0].pageY) || 0;
        }
        return y;
      },
      /**
       * Returns a unique identified for the pointer. This id is
       * unique for all active pointers.
       *
       * @return {Number} The unique id.
       */
      getPointerId: function getPointerId() {
        return this._native.pointerId || 0;
      },
      /**
       * Returns the contact geometry in it's width.
       *
       * @return {Number} The number of pixels (width) of the contact geometry.
       */
      getWidth: function getWidth() {
        return this._native.width || 0;
      },
      /**
       * Returns the contact geometry in it's height.
       *
       * @return {Number} The number of pixels (height) of the contact geometry.
       */
      getHeight: function getHeight() {
        return this._native.height || 0;
      },
      /**
       * Returns the pressure of the pointer in a rage from 0 to 1.
       *
       * @return {Number} <code>1</code> for full pressure. The default is 0.
       */
      getPressure: function getPressure() {
        return this._native.pressure || 0;
      },
      /**
       * Returns the plane angle in degrees between the Y-Z plane and the
       * plane containing e.g. the stylus and the Y axis.
       *
       * @return {Number} A value between -90 and 90. The default is 0.
       */
      getTiltX: function getTiltX() {
        return this._native.tiltX || 0;
      },
      /**
       * Returns the plane angle in degrees between the X-Z plane and the
       * plane containing e.g. the stylus and the X axis.
       *
       * @return {Number} A value between -90 and 90. The default is 0.
       */
      getTiltY: function getTiltY() {
        return this._native.tiltY || 0;
      },
      // overridden
      getOriginalTarget: function getOriginalTarget() {
        if (this._native && this._native._original) {
          // fake pointer events
          var orig = this._native._original;
          // In IE8, the original event can be a DispCEventObj which throws an
          // exception when trying to access its properties.
          try {
            // touch events have a wrong target compared to mouse events
            if (orig.type.indexOf("touch") == 0) {
              if (orig.changedTouches[0]) {
                return document.elementFromPoint(orig.changedTouches[0].clientX, orig.changedTouches[0].clientY);
              }
            }
          } catch (ex) {
            return qx.bom.Event.getTarget(this._native);
          }
          return qx.bom.Event.getTarget(orig);
        } else if (this._native) {
          // native pointer events
          return qx.bom.Event.getTarget(this._native);
        }
        return qx.event.type.Pointer.superclass.prototype.getOriginalTarget.call(this);
      },
      /**
       * Returns the device type which the event triggered. This can be one
       * of the following strings: <code>mouse</code>, <code>wheel</code>,
       * <code>pen</code> or <code>touch</code>.
       *
       * @return {String} The type of the pointer.
       */
      getPointerType: function getPointerType() {
        if (typeof this._native.pointerType == "string") {
          return this._native.pointerType;
        }
        if (typeof this._native.pointerType == "number") {
          if (this._native.pointerType == this._native.MSPOINTER_TYPE_MOUSE) {
            return "mouse";
          }
          if (this._native.pointerType == this._native.MSPOINTER_TYPE_PEN) {
            return "pen";
          }
          if (this._native.pointerType == this._native.MSPOINTER_TYPE_TOUCH) {
            return "touch";
          }
        }
        return "";
      },
      /**
       * Returns whether the pointer is the primary pointer.
       *
       * @return {Boolean} <code>true</code>, if it's the primary pointer.
       */
      isPrimary: function isPrimary() {
        return !!this._native.isPrimary;
      }
    }
  });
  qx.event.type.Pointer.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Pointer": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Tap is a single pointer gesture fired when one pointer goes down and up on
   * the same location.
   */
  qx.Class.define("qx.event.type.Tap", {
    extend: qx.event.type.Pointer
  });
  qx.event.type.Tap.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Pointer": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Swipe is a single pointer gesture fired when a pointer is moved in one direction.
   * It contains some additional data like the primary axis, the velocity and the distance.
   */
  qx.Class.define("qx.event.type.Swipe", {
    extend: qx.event.type.Pointer,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Swipe.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        clone.swipe = nativeEvent.swipe;
        return clone;
      },
      /**
       * Returns the start time of the performed swipe.
       *
       * @return {Integer} the start time
       */
      getStartTime: function getStartTime() {
        return this._native.swipe.startTime;
      },
      /**
       * Returns the duration the performed swipe took.
       *
       * @return {Integer} the duration
       */
      getDuration: function getDuration() {
        return this._native.swipe.duration;
      },
      /**
       * Returns whether the performed swipe was on the x or y axis.
       *
       * @return {String} "x"/"y" axis
       */
      getAxis: function getAxis() {
        return this._native.swipe.axis;
      },
      /**
       * Returns the direction of the performed swipe in reference to the axis.
       * y = up / down
       * x = left / right
       *
       * @return {String} the direction
       */
      getDirection: function getDirection() {
        return this._native.swipe.direction;
      },
      /**
       * Returns the velocity of the performed swipe.
       *
       * @return {Number} the velocity
       */
      getVelocity: function getVelocity() {
        return this._native.swipe.velocity;
      },
      /**
       * Returns the distance of the performed swipe.
       *
       * @return {Integer} the distance
       */
      getDistance: function getDistance() {
        return this._native.swipe.distance;
      }
    }
  });
  qx.event.type.Swipe.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Pointer": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christopher Zuendorf (czuendorf)
  
  ************************************************************************ */

  /**
   * Track is a single pointer gesture and contains of a three vent types:
   * <code>trackstart</code>, <code>track</code> and <code>trackend</code>. These
   * events will be fired when a pointer grabs an item and moves the pointer on it.
   */
  qx.Class.define("qx.event.type.Track", {
    extend: qx.event.type.Pointer,
    members: {
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Track.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        clone.delta = nativeEvent.delta;
        return clone;
      },
      /**
       * Returns a map with the calculated delta coordinates and axis,
       * relative to the position on <code>trackstart</code> event.
       *
       * @return {Map} a map with contains the delta as <code>x</code> and
       * <code>y</code> and the movement axis as <code>axis</code>.
       */
      getDelta: function getDelta() {
        return this._native.delta;
      }
    }
  });
  qx.event.type.Track.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Pointer": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christopher Zuendorf (czuendorf)
  
  ************************************************************************ */

  /**
   * Rotate is a multi pointer gesture fired when two finger moved around
   * a single point. It contains the angle of the rotation.
   */
  qx.Class.define("qx.event.type.Rotate", {
    extend: qx.event.type.Pointer,
    members: {
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Rotate.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        clone.angle = nativeEvent.angle;
        return clone;
      },
      /**
       * Returns a number with the current calculated angle between the primary and secondary active pointers.
       *
       * @return {Number} the angle of the two active pointers.
       */
      getAngle: function getAngle() {
        return this._native.angle;
      }
    }
  });
  qx.event.type.Rotate.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Pointer": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christopher Zuendorf (czuendorf)
  
  ************************************************************************ */

  /**
   * Pinch is a multi pointer gesture fired when two finger moved towards
   * or away from each other. It contains the scaling factor of the pinch.
   */
  qx.Class.define("qx.event.type.Pinch", {
    extend: qx.event.type.Pointer,
    members: {
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Pinch.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        clone.scale = nativeEvent.scale;
        return clone;
      },
      /**
       * Returns the calculated scale of this event.
       *
       * @return {Float} the scale value of this event.
       */
      getScale: function getScale() {
        return this._native.scale;
      }
    }
  });
  qx.event.type.Pinch.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["device.name", "device.touch", "device.type", "device.pixelRatio"],
      "required": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * The class is responsible for device detection. This is specially useful
   * if you are on a mobile device.
   *
   * This class is used by {@link qx.core.Environment} and should not be used
   * directly. Please check its class comment for details how to use it.
   *
   * @internal
   */
  qx.Bootstrap.define("qx.bom.client.Device", {
    statics: {
      /** Maps user agent names to device IDs */
      __ids__P_28_0: {
        "Windows Phone": "iemobile",
        iPod: "ipod",
        iPad: "ipad",
        iPhone: "iphone",
        PSP: "psp",
        "PLAYSTATION 3": "ps3",
        "Nintendo Wii": "wii",
        "Nintendo DS": "ds",
        XBOX: "xbox",
        Xbox: "xbox"
      },
      /**
       * Returns the name of the current device if detectable. It falls back to
       * <code>pc</code> if the detection for other devices fails.
       *
       * @internal
       * @return {String} The string of the device found.
       */
      getName: function getName() {
        var str = [];
        for (var key in qx.bom.client.Device.__ids__P_28_0) {
          str.push(key);
        }
        var reg = new RegExp("(" + str.join("|").replace(/\./g, ".") + ")", "g");
        var match = reg.exec(navigator.userAgent);
        if (match && match[1]) {
          return qx.bom.client.Device.__ids__P_28_0[match[1]];
        }
        return "pc";
      },
      /**
       * Determines on what type of device the application is running.
       * Valid values are: "mobile", "tablet" or "desktop".
       * @return {String} The device type name of determined device.
       */
      getType: function getType() {
        return qx.bom.client.Device.detectDeviceType(navigator.userAgent);
      },
      /**
       * Detects the device type, based on given userAgentString.
       *
       * @param userAgentString {String} userAgent parameter, needed for decision.
       * @return {String} The device type name of determined device: "mobile","desktop","tablet"
       */
      detectDeviceType: function detectDeviceType(userAgentString) {
        if (qx.bom.client.Device.detectTabletDevice(userAgentString)) {
          return "tablet";
        } else if (qx.bom.client.Device.detectMobileDevice(userAgentString)) {
          return "mobile";
        }
        return "desktop";
      },
      /**
       * Detects if a device is a mobile phone. (Tablets excluded.)
       * @param userAgentString {String} userAgent parameter, needed for decision.
       * @return {Boolean} Flag which indicates whether it is a mobile device.
       */
      detectMobileDevice: function detectMobileDevice(userAgentString) {
        return /android.+mobile|ip(hone|od)|bada\/|blackberry|BB10|maemo|opera m(ob|in)i|fennec|NetFront|phone|psp|symbian|IEMobile|windows (ce|phone)|xda/i.test(userAgentString);
      },
      /**
       * Detects if a device is a tablet device.
       * @param userAgentString {String} userAgent parameter, needed for decision.
       * @return {Boolean} Flag which indicates whether it is a tablet device.
       */
      detectTabletDevice: function detectTabletDevice(userAgentString) {
        var iPadOS13Up = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
        var isIE10Tablet = /MSIE 10/i.test(userAgentString) && /ARM/i.test(userAgentString) && !/windows phone/i.test(userAgentString);
        var isCommonTablet = !/android.+mobile|Tablet PC/i.test(userAgentString) && /Android|ipad|tablet|playbook|silk|kindle|psp/i.test(userAgentString);
        return isIE10Tablet || isCommonTablet || iPadOS13Up;
      },
      /**
       * Detects the device's pixel ratio. Returns 1 if detection is not possible.
       *
       * @return {Number} The device's pixel ratio
       */
      getDevicePixelRatio: function getDevicePixelRatio() {
        if (typeof window.devicePixelRatio !== "undefined") {
          return window.devicePixelRatio;
        }
        return 1;
      },
      /**
       * Detects if either touch events or pointer events are supported.
       * Additionally it checks if touch is enabled for pointer events.
       *
       * @return {Boolean} <code>true</code>, if the device supports touch
       */
      getTouch: function getTouch() {
        return "ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
      }
    },
    defer: function defer(statics) {
      qx.core.Environment.add("device.name", statics.getName);
      qx.core.Environment.add("device.touch", statics.getTouch);
      qx.core.Environment.add("device.type", statics.getType);
      qx.core.Environment.add("device.pixelRatio", statics.getDevicePixelRatio);
    }
  });
  qx.bom.client.Device.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "usage": "dynamic",
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.bom.client.OperatingSystem": {
        "require": true
      },
      "qx.bom.client.Device": {
        "require": true
      },
      "qx.lang.Function": {},
      "qx.bom.client.Event": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.Event": {},
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.element.Style": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "os.name": {
          "load": true,
          "className": "qx.bom.client.OperatingSystem"
        },
        "device.touch": {
          "load": true,
          "className": "qx.bom.client.Device"
        },
        "event.mspointer": {
          "className": "qx.bom.client.Event"
        },
        "engine.version": {
          "className": "qx.bom.client.Engine"
        },
        "engine.name": {
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "className": "qx.bom.client.Browser"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
       * Tino Butz (tbtz)
       * Christian Hagendorn (chris_schmidt)
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /**
   * Listens for native touch events and fires composite events like "tap" and
   * "swipe"
   *
   * @ignore(qx.event.*)
   */
  qx.Bootstrap.define("qx.event.handler.TouchCore", {
    extend: Object,
    implement: [qx.core.IDisposable],
    statics: {
      /** @type {Integer} The maximum distance of a tap. Only if the x or y distance of
       *      the performed tap is less or equal the value of this constant, a tap
       *      event is fired.
       */
      TAP_MAX_DISTANCE: qx.core.Environment.get("os.name") != "android" ? 10 : 40,
      /** @type {Map} The direction of a swipe relative to the axis */
      SWIPE_DIRECTION: {
        x: ["left", "right"],
        y: ["up", "down"]
      },
      /** @type {Integer} The minimum distance of a swipe. Only if the x or y distance
       *      of the performed swipe is greater as or equal the value of this
       *      constant, a swipe event is fired.
       */
      SWIPE_MIN_DISTANCE: qx.core.Environment.get("os.name") != "android" ? 11 : 41,
      /** @type {Integer} The minimum velocity of a swipe. Only if the velocity of the
       *      performed swipe is greater as or equal the value of this constant, a
       *      swipe event is fired.
       */
      SWIPE_MIN_VELOCITY: 0,
      /**
       * @type {Integer} The time delta in milliseconds to fire a long tap event.
       */
      LONGTAP_TIME: qx.core.Environment.get("device.touch") ? 500 : 99999
    },
    /**
     * Create a new instance
     *
     * @param target {Element} element on which to listen for native touch events
     * @param emitter {qx.event.Emitter} Event emitter object
     */
    construct: function construct(target, emitter) {
      this.__target__P_156_0 = target;
      this.__emitter__P_156_1 = emitter;
      this._initTouchObserver();
      this.__pointers__P_156_2 = [];
      this.__touchStartPosition__P_156_3 = {};
    },
    members: {
      __target__P_156_0: null,
      __emitter__P_156_1: null,
      __onTouchEventWrapper__P_156_4: null,
      __originalTarget__P_156_5: null,
      __touchStartPosition__P_156_3: null,
      __startTime__P_156_6: null,
      __beginScalingDistance__P_156_7: null,
      __beginRotation__P_156_8: null,
      __pointers__P_156_2: null,
      __touchEventNames__P_156_9: null,
      /*
      ---------------------------------------------------------------------------
        OBSERVER INIT
      ---------------------------------------------------------------------------
      */
      /**
       * Initializes the native touch event listeners.
       */
      _initTouchObserver: function _initTouchObserver() {
        this.__onTouchEventWrapper__P_156_4 = qx.lang.Function.listener(this._onTouchEvent, this);
        this.__touchEventNames__P_156_9 = ["touchstart", "touchmove", "touchend", "touchcancel"];
        if (qx.core.Environment.get("event.mspointer")) {
          var engineVersion = parseInt(qx.core.Environment.get("engine.version"), 10);
          if (engineVersion == 10) {
            // IE 10
            this.__touchEventNames__P_156_9 = ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"];
          } else {
            // IE 11+
            this.__touchEventNames__P_156_9 = ["pointerdown", "pointermove", "pointerup", "pointercancel"];
          }
        }
        for (var i = 0; i < this.__touchEventNames__P_156_9.length; i++) {
          qx.bom.Event.addNativeListener(this.__target__P_156_0, this.__touchEventNames__P_156_9[i], this.__onTouchEventWrapper__P_156_4);
        }
      },
      /*
      ---------------------------------------------------------------------------
        OBSERVER STOP
      ---------------------------------------------------------------------------
      */
      /**
       * Disconnects the native touch event listeners.
       */
      _stopTouchObserver: function _stopTouchObserver() {
        for (var i = 0; i < this.__touchEventNames__P_156_9.length; i++) {
          qx.bom.Event.removeNativeListener(this.__target__P_156_0, this.__touchEventNames__P_156_9[i], this.__onTouchEventWrapper__P_156_4);
        }
      },
      /*
      ---------------------------------------------------------------------------
        NATIVE EVENT OBSERVERS
      ---------------------------------------------------------------------------
      */
      /**
       * Handler for native touch events.
       *
       * @param domEvent {Event} The touch event from the browser.
       */
      _onTouchEvent: function _onTouchEvent(domEvent) {
        this._commonTouchEventHandler(domEvent);
      },
      /**
       * Calculates the scaling distance between two touches.
       * @param touch0 {Event} The touch event from the browser.
       * @param touch1 {Event} The touch event from the browser.
       * @return {Number} the calculated distance.
       */
      _getScalingDistance: function _getScalingDistance(touch0, touch1) {
        return Math.sqrt(Math.pow(touch0.pageX - touch1.pageX, 2) + Math.pow(touch0.pageY - touch1.pageY, 2));
      },
      /**
       * Calculates the rotation between two touches.
       * @param touch0 {Event} The touch event from the browser.
       * @param touch1 {Event} The touch event from the browser.
       * @return {Number} the calculated rotation.
       */
      _getRotationAngle: function _getRotationAngle(touch0, touch1) {
        var x = touch0.pageX - touch1.pageX;
        var y = touch0.pageY - touch1.pageY;
        return Math.atan2(y, x) * 180 / Math.PI;
      },
      /**
       * Calculates the delta of the touch position relative to its position when <code>touchstart/code> event occurred.
       * @param touches {Array} an array with the current active touches, provided by <code>touchmove/code> event.
       * @return {Array} an array containing objects with the calculated delta as <code>x</code>,
       * <code>y</code> and the identifier of the corresponding touch.
       */
      _calcTouchesDelta: function _calcTouchesDelta(touches) {
        var delta = [];
        for (var i = 0; i < touches.length; i++) {
          delta.push(this._calcSingleTouchDelta(touches[i]));
        }
        return delta;
      },
      /**
       * Calculates the delta of one single touch position relative to its position when <code>touchstart/code> event occurred.
       * @param touch {Event} the current active touch, provided by <code>touchmove/code> event.
       * @return {Map} a map containing deltaX as <code>x</code>, deltaY as <code>y</code>, the direction of the movement as <code>axis</code> and the touch identifier as <code>identifier</code>.
       */
      _calcSingleTouchDelta: function _calcSingleTouchDelta(touch) {
        if (this.__touchStartPosition__P_156_3.hasOwnProperty(touch.identifier)) {
          var touchStartPosition = this.__touchStartPosition__P_156_3[touch.identifier];
          var deltaX = Math.floor(touch.clientX - touchStartPosition[0]);
          var deltaY = Math.floor(touch.clientY - touchStartPosition[1]);
          var axis = "x";
          if (Math.abs(deltaX / deltaY) < 1) {
            axis = "y";
          }
          return {
            x: deltaX,
            y: deltaY,
            axis: axis,
            identifier: touch.identifier
          };
        } else {
          return {
            x: 0,
            y: 0,
            axis: null,
            identifier: touch.identifier
          };
        }
      },
      /**
       * Called by an event handler.
       *
       * @param domEvent {Event} DOM event
       * @param type {String ? null} type of the event
       */
      _commonTouchEventHandler: function _commonTouchEventHandler(domEvent, type) {
        var type = type || domEvent.type;
        if (qx.core.Environment.get("event.mspointer")) {
          type = this._mapPointerEvent(type);
          var touches = this._detectTouchesByPointer(domEvent, type);
          domEvent.changedTouches = touches;
          domEvent.targetTouches = touches;
          domEvent.touches = touches;
        }
        domEvent.delta = [];
        if (type == "touchstart") {
          this.__originalTarget__P_156_5 = this._getTarget(domEvent);
          if (domEvent.touches && domEvent.touches.length > 1) {
            this.__beginScalingDistance__P_156_7 = this._getScalingDistance(domEvent.touches[0], domEvent.touches[1]);
            this.__beginRotation__P_156_8 = this._getRotationAngle(domEvent.touches[0], domEvent.touches[1]);
          }
          for (var i = 0; i < domEvent.changedTouches.length; i++) {
            var touch = domEvent.changedTouches[i];
            this.__touchStartPosition__P_156_3[touch.identifier] = [touch.clientX, touch.clientY];
          }
        }
        if (type == "touchmove") {
          // Polyfill for scale
          if (typeof domEvent.scale == "undefined" && domEvent.targetTouches.length > 1) {
            var currentScalingDistance = this._getScalingDistance(domEvent.targetTouches[0], domEvent.targetTouches[1]);
            domEvent.scale = currentScalingDistance / this.__beginScalingDistance__P_156_7;
          }
          // Polyfill for rotation
          if ((typeof domEvent.rotation == "undefined" || qx.core.Environment.get("event.mspointer")) && domEvent.targetTouches.length > 1) {
            var currentRotation = this._getRotationAngle(domEvent.targetTouches[0], domEvent.targetTouches[1]);
            domEvent._rotation = currentRotation - this.__beginRotation__P_156_8;
          }
          domEvent.delta = this._calcTouchesDelta(domEvent.targetTouches);
        }
        this._fireEvent(domEvent, type, this.__originalTarget__P_156_5);
        if (qx.core.Environment.get("event.mspointer")) {
          if (type == "touchend" || type == "touchcancel") {
            delete this.__pointers__P_156_2[domEvent.pointerId];
          }
        }
        if ((type == "touchend" || type == "touchcancel") && domEvent.changedTouches[0]) {
          delete this.__touchStartPosition__P_156_3[domEvent.changedTouches[0].identifier];
        }
      },
      /**
       * Creates an array with all current used touches out of multiple serial pointer events.
       * Needed because pointerEvents do not provide a touch list.
       * @param domEvent {Event} DOM event
       * @param type {String ? null} type of the event
       * @return {Array} touch list array.
       */
      _detectTouchesByPointer: function _detectTouchesByPointer(domEvent, type) {
        var touches = [];
        if (type == "touchstart") {
          this.__pointers__P_156_2[domEvent.pointerId] = domEvent;
        } else if (type == "touchmove") {
          this.__pointers__P_156_2[domEvent.pointerId] = domEvent;
        }
        for (var pointerId in this.__pointers__P_156_2) {
          var pointer = this.__pointers__P_156_2[pointerId];
          touches.push(pointer);
        }
        return touches;
      },
      /**
       * Maps a pointer event type to the corresponding touch event type.
       * @param type {String} the event type to parse.
       * @return {String} the parsed event name.
       */
      _mapPointerEvent: function _mapPointerEvent(type) {
        type = type.toLowerCase();
        if (type.indexOf("pointerdown") !== -1) {
          return "touchstart";
        } else if (type.indexOf("pointerup") !== -1) {
          return "touchend";
        } else if (type.indexOf("pointermove") !== -1) {
          return "touchmove";
        } else if (type.indexOf("pointercancel") !== -1) {
          return "touchcancel";
        }
        return type;
      },
      /**
       * Return the target of the event.
       *
       * @param domEvent {Event} DOM event
       * @return {Element} Event target
       */
      _getTarget: function _getTarget(domEvent) {
        var target = qx.bom.Event.getTarget(domEvent);

        // Text node. Fix Safari Bug, see http://www.quirksmode.org/js/events_properties.html
        if (qx.core.Environment.get("engine.name") == "webkit") {
          if (target && target.nodeType == 3) {
            target = target.parentNode;
          }
        } else if (qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 11) {
          // Fix for IE10 and pointer-events:none
          //
          // Changed the condition above to match exactly those browsers
          // for which the fix was intended
          // See: https://github.com/qooxdoo/qooxdoo/issues/9481
          //
          var targetForIE = this.__evaluateTarget__P_156_10(domEvent);
          if (targetForIE) {
            target = targetForIE;
          }
        }
        return target;
      },
      /**
       * This method fixes "pointer-events:none" for Internet Explorer 10.
       * Checks which elements are placed to position x/y and traverses the array
       * till one element has no "pointer-events:none" inside its style attribute.
       * @param domEvent {Event} DOM event
       * @return {Element|null} Event target
       */
      __evaluateTarget__P_156_10: function __evaluateTarget__P_156_10(domEvent) {
        var clientX = null;
        var clientY = null;
        if (domEvent && domEvent.touches && domEvent.touches.length !== 0) {
          clientX = domEvent.touches[0].clientX;
          clientY = domEvent.touches[0].clientY;
        }

        // Retrieve an array with elements on point X/Y.
        var hitTargets = document.msElementsFromPoint(clientX, clientY);
        if (hitTargets) {
          // Traverse this array for the elements which has no pointer-events:none inside.
          for (var i = 0; i < hitTargets.length; i++) {
            var currentTarget = hitTargets[i];
            var pointerEvents = qx.bom.element.Style.get(currentTarget, "pointer-events", 3);
            if (pointerEvents != "none") {
              return currentTarget;
            }
          }
        }
        return null;
      },
      /**
       * Fire a touch event with the given parameters
       *
       * @param domEvent {Event} DOM event
       * @param type {String ? null} type of the event
       * @param target {Element ? null} event target
       */
      _fireEvent: function _fireEvent(domEvent, type, target) {
        if (!target) {
          target = this._getTarget(domEvent);
        }
        var type = type || domEvent.type;
        if (target && target.nodeType && this.__emitter__P_156_1) {
          this.__emitter__P_156_1.emit(type, domEvent);
        }
      },
      /**
       * Dispose this object
       */
      dispose: function dispose() {
        this._stopTouchObserver();
        this.__originalTarget__P_156_5 = this.__target__P_156_0 = this.__touchEventNames__P_156_9 = this.__pointers__P_156_2 = this.__emitter__P_156_1 = this.__beginScalingDistance__P_156_7 = this.__beginRotation__P_156_8 = null;
      }
    }
  });
  qx.event.handler.TouchCore.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.UserAction": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.handler.Orientation": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.type.Tap": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.type.Swipe": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.type.Track": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.type.Rotate": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.type.Pinch": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.handler.TouchCore": {
        "construct": true,
        "require": true
      },
      "qx.event.IEventHandler": {
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      },
      "qx.event.type.Touch": {},
      "qx.event.type.Data": {},
      "qx.event.GlobalError": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.client.Event": {
        "defer": "load",
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "event.touch": {
          "defer": true,
          "className": "qx.bom.client.Event"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
       * Tino Butz (tbtz)
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */

  /**
   * This class provides a unified touch event handler.
   *
   * @require(qx.event.handler.UserAction)
   * @require(qx.event.handler.Orientation)
   * @require(qx.event.type.Tap)
   * @require(qx.event.type.Swipe)
   * @require(qx.event.type.Track)
   * @require(qx.event.type.Rotate)
   * @require(qx.event.type.Pinch)
   */
  qx.Class.define("qx.event.handler.Touch", {
    extend: qx.event.handler.TouchCore,
    implement: [qx.event.IEventHandler, qx.core.IDisposable],
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      // Define shorthands
      this.__manager__P_117_0 = manager;
      this.__window__P_117_1 = manager.getWindow();
      this.__root__P_117_2 = this.__window__P_117_1.document;
      qx.event.handler.TouchCore.apply(this, [this.__root__P_117_2]);
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {Integer} Priority of this handler */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL,
      /** @type {Map} Supported event types */
      SUPPORTED_TYPES: {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,
        touchcancel: 1,
        // Appears when the touch is interrupted, e.g. by an alert box
        tap: 1,
        longtap: 1,
        swipe: 1
      },
      /** @type {Integer} Which target check to use */
      TARGET_CHECK: qx.event.IEventHandler.TARGET_DOMNODE + qx.event.IEventHandler.TARGET_DOCUMENT,
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true,
      /** @type {Map} Mapping of mouse events to touch events */
      MOUSE_TO_TOUCH_MAPPING: {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __manager__P_117_0: null,
      __window__P_117_1: null,
      __root__P_117_2: null,
      // Checks if the mouse movement is happening while simulating a touch event
      __isInTouch__P_117_3: false,
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER INTERFACE
      ---------------------------------------------------------------------------
      */
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {},
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      /*
      ---------------------------------------------------------------------------
        HELPER
      ---------------------------------------------------------------------------
      */
      /**
       * Fire a touch event with the given parameters
       *
       * @param domEvent {Event} DOM event
       * @param type {String ? null} type of the event
       * @param target {Element ? null} event target
       * @param eventTypeClass {Class ? qx.event.type.Touch} the event type class
       */
      _fireEvent: function _fireEvent(domEvent, type, target, eventTypeClass) {
        if (!target) {
          target = this._getTarget(domEvent);
        }
        var type = type || domEvent.type;
        if (target && target.nodeType) {
          qx.event.Registration.fireEvent(target, type, eventTypeClass || qx.event.type.Touch, [domEvent, target, null, true, true]);
        }

        // Fire user action event
        qx.event.Registration.fireEvent(this.__window__P_117_1, "useraction", qx.event.type.Data, [type]);
      },
      /*
      ---------------------------------------------------------------------------
        NATIVE EVENT OBSERVERS
      ---------------------------------------------------------------------------
      */

      /**
       * Handler for the native touch events.
       *
       * @signature function(domEvent)
       * @param domEvent {Event} The touch event from the browser.
       */
      _onTouchEvent: qx.event.GlobalError.observeMethod(function (domEvent) {
        this._commonTouchEventHandler(domEvent);
      }),
      /**
       * Dispose this object
       */
      dispose: function dispose() {
        this.__callBase__P_117_4("dispose");
        this.__manager__P_117_0 = this.__window__P_117_1 = this.__root__P_117_2 = null;
      },
      /**
       * Call overridden method.
       *
       * @param method {String} Name of the overridden method.
       * @param args {Array} Arguments.
       */
      __callBase__P_117_4: function __callBase__P_117_4(method, args) {
        qx.event.handler.TouchCore.prototype[method].apply(this, args || []);
      }
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.event.Registration.addHandler(statics);

      // Prevent scrolling on the document to avoid scrolling at all
      if (qx.core.Environment.get("event.touch")) {
        // get the handler to assure that the instance is created
        qx.event.Registration.getManager(document).getHandler(statics);
      }
    }
  });
  qx.event.handler.Touch.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      },
      "qx.event.IEventDispatcher": {
        "require": true
      },
      "qx.event.Utils": {},
      "qx.event.type.Event": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Fabian Jakobs (fjakobs)
       * Sebastian Werner (wpbasti)
  
  ************************************************************************ */

  /**
   * Event dispatcher for all bubbling events.
   */
  qx.Class.define("qx.event.dispatch.AbstractBubbling", {
    extend: qx.core.Object,
    implement: qx.event.IEventDispatcher,
    type: "abstract",
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      this._manager = manager;
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /*
      ---------------------------------------------------------------------------
        EVENT DISPATCHER HELPER
      ---------------------------------------------------------------------------
      */
      /**
       * Returns the parent of the given target
       *
       * @abstract
       * @param target {var} The target which parent should be found
       * @return {var} The parent of the given target
       */
      _getParent: function _getParent(target) {
        throw new Error("Missing implementation");
      },
      /*
      ---------------------------------------------------------------------------
        EVENT DISPATCHER INTERFACE
      ---------------------------------------------------------------------------
      */
      // interface implementation
      canDispatchEvent: function canDispatchEvent(target, event, type) {
        return event.getBubbles();
      },
      // interface implementation
      dispatchEvent: function dispatchEvent(target, event, type) {
        var parent = target;
        var manager = this._manager;
        var captureListeners, bubbleListeners;
        var context;

        // Cache list for AT_TARGET
        var targetList = [];
        captureListeners = manager.getListeners(target, type, true);
        bubbleListeners = manager.getListeners(target, type, false);
        if (captureListeners) {
          targetList.push(captureListeners);
        }
        if (bubbleListeners) {
          targetList.push(bubbleListeners);
        }

        // Cache list for CAPTURING_PHASE and BUBBLING_PHASE
        var parent = this._getParent(target);
        var bubbleList = [];
        var bubbleTargets = [];
        var captureList = [];
        var captureTargets = [];

        // Walk up the tree and look for event listeners
        while (parent != null) {
          // Attention:
          // We do not follow the DOM2 events specifications here
          // http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-flow-capture
          // Opera is the only browser which conforms to the spec.
          // Safari and Mozilla do it the same way like qooxdoo does
          // and add the capture events of the target to the execution list.
          captureListeners = manager.getListeners(parent, type, true);
          if (captureListeners) {
            captureList.push(captureListeners);
            captureTargets.push(parent);
          }
          bubbleListeners = manager.getListeners(parent, type, false);
          if (bubbleListeners) {
            bubbleList.push(bubbleListeners);
            bubbleTargets.push(parent);
          }
          parent = this._getParent(parent);
        }
        var self = this;
        var tracker = {};
        var __TRACE_LOGGING__P_129_0 = false; //(event._type == "pointerup" && event._target.className === "qx-toolbar-button-checked");
        var __TRACE__P_129_1 = function __TRACE__P_129_1() {};
        if (__TRACE_LOGGING__P_129_0) {
          var serial = (this.SERIAL || 0) + 1;
          this.SERIAL = serial + 1;
          __TRACE__P_129_1 = function __TRACE__P_129_1() {
            var args = [].slice.apply(arguments);
            args.unshift("serial #" + serial + ": ");
            console.log.apply(this, args);
          };
        }
        qx.event.Utils["catch"](tracker, function () {
          // This function must exist to suppress "unhandled rejection" messages from promises
          __TRACE__P_129_1("Aborted serial=" + serial + ", type=" + event.getType());
        });

        // capturing phase
        qx.event.Utils.then(tracker, function () {
          // loop through the hierarchy in reverted order (from root)
          event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);
          __TRACE__P_129_1("captureList=" + captureList.length);
          return qx.event.Utils.series(captureList, function (localList, i) {
            __TRACE__P_129_1("captureList[" + i + "]: localList.length=" + localList.length);
            var currentTarget = captureTargets[i];
            event.setCurrentTarget(currentTarget);
            var result = qx.event.Utils.series(localList, function (listener, listenerIndex) {
              context = listener.context || currentTarget;
              {
                // warn if the context is disposed
                if (context && context.isDisposed && context.isDisposed()) {
                  self.warn("The context object '" + context + "' for the event '" + type + "' of '" + currentTarget + "'is already disposed.");
                }
              }
              if (!self._manager.isBlacklisted(listener.unique)) {
                __TRACE__P_129_1("captureList[" + i + "] => localList[" + listenerIndex + "] callListener");
                return listener.handler.call(context, event);
              } else {
                __TRACE__P_129_1("captureList[" + i + "] => localList[" + listenerIndex + "] is blacklisted");
              }
            }, true);
            if (result === qx.event.Utils.ABORT) {
              return qx.event.Utils.reject(tracker);
            }
            if (event.getPropagationStopped()) {
              return qx.event.Utils.reject(tracker);
            }
            return result;
          });
        });

        // at target
        qx.event.Utils.then(tracker, function () {
          event.setEventPhase(qx.event.type.Event.AT_TARGET);
          event.setCurrentTarget(target);
          __TRACE__P_129_1("targetList=" + targetList.length);
          return qx.event.Utils.series(targetList, function (localList, i) {
            __TRACE__P_129_1("targetList[" + i + "] localList.length=" + localList.length);
            var result = qx.event.Utils.series(localList, function (listener, listenerIndex) {
              __TRACE__P_129_1("targetList[" + i + "] -> localList[" + listenerIndex + "] callListener");
              context = listener.context || target;
              {
                // warn if the context is disposed
                if (context && context.isDisposed && context.isDisposed()) {
                  self.warn("The context object '" + context + "' for the event '" + type + "' of '" + target + "'is already disposed.");
                }
              }
              __TRACE__P_129_1("Calling target serial=" + serial + ", type=" + event.getType());
              return listener.handler.call(context, event);
            }, true);
            if (result === qx.event.Utils.ABORT) {
              return qx.event.Utils.reject(tracker);
            }
            if (event.getPropagationStopped()) {
              return qx.event.Utils.reject(tracker);
            }
            return result;
          });
        });

        // bubbling phase
        // loop through the hierarchy in normal order (to root)
        qx.event.Utils.then(tracker, function () {
          event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);
          __TRACE__P_129_1("bubbleList=" + bubbleList.length);
          return qx.event.Utils.series(bubbleList, function (localList, i) {
            __TRACE__P_129_1("bubbleList[" + i + "] localList.length=" + localList.length);
            var currentTarget = bubbleTargets[i];
            event.setCurrentTarget(currentTarget);
            var result = qx.event.Utils.series(localList, function (listener, listenerIndex) {
              __TRACE__P_129_1("bubbleList[" + i + "] -> localList[" + listenerIndex + "] callListener");
              context = listener.context || currentTarget;
              {
                // warn if the context is disposed
                if (context && context.isDisposed && context.isDisposed()) {
                  self.warn("The context object '" + context + "' for the event '" + type + "' of '" + currentTarget + "'is already disposed.");
                }
              }
              return listener.handler.call(context, event);
            }, true);
            if (result === qx.event.Utils.ABORT) {
              return qx.event.Utils.reject(tracker);
            }
            if (event.getPropagationStopped()) {
              return qx.event.Utils.reject(tracker);
            }
            return result;
          });
        });
        if (__TRACE_LOGGING__P_129_0) {
          if (tracker.promise) {
            __TRACE__P_129_1("events promised");
            qx.event.Utils.then(tracker, function () {
              __TRACE__P_129_1("events promised done");
            });
          } else {
            __TRACE__P_129_1("events done");
          }
        }
        return tracker.promise;
      }
    }
  });
  qx.event.dispatch.AbstractBubbling.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.dispatch.AbstractBubbling": {
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Fabian Jakobs (fjakobs)
       * Sebastian Werner (wpbasti)
  
  ************************************************************************ */

  /**
   * Event dispatcher for all bubbling events on DOM elements.
   */
  qx.Class.define("qx.event.dispatch.DomBubbling", {
    extend: qx.event.dispatch.AbstractBubbling,
    statics: {
      /** @type {Integer} Priority of this dispatcher */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL
    },
    members: {
      // overridden
      _getParent: function _getParent(target) {
        return target.parentNode;
      },
      // interface implementation
      canDispatchEvent: function canDispatchEvent(target, event, type) {
        return target.nodeType !== undefined && event.getBubbles();
      }
    },
    defer: function defer(statics) {
      qx.event.Registration.addDispatcher(statics);
    }
  });
  qx.event.dispatch.DomBubbling.$$dbClassInfo = $$dbClassInfo;
})();

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.client.Event": {
        "require": true
      },
      "qx.lang.Object": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "event.customevent": {
          "className": "qx.bom.client.Event"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christopher Zuendorf (czuendorf)
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /**
   * Cross-browser custom UI event
   */
  qx.Bootstrap.define("qx.event.type.dom.Custom", {
    extend: Object,
    statics: {
      PROPERTIES: {
        bubbles: false,
        cancelable: true
      }
    },
    /**
     * @param type {String} event type
     * @param domEvent {Event} Native event that will be used as a template for the new event
     * @param customProps {Map} Map of event properties (will override the domEvent's values)
     * @return {Event} event object
     */
    construct: function construct(type, domEvent, customProps) {
      this._type = type;
      this._event = this._createEvent();
      this._initEvent(domEvent, customProps);
      this._event._original = domEvent;
      this._event.preventDefault = function () {
        if (this._original.preventDefault) {
          this._original.preventDefault();
        } else {
          // In IE8, the original event can be a DispCEventObj which throws an
          // exception when trying to access its properties.
          try {
            this._original.returnValue = false;
          } catch (ex) {}
        }
      };
      if (this._event.stopPropagation) {
        this._event._nativeStopPropagation = this._event.stopPropagation;
      }
      this._event.stopPropagation = function () {
        this._stopped = true;
        if (this._nativeStopPropagation) {
          this._original.stopPropagation();
          this._nativeStopPropagation();
        } else {
          this._original.cancelBubble = true;
        }
      };
      return this._event;
    },
    members: {
      _type: null,
      _event: null,
      /**
       * Creates a custom event object
       * @return {Event} event object
       */
      _createEvent: function _createEvent() {
        var evt;
        if (qx.core.Environment.get("event.customevent")) {
          evt = new window.CustomEvent(this._type);
        } else if (typeof document.createEvent == "function") {
          evt = document.createEvent("UIEvents");
        } else if (_typeof(document.createEventObject) == "object") {
          // IE8 doesn't support custom event types
          evt = {};
          evt.type = this._type;
        }
        return evt;
      },
      /**
       * Initializes a custom event
       *
       * @param domEvent {Event} Native event that will be used as a template for the new event
       * @param customProps {Map?} Map of event properties (will override the domEvent's values)
       */
      _initEvent: function _initEvent(domEvent, customProps) {
        customProps = customProps || {};
        var properties = qx.lang.Object.clone(qx.event.type.dom.Custom.PROPERTIES);
        for (var prop in customProps) {
          properties[prop] = customProps[prop];
        }
        if (this._event.initEvent) {
          this._event.initEvent(this._type, properties.bubbles, properties.cancelable);
        }
        for (var prop in properties) {
          try {
            this._event[prop] = properties[prop];
          } catch (ex) {
            //Nothing - strict mode prevents writing to read only properties
          }
        }
      }
    }
  });
  qx.event.type.dom.Custom.$$dbClassInfo = $$dbClassInfo;
})();

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.dom.Custom": {
        "construct": true,
        "require": true
      },
      "qx.dom.Node": {},
      "qx.bom.Viewport": {},
      "qx.bom.client.Event": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "defer": "load",
        "require": true
      },
      "qx.bom.client.OperatingSystem": {
        "defer": "load",
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "event.mouseevent": {
          "className": "qx.bom.client.Event"
        },
        "event.mousecreateevent": {
          "className": "qx.bom.client.Event"
        },
        "engine.name": {
          "defer": true,
          "className": "qx.bom.client.Engine"
        },
        "os.name": {
          "defer": true,
          "className": "qx.bom.client.OperatingSystem"
        },
        "os.version": {
          "defer": true,
          "className": "qx.bom.client.OperatingSystem"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christopher Zuendorf (czuendorf)
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /**
   * Synthetic pointer event
   */
  qx.Bootstrap.define("qx.event.type.dom.Pointer", {
    extend: qx.event.type.dom.Custom,
    statics: {
      MOUSE_PROPERTIES: ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "pageX", "pageY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "which", "relatedTarget",
      // IE8 properties:
      "fromElement", "toElement"],
      POINTER_PROPERTIES: {
        pointerId: 1,
        width: 0,
        height: 0,
        pressure: 0.5,
        tiltX: 0,
        tiltY: 0,
        pointerType: "",
        isPrimary: false
      },
      READONLY_PROPERTIES: [],
      BIND_METHODS: ["getPointerType", "getViewportLeft", "getViewportTop", "getDocumentLeft", "getDocumentTop", "getScreenLeft", "getScreenTop"],
      /**
       * Returns the device type which the event triggered. This can be one
       * of the following strings: <code>mouse</code>, <code>pen</code>
       * or <code>touch</code>.
       *
       * @return {String} The type of the pointer.
       */
      getPointerType: function getPointerType() {
        if (typeof this.pointerType == "string") {
          return this.pointerType;
        }
        if (typeof this.pointerType == "number") {
          if (this.pointerType == this.MSPOINTER_TYPE_MOUSE) {
            return "mouse";
          }
          if (this.pointerType == this.MSPOINTER_TYPE_PEN) {
            return "pen";
          }
          if (this.pointerType == this.MSPOINTER_TYPE_TOUCH) {
            return "touch";
          }
        }
        return "";
      },
      /**
       * Get the horizontal coordinate at which the event occurred relative
       * to the viewport.
       *
       * @return {Number} The horizontal mouse position
       */
      getViewportLeft: function getViewportLeft() {
        return this.clientX;
      },
      /**
       * Get the vertical coordinate at which the event occurred relative
       * to the viewport.
       *
       * @return {Number} The vertical mouse position
       * @signature function()
       */
      getViewportTop: function getViewportTop() {
        return this.clientY;
      },
      /**
       * Get the horizontal position at which the event occurred relative to the
       * left of the document. This property takes into account any scrolling of
       * the page.
       *
       * @return {Number} The horizontal mouse position in the document.
       */
      getDocumentLeft: function getDocumentLeft() {
        if (this.pageX !== undefined) {
          return this.pageX;
        } else {
          var win = qx.dom.Node.getWindow(this.srcElement);
          return this.clientX + qx.bom.Viewport.getScrollLeft(win);
        }
      },
      /**
       * Get the vertical position at which the event occurred relative to the
       * top of the document. This property takes into account any scrolling of
       * the page.
       *
       * @return {Number} The vertical mouse position in the document.
       */
      getDocumentTop: function getDocumentTop() {
        if (this.pageY !== undefined) {
          return this.pageY;
        } else {
          var win = qx.dom.Node.getWindow(this.srcElement);
          return this.clientY + qx.bom.Viewport.getScrollTop(win);
        }
      },
      /**
       * Get the horizontal coordinate at which the event occurred relative to
       * the origin of the screen coordinate system.
       *
       * Note: This value is usually not very useful unless you want to
       * position a native popup window at this coordinate.
       *
       * @return {Number} The horizontal mouse position on the screen.
       */
      getScreenLeft: function getScreenLeft() {
        return this.screenX;
      },
      /**
       * Get the vertical coordinate at which the event occurred relative to
       * the origin of the screen coordinate system.
       *
       * Note: This value is usually not very useful unless you want to
       * position a native popup window at this coordinate.
       *
       * @return {Number} The vertical mouse position on the screen.
       */
      getScreenTop: function getScreenTop() {
        return this.screenY;
      },
      /**
       * Manipulates the event object, adding methods if they're not
       * already present
       *
       * @param event {Event} Native event object
       */
      normalize: function normalize(event) {
        var bindMethods = qx.event.type.dom.Pointer.BIND_METHODS;
        for (var i = 0, l = bindMethods.length; i < l; i++) {
          if (typeof event[bindMethods[i]] != "function") {
            event[bindMethods[i]] = qx.event.type.dom.Pointer[bindMethods[i]].bind(event);
          }
        }
      }
    },
    construct: function construct(type, domEvent, customProps) {
      return qx.event.type.dom.Custom.constructor.call(this, type, domEvent, customProps);
    },
    members: {
      _createEvent: function _createEvent() {
        var evt;
        if (qx.core.Environment.get("event.mouseevent")) {
          evt = new window.MouseEvent(this._type);
        } else if (typeof document.createEvent == "function") {
          /* In IE9, the pageX property of synthetic MouseEvents is always 0
          and cannot be overridden, so we create a plain UIEvent and add
          the mouse event properties ourselves. */
          evt = document.createEvent(qx.core.Environment.get("event.mousecreateevent"));
        } else if (_typeof(document.createEventObject) == "object") {
          // IE8 doesn't support custom event types
          evt = {};
          evt.type = this._type;
        }
        return evt;
      },
      _initEvent: function _initEvent(domEvent, customProps) {
        customProps = customProps || {};
        var evt = this._event;
        var properties = {};
        qx.event.type.dom.Pointer.normalize(domEvent);
        Object.keys(qx.event.type.dom.Pointer.POINTER_PROPERTIES).concat(qx.event.type.dom.Pointer.MOUSE_PROPERTIES).forEach(function (propName) {
          if (typeof customProps[propName] !== "undefined") {
            properties[propName] = customProps[propName];
          } else if (typeof domEvent[propName] !== "undefined") {
            properties[propName] = domEvent[propName];
          } else if (typeof qx.event.type.dom.Pointer.POINTER_PROPERTIES[propName] !== "undefined") {
            properties[propName] = qx.event.type.dom.Pointer.POINTER_PROPERTIES[propName];
          }
        });
        var buttons;
        switch (domEvent.which) {
          case 1:
            buttons = 1;
            break;
          case 2:
            buttons = 4;
            break;
          case 3:
            buttons = 2;
            break;
          default:
            buttons = 0;
        }
        if (buttons !== undefined) {
          properties.buttons = buttons;
          properties.pressure = buttons ? 0.5 : 0;
        }
        if (evt.initMouseEvent) {
          evt.initMouseEvent(this._type, properties.bubbles, properties.cancelable, properties.view, properties.detail, properties.screenX, properties.screenY, properties.clientX, properties.clientY, properties.ctrlKey, properties.altKey, properties.shiftKey, properties.metaKey, properties.button, properties.relatedTarget);
        } else if (evt.initUIEvent) {
          evt.initUIEvent(this._type, properties.bubbles, properties.cancelable, properties.view, properties.detail);
        }
        for (var prop in properties) {
          if (evt[prop] !== properties[prop] && qx.event.type.dom.Pointer.READONLY_PROPERTIES.indexOf(prop) === -1) {
            try {
              evt[prop] = properties[prop];
            } catch (ex) {
              // Nothing - cannot override properties in strict mode
            }
          }
        }

        // normalize Windows 8 pointer types
        switch (evt.pointerType) {
          case domEvent.MSPOINTER_TYPE_MOUSE:
            evt.pointerType = "mouse";
            break;
          case domEvent.MSPOINTER_TYPE_PEN:
            evt.pointerType = "pen";
            break;
          case domEvent.MSPOINTER_TYPE_TOUCH:
            evt.pointerType = "touch";
            break;
        }
        if (evt.pointerType == "mouse") {
          evt.isPrimary = true;
        }
      }
    },
    defer: function defer(statics) {
      if (qx.core.Environment.get("engine.name") == "gecko") {
        statics.READONLY_PROPERTIES.push("buttons");
      } else if (qx.core.Environment.get("os.name") == "ios" && parseFloat(qx.core.Environment.get("os.version")) >= 8) {
        statics.READONLY_PROPERTIES = statics.READONLY_PROPERTIES.concat(statics.MOUSE_PROPERTIES);
      }
    }
  });
  qx.event.type.dom.Pointer.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.client.Event": {
        "require": true,
        "construct": true
      },
      "qx.bom.client.Device": {
        "require": true,
        "construct": true
      },
      "qx.core.Environment": {
        "defer": "load",
        "usage": "dynamic",
        "construct": true,
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "construct": true,
        "require": true
      },
      "qx.bom.client.Browser": {
        "construct": true,
        "require": true
      },
      "qx.lang.Function": {},
      "qx.dom.Node": {},
      "qx.event.Emitter": {},
      "qx.bom.Event": {},
      "qx.event.type.dom.Pointer": {},
      "qx.bom.client.OperatingSystem": {
        "require": true
      },
      "qx.lang.Array": {},
      "qx.event.Utils": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "load": true,
          "className": "qx.bom.client.Engine",
          "construct": true
        },
        "browser.documentmode": {
          "load": true,
          "className": "qx.bom.client.Browser",
          "construct": true
        },
        "event.mspointer": {
          "construct": true,
          "className": "qx.bom.client.Event"
        },
        "device.touch": {
          "construct": true,
          "className": "qx.bom.client.Device"
        },
        "os.name": {
          "className": "qx.bom.client.OperatingSystem"
        },
        "event.dispatchevent": {
          "className": "qx.bom.client.Event"
        },
        "browser.name": {
          "className": "qx.bom.client.Browser"
        },
        "browser.version": {
          "className": "qx.bom.client.Browser"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christopher Zuendorf (czuendorf)
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /**
   * Low-level pointer event handler.
   *
   * @require(qx.bom.client.Event)
   * @require(qx.bom.client.Device)
   */
  qx.Bootstrap.define("qx.event.handler.PointerCore", {
    extend: Object,
    implement: [qx.core.IDisposable],
    statics: {
      MOUSE_TO_POINTER_MAPPING: {
        mousedown: "pointerdown",
        mouseup: "pointerup",
        mousemove: "pointermove",
        mouseout: "pointerout",
        mouseover: "pointerover"
      },
      TOUCH_TO_POINTER_MAPPING: {
        touchstart: "pointerdown",
        touchend: "pointerup",
        touchmove: "pointermove",
        touchcancel: "pointercancel"
      },
      MSPOINTER_TO_POINTER_MAPPING: {
        MSPointerDown: "pointerdown",
        MSPointerMove: "pointermove",
        MSPointerUp: "pointerup",
        MSPointerCancel: "pointercancel",
        MSPointerLeave: "pointerleave",
        MSPointerEnter: "pointerenter",
        MSPointerOver: "pointerover",
        MSPointerOut: "pointerout"
      },
      POINTER_TO_GESTURE_MAPPING: {
        pointerdown: "gesturebegin",
        pointerup: "gesturefinish",
        pointercancel: "gesturecancel",
        pointermove: "gesturemove"
      },
      LEFT_BUTTON: qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") <= 8 ? 1 : 0,
      SIM_MOUSE_DISTANCE: 25,
      SIM_MOUSE_DELAY: 2500,
      /**
       * Coordinates of the last touch. This needs to be static because the target could
       * change between touch and simulated mouse events. Touch events will be detected
       * by one instance which moves the target. The simulated mouse events will be fired with
       * a delay which causes another target and with that, another instance of this handler.
       * last touch was.
       */
      __lastTouch__P_97_0: null
    },
    /**
     * Create a new instance
     *
     * @param target {Element} element on which to listen for native touch events
     * @param emitter {qx.event.Emitter?} Event emitter (used if dispatchEvent
     * is not supported, e.g. in IE8)
     */
    construct: function construct(target, emitter) {
      this.__defaultTarget__P_97_1 = target;
      this.__emitter__P_97_2 = emitter;
      this.__eventNames__P_97_3 = [];
      this.__buttonStates__P_97_4 = [];
      this.__activeTouches__P_97_5 = [];
      this._processedFlag = "$$qx" + this.classname.substr(this.classname.lastIndexOf(".") + 1) + "Processed";
      var engineName = qx.core.Environment.get("engine.name");
      var docMode = parseInt(qx.core.Environment.get("browser.documentmode"), 10);
      if (engineName == "mshtml" && docMode == 10) {
        // listen to native prefixed events and custom unprefixed (see bug #8921)
        this.__eventNames__P_97_3 = ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel", "MSPointerOver", "MSPointerOut", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout"];
        this._initPointerObserver();
      } else {
        if (qx.core.Environment.get("event.mspointer")) {
          this.__nativePointerEvents__P_97_6 = true;
        }
        this.__eventNames__P_97_3 = ["pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout"];
        this._initPointerObserver();
      }
      if (!qx.core.Environment.get("event.mspointer")) {
        if (qx.core.Environment.get("device.touch")) {
          this.__eventNames__P_97_3 = ["touchstart", "touchend", "touchmove", "touchcancel"];
          this._initObserver(this._onTouchEvent);
        }
        this.__eventNames__P_97_3 = ["mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "contextmenu"];
        this._initObserver(this._onMouseEvent);
      }
    },
    members: {
      __defaultTarget__P_97_1: null,
      __emitter__P_97_2: null,
      __eventNames__P_97_3: null,
      __nativePointerEvents__P_97_6: false,
      __wrappedListener__P_97_7: null,
      __lastButtonState__P_97_8: 0,
      __buttonStates__P_97_4: null,
      __primaryIdentifier__P_97_9: null,
      __activeTouches__P_97_5: null,
      _processedFlag: null,
      /**
       * Adds listeners to native pointer events if supported
       */
      _initPointerObserver: function _initPointerObserver() {
        this._initObserver(this._onPointerEvent);
      },
      /**
       * Register native event listeners
       * @param callback {Function} listener callback
       * @param useEmitter {Boolean} attach listener to Emitter instead of
       * native event
       */
      _initObserver: function _initObserver(callback, useEmitter) {
        this.__wrappedListener__P_97_7 = qx.lang.Function.listener(callback, this);
        this.__eventNames__P_97_3.forEach(function (type) {
          if (useEmitter && qx.dom.Node.isDocument(this.__defaultTarget__P_97_1)) {
            if (!this.__defaultTarget__P_97_1.$$emitter) {
              this.__defaultTarget__P_97_1.$$emitter = new qx.event.Emitter();
            }
            this.__defaultTarget__P_97_1.$$emitter.on(type, this.__wrappedListener__P_97_7);
          } else {
            qx.bom.Event.addNativeListener(this.__defaultTarget__P_97_1, type, this.__wrappedListener__P_97_7);
          }
        }.bind(this));
      },
      /**
       * Handler for native pointer events
       * @param domEvent {Event}  Native DOM event
       */
      _onPointerEvent: function _onPointerEvent(domEvent) {
        if (!qx.core.Environment.get("event.mspointer") ||
        // workaround for bug #8533
        qx.core.Environment.get("browser.documentmode") === 10 && domEvent.type.toLowerCase().indexOf("ms") == -1) {
          return;
        }
        if (!this.__nativePointerEvents__P_97_6) {
          domEvent.stopPropagation();
        }
        var type = qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[domEvent.type] || domEvent.type;
        var target = qx.bom.Event.getTarget(domEvent);
        var evt = new qx.event.type.dom.Pointer(type, domEvent);
        this._fireEvent(evt, type, target);
      },
      /**
       * Handler for touch events
       * @param domEvent {Event} Native DOM event
       */
      _onTouchEvent: function _onTouchEvent(domEvent) {
        if (domEvent[this._processedFlag]) {
          return;
        }
        domEvent[this._processedFlag] = true;
        var type = qx.event.handler.PointerCore.TOUCH_TO_POINTER_MAPPING[domEvent.type];
        var changedTouches = domEvent.changedTouches;
        this._determineActiveTouches(domEvent.type, changedTouches);

        // Detecting vacuum touches. (Touches which are not active anymore, but did not fire a touchcancel event)
        if (domEvent.touches.length < this.__activeTouches__P_97_5.length) {
          // Firing pointer cancel for previously active touches.
          for (var i = this.__activeTouches__P_97_5.length - 1; i >= 0; i--) {
            var cancelEvent = new qx.event.type.dom.Pointer("pointercancel", domEvent, {
              identifier: this.__activeTouches__P_97_5[i].identifier,
              target: domEvent.target,
              pointerType: "touch",
              pointerId: this.__activeTouches__P_97_5[i].identifier + 2
            });
            this._fireEvent(cancelEvent, "pointercancel", domEvent.target);
          }

          // Reset primary identifier
          this.__primaryIdentifier__P_97_9 = null;

          // cleanup of active touches array.
          this.__activeTouches__P_97_5 = [];

          // Do nothing after pointer cancel.
          return;
        }
        if (domEvent.type == "touchstart" && this.__primaryIdentifier__P_97_9 === null) {
          this.__primaryIdentifier__P_97_9 = changedTouches[0].identifier;
        }
        for (var i = 0, l = changedTouches.length; i < l; i++) {
          var touch = changedTouches[i];
          var touchTarget = domEvent.view.document.elementFromPoint(touch.clientX, touch.clientY) || domEvent.target;
          var touchProps = {
            clientX: touch.clientX,
            clientY: touch.clientY,
            pageX: touch.pageX,
            pageY: touch.pageY,
            identifier: touch.identifier,
            screenX: touch.screenX,
            screenY: touch.screenY,
            target: touchTarget,
            pointerType: "touch",
            pointerId: touch.identifier + 2
          };
          if (domEvent.type == "touchstart") {
            // Fire pointerenter before pointerdown
            var overEvt = new qx.event.type.dom.Pointer("pointerover", domEvent, touchProps);
            this._fireEvent(overEvt, "pointerover", touchProps.target);
          }
          if (touch.identifier == this.__primaryIdentifier__P_97_9) {
            touchProps.isPrimary = true;
            // always simulate left click on touch interactions for primary pointer
            touchProps.button = 0;
            touchProps.buttons = 1;
            qx.event.handler.PointerCore.__lastTouch__P_97_0 = {
              x: touch.clientX,
              y: touch.clientY,
              time: new Date().getTime()
            };
          }
          var evt = new qx.event.type.dom.Pointer(type, domEvent, touchProps);
          this._fireEvent(evt, type, touchProps.target);
          if (domEvent.type == "touchend" || domEvent.type == "touchcancel") {
            // Fire pointerout after pointerup
            var outEvt = new qx.event.type.dom.Pointer("pointerout", domEvent, touchProps);

            // fire on the original target to make sure over / out event are on the same target
            this._fireEvent(outEvt, "pointerout", domEvent.target);
            if (this.__primaryIdentifier__P_97_9 == touch.identifier) {
              this.__primaryIdentifier__P_97_9 = null;
            }
          }
        }
      },
      /**
       * Handler for touch events
       * @param domEvent {Event} Native DOM event
       */
      _onMouseEvent: function _onMouseEvent(domEvent) {
        if (domEvent[this._processedFlag]) {
          return;
        }
        domEvent[this._processedFlag] = true;
        if (this._isSimulatedMouseEvent(domEvent.clientX, domEvent.clientY)) {
          /*
            Simulated MouseEvents are fired by browsers directly after TouchEvents
            for improving compatibility. They should not trigger PointerEvents.
          */
          return;
        }
        if (domEvent.type == "mousedown") {
          this.__buttonStates__P_97_4[domEvent.which] = 1;
        } else if (domEvent.type == "mouseup") {
          if (qx.core.Environment.get("os.name") == "osx" && qx.core.Environment.get("engine.name") == "gecko") {
            if (this.__buttonStates__P_97_4[domEvent.which] != 1 && domEvent.ctrlKey) {
              this.__buttonStates__P_97_4[1] = 0;
            }
          }
          this.__buttonStates__P_97_4[domEvent.which] = 0;
        }
        var type = qx.event.handler.PointerCore.MOUSE_TO_POINTER_MAPPING[domEvent.type];
        var target = qx.bom.Event.getTarget(domEvent);
        var buttonsPressed = qx.lang.Array.sum(this.__buttonStates__P_97_4);
        var mouseProps = {
          pointerType: "mouse",
          pointerId: 1
        };

        // if the button state changes but not from or to zero
        if (this.__lastButtonState__P_97_8 != buttonsPressed && buttonsPressed !== 0 && this.__lastButtonState__P_97_8 !== 0) {
          var moveEvt = new qx.event.type.dom.Pointer("pointermove", domEvent, mouseProps);
          this._fireEvent(moveEvt, "pointermove", target);
        }
        this.__lastButtonState__P_97_8 = buttonsPressed;

        // pointerdown should only trigger form the first pressed button.
        if (domEvent.type == "mousedown" && buttonsPressed > 1) {
          return;
        }

        // pointerup should only trigger if user releases all buttons.
        if (domEvent.type == "mouseup" && buttonsPressed > 0) {
          return;
        }
        if (domEvent.type == "contextmenu") {
          this.__buttonStates__P_97_4[domEvent.which] = 0;
          return;
        }
        var evt = new qx.event.type.dom.Pointer(type, domEvent, mouseProps);
        this._fireEvent(evt, type, target);
      },
      /**
       * Determines the current active touches.
       * @param type {String} the DOM event type.
       * @param changedTouches {Array} the current changed touches.
       */
      _determineActiveTouches: function _determineActiveTouches(type, changedTouches) {
        if (type == "touchstart") {
          for (var i = 0; i < changedTouches.length; i++) {
            this.__activeTouches__P_97_5.push(changedTouches[i]);
          }
        } else if (type == "touchend" || type == "touchcancel") {
          var updatedActiveTouches = [];
          for (var i = 0; i < this.__activeTouches__P_97_5.length; i++) {
            var add = true;
            for (var j = 0; j < changedTouches.length; j++) {
              if (this.__activeTouches__P_97_5[i].identifier == changedTouches[j].identifier) {
                add = false;
                break;
              }
            }
            if (add) {
              updatedActiveTouches.push(this.__activeTouches__P_97_5[i]);
            }
          }
          this.__activeTouches__P_97_5 = updatedActiveTouches;
        }
      },
      /**
       * Detects whether the given MouseEvent position is identical to the previously fired TouchEvent position.
       * If <code>true</code> the corresponding event can be identified as simulated.
       * @param x {Integer} current mouse x
       * @param y {Integer} current mouse y
       * @return {Boolean} <code>true</code> if passed mouse position is a synthetic MouseEvent.
       */
      _isSimulatedMouseEvent: function _isSimulatedMouseEvent(x, y) {
        var touch = qx.event.handler.PointerCore.__lastTouch__P_97_0;
        if (touch) {
          var timeSinceTouch = new Date().getTime() - touch.time;
          var dist = qx.event.handler.PointerCore.SIM_MOUSE_DISTANCE;
          var distX = Math.abs(x - qx.event.handler.PointerCore.__lastTouch__P_97_0.x);
          var distY = Math.abs(y - qx.event.handler.PointerCore.__lastTouch__P_97_0.y);
          if (timeSinceTouch < qx.event.handler.PointerCore.SIM_MOUSE_DELAY) {
            if (distX < dist || distY < dist) {
              return true;
            }
          }
        }
        return false;
      },
      /**
       * Removes native pointer event listeners.
       */
      _stopObserver: function _stopObserver() {
        for (var i = 0; i < this.__eventNames__P_97_3.length; i++) {
          qx.bom.Event.removeNativeListener(this.__defaultTarget__P_97_1, this.__eventNames__P_97_3[i], this.__wrappedListener__P_97_7);
        }
      },
      /**
       * Fire a touch event with the given parameters
       *
       * @param domEvent {Event} DOM event
       * @param type {String ? null} type of the event
       * @param target {Element ? null} event target
       * @return {qx.Promise?} a promise, if one was returned by event handlers
       */
      _fireEvent: function _fireEvent(domEvent, type, target) {
        target = target || domEvent.target;
        type = type || domEvent.type;
        var gestureEvent;
        if ((domEvent.pointerType !== "mouse" || domEvent.button <= qx.event.handler.PointerCore.LEFT_BUTTON) && (type == "pointerdown" || type == "pointerup" || type == "pointermove")) {
          gestureEvent = new qx.event.type.dom.Pointer(qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[type], domEvent);
          qx.event.type.dom.Pointer.normalize(gestureEvent);
          try {
            gestureEvent.srcElement = target;
          } catch (ex) {
            // Nothing - strict mode prevents writing to read only properties
          }
        }
        if (qx.core.Environment.get("event.dispatchevent")) {
          var tracker = {};
          if (!this.__nativePointerEvents__P_97_6) {
            qx.event.Utils.then(tracker, function () {
              return target.dispatchEvent(domEvent);
            });
          }
          if (gestureEvent) {
            qx.event.Utils.then(tracker, function () {
              return target.dispatchEvent(gestureEvent);
            });
          }
          return tracker.promise;
        } else {
          if (qx.core.Environment.get("browser.name") === "msie" && qx.core.Environment.get("browser.version") < 9) {
            // ensure compatibility with native events for IE8
            try {
              domEvent.srcElement = target;
            } catch (ex) {
              // Nothing - strict mode prevents writing to read only properties
            }
          }
          while (target) {
            if (target.$$emitter) {
              domEvent.currentTarget = target;
              if (!domEvent._stopped) {
                target.$$emitter.emit(type, domEvent);
              }
              if (gestureEvent && !gestureEvent._stopped) {
                gestureEvent.currentTarget = target;
                target.$$emitter.emit(gestureEvent.type, gestureEvent);
              }
            }
            target = target.parentNode;
          }
        }
      },
      /**
       * Dispose this object
       */
      dispose: function dispose() {
        this._stopObserver();
        this.__defaultTarget__P_97_1 = this.__emitter__P_97_2 = null;
      }
    }
  });
  qx.event.handler.PointerCore.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.dispatch.DomBubbling": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.type.Pointer": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.type.dom.Pointer": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.handler.PointerCore": {
        "construct": true,
        "require": true
      },
      "qx.event.IEventHandler": {
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.Event": {},
      "qx.event.Utils": {},
      "qx.event.type.Data": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "className": "qx.bom.client.Browser"
        },
        "browser.name": {
          "className": "qx.bom.client.Browser"
        },
        "browser.version": {
          "className": "qx.bom.client.Browser"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christopher Zuendorf (czuendorf)
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /**
   * Unified pointer event handler.
   * @require(qx.event.dispatch.DomBubbling)
   * @require(qx.event.type.Pointer) // load-time dependency for early native events
   * @require(qx.event.type.dom.Pointer)
   */
  qx.Class.define("qx.event.handler.Pointer", {
    extend: qx.event.handler.PointerCore,
    implement: [qx.event.IEventHandler, qx.core.IDisposable],
    statics: {
      /** @type {Integer} Priority of this handler */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL,
      /** @type {Map} Supported event types */
      SUPPORTED_TYPES: {
        pointermove: 1,
        pointerover: 1,
        pointerout: 1,
        pointerdown: 1,
        pointerup: 1,
        pointercancel: 1,
        gesturebegin: 1,
        gesturemove: 1,
        gesturefinish: 1,
        gesturecancel: 1
      },
      /** @type {Integer} Which target check to use */
      TARGET_CHECK: qx.event.IEventHandler.TARGET_DOMNODE + qx.event.IEventHandler.TARGET_DOCUMENT,
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true
    },
    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      // Define shorthands
      this.__manager__P_56_0 = manager;
      this.__window__P_56_1 = manager.getWindow();
      this.__root__P_56_2 = this.__window__P_56_1.document;
      qx.event.handler.PointerCore.apply(this, [this.__root__P_56_2]);
    },
    members: {
      __manager__P_56_0: null,
      __window__P_56_1: null,
      __root__P_56_2: null,
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {},
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      // overridden
      _initPointerObserver: function _initPointerObserver() {
        var useEmitter = false;
        if (qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9) {
          // Workaround for bug #8293: Use an emitter to listen to the
          // pointer events fired by a pointer handler attached by qxWeb.
          useEmitter = true;
        }
        this._initObserver(this._onPointerEvent, useEmitter);
      },
      /**
       * Fire a pointer event with the given parameters
       *
       * @param domEvent {Event} DOM event
       * @param type {String ? null} type of the event
       * @param target {Element ? null} event target
       */
      _fireEvent: function _fireEvent(domEvent, type, target) {
        if (!target) {
          target = qx.bom.Event.getTarget(domEvent);
        }

        // respect anonymous elements
        while (target && target.getAttribute && target.getAttribute("qxanonymous")) {
          target = target.parentNode;
        }
        if (!type) {
          type = domEvent.type;
        }
        type = qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[type] || type;
        if (target && target.nodeType) {
          qx.event.type.dom.Pointer.normalize(domEvent);
          if (qx.core.Environment.get("browser.name") === "msie" && qx.core.Environment.get("browser.version") < 9) {
            // ensure compatibility with native events for IE8
            try {
              domEvent.srcElement = target;
            } catch (ex) {
              // Nothing - cannot change properties in strict mode
            }
          }
          var tracker = {};
          var self = this;
          qx.event.Utils.track(tracker, function () {
            return qx.event.Registration.fireEvent(target, type, qx.event.type.Pointer, [domEvent, target, null, true, true]);
          });
          qx.event.Utils.then(tracker, function () {
            if ((domEvent.getPointerType() !== "mouse" || domEvent.button <= qx.event.handler.PointerCore.LEFT_BUTTON) && (type == "pointerdown" || type == "pointerup" || type == "pointermove" || type == "pointercancel")) {
              return qx.event.Registration.fireEvent(self.__root__P_56_2, qx.event.handler.PointerCore.POINTER_TO_GESTURE_MAPPING[type], qx.event.type.Pointer, [domEvent, target, null, false, false]);
            }
          });
          qx.event.Utils.then(tracker, function () {
            // Fire user action event
            return qx.event.Registration.fireEvent(self.__window__P_56_1, "useraction", qx.event.type.Data, [type]);
          });
          return tracker.promise;
        }
      },
      // overridden
      _onPointerEvent: function _onPointerEvent(domEvent) {
        if (domEvent._original && domEvent._original[this._processedFlag]) {
          return;
        }
        var type = qx.event.handler.PointerCore.MSPOINTER_TO_POINTER_MAPPING[domEvent.type] || domEvent.type;
        return this._fireEvent(domEvent, type, qx.bom.Event.getTarget(domEvent));
      },
      /**
       * Dispose this object
       */
      dispose: function dispose() {
        this.__callBase__P_56_3("dispose");
        this.__manager__P_56_0 = this.__window__P_56_1 = this.__root__P_56_2 = null;
      },
      /**
       * Call overridden method.
       *
       * @param method {String} Name of the overridden method.
       * @param args {Array} Arguments.
       */
      __callBase__P_56_3: function __callBase__P_56_3(method, args) {
        qx.event.handler.PointerCore.prototype[method].apply(this, args || []);
      }
    },
    defer: function defer(statics) {
      qx.event.Registration.addHandler(statics);
      qx.event.Registration.getManager(document).getHandler(statics);
    }
  });
  qx.event.handler.Pointer.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.Touch": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.handler.Pointer": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.dispatch.DomBubbling": {
        "require": true,
        "defer": "runtime"
      },
      "qx.ui.mobile.core.Widget": {
        "require": true,
        "defer": "runtime"
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.event.IEventHandler": {
        "require": true
      },
      "qx.event.Registration": {
        "construct": true,
        "defer": "runtime",
        "require": true
      },
      "qx.bom.Viewport": {},
      "qx.bom.element.Attribute": {},
      "qx.bom.element.Class": {},
      "qx.event.handler.GestureCore": {},
      "qx.event.type.Event": {},
      "qx.event.Pool": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Connects the widgets to the browser DOM events.
   *
   * @require(qx.event.handler.Touch)
   * @require(qx.event.handler.Pointer)
   * @require(qx.event.dispatch.DomBubbling)
   * @require(qx.ui.mobile.core.Widget)
   */
  qx.Class.define("qx.ui.mobile.core.EventHandler", {
    extend: qx.core.Object,
    implement: qx.event.IEventHandler,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      qx.core.Object.constructor.call(this);
      this.__manager__P_110_0 = qx.event.Registration.getManager(window);
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {Integer} Priority of this handler */
      PRIORITY: qx.event.Registration.PRIORITY_FIRST,
      /** @type {Map} Supported event types. Identical to events map of qx.ui.core.Widget */
      SUPPORTED_TYPES: {
        // mouse events
        mousemove: 1,
        mouseover: 1,
        mouseout: 1,
        mousedown: 1,
        mouseup: 1,
        click: 1,
        dblclick: 1,
        contextmenu: 1,
        mousewheel: 1,
        // key events
        keyup: 1,
        keydown: 1,
        keypress: 1,
        keyinput: 1,
        // mouse capture
        capture: 1,
        losecapture: 1,
        // focus events
        focusin: 1,
        focusout: 1,
        focus: 1,
        blur: 1,
        activate: 1,
        deactivate: 1,
        // appear events
        appear: 1,
        disappear: 1,
        // resize event
        // resize : 1,

        // drag drop events
        dragstart: 1,
        dragend: 1,
        dragover: 1,
        dragleave: 1,
        drop: 1,
        drag: 1,
        dragchange: 1,
        droprequest: 1,
        // scroll events
        roll: 1,
        // touch events
        touchstart: 1,
        touchend: 1,
        touchmove: 1,
        touchcancel: 1,
        // gestures
        tap: 1,
        longtap: 1,
        swipe: 1,
        dbltap: 1,
        track: 1,
        trackend: 1,
        trackstart: 1,
        pinch: 1,
        rotate: 1,
        // pointer events
        pointermove: 1,
        pointerover: 1,
        pointerout: 1,
        pointerdown: 1,
        pointerup: 1,
        pointercancel: 1
      },
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: false,
      __activeTarget__P_110_1: null,
      __scrollLeft__P_110_2: null,
      __scrollTop__P_110_3: null,
      __startY__P_110_4: null,
      __timer__P_110_5: null,
      /**
       * Event handler. Called when the pointerdown event occurs.
       * Sets the <code>active</class> class to the event target after a certain
       * time.
       *
       * @param domEvent {qx.event.type.Pointer} The pointerdown event
       */
      __onPointerDown__P_110_6: function __onPointerDown__P_110_6(domEvent) {
        if (!domEvent.isPrimary()) {
          return;
        }
        var EventHandler = qx.ui.mobile.core.EventHandler;
        EventHandler.__scrollLeft__P_110_2 = qx.bom.Viewport.getScrollLeft();
        EventHandler.__scrollTop__P_110_3 = qx.bom.Viewport.getScrollTop();
        EventHandler.__startY__P_110_4 = domEvent.getScreenTop();
        EventHandler.__cancelActiveStateTimer__P_110_7();
        var target = domEvent.getTarget();
        while (target && target.parentNode && target.parentNode.nodeType == 1 && qx.bom.element.Attribute.get(target, "data-activatable") != "true") {
          target = target.parentNode;
        }
        EventHandler.__activeTarget__P_110_1 = target;
        EventHandler.___timer__P_110_8 = window.setTimeout(function () {
          EventHandler.___timer__P_110_8 = null;
          var target = EventHandler.__activeTarget__P_110_1;
          if (target && qx.bom.element.Attribute.get(target, "data-selectable") != "false") {
            qx.bom.element.Class.add(target, "active");
          }
        }, 100);
      },
      /**
       * Event handler. Called when the pointerup event occurs.
       * Removes the <code>active</class> class from the event target.
       *
       * @param domEvent {qx.event.type.Pointer} The pointerup event
       */
      __onPointerUp__P_110_9: function __onPointerUp__P_110_9(domEvent) {
        qx.ui.mobile.core.EventHandler.__removeActiveState__P_110_10();
      },
      /**
       * Event handler. Called when the pointermove event occurs.
       * Removes the <code>active</class> class from the event target
       * when the viewport was scrolled.
       *
       * @param domEvent {qx.event.type.Pointer} The pointermove event
       */
      __onPointerMove__P_110_11: function __onPointerMove__P_110_11(domEvent) {
        if (!domEvent.isPrimary()) {
          return;
        }
        var EventHandler = qx.ui.mobile.core.EventHandler;
        var deltaY = domEvent.getScreenTop() - EventHandler.__startY__P_110_4;
        if (EventHandler.__activeTarget__P_110_1 && Math.abs(deltaY) >= qx.event.handler.GestureCore.TAP_MAX_DISTANCE[domEvent.getPointerType()]) {
          EventHandler.__removeActiveState__P_110_10();
        }
        if (EventHandler.__activeTarget__P_110_1 && (EventHandler.__scrollLeft__P_110_2 != qx.bom.Viewport.getScrollLeft() || EventHandler.__scrollTop__P_110_3 != qx.bom.Viewport.getScrollTop())) {
          EventHandler.__removeActiveState__P_110_10();
        }
      },
      /**
       * Cancels the active state timer.
       */
      __cancelActiveStateTimer__P_110_7: function __cancelActiveStateTimer__P_110_7() {
        var EventHandler = qx.ui.mobile.core.EventHandler;
        if (EventHandler.___timer__P_110_8) {
          window.clearTimeout(EventHandler.___timer__P_110_8);
          EventHandler.___timer__P_110_8 = null;
        }
      },
      /**
       * Removes the <code>active</class> class from the active target.
       */
      __removeActiveState__P_110_10: function __removeActiveState__P_110_10() {
        var EventHandler = qx.ui.mobile.core.EventHandler;
        EventHandler.__cancelActiveStateTimer__P_110_7();
        var activeTarget = EventHandler.__activeTarget__P_110_1;
        if (activeTarget) {
          qx.bom.element.Class.remove(activeTarget, "active");
        }
        EventHandler.__activeTarget__P_110_1 = null;
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __manager__P_110_0: null,
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {
        return target instanceof qx.ui.mobile.core.Widget;
      },
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        var element = target.getContainerElement();
        qx.event.Registration.addListener(element, type, this._dispatchEvent, this, capture);
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        var element = target.getContainerElement();
        qx.event.Registration.removeListener(element, type, this._dispatchEvent, this, capture);
      },
      /**
       * Dispatches a DOM event on a widget.
       *
       * @param domEvent {qx.event.type.Event} The event object to dispatch.
       */
      _dispatchEvent: function _dispatchEvent(domEvent) {
        // EVENT TARGET
        var domTarget = domEvent.getTarget();
        if (!domTarget || domTarget.id == null) {
          return;
        }
        var widgetTarget = qx.ui.mobile.core.Widget.getWidgetById(domTarget.id);

        // EVENT RELATED TARGET
        if (domEvent.getRelatedTarget) {
          var domRelatedTarget = domEvent.getRelatedTarget();
          if (domRelatedTarget && domRelatedTarget.id) {
            var widgetRelatedTarget = qx.ui.mobile.core.Widget.getWidgetById(domRelatedTarget.id);
          }
        }

        // EVENT CURRENT TARGET
        var currentTarget = domEvent.getCurrentTarget();
        var currentWidget = qx.ui.mobile.core.Widget.getWidgetById(currentTarget.id);
        if (!currentWidget) {
          return;
        }

        // PROCESS LISTENERS

        // Load listeners
        var capture = domEvent.getEventPhase() == qx.event.type.Event.CAPTURING_PHASE;
        var type = domEvent.getType();
        var listeners = this.__manager__P_110_0.getListeners(currentWidget, type, capture);
        if (!listeners || listeners.length === 0) {
          return;
        }

        // Create cloned event with correct target
        var widgetEvent = qx.event.Pool.getInstance().getObject(domEvent.constructor);
        domEvent.clone(widgetEvent);
        widgetEvent.setTarget(widgetTarget);
        widgetEvent.setRelatedTarget(widgetRelatedTarget || null);
        widgetEvent.setCurrentTarget(currentWidget);

        // Keep original target of DOM event, otherwise map it to the original
        var orig = domEvent.getOriginalTarget();
        if (orig && orig.id) {
          var widgetOriginalTarget = qx.ui.mobile.core.Widget.getWidgetById(orig.id);
          widgetEvent.setOriginalTarget(widgetOriginalTarget);
        } else {
          widgetEvent.setOriginalTarget(domTarget);
        }

        // Dispatch it on all listeners
        for (var i = 0, l = listeners.length; i < l; i++) {
          var context = listeners[i].context || currentWidget;
          listeners[i].handler.call(context, widgetEvent);
        }

        // Synchronize propagation stopped/prevent default property
        if (widgetEvent.getPropagationStopped()) {
          domEvent.stopPropagation();
        }
        if (widgetEvent.getDefaultPrevented()) {
          domEvent.preventDefault();
        }

        // Release the event instance to the event pool
        qx.event.Pool.getInstance().poolObject(widgetEvent);
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.__manager__P_110_0 = null;
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.event.Registration.addHandler(statics);
      qx.event.Registration.addListener(document, "pointerdown", statics.__onPointerDown__P_110_6);
      qx.event.Registration.addListener(document, "pointerup", statics.__onPointerUp__P_110_9);
      qx.event.Registration.addListener(document, "pointercancel", statics.__onPointerUp__P_110_9);
      qx.event.Registration.addListener(document, "pointermove", statics.__onPointerMove__P_110_11);
    }
  });
  qx.ui.mobile.core.EventHandler.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * This mixin exposes all basic methods to manage widget children as public methods.
   * It can only be included into instances of {@link Widget}.
   *
   * To optimize the method calls the including widget should call the method
   * {@link #remap} in its defer function. This will map the protected
   * methods to the public ones and save one method call for each function.
   */
  qx.Mixin.define("qx.ui.mobile.core.MChildrenHandling", {
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * Returns the children list
       *
       * @return {qx.ui.core.Widget[]} The children array (Arrays are
       *   reference types, please do not modify them in-place)
       */
      getChildren: function getChildren() {
        return this._getChildren();
      },
      /**
       * Whether the widget contains children.
       *
       * @return {Boolean} Returns <code>true</code> when the widget has children.
       */
      hasChildren: function hasChildren() {
        return this._hasChildren();
      },
      /**
       * Returns the index position of the given widget if it is
       * a child widget. Otherwise it returns <code>-1</code>.
       *
       * @param child {qx.ui.core.Widget} the widget to query for
       * @return {Integer} The index position or <code>-1</code> when
       *   the given widget is no child of this layout.
       */
      indexOf: function indexOf(child) {
        return this._indexOf(child);
      },
      /**
       * Adds a new child widget.
       *
       * @param child {qx.ui.core.Widget} the widget to add.
       * @param layoutProperties {Map?null} Optional layout data for widget.
       */
      add: function add(child, layoutProperties) {
        this._add(child, layoutProperties);
      },
      /**
       * Add a child widget at the specified index
       *
       * @param child {qx.ui.core.Widget} widget to add
       * @param index {Integer} Index, at which the widget will be inserted
       * @param options {Map?null} Optional layout data for widget.
       */
      addAt: function addAt(child, index, options) {
        this._addAt(child, index, options);
      },
      /**
       * Add a widget before another already inserted widget
       *
       * @param child {qx.ui.core.Widget} Widget to add
       * @param before {qx.ui.core.Widget} Widget before the new widget will be inserted.
       * @param layoutProperties {Map?null} Optional layout data for widget.
       */
      addBefore: function addBefore(child, before, layoutProperties) {
        this._addBefore(child, before, layoutProperties);
      },
      /**
       * Add a widget after another already inserted widget
       *
       * @param child {qx.ui.core.Widget} Widget to add
       * @param after {qx.ui.core.Widget} Widget, after which the new widget will be inserted
       * @param layoutProperties {Map?null} Optional layout data for widget.
       */
      addAfter: function addAfter(child, after, layoutProperties) {
        this._addAfter(child, after, layoutProperties);
      },
      /**
       * Remove the given child widget.
       *
       * @param child {qx.ui.core.Widget} the widget to remove
       */
      remove: function remove(child) {
        this._remove(child);
      },
      /**
       * Remove the widget at the specified index.
       *
       * @param index {Integer} Index of the widget to remove.
       */
      removeAt: function removeAt(index) {
        this._removeAt(index);
      },
      /**
       * Remove all children.
       */
      removeAll: function removeAll() {
        this._removeAll();
      }
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Mapping of protected methods to public.
       * This omits an additional function call when using these methods. Call
       * this methods in the defer block of the including class.
       *
       * @param members {Map} The including classes members map
       */
      remap: function remap(members) {
        members.getChildren = members._getChildren;
        members.hasChildren = members._hasChildren;
        members.indexOf = members._indexOf;
        members.add = members._add;
        members.addAt = members._addAt;
        members.addBefore = members._addBefore;
        members.addAfter = members._addAfter;
        members.remove = members._remove;
        members.removeAt = members._removeAt;
        members.removeAll = members._removeAll;
      }
    }
  });
  qx.ui.mobile.core.MChildrenHandling.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * This mixin exposes all methods to manage the layout manager of a widget.
   * It can only be included into instances of {@link Widget}.
   *
   * To optimize the method calls the including widget should call the method
   * {@link #remap} in its defer function. This will map the protected
   * methods to the public ones and save one method call for each function.
   */
  qx.Mixin.define("qx.ui.mobile.core.MLayoutHandling", {
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * Set a layout manager for the widget. A a layout manager can only be connected
       * with one widget. Reset the connection with a previous widget first, if you
       * like to use it in another widget instead.
       *
       * @param layout {qx.ui.mobile.layout.Abstract} The new layout or
       *     <code>null</code> to reset the layout.
       */
      setLayout: function setLayout(layout) {
        this._setLayout(layout);
      },
      /**
       * Get the widget's layout manager.
       *
       * @return {qx.ui.mobile.layout.Abstract} The widget's layout manager
       */
      getLayout: function getLayout() {
        return this._getLayout();
      }
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Mapping of protected methods to public.
       * This omits an additional function call when using these methods. Call
       * this methods in the defer block of the including class.
       *
       * @param members {Map} The including classes members map
       */
      remap: function remap(members) {
        members.getLayout = members._getLayout;
        members.setLayout = members._setLayout;
      }
    }
  });
  qx.ui.mobile.core.MLayoutHandling.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.ui.mobile.core.MChildrenHandling": {
        "defer": "runtime",
        "require": true
      },
      "qx.ui.mobile.core.MLayoutHandling": {
        "defer": "runtime",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * The Composite is a generic container widget.
   *
   * It exposes all methods to set layouts and to manage child widgets
   * as public methods. You must configure this widget with a layout manager to
   * define the way the widget's children are positioned.
   *
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *   // create the composite
   *   var composite = new qx.ui.mobile.container.Composite();
   *
   *   composite.setLayout(new qx.ui.mobile.layout.HBox());
   *
   *   // add some children
   *   composite.add(new qx.ui.mobile.basic.Label("Name: "), {flex:1});
   *   composite.add(new qx.ui.mobile.form.TextField());
   *
   *   this.getRoot().add(composite);
   * </pre>
   *
   * This example horizontally groups a label and text field by using a
   * Composite configured with a horizontal box layout as a container.
   */
  qx.Class.define("qx.ui.mobile.container.Composite", {
    extend: qx.ui.mobile.core.Widget,
    include: [qx.ui.mobile.core.MChildrenHandling, qx.ui.mobile.core.MLayoutHandling],
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param layout {qx.ui.mobile.layout.Abstract?null} The layout that should be used for this
     *     container
     */
    construct: function construct(layout) {
      qx.ui.mobile.core.Widget.constructor.call(this);
      if (layout) {
        this.setLayout(layout);
      }
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics, members) {
      qx.ui.mobile.core.MChildrenHandling.remap(members);
      qx.ui.mobile.core.MLayoutHandling.remap(members);
    }
  });
  qx.ui.mobile.container.Composite.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.Style": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {}
    },
    "environment": {
      "provided": ["css.textoverflow", "css.placeholder", "css.borderradius", "css.boxshadow", "css.gradient.linear", "css.gradient.radial", "css.gradient.legacywebkit", "css.boxmodel", "css.rgba", "css.borderimage", "css.borderimage.standardsyntax", "css.usermodify", "css.userselect", "css.userselect.none", "css.appearance", "css.float", "css.boxsizing", "css.inlineblock", "css.opacity", "css.textShadow", "css.alphaimageloaderneeded", "css.pointerevents", "css.flexboxSyntax"],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * The purpose of this class is to contain all checks about css.
   *
   * This class is used by {@link qx.core.Environment} and should not be used
   * directly. Please check its class comment for details how to use it.
   *
   * @internal
   * @ignore(WebKitCSSMatrix)
   * @require(qx.bom.Style)
   */
  qx.Bootstrap.define("qx.bom.client.Css", {
    statics: {
      __WEBKIT_LEGACY_GRADIENT__P_35_0: null,
      /**
       * Checks what box model is used in the current environment.
       * @return {String} It either returns "content" or "border".
       * @internal
       */
      getBoxModel: function getBoxModel() {
        var content = qx.bom.client.Engine.getName() !== "mshtml" || !qx.bom.client.Browser.getQuirksMode();
        return content ? "content" : "border";
      },
      /**
       * Returns the (possibly vendor-prefixed) name the browser uses for the
       * <code>textOverflow</code> style property.
       *
       * @return {String|null} textOverflow property name or <code>null</code> if
       * textOverflow is not supported.
       * @internal
       */
      getTextOverflow: function getTextOverflow() {
        return qx.bom.Style.getPropertyName("textOverflow");
      },
      /**
       * Checks if a placeholder could be used.
       * @return {Boolean} <code>true</code>, if it could be used.
       * @internal
       */
      getPlaceholder: function getPlaceholder() {
        if (qx.core.Environment.get("engine.name") === "mshtml") {
          return false;
        }
        var i = document.createElement("input");
        return "placeholder" in i;
      },
      /**
       * Returns the (possibly vendor-prefixed) name the browser uses for the
       * <code>appearance</code> style property.
       *
       * @return {String|null} appearance property name or <code>null</code> if
       * appearance is not supported.
       * @internal
       */
      getAppearance: function getAppearance() {
        return qx.bom.Style.getPropertyName("appearance");
      },
      /**
       * Returns the (possibly vendor-prefixed) name the browser uses for the
       * <code>borderRadius</code> style property.
       *
       * @return {String|null} borderRadius property name or <code>null</code> if
       * borderRadius is not supported.
       * @internal
       */
      getBorderRadius: function getBorderRadius() {
        return qx.bom.Style.getPropertyName("borderRadius");
      },
      /**
       * Returns the (possibly vendor-prefixed) name the browser uses for the
       * <code>boxShadow</code> style property.
       *
       * @return {String|null} boxShadow property name or <code>null</code> if
       * boxShadow is not supported.
       * @internal
       */
      getBoxShadow: function getBoxShadow() {
        return qx.bom.Style.getPropertyName("boxShadow");
      },
      /**
       * Returns the (possibly vendor-prefixed) name the browser uses for the
       * <code>borderImage</code> style property.
       *
       * @return {String|null} borderImage property name or <code>null</code> if
       * borderImage is not supported.
       * @internal
       */
      getBorderImage: function getBorderImage() {
        return qx.bom.Style.getPropertyName("borderImage");
      },
      /**
       * Returns the type of syntax this client supports for its CSS border-image
       * implementation. Some browsers do not support the "fill" keyword defined
       * in the W3C draft (http://www.w3.org/TR/css3-background/) and will not
       * show the border image if it's set. Others follow the standard closely and
       * will omit the center image if "fill" is not set.
       *
       * @return {Boolean|null} <code>true</code> if the standard syntax is supported.
       * <code>null</code> if the supported syntax could not be detected.
       * @internal
       */
      getBorderImageSyntax: function getBorderImageSyntax() {
        var styleName = qx.bom.client.Css.getBorderImage();
        if (!styleName) {
          return null;
        }
        var el = document.createElement("div");
        if (styleName === "borderImage") {
          // unprefixed implementation: check individual properties
          el.style[styleName] = 'url("foo.png") 4 4 4 4 fill stretch';
          if (el.style.borderImageSource.indexOf("foo.png") >= 0 && el.style.borderImageSlice.indexOf("4 fill") >= 0 && el.style.borderImageRepeat.indexOf("stretch") >= 0) {
            return true;
          }
        } else {
          // prefixed implementation, assume no support for "fill"
          el.style[styleName] = 'url("foo.png") 4 4 4 4 stretch';
          // serialized value is unreliable, so just a simple check
          if (el.style[styleName].indexOf("foo.png") >= 0) {
            return false;
          }
        }

        // unable to determine syntax
        return null;
      },
      /**
       * Returns the (possibly vendor-prefixed) name the browser uses for the
       * <code>userSelect</code> style property.
       *
       * @return {String|null} userSelect property name or <code>null</code> if
       * userSelect is not supported.
       * @internal
       */
      getUserSelect: function getUserSelect() {
        return qx.bom.Style.getPropertyName("userSelect");
      },
      /**
       * Returns the (possibly vendor-prefixed) value for the
       * <code>userSelect</code> style property that disables selection. For Gecko,
       * "-moz-none" is returned since "none" only makes the target element appear
       * as if its text could not be selected
       *
       * @internal
       * @return {String|null} the userSelect property value that disables
       * selection or <code>null</code> if userSelect is not supported
       */
      getUserSelectNone: function getUserSelectNone() {
        var styleProperty = qx.bom.client.Css.getUserSelect();
        if (styleProperty) {
          var el = document.createElement("span");
          el.style[styleProperty] = "-moz-none";
          return el.style[styleProperty] === "-moz-none" ? "-moz-none" : "none";
        }
        return null;
      },
      /**
       * Returns the (possibly vendor-prefixed) name the browser uses for the
       * <code>userModify</code> style property.
       *
       * @return {String|null} userModify property name or <code>null</code> if
       * userModify is not supported.
       * @internal
       */
      getUserModify: function getUserModify() {
        return qx.bom.Style.getPropertyName("userModify");
      },
      /**
       * Returns the vendor-specific name of the <code>float</code> style property
       *
       * @return {String|null} <code>cssFloat</code> for standards-compliant
       * browsers, <code>styleFloat</code> for legacy IEs, <code>null</code> if
       * the client supports neither property.
       * @internal
       */
      getFloat: function getFloat() {
        var style = document.documentElement.style;
        return style.cssFloat !== undefined ? "cssFloat" : style.styleFloat !== undefined ? "styleFloat" : null;
      },
      /**
       * Returns the (possibly vendor-prefixed) name this client uses for
       * <code>linear-gradient</code>.
       * http://dev.w3.org/csswg/css3-images/#linear-gradients
       *
       * @return {String|null} Prefixed linear-gradient name or <code>null</code>
       * if linear gradients are not supported
       * @internal
       */
      getLinearGradient: function getLinearGradient() {
        qx.bom.client.Css.__WEBKIT_LEGACY_GRADIENT__P_35_0 = false;
        var value = "linear-gradient(0deg, #fff, #000)";
        var el = document.createElement("div");
        var style = qx.bom.Style.getAppliedStyle(el, "backgroundImage", value);
        if (!style) {
          //try old WebKit syntax (versions 528 - 534.16)
          value = "-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))";
          var style = qx.bom.Style.getAppliedStyle(el, "backgroundImage", value, false);
          if (style) {
            qx.bom.client.Css.__WEBKIT_LEGACY_GRADIENT__P_35_0 = true;
          }
        }

        // not supported
        if (!style) {
          return null;
        }
        var match = /(.*?)\(/.exec(style);
        return match ? match[1] : null;
      },
      /**
       * Returns the (possibly vendor-prefixed) name this client uses for
       * <code>radial-gradient</code>.
       *
       * @return {String|null} Prefixed radial-gradient name or <code>null</code>
       * if radial gradients are not supported
       * @internal
       */
      getRadialGradient: function getRadialGradient() {
        var value = "radial-gradient(0px 0px, cover, red 50%, blue 100%)";
        var el = document.createElement("div");
        var style = qx.bom.Style.getAppliedStyle(el, "backgroundImage", value);
        if (!style) {
          return null;
        }
        var match = /(.*?)\(/.exec(style);
        return match ? match[1] : null;
      },
      /**
       * Checks if **only** the old WebKit (version < 534.16) syntax for
       * linear gradients is supported, e.g.
       * <code>linear-gradient(0deg, #fff, #000)</code>
       *
       * @return {Boolean} <code>true</code> if the legacy syntax must be used
       * @internal
       */
      getLegacyWebkitGradient: function getLegacyWebkitGradient() {
        if (qx.bom.client.Css.__WEBKIT_LEGACY_GRADIENT__P_35_0 === null) {
          qx.bom.client.Css.getLinearGradient();
        }
        return qx.bom.client.Css.__WEBKIT_LEGACY_GRADIENT__P_35_0;
      },
      /**
       * Checks if rgba colors can be used:
       * http://www.w3.org/TR/2010/PR-css3-color-20101028/#rgba-color
       *
       * @return {Boolean} <code>true</code>, if rgba colors are supported.
       * @internal
       */
      getRgba: function getRgba() {
        var el;
        try {
          el = document.createElement("div");
        } catch (ex) {
          el = document.createElement();
        }

        // try catch for IE
        try {
          el.style["color"] = "rgba(1, 2, 3, 0.5)";
          if (el.style["color"].indexOf("rgba") != -1) {
            return true;
          }
        } catch (ex) {}
        return false;
      },
      /**
       * Returns the (possibly vendor-prefixed) name the browser uses for the
       * <code>boxSizing</code> style property.
       *
       * @return {String|null} boxSizing property name or <code>null</code> if
       * boxSizing is not supported.
       * @internal
       */
      getBoxSizing: function getBoxSizing() {
        return qx.bom.Style.getPropertyName("boxSizing");
      },
      /**
       * Returns the browser-specific name used for the <code>display</code> style
       * property's <code>inline-block</code> value.
       *
       * @internal
       * @return {String|null}
       */
      getInlineBlock: function getInlineBlock() {
        var el = document.createElement("span");
        el.style.display = "inline-block";
        if (el.style.display == "inline-block") {
          return "inline-block";
        }
        el.style.display = "-moz-inline-box";
        if (el.style.display !== "-moz-inline-box") {
          return "-moz-inline-box";
        }
        return null;
      },
      /**
       * Checks if CSS opacity is supported
       *
       * @internal
       * @return {Boolean} <code>true</code> if opacity is supported
       */
      getOpacity: function getOpacity() {
        return typeof document.documentElement.style.opacity == "string";
      },
      /**
       * Checks if CSS texShadow is supported
       *
       * @internal
       * @return {Boolean} <code>true</code> if textShadow is supported
       */
      getTextShadow: function getTextShadow() {
        return !!qx.bom.Style.getPropertyName("textShadow");
      },
      /**
       * Checks if the Alpha Image Loader must be used to display transparent PNGs.
       *
       * @return {Boolean} <code>true</code> if the Alpha Image Loader is required
       */
      getAlphaImageLoaderNeeded: function getAlphaImageLoaderNeeded() {
        return qx.bom.client.Engine.getName() == "mshtml" && qx.bom.client.Browser.getDocumentMode() < 9;
      },
      /**
       * Checks if pointer events are available.
       *
       * @internal
       * @return {Boolean} <code>true</code> if pointer events are supported.
       */
      getPointerEvents: function getPointerEvents() {
        var el = document.documentElement;
        // Check if browser reports that pointerEvents is a known style property
        if ("pointerEvents" in el.style) {
          // The property is defined in Opera and IE9 but setting it has no effect
          var initial = el.style.pointerEvents;
          el.style.pointerEvents = "auto";
          // don't assume support if a nonsensical value isn't ignored
          el.style.pointerEvents = "foo";
          var supported = el.style.pointerEvents == "auto";
          el.style.pointerEvents = initial;
          return supported;
        }
        return false;
      },
      /**
       * Returns which Flexbox syntax is supported by the browser.
       * <code>display: box;</code> old 2009 version of Flexbox.
       * <code>display: flexbox;</code> tweener phase in 2011.
       * <code>display: flex;</code> current specification.
       * @internal
       * @return {String} <code>flex</code>,<code>flexbox</code>,<code>box</code> or <code>null</code>
       */
      getFlexboxSyntax: function getFlexboxSyntax() {
        var detectedSyntax = null;
        var detector = document.createElement("detect");
        var flexSyntax = [{
          value: "flex",
          syntax: "flex"
        }, {
          value: "-ms-flexbox",
          syntax: "flexbox"
        }, {
          value: "-webkit-flex",
          syntax: "flex"
        }];
        for (var i = 0; i < flexSyntax.length; i++) {
          // old IEs will throw an "Invalid argument" exception here
          try {
            detector.style.display = flexSyntax[i].value;
          } catch (ex) {
            return null;
          }
          if (detector.style.display === flexSyntax[i].value) {
            detectedSyntax = flexSyntax[i].syntax;
            break;
          }
        }
        detector = null;
        return detectedSyntax;
      }
    },
    defer: function defer(statics) {
      qx.core.Environment.add("css.textoverflow", statics.getTextOverflow);
      qx.core.Environment.add("css.placeholder", statics.getPlaceholder);
      qx.core.Environment.add("css.borderradius", statics.getBorderRadius);
      qx.core.Environment.add("css.boxshadow", statics.getBoxShadow);
      qx.core.Environment.add("css.gradient.linear", statics.getLinearGradient);
      qx.core.Environment.add("css.gradient.radial", statics.getRadialGradient);
      qx.core.Environment.add("css.gradient.legacywebkit", statics.getLegacyWebkitGradient);
      qx.core.Environment.add("css.boxmodel", statics.getBoxModel);
      qx.core.Environment.add("css.rgba", statics.getRgba);
      qx.core.Environment.add("css.borderimage", statics.getBorderImage);
      qx.core.Environment.add("css.borderimage.standardsyntax", statics.getBorderImageSyntax);
      qx.core.Environment.add("css.usermodify", statics.getUserModify);
      qx.core.Environment.add("css.userselect", statics.getUserSelect);
      qx.core.Environment.add("css.userselect.none", statics.getUserSelectNone);
      qx.core.Environment.add("css.appearance", statics.getAppearance);
      qx.core.Environment.add("css.float", statics.getFloat);
      qx.core.Environment.add("css.boxsizing", statics.getBoxSizing);
      qx.core.Environment.add("css.inlineblock", statics.getInlineBlock);
      qx.core.Environment.add("css.opacity", statics.getOpacity);
      qx.core.Environment.add("css.textShadow", statics.getTextShadow);
      qx.core.Environment.add("css.alphaimageloaderneeded", statics.getAlphaImageLoaderNeeded);
      qx.core.Environment.add("css.pointerevents", statics.getPointerEvents);
      qx.core.Environment.add("css.flexboxSyntax", statics.getFlexboxSyntax);
    }
  });
  qx.bom.client.Css.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.mobile.layout.VBox": {
        "construct": true
      },
      "qx.bom.client.OperatingSystem": {
        "construct": true,
        "require": true
      },
      "qx.event.Registration": {
        "construct": true
      },
      "qx.bom.Event": {
        "construct": true
      },
      "qx.bom.client.Css": {
        "construct": true,
        "require": true
      },
      "qx.bom.element.Style": {
        "construct": true
      },
      "qx.bom.client.Device": {},
      "qx.bom.element.Dimension": {},
      "qx.bom.Viewport": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "os.name": {
          "construct": true,
          "className": "qx.bom.client.OperatingSystem"
        },
        "os.version": {
          "construct": true,
          "className": "qx.bom.client.OperatingSystem"
        },
        "css.flexboxSyntax": {
          "construct": true,
          "className": "qx.bom.client.Css"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Root widget for the mobile application.
   */
  qx.Class.define("qx.ui.mobile.core.Root", {
    extend: qx.ui.mobile.container.Composite,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param root {Element?null} Optional. The root DOM element of the widget. Default is the body of the document.
     * @param layout {qx.ui.mobile.layout.Abstract ? qx.ui.mobile.layout.VBox} The layout of the root widget.
     */
    construct: function construct(root, layout) {
      this.__root__P_16_0 = root || document.body;
      qx.ui.mobile.container.Composite.constructor.call(this, layout || new qx.ui.mobile.layout.VBox());
      this.addCssClass("mobile");
      this.addCssClass(qx.core.Environment.get("os.name"));
      this.addCssClass("v" + qx.core.Environment.get("os.version").charAt(0));
      qx.event.Registration.addListener(window, "orientationchange", this._onOrientationChange, this);

      // [BUG #7785] Document element's clientHeight is calculated wrong on iPad iOS7
      if (qx.core.Environment.get("os.name") == "ios") {
        this.addListener("touchmove", qx.bom.Event.preventDefault, this);
        if (window.innerHeight != document.documentElement.clientHeight) {
          this.addCssClass("ios-viewport-fix");
        }
      }
      var flexboxSyntax = qx.core.Environment.get("css.flexboxSyntax");
      if (flexboxSyntax === "flex" || flexboxSyntax === "flexbox") {
        this.addCssClass("qx-flex-ready");
      }

      // fix the root height when the browser tab bar animates out (closed all other tabs)
      // (landscape + iOS8 + iPhone 6plus)
      window.addEventListener("resize", function () {
        qx.bom.element.Style.set(this.getContentElement(), "height", window.innerHeight + "px");
      }.bind(this));
      this._onOrientationChange();
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      // overridden
      defaultCssClass: {
        refine: true,
        init: "root"
      },
      /**
       * Whether the native scrollbar should be shown or not.
       */
      showScrollbarY: {
        check: "Boolean",
        init: true,
        apply: "_applyShowScrollbarY"
      }
    },
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /**
       * Event is fired when the app scale factor of the application has (or
       * might have) changed.
       */
      changeAppScale: "qx.event.type.Event"
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __root__P_16_0: null,
      // overridden
      _createContainerElement: function _createContainerElement() {
        return this.__root__P_16_0;
      },
      // property apply
      _applyShowScrollbarY: function _applyShowScrollbarY(value, old) {
        this._setStyle("overflow-y", value ? "auto" : "hidden");
      },
      /**
       * Returns the application's total scale factor. It takes into account both
       * the application's font scale (determined by {@link #getFontScale}) and
       * the device pixel ratio. The latter could be modified at runtime by the
       * browsers font scaling/zooming feature.
       *
       * @return {Number|null} the app scale factor. If a valid app scale could
       * be determined, it is rounded to a two decimal number. If it could not be
       * determined, <code>null</code> is returned.
       */
      getAppScale: function getAppScale() {
        var pixelRatio = parseFloat(qx.bom.client.Device.getDevicePixelRatio().toFixed(2));
        var fontScale = this.getFontScale();
        if (!isNaN(pixelRatio * fontScale)) {
          return parseFloat((pixelRatio * fontScale).toFixed(2));
        } else {
          return null;
        }
      },
      /**
       * Returns the application's font scale factor.
       *
       * @return {Number|null} the font scale factor. If a valid font scale could
       * be determined, it is rounded to a three decimal number. For displaying
       * the scale factor, you might want to round to two decimals
       * (<code>.toFixed(2)</code>). If it could not be determined,
       * <code>null</code> is returned.
       */
      getFontScale: function getFontScale() {
        var fontScale = null;
        var appScale = 1;

        // determine font-size style in percent if available
        var fontSize = document.documentElement.style.fontSize;
        if (fontSize.indexOf("%") !== -1) {
          appScale = parseInt(fontSize, 10) / 100;
        }

        // start from font-size computed style in pixels if available;
        fontSize = qx.bom.element.Style.get(document.documentElement, "fontSize");
        if (fontSize.indexOf("px") !== -1) {
          fontSize = parseFloat(fontSize);
          if (fontSize > 15 && fontSize < 17) {
            // iron out minor deviations from the base 16px size
            fontSize = 16;
          }
          if (appScale !== 1) {
            // if font-size style is set in percent
            fontSize = Math.round(fontSize / appScale);
          }

          // relative to the 16px base font
          fontScale = fontSize / 16;

          // apply percentage-based font-size
          fontScale *= appScale;

          // round to a tree-decimal float
          fontScale = parseFloat(fontScale.toFixed(3));
        }
        return fontScale;
      },
      /**
       * Sets the application's font scale factor, i.e. relative to a default 100%
       * font size.
       *
       * @param value {Number} the font scale factor.
       */
      setFontScale: function setFontScale(value) {
        {
          this.assertNumber(value, "The scale factor is asserted to be of type Number");
        }
        var docElement = document.documentElement;
        docElement.style.fontSize = value * 100 + "%";

        // Force relayout - important for new Android devices and Firefox.
        setTimeout(function () {
          docElement.style.display = "none";
          /* eslint-disable-next-line no-self-assign */
          docElement.clientWidth = docElement.clientWidth;
          docElement.style.display = "";
        }, 0);
        this.fireEvent("changeAppScale");
      },
      /**
       * Returns the rendered width.
       * @return {Integer} the width of the container element.
       */
      getWidth: function getWidth() {
        return qx.bom.element.Dimension.getWidth(this.__root__P_16_0);
      },
      /**
       * Returns the rendered height.
       * @return {Integer} the height of the container element.
       */
      getHeight: function getHeight() {
        return qx.bom.element.Dimension.getHeight(this.__root__P_16_0);
      },
      /**
       * Event handler. Called when the orientation of the device is changed.
       *
       * @param evt {qx.event.type.Orientation} The handled orientation change event
       */
      _onOrientationChange: function _onOrientationChange(evt) {
        var isPortrait = null;
        if (evt) {
          isPortrait = evt.isPortrait();
        } else {
          isPortrait = qx.bom.Viewport.isPortrait();
        }
        if (isPortrait) {
          this.addCssClass("portrait");
          this.removeCssClass("landscape");
        } else {
          this.addCssClass("landscape");
          this.removeCssClass("portrait");
        }

        // fix the root height on iOS 8
        qx.bom.element.Style.set(this.getContentElement(), "height", window.innerHeight + "px");

        // fix the root height after the location bar animated in
        // (landscape + iOS8 + iPhone 6plus + more than one tab)
        window.setTimeout(function () {
          qx.bom.element.Style.set(this.getContentElement(), "height", window.innerHeight + "px");
        }.bind(this), 1500);
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.__root__P_16_0 = null;
      this.removeListener("touchmove", qx.bom.Event.preventDefault, this);
      qx.event.Registration.removeListener(window, "orientationchange", this._onOrientationChange, this);
    }
  });
  qx.ui.mobile.core.Root.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      },
      "qx.util.format.DateFormat": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qx.log.appender.Formatter", {
    extend: qx.core.Object,
    properties: {
      /** How to format time in an entry; offset since start (backwards compatible) or as actual date/time */
      formatTimeAs: {
        init: "offset",
        check: ["offset", "datetime"]
      }
    },
    members: {
      /**
       * Formats a numeric time offset to 6 characters.
       *
       * @param offset
       *          {Integer} Current offset value
       * @param length
       *          {Integer?6} Refine the length
       * @return {String} Padded string
       */
      formatOffset: function formatOffset(offset, length) {
        var str = offset.toString();
        var diff = (length || 6) - str.length;
        var pad = "";
        for (var i = 0; i < diff; i++) {
          pad += "0";
        }
        return pad + str;
      },
      /**
       * Formats the time part of an entry
       *
       * @param entry {Map} the entry to output
       * @return {String} formatted time, as an offset or date time depending on `formatTimeAs` property
       */
      formatEntryTime: function formatEntryTime(entry) {
        if (this.getFormatTimeAs() == "offset") {
          return this.formatOffset(entry.offset, 6);
        }
        if (!qx.log.appender.Formatter.__DATETIME_FORMAT__P_17_0) {
          qx.log.appender.Formatter.__DATETIME_FORMAT__P_17_0 = new qx.util.format.DateFormat("YYYY-MM-dd HH:mm:ss");
        }
        return qx.log.appender.Formatter.__DATETIME_FORMAT__P_17_0.format(entry.time);
      },
      /**
       * Normalises the entry into an object with clazz, object, hash.
       *
       * @param entry {Map} the entry to output
       * @return {Map} result, containing:
       *  clazz {Class?} the class of the object
       *  object {Object?} the object
       *  hash {String?} the hash code
       */
      normalizeEntryClass: function normalizeEntryClass(entry) {
        var result = {
          clazz: null,
          object: null,
          hash: null
        };
        if (entry.object) {
          result.hash = entry.object;
          if (entry.clazz) {
            result.clazz = entry.clazz;
          } else {
            var obj = entry.win.qx.core.ObjectRegistry.fromHashCode(entry.object, true);
            if (obj) {
              result.clazz = obj.constructor;
              result.object = obj;
            }
          }
        } else if (entry.clazz) {
          result.clazz = entry.clazz;
        }
        return result;
      },
      /**
       * Formats the object part of an entry
       *
       * @param entry {Map} the entry to output
       * @return {String} formatted object, with class and hash code if possible
       */
      formatEntryObjectAndClass: function formatEntryObjectAndClass(entry) {
        var breakdown = this.normalizeEntryClass(entry);
        var result = "";
        if (breakdown.clazz) {
          result += breakdown.clazz.classname;
        }
        if (breakdown.hash) {
          result += "[" + breakdown.hash + "]";
        }
        result += ":";
        return result;
      },
      /**
       * Formats the items part of an entry
       *
       * @param entry {Map} the entry to output
       * @return {String} formatted items
       */
      formatEntryItems: function formatEntryItems(entry) {
        var output = [];
        var items = entry.items;
        for (var i = 0, il = items.length; i < il; i++) {
          var item = items[i];
          var msg = item.text;
          if (item.trace && item.trace.length > 0) {
            msg += "\n" + item.trace;
          }
          if (msg instanceof Array) {
            var list = [];
            for (var j = 0, jl = msg.length; j < jl; j++) {
              list.push(msg[j].text);
            }
            if (item.type === "map") {
              output.push("{", list.join(", "), "}");
            } else {
              output.push("[", list.join(", "), "]");
            }
          } else {
            output.push(msg);
          }
        }
        return output.join(" ");
      },
      /**
       * Converts a single log entry to plain text
       *
       * @param entry {Map} The entry to process
       * @return {String} the formatted log entry
       */
      toText: function toText(entry) {
        var output = this.formatEntryTime(entry) + " " + this.formatEntryObjectAndClass(entry);
        var str = this.formatEntryItems(entry);
        if (str) {
          output += " " + str;
        }
        return output;
      },
      /**
       * Converts a single log entry to an array of plain text.
       *
       * This use of arrays is an outdated performance improvement, and as there is no
       * specification of what is in each of the elements of the array, there is no value
       * in preserving this.  This method is deprecated because it will be removed in 7.0
       * and only toText will remain.  Note that toTextArray is not used anywhere in Qooxdoo.
       *
       * @param entry {Map} The entry to process
       * @return {Array} Argument list ready message array.
       * @deprecated {6.0} See toText instead
       */
      toTextArray: function toTextArray(entry) {
        var output = [];
        output.push(this.formatEntryTime(entry));
        output.push(this.formatEntryObjectAndClass(entry));
        output.push(this.formatEntryItems(entry));
        return output;
      },
      /**
       * Converts a single log entry to HTML
       *
       * @signature function(entry)
       * @param entry {Map} The entry to process
       */
      toHtml: function toHtml(entry) {
        var output = [];
        var item, msg, sub, list;
        output.push("<span class='offset'>", this.formatEntryTime(entry), "</span> ");
        var breakdown = this.normalizeEntryClass(entry);
        var result = "";
        if (breakdown.clazz) {
          result += breakdown.clazz.classname;
        }
        if (breakdown.object) {
          output.push("<span class='object' title='Object instance with hash code: " + breakdown.object.toHashCode() + "'>", breakdown.classname, "[", breakdown.object, "]</span>: ");
        } else if (breakdown.hash) {
          output.push("<span class='object' title='Object instance with hash code: " + breakdown.hash + "'>", breakdown.classname, "[", breakdown.hash, "]</span>: ");
        } else if (breakdown.clazz) {
          output.push("<span class='object'>" + breakdown.clazz.classname, "</span>: ");
        }
        var items = entry.items;
        for (var i = 0, il = items.length; i < il; i++) {
          item = items[i];
          msg = item.text;
          if (msg instanceof Array) {
            var list = [];
            for (var j = 0, jl = msg.length; j < jl; j++) {
              sub = msg[j];
              if (typeof sub === "string") {
                list.push("<span>" + qx.log.appender.Formatter.escapeHTML(sub) + "</span>");
              } else if (sub.key) {
                list.push("<span class='type-key'>" + sub.key + "</span>:<span class='type-" + sub.type + "'>" + qx.log.appender.Formatter.escapeHTML(sub.text) + "</span>");
              } else {
                list.push("<span class='type-" + sub.type + "'>" + qx.log.appender.Formatter.escapeHTML(sub.text) + "</span>");
              }
            }
            output.push("<span class='type-" + item.type + "'>");
            if (item.type === "map") {
              output.push("{", list.join(", "), "}");
            } else {
              output.push("[", list.join(", "), "]");
            }
            output.push("</span>");
          } else {
            output.push("<span class='type-" + item.type + "'>" + qx.log.appender.Formatter.escapeHTML(msg) + "</span> ");
          }
        }
        var wrapper = document.createElement("DIV");
        wrapper.innerHTML = output.join("");
        wrapper.className = "level-" + entry.level;
        return wrapper;
      }
    },
    statics: {
      /** @type {qx.util.format.DateFormat} format for datetimes */
      __DATETIME_FORMAT__P_17_0: null,
      /** @type {qx.log.appender.Formatter} the default instance */
      __defaultFormatter__P_17_1: null,
      /**
       * Returns the default formatter
       *
       * @return {qx.log.appender.Formatter}
       */
      getFormatter: function getFormatter() {
        if (!qx.log.appender.Formatter.__defaultFormatter__P_17_1) {
          qx.log.appender.Formatter.__defaultFormatter__P_17_1 = new qx.log.appender.Formatter();
        }
        return qx.log.appender.Formatter.__defaultFormatter__P_17_1;
      },
      /**
       * Sets the default formatter
       *
       * @param instance {qx.log.appender.Formatter}
       */
      setFormatter: function setFormatter(instance) {
        qx.log.appender.Formatter.__defaultFormatter__P_17_1 = instance;
      },
      /**
       * Escapes the HTML in the given value
       *
       * @param value
       *          {String} value to escape
       * @return {String} escaped value
       */
      escapeHTML: function escapeHTML(value) {
        return String(value).replace(/[<>&"']/g, qx.log.appender.Formatter.__escapeHTMLReplace__P_17_2);
      },
      /**
       * Internal replacement helper for HTML escape.
       *
       * @param ch
       *          {String} Single item to replace.
       * @return {String} Replaced item
       */
      __escapeHTMLReplace__P_17_2: function __escapeHTMLReplace__P_17_2(ch) {
        var map = {
          "<": "&lt;",
          ">": "&gt;",
          "&": "&amp;",
          "'": "&#39;",
          '"': "&quot;"
        };
        return map[ch] || "?";
      }
    }
  });
  qx.log.appender.Formatter.$$dbClassInfo = $$dbClassInfo;
})();

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["html.webworker", "html.filereader", "html.geolocation", "html.audio", "html.audio.ogg", "html.audio.mp3", "html.audio.wav", "html.audio.au", "html.audio.aif", "html.video", "html.video.ogg", "html.video.h264", "html.video.webm", "html.storage.local", "html.storage.session", "html.storage.userdata", "html.classlist", "html.xpath", "html.xul", "html.canvas", "html.svg", "html.vml", "html.dataset", "html.element.contains", "html.element.compareDocumentPosition", "html.element.textcontent", "html.console", "html.image.naturaldimensions", "html.history.state", "html.selection", "html.node.isequalnode", "html.fullscreen"],
      "required": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */
  /**
   * Internal class which contains the checks used by {@link qx.core.Environment}.
   * All checks in here are marked as internal which means you should never use
   * them directly.
   *
   * This class should contain all checks about HTML.
   *
   * @internal
   */
  qx.Bootstrap.define("qx.bom.client.Html", {
    statics: {
      /**
       * Whether the client supports Web Workers.
       *
       * @internal
       * @return {Boolean} <code>true</code> if webworkers are supported
       */
      getWebWorker: function getWebWorker() {
        return window.Worker != null;
      },
      /**
       * Whether the client supports File Readers
       *
       * @internal
       * @return {Boolean} <code>true</code> if FileReaders are supported
       */
      getFileReader: function getFileReader() {
        return window.FileReader != null;
      },
      /**
       * Whether the client supports Geo Location.
       *
       * @internal
       * @return {Boolean} <code>true</code> if geolocation supported
       */
      getGeoLocation: function getGeoLocation() {
        return "geolocation" in navigator;
      },
      /**
       * Whether the client supports audio.
       *
       * @internal
       * @return {Boolean} <code>true</code> if audio is supported
       */
      getAudio: function getAudio() {
        return !!document.createElement("audio").canPlayType;
      },
      /**
       * Whether the client can play ogg audio format.
       *
       * @internal
       * @return {String} "" or "maybe" or "probably"
       */
      getAudioOgg: function getAudioOgg() {
        if (!qx.bom.client.Html.getAudio()) {
          return "";
        }
        var a = document.createElement("audio");
        return a.canPlayType("audio/ogg");
      },
      /**
       * Whether the client can play mp3 audio format.
       *
       * @internal
       * @return {String} "" or "maybe" or "probably"
       */
      getAudioMp3: function getAudioMp3() {
        if (!qx.bom.client.Html.getAudio()) {
          return "";
        }
        var a = document.createElement("audio");
        return a.canPlayType("audio/mpeg");
      },
      /**
       * Whether the client can play wave audio wave format.
       *
       * @internal
       * @return {String} "" or "maybe" or "probably"
       */
      getAudioWav: function getAudioWav() {
        if (!qx.bom.client.Html.getAudio()) {
          return "";
        }
        var a = document.createElement("audio");
        return a.canPlayType("audio/x-wav");
      },
      /**
       * Whether the client can play au audio format.
       *
       * @internal
       * @return {String} "" or "maybe" or "probably"
       */
      getAudioAu: function getAudioAu() {
        if (!qx.bom.client.Html.getAudio()) {
          return "";
        }
        var a = document.createElement("audio");
        return a.canPlayType("audio/basic");
      },
      /**
       * Whether the client can play aif audio format.
       *
       * @internal
       * @return {String} "" or "maybe" or "probably"
       */
      getAudioAif: function getAudioAif() {
        if (!qx.bom.client.Html.getAudio()) {
          return "";
        }
        var a = document.createElement("audio");
        return a.canPlayType("audio/x-aiff");
      },
      /**
       * Whether the client supports video.
       *
       * @internal
       * @return {Boolean} <code>true</code> if video is supported
       */
      getVideo: function getVideo() {
        return !!document.createElement("video").canPlayType;
      },
      /**
       * Whether the client supports ogg video.
       *
       * @internal
       * @return {String} "" or "maybe" or "probably"
       */
      getVideoOgg: function getVideoOgg() {
        if (!qx.bom.client.Html.getVideo()) {
          return "";
        }
        var v = document.createElement("video");
        return v.canPlayType('video/ogg; codecs="theora, vorbis"');
      },
      /**
       * Whether the client supports mp4 video.
       *
       * @internal
       * @return {String} "" or "maybe" or "probably"
       */
      getVideoH264: function getVideoH264() {
        if (!qx.bom.client.Html.getVideo()) {
          return "";
        }
        var v = document.createElement("video");
        return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
      },
      /**
       * Whether the client supports webm video.
       *
       * @internal
       * @return {String} "" or "maybe" or "probably"
       */
      getVideoWebm: function getVideoWebm() {
        if (!qx.bom.client.Html.getVideo()) {
          return "";
        }
        var v = document.createElement("video");
        return v.canPlayType('video/webm; codecs="vp8, vorbis"');
      },
      /**
       * Whether the client supports local storage.
       *
       * @internal
       * @return {Boolean} <code>true</code> if local storage is supported
       */
      getLocalStorage: function getLocalStorage() {
        try {
          // write once to make sure to catch safari's private mode [BUG #7718]
          window.localStorage.setItem("$qx_check", "test");
          window.localStorage.removeItem("$qx_check");
          return true;
        } catch (exc) {
          // Firefox Bug: localStorage doesn't work in file:/// documents
          // see https://bugzilla.mozilla.org/show_bug.cgi?id=507361
          return false;
        }
      },
      /**
       * Whether the client supports session storage.
       *
       * @internal
       * @return {Boolean} <code>true</code> if session storage is supported
       */
      getSessionStorage: function getSessionStorage() {
        try {
          // write once to make sure to catch safari's private mode [BUG #7718]
          window.sessionStorage.setItem("$qx_check", "test");
          window.sessionStorage.removeItem("$qx_check");
          return true;
        } catch (exc) {
          // Firefox Bug: Local execution of window.sessionStorage throws error
          // see https://bugzilla.mozilla.org/show_bug.cgi?id=357323
          return false;
        }
      },
      /**
       * Whether the client supports user data to persist data. This is only
       * relevant for IE < 8.
       *
       * @internal
       * @return {Boolean} <code>true</code> if the user data is supported.
       */
      getUserDataStorage: function getUserDataStorage() {
        var el = document.createElement("div");
        el.style["display"] = "none";
        document.getElementsByTagName("head")[0].appendChild(el);
        var supported = false;
        try {
          el.addBehavior("#default#userdata");
          el.load("qxtest");
          supported = true;
        } catch (e) {}
        document.getElementsByTagName("head")[0].removeChild(el);
        return supported;
      },
      /**
       * Whether the browser supports CSS class lists.
       * https://developer.mozilla.org/en-US/docs/DOM/element.classList
       *
       * @internal
       * @return {Boolean} <code>true</code> if class list is supported.
       */
      getClassList: function getClassList() {
        return !!(document.documentElement.classList && qx.Bootstrap.getClass(document.documentElement.classList) === "DOMTokenList");
      },
      /**
       * Checks if XPath could be used.
       *
       * @internal
       * @return {Boolean} <code>true</code> if xpath is supported.
       */
      getXPath: function getXPath() {
        return !!document.evaluate;
      },
      /**
       * Checks if XUL could be used.
       *
       * @internal
       * @return {Boolean} <code>true</code> if XUL is supported.
       */
      getXul: function getXul() {
        try {
          document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul", "label");
          return true;
        } catch (e) {
          return false;
        }
      },
      /**
       * Checks if SVG could be used
       *
       * @internal
       * @return {Boolean} <code>true</code> if SVG is supported.
       */
      getSvg: function getSvg() {
        return document.implementation && document.implementation.hasFeature && (document.implementation.hasFeature("org.w3c.dom.svg", "1.0") || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
      },
      /**
       * Checks if VML is supported
       *
       * @internal
       * @return {Boolean} <code>true</code> if VML is supported.
       */
      getVml: function getVml() {
        var el = document.createElement("div");
        document.body.appendChild(el);
        el.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
        el.firstChild.style.behavior = "url(#default#VML)";
        var hasVml = _typeof(el.firstChild.adj) == "object";
        document.body.removeChild(el);
        return hasVml;
      },
      /**
       * Checks if canvas could be used
       *
       * @internal
       * @return {Boolean} <code>true</code> if canvas is supported.
       */
      getCanvas: function getCanvas() {
        return !!window.CanvasRenderingContext2D;
      },
      /**
       * Asynchronous check for using data urls.
       *
       * @internal
       * @param callback {Function} The function which should be executed as
       *   soon as the check is done.
       *
       * @ignore(Image)
       */
      getDataUrl: function getDataUrl(callback) {
        var data = new Image();
        data.onload = data.onerror = function () {
          // wrap that into a timeout because IE might execute it synchronously
          window.setTimeout(function () {
            callback.call(null, data.width == 1 && data.height == 1);
          }, 0);
        };
        data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      },
      /**
       * Checks if dataset could be used
       *
       * @internal
       * @return {Boolean} <code>true</code> if dataset is supported.
       */
      getDataset: function getDataset() {
        return !!document.documentElement.dataset;
      },
      /**
       * Check for element.contains
       *
       * @internal
       * @return {Boolean} <code>true</code> if element.contains is supported
       */
      getContains: function getContains() {
        // "object" in IE6/7/8, "function" in IE9
        return typeof document.documentElement.contains !== "undefined";
      },
      /**
       * Check for element.compareDocumentPosition
       *
       * @internal
       * @return {Boolean} <code>true</code> if element.compareDocumentPosition is supported
       */
      getCompareDocumentPosition: function getCompareDocumentPosition() {
        return typeof document.documentElement.compareDocumentPosition === "function";
      },
      /**
       * Check for element.textContent. Legacy IEs do not support this, use
       * innerText instead.
       *
       * @internal
       * @return {Boolean} <code>true</code> if textContent is supported
       */
      getTextContent: function getTextContent() {
        var el = document.createElement("span");
        return typeof el.textContent !== "undefined";
      },
      /**
       * Whether the client supports the fullscreen API.
       *
       * @internal
       * @return {Boolean} <code>true</code> if fullscreen is supported
       */
      getFullScreen: function getFullScreen() {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || false;
      },
      /**
       * Check for a console object.
       *
       * @internal
       * @return {Boolean} <code>true</code> if a console is available.
       */
      getConsole: function getConsole() {
        return typeof window.console !== "undefined";
      },
      /**
       * Check for the <code>naturalHeight</code> and <code>naturalWidth</code>
       * image element attributes.
       *
       * @internal
       * @return {Boolean} <code>true</code> if both attributes are supported
       */
      getNaturalDimensions: function getNaturalDimensions() {
        var img = document.createElement("img");
        return typeof img.naturalHeight === "number" && typeof img.naturalWidth === "number";
      },
      /**
       * Check for HTML5 history manipulation support.
       * @internal
       * @return {Boolean} <code>true</code> if the HTML5 history API is supported
       */
      getHistoryState: function getHistoryState() {
        return typeof window.onpopstate !== "undefined" && typeof window.history.replaceState !== "undefined" && typeof window.history.pushState !== "undefined";
      },
      /**
       * Returns the name of the native object/function used to access the
       * document's text selection.
       *
       * @return {String|null} <code>getSelection</code> if the standard window.getSelection
       * function is available; <code>selection</code> if the MS-proprietary
       * document.selection object is available; <code>null</code> if no known
       * text selection API is available.
       */
      getSelection: function getSelection() {
        if (typeof window.getSelection === "function") {
          return "getSelection";
        }
        if (_typeof(document.selection) === "object") {
          return "selection";
        }
        return null;
      },
      /**
       * Check for the isEqualNode DOM method.
       *
       * @return {Boolean} <code>true</code> if isEqualNode is supported by DOM nodes
       */
      getIsEqualNode: function getIsEqualNode() {
        return typeof document.documentElement.isEqualNode === "function";
      }
    },
    defer: function defer(statics) {
      qx.core.Environment.add("html.webworker", statics.getWebWorker);
      qx.core.Environment.add("html.filereader", statics.getFileReader);
      qx.core.Environment.add("html.geolocation", statics.getGeoLocation);
      qx.core.Environment.add("html.audio", statics.getAudio);
      qx.core.Environment.add("html.audio.ogg", statics.getAudioOgg);
      qx.core.Environment.add("html.audio.mp3", statics.getAudioMp3);
      qx.core.Environment.add("html.audio.wav", statics.getAudioWav);
      qx.core.Environment.add("html.audio.au", statics.getAudioAu);
      qx.core.Environment.add("html.audio.aif", statics.getAudioAif);
      qx.core.Environment.add("html.video", statics.getVideo);
      qx.core.Environment.add("html.video.ogg", statics.getVideoOgg);
      qx.core.Environment.add("html.video.h264", statics.getVideoH264);
      qx.core.Environment.add("html.video.webm", statics.getVideoWebm);
      qx.core.Environment.add("html.storage.local", statics.getLocalStorage);
      qx.core.Environment.add("html.storage.session", statics.getSessionStorage);
      qx.core.Environment.add("html.storage.userdata", statics.getUserDataStorage);
      qx.core.Environment.add("html.classlist", statics.getClassList);
      qx.core.Environment.add("html.xpath", statics.getXPath);
      qx.core.Environment.add("html.xul", statics.getXul);
      qx.core.Environment.add("html.canvas", statics.getCanvas);
      qx.core.Environment.add("html.svg", statics.getSvg);
      qx.core.Environment.add("html.vml", statics.getVml);
      qx.core.Environment.add("html.dataset", statics.getDataset);
      qx.core.Environment.addAsync("html.dataurl", statics.getDataUrl);
      qx.core.Environment.add("html.element.contains", statics.getContains);
      qx.core.Environment.add("html.element.compareDocumentPosition", statics.getCompareDocumentPosition);
      qx.core.Environment.add("html.element.textcontent", statics.getTextContent);
      qx.core.Environment.add("html.console", statics.getConsole);
      qx.core.Environment.add("html.image.naturaldimensions", statics.getNaturalDimensions);
      qx.core.Environment.add("html.history.state", statics.getHistoryState);
      qx.core.Environment.add("html.selection", statics.getSelection);
      qx.core.Environment.add("html.node.isequalnode", statics.getIsEqualNode);
      qx.core.Environment.add("html.fullscreen", statics.getFullScreen);
    }
  });
  qx.bom.client.Html.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.log.appender.Formatter": {
        "require": true,
        "defer": "runtime"
      },
      "qx.bom.client.Html": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.log.Logger": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "html.console": {
          "className": "qx.bom.client.Html"
        }
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
   * Processes the incoming log entry and displays it by means of the native
   * logging capabilities of the client.
   *
   * Supported browsers:
   * * Firefox <4 using FireBug (if available).
   * * Firefox >=4 using the Web Console.
   * * WebKit browsers using the Web Inspector/Developer Tools.
   * * Internet Explorer 8+ using the F12 Developer Tools.
   * * Opera >=10.60 using either the Error Console or Dragonfly
   *
   * Currently unsupported browsers:
   * * Opera <10.60
   *
   * @require(qx.log.appender.Formatter)
   * @require(qx.bom.client.Html)
   */
  qx.Bootstrap.define("qx.log.appender.Native", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Processes a single log entry
       *
       * @param entry {Map} The entry to process
       */
      process: function process(entry) {
        if (qx.core.Environment.get("html.console")) {
          // Firefox 4's Web Console doesn't support "debug"
          var level = console[entry.level] ? entry.level : "log";
          if (console[level]) {
            var formatter = qx.log.appender.Formatter.getFormatter();
            var args = formatter.toText(entry);
            console[level](args);
          }
        }
      }
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.log.Logger.register(statics);
    }
  });
  qx.log.appender.Native.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.UserAction": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
        "usage": "dynamic",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.event.IEventHandler": {
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "construct": true,
        "defer": "load",
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      },
      "qx.event.type.KeyInput": {},
      "qx.event.Utils": {},
      "qx.event.type.Data": {},
      "qx.event.type.KeySequence": {},
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.event.util.Keyboard": {},
      "qx.event.handler.Focus": {},
      "qx.lang.Function": {},
      "qx.bom.Event": {},
      "qx.event.GlobalError": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.ObjectRegistry": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "construct": true,
          "className": "qx.bom.client.Engine",
          "load": true,
          "defer": true
        },
        "browser.version": {
          "className": "qx.bom.client.Browser",
          "load": true
        },
        "engine.version": {
          "className": "qx.bom.client.Engine"
        }
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
       * Andreas Ecker (ecker)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * This class provides unified key event handler for Internet Explorer,
   * Firefox, Opera and Safari.
   *
   * NOTE: Instances of this class must be disposed of after use
   *
   * @require(qx.event.handler.UserAction)
   */
  qx.Class.define("qx.event.handler.Keyboard", {
    extend: qx.core.Object,
    implement: [qx.event.IEventHandler, qx.core.IDisposable],
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      qx.core.Object.constructor.call(this);

      // Define shorthands
      this.__manager__P_20_0 = manager;
      this.__window__P_20_1 = manager.getWindow();

      // Gecko ignores key events when not explicitly clicked in the document.
      if (qx.core.Environment.get("engine.name") == "gecko") {
        this.__root__P_20_2 = this.__window__P_20_1;
      } else {
        this.__root__P_20_2 = this.__window__P_20_1.document.documentElement;
      }

      // Internal sequence cache
      this.__lastUpDownType__P_20_3 = {};

      // Initialize observer
      this._initKeyObserver();
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {Integer} Priority of this handler */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL,
      /** @type {Map} Supported event types */
      SUPPORTED_TYPES: {
        keyup: 1,
        keydown: 1,
        keypress: 1,
        keyinput: 1
      },
      /** @type {Integer} Which target check to use */
      TARGET_CHECK: qx.event.IEventHandler.TARGET_DOMNODE,
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __onKeyUpDownWrapper__P_20_4: null,
      __manager__P_20_0: null,
      __window__P_20_1: null,
      __root__P_20_2: null,
      __lastUpDownType__P_20_3: null,
      __lastKeyCode__P_20_5: null,
      __inputListeners__P_20_6: null,
      __onKeyPressWrapper__P_20_7: null,
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER INTERFACE
      ---------------------------------------------------------------------------
      */
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {},
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      /*
      ---------------------------------------------------------------------------
        HELPER
      ---------------------------------------------------------------------------
      */
      /**
       * Fire a key input event with the given parameters
       *
       * @param domEvent {Event} DOM event
       * @param charCode {Integer} character code
       * @return {qx.Promise?} a promise if the event handlers created one
       */
      _fireInputEvent: function _fireInputEvent(domEvent, charCode) {
        var target = this.__getEventTarget__P_20_8();
        var tracker = {};
        var self = this;

        // Only fire when target is defined and visible
        if (target && target.offsetWidth != 0) {
          var event = qx.event.Registration.createEvent("keyinput", qx.event.type.KeyInput, [domEvent, target, charCode]);
          qx.event.Utils.then(tracker, function () {
            self.__manager__P_20_0.dispatchEvent(target, event);
          });
        }

        // Fire user action event
        // Needs to check if still alive first
        if (this.__window__P_20_1) {
          var self = this;
          qx.event.Utils.then(tracker, function () {
            return qx.event.Registration.fireEvent(self.__window__P_20_1, "useraction", qx.event.type.Data, ["keyinput"]);
          });
        }
        return tracker.promise;
      },
      /**
       * Fire a key up/down/press event with the given parameters
       *
       * @param domEvent {Event} DOM event
       * @param type {String} type og the event
       * @param keyIdentifier {String} key identifier
       * @return {qx.Promise?} a promise, if any of the event handlers returned a promise
       */
      _fireSequenceEvent: function _fireSequenceEvent(domEvent, type, keyIdentifier) {
        var target = this.__getEventTarget__P_20_8();
        var keyCode = domEvent.keyCode;
        var tracker = {};
        var self = this;

        // Fire key event
        var event = qx.event.Registration.createEvent(type, qx.event.type.KeySequence, [domEvent, target, keyIdentifier]);
        qx.event.Utils.then(tracker, function () {
          return self.__manager__P_20_0.dispatchEvent(target, event);
        });

        // IE and Safari suppress a "keypress" event if the "keydown" event's
        // default action was prevented. In this case we emulate the "keypress"
        //
        // FireFox suppresses "keypress" when "keydown" default action is prevented.
        // from version 29: https://bugzilla.mozilla.org/show_bug.cgi?id=935876.
        if (event.getDefaultPrevented() && type == "keydown") {
          if (qx.core.Environment.get("engine.name") == "mshtml" || qx.core.Environment.get("engine.name") == "webkit" || qx.core.Environment.get("engine.name") == "gecko" && qx.core.Environment.get("browser.version") >= 29) {
            // some key press events are already emulated. Ignore these events.
            if (!qx.event.util.Keyboard.isNonPrintableKeyCode(keyCode) && !this._emulateKeyPress[keyCode]) {
              qx.event.Utils.then(tracker, function () {
                return self._fireSequenceEvent(domEvent, "keypress", keyIdentifier);
              });
            }
          }
        }

        // Fire user action event
        // Needs to check if still alive first
        if (this.__window__P_20_1) {
          qx.event.Utils.then(tracker, function () {
            return qx.event.Registration.fireEvent(self.__window__P_20_1, "useraction", qx.event.type.Data, [type]);
          });
        }
        return tracker.promise;
      },
      /**
       * Get the target element for key events
       *
       * @return {Element} the event target element
       */
      __getEventTarget__P_20_8: function __getEventTarget__P_20_8() {
        var focusHandler = this.__manager__P_20_0.getHandler(qx.event.handler.Focus);
        var target = focusHandler.getActive();

        // Fallback to focused element when active is null or invisible
        if (!target || target.offsetWidth == 0) {
          target = focusHandler.getFocus();
        }

        // Fallback to body when focused is null or invisible
        if (!target || target.offsetWidth == 0) {
          target = this.__manager__P_20_0.getWindow().document.body;
        }
        return target;
      },
      /*
      ---------------------------------------------------------------------------
        OBSERVER INIT/STOP
      ---------------------------------------------------------------------------
      */
      /**
       * Initializes the native key event listeners.
       *
       * @signature function()
       */
      _initKeyObserver: function _initKeyObserver() {
        this.__onKeyUpDownWrapper__P_20_4 = qx.lang.Function.listener(this.__onKeyUpDown__P_20_9, this);
        this.__onKeyPressWrapper__P_20_7 = qx.lang.Function.listener(this.__onKeyPress__P_20_10, this);
        var Event = qx.bom.Event;
        Event.addNativeListener(this.__root__P_20_2, "keyup", this.__onKeyUpDownWrapper__P_20_4);
        Event.addNativeListener(this.__root__P_20_2, "keydown", this.__onKeyUpDownWrapper__P_20_4);
        Event.addNativeListener(this.__root__P_20_2, "keypress", this.__onKeyPressWrapper__P_20_7);
      },
      /**
       * Stops the native key event listeners.
       *
       * @signature function()
       */
      _stopKeyObserver: function _stopKeyObserver() {
        var Event = qx.bom.Event;
        Event.removeNativeListener(this.__root__P_20_2, "keyup", this.__onKeyUpDownWrapper__P_20_4);
        Event.removeNativeListener(this.__root__P_20_2, "keydown", this.__onKeyUpDownWrapper__P_20_4);
        Event.removeNativeListener(this.__root__P_20_2, "keypress", this.__onKeyPressWrapper__P_20_7);
        for (var key in this.__inputListeners__P_20_6 || {}) {
          var listener = this.__inputListeners__P_20_6[key];
          Event.removeNativeListener(listener.target, "keypress", listener.callback);
        }
        delete this.__inputListeners__P_20_6;
      },
      /*
      ---------------------------------------------------------------------------
        NATIVE EVENT OBSERVERS
      ---------------------------------------------------------------------------
      */

      /**
       * Low level handler for "keyup" and "keydown" events
       *
       * @internal
       * @signature function(domEvent)
       * @param domEvent {Event} DOM event object
       */
      __onKeyUpDown__P_20_9: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        "gecko|webkit|mshtml": function geckoWebkitMshtml(domEvent) {
          var keyCode = 0;
          var charCode = 0;
          var type = domEvent.type;
          keyCode = domEvent.keyCode;
          var tracker = {};
          var self = this;
          qx.event.Utils.track(tracker, this._idealKeyHandler(keyCode, charCode, type, domEvent));

          // On non print-able character be sure to add a keypress event
          if (type == "keydown") {
            /*
             * We need an artificial keypress event for every keydown event.
             * Newer browsers do not fire keypress for a regular charachter key (e.g when typing 'a')
             * if it was typed with the CTRL, ALT or META Key pressed during typing, like
             * doing it when typing the combination CTRL+A
             */
            var isModifierDown = domEvent.ctrlKey || domEvent.altKey || domEvent.metaKey;

            // non-printable, backspace, tab or the modfier keys are down
            if (qx.event.util.Keyboard.isNonPrintableKeyCode(keyCode) || this._emulateKeyPress[keyCode] || isModifierDown) {
              qx.event.Utils.then(tracker, function () {
                return self._idealKeyHandler(keyCode, charCode, "keypress", domEvent);
              });
            }
          }

          // Store last type
          this.__lastUpDownType__P_20_3[keyCode] = type;
          return tracker.promise;
        },
        opera: function opera(domEvent) {
          this.__lastKeyCode__P_20_5 = domEvent.keyCode;
          return this._idealKeyHandler(domEvent.keyCode, 0, domEvent.type, domEvent);
        }
      })),
      /**
       * some keys like "up", "down", "pageup", "pagedown" do not bubble a
       * "keypress" event in Firefox. To work around this bug we attach keypress
       * listeners directly to the input events.
       *
       * https://bugzilla.mozilla.org/show_bug.cgi?id=467513
       *
       * @signature function(target, type, keyCode)
       * @param target {Element} The event target
       * @param type {String} The event type
       * @param keyCode {Integer} the key code
       */
      __firefoxInputFix__P_20_11: qx.core.Environment.select("engine.name", {
        gecko: function gecko(target, type, keyCode) {
          if (type === "keydown" && (keyCode == 33 || keyCode == 34 || keyCode == 38 || keyCode == 40) && target.type == "text" && target.tagName.toLowerCase() === "input" && target.getAttribute("autoComplete") !== "off") {
            if (!this.__inputListeners__P_20_6) {
              this.__inputListeners__P_20_6 = {};
            }
            var hash = qx.core.ObjectRegistry.toHashCode(target);
            if (this.__inputListeners__P_20_6[hash]) {
              return;
            }
            var self = this;
            this.__inputListeners__P_20_6[hash] = {
              target: target,
              callback: function callback(domEvent) {
                qx.bom.Event.stopPropagation(domEvent);
                self.__onKeyPress__P_20_10(domEvent);
              }
            };
            var listener = qx.event.GlobalError.observeMethod(this.__inputListeners__P_20_6[hash].callback);
            qx.bom.Event.addNativeListener(target, "keypress", listener);
          }
        },
        "default": null
      }),
      /**
       * Low level key press handler
       *
       * @signature function(domEvent)
       * @param domEvent {Event} DOM event object
       */
      __onKeyPress__P_20_10: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(domEvent) {
          domEvent = window.event || domEvent;
          if (this._charCode2KeyCode[domEvent.keyCode]) {
            return this._idealKeyHandler(this._charCode2KeyCode[domEvent.keyCode], 0, domEvent.type, domEvent);
          } else {
            return this._idealKeyHandler(0, domEvent.keyCode, domEvent.type, domEvent);
          }
        },
        gecko: function gecko(domEvent) {
          if (qx.core.Environment.get("engine.version") < 66) {
            var charCode = domEvent.charCode;
            var type = domEvent.type;
            return this._idealKeyHandler(domEvent.keyCode, charCode, type, domEvent);
          } else {
            if (this._charCode2KeyCode[domEvent.keyCode]) {
              return this._idealKeyHandler(this._charCode2KeyCode[domEvent.keyCode], 0, domEvent.type, domEvent);
            } else {
              return this._idealKeyHandler(0, domEvent.keyCode, domEvent.type, domEvent);
            }
          }
        },
        webkit: function webkit(domEvent) {
          if (this._charCode2KeyCode[domEvent.keyCode]) {
            return this._idealKeyHandler(this._charCode2KeyCode[domEvent.keyCode], 0, domEvent.type, domEvent);
          } else {
            return this._idealKeyHandler(0, domEvent.keyCode, domEvent.type, domEvent);
          }
        },
        opera: function opera(domEvent) {
          var keyCode = domEvent.keyCode;
          var type = domEvent.type;

          // Some keys are identified differently for key up/down and keypress
          // (e.g. "v" gets identified as "F7").
          // So we store the last key up/down keycode and compare it to the
          // current keycode.
          // See http://bugzilla.qooxdoo.org/show_bug.cgi?id=603
          if (keyCode != this.__lastKeyCode__P_20_5) {
            return this._idealKeyHandler(0, this.__lastKeyCode__P_20_5, type, domEvent);
          } else {
            if (qx.event.util.Keyboard.keyCodeToIdentifierMap[domEvent.keyCode]) {
              return this._idealKeyHandler(domEvent.keyCode, 0, domEvent.type, domEvent);
            } else {
              return this._idealKeyHandler(0, domEvent.keyCode, domEvent.type, domEvent);
            }
          }
        }
      })),
      /*
      ---------------------------------------------------------------------------
        IDEAL KEY HANDLER
      ---------------------------------------------------------------------------
      */
      /**
       * Key handler for an idealized browser.
       * Runs after the browser specific key handlers have normalized the key events.
       *
       * @param keyCode {String} keyboard code
       * @param charCode {String} character code
       * @param eventType {String} type of the event (keydown, keypress, keyup)
       * @param domEvent {Element} DomEvent
       * @return {qx.Promise?} a promise, if an event handler created one
       */
      _idealKeyHandler: function _idealKeyHandler(keyCode, charCode, eventType, domEvent) {
        var keyIdentifier;

        // Use: keyCode
        if (keyCode || !keyCode && !charCode) {
          keyIdentifier = qx.event.util.Keyboard.keyCodeToIdentifier(keyCode);
          return this._fireSequenceEvent(domEvent, eventType, keyIdentifier);
        }

        // Use: charCode
        else {
          keyIdentifier = qx.event.util.Keyboard.charCodeToIdentifier(charCode);
          var tracker = {};
          var self = this;
          qx.event.Utils.track(tracker, this._fireSequenceEvent(domEvent, "keypress", keyIdentifier));
          return qx.event.Utils.then(tracker, function () {
            return self._fireInputEvent(domEvent, charCode);
          });
        }
      },
      /*
      ---------------------------------------------------------------------------
        KEY MAPS
      ---------------------------------------------------------------------------
      */

      /**
       * @type {Map} maps the charcodes of special keys for key press emulation
       *
       * @lint ignoreReferenceField(_emulateKeyPress)
       */
      _emulateKeyPress: qx.core.Environment.select("engine.name", {
        mshtml: {
          8: true,
          9: true
        },
        webkit: {
          8: true,
          9: true,
          27: true
        },
        gecko: qx.core.Environment.get("browser.version") >= 65 ? {
          8: true,
          9: true,
          27: true
        } : {},
        "default": {}
      }),
      /*
      ---------------------------------------------------------------------------
        HELPER METHODS
      ---------------------------------------------------------------------------
      */
      /**
       * converts a key identifier back to a keycode
       *
       * @param keyIdentifier {String} The key identifier to convert
       * @return {Integer} keyboard code
       */
      _identifierToKeyCode: function _identifierToKeyCode(keyIdentifier) {
        return qx.event.util.Keyboard.identifierToKeyCodeMap[keyIdentifier] || keyIdentifier.charCodeAt(0);
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._stopKeyObserver();
      this.__lastKeyCode__P_20_5 = this.__manager__P_20_0 = this.__window__P_20_1 = this.__root__P_20_2 = this.__lastUpDownType__P_20_3 = null;
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics, members) {
      // register at the event handler
      qx.event.Registration.addHandler(statics);
      if (qx.core.Environment.get("engine.name") !== "opera") {
        members._charCode2KeyCode = {
          13: 13,
          27: 27
        };
      }
    }
  });
  qx.event.handler.Keyboard.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "usage": "dynamic",
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.bom.client.Device": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.client.Event": {
        "require": true
      },
      "qx.bom.Event": {},
      "qx.bom.AnimationFrame": {},
      "qx.lang.Function": {},
      "qx.event.type.dom.Custom": {},
      "qx.util.Wheel": {},
      "qx.bom.client.OperatingSystem": {
        "require": true
      },
      "qx.event.Timer": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "device.touch": {
          "load": true,
          "className": "qx.bom.client.Device"
        },
        "engine.name": {
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "className": "qx.bom.client.Browser"
        },
        "event.mousewheel": {
          "className": "qx.bom.client.Event"
        },
        "event.dispatchevent": {
          "className": "qx.bom.client.Event"
        },
        "os.name": {
          "className": "qx.bom.client.OperatingSystem"
        },
        "os.version": {
          "className": "qx.bom.client.OperatingSystem"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christopher Zuendorf (czuendorf)
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /**
   * Listens for (native or synthetic) pointer events and fires events
   * for gestures like "tap" or "swipe"
   */
  qx.Bootstrap.define("qx.event.handler.GestureCore", {
    extend: Object,
    implement: [qx.core.IDisposable],
    statics: {
      TYPES: ["tap", "swipe", "longtap", "dbltap", "track", "trackstart", "trackend", "rotate", "pinch", "roll"],
      GESTURE_EVENTS: ["gesturebegin", "gesturefinish", "gesturemove", "gesturecancel"],
      /** @type {Map} Maximum distance between a pointer-down and pointer-up event, values are configurable */
      TAP_MAX_DISTANCE: {
        touch: 40,
        mouse: 5,
        pen: 20
      },
      // values are educated guesses

      /** @type {Map} Maximum distance between two subsequent taps, values are configurable */
      DOUBLETAP_MAX_DISTANCE: {
        touch: 10,
        mouse: 4,
        pen: 10
      },
      // values are educated guesses

      /** @type {Map} The direction of a swipe relative to the axis */
      SWIPE_DIRECTION: {
        x: ["left", "right"],
        y: ["up", "down"]
      },
      /**
       * @type {Integer} The time delta in milliseconds to fire a long tap event.
       */
      LONGTAP_TIME: qx.core.Environment.get("device.touch") ? 500 : 99999,
      /**
       * @type {Integer} Maximum time between two tap events that will still trigger a
       * dbltap event.
       */
      DOUBLETAP_TIME: 500,
      /**
       * @type {Integer} Factor which is used for adapting the delta of the mouse wheel
       * event to the roll events,
       */
      ROLL_FACTOR: 18,
      /**
       * @type {Integer} Factor which is used for adapting the delta of the touchpad gesture
       * event to the roll events,
       */
      TOUCHPAD_ROLL_FACTOR: 1,
      /**
       * @type {Integer} Minimum number of wheel events to receive during the
       * TOUCHPAD_WHEEL_EVENTS_PERIOD to detect a touchpad.
       */
      TOUCHPAD_WHEEL_EVENTS_THRESHOLD: 10,
      /**
       * @type {Integer} Period (in ms) during which the wheel events are counted in order
       * to detect a touchpad.
       */
      TOUCHPAD_WHEEL_EVENTS_PERIOD: 100,
      /**
       * @type {Integer} Timeout (in ms) after which the touchpad detection is reset if no wheel
       * events are received in the meantime.
       */
      TOUCHPAD_WHEEL_EVENTS_TIMEOUT: 5000
    },
    /**
     * @param target {Element} DOM Element that should fire gesture events
     * @param emitter {qx.event.Emitter?} Event emitter (used if dispatchEvent
     * is not supported, e.g. in IE8)
     */
    construct: function construct(target, emitter) {
      this.__defaultTarget__P_57_0 = target;
      this.__emitter__P_57_1 = emitter;
      this.__gesture__P_57_2 = {};
      this.__lastTap__P_57_3 = {};
      this.__stopMomentum__P_57_4 = {};
      this.__momentum__P_57_5 = {};
      this.__rollEvents__P_57_6 = [];
      this._initObserver();
    },
    members: {
      __defaultTarget__P_57_0: null,
      __emitter__P_57_1: null,
      __gesture__P_57_2: null,
      __eventName__P_57_7: null,
      __primaryTarget__P_57_8: null,
      __isMultiPointerGesture__P_57_9: null,
      __initialAngle__P_57_10: null,
      __lastTap__P_57_3: null,
      __rollImpulseId__P_57_11: null,
      __stopMomentum__P_57_4: null,
      __initialDistance__P_57_12: null,
      __momentum__P_57_5: null,
      __rollEvents__P_57_6: null,
      __rollEventsCountStart__P_57_13: 0,
      __rollEventsCount__P_57_14: 0,
      __touchPadDetectionPerformed__P_57_15: false,
      __lastRollEventTime__P_57_16: 0,
      /**
       * Register pointer event listeners
       */
      _initObserver: function _initObserver() {
        qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function (gestureType) {
          qxWeb(this.__defaultTarget__P_57_0).on(gestureType, this.checkAndFireGesture, this);
        }.bind(this));
        if (qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9) {
          qxWeb(this.__defaultTarget__P_57_0).on("dblclick", this._onDblClick, this);
        }

        // list to wheel events
        var data = qx.core.Environment.get("event.mousewheel");
        qxWeb(data.target).on(data.type, this._fireRoll, this);
      },
      /**
       * Remove native pointer event listeners.
       */
      _stopObserver: function _stopObserver() {
        qx.event.handler.GestureCore.GESTURE_EVENTS.forEach(function (pointerType) {
          qxWeb(this.__defaultTarget__P_57_0).off(pointerType, this.checkAndFireGesture, this);
        }.bind(this));
        if (qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9) {
          qxWeb(this.__defaultTarget__P_57_0).off("dblclick", this._onDblClick, this);
        }
        var data = qx.core.Environment.get("event.mousewheel");
        qxWeb(data.target).off(data.type, this._fireRoll, this);
      },
      /**
       * Checks if a gesture was made and fires the gesture event.
       *
       * @param domEvent {qx.event.type.Pointer} DOM event
       * @param type {String ? null} type of the event
       * @param target {Element ? null} event target
       */
      checkAndFireGesture: function checkAndFireGesture(domEvent, type, target) {
        if (!type) {
          type = domEvent.type;
        }
        if (!target) {
          target = qx.bom.Event.getTarget(domEvent);
        }
        if (type == "gesturebegin") {
          this.gestureBegin(domEvent, target);
        } else if (type == "gesturemove") {
          this.gestureMove(domEvent, target);
        } else if (type == "gesturefinish") {
          this.gestureFinish(domEvent, target);
        } else if (type == "gesturecancel") {
          this.gestureCancel(domEvent.pointerId);
        }
      },
      /**
       * Helper method for gesture start.
       *
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       */
      gestureBegin: function gestureBegin(domEvent, target) {
        if (this.__gesture__P_57_2[domEvent.pointerId]) {
          this.__stopLongTapTimer__P_57_17(this.__gesture__P_57_2[domEvent.pointerId]);
          delete this.__gesture__P_57_2[domEvent.pointerId];
        }

        /*
          If the dom event's target or one of its ancestors have
          a gesture handler, we don't need to fire the gesture again
          since it bubbles.
         */
        if (this._hasIntermediaryHandler(target)) {
          return;
        }
        this.__gesture__P_57_2[domEvent.pointerId] = {
          startTime: new Date().getTime(),
          lastEventTime: new Date().getTime(),
          startX: domEvent.clientX,
          startY: domEvent.clientY,
          clientX: domEvent.clientX,
          clientY: domEvent.clientY,
          velocityX: 0,
          velocityY: 0,
          target: target,
          isTap: true,
          isPrimary: domEvent.isPrimary,
          longTapTimer: window.setTimeout(this.__fireLongTap__P_57_18.bind(this, domEvent, target), qx.event.handler.GestureCore.LONGTAP_TIME)
        };
        if (domEvent.isPrimary) {
          this.__isMultiPointerGesture__P_57_9 = false;
          this.__primaryTarget__P_57_8 = target;
          this.__fireTrack__P_57_19("trackstart", domEvent, target);
        } else {
          this.__isMultiPointerGesture__P_57_9 = true;
          if (Object.keys(this.__gesture__P_57_2).length === 2) {
            this.__initialAngle__P_57_10 = this._calcAngle();
            this.__initialDistance__P_57_12 = this._calcDistance();
          }
        }
      },
      /**
       * Helper method for gesture move.
       *
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       */
      gestureMove: function gestureMove(domEvent, target) {
        var gesture = this.__gesture__P_57_2[domEvent.pointerId];
        if (gesture) {
          var oldClientX = gesture.clientX;
          var oldClientY = gesture.clientY;
          gesture.clientX = domEvent.clientX;
          gesture.clientY = domEvent.clientY;
          gesture.lastEventTime = new Date().getTime();
          if (oldClientX) {
            gesture.velocityX = gesture.clientX - oldClientX;
          }
          if (oldClientY) {
            gesture.velocityY = gesture.clientY - oldClientY;
          }
          if (Object.keys(this.__gesture__P_57_2).length === 2) {
            this.__fireRotate__P_57_20(domEvent, gesture.target);
            this.__firePinch__P_57_21(domEvent, gesture.target);
          }
          if (!this.__isMultiPointerGesture__P_57_9) {
            this.__fireTrack__P_57_19("track", domEvent, gesture.target);
            this._fireRoll(domEvent, "touch", gesture.target);
          }

          // abort long tap timer if the distance is too big
          if (gesture.isTap) {
            gesture.isTap = this._isBelowTapMaxDistance(domEvent);
            if (!gesture.isTap) {
              this.__stopLongTapTimer__P_57_17(gesture);
            }
          }
        }
      },
      /**
       * Checks if a DOM element located between the target of a gesture
       * event and the element this handler is attached to has a gesture
       * handler of its own.
       *
       * @param target {Element} The gesture event's target
       * @return {Boolean}
       */
      _hasIntermediaryHandler: function _hasIntermediaryHandler(target) {
        while (target && target !== this.__defaultTarget__P_57_0) {
          if (target.$$gestureHandler) {
            return true;
          }
          target = target.parentNode;
        }
        return false;
      },
      /**
       * Helper method for gesture end.
       *
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       */
      gestureFinish: function gestureFinish(domEvent, target) {
        // If no start position is available for this pointerup event, cancel gesture recognition.
        if (!this.__gesture__P_57_2[domEvent.pointerId]) {
          return;
        }
        var gesture = this.__gesture__P_57_2[domEvent.pointerId];
        // delete the long tap
        this.__stopLongTapTimer__P_57_17(gesture);

        /*
          If the dom event's target or one of its ancestors have
          a gesture handler, we don't need to fire the gesture again
          since it bubbles.
         */
        if (this._hasIntermediaryHandler(target)) {
          return;
        }

        // always start the roll impulse on the original target
        this.__handleRollImpulse__P_57_22(gesture.velocityX, gesture.velocityY, domEvent, gesture.target);
        this.__fireTrack__P_57_19("trackend", domEvent, gesture.target);
        if (gesture.isTap) {
          if (target !== gesture.target) {
            delete this.__gesture__P_57_2[domEvent.pointerId];
            return;
          }
          this._fireEvent(domEvent, "tap", domEvent.target || target);
          var isDblTap = false;
          if (Object.keys(this.__lastTap__P_57_3).length > 0) {
            // delete old tap entries
            var limit = Date.now() - qx.event.handler.GestureCore.DOUBLETAP_TIME;
            for (var time in this.__lastTap__P_57_3) {
              if (time < limit) {
                delete this.__lastTap__P_57_3[time];
              } else {
                var lastTap = this.__lastTap__P_57_3[time];
                var isBelowDoubleTapDistance = this.__isBelowDoubleTapDistance__P_57_23(lastTap.x, lastTap.y, domEvent.clientX, domEvent.clientY, domEvent.getPointerType());
                var isSameTarget = lastTap.target === (domEvent.target || target);
                var isSameButton = lastTap.button === domEvent.button;
                if (isBelowDoubleTapDistance && isSameButton && isSameTarget) {
                  isDblTap = true;
                  delete this.__lastTap__P_57_3[time];
                  this._fireEvent(domEvent, "dbltap", domEvent.target || target);
                }
              }
            }
          }
          if (!isDblTap) {
            this.__lastTap__P_57_3[Date.now()] = {
              x: domEvent.clientX,
              y: domEvent.clientY,
              target: domEvent.target || target,
              button: domEvent.button
            };
          }
        } else if (!this._isBelowTapMaxDistance(domEvent)) {
          var swipe = this.__getSwipeGesture__P_57_24(domEvent, target);
          if (swipe) {
            domEvent.swipe = swipe;
            this._fireEvent(domEvent, "swipe", gesture.target || target);
          }
        }
        delete this.__gesture__P_57_2[domEvent.pointerId];
      },
      /**
       * Stops the momentum scrolling currently running.
       *
       * @param id {Integer} The timeoutId of a 'roll' event
       */
      stopMomentum: function stopMomentum(id) {
        this.__stopMomentum__P_57_4[id] = true;
      },
      /**
       * Cancels the gesture if running.
       * @param id {Number} The pointer Id.
       */
      gestureCancel: function gestureCancel(id) {
        if (this.__gesture__P_57_2[id]) {
          this.__stopLongTapTimer__P_57_17(this.__gesture__P_57_2[id]);
          delete this.__gesture__P_57_2[id];
        }
        if (this.__momentum__P_57_5[id]) {
          this.stopMomentum(this.__momentum__P_57_5[id]);
          delete this.__momentum__P_57_5[id];
        }
      },
      /**
       * Update the target of a running gesture. This is used in virtual widgets
       * when the DOM element changes.
       *
       * @param id {String} The pointer id.
       * @param target {Element} The new target element.
       * @internal
       */
      updateGestureTarget: function updateGestureTarget(id, target) {
        this.__gesture__P_57_2[id].target = target;
      },
      /**
       * Method which will be called recursively to provide a momentum scrolling.
       * @param deltaX {Number} The last offset in X direction
       * @param deltaY {Number} The last offset in Y direction
       * @param domEvent {Event} The original gesture event
       * @param target {Element} The target of the momentum roll events
       * @param time {Number ?} The time in ms between the last two calls
       */
      __handleRollImpulse__P_57_22: function __handleRollImpulse__P_57_22(deltaX, deltaY, domEvent, target, time) {
        var oldTimeoutId = domEvent.timeoutId;
        if (!time && this.__momentum__P_57_5[domEvent.pointerId]) {
          // new roll impulse started, stop the old one
          this.stopMomentum(this.__momentum__P_57_5[domEvent.pointerId]);
        }
        // do nothing if we don't need to scroll
        if (Math.abs(deltaY) < 1 && Math.abs(deltaX) < 1 || this.__stopMomentum__P_57_4[oldTimeoutId] || this.getWindow && !this.getWindow()) {
          delete this.__stopMomentum__P_57_4[oldTimeoutId];
          delete this.__momentum__P_57_5[domEvent.pointerId];
          return;
        }
        if (!time) {
          time = 1;
          var startFactor = 2.8;
          deltaY = deltaY / startFactor;
          deltaX = deltaX / startFactor;
        }
        time += 0.0006;
        deltaY = deltaY / time;
        deltaX = deltaX / time;

        // set up a new timer with the new delta
        var timeoutId = qx.bom.AnimationFrame.request(qx.lang.Function.bind(function (deltaX, deltaY, domEvent, target, time) {
          this.__handleRollImpulse__P_57_22(deltaX, deltaY, domEvent, target, time);
        }, this, deltaX, deltaY, domEvent, target, time));
        deltaX = Math.round(deltaX * 100) / 100;
        deltaY = Math.round(deltaY * 100) / 100;

        // scroll the desired new delta
        domEvent.delta = {
          x: -deltaX,
          y: -deltaY
        };
        domEvent.momentum = true;
        domEvent.timeoutId = timeoutId;
        this.__momentum__P_57_5[domEvent.pointerId] = timeoutId;
        this._fireEvent(domEvent, "roll", domEvent.target || target);
      },
      /**
       * Calculates the angle of the primary and secondary pointer.
       * @return {Number} the rotation angle of the 2 pointers.
       */
      _calcAngle: function _calcAngle() {
        var pointerA = null;
        var pointerB = null;
        for (var pointerId in this.__gesture__P_57_2) {
          var gesture = this.__gesture__P_57_2[pointerId];
          if (pointerA === null) {
            pointerA = gesture;
          } else {
            pointerB = gesture;
          }
        }
        var x = pointerA.clientX - pointerB.clientX;
        var y = pointerA.clientY - pointerB.clientY;
        return (360 + Math.atan2(y, x) * (180 / Math.PI)) % 360;
      },
      /**
       * Calculates the scaling distance between two pointers.
       * @return {Number} the calculated distance.
       */
      _calcDistance: function _calcDistance() {
        var pointerA = null;
        var pointerB = null;
        for (var pointerId in this.__gesture__P_57_2) {
          var gesture = this.__gesture__P_57_2[pointerId];
          if (pointerA === null) {
            pointerA = gesture;
          } else {
            pointerB = gesture;
          }
        }
        var scale = Math.sqrt(Math.pow(pointerA.clientX - pointerB.clientX, 2) + Math.pow(pointerA.clientY - pointerB.clientY, 2));
        return scale;
      },
      /**
       * Checks if the distance between the x/y coordinates of DOM event
       * exceeds TAP_MAX_DISTANCE and returns the result.
       *
       * @param domEvent {Event} The DOM event from the browser.
       * @return {Boolean|null} true if distance is below TAP_MAX_DISTANCE.
       */
      _isBelowTapMaxDistance: function _isBelowTapMaxDistance(domEvent) {
        var delta = this._getDeltaCoordinates(domEvent);
        var maxDistance = qx.event.handler.GestureCore.TAP_MAX_DISTANCE[domEvent.getPointerType()];
        if (!delta) {
          return null;
        }
        return Math.abs(delta.x) <= maxDistance && Math.abs(delta.y) <= maxDistance;
      },
      /**
       * Checks if the distance between the x1/y1 and x2/y2 is
       * below the TAP_MAX_DISTANCE and returns the result.
       *
       * @param x1 {Number} The x position of point one.
       * @param y1 {Number} The y position of point one.
       * @param x2 {Number} The x position of point two.
       * @param y2 {Number} The y position of point two.
       * @param type {String} The pointer type e.g. "mouse"
       * @return {Boolean} <code>true</code>, if points are in range
       */
      __isBelowDoubleTapDistance__P_57_23: function __isBelowDoubleTapDistance__P_57_23(x1, y1, x2, y2, type) {
        var clazz = qx.event.handler.GestureCore;
        var inX = Math.abs(x1 - x2) < clazz.DOUBLETAP_MAX_DISTANCE[type];
        var inY = Math.abs(y1 - y2) < clazz.DOUBLETAP_MAX_DISTANCE[type];
        return inX && inY;
      },
      /**
       * Calculates the delta coordinates in relation to the position on <code>pointerstart</code> event.
       * @param domEvent {Event} The DOM event from the browser.
       * @return {Map} containing the deltaX as x, and deltaY as y.
       */
      _getDeltaCoordinates: function _getDeltaCoordinates(domEvent) {
        var gesture = this.__gesture__P_57_2[domEvent.pointerId];
        if (!gesture) {
          return null;
        }
        var deltaX = domEvent.clientX - gesture.startX;
        var deltaY = domEvent.clientY - gesture.startY;
        var axis = "x";
        if (Math.abs(deltaX / deltaY) < 1) {
          axis = "y";
        }
        return {
          x: deltaX,
          y: deltaY,
          axis: axis
        };
      },
      /**
       * Fire a gesture event with the given parameters
       *
       * @param domEvent {Event} DOM event
       * @param type {String} type of the event
       * @param target {Element ? null} event target
       * @return {qx.Promise?} a promise, if one or more of the event handlers returned a promise
       */
      _fireEvent: function _fireEvent(domEvent, type, target) {
        // The target may have been removed, e.g. menu hide on tap
        if (!this.__defaultTarget__P_57_0) {
          return;
        }
        var evt;
        if (qx.core.Environment.get("event.dispatchevent")) {
          evt = new qx.event.type.dom.Custom(type, domEvent, {
            bubbles: true,
            swipe: domEvent.swipe,
            scale: domEvent.scale,
            angle: domEvent.angle,
            delta: domEvent.delta,
            pointerType: domEvent.pointerType,
            momentum: domEvent.momentum
          });
          return target.dispatchEvent(evt);
        } else if (this.__emitter__P_57_1) {
          evt = new qx.event.type.dom.Custom(type, domEvent, {
            target: this.__defaultTarget__P_57_0,
            currentTarget: this.__defaultTarget__P_57_0,
            srcElement: this.__defaultTarget__P_57_0,
            swipe: domEvent.swipe,
            scale: domEvent.scale,
            angle: domEvent.angle,
            delta: domEvent.delta,
            pointerType: domEvent.pointerType,
            momentum: domEvent.momentum
          });
          this.__emitter__P_57_1.emit(type, domEvent);
        }
      },
      /**
       * Fire "tap" and "dbltap" events after a native "dblclick"
       * event to fix IE 8's broken mouse event sequence.
       *
       * @param domEvent {Event} dblclick event
       */
      _onDblClick: function _onDblClick(domEvent) {
        var target = qx.bom.Event.getTarget(domEvent);
        this._fireEvent(domEvent, "tap", target);
        this._fireEvent(domEvent, "dbltap", target);
      },
      /**
       * Returns the swipe gesture when the user performed a swipe.
       *
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       * @return {Map|null} returns the swipe data when the user performed a swipe, null if the gesture was no swipe.
       */
      __getSwipeGesture__P_57_24: function __getSwipeGesture__P_57_24(domEvent, target) {
        var gesture = this.__gesture__P_57_2[domEvent.pointerId];
        if (!gesture) {
          return null;
        }
        var clazz = qx.event.handler.GestureCore;
        var deltaCoordinates = this._getDeltaCoordinates(domEvent);
        var duration = new Date().getTime() - gesture.startTime;
        var axis = Math.abs(deltaCoordinates.x) >= Math.abs(deltaCoordinates.y) ? "x" : "y";
        var distance = deltaCoordinates[axis];
        var direction = clazz.SWIPE_DIRECTION[axis][distance < 0 ? 0 : 1];
        var velocity = duration !== 0 ? distance / duration : 0;
        var swipe = {
          startTime: gesture.startTime,
          duration: duration,
          axis: axis,
          direction: direction,
          distance: distance,
          velocity: velocity
        };
        return swipe;
      },
      /**
       * Fires a track event.
       *
       * @param type {String} the track type
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       */
      __fireTrack__P_57_19: function __fireTrack__P_57_19(type, domEvent, target) {
        domEvent.delta = this._getDeltaCoordinates(domEvent);
        this._fireEvent(domEvent, type, domEvent.target || target);
      },
      /**
       * Fires a roll event.
       *
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       * @param rollFactor {Integer} the roll factor to apply
       */
      __fireRollEvent__P_57_25: function __fireRollEvent__P_57_25(domEvent, target, rollFactor) {
        domEvent.delta = {
          x: qx.util.Wheel.getDelta(domEvent, "x") * rollFactor,
          y: qx.util.Wheel.getDelta(domEvent, "y") * rollFactor
        };
        domEvent.delta.axis = Math.abs(domEvent.delta.x / domEvent.delta.y) < 1 ? "y" : "x";
        domEvent.pointerType = "wheel";
        this._fireEvent(domEvent, "roll", domEvent.target || target);
      },
      /**
       * Triggers the adaptative roll scrolling.
       *
       * @param target {Element} event target
       */
      __performAdaptativeRollScrolling__P_57_26: function __performAdaptativeRollScrolling__P_57_26(target) {
        var rollFactor = qx.event.handler.GestureCore.ROLL_FACTOR;
        if (qx.util.Wheel.IS_TOUCHPAD) {
          // The domEvent was generated by a touchpad
          rollFactor = qx.event.handler.GestureCore.TOUCHPAD_ROLL_FACTOR;
        }
        this.__lastRollEventTime__P_57_16 = new Date().getTime();
        var reLength = this.__rollEvents__P_57_6.length;
        for (var i = 0; i < reLength; i++) {
          var domEvent = this.__rollEvents__P_57_6[i];
          this.__fireRollEvent__P_57_25(domEvent, target, rollFactor);
        }
        this.__rollEvents__P_57_6 = [];
      },
      /**
       * Ends touch pad detection process.
       */
      __endTouchPadDetection__P_57_27: function __endTouchPadDetection__P_57_27() {
        if (this.__rollEvents__P_57_6.length > qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_THRESHOLD) {
          qx.util.Wheel.IS_TOUCHPAD = true;
        } else {
          qx.util.Wheel.IS_TOUCHPAD = false;
        }
        this.__touchPadDetectionPerformed__P_57_15 = true;
      },
      /**
       * Is touchpad detection enabled ? Default implementation activates it only for Mac OS after Sierra (>= 10.12).
       * @return {boolean} true if touchpad detection should occur.
       * @internal
       */
      _isTouchPadDetectionEnabled: function _isTouchPadDetectionEnabled() {
        return qx.core.Environment.get("os.name") == "osx" && qx.core.Environment.get("os.version") >= 10.12;
      },
      /**
       * Fires a roll event after determining the roll factor to apply. Mac OS Sierra (10.12+)
       * introduces a lot more wheel events fired from the trackpad, so the roll factor to be applied
       * has to be reduced in order to make the scrolling less sensitive.
       *
       * @param domEvent {Event} DOM event
       * @param type {String} The type of the dom event
       * @param target {Element} event target
       */
      _fireRoll: function _fireRoll(domEvent, type, target) {
        var now;
        var detectionTimeout;
        if (domEvent.type === qx.core.Environment.get("event.mousewheel").type) {
          if (this._isTouchPadDetectionEnabled()) {
            now = new Date().getTime();
            detectionTimeout = qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_TIMEOUT;
            if (this.__lastRollEventTime__P_57_16 > 0 && now - this.__lastRollEventTime__P_57_16 > detectionTimeout) {
              // The detection timeout was reached. A new detection step should occur.
              this.__touchPadDetectionPerformed__P_57_15 = false;
              this.__rollEvents__P_57_6 = [];
              this.__lastRollEventTime__P_57_16 = 0;
            }
            if (!this.__touchPadDetectionPerformed__P_57_15) {
              // We are into a detection session. We count the events so that we can decide if
              // they were fired by a real mouse wheel or a touchpad. Just swallow them until the
              // detection period is over.
              if (this.__rollEvents__P_57_6.length === 0) {
                // detection starts
                this.__rollEventsCountStart__P_57_13 = now;
                qx.event.Timer.once(function () {
                  if (!this.__touchPadDetectionPerformed__P_57_15) {
                    // There were not enough events during the TOUCHPAD_WHEEL_EVENTS_PERIOD to actually
                    // trigger a scrolling. Trigger it manually.
                    this.__endTouchPadDetection__P_57_27();
                    this.__performAdaptativeRollScrolling__P_57_26(target);
                  }
                }, this, qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_PERIOD + 50);
              }
              this.__rollEvents__P_57_6.push(domEvent);
              this.__rollEventsCount__P_57_14++;
              if (now - this.__rollEventsCountStart__P_57_13 > qx.event.handler.GestureCore.TOUCHPAD_WHEEL_EVENTS_PERIOD) {
                this.__endTouchPadDetection__P_57_27();
              }
            }
            if (this.__touchPadDetectionPerformed__P_57_15) {
              if (this.__rollEvents__P_57_6.length === 0) {
                this.__rollEvents__P_57_6.push(domEvent);
              }
              // Detection is done. We can now decide the roll factor to apply to the delta.
              // Default to a real mouse wheel event as opposed to a touchpad one.
              this.__performAdaptativeRollScrolling__P_57_26(target);
            }
          } else {
            this.__fireRollEvent__P_57_25(domEvent, target, qx.event.handler.GestureCore.ROLL_FACTOR);
          }
        } else {
          var gesture = this.__gesture__P_57_2[domEvent.pointerId];
          domEvent.delta = {
            x: -gesture.velocityX,
            y: -gesture.velocityY,
            axis: Math.abs(gesture.velocityX / gesture.velocityY) < 1 ? "y" : "x"
          };
          this._fireEvent(domEvent, "roll", domEvent.target || target);
        }
      },
      /**
       * Fires a rotate event.
       *
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       */
      __fireRotate__P_57_20: function __fireRotate__P_57_20(domEvent, target) {
        if (!domEvent.isPrimary) {
          var angle = this._calcAngle();
          domEvent.angle = Math.round((angle - this.__initialAngle__P_57_10) % 360);
          this._fireEvent(domEvent, "rotate", this.__primaryTarget__P_57_8);
        }
      },
      /**
       * Fires a pinch event.
       *
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       */
      __firePinch__P_57_21: function __firePinch__P_57_21(domEvent, target) {
        if (!domEvent.isPrimary) {
          var distance = this._calcDistance();
          var scale = distance / this.__initialDistance__P_57_12;
          domEvent.scale = Math.round(scale * 100) / 100;
          this._fireEvent(domEvent, "pinch", this.__primaryTarget__P_57_8);
        }
      },
      /**
       * Fires the long tap event.
       *
       * @param domEvent {Event} DOM event
       * @param target {Element} event target
       */
      __fireLongTap__P_57_18: function __fireLongTap__P_57_18(domEvent, target) {
        var gesture = this.__gesture__P_57_2[domEvent.pointerId];
        if (gesture) {
          this._fireEvent(domEvent, "longtap", domEvent.target || target);
          gesture.longTapTimer = null;
          gesture.isTap = false;
        }
      },
      /**
       * Stops the time for the long tap event.
       * @param gesture {Map} Data may representing the gesture.
       */
      __stopLongTapTimer__P_57_17: function __stopLongTapTimer__P_57_17(gesture) {
        if (gesture.longTapTimer) {
          window.clearTimeout(gesture.longTapTimer);
          gesture.longTapTimer = null;
        }
      },
      /**
       * Dispose the current instance
       */
      dispose: function dispose() {
        for (var gesture in this.__gesture__P_57_2) {
          this.__stopLongTapTimer__P_57_17(gesture);
        }
        this._stopObserver();
        this.__defaultTarget__P_57_0 = this.__emitter__P_57_1 = null;
      }
    }
  });
  qx.event.handler.GestureCore.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Pointer": {
        "require": true
      },
      "qx.event.Registration": {},
      "qx.event.handler.Gesture": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * Roll event object.
   */
  qx.Class.define("qx.event.type.Roll", {
    extend: qx.event.type.Pointer,
    members: {
      // overridden
      stop: function stop() {
        this.stopPropagation();
        this.preventDefault();
      },
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Roll.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        clone.delta = nativeEvent.delta;
        clone.momentum = nativeEvent.momentum;
        clone.timeoutId = nativeEvent.timeoutId;
        return clone;
      },
      /**
       * Boolean flag to indicate if this event was triggered by a momentum.
       * @return {Boolean} <code>true</code>, if the event is momentum based
       */
      getMomentum: function getMomentum() {
        return this._native.momentum;
      },
      /**
       * Stops the momentum events.
       */
      stopMomentum: function stopMomentum() {
        if (this._native.timeoutId) {
          qx.event.Registration.getManager(this._originalTarget).getHandler(qx.event.handler.Gesture).stopMomentum(this._native.timeoutId);
        }
      },
      /**
       * Returns a map with the calculated delta coordinates and axis,
       * relative to the last <code>roll</code> event.
       *
       * @return {Map} a map with contains the delta as <code>x</code> and
       * <code>y</code>
       */
      getDelta: function getDelta() {
        return this._native.delta;
      }
    }
  });
  qx.event.type.Roll.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.Pointer": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.handler.GestureCore": {
        "construct": true,
        "require": true
      },
      "qx.event.IEventHandler": {
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      },
      "qx.event.type.Tap": {
        "require": true
      },
      "qx.event.type.Swipe": {
        "require": true
      },
      "qx.event.type.Rotate": {
        "require": true
      },
      "qx.event.type.Pinch": {
        "require": true
      },
      "qx.event.type.Track": {
        "require": true
      },
      "qx.event.type.Roll": {
        "require": true
      },
      "qx.lang.Function": {},
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.Event": {},
      "qx.bom.client.Event": {},
      "qx.event.type.Pointer": {},
      "qx.event.type.Data": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "className": "qx.bom.client.Browser"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /**
   * Unified gesture event handler.
   *
   * @require(qx.event.handler.Pointer)
   */
  qx.Class.define("qx.event.handler.Gesture", {
    extend: qx.event.handler.GestureCore,
    implement: [qx.event.IEventHandler, qx.core.IDisposable],
    statics: {
      /** @type {Integer} Priority of this handler */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL,
      /** @type {Map} Supported event types */
      SUPPORTED_TYPES: {
        tap: 1,
        swipe: 1,
        longtap: 1,
        dbltap: 1,
        rotate: 1,
        pinch: 1,
        track: 1,
        trackstart: 1,
        trackend: 1,
        roll: 1
      },
      GESTURE_EVENTS: ["gesturebegin", "gesturefinish", "gesturemove", "gesturecancel"],
      /** @type {Integer} Which target check to use */
      TARGET_CHECK: qx.event.IEventHandler.TARGET_DOMNODE + qx.event.IEventHandler.TARGET_DOCUMENT,
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true,
      EVENT_CLASSES: {
        tap: qx.event.type.Tap,
        longtap: qx.event.type.Tap,
        dbltap: qx.event.type.Tap,
        swipe: qx.event.type.Swipe,
        rotate: qx.event.type.Rotate,
        pinch: qx.event.type.Pinch,
        track: qx.event.type.Track,
        trackstart: qx.event.type.Track,
        trackend: qx.event.type.Track,
        roll: qx.event.type.Roll
      }
    },
    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      // Define shorthands
      this.__manager__P_21_0 = manager;
      this.__window__P_21_1 = manager.getWindow();
      this.__root__P_21_2 = this.__window__P_21_1.document;
      qx.event.handler.GestureCore.apply(this, [this.__root__P_21_2]);
    },
    members: {
      __manager__P_21_0: null,
      __window__P_21_1: null,
      __root__P_21_2: null,
      __listener__P_21_3: null,
      __onDblClickWrapped__P_21_4: null,
      __fireRollWrapped__P_21_5: null,
      /**
       * Getter for the internal __window object
       * @return {Window} DOM window instance
       */
      getWindow: function getWindow() {
        return this.__window__P_21_1;
      },
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {},
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        // Nothing needs to be done here
      },
      // overridden
      _initObserver: function _initObserver() {
        this.__listener__P_21_3 = qx.lang.Function.listener(this.checkAndFireGesture, this);
        qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function (type) {
          qx.event.Registration.addListener(this.__root__P_21_2, type, this.__listener__P_21_3, this);
        }.bind(this));
        if (qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9) {
          this.__onDblClickWrapped__P_21_4 = qx.lang.Function.listener(this._onDblClick, this);
          qx.bom.Event.addNativeListener(this.__root__P_21_2, "dblclick", this.__onDblClickWrapped__P_21_4);
        }

        // list to wheel events
        var data = qx.bom.client.Event.getMouseWheel(this.__window__P_21_1);
        this.__fireRollWrapped__P_21_5 = qx.lang.Function.listener(this._fireRoll, this);
        // replaced the useCapture (4th parameter) from this to true
        // see https://github.com/qooxdoo/qooxdoo/pull/9292
        qx.bom.Event.addNativeListener(data.target, data.type, this.__fireRollWrapped__P_21_5, true, false);
      },
      /**
       * Checks if a gesture was made and fires the gesture event.
       *
       * @param pointerEvent {qx.event.type.Pointer} Pointer event
       * @param type {String ? null} type of the event
       * @param target {Element ? null} event target
       */
      checkAndFireGesture: function checkAndFireGesture(pointerEvent, type, target) {
        this.__callBase__P_21_6("checkAndFireGesture", [pointerEvent.getNativeEvent(), pointerEvent.getType(), pointerEvent.getTarget()]);
      },
      // overridden
      _stopObserver: function _stopObserver() {
        qx.event.handler.Gesture.GESTURE_EVENTS.forEach(function (type) {
          qx.event.Registration.removeListener(this.__root__P_21_2, type, this.__listener__P_21_3);
        }.bind(this));
        if (qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9) {
          qx.bom.Event.removeNativeListener(this.__root__P_21_2, "dblclick", this.__onDblClickWrapped__P_21_4);
        }
        var data = qx.bom.client.Event.getMouseWheel(this.__window__P_21_1);
        qx.bom.Event.removeNativeListener(data.target, data.type, this.__fireRollWrapped__P_21_5);
      },
      // overridden
      _hasIntermediaryHandler: function _hasIntermediaryHandler(target) {
        /* This check is irrelevant for qx.Desktop since there is only one
           gesture handler */
        return false;
      },
      /**
       * Fire a touch event with the given parameters
       *
       * @param domEvent {Event} DOM event
       * @param type {String ? null} type of the event
       * @param target {Element ? null} event target
       */
      _fireEvent: function _fireEvent(domEvent, type, target) {
        if (!target) {
          target = qx.bom.Event.getTarget(domEvent);
        }
        if (!type) {
          type = domEvent.type;
        }
        var eventTypeClass = qx.event.handler.Gesture.EVENT_CLASSES[type] || qx.event.type.Pointer;
        if (target && target.nodeType) {
          qx.event.Registration.fireEvent(target, type, eventTypeClass, [domEvent, target, null, true, true]);
        }

        // Fire user action event
        qx.event.Registration.fireEvent(this.__window__P_21_1, "useraction", qx.event.type.Data, [type]);
      },
      /**
       * Dispose this object
       */
      dispose: function dispose() {
        this._stopObserver();
        this.__callBase__P_21_6("dispose");
        this.__manager__P_21_0 = this.__window__P_21_1 = this.__root__P_21_2 = this.__onDblClickWrapped__P_21_4 = null;
      },
      /**
       * Call overridden method.
       *
       * @param method {String} Name of the overridden method.
       * @param args {Array} Arguments.
       */
      __callBase__P_21_6: function __callBase__P_21_6(method, args) {
        qx.event.handler.GestureCore.prototype[method].apply(this, args || []);
      }
    },
    defer: function defer(statics) {
      qx.event.Registration.addHandler(statics);
      qx.event.Registration.addListener(window, "appinitialized", function () {
        qx.event.Registration.getManager(document).getHandler(statics);
      });
    }
  });
  qx.event.handler.Gesture.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.Window": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.handler.Keyboard": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.handler.Gesture": {
        "require": true,
        "defer": "runtime"
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.Stylesheet": {},
      "qx.log.Logger": {},
      "qx.core.ObjectRegistry": {},
      "qx.event.Registration": {
        "defer": "runtime"
      },
      "qx.log.appender.Formatter": {},
      "qx.event.type.Tap": {},
      "qx.event.type.Pointer": {},
      "qx.dom.Hierarchy": {}
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
   * Feature-rich console appender for the qooxdoo logging system.
   *
   * Creates a small inline element which is placed in the top-right corner
   * of the window. Prints all messages with a nice color highlighting.
   *
   * * Allows user command inputs.
   * * Command history enabled by default (Keyboard up/down arrows).
   * * Lazy creation on first open.
   * * Clearing the console using a button.
   * * Display of offset (time after loading) of each message
   * * Supports keyboard shortcuts F7 or Ctrl+D to toggle the visibility
   *
   * Note this class must be disposed of after use
   *
   * @require(qx.event.handler.Window)
   * @require(qx.event.handler.Keyboard)
   * @require(qx.event.handler.Gesture)
   */
  qx.Class.define("qx.log.appender.Console", {
    statics: {
      /*
      ---------------------------------------------------------------------------
        INITIALIZATION AND SHUTDOWN
      ---------------------------------------------------------------------------
      */

      __main__P_4_0: null,
      __log__P_4_1: null,
      __cmd__P_4_2: null,
      __lastCommand__P_4_3: null,
      /**
       * Initializes the console, building HTML and pushing last
       * log messages to the output window.
       *
       */
      init: function init() {
        // Build style sheet content
        var style = [".qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}", ".qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}", ".qxconsole .control a{text-decoration:none;color:black;}", ".qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}", ".qxconsole .messages div{padding:0px 4px;}", ".qxconsole .messages .user-command{color:blue}", ".qxconsole .messages .user-result{background:white}", ".qxconsole .messages .user-error{background:#FFE2D5}", ".qxconsole .messages .level-debug{background:white}", ".qxconsole .messages .level-info{background:#DEEDFA}", ".qxconsole .messages .level-warn{background:#FFF7D5}", ".qxconsole .messages .level-error{background:#FFE2D5}", ".qxconsole .messages .level-user{background:#E3EFE9}", ".qxconsole .messages .type-string{color:black;font-weight:normal;}", ".qxconsole .messages .type-number{color:#155791;font-weight:normal;}", ".qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}", ".qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}", ".qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}", ".qxconsole .messages .type-key{color:#565656;font-style:italic}", ".qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}", ".qxconsole .messages .type-instance{color:#565656;font-weight:bold}", ".qxconsole .messages .type-stringify{color:#565656;font-weight:bold}", ".qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}", ".qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}", ".qxconsole .command input:focus{outline:none;}"];

        // Include stylesheet
        qx.bom.Stylesheet.createElement(style.join(""));

        // Build markup
        var markup = ['<div class="qxconsole">', '<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>', '<div class="messages">', "</div>", '<div class="command">', '<input type="text"/>', "</div>", "</div>"];

        // Insert HTML to access DOM node
        var wrapper = document.createElement("DIV");
        wrapper.innerHTML = markup.join("");
        var main = wrapper.firstChild;
        document.body.appendChild(wrapper.firstChild);

        // Make important DOM nodes available
        this.__main__P_4_0 = main;
        this.__log__P_4_1 = main.childNodes[1];
        this.__cmd__P_4_2 = main.childNodes[2].firstChild;

        // Correct height of messages frame
        this.__onResize__P_4_4();

        // Finally register to log engine
        qx.log.Logger.register(this);

        // Register to object manager
        qx.core.ObjectRegistry.register(this);
      },
      /**
       * Used by the object registry to dispose this instance e.g. remove listeners etc.
       *
       */
      dispose: function dispose() {
        qx.event.Registration.removeListener(document.documentElement, "keypress", this.__onKeyPress__P_4_5, this);
        qx.log.Logger.unregister(this);
      },
      /*
      ---------------------------------------------------------------------------
        INSERT & CLEAR
      ---------------------------------------------------------------------------
      */
      /**
       * Clears the current console output.
       *
       */
      clear: function clear() {
        // Remove all messages
        this.__log__P_4_1.innerHTML = "";
      },
      /**
       * Processes a single log entry
       *
       * @signature function(entry)
       * @param entry {Map} The entry to process
       */
      process: function process(entry) {
        // Append new content
        var formatter = qx.log.appender.Formatter.getFormatter();
        this.__log__P_4_1.appendChild(formatter.toHtml(entry));

        // Scroll down
        this.__scrollDown__P_4_6();
      },
      /**
       * Automatically scroll down to the last line
       */
      __scrollDown__P_4_6: function __scrollDown__P_4_6() {
        this.__log__P_4_1.scrollTop = this.__log__P_4_1.scrollHeight;
      },
      /*
      ---------------------------------------------------------------------------
        VISIBILITY TOGGLING
      ---------------------------------------------------------------------------
      */

      /** @type {Boolean} Flag to store last visibility status */
      __visible__P_4_7: true,
      /**
       * Toggles the visibility of the console between visible and hidden.
       *
       */
      toggle: function toggle() {
        if (!this.__main__P_4_0) {
          this.init();
        } else if (this.__main__P_4_0.style.display == "none") {
          this.show();
        } else {
          this.__main__P_4_0.style.display = "none";
        }
      },
      /**
       * Shows the console.
       *
       */
      show: function show() {
        if (!this.__main__P_4_0) {
          this.init();
        } else {
          this.__main__P_4_0.style.display = "block";
          this.__log__P_4_1.scrollTop = this.__log__P_4_1.scrollHeight;
        }
      },
      /*
      ---------------------------------------------------------------------------
        COMMAND LINE SUPPORT
      ---------------------------------------------------------------------------
      */

      /** @type {Array} List of all previous commands. */
      __history__P_4_8: [],
      /**
       * Executes the currently given command
       *
       */
      execute: function execute() {
        var value = this.__cmd__P_4_2.value;
        if (value == "") {
          return;
        }
        if (value == "clear") {
          this.clear();
          return;
        }
        var command = document.createElement("div");
        var formatter = qx.log.appender.Formatter.getFormatter();
        command.innerHTML = formatter.escapeHTML(">>> " + value);
        command.className = "user-command";
        this.__history__P_4_8.push(value);
        this.__lastCommand__P_4_3 = this.__history__P_4_8.length;
        this.__log__P_4_1.appendChild(command);
        this.__scrollDown__P_4_6();
        try {
          var ret = window.eval(value);
        } catch (ex) {
          qx.log.Logger.error(ex);
        }
        if (ret !== undefined) {
          qx.log.Logger.debug(ret);
        }
      },
      /*
      ---------------------------------------------------------------------------
        EVENT LISTENERS
      ---------------------------------------------------------------------------
      */
      /**
       * Event handler for resize listener
       *
       * @param e {Event} Event object
       */
      __onResize__P_4_4: function __onResize__P_4_4(e) {
        this.__log__P_4_1.style.height = this.__main__P_4_0.clientHeight - this.__main__P_4_0.firstChild.offsetHeight - this.__main__P_4_0.lastChild.offsetHeight + "px";
      },
      /**
       * Event handler for keydown listener
       *
       * @param e {Event} Event object
       */
      __onKeyPress__P_4_5: function __onKeyPress__P_4_5(e) {
        if (e instanceof qx.event.type.Tap || e instanceof qx.event.type.Pointer) {
          var target = e.getTarget();
          if (target && target.className && target.className.indexOf && target.className.indexOf("navigationbar") != -1) {
            this.toggle();
          }
          return;
        }
        var iden = e.getKeyIdentifier();

        // Console toggling
        if (iden == "F7" || iden == "D" && e.isCtrlPressed()) {
          this.toggle();
          e.preventDefault();
        }

        // Not yet created
        if (!this.__main__P_4_0) {
          return;
        }

        // Active element not in console
        if (!qx.dom.Hierarchy.contains(this.__main__P_4_0, e.getTarget())) {
          return;
        }

        // Command execution
        if (iden == "Enter" && this.__cmd__P_4_2.value != "") {
          this.execute();
          this.__cmd__P_4_2.value = "";
        }

        // History management
        if (iden == "Up" || iden == "Down") {
          this.__lastCommand__P_4_3 += iden == "Up" ? -1 : 1;
          this.__lastCommand__P_4_3 = Math.min(Math.max(0, this.__lastCommand__P_4_3), this.__history__P_4_8.length);
          var entry = this.__history__P_4_8[this.__lastCommand__P_4_3];
          this.__cmd__P_4_2.value = entry || "";
          this.__cmd__P_4_2.select();
        }
      }
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.event.Registration.addListener(document.documentElement, "keypress", statics.__onKeyPress__P_4_5, statics);
      qx.event.Registration.addListener(document.documentElement, "longtap", statics.__onKeyPress__P_4_5, statics);
    }
  });
  qx.log.appender.Console.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.element.Style": {},
      "qx.bom.client.Scroll": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.mobile.nativescroll": {
          "className": "qx.bom.client.Scroll"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
       * Christopher Zuendorf (czuendorf)
  
  ************************************************************************ */

  /**
   * This mixin resizes the container element to the height of the parent element.
   * Use this when the height can not be set by CSS.
   *
   */
  qx.Mixin.define("qx.ui.mobile.core.MResize", {
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** Whether the resize should fire the "domupdated" event. Set this to "true"
       *  whenever other elements should react on this size change (e.g. when the size
       *  change does not infect the size of the application, but other widgets should
       *  react).
       */
      fireDomUpdatedOnResize: {
        check: "Boolean",
        init: false
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __lastHeight__P_101_0: null,
      __lastWidth__P_101_1: null,
      /**
       * Removes fixed size from container.
       */
      releaseFixedSize: function releaseFixedSize() {
        var parent = this.getLayoutParent();
        if (parent && parent.getContainerElement()) {
          var element = this.getContainerElement();
          qx.bom.element.Style.set(element, "height", "auto");
          qx.bom.element.Style.set(element, "width", "auto");
        }
      },
      /**
       * Resizes the container element to the height of the parent element.
       */
      fixSize: function fixSize() {
        var parent = this.getLayoutParent();
        if (parent && parent.getContainerElement()) {
          var height = parent.getContainerElement().offsetHeight;
          var width = parent.getContainerElement().offsetWidth;

          // Only fix size, when value are above zero.
          if (height === 0 || width === 0) {
            return;
          }
          if (!this.getFireDomUpdatedOnResize()) {
            this._setHeight(height);
            this._setWidth(width);
          } else if (this.__lastHeight__P_101_0 != height && this.__lastWidth__P_101_1 != width) {
            this._setHeight(height);
            this._setWidth(width);
            this.__lastWidth__P_101_1 = width;
            this.__lastHeight__P_101_0 = height;
            this._domUpdated();
          }
        }
      },
      /**
       * Sets the height of the container element.
       *
       * @param height {Integer} The height to set
       */
      _setHeight: function _setHeight(height) {
        var element = this.getContainerElement();
        if (qx.core.Environment.get("qx.mobile.nativescroll")) {
          qx.bom.element.Style.set(element, "minHeight", height + "px");
        } else {
          qx.bom.element.Style.set(element, "height", height + "px");
        }
      },
      /**
       * Sets the width of the container element.
       *
       * @param width {Integer} The width to set
       */
      _setWidth: function _setWidth(width) {
        var element = this.getContainerElement();
        if (qx.core.Environment.get("qx.mobile.nativescroll")) {
          qx.bom.element.Style.set(element, "minWidth", width + "px");
        } else {
          qx.bom.element.Style.set(element, "width", width + "px");
        }
      }
    }
  });
  qx.ui.mobile.core.MResize.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["phonegap", "phonegap.notification"],
      "required": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * The purpose of this class is to contain all checks for PhoneGap/Cordova.
   *
   * This class is used by {@link qx.core.Environment} and should not be used
   * directly. Please check its class comment for details how to use it.
   *
   * @internal
   */
  qx.Bootstrap.define("qx.bom.client.PhoneGap", {
    statics: {
      /**
       * Checks if PhoneGap/Cordova is available.
       * @return {Boolean} <code>true</code>, if it could be used.
       * @internal
       */
      getPhoneGap: function getPhoneGap() {
        return "cordova" in window || "Cordova" in window || "PhoneGap" in window;
      },
      /**
       * Checks if notifications can be displayed.
       * @return {Boolean} <code>true</code>, if it could be used.
       * @internal
       */
      getNotification: function getNotification() {
        return "notification" in navigator;
      }
    },
    defer: function defer(statics) {
      qx.core.Environment.add("phonegap", statics.getPhoneGap);
      qx.core.Environment.add("phonegap.notification", statics.getNotification);
    }
  });
  qx.bom.client.PhoneGap.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.mobile.core.MResize": {
        "require": true
      },
      "qx.ui.mobile.layout.VBox": {
        "construct": true
      },
      "qx.bom.Event": {
        "defer": "runtime"
      },
      "qx.bom.client.PhoneGap": {
        "defer": "load",
        "require": true
      },
      "qx.bom.client.OperatingSystem": {
        "defer": "load",
        "require": true
      },
      "qx.core.Init": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "phonegap": {
          "className": "qx.bom.client.PhoneGap",
          "defer": true
        },
        "os.name": {
          "className": "qx.bom.client.OperatingSystem",
          "defer": true
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * A page is a widget which provides a screen with which users
   * can interact in order to do something. Most times a page provides a single task
   * or a group of related tasks.
   *
   * A qooxdoo mobile application is usually composed of one or more loosely bound
   * pages. Typically there is one page that presents the "main" view.
   *
   * Pages can have one or more child widgets from the {@link qx.ui.mobile}
   * namespace. Normally a page provides a {@link qx.ui.mobile.navigationbar.NavigationBar}
   * for the navigation between pages.
   *
   * To navigate between two pages, just call the {@link #show} method of the page
   * that should be shown. Depending on the used page manager a page transition will be animated.
   * There are several animations available. Have
   * a look at the {@link qx.ui.mobile.page.Manager} manager or {@link qx.ui.mobile.layout.Card} card layout for more information.
   *
   * A page has predefined lifecycle methods that get called by the used page manager
   * when a page gets shown. Each time another page is requested to be shown the currently shown page
   * is stopped. The other page, will be, if shown for the first time, initialized and started
   * afterwards. For all called lifecycle methods an event is fired.
   *
   * Call of the {@link #show} method triggers the following lifecycle methods:
   *
   * * <strong>initialize</strong>: Initializes the page to show
   * * <strong>start</strong>: Gets called when the page to show is started
   * * <strong>stop</strong>:  Stops the current page
   *
   * IMPORTANT: Define all child widgets of a page when the {@link #initialize} lifecycle
   * method is called, either by listening to the {@link #initialize} event or overriding
   * the {@link #_initialize} method. This is because a page can be instanced during
   * application startup and would then decrease performance when the widgets would be
   * added during constructor call. The <code>initialize</code> event and the
   * {@link #_initialize} lifecycle method are only called when the page is shown
   * for the first time.
   *
   */
  qx.Class.define("qx.ui.mobile.page.Page", {
    extend: qx.ui.mobile.container.Composite,
    include: qx.ui.mobile.core.MResize,
    /*
     *****************************************************************************
        CONSTRUCTOR
     *****************************************************************************
     */
    construct: function construct(layout) {
      qx.ui.mobile.container.Composite.constructor.call(this, layout || new qx.ui.mobile.layout.VBox());
    },
    /*
     *****************************************************************************
        STATICS
     *****************************************************************************
     */

    statics: {
      _currentPage: null,
      /**
       * Event handler. Called when the device is ready.
       */
      _onDeviceReady: function _onDeviceReady() {
        qx.bom.Event.addNativeListener(document, "backbutton", qx.ui.mobile.page.Page._onBackButton);
        qx.bom.Event.addNativeListener(document, "menubutton", qx.ui.mobile.page.Page._onMenuButton);
      },
      /**
       * Event handler. Called when the back button of the device was pressed.
       */
      _onBackButton: function _onBackButton() {
        if (qx.core.Environment.get("phonegap") && qx.core.Environment.get("os.name") == "android") {
          var exit = true;
          if (qx.ui.mobile.page.Page._currentPage) {
            exit = qx.ui.mobile.page.Page._currentPage.back(true);
          }
          if (exit) {
            navigator.app.exitApp();
          }
        }
      },
      /**
       * Event handler. Called when the menu button of the device was pressed.
       */
      _onMenuButton: function _onMenuButton() {
        if (qx.core.Environment.get("phonegap") && qx.core.Environment.get("os.name") == "android") {
          if (qx.ui.mobile.page.Page._currentPage) {
            qx.ui.mobile.page.Page._currentPage.menu();
          }
        }
      }
    },
    events: {
      /** Fired when the lifecycle method {@link #initialize} is called */
      initialize: "qx.event.type.Event",
      /** Fired when the lifecycle method {@link #start} is called */
      start: "qx.event.type.Event",
      /** Fired when the lifecycle method {@link #stop} is called */
      stop: "qx.event.type.Event",
      /** Fired when the lifecycle method {@link #pause} is called */
      pause: "qx.event.type.Event",
      /** Fired when the lifecycle method {@link #resume} is called */
      resume: "qx.event.type.Event",
      /**
       * Fired when the method {@link #back} is called and not prevented by
       * {@link qx.application.Mobile#back}. Data indicating whether
       * the action was triggered by a key event or not.
       */
      back: "qx.event.type.Data",
      /** Fired when the method {@link #menu} is called */
      menu: "qx.event.type.Event",
      /** Fired when the method {@link #wait} is called */
      wait: "qx.event.type.Event"
    },
    properties: {
      // overridden
      defaultCssClass: {
        refine: true,
        init: "page"
      },
      /**
       * The current active life cycle state of this page.
       */
      lifeCycleState: {
        init: null,
        check: ["initialize", "start", "stop", "resume", "wait", "pause"],
        apply: "_applyLifeCycleState"
      }
    },
    /*
     *****************************************************************************
        MEMBERS
     *****************************************************************************
     */

    members: {
      __initialized__P_63_0: false,
      // overridden
      show: function show(properties) {
        if (qx.ui.mobile.page.Page._currentPage) {
          qx.ui.mobile.page.Page._currentPage.stop();
        }
        qx.ui.mobile.page.Page._currentPage = this;
        this.initialize();
        this.start();
        qx.ui.mobile.page.Page.superclass.prototype.show.call(this, properties);
      },
      // overridden
      exclude: function exclude(properties) {
        this.stop();
        qx.ui.mobile.page.Page.superclass.prototype.exclude.call(this, properties);
      },
      /**
       * Fires the <code>back</code> event. Call this method if you want to request
       * a back action. For Android PhoneGap applications this method gets called
       * by the used page manager when the back button was pressed. Return <code>true</code>
       * to exit the application.
       *
       * The back request can prevented by calling the {@link qx.event.type.Event#preventDefault} on
       * the {@link qx.application.Mobile#back} event.
       *
       * @param triggeredByKeyEvent {Boolean} Whether the back action was triggered by a key event.
       * @return {Boolean} Whether the exit should be exit or not. Return <code>true</code
       *     to exit the application. Only needed for Android PhoneGap applications.
       */
      back: function back(triggeredByKeyEvent) {
        if (qx.core.Init.getApplication().fireDataEvent("back", triggeredByKeyEvent, null, true)) {
          this.fireDataEvent("back", triggeredByKeyEvent);
          var value = this._back(triggeredByKeyEvent);
          return value || false;
        } else {
          return false;
        }
      },
      /**
       * Override this method if you want to perform a certain action when back
       * is called.
       *
       * @param triggeredByKeyEvent {Boolean} Whether the back action was triggered by a key event.
       * @return {Boolean} Whether the exit should be exit or not. Return <code>true</code
       *     to exit the application. Only needed for Android PhoneGap applications.
       * @see #back
       * @abstract
       */
      _back: function _back(triggeredByKeyEvent) {},
      /**
       * Only used by Android PhoneGap applications. Called by the used page manager
       * when the menu button was pressed. Fires the <code>menu</code> event.
       */
      menu: function menu() {
        this.fireEvent("menu");
      },
      /*
      ---------------------------------------------------------------------------
        Lifecycle Methods
      ---------------------------------------------------------------------------
      */
      /**
       * Lifecycle method. Called by the page manager when the page is shown.
       * Fires the <code>initialize</code> event. You should create and add all your
       * child widgets of the view,  either by listening to the {@link #initialize} event or overriding
       * the {@link #_initialize} method. This is because a page can be instanced during
       * application startup and would then decrease performance when the widgets would be
       * added during constructor call. The {@link #_initialize} lifecycle method and the
       * <code>initialize</code> are only called once when the page is shown for the first time.
       */
      initialize: function initialize() {
        if (!this.isInitialized()) {
          this._initialize();
          this.__initialized__P_63_0 = true;
          this.setLifeCycleState("initialize");
        }
      },
      /**
       * Override this method if you would like to perform a certain action when initialize
       * is called.
       *
       * @see #initialize
       */
      _initialize: function _initialize() {},
      /**
       * Returns the status of the initialization of the page.
       *
       * @return {Boolean} Whether the page is already initialized or not
       */
      isInitialized: function isInitialized() {
        return this.__initialized__P_63_0;
      },
      /**
       * Lifecycle method. Called by the page manager after the {@link #initialize}
       * method when the page is shown. Fires the <code>start</code> event. You should
       * register all your event listener when this event occurs, so that no page
       * updates are done when page is not shown.
       */
      start: function start() {
        this._start();
        this.setLifeCycleState("start");
      },
      /**
       * Override this method if you would like to perform a certain action when start
       * is called.
       *
       * @see #start
       */
      _start: function _start() {},
      /**
       * Lifecycle method. Called by the page manager when another page is shown.
       * Fires the <code>stop</code> event. You should unregister all your event
       * listener when this event occurs, so that no page updates are down when page is not shown.
       */
      stop: function stop() {
        if (!this.isInitialized()) {
          return;
        }
        this._stop();
        this.setLifeCycleState("stop");
      },
      /**
       * Override this method if you would like to perform a certain action when stop
       * is called.
       *
       * @see #stop
       */
      _stop: function _stop() {},
      /**
       * Lifecycle method. Not used right now. Should be called when the current page
       * is interrupted, e.g. by a dialog, so that page view updates can be interrupted.
       * Fires the <code>pause</code> event.
       */
      pause: function pause() {
        this._pause();
        this.setLifeCycleState("pause");
      },
      /**
       * Override this method if you would like to perform a certain action when pause
       * is called.
       *
       * @see #pause
       */
      _pause: function _pause() {},
      /**
       * Lifecycle method. Not used right now. Should be called when the current page
       * is resuming from a interruption, e.g. when a dialog is closed, so that page
       * can resume updating the view.
       * Fires the <code>resume</code> event.
       */
      resume: function resume() {
        this._resume();
        this.setLifeCycleState("resume");
      },
      /**
       * Override this method if you would like to perform a certain action when resume
       * is called.
       *
       * @see #resume
       */
      _resume: function _resume() {},
      /**
       * Lifecycle method. Not used right now. Should be called when the current page
       * waits for data request etc.
       * Fires the <code>wait</code> event.
       */
      wait: function wait() {
        this._wait();
        this.setLifeCycleState("wait");
      },
      /**
       * Override this method if you would like to perform a certain action when wait
       * is called.
       *
       * @see #wait
       */
      _wait: function _wait() {},
      // property apply
      _applyLifeCycleState: function _applyLifeCycleState(value, old) {
        if (value == "start" || value == "stop") {
          qx.core.Init.getApplication().fireEvent(value);
        }
        this.fireEvent(value);
      }
    },
    /*
     *****************************************************************************
         DEFER
     *****************************************************************************
     */
    defer: function defer(statics) {
      if (qx.core.Environment.get("phonegap") && qx.core.Environment.get("os.name") == "android") {
        qx.bom.Event.addNativeListener(document, "deviceready", statics._onDeviceReady);
      }
    }
  });
  qx.ui.mobile.page.Page.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Interface": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * All widgets that are added to the navigation container should implement this interface.
   */
  qx.Interface.define("qx.ui.mobile.container.INavigation", {
    members: {
      /**
       * Returns the title widget that is merged into the navigation bar.
       *
       * @return {qx.ui.mobile.navigationbar.Title} The title of the navigation bar
       */
      getTitleWidget: function getTitleWidget() {},
      /**
       * Returns the left container that is merged into the navigation bar.
       *
       * @return {qx.ui.mobile.container.Composite} The left container of the navigation bar
       */
      getLeftContainer: function getLeftContainer() {},
      /**
       * Returns the right container that is merged into the navigation bar.
       *
       * @return {qx.ui.mobile.container.Composite} The right container of the navigation bar
       */
      getRightContainer: function getRightContainer() {}
    }
  });
  qx.ui.mobile.container.INavigation.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Base class for all layout managers.
   *
   * Custom layout managers must derive from
   * this class and implement the methods {@link #_getCssClasses},
   * {@link #_getSupportedChildLayoutProperties} and {@link #_setLayoutProperty}.
   */
  qx.Class.define("qx.ui.mobile.layout.Abstract", {
    extend: qx.core.Object,
    type: "abstract",
    /*
     *****************************************************************************
        EVENTS
     *****************************************************************************
     */

    events: {
      /** Fired when the layout is updated. Data contains the "widget", "action", "properties" */
      updateLayout: "qx.event.type.Data"
    },
    /*
     *****************************************************************************
        MEMBERS
     *****************************************************************************
     */

    members: {
      _widget: null,
      __cachedProperties__P_113_0: null,
      __cachedChildLayoutProperties__P_113_1: null,
      /**
       * Returns the css classes in an array that the layout is using.
       *
       * @return {Array} The css classes that the layout is using
       */
      _getCssClasses: function _getCssClasses() {
        {
          throw new Error("Abstract method call");
        }
      },
      /**
       * Returns the supported child layout properties. Needed to validate
       * the incoming layout properties. Override this function in your implementation.
       *
       * @return {Map} The supported child layout properties, e.g. <code>{"property":1}</code>
       */
      _getSupportedChildLayoutProperties: function _getSupportedChildLayoutProperties() {
        return null;
      },
      /**
       * Abstracts method. Override this in your implementation.
       * The function is called for all given layout properties once.
       *
       * @param widget {qx.ui.mobile.core.Widget} The target widget
       * @param property {String?null} Optional. The layout property to set.
       * @param value {var?} Optional. The value of the layout property.
       */
      _setLayoutProperty: function _setLayoutProperty(widget, property, value) {
        {
          throw new Error("Abstract method call");
        }
      },
      /**
       * Sets the given layout properties to a widget.
       *
       * @param widget {qx.ui.mobile.core.Widget} The target widget
       * @param properties {Map} The layout properties to set. Key / value pairs.
       */
      setLayoutProperties: function setLayoutProperties(widget, properties) {
        if (properties == null) {
          return;
        }
        var supportedChildLayoutProperties = this._getSupportedChildLayoutProperties();
        if (!supportedChildLayoutProperties) {
          return;
        }
        for (var property in properties) {
          if (!supportedChildLayoutProperties[property]) {
            throw new Error("The layout does not support the " + property + " property");
          }
          var value = properties[property];
          this._setLayoutProperty(widget, property, value);
          this._addPropertyToChildLayoutCache(widget, property, value);
        }
      },
      /**
       * This method is called by the widget to connect the widget with the layout.
       *
       * @param widget {qx.ui.mobile.core.Widget} The widget to connect to
       */
      connectToWidget: function connectToWidget(widget) {
        if (this._widget) {
          this._widget.removeCssClasses(this._getCssClasses());
        }
        this._widget = widget;
        if (widget) {
          widget.addCssClasses(this._getCssClasses());
          if (this.__cachedProperties__P_113_0) {
            for (var property in this.__cachedProperties__P_113_0) {
              this.reset(property);
              this.set(property, this.__cachedProperties__P_113_0[property]);
            }
          }
        } else {
          this.__cachedProperties__P_113_0 = null;
        }
      },
      /**
       * Connects the layout to a given child widget. Can be overridden in a concrete
       * interface implementation.
       *
       * @param widget {qx.ui.mobile.core.Widget} The widget to connect to
       */
      connectToChildWidget: function connectToChildWidget(widget) {},
      /**
       * Disconnects the layout from a given child widget. Can be overridden in a concrete
       * interface implementation.
       *
       * @param widget {qx.ui.mobile.core.Widget} The widget to connect to
       */
      disconnectFromChildWidget: function disconnectFromChildWidget(widget) {},
      /**
       * Updates the layout. Method is called by a widget, when it changes its state.
       *
       * @param widget {qx.ui.mobile.core.Widget} The target widget
       * @param action {String} The causing action that triggered the layout update.
       * @param properties {Map} The animation properties to set. Key / value pairs.
       */
      updateLayout: function updateLayout(widget, action, properties) {
        this.fireDataEvent("updateLayout", {
          widget: widget,
          action: action,
          properties: properties
        });
      },
      /**
       * Adds a property to the cache. Needed when the layout is not yet
       * connected with the widget.
       *
       * @param property {String} The property to add
       * @param value {var} The value of the property to add
       */
      _addCachedProperty: function _addCachedProperty(property, value) {
        if (!this.__cachedProperties__P_113_0) {
          this.__cachedProperties__P_113_0 = {};
        }
        this.__cachedProperties__P_113_0[property] = value;
      },
      /**
       * Returns a child layout property value.
       *
       * @param widget {qx.ui.mobile.core.Widget} The target widget
       * @param property {String} The property to retrieve the value from
       * @return {var} The value of the given property
       */
      _getChildLayoutPropertyValue: function _getChildLayoutPropertyValue(widget, property) {
        var cache = this.__getChildLayoutPropertyCache__P_113_2(widget);
        return cache[property];
      },
      /**
       * Adds a child layout property to the cache. When the value is
       * <code>null</code> the property will be deleted from the cache.
       *
       * @param widget {qx.ui.mobile.core.Widget} The target widget
       * @param property {String} The property to add
       * @param value {var} The value of the property to add
       */
      _addPropertyToChildLayoutCache: function _addPropertyToChildLayoutCache(widget, property, value) {
        var cache = this.__getChildLayoutPropertyCache__P_113_2(widget);
        if (value == null) {
          delete cache[property];
        } else {
          cache[property] = value;
        }
      },
      /**
       * Returns the child layout property cache.
       *
       * @param widget {qx.ui.mobile.core.Widget} The target widget
       * @return {Map} The child layout property cache for the given widget.
       *     Key / value pairs.
       */
      __getChildLayoutPropertyCache__P_113_2: function __getChildLayoutPropertyCache__P_113_2(widget) {
        if (!this.__cachedChildLayoutProperties__P_113_1) {
          this.__cachedChildLayoutProperties__P_113_1 = {};
        }
        var cache = this.__cachedChildLayoutProperties__P_113_1;
        var hash = widget.toHashCode();
        if (!cache[hash]) {
          cache[hash] = {};
        }
        return cache[hash];
      }
    },
    /*
     *****************************************************************************
        DESTRUCTOR
     *****************************************************************************
     */
    destruct: function destruct() {
      this._widget = null;
    }
  });
  qx.ui.mobile.layout.Abstract.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.layout.Abstract": {
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
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Base class for all box layout managers.
   */
  qx.Class.define("qx.ui.mobile.layout.AbstractBox", {
    extend: qx.ui.mobile.layout.Abstract,
    type: "abstract",
    /*
     *****************************************************************************
        CONSTRUCTOR
     *****************************************************************************
     */
    /**
     * @param alignX {String?null} Sets the {@link #alignX} property
     * @param alignY {String?null} Sets the {@link #alignY} property
     * @param reversed {Boolean?null} Sets the {@link #reversed} property
     */
    construct: function construct(alignX, alignY, reversed) {
      qx.ui.mobile.layout.Abstract.constructor.call(this);
      if (alignX) {
        this.setAlignX(alignX);
      }
      if (alignY) {
        this.setAlignY(alignY);
      }
      if (reversed) {
        this.setReversed(reversed);
      }
    },
    /*
     *****************************************************************************
        PROPERTIES
     *****************************************************************************
     */

    properties: {
      /**
       * Horizontal alignment of the whole children block.
       */
      alignX: {
        check: ["left", "center", "right"],
        nullable: true,
        init: null,
        apply: "_applyLayoutChange"
      },
      /**
       * Vertical alignment of each child.
       */
      alignY: {
        check: ["top", "middle", "bottom"],
        nullable: true,
        init: null,
        apply: "_applyLayoutChange"
      },
      /**
       * Children will be displayed in reverse order.
       */
      reversed: {
        check: "Boolean",
        nullable: true,
        init: null,
        apply: "_applyLayoutChange"
      }
    },
    /*
     *****************************************************************************
        STATICS
     *****************************************************************************
     */

    statics: {
      /**
       * The property to CSS mapping.
       */
      PROPERTY_CSS_MAPPING: {
        alignX: {
          "qx-hbox": {
            left: "qx-flex-justify-start",
            center: "qx-flex-justify-center",
            right: "qx-flex-justify-end"
          },
          "qx-vbox": {
            left: "qx-flex-align-start",
            center: "qx-flex-align-center",
            right: "qx-flex-align-end"
          }
        },
        alignY: {
          "qx-hbox": {
            top: "qx-flex-align-start",
            middle: "qx-flex-align-center",
            bottom: "qx-flex-align-end"
          },
          "qx-vbox": {
            top: "qx-flex-justify-start",
            middle: "qx-flex-justify-center",
            bottom: "qx-flex-justify-end"
          }
        },
        reversed: {
          "qx-hbox": {
            "true": "qx-flex-reverse",
            "false": null
          },
          "qx-vbox": {
            "true": "qx-flex-reverse",
            "false": null
          }
        }
      },
      /**
       * Supported child layout properties. Used to check if the property is allowed.
       * List all supported child layout properties here.
       */
      SUPPORTED_CHILD_LAYOUT_PROPERTIES: {
        flex: 1
      }
    },
    /*
     *****************************************************************************
        MEMBERS
     *****************************************************************************
     */

    members: {
      // overridden
      _getSupportedChildLayoutProperties: function _getSupportedChildLayoutProperties() {
        return qx.ui.mobile.layout.AbstractBox.SUPPORTED_CHILD_LAYOUT_PROPERTIES;
      },
      // overridden
      _setLayoutProperty: function _setLayoutProperty(widget, property, value) {
        if (property == "flex") {
          var old = this._getChildLayoutPropertyValue(widget, property);
          if (old != null) {
            widget.removeCssClass("qx-flex" + value);
          }
          widget.addCssClass("qx-flex" + value);
        }
      },
      // overridden
      connectToWidget: function connectToWidget(widget) {
        if (this._widget) {
          this.resetAlignX();
          this.resetAlignY();
          this.resetReversed();
        }
        qx.ui.mobile.layout.AbstractBox.superclass.prototype.connectToWidget.call(this, widget);
      },
      // overridden
      disconnectFromChildWidget: function disconnectFromChildWidget(widget) {
        qx.ui.mobile.layout.AbstractBox.superclass.prototype.disconnectFromChildWidget.call(this);
        for (var i = 0; i <= 6; i++) {
          widget.removeCssClass("qx-flex" + i);
        }
      },
      // property apply
      _applyLayoutChange: function _applyLayoutChange(value, old, property) {
        if (this._widget) {
          // In this case the layout should only have one main css class.
          var layoutCss = this._getCssClasses()[0];
          var CSS_MAPPING = qx.ui.mobile.layout.AbstractBox.PROPERTY_CSS_MAPPING[property][layoutCss];
          if (old) {
            var oldCssClass = CSS_MAPPING[old];
            if (oldCssClass) {
              this._widget.removeCssClass(oldCssClass);
            }
          }
          if (value) {
            var cssClass = CSS_MAPPING[value];
            if (cssClass) {
              this._widget.addCssClass(cssClass);
            }
          }
        } else {
          // remember the state until the widget is connected
          if (value) {
            this._addCachedProperty(property, value);
          }
        }
      }
    }
  });
  qx.ui.mobile.layout.AbstractBox.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.layout.AbstractBox": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * A vertical box layout.
   *
   * The vertical box layout lays out widgets in a vertical row, from top
   * to bottom.
   *
   * *Item Properties*
   *
   * <ul>
   * <li><strong>flex</strong> <em>(Integer)</em>: The flex property determines how the container
   *   distributes remaining empty space among its children. If items are made
   *   flexible, they can grow or shrink accordingly. Their relative flex values
   *   determine how the items are being resized, i.e. the larger the flex ratio
   *   of two items, the larger the resizing of the first item compared to the
   *   second.
   * </li>
   * </ul>
   *
   * *Example*
   *
   * Here is a little example of how to use the VBox layout.
   *
   * <pre class="javascript">
   * var layout = new qx.ui.mobile.layout.VBox().set({alignY:"middle"});
   *
   * var container = new qx.ui.mobile.container.Composite(layout);
   *
   * container.add(new qx.ui.mobile.basic.Label("1"));
   * container.add(new qx.ui.mobile.basic.Label("2"), {flex:1});
   * container.add(new qx.ui.mobile.basic.Label("3"));
   * </pre>
   */
  qx.Class.define("qx.ui.mobile.layout.VBox", {
    extend: qx.ui.mobile.layout.AbstractBox,
    /*
     *****************************************************************************
        MEMBERS
     *****************************************************************************
     */

    members: {
      // overridden
      _getCssClasses: function _getCssClasses() {
        return ["qx-vbox"];
      }
    }
  });
  qx.ui.mobile.layout.VBox.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.page.Page": {
        "construct": true,
        "require": true
      },
      "qx.ui.mobile.container.INavigation": {
        "require": true
      },
      "qx.ui.mobile.navigationbar.Title": {},
      "qx.ui.mobile.layout.HBox": {},
      "qx.ui.mobile.container.Composite": {},
      "qx.ui.mobile.navigationbar.BackButton": {},
      "qx.ui.mobile.navigationbar.Button": {},
      "qx.ui.mobile.container.Scroll": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Specialized page. This page includes already a {@link qx.ui.mobile.navigationbar.NavigationBar}
   * and and a {@link qx.ui.mobile.container.Scroll} container.
   * The NavigationPage can only be used with a page manager {@link qx.ui.mobile.page.Manager}.
  
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *
   *  var manager = new qx.ui.mobile.page.Manager();
   *  var page = new qx.ui.mobile.page.NavigationPage();
   *  page.setTitle("Page Title");
   *  page.setShowBackButton(true);
   *  page.setBackButtonText("Back")
   *  page.addListener("initialize", function()
   *  {
   *    var button = new qx.ui.mobile.form.Button("Next Page");
   *    page.getContent().add(button);
   *  },this);
   *
   *  page.addListener("back", function()
   *  {
   *    otherPage.show({animation:"cube", reverse:true});
   *  },this);
   *
   *  manager.addDetail(page);
   *  page.show();
   * </pre>
   *
   * This example creates a NavigationPage with a title and a back button. In the
   * <code>initialize</code> lifecycle method a button is added.
   */
  qx.Class.define("qx.ui.mobile.page.NavigationPage", {
    extend: qx.ui.mobile.page.Page,
    implement: qx.ui.mobile.container.INavigation,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param wrapContentByGroup {Boolean} Defines whether a group box should wrap the content. This can be used for defining a page margin.
     * @param layout {qx.ui.mobile.layout.Abstract} The layout of this page.
     */
    construct: function construct(wrapContentByGroup, layout) {
      qx.ui.mobile.page.Page.constructor.call(this);
      if (wrapContentByGroup != null) {
        this._wrapContentByGroup = wrapContentByGroup;
      }
    },
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /** Fired when the user tapped on the navigation button */
      action: "qx.event.type.Event"
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** The title of the page */
      title: {
        check: "String",
        init: "",
        event: "changeTitle",
        apply: "_applyTitle"
      },
      /** The back button text */
      backButtonText: {
        check: "String",
        init: "",
        apply: "_applyBackButtonText"
      },
      /** The action button text */
      buttonText: {
        check: "String",
        init: "",
        apply: "_applyActionButtonText"
      },
      /** The action button icon */
      buttonIcon: {
        check: "String",
        init: null,
        nullable: true,
        apply: "_applyActionButtonIcon"
      },
      /**
       * Whether to show the back button.
       */
      showBackButton: {
        check: "Boolean",
        init: false,
        apply: "_applyShowBackButton"
      },
      /**
       * Indicates whether the back button should be shown on tablet.
       */
      showBackButtonOnTablet: {
        check: "Boolean",
        init: false
      },
      /**
       * Whether to show the action button.
       */
      showButton: {
        check: "Boolean",
        init: false,
        apply: "_applyShowButton"
      },
      /**
       * Toggles visibility of NavigationBar in
       * wrapping container {@link qx.ui.mobile.container.Navigation}
       */
      navigationBarHidden: {
        check: "Boolean",
        init: false
      },
      /**
       * Sets the transition duration (in seconds) for the effect when hiding/showing
       * the NavigationBar through boolean property navigationBarHidden.
       */
      navigationBarToggleDuration: {
        check: "Number",
        init: 0.8
      },
      /**
       * The CSS class to add to the content per default.
       */
      contentCssClass: {
        check: "String",
        init: "content",
        nullable: true,
        apply: "_applyContentCssClass"
      }
    },
    /*
     *****************************************************************************
        MEMBERS
     *****************************************************************************
     */

    members: {
      _isTablet: false,
      _wrapContentByGroup: true,
      __backButton__P_24_0: null,
      __actionButton__P_24_1: null,
      __content__P_24_2: null,
      __scrollContainer__P_24_3: null,
      __title__P_24_4: null,
      __leftContainer__P_24_5: null,
      __rightContainer__P_24_6: null,
      // interface implementation
      getTitleWidget: function getTitleWidget() {
        if (!this.__title__P_24_4) {
          this.__title__P_24_4 = this._createTitleWidget();
        }
        return this.__title__P_24_4;
      },
      /**
       * Creates the navigation bar title.
       *
       * @return {qx.ui.mobile.navigationbar.Title} The created title widget
       */
      _createTitleWidget: function _createTitleWidget() {
        return new qx.ui.mobile.navigationbar.Title(this.getTitle());
      },
      // property apply
      _applyTitle: function _applyTitle(value, old) {
        if (this.__title__P_24_4) {
          this.__title__P_24_4.setValue(value);
        }
      },
      // interface implementation
      getLeftContainer: function getLeftContainer() {
        if (!this.__leftContainer__P_24_5) {
          this.__leftContainer__P_24_5 = this._createLeftContainer();
        }
        return this.__leftContainer__P_24_5;
      },
      // interface implementation
      getRightContainer: function getRightContainer() {
        if (!this.__rightContainer__P_24_6) {
          this.__rightContainer__P_24_6 = this._createRightContainer();
        }
        return this.__rightContainer__P_24_6;
      },
      /**
       * Creates the left container for the navigation bar.
       *
       * @return {qx.ui.mobile.container.Composite} Creates the left container for the navigation bar.
       */
      _createLeftContainer: function _createLeftContainer() {
        var layout = new qx.ui.mobile.layout.HBox();
        var container = new qx.ui.mobile.container.Composite(layout);
        container.addCssClass("left-container");
        this.__backButton__P_24_0 = this._createBackButton();
        this.__backButton__P_24_0.addListener("tap", this._onBackButtonTap, this);
        this._showBackButton();
        container.add(this.__backButton__P_24_0);
        return container;
      },
      /**
       * Creates the right container for the navigation bar.
       *
       * @return {qx.ui.mobile.container.Composite} Creates the right container for the navigation bar.
       */
      _createRightContainer: function _createRightContainer() {
        var layout = new qx.ui.mobile.layout.HBox();
        var container = new qx.ui.mobile.container.Composite(layout);
        container.addCssClass("right-container");
        this.__actionButton__P_24_1 = this._createButton();
        this.__actionButton__P_24_1.addListener("tap", this._onButtonTap, this);
        this._showButton();
        container.add(this.__actionButton__P_24_1);
        return container;
      },
      /**
       * Creates the navigation bar back button.
       * Creates the scroll container.
       *
       * @return {qx.ui.mobile.navigationbar.BackButton} The created back button widget
       */
      _createBackButton: function _createBackButton() {
        return new qx.ui.mobile.navigationbar.BackButton(this.getBackButtonText());
      },
      /**
       * Creates the navigation bar button.
       * Creates the content container.
       *
       * @return {qx.ui.mobile.navigationbar.Button} The created button widget
       */
      _createButton: function _createButton() {
        return new qx.ui.mobile.navigationbar.Button(this.getButtonText(), this.getButtonIcon());
      },
      /**
       * Returns the content container. Add all your widgets to this container.
       *
       * @return {qx.ui.mobile.container.Composite} The content container
       */
      getContent: function getContent() {
        return this.__content__P_24_2;
      },
      /**
       * Returns the back button widget.
       *
       * @return {qx.ui.mobile.navigationbar.BackButton} The back button widget
       */
      _getBackButton: function _getBackButton() {
        return this.__backButton__P_24_0;
      },
      /**
       * Returns the action button widget.
       *
       * @return {qx.ui.mobile.navigationbar.Button} The action button widget
       */
      _getButton: function _getButton() {
        return this.__actionButton__P_24_1;
      },
      /**
       * Sets the isTablet flag.
       * @param isTablet {Boolean} value of the isTablet flag.
       */
      setIsTablet: function setIsTablet(isTablet) {
        this._isTablet = isTablet;
      },
      /**
       * Returns the isTablet flag.
       * @return {Boolean} the isTablet flag of this page.
       */
      isTablet: function isTablet() {
        return this._isTablet;
      },
      /**
       * Returns the scroll container.
       *
       * @return {qx.ui.mobile.container.Scroll} The scroll container
       */
      _getScrollContainer: function _getScrollContainer() {
        return this.__scrollContainer__P_24_3;
      },
      /**
       * Adds a widget, below the NavigationBar.
       *
       * @param widget {qx.ui.mobile.core.Widget} The widget to add, after NavigationBar.
       */
      addAfterNavigationBar: function addAfterNavigationBar(widget) {
        if (widget && this.__scrollContainer__P_24_3) {
          this.addBefore(widget, this.__scrollContainer__P_24_3);
        }
      },
      // property apply
      _applyBackButtonText: function _applyBackButtonText(value, old) {
        if (this.__backButton__P_24_0) {
          this.__backButton__P_24_0.setValue(value);
        }
      },
      // property apply
      _applyActionButtonText: function _applyActionButtonText(value, old) {
        if (this.__actionButton__P_24_1) {
          this.__actionButton__P_24_1.setValue(value);
        }
      },
      // property apply
      _applyActionButtonIcon: function _applyActionButtonIcon(value, old) {
        if (this.__actionButton__P_24_1) {
          this.__actionButton__P_24_1.setIcon(value);
        }
      },
      // property apply
      _applyShowBackButton: function _applyShowBackButton(value, old) {
        this._showBackButton();
      },
      // property apply
      _applyShowButton: function _applyShowButton(value, old) {
        this._showButton();
      },
      // property apply
      _applyContentCssClass: function _applyContentCssClass(value, old) {
        if (this.__content__P_24_2) {
          this.__content__P_24_2.setDefaultCssClass(value);
        }
      },
      /**
       * Helper method to show the back button.
       */
      _showBackButton: function _showBackButton() {
        if (this.__backButton__P_24_0) {
          if (this.getShowBackButton()) {
            this.__backButton__P_24_0.show();
          } else {
            this.__backButton__P_24_0.exclude();
          }
        }
      },
      /**
       * Helper method to show the button.
       */
      _showButton: function _showButton() {
        if (this.__actionButton__P_24_1) {
          if (this.getShowButton()) {
            this.__actionButton__P_24_1.show();
          } else {
            this.__actionButton__P_24_1.exclude();
          }
        }
      },
      // overridden
      _initialize: function _initialize() {
        qx.ui.mobile.page.NavigationPage.superclass.prototype._initialize.call(this);
        this.__scrollContainer__P_24_3 = this._createScrollContainer();
        this.__content__P_24_2 = this._createContent();
        if (this.__content__P_24_2) {
          this.__scrollContainer__P_24_3.add(this.__content__P_24_2, {
            flex: 1
          });
        }
        if (this.__scrollContainer__P_24_3) {
          this.add(this.__scrollContainer__P_24_3, {
            flex: 1
          });
        }
      },
      /**
       * Creates the scroll container.
       *
       * @return {qx.ui.mobile.container.Scroll} The created scroll container
       */
      _createScrollContainer: function _createScrollContainer() {
        return new qx.ui.mobile.container.Scroll();
      },
      /**
       * Creates the content container.
       *
       * @return {qx.ui.mobile.container.Composite} The created content container
       */
      _createContent: function _createContent() {
        var content = new qx.ui.mobile.container.Composite();
        content.setDefaultCssClass(this.getContentCssClass());
        if (this._wrapContentByGroup == true) {
          content.addCssClass("group");
        }
        return content;
      },
      /**
       * Event handler. Called when the tap event occurs on the back button.
       *
       * @param evt {qx.event.type.Tap} The tap event
       */
      _onBackButtonTap: function _onBackButtonTap(evt) {
        this.back();
      },
      /**
       * Event handler. Called when the tap event occurs on the button.
       *
       * @param evt {qx.event.type.Tap} The tap event
       */
      _onButtonTap: function _onButtonTap(evt) {
        this.fireEvent("action");
      }
    },
    destruct: function destruct() {
      this._disposeObjects("__leftContainer__P_24_5", "__rightContainer__P_24_6", "__backButton__P_24_0", "__actionButton__P_24_1", "__title__P_24_4");
      this.__leftContainer__P_24_5 = this.__rightContainer__P_24_6 = this.__backButton__P_24_0 = this.__actionButton__P_24_1 = null;
      this.__title__P_24_4 = this.__content__P_24_2 = this.__scrollContainer__P_24_3 = null;
      this._isTablet = null;
    }
  });
  qx.ui.mobile.page.NavigationPage.$$dbClassInfo = $$dbClassInfo;
})();
//# sourceMappingURL=package-3.js.map?dt=1747169175997
qx.$$packageData['3'] = {
  "locales": {},
  "resources": {},
  "translations": {}
};
