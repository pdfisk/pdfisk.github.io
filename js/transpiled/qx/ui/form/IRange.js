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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * Form interface for all widgets which deal with ranges. The spinner is a good
   * example for a range using widget.
   */
  qx.Interface.define("qx.ui.form.IRange", {
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      /*
      ---------------------------------------------------------------------------
        MINIMUM PROPERTY
      ---------------------------------------------------------------------------
      */

      /**
       * Set the minimum value of the range.
       *
       * @param min {Number} The minimum.
       */
      setMinimum: function setMinimum(min) {
        return arguments.length == 1;
      },

      /**
       * Return the current set minimum of the range.
       *
       * @return {Number} The current set minimum.
       */
      getMinimum: function getMinimum() {},

      /*
      ---------------------------------------------------------------------------
        MAXIMUM PROPERTY
      ---------------------------------------------------------------------------
      */

      /**
       * Set the maximum value of the range.
       *
       * @param max {Number} The maximum.
       */
      setMaximum: function setMaximum(max) {
        return arguments.length == 1;
      },

      /**
       * Return the current set maximum of the range.
       *
       * @return {Number} The current set maximum.
       */
      getMaximum: function getMaximum() {},

      /*
      ---------------------------------------------------------------------------
        SINGLESTEP PROPERTY
      ---------------------------------------------------------------------------
      */

      /**
       * Sets the value for single steps in the range.
       *
       * @param step {Number} The value of the step.
       */
      setSingleStep: function setSingleStep(step) {
        return arguments.length == 1;
      },

      /**
       * Returns the value which will be stepped in a single step in the range.
       *
       * @return {Number} The current value for single steps.
       */
      getSingleStep: function getSingleStep() {},

      /*
      ---------------------------------------------------------------------------
        PAGESTEP PROPERTY
      ---------------------------------------------------------------------------
      */

      /**
       * Sets the value for page steps in the range.
       *
       * @param step {Number} The value of the step.
       */
      setPageStep: function setPageStep(step) {
        return arguments.length == 1;
      },

      /**
       * Returns the value which will be stepped in a page step in the range.
       *
       * @return {Number} The current value for page steps.
       */
      getPageStep: function getPageStep() {}
    }
  });
  qx.ui.form.IRange.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=IRange.js.map?dt=1566750116044