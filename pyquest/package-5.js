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
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.core.Init": {
        "construct": true
      },
      "qx.bom.client.Device": {
        "construct": true,
        "require": true
      },
      "qx.event.Registration": {
        "construct": true
      },
      "qx.bom.Viewport": {
        "construct": true
      },
      "qx.ui.mobile.container.Drawer": {},
      "qx.ui.mobile.layout.HBox": {},
      "qx.ui.mobile.container.Composite": {},
      "qx.ui.mobile.layout.VBox": {},
      "qx.ui.mobile.navigationbar.Button": {},
      "qx.ui.mobile.container.Navigation": {},
      "qx.lang.Type": {},
      "qx.ui.mobile.page.NavigationPage": {},
      "qx.lang.String": {},
      "qx.bom.element.Style": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "device.type": {
          "construct": true,
          "className": "qx.bom.client.Device"
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
       * Christopher Zuendorf (czuendorf)
  
  ************************************************************************ */

  /**
   * The page manager decides automatically whether the added pages should be
   * displayed in a master/detail view (for tablet) or as a plain card layout (for
   * smartphones).
   *
   * *Example*
   *
   * Here is a little example of how to use the manager.
   *
   * <pre class='javascript'>
   *  var manager = new qx.ui.mobile.page.Manager();
   *  var page1 = new qx.ui.mobile.page.NavigationPage();
   *  var page2 = new qx.ui.mobile.page.NavigationPage();
   *  var page3 = new qx.ui.mobile.page.NavigationPage();
   *  manager.addMaster(page1);
   *  manager.addDetail([page2,page3]);
   *
   *  page1.show();
   * </pre>
   *
   *
   */
  qx.Class.define("qx.ui.mobile.page.Manager", {
    extend: qx.core.Object,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param isTablet {Boolean?} flag which triggers the manager to layout for tablet (or big screens/displays) or mobile devices. If parameter is null,
     * qx.core.Environment.get("device.type") is called for decision.
     * @param root {qx.ui.mobile.core.Widget?} widget which should be used as root for this manager.
     */
    construct: function construct(isTablet, root) {
      qx.core.Object.constructor.call(this);
      root = root || qx.core.Init.getApplication().getRoot();
      if (typeof isTablet !== "undefined" && isTablet !== null) {
        this.__isTablet__P_6_0 = isTablet;
      } else {
        // If isTablet is undefined, call environment variable "device.type".
        // When "tablet" or "desktop" type >> do tablet layouting.
        this.__isTablet__P_6_0 = qx.core.Environment.get("device.type") == "desktop" || qx.core.Environment.get("device.type") == "tablet";
      }
      this.__detailNavigation__P_6_1 = this._createDetailNavigation();
      this.__detailNavigation__P_6_1.getNavigationBar().hide();
      if (this.__isTablet__P_6_0) {
        this.__masterNavigation__P_6_2 = this._createMasterNavigation();
        this.__masterNavigation__P_6_2.getNavigationBar().hide();
        this.__masterContainer__P_6_3 = this._createMasterContainer();
        this.__detailContainer__P_6_4 = this._createDetailContainer();
        this.__masterButton__P_6_5 = this._createMasterButton();
        this.__masterButton__P_6_5.addListener("tap", this._onMasterButtonTap, this);
        this.__hideMasterButton__P_6_6 = this._createHideMasterButton();
        this.__hideMasterButton__P_6_6.addListener("tap", this._onHideMasterButtonTap, this);
        this.__masterNavigation__P_6_2.addListener("update", this._onMasterContainerUpdate, this);
        this.__detailNavigation__P_6_1.addListener("update", this._onDetailContainerUpdate, this);
        root.add(this.__detailContainer__P_6_4, {
          flex: 1
        });
        this.__masterContainer__P_6_3.add(this.__masterNavigation__P_6_2, {
          flex: 1
        });
        this.__detailContainer__P_6_4.add(this.__detailNavigation__P_6_1, {
          flex: 1
        });
        qx.event.Registration.addListener(window, "orientationchange", this._onLayoutChange, this);
        this.__masterContainer__P_6_3.addListener("resize", this._onLayoutChange, this);

        // On Tablet Mode, no Animation should be shown by default.
        this.__masterNavigation__P_6_2.getLayout().setShowAnimation(false);
        this.__detailNavigation__P_6_1.getLayout().setShowAnimation(false);
        this.__masterContainer__P_6_3.forceHide();
        setTimeout(function () {
          if (qx.bom.Viewport.isLandscape()) {
            this.__masterContainer__P_6_3.show();
          }
        }.bind(this), 300);
      } else {
        root.add(this.__detailNavigation__P_6_1, {
          flex: 1
        });
      }
    },
    properties: {
      /**
       * The caption/label of the Master Button and Popup Title.
       */
      masterTitle: {
        init: "Master",
        check: "String",
        apply: "_applyMasterTitle"
      },
      /**
       * The caption/label of the Hide Master Button.
       */
      hideMasterButtonCaption: {
        init: "Hide",
        check: "String",
        apply: "_applyHideMasterButtonCaption"
      },
      /**
       * This flag controls whether the MasterContainer can be hidden on Landscape.
       */
      allowMasterHideOnLandscape: {
        init: true,
        check: "Boolean"
      },
      /**
       *  This flag controls whether the MasterContainer hides on portrait view,
       *  when a Detail Page fires the lifecycle event "start".
       */
      hideMasterOnDetailStart: {
        init: true,
        check: "Boolean"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __isTablet__P_6_0: null,
      __detailNavigation__P_6_1: null,
      __masterNavigation__P_6_2: null,
      __masterButton__P_6_5: null,
      __hideMasterButton__P_6_6: null,
      __masterPages__P_6_7: null,
      __detailPages__P_6_8: null,
      __masterContainer__P_6_3: null,
      __detailContainer__P_6_4: null,
      /**
       * Creates the master container.
       *
       * @return {qx.ui.mobile.container.Composite} The created container
       */
      _createMasterContainer: function _createMasterContainer() {
        var masterContainer = new qx.ui.mobile.container.Drawer(null, new qx.ui.mobile.layout.HBox()).set({
          hideOnParentTap: false,
          hideOnBack: false
        });
        masterContainer.addCssClass("master-detail-master");
        masterContainer.addListener("changeVisibility", this._onMasterChangeVisibility, this);
        return masterContainer;
      },
      /**
       * Creates the detail container.
       *
       * @return {qx.ui.mobile.container.Composite} The created container
       */
      _createDetailContainer: function _createDetailContainer() {
        var detailContainer = new qx.ui.mobile.container.Composite(new qx.ui.mobile.layout.VBox());
        detailContainer.setDefaultCssClass("master-detail-detail");
        return detailContainer;
      },
      /**
       * Getter for the Master Container
       * @return {qx.ui.mobile.container.Drawer} The Master Container.
       */
      getMasterContainer: function getMasterContainer() {
        return this.__masterContainer__P_6_3;
      },
      /**
       * Getter for the Detail Container
       * @return {qx.ui.mobile.container.Composite} The Detail Container.
       */
      getDetailContainer: function getDetailContainer() {
        return this.__detailContainer__P_6_4;
      },
      /**
       * Returns the button for showing/hiding the masterContainer.
       * @return {qx.ui.mobile.navigationbar.Button}
       */
      getMasterButton: function getMasterButton() {
        return this.__masterButton__P_6_5;
      },
      /**
       * Returns the masterNavigation.
       * @return {qx.ui.mobile.container.Navigation}
       */
      getMasterNavigation: function getMasterNavigation() {
        return this.__masterNavigation__P_6_2;
      },
      /**
       * Returns the detailNavigation.
       * @return {qx.ui.mobile.container.Navigation}
       */
      getDetailNavigation: function getDetailNavigation() {
        return this.__detailNavigation__P_6_1;
      },
      /**
       * Factory method for the master button, which is responsible for showing/hiding masterContainer.
       * @return {qx.ui.mobile.navigationbar.Button}
       */
      _createMasterButton: function _createMasterButton() {
        return new qx.ui.mobile.navigationbar.Button(this.getMasterTitle());
      },
      /**
       * Factory method for the hide master button, which is responsible for hiding masterContainer on Landscape view.
       * @return {qx.ui.mobile.navigationbar.Button}
       */
      _createHideMasterButton: function _createHideMasterButton() {
        return new qx.ui.mobile.navigationbar.Button("Hide");
      },
      /**
       * Factory method for masterNavigation.
       * @return {qx.ui.mobile.container.Navigation}
       */
      _createMasterNavigation: function _createMasterNavigation() {
        return new qx.ui.mobile.container.Navigation();
      },
      /**
       * Factory method for detailNavigation.
       * @return {qx.ui.mobile.container.Navigation}
       */
      _createDetailNavigation: function _createDetailNavigation() {
        return new qx.ui.mobile.container.Navigation();
      },
      /**
       * Adds an array of NavigationPages to masterContainer, if __isTablet is true. Otherwise it will be added to detailContainer.
       * @param pages {qx.ui.mobile.page.NavigationPage[]|qx.ui.mobile.page.NavigationPage} Array of NavigationPages or single NavigationPage.
       */
      addMaster: function addMaster(pages) {
        if (this.__isTablet__P_6_0) {
          if (pages) {
            if (!qx.lang.Type.isArray(pages)) {
              pages = [pages];
            }
            for (var i = 0; i < pages.length; i++) {
              var masterPage = pages[i];
              masterPage.addListener("start", this._onMasterPageStart, this);
            }
            if (this.__masterPages__P_6_7) {
              this.__masterPages__P_6_7.concat(pages);
            } else {
              this.__masterPages__P_6_7 = pages;
            }
            this._add(pages, this.__masterNavigation__P_6_2);
          }
        } else {
          this.addDetail(pages);
        }
      },
      /**
       * Adds an array of NavigationPage to the detailContainer.
       * @param pages {qx.ui.mobile.page.NavigationPage[]|qx.ui.mobile.page.NavigationPage} Array of NavigationPages or single NavigationPage.
       */
      addDetail: function addDetail(pages) {
        this._add(pages, this.__detailNavigation__P_6_1);
        if (pages && this.__isTablet__P_6_0) {
          if (!qx.lang.Type.isArray(pages)) {
            pages = [pages];
          }
          for (var i = 0; i < pages.length; i++) {
            var detailPage = pages[i];
            detailPage.addListener("start", this._onDetailPageStart, this);
          }
          if (this.__detailPages__P_6_8) {
            this.__detailPages__P_6_8.concat(pages);
          } else {
            this.__detailPages__P_6_8 = pages;
          }
        }
      },
      /**
       * Called when a detailPage reaches lifecycle state "start".
       * @param evt {qx.event.type.Event} source event.
       */
      _onDetailPageStart: function _onDetailPageStart(evt) {
        if (qx.bom.Viewport.isPortrait() && this.isHideMasterOnDetailStart()) {
          this.__masterContainer__P_6_3.hide();
        }
      },
      /**
       * Called when a masterPage reaches lifecycle state "start". Then property masterTitle will be update with masterPage's title.
       * @param evt {qx.event.type.Event} source event.
       */
      _onMasterPageStart: function _onMasterPageStart(evt) {
        var masterPage = evt.getTarget();
        var masterPageTitle = masterPage.getTitle();
        this.setMasterTitle(masterPageTitle);
      },
      /**
       * Adds an array of NavigationPage to the target container.
       * @param pages {qx.ui.mobile.page.NavigationPage[]|qx.ui.mobile.page.NavigationPage} Array of NavigationPages, or NavigationPage.
       * @param target {qx.ui.mobile.container.Navigation} target navigation container.
       */
      _add: function _add(pages, target) {
        if (!qx.lang.Type.isArray(pages)) {
          pages = [pages];
        }
        for (var i = 0; i < pages.length; i++) {
          var page = pages[i];
          {
            this.assertInstance(page, qx.ui.mobile.page.NavigationPage);
          }
          if (this.__isTablet__P_6_0 && !page.getShowBackButtonOnTablet()) {
            page.setShowBackButton(false);
          }
          page.setIsTablet(this.__isTablet__P_6_0);
          target.add(page);
        }
      },
      /**
       * Called when masterContainer is updated.
       * @param evt {qx.event.type.Data} source event.
       */
      _onMasterContainerUpdate: function _onMasterContainerUpdate(evt) {
        var widget = evt.getData();
        widget.getRightContainer().remove(this.__hideMasterButton__P_6_6);
        widget.getRightContainer().add(this.__hideMasterButton__P_6_6);
      },
      /**
       * Called when detailContainer is updated.
       * @param evt {qx.event.type.Data} source event.
       */
      _onDetailContainerUpdate: function _onDetailContainerUpdate(evt) {
        var widget = evt.getData();
        widget.getLeftContainer().remove(this.__masterButton__P_6_5);
        widget.getLeftContainer().add(this.__masterButton__P_6_5);
      },
      /**
       * Called when user taps on masterButton.
       */
      _onMasterButtonTap: function _onMasterButtonTap() {
        this.__masterContainer__P_6_3.show();
      },
      /**
       * Called when user taps on hideMasterButton.
       */
      _onHideMasterButtonTap: function _onHideMasterButtonTap() {
        this._removeDetailContainerGap();
        this.__masterContainer__P_6_3.hide();
      },
      /**
       * Event handler for <code>changeVisibility</code> event on master container.
       * @param evt {qx.event.type.Data} the change event.
       */
      _onMasterChangeVisibility: function _onMasterChangeVisibility(evt) {
        var isMasterVisible = "visible" === evt.getData();
        if (qx.bom.Viewport.isLandscape()) {
          if (this.isAllowMasterHideOnLandscape()) {
            if (isMasterVisible) {
              this._createDetailContainerGap();
              this.__masterButton__P_6_5.exclude();
              this.__hideMasterButton__P_6_6.show();
            } else {
              this.__masterButton__P_6_5.show();
              this.__hideMasterButton__P_6_6.show();
            }
          } else {
            this.__masterButton__P_6_5.exclude();
            this.__hideMasterButton__P_6_6.exclude();
          }
        } else {
          this._removeDetailContainerGap();
          this.__masterButton__P_6_5.show();
          this.__hideMasterButton__P_6_6.show();
        }
      },
      /**
       * Called when layout of masterDetailContainer changes.
       */
      _onLayoutChange: function _onLayoutChange() {
        if (this.__isTablet__P_6_0) {
          if (qx.bom.Viewport.isLandscape()) {
            this.__masterContainer__P_6_3.setHideOnParentTap(false);
            if (this.__masterContainer__P_6_3.isHidden()) {
              this.__masterContainer__P_6_3.show();
            } else {
              this._removeDetailContainerGap();
              this.__masterContainer__P_6_3.hide();
            }
          } else {
            this._removeDetailContainerGap();
            this.__masterContainer__P_6_3.setHideOnParentTap(true);
            this.__masterContainer__P_6_3.hide();
          }
        }
      },
      /**
       * Returns the corresponding CSS property key which fits to the drawer's orientation.
       * @return {String} the CSS property key.
       */
      _getGapPropertyKey: function _getGapPropertyKey() {
        return "padding" + qx.lang.String.capitalize(this.__masterContainer__P_6_3.getOrientation());
      },
      /**
       * Moves detailContainer to the right edge of MasterContainer.
       * Creates spaces for aligning master and detail container aside each other.
       */
      _createDetailContainerGap: function _createDetailContainerGap() {
        qx.bom.element.Style.set(this.__detailContainer__P_6_4.getContainerElement(), this._getGapPropertyKey(), this.__masterContainer__P_6_3.getSize() / 16 + "rem");
        qx.event.Registration.fireEvent(window, "resize");
      },
      /**
       * Moves detailContainer to the left edge of viewport.
       */
      _removeDetailContainerGap: function _removeDetailContainerGap() {
        qx.bom.element.Style.set(this.__detailContainer__P_6_4.getContainerElement(), this._getGapPropertyKey(), null);
        qx.event.Registration.fireEvent(window, "resize");
      },
      /**
       * Called on property changes of hideMasterButtonCaption.
       * @param value {String} new caption
       * @param old {String} previous caption
       */
      _applyHideMasterButtonCaption: function _applyHideMasterButtonCaption(value, old) {
        if (this.__isTablet__P_6_0) {
          this.__hideMasterButton__P_6_6.setLabel(value);
        }
      },
      /**
       * Called on property changes of masterTitle.
       * @param value {String} new title
       * @param old {String} previous title
       */
      _applyMasterTitle: function _applyMasterTitle(value, old) {
        if (this.__isTablet__P_6_0) {
          this.__masterButton__P_6_5.setLabel(value);
        }
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      if (this.__masterPages__P_6_7) {
        for (var i = 0; i < this.__masterPages__P_6_7.length; i++) {
          var masterPage = this.__masterPages__P_6_7[i];
          masterPage.removeListener("start", this._onMasterPageStart, this);
        }
      }
      if (this.___detailPages__P_6_9) {
        for (var j = 0; j < this.___detailPages__P_6_9.length; j++) {
          var detailPage = this.___detailPages__P_6_9[j];
          detailPage.removeListener("start", this._onDetailPageStart, this);
        }
      }
      if (this.__isTablet__P_6_0) {
        this.__masterContainer__P_6_3.removeListener("changeVisibility", this._onMasterChangeVisibility, this);
        this.__masterContainer__P_6_3.removeListener("resize", this._onLayoutChange, this);
        qx.event.Registration.removeListener(window, "orientationchange", this._onLayoutChange, this);
      }
      this.__masterPages__P_6_7 = this.__detailPages__P_6_8 = null;
      this._disposeObjects("__detailNavigation__P_6_1", "__masterNavigation__P_6_2", "__masterButton__P_6_5");
    }
  });
  qx.ui.mobile.page.Manager.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.lang.normalize.String": {
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.element.Style": {}
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
   * Contains methods to control and query the element's clip property
   *
   * @require(qx.lang.normalize.String)
   */
  qx.Bootstrap.define("qx.bom.element.Clip", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Compiles the given clipping into a CSS compatible string. This
       * is a simple square which describes the visible area of an DOM element.
       * Changing the clipping does not change the dimensions of
       * an element.
       *
       * @param map {Map}  Map which contains <code>left</code>, <code>top</code>
       *   <code>width</code> and <code>height</code> of the clipped area.
       * @return {String} CSS compatible string
       */
      compile: function compile(map) {
        if (!map) {
          return "clip:auto;";
        }
        var left = map.left;
        var top = map.top;
        var width = map.width;
        var height = map.height;
        var right, bottom;
        if (left == null) {
          right = width == null ? "auto" : width + "px";
          left = "auto";
        } else {
          right = width == null ? "auto" : left + width + "px";
          left = left + "px";
        }
        if (top == null) {
          bottom = height == null ? "auto" : height + "px";
          top = "auto";
        } else {
          bottom = height == null ? "auto" : top + height + "px";
          top = top + "px";
        }
        return "clip:rect(" + top + "," + right + "," + bottom + "," + left + ");";
      },
      /**
       * Gets the clipping of the given element.
       *
       * @param element {Element} DOM element to query
       * @param mode {Number} Choose one of the modes {@link qx.bom.element.Style#COMPUTED_MODE},
       *   {@link qx.bom.element.Style#CASCADED_MODE}, {@link qx.bom.element.Style#LOCAL_MODE}.
       *   The computed mode is the default one.
       * @return {Map} Map which contains <code>left</code>, <code>top</code>
       *   <code>width</code> and <code>height</code> of the clipped area.
       *   Each one could be null or any integer value.
       */
      get: function get(element, mode) {
        var clip = qx.bom.element.Style.get(element, "clip", mode, false);
        var left, top, width, height;
        var right, bottom;
        if (typeof clip === "string" && clip !== "auto" && clip !== "") {
          clip = clip.trim();

          // Do not use "global" here. This will break Firefox because of
          // an issue that the lastIndex will not be reset on separate calls.
          if (/\((.*)\)/.test(clip)) {
            var result = RegExp.$1;

            // Process result
            // Some browsers store values space-separated, others comma-separated.
            // Handle both cases by means of feature-detection.
            if (/,/.test(result)) {
              var split = result.split(",");
            } else {
              var split = result.split(" ");
            }
            top = split[0].trim();
            right = split[1].trim();
            bottom = split[2].trim();
            left = split[3].trim();

            // Normalize "auto" to null
            if (left === "auto") {
              left = null;
            }
            if (top === "auto") {
              top = null;
            }
            if (right === "auto") {
              right = null;
            }
            if (bottom === "auto") {
              bottom = null;
            }

            // Convert to integer values
            if (top != null) {
              top = parseInt(top, 10);
            }
            if (right != null) {
              right = parseInt(right, 10);
            }
            if (bottom != null) {
              bottom = parseInt(bottom, 10);
            }
            if (left != null) {
              left = parseInt(left, 10);
            }

            // Compute width and height
            if (right != null && left != null) {
              width = right - left;
            } else if (right != null) {
              width = right;
            }
            if (bottom != null && top != null) {
              height = bottom - top;
            } else if (bottom != null) {
              height = bottom;
            }
          } else {
            throw new Error("Could not parse clip string: " + clip);
          }
        }

        // Return map when any value is available.
        return {
          left: left || null,
          top: top || null,
          width: width || null,
          height: height || null
        };
      },
      /**
       * Sets the clipping of the given element. This is a simple
       * square which describes the visible area of an DOM element.
       * Changing the clipping does not change the dimensions of
       * an element.
       *
       * @param element {Element} DOM element to modify
       * @param map {Map} A map with one or more of these available keys:
       *   <code>left</code>, <code>top</code>, <code>width</code>, <code>height</code>.
       */
      set: function set(element, map) {
        if (!map) {
          element.style.clip = "rect(auto,auto,auto,auto)";
          return;
        }
        var left = map.left;
        var top = map.top;
        var width = map.width;
        var height = map.height;
        var right, bottom;
        if (left == null) {
          right = width == null ? "auto" : width + "px";
          left = "auto";
        } else {
          right = width == null ? "auto" : left + width + "px";
          left = left + "px";
        }
        if (top == null) {
          bottom = height == null ? "auto" : height + "px";
          top = "auto";
        } else {
          bottom = height == null ? "auto" : top + height + "px";
          top = top + "px";
        }
        element.style.clip = "rect(" + top + "," + right + "," + bottom + "," + left + ")";
      },
      /**
       * Resets the clipping of the given DOM element.
       *
       * @param element {Element} DOM element to modify
       */
      reset: function reset(element) {
        element.style.clip = "rect(auto, auto, auto, auto)";
      }
    }
  });
  qx.bom.element.Clip.$$dbClassInfo = $$dbClassInfo;
})();

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
      "qx.bom.element.Style": {},
      "qx.bom.client.Engine": {
        "defer": "load",
        "require": true
      },
      "qx.bom.client.Browser": {
        "defer": "load",
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "defer": true,
          "className": "qx.bom.client.Engine"
        },
        "engine.version": {
          "defer": true,
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "defer": true,
          "className": "qx.bom.client.Browser"
        },
        "browser.quirksmode": {
          "defer": true,
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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
  
  ************************************************************************ */

  /**
   * Contains methods to control and query the element's cursor property
   */
  qx.Bootstrap.define("qx.bom.element.Cursor", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** Internal helper structure to map cursor values to supported ones */
      __map__P_78_0: {},
      /**
       * Compiles the given cursor into a CSS compatible string.
       *
       * @param cursor {String} Valid CSS cursor name
       * @return {String} CSS string
       */
      compile: function compile(cursor) {
        return "cursor:" + (this.__map__P_78_0[cursor] || cursor) + ";";
      },
      /**
       * Returns the computed cursor style for the given element.
       *
       * @param element {Element} The element to query
       * @param mode {Number} Choose one of the modes {@link qx.bom.element.Style#COMPUTED_MODE},
       *   {@link qx.bom.element.Style#CASCADED_MODE}, {@link qx.bom.element.Style#LOCAL_MODE}.
       *   The computed mode is the default one.
       * @return {String} Computed cursor value of the given element.
       */
      get: function get(element, mode) {
        return qx.bom.element.Style.get(element, "cursor", mode, false);
      },
      /**
       * Applies a new cursor style to the given element
       *
       * @param element {Element} The element to modify
       * @param value {String} New cursor value to set
       */
      set: function set(element, value) {
        element.style.cursor = this.__map__P_78_0[value] || value;
      },
      /**
       * Removes the local cursor style applied to the element
       *
       * @param element {Element} The element to modify
       */
      reset: function reset(element) {
        element.style.cursor = "";
      }
    },
    defer: function defer(statics) {
      // < IE 9
      if (qx.core.Environment.get("engine.name") == "mshtml" && (parseFloat(qx.core.Environment.get("engine.version")) < 9 || qx.core.Environment.get("browser.documentmode") < 9) && !qx.core.Environment.get("browser.quirksmode")) {
        statics.__map__P_78_0["nesw-resize"] = "ne-resize";
        statics.__map__P_78_0["nwse-resize"] = "nw-resize";
      }
    }
  });
  qx.bom.element.Cursor.$$dbClassInfo = $$dbClassInfo;
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
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Css": {
        "require": true
      },
      "qx.bom.element.Style": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "load": true,
          "className": "qx.bom.client.Engine"
        },
        "css.opacity": {
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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Christian Hagendorn (chris_schmidt)
  
     ======================================================================
  
     This class contains code based on the following work:
  
     * Prototype JS
       http://www.prototypejs.org/
       Version 1.5
  
       Copyright:
         (c) 2006-2007, Prototype Core Team
  
       License:
         MIT: http://www.opensource.org/licenses/mit-license.php
  
       Authors:
         * Prototype Core Team
  
     ----------------------------------------------------------------------
  
       Copyright (c) 2005-2008 Sam Stephenson
  
       Permission is hereby granted, free of charge, to any person
       obtaining a copy of this software and associated documentation
       files (the "Software"), to deal in the Software without restriction,
       including without limitation the rights to use, copy, modify, merge,
       publish, distribute, sublicense, and/or sell copies of the Software,
       and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
  
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
       HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
       WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
       DEALINGS IN THE SOFTWARE.
  
  ************************************************************************ */

  /**
   * Cross-browser opacity support.
   *
   * Optimized for animations (contains workarounds for typical flickering
   * in some browsers). Reduced class dependencies for optimal size and
   * performance.
   */
  qx.Bootstrap.define("qx.bom.element.Opacity", {
    statics: {
      /**
       * Compiles the given opacity value into a cross-browser CSS string.
       * Accepts numbers between zero and one
       * where "0" means transparent, "1" means opaque.
       *
       * @signature function(opacity)
       * @param opacity {Float} A float number between 0 and 1
       * @return {String} CSS compatible string
       */
      compile: qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(opacity) {
          if (opacity >= 1) {
            opacity = 1;
          }
          if (opacity < 0.00001) {
            opacity = 0;
          }
          if (qx.core.Environment.get("css.opacity")) {
            return "opacity:" + opacity + ";";
          } else {
            return "zoom:1;filter:alpha(opacity=" + opacity * 100 + ");";
          }
        },
        "default": function _default(opacity) {
          return "opacity:" + opacity + ";";
        }
      }),
      /**
       * Sets opacity of given element. Accepts numbers between zero and one
       * where "0" means transparent, "1" means opaque.
       *
       * @param element {Element} DOM element to modify
       * @param opacity {Float} A float number between 0 and 1
       * @signature function(element, opacity)
       */
      set: qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(element, opacity) {
          if (qx.core.Environment.get("css.opacity")) {
            element.style.opacity = opacity;
          } else {
            // Read in computed filter
            var filter = qx.bom.element.Style.get(element, "filter", qx.bom.element.Style.COMPUTED_MODE, false);
            if (opacity >= 1) {
              opacity = 1;
            }
            if (opacity < 0.00001) {
              opacity = 0;
            }

            // IE has trouble with opacity if it does not have layout (hasLayout)
            // Force it by setting the zoom level
            if (!element.currentStyle || !element.currentStyle.hasLayout) {
              element.style.zoom = 1;
            }

            // Remove old alpha filter and add new one
            element.style.filter = filter.replace(/alpha\([^\)]*\)/gi, "") + "alpha(opacity=" + opacity * 100 + ")";
          }
        },
        "default": function _default(element, opacity) {
          element.style.opacity = opacity;
        }
      }),
      /**
       * Resets opacity of given element.
       *
       * @param element {Element} DOM element to modify
       * @signature function(element)
       */
      reset: qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(element) {
          if (qx.core.Environment.get("css.opacity")) {
            element.style.opacity = "";
          } else {
            // Read in computed filter
            var filter = qx.bom.element.Style.get(element, "filter", qx.bom.element.Style.COMPUTED_MODE, false);

            // Remove old alpha filter
            element.style.filter = filter.replace(/alpha\([^\)]*\)/gi, "");
          }
        },
        "default": function _default(element) {
          element.style.opacity = "";
        }
      }),
      /**
       * Gets computed opacity of given element. Accepts numbers between zero and one
       * where "0" means transparent, "1" means opaque.
       *
       * @param element {Element} DOM element to modify
       * @param mode {Number} Choose one of the modes {@link qx.bom.element.Style#COMPUTED_MODE},
       *   {@link qx.bom.element.Style#CASCADED_MODE}, {@link qx.bom.element.Style#LOCAL_MODE}.
       *   The computed mode is the default one.
       * @return {Float} A float number between 0 and 1
       * @signature function(element, mode)
       */
      get: qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(element, mode) {
          if (qx.core.Environment.get("css.opacity")) {
            var opacity = qx.bom.element.Style.get(element, "opacity", mode, false);
            if (opacity != null) {
              return parseFloat(opacity);
            }
            return 1.0;
          } else {
            var filter = qx.bom.element.Style.get(element, "filter", mode, false);
            if (filter) {
              var opacity = filter.match(/alpha\(opacity=(.*)\)/);
              if (opacity && opacity[1]) {
                return parseFloat(opacity[1]) / 100;
              }
            }
            return 1.0;
          }
        },
        "default": function _default(element, mode) {
          var opacity = qx.bom.element.Style.get(element, "opacity", mode, false);
          if (opacity != null) {
            return parseFloat(opacity);
          }
          return 1.0;
        }
      })
    }
  });
  qx.bom.element.Opacity.$$dbClassInfo = $$dbClassInfo;
})();

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
      "qx.bom.client.Css": {
        "require": true
      },
      "qx.bom.Style": {},
      "qx.log.Logger": {},
      "qx.bom.element.Style": {},
      "qx.bom.Document": {},
      "qx.dom.Node": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "css.boxsizing": {
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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
  
  ************************************************************************ */

  /**
   * Contains methods to control and query the element's box-sizing property.
   *
   * Supported values:
   *
   * * "content-box" = W3C model (dimensions are content specific)
   * * "border-box" = Microsoft model (dimensions are box specific incl. border and padding)
   */
  qx.Bootstrap.define("qx.bom.element.BoxSizing", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {Map} Internal data structure for __usesNativeBorderBox() */
      __nativeBorderBox__P_79_0: {
        tags: {
          button: true,
          select: true
        },
        types: {
          search: true,
          button: true,
          submit: true,
          reset: true,
          checkbox: true,
          radio: true
        }
      },
      /**
       * Whether the given elements defaults to the "border-box" Microsoft model in all cases.
       *
       * @param element {Element} DOM element to query
       * @return {Boolean} true when the element uses "border-box" independently from the doctype
       */
      __usesNativeBorderBox__P_79_1: function __usesNativeBorderBox__P_79_1(element) {
        var map = this.__nativeBorderBox__P_79_0;
        return map.tags[element.tagName.toLowerCase()] || map.types[element.type];
      },
      /**
       * Compiles the given box sizing into a CSS compatible string.
       *
       * @param value {String} Valid CSS box-sizing value
       * @return {String} CSS string
       */
      compile: function compile(value) {
        if (qx.core.Environment.get("css.boxsizing")) {
          var prop = qx.bom.Style.getCssName(qx.core.Environment.get("css.boxsizing"));
          return prop + ":" + value + ";";
        } else {
          {
            qx.log.Logger.warn(this, "This client does not support dynamic modification of the boxSizing property.");
            qx.log.Logger.trace();
          }
        }
      },
      /**
       * Returns the box sizing for the given element.
       *
       * @param element {Element} The element to query
       * @return {String} Box sizing value of the given element.
       */
      get: function get(element) {
        if (qx.core.Environment.get("css.boxsizing")) {
          return qx.bom.element.Style.get(element, "boxSizing", null, false) || "";
        }
        if (qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(element))) {
          if (!this.__usesNativeBorderBox__P_79_1(element)) {
            return "content-box";
          }
        }
        return "border-box";
      },
      /**
       * Applies a new box sizing to the given element
       *
       * @param element {Element} The element to modify
       * @param value {String} New box sizing value to set
       */
      set: function set(element, value) {
        if (qx.core.Environment.get("css.boxsizing")) {
          // IE8 bombs when trying to apply an unsupported value
          try {
            element.style[qx.core.Environment.get("css.boxsizing")] = value;
          } catch (ex) {
            {
              qx.log.Logger.warn(this, "This client does not support the boxSizing value", value);
            }
          }
        } else {
          {
            qx.log.Logger.warn(this, "This client does not support dynamic modification of the boxSizing property.");
          }
        }
      },
      /**
       * Removes the local box sizing applied to the element
       *
       * @param element {Element} The element to modify
       */
      reset: function reset(element) {
        this.set(element, "");
      }
    }
  });
  qx.bom.element.BoxSizing.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.lang.String": {
        "require": true,
        "defer": "runtime"
      },
      "qx.bom.client.Css": {
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
      "qx.lang.Object": {},
      "qx.bom.Style": {},
      "qx.bom.element.Clip": {
        "require": true
      },
      "qx.bom.element.Cursor": {
        "require": true
      },
      "qx.bom.element.Opacity": {
        "require": true
      },
      "qx.bom.element.BoxSizing": {
        "require": true
      },
      "qx.core.Assert": {},
      "qx.dom.Node": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "css.appearance": {
          "className": "qx.bom.client.Css"
        },
        "css.userselect": {
          "className": "qx.bom.client.Css"
        },
        "css.textoverflow": {
          "className": "qx.bom.client.Css"
        },
        "css.borderimage": {
          "className": "qx.bom.client.Css"
        },
        "css.float": {
          "className": "qx.bom.client.Css"
        },
        "css.usermodify": {
          "className": "qx.bom.client.Css"
        },
        "css.boxsizing": {
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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
  
     ======================================================================
  
     This class contains code based on the following work:
  
     * Prototype JS
       http://www.prototypejs.org/
       Version 1.5
  
       Copyright:
         (c) 2006-2007, Prototype Core Team
  
       License:
         MIT: http://www.opensource.org/licenses/mit-license.php
  
       Authors:
         * Prototype Core Team
  
     ----------------------------------------------------------------------
  
       Copyright (c) 2005-2008 Sam Stephenson
  
       Permission is hereby granted, free of charge, to any person
       obtaining a copy of this software and associated documentation
       files (the "Software"), to deal in the Software without restriction,
       including without limitation the rights to use, copy, modify, merge,
       publish, distribute, sublicense, and/or sell copies of the Software,
       and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
  
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
       HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
       WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
       DEALINGS IN THE SOFTWARE.
  
  ************************************************************************ */

  /**
   * Style querying and modification of HTML elements.
   *
   * Automatically normalizes cross-browser differences for setting and reading
   * CSS attributes. Optimized for performance.
   *
   * @require(qx.lang.String)
   * @require(qx.bom.client.Css)
  
   * @require(qx.bom.element.Clip#set)
   * @require(qx.bom.element.Cursor#set)
   * @require(qx.bom.element.Opacity#set)
   * @require(qx.bom.element.BoxSizing#set)
  
   * @require(qx.bom.element.Clip#get)
   * @require(qx.bom.element.Cursor#get)
   * @require(qx.bom.element.Opacity#get)
   * @require(qx.bom.element.BoxSizing#get)
  
   * @require(qx.bom.element.Clip#reset)
   * @require(qx.bom.element.Cursor#reset)
   * @require(qx.bom.element.Opacity#reset)
   * @require(qx.bom.element.BoxSizing#reset)
  
   * @require(qx.bom.element.Clip#compile)
   * @require(qx.bom.element.Cursor#compile)
   * @require(qx.bom.element.Opacity#compile)
   * @require(qx.bom.element.BoxSizing#compile)
   */
  qx.Bootstrap.define("qx.bom.element.Style", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      __styleNames__P_33_0: null,
      __cssNames__P_33_1: null,
      /**
       * Detect vendor specific properties.
       */
      __detectVendorProperties__P_33_2: function __detectVendorProperties__P_33_2() {
        var styleNames = {
          appearance: qx.core.Environment.get("css.appearance"),
          userSelect: qx.core.Environment.get("css.userselect"),
          textOverflow: qx.core.Environment.get("css.textoverflow"),
          borderImage: qx.core.Environment.get("css.borderimage"),
          "float": qx.core.Environment.get("css.float"),
          userModify: qx.core.Environment.get("css.usermodify"),
          boxSizing: qx.core.Environment.get("css.boxsizing")
        };
        this.__cssNames__P_33_1 = {};
        for (var key in qx.lang.Object.clone(styleNames)) {
          if (!styleNames[key]) {
            delete styleNames[key];
          } else {
            if (key === "float") {
              this.__cssNames__P_33_1["cssFloat"] = key;
            } else {
              this.__cssNames__P_33_1[key] = qx.bom.Style.getCssName(styleNames[key]);
            }
          }
        }
        this.__styleNames__P_33_0 = styleNames;
      },
      /**
       * Gets the (possibly vendor-prefixed) name of a style property and stores
       * it to avoid multiple checks.
       *
       * @param name {String} Style property name to check
       * @return {String|null} The client-specific name of the property, or
       * <code>null</code> if it's not supported.
       */
      __getStyleName__P_33_3: function __getStyleName__P_33_3(name) {
        var styleName = qx.bom.Style.getPropertyName(name);
        if (styleName) {
          this.__styleNames__P_33_0[name] = styleName;
        }
        return styleName;
      },
      /**
       * Mshtml has proprietary pixel* properties for locations and dimensions
       * which return the pixel value. Used by getComputed() in mshtml variant.
       *
       * @internal
       */
      __mshtmlPixel__P_33_4: {
        width: "pixelWidth",
        height: "pixelHeight",
        left: "pixelLeft",
        right: "pixelRight",
        top: "pixelTop",
        bottom: "pixelBottom"
      },
      /**
       * Whether a special class is available for the processing of this style.
       *
       * @internal
       */
      __special__P_33_5: {
        clip: qx.bom.element.Clip,
        cursor: qx.bom.element.Cursor,
        opacity: qx.bom.element.Opacity,
        boxSizing: qx.bom.element.BoxSizing
      },
      /*
      ---------------------------------------------------------------------------
        COMPILE SUPPORT
      ---------------------------------------------------------------------------
      */
      /**
       * Compiles the given styles into a string which can be used to
       * concat a HTML string for innerHTML usage.
       *
       * @param map {Map} Map of style properties to compile
       * @return {String} Compiled string of given style properties.
       */
      compile: function compile(map) {
        var html = [];
        var special = this.__special__P_33_5;
        var cssNames = this.__cssNames__P_33_1;
        var name, value;
        for (name in map) {
          // read value
          value = map[name];
          if (value == null) {
            continue;
          }

          // normalize name
          name = this.__cssNames__P_33_1[name] || name;

          // process special properties
          if (special[name]) {
            html.push(special[name].compile(value));
          } else {
            if (!cssNames[name]) {
              cssNames[name] = qx.bom.Style.getCssName(name);
            }
            html.push(cssNames[name], ":", value === "" ? '""' : value, ";");
          }
        }
        return html.join("");
      },
      /*
      ---------------------------------------------------------------------------
        CSS TEXT SUPPORT
      ---------------------------------------------------------------------------
      */
      /**
       * Set the full CSS content of the style attribute
       *
       * @param element {Element} The DOM element to modify
       * @param value {String} The full CSS string
       */
      setCss: function setCss(element, value) {
        element.setAttribute("style", value);
      },
      /**
       * Returns the full content of the style attribute.
       *
       * @param element {Element} The DOM element to query
       * @return {String} the full CSS string
       * @signature function(element)
       */
      getCss: function getCss(element) {
        return element.getAttribute("style");
      },
      /*
      ---------------------------------------------------------------------------
        STYLE ATTRIBUTE SUPPORT
      ---------------------------------------------------------------------------
      */
      /**
       * Checks whether the browser supports the given CSS property.
       *
       * @param propertyName {String} The name of the property
       * @return {Boolean} Whether the property id supported
       */
      isPropertySupported: function isPropertySupported(propertyName) {
        return this.__special__P_33_5[propertyName] || this.__styleNames__P_33_0[propertyName] || propertyName in document.documentElement.style;
      },
      /** @type {Integer} Computed value of a style property. Compared to the cascaded style,
       * this one also interprets the values e.g. translates <code>em</code> units to
       * <code>px</code>.
       */
      COMPUTED_MODE: 1,
      /** @type {Integer} Cascaded value of a style property. */
      CASCADED_MODE: 2,
      /**
       * @type {Integer} Local value of a style property. Ignores inheritance cascade.
       *   Does not interpret values.
       */
      LOCAL_MODE: 3,
      /**
       * Sets the value of a style property
       *
       * @param element {Element} The DOM element to modify
       * @param name {String} Name of the style attribute (js variant e.g. marginTop, wordSpacing)
       * @param value {var} The value for the given style
       * @param smart {Boolean?true} Whether the implementation should automatically use
       *    special implementations for some properties
       */
      set: function set(element, name, value, smart) {
        {
          qx.core.Assert.assertElement(element, "Invalid argument 'element'");
          qx.core.Assert.assertString(name, "Invalid argument 'name'");
          if (smart !== undefined) {
            qx.core.Assert.assertBoolean(smart, "Invalid argument 'smart'");
          }
        }

        // normalize name
        name = this.__styleNames__P_33_0[name] || this.__getStyleName__P_33_3(name) || name;

        // special handling for specific properties
        // through this good working switch this part costs nothing when
        // processing non-smart properties
        if (smart !== false && this.__special__P_33_5[name]) {
          this.__special__P_33_5[name].set(element, value);
        } else {
          if (typeof value === "string" && name.startsWith("--")) {
            element.style.setProperty(name, value);
          } else {
            element.style[name] = value !== null ? value : "";
          }
        }
      },
      /**
       * Convenience method to modify a set of styles at once.
       *
       * @param element {Element} The DOM element to modify
       * @param styles {Map} a map where the key is the name of the property
       *    and the value is the value to use.
       * @param smart {Boolean?true} Whether the implementation should automatically use
       *    special implementations for some properties
       */
      setStyles: function setStyles(element, styles, smart) {
        {
          qx.core.Assert.assertElement(element, "Invalid argument 'element'");
          qx.core.Assert.assertMap(styles, "Invalid argument 'styles'");
          if (smart !== undefined) {
            qx.core.Assert.assertBoolean(smart, "Invalid argument 'smart'");
          }
        }

        // inline calls to "set" and "reset" because this method is very
        // performance critical!
        var styleNames = this.__styleNames__P_33_0;
        var special = this.__special__P_33_5;
        var style = element.style;
        for (var key in styles) {
          var value = styles[key];
          var name = styleNames[key] || this.__getStyleName__P_33_3(key) || key;
          if (value === undefined) {
            if (smart !== false && special[name]) {
              special[name].reset(element);
            } else {
              style[name] = "";
            }
          } else {
            if (smart !== false && special[name]) {
              special[name].set(element, value);
            } else {
              style[name] = value !== null ? value : "";
            }
          }
        }
      },
      /**
       * Resets the value of a style property
       *
       * @param element {Element} The DOM element to modify
       * @param name {String} Name of the style attribute (js variant e.g. marginTop, wordSpacing)
       * @param smart {Boolean?true} Whether the implementation should automatically use
       *    special implementations for some properties
       */
      reset: function reset(element, name, smart) {
        // normalize name
        name = this.__styleNames__P_33_0[name] || this.__getStyleName__P_33_3(name) || name;

        // special handling for specific properties
        if (smart !== false && this.__special__P_33_5[name]) {
          this.__special__P_33_5[name].reset(element);
        } else {
          element.style[name] = "";
        }
      },
      /**
       * Gets the value of a style property.
       *
       * *Computed*
       *
       * Returns the computed value of a style property. Compared to the cascaded style,
       * this one also interprets the values e.g. translates <code>em</code> units to
       * <code>px</code>.
       *
       * *Cascaded*
       *
       * Returns the cascaded value of a style property.
       *
       * *Local*
       *
       * Ignores inheritance cascade. Does not interpret values.
       *
       * @signature function(element, name, mode, smart)
       * @param element {Element} The DOM element to modify
       * @param name {String} Name of the style attribute (js variant e.g. marginTop, wordSpacing)
       * @param mode {Number} Choose one of the modes {@link #COMPUTED_MODE}, {@link #CASCADED_MODE},
       *   {@link #LOCAL_MODE}. The computed mode is the default one.
       * @param smart {Boolean?true} Whether the implementation should automatically use
       *    special implementations for some properties
       * @return {var} The value of the property
       */
      get: function get(element, name, mode, smart) {
        // normalize name
        name = this.__styleNames__P_33_0[name] || this.__getStyleName__P_33_3(name) || name;

        // special handling
        if (smart !== false && this.__special__P_33_5[name]) {
          return this.__special__P_33_5[name].get(element, mode);
        }

        // switch to right mode
        switch (mode) {
          case this.LOCAL_MODE:
            return element.style[name] || "";
          case this.CASCADED_MODE:
            // Currently only supported by Opera and Internet Explorer
            if (element.currentStyle) {
              return element.currentStyle[name] || "";
            }
            throw new Error("Cascaded styles are not supported in this browser!");
          default:
            // Opera, Mozilla and Safari 3+ also have a global getComputedStyle which is identical
            // to the one found under document.defaultView.

            // The problem with this is however that this does not work correctly
            // when working with frames and access an element of another frame.
            // Then we must use the <code>getComputedStyle</code> of the document
            // where the element is defined.

            var doc = qx.dom.Node.getDocument(element);
            var getStyle = doc.defaultView ? doc.defaultView.getComputedStyle : undefined;
            if (getStyle !== undefined) {
              // Support for the DOM2 getComputedStyle method
              //
              // Safari >= 3 & Gecko > 1.4 expose all properties to the returned
              // CSSStyleDeclaration object. In older browsers the function
              // "getPropertyValue" is needed to access the values.
              //
              // On a computed style object all properties are read-only which is
              // identical to the behavior of MSHTML's "currentStyle".

              var computed = getStyle(element, null);
              // All relevant browsers expose the configured style properties to
              // the CSSStyleDeclaration objects
              if (computed && computed[name]) {
                return computed[name];
              }
            } else {
              // if the element is not inserted into the document "currentStyle"
              // may be undefined. In this case always return the local style.
              if (!element.currentStyle) {
                return element.style[name] || "";
              }

              // Read cascaded style. Shorthand properties like "border" are not available
              // on the currentStyle object.
              var currentStyle = element.currentStyle[name] || element.style[name] || "";

              // Pixel values are always OK
              if (/^-?[\.\d]+(px)?$/i.test(currentStyle)) {
                return currentStyle;
              }

              // Try to convert non-pixel values
              var pixel = this.__mshtmlPixel__P_33_4[name];
              if (pixel && pixel in element.style) {
                // Backup local and runtime style
                var localStyle = element.style[name];

                // Overwrite local value with cascaded value
                // This is needed to have the pixel value setup
                element.style[name] = currentStyle || 0;

                // Read pixel value and add "px"
                var value = element.style[pixel] + "px";

                // Recover old local value
                element.style[name] = localStyle;

                // Return value
                return value;
              }

              // Just the current style
              return currentStyle;
            }
            return element.style[name] || "";
        }
      }
    },
    defer: function defer(statics) {
      statics.__detectVendorProperties__P_33_2();
    }
  });
  qx.bom.element.Style.$$dbClassInfo = $$dbClassInfo;
})();

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
      "qx.bom.Document": {},
      "qx.bom.client.OperatingSystem": {
        "require": true
      }
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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Sebastian Fastner (fastner)
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
  
     * Yahoo! UI Library
         http://developer.yahoo.com/yui
         Version 2.2.0
  
       Copyright:
         (c) 2007, Yahoo! Inc.
  
       License:
         BSD: http://developer.yahoo.com/yui/license.txt
  
     ----------------------------------------------------------------------
  
       http://developer.yahoo.com/yui/license.html
  
       Copyright (c) 2009, Yahoo! Inc.
       All rights reserved.
  
       Redistribution and use of this software in source and binary forms,
       with or without modification, are permitted provided that the
       following conditions are met:
  
       * Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.
       * Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in
         the documentation and/or other materials provided with the
         distribution.
       * Neither the name of Yahoo! Inc. nor the names of its contributors
         may be used to endorse or promote products derived from this
         software without specific prior written permission of Yahoo! Inc.
  
       THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
       "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
       LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
       FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
       COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
       INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
       (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
       SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
       HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
       STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
       ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
       OF THE POSSIBILITY OF SUCH DAMAGE.
  
  ************************************************************************ */

  /**
   * Includes library functions to work with the client's viewport (window).
   * Orientation related functions are point to window.top as default.
   */
  qx.Bootstrap.define("qx.bom.Viewport", {
    statics: {
      /**
       * Returns the current width of the viewport (excluding the vertical scrollbar
       * if present).
       *
       * @param win {Window?window} The window to query
       * @return {Integer} The width of the viewable area of the page (excluding scrollbars).
       */
      getWidth: function getWidth(win) {
        var win = win || window;
        var doc = win.document;
        return qx.bom.Document.isStandardMode(win) ? doc.documentElement.clientWidth : doc.body.clientWidth;
      },
      /**
       * Returns the current height of the viewport (excluding the horizontal scrollbar
       * if present).
       *
       * @param win {Window?window} The window to query
       * @return {Integer} The Height of the viewable area of the page (excluding scrollbars).
       */
      getHeight: function getHeight(win) {
        var win = win || window;
        var doc = win.document;

        // [BUG #7785] Document element's clientHeight is calculated wrong on iPad iOS7
        if (qx.core.Environment.get("os.name") == "ios" && window.innerHeight != doc.documentElement.clientHeight) {
          return window.innerHeight;
        }
        return qx.bom.Document.isStandardMode(win) ? doc.documentElement.clientHeight : doc.body.clientHeight;
      },
      /**
       * Returns the scroll position of the viewport
       *
       * All clients except IE < 9 support the non-standard property <code>pageXOffset</code>.
       * As this is easier to evaluate we prefer this property over <code>scrollLeft</code>.
       * Since the window could differ from the one the application is running in, we can't
       * use a one-time environment check to decide which property to use.
       *
       * @param win {Window?window} The window to query
       * @return {Integer} Scroll position in pixels from left edge, always a positive integer or zero
       */
      getScrollLeft: function getScrollLeft(win) {
        var win = win ? win : window;
        if (typeof win.pageXOffset !== "undefined") {
          return win.pageXOffset;
        }

        // Firefox is using 'documentElement.scrollLeft' and Chrome is using
        // 'document.body.scrollLeft'. For the other value each browser is returning
        // 0, so we can use this check to get the positive value without using specific
        // browser checks.
        var doc = win.document;
        return doc.documentElement.scrollLeft || doc.body.scrollLeft;
      },
      /**
       * Returns the scroll position of the viewport
       *
       * All clients except MSHTML support the non-standard property <code>pageYOffset</code>.
       * As this is easier to evaluate we prefer this property over <code>scrollTop</code>.
       * Since the window could differ from the one the application is running in, we can't
       * use a one-time environment check to decide which property to use.
       *
       * @param win {Window?window} The window to query
       * @return {Integer} Scroll position in pixels from top edge, always a positive integer or zero
       */
      getScrollTop: function getScrollTop(win) {
        var win = win ? win : window;
        if (typeof win.pageYOffset !== "undefined") {
          return win.pageYOffset;
        }

        // Firefox is using 'documentElement.scrollTop' and Chrome is using
        // 'document.body.scrollTop'. For the other value each browser is returning
        // 0, so we can use this check to get the positive value without using specific
        // browser checks.
        var doc = win.document;
        return doc.documentElement.scrollTop || doc.body.scrollTop;
      },
      /**
       * Returns an orientation normalizer value that should be added to device orientation
       * to normalize behaviour on different devices.
       *
       * @param win {Window} The window to query
       * @return {Map} Orientation normalizing value
       */
      __getOrientationNormalizer__P_29_0: function __getOrientationNormalizer__P_29_0(win) {
        // Calculate own understanding of orientation (0 = portrait, 90 = landscape)
        var currentOrientation = this.getWidth(win) > this.getHeight(win) ? 90 : 0;
        var deviceOrientation = win.orientation;
        if (deviceOrientation == null || Math.abs(deviceOrientation % 180) == currentOrientation) {
          // No device orientation available or device orientation equals own understanding of orientation
          return {
            "-270": 90,
            "-180": 180,
            "-90": -90,
            0: 0,
            90: 90,
            180: 180,
            270: -90
          };
        } else {
          // Device orientation is not equal to own understanding of orientation
          return {
            "-270": 180,
            "-180": -90,
            "-90": 0,
            0: 90,
            90: 180,
            180: -90,
            270: 0
          };
        }
      },
      // Cache orientation normalizer map on start
      __orientationNormalizer__P_29_1: null,
      /**
       * Returns the current orientation of the viewport in degree.
       *
       * All possible values and their meaning:
       *
       * * <code>-90</code>: "Landscape"
       * * <code>0</code>: "Portrait"
       * * <code>90</code>: "Landscape"
       * * <code>180</code>: "Portrait"
       *
       * @param win {Window?window.top} The window to query. (Default = top window)
       * @return {Integer} The current orientation in degree
       */
      getOrientation: function getOrientation(win) {
        // Set window.top as default, because orientationChange event is only fired top window
        var win = win || window.top;
        // The orientation property of window does not have the same behaviour over all devices
        // iPad has 0degrees = Portrait, Playbook has 90degrees = Portrait, same for Android Honeycomb
        //
        // To fix this an orientationNormalizer map is calculated on application start
        //
        // The calculation of getWidth and getHeight returns wrong values if you are in an input field
        // on iPad and rotate your device!
        var orientation = win.orientation;
        if (orientation == null) {
          // Calculate orientation from window width and window height
          orientation = this.getWidth(win) > this.getHeight(win) ? 90 : 0;
        } else {
          if (this.__orientationNormalizer__P_29_1 == null) {
            this.__orientationNormalizer__P_29_1 = this.__getOrientationNormalizer__P_29_0(win);
          }
          // Normalize orientation value
          orientation = this.__orientationNormalizer__P_29_1[orientation];
        }
        return orientation;
      },
      /**
       * Whether the viewport orientation is currently in landscape mode.
       *
       * @param win {Window?window} The window to query
       * @return {Boolean} <code>true</code> when the viewport orientation
       *     is currently in landscape mode.
       */
      isLandscape: function isLandscape(win) {
        var orientation = this.getOrientation(win);
        return orientation === -90 || orientation === 90;
      },
      /**
       * Whether the viewport orientation is currently in portrait mode.
       *
       * @param win {Window?window} The window to query
       * @return {Boolean} <code>true</code> when the viewport orientation
       *     is currently in portrait mode.
       */
      isPortrait: function isPortrait(win) {
        var orientation = this.getOrientation(win);
        return orientation === 0 || orientation === 180;
      }
    }
  });
  qx.bom.Viewport.$$dbClassInfo = $$dbClassInfo;
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
      "qx.bom.element.Style": {},
      "qx.dom.Node": {},
      "qx.bom.Viewport": {},
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.element.BoxSizing": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "load": true,
          "className": "qx.bom.client.Engine"
        },
        "browser.quirksmode": {
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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
  
     ======================================================================
  
     This class contains code based on the following work:
  
     * jQuery Dimension Plugin
         http://jquery.com/
         Version 1.1.3
  
       Copyright:
         (c) 2007, Paul Bakaus & Brandon Aaron
  
       License:
         MIT: http://www.opensource.org/licenses/mit-license.php
  
       Authors:
         Paul Bakaus
         Brandon Aaron
  
  ************************************************************************ */

  /**
   * Query the location of an arbitrary DOM element in relation to its top
   * level body element. Works in all major browsers:
   *
   * * Mozilla 1.5 + 2.0
   * * Internet Explorer 6.0 + 7.0 (both standard & quirks mode)
   * * Opera 9.2
   * * Safari 3.0 beta
   *
   * @ignore(SVGElement)
   */
  qx.Bootstrap.define("qx.bom.element.Location", {
    statics: {
      /**
       * Queries a style property for the given element
       *
       * @param elem {Element} DOM element to query
       * @param style {String} Style property
       * @return {String} Value of given style property
       */
      __style__P_74_0: function __style__P_74_0(elem, style) {
        return qx.bom.element.Style.get(elem, style, qx.bom.element.Style.COMPUTED_MODE, false);
      },
      /**
       * Queries a style property for the given element and parses it to an integer value
       *
       * @param elem {Element} DOM element to query
       * @param style {String} Style property
       * @return {Integer} Value of given style property
       */
      __num__P_74_1: function __num__P_74_1(elem, style) {
        return parseInt(qx.bom.element.Style.get(elem, style, qx.bom.element.Style.COMPUTED_MODE, false), 10) || 0;
      },
      /**
       * Computes the scroll offset of the given element relative to the document
       * <code>body</code>.
       *
       * @param elem {Element} DOM element to query
       * @return {Map} Map which contains the <code>left</code> and <code>top</code> scroll offsets
       */
      __computeScroll__P_74_2: function __computeScroll__P_74_2(elem) {
        var left = 0,
          top = 0;
        // Find window
        var win = qx.dom.Node.getWindow(elem);
        left -= qx.bom.Viewport.getScrollLeft(win);
        top -= qx.bom.Viewport.getScrollTop(win);
        return {
          left: left,
          top: top
        };
      },
      /**
       * Computes the offset of the given element relative to the document
       * <code>body</code>.
       *
       * @param elem {Element} DOM element to query
       * @return {Map} Map which contains the <code>left</code> and <code>top</code> offsets
       */
      __computeBody__P_74_3: qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(elem) {
          // Find body element
          var doc = qx.dom.Node.getDocument(elem);
          var body = doc.body;
          var left = 0;
          var top = 0;
          left -= body.clientLeft + doc.documentElement.clientLeft;
          top -= body.clientTop + doc.documentElement.clientTop;
          if (!qx.core.Environment.get("browser.quirksmode")) {
            left += this.__num__P_74_1(body, "borderLeftWidth");
            top += this.__num__P_74_1(body, "borderTopWidth");
          }
          return {
            left: left,
            top: top
          };
        },
        webkit: function webkit(elem) {
          // Find body element
          var doc = qx.dom.Node.getDocument(elem);
          var body = doc.body;

          // Start with the offset
          var left = body.offsetLeft;
          var top = body.offsetTop;
          return {
            left: left,
            top: top
          };
        },
        gecko: function gecko(elem) {
          // Find body element
          var body = qx.dom.Node.getDocument(elem).body;

          // Start with the offset
          var left = body.offsetLeft;
          var top = body.offsetTop;

          // Correct substracted border (only in content-box mode)
          if (qx.bom.element.BoxSizing.get(body) !== "border-box") {
            left += this.__num__P_74_1(body, "borderLeftWidth");
            top += this.__num__P_74_1(body, "borderTopWidth");
          }
          return {
            left: left,
            top: top
          };
        },
        // At the moment only correctly supported by Opera
        "default": function _default(elem) {
          // Find body element
          var body = qx.dom.Node.getDocument(elem).body;

          // Start with the offset
          var left = body.offsetLeft;
          var top = body.offsetTop;
          return {
            left: left,
            top: top
          };
        }
      }),
      /**
       * Computes the sum of all offsets of the given element node.
       *
       * @signature function(elem)
       * @param elem {Element} DOM element to query
       * @return {Map} Map which contains the <code>left</code> and <code>top</code> offsets
       */
      __computeOffset__P_74_4: function __computeOffset__P_74_4(elem) {
        var rect = elem.getBoundingClientRect();

        // Firefox 3.0 alpha 6 (gecko 1.9) returns floating point numbers
        // use Math.round() to round them to style compatible numbers
        // MSHTML returns integer numbers
        return {
          left: Math.round(rect.left),
          top: Math.round(rect.top)
        };
      },
      /**
       * Computes the location of the given element in context of
       * the document dimensions.
       *
       * Supported modes:
       *
       * * <code>margin</code>: Calculate from the margin box of the element (bigger than the visual appearance: including margins of given element)
       * * <code>box</code>: Calculates the offset box of the element (default, uses the same size as visible)
       * * <code>border</code>: Calculate the border box (useful to align to border edges of two elements).
       * * <code>scroll</code>: Calculate the scroll box (relevant for absolute positioned content).
       * * <code>padding</code>: Calculate the padding box (relevant for static/relative positioned content).
       *
       * @param elem {Element} DOM element to query
       * @param mode {String?box} A supported option. See comment above.
       * @return {Map} Returns a map with <code>left</code>, <code>top</code>,
       *   <code>right</code> and <code>bottom</code> which contains the distance
       *   of the element relative to the document.
       */
      get: function get(elem, mode) {
        if (elem.tagName == "BODY") {
          var location = this.__getBodyLocation__P_74_5(elem);
          var left = location.left;
          var top = location.top;
        } else {
          var body = this.__computeBody__P_74_3(elem);
          var offset = this.__computeOffset__P_74_4(elem);
          // Reduce by viewport scrolling.
          // Hint: getBoundingClientRect returns the location of the
          // element in relation to the viewport which includes
          // the scrolling
          var scroll = this.__computeScroll__P_74_2(elem);
          var left = offset.left + body.left - scroll.left;
          var top = offset.top + body.top - scroll.top;
        }
        var elementWidth;
        var elementHeight;
        if (elem instanceof SVGElement) {
          var rect = elem.getBoundingClientRect();
          elementWidth = rect.width;
          elementHeight = rect.height;
        } else {
          elementWidth = elem.offsetWidth;
          elementHeight = elem.offsetHeight;
        }
        var right = left + elementWidth;
        var bottom = top + elementHeight;
        if (mode) {
          // In this modes we want the size as seen from a child what means that we want the full width/height
          // which may be higher than the outer width/height when the element has scrollbars.
          if (mode == "padding" || mode == "scroll") {
            var overX = qx.bom.element.Style.get(elem, "overflowX");
            if (overX == "scroll" || overX == "auto") {
              right += elem.scrollWidth - elementWidth + this.__num__P_74_1(elem, "borderLeftWidth") + this.__num__P_74_1(elem, "borderRightWidth");
            }
            var overY = qx.bom.element.Style.get(elem, "overflowY");
            if (overY == "scroll" || overY == "auto") {
              bottom += elem.scrollHeight - elementHeight + this.__num__P_74_1(elem, "borderTopWidth") + this.__num__P_74_1(elem, "borderBottomWidth");
            }
          }
          switch (mode) {
            case "padding":
              left += this.__num__P_74_1(elem, "paddingLeft");
              top += this.__num__P_74_1(elem, "paddingTop");
              right -= this.__num__P_74_1(elem, "paddingRight");
              bottom -= this.__num__P_74_1(elem, "paddingBottom");
            // no break here

            case "scroll":
              left -= elem.scrollLeft;
              top -= elem.scrollTop;
              right -= elem.scrollLeft;
              bottom -= elem.scrollTop;
            // no break here

            case "border":
              left += this.__num__P_74_1(elem, "borderLeftWidth");
              top += this.__num__P_74_1(elem, "borderTopWidth");
              right -= this.__num__P_74_1(elem, "borderRightWidth");
              bottom -= this.__num__P_74_1(elem, "borderBottomWidth");
              break;
            case "margin":
              left -= this.__num__P_74_1(elem, "marginLeft");
              top -= this.__num__P_74_1(elem, "marginTop");
              right += this.__num__P_74_1(elem, "marginRight");
              bottom += this.__num__P_74_1(elem, "marginBottom");
              break;
          }
        }
        return {
          left: left,
          top: top,
          right: right,
          bottom: bottom
        };
      },
      /**
       * Get the location of the body element relative to the document.
       * @param body {Element} The body element.
       * @return {Map} map with the keys <code>left</code> and <code>top</code>
       */
      __getBodyLocation__P_74_5: function __getBodyLocation__P_74_5(body) {
        var top = body.offsetTop;
        var left = body.offsetLeft;
        top += this.__num__P_74_1(body, "marginTop");
        left += this.__num__P_74_1(body, "marginLeft");
        if (qx.core.Environment.get("engine.name") === "gecko") {
          top += this.__num__P_74_1(body, "borderLeftWidth");
          left += this.__num__P_74_1(body, "borderTopWidth");
        }
        return {
          left: left,
          top: top
        };
      },
      /**
       * Computes the location of the given element in context of
       * the document dimensions. For supported modes please
       * have a look at the {@link qx.bom.element.Location#get} method.
       *
       * @param elem {Element} DOM element to query
       * @param mode {String} A supported option. See comment above.
       * @return {Integer} The left distance
       *   of the element relative to the document.
       */
      getLeft: function getLeft(elem, mode) {
        return this.get(elem, mode).left;
      },
      /**
       * Computes the location of the given element in context of
       * the document dimensions. For supported modes please
       * have a look at the {@link qx.bom.element.Location#get} method.
       *
       * @param elem {Element} DOM element to query
       * @param mode {String} A supported option. See comment above.
       * @return {Integer} The top distance
       *   of the element relative to the document.
       */
      getTop: function getTop(elem, mode) {
        return this.get(elem, mode).top;
      },
      /**
       * Computes the location of the given element in context of
       * the document dimensions. For supported modes please
       * have a look at the {@link qx.bom.element.Location#get} method.
       *
       * @param elem {Element} DOM element to query
       * @param mode {String} A supported option. See comment above.
       * @return {Integer} The right distance
       *   of the element relative to the document.
       */
      getRight: function getRight(elem, mode) {
        return this.get(elem, mode).right;
      },
      /**
       * Computes the location of the given element in context of
       * the document dimensions. For supported modes please
       * have a look at the {@link qx.bom.element.Location#get} method.
       *
       * @param elem {Element} DOM element to query
       * @param mode {String} A supported option. See comment above.
       * @return {Integer} The bottom distance
       *   of the element relative to the document.
       */
      getBottom: function getBottom(elem, mode) {
        return this.get(elem, mode).bottom;
      },
      /**
       * Returns the distance between two DOM elements. For supported modes please
       * have a look at the {@link qx.bom.element.Location#get} method.
       *
       * @param elem1 {Element} First element
       * @param elem2 {Element} Second element
       * @param mode1 {String?null} Mode for first element
       * @param mode2 {String?null} Mode for second element
       * @return {Map} Returns a map with <code>left</code> and <code>top</code>
       *   which contains the distance of the elements from each other.
       */
      getRelative: function getRelative(elem1, elem2, mode1, mode2) {
        var loc1 = this.get(elem1, mode1);
        var loc2 = this.get(elem2, mode2);
        return {
          left: loc1.left - loc2.left,
          top: loc1.top - loc2.top,
          right: loc1.right - loc2.right,
          bottom: loc1.bottom - loc2.bottom
        };
      },
      /**
       * Returns the distance between the given element to its offset parent.
       *
       * @param elem {Element} DOM element to query
       * @return {Map} Returns a map with <code>left</code> and <code>top</code>
       *   which contains the distance of the elements from each other.
       */
      getPosition: function getPosition(elem) {
        return this.getRelative(elem, this.getOffsetParent(elem));
      },
      /**
       * Detects the offset parent of the given element
       *
       * @param element {Element} Element to query for offset parent
       * @return {Element} Detected offset parent
       */
      getOffsetParent: function getOffsetParent(element) {
        // Ther is no offsetParent for SVG elements
        if (element instanceof SVGElement) {
          return document.body;
        }
        var offsetParent = element.offsetParent || document.body;
        var Style = qx.bom.element.Style;
        while (offsetParent && !/^body|html$/i.test(offsetParent.tagName) && Style.get(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent;
      }
    }
  });
  qx.bom.element.Location.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.lang.Type": {},
      "qx.lang.Object": {}
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
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * Define messages to react on certain channels.
   *
   * The channel names will be used in the {@link #on} method to define handlers which will
   * be called on certain channels and routes. The {@link #emit} method can be used
   * to execute a given route on a channel. {@link #onAny} defines a handler on any channel.
   *
   * *Example*
   *
   * Here is a little example of how to use the messaging.
   *
   * <pre class='javascript'>
   *   var m = new qx.event.Messaging();
   *
   *   m.on("get", "/address/{id}", function(data) {
   *     var id = data.params.id; // 1234
   *     // do something with the id...
   *   },this);
   *
   *   m.emit("get", "/address/1234");
   * </pre>
   */
  qx.Bootstrap.define("qx.event.Messaging", {
    construct: function construct() {
      this._listener = {};
      this.__listenerIdCount__P_49_0 = 0;
      this.__channelToIdMapping__P_49_1 = {};
    },
    members: {
      _listener: null,
      __listenerIdCount__P_49_0: null,
      __channelToIdMapping__P_49_1: null,
      /**
       * Adds a route handler for the given channel. The route is called
       * if the {@link #emit} method finds a match.
       *
       * @param channel {String} The channel of the message.
       * @param type {String|RegExp} The type, used for checking if the executed path matches.
       * @param handler {Function} The handler to call if the route matches the executed path.
       * @param scope {var ? null} The scope of the handler.
       * @return {String} The id of the route used to remove the route.
       */
      on: function on(channel, type, handler, scope) {
        return this._addListener(channel, type, handler, scope);
      },
      /**
       * Adds a handler for the "any" channel. The "any" channel is called
       * before all other channels.
       *
       * @param type {String|RegExp} The route, used for checking if the executed path matches
       * @param handler {Function} The handler to call if the route matches the executed path
       * @param scope {var ? null} The scope of the handler.
       * @return {String} The id of the route used to remove the route.
       */
      onAny: function onAny(type, handler, scope) {
        return this._addListener("any", type, handler, scope);
      },
      /**
       * Adds a listener for a certain channel.
       *
       * @param channel {String} The channel the route should be registered for
       * @param type {String|RegExp} The type, used for checking if the executed path matches
       * @param handler {Function} The handler to call if the route matches the executed path
       * @param scope {var ? null} The scope of the handler.
       * @return {String} The id of the route used to remove the route.
       */
      _addListener: function _addListener(channel, type, handler, scope) {
        var listeners = this._listener[channel] = this._listener[channel] || {};
        var id = this.__listenerIdCount__P_49_0++;
        var params = [];
        var param = null;

        // Convert the route to a regular expression.
        if (qx.lang.Type.isString(type)) {
          var paramsRegexp = /\{([\w\d]+)\}/g;
          while ((param = paramsRegexp.exec(type)) !== null) {
            params.push(param[1]);
          }
          type = new RegExp("^" + type.replace(paramsRegexp, "([^/]+)") + "$");
        }
        listeners[id] = {
          regExp: type,
          params: params,
          handler: handler,
          scope: scope
        };
        this.__channelToIdMapping__P_49_1[id] = channel;
        return id;
      },
      /**
       * Removes a registered listener by the given id.
       *
       * @param id {String} The id of the registered listener.
       */
      remove: function remove(id) {
        var channel = this.__channelToIdMapping__P_49_1[id];
        var listener = this._listener[channel];
        delete listener[id];
        delete this.__channelToIdMapping__P_49_1[id];
      },
      /**
       * Checks if a listener is registered for the given path in the given channel.
       *
       * @param channel {String} The channel of the message.
       * @param path {String} The path to check.
       * @return {Boolean} Whether a listener is registered.
       */
      has: function has(channel, path) {
        var listeners = this._listener[channel];
        if (!listeners || qx.lang.Object.isEmpty(listeners)) {
          return false;
        }
        for (var id in listeners) {
          var listener = listeners[id];
          if (listener.regExp.test(path)) {
            return true;
          }
        }
        return false;
      },
      /**
       * Sends a message on the given channel and informs all matching route handlers.
       *
       * @param channel {String} The channel of the message.
       * @param path {String} The path to execute
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       */
      emit: function emit(channel, path, params, customData) {
        this._emit(channel, path, params, customData);
      },
      /**
       * Executes a certain channel with a given path. Informs all
       * route handlers that match with the path.
       *
       * @param channel {String} The channel to execute.
       * @param path {String} The path to check
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       */
      _emit: function _emit(channel, path, params, customData) {
        var listenerMatchedAny = false;
        var listener = this._listener["any"];
        listenerMatchedAny = this._emitListeners(channel, path, listener, params, customData);
        var listenerMatched = false;
        listener = this._listener[channel];
        listenerMatched = this._emitListeners(channel, path, listener, params, customData);
        if (!listenerMatched && !listenerMatchedAny) {
          qx.Bootstrap.info("No listener found for " + path);
        }
      },
      /**
       * Executes all given listener for a certain channel. Checks all listeners if they match
       * with the given path and executes the stored handler of the matching route.
       *
       * @param channel {String} The channel to execute.
       * @param path {String} The path to check
       * @param listeners {Map[]} All routes to test and execute.
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       *
       * @return {Boolean} Whether the route has been executed
       */
      _emitListeners: function _emitListeners(channel, path, listeners, params, customData) {
        if (!listeners || qx.lang.Object.isEmpty(listeners)) {
          return false;
        }
        var listenerMatched = false;
        for (var id in listeners) {
          var listener = listeners[id];
          listenerMatched |= this._emitRoute(channel, path, listener, params, customData);
        }
        return listenerMatched;
      },
      /**
       * Executes a certain listener. Checks if the listener matches the given path and
       * executes the stored handler of the route.
       *
       * @param channel {String} The channel to execute.
       * @param path {String} The path to check
       * @param listener {Map} The route data.
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       *
       * @return {Boolean} Whether the route has been executed
       */
      _emitRoute: function _emitRoute(channel, path, listener, params, customData) {
        var match = listener.regExp.exec(path);
        if (match) {
          var params = params || {};
          var param = null;
          var value = null;
          match.shift(); // first match is the whole path
          for (var i = 0; i < match.length; i++) {
            value = match[i];
            param = listener.params[i];
            if (param) {
              params[param] = value;
            } else {
              params[i] = value;
            }
          }
          listener.handler.call(listener.scope, {
            path: path,
            params: params,
            customData: customData
          });
        }
        return match != undefined;
      }
    }
  });
  qx.event.Messaging.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
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
      "qx.bom.client.Event": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.HashHistory": {},
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.IframeHistory": {},
      "qx.bom.NativeHistory": {},
      "qx.lang.Type": {},
      "qx.event.Timer": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "event.hashchange": {
          "load": true,
          "className": "qx.bom.client.Event"
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
  
     ======================================================================
  
     This class contains code based on the following work:
  
     * Yahoo! UI Library
       http://developer.yahoo.com/yui
       Version 2.2.0
  
       Copyright:
         (c) 2007, Yahoo! Inc.
  
       License:
         BSD: http://developer.yahoo.com/yui/license.txt
  
     ----------------------------------------------------------------------
  
       http://developer.yahoo.com/yui/license.html
  
       Copyright (c) 2009, Yahoo! Inc.
       All rights reserved.
  
       Redistribution and use of this software in source and binary forms,
       with or without modification, are permitted provided that the
       following conditions are met:
  
       * Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.
       * Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in
         the documentation and/or other materials provided with the
         distribution.
       * Neither the name of Yahoo! Inc. nor the names of its contributors
         may be used to endorse or promote products derived from this
         software without specific prior written permission of Yahoo! Inc.
  
       THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
       "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
       LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
       FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
       COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
       INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
       (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
       SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
       HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
       STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
       ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
       OF THE POSSIBILITY OF SUCH DAMAGE.
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * A helper for using the browser history in JavaScript Applications without
   * reloading the main page.
   *
   * Adds entries to the browser history and fires a "request" event when one of
   * the entries was requested by the user (e.g. by clicking on the back button).
   *
   * This class is an abstract template class. Concrete implementations have to
   * provide implementations for the {@link #_readState} and {@link #_writeState}
   * methods.
   *
   * Browser history support is currently available for Internet Explorer 6/7,
   * Firefox, Opera 9 and WebKit. Safari 2 and older are not yet supported.
   *
   * This module is based on the ideas behind the YUI Browser History Manager
   * by Julien Lecomte (Yahoo), which is described at
   * http://yuiblog.com/blog/2007/02/21/browser-history-manager/. The Yahoo
   * implementation can be found at http://developer.yahoo.com/yui/history/.
   * The original code is licensed under a BSD license
   * (http://developer.yahoo.com/yui/license.txt).
   *
   * @asset(qx/static/blank.html)
   */
  qx.Class.define("qx.bom.History", {
    extend: qx.core.Object,
    type: "abstract",
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      qx.core.Object.constructor.call(this);
      this._baseUrl = window.location.href.split("#")[0] + "#";
      this._titles = {};
      this._setInitialState();
    },
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /**
       * Fired when the user moved in the history. The data property of the event
       * holds the state, which was passed to {@link #addToHistory}.
       */
      request: "qx.event.type.Data"
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * @type {Boolean} Whether the browser supports the 'hashchange' event natively.
       */
      SUPPORTS_HASH_CHANGE_EVENT: qx.core.Environment.get("event.hashchange"),
      /**
       * Get the singleton instance of the history manager.
       *
       * @return {History}
       */
      getInstance: function getInstance() {
        var runsInIframe = !(window == window.top);
        if (!this.$$instance) {
          // in iframe + IE9
          if (runsInIframe && qx.core.Environment.get("browser.documentmode") == 9) {
            this.$$instance = new qx.bom.HashHistory();
          }

          // in iframe + IE<9
          else if (runsInIframe && qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9) {
            this.$$instance = new qx.bom.IframeHistory();
          }

          // browser with hashChange event
          else if (this.SUPPORTS_HASH_CHANGE_EVENT) {
            this.$$instance = new qx.bom.NativeHistory();
          }

          // IE without hashChange event
          else if (qx.core.Environment.get("engine.name") == "mshtml") {
            this.$$instance = new qx.bom.IframeHistory();
          }

          // fallback
          else {
            this.$$instance = new qx.bom.NativeHistory();
          }
        }
        return this.$$instance;
      }
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /**
       * Property holding the current title
       */
      title: {
        check: "String",
        event: "changeTitle",
        nullable: true,
        apply: "_applyTitle"
      },
      /**
       * Property holding the current state of the history.
       */
      state: {
        check: "String",
        event: "changeState",
        nullable: true,
        apply: "_applyState"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      _titles: null,
      // property apply
      _applyState: function _applyState(value, old) {
        this._writeState(value);
      },
      /**
       * Populates the 'state' property with the initial state value
       */
      _setInitialState: function _setInitialState() {
        this.setState(this._readState());
      },
      /**
       * Encodes the state value into a format suitable as fragment identifier.
       *
       * @param value {String} The string to encode
       * @return {String} The encoded string
       */
      _encode: function _encode(value) {
        if (qx.lang.Type.isString(value)) {
          return encodeURIComponent(value);
        }
        return "";
      },
      /**
       * Decodes a fragment identifier into a string
       *
       * @param value {String} The fragment identifier
       * @return {String} The decoded fragment identifier
       */
      _decode: function _decode(value) {
        if (qx.lang.Type.isString(value)) {
          return decodeURIComponent(value);
        }
        return "";
      },
      // property apply
      _applyTitle: function _applyTitle(title) {
        if (title != null) {
          document.title = title || "";
        }
      },
      /**
       * Adds an entry to the browser history.
       *
       * @param state {String} a string representing the state of the
       *          application. This command will be delivered in the data property of
       *          the "request" event.
       * @param newTitle {String ? null} the page title to set after the history entry
       *          is done. This title should represent the new state of the application.
       */
      addToHistory: function addToHistory(state, newTitle) {
        if (!qx.lang.Type.isString(state)) {
          state = state + "";
        }
        if (qx.lang.Type.isString(newTitle)) {
          this.setTitle(newTitle);
          this._titles[state] = newTitle;
        }
        if (this.getState() !== state) {
          this._writeState(state);
        }
      },
      /**
       * Navigates back in the browser history.
       * Simulates a back button click.
       */
      navigateBack: function navigateBack() {
        qx.event.Timer.once(function () {
          window.history.back();
        }, this, 100);
      },
      /**
       * Navigates forward in the browser history.
       * Simulates a forward button click.
       */
      navigateForward: function navigateForward() {
        qx.event.Timer.once(function () {
          window.history.forward();
        }, this, 100);
      },
      /**
       * Called on changes to the history using the browser buttons.
       *
       * @param state {String} new state of the history
       */
      _onHistoryLoad: function _onHistoryLoad(state) {
        this.setState(state);
        this.fireDataEvent("request", state);
        if (this._titles[state] != null) {
          this.setTitle(this._titles[state]);
        }
      },
      /**
       * Browser dependent function to read the current state of the history
       *
       * @return {String} current state of the browser history
       */
      _readState: function _readState() {
        throw new Error("Abstract method call");
      },
      /**
       * Save a state into the browser history.
       *
       * @param state {String} state to save
       */
      _writeState: function _writeState(state) {
        throw new Error("Abstract method call");
      },
      /**
       * Sets the fragment identifier of the window URL
       *
       * @param value {String} the fragment identifier
       */
      _setHash: function _setHash(value) {
        var url = this._baseUrl + (value || "");
        var loc = window.location;
        if (url != loc.href) {
          loc.href = url;
        }
      },
      /**
       * Returns the fragment identifier of the top window URL. For gecko browsers we
       * have to use a regular expression to avoid encoding problems.
       *
       * @return {String} the fragment identifier
       */
      _getHash: function _getHash() {
        var hash = /#(.*)$/.exec(window.location.href);
        return hash && hash[1] ? hash[1] : "";
      }
    }
  });
  qx.bom.History.$$dbClassInfo = $$dbClassInfo;
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
      "qx.core.ObjectRegistry": {},
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.event.Utils": {}
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
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
  
  ************************************************************************ */

  /**
   * This class supports <code>appear</code> and <code>disappear</code> events
   * on DOM level.
   *
   * NOTE: Instances of this class must be disposed of after use
   *
   */
  qx.Class.define("qx.event.handler.Appear", {
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
      this.__manager__P_111_0 = manager;
      this.__targets__P_111_1 = {};

      // Register
      qx.event.handler.Appear.__instances__P_111_2[this.toHashCode()] = this;
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
        appear: true,
        disappear: true
      },
      /** @type {Integer} Which target check to use */
      TARGET_CHECK: qx.event.IEventHandler.TARGET_DOMNODE,
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true,
      /** @type {Map} Stores all appear manager instances */
      __instances__P_111_2: {},
      /**
       * Refreshes all appear handlers. Useful after massive DOM manipulations e.g.
       * through qx.html.Element.
       *
       */
      refresh: function refresh() {
        var all = this.__instances__P_111_2;
        for (var hash in all) {
          all[hash].refresh();
        }
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __manager__P_111_0: null,
      __targets__P_111_1: null,
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER INTERFACE
      ---------------------------------------------------------------------------
      */
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {},
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        var hash = qx.core.ObjectRegistry.toHashCode(target) + type;
        var targets = this.__targets__P_111_1;
        if (targets && !targets[hash]) {
          targets[hash] = target;
          target.$$displayed = target.offsetWidth > 0;
        }
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        var hash = qx.core.ObjectRegistry.toHashCode(target) + type;
        var targets = this.__targets__P_111_1;
        if (!targets) {
          return;
        }
        if (targets[hash]) {
          delete targets[hash];
        }
      },
      /*
      ---------------------------------------------------------------------------
        USER ACCESS
      ---------------------------------------------------------------------------
      */
      /**
       * This method should be called by all DOM tree modifying routines
       * to check the registered nodes for changes.
       *
       * @return {qx.Promise?} a promise, if one or more of the event handlers returned one
       */
      refresh: function refresh() {
        var targets = this.__targets__P_111_1;
        var legacyIe = qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") < 9;
        var tracker = {};
        var self = this;
        Object.keys(targets).forEach(function (hash) {
          var elem = targets[hash];
          if (elem === undefined) {
            return;
          }
          qx.event.Utils.then(tracker, function () {
            var displayed = elem.offsetWidth > 0;
            if (!displayed && legacyIe) {
              // force recalculation in IE 8. See bug #7872
              displayed = elem.offsetWidth > 0;
            }
            if (!!elem.$$displayed !== displayed) {
              elem.$$displayed = displayed;
              var evt = qx.event.Registration.createEvent(displayed ? "appear" : "disappear");
              return self.__manager__P_111_0.dispatchEvent(elem, evt);
            }
          });
        });
        return tracker.promise;
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.__manager__P_111_0 = this.__targets__P_111_1 = null;

      // Deregister
      delete qx.event.handler.Appear.__instances__P_111_2[this.toHashCode()];
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
  qx.event.handler.Appear.$$dbClassInfo = $$dbClassInfo;
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
      },
      "qx.ui.mobile.core.Widget": {}
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
   * This class provides the <code>domupdated</code> event. The event is
   * delegated to all widget instances that have a
   * listener for the <code>domupdated</code> event registered.
   *
   * @internal
   */
  qx.Class.define("qx.ui.mobile.core.DomUpdatedHandler", {
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
      this.__manager__P_112_0 = manager;
      this.__targets__P_112_1 = {};

      // Register
      qx.ui.mobile.core.DomUpdatedHandler.__instances__P_112_2[this.toHashCode()] = this;
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
        domupdated: 1
      },
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: false,
      /** @type {Map} Stores all domUpdated manager instances */
      __instances__P_112_2: {},
      /**
       * Informs all handlers. Useful after massive DOM manipulations e.g.
       * through {@link qx.ui.mobile.core.Widget}.
       *
       */
      refresh: function refresh() {
        var all = this.__instances__P_112_2;
        for (var hash in all) {
          all[hash].refresh();
        }
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __manager__P_112_0: null,
      __targets__P_112_1: null,
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER INTERFACE
      ---------------------------------------------------------------------------
      */
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {
        return target instanceof qx.ui.mobile.core.Widget;
      },
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {
        var hash = target.toHashCode();
        var targets = this.__targets__P_112_1;
        if (targets && !targets[hash]) {
          targets[hash] = target;
        }
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {
        var hash = target.toHashCode();
        var targets = this.__targets__P_112_1;
        if (!targets) {
          return;
        }
        if (targets[hash]) {
          delete targets[hash];
        }
      },
      /*
      ---------------------------------------------------------------------------
        USER ACCESS
      ---------------------------------------------------------------------------
      */
      /**
       * This method is called by all DOM tree modifying routines
       * to inform the widgets.
       *
       */
      refresh: function refresh() {
        var targets = this.__targets__P_112_1;
        var target;
        for (var hash in targets) {
          target = targets[hash];
          if (target && !target.$$disposed && target.isSeeable()) {
            var evt = qx.event.Registration.createEvent("domupdated");
            this.__manager__P_112_0.dispatchEvent(target, evt);
          }
        }
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.__manager__P_112_0 = this.__targets__P_112_1 = null;

      // Deregister
      delete qx.ui.mobile.core.DomUpdatedHandler.__instances__P_112_2[this.toHashCode()];
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
  qx.ui.mobile.core.DomUpdatedHandler.$$dbClassInfo = $$dbClassInfo;
})();

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
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.element.Attribute": {}
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
   * Manages children structures of an element. Easy and convenient APIs
   * to insert, remove and replace children.
   */
  qx.Bootstrap.define("qx.dom.Element", {
    statics: {
      /**
       * Whether the given <code>child</code> is a child of <code>parent</code>
       *
       * @param parent {Element} parent element
       * @param child {Node} child node
       * @return {Boolean} true when the given <code>child</code> is a child of <code>parent</code>
       */
      hasChild: function hasChild(parent, child) {
        return child.parentNode === parent;
      },
      /**
       * Whether the given <code>element</code> has children.
       *
       * @param element {Element} element to test
       * @return {Boolean} true when the given <code>element</code> has at least one child node
       */
      hasChildren: function hasChildren(element) {
        return !!element.firstChild;
      },
      /**
       * Whether the given <code>element</code> has any child elements.
       *
       * @param element {Element} element to test
       * @return {Boolean} true when the given <code>element</code> has at least one child element
       */
      hasChildElements: function hasChildElements(element) {
        element = element.firstChild;
        while (element) {
          if (element.nodeType === 1) {
            return true;
          }
          element = element.nextSibling;
        }
        return false;
      },
      /**
       * Returns the parent element of the given element.
       *
       * @param element {Element} Element to find the parent for
       * @return {Element} The parent element
       */
      getParentElement: function getParentElement(element) {
        return element.parentNode;
      },
      /**
       * Checks if the <code>element</code> is in the DOM, but note that
       * the method is very expensive!
       *
       * @param element {Element} The DOM element to check.
       * @param win {Window} The window to check for.
       * @return {Boolean} <code>true</code> if the <code>element</code> is in
       *          the DOM, <code>false</code> otherwise.
       */
      isInDom: function isInDom(element, win) {
        if (!win) {
          win = window;
        }
        var domElements = win.document.getElementsByTagName(element.nodeName);
        for (var i = 0, l = domElements.length; i < l; i++) {
          if (domElements[i] === element) {
            return true;
          }
        }
        return false;
      },
      /*
      ---------------------------------------------------------------------------
        INSERTION
      ---------------------------------------------------------------------------
      */
      /**
       * Inserts <code>node</code> at the given <code>index</code>
       * inside <code>parent</code>.
       *
       * @param node {Node} node to insert
       * @param parent {Element} parent element node
       * @param index {Integer} where to insert
       * @return {Boolean} returns true (successful)
       */
      insertAt: function insertAt(node, parent, index) {
        var ref = parent.childNodes[index];
        if (ref) {
          parent.insertBefore(node, ref);
        } else {
          parent.appendChild(node);
        }
        return true;
      },
      /**
       * Insert <code>node</code> into <code>parent</code> as first child.
       * Indexes of other children will be incremented by one.
       *
       * @param node {Node} Node to insert
       * @param parent {Element} parent element node
       * @return {Boolean} returns true (successful)
       */
      insertBegin: function insertBegin(node, parent) {
        if (parent.firstChild) {
          this.insertBefore(node, parent.firstChild);
        } else {
          parent.appendChild(node);
        }
        return true;
      },
      /**
       * Insert <code>node</code> into <code>parent</code> as last child.
       *
       * @param node {Node} Node to insert
       * @param parent {Element} parent element node
       * @return {Boolean} returns true (successful)
       */
      insertEnd: function insertEnd(node, parent) {
        parent.appendChild(node);
        return true;
      },
      /**
       * Inserts <code>node</code> before <code>ref</code> in the same parent.
       *
       * @param node {Node} Node to insert
       * @param ref {Node} Node which will be used as reference for insertion
       * @return {Boolean} returns true (successful)
       */
      insertBefore: function insertBefore(node, ref) {
        ref.parentNode.insertBefore(node, ref);
        return true;
      },
      /**
       * Inserts <code>node</code> after <code>ref</code> in the same parent.
       *
       * @param node {Node} Node to insert
       * @param ref {Node} Node which will be used as reference for insertion
       * @return {Boolean} returns true (successful)
       */
      insertAfter: function insertAfter(node, ref) {
        var parent = ref.parentNode;
        if (ref == parent.lastChild) {
          parent.appendChild(node);
        } else {
          return this.insertBefore(node, ref.nextSibling);
        }
        return true;
      },
      /*
      ---------------------------------------------------------------------------
        REMOVAL
      ---------------------------------------------------------------------------
      */
      /**
       * Removes the given <code>node</code> from its parent element.
       *
       * @param node {Node} Node to remove
       * @return {Boolean} <code>true</code> when node was successfully removed,
       *   otherwise <code>false</code>
       */
      remove: function remove(node) {
        if (!node.parentNode) {
          return false;
        }
        node.parentNode.removeChild(node);
        return true;
      },
      /**
       * Removes the given <code>node</code> from the <code>parent</code>.
       *
       * @param node {Node} Node to remove
       * @param parent {Element} parent element which contains the <code>node</code>
       * @return {Boolean} <code>true</code> when node was successfully removed,
       *   otherwise <code>false</code>
       */
      removeChild: function removeChild(node, parent) {
        if (node.parentNode !== parent) {
          return false;
        }
        parent.removeChild(node);
        return true;
      },
      /**
       * Removes the node at the given <code>index</code>
       * from the <code>parent</code>.
       *
       * @param index {Integer} position of the node which should be removed
       * @param parent {Element} parent DOM element
       * @return {Boolean} <code>true</code> when node was successfully removed,
       *   otherwise <code>false</code>
       */
      removeChildAt: function removeChildAt(index, parent) {
        var child = parent.childNodes[index];
        if (!child) {
          return false;
        }
        parent.removeChild(child);
        return true;
      },
      /*
      ---------------------------------------------------------------------------
        REPLACE
      ---------------------------------------------------------------------------
      */
      /**
       * Replaces <code>oldNode</code> with <code>newNode</code> in the current
       * parent of <code>oldNode</code>.
       *
       * @param newNode {Node} DOM node to insert
       * @param oldNode {Node} DOM node to remove
       * @return {Boolean} <code>true</code> when node was successfully replaced
       */
      replaceChild: function replaceChild(newNode, oldNode) {
        if (!oldNode.parentNode) {
          return false;
        }
        oldNode.parentNode.replaceChild(newNode, oldNode);
        return true;
      },
      /**
       * Replaces the node at <code>index</code> with <code>newNode</code> in
       * the given parent.
       *
       * @param newNode {Node} DOM node to insert
       * @param index {Integer} position of old DOM node
       * @param parent {Element} parent DOM element
       * @return {Boolean} <code>true</code> when node was successfully replaced
       */
      replaceAt: function replaceAt(newNode, index, parent) {
        var oldNode = parent.childNodes[index];
        if (!oldNode) {
          return false;
        }
        parent.replaceChild(newNode, oldNode);
        return true;
      },
      /**
       * Stores helper element for element creation in WebKit
       *
       * @internal
       */
      __helperElement__P_59_0: {},
      /**
       * Creates and returns a DOM helper element.
       *
       * @param win {Window?} Window to create the element for
       * @return {Element} The created element node
       */
      getHelperElement: function getHelperElement(win) {
        if (!win) {
          win = window;
        }

        // key is needed to allow using different windows
        var key = win.location.href;
        if (!qx.dom.Element.__helperElement__P_59_0[key]) {
          var helper = qx.dom.Element.__helperElement__P_59_0[key] = win.document.createElement("div");

          // innerHTML will only parsed correctly if element is appended to document
          if (qx.core.Environment.get("engine.name") == "webkit") {
            helper.style.display = "none";
            win.document.body.appendChild(helper);
          }
        }
        return qx.dom.Element.__helperElement__P_59_0[key];
      },
      /**
       * Creates a DOM element.
       *
       * @param name {String} Tag name of the element
       * @param attributes {Map?} Map of attributes to apply
       * @param win {Window?} Window to create the element for
       * @return {Element} The created element node
       */
      create: function create(name, attributes, win) {
        if (!win) {
          win = window;
        }
        if (!name) {
          throw new Error("The tag name is missing!");
        }
        var element = win.document.createElement(name);
        for (var key in attributes) {
          qx.bom.element.Attribute.set(element, key, attributes[key]);
        }
        return element;
      },
      /**
       * Removes all content from the given element
       *
       * @param element {Element} element to clean
       * @return {String} empty string (new HTML content)
       */
      empty: function empty(element) {
        return element.innerHTML = "";
      }
    }
  });
  qx.dom.Element.$$dbClassInfo = $$dbClassInfo;
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
      "qx.bom.client.Html": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.lang.Type": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "html.element.textcontent": {
          "load": true,
          "className": "qx.bom.client.Html"
        },
        "engine.name": {
          "load": true,
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
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Alexander Steitz (aback)
  
     ======================================================================
  
     This class contains code based on the following work:
  
     * Prototype JS
       http://www.prototypejs.org/
       Version 1.5
  
       Copyright:
         (c) 2006-2007, Prototype Core Team
  
       License:
         MIT: http://www.opensource.org/licenses/mit-license.php
  
       Authors:
         * Prototype Core Team
  
     ----------------------------------------------------------------------
  
       Copyright (c) 2005-2008 Sam Stephenson
  
       Permission is hereby granted, free of charge, to any person
       obtaining a copy of this software and associated documentation
       files (the "Software"), to deal in the Software without restriction,
       including without limitation the rights to use, copy, modify, merge,
       publish, distribute, sublicense, and/or sell copies of the Software,
       and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
  
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
       HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
       WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
       DEALINGS IN THE SOFTWARE.
  
  ************************************************************************ */

  /**
   * Attribute/Property handling for DOM HTML elements.
   *
   * Also includes support for HTML properties like <code>checked</code>
   * or <code>value</code>. This feature set is supported cross-browser
   * through one common interface and is independent of the differences between
   * the multiple implementations.
   *
   * Supports applying text and HTML content using the attribute names
   * <code>text</code> and <code>html</code>.
   */
  qx.Bootstrap.define("qx.bom.element.Attribute", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** Internal map of attribute conversions */
      __hints__P_96_0: {
        // Name translation table (camelcase is important for some attributes)
        names: {
          "class": "className",
          "for": "htmlFor",
          html: "innerHTML",
          text: qx.core.Environment.get("html.element.textcontent") ? "textContent" : "innerText",
          colspan: "colSpan",
          rowspan: "rowSpan",
          valign: "vAlign",
          datetime: "dateTime",
          accesskey: "accessKey",
          tabindex: "tabIndex",
          maxlength: "maxLength",
          readonly: "readOnly",
          longdesc: "longDesc",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          frameborder: "frameBorder",
          usemap: "useMap"
        },
        // Attributes which are only applyable on a DOM element (not using compile())
        runtime: {
          html: 1,
          text: 1
        },
        // Attributes which are (forced) boolean
        bools: {
          compact: 1,
          nowrap: 1,
          ismap: 1,
          declare: 1,
          noshade: 1,
          checked: 1,
          disabled: 1,
          readOnly: 1,
          multiple: 1,
          selected: 1,
          noresize: 1,
          defer: 1,
          allowTransparency: 1
        },
        // Interpreted as property (element.property)
        property: {
          // Used by qx.html.Element
          $$element: 1,
          $$elementObject: 1,
          // Used by qx.ui.core.Widget
          $$qxObjectHash: 1,
          $$qxObject: 1,
          // Native properties
          checked: 1,
          readOnly: 1,
          multiple: 1,
          selected: 1,
          value: 1,
          maxLength: 1,
          className: 1,
          innerHTML: 1,
          innerText: 1,
          textContent: 1,
          htmlFor: 1,
          tabIndex: 1
        },
        qxProperties: {
          $$qxObjectHash: 1,
          $$qxObject: 1,
          $$element: 1,
          $$elementObject: 1
        },
        // Default values when "null" is given to a property
        propertyDefault: {
          disabled: false,
          checked: false,
          readOnly: false,
          multiple: false,
          selected: false,
          value: "",
          className: "",
          innerHTML: "",
          innerText: "",
          textContent: "",
          htmlFor: "",
          tabIndex: 0,
          maxLength: qx.core.Environment.select("engine.name", {
            mshtml: 2147483647,
            webkit: 524288,
            "default": -1
          })
        },
        // Properties which can be removed to reset them
        removeableProperties: {
          disabled: 1,
          multiple: 1,
          maxLength: 1
        }
      },
      /**
       * Compiles an incoming attribute map to a string which
       * could be used when building HTML blocks using innerHTML.
       *
       * This method silently ignores runtime attributes like
       * <code>html</code> or <code>text</code>.
       *
       * @param map {Map} Map of attributes. The key is the name of the attribute.
       * @return {String} Returns a compiled string ready for usage.
       */
      compile: function compile(map) {
        var html = [];
        var runtime = this.__hints__P_96_0.runtime;
        for (var key in map) {
          if (!runtime[key]) {
            html.push(key, "='", map[key], "'");
          }
        }
        return html.join("");
      },
      /**
       * Returns the value of the given HTML attribute
       *
       * @param element {Element} The DOM element to query
       * @param name {String} Name of the attribute
       * @return {var} The value of the attribute
       */
      get: function get(element, name) {
        var hints = this.__hints__P_96_0;
        var value;

        // normalize name
        name = hints.names[name] || name;

        // respect properties
        if (hints.property[name]) {
          value = element[name];
          if (typeof hints.propertyDefault[name] !== "undefined" && value == hints.propertyDefault[name]) {
            // only return null for all non-boolean properties
            if (typeof hints.bools[name] === "undefined") {
              return null;
            } else {
              return value;
            }
          }
        } else {
          // fallback to attribute
          value = element.getAttribute(name);

          // All modern browsers interpret "" as true but not IE8, which set the property to "" reset
          if (hints.bools[name] && !(qx.core.Environment.get("engine.name") == "mshtml" && parseInt(qx.core.Environment.get("browser.documentmode"), 10) <= 8)) {
            return qx.Bootstrap.isString(value); // also respect empty strings as true
          }
        }
        if (hints.bools[name]) {
          return !!value;
        }
        return value;
      },
      /**
       * Sets an HTML attribute on the given DOM element
       *
       * @param element {Element} The DOM element to modify
       * @param name {String} Name of the attribute
       * @param value {var} New value of the attribute
       */
      set: function set(element, name, value) {
        if (typeof value === "undefined") {
          return;
        }
        var hints = this.__hints__P_96_0;

        // normalize name
        name = hints.names[name] || name;

        // respect booleans
        if (hints.bools[name] && !qx.lang.Type.isBoolean(value)) {
          value = qx.lang.Type.isString(value);
        }

        // apply attribute
        // only properties which can be applied by the browser or qxProperties
        // otherwise use the attribute methods
        if (hints.property[name] && (!(element[name] === undefined) || hints.qxProperties[name])) {
          // resetting the attribute/property
          if (value == null) {
            // for properties which need to be removed for a correct reset
            if (hints.removeableProperties[name]) {
              element.removeAttribute(name);
              return;
            } else if (typeof hints.propertyDefault[name] !== "undefined") {
              value = hints.propertyDefault[name];
            }
          }
          element[name] = value;
        } else {
          if ((hints.bools[name] || value === null) && name.indexOf("data-") !== 0) {
            if (value === true) {
              element.setAttribute(name, name);
            } else if (value === false || value === null) {
              element.removeAttribute(name);
            }
          } else if (value === null) {
            element.removeAttribute(name);
          } else {
            element.setAttribute(name, value);
          }
        }
      },
      /**
       * Serializes an HTML attribute into a writer; the `writer` function accepts
       *  an varargs, which can be joined with an empty string or streamed.
       *
       * @param name {String} Name of the attribute
       * @param value {var} New value of the attribute
       */
      serialize: function serialize(name, value) {
        if (typeof value === "undefined") {
          return null;
        }
        var hints = this.__hints__P_96_0;

        // Skip serialization of hidden Qooxdoo state properties
        if (hints.qxProperties[name]) {
          return null;
        }

        // respect booleans
        if (hints.bools[name] && !qx.lang.Type.isBoolean(value)) {
          value = qx.lang.Type.isString(value);
        }

        // apply attribute
        if ((hints.bools[name] || value === null) && name.indexOf("data-") !== 0) {
          if (value === true) {
            var result = {};
            result[name] = "\"".concat(name, "\"");
            return result;
          }
        } else if (value !== null) {
          var _result = {};
          _result[name] = '"' + value + '"';
          return _result;
        }
        return null;
      },
      /**
       * Resets an HTML attribute on the given DOM element
       *
       * @param element {Element} The DOM element to modify
       * @param name {String} Name of the attribute
       */
      reset: function reset(element, name) {
        if (name.indexOf("data-") === 0) {
          element.removeAttribute(name);
        } else {
          this.set(element, name, null);
        }
      }
    }
  });
  qx.bom.element.Attribute.$$dbClassInfo = $$dbClassInfo;
})();

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      "qx.bom.client.Html": {
        "require": true
      },
      "qx.log.Logger": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "html.classlist": {
          "load": true,
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
  
     ======================================================================
  
     This class contains code based on the following work:
  
     * Base2
       http://code.google.com/p/base2/
       Version 0.9
  
       Copyright:
         (c) 2006-2007, Dean Edwards
  
       License:
         MIT: http://www.opensource.org/licenses/mit-license.php
  
       Authors:
         * Dean Edwards
  
  ************************************************************************ */

  /**
   * CSS class name support for HTML elements. Supports multiple class names
   * for each element. Can query and apply class names to HTML elements.
   */
  qx.Bootstrap.define("qx.bom.element.Class", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /** @type {RegExp} Regular expressions to split class names */
      __splitter__P_71_0: /\s+/g,
      /** @type {RegExp} String trim regular expression. */
      __trim__P_71_1: /^\s+|\s+$/g,
      /**
       * Adds a className to the given element
       * If successfully added the given className will be returned
       *
       * @signature function(element, name)
       * @param element {Element} The element to modify
       * @param name {String} The class name to add
       * @return {String} The added classname (if so)
       */
      add: {
        "native": function native(element, name) {
          if (name.length > 0) {
            element.classList.add(name);
          }
          return name;
        },
        "default": function _default(element, name) {
          if (!this.has(element, name)) {
            element.className += (element.className ? " " : "") + name;
          }
          return name;
        }
      }[qx.core.Environment.get("html.classlist") ? "native" : "default"],
      /**
       * Adds multiple classes to the given element
       *
       * @signature function(element, classes)
       * @param element {Element} DOM element to modify
       * @param classes {String[]} List of classes to add.
       * @return {String} The resulting class name which was applied
       */
      addClasses: {
        "native": function native(element, classes) {
          for (var i = 0; i < classes.length; i++) {
            if (classes[i].length > 0) {
              element.classList.add(classes[i]);
            }
          }
          return element.className;
        },
        "default": function _default(element, classes) {
          var keys = {};
          var result;
          var old = element.className;
          if (old) {
            result = old.split(this.__splitter__P_71_0);
            for (var i = 0, l = result.length; i < l; i++) {
              keys[result[i]] = true;
            }
            for (var i = 0, l = classes.length; i < l; i++) {
              if (!keys[classes[i]]) {
                result.push(classes[i]);
              }
            }
          } else {
            result = classes;
          }
          return element.className = result.join(" ");
        }
      }[qx.core.Environment.get("html.classlist") ? "native" : "default"],
      /**
       * Gets the classname of the given element
       *
       * @param element {Element} The element to query
       * @return {String} The retrieved classname
       */
      get: function get(element) {
        var className = element.className;
        if (typeof className.split !== "function") {
          if (_typeof(className) === "object") {
            if (qx.Bootstrap.getClass(className) == "SVGAnimatedString") {
              className = className.baseVal;
            } else {
              {
                qx.log.Logger.warn(this, "className for element " + element + " cannot be determined");
              }
              className = "";
            }
          }
          if (typeof className === "undefined") {
            {
              qx.log.Logger.warn(this, "className for element " + element + " is undefined");
            }
            className = "";
          }
        }
        return className;
      },
      /**
       * Whether the given element has the given className.
       *
       * @signature function(element, name)
       * @param element {Element} The DOM element to check
       * @param name {String} The class name to check for
       * @return {Boolean} true when the element has the given classname
       */
      has: {
        "native": function native(element, name) {
          return element.classList.contains(name);
        },
        "default": function _default(element, name) {
          var regexp = new RegExp("(^|\\s)" + name + "(\\s|$)");
          return regexp.test(element.className);
        }
      }[qx.core.Environment.get("html.classlist") ? "native" : "default"],
      /**
       * Removes a className from the given element
       *
       * @signature function(element, name)
       * @param element {Element} The DOM element to modify
       * @param name {String} The class name to remove
       * @return {String} The removed class name
       */
      remove: {
        "native": function native(element, name) {
          element.classList.remove(name);
          return name;
        },
        "default": function _default(element, name) {
          var regexp = new RegExp("(^|\\s)" + name + "(\\s|$)");
          element.className = element.className.replace(regexp, "$2");
          return name;
        }
      }[qx.core.Environment.get("html.classlist") ? "native" : "default"],
      /**
       * Removes multiple classes from the given element
       *
       * @signature function(element, classes)
       * @param element {Element} DOM element to modify
       * @param classes {String[]} List of classes to remove.
       * @return {String} The resulting class name which was applied
       */
      removeClasses: {
        "native": function native(element, classes) {
          for (var i = 0; i < classes.length; i++) {
            element.classList.remove(classes[i]);
          }
          return element.className;
        },
        "default": function _default(element, classes) {
          var reg = new RegExp("\\b" + classes.join("\\b|\\b") + "\\b", "g");
          return element.className = element.className.replace(reg, "").replace(this.__trim__P_71_1, "").replace(this.__splitter__P_71_0, " ");
        }
      }[qx.core.Environment.get("html.classlist") ? "native" : "default"],
      /**
       * Replaces the first given class name with the second one
       *
       * @param element {Element} The DOM element to modify
       * @param oldName {String} The class name to remove
       * @param newName {String} The class name to add
       * @return {String} The added class name
       */
      replace: function replace(element, oldName, newName) {
        if (!this.has(element, oldName)) {
          return "";
        }
        this.remove(element, oldName);
        return this.add(element, newName);
      },
      /**
       * Toggles a className of the given element
       *
       * @signature function(element, name, toggle)
       * @param element {Element} The DOM element to modify
       * @param name {String} The class name to toggle
       * @param toggle {Boolean?null} Whether to switch class on/off. Without
       *    the parameter an automatic toggling would happen.
       * @return {String} The class name
       */
      toggle: {
        "native": function native(element, name, toggle) {
          if (toggle === undefined) {
            element.classList.toggle(name);
          } else {
            toggle ? this.add(element, name) : this.remove(element, name);
          }
          return name;
        },
        "default": function _default(element, name, toggle) {
          if (toggle == null) {
            toggle = !this.has(element, name);
          }
          toggle ? this.add(element, name) : this.remove(element, name);
          return name;
        }
      }[qx.core.Environment.get("html.classlist") ? "native" : "default"]
    }
  });
  qx.bom.element.Class.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Event": {
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
   * Orientation event object.
   */
  qx.Class.define("qx.event.type.Orientation", {
    extend: qx.event.type.Event,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __orientation__P_189_0: null,
      __mode__P_189_1: null,
      /**
       * Initialize the fields of the event. The event must be initialized before
       * it can be dispatched.
       *
       * @param orientation {String} One of <code>0</code>, <code>90</code> or <code>-90</code>
       * @param mode {String} <code>landscape</code> or <code>portrait</code>
       * @return {qx.event.type.Orientation} The initialized event instance
       */
      init: function init(orientation, mode) {
        qx.event.type.Orientation.superclass.prototype.init.call(this, false, false);
        this.__orientation__P_189_0 = orientation;
        this.__mode__P_189_1 = mode;
        return this;
      },
      /**
       * Get a copy of this object
       *
       * @param embryo {qx.event.type.Orientation?null} Optional event class, which will
       *     be configured using the data of this event instance. The event must be
       *     an instance of this event class. If the data is <code>null</code>,
       *     a new pooled instance is created.
       *
       * @return {qx.event.type.Orientation} a copy of this object
       */
      clone: function clone(embryo) {
        var clone = qx.event.type.Orientation.superclass.prototype.clone.call(this, embryo);
        clone.__orientation__P_189_0 = this.__orientation__P_189_0;
        clone.__mode__P_189_1 = this.__mode__P_189_1;
        return clone;
      },
      /**
       * Returns the current orientation of the viewport in degree.
       *
       * All possible values and their meaning:
       *
       * * <code>0</code>: "Portrait"
       * * <code>-90</code>: "Landscape (right, screen turned clockwise)"
       * * <code>90</code>: "Landscape (left, screen turned counterclockwise)"
       * * <code>180</code>: "Portrait (upside-down portrait)"
       *
       * @return {Integer} The current orientation in degree
       */
      getOrientation: function getOrientation() {
        return this.__orientation__P_189_0;
      },
      /**
       * Whether the viewport orientation is currently in landscape mode.
       *
       * @return {Boolean} <code>true</code> when the viewport orientation
       *     is currently in landscape mode.
       */
      isLandscape: function isLandscape() {
        return this.__mode__P_189_1 == "landscape";
      },
      /**
       * Whether the viewport orientation is currently in portrait mode.
       *
       * @return {Boolean} <code>true</code> when the viewport orientation
       *     is currently in portrait mode.
       */
      isPortrait: function isPortrait() {
        return this.__mode__P_189_1 == "portrait";
      }
    }
  });
  qx.event.type.Orientation.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Dom": {
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
       * Martin Wittemann (martinwittemann)
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Touch event object.
   *
   * For more information see:
   *     https://developer.apple.com/library/safari/#documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html
   */
  qx.Class.define("qx.event.type.Touch", {
    extend: qx.event.type.Dom,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Touch.superclass.prototype._cloneNativeEvent.call(this, nativeEvent, clone);
        clone.pageX = nativeEvent.pageX;
        clone.pageY = nativeEvent.pageY;
        clone.offsetX = nativeEvent.offsetX;
        clone.offsetY = nativeEvent.offsetY;

        // Workaround for BUG #6491
        clone.layerX = nativeEvent.offsetX || nativeEvent.layerX;
        clone.layerY = nativeEvent.offsetY || nativeEvent.layerY;
        clone.scale = nativeEvent.scale;
        clone.rotation = nativeEvent.rotation;
        clone._rotation = nativeEvent._rotation;
        clone.delta = nativeEvent.delta;
        clone.srcElement = nativeEvent.srcElement;
        clone.targetTouches = [];
        for (var i = 0; i < nativeEvent.targetTouches.length; i++) {
          clone.targetTouches[i] = nativeEvent.targetTouches[i];
        }
        clone.changedTouches = [];
        for (i = 0; i < nativeEvent.changedTouches.length; i++) {
          clone.changedTouches[i] = nativeEvent.changedTouches[i];
        }
        clone.touches = [];
        for (i = 0; i < nativeEvent.touches.length; i++) {
          clone.touches[i] = nativeEvent.touches[i];
        }
        return clone;
      },
      // overridden
      stop: function stop() {
        this.stopPropagation();
      },
      /**
       * Returns an array of native Touch objects representing all current
       * touches on the document.
       * Returns an empty array for the "touchend" event.
       *
       * @return {Object[]} Array of touch objects. For more information see:
       *     https://developer.apple.com/library/safari/#documentation/UserExperience/Reference/TouchClassReference/Touch/Touch.html
       */
      getAllTouches: function getAllTouches() {
        return this._native.touches;
      },
      /**
       * Returns an array of native Touch objects representing all touches
       * associated with the event target element.
       * Returns an empty array for the "touchend" event.
       *
       * @return {Object[]} Array of touch objects. For more information see:
       *     https://developer.apple.com/library/safari/#documentation/UserExperience/Reference/TouchClassReference/Touch/Touch.html
       */
      getTargetTouches: function getTargetTouches() {
        return this._native.targetTouches;
      },
      /**
       * Returns an array of native Touch objects representing all touches of
       * the target element that changed in this event.
       *
       * On the "touchstart" event the array contains all touches that were
       * added to the target element.
       * On the "touchmove" event the array contains all touches that were
       * moved on the target element.
       * On the "touchend" event the array contains all touches that used
       * to be on the target element.
       *
       * @return {Object[]} Array of touch objects. For more information see:
       *     https://developer.apple.com/library/safari/#documentation/UserExperience/Reference/TouchClassReference/Touch/Touch.html
       */
      getChangedTargetTouches: function getChangedTargetTouches() {
        return this._native.changedTouches;
      },
      /**
       * Checks whether more than one touch is associated with the event target
       * element.
       *
       * @return {Boolean} Is multi-touch
       */
      isMultiTouch: function isMultiTouch() {
        return this.__getEventSpecificTouches__P_157_0().length > 1;
      },
      /**
       * Returns the distance between two fingers since the start of the event.
       * The distance is a multiplier of the initial distance.
       * Initial value: 1.0.
       * Gestures:
       * < 1.0, pinch close / zoom out.
       * > 1.0, pinch open / to zoom in.
       *
       * @return {Float} The scale distance between two fingers
       */
      getScale: function getScale() {
        return this._native.scale;
      },
      /**
       * Returns the delta of the rotation since the start of the event, in degrees.
       * Initial value is 0.0
       * Clockwise > 0
       * Counter-clockwise < 0.
       *
       * @return {Float} The rotation delta
       */
      getRotation: function getRotation() {
        if (typeof this._native._rotation === "undefined") {
          return this._native.rotation;
        } else {
          return this._native._rotation;
        }
      },
      /**
       * Returns an array with the calculated delta coordinates of all active touches,
       * relative to the position on <code>touchstart</code> event.
       *
       * @return {Array} an array with objects for each active touch which contains the delta as <code>x</code> and
       * <code>y</code>, the touch identifier as <code>identifier</code> and the movement axis as <code>axis</code>.
       */
      getDelta: function getDelta() {
        return this._native.delta;
      },
      /**
       * Get the horizontal position at which the event occurred relative to the
       * left of the document. This property takes into account any scrolling of
       * the page.
       *
       * @param touchIndex {Integer ? 0} The index of the Touch object
       * @return {Integer} The horizontal position of the touch in the document.
       */
      getDocumentLeft: function getDocumentLeft(touchIndex) {
        return this.__getEventSpecificTouch__P_157_1(touchIndex).pageX;
      },
      /**
       * Get the vertical position at which the event occurred relative to the
       * top of the document. This property takes into account any scrolling of
       * the page.
       *
       * @param touchIndex {Integer ? 0} The index of the Touch object
       * @return {Integer} The vertical position of the touch in the document.
       */
      getDocumentTop: function getDocumentTop(touchIndex) {
        return this.__getEventSpecificTouch__P_157_1(touchIndex).pageY;
      },
      /**
       * Get the horizontal coordinate at which the event occurred relative to
       * the origin of the screen coordinate system.
       *
       * @param touchIndex {Integer ? 0} The index of the Touch object
       * @return {Integer} The horizontal position of the touch
       */
      getScreenLeft: function getScreenLeft(touchIndex) {
        return this.__getEventSpecificTouch__P_157_1(touchIndex).screenX;
      },
      /**
       * Get the vertical coordinate at which the event occurred relative to
       * the origin of the screen coordinate system.
       *
       * @param touchIndex {Integer ? 0} The index of the Touch object
       * @return {Integer} The vertical position of the touch
       */
      getScreenTop: function getScreenTop(touchIndex) {
        return this.__getEventSpecificTouch__P_157_1(touchIndex).screenY;
      },
      /**
       * Get the the horizontal coordinate at which the event occurred relative
       * to the viewport.
       *
       * @param touchIndex {Integer ? 0} The index of the Touch object
       * @return {Integer} The horizontal position of the touch
       */
      getViewportLeft: function getViewportLeft(touchIndex) {
        return this.__getEventSpecificTouch__P_157_1(touchIndex).clientX;
      },
      /**
       * Get the vertical coordinate at which the event occurred relative
       * to the viewport.
       *
       * @param touchIndex {Integer ? 0} The index of the Touch object
       * @return {Integer} The vertical position of the touch
       */
      getViewportTop: function getViewportTop(touchIndex) {
        return this.__getEventSpecificTouch__P_157_1(touchIndex).clientY;
      },
      /**
       * Returns the unique identifier for a certain touch object.
       *
       * @param touchIndex {Integer ? 0} The index of the Touch object
       * @return {Integer} Unique identifier of the touch object
       */
      getIdentifier: function getIdentifier(touchIndex) {
        return this.__getEventSpecificTouch__P_157_1(touchIndex).identifier;
      },
      /**
       * Returns an event specific touch on the target element. This function is
       * used as the "touchend" event only offers Touch objects in the
       * changedTouches array.
       *
       * @param touchIndex {Integer ? 0} The index of the Touch object to
       *     retrieve
       * @return {Object} A native Touch object
       */
      __getEventSpecificTouch__P_157_1: function __getEventSpecificTouch__P_157_1(touchIndex) {
        touchIndex = touchIndex == null ? 0 : touchIndex;
        return this.__getEventSpecificTouches__P_157_0()[touchIndex];
      },
      /**
       * Returns the event specific touches on the target element. This function
       * is used as the "touchend" event only offers Touch objects in the
       * changedTouches array.
       *
       * @return {Object[]} Array of native Touch objects
       */
      __getEventSpecificTouches__P_157_0: function __getEventSpecificTouches__P_157_0() {
        var touches = this._isTouchEnd() ? this.getChangedTargetTouches() : this.getTargetTouches();
        return touches;
      },
      /**
       * Indicates if the event occurs during the "touchend" phase. Needed to
       * determine the event specific touches. Override this method if you derive
       * from this class and want to indicate that the specific event occurred
       * during the "touchend" phase.
       *
       * @return {Boolean} Whether the event occurred during the "touchend" phase
       */
      _isTouchEnd: function _isTouchEnd() {
        return this.getType() == "touchend" || this.getType() == "touchcancel";
      }
    }
  });
  qx.event.type.Touch.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
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
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * Basic implementation for an event emitter. This supplies a basic and
   * minimalistic event mechanism.
   */
  qx.Bootstrap.define("qx.event.Emitter", {
    extend: Object,
    statics: {
      /** Static storage for all event listener */
      __storage__P_145_0: []
    },
    members: {
      __listener__P_145_1: null,
      __any__P_145_2: null,
      /**
       * Attach a listener to the event emitter. The given <code>name</code>
       * will define the type of event. Handing in a <code>'*'</code> will
       * listen to all events emitted by the event emitter.
       *
       * @param name {String} The name of the event to listen to.
       * @param listener {Function} The function execute on {@link #emit}.
       * @param ctx {var?Window} The context of the listener.
       * @return {Integer} An unique <code>id</code> for the attached listener.
       */
      on: function on(name, listener, ctx) {
        var id = qx.event.Emitter.__storage__P_145_0.length;
        this.__getStorage__P_145_3(name).push({
          listener: listener,
          ctx: ctx,
          id: id,
          name: name
        });
        qx.event.Emitter.__storage__P_145_0.push({
          name: name,
          listener: listener,
          ctx: ctx
        });
        return id;
      },
      /**
       * Attach a listener to the event emitter which will be executed only once.
       * The given <code>name</code> will define the type of event. Handing in a
       * <code>'*'</code> will listen to all events emitted by the event emitter.
       *
       * @param name {String} The name of the event to listen to.
       * @param listener {Function} The function execute on {@link #emit}.
       * @param ctx {var?Window} The context of the listener.
       * @return {Integer} An unique <code>id</code> for the attached listener.
       */
      once: function once(name, listener, ctx) {
        var id = qx.event.Emitter.__storage__P_145_0.length;
        this.__getStorage__P_145_3(name).push({
          listener: listener,
          ctx: ctx,
          once: true,
          id: id
        });
        qx.event.Emitter.__storage__P_145_0.push({
          name: name,
          listener: listener,
          ctx: ctx
        });
        return id;
      },
      /**
       * Remove a listener from the event emitter. The given <code>name</code>
       * will define the type of event.
       *
       * @param name {String} The name of the event to listen to.
       * @param listener {Function} The function execute on {@link #emit}.
       * @param ctx {var?Window} The context of the listener.
       * @return {Integer|null} The listener's id if it was removed or
       * <code>null</code> if it wasn't found
       */
      off: function off(name, listener, ctx) {
        var storage = this.__getStorage__P_145_3(name);
        for (var i = storage.length - 1; i >= 0; i--) {
          var entry = storage[i];
          if (entry.listener == listener && entry.ctx == ctx) {
            storage.splice(i, 1);
            qx.event.Emitter.__storage__P_145_0[entry.id] = null;
            return entry.id;
          }
        }
        return null;
      },
      /**
       * Removes the listener identified by the given <code>id</code>. The id
       * will be return on attaching the listener and can be stored for removing.
       *
       * @param id {Integer} The id of the listener.
       * @return {Integer|null} The listener's id if it was removed or
       * <code>null</code> if it wasn't found
       */
      offById: function offById(id) {
        var entry = qx.event.Emitter.__storage__P_145_0[id];
        if (entry) {
          this.off(entry.name, entry.listener, entry.ctx);
        }
        return null;
      },
      /**
       * Alternative for {@link #on}.
       * @param name {String} The name of the event to listen to.
       * @param listener {Function} The function execute on {@link #emit}.
       * @param ctx {var?Window} The context of the listener.
       * @return {Integer} An unique <code>id</code> for the attached listener.
       */
      addListener: function addListener(name, listener, ctx) {
        return this.on(name, listener, ctx);
      },
      /**
       * Alternative for {@link #once}.
       * @param name {String} The name of the event to listen to.
       * @param listener {Function} The function execute on {@link #emit}.
       * @param ctx {var?Window} The context of the listener.
       * @return {Integer} An unique <code>id</code> for the attached listener.
       */
      addListenerOnce: function addListenerOnce(name, listener, ctx) {
        return this.once(name, listener, ctx);
      },
      /**
       * Alternative for {@link #off}.
       * @param name {String} The name of the event to listen to.
       * @param listener {Function} The function execute on {@link #emit}.
       * @param ctx {var?Window} The context of the listener.
       */
      removeListener: function removeListener(name, listener, ctx) {
        this.off(name, listener, ctx);
      },
      /**
       * Alternative for {@link #offById}.
       * @param id {Integer} The id of the listener.
       */
      removeListenerById: function removeListenerById(id) {
        this.offById(id);
      },
      /**
       * Emits an event with the given name. The data will be passed
       * to the listener.
       * @param name {String} The name of the event to emit.
       * @param data {var?undefined} The data which should be passed to the listener.
       */
      emit: function emit(name, data) {
        var storage = this.__getStorage__P_145_3(name).concat();
        var toDelete = [];
        for (var i = 0; i < storage.length; i++) {
          var entry = storage[i];
          entry.listener.call(entry.ctx, data);
          if (entry.once) {
            toDelete.push(entry);
          }
        }

        // listener callbacks could manipulate the storage
        // (e.g. module.Event.once)
        toDelete.forEach(function (entry) {
          var origStorage = this.__getStorage__P_145_3(name);
          var idx = origStorage.indexOf(entry);
          origStorage.splice(idx, 1);
        }.bind(this));

        // call on any
        storage = this.__getStorage__P_145_3("*");
        for (var i = storage.length - 1; i >= 0; i--) {
          var entry = storage[i];
          entry.listener.call(entry.ctx, data);
        }
      },
      /**
       * Returns the internal attached listener.
       * @internal
       * @return {Map} A map which has the event name as key. The values are
       *   arrays containing a map with 'listener' and 'ctx'.
       */
      getListeners: function getListeners() {
        return this.__listener__P_145_1;
      },
      /**
       * Returns the data entry for a given event id. If the entry could
       * not be found, undefined will be returned.
       * @internal
       * @param id {Number} The listeners id
       * @return {Map|undefined} The data entry if found
       */
      getEntryById: function getEntryById(id) {
        for (var name in this.__listener__P_145_1) {
          var store = this.__listener__P_145_1[name];
          for (var i = 0, j = store.length; i < j; i++) {
            if (store[i].id === id) {
              return store[i];
            }
          }
        }
      },
      /**
       * Internal helper which will return the storage for the given name.
       * @param name {String} The name of the event.
       * @return {Array} An array which is the storage for the listener and
       *   the given event name.
       */
      __getStorage__P_145_3: function __getStorage__P_145_3(name) {
        if (this.__listener__P_145_1 == null) {
          this.__listener__P_145_1 = {};
        }
        if (this.__listener__P_145_1[name] == null) {
          this.__listener__P_145_1[name] = [];
        }
        return this.__listener__P_145_1[name];
      }
    }
  });
  qx.event.Emitter.$$dbClassInfo = $$dbClassInfo;
})();

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
      "qx.bom.element.Style": {},
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.dom.Node": {}
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
       2004-2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * Contains support for calculating dimensions of HTML elements.
   *
   * We differ between the box (or border) size which is available via
   * {@link #getWidth} and {@link #getHeight} and the content or scroll
   * sizes which are available via {@link #getContentWidth} and
   * {@link #getContentHeight}.
   */
  qx.Bootstrap.define("qx.bom.element.Dimension", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Returns the rendered width of the given element.
       *
       * This is the visible width of the object, which need not to be identical
       * to the width configured via CSS. This highly depends on the current
       * box-sizing for the document and maybe even for the element.
       *
       * @signature function(element)
       * @param element {Element} element to query
       * @return {Integer} width of the element
       */
      getWidth: function getWidth(element) {
        var rect = element.getBoundingClientRect();
        return Math.round(rect.right - rect.left);
      },
      /**
       * Returns the rendered height of the given element.
       *
       * This is the visible height of the object, which need not to be identical
       * to the height configured via CSS. This highly depends on the current
       * box-sizing for the document and maybe even for the element.
       *
       * @signature function(element)
       * @param element {Element} element to query
       * @return {Integer} height of the element
       */
      getHeight: function getHeight(element) {
        var rect = element.getBoundingClientRect();
        return Math.round(rect.bottom - rect.top);
      },
      /**
       * Returns the rendered size of the given element.
       *
       * @param element {Element} element to query
       * @return {Map} map containing the width and height of the element
       */
      getSize: function getSize(element) {
        return {
          width: this.getWidth(element),
          height: this.getHeight(element)
        };
      },
      /**
       * Returns the outer height of the given element, including height, vertical padding, and vertical borders
       *
       * @param element {Element} element to query
       * @param includeMargins {Boolean?} whether to include margins in teh
       * @return {Integer} the height of the element
       */
      getOuterHeight: function getOuterHeight(element, includeMargins) {
        if (includeMargins) {
          var marginTop = parseInt(document.defaultView.getComputedStyle(element, "").getPropertyValue("margin-top"), 10);
          var marginBottom = parseInt(document.defaultView.getComputedStyle(element, "").getPropertyValue("margin-bottom"), 10);
          return element.offsetHeight + marginTop + marginBottom;
        }
        return element.offsetHeight;
      },
      /**
       * Returns the outer width of the given element, including height, vertical padding, and vertical borders
       *
       * @param element {Element} element to query
       * @param includeMargins {Boolean?} whether to include margins in teh
       * @return {Integer} the width of the element
       */
      getOuterWidth: function getOuterWidth(element, includeMargins) {
        if (includeMargins) {
          var marginLeft = parseInt(document.defaultView.getComputedStyle(element, "").getPropertyValue("margin-left"), 10);
          var marginRight = parseInt(document.defaultView.getComputedStyle(element, "").getPropertyValue("margin-right"), 10);
          return element.offsetWidth + marginLeft + marginRight;
        }
        return element.offsetWidth;
      },
      /**
       * Returns the outer size of the given element, including height, vertical padding, and vertical borders
       *
       * @param element {Element} element to query
       * @param includeMargins {Boolean?} whether to include margins in teh
       * @return {Map} map containing the width and height of the element
       */
      getOuterSize: function getOuterSize(element, includeMargins) {
        return {
          width: this.getOuterWidth(element, includeMargins),
          height: this.getOuterHeight(element, includeMargins)
        };
      },
      /** @type {Map} Contains all overflow values where scrollbars are invisible */
      __hiddenScrollbars__P_50_0: {
        visible: true,
        hidden: true
      },
      /**
       * Returns the content width.
       *
       * The content width is basically the maximum
       * width used or the maximum width which can be used by the content. This
       * excludes all kind of styles of the element like borders, paddings, margins,
       * and even scrollbars.
       *
       * Please note that with visible scrollbars the content width returned
       * may be larger than the box width returned via {@link #getWidth}.
       *
       * @param element {Element} element to query
       * @return {Integer} Computed content width
       */
      getContentWidth: function getContentWidth(element) {
        var Style = qx.bom.element.Style;
        var overflowX = qx.bom.element.Style.get(element, "overflowX");
        var paddingLeft = parseInt(Style.get(element, "paddingLeft") || "0px", 10);
        var paddingRight = parseInt(Style.get(element, "paddingRight") || "0px", 10);
        if (this.__hiddenScrollbars__P_50_0[overflowX]) {
          var contentWidth = element.clientWidth;
          if (qx.core.Environment.get("engine.name") == "opera" || qx.dom.Node.isBlockNode(element)) {
            contentWidth = contentWidth - paddingLeft - paddingRight;
          }

          // IE seems to return 0 on clientWidth if the element is 0px
          // in height so we use the offsetWidth instead
          if (qx.core.Environment.get("engine.name") == "mshtml") {
            if (contentWidth === 0 && element.offsetHeight === 0) {
              return element.offsetWidth;
            }
          }
          return contentWidth;
        } else {
          if (element.clientWidth >= element.scrollWidth) {
            // Scrollbars visible, but not needed? We need to substract both paddings
            return Math.max(element.clientWidth, element.scrollWidth) - paddingLeft - paddingRight;
          } else {
            // Scrollbars visible and needed. We just remove the left padding,
            // as the right padding is not respected in rendering.
            var width = element.scrollWidth - paddingLeft;

            // IE renders the paddingRight as well with scrollbars on
            if (qx.core.Environment.get("engine.name") == "mshtml") {
              width -= paddingRight;
            }
            return width;
          }
        }
      },
      /**
       * Returns the content height.
       *
       * The content height is basically the maximum
       * height used or the maximum height which can be used by the content. This
       * excludes all kind of styles of the element like borders, paddings, margins,
       * and even scrollbars.
       *
       * Please note that with visible scrollbars the content height returned
       * may be larger than the box height returned via {@link #getHeight}.
       *
       * @param element {Element} element to query
       * @return {Integer} Computed content height
       */
      getContentHeight: function getContentHeight(element) {
        var Style = qx.bom.element.Style;
        var overflowY = qx.bom.element.Style.get(element, "overflowY");
        var paddingTop = parseInt(Style.get(element, "paddingTop") || "0px", 10);
        var paddingBottom = parseInt(Style.get(element, "paddingBottom") || "0px", 10);
        if (this.__hiddenScrollbars__P_50_0[overflowY]) {
          return element.clientHeight - paddingTop - paddingBottom;
        } else {
          if (element.clientHeight >= element.scrollHeight) {
            // Scrollbars visible, but not needed? We need to substract both paddings
            return Math.max(element.clientHeight, element.scrollHeight) - paddingTop - paddingBottom;
          } else {
            // Scrollbars visible and needed. We just remove the top padding,
            // as the bottom padding is not respected in rendering.
            return element.scrollHeight - paddingTop;
          }
        }
      },
      /**
       * Returns the rendered content size of the given element.
       *
       * @param element {Element} element to query
       * @return {Map} map containing the content width and height of the element
       */
      getContentSize: function getContentSize(element) {
        return {
          width: this.getContentWidth(element),
          height: this.getContentHeight(element)
        };
      }
    }
  });
  qx.bom.element.Dimension.$$dbClassInfo = $$dbClassInfo;
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
       2006 STZ-IDA, Germany, http://www.stz-ida.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Til Schneider (til132)
  
  ************************************************************************ */

  /**
   * Superclass for formatters and parsers.
   */
  qx.Interface.define("qx.util.format.IFormat", {
    members: {
      /**
       * Formats an object.
       *
       * @abstract
       * @param obj {var} The object to format.
       * @return {String} the formatted object.
       * @throws {Error} the abstract function warning.
       */
      format: function format(obj) {},
      /**
       * Parses an object.
       *
       * @abstract
       * @param str {String} the string to parse.
       * @return {var} the parsed object.
       * @throws {Error} the abstract function warning.
       */
      parse: function parse(str) {}
    }
  });
  qx.util.format.IFormat.$$dbClassInfo = $$dbClassInfo;
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
      "qx.util.format.IFormat": {
        "require": true
      },
      "qx.locale.Date": {
        "construct": true
      },
      "qx.locale.Manager": {},
      "qx.log.Logger": {},
      "qx.lang.String": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2006 STZ-IDA, Germany, http://www.stz-ida.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Til Schneider (til132)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * A formatter and parser for dates, see
   * http://www.unicode.org/reports/tr35/#Date_Format_Patterns
   *
   * Here is a quick overview of the format pattern keys:
   * <table>
   * <tr><th>Key &nbsp;<th>Description
   * <tr><td><code> G </code><td> era, e.g. "AD"
   * <tr><td><code> y </code><td> year
   * <tr><td><code> Y </code><td> week year
   * <tr><td><code> u </code><td> extended year [Not supported yet]
   * <tr><td><code> Q </code><td> quarter
   * <tr><td><code> q </code><td> stand-alone quarter
   * <tr><td><code> M </code><td> month
   * <tr><td><code> L </code><td> stand-alone month
   * <tr><td><code> I </code><td> chinese leap month [Not supported yet]
   * <tr><td><code> w </code><td> week of year
   * <tr><td><code> W </code><td> week of month
   * <tr><td><code> d </code><td> day of month
   * <tr><td><code> D </code><td> day of year
   * <tr><td><code> F </code><td> day of week in month [Not supported yet]
   * <tr><td><code> g </code><td> modified Julian day [Not supported yet]
   * <tr><td><code> E </code><td> day of week
   * <tr><td><code> e </code><td> local day of week
   * <tr><td><code> c </code><td> stand-alone local day of week
   * <tr><td><code> a </code><td> period of day (am or pm)
   * <tr><td><code> h </code><td> 12-hour hour
   * <tr><td><code> H </code><td> 24-hour hour
   * <tr><td><code> K </code><td> hour [0-11]
   * <tr><td><code> k </code><td> hour [1-24]
   * <tr><td><code> j </code><td> special symbol [Not supported yet]
   * <tr><td><code> m </code><td> minute
   * <tr><td><code> s </code><td> second
   * <tr><td><code> S </code><td> fractional second
   * <tr><td><code> A </code><td> millisecond in day [Not supported yet]
   * <tr><td><code> z </code><td> time zone, specific non-location format
   * <tr><td><code> Z </code><td> time zone, rfc822/gmt format
   * <tr><td><code> v </code><td> time zone, generic non-location format [Not supported yet]
   * <tr><td><code> V </code><td> time zone, like z except metazone abbreviations [Not supported yet]
   * </table>
   *
   * (This list is preliminary, not all format keys might be implemented). Most
   * keys support repetitions that influence the meaning of the format. Parts of the
   * format string that should not be interpreted as format keys have to be
   * single-quoted.
   *
   * The same format patterns will be used for both parsing and output formatting.
   *
   * NOTE: Instances of this class must be disposed of after use
   *
   */
  qx.Class.define("qx.util.format.DateFormat", {
    extend: qx.core.Object,
    implement: [qx.util.format.IFormat],
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param format {String|null} The format to use. If null, the locale's default
     * format is used.
     * @param locale {String?} optional locale to be used. In case this is not present, the {@link #locale} property of DateFormat
     * will be following the {@link qx.locale.Manager#locale} property of qx.locale.Manager
     */
    construct: function construct(format, locale) {
      qx.core.Object.constructor.call(this);
      this.__initialLocale__P_51_0 = this.__locale__P_51_1 = locale;
      if (format != null) {
        this.__format__P_51_2 = format.toString();
        if (this.__format__P_51_2 in qx.util.format.DateFormat.ISO_MASKS) {
          if (this.__format__P_51_2 === "isoUtcDateTime") {
            this.__UTC__P_51_3 = true;
          }
          this.__format__P_51_2 = qx.util.format.DateFormat.ISO_MASKS[this.__format__P_51_2];
        }
      } else {
        this.__format__P_51_2 = qx.locale.Date.getDateFormat("long", this.getLocale()) + " " + qx.locale.Date.getDateTimeFormat("HHmmss", "HH:mm:ss", this.getLocale());
      }
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Convenience factory that returns a <code>DateFomat</code> instance that
       * uses a short date-only format. Beware that the overall layout of the
       * date/time format string is that of the locale in effect when the factory
       * function is called.
       *
       * Implemented as a quasi-singleton, so beware of side effects.
       *
       * @return {DateFormat} a DateFormat instance.
       */
      getDateInstance: function getDateInstance() {
        var DateFormat = qx.util.format.DateFormat;
        var format = qx.locale.Date.getDateFormat("short") + "";

        // Memoizing the instance, so caller doesn't have to dispose it.
        if (DateFormat._dateInstance == null || DateFormat._dateInstance.__format__P_51_2 != format) {
          DateFormat._dateInstance = new DateFormat(format);
        }
        return DateFormat._dateInstance;
      },
      /**
       * Convenience factory that returns a <code>DateFomat</code> instance that
       * uses a long date/time format. Beware that the overall layout of the
       * date/time format string is that of the locale in effect when the factory
       * function is called.
       *
       * Implemented as a quasi-singleton, so beware of side effects.
       *
       * @return {DateFormat} a DateFormat instance.
       */
      getDateTimeInstance: function getDateTimeInstance() {
        var DateFormat = qx.util.format.DateFormat;
        var format = qx.locale.Date.getDateFormat("long") + " " + qx.locale.Date.getDateTimeFormat("HHmmss", "HH:mm:ss");

        // Memoizing the instance, so caller doesn't have to dispose it.
        if (DateFormat._dateTimeInstance == null || DateFormat._dateTimeInstance.__format__P_51_2 != format) {
          DateFormat._dateTimeInstance = new DateFormat(format);
        }
        return DateFormat._dateTimeInstance;
      },
      /**
       * @type {Integer} The threshold until when a year should be assumed to belong to the
       *   21st century (e.g. 12 -> 2012). Years over this threshold but below 100 will be
       *   assumed to belong to the 20th century (e.g. 88 -> 1988). Years over 100 will be
       *   used unchanged (e.g. 1792 -> 1792).
       */
      ASSUME_YEAR_2000_THRESHOLD: 30,
      /** @type {Map} Special masks of patterns that are used frequently*/
      ISO_MASKS: {
        isoDate: "yyyy-MM-dd",
        isoTime: "HH:mm:ss",
        isoDateTime: "yyyy-MM-dd'T'HH:mm:ss",
        isoDateTimeTz: "yyyy-MM-dd'T'HH:mm:ssZ",
        isoUtcDateTime: "yyyy-MM-dd'T'HH:mm:ss'Z'"
      },
      /** @type {String} The am marker. */
      AM_MARKER: "am",
      /** @type {String} The pm marker. */
      PM_MARKER: "pm"
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __locale__P_51_1: null,
      __initialLocale__P_51_0: null,
      __format__P_51_2: null,
      __parseFeed__P_51_4: null,
      __parseRules__P_51_5: null,
      __formatTree__P_51_6: null,
      __UTC__P_51_3: null,
      /**
       * Fills a number with leading zeros ("25" -> "0025").
       *
       * @param number {Integer} the number to fill.
       * @param minSize {Integer} the minimum size the returned string should have.
       * @return {String} the filled number as string.
       */
      __fillNumber__P_51_7: function __fillNumber__P_51_7(number, minSize) {
        var str = "" + (number < 0 ? -1 * number : number);
        while (str.length < minSize) {
          str = "0" + str;
        }
        return number < 0 ? "-" + str : str;
      },
      /**
       * Returns the day in year of a date.
       *
       * @param date {Date} the date.
       * @return {Integer} the day in year.
       */
      __getDayInYear__P_51_8: function __getDayInYear__P_51_8(date) {
        var helpDate = new Date(date.getTime());
        var day = helpDate.getDate();
        while (helpDate.getMonth() != 0) {
          // Set the date to the last day of the previous month
          helpDate.setDate(-1);
          day += helpDate.getDate() + 1;
        }
        return day;
      },
      /**
       * Returns the thursday in the same week as the date.
       *
       * @param date {Date} the date to get the thursday of.
       * @return {Date} the thursday in the same week as the date.
       */
      __thursdayOfSameWeek__P_51_9: function __thursdayOfSameWeek__P_51_9(date) {
        return new Date(date.getTime() + (3 - (date.getDay() + 6) % 7) * 86400000);
      },
      /**
       * Returns the week in year of a date.
       *
       * @param date {Date} the date to get the week in year of.
       * @return {Integer} the week in year.
       */
      __getWeekInYear__P_51_10: function __getWeekInYear__P_51_10(date) {
        // The following algorithm comes from http://www.salesianer.de/util/kalwoch.html
        // Get the thursday of the week the date belongs to
        var thursdayDate = this.__thursdayOfSameWeek__P_51_9(date);

        // Get the year the thursday (and therefore the week) belongs to
        var weekYear = thursdayDate.getFullYear();

        // Get the thursday of the week january 4th belongs to
        // (which defines week 1 of a year)
        var thursdayWeek1 = this.__thursdayOfSameWeek__P_51_9(new Date(weekYear, 0, 4));

        // Calculate the calendar week
        return Math.floor(1.5 + (thursdayDate.getTime() - thursdayWeek1.getTime()) / 86400000 / 7);
      },
      /**
       * Returns the week in month of a date.
       *
       * @param date {Date} the date to get the week in year of.
       * @return {Integer} the week in month.
       */
      __getWeekInMonth__P_51_11: function __getWeekInMonth__P_51_11(date) {
        var thursdayDate = this.__thursdayOfSameWeek__P_51_9(date);
        var thursdayWeek1 = this.__thursdayOfSameWeek__P_51_9(new Date(date.getFullYear(), date.getMonth(), 4));
        return Math.floor(1.5 + (thursdayDate.getTime() - thursdayWeek1.getTime()) / 86400000 / 7);
      },
      /**
       * Returns the week year of a date. (that is the year of the week where this date happens to be)
       * For a week in the middle of the summer, the year is easily obtained, but for a week
       * when New Year's Eve takes place, the year of that week is ambiguous.
       * The thursday day of that week is used to determine the year.
       *
       * @param date {Date} the date to get the week in year of.
       * @return {Integer} the week year.
       */
      __getWeekYear__P_51_12: function __getWeekYear__P_51_12(date) {
        var thursdayDate = this.__thursdayOfSameWeek__P_51_9(date);
        return thursdayDate.getFullYear();
      },
      /**
       * Returns true if the year is a leap one.
       *
       * @param year {Integer} the year to check.
       * @return {Boolean} true if it is a leap year.
       */
      __isLeapYear__P_51_13: function __isLeapYear__P_51_13(year) {
        var februaryDate = new Date(year, 2, 1);
        februaryDate.setDate(-1);
        return februaryDate.getDate() + 1 === 29;
      },
      /**
       * Returns a json object with month and day as keys.
       *
       * @param dayOfYear {Integer} the day of year.
       * @param year {Integer} the year to check.
       * @return {Object} a json object {month: M, day: D}.
       */
      __getMonthAndDayFromDayOfYear__P_51_14: function __getMonthAndDayFromDayOfYear__P_51_14(dayOfYear, year) {
        var month = 0;
        var day = 0;
        // if we don't know the year, we take a non-leap year'
        if (!year) {
          year = 1971;
        }
        var dayCounter = 0;
        for (var i = 1; i <= 12; i++) {
          var tempDate = new Date(year, i, 1);
          tempDate.setDate(-1);
          var days = tempDate.getDate() + 1;
          dayCounter += days;
          if (dayCounter < dayOfYear) {
            month++;
            day += days;
          } else {
            day = dayOfYear - (dayCounter - days);
            break;
          }
        }
        return {
          month: month,
          day: day
        };
      },
      /**
       * Returns the year of a date when we know the week year
       *
       * @param weekYear {Integer} the week year.
       * @param month {Integer} the month
       * @param dayOfMonth {Integer} the day in month
       * @return {Integer} the year.
       */
      __getYearFromWeekYearAndMonth__P_51_15: function __getYearFromWeekYearAndMonth__P_51_15(weekYear, month, dayOfMonth) {
        var year;
        switch (month) {
          case 11:
            year = weekYear - 1;
            if (weekYear != this.__getWeekYear__P_51_12(new Date(year, month, dayOfMonth))) {
              year = weekYear;
            }
            break;
          case 0:
            year = weekYear + 1;
            if (weekYear != this.__getWeekYear__P_51_12(new Date(year, month, dayOfMonth))) {
              year = weekYear;
            }
            break;
          default:
            year = weekYear;
        }
        return year;
      },
      /**
       * Sets the new value for locale property
       * @param value {String} The new value.
       *
       */
      setLocale: function setLocale(value) {
        if (value !== null && typeof value != "string") {
          throw new Error("Cannot set locale to " + value + " - please provide a string");
        }
        this.__locale__P_51_1 = value === null ? this.__initialLocale__P_51_0 : value;
      },
      /**
       * Resets the Locale
       */
      resetLocale: function resetLocale() {
        this.setLocale(null);
      },
      /**
       * Returns the locale
       */
      getLocale: function getLocale() {
        var locale = this.__locale__P_51_1;
        if (locale === undefined) {
          locale = qx.locale.Manager.getInstance().getLocale();
        }
        return locale;
      },
      /**
       * Returns the original format string
       *
       * @return {String}
       */
      getFormatString: function getFormatString() {
        return this.__format__P_51_2;
      },
      /**
       * Formats a date.
       *
       * @param date {Date} The date to format.
       * @return {String} the formatted date.
       */
      format: function format(date) {
        // check for null dates
        if (date == null) {
          return null;
        }
        if (isNaN(date.getTime())) {
          {
            qx.log.Logger.error("Provided date is invalid");
          }
          return null;
        }
        if (this.__UTC__P_51_3) {
          date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
        }
        var locale = this.getLocale();
        var fullYear = date.getFullYear();
        var month = date.getMonth();
        var dayOfMonth = date.getDate();
        var dayOfWeek = date.getDay();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ms = date.getMilliseconds();
        var timezoneOffset = date.getTimezoneOffset();
        var timezoneSign = timezoneOffset > 0 ? 1 : -1;
        var timezoneHours = Math.floor(Math.abs(timezoneOffset) / 60);
        var timezoneMinutes = Math.abs(timezoneOffset) % 60;

        // Create the output
        this.__initFormatTree__P_51_16();
        var output = "";
        for (var i = 0; i < this.__formatTree__P_51_6.length; i++) {
          var currAtom = this.__formatTree__P_51_6[i];
          if (currAtom.type == "literal") {
            output += currAtom.text;
          } else {
            // This is a wildcard
            var wildcardChar = currAtom.character;
            var wildcardSize = currAtom.size;

            // Get its replacement
            var replacement = "?";
            switch (wildcardChar) {
              case "y":
                // Year
                if (wildcardSize == 2) {
                  replacement = this.__fillNumber__P_51_7(fullYear % 100, 2);
                } else {
                  var year = Math.abs(fullYear);
                  replacement = year + "";
                  if (wildcardSize > replacement.length) {
                    for (var j = replacement.length; j < wildcardSize; j++) {
                      replacement = "0" + replacement;
                    }
                  }
                  if (fullYear < 0) {
                    replacement = "-" + replacement;
                  }
                }
                break;
              case "Y":
                // Year
                replacement = this.__getWeekYear__P_51_12(date) + "";
                var year = replacement.replace("-", "");
                if (wildcardSize > replacement.length) {
                  for (var j = year.length; j < wildcardSize; j++) {
                    year = "0" + year;
                  }
                }
                replacement = replacement.indexOf("-") != -1 ? "-" + year : year;
                break;
              case "G":
                // Era - there is no CLDR data for ERA yet
                if (wildcardSize >= 1 && wildcardSize <= 3) {
                  replacement = fullYear > 0 ? "AD" : "BC";
                } else if (wildcardSize == 4) {
                  replacement = fullYear > 0 ? "Anno Domini" : "Before Christ";
                } else if (wildcardSize == 5) {
                  replacement = fullYear > 0 ? "A" : "B";
                }
                break;
              case "Q":
                // quarter
                if (wildcardSize == 1 || wildcardSize == 2) {
                  replacement = this.__fillNumber__P_51_7(parseInt(month / 4) + 1, wildcardSize);
                }
                if (wildcardSize == 3) {
                  replacement = "Q" + (parseInt(month / 4) + 1);
                }
                break;
              case "q":
                // quarter stand alone
                if (wildcardSize == 1 || wildcardSize == 2) {
                  replacement = this.__fillNumber__P_51_7(parseInt(month / 4) + 1, wildcardSize);
                }
                if (wildcardSize == 3) {
                  replacement = "Q" + (parseInt(month / 4) + 1);
                }
                break;
              case "D":
                // Day in year (e.g. 189)
                replacement = this.__fillNumber__P_51_7(this.__getDayInYear__P_51_8(date), wildcardSize);
                break;
              case "d":
                // Day in month
                replacement = this.__fillNumber__P_51_7(dayOfMonth, wildcardSize);
                break;
              case "w":
                // Week in year (e.g. 27)
                replacement = this.__fillNumber__P_51_7(this.__getWeekInYear__P_51_10(date), wildcardSize);
                break;
              case "W":
                // Week in year (e.g. 27)
                replacement = this.__getWeekInMonth__P_51_11(date);
                break;
              case "E":
                // Day in week
                if (wildcardSize >= 1 && wildcardSize <= 3) {
                  replacement = qx.locale.Date.getDayName("abbreviated", dayOfWeek, locale, "format", true);
                } else if (wildcardSize == 4) {
                  replacement = qx.locale.Date.getDayName("wide", dayOfWeek, locale, "format", true);
                } else if (wildcardSize == 5) {
                  replacement = qx.locale.Date.getDayName("narrow", dayOfWeek, locale, "format", true);
                }
                break;
              case "e":
                // Day in week
                var startOfWeek = qx.locale.Date.getWeekStart(locale);
                // the index is 1 based
                var localeDayOfWeek = 1 + (dayOfWeek - startOfWeek >= 0 ? dayOfWeek - startOfWeek : 7 + (dayOfWeek - startOfWeek));
                if (wildcardSize >= 1 && wildcardSize <= 2) {
                  replacement = this.__fillNumber__P_51_7(localeDayOfWeek, wildcardSize);
                } else if (wildcardSize == 3) {
                  replacement = qx.locale.Date.getDayName("abbreviated", dayOfWeek, locale, "format", true);
                } else if (wildcardSize == 4) {
                  replacement = qx.locale.Date.getDayName("wide", dayOfWeek, locale, "format", true);
                } else if (wildcardSize == 5) {
                  replacement = qx.locale.Date.getDayName("narrow", dayOfWeek, locale, "format", true);
                }
                break;
              case "c":
                // Stand-alone local day in week
                var startOfWeek = qx.locale.Date.getWeekStart(locale);
                // the index is 1 based
                var localeDayOfWeek = 1 + (dayOfWeek - startOfWeek >= 0 ? dayOfWeek - startOfWeek : 7 + (dayOfWeek - startOfWeek));
                if (wildcardSize == 1) {
                  replacement = "" + localeDayOfWeek;
                } else if (wildcardSize == 3) {
                  replacement = qx.locale.Date.getDayName("abbreviated", dayOfWeek, locale, "stand-alone", true);
                } else if (wildcardSize == 4) {
                  replacement = qx.locale.Date.getDayName("wide", dayOfWeek, locale, "stand-alone", true);
                } else if (wildcardSize == 5) {
                  replacement = qx.locale.Date.getDayName("narrow", dayOfWeek, locale, "stand-alone", true);
                }
                break;
              case "M":
                // Month
                if (wildcardSize == 1 || wildcardSize == 2) {
                  replacement = this.__fillNumber__P_51_7(month + 1, wildcardSize);
                } else if (wildcardSize == 3) {
                  replacement = qx.locale.Date.getMonthName("abbreviated", month, locale, "format", true);
                } else if (wildcardSize == 4) {
                  replacement = qx.locale.Date.getMonthName("wide", month, locale, "format", true);
                } else if (wildcardSize == 5) {
                  replacement = qx.locale.Date.getMonthName("narrow", month, locale, "format", true);
                }
                break;
              case "L":
                // Stand-alone month
                if (wildcardSize == 1 || wildcardSize == 2) {
                  replacement = this.__fillNumber__P_51_7(month + 1, wildcardSize);
                } else if (wildcardSize == 3) {
                  replacement = qx.locale.Date.getMonthName("abbreviated", month, locale, "stand-alone", true);
                } else if (wildcardSize == 4) {
                  replacement = qx.locale.Date.getMonthName("wide", month, locale, "stand-alone", true);
                } else if (wildcardSize == 5) {
                  replacement = qx.locale.Date.getMonthName("narrow", month, locale, "stand-alone", true);
                }
                break;
              case "a":
                // am/pm marker
                // NOTE: 0:00 is am, 12:00 is pm
                replacement = hours < 12 ? qx.locale.Date.getAmMarker(locale) : qx.locale.Date.getPmMarker(locale);
                break;
              case "H":
                // Hour in day (0-23)
                replacement = this.__fillNumber__P_51_7(hours, wildcardSize);
                break;
              case "k":
                // Hour in day (1-24)
                replacement = this.__fillNumber__P_51_7(hours == 0 ? 24 : hours, wildcardSize);
                break;
              case "K":
                // Hour in am/pm (0-11)
                replacement = this.__fillNumber__P_51_7(hours % 12, wildcardSize);
                break;
              case "h":
                // Hour in am/pm (1-12)
                replacement = this.__fillNumber__P_51_7(hours % 12 == 0 ? 12 : hours % 12, wildcardSize);
                break;
              case "m":
                // Minute in hour
                replacement = this.__fillNumber__P_51_7(minutes, wildcardSize);
                break;
              case "s":
                // Second in minute
                replacement = this.__fillNumber__P_51_7(seconds, wildcardSize);
                break;
              case "S":
                // Fractional second
                replacement = this.__fillNumber__P_51_7(ms, 3);
                if (wildcardSize < replacement.length) {
                  replacement = replacement.substr(0, wildcardSize);
                } else {
                  while (wildcardSize > replacement.length) {
                    // if needed, fill the remaining wildcard length with trailing zeros
                    replacement += "0";
                  }
                }
                break;
              case "z":
                // Time zone
                if (wildcardSize >= 1 && wildcardSize <= 4) {
                  replacement = "GMT" + (timezoneSign > 0 ? "-" : "+") + this.__fillNumber__P_51_7(Math.abs(timezoneHours), 2) + ":" + this.__fillNumber__P_51_7(timezoneMinutes, 2);
                }
                break;
              case "Z":
                // RFC 822 time zone
                if (wildcardSize >= 1 && wildcardSize <= 3) {
                  replacement = (timezoneSign > 0 ? "-" : "+") + this.__fillNumber__P_51_7(Math.abs(timezoneHours), 2) + this.__fillNumber__P_51_7(timezoneMinutes, 2);
                } else {
                  replacement = "GMT" + (timezoneSign > 0 ? "-" : "+") + this.__fillNumber__P_51_7(Math.abs(timezoneHours), 2) + ":" + this.__fillNumber__P_51_7(timezoneMinutes, 2);
                }
                break;
            }
            output += replacement;
          }
        }
        return output;
      },
      /**
       * Parses a date.
       *
       * @param dateStr {String} the date to parse.
       * @return {Date} the parsed date.
       * @throws {Error} If the format is not well formed or if the date string does not
       *       match to the format.
       */
      parse: function parse(dateStr) {
        this.__initParseFeed__P_51_17();

        // Apply the regex
        var hit = this.__parseFeed__P_51_4.regex.exec(dateStr);
        if (hit == null) {
          throw new Error("Date string '" + dateStr + "' does not match the date format: " + this.__format__P_51_2);
        }

        // Apply the rules
        var dateValues = {
          era: 1,
          year: 1970,
          quarter: 1,
          month: 0,
          day: 1,
          dayOfYear: 1,
          hour: 0,
          ispm: false,
          weekDay: 4,
          weekYear: 1970,
          weekOfMonth: 1,
          weekOfYear: 1,
          min: 0,
          sec: 0,
          ms: 0,
          tzOffsetMins: null
        };
        var currGroup = 1;
        var applyWeekYearAfterRule = false;
        var applyDayOfYearAfterRule = false;
        for (var i = 0; i < this.__parseFeed__P_51_4.usedRules.length; i++) {
          var rule = this.__parseFeed__P_51_4.usedRules[i];
          var value = hit[currGroup];
          if (rule.field != null) {
            dateValues[rule.field] = parseInt(value, 10);
          } else {
            rule.manipulator(dateValues, value, rule.pattern);
          }
          if (rule.pattern == "Y+") {
            var yearRuleApplied = false;
            for (var k = 0; k < this.__parseFeed__P_51_4.usedRules.length; k++) {
              if (this.__parseFeed__P_51_4.usedRules[k].pattern == "y+") {
                yearRuleApplied = true;
                break;
              }
            }
            if (!yearRuleApplied) {
              applyWeekYearAfterRule = true;
            }
          }
          if (rule.pattern.indexOf("D") != -1) {
            var dayRuleApplied = false;
            for (var k = 0; k < this.__parseFeed__P_51_4.usedRules.length; k++) {
              if (this.__parseFeed__P_51_4.usedRules[k].pattern.indexOf("d") != -1) {
                dayRuleApplied = true;
                break;
              }
            }
            if (!dayRuleApplied) {
              applyDayOfYearAfterRule = true;
            }
          }
          currGroup += rule.groups == null ? 1 : rule.groups;
        }
        if (applyWeekYearAfterRule) {
          dateValues.year = this.__getYearFromWeekYearAndMonth__P_51_15(dateValues.weekYear, dateValues.month, dateValues.day);
        }
        if (applyDayOfYearAfterRule) {
          var dayAndMonth = this.__getMonthAndDayFromDayOfYear__P_51_14(dateValues.dayOfYear, dateValues.year);
          dateValues.month = dayAndMonth.month;
          dateValues.day = dayAndMonth.day;
        }
        if (dateValues.era < 0 && dateValues.year * dateValues.era < 0) {
          dateValues.year = dateValues.year * dateValues.era;
        }
        var date;
        if (this.__UTC__P_51_3 || dateValues.tzOffsetMins !== null) {
          var utcMs = Date.UTC(dateValues.year, dateValues.month, dateValues.day, dateValues.ispm ? dateValues.hour + 12 : dateValues.hour, dateValues.min, dateValues.sec, dateValues.ms);
          if (dateValues.tzOffsetMins !== 0) {
            utcMs += dateValues.tzOffsetMins * 60000;
          }
          date = new Date(utcMs);
          if (this.__UTC__P_51_3 && (dateValues.month !== date.getUTCMonth() || dateValues.year !== date.getUTCFullYear())) {
            throw new Error("Error parsing date '" + dateStr + "': the value for day or month is too large");
          }
        } else {
          date = new Date(dateValues.year, dateValues.month, dateValues.day, dateValues.ispm ? dateValues.hour + 12 : dateValues.hour, dateValues.min, dateValues.sec, dateValues.ms);
          if (dateValues.month !== date.getMonth() || dateValues.year !== date.getFullYear()) {
            throw new Error("Error parsing date '" + dateStr + "': the value for day or month is too large");
          }
        }
        return date;
      },
      /**
       * Helper method for {@link #format()} and {@link #parse()}.
       * Parses the date format.
       *
       */
      __initFormatTree__P_51_16: function __initFormatTree__P_51_16() {
        if (this.__formatTree__P_51_6 != null) {
          return;
        }
        this.__formatTree__P_51_6 = [];
        var currWildcardChar;
        var currWildcardSize = 0;
        var currLiteral = "";
        var format = this.__format__P_51_2;
        var state = "default";
        var i = 0;
        while (i < format.length) {
          var currChar = format.charAt(i);
          switch (state) {
            case "quoted_literal":
              // We are now inside a quoted literal
              // Check whether the current character is an escaped "'" character
              if (currChar == "'") {
                if (i + 1 >= format.length) {
                  // this is the last character
                  i++;
                  break;
                }
                var lookAhead = format.charAt(i + 1);
                if (lookAhead == "'") {
                  currLiteral += currChar;
                  i++;
                } else {
                  // quoted literal ends
                  i++;
                  state = "unkown";
                }
              } else {
                currLiteral += currChar;
                i++;
              }
              break;
            case "wildcard":
              // Check whether the currChar belongs to that wildcard
              if (currChar == currWildcardChar) {
                // It does -> Raise the size
                currWildcardSize++;
                i++;
              } else {
                // It does not -> The current wildcard is done
                this.__formatTree__P_51_6.push({
                  type: "wildcard",
                  character: currWildcardChar,
                  size: currWildcardSize
                });
                currWildcardChar = null;
                currWildcardSize = 0;
                state = "default";
              }
              break;
            default:
              // We are not (any more) in a wildcard or quoted literal -> Check what's starting here
              if (currChar >= "a" && currChar <= "z" || currChar >= "A" && currChar <= "Z") {
                // This is a letter -> All letters are wildcards
                // Start a new wildcard
                currWildcardChar = currChar;
                state = "wildcard";
              } else if (currChar == "'") {
                if (i + 1 >= format.length) {
                  // this is the last character
                  currLiteral += currChar;
                  i++;
                  break;
                }
                var lookAhead = format.charAt(i + 1);
                if (lookAhead == "'") {
                  currLiteral += currChar;
                  i++;
                }
                i++;
                state = "quoted_literal";
              } else {
                state = "default";
              }
              if (state != "default") {
                // Add the literal
                if (currLiteral.length > 0) {
                  this.__formatTree__P_51_6.push({
                    type: "literal",
                    text: currLiteral
                  });
                  currLiteral = "";
                }
              } else {
                // This is an unquoted literal -> Add it to the current literal
                currLiteral += currChar;
                i++;
              }
              break;
          }
        }

        // Add the last wildcard or literal
        if (currWildcardChar != null) {
          this.__formatTree__P_51_6.push({
            type: "wildcard",
            character: currWildcardChar,
            size: currWildcardSize
          });
        } else if (currLiteral.length > 0) {
          this.__formatTree__P_51_6.push({
            type: "literal",
            text: currLiteral
          });
        }
      },
      /**
       * Initializes the parse feed.
       *
       * The parse contains everything needed for parsing: The regular expression
       * (in compiled and uncompiled form) and the used rules.
       *
       * @throws {Error} If the date format is malformed.
       */
      __initParseFeed__P_51_17: function __initParseFeed__P_51_17() {
        if (this.__parseFeed__P_51_4 != null) {
          // We already have the parse feed
          return;
        }
        var format = this.__format__P_51_2;

        // Initialize the rules
        this.__initParseRules__P_51_18();
        this.__initFormatTree__P_51_16();

        // Get the used rules and construct the regex pattern
        var usedRules = [];
        var pattern = "^";
        for (var atomIdx = 0; atomIdx < this.__formatTree__P_51_6.length; atomIdx++) {
          var currAtom = this.__formatTree__P_51_6[atomIdx];
          if (currAtom.type == "literal") {
            pattern += qx.lang.String.escapeRegexpChars(currAtom.text);
          } else {
            // This is a wildcard
            var wildcardChar = currAtom.character;
            var wildcardSize = currAtom.size;

            // Get the rule for this wildcard
            var wildcardRule;
            for (var ruleIdx = 0; ruleIdx < this.__parseRules__P_51_5.length; ruleIdx++) {
              var rule = this.__parseRules__P_51_5[ruleIdx];
              if (this.__isRuleForWildcard__P_51_19(rule, wildcardChar, wildcardSize)) {
                // We found the right rule for the wildcard
                wildcardRule = rule;
                break;
              }
            }

            // Check the rule
            if (wildcardRule == null) {
              // We have no rule for that wildcard -> Malformed date format
              var wildcardStr = "";
              for (var i = 0; i < wildcardSize; i++) {
                wildcardStr += wildcardChar;
              }
              throw new Error("Malformed date format: " + format + ". Wildcard " + wildcardStr + " is not supported");
            } else {
              // Add the rule to the pattern
              usedRules.push(wildcardRule);
              pattern += wildcardRule.regex;
            }
          }
        }
        pattern += "$";

        // Create the regex
        var regex;
        try {
          regex = new RegExp(pattern);
        } catch (exc) {
          throw new Error("Malformed date format: " + format);
        }

        // Create the this.__parseFeed
        this.__parseFeed__P_51_4 = {
          regex: regex,
          usedRules: usedRules,
          pattern: pattern
        };
      },
      /**
       * Checks whether the rule matches the wildcard or not.
       * @param rule {Object} the rule we try to match with the wildcard
       * @param wildcardChar {String} the character in the wildcard
       * @param wildcardSize {Integer} the number of  wildcardChar characters in the wildcard
       * @return {Boolean} if the rule matches or not
       */
      __isRuleForWildcard__P_51_19: function __isRuleForWildcard__P_51_19(rule, wildcardChar, wildcardSize) {
        if (wildcardChar === "y" && rule.pattern === "y+") {
          rule.regex = rule.regexFunc(wildcardSize);
          return true;
        } else if (wildcardChar === "Y" && rule.pattern === "Y+") {
          rule.regex = rule.regexFunc(wildcardSize);
          return true;
        } else {
          return wildcardChar == rule.pattern.charAt(0) && wildcardSize == rule.pattern.length;
        }
      },
      /**
       * Initializes the static parse rules.
       *
       */
      __initParseRules__P_51_18: function __initParseRules__P_51_18() {
        var DateFormat = qx.util.format.DateFormat;
        var LString = qx.lang.String;
        if (this.__parseRules__P_51_5 != null) {
          // The parse rules are already initialized
          return;
        }
        var rules = this.__parseRules__P_51_5 = [];
        var amMarker = qx.locale.Date.getAmMarker(this.getLocale()).toString() || DateFormat.AM_MARKER;
        var pmMarker = qx.locale.Date.getPmMarker(this.getLocale()).toString() || DateFormat.PM_MARKER;
        var locale = this.getLocale();
        var yearManipulator = function yearManipulator(dateValues, value) {
          value = parseInt(value, 10);
          if (value >= 0) {
            if (value < DateFormat.ASSUME_YEAR_2000_THRESHOLD) {
              value += 2000;
            } else if (value < 100) {
              value += 1900;
            }
          }
          dateValues.year = value;
        };
        var weekYearManipulator = function weekYearManipulator(dateValues, value) {
          value = parseInt(value, 10);
          if (value >= 0) {
            if (value < DateFormat.ASSUME_YEAR_2000_THRESHOLD) {
              value += 2000;
            } else if (value < 100) {
              value += 1900;
            }
          }
          dateValues.weekYear = value;
        };
        var monthManipulator = function monthManipulator(dateValues, value) {
          dateValues.month = parseInt(value, 10) - 1;
        };
        var localWeekDayManipulator = function localWeekDayManipulator(dateValues, value) {
          var startOfWeek = qx.locale.Date.getWeekStart(locale);
          var dayOfWeek = parseInt(value, 10) - 1 + startOfWeek <= 6 ? parseInt(value, 10) - 1 + startOfWeek : parseInt(value, 10) - 1 + startOfWeek - 7;
          dateValues.weekDay = dayOfWeek;
        };
        var ampmManipulator = function ampmManipulator(dateValues, value) {
          var pmMarker = qx.locale.Date.getPmMarker(locale).toString() || DateFormat.PM_MARKER;
          dateValues.ispm = value == pmMarker;
        };
        var noZeroHourManipulator = function noZeroHourManipulator(dateValues, value) {
          dateValues.hour = parseInt(value, 10) % 24;
        };
        var noZeroAmPmHourManipulator = function noZeroAmPmHourManipulator(dateValues, value) {
          dateValues.hour = parseInt(value, 10) % 12;
        };
        var timezoneManipulator = function timezoneManipulator(dateValues, value) {
          var regEx = new RegExp("([+-]?)(\\d\\d)(?::?(\\d\\d))?$");
          var tzResults = regEx.exec(value);
          var offsetHours = parseInt(tzResults[2], 10);
          var offsetMins = parseInt(tzResults[3], 10);
          // basic check, hours range is -12 to +14 https://en.wikipedia.org/wiki/Category:UTC_offsets
          if (offsetHours > 14) {
            throw new Error("Invalid hours in time zone offset.");
          }
          if (offsetMins > 59) {
            throw new Error("Invalid minutes in time zone offset.");
          }
          dateValues.tzOffsetMins = offsetHours * 60 + offsetMins;
          if (tzResults[1] === "-") {
            dateValues.tzOffsetMins = -dateValues.tzOffsetMins;
          }
        };

        // var ignoreManipulator = function(dateValues, value) {
        //   return;
        // };

        var narrowEraNames = ["A", "B"];
        var narrowEraNameManipulator = function narrowEraNameManipulator(dateValues, value) {
          dateValues.era = value == "A" ? 1 : -1;
        };
        var abbrevEraNames = ["AD", "BC"];
        var abbrevEraNameManipulator = function abbrevEraNameManipulator(dateValues, value) {
          dateValues.era = value == "AD" ? 1 : -1;
        };
        var fullEraNames = ["Anno Domini", "Before Christ"];
        var fullEraNameManipulator = function fullEraNameManipulator(dateValues, value) {
          dateValues.era = value == "Anno Domini" ? 1 : -1;
        };
        var abbrevQuarterNames = ["Q1", "Q2", "Q3", "Q4"];
        var abbrevQuarterManipulator = function abbrevQuarterManipulator(dateValues, value) {
          dateValues.quarter = abbrevQuarterNames.indexOf(value);
        };
        var fullQuarterNames = ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"];
        var fullQuarterManipulator = function fullQuarterManipulator(dateValues, value) {
          dateValues.quarter = fullQuarterNames.indexOf(value);
        };
        var cache = {};
        var dateNamesManipulator = function dateNamesManipulator(pattern) {
          var monthPatternLetters = ["L", "M"];
          var dayPatternLetters = ["c", "e", "E"];
          var firstLetterInPattern = pattern.charAt(0);
          var isMonth = monthPatternLetters.indexOf(firstLetterInPattern) >= 0;
          var getContext = function getContext() {
            var letters = isMonth ? monthPatternLetters : dayPatternLetters;
            var context = firstLetterInPattern === letters[0] ? "stand-alone" : "format";
            var patternLength = pattern.length;
            var lengthName = "abbreviated";
            switch (patternLength) {
              case 4:
                lengthName = "wide";
                break;
              case 5:
                lengthName = "narrow";
                break;
              default:
                lengthName = "abbreviated";
            }
            return [context, lengthName];
          };
          if (!cache[pattern]) {
            cache[pattern] = {};
            var context = getContext();
            var func = isMonth ? qx.locale.Date.getMonthNames : qx.locale.Date.getDayNames;
            var names = func.call(qx.locale.Date, context[1], locale, context[0], true);
            for (var i = 0, l = names.length; i < l; i++) {
              names[i] = LString.escapeRegexpChars(names[i].toString());
            }
            cache[pattern].data = names;
            cache[pattern].func = function (dateValues, value) {
              value = LString.escapeRegexpChars(value);
              dateValues[isMonth ? "month" : "weekDay"] = names.indexOf(value);
            };
          }
          return cache[pattern];
        };

        // Unsupported: F (Day of week in month)

        rules.push({
          pattern: "y+",
          regexFunc: function regexFunc(yNumber) {
            var regex = "(-*";
            for (var i = 0; i < yNumber; i++) {
              regex += "\\d";
              if (i === yNumber - 1 && i !== 1) {
                regex += "+?";
              }
            }
            regex += ")";
            return regex;
          },
          manipulator: yearManipulator
        });
        rules.push({
          pattern: "Y+",
          regexFunc: function regexFunc(yNumber) {
            var regex = "(-*";
            for (var i = 0; i < yNumber; i++) {
              regex += "\\d";
              if (i === yNumber - 1) {
                regex += "+?";
              }
            }
            regex += ")";
            return regex;
          },
          manipulator: weekYearManipulator
        });
        rules.push({
          pattern: "G",
          regex: "(" + abbrevEraNames.join("|") + ")",
          manipulator: abbrevEraNameManipulator
        });
        rules.push({
          pattern: "GG",
          regex: "(" + abbrevEraNames.join("|") + ")",
          manipulator: abbrevEraNameManipulator
        });
        rules.push({
          pattern: "GGG",
          regex: "(" + abbrevEraNames.join("|") + ")",
          manipulator: abbrevEraNameManipulator
        });
        rules.push({
          pattern: "GGGG",
          regex: "(" + fullEraNames.join("|") + ")",
          manipulator: fullEraNameManipulator
        });
        rules.push({
          pattern: "GGGGG",
          regex: "(" + narrowEraNames.join("|") + ")",
          manipulator: narrowEraNameManipulator
        });
        rules.push({
          pattern: "Q",
          regex: "(\\d\\d*?)",
          field: "quarter"
        });
        rules.push({
          pattern: "QQ",
          regex: "(\\d\\d?)",
          field: "quarter"
        });
        rules.push({
          pattern: "QQQ",
          regex: "(" + abbrevQuarterNames.join("|") + ")",
          manipulator: abbrevQuarterManipulator
        });
        rules.push({
          pattern: "QQQQ",
          regex: "(" + fullQuarterNames.join("|") + ")",
          manipulator: fullQuarterManipulator
        });
        rules.push({
          pattern: "q",
          regex: "(\\d\\d*?)",
          field: "quarter"
        });
        rules.push({
          pattern: "qq",
          regex: "(\\d\\d?)",
          field: "quarter"
        });
        rules.push({
          pattern: "qqq",
          regex: "(" + abbrevQuarterNames.join("|") + ")",
          manipulator: abbrevQuarterManipulator
        });
        rules.push({
          pattern: "qqqq",
          regex: "(" + fullQuarterNames.join("|") + ")",
          manipulator: fullQuarterManipulator
        });
        rules.push({
          pattern: "M",
          regex: "(\\d\\d*?)",
          manipulator: monthManipulator
        });
        rules.push({
          pattern: "MM",
          regex: "(\\d\\d?)",
          manipulator: monthManipulator
        });
        rules.push({
          pattern: "MMM",
          regex: "(" + dateNamesManipulator("MMM").data.join("|") + ")",
          manipulator: dateNamesManipulator("MMM").func
        });
        rules.push({
          pattern: "MMMM",
          regex: "(" + dateNamesManipulator("MMMM").data.join("|") + ")",
          manipulator: dateNamesManipulator("MMMM").func
        });
        rules.push({
          pattern: "MMMMM",
          regex: "(" + dateNamesManipulator("MMMMM").data.join("|") + ")",
          manipulator: dateNamesManipulator("MMMMM").func
        });
        rules.push({
          pattern: "L",
          regex: "(\\d\\d*?)",
          manipulator: monthManipulator
        });
        rules.push({
          pattern: "LL",
          regex: "(\\d\\d?)",
          manipulator: monthManipulator
        });
        rules.push({
          pattern: "LLL",
          regex: "(" + dateNamesManipulator("LLL").data.join("|") + ")",
          manipulator: dateNamesManipulator("LLL").func
        });
        rules.push({
          pattern: "LLLL",
          regex: "(" + dateNamesManipulator("LLLL").data.join("|") + ")",
          manipulator: dateNamesManipulator("LLLL").func
        });
        rules.push({
          pattern: "LLLLL",
          regex: "(" + dateNamesManipulator("LLLLL").data.join("|") + ")",
          manipulator: dateNamesManipulator("LLLLL").func
        });
        rules.push({
          pattern: "dd",
          regex: "(\\d\\d?)",
          field: "day"
        });
        rules.push({
          pattern: "d",
          regex: "(\\d\\d*?)",
          field: "day"
        });
        rules.push({
          pattern: "D",
          regex: "(\\d?)",
          field: "dayOfYear"
        });
        rules.push({
          pattern: "DD",
          regex: "(\\d\\d?)",
          field: "dayOfYear"
        });
        rules.push({
          pattern: "DDD",
          regex: "(\\d\\d\\d?)",
          field: "dayOfYear"
        });
        rules.push({
          pattern: "E",
          regex: "(" + dateNamesManipulator("E").data.join("|") + ")",
          manipulator: dateNamesManipulator("E").func
        });
        rules.push({
          pattern: "EE",
          regex: "(" + dateNamesManipulator("EE").data.join("|") + ")",
          manipulator: dateNamesManipulator("EE").func
        });
        rules.push({
          pattern: "EEE",
          regex: "(" + dateNamesManipulator("EEE").data.join("|") + ")",
          manipulator: dateNamesManipulator("EEE").func
        });
        rules.push({
          pattern: "EEEE",
          regex: "(" + dateNamesManipulator("EEEE").data.join("|") + ")",
          manipulator: dateNamesManipulator("EEEE").func
        });
        rules.push({
          pattern: "EEEEE",
          regex: "(" + dateNamesManipulator("EEEEE").data.join("|") + ")",
          manipulator: dateNamesManipulator("EEEEE").func
        });
        rules.push({
          pattern: "e",
          regex: "(\\d?)",
          manipulator: localWeekDayManipulator
        });
        rules.push({
          pattern: "ee",
          regex: "(\\d\\d?)",
          manipulator: localWeekDayManipulator
        });
        rules.push({
          pattern: "eee",
          regex: "(" + dateNamesManipulator("eee").data.join("|") + ")",
          manipulator: dateNamesManipulator("eee").func
        });
        rules.push({
          pattern: "eeee",
          regex: "(" + dateNamesManipulator("eeee").data.join("|") + ")",
          manipulator: dateNamesManipulator("eeee").func
        });
        rules.push({
          pattern: "eeeee",
          regex: "(" + dateNamesManipulator("eeeee").data.join("|") + ")",
          manipulator: dateNamesManipulator("eeeee").func
        });
        rules.push({
          pattern: "c",
          regex: "\\d?",
          manipulator: localWeekDayManipulator
        });
        rules.push({
          pattern: "ccc",
          regex: "(" + dateNamesManipulator("ccc").data.join("|") + ")",
          manipulator: dateNamesManipulator("ccc").func
        });
        rules.push({
          pattern: "cccc",
          regex: "(" + dateNamesManipulator("cccc").data.join("|") + ")",
          manipulator: dateNamesManipulator("cccc").func
        });
        rules.push({
          pattern: "ccccc",
          regex: "(" + dateNamesManipulator("ccccc").data.join("|") + ")",
          manipulator: dateNamesManipulator("ccccc").func
        });
        rules.push({
          pattern: "a",
          regex: "(" + amMarker + "|" + pmMarker + ")",
          manipulator: ampmManipulator
        });
        rules.push({
          pattern: "W",
          regex: "(\\d?)",
          field: "weekOfMonth"
        });
        rules.push({
          pattern: "w",
          regex: "(\\d\\d?)",
          field: "weekOfYear"
        });
        rules.push({
          pattern: "ww",
          regex: "(\\d\\d)",
          field: "weekOfYear"
        });
        rules.push({
          pattern: "HH",
          regex: "(\\d\\d?)",
          field: "hour"
        });
        rules.push({
          pattern: "H",
          regex: "(\\d\\d?)",
          field: "hour"
        });
        rules.push({
          pattern: "kk",
          regex: "(\\d\\d?)",
          manipulator: noZeroHourManipulator
        });
        rules.push({
          pattern: "k",
          regex: "(\\d\\d?)",
          manipulator: noZeroHourManipulator
        });
        rules.push({
          pattern: "KK",
          regex: "(\\d\\d?)",
          field: "hour"
        });
        rules.push({
          pattern: "K",
          regex: "(\\d\\d?)",
          field: "hour"
        });
        rules.push({
          pattern: "hh",
          regex: "(\\d\\d?)",
          manipulator: noZeroAmPmHourManipulator
        });
        rules.push({
          pattern: "h",
          regex: "(\\d\\d?)",
          manipulator: noZeroAmPmHourManipulator
        });
        rules.push({
          pattern: "mm",
          regex: "(\\d\\d?)",
          field: "min"
        });
        rules.push({
          pattern: "m",
          regex: "(\\d\\d?)",
          field: "min"
        });
        rules.push({
          pattern: "ss",
          regex: "(\\d\\d?)",
          field: "sec"
        });
        rules.push({
          pattern: "s",
          regex: "(\\d\\d?)",
          field: "sec"
        });
        rules.push({
          pattern: "SSS",
          regex: "(\\d\\d?\\d?)",
          field: "ms"
        });
        rules.push({
          pattern: "SS",
          regex: "(\\d\\d?\\d?)",
          field: "ms"
        });
        rules.push({
          pattern: "S",
          regex: "(\\d\\d?\\d?)",
          field: "ms"
        });
        rules.push({
          pattern: "Z",
          regex: "([\\+\\-]\\d\\d\\d\\d)",
          manipulator: timezoneManipulator
        });
        rules.push({
          pattern: "z",
          regex: "(GMT[\\+\\-]\\d\\d:\\d\\d)",
          manipulator: timezoneManipulator
        });
      }
    }
  });
  qx.util.format.DateFormat.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Dom": {
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
       * Andreas Ecker (ecker)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * Keyboard input event object.
   *
   * the interface of this class is based on the DOM Level 3 keyboard event
   * interface: http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboardevents
   */
  qx.Class.define("qx.event.type.KeyInput", {
    extend: qx.event.type.Dom,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * Initialize the fields of the event.
       *
       * @param domEvent {Event} DOM event
       * @param target {Object} The event target
       * @param charCode {Integer} the character code
       * @return {qx.event.type.KeyInput} The initialized key event instance
       */
      init: function init(domEvent, target, charCode) {
        qx.event.type.KeyInput.superclass.prototype.init.call(this, domEvent, target, null, true, true);
        this._charCode = charCode;
        return this;
      },
      // overridden
      clone: function clone(embryo) {
        var clone = qx.event.type.KeyInput.superclass.prototype.clone.call(this, embryo);
        clone._charCode = this._charCode;
        return clone;
      },
      /**
       * Unicode number of the pressed character.
       *
       * @return {Integer} Unicode number of the pressed character
       */
      getCharCode: function getCharCode() {
        return this._charCode;
      },
      /**
       * Returns the pressed character
       *
       * @return {String} The character
       */
      getChar: function getChar() {
        return String.fromCharCode(this._charCode);
      }
    }
  });
  qx.event.type.KeyInput.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Dom": {
        "require": true
      },
      "qx.event.util.Keyboard": {}
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
   * Keyboard event object.
   *
   * the interface of this class is based on the DOM Level 3 keyboard event
   * interface: http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboardevents
   */
  qx.Class.define("qx.event.type.KeySequence", {
    extend: qx.event.type.Dom,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * Initialize the fields of the event.
       *
       * @param domEvent {Event} DOM event
       * @param target {Object} The event target
       * @param identifier {String} Key identifier
       * @return {qx.event.type.KeySequence} The initialized key event instance
       */
      init: function init(domEvent, target, identifier) {
        qx.event.type.KeySequence.superclass.prototype.init.call(this, domEvent, target, null, true, true);
        this._keyCode = domEvent.keyCode;
        this._identifier = identifier;
        return this;
      },
      // overridden
      clone: function clone(embryo) {
        var clone = qx.event.type.KeySequence.superclass.prototype.clone.call(this, embryo);
        clone._keyCode = this._keyCode;
        clone._identifier = this._identifier;
        return clone;
      },
      /**
       * Identifier of the pressed key. This property is modeled after the <em>KeyboardEvent.keyIdentifier</em> property
       * of the W3C DOM 3 event specification
       * (http://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html#Events-KeyboardEvent-keyIdentifier).
       *
       * Printable keys are represented by an unicode string, non-printable keys
       * have one of the following values:
       *
       * <table>
       * <tr><th>Backspace</th><td>The Backspace (Back) key.</td></tr>
       * <tr><th>Tab</th><td>The Horizontal Tabulation (Tab) key.</td></tr>
       * <tr><th>Space</th><td>The Space (Spacebar) key.</td></tr>
       * <tr><th>Enter</th><td>The Enter key. Note: This key identifier is also used for the Return (Macintosh numpad) key.</td></tr>
       * <tr><th>Shift</th><td>The Shift key.</td></tr>
       * <tr><th>Control</th><td>The Control (Ctrl) key.</td></tr>
       * <tr><th>Alt</th><td>The Alt (Menu) key.</td></tr>
       * <tr><th>CapsLock</th><td>The CapsLock key</td></tr>
       * <tr><th>Meta</th><td>The Meta key. (Apple Meta and Windows key)</td></tr>
       * <tr><th>Escape</th><td>The Escape (Esc) key.</td></tr>
       * <tr><th>Left</th><td>The Left Arrow key.</td></tr>
       * <tr><th>Up</th><td>The Up Arrow key.</td></tr>
       * <tr><th>Right</th><td>The Right Arrow key.</td></tr>
       * <tr><th>Down</th><td>The Down Arrow key.</td></tr>
       * <tr><th>PageUp</th><td>The Page Up key.</td></tr>
       * <tr><th>PageDown</th><td>The Page Down (Next) key.</td></tr>
       * <tr><th>End</th><td>The End key.</td></tr>
       * <tr><th>Home</th><td>The Home key.</td></tr>
       * <tr><th>Insert</th><td>The Insert (Ins) key. (Does not fire in Opera/Win)</td></tr>
       * <tr><th>Delete</th><td>The Delete (Del) Key.</td></tr>
       * <tr><th>F1</th><td>The F1 key.</td></tr>
       * <tr><th>F2</th><td>The F2 key.</td></tr>
       * <tr><th>F3</th><td>The F3 key.</td></tr>
       * <tr><th>F4</th><td>The F4 key.</td></tr>
       * <tr><th>F5</th><td>The F5 key.</td></tr>
       * <tr><th>F6</th><td>The F6 key.</td></tr>
       * <tr><th>F7</th><td>The F7 key.</td></tr>
       * <tr><th>F8</th><td>The F8 key.</td></tr>
       * <tr><th>F9</th><td>The F9 key.</td></tr>
       * <tr><th>F10</th><td>The F10 key.</td></tr>
       * <tr><th>F11</th><td>The F11 key.</td></tr>
       * <tr><th>F12</th><td>The F12 key.</td></tr>
       * <tr><th>NumLock</th><td>The Num Lock key.</td></tr>
       * <tr><th>PrintScreen</th><td>The Print Screen (PrintScrn, SnapShot) key.</td></tr>
       * <tr><th>Scroll</th><td>The scroll lock key</td></tr>
       * <tr><th>Pause</th><td>The pause/break key</td></tr>
       * <tr><th>Win</th><td>The Windows Logo key</td></tr>
       * <tr><th>Apps</th><td>The Application key (Windows Context Menu)</td></tr>
       * </table>
       *
       * @return {String} The key identifier
       */
      getKeyIdentifier: function getKeyIdentifier() {
        return this._identifier;
      },
      /**
       * Returns the native keyCode and is best used on keydown/keyup events to
       * check which physical key was pressed.
       * Don't use this on keypress events because it's erroneous and
       * inconsistent across browsers. But it can be used to detect which key is
       * exactly pressed (e.g. for num pad keys).
       * In any regular case, you should use {@link #getKeyIdentifier} which
       * takes care of all cross browser stuff.
       *
       * The key codes are not character codes, they are just ASCII codes to
       * identify the keyboard (or other input devices) keys.
       *
       * @return {Number} The key code.
       */
      getKeyCode: function getKeyCode() {
        return this._keyCode;
      },
      /**
       * Checks whether the pressed key is printable.
       *
       * @return {Boolean} Whether the pressed key is printable.
       */
      isPrintable: function isPrintable() {
        return qx.event.util.Keyboard.isPrintableKeyIdentifier(this._identifier);
      }
    }
  });
  qx.event.type.KeySequence.$$dbClassInfo = $$dbClassInfo;
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
      "qx.bom.client.OperatingSystem": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "os.name": {
          "load": true,
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
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Andreas Ecker (ecker)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * Utilities for working with character codes and key identifiers
   */
  qx.Bootstrap.define("qx.event.util.Keyboard", {
    statics: {
      /*
      ---------------------------------------------------------------------------
        KEY MAPS
      ---------------------------------------------------------------------------
      */

      /**
       * @type {Map} maps the charcodes of special printable keys to key identifiers
       *
       * @lint ignoreReferenceField(specialCharCodeMap)
       */
      specialCharCodeMap: {
        8: "Backspace",
        // The Backspace (Back) key.
        9: "Tab",
        // The Horizontal Tabulation (Tab) key.

        //   Note: This key identifier is also used for the
        //   Return (Macintosh numpad) key.
        13: "Enter",
        // The Enter key.
        27: "Escape",
        // The Escape (Esc) key.
        32: "Space" // The Space (Spacebar) key.
      },
      /**
       * @type {Map} maps the keycodes of the numpad keys to the right charcodes
       *
       * @lint ignoreReferenceField(numpadToCharCode)
       */
      numpadToCharCode: {
        96: "0".charCodeAt(0),
        97: "1".charCodeAt(0),
        98: "2".charCodeAt(0),
        99: "3".charCodeAt(0),
        100: "4".charCodeAt(0),
        101: "5".charCodeAt(0),
        102: "6".charCodeAt(0),
        103: "7".charCodeAt(0),
        104: "8".charCodeAt(0),
        105: "9".charCodeAt(0),
        106: "*".charCodeAt(0),
        107: "+".charCodeAt(0),
        109: "-".charCodeAt(0),
        110: ",".charCodeAt(0),
        111: "/".charCodeAt(0)
      },
      /**
       * @type {Map} maps the keycodes of non printable keys to key identifiers
       *
       * @lint ignoreReferenceField(keyCodeToIdentifierMap)
       */
      keyCodeToIdentifierMap: {
        16: "Shift",
        // The Shift key.
        17: "Control",
        // The Control (Ctrl) key.
        18: "Alt",
        // The Alt (Menu) key.
        20: "CapsLock",
        // The CapsLock key
        224: "Meta",
        // The Meta key. (Apple Meta and Windows key)

        37: "Left",
        // The Left Arrow key.
        38: "Up",
        // The Up Arrow key.
        39: "Right",
        // The Right Arrow key.
        40: "Down",
        // The Down Arrow key.

        33: "PageUp",
        // The Page Up key.
        34: "PageDown",
        // The Page Down (Next) key.

        35: "End",
        // The End key.
        36: "Home",
        // The Home key.

        45: "Insert",
        // The Insert (Ins) key. (Does not fire in Opera/Win)
        46: "Delete",
        // The Delete (Del) Key.

        112: "F1",
        // The F1 key.
        113: "F2",
        // The F2 key.
        114: "F3",
        // The F3 key.
        115: "F4",
        // The F4 key.
        116: "F5",
        // The F5 key.
        117: "F6",
        // The F6 key.
        118: "F7",
        // The F7 key.
        119: "F8",
        // The F8 key.
        120: "F9",
        // The F9 key.
        121: "F10",
        // The F10 key.
        122: "F11",
        // The F11 key.
        123: "F12",
        // The F12 key.

        144: "NumLock",
        // The Num Lock key.
        44: "PrintScreen",
        // The Print Screen (PrintScrn, SnapShot) key.
        145: "Scroll",
        // The scroll lock key
        19: "Pause",
        // The pause/break key
        // The left Windows Logo key or left cmd key
        91: qx.core.Environment.get("os.name") == "osx" ? "cmd" : "Win",
        92: "Win",
        // The right Windows Logo key or left cmd key
        // The Application key (Windows Context Menu) or right cmd key
        93: qx.core.Environment.get("os.name") == "osx" ? "cmd" : "Apps"
      },
      /** char code for capital A */
      charCodeA: "A".charCodeAt(0),
      /** char code for capital Z */
      charCodeZ: "Z".charCodeAt(0),
      /** char code for 0 */
      charCode0: "0".charCodeAt(0),
      /** char code for 9 */
      charCode9: "9".charCodeAt(0),
      /**
       * converts a keyboard code to the corresponding identifier
       *
       * @param keyCode {Integer} key code
       * @return {String} key identifier
       */
      keyCodeToIdentifier: function keyCodeToIdentifier(keyCode) {
        if (this.isIdentifiableKeyCode(keyCode)) {
          var numPadKeyCode = this.numpadToCharCode[keyCode];
          if (numPadKeyCode) {
            return String.fromCharCode(numPadKeyCode);
          }
          return this.keyCodeToIdentifierMap[keyCode] || this.specialCharCodeMap[keyCode] || String.fromCharCode(keyCode);
        } else {
          return "Unidentified";
        }
      },
      /**
       * converts a character code to the corresponding identifier
       *
       * @param charCode {String} character code
       * @return {String} key identifier
       */
      charCodeToIdentifier: function charCodeToIdentifier(charCode) {
        return this.specialCharCodeMap[charCode] || String.fromCharCode(charCode).toUpperCase();
      },
      /**
       * Check whether the keycode can be reliably detected in keyup/keydown events
       *
       * @param keyCode {String} key code to check.
       * @return {Boolean} Whether the keycode can be reliably detected in keyup/keydown events.
       */
      isIdentifiableKeyCode: function isIdentifiableKeyCode(keyCode) {
        if (keyCode >= this.charCodeA && keyCode <= this.charCodeZ) {
          return true;
        }

        // 0-9
        if (keyCode >= this.charCode0 && keyCode <= this.charCode9) {
          return true;
        }

        // Enter, Space, Tab, Backspace
        if (this.specialCharCodeMap[keyCode]) {
          return true;
        }

        // Numpad
        if (this.numpadToCharCode[keyCode]) {
          return true;
        }

        // non printable keys
        if (this.isNonPrintableKeyCode(keyCode)) {
          return true;
        }
        return false;
      },
      /**
       * Checks whether the keyCode represents a non printable key
       *
       * @param keyCode {String} key code to check.
       * @return {Boolean} Whether the keyCode represents a non printable key.
       */
      isNonPrintableKeyCode: function isNonPrintableKeyCode(keyCode) {
        return this.keyCodeToIdentifierMap[keyCode] ? true : false;
      },
      /**
       * Checks whether a given string is a valid keyIdentifier
       *
       * @param keyIdentifier {String} The key identifier.
       * @return {Boolean} whether the given string is a valid keyIdentifier
       */
      isValidKeyIdentifier: function isValidKeyIdentifier(keyIdentifier) {
        if (this.identifierToKeyCodeMap[keyIdentifier]) {
          return true;
        }
        if (keyIdentifier.length != 1) {
          return false;
        }
        if (keyIdentifier >= "0" && keyIdentifier <= "9") {
          return true;
        }
        if (keyIdentifier >= "A" && keyIdentifier <= "Z") {
          return true;
        }
        switch (keyIdentifier) {
          case "+":
          case "-":
          case "*":
          case "/":
          case ",":
            return true;
          default:
            return false;
        }
      },
      /**
       * Checks whether a given string is a printable keyIdentifier.
       *
       * @param keyIdentifier {String} The key identifier.
       * @return {Boolean} whether the given string is a printable keyIdentifier.
       */
      isPrintableKeyIdentifier: function isPrintableKeyIdentifier(keyIdentifier) {
        if (keyIdentifier === "Space") {
          return true;
        } else {
          return this.identifierToKeyCodeMap[keyIdentifier] ? false : true;
        }
      }
    },
    defer: function defer(statics) {
      // construct inverse of keyCodeToIdentifierMap
      if (!statics.identifierToKeyCodeMap) {
        statics.identifierToKeyCodeMap = {};
        for (var key in statics.keyCodeToIdentifierMap) {
          statics.identifierToKeyCodeMap[statics.keyCodeToIdentifierMap[key]] = parseInt(key, 10);
        }
        for (var key in statics.specialCharCodeMap) {
          statics.identifierToKeyCodeMap[statics.specialCharCodeMap[key]] = parseInt(key, 10);
        }
      }
    }
  });
  qx.event.util.Keyboard.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.dispatch.DomBubbling": {
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
      "qx.bom.client.OperatingSystem": {
        "construct": true,
        "require": true
      },
      "qx.core.Init": {
        "construct": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.Selection": {},
      "qx.event.type.Focus": {},
      "qx.lang.Function": {},
      "qx.bom.Event": {},
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.event.GlobalError": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.Widget": {},
      "qx.bom.element.Attribute": {}
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
        "engine.name": {
          "load": true,
          "className": "qx.bom.client.Engine"
        },
        "browser.name": {
          "load": true,
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
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */

  /**
   * This handler is used to normalize all focus/activation requirements
   * and normalize all cross browser quirks in this area.
   *
   * Notes:
   *
   * * Webkit and Opera (before 9.5) do not support tabIndex for all elements
   * (See also: https://bugs.webkit.org/show_bug.cgi?id=7138)
   *
   * * TabIndex is normally 0, which means all naturally focusable elements are focusable.
   * * TabIndex > 0 means that the element is focusable and tabable
   * * TabIndex < 0 means that the element, even if naturally possible, is not focusable.
   *
   * NOTE: Instances of this class must be disposed of after use
   *
   * @use(qx.event.dispatch.DomBubbling)
   */
  qx.Class.define("qx.event.handler.Focus", {
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
     *
     * @ignore(qx.application.Inline)
     */
    construct: function construct(manager) {
      qx.core.Object.constructor.call(this);

      // Define shorthands
      this._manager = manager;
      this._window = manager.getWindow();
      this._document = this._window.document;
      this._root = this._document.documentElement;
      this._body = this._document.body;
      if (qx.core.Environment.get("os.name") == "ios" && parseFloat(qx.core.Environment.get("os.version")) > 6 && parseFloat(qx.core.Environment.get("os.version")) < 15 && (!qx.application.Inline || !qx.core.Init.getApplication() instanceof qx.application.Inline)) {
        this.__needsScrollFix__P_55_0 = true;
      }

      // Initialize
      this._initObserver();
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** The active DOM element */
      active: {
        apply: "_applyActive",
        nullable: true
      },
      /** The focused DOM element */
      focus: {
        apply: "_applyFocus",
        nullable: true
      }
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
        focus: 1,
        blur: 1,
        focusin: 1,
        focusout: 1,
        activate: 1,
        deactivate: 1
      },
      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true,
      /**
       * @type {Map} See: http://msdn.microsoft.com/en-us/library/ms534654(VS.85).aspx
       */
      FOCUSABLE_ELEMENTS: qx.core.Environment.select("engine.name", {
        mshtml: {
          a: 1,
          body: 1,
          button: 1,
          frame: 1,
          iframe: 1,
          img: 1,
          input: 1,
          object: 1,
          select: 1,
          textarea: 1
        },
        gecko: {
          a: 1,
          body: 1,
          button: 1,
          frame: 1,
          iframe: 1,
          img: 1,
          input: 1,
          object: 1,
          select: 1,
          textarea: 1
        },
        opera: {
          button: 1,
          input: 1,
          select: 1,
          textarea: 1
        },
        webkit: {
          button: 1,
          input: 1,
          select: 1,
          textarea: 1
        }
      })
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __onNativeMouseDownWrapper__P_55_1: null,
      __onNativeMouseUpWrapper__P_55_2: null,
      __onNativeFocusWrapper__P_55_3: null,
      __onNativeBlurWrapper__P_55_4: null,
      __onNativeDragGestureWrapper__P_55_5: null,
      __onNativeSelectStartWrapper__P_55_6: null,
      __onNativeFocusInWrapper__P_55_7: null,
      __onNativeFocusOutWrapper__P_55_8: null,
      __previousFocus__P_55_9: null,
      __previousActive__P_55_10: null,
      __down__P_55_11: "",
      __up__P_55_12: "",
      __needsScrollFix__P_55_0: false,
      __relatedTarget__P_55_13: null,
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
        FOCUS/BLUR USER INTERFACE
      ---------------------------------------------------------------------------
      */
      /**
       * Focuses the given DOM element
       *
       * @param element {Element} DOM element to focus
       */
      focus: function focus(element) {
        // Fixed timing issue with IE, see [BUG #3267]
        if (qx.core.Environment.get("engine.name") == "mshtml") {
          window.setTimeout(function () {
            try {
              // focus element before set cursor position
              element.focus();

              // Fixed cursor position issue with IE, only when nothing is selected.
              // See [BUG #3519] for details.
              var selection = qx.bom.Selection.get(element);
              if (selection.length == 0 && typeof element.createTextRange == "function") {
                var textRange = element.createTextRange();
                textRange.moveStart("character", element.value.length);
                textRange.collapse();
                textRange.select();
              }
            } catch (ex) {}
          }, 0);
        } else {
          // Fix re-focusing on mousup event
          // See https://github.com/qooxdoo/qooxdoo/issues/9393 and
          // discussion in https://github.com/qooxdoo/qooxdoo/pull/9394
          window.setTimeout(function () {
            try {
              element.focus();
            } catch (ex) {}
          }, 0);
        }
        this.setFocus(element);
        this.setActive(element);
      },
      /**
       * Activates the given DOM element
       *
       * @param element {Element} DOM element to activate
       */
      activate: function activate(element) {
        this.setActive(element);
      },
      /**
       * Blurs the given DOM element
       *
       * @param element {Element} DOM element to focus
       */
      blur: function blur(element) {
        try {
          element.blur();
        } catch (ex) {}
        if (this.getActive() === element) {
          this.resetActive();
        }
        if (this.getFocus() === element) {
          this.resetFocus();
        }
      },
      /**
       * Deactivates the given DOM element
       *
       * @param element {Element} DOM element to activate
       */
      deactivate: function deactivate(element) {
        if (this.getActive() === element) {
          this.resetActive();
        }
      },
      /**
       * Tries to activate the given element. This checks whether
       * the activation is allowed first.
       *
       * @param element {Element} DOM element to activate
       */
      tryActivate: function tryActivate(element) {
        var active = this.__findActivatableElement__P_55_14(element);
        if (active) {
          this.setActive(active);
        }
      },
      /*
      ---------------------------------------------------------------------------
        HELPER
      ---------------------------------------------------------------------------
      */
      /**
       * Shorthand to fire events from within this class.
       *
       * @param target {Element} DOM element which is the target
       * @param related {Element} DOM element which is the related target
       * @param type {String} Name of the event to fire
       * @param bubbles {Boolean} Whether the event should bubble
       * @return {qx.Promise?} a promise, if one or more of the event handlers returned a promise
       */
      __fireEvent__P_55_15: function __fireEvent__P_55_15(target, related, type, bubbles) {
        var Registration = qx.event.Registration;
        var evt = Registration.createEvent(type, qx.event.type.Focus, [target, related, bubbles]);
        return Registration.dispatchEvent(target, evt);
      },
      /*
      ---------------------------------------------------------------------------
        WINDOW FOCUS/BLUR SUPPORT
      ---------------------------------------------------------------------------
      */

      /** @type {Boolean} Whether the window is focused currently */
      _windowFocused: true,
      /**
       * Helper for native event listeners to react on window blur
       */
      __doWindowBlur__P_55_16: function __doWindowBlur__P_55_16() {
        // Omit doubled blur events
        // which is a common behavior at least for gecko based clients
        if (this._windowFocused) {
          this._windowFocused = false;
          this.__fireEvent__P_55_15(this._window, null, "blur", false);
        }
      },
      /**
       * Helper for native event listeners to react on window focus
       */
      __doWindowFocus__P_55_17: function __doWindowFocus__P_55_17() {
        // Omit doubled focus events
        // which is a common behavior at least for gecko based clients
        if (!this._windowFocused) {
          this._windowFocused = true;
          this.__fireEvent__P_55_15(this._window, null, "focus", false);
        }
      },
      /*
      ---------------------------------------------------------------------------
        NATIVE OBSERVER
      ---------------------------------------------------------------------------
      */

      /**
       * Initializes event listeners.
       *
       * @signature function()
       */
      _initObserver: qx.core.Environment.select("engine.name", {
        gecko: function gecko() {
          // Bind methods
          this.__onNativeMouseDownWrapper__P_55_1 = qx.lang.Function.listener(this.__onNativeMouseDown__P_55_18, this);
          this.__onNativeMouseUpWrapper__P_55_2 = qx.lang.Function.listener(this.__onNativeMouseUp__P_55_19, this);
          this.__onNativeFocusWrapper__P_55_3 = qx.lang.Function.listener(this.__onNativeFocus__P_55_20, this);
          this.__onNativeBlurWrapper__P_55_4 = qx.lang.Function.listener(this.__onNativeBlur__P_55_21, this);
          this.__onNativeDragGestureWrapper__P_55_5 = qx.lang.Function.listener(this.__onNativeDragGesture__P_55_22, this);

          // Register events
          qx.bom.Event.addNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1, true);
          qx.bom.Event.addNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2, true);

          // Capturing is needed for gecko to correctly
          // handle focus of input and textarea fields
          qx.bom.Event.addNativeListener(this._window, "focus", this.__onNativeFocusWrapper__P_55_3, true);
          qx.bom.Event.addNativeListener(this._window, "blur", this.__onNativeBlurWrapper__P_55_4, true);

          // Capture drag events
          qx.bom.Event.addNativeListener(this._window, "draggesture", this.__onNativeDragGestureWrapper__P_55_5, true);
        },
        mshtml: function mshtml() {
          // Bind methods
          this.__onNativeMouseDownWrapper__P_55_1 = qx.lang.Function.listener(this.__onNativeMouseDown__P_55_18, this);
          this.__onNativeMouseUpWrapper__P_55_2 = qx.lang.Function.listener(this.__onNativeMouseUp__P_55_19, this);
          this.__onNativeFocusInWrapper__P_55_7 = qx.lang.Function.listener(this.__onNativeFocusIn__P_55_23, this);
          this.__onNativeFocusOutWrapper__P_55_8 = qx.lang.Function.listener(this.__onNativeFocusOut__P_55_24, this);
          this.__onNativeSelectStartWrapper__P_55_6 = qx.lang.Function.listener(this.__onNativeSelectStart__P_55_25, this);

          // Register events
          qx.bom.Event.addNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1);
          qx.bom.Event.addNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2);

          // MSHTML supports their own focusin and focusout events
          // To detect which elements get focus the target is useful
          // The window blur can detected using focusout and look
          // for the toTarget property which is empty in this case.
          qx.bom.Event.addNativeListener(this._document, "focusin", this.__onNativeFocusInWrapper__P_55_7);
          qx.bom.Event.addNativeListener(this._document, "focusout", this.__onNativeFocusOutWrapper__P_55_8);

          // Add selectstart to prevent selection
          qx.bom.Event.addNativeListener(this._document, "selectstart", this.__onNativeSelectStartWrapper__P_55_6);
        },
        webkit: qx.core.Environment.select("browser.name", {
          // fix for [ISSUE #9174]
          // distinguish bettween MS Edge, which is reported
          // as engine webkit and all other webkit browsers
          edge: function edge(domEvent) {
            // Bind methods
            this.__onNativeMouseDownWrapper__P_55_1 = qx.lang.Function.listener(this.__onNativeMouseDown__P_55_18, this);
            this.__onNativeMouseUpWrapper__P_55_2 = qx.lang.Function.listener(this.__onNativeMouseUp__P_55_19, this);
            this.__onNativeFocusOutWrapper__P_55_8 = qx.lang.Function.listener(this.__onNativeFocusOut__P_55_24, this);
            this.__onNativeFocusInWrapper__P_55_7 = qx.lang.Function.listener(this.__onNativeFocusIn__P_55_23, this);
            this.__onNativeSelectStartWrapper__P_55_6 = qx.lang.Function.listener(this.__onNativeSelectStart__P_55_25, this);

            // Register events
            qx.bom.Event.addNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1, true);
            qx.bom.Event.addNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2, true);
            qx.bom.Event.addNativeListener(this._document, "selectstart", this.__onNativeSelectStartWrapper__P_55_6, false);
            qx.bom.Event.addNativeListener(this._document, "focusin", this.__onNativeFocusInWrapper__P_55_7);
            qx.bom.Event.addNativeListener(this._document, "focusout", this.__onNativeFocusOutWrapper__P_55_8);
          },
          "default": function _default(domEvent) {
            // Bind methods
            this.__onNativeMouseDownWrapper__P_55_1 = qx.lang.Function.listener(this.__onNativeMouseDown__P_55_18, this);
            this.__onNativeMouseUpWrapper__P_55_2 = qx.lang.Function.listener(this.__onNativeMouseUp__P_55_19, this);
            this.__onNativeFocusOutWrapper__P_55_8 = qx.lang.Function.listener(this.__onNativeFocusOut__P_55_24, this);
            this.__onNativeFocusWrapper__P_55_3 = qx.lang.Function.listener(this.__onNativeFocus__P_55_20, this);
            this.__onNativeBlurWrapper__P_55_4 = qx.lang.Function.listener(this.__onNativeBlur__P_55_21, this);
            this.__onNativeSelectStartWrapper__P_55_6 = qx.lang.Function.listener(this.__onNativeSelectStart__P_55_25, this);

            // Register events
            qx.bom.Event.addNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1, true);
            qx.bom.Event.addNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2, true);
            qx.bom.Event.addNativeListener(this._document, "selectstart", this.__onNativeSelectStartWrapper__P_55_6, false);
            qx.bom.Event.addNativeListener(this._window, "DOMFocusOut", this.__onNativeFocusOutWrapper__P_55_8, true);
            qx.bom.Event.addNativeListener(this._window, "focus", this.__onNativeFocusWrapper__P_55_3, true);
            qx.bom.Event.addNativeListener(this._window, "blur", this.__onNativeBlurWrapper__P_55_4, true);
          }
        }),
        opera: function opera() {
          // Bind methods
          this.__onNativeMouseDownWrapper__P_55_1 = qx.lang.Function.listener(this.__onNativeMouseDown__P_55_18, this);
          this.__onNativeMouseUpWrapper__P_55_2 = qx.lang.Function.listener(this.__onNativeMouseUp__P_55_19, this);
          this.__onNativeFocusInWrapper__P_55_7 = qx.lang.Function.listener(this.__onNativeFocusIn__P_55_23, this);
          this.__onNativeFocusOutWrapper__P_55_8 = qx.lang.Function.listener(this.__onNativeFocusOut__P_55_24, this);

          // Register events
          qx.bom.Event.addNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1, true);
          qx.bom.Event.addNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2, true);
          qx.bom.Event.addNativeListener(this._window, "DOMFocusIn", this.__onNativeFocusInWrapper__P_55_7, true);
          qx.bom.Event.addNativeListener(this._window, "DOMFocusOut", this.__onNativeFocusOutWrapper__P_55_8, true);
        }
      }),
      /**
       * Disconnects event listeners.
       *
       * @signature function()
       */
      _stopObserver: qx.core.Environment.select("engine.name", {
        gecko: function gecko() {
          qx.bom.Event.removeNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1, true);
          qx.bom.Event.removeNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2, true);
          qx.bom.Event.removeNativeListener(this._window, "focus", this.__onNativeFocusWrapper__P_55_3, true);
          qx.bom.Event.removeNativeListener(this._window, "blur", this.__onNativeBlurWrapper__P_55_4, true);
          qx.bom.Event.removeNativeListener(this._window, "draggesture", this.__onNativeDragGestureWrapper__P_55_5, true);
        },
        mshtml: function mshtml() {
          qx.bom.Event.removeNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1);
          qx.bom.Event.removeNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2);
          qx.bom.Event.removeNativeListener(this._document, "focusin", this.__onNativeFocusInWrapper__P_55_7);
          qx.bom.Event.removeNativeListener(this._document, "focusout", this.__onNativeFocusOutWrapper__P_55_8);
          qx.bom.Event.removeNativeListener(this._document, "selectstart", this.__onNativeSelectStartWrapper__P_55_6);
        },
        webkit: qx.core.Environment.select("browser.name", {
          // fix for [ISSUE #9174]
          // distinguish bettween MS Edge, which is reported
          // as engine webkit and all other webkit browsers
          edge: function edge() {
            qx.bom.Event.removeNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1);
            qx.bom.Event.removeNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2);
            qx.bom.Event.removeNativeListener(this._document, "focusin", this.__onNativeFocusInWrapper__P_55_7);
            qx.bom.Event.removeNativeListener(this._document, "focusout", this.__onNativeFocusOutWrapper__P_55_8);
            qx.bom.Event.removeNativeListener(this._document, "selectstart", this.__onNativeSelectStartWrapper__P_55_6);
          },
          "default": function _default() {
            qx.bom.Event.removeNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1, true);
            qx.bom.Event.removeNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2, true);
            qx.bom.Event.removeNativeListener(this._document, "selectstart", this.__onNativeSelectStartWrapper__P_55_6, false);
            qx.bom.Event.removeNativeListener(this._window, "DOMFocusOut", this.__onNativeFocusOutWrapper__P_55_8, true);
            qx.bom.Event.removeNativeListener(this._window, "focus", this.__onNativeFocusWrapper__P_55_3, true);
            qx.bom.Event.removeNativeListener(this._window, "blur", this.__onNativeBlurWrapper__P_55_4, true);
          }
        }),
        opera: function opera() {
          qx.bom.Event.removeNativeListener(this._document, "mousedown", this.__onNativeMouseDownWrapper__P_55_1, true);
          qx.bom.Event.removeNativeListener(this._document, "mouseup", this.__onNativeMouseUpWrapper__P_55_2, true);
          qx.bom.Event.removeNativeListener(this._window, "DOMFocusIn", this.__onNativeFocusInWrapper__P_55_7, true);
          qx.bom.Event.removeNativeListener(this._window, "DOMFocusOut", this.__onNativeFocusOutWrapper__P_55_8, true);
        }
      }),
      /*
      ---------------------------------------------------------------------------
        NATIVE LISTENERS
      ---------------------------------------------------------------------------
      */

      /**
       * Native event listener for <code>draggesture</code> event
       * supported by gecko. Used to stop native drag and drop when
       * selection is disabled.
       *
       * @see https://developer.mozilla.org/en-US/docs/Drag_and_Drop
       * @signature function(domEvent)
       * @param domEvent {Event} Native event
       */
      __onNativeDragGesture__P_55_22: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        gecko: function gecko(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (!this.__isSelectable__P_55_26(target)) {
            qx.bom.Event.preventDefault(domEvent);
          }
        },
        "default": null
      })),
      /**
       * Native event listener for <code>DOMFocusIn</code> or <code>focusin</code>
       * depending on the client's engine.
       *
       * @signature function(domEvent)
       * @param domEvent {Event} Native event
       */
      __onNativeFocusIn__P_55_23: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(domEvent) {
          // Force window focus to be the first
          this.__doWindowFocus__P_55_17();

          // Update internal data
          var target = qx.bom.Event.getTarget(domEvent);

          // IE focusin is also fired on elements which are not focusable at all
          // We need to look up for the next focusable element.
          var focusTarget = this.__findFocusableElement__P_55_27(target);
          if (focusTarget) {
            this.setFocus(focusTarget);
          }

          // Make target active
          this.tryActivate(target);
        },
        webkit: qx.core.Environment.select("browser.name", {
          // fix for [ISSUE #9174]
          // distinguish bettween MS Edge, which is reported
          // as engine webkit and all other webkit browsers
          edge: function edge(domEvent) {
            // Force window focus to be the first
            this.__doWindowFocus__P_55_17();

            // Update internal data
            var target = qx.bom.Event.getTarget(domEvent);

            // IE focusin is also fired on elements which are not focusable at all
            // We need to look up for the next focusable element.
            var focusTarget = this.__findFocusableElement__P_55_27(target);
            if (focusTarget) {
              this.setFocus(focusTarget);
            }

            // Make target active
            this.tryActivate(target);
          },
          "default": null
        }),
        opera: function opera(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (target == this._document || target == this._window) {
            this.__doWindowFocus__P_55_17();
            if (this.__previousFocus__P_55_9) {
              this.setFocus(this.__previousFocus__P_55_9);
              delete this.__previousFocus__P_55_9;
            }
            if (this.__previousActive__P_55_10) {
              this.setActive(this.__previousActive__P_55_10);
              delete this.__previousActive__P_55_10;
            }
          } else {
            this.setFocus(target);
            this.tryActivate(target);

            // Clear selection
            if (!this.__isSelectable__P_55_26(target)) {
              target.selectionStart = 0;
              target.selectionEnd = 0;
            }
          }
        },
        "default": null
      })),
      /**
       * Native event listener for <code>DOMFocusOut</code> or <code>focusout</code>
       * depending on the client's engine.
       *
       * @signature function(domEvent)
       * @param domEvent {Event} Native event
       */
      __onNativeFocusOut__P_55_24: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(domEvent) {
          var relatedTarget = qx.bom.Event.getRelatedTarget(domEvent);

          // If the focus goes to nowhere (the document is blurred)
          if (relatedTarget == null) {
            // Update internal representation
            this.__doWindowBlur__P_55_16();

            // Reset active and focus
            this.resetFocus();
            this.resetActive();
          }
        },
        webkit: qx.core.Environment.select("browser.name", {
          // fix for [ISSUE #9174]
          // distinguish bettween MS Edge, which is reported
          // as engine webkit and all other webkit browsers
          edge: function edge(domEvent) {
            var relatedTarget = qx.bom.Event.getRelatedTarget(domEvent);

            // If the focus goes to nowhere (the document is blurred)
            if (relatedTarget == null) {
              // Update internal representation
              this.__doWindowBlur__P_55_16();

              // Reset active and focus
              this.resetFocus();
              this.resetActive();
            }
          },
          "default": function _default(domEvent) {
            var target = qx.bom.Event.getTarget(domEvent);
            if (target === this.getFocus()) {
              this.resetFocus();
            }
            if (target === this.getActive()) {
              this.resetActive();
            }
          }
        }),
        opera: function opera(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (target == this._document) {
            this.__doWindowBlur__P_55_16();

            // Store old focus/active elements
            // Opera do not fire focus events for them
            // when refocussing the window (in my opinion an error)
            this.__previousFocus__P_55_9 = this.getFocus();
            this.__previousActive__P_55_10 = this.getActive();
            this.resetFocus();
            this.resetActive();
          } else {
            if (target === this.getFocus()) {
              this.resetFocus();
            }
            if (target === this.getActive()) {
              this.resetActive();
            }
          }
        },
        "default": null
      })),
      /**
       * Native event listener for <code>blur</code>.
       *
       * @signature function(domEvent)
       * @param domEvent {Event} Native event
       */
      __onNativeBlur__P_55_21: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        gecko: function gecko(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (target === this._window || target === this._document) {
            this.__doWindowBlur__P_55_16();
            this.resetActive();
            this.resetFocus();
          }
        },
        webkit: function webkit(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (target === this._window || target === this._document) {
            this.__doWindowBlur__P_55_16();

            // Store old focus/active elements
            // Opera do not fire focus events for them
            // when refocussing the window (in my opinion an error)
            this.__previousFocus__P_55_9 = this.getFocus();
            this.__previousActive__P_55_10 = this.getActive();
            this.resetActive();
            this.resetFocus();
          }
        },
        "default": null
      })),
      /**
       * Native event listener for <code>focus</code>.
       *
       * @signature function(domEvent)
       * @param domEvent {Event} Native event
       */
      __onNativeFocus__P_55_20: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        gecko: function gecko(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (target === this._window || target === this._document) {
            this.__doWindowFocus__P_55_17();

            // Always speak of the body, not the window or document
            target = this._body;
          }
          this.setFocus(target);
          this.tryActivate(target);
        },
        webkit: function webkit(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (target === this._window || target === this._document) {
            this.__doWindowFocus__P_55_17();
            if (this.__previousFocus__P_55_9) {
              this.setFocus(this.__previousFocus__P_55_9);
              delete this.__previousFocus__P_55_9;
            }
            if (this.__previousActive__P_55_10) {
              this.setActive(this.__previousActive__P_55_10);
              delete this.__previousActive__P_55_10;
            }
          } else {
            this.__relatedTarget__P_55_13 = domEvent.relatedTarget;
            this.setFocus(target);
            this.__relatedTarget__P_55_13 = null;
            this.tryActivate(target);
          }
        },
        "default": null
      })),
      /**
       * Native event listener for <code>mousedown</code>.
       *
       * @signature function(domEvent)
       * @param domEvent {Event} Native event
       */
      __onNativeMouseDown__P_55_18: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);

          // Stop events when no focus element available (or blocked)
          var focusTarget = this.__findFocusableElement__P_55_27(target);
          if (focusTarget) {
            // Add unselectable to keep selection
            if (!this.__isSelectable__P_55_26(target)) {
              // The element is not selectable. Block selection.
              target.unselectable = "on";

              // Unselectable may keep the current selection which
              // is not what we like when changing the focus element.
              // So we clear it
              try {
                if (document.selection) {
                  document.selection.empty();
                }
              } catch (ex) {
                // ignore 'Unknown runtime error'
              }

              // The unselectable attribute stops focussing as well.
              // Do this manually.
              try {
                focusTarget.focus();
              } catch (ex) {
                // ignore "Can't move focus of this control" error
              }
            }
          } else {
            // Stop event for blocking support
            qx.bom.Event.preventDefault(domEvent);

            // Add unselectable to keep selection
            if (!this.__isSelectable__P_55_26(target)) {
              target.unselectable = "on";
            }
          }
        },
        webkit: function webkit(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          var focusTarget = this.__findFocusableElement__P_55_27(target);
          if (focusTarget) {
            this.setFocus(focusTarget);
          } else {
            qx.bom.Event.preventDefault(domEvent);
          }
        },
        gecko: function gecko(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          var focusTarget = this.__findFocusableElement__P_55_27(target);
          if (focusTarget) {
            this.setFocus(focusTarget);
          } else {
            qx.bom.Event.preventDefault(domEvent);
          }
        },
        opera: function opera(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          var focusTarget = this.__findFocusableElement__P_55_27(target);
          if (!this.__isSelectable__P_55_26(target)) {
            // Prevent the default action for all non-selectable
            // targets. This prevents text selection and context menu.
            qx.bom.Event.preventDefault(domEvent);

            // The stopped event keeps the selection
            // of the previously focused element.
            // We need to clear the old selection.
            if (focusTarget) {
              var current = this.getFocus();
              if (current && current.selectionEnd) {
                current.selectionStart = 0;
                current.selectionEnd = 0;
                current.blur();
              }

              // The prevented event also stop the focus, do
              // it manually if needed.
              if (focusTarget) {
                this.setFocus(focusTarget);
              }
            }
          } else if (focusTarget) {
            this.setFocus(focusTarget);
          }
        },
        "default": null
      })),
      /**
       * Native event listener for <code>mouseup</code>.
       *
       * @signature function(domEvent)
       * @param domEvent {Event} Native event
       */
      __onNativeMouseUp__P_55_19: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (target.unselectable) {
            target.unselectable = "off";
          }
          this.tryActivate(this.__fixFocus__P_55_28(target));
        },
        gecko: function gecko(domEvent) {
          // As of Firefox 3.0:
          // Gecko fires mouseup on XUL elements
          // We only want to deal with real HTML elements
          var target = qx.bom.Event.getTarget(domEvent);
          while (target && target.offsetWidth === undefined) {
            target = target.parentNode;
          }
          if (target) {
            this.tryActivate(target);
          }
        },
        webkit: function webkit(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          this.tryActivate(this.__fixFocus__P_55_28(target));
        },
        opera: function opera(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          this.tryActivate(this.__fixFocus__P_55_28(target));
        },
        "default": null
      })),
      /**
       * Fix for bug #9331.
       *
       * @signature function(target)
       * @param target {Element} element to check
       * @return {Element} return correct target (in case of compound input controls should always return textfield);
       */
      __getCorrectFocusTarget__P_55_29: function __getCorrectFocusTarget__P_55_29(target) {
        var focusedElement = this.getFocus();
        if (focusedElement && target != focusedElement) {
          if (focusedElement.nodeName.toLowerCase() === "input" || focusedElement.nodeName.toLowerCase() === "textarea") {
            return focusedElement;
          }
          if (qx.Class.isClass("qx.ui.core.Widget")) {
            // Check compound widgets
            var widget = qx.ui.core.Widget.getWidgetByElement(focusedElement),
              textField = widget && widget.getChildControl && widget.getChildControl("textfield", true);
          }
          if (textField) {
            return textField.getContentElement().getDomElement();
          }
        }
        return target;
      },
      /**
       * Fix for bug #2602.
       *
       * @signature function(target)
       * @param target {Element} target element from mouse up event
       * @return {Element} Element to activate;
       */
      __fixFocus__P_55_28: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(target) {
          return this.__getCorrectFocusTarget__P_55_29(target);
        },
        webkit: function webkit(target) {
          return this.__getCorrectFocusTarget__P_55_29(target);
        },
        "default": function _default(target) {
          return target;
        }
      })),
      /**
       * Native event listener for <code>selectstart</code>.
       *
       *@signature function(domEvent)
       * @param domEvent {Event} Native event
       */
      __onNativeSelectStart__P_55_25: qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name", {
        mshtml: function mshtml(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (!this.__isSelectable__P_55_26(target)) {
            qx.bom.Event.preventDefault(domEvent);
          }
        },
        webkit: function webkit(domEvent) {
          var target = qx.bom.Event.getTarget(domEvent);
          if (!this.__isSelectable__P_55_26(target)) {
            qx.bom.Event.preventDefault(domEvent);
          }
        },
        "default": null
      })),
      /*
      ---------------------------------------------------------------------------
        HELPER METHODS
      ---------------------------------------------------------------------------
      */
      /**
       * Whether the given element is focusable. This is perfectly modeled to the
       * browsers behavior and this way may differ in the various clients.
       *
       * @param el {Element} DOM Element to query
       * @return {Boolean} Whether the element is focusable
       */
      __isFocusable__P_55_30: function __isFocusable__P_55_30(el) {
        var index = qx.bom.element.Attribute.get(el, "tabIndex");
        if (index >= 1) {
          return true;
        }
        var focusable = qx.event.handler.Focus.FOCUSABLE_ELEMENTS;
        if (index >= 0 && focusable[el.tagName]) {
          return true;
        }
        return false;
      },
      /**
       * Returns the next focusable parent element of an activated DOM element.
       *
       * @param el {Element} Element to start lookup with.
       * @return {Element|null} The next focusable element.
       */
      __findFocusableElement__P_55_27: function __findFocusableElement__P_55_27(el) {
        while (el && el.nodeType === 1) {
          if (el.getAttribute("qxKeepFocus") == "on") {
            return null;
          }
          if (this.__isFocusable__P_55_30(el)) {
            return el;
          }
          el = el.parentNode;
        }

        // This should be identical to the one which is selected when
        // clicking into an empty page area. In mshtml this must be
        // the body of the document.
        return this._body;
      },
      /**
       * Returns the next activatable element. May be the element itself.
       * Works a bit different than the method {@link #__findFocusableElement}
       * as it looks up for a parent which is has a keep focus flag. When
       * there is such a parent it returns null otherwise the original
       * incoming element.
       *
       * @param el {Element} Element to start lookup with.
       * @return {Element} The next activatable element.
       */
      __findActivatableElement__P_55_14: function __findActivatableElement__P_55_14(el) {
        var orig = el;
        while (el && el.nodeType === 1) {
          if (el.getAttribute("qxKeepActive") == "on") {
            return null;
          }
          el = el.parentNode;
        }
        return orig;
      },
      /**
       * Whether the given el (or its content) should be selectable
       * by the user.
       *
       * @param node {Element} Node to start lookup with
       * @return {Boolean} Whether the content is selectable.
       */
      __isSelectable__P_55_26: function __isSelectable__P_55_26(node) {
        while (node && node.nodeType === 1) {
          var attr = node.getAttribute("qxSelectable");
          if (attr != null) {
            return attr === "on";
          }
          node = node.parentNode;
        }
        return true;
      },
      /*
      ---------------------------------------------------------------------------
        PROPERTY APPLY ROUTINES
      ---------------------------------------------------------------------------
      */
      // apply routine
      _applyActive: function _applyActive(value, old) {
        // Fire events
        if (old) {
          this.__fireEvent__P_55_15(old, value, "deactivate", true);
        }
        if (value) {
          this.__fireEvent__P_55_15(value, old, "activate", true);
        }
        // correct scroll position for iOS 7 to 14 [ISSUE #9393 and #10565]
        if (this.__needsScrollFix__P_55_0) {
          window.scrollTo(0, 0);
        }
      },
      // apply routine
      _applyFocus: function _applyFocus(value, old) {
        // Fire bubbling events
        if (old) {
          this.__fireEvent__P_55_15(old, value, "focusout", true);
        }
        if (value) {
          this.__fireEvent__P_55_15(value, old, "focusin", true);
        }

        // Fire after events
        if (old) {
          this.__fireEvent__P_55_15(old, value, "blur", false);
        }
        if (value) {
          this.__fireEvent__P_55_15(value, old || this.__relatedTarget__P_55_13, "focus", false);
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
      this._manager = this._window = this._document = this._root = this._body = this.__mouseActive__P_55_31 = this.__relatedTarget__P_55_13 = null;
    },
    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.event.Registration.addHandler(statics);

      // For faster lookups generate uppercase tag names dynamically
      var focusable = statics.FOCUSABLE_ELEMENTS;
      for (var entry in focusable) {
        focusable[entry.toUpperCase()] = 1;
      }
    }
  });
  qx.event.handler.Focus.$$dbClassInfo = $$dbClassInfo;
})();

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.Stylesheet": {},
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["html.stylesheet.createstylesheet", "html.stylesheet.insertrule", "html.stylesheet.deleterule", "html.stylesheet.addimport", "html.stylesheet.removeimport"],
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
       * Daniel Wagner (d_wagner)
  
  ************************************************************************ */
  /**
   * Internal class which contains the checks used by {@link qx.core.Environment}.
   * All checks in here are marked as internal which means you should never use
   * them directly.
   *
   * This class contains checks related to Stylesheet objects.
   *
   * @internal
   */
  qx.Bootstrap.define("qx.bom.client.Stylesheet", {
    statics: {
      /**
       * Returns a stylesheet to be used for feature checks
       *
       * @return {StyleSheet} Stylesheet element
       */
      __getStylesheet__P_58_0: function __getStylesheet__P_58_0() {
        if (!qx.bom.client.Stylesheet.__stylesheet__P_58_1) {
          qx.bom.client.Stylesheet.__stylesheet__P_58_1 = qx.bom.Stylesheet.createElement();
        }
        return qx.bom.client.Stylesheet.__stylesheet__P_58_1;
      },
      /**
       * Check for IE's non-standard document.createStyleSheet function.
       * In IE9 (standards mode), the typeof check returns "function" so false is
       * returned. This is intended since IE9 supports the DOM-standard
       * createElement("style") which should be used instead.
       *
       * @internal
       * @return {Boolean} <code>true</code> if the browser supports
       * document.createStyleSheet
       */
      getCreateStyleSheet: function getCreateStyleSheet() {
        return _typeof(document.createStyleSheet) === "object";
      },
      /**
       * Check for stylesheet.insertRule. Legacy IEs do not support this.
       *
       * @internal
       * @return {Boolean} <code>true</code> if insertRule is supported
       */
      getInsertRule: function getInsertRule() {
        return typeof qx.bom.client.Stylesheet.__getStylesheet__P_58_0().insertRule === "function";
      },
      /**
       * Check for stylesheet.deleteRule. Legacy IEs do not support this.
       *
       * @internal
       * @return {Boolean} <code>true</code> if deleteRule is supported
       */
      getDeleteRule: function getDeleteRule() {
        return typeof qx.bom.client.Stylesheet.__getStylesheet__P_58_0().deleteRule === "function";
      },
      /**
       * Decides whether to use the legacy IE-only stylesheet.addImport or the
       * DOM-standard stylesheet.insertRule('@import [...]')
       *
       * @internal
       * @return {Boolean} <code>true</code> if stylesheet.addImport is supported
       */
      getAddImport: function getAddImport() {
        return _typeof(qx.bom.client.Stylesheet.__getStylesheet__P_58_0().addImport) === "object";
      },
      /**
       * Decides whether to use the legacy IE-only stylesheet.removeImport or the
       * DOM-standard stylesheet.deleteRule('@import [...]')
       *
       * @internal
       * @return {Boolean} <code>true</code> if stylesheet.removeImport is supported
       */
      getRemoveImport: function getRemoveImport() {
        return _typeof(qx.bom.client.Stylesheet.__getStylesheet__P_58_0().removeImport) === "object";
      }
    },
    defer: function defer(statics) {
      qx.core.Environment.add("html.stylesheet.createstylesheet", statics.getCreateStyleSheet);
      qx.core.Environment.add("html.stylesheet.insertrule", statics.getInsertRule);
      qx.core.Environment.add("html.stylesheet.deleterule", statics.getDeleteRule);
      qx.core.Environment.add("html.stylesheet.addimport", statics.getAddImport);
      qx.core.Environment.add("html.stylesheet.removeimport", statics.getRemoveImport);
    }
  });
  qx.bom.client.Stylesheet.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.client.Stylesheet": {
        "require": true
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Assert": {},
      "qx.dom.Element": {},
      "qx.util.Uri": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "html.stylesheet.createstylesheet": {
          "className": "qx.bom.client.Stylesheet"
        },
        "html.stylesheet.insertrule": {
          "className": "qx.bom.client.Stylesheet"
        },
        "html.stylesheet.deleterule": {
          "className": "qx.bom.client.Stylesheet"
        },
        "html.stylesheet.addimport": {
          "className": "qx.bom.client.Stylesheet"
        },
        "html.stylesheet.removeimport": {
          "className": "qx.bom.client.Stylesheet"
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
       2006 STZ-IDA, Germany, http://www.stz-ida.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Andreas Ecker (ecker)
       * Andreas Junghans (lucidcake)
  
  ************************************************************************ */

  /**
   * Cross-browser wrapper to work with CSS stylesheets.
   * @require(qx.bom.client.Stylesheet)
   */
  qx.Bootstrap.define("qx.bom.Stylesheet", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Include a CSS file
       *
       * <em>Note:</em> Using a resource ID as the <code>href</code> parameter
       * will no longer be supported. Call
       * <code>qx.util.ResourceManager.getInstance().toUri(href)</code> to get
       * valid URI to be used with this method.
       *
       * @param href {String} Href value
       * @param doc {Document?} Document to modify
       */
      includeFile: function includeFile(href, doc) {
        if (!doc) {
          doc = document;
        }
        var el = doc.createElement("link");
        el.type = "text/css";
        el.rel = "stylesheet";
        el.href = href;
        var head = doc.getElementsByTagName("head")[0];
        head.appendChild(el);
      },
      /**
       * Create a new Stylesheet node and append it to the document
       *
       * @param text {String?} optional string of css rules
       * @return {StyleSheet} the generates stylesheet element
       */
      createElement: function createElement(text) {
        if (qx.core.Environment.get("html.stylesheet.createstylesheet")) {
          var sheet = document.createStyleSheet();
          if (text) {
            sheet.cssText = text;
          }
          return sheet;
        } else {
          var elem = document.createElement("style");
          elem.type = "text/css";
          if (text) {
            elem.appendChild(document.createTextNode(text));
          }
          document.getElementsByTagName("head")[0].appendChild(elem);
          return elem.sheet;
        }
      },
      /**
       * Insert a new CSS rule into a given Stylesheet
       *
       * @param sheet {Object} the target Stylesheet object
       * @param selector {String} the selector
       * @param entry {String} style rule
       */
      addRule: function addRule(sheet, selector, entry) {
        {
          var msg = "qx.bom.Stylesheet.addRule: The rule '" + entry + "' for the selector '" + selector + "' must not be enclosed in braces";
          qx.core.Assert.assertFalse(/^\s*?\{.*?\}\s*?$/.test(entry), msg);
        }
        if (qx.core.Environment.get("html.stylesheet.insertrule")) {
          sheet.insertRule(selector + "{" + entry + "}", sheet.cssRules.length);
        } else {
          sheet.addRule(selector, entry);
        }
      },
      /**
       * Remove a CSS rule from a stylesheet
       *
       * @param sheet {Object} the Stylesheet
       * @param selector {String} the Selector of the rule to remove
       */
      removeRule: function removeRule(sheet, selector) {
        if (qx.core.Environment.get("html.stylesheet.deleterule")) {
          var rules = sheet.cssRules;
          var len = rules.length;
          for (var i = len - 1; i >= 0; --i) {
            if (rules[i].selectorText == selector) {
              sheet.deleteRule(i);
            }
          }
        } else {
          var rules = sheet.rules;
          var len = rules.length;
          for (var i = len - 1; i >= 0; --i) {
            if (rules[i].selectorText == selector) {
              sheet.removeRule(i);
            }
          }
        }
      },
      /**
       * Remove the given sheet from its owner.
       * @param sheet {Object} the stylesheet object
       */
      removeSheet: function removeSheet(sheet) {
        var owner = sheet.ownerNode ? sheet.ownerNode : sheet.owningElement;
        qx.dom.Element.removeChild(owner, owner.parentNode);
      },
      /**
       * Remove all CSS rules from a stylesheet
       *
       * @param sheet {Object} the stylesheet object
       */
      removeAllRules: function removeAllRules(sheet) {
        if (qx.core.Environment.get("html.stylesheet.deleterule")) {
          var rules = sheet.cssRules;
          var len = rules.length;
          for (var i = len - 1; i >= 0; i--) {
            sheet.deleteRule(i);
          }
        } else {
          var rules = sheet.rules;
          var len = rules.length;
          for (var i = len - 1; i >= 0; i--) {
            sheet.removeRule(i);
          }
        }
      },
      /**
       * Add an import of an external CSS file to a stylesheet
       *
       * @param sheet {Object} the stylesheet object
       * @param url {String} URL of the external stylesheet file
       */
      addImport: function addImport(sheet, url) {
        if (qx.core.Environment.get("html.stylesheet.addimport")) {
          sheet.addImport(url);
        } else {
          sheet.insertRule('@import "' + url + '";', sheet.cssRules.length);
        }
      },
      /**
       * Removes an import from a stylesheet
       *
       * @param sheet {Object} the stylesheet object
       * @param url {String} URL of the imported CSS file
       */
      removeImport: function removeImport(sheet, url) {
        if (qx.core.Environment.get("html.stylesheet.removeimport")) {
          var imports = sheet.imports;
          var len = imports.length;
          for (var i = len - 1; i >= 0; i--) {
            if (imports[i].href == url || imports[i].href == qx.util.Uri.getAbsolute(url)) {
              sheet.removeImport(i);
            }
          }
        } else {
          var rules = sheet.cssRules;
          var len = rules.length;
          for (var i = len - 1; i >= 0; i--) {
            if (rules[i].href == url) {
              sheet.deleteRule(i);
            }
          }
        }
      },
      /**
       * Remove all imports from a stylesheet
       *
       * @param sheet {Object} the stylesheet object
       */
      removeAllImports: function removeAllImports(sheet) {
        if (qx.core.Environment.get("html.stylesheet.removeimport")) {
          var imports = sheet.imports;
          var len = imports.length;
          for (var i = len - 1; i >= 0; i--) {
            sheet.removeImport(i);
          }
        } else {
          var rules = sheet.cssRules;
          var len = rules.length;
          for (var i = len - 1; i >= 0; i--) {
            if (rules[i].type == rules[i].IMPORT_RULE) {
              sheet.deleteRule(i);
            }
          }
        }
      }
    }
  });
  qx.bom.Stylesheet.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.Stylesheet": {
        "require": true,
        "defer": "runtime"
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.Style": {},
      "qx.bom.Event": {},
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["css.animation", "css.animation.requestframe"],
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
   * Responsible for checking all relevant animation properties.
   *
   * Spec: http://www.w3.org/TR/css3-animations/
   *
   * @require(qx.bom.Stylesheet)
   * @internal
   */
  qx.Bootstrap.define("qx.bom.client.CssAnimation", {
    statics: {
      /**
       * Main check method which returns an object if CSS animations are
       * supported. This object contains all necessary keys to work with CSS
       * animations.
       * <ul>
       *  <li><code>name</code> The name of the css animation style</li>
       *  <li><code>play-state</code> The name of the play-state style</li>
       *  <li><code>start-event</code> The name of the start event</li>
       *  <li><code>iteration-event</code> The name of the iteration event</li>
       *  <li><code>end-event</code> The name of the end event</li>
       *  <li><code>fill-mode</code> The fill-mode style</li>
       *  <li><code>keyframes</code> The name of the keyframes selector.</li>
       * </ul>
       *
       * @internal
       * @return {Object|null} The described object or null, if animations are
       *   not supported.
       */
      getSupport: function getSupport() {
        var name = qx.bom.client.CssAnimation.getName();
        if (name != null) {
          return {
            name: name,
            "play-state": qx.bom.client.CssAnimation.getPlayState(),
            "start-event": qx.bom.client.CssAnimation.getAnimationStart(),
            "iteration-event": qx.bom.client.CssAnimation.getAnimationIteration(),
            "end-event": qx.bom.client.CssAnimation.getAnimationEnd(),
            "fill-mode": qx.bom.client.CssAnimation.getFillMode(),
            keyframes: qx.bom.client.CssAnimation.getKeyFrames()
          };
        }
        return null;
      },
      /**
       * Checks for the 'animation-fill-mode' CSS style.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getFillMode: function getFillMode() {
        return qx.bom.Style.getPropertyName("AnimationFillMode");
      },
      /**
       * Checks for the 'animation-play-state' CSS style.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getPlayState: function getPlayState() {
        return qx.bom.Style.getPropertyName("AnimationPlayState");
      },
      /**
       * Checks for the style name used for animations.
       * @internal
       * @return {String|null} The name of the style or null, if the style is
       *   not supported.
       */
      getName: function getName() {
        return qx.bom.Style.getPropertyName("animation");
      },
      /**
       * Checks for the event name of animation start.
       * @internal
       * @return {String} The name of the event.
       */
      getAnimationStart: function getAnimationStart() {
        // special handling for mixed prefixed / unprefixed implementations
        if (qx.bom.Event.supportsEvent(window, "webkitanimationstart")) {
          return "webkitAnimationStart";
        }
        var mapping = {
          msAnimation: "MSAnimationStart",
          WebkitAnimation: "webkitAnimationStart",
          MozAnimation: "animationstart",
          OAnimation: "oAnimationStart",
          animation: "animationstart"
        };
        return mapping[this.getName()];
      },
      /**
       * Checks for the event name of animation end.
       * @internal
       * @return {String} The name of the event.
       */
      getAnimationIteration: function getAnimationIteration() {
        // special handling for mixed prefixed / unprefixed implementations
        if (qx.bom.Event.supportsEvent(window, "webkitanimationiteration")) {
          return "webkitAnimationIteration";
        }
        var mapping = {
          msAnimation: "MSAnimationIteration",
          WebkitAnimation: "webkitAnimationIteration",
          MozAnimation: "animationiteration",
          OAnimation: "oAnimationIteration",
          animation: "animationiteration"
        };
        return mapping[this.getName()];
      },
      /**
       * Checks for the event name of animation end.
       * @internal
       * @return {String} The name of the event.
       */
      getAnimationEnd: function getAnimationEnd() {
        // special handling for mixed prefixed / unprefixed implementations
        if (qx.bom.Event.supportsEvent(window, "webkitanimationend")) {
          return "webkitAnimationEnd";
        }
        var mapping = {
          msAnimation: "MSAnimationEnd",
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        };
        return mapping[this.getName()];
      },
      /**
       * Checks what selector should be used to add keyframes to stylesheets.
       * @internal
       * @return {String|null} The name of the selector or null, if the selector
       *   is not supported.
       */
      getKeyFrames: function getKeyFrames() {
        var prefixes = qx.bom.Style.VENDOR_PREFIXES;
        var keyFrames = [];
        for (var i = 0; i < prefixes.length; i++) {
          var key = "@" + qx.bom.Style.getCssName(prefixes[i]) + "-keyframes";
          keyFrames.push(key);
        }
        keyFrames.unshift("@keyframes");
        var sheet = qx.bom.Stylesheet.createElement();
        for (var i = 0; i < keyFrames.length; i++) {
          try {
            qx.bom.Stylesheet.addRule(sheet, keyFrames[i] + " name", "");
            return keyFrames[i];
          } catch (e) {}
        }
        return null;
      },
      /**
       * Checks for the requestAnimationFrame method and return the prefixed name.
       * @internal
       * @return {String|null} A string the method name or null, if the method
       *   is not supported.
       */
      getRequestAnimationFrame: function getRequestAnimationFrame() {
        var choices = ["requestAnimationFrame", "msRequestAnimationFrame", "webkitRequestAnimationFrame", "mozRequestAnimationFrame", "oRequestAnimationFrame" // currently unspecified, so we guess the name!
        ];
        for (var i = 0; i < choices.length; i++) {
          if (window[choices[i]] != undefined) {
            return choices[i];
          }
        }
        return null;
      }
    },
    defer: function defer(statics) {
      qx.core.Environment.add("css.animation", statics.getSupport);
      qx.core.Environment.add("css.animation.requestframe", statics.getRequestAnimationFrame);
    }
  });
  qx.bom.client.CssAnimation.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.lang.normalize.Date": {
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
      "qx.event.Emitter": {
        "require": true
      },
      "qx.bom.client.CssAnimation": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "css.animation.requestframe": {
          "className": "qx.bom.client.CssAnimation"
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
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * This is a cross browser wrapper for requestAnimationFrame. For further
   * information about the feature, take a look at spec:
   * http://www.w3.org/TR/animation-timing/
   *
   * This class offers two ways of using this feature. First, the plain
   * API the spec describes.
   *
   * Here is a sample usage:
   * <pre class='javascript'>var start = Date.now();
   * var cb = function(time) {
   *   if (time >= start + duration) {
   *     // ... do some last tasks
   *   } else {
   *     var timePassed = time - start;
   *     // ... calculate the current step and apply it
   *     qx.bom.AnimationFrame.request(cb, this);
   *   }
   * };
   * qx.bom.AnimationFrame.request(cb, this);
   * </pre>
   *
   * Another way of using it is to use it as an instance emitting events.
   *
   * Here is a sample usage of that API:
   * <pre class='javascript'>var frame = new qx.bom.AnimationFrame();
   * frame.on("end", function() {
   *   // ... do some last tasks
   * }, this);
   * frame.on("frame", function(timePassed) {
   *   // ... calculate the current step and apply it
   * }, this);
   * frame.startSequence(duration);
   * </pre>
   *
   * @require(qx.lang.normalize.Date)
   */
  qx.Bootstrap.define("qx.bom.AnimationFrame", {
    extend: qx.event.Emitter,
    events: {
      /** Fired as soon as the animation has ended. */
      end: undefined,
      /**
       * Fired on every frame having the passed time as value
       * (might be a float for higher precision).
       */
      frame: "Number"
    },
    members: {
      __canceled__P_98_0: false,
      /**
       * Method used to start a series of animation frames. The series will end as
       * soon as the given duration is over.
       *
       * @param duration {Number} The duration the sequence should take.
       *
       * @ignore(performance.*)
       */
      startSequence: function startSequence(duration) {
        this.__canceled__P_98_0 = false;
        var start = window.performance && performance.now ? performance.now() + qx.bom.AnimationFrame.__start__P_98_1 : Date.now();
        var _cb = function cb(time) {
          if (this.__canceled__P_98_0) {
            this.id = null;
            return;
          }

          // final call
          if (time >= start + duration) {
            this.emit("end");
            this.id = null;
          } else {
            var timePassed = Math.max(time - start, 0);
            this.emit("frame", timePassed);
            this.id = qx.bom.AnimationFrame.request(_cb, this);
          }
        };
        this.id = qx.bom.AnimationFrame.request(_cb, this);
      },
      /**
       * Cancels a started sequence of frames. It will do nothing if no
       * sequence is running.
       */
      cancelSequence: function cancelSequence() {
        this.__canceled__P_98_0 = true;
      }
    },
    statics: {
      /**
       * The default time in ms the timeout fallback implementation uses.
       */
      TIMEOUT: 30,
      /**
       * Calculation of the predefined timing functions. Approximation of the real
       * bezier curves has been used for easier calculation. This is good and close
       * enough for the predefined functions like <code>ease</code> or
       * <code>linear</code>.
       *
       * @param func {String} The defined timing function. One of the following values:
       *   <code>"ease-in"</code>, <code>"ease-out"</code>, <code>"linear"</code>,
       *   <code>"ease-in-out"</code>, <code>"ease"</code>.
       * @param x {Integer} The percent value of the function.
       * @return {Integer} The calculated value
       */
      calculateTiming: function calculateTiming(func, x) {
        if (func == "ease-in") {
          var a = [3.1223e-7, 0.0757, 1.2646, -0.167, -0.4387, 0.2654];
        } else if (func == "ease-out") {
          var a = [-7.0198e-8, 1.652, -0.551, -0.0458, 0.1255, -0.1807];
        } else if (func == "linear") {
          return x;
        } else if (func == "ease-in-out") {
          var a = [2.482e-7, -0.2289, 3.3466, -1.0857, -1.7354, 0.7034];
        } else {
          // default is 'ease'
          var a = [-0.0021, 0.2472, 9.8054, -21.6869, 17.7611, -5.1226];
        }

        // A 6th grade polynomial has been used as approximation of the original
        // bezier curves  described in the transition spec
        // http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
        // (the same is used for animations as well)
        var y = 0;
        for (var i = 0; i < a.length; i++) {
          y += a[i] * Math.pow(x, i);
        }
        return y;
      },
      /**
       * Request for an animation frame. If the native <code>requestAnimationFrame</code>
       * method is supported, it will be used. Otherwise, we use timeouts with a
       * 30ms delay. The HighResolutionTime will be used if supported but the time given
       * to the callback will still be a timestamp starting at 1 January 1970 00:00:00 UTC.
       *
       * @param callback {Function} The callback function which will get the current
       *   time as argument (which could be a float for higher precision).
       * @param context {var} The context of the callback.
       * @return {Number} The id of the request.
       */
      request: function request(callback, context) {
        var req = qx.core.Environment.get("css.animation.requestframe");
        var cb = function cb(time) {
          // check for high resolution time
          if (time < 1e10) {
            time = qx.bom.AnimationFrame.__start__P_98_1 + time;
          }
          time = time || Date.now();
          callback.call(context, time);
        };
        if (req) {
          return window[req](cb);
        } else {
          // make sure to use an indirection because setTimeout passes a
          // number as first argument as well
          return window.setTimeout(function () {
            cb();
          }, qx.bom.AnimationFrame.TIMEOUT);
        }
      }
    },
    /**
     * @ignore(performance.timing.*)
     */
    defer: function defer(statics) {
      // check and use the high resolution start time if available
      statics.__start__P_98_1 = window.performance && performance.timing && performance.timing.navigationStart;
      // if not, simply use the current time
      if (!statics.__start__P_98_1) {
        statics.__start__P_98_1 = Date.now();
      }
    }
  });
  qx.bom.AnimationFrame.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
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
       2004-2014 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
   ************************************************************************ */

  /**
   * Util for mouse wheel normalization.
   */
  qx.Bootstrap.define("qx.util.Wheel", {
    statics: {
      /**
       * The maximal measured scroll wheel delta.
       * @internal
       */
      MAXSCROLL: null,
      /**
       * The minimal measured scroll wheel delta.
       * @internal
       */
      MINSCROLL: null,
      /**
       * The normalization factor for the speed calculation.
       * @internal
       */
      FACTOR: 1,
      /**
       * Is the Wheel actually a touchpad ?
       * @internal
       */
      IS_TOUCHPAD: false,
      /**
       * Get the amount the wheel has been scrolled
       *
       * @param domEvent {Event} The native wheel event.
       * @param axis {String?} Optional parameter which defines the scroll axis.
       *   The value can either be <code>"x"</code> or <code>"y"</code>.
       * @return {Integer} Scroll wheel movement for the given axis. If no axis
       *   is given, the y axis is used.
       */
      getDelta: function getDelta(domEvent, axis) {
        // default case
        if (axis === undefined) {
          // default case
          var delta = 0;
          if (domEvent.wheelDelta !== undefined) {
            delta = -domEvent.wheelDelta;
          } else if (domEvent.detail !== 0) {
            delta = domEvent.detail;
          } else if (domEvent.deltaY !== undefined) {
            // use deltaY as default for firefox
            delta = domEvent.deltaY;
          }
          return this.__normalize__P_99_0(delta);
        }

        // get the x scroll delta
        if (axis === "x") {
          var x = 0;
          if (domEvent.wheelDelta !== undefined) {
            if (domEvent.wheelDeltaX !== undefined) {
              x = domEvent.wheelDeltaX ? this.__normalize__P_99_0(-domEvent.wheelDeltaX) : 0;
            }
          } else {
            if (domEvent.axis && domEvent.axis == domEvent.HORIZONTAL_AXIS && domEvent.detail !== undefined && domEvent.detail > 0) {
              x = this.__normalize__P_99_0(domEvent.detail);
            } else if (domEvent.deltaX !== undefined) {
              x = this.__normalize__P_99_0(domEvent.deltaX);
            }
          }
          return x;
        }

        // get the y scroll delta
        if (axis === "y") {
          var y = 0;
          if (domEvent.wheelDelta !== undefined) {
            if (domEvent.wheelDeltaY !== undefined) {
              y = domEvent.wheelDeltaY ? this.__normalize__P_99_0(-domEvent.wheelDeltaY) : 0;
            } else {
              y = this.__normalize__P_99_0(-domEvent.wheelDelta);
            }
          } else {
            if (!(domEvent.axis && domEvent.axis == domEvent.HORIZONTAL_AXIS) && domEvent.detail !== undefined && domEvent.detail > 0) {
              y = this.__normalize__P_99_0(domEvent.detail);
            } else if (domEvent.deltaY !== undefined) {
              y = this.__normalize__P_99_0(domEvent.deltaY);
            }
          }
          return y;
        }
        // default case, return 0
        return 0;
      },
      /**
       * Normalizer for the mouse wheel data.
       *
       * @param delta {Number} The mouse delta.
       * @return {Number} The normalized delta value
       */
      __normalize__P_99_0: function __normalize__P_99_0(delta) {
        if (qx.util.Wheel.IS_TOUCHPAD) {
          // Reset normalization values that may be re-computed once a real mouse is plugged.
          qx.util.Wheel.MINSCROLL = null;
          qx.util.Wheel.MAXSCROLL = null;
          qx.util.Wheel.FACTOR = 1;
          return delta;
        }
        var absDelta = Math.abs(delta);
        if (absDelta === 0) {
          return 0;
        }

        // store the min value
        if (qx.util.Wheel.MINSCROLL == null || qx.util.Wheel.MINSCROLL > absDelta) {
          qx.util.Wheel.MINSCROLL = absDelta;
          this.__recalculateMultiplicator__P_99_1();
        }

        // store the max value
        if (qx.util.Wheel.MAXSCROLL == null || qx.util.Wheel.MAXSCROLL < absDelta) {
          qx.util.Wheel.MAXSCROLL = absDelta;
          this.__recalculateMultiplicator__P_99_1();
        }

        // special case for systems not speeding up
        if (qx.util.Wheel.MAXSCROLL === absDelta && qx.util.Wheel.MINSCROLL === absDelta) {
          return 2 * (delta / absDelta);
        }
        var range = qx.util.Wheel.MAXSCROLL - qx.util.Wheel.MINSCROLL;
        var ret = delta / range * Math.log(range) * qx.util.Wheel.FACTOR;

        // return at least 1 or -1
        return ret < 0 ? Math.min(ret, -1) : Math.max(ret, 1);
      },
      /**
       * Recalculates the factor with which the calculated delta is normalized.
       */
      __recalculateMultiplicator__P_99_1: function __recalculateMultiplicator__P_99_1() {
        var max = qx.util.Wheel.MAXSCROLL || 0;
        var min = qx.util.Wheel.MINSCROLL || max;
        if (max <= min) {
          return;
        }
        var range = max - min;
        var maxRet = max / range * Math.log(range);
        if (maxRet == 0) {
          maxRet = 1;
        }
        qx.util.Wheel.FACTOR = 6 / maxRet;
      }
    }
  });
  qx.util.Wheel.$$dbClassInfo = $$dbClassInfo;
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
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.core.Assert": {},
      "qx.event.GlobalError": {
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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Andreas Ecker (ecker)
  
  ************************************************************************ */

  /**
   * Global timer support.
   *
   * This class can be used to periodically fire an event. This event can be
   * used to simulate e.g. a background task. The static method
   * {@link #once} is a special case. It will call a function deferred after a
   * given timeout.
   *
   * NOTE: Instances of this class must be disposed of after use
   *
   */
  qx.Class.define("qx.event.Timer", {
    extend: qx.core.Object,
    implement: [qx.core.IDisposable],
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param interval {Number} initial interval in milliseconds of the timer.
     */
    construct: function construct(interval) {
      qx.core.Object.constructor.call(this);
      if (interval != null) {
        this.setInterval(interval);
      }

      // don't use qx.lang.Function.bind because this function would add a
      // disposed check, which could break the functionality. In IE the handler
      // may get called after "clearInterval" (i.e. after the timer is disposed)
      // and we must be able to handle this.
      var self = this;
      this.__oninterval__P_90_0 = function () {
        self._oninterval.call(self);
      };
    },
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /** This event if fired each time the interval time has elapsed */
      interval: "qx.event.type.Event"
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Start a function after a given timeout.
       *
       * @param func {Function} Function to call
       * @param obj {Object} context (this), the function is called with
       * @param timeout {Number} Number of milliseconds to wait before the
       *   function is called.
       * @return {qx.event.Timer} The timer object used for the timeout. This
       *    object can be used to cancel the timeout. Note that the timer is
       *    only valid until the timer has been executed.
       */
      once: function once(func, obj, timeout) {
        {
          // check the given parameter
          qx.core.Assert.assertFunction(func, "func is not a function");
          qx.core.Assert.assertNotUndefined(timeout, "No timeout given");
        }

        // Create time instance
        var timer = new qx.event.Timer(timeout);

        // Bug #3481: append original function to timer instance so it can be
        // read by a debugger
        timer.__onceFunc__P_90_1 = func;

        // Add event listener to interval
        timer.addListener("interval", function (e) {
          timer.stop();
          func.call(obj, e);
          delete timer.__onceFunc__P_90_1;
          timer.dispose();
          obj = null;
        }, obj);

        // Directly start timer
        timer.start();
        return timer;
      }
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /**
       * With the enabled property the Timer can be started and suspended.
       * Setting it to "true" is equivalent to {@link #start}, setting it
       * to "false" is equivalent to {@link #stop}.
       */
      enabled: {
        init: false,
        check: "Boolean",
        apply: "_applyEnabled"
      },
      /**
       * Time in milliseconds between two callback calls.
       * This property can be set to modify the interval of
       * a running timer.
       */
      interval: {
        check: "Integer",
        init: 1000,
        apply: "_applyInterval"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __intervalHandler__P_90_2: null,
      __oninterval__P_90_0: null,
      /*
      ---------------------------------------------------------------------------
        APPLY ROUTINES
      ---------------------------------------------------------------------------
      */
      /**
       * Apply the interval of the timer.
       *
       * @param value {var} Current value
       * @param old {var} Previous value
       */
      _applyInterval: function _applyInterval(value, old) {
        if (this.getEnabled()) {
          this.restart();
        }
      },
      /**
       * Apply the enabled state of the timer.
       *
       * @param value {var} Current value
       * @param old {var} Previous value
       */
      _applyEnabled: function _applyEnabled(value, old) {
        if (old) {
          window.clearInterval(this.__intervalHandler__P_90_2);
          this.__intervalHandler__P_90_2 = null;
        } else if (value) {
          this.__intervalHandler__P_90_2 = window.setInterval(this.__oninterval__P_90_0, this.getInterval());
        }
      },
      /*
      ---------------------------------------------------------------------------
        USER-ACCESS
      ---------------------------------------------------------------------------
      */
      /**
       * Start the timer
       *
       */
      start: function start() {
        this.setEnabled(true);
      },
      /**
       * Start the timer with a given interval
       *
       * @param interval {Integer} Time in milliseconds between two callback calls.
       */
      startWith: function startWith(interval) {
        this.setInterval(interval);
        this.start();
      },
      /**
       * Stop the timer.
       *
       */
      stop: function stop() {
        this.setEnabled(false);
      },
      /**
       * Restart the timer.
       * This makes it possible to change the interval of a running timer.
       *
       */
      restart: function restart() {
        this.stop();
        this.start();
      },
      /**
       * Restart the timer. with a given interval.
       *
       * @param interval {Integer} Time in milliseconds between two callback calls.
       */
      restartWith: function restartWith(interval) {
        this.stop();
        this.startWith(interval);
      },
      /*
      ---------------------------------------------------------------------------
        EVENT-MAPPER
      ---------------------------------------------------------------------------
      */

      /**
       * timer callback
       *
       * @signature function()
       */
      _oninterval: qx.event.GlobalError.observeMethod(function () {
        if (this.$$disposed) {
          return;
        }
        if (this.getEnabled()) {
          this.fireEvent("interval");
        }
      })
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      if (this.__intervalHandler__P_90_2) {
        window.clearInterval(this.__intervalHandler__P_90_2);
      }
      this.__intervalHandler__P_90_2 = this.__oninterval__P_90_0 = null;
    }
  });
  qx.event.Timer.$$dbClassInfo = $$dbClassInfo;
})();

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
      "qx.dom.Node": {},
      "qx.bom.client.Html": {
        "require": true
      },
      "qx.lang.Array": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "html.element.contains": {
          "className": "qx.bom.client.Html"
        },
        "html.element.compareDocumentPosition": {
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
  
     ======================================================================
  
     This class contains code based on the following work:
  
     * Prototype JS
       http://www.prototypejs.org/
       Version 1.5
  
       Copyright:
         (c) 2006-2007, Prototype Core Team
  
       License:
         MIT: http://www.opensource.org/licenses/mit-license.php
  
       Authors:
         * Prototype Core Team
  
     ----------------------------------------------------------------------
  
       Copyright (c) 2005-2008 Sam Stephenson
  
       Permission is hereby granted, free of charge, to any person
       obtaining a copy of this software and associated documentation
       files (the "Software"), to deal in the Software without restriction,
       including without limitation the rights to use, copy, modify, merge,
       publish, distribute, sublicense, and/or sell copies of the Software,
       and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
  
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
       HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
       WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
       DEALINGS IN THE SOFTWARE.
  
  ************************************************************************ */

  /**
   * Methods to operate on nodes and elements on a DOM tree. This contains
   * special getters to query for child nodes, siblings, etc. This class also
   * supports to operate on one element and reorganize the content with
   * the insertion of new HTML or nodes.
   */
  qx.Bootstrap.define("qx.dom.Hierarchy", {
    statics: {
      /**
       * Returns the DOM index of the given node
       *
       * @param node {Node} Node to look for
       * @return {Integer} The DOM index
       */
      getNodeIndex: function getNodeIndex(node) {
        var index = 0;
        while (node && (node = node.previousSibling)) {
          index++;
        }
        return index;
      },
      /**
       * Returns the DOM index of the given element (ignoring non-elements)
       *
       * @param element {Element} Element to look for
       * @return {Integer} The DOM index
       */
      getElementIndex: function getElementIndex(element) {
        var index = 0;
        var type = qx.dom.Node.ELEMENT;
        while (element && (element = element.previousSibling)) {
          if (element.nodeType == type) {
            index++;
          }
        }
        return index;
      },
      /**
       * Return the next element to the supplied element
       *
       * "nextSibling" is not good enough as it might return a text or comment element
       *
       * @param element {Element} Starting element node
       * @return {Element|null} Next element node
       */
      getNextElementSibling: function getNextElementSibling(element) {
        while (element && (element = element.nextSibling) && !qx.dom.Node.isElement(element)) {
          continue;
        }
        return element || null;
      },
      /**
       * Return the previous element to the supplied element
       *
       * "previousSibling" is not good enough as it might return a text or comment element
       *
       * @param element {Element} Starting element node
       * @return {Element|null} Previous element node
       */
      getPreviousElementSibling: function getPreviousElementSibling(element) {
        while (element && (element = element.previousSibling) && !qx.dom.Node.isElement(element)) {
          continue;
        }
        return element || null;
      },
      /**
       * Whether the first element contains the second one
       *
       * Uses native non-standard contains() in Internet Explorer,
       * Opera and Webkit (supported since Safari 3.0 beta)
       *
       * @param element {Element} Parent element
       * @param target {Node} Child node
       * @return {Boolean}
       */
      contains: function contains(element, target) {
        if (qx.core.Environment.get("html.element.contains")) {
          if (qx.dom.Node.isDocument(element)) {
            var doc = qx.dom.Node.getDocument(target);
            return element && doc == element;
          } else if (qx.dom.Node.isDocument(target)) {
            return false;
          } else {
            return element.contains(target);
          }
        } else if (qx.core.Environment.get("html.element.compareDocumentPosition")) {
          // https://developer.mozilla.org/en-US/docs/DOM:Node.compareDocumentPosition
          return !!(element.compareDocumentPosition(target) & 16);
        } else {
          while (target) {
            if (element == target) {
              return true;
            }
            target = target.parentNode;
          }
          return false;
        }
      },
      /**
       * Whether the element is inserted into the document
       * for which it was created.
       *
       * @param element {Element} DOM element to check
       * @return {Boolean} <code>true</code> when the element is inserted
       *    into the document.
       */
      isRendered: function isRendered(element) {
        var doc = element.ownerDocument || element.document;
        if (qx.core.Environment.get("html.element.contains")) {
          // Fast check for all elements which are not in the DOM
          if (!element.parentNode) {
            return false;
          }
          return doc.body.contains(element);
        } else if (qx.core.Environment.get("html.element.compareDocumentPosition")) {
          // Gecko way, DOM3 method
          return !!(doc.compareDocumentPosition(element) & 16);
        } else {
          while (element) {
            if (element == doc.body) {
              return true;
            }
            element = element.parentNode;
          }
          return false;
        }
      },
      /**
       * Checks if <code>element</code> is a descendant of <code>ancestor</code>.
       *
       * @param element {Element} first element
       * @param ancestor {Element} second element
       * @return {Boolean} Element is a descendant of ancestor
       */
      isDescendantOf: function isDescendantOf(element, ancestor) {
        return this.contains(ancestor, element);
      },
      /**
       * Get the common parent element of two given elements. Returns
       * <code>null</code> when no common element has been found.
       *
       * Uses native non-standard contains() in Opera and Internet Explorer
       *
       * @param element1 {Element} First element
       * @param element2 {Element} Second element
       * @return {Element} the found parent, if none was found <code>null</code>
       */
      getCommonParent: function getCommonParent(element1, element2) {
        if (element1 === element2) {
          return element1;
        }
        if (qx.core.Environment.get("html.element.contains")) {
          while (element1 && qx.dom.Node.isElement(element1)) {
            if (element1.contains(element2)) {
              return element1;
            }
            element1 = element1.parentNode;
          }
          return null;
        } else {
          var known = [];
          while (element1 || element2) {
            if (element1) {
              if (known.includes(element1)) {
                return element1;
              }
              known.push(element1);
              element1 = element1.parentNode;
            }
            if (element2) {
              if (known.includes(element2)) {
                return element2;
              }
              known.push(element2);
              element2 = element2.parentNode;
            }
          }
          return null;
        }
      },
      /**
       * Collects all of element's ancestors and returns them as an array of
       * elements.
       *
       * @param element {Element} DOM element to query for ancestors
       * @return {Array} list of all parents
       */
      getAncestors: function getAncestors(element) {
        return this._recursivelyCollect(element, "parentNode");
      },
      /**
       * Returns element's children.
       *
       * @param element {Element} DOM element to query for child elements
       * @return {Array} list of all child elements
       */
      getChildElements: function getChildElements(element) {
        element = element.firstChild;
        if (!element) {
          return [];
        }
        var arr = this.getNextSiblings(element);
        if (element.nodeType === 1) {
          arr.unshift(element);
        }
        return arr;
      },
      /**
       * Collects all of element's descendants (deep) and returns them as an array
       * of elements.
       *
       * @param element {Element} DOM element to query for child elements
       * @return {Array} list of all found elements
       */
      getDescendants: function getDescendants(element) {
        return qx.lang.Array.fromCollection(element.getElementsByTagName("*"));
      },
      /**
       * Returns the first child that is an element. This is opposed to firstChild DOM
       * property which will return any node (whitespace in most usual cases).
       *
       * @param element {Element} DOM element to query for first descendant
       * @return {Element} the first descendant
       */
      getFirstDescendant: function getFirstDescendant(element) {
        element = element.firstChild;
        while (element && element.nodeType != 1) {
          element = element.nextSibling;
        }
        return element;
      },
      /**
       * Returns the last child that is an element. This is opposed to lastChild DOM
       * property which will return any node (whitespace in most usual cases).
       *
       * @param element {Element} DOM element to query for last descendant
       * @return {Element} the last descendant
       */
      getLastDescendant: function getLastDescendant(element) {
        element = element.lastChild;
        while (element && element.nodeType != 1) {
          element = element.previousSibling;
        }
        return element;
      },
      /**
       * Collects all of element's previous siblings and returns them as an array of elements.
       *
       * @param element {Element} DOM element to query for previous siblings
       * @return {Array} list of found DOM elements
       */
      getPreviousSiblings: function getPreviousSiblings(element) {
        return this._recursivelyCollect(element, "previousSibling");
      },
      /**
       * Collects all of element's next siblings and returns them as an array of
       * elements.
       *
       * @param element {Element} DOM element to query for next siblings
       * @return {Array} list of found DOM elements
       */
      getNextSiblings: function getNextSiblings(element) {
        return this._recursivelyCollect(element, "nextSibling");
      },
      /**
       * Recursively collects elements whose relationship is specified by
       * property.  <code>property</code> has to be a property (a method won't
       * do!) of element that points to a single DOM node. Returns an array of
       * elements.
       *
       * @param element {Element} DOM element to start with
       * @param property {String} property to look for
       * @return {Array} result list
       */
      _recursivelyCollect: function _recursivelyCollect(element, property) {
        var list = [];
        while (element = element[property]) {
          if (element.nodeType == 1) {
            list.push(element);
          }
        }
        return list;
      },
      /**
       * Collects all of element's siblings and returns them as an array of elements.
       *
       * @param element {var} DOM element to start with
       * @return {Array} list of all found siblings
       */
      getSiblings: function getSiblings(element) {
        return this.getPreviousSiblings(element).reverse().concat(this.getNextSiblings(element));
      },
      /**
       * Whether the given element is empty.
       * Inspired by Base2 (Dean Edwards)
       *
       * @param element {Element} The element to check
       * @return {Boolean} true when the element is empty
       */
      isEmpty: function isEmpty(element) {
        element = element.firstChild;
        while (element) {
          if (element.nodeType === qx.dom.Node.ELEMENT || element.nodeType === qx.dom.Node.TEXT) {
            return false;
          }
          element = element.nextSibling;
        }
        return true;
      },
      /**
       * Removes all of element's text nodes which contain only whitespace
       *
       * @param element {Element} Element to cleanup
       */
      cleanWhitespace: function cleanWhitespace(element) {
        var node = element.firstChild;
        while (node) {
          var nextNode = node.nextSibling;
          if (node.nodeType == 3 && !/\S/.test(node.nodeValue)) {
            element.removeChild(node);
          }
          node = nextNode;
        }
      }
    }
  });
  qx.dom.Hierarchy.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "usage": "dynamic",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.locale.Manager": {
        "construct": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.dynlocale": {
          "load": true
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
   * The label widget displays a text or HTML content.
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *   var label = new qx.ui.mobile.basic.Label("Hello World");
   *
   *   this.getRoot().add(label);
   * </pre>
   *
   * This example create a widget to display the label.
   *
   */
  qx.Class.define("qx.ui.mobile.basic.Label", {
    extend: qx.ui.mobile.core.Widget,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param value {String?null} Text or HTML content to display
     */
    construct: function construct(value) {
      qx.ui.mobile.core.Widget.constructor.call(this);
      if (value) {
        this.setValue(value);
      }
      this.initWrap();
      {
        this.__changeLocaleLabelListenerId__P_27_0 = qx.locale.Manager.getInstance().addListener("changeLocale", this._onChangeLocale, this);
      }
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
        init: "label"
      },
      /**
       * Text or HTML content to display
       */
      value: {
        nullable: true,
        init: null,
        check: "String",
        apply: "_applyValue",
        event: "changeValue"
      },
      // overridden
      anonymous: {
        refine: true,
        init: true
      },
      /**
       * Controls whether text wrap is activated or not.
       */
      wrap: {
        check: "Boolean",
        init: true,
        apply: "_applyWrap"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // property apply
      _applyValue: function _applyValue(value, old) {
        this._setHtml(value);
      },
      // property apply
      _applyWrap: function _applyWrap(value, old) {
        if (value) {
          this.removeCssClass("no-wrap");
        } else {
          this.addCssClass("no-wrap");
        }
      },
      /**
       * Locale change event handler
       *
       * @signature function(e)
       * @param e {Event} the change event
       */
      _onChangeLocale: qx.core.Environment.select("qx.dynlocale", {
        "true": function _true(e) {
          var content = this.getValue();
          if (content && content.translate) {
            this.setValue(content.translate());
          }
        },
        "false": null
      })
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      if (true && this.__changeLocaleLabelListenerId__P_27_0) {
        qx.locale.Manager.getInstance().removeListenerById(this.__changeLocaleLabelListenerId__P_27_0);
      }
    }
  });
  qx.ui.mobile.basic.Label.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "defer": "runtime",
        "require": true
      },
      "qx.core.ObjectRegistry": {},
      "qx.core.Object": {},
      "qx.core.MAssert": {
        "defer": "runtime"
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
       * Jonathan Weiß (jonathan_rass)
  
     ======================================================================
  
       This class uses documentation of the native String methods from the MDC
       documentation of Mozilla.
  
       License:
         CC Attribution-Sharealike License:
         http://creativecommons.org/licenses/by-sa/2.5/
  
  ************************************************************************ */

  /**
   * This class emulates the built-in JavaScript String class. It can be used as
   * base class for classes, which need to derive from String.
   *
   * Instances of this class can be used in any place a JavaScript string can.
   */
  qx.Class.define("qx.type.BaseString", {
    extend: Object,
    /**
     * @param txt {String?""} Initialize with this string
     */
    construct: function construct(txt) {
      var txt = txt || "";

      // no base call needed

      this.__txt__P_154_0 = txt;
      this.length = txt.length;
    },
    members: {
      $$isString: true,
      length: 0,
      __txt__P_154_0: null,
      /**
       * Returns a string representing the specified object.
       *
       * The valueOf method of String returns the primitive value of a String
       * object as a string data type.
       * This method is usually called internally by JavaScript and not
       * explicitly in code.
       *
       * @return {String} A new string containing the string value.
       */
      toString: function toString() {
        return this.__txt__P_154_0;
      },
      /**
       *  Returns the specified character from a string.
       *
       * Characters in a string are indexed from left to right. The index of the
       * first character is 0, and the index of the last character in a string
       * called stringName is stringName.length - 1. If the index you supply is
       * out of range, JavaScript returns an empty string.
       *
       * @signature function(index)
       * @param index {Integer} An integer between 0 and 1 less than the length
       *   of the string.
       * @return {String} The character.
       */
      charAt: null,
      /**
       * Returns the primitive value of a String object.
       *
       * The valueOf method of String returns the primitive value of a String
       * object as a string data type.
       * This method is usually called internally by JavaScript and not
       * explicitly in code.
       *
       * @signature function()
       * @return {String} A new string containing the primitive value.
       */
      valueOf: null,
      /**
       * Returns a number indicating the Unicode value of the character at the given index.
       *
       * @signature function(index)
       * @param index {Integer} An integer greater than 0 and less than the length
       *   of the string; if it is not a number, it defaults to 0.
       * @return {Integer} The number.
       */
      charCodeAt: null,
      /**
       * Combines the text of two or more strings and returns a new string.
       * Changes to the text in one string do not affect the other string.
       *
       * @signature function(stringN)
       * @param stringN {String} One or more strings to be combined.
       * @return {String} The combined string.
       */
      concat: null,
      /**
       * Returns the index within the calling String object of the first
       * occurrence of the specified value, starting the search at fromIndex,
       * returns -1 if the value is not found.
       *
       * @signature function(index, offset)
       * @param index {String} A string representing the value to search for.
       * @param offset {Integer?0} The location within the calling string to start
       *   the search from. It can be any integer between 0 and the length of the
       *   string. The default value is 0.
       * @return {Integer} The index or -1.
       */
      indexOf: null,
      /**
       * Returns the index within the calling String object of the last occurrence
       * of the specified value, or -1 if not found. The calling string is
       * searched backward, starting at fromIndex.
       *
       * @signature function(index, offset)
       * @param index {String} A string representing the value to search for.
       * @param offset {Integer?0} The location within the calling string to start
       *   the search from, indexed from left to right. It can be any integer
       *   between 0 and the length of the string. The default value is the length
       *    of the string.
       * @return {Integer} The index or -1.
       */
      lastIndexOf: null,
      /**
       * Used to retrieve the matches when matching a string against a regular
       * expression.
       *
       * If the regular expression does not include the g flag, returns the same
       * result as regexp.exec(string). If the regular expression includes the g
       * flag, the method returns an Array containing all matches.
       *
       * @signature function(regexp)
       * @param regexp {Object} A regular expression object. If a non-RegExp object
       *  obj is passed, it is implicitly converted to a RegExp by using
       *   new RegExp(obj).
       * @return {Object} The matching RegExp object or an array containing all
       *   matches.
       */
      match: null,
      /**
       * Finds a match between a regular expression and a string, and replaces the
       * matched substring with a new substring.
       *
       * @signature function(regexp, aFunction)
       * @param regexp {Object} A RegExp object. The match is replaced by the
       *   return value of parameter #2. Or a String that is to be replaced by
       *   newSubStr.
       * @param aFunction {Function} A function to be invoked to create the new
       *   substring (to put in place of the substring received from parameter
       *   #1).
       * @return {String} The new substring.
       */
      replace: null,
      /**
       * Executes the search for a match between a regular expression and this
       * String object.
       *
       * If successful, search returns the index of the regular expression inside
       * the string. Otherwise, it returns -1.
       *
       * @signature function(regexp)
       * @param regexp {Object} A regular expression object. If a non-RegExp object
       *  obj is passed, it is implicitly converted to a RegExp by using
       *   new RegExp(obj).
       * @return {Object} The matching RegExp object or -1.
       *   matches.
       */
      search: null,
      /**
       * Extracts a section of a string and returns a new string.
       *
       * Slice extracts the text from one string and returns a new string. Changes
       * to the text in one string do not affect the other string.
       * As a negative index, endSlice indicates an offset from the end of the
       * string.
       *
       * @signature function(beginslice, endSlice)
       * @param beginslice {Integer} The zero-based index at which to begin
       *   extraction.
       * @param endSlice {Integer?null} The zero-based index at which to end
       *   extraction. If omitted, slice extracts to the end of the string.
       * @return {String} The extracted string.
       */
      slice: null,
      /**
       * Splits a String object into an array of strings by separating the string
       * into substrings.
       *
       * When found, separator is removed from the string and the substrings are
       * returned in an array. If separator is omitted, the array contains one
       * element consisting of the entire string.
       *
       * If separator is a regular expression that contains capturing parentheses,
       * then each time separator is matched the results (including any undefined
       * results) of the capturing parentheses are spliced into the output array.
       * However, not all browsers support this capability.
       *
       * Note: When the string is empty, split returns an array containing one
       *
       * @signature function(separator, limit)
       * @param separator {String?null} Specifies the character to use for
       *   separating the string. The separator is treated as a string or a regular
       *   expression. If separator is omitted, the array returned contains one
       *   element consisting of the entire string.
       * @param limit {Integer?null} Integer specifying a limit on the number of
       *   splits to be found.
       * @return {Array} The Array containing substrings.
       */
      split: null,
      /**
       * Returns the characters in a string beginning at the specified location
       * through the specified number of characters.
       *
       * Start is a character index. The index of the first character is 0, and the
       * index of the last character is 1 less than the length of the string. substr
       *  begins extracting characters at start and collects length characters
       * (unless it reaches the end of the string first, in which case it will
       * return fewer).
       * If start is positive and is greater than or equal to the length of the
       * string, substr returns an empty string.
       *
       * @signature function(start, length)
       * @param start {Integer} Location at which to begin extracting characters
       *   (an integer between 0 and one less than the length of the string).
       * @param length {Integer?null} The number of characters to extract.
       * @return {String} The substring.
       */
      substr: null,
      /**
       * Returns a subset of a String object.
       *
       * substring extracts characters from indexA up to but not including indexB.
       * In particular:
       * If indexA equals indexB, substring returns an empty string.
       * If indexB is omitted, substring extracts characters to the end of the
       * string.
       * If either argument is less than 0 or is NaN, it is treated as if it were
       * 0.
       * If either argument is greater than stringName.length, it is treated as if
       * it were stringName.length.
       * If indexA is larger than indexB, then the effect of substring is as if
       * the two arguments were swapped; for example, str.substring(1, 0) == str.substring(0, 1).
       *
       * @signature function(indexA, indexB)
       * @param indexA {Integer} An integer between 0 and one less than the
       *   length of the string.
       * @param indexB {Integer?null} (optional) An integer between 0 and the
       *   length of the string.
       * @return {String} The subset.
       */
      substring: null,
      /**
       * Returns the calling string value converted to lowercase.
       * The toLowerCase method returns the value of the string converted to
       * lowercase. toLowerCase does not affect the value of the string itself.
       *
       * @signature function()
       * @return {String} The new string.
       */
      toLowerCase: null,
      /**
       * Returns the calling string value converted to uppercase.
       * The toUpperCase method returns the value of the string converted to
       * uppercase. toUpperCase does not affect the value of the string itself.
       *
       * @signature function()
       * @return {String} The new string.
       */
      toUpperCase: null,
      /**
       * Return unique hash code of object
       *
       * @return {Integer} unique hash code of the object
       */
      toHashCode: function toHashCode() {
        return qx.core.ObjectRegistry.toHashCode(this);
      },
      /**
       * The characters within a string are converted to lower case while
       * respecting the current locale.
       *
       * The toLowerCase method returns the value of the string converted to
       * lowercase. toLowerCase does not affect the value of the string itself.
       *
       * @signature function()
       * @return {String} The new string.
       */
      toLocaleLowerCase: null,
      /**
       * The characters within a string are converted to upper case while
       * respecting the current locale.
       * The toUpperCase method returns the value of the string converted to
       * uppercase. toUpperCase does not affect the value of the string itself.
       *
       * @signature function()
       * @return {String} The new string.
       */
      toLocaleUpperCase: null,
      /**
       * Call the same method of the super class.
       *
       * @param args {arguments} the arguments variable of the calling method
       * @param varags {var} variable number of arguments passed to the overwritten function
       * @return {var} the return value of the method of the base class.
       */
      base: function base(args, varags) {
        return qx.core.Object.prototype.base.apply(this, arguments);
      }
    },
    /*
     *****************************************************************************
        DEFER
     *****************************************************************************
     */
    defer: function defer(statics, members) {
      // add asserts into each debug build
      {
        qx.Class.include(statics, qx.core.MAssert);
      }
      var mappedFunctions = ["charAt", "charCodeAt", "concat", "indexOf", "lastIndexOf", "match", "replace", "search", "slice", "split", "substr", "substring", "toLowerCase", "toUpperCase", "toLocaleLowerCase", "toLocaleUpperCase", "trim", "codePointAt"];

      // feature/bug detection:
      // Some older Firefox version (<2) break if valueOf is overridden
      members.valueOf = members.toString;
      if (new statics("").valueOf() == null) {
        delete members.valueOf;
      }
      for (var i = 0, l = mappedFunctions.length; i < l; i++) {
        members[mappedFunctions[i]] = String.prototype[mappedFunctions[i]];
      }
    }
  });
  qx.type.BaseString.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.type.BaseString": {
        "construct": true,
        "require": true
      },
      "qx.locale.Manager": {}
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
   * This class contains the translation of a message and all information
   * to translate it again into a different language.
   */
  qx.Class.define("qx.locale.LocalizedString", {
    extend: qx.type.BaseString,
    /**
     * @param translation {String} The translated message
     * @param messageId {String} The messageId to translate
     * @param args {Array} list of arguments passed used as values for format strings
     * @param localized {Boolean} True if the string uses localize instead of translate
     */
    construct: function construct(translation, messageId, args, localized) {
      qx.type.BaseString.constructor.call(this, translation);
      this.__messageId__P_114_0 = messageId;
      this.__localized__P_114_1 = !!localized;
      this.__args__P_114_2 = args;
    },
    members: {
      __localized__P_114_1: null,
      __messageId__P_114_0: null,
      __args__P_114_2: null,
      /**
       * Get a translation of the string using the current locale.
       *
       * @return {qx.locale.LocalizedString|String} This string translated using the current
       *    locale.
       */
      translate: function translate() {
        if (this.__localized__P_114_1) {
          return qx.locale.Manager.getInstance().localize(this.__messageId__P_114_0, this.__args__P_114_2);
        }
        return qx.locale.Manager.getInstance().translate(this.__messageId__P_114_0, this.__args__P_114_2);
      },
      /**
       * Returns the messageId.
       *
       * @return {String} The messageId of this localized String
       */
      getMessageId: function getMessageId() {
        return this.__messageId__P_114_0;
      }
    }
  });
  qx.locale.LocalizedString.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.client.OperatingSystem": {
        "require": true,
        "defer": "runtime"
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.lang.Type": {},
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["locale", "locale.variant", "locale.default"],
      "required": {}
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
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * This class comes with all relevant information regarding
   * the client's selected locale.
   *
   * This class is used by {@link qx.core.Environment} and should not be used
   * directly. Please check its class comment for details how to use it.
   *
   * @internal
   * @require(qx.bom.client.OperatingSystem)
   */
  qx.Bootstrap.define("qx.bom.client.Locale", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * The name of the system locale e.g. "de" when the full locale is "de_AT"
       * @return {String} The current locale
       * @internal
       */
      getLocale: function getLocale() {
        var locale = qx.bom.client.Locale.__getNavigatorLocale__P_115_0();
        var index = locale.indexOf("-");
        if (index != -1) {
          locale = locale.substr(0, index);
        }
        return locale;
      },
      /**
       * The name of the variant for the system locale e.g. "at" when the
       * full locale is "de_AT"
       *
       * @return {String} The locales variant.
       * @internal
       */
      getVariant: function getVariant() {
        var locale = qx.bom.client.Locale.__getNavigatorLocale__P_115_0();
        var variant = "";
        var index = locale.indexOf("-");
        if (index != -1) {
          variant = locale.substr(index + 1);
        }
        return variant;
      },
      /**
       * Internal helper for accessing the navigators language.
       *
       * @return {String} The language set by the navigator.
       */
      __getNavigatorLocale__P_115_0: function __getNavigatorLocale__P_115_0() {
        var locale = navigator.userLanguage || navigator.language || "";

        // Android Bug: Android does not return the system language from the
        // navigator language before version 4.4.x. Try to parse the language
        // from the userAgent.
        // See http://code.google.com/p/android/issues/detail?id=4641
        if (qx.bom.client.OperatingSystem.getName() == "android") {
          var version = /^(\d+)\.(\d+)(\..+)?/i.exec(qx.bom.client.OperatingSystem.getVersion());
          if (qx.lang.Type.isArray(version) && version.length >= 3) {
            if (parseInt(version[1]) < 4 || parseInt(version[1]) === 4 && parseInt(version[2]) < 4) {
              var match = /(\w{2})-(\w{2})/i.exec(navigator.userAgent);
              if (match) {
                locale = match[0];
              }
            }
          }
        }
        return locale.toLowerCase();
      }
    },
    defer: function defer(statics) {
      qx.core.Environment.add("locale", statics.getLocale);
      qx.core.Environment.add("locale.variant", statics.getVariant);
      qx.core.Environment.add("locale.default", "C");
    }
  });
  qx.bom.client.Locale.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.dispatch.Direct": {
        "require": true
      },
      "qx.locale.LocalizedString": {
        "require": true
      },
      "qx.bom.client.Locale": {
        "require": true
      },
      "qx.core.Environment": {
        "defer": "load",
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
      "qx.lang.Array": {},
      "qx.log.Logger": {},
      "qx.lang.String": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "locale": {
          "className": "qx.bom.client.Locale"
        },
        "locale.default": {
          "className": "qx.bom.client.Locale",
          "load": true
        },
        "locale.variant": {
          "className": "qx.bom.client.Locale"
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
   * The qx.locale.Manager provides static translation methods (like tr()) and
   * general locale information.
   *
   * @require(qx.event.dispatch.Direct)
   * @require(qx.locale.LocalizedString)
   * @require(qx.bom.client.Locale)
   *
   * Note: "translating" the empty string, e.g. tr("") will return the header
   * of the respective .po file. See also https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html#PO-Files
   *
   * @cldr()
   */

  qx.Class.define("qx.locale.Manager", {
    type: "singleton",
    extend: qx.core.Object,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      qx.core.Object.constructor.call(this);
      this.__translations__P_73_0 = qx.$$translations || {};
      this.__locales__P_73_1 = qx.$$locales || {};
      this.initLocale();
      this.__clientLocale__P_73_2 = this.getLocale();
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Translate a message
       *
       * @param messageId {String} message id (may contain format strings)
       * @param varargs {Object} variable number of arguments applied to the format string
       * @return {String|LocalizedString} The translated message or localized string
       * @see qx.lang.String.format
       */
      tr: function tr(messageId, varargs) {
        var args = qx.lang.Array.fromArguments(arguments, 1);
        return qx.locale.Manager.getInstance().translate(messageId, args);
      },
      /**
       * Translate a plural message
       *
       * Depending on the third argument the plural or the singular form is chosen.
       *
       * @param singularMessageId {String} message id of the singular form (may contain format strings)
       * @param pluralMessageId {String} message id of the plural form (may contain format strings)
       * @param count {Integer} singular form if equals 1, otherwise plural
       * @param varargs {Object} variable number of arguments applied to the format string
       * @return {String|LocalizedString} The translated message or localized string
       * @see qx.lang.String.format
       */
      trn: function trn(singularMessageId, pluralMessageId, count, varargs) {
        var args = qx.lang.Array.fromArguments(arguments);
        args.splice(0, 3);

        // assumes "Two forms, singular used for one only" (seems to be the most common form)
        // (http://www.gnu.org/software/gettext/manual/html_node/gettext_150.html#Plural-forms)
        // closely related with bug #745
        if (count != 1) {
          return qx.locale.Manager.getInstance().translate(pluralMessageId, args);
        } else {
          return qx.locale.Manager.getInstance().translate(singularMessageId, args);
        }
      },
      /**
       * Translate a message with translation hint (from developer addressed to translator).
       *
       * @param hint {String} hint for the translator of the message. Will be included in the .po file.
       * @param messageId {String} message id (may contain format strings)
       * @param varargs {Object} variable number of arguments applied to the format string
       * @return {String|LocalizedString} The translated message or localized string
       * @see qx.lang.String.format
       */
      trc: function trc(hint, messageId, varargs) {
        var args = qx.lang.Array.fromArguments(arguments);
        args.splice(0, 2);
        return qx.locale.Manager.getInstance().translate(messageId, args);
      },
      /**
       * Translate a plural message with translation hint (from developer addressed to translator).
       *
       * Depending on the third argument the plural or the singular form is chosen.
       *
       * @param hint {String} hint for the translator of the message. Will be included in the .po file.
       * @param singularMessageId {String} message id of the singular form (may contain format strings)
       * @param pluralMessageId {String} message id of the plural form (may contain format strings)
       * @param count {Integer} singular form if equals 1, otherwise plural
       * @param varargs {Object} variable number of arguments applied to the format string
       * @return {String|LocalizedString} The translated message or localized string
       * @see qx.lang.String.format
       */
      trnc: function trnc(hint, singularMessageId, pluralMessageId, count, varargs) {
        var args = qx.lang.Array.fromArguments(arguments);
        args.splice(0, 4);

        // see trn()
        if (count != 1) {
          return qx.locale.Manager.getInstance().translate(pluralMessageId, args);
        } else {
          return qx.locale.Manager.getInstance().translate(singularMessageId, args);
        }
      },
      /**
       * Mark the message for translation but return the original message.
       *
       * @param messageId {String} the message ID
       * @return {String} messageId
       */
      marktr: function marktr(messageId) {
        return messageId;
      }
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** current locale. locale is an language code like de, de_AT, en, en_GB, fr, ... */
      locale: {
        check: "String",
        apply: "_applyLocale",
        event: "changeLocale",
        init: function () {
          var locale = qx.core.Environment.get("locale");
          if (!locale || locale === "") {
            return qx.core.Environment.get("locale.default");
          }
          var variant = qx.core.Environment.get("locale.variant");
          if (variant !== "") {
            locale += "_" + variant;
          }
          return locale;
        }()
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __defaultLocale__P_73_3: qx.core.Environment.get("locale.default"),
      __locale__P_73_4: null,
      __language__P_73_5: null,
      __translations__P_73_0: null,
      __locales__P_73_1: null,
      __clientLocale__P_73_2: null,
      /**
       * Get the language code of the current locale
       *
       * This is the first part of a locale definition. The language for "de_DE" would be "de"
       *
       * @return {String} language code
       */
      getLanguage: function getLanguage() {
        return this.__language__P_73_5;
      },
      /**
       * Get the territory code of the current locale
       *
       * This is the second part of a locale definition. The territory for "de_DE" would be "DE"
       *
       * @return {String} territory code
       */
      getTerritory: function getTerritory() {
        return this.getLocale().split("_")[1] || "";
      },
      /**
       * Return the available application locales
       *
       * This corresponds to the LOCALES setting in config.json. Without argument,
       * it only returns the currently loaded locales, with an argument of true
       * all locales that went into the build. This is particularly interesting if
       * locales were generated as dedicated I18N parts, and have to be loaded
       * explicitly before being available.
       *
       * @param includeNonloaded {Boolean?null} include locales not yet loaded
       * @return {String[]} array of available locales
       */
      getAvailableLocales: function getAvailableLocales(includeNonloaded) {
        var locales = [];
        for (var locale in this.__locales__P_73_1) {
          if (locale != this.__defaultLocale__P_73_3) {
            if (this.__locales__P_73_1[locale] === null && !includeNonloaded) {
              continue; // skip not yet loaded locales
            }
            locales.push(locale);
          }
        }
        return locales;
      },
      /**
       * Extract the language part from a locale.
       *
       * @param locale {String} locale to be used
       * @return {String} language
       */
      __extractLanguage__P_73_6: function __extractLanguage__P_73_6(locale) {
        var language;
        if (locale == null) {
          return null;
        }
        var pos = locale.indexOf("_");
        if (pos == -1) {
          language = locale;
        } else {
          language = locale.substring(0, pos);
        }
        return language;
      },
      // property apply
      _applyLocale: function _applyLocale(value, old) {
        {
          if (!(value in this.__locales__P_73_1 || value == this.__clientLocale__P_73_2)) {
            qx.log.Logger.warn("Locale: " + value + " not available.");
          }
        }
        this.__locale__P_73_4 = value;
        this.__language__P_73_5 = this.__extractLanguage__P_73_6(value);
      },
      /**
       * Add a translation to the translation manager.
       *
       * If <code>languageCode</code> already exists, its map will be updated with
       * <code>translationMap</code> (new keys will be added, existing keys will be
       * overwritten).
       *
       * @param languageCode {String} language code of the translation like <i>de, de_AT, en, en_GB, fr, ...</i>
       * @param translationMap {Map} mapping of message identifiers to message strings in the target
       *                             language, e.g. <i>{"greeting_short" : "Hello"}</i>. Plural forms
       *                             are separate keys.
       */
      addTranslation: function addTranslation(languageCode, translationMap) {
        var catalog = this.__translations__P_73_0;
        if (catalog[languageCode]) {
          for (var key in translationMap) {
            catalog[languageCode][key] = translationMap[key];
          }
        } else {
          catalog[languageCode] = translationMap;
        }
      },
      /**
       * Add a localization to the localization manager.
       *
       * If <code>localeCode</code> already exists, its map will be updated with
       * <code>localeMap</code> (new keys will be added, existing keys will be overwritten).
       *
       * @param localeCode {String} locale code of the translation like <i>de, de_AT, en, en_GB, fr, ...</i>
       * @param localeMap {Map} mapping of locale keys to the target locale values, e.g.
       *                        <i>{"cldr_date_format_short" : "M/d/yy"}</i>.
       */
      addLocale: function addLocale(localeCode, localeMap) {
        var catalog = this.__locales__P_73_1;
        if (catalog[localeCode]) {
          for (var key in localeMap) {
            catalog[localeCode][key] = localeMap[key];
          }
        } else {
          catalog[localeCode] = localeMap;
        }
      },
      /**
       * Translate a message using the current locale and apply format string to the arguments.
       *
       * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
       * default locale (e.g. C). Localizes the arguments if possible and splices
       * them into the message. If qx.dynlocale is on, returns a {@link
       * LocalizedString}.
       *
       * @param messageId {String} message id (may contain format strings)
       * @param args {Object[]} array of objects, which are inserted into the format string
       * @param locale {String ? #locale} locale to be used; if not given, defaults to the value of {@link #locale}
       * @return {String|LocalizedString} translated message or localized string
       */
      translate: function translate(messageId, args, locale) {
        var catalog = this.__translations__P_73_0;
        return this.__lookupAndExpand__P_73_7(catalog, messageId, args, locale);
      },
      /**
       * Provide localization (CLDR) data.
       *
       * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
       * default locale (e.g. C). Localizes the arguments if possible and splices
       * them into the message. If qx.dynlocale is on, returns a {@link
       * LocalizedString}.
       *
       * @param messageId {String} message id (may contain format strings)
       * @param args {Object[]} array of objects, which are inserted into the format string
       * @param locale {String ? #locale} locale to be used; if not given, defaults to the value of {@link #locale}
       * @return {String|LocalizedString} translated message or localized string
       */
      localize: function localize(messageId, args, locale) {
        var catalog = this.__locales__P_73_1;
        return this.__lookupAndExpand__P_73_7(catalog, messageId, args, locale);
      },
      /**
       * Look up an I18N key in a catalog and expand format strings.
       *
       * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
       * default locale (e.g. C). Localizes the arguments if possible and splices
       * them into the message. If qx.dynlocale is on, returns a {@link
       * LocalizedString}.
       *
       * @param catalog {Map} map of I18N keys and their values
       * @param messageId {String} message id (may contain format strings)
       * @param args {Object[]} array of objects, which are inserted into the format string
       * @param locale {String ? #locale} locale to be used; if not given, defaults to the value of {@link #locale}
       * @return {String|LocalizedString} translated message or localized string
       */
      __lookupAndExpand__P_73_7: function __lookupAndExpand__P_73_7(catalog, messageId, args, locale) {
        {
          this.assertObject(catalog);
          this.assertString(messageId);
          this.assertArray(args);
        }
        var txt;
        if (!catalog) {
          return messageId;
        }
        if (locale) {
          var language = this.__extractLanguage__P_73_6(locale);
        } else {
          locale = this.__locale__P_73_4;
          language = this.__language__P_73_5;
        }

        // e.g. DE_at
        if (!txt && catalog[locale]) {
          txt = catalog[locale][messageId];
        }

        // e.g. DE
        if (!txt && catalog[language]) {
          txt = catalog[language][messageId];
        }

        // C
        if (!txt && catalog[this.__defaultLocale__P_73_3]) {
          txt = catalog[this.__defaultLocale__P_73_3][messageId];
        }
        if (!txt) {
          txt = messageId;
        }
        if (args.length > 0) {
          var translatedArgs = [];
          for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            if (arg && arg.translate) {
              translatedArgs[i] = arg.translate();
            } else {
              translatedArgs[i] = arg;
            }
          }
          txt = qx.lang.String.format(txt, translatedArgs);
        }
        {
          txt = new qx.locale.LocalizedString(txt, messageId, args, catalog === this.__locales__P_73_1);
        }
        return txt;
      }
    }
  });
  qx.locale.Manager.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.basic.Label": {
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
   * A navigation bar title widget.
   */
  qx.Class.define("qx.ui.mobile.navigationbar.Title", {
    extend: qx.ui.mobile.basic.Label,
    properties: {
      wrap: {
        refine: true,
        init: false
      },
      // overridden
      defaultCssClass: {
        refine: true,
        init: "title"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // overridden
      _getTagName: function _getTagName() {
        return "h1";
      }
    }
  });
  qx.ui.mobile.navigationbar.Title.$$dbClassInfo = $$dbClassInfo;
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
   * A horizontal box layout.
   *
   * The horizontal box layout lays out widgets in a horizontal row, from left
   * to right.
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
   * Here is a little example of how to use the HBox layout.
   *
   * <pre class="javascript">
   * var layout = new qx.ui.mobile.layout.HBox().set({alignX:"center"});
   *
   * var container = new qx.ui.mobile.container.Composite(layout);
   *
   * container.add(new qx.ui.mobile.basic.Label("1"));
   * container.add(new qx.ui.mobile.basic.Label("2"), {flex:1});
   * container.add(new qx.ui.mobile.basic.Label("3"));
   * </pre>
   */
  qx.Class.define("qx.ui.mobile.layout.HBox", {
    extend: qx.ui.mobile.layout.AbstractBox,
    /*
     *****************************************************************************
        MEMBERS
     *****************************************************************************
     */

    members: {
      // overridden
      _getCssClasses: function _getCssClasses() {
        return ["qx-hbox"];
      }
    }
  });
  qx.ui.mobile.layout.HBox.$$dbClassInfo = $$dbClassInfo;
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
      "qx.ui.mobile.layout.VBox": {},
      "qx.ui.mobile.layout.HBox": {},
      "qx.ui.mobile.basic.Image": {},
      "qx.bom.element.Style": {},
      "qx.ui.mobile.basic.Label": {},
      "qx.ui.mobile.container.Composite": {}
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
       * Gabriel Munteanu (gabios)
       * Christopher Zuendorf (czuendorf)
  
  ************************************************************************ */

  /**
   * A multi-purpose widget, which combines a label with an icon.
   *
   * The intended purpose of qx.ui.mobile.basic.Atom is to easily align the common icon-text
   * combination in different ways.
   *
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *   var atom = new qx.ui.mobile.basic.Atom("Icon Right", "icon/32/actions/go-next.png");
   *   this.getRoot().add(atom);
   * </pre>
   *
   * This example creates an atom with the label "Icon Right" and an icon.
   */
  qx.Class.define("qx.ui.mobile.basic.Atom", {
    extend: qx.ui.mobile.core.Widget,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param label {String} Label to use
     * @param icon {String?null} Icon to use
     */
    construct: function construct(label, icon) {
      qx.ui.mobile.core.Widget.constructor.call(this);
      this.__createChildren__P_65_0(label, icon);
      this.addCssClass("gap");
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
        init: "atom"
      },
      /** The label/caption/text of the qx.ui.mobile.basic.Atom instance */
      label: {
        apply: "_applyLabel",
        nullable: true,
        check: "String",
        event: "changeLabel"
      },
      /** Any URI String supported by qx.ui.mobile.basic.Image to display an icon */
      icon: {
        check: "String",
        apply: "_applyIcon",
        nullable: true,
        event: "changeIcon"
      },
      /**
       * Configure the visibility of the sub elements/widgets.
       * Possible values: both, text, icon
       */
      show: {
        init: "both",
        check: ["both", "label", "icon"],
        inheritable: true,
        apply: "_applyShow"
      },
      /**
       * The position of the icon in relation to the text.
       * Only useful/needed if text and icon is configured and 'show' is configured as 'both' (default)
       */
      iconPosition: {
        init: "left",
        check: ["top", "right", "bottom", "left"],
        apply: "_applyIconPosition"
      }
    },
    members: {
      __layout__P_65_1: null,
      __label__P_65_2: null,
      __icon__P_65_3: null,
      __childrenContainer__P_65_4: null,
      // property apply
      _applyIconPosition: function _applyIconPosition(value, old) {
        var verticalLayout = ["top", "bottom"].indexOf(value) != -1;
        var hasNoLabel = !this.__label__P_65_2;
        this.__createLayout__P_65_5(verticalLayout, hasNoLabel);
        var isReverse = ["right", "bottom"].indexOf(value) != -1;
        this.__childrenContainer__P_65_4.setLayout(this.__layout__P_65_1);
        this.__layout__P_65_1.setReversed(isReverse);
        this._domUpdated();
      },
      // property apply
      _applyShow: function _applyShow(value, old) {
        if (this.__label__P_65_2) {
          if (value === "both" || value === "label") {
            this.__label__P_65_2.show();
          } else if (value === "icon") {
            this.__label__P_65_2.exclude();
          }
        }
        if (this.__icon__P_65_3) {
          if (value === "both" || value === "icon") {
            this.__icon__P_65_3.show();
          } else if (value === "label") {
            this.__icon__P_65_3.exclude();
          }
        }
      },
      // property apply
      _applyLabel: function _applyLabel(value, old) {
        if (this.__label__P_65_2) {
          this.__label__P_65_2.setValue(value);
        } else {
          this.__label__P_65_2 = this._createLabelWidget(value);
        }
      },
      // property apply
      _applyIcon: function _applyIcon(value, old) {
        if (this.__icon__P_65_3) {
          this.__icon__P_65_3.setSource(value);
        } else {
          this.__icon__P_65_3 = this._createIconWidget(value);
        }
      },
      /**
       * Takes care of lazily creating the layout and disposing an already
       * present layout if necessary.
       *
       * @param verticalLayout {Boolean} Whether icon and label should be vertically aligned.
       * @param hasNoLabel {Boolean} Whether the atom currently contains a label.
       */
      __createLayout__P_65_5: function __createLayout__P_65_5(verticalLayout, hasNoLabel) {
        if (verticalLayout || hasNoLabel) {
          if (this.__layout__P_65_1) {
            if (this.__layout__P_65_1.classname !== "qx.ui.mobile.layout.VBox") {
              this.__layout__P_65_1.dispose();
              this.__layout__P_65_1 = new qx.ui.mobile.layout.VBox();
            }
          }
          // layout == null
          else {
            this.__layout__P_65_1 = new qx.ui.mobile.layout.VBox();
          }
        }
        // horizontal layout and has label
        else {
          if (this.__layout__P_65_1) {
            if (this.__layout__P_65_1.classname !== "qx.ui.mobile.layout.HBox") {
              this.__layout__P_65_1.dispose();
              this.__layout__P_65_1 = new qx.ui.mobile.layout.HBox();
            }
          }
          // layout == null
          else {
            this.__layout__P_65_1 = new qx.ui.mobile.layout.HBox();
          }
        }
      },
      /**
       * Returns the icon widget.
       *
       * @return {qx.ui.mobile.basic.Image} The icon widget.
       */
      getIconWidget: function getIconWidget() {
        return this.__icon__P_65_3;
      },
      /**
       * Returns the label widget.
       *
       * @return {qx.ui.mobile.basic.Label} The label widget.
       */
      getLabelWidget: function getLabelWidget() {
        return this.__label__P_65_2;
      },
      /**
       * Creates the icon widget.
       *
       * @param iconUrl {String} The icon url.
       * @return {qx.ui.mobile.basic.Image} The created icon widget.
       */
      _createIconWidget: function _createIconWidget(iconUrl) {
        var iconWidget = new qx.ui.mobile.basic.Image(iconUrl);
        qx.bom.element.Style.set(iconWidget.getContentElement(), "display", "block");
        iconWidget.setAnonymous(true);
        iconWidget.addCssClass("gap");
        return iconWidget;
      },
      /**
       * Creates the label widget.
       *
       * @param label {String} The text that should be displayed.
       * @return {qx.ui.mobile.basic.Label} The created label widget.
       */
      _createLabelWidget: function _createLabelWidget(label) {
        var labelWidget = new qx.ui.mobile.basic.Label(label);
        labelWidget.setAnonymous(true);
        labelWidget.setWrap(false);
        labelWidget.addCssClass("gap");
        return labelWidget;
      },
      /**
       * This function is responsible for creating and adding 2 children controls to the Button widget.
       * A label and an icon.
       * @param label {String} the text of the button
       * @param icon {String} A path to an image resource
       *
       */
      __createChildren__P_65_0: function __createChildren__P_65_0(label, icon) {
        this.__label__P_65_2 = this._createLabelWidget(label);
        if (label) {
          this.setLabel(label);
        }
        this.__icon__P_65_3 = this._createIconWidget(icon);
        if (icon) {
          this.setIcon(icon);
        } else {
          this.__icon__P_65_3.exclude();
        }
        var verticalLayout = ["top", "bottom"].indexOf(this.getIconPosition()) != -1;
        // If Atom has no Label, only Icon is shown, and should vertically centered.
        var hasNoLabel = !this.__label__P_65_2;
        this.__createLayout__P_65_5(verticalLayout, hasNoLabel);
        if (this.__childrenContainer__P_65_4) {
          this.__childrenContainer__P_65_4.dispose();
        }
        this.__childrenContainer__P_65_4 = new qx.ui.mobile.container.Composite(this.__layout__P_65_1);
        this.__childrenContainer__P_65_4.addCssClass("qx-flex-center");
        this.__childrenContainer__P_65_4.setAnonymous(true);
        if (this.__icon__P_65_3) {
          this.__childrenContainer__P_65_4.add(this.__icon__P_65_3);
        }
        if (this.__label__P_65_2) {
          this.__label__P_65_2.addCssClass("qx-flex-center");
          this.__childrenContainer__P_65_4.add(this.__label__P_65_2);
        }

        // Show/Hide Label/Icon
        if (this.getShow() === "icon" && this.__label__P_65_2) {
          this.__label__P_65_2.exclude();
        }
        if (this.getShow() === "label" && this.__icon__P_65_3) {
          this.__icon__P_65_3.exclude();
        }
        this._add(this.__childrenContainer__P_65_4);
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._disposeObjects("__layout__P_65_1", "__label__P_65_2", "__icon__P_65_3", "__childrenContainer__P_65_4");
    }
  });
  qx.ui.mobile.basic.Atom.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.basic.Atom": {
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
   * A Button widget.
   *
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *   var button = new qx.ui.mobile.form.Button("Hello World");
   *
   *   button.addListener("tap", function(e) {
   *     alert("Button was clicked");
   *   }, this);
   *
   *   this.getRoot.add(button);
   * </pre>
   *
   * This example creates a button with the label "Hello World" and attaches an
   * event listener to the {@link qx.ui.mobile.core.Widget#tap} event.
   */
  qx.Class.define("qx.ui.mobile.form.Button", {
    extend: qx.ui.mobile.basic.Atom,
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      // overridden
      defaultCssClass: {
        refine: true,
        init: "button"
      },
      // overridden
      activatable: {
        refine: true,
        init: true
      }
    },
    members: {
      /**
       * Sets the value.
       *
       * @param value {String} The value to set
       */
      setValue: function setValue(value) {
        this.setLabel(value);
      },
      /**
       * Returns the set value.
       *
       * @return {String} The set value
       */
      getValue: function getValue() {
        return this.getLabel();
      }
    }
  });
  qx.ui.mobile.form.Button.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.form.Button": {
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
   * A navigation bar button widget.
   */
  qx.Class.define("qx.ui.mobile.navigationbar.Button", {
    extend: qx.ui.mobile.form.Button,
    /*
     *****************************************************************************
        PROPERTIES
     *****************************************************************************
     */

    properties: {
      // overridden
      defaultCssClass: {
        refine: true,
        init: "navigationbar-button"
      }
    }
  });
  qx.ui.mobile.navigationbar.Button.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.navigationbar.Button": {
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
   * A navigation bar back button widget.
   */
  qx.Class.define("qx.ui.mobile.navigationbar.BackButton", {
    extend: qx.ui.mobile.navigationbar.Button,
    /*
     *****************************************************************************
        PROPERTIES
     *****************************************************************************
     */

    properties: {
      // overridden
      defaultCssClass: {
        refine: true,
        init: "navigationbar-backbutton"
      }
    }
  });
  qx.ui.mobile.navigationbar.BackButton.$$dbClassInfo = $$dbClassInfo;
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
        "defer": "runtime",
        "require": true
      },
      "qx.ui.mobile.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.lang.Type": {},
      "qx.bom.Selector": {},
      "qx.bom.element.Location": {},
      "qx.bom.element.Dimension": {},
      "qx.bom.client.Scroll": {
        "defer": "load",
        "require": true
      },
      "qx.ui.mobile.container.MIScroll": {
        "defer": "runtime"
      },
      "qx.ui.mobile.container.MNativeScroll": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.mobile.nativescroll": {
          "defer": true,
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
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * Container, which allows, depending on the set variant <code>qx.mobile.nativescroll</code>,
   * vertical and horizontal scrolling if the contents is larger than the container.
   *
   * Note that this class can only have one child widget. This container has a
   * fixed layout, which cannot be changed.
   *
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *   // create the scroll widget
   *   var scroll = new qx.ui.mobile.container.Scroll();
   *
   *   // add a children
   *   scroll.add(new qx.ui.mobile.basic.Label("Name: "));
   *
   *   this.getRoot().add(scroll);
   * </pre>
   *
   * This example creates a scroll container and adds a label to it.
   */
  qx.Class.define("qx.ui.mobile.container.Scroll", {
    extend: qx.ui.mobile.container.Composite,
    /**
     * @param scrollProperties {Object} A map with scroll properties which are passed to the scrolling container (may contain iScroll properties).
     */
    construct: function construct(scrollProperties) {
      qx.ui.mobile.container.Composite.constructor.call(this);
      if (scrollProperties) {
        this._scrollProperties = scrollProperties;
      }
      this.addListener("appear", this._updateWaypoints, this);
      this._waypointsX = [];
      this._waypointsY = [];
      this._currentX = 0;
      this._currentY = 0;
    },
    events: {
      /** Fired when the scroll container reaches its end position (including momentum/inertia). */
      scrollEnd: "qx.event.type.Event",
      /** Fired when the user scrolls to the end of scroll area. */
      pageEnd: "qx.event.type.Event",
      /** Fired when a vertical or horizontal waypoint is triggered. Data:
       * <code> {"offset": 0,
       *        "input": "10%",
       *        "index": 0,
       *        "element" : 0}</code>
       */
      waypoint: "qx.event.type.Data",
      /**
       * Fired when a momentum starts on an iOS device.
       */
      momentumStart: "qx.event.type.Event",
      /**
       * Fired when a momentum ends on an iOS device.
       */
      momentumEnd: "qx.event.type.Data"
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
        init: "scroll"
      },
      /**
       * Delegation object which can have one or more functions defined by the
       * {@link qx.ui.mobile.container.IScrollDelegate} interface.
       *
       * @internal
       */
      delegate: {
        init: null,
        nullable: true
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      _scrollProperties: null,
      _activeWaypointX: null,
      _activeWaypointY: null,
      _waypointsX: null,
      _waypointsY: null,
      _calculatedWaypointsX: null,
      _calculatedWaypointsY: null,
      _currentX: null,
      _currentY: null,
      /**
       * Sets the current x position.
       * @param value {Number} the current horizontal position.
       */
      _setCurrentX: function _setCurrentX(value) {
        var old = this._currentX;
        this._currentX = value;
        this._fireWaypoint(value, old, "x");
      },
      /**
       * Sets the current y position.
       * @param value {Number} the current vertical position.
       */
      _setCurrentY: function _setCurrentY(value) {
        var old = this._currentY;
        this._currentY = value;
        this._fireWaypoint(value, old, "y");
      },
      /**
       * Sets the horizontal trigger points, where a <code>waypoint</code> event will be fired.
       * @param waypoints {Array} description
       */
      setWaypointsX: function setWaypointsX(waypoints) {
        this._waypointsX = waypoints;
      },
      /**
       * Sets the vertical trigger points, where a <code>waypoint</code> event will be fired.
       * @param waypoints {Array} an array with waypoint descriptions. Allowed are percentage description as string, or pixel trigger points defined as numbers. <code>["20%",200]</code>
       */
      setWaypointsY: function setWaypointsY(waypoints) {
        this._waypointsY = waypoints;
      },
      /**
       * Returns the scroll height.
       * @return {Number} the scroll height.
       */
      getScrollHeight: function getScrollHeight() {
        return this._getScrollHeight();
      },
      /**
       * Returns the scroll width.
       * @return {Number} the scroll width.
       */
      getScrollWidth: function getScrollWidth() {
        return this._getScrollWidth();
      },
      /**
       * Re-calculates the internal waypoint offsets.
       */
      _updateWaypoints: function _updateWaypoints() {
        this._calculatedWaypointsX = [];
        this._calculatedWaypointsY = [];
        this._calcWaypoints(this._waypointsX, this._calculatedWaypointsX, this.getScrollWidth(), "x");
        this._calcWaypoints(this._waypointsY, this._calculatedWaypointsY, this.getScrollHeight());
      },
      /**
       * Validates and checks the waypoint offsets.
       * @param waypoints {Array} an array with waypoint descriptions.
       * @param results {Array} the array where calculated waypoints will be added.
       * @param scrollSize {Number} the vertical or horizontal scroll size.
       * @param axis {String?} "x" or "y".
       */
      _calcWaypoints: function _calcWaypoints(waypoints, results, scrollSize, axis) {
        axis = axis || "y";
        var offset = 0;
        for (var i = 0; i < waypoints.length; i++) {
          var waypoint = waypoints[i];
          if (qx.lang.Type.isString(waypoint)) {
            if (waypoint.endsWith("%")) {
              offset = parseInt(waypoint, 10) * (scrollSize / 100);
              results.push({
                offset: offset,
                input: waypoint,
                index: i,
                element: null,
                axis: axis
              });
            } else {
              // Dynamically created waypoints, based upon a selector.
              var element = this.getContentElement();
              var waypointElements = qx.bom.Selector.query(waypoint, element);
              for (var j = 0; j < waypointElements.length; j++) {
                var position = qx.bom.element.Location.getRelative(waypointElements[j], element);
                if (axis === "y") {
                  offset = position.top + this.getContentElement().scrollTop;
                } else if (axis === "x") {
                  offset = position.left + this.getContentElement().scrollLeft;
                }
                results.push({
                  offset: position.top + this._currentY,
                  input: waypoint,
                  index: i,
                  element: j,
                  axis: axis
                });
              }
            }
          } else if (qx.lang.Type.isNumber(waypoint)) {
            results.push({
              offset: waypoint,
              input: waypoint,
              index: i,
              element: null,
              axis: axis
            });
          }
        }
        results.sort(function (a, b) {
          return a.offset - b.offset;
        });
      },
      /**
       * Fires a waypoints event when scroll position changes.
       * @param value {Number} old scroll position.
       * @param old {Number} old scroll position.
       * @param axis {String} "x" or "y".
       */
      _fireWaypoint: function _fireWaypoint(value, old, axis) {
        var waypoints = this._calculatedWaypointsY;
        if (axis === "x") {
          waypoints = this._calculatedWaypointsX;
        }
        if (waypoints === null) {
          return;
        }
        var nextWaypoint = null;
        for (var i = 0; i < waypoints.length; i++) {
          var waypoint = waypoints[i];
          if (waypoint.offset !== null) {
            if (value > -1 && value >= waypoint.offset || value < 0 && waypoint.offset < 0 && value <= waypoint.offset) {
              nextWaypoint = waypoint;
            } else {
              break;
            }
          }
        }
        if (nextWaypoint === null) {
          if (axis === "x") {
            this._activeWaypointX = null;
          } else {
            this._activeWaypointY = null;
          }
          return;
        }
        var direction = null;
        if (old <= value) {
          direction = "down";
          if (axis == "x") {
            direction = "left";
          }
        } else {
          direction = "up";
          if (axis == "x") {
            direction = "right";
          }
        }
        var activeWaypoint = this._activeWaypointY;
        if (axis === "x") {
          activeWaypoint = this._activeWaypointX;
        }
        if (activeWaypoint === null || activeWaypoint.index !== nextWaypoint.index || activeWaypoint.element !== nextWaypoint.element) {
          activeWaypoint = nextWaypoint;
          this._activeWaypointY = activeWaypoint;
          if (axis === "x") {
            this._activeWaypointX = activeWaypoint;
          }
          this.fireDataEvent("waypoint", {
            axis: axis,
            index: nextWaypoint.index,
            element: nextWaypoint.element,
            direction: direction
          });
        }
      },
      // overridden
      _createContainerElement: function _createContainerElement() {
        var element = qx.ui.mobile.container.Scroll.superclass.prototype._createContainerElement.call(this);
        var scrollElement = this._createScrollElement();
        if (scrollElement) {
          return scrollElement;
        }
        return element;
      },
      // overridden
      _getContentElement: function _getContentElement() {
        var contentElement = qx.ui.mobile.container.Scroll.superclass.prototype._getContentElement.call(this);
        var scrollContentElement = this._getScrollContentElement();
        return scrollContentElement || contentElement;
      },
      /**
       * Calls the refresh function the used scrolling method. Needed to recalculate the
       * scrolling container.
       */
      refresh: function refresh() {
        this._refresh();
        this._updateWaypoints();
      },
      /**
       * Scrolls the wrapper contents to the x/y coordinates in a given time.
       *
       * @param x {Integer} X coordinate to scroll to.
       * @param y {Integer} Y coordinate to scroll to.
       * @param time {Integer} Time slice in which scrolling should
       *              be done.
       */
      scrollTo: function scrollTo(x, y, time) {
        this._scrollTo(x, y, time);
      },
      /**
       * Returns the current scroll position
       * @return {Array} an array with <code>[scrollLeft,scrollTop]</code>.
       */
      getPosition: function getPosition() {
        return this._getPosition();
      },
      /**
       * Detects whether this scroll container is scrollable or not.
       * @return {Boolean} <code>true</code> or <code>false</code>
       */
      isScrollable: function isScrollable() {
        return this._isScrollable();
      },
      /**
       * Detects whether this scroll container is scrollable or not.
       * @return {Boolean} <code>true</code> or <code>false</code>
       */
      _isScrollable: function _isScrollable() {
        return this._isScrollableX() || this._isScrollableY();
      },
      /**
       * Detects whether this scroll container is scrollable on x axis or not.
       * @return {Boolean} <code>true</code> or <code>false</code>
       */
      _isScrollableX: function _isScrollableX() {
        if (this.getLayoutParent() === null) {
          return false;
        }
        var parentWidth = this.getContainerElement().clientWidth;
        var contentWidth = this.getContentElement().scrollWidth;
        var scrollContentElement = this._getScrollContentElement();
        if (scrollContentElement) {
          contentWidth = qx.bom.element.Dimension.getWidth(scrollContentElement);
        }
        return parentWidth < contentWidth;
      },
      /**
       * Detects whether this scroll container is scrollable on y axis or not.
       * @return {Boolean} <code>true</code> or <code>false</code>
       */
      _isScrollableY: function _isScrollableY() {
        if (this.getLayoutParent() === null) {
          return false;
        }
        var parentHeight = this.getContainerElement().clientHeight;
        var contentHeight = this.getContentElement().scrollHeight;
        var scrollContentElement = this._getScrollContentElement();
        if (scrollContentElement) {
          contentHeight = qx.bom.element.Dimension.getHeight(scrollContentElement);
        }
        return parentHeight < contentHeight;
      },
      /**
       * Scrolls the wrapper contents to the widgets coordinates in a given
       * period.
       *
       * @param target {Element} the element to which the scroll container should scroll to.
       * @param time {Integer?0} Time slice in which scrolling should
       *              be done (in seconds).
       *
       */
      scrollToElement: function scrollToElement(target, time) {
        this._scrollToElement(target, time);
      },
      /**
       * Scrolls the wrapper contents to the widgets coordinates in a given
       * period.
       *
       * @param element {String} the element to which the scroll container should scroll to.
       * @param time {Integer?0} Time slice in which scrolling should be done (in seconds).
       *
       */
      _scrollToElement: function _scrollToElement(element, time) {
        if (this._getContentElement() && this._isScrollable()) {
          if (typeof time === "undefined") {
            time = 0;
          }
          var location = qx.bom.element.Location.getRelative(this._getContentElement(), element, "scroll", "scroll");
          var offset = this._getScrollOffset();
          this._scrollTo(-location.left - offset[0], -location.top - offset[1], time);
        }
      },
      /**
       *
       * Determines the scroll offset for the <code>_scrollToElement</code> method.
       * If a delegate is available, the method calls
       * <code>qx.ui.mobile.container.IScrollDelegate.getScrollOffset()</code> for offset calculation.
       *
       * @return {Array} an array with x,y offset.
       */
      _getScrollOffset: function _getScrollOffset() {
        var delegate = this.getDelegate();
        if (delegate != null && delegate.getScrollOffset) {
          return delegate.getScrollOffset.bind(this)();
        } else {
          return [0, 0];
        }
      },
      /**
       * Scrolls the wrapper contents to the widgets coordinates in a given
       * period.
       *
       * @param widget {qx.ui.mobile.core.Widget} the widget, the scroll container should scroll to.
       * @param time {Integer} Time slice in which scrolling should
       *              be done.
       */
      scrollToWidget: function scrollToWidget(widget, time) {
        if (widget) {
          this._scrollToElement(widget.getContentElement(), time);
        }
      }
    },
    defer: function defer(statics) {
      if (qx.core.Environment.get("qx.mobile.nativescroll") == false) {
        qx.Class.include(statics, qx.ui.mobile.container.MIScroll);
      } else {
        qx.Class.include(statics, qx.ui.mobile.container.MNativeScroll);
      }
    },
    destruct: function destruct() {
      this.removeListener("appear", this._updateWaypoints, this);
      this._waypointsX = this._waypointsY = null;
    }
  });
  qx.ui.mobile.container.Scroll.$$dbClassInfo = $$dbClassInfo;
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
      "qx.dom.Element": {},
      "qx.bom.element.Class": {},
      "qx.bom.element.Dimension": {},
      "qx.util.ResourceManager": {},
      "qx.bom.request.Script": {},
      "qx.lang.Object": {},
      "qx.bom.client.Scroll": {
        "require": true
      },
      "qx.lang.Array": {},
      "qx.event.Registration": {},
      "qx.bom.Event": {}
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
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * Mixin for the {@link Scroll} container. Used when the variant
   * <code>qx.mobile.nativescroll</code> is set to "off". Uses the iScroll script to simulate
   * the CSS position:fixed style. Position fixed is not available in iOS and
   * Android < 2.2.
   *
   * @ignore(iScroll)
   * @asset(qx/mobile/js/iscroll*.js)
   */
  /* global iScroll */
  qx.Mixin.define("qx.ui.mobile.container.MIScroll", {
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      this.__initScroll__P_102_0();
      this.__registerEventListeners__P_102_1();
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __scroll__P_102_2: null,
      /**
       * Mixin method. Creates the scroll element.
       *
       * @return {Element} The scroll element
       */
      _createScrollElement: function _createScrollElement() {
        var scroll = qx.dom.Element.create("div");
        qx.bom.element.Class.add(scroll, "iscroll");
        return scroll;
      },
      /**
       * Mixin method. Returns the scroll content element..
       *
       * @return {Element} The scroll content element
       */
      _getScrollContentElement: function _getScrollContentElement() {
        return this.getContainerElement().childNodes[0];
      },
      /**
       * Returns the current scroll position
       * @return {Array} an array with the <code>[scrollLeft,scrollTop]</code>.
       */
      _getPosition: function _getPosition() {
        return [this._currentX, this._currentY];
      },
      /**
       * Returns the scrolling height of the inner container.
       * @return {Number} the scrolling height.
       */
      _getScrollHeight: function _getScrollHeight() {
        if (!this.getContainerElement()) {
          return 0;
        }
        return this._getScrollContentElement().scrollHeight - this.getContainerElement().offsetHeight;
      },
      /**
       * Returns the scrolling width of the inner container.
       * @return {Number} the scrolling width.
       */
      _getScrollWidth: function _getScrollWidth() {
        if (!this.getContainerElement()) {
          return 0;
        }
        return this._getScrollContentElement().scrollWidth - this.getContainerElement().offsetWidth;
      },
      /**
       * Scrolls the wrapper contents to the x/y coordinates in a given period.
       *
       * @param x {Integer} X coordinate to scroll to.
       * @param y {Integer} Y coordinate to scroll to.
       * @param time {Integer} Time slice in which scrolling should
       *              be done.
       */
      _scrollTo: function _scrollTo(x, y, time) {
        if (this._isScrollable()) {
          // Normalize scrollable values
          var lowerLimitY = qx.bom.element.Dimension.getHeight(this._getScrollContentElement()) - this.getContainerElement().offsetHeight;
          if (y > lowerLimitY) {
            y = lowerLimitY;
          }
          var lowerLimitX = qx.bom.element.Dimension.getWidth(this._getScrollContentElement()) - this.getContainerElement().offsetWidth;
          if (x > lowerLimitX) {
            x = lowerLimitX;
          }
          if (this.__scroll__P_102_2) {
            this.__scroll__P_102_2.scrollTo(-x, -y, time);
          } else {
            // Case when iScroll is not loaded yet, but user tries
            // to set a different scroll position. Position is applied on "__onScrollLoaded".
            this._setCurrentY(x);
            this._setCurrentY(y);
          }
        }
      },
      /**
       * Loads and inits the iScroll instance.
       *
       * @ignore(iScroll)
       */
      __initScroll__P_102_0: function __initScroll__P_102_0() {
        var _this = this;
        if (!window.iScroll) {
          {
            var resource = "qx/mobile/js/iscroll.js";
          }
          var path = qx.util.ResourceManager.getInstance().toUri(resource);
          {
            path += "?" + new Date().getTime();
          }
          var loader = new qx.bom.request.Script();
          loader.on("load", this.__onScrollLoaded__P_102_3, this);
          loader.open("GET", path);
          loader.send();
        } else {
          this.addListenerOnce("appear", function () {
            _this._setScroll(_this.__createScrollInstance__P_102_4());
          });
        }
      },
      /**
       * Creates the iScroll instance.
       *
       * @return {Object} The iScroll instance
       * @ignore(iScroll)
       */
      __createScrollInstance__P_102_4: function __createScrollInstance__P_102_4() {
        var defaultScrollProperties = this._getDefaultScrollProperties();
        var customScrollProperties = {};
        if (this._scrollProperties != null) {
          customScrollProperties = this._scrollProperties;
        }
        var iScrollProperties = qx.lang.Object.mergeWith(defaultScrollProperties, customScrollProperties, true);
        return new iScroll(this.getContainerElement(), iScrollProperties);
      },
      /**
       * Returns a map with default iScroll properties for the iScroll instance.
       * @return {Object} Map with default iScroll properties
       */
      _getDefaultScrollProperties: function _getDefaultScrollProperties() {
        var container = this;
        return {
          hideScrollbar: true,
          fadeScrollbar: true,
          hScrollbar: false,
          scrollbarClass: "scrollbar",
          useTransform: true,
          useTransition: true,
          onScrollEnd: function onScrollEnd() {
            // Alert interested parties that we scrolled to end of page.
            if (qx.core.Environment.get("qx.mobile.nativescroll") == false) {
              container._setCurrentX(-this.x);
              container._setCurrentY(-this.y);
              container.fireEvent("scrollEnd");
              if (this.y == this.maxScrollY) {
                container.fireEvent("pageEnd");
              }
            }
          },
          onScrollMove: function onScrollMove() {
            // Alert interested parties that we scrolled to end of page.
            if (qx.core.Environment.get("qx.mobile.nativescroll") == false) {
              container._setCurrentX(-this.x);
              container._setCurrentY(-this.y);
              if (this.y == this.maxScrollY) {
                container.fireEvent("pageEnd");
              }
            }
          },
          onBeforeScrollStart: function onBeforeScrollStart(e) {
            // QOOXDOO ENHANCEMENT: Do not prevent default for form elements
            /* When updating iScroll, please check out that doubleTapTimer is not active (commented out)
             * in code. DoubleTapTimer creates a fake click event. Android 4.1. and newer
             * is able to fire native events, which  create side effect with the fake event of iScroll. */
            var target = e.target;
            while (target.nodeType != 1) {
              target = target.parentNode;
            }
            if (target.tagName != "SELECT" && target.tagName != "INPUT" && target.tagName != "TEXTAREA" && target.tagName != "LABEL") {
              // Remove focus from input elements, so that the keyboard and the mouse cursor is hidden
              var elements = [];
              var inputElements = qx.lang.Array.cast(document.getElementsByTagName("input"), Array);
              var textAreaElements = qx.lang.Array.cast(document.getElementsByTagName("textarea"), Array);
              elements = elements.concat(inputElements);
              elements = elements.concat(textAreaElements);
              for (var i = 0, length = elements.length; i < length; i++) {
                elements[i].blur();
              }
              e.preventDefault();
            }
          }
        };
      },
      /**
       * Registers all needed event listener.
       */
      __registerEventListeners__P_102_1: function __registerEventListeners__P_102_1() {
        qx.event.Registration.addListener(window, "orientationchange", this._refresh, this);
        qx.event.Registration.addListener(window, "resize", this._refresh, this);
        this.addListener("touchmove", qx.bom.Event.stopPropagation);
        this.addListener("domupdated", this._refresh, this);
      },
      /**
       * Unregisters all needed event listener.
       */
      __unregisterEventListeners__P_102_5: function __unregisterEventListeners__P_102_5() {
        qx.event.Registration.removeListener(window, "orientationchange", this._refresh, this);
        qx.event.Registration.removeListener(window, "resize", this._refresh, this);
        this.removeListener("touchmove", qx.bom.Event.stopPropagation);
        this.removeListener("domupdated", this._refresh, this);
      },
      /**
       * Load callback. Called when the iScroll script is loaded.
       *
       * @param request {qx.bom.request.Script} The Script request object
       */
      __onScrollLoaded__P_102_3: function __onScrollLoaded__P_102_3(request) {
        if (request.status < 400) {
          if (!this.isDisposed()) {
            this._setScroll(this.__createScrollInstance__P_102_4());
            this._scrollTo(this._currentX, this._currentY);
          }
        } else {
          {
            this.error("Could not load iScroll");
          }
        }
      },
      /**
       * Setter for the scroll instance.
       *
       * @param scroll {Object} iScroll instance.
       */
      _setScroll: function _setScroll(scroll) {
        this.__scroll__P_102_2 = scroll;
      },
      /**
       * Delegation method for iScroll. Disabled the iScroll objects.
       * Prevents any further scrolling of this container.
       */
      disable: function disable() {
        if (this.__scroll__P_102_2) {
          this.__scroll__P_102_2.disable();
        }
      },
      /**
       * Delegation method for iScroll. Enables the iScroll object.
       */
      enable: function enable() {
        if (this.__scroll__P_102_2) {
          this.__scroll__P_102_2.enable();
        }
      },
      /**
       * Calls the refresh function of iScroll. Needed to recalculate the
       * scrolling container.
       */
      _refresh: function _refresh() {
        if (this.__scroll__P_102_2) {
          this.__scroll__P_102_2.refresh();
        }
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.__unregisterEventListeners__P_102_5();

      // Cleanup iScroll
      if (this.__scroll__P_102_2) {
        this.__scroll__P_102_2.destroy();
      }
      this.__scroll__P_102_2 = null;
    }
  });
  qx.ui.mobile.container.MIScroll.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.dom.Node": {},
      "qx.bom.element.Dimension": {},
      "qx.bom.Document": {},
      "qx.bom.Viewport": {},
      "qx.bom.Stylesheet": {},
      "qxWeb": {
        "defer": "runtime"
      },
      "qx.bom.element.Location": {},
      "qx.lang.String": {},
      "qx.bom.element.Style": {},
      "qx.bom.element.Class": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2011-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */
  /**
   * CSS/Style property manipulation module
   * @group (Core)
   */
  qx.Bootstrap.define("qx.module.Css", {
    statics: {
      /**
       * INTERNAL
       *
       * Returns the rendered height of the first element in the collection.
       * @attach {qxWeb}
       * @param force {Boolean?false} When true also get the height of a <em>non displayed</em> element
       * @return {Number} The first item's rendered height
       */
      _getHeight: function _getHeight(force) {
        var elem = this[0];
        if (elem) {
          if (qx.dom.Node.isElement(elem)) {
            var elementHeight;
            if (force) {
              var stylesToSwap = {
                display: "block",
                position: "absolute",
                visibility: "hidden"
              };
              elementHeight = qx.module.Css.__swap__P_179_0(elem, stylesToSwap, "_getHeight", this);
            } else {
              elementHeight = qx.bom.element.Dimension.getHeight(elem);
            }
            return elementHeight;
          } else if (qx.dom.Node.isDocument(elem)) {
            return qx.bom.Document.getHeight(qx.dom.Node.getWindow(elem));
          } else if (qx.dom.Node.isWindow(elem)) {
            return qx.bom.Viewport.getHeight(elem);
          }
        }
        return null;
      },
      /**
       * INTERNAL
       *
       * Returns the rendered width of the first element in the collection
       * @attach {qxWeb}
       * @param force {Boolean?false} When true also get the width of a <em>non displayed</em> element
       * @return {Number} The first item's rendered width
       */
      _getWidth: function _getWidth(force) {
        var elem = this[0];
        if (elem) {
          if (qx.dom.Node.isElement(elem)) {
            var elementWidth;
            if (force) {
              var stylesToSwap = {
                display: "block",
                position: "absolute",
                visibility: "hidden"
              };
              elementWidth = qx.module.Css.__swap__P_179_0(elem, stylesToSwap, "_getWidth", this);
            } else {
              elementWidth = qx.bom.element.Dimension.getWidth(elem);
            }
            return elementWidth;
          } else if (qx.dom.Node.isDocument(elem)) {
            return qx.bom.Document.getWidth(qx.dom.Node.getWindow(elem));
          } else if (qx.dom.Node.isWindow(elem)) {
            return qx.bom.Viewport.getWidth(elem);
          }
        }
        return null;
      },
      /**
       * INTERNAL
       *
       * Returns the content height of the first element in the collection.
       * This is the maximum height the element can use, excluding borders,
       * margins, padding or scroll bars.
       * @attach {qxWeb}
       * @param force {Boolean?false} When true also get the content height of a <em>non displayed</em> element
       * @return {Number} Computed content height
       */
      _getContentHeight: function _getContentHeight(force) {
        var obj = this[0];
        if (qx.dom.Node.isElement(obj)) {
          var contentHeight;
          if (force) {
            var stylesToSwap = {
              position: "absolute",
              visibility: "hidden",
              display: "block"
            };
            contentHeight = qx.module.Css.__swap__P_179_0(obj, stylesToSwap, "_getContentHeight", this);
          } else {
            contentHeight = qx.bom.element.Dimension.getContentHeight(obj);
          }
          return contentHeight;
        }
        return null;
      },
      /**
       * INTERNAL
       *
       * Returns the content width of the first element in the collection.
       * This is the maximum width the element can use, excluding borders,
       * margins, padding or scroll bars.
       * @attach {qxWeb}
       * @param force {Boolean?false} When true also get the content width of a <em>non displayed</em> element
       * @return {Number} Computed content width
       */
      _getContentWidth: function _getContentWidth(force) {
        var obj = this[0];
        if (qx.dom.Node.isElement(obj)) {
          var contentWidth;
          if (force) {
            var stylesToSwap = {
              position: "absolute",
              visibility: "hidden",
              display: "block"
            };
            contentWidth = qx.module.Css.__swap__P_179_0(obj, stylesToSwap, "_getContentWidth", this);
          } else {
            contentWidth = qx.bom.element.Dimension.getContentWidth(obj);
          }
          return contentWidth;
        }
        return null;
      },
      /**
       * Maps HTML elements to their default "display" style values.
       */
      __displayDefaults__P_179_1: {},
      /**
       * Attempts tp determine the default "display" style value for
       * elements with the given tag name.
       *
       * @param tagName {String} Tag name
       * @param  doc {Document?} Document element. Default: The current document
       * @return {String} The default "display" value, e.g. <code>inline</code>
       * or <code>block</code>
       */
      __getDisplayDefault__P_179_2: function __getDisplayDefault__P_179_2(tagName, doc) {
        var defaults = qx.module.Css.__displayDefaults__P_179_1;
        if (!defaults[tagName]) {
          var docu = doc || document;
          var tempEl = qxWeb(docu.createElement(tagName)).appendTo(doc.body);
          defaults[tagName] = tempEl.getStyle("display");
          tempEl.remove();
        }
        return defaults[tagName] || "";
      },
      /**
       * Swaps the given styles of the element and execute the callback
       * before the original values are restored.
       *
       * Finally returns the return value of the callback.
       *
       * @param element {Element} the DOM element to operate on
       * @param styles {Map} the styles to swap
       * @param methodName {String} the callback functions name
       * @param context {Object} the context in which the callback should be called
       * @return {Object} the return value of the callback
       */
      __swap__P_179_0: function __swap__P_179_0(element, styles, methodName, context) {
        // get the current values
        var currentValues = {};
        for (var styleProperty in styles) {
          currentValues[styleProperty] = element.style[styleProperty];
          element.style[styleProperty] = styles[styleProperty];
        }
        var value = context[methodName]();
        for (var styleProperty in currentValues) {
          element.style[styleProperty] = currentValues[styleProperty];
        }
        return value;
      },
      /**
       * Includes a Stylesheet file
       *
       * @attachStatic {qxWeb}
       * @param uri {String} The stylesheet's URI
       * @param doc {Document?} Document to modify
       */
      includeStylesheet: function includeStylesheet(uri, doc) {
        qx.bom.Stylesheet.includeFile(uri, doc);
      }
    },
    members: {
      /**
       * Returns the rendered height of the first element in the collection.
       * @attach {qxWeb}
       * @param force {Boolean?false} When true also get the height of a <em>non displayed</em> element
       * @return {Number} The first item's rendered height
       */
      getHeight: function getHeight(force) {
        return this._getHeight(force);
      },
      /**
       * Returns the rendered width of the first element in the collection
       * @attach {qxWeb}
       * @param force {Boolean?false} When true also get the width of a <em>non displayed</em> element
       * @return {Number} The first item's rendered width
       */
      getWidth: function getWidth(force) {
        return this._getWidth(force);
      },
      /**
       * Returns the content height of the first element in the collection.
       * This is the maximum height the element can use, excluding borders,
       * margins, padding or scroll bars.
       * @attach {qxWeb}
       * @param force {Boolean?false} When true also get the content height of a <em>non displayed</em> element
       * @return {Number} Computed content height
       */
      getContentHeight: function getContentHeight(force) {
        return this._getContentHeight(force);
      },
      /**
       * Returns the content width of the first element in the collection.
       * This is the maximum width the element can use, excluding borders,
       * margins, padding or scroll bars.
       * @attach {qxWeb}
       * @param force {Boolean?false} When true also get the content width of a <em>non displayed</em> element
       * @return {Number} Computed content width
       */
      getContentWidth: function getContentWidth(force) {
        return this._getContentWidth(force);
      },
      /**
       * Shows any elements with "display: none" in the collection. If an element
       * was hidden by using the {@link #hide} method, its previous
       * "display" style value will be re-applied. Otherwise, the
       * default "display" value for the element type will be applied.
       *
       * @attach {qxWeb}
       * @return {qxWeb} The collection for chaining
       */
      show: function show() {
        this._forEachElementWrapped(function (item) {
          var currentVal = item.getStyle("display");
          var prevVal = item[0].$$qPrevDisp;
          var newVal;
          if (currentVal == "none") {
            if (prevVal && prevVal != "none") {
              newVal = prevVal;
            } else {
              var doc = qxWeb.getDocument(item[0]);
              newVal = qx.module.Css.__getDisplayDefault__P_179_2(item[0].tagName, doc);
            }
            item.setStyle("display", newVal);
            item[0].$$qPrevDisp = "none";
          }
        });
        return this;
      },
      /**
       * Hides all elements in the collection by setting their "display"
       * style to "none". The previous value is stored so it can be re-applied
       * when {@link #show} is called.
       *
       * @attach {qxWeb}
       * @return {qxWeb} The collection for chaining
       */
      hide: function hide() {
        this._forEachElementWrapped(function (item) {
          var prevStyle = item.getStyle("display");
          if (prevStyle !== "none") {
            item[0].$$qPrevDisp = prevStyle;
            item.setStyle("display", "none");
          }
        });
        return this;
      },
      /**
       * Returns the distance between the first element in the collection and its
       * offset parent
       *
       * @attach {qxWeb}
       * @return {Map} a map with the keys <code>left</code> and <code>top</code>
       * containing the distance between the elements
       */
      getPosition: function getPosition() {
        var obj = this[0];
        if (qx.dom.Node.isElement(obj)) {
          return qx.bom.element.Location.getPosition(obj);
        }
        return null;
      },
      /**
       * Returns the computed location of the given element in the context of the
       * document dimensions.
       *
       * Supported modes:
       *
       * * <code>margin</code>: Calculate from the margin box of the element (bigger than the visual appearance: including margins of given element)
       * * <code>box</code>: Calculates the offset box of the element (default, uses the same size as visible)
       * * <code>border</code>: Calculate the border box (useful to align to border edges of two elements).
       * * <code>scroll</code>: Calculate the scroll box (relevant for absolute positioned content).
       * * <code>padding</code>: Calculate the padding box (relevant for static/relative positioned content).
       *
       * @attach {qxWeb}
       * @param mode {String?box} A supported option. See comment above.
       * @return {Map} A map with the keys <code>left</code>, <code>top</code>,
       * <code>right</code> and <code>bottom</code> which contains the distance
       * of the element relative to the document.
       */
      getOffset: function getOffset(mode) {
        var elem = this[0];
        if (elem && qx.dom.Node.isElement(elem)) {
          return qx.bom.element.Location.get(elem, mode);
        }
        return null;
      },
      /**
       * Modifies the given style property on all elements in the collection.
       *
       * @attach {qxWeb}
       * @param name {String} Name of the style property to modify
       * @param value {var} The value to apply
       * @return {qxWeb} The collection for chaining
       */
      setStyle: function setStyle(name, value) {
        if (/\w-\w/.test(name)) {
          name = qx.lang.String.camelCase(name);
        }
        this._forEachElement(function (item) {
          qx.bom.element.Style.set(item, name, value);
        });
        return this;
      },
      /**
       * Returns the value of the given style property for the first item in the
       * collection.
       *
       * @attach {qxWeb}
       * @param name {String} Style property name
       * @return {var} Style property value
       */
      getStyle: function getStyle(name) {
        if (this[0] && qx.dom.Node.isElement(this[0])) {
          if (/\w-\w/.test(name)) {
            name = qx.lang.String.camelCase(name);
          }
          return qx.bom.element.Style.get(this[0], name);
        }
        return null;
      },
      /**
       * Sets multiple style properties for each item in the collection.
       *
       * @attach {qxWeb}
       * @param styles {Map} A map of style property name/value pairs
       * @return {qxWeb} The collection for chaining
       */
      setStyles: function setStyles(styles) {
        for (var name in styles) {
          this.setStyle(name, styles[name]);
        }
        return this;
      },
      /**
       * Returns the values of multiple style properties for each item in the
       * collection
       *
       * @attach {qxWeb}
       * @param names {String[]} List of style property names
       * @return {Map} Map of style property name/value pairs
       */
      getStyles: function getStyles(names) {
        var styles = {};
        for (var i = 0; i < names.length; i++) {
          styles[names[i]] = this.getStyle(names[i]);
        }
        return styles;
      },
      /**
       * Adds a class name to each element in the collection
       *
       * @attach {qxWeb}
       * @param name {String} Class name
       * @return {qxWeb} The collection for chaining
       */
      addClass: function addClass(name) {
        this._forEachElement(function (item) {
          qx.bom.element.Class.add(item, name);
        });
        return this;
      },
      /**
       * Adds multiple class names to each element in the collection
       *
       * @attach {qxWeb}
       * @param names {String[]} List of class names to add
       * @return {qxWeb} The collection for chaining
       */
      addClasses: function addClasses(names) {
        this._forEachElement(function (item) {
          qx.bom.element.Class.addClasses(item, names);
        });
        return this;
      },
      /**
       * Removes a class name from each element in the collection
       *
       * @attach {qxWeb}
       * @param name {String} The class name to remove
       * @return {qxWeb} The collection for chaining
       */
      removeClass: function removeClass(name) {
        this._forEachElement(function (item) {
          qx.bom.element.Class.remove(item, name);
        });
        return this;
      },
      /**
       * Removes multiple class names from each element in the collection.
       * Use {@link qx.module.Attribute#removeAttribute} to remove all classes.
       *
       * @attach {qxWeb}
       * @param names {String[]} List of class names to remove
       * @return {qxWeb} The collection for chaining
       */
      removeClasses: function removeClasses(names) {
        this._forEachElement(function (item) {
          qx.bom.element.Class.removeClasses(item, names);
        });
        return this;
      },
      /**
       * Checks if the first element in the collection has the given class name
       *
       * @attach {qxWeb}
       * @param name {String} Class name to check for
       * @return {Boolean} <code>true</code> if the first item has the given class name
       */
      hasClass: function hasClass(name) {
        if (!this[0] || !qx.dom.Node.isElement(this[0])) {
          return false;
        }
        return qx.bom.element.Class.has(this[0], name);
      },
      /**
       * Returns the class name of the first element in the collection
       *
       * @attach {qxWeb}
       * @return {String} Class name
       */
      getClass: function getClass() {
        if (!this[0] || !qx.dom.Node.isElement(this[0])) {
          return "";
        }
        return qx.bom.element.Class.get(this[0]);
      },
      /**
       * Toggles the given class name on each item in the collection
       *
       * @attach {qxWeb}
       * @param name {String} Class name
       * @return {qxWeb} The collection for chaining
       */
      toggleClass: function toggleClass(name) {
        var bCls = qx.bom.element.Class;
        this._forEachElement(function (item) {
          bCls.has(item, name) ? bCls.remove(item, name) : bCls.add(item, name);
        });
        return this;
      },
      /**
       * Toggles the given list of class names on each item in the collection
       *
       * @attach {qxWeb}
       * @param names {String[]} Class names
       * @return {qxWeb} The collection for chaining
       */
      toggleClasses: function toggleClasses(names) {
        for (var i = 0, l = names.length; i < l; i++) {
          this.toggleClass(names[i]);
        }
        return this;
      },
      /**
       * Replaces a class name on each element in the collection
       *
       * @attach {qxWeb}
       * @param oldName {String} Class name to remove
       * @param newName {String} Class name to add
       * @return {qxWeb} The collection for chaining
       */
      replaceClass: function replaceClass(oldName, newName) {
        this._forEachElement(function (item) {
          qx.bom.element.Class.replace(item, oldName, newName);
        });
        return this;
      }
    },
    defer: function defer(statics) {
      qxWeb.$attachAll(this);
      // manually attach private method which is ignored by attachAll
      qxWeb.$attach({
        _getWidth: statics._getWidth,
        _getHeight: statics._getHeight,
        _getContentHeight: statics._getContentHeight,
        _getContentWidth: statics._getContentWidth
      });
    }
  });
  qx.module.Css.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.lang.normalize.Array": {
        "require": true
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      }
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
       2007-2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
     ======================================================================
  
     This class uses ideas and code snippets presented at
     http://webreflection.blogspot.com/2008/05/habemus-array-unlocked-length-in-ie8.html
     http://webreflection.blogspot.com/2008/05/stack-and-arrayobject-how-to-create.html
  
     Author:
       Andrea Giammarchi
  
     License:
       MIT: http://www.opensource.org/licenses/mit-license.php
  
     ======================================================================
  
     This class uses documentation of the native Array methods from the MDC
     documentation of Mozilla.
  
     License:
       CC Attribution-Sharealike License:
       http://creativecommons.org/licenses/by-sa/2.5/
  
  ************************************************************************ */

  /**
   * This class is the common superclass for most array classes in
   * qooxdoo. It supports all of the shiny 1.6 JavaScript array features
   * like <code>forEach</code> and <code>map</code>.
   *
   * This class may be instantiated instead of the native Array if
   * one wants to work with a feature-unified Array instead of the native
   * one. This class uses native features whereever possible but fills
   * all missing implementations with custom ones.
   *
   * Through the ability to extend from this class one could add even
   * more utility features on top of it.
   *
   * @require(qx.bom.client.Engine)
   * @require(qx.lang.normalize.Array)
   */
  qx.Bootstrap.define("qx.type.BaseArray", {
    extend: Array,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * Creates a new Array with the given length or the listed elements.
     *
     * <pre class="javascript">
     * var arr1 = new qx.type.BaseArray(arrayLength);
     * var arr2 = new qx.type.BaseArray(item0, item1, ..., itemN);
     * </pre>
     *
     * * <code>arrayLength</code>: The initial length of the array. You can access
     * this value using the length property. If the value specified is not a
     * number, an array of length 1 is created, with the first element having
     * the specified value. The maximum length allowed for an
     * array is 2^32-1, i.e. 4,294,967,295.
     * * <code>itemN</code>:  A value for the element in that position in the
     * array. When this form is used, the array is initialized with the specified
     * values as its elements, and the array's length property is set to the
     * number of arguments.
     *
     * @param length_or_items {Integer|var?null} The initial length of the array
     *        OR an argument list of values.
     */
    construct: function construct(length_or_items) {},
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * Converts a base array to a native Array
       *
       * @signature function()
       * @return {Array} The native array
       */
      toArray: null,
      /**
       * Returns the current number of items stored in the Array
       *
       * @signature function()
       * @return {Integer} number of items
       */
      valueOf: null,
      /**
       * Removes the last element from an array and returns that element.
       *
       * This method modifies the array.
       *
       * @signature function()
       * @return {var} The last element of the array.
       */
      pop: null,
      /**
       * Adds one or more elements to the end of an array and returns the new length of the array.
       *
       * This method modifies the array.
       *
       * @signature function(varargs)
       * @param varargs {var} The elements to add to the end of the array.
       * @return {Integer} The new array's length
       */
      push: null,
      /**
       * Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
       *
       * This method modifies the array.
       *
       * @signature function()
       * @return {Array} Returns the modified array (works in place)
       */
      reverse: null,
      /**
       * Removes the first element from an array and returns that element.
       *
       * This method modifies the array.
       *
       * @signature function()
       * @return {var} The first element of the array.
       */
      shift: null,
      /**
       * Sorts the elements of an array.
       *
       * This method modifies the array.
       *
       * @signature function(compareFunction)
       * @param compareFunction {Function?null} Specifies a function that defines the sort order. If omitted,
       *   the array is sorted lexicographically (in dictionary order) according to the string conversion of each element.
       * @return {Array} Returns the modified array (works in place)
       */
      sort: null,
      /**
       * Adds and/or removes elements from an array.
       *
       * @signature function(index, howMany, varargs)
       * @param index {Integer} Index at which to start changing the array. If negative, will begin
       *   that many elements from the end.
       * @param howMany {Integer} An integer indicating the number of old array elements to remove.
       *   If <code>howMany</code> is 0, no elements are removed. In this case, you should specify
       *   at least one new element.
       * @param varargs {var?null} The elements to add to the array. If you don't specify any elements,
       *   splice simply removes elements from the array.
       * @return {qx.type.BaseArray} New array with the removed elements.
       */
      splice: null,
      /**
       * Adds one or more elements to the front of an array and returns the new length of the array.
       *
       * This method modifies the array.
       *
       * @signature function(varargs)
       * @param varargs {var} The elements to add to the front of the array.
       * @return {Integer} The new array's length
       */
      unshift: null,
      /**
       * Returns a new array comprised of this array joined with other array(s) and/or value(s).
       *
       * This method does not modify the array and returns a modified copy of the original.
       *
       * @signature function(varargs)
       * @param varargs {Array|var} Arrays and/or values to concatenate to the resulting array.
       * @return {qx.type.BaseArray} New array built of the given arrays or values.
       */
      concat: null,
      /**
       * Joins all elements of an array into a string.
       *
       * @signature function(separator)
       * @param separator {String} Specifies a string to separate each element of the array. The separator is
       *   converted to a string if necessary. If omitted, the array elements are separated with a comma.
       * @return {String} The stringified values of all elements divided by the given separator.
       */
      join: null,
      /**
       * Extracts a section of an array and returns a new array.
       *
       * @signature function(begin, end)
       * @param begin {Integer} Zero-based index at which to begin extraction. As a negative index, start indicates
       *   an offset from the end of the sequence. slice(-2) extracts the second-to-last element and the last element
       *   in the sequence.
       * @param end {Integer?length} Zero-based index at which to end extraction. slice extracts up to but not including end.
       *   <code>slice(1,4)</code> extracts the second element through the fourth element (elements indexed 1, 2, and 3).
       *   As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
       *   If end is omitted, slice extracts to the end of the sequence.
       * @return {qx.type.BaseArray} An new array which contains a copy of the given region.
       */
      slice: null,
      /**
       * Returns a string representing the array and its elements. Overrides the Object.prototype.toString method.
       *
       * @signature function()
       * @return {String} The string representation of the array.
       */
      toString: null,
      /**
       * Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
       *
       * @signature function(searchElement, fromIndex)
       * @param searchElement {var} Element to locate in the array.
       * @param fromIndex {Integer?0} The index at which to begin the search. Defaults to 0, i.e. the
       *   whole array will be searched. If the index is greater than or equal to the length of the
       *   array, -1 is returned, i.e. the array will not be searched. If negative, it is taken as
       *   the offset from the end of the array. Note that even when the index is negative, the array
       *   is still searched from front to back. If the calculated index is less than 0, the whole
       *   array will be searched.
       * @return {Integer} The index of the given element
       */
      indexOf: null,
      /**
       * Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
       *
       * @signature function(searchElement, fromIndex)
       * @param searchElement {var} Element to locate in the array.
       * @param fromIndex {Integer?length} The index at which to start searching backwards. Defaults to
       *   the array's length, i.e. the whole array will be searched. If the index is greater than
       *   or equal to the length of the array, the whole array will be searched. If negative, it
       *   is taken as the offset from the end of the array. Note that even when the index is
       *   negative, the array is still searched from back to front. If the calculated index is
       *   less than 0, -1 is returned, i.e. the array will not be searched.
       * @return {Integer} The index of the given element
       */
      lastIndexOf: null,
      /**
       * Executes a provided function once per array element.
       *
       * <code>forEach</code> executes the provided function (<code>callback</code>) once for each
       * element present in the array.  <code>callback</code> is invoked only for indexes of the array
       * which have assigned values; it is not invoked for indexes which have been deleted or which
       * have never been assigned values.
       *
       * <code>callback</code> is invoked with three arguments: the value of the element, the index
       * of the element, and the Array object being traversed.
       *
       * If a <code>obj</code> parameter is provided to <code>forEach</code>, it will be used
       * as the <code>this</code> for each invocation of the <code>callback</code>.  If it is not
       * provided, or is <code>null</code>, the global object associated with <code>callback</code>
       * is used instead.
       *
       * <code>forEach</code> does not mutate the array on which it is called.
       *
       * The range of elements processed by <code>forEach</code> is set before the first invocation of
       * <code>callback</code>.  Elements which are appended to the array after the call to
       * <code>forEach</code> begins will not be visited by <code>callback</code>. If existing elements
       * of the array are changed, or deleted, their value as passed to <code>callback</code> will be
       * the value at the time <code>forEach</code> visits them; elements that are deleted are not visited.
       *
       * @signature function(callback, obj)
       * @param callback {Function} Function to execute for each element.
       * @param obj {Object} Object to use as this when executing callback.
       */
      forEach: null,
      /**
       * Creates a new array with all elements that pass the test implemented by the provided
       * function.
       *
       * <code>filter</code> calls a provided <code>callback</code> function once for each
       * element in an array, and constructs a new array of all the values for which
       * <code>callback</code> returns a true value.  <code>callback</code> is invoked only
       * for indexes of the array which have assigned values; it is not invoked for indexes
       * which have been deleted or which have never been assigned values.  Array elements which
       * do not pass the <code>callback</code> test are simply skipped, and are not included
       * in the new array.
       *
       * <code>callback</code> is invoked with three arguments: the value of the element, the
       * index of the element, and the Array object being traversed.
       *
       * If a <code>obj</code> parameter is provided to <code>filter</code>, it will
       * be used as the <code>this</code> for each invocation of the <code>callback</code>.
       * If it is not provided, or is <code>null</code>, the global object associated with
       * <code>callback</code> is used instead.
       *
       * <code>filter</code> does not mutate the array on which it is called. The range of
       * elements processed by <code>filter</code> is set before the first invocation of
       * <code>callback</code>. Elements which are appended to the array after the call to
       * <code>filter</code> begins will not be visited by <code>callback</code>. If existing
       * elements of the array are changed, or deleted, their value as passed to <code>callback</code>
       * will be the value at the time <code>filter</code> visits them; elements that are deleted
       * are not visited.
       *
       * @signature function(callback, obj)
       * @param callback {Function} Function to test each element of the array.
       * @param obj {Object} Object to use as <code>this</code> when executing <code>callback</code>.
       * @return {qx.type.BaseArray} The newly created array with all matching elements
       */
      filter: null,
      /**
       * Creates a new array with the results of calling a provided function on every element in this array.
       *
       * <code>map</code> calls a provided <code>callback</code> function once for each element in an array,
       * in order, and constructs a new array from the results.  <code>callback</code> is invoked only for
       * indexes of the array which have assigned values; it is not invoked for indexes which have been
       * deleted or which have never been assigned values.
       *
       * <code>callback</code> is invoked with three arguments: the value of the element, the index of the
       * element, and the Array object being traversed.
       *
       * If a <code>obj</code> parameter is provided to <code>map</code>, it will be used as the
       * <code>this</code> for each invocation of the <code>callback</code>. If it is not provided, or is
       * <code>null</code>, the global object associated with <code>callback</code> is used instead.
       *
       * <code>map</code> does not mutate the array on which it is called.
       *
       * The range of elements processed by <code>map</code> is set before the first invocation of
       * <code>callback</code>. Elements which are appended to the array after the call to <code>map</code>
       * begins will not be visited by <code>callback</code>.  If existing elements of the array are changed,
       * or deleted, their value as passed to <code>callback</code> will be the value at the time
       * <code>map</code> visits them; elements that are deleted are not visited.
       *
       * @signature function(callback, obj)
       * @param callback {Function} Function produce an element of the new Array from an element of the current one.
       * @param obj {Object} Object to use as <code>this</code> when executing <code>callback</code>.
       * @return {qx.type.BaseArray} A new array which contains the return values of every item executed through the given function
       */
      map: null,
      /**
       * Tests whether some element in the array passes the test implemented by the provided function.
       *
       * <code>some</code> executes the <code>callback</code> function once for each element present in
       * the array until it finds one where <code>callback</code> returns a true value. If such an element
       * is found, <code>some</code> immediately returns <code>true</code>. Otherwise, <code>some</code>
       * returns <code>false</code>. <code>callback</code> is invoked only for indexes of the array which
       * have assigned values; it is not invoked for indexes which have been deleted or which have never
       * been assigned values.
       *
       * <code>callback</code> is invoked with three arguments: the value of the element, the index of the
       * element, and the Array object being traversed.
       *
       * If a <code>obj</code> parameter is provided to <code>some</code>, it will be used as the
       * <code>this</code> for each invocation of the <code>callback</code>. If it is not provided, or is
       * <code>null</code>, the global object associated with <code>callback</code> is used instead.
       *
       * <code>some</code> does not mutate the array on which it is called.
       *
       * The range of elements processed by <code>some</code> is set before the first invocation of
       * <code>callback</code>.  Elements that are appended to the array after the call to <code>some</code>
       * begins will not be visited by <code>callback</code>. If an existing, unvisited element of the array
       * is changed by <code>callback</code>, its value passed to the visiting <code>callback</code> will
       * be the value at the time that <code>some</code> visits that element's index; elements that are
       * deleted are not visited.
       *
       * @signature function(callback, obj)
       * @param callback {Function} Function to test for each element.
       * @param obj {Object} Object to use as <code>this</code> when executing <code>callback</code>.
       * @return {Boolean} Whether at least one elements passed the test
       */
      some: null,
      /**
       * Tests whether all elements in the array pass the test implemented by the provided function.
       *
       * <code>every</code> executes the provided <code>callback</code> function once for each element
       * present in the array until it finds one where <code>callback</code> returns a false value. If
       * such an element is found, the <code>every</code> method immediately returns <code>false</code>.
       * Otherwise, if <code>callback</code> returned a true value for all elements, <code>every</code>
       * will return <code>true</code>.  <code>callback</code> is invoked only for indexes of the array
       * which have assigned values; it is not invoked for indexes which have been deleted or which have
       * never been assigned values.
       *
       * <code>callback</code> is invoked with three arguments: the value of the element, the index of
       * the element, and the Array object being traversed.
       *
       * If a <code>obj</code> parameter is provided to <code>every</code>, it will be used as
       * the <code>this</code> for each invocation of the <code>callback</code>. If it is not provided,
       * or is <code>null</code>, the global object associated with <code>callback</code> is used instead.
       *
       * <code>every</code> does not mutate the array on which it is called. The range of elements processed
       * by <code>every</code> is set before the first invocation of <code>callback</code>. Elements which
       * are appended to the array after the call to <code>every</code> begins will not be visited by
       * <code>callback</code>.  If existing elements of the array are changed, their value as passed
       * to <code>callback</code> will be the value at the time <code>every</code> visits them; elements
       * that are deleted are not visited.
       *
       * @signature function(callback, obj)
       * @param callback {Function} Function to test for each element.
       * @param obj {Object} Object to use as <code>this</code> when executing <code>callback</code>.
       * @return {Boolean} Whether all elements passed the test
       */
      every: null
    }
  });
  (function () {
    function createStackConstructor(stack) {
      // In IE don't inherit from Array but use an empty object as prototype
      // and copy the methods from Array
      if (qx.core.Environment.get("engine.name") == "mshtml") {
        Stack.prototype = {
          length: 0,
          $$isArray: true
        };
        var args = "pop.push.reverse.shift.sort.splice.unshift.join.slice".split(".");
        for (var length = args.length; length;) {
          Stack.prototype[args[--length]] = Array.prototype[args[length]];
        }
      }

      // Remember Array's slice method
      var slice = Array.prototype.slice;

      // Fix "concat" method
      Stack.prototype.concat = function () {
        var constructor = this.slice(0);
        for (var i = 0, length = arguments.length; i < length; i++) {
          var copy;
          if (arguments[i] instanceof Stack) {
            copy = slice.call(arguments[i], 0);
          } else if (arguments[i] instanceof Array) {
            copy = arguments[i];
          } else {
            copy = [arguments[i]];
          }
          constructor.push.apply(constructor, copy);
        }
        return constructor;
      };

      // Fix "toString" method
      Stack.prototype.toString = function () {
        return slice.call(this, 0).toString();
      };

      // Fix "toLocaleString"
      Stack.prototype.toLocaleString = function () {
        return slice.call(this, 0).toLocaleString();
      };

      // Fix constructor
      Stack.prototype.constructor = Stack;

      // Add JS 1.6 Array features
      Stack.prototype.indexOf = Array.prototype.indexOf;
      Stack.prototype.lastIndexOf = Array.prototype.lastIndexOf;
      Stack.prototype.forEach = Array.prototype.forEach;
      Stack.prototype.some = Array.prototype.some;
      Stack.prototype.every = Array.prototype.every;
      var filter = Array.prototype.filter;
      var map = Array.prototype.map;

      // Fix methods which generates a new instance
      // to return an instance of the same class
      Stack.prototype.filter = function () {
        var ret = new this.constructor();
        ret.push.apply(ret, filter.apply(this, arguments));
        return ret;
      };
      Stack.prototype.map = function () {
        var ret = new this.constructor();
        ret.push.apply(ret, map.apply(this, arguments));
        return ret;
      };
      Stack.prototype.slice = function () {
        var ret = new this.constructor();
        ret.push.apply(ret, Array.prototype.slice.apply(this, arguments));
        return ret;
      };
      Stack.prototype.splice = function () {
        var ret = new this.constructor();
        ret.push.apply(ret, Array.prototype.splice.apply(this, arguments));
        return ret;
      };

      // Add new "toArray" method for convert a base array to a native Array
      Stack.prototype.toArray = function () {
        return Array.prototype.slice.call(this, 0);
      };

      // Add valueOf() to return the length
      Stack.prototype.valueOf = function () {
        return this.length;
      };

      // Return final class
      return Stack;
    }
    function Stack(length) {
      if (arguments.length === 1 && typeof length === "number") {
        this.length = -1 < length && length === length >> 0.5 ? length : this.push(length);
      } else if (arguments.length) {
        this.push.apply(this, arguments);
      }
    }
    function PseudoArray() {}
    PseudoArray.prototype = [];
    Stack.prototype = new PseudoArray();
    Stack.prototype.length = 0;
    qx.type.BaseArray = createStackConstructor(Stack);
  })();
  qx.type.BaseArray.$$dbClassInfo = $$dbClassInfo;
})();
//# sourceMappingURL=package-5.js.map?dt=1747169176163
qx.$$packageData['5'] = {
  "locales": {},
  "resources": {},
  "translations": {}
};
