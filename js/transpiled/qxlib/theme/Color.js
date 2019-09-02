(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Color": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  var ColorBlack = '#000000';
  var ColorBlue = '#517bbd';
  var ColorButtonHighlight = '#28608f';
  var ColorButtonPressed = '#204c73';
  var ColorButtonShadow = '#7a7a7a';
  var ColorControl = '#cdcdcd';
  var ColorControlDark = '#b9b9b9';
  var ColorControlLight = '#e5e5e5';
  var ColorControlText = '#5f5f5f';
  var ColorDarkBlue = '#385b94';
  var ColorDarkPurple = '#4d4c68';
  var ColorDarkRed = '#c34134';
  var ColorDarkYellow = '#f6af08';
  var ColorDarkerBlue = '#315081';
  var ColorFocusFrame = '#ffbe00';
  var ColorGreen = '#079c58';
  var ColorHighlight = '#298ae5';
  var ColorHotTrack = '#c1dcf1';
  var ColorIconDark = '#919191';
  var ColorIconDarkBlue = '#186ded';
  var ColorIconLightBlue = '#27a5fa';
  var ColorInactiveCaptionText = '#5b5b5b';
  var ColorInfo = '#97ccfe';
  var ColorLightBlue = '#6b8ec7';
  var ColorLightGray = "#bbb";
  var ColorLightPurple = '#808099';
  var ColorLighterBlue = '#90aad5';
  var ColorLighterPurple = '#9d9cb0';
  var ColorMask = 'rgba(255,255,255,0.51)';
  var ColorMenu = '#efefef';
  var ColorMenuText = '#2b2b2b';
  var ColorPurple = '#6a6983';
  var ColorRed = '#db4437';
  var ColorScrollBar = '#f0f0f0';
  var ColorSlateGray = "slategray";
  var ColorSuccess = "#1e7b34";
  var ColorTableRowBackgroundFocused = '#ddeeff';
  var ColorTableRowBackgroundFocusedSelected = '#5a8ad3';
  var ColorTableRowBackgroundOdd = '#ededed';
  var ColorTableRowBackgroundSelected = '#b3d9ff';
  var ColorTextPlaceholder = '#b5b5b5';
  var ColorWarning = "#cc9900";
  var ColorWhite = '#ffffff';
  var ColorWindowFrame = '#bdbfbf';
  var ColorWindowText = '#3f3f3f';
  var ColorYellow = '#fbbe0e';
  qx.Theme.define("qxlib.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {
      "activeBorder": ColorBlue,
      "activeCaption": ColorBlue,
      "activeCaptionText": ColorWhite,
      "appWorkspace": ColorBlack,
      "buttonFace": ColorDarkBlue,
      "buttonHighlight": ColorButtonHighlight,
      "buttonPressed": ColorButtonPressed,
      "buttonSelected": ColorHotTrack,
      "buttonShadow": ColorButtonShadow,
      "buttonText": ColorWhite,
      "control": ColorControl,
      "controlDark": ColorControlDark,
      "controlLight": ColorControlLight,
      "controlText": ColorControlText,
      "focusFrame": ColorFocusFrame,
      "gradientActiveCaption": ColorBlack,
      "gradientInactiveCaption": ColorBlack,
      "grayText": ColorControl,
      "highlight": ColorHighlight,
      "highlightText": ColorWhite,
      "hotTrack": ColorHotTrack,
      "iconDark": ColorIconDark,
      "iconLight": ColorWhite,
      "iconLightSelected": ColorBlack,
      "inactiveBorder": ColorLightBlue,
      "inactiveCaption": ColorLightBlue,
      "inactiveCaptionText": ColorInactiveCaptionText,
      "info": ColorInfo,
      "infoText": ColorWhite,
      "invalid": ColorRed,
      "loaderBackground": ColorMask,
      "menu": ColorMenu,
      "menuBar": ColorMenu,
      "menuHighlight": ColorHotTrack,
      "menuSelected": ColorHighlight,
      "menuHighlightText": ColorWindowText,
      "menuSelectedText": ColorWhite,
      "menuText": ColorMenuText,
      "modalMask": ColorMask,
      "qxdesktop": ColorWhite,
      "scrollBar": ColorScrollBar,
      "table-column-line": ColorWindowFrame,
      "table-row": ColorControlText,
      "table-row-background": ColorWhite,
      "table-row-background-even": ColorWhite,
      "table-row-background-focused-selected": ColorTableRowBackgroundFocusedSelected,
      "table-row-background-focused": ColorTableRowBackgroundFocused,
      "table-row-background-odd": ColorTableRowBackgroundOdd,
      "table-row-background-selected": ColorTableRowBackgroundSelected,
      "table-row-line": ColorWindowFrame,
      "table-row-selected": ColorWindowText,
      "text-placeholder": ColorTextPlaceholder,
      "tabFace": ColorWhite,
      "tabHighlight": ColorTableRowBackgroundFocused,
      "tabHighlightText": ColorWindowText,
      "tabSelected": ColorBlue,
      "tabSelectedText": ColorWhite,
      "tabText": ColorWindowText,
      "toolbar": ColorMenu,
      "toolbarText": ColorMenuText,
      "window": ColorWhite,
      "windowFrame": ColorWindowFrame,
      "windowText": ColorWindowText
    }
  });
  qxlib.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Color.js.map?dt=1566750092747