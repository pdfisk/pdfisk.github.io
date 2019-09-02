/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2019
 * @compiler Bridge.NET 17.9.0
 */
Bridge.assembly("VistaLibQx", function ($asm, globals) {
    "use strict";

    Bridge.define("VistaLibQx.qx.constants.Colors", {
        statics: {
            fields: {
                ColorBlack: null,
                ColorBlue: null,
                ColorButtonHighlight: null,
                ColorButtonPressed: null,
                ColorButtonShadow: null,
                ColorControl: null,
                ColorControlDark: null,
                ColorControlLight: null,
                ColorControlText: null,
                ColorDarkBlue: null,
                ColorDarkPurple: null,
                ColorDarkRed: null,
                ColorDarkYellow: null,
                ColorDarkerBlue: null,
                ColorFocusFrame: null,
                ColorGreen: null,
                ColorHighlight: null,
                ColorHotTrack: null,
                ColorIconDark: null,
                ColorIconDarkBlue: null,
                ColorIconLightBlue: null,
                ColorInactiveCaptionText: null,
                ColorInfo: null,
                ColorLightBlue: null,
                ColorLightGray: null,
                ColorLightPurple: null,
                ColorLighterBlue: null,
                ColorLighterPurple: null,
                ColorMask: null,
                ColorMenu: null,
                ColorMenuText: null,
                ColorPurple: null,
                ColorRed: null,
                ColorScrollBar: null,
                ColorSlateGray: null,
                ColorSuccess: null,
                ColorTableRowBackgroundFocused: null,
                ColorTableRowBackgroundFocusedSelected: null,
                ColorTableRowBackgroundOdd: null,
                ColorTableRowBackgroundSelected: null,
                ColorTextPlaceholder: null,
                ColorWarning: null,
                ColorWhite: null,
                ColorWindowFrame: null,
                ColorWindowText: null,
                ColorYellow: null
            },
            ctors: {
                init: function () {
                    this.ColorBlack = "#000000";
                    this.ColorBlue = "#517bbd";
                    this.ColorButtonHighlight = "#28608f";
                    this.ColorButtonPressed = "#204c73";
                    this.ColorButtonShadow = "#7a7a7a";
                    this.ColorControl = "#cdcdcd";
                    this.ColorControlDark = "#b9b9b9";
                    this.ColorControlLight = "#e5e5e5";
                    this.ColorControlText = "#5f5f5f";
                    this.ColorDarkBlue = "#385b94";
                    this.ColorDarkPurple = "#4d4c68";
                    this.ColorDarkRed = "#c34134";
                    this.ColorDarkYellow = "#f6af08";
                    this.ColorDarkerBlue = "#315081";
                    this.ColorFocusFrame = "#ffbe00";
                    this.ColorGreen = "#079c58";
                    this.ColorHighlight = "#298ae5";
                    this.ColorHotTrack = "#c1dcf1";
                    this.ColorIconDark = "#919191";
                    this.ColorIconDarkBlue = "#186ded";
                    this.ColorIconLightBlue = "#27a5fa";
                    this.ColorInactiveCaptionText = "#5b5b5b";
                    this.ColorInfo = "#97ccfe";
                    this.ColorLightBlue = "#6b8ec7";
                    this.ColorLightGray = "#bbb";
                    this.ColorLightPurple = "#808099";
                    this.ColorLighterBlue = "#90aad5";
                    this.ColorLighterPurple = "#9d9cb0";
                    this.ColorMask = "rgba(255,255,255,0.51)";
                    this.ColorMenu = "#efefef";
                    this.ColorMenuText = "#2b2b2b";
                    this.ColorPurple = "#6a6983";
                    this.ColorRed = "#db4437";
                    this.ColorScrollBar = "#f0f0f0";
                    this.ColorSlateGray = "#708090";
                    this.ColorSuccess = "#1e7b34";
                    this.ColorTableRowBackgroundFocused = "#ddeeff";
                    this.ColorTableRowBackgroundFocusedSelected = "#5a8ad3";
                    this.ColorTableRowBackgroundOdd = "#ededed";
                    this.ColorTableRowBackgroundSelected = "#b3d9ff";
                    this.ColorTextPlaceholder = "#b5b5b5";
                    this.ColorWarning = "#cc9900";
                    this.ColorWhite = "#ffffff";
                    this.ColorWindowFrame = "#bdbfbf";
                    this.ColorWindowText = "#3f3f3f";
                    this.ColorYellow = "#fbbe0e";
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.constants.DesktopConstants", {
        statics: {
            fields: {
                NavbarBackgroundColor: null,
                NavbarHeight: 0,
                NavbarPadding: null,
                NavbarPythonImageMargins: null,
                NavbarPythonImageSize: 0,
                NavbarPythonImageSource: null,
                NavbarPythonText: null,
                NavbarPythonTextHeight: 0,
                NavbarVistaLogoHeight: 0,
                NavbarVistaLogoSource: null,
                NavbarVistaLogoWidth: 0,
                TranscriptLeftInset: 0,
                TranscriptTopInset: 0
            },
            ctors: {
                init: function () {
                    this.NavbarBackgroundColor = "#90aad5";
                    this.NavbarHeight = 50;
                    this.NavbarPadding = System.Array.init([10, 35], System.Int32);
                    this.NavbarPythonImageMargins = System.Array.init([3, 0], System.Int32);
                    this.NavbarPythonImageSize = 30;
                    this.NavbarPythonImageSource = "images/ppython.png";
                    this.NavbarPythonText = "PYTHON";
                    this.NavbarPythonTextHeight = 32;
                    this.NavbarVistaLogoHeight = VistaLibQx.qx.constants.DesktopConstants.NavbarPythonTextHeight;
                    this.NavbarVistaLogoSource = "images/vista_option.png";
                    this.NavbarVistaLogoWidth = 95;
                    this.TranscriptLeftInset = 15;
                    this.TranscriptTopInset = (VistaLibQx.qx.constants.DesktopConstants.NavbarHeight + VistaLibQx.qx.constants.DesktopConstants.TranscriptLeftInset) | 0;
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.constants.Dimensions", {
        statics: {
            fields: {
                NavbarFillerAdjust: 0,
                NavbarPadding: null,
                StatusBarHeight: 0
            },
            ctors: {
                init: function () {
                    this.NavbarFillerAdjust = 50;
                    this.NavbarPadding = System.Array.init([0, 7], System.Int32);
                    this.StatusBarHeight = 20;
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.constants.Fonts", {
        statics: {
            fields: {
                FontAudiowide: null,
                FontUbuntu: null
            },
            ctors: {
                init: function () {
                    this.FontAudiowide = "Audiowide";
                    this.FontUbuntu = "Ubuntu";
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.constants.UiConstants", {
        statics: {
            fields: {
                UiVersion: null
            },
            ctors: {
                init: function () {
                    this.UiVersion = "UI version 1.0.0 2018-Sep-09 11:00 am";
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.core.Qobject", {
        statics: {
            methods: {
                PrintConsoleLog: function (messages) {
                    window.console.log.apply(null, messages);
                }
            }
        },
        fields: {
            _qxClass: null,
            NativeObject: null
        },
        props: {
            WindowHeight: {
                get: function () {
                    var $window = window;
                    return $window.innerHeight;
                }
            },
            WindowWidth: {
                get: function () {
                    var $window = window;
                    return $window.innerWidth;
                }
            }
        },
        ctors: {
            ctor: function (qxClass) {
                if (qxClass === void 0) { qxClass = null; }

                this.$initialize();
                this._qxClass = qxClass;
                this.BaseInit();
            }
        },
        methods: {
            AddListener: function (eventName, fn) {
                this.NativeObject.addListener(eventName, fn);
            },
            AfterInit: function () { },
            AsString: function (o) {
                return System.String.format("{0}", [o]);
            },
            BaseInit: function () {
                this.Init();
                this.AfterInit();
            },
            Init: function () {
                var $t;
                this.NativeObject = this.Create(($t = this._qxClass, $t != null ? $t : this.QxClass()));
            },
            Create: function (className) {
                return qxlib.app.App.createWidget(className, this.CreationArgs());
            },
            CreationArgs: function () {
                return null;
            },
            PerformAction: function (action) {
                return this.PerformAction$1(action, System.Array.init([], System.Object));
            },
            PerformAction$1: function (action, args) {
                return false;
            },
            PrintLog: function (messages) {
                if (messages === void 0) { messages = []; }
                VistaLibQx.qx.core.Qobject.PrintConsoleLog(messages);
            },
            QxClass: function () {
                return "qx.core.Object";
            },
            Set: function (name, obj) {
                var fullName = System.String.format("window.{0}", [name]);
                fullName = obj;
            },
            SetGlobalX: function (x) {
                this.Set("X", x);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.interfaces.IAppApi", {
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.qx.interfaces.IDecorate", {
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.qx.interfaces.IVmApi", {
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.qx.interfaces.IFilesApi", {
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.qx.interfaces.IFileDisplay", {
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.qx.interfaces.IServerApi", {
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.qx.interfaces.ITextValue", {
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.util.IEventHandler", {
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.util.Base64", {
        statics: {
            methods: {
                Encode: function (plainText) {
                    var plainTextBytes = System.Text.Encoding.UTF8.GetBytes$2(plainText);
                    return System.Convert.toBase64String(plainTextBytes, null, null, null);
                },
                Decode: function (base64EncodedData) {
                    var base64Str;
                    if (System.String.startsWith(base64EncodedData, "b'")) {
                        base64Str = base64EncodedData.substr(2, ((base64EncodedData.length - 3) | 0));
                    } else {
                        base64Str = base64EncodedData;
                    }
                    var base64EncodedBytes = System.Convert.fromBase64String(base64Str);
                    return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
                }
            }
        }
    });

    Bridge.define("VistaLibQx.util.ButtonConfig", {
        fields: {
            _eventName: null,
            _flex: 0,
            _handler: null,
            _label: null,
            _width: 0
        },
        props: {
            EventName: {
                get: function () {
                    return this._eventName;
                },
                set: function (value) {
                    this._eventName = value;
                }
            },
            Flex: {
                get: function () {
                    return this._flex;
                },
                set: function (value) {
                    this._flex = value;
                }
            },
            Handler: {
                get: function () {
                    return this._handler;
                },
                set: function (value) {
                    this._handler = value;
                }
            },
            Label: {
                get: function () {
                    return this._label;
                },
                set: function (value) {
                    this._label = value;
                }
            },
            Width: {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    this._width = value;
                }
            }
        },
        ctors: {
            ctor: function (flex, width) {
                if (width === void 0) { width = 0; }

                this.$initialize();
                this._flex = flex;
                this._width = width;
            },
            $ctor1: function (label, handler) {
                this.$initialize();
                this.Label = label;
                this.Handler = handler;
                this.EventName = System.String.format("on_{0}", [System.String.replaceAll(this.Label.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95))]);
            },
            $ctor2: function (label, handler, eventName) {
                this.$initialize();
                this.Label = label;
                this.Handler = handler;
                this.EventName = eventName;
            }
        }
    });

    Bridge.define("VistaLibQx.util.HtmlWriter", {
        fields: {
            _sb: null,
            _tagStack: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this._sb = new System.Text.StringBuilder();
                this._tagStack = new (System.Collections.Generic.Stack$1(System.String)).ctor();
            }
        },
        methods: {
            Newline: function () {
                this._sb.appendLine("<br>");
                return this;
            },
            Pr: function (s) {
                this._sb.append(s);
                return this;
            },
            PrintBold: function (s) {
                return this.PrintSimpleTag("b", s);
            },
            PrintItalic: function (s) {
                return this.PrintSimpleTag("i", s);
            },
            PrintLn: function (s) {
                this.Pr(s);
                this.Newline();
                return this;
            },
            PrintParagraph: function (p) {
                return this.PrnSimpleTag("p", p);
            },
            PrintParagraphs: function (plist) {
                var $t;
                if (plist === void 0) { plist = []; }
                $t = Bridge.getEnumerator(plist);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current;
                        this.PrintParagraph(p);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return this;
            },
            PrintSimpleTag: function (tag, content) {
                this.PrnSimpleTag(tag, content);
                this.Newline();
                return this;
            },
            Prn: function (s) {
                this._sb.appendLine(s);
                return this;
            },
            PrnSimpleTag: function (tag, content) {
                var s = System.String.format("<{0}>{1}</{0}>", tag, content);
                this.Prn(s);
                return this;
            },
            Space: function () {
                this._sb.append(String.fromCharCode(32));
                return this;
            },
            toString: function () {
                return this._sb.toString();
            }
        }
    });

    Bridge.define("VistaLibQx.util.Json", {
        statics: {
            fields: {
                _nativeJson: null
            },
            props: {
                NativeJson: {
                    get: function () {
                        if (VistaLibQx.util.Json._nativeJson == null) {
                            VistaLibQx.util.Json._nativeJson = window.JSON;
                        }
                        return VistaLibQx.util.Json._nativeJson;
                    }
                }
            },
            methods: {
                Decode: function (jsonString) {
                    try {
                        return VistaLibQx.util.Json.NativeJson.parse(jsonString);
                    } catch (e) {
                        e = System.Exception.create(e);
                        return e.Message;
                    }
                },
                Encode: function (obj) {
                    return VistaLibQx.util.Json.NativeJson.stringify(obj);
                }
            }
        }
    });

    Bridge.define("VistaLibQx.util.ParseUtil", {
        statics: {
            methods: {
                ParseClassDef: function (class_def) {
                    var match = System.Text.RegularExpressions.Regex.match(class_def, "class\\s+([A-Z][A-Za-z0-9_]*)\\s*\\(\\s*([A-Z][A-Za-z0-9_]*)\\s*\\)\\s*");
                    if (match.getSuccess()) {
                        return System.Array.init([match.getGroups().get(1).getValue(), match.getGroups().get(2).getValue()], System.String);
                    } else {
                        return System.Array.init([], System.String);
                    }
                }
            }
        }
    });

    Bridge.define("VistaLibQx.util.StringUtil", {
        statics: {
            methods: {
                AsAscii: function (text) {
                    return System.Text.RegularExpressions.Regex.replace(text, "[^\\u0000-\\u007F]+", "");
                }
            }
        }
    });

    Bridge.define("VistaLibQx.util.StyleUtil", {
        statics: {
            methods: {
                SetCss: function (widget, cssStr) {
                    window.qx.bom.element.Style.setCss(widget.GetContentElement().NativeObject, cssStr);
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.html.Element", {
        inherits: [VistaLibQx.qx.core.Qobject],
        fields: {
            _domElement: null
        },
        ctors: {
            ctor: function (element) {
                this.$initialize();
                VistaLibQx.qx.core.Qobject.ctor.call(this);
                this.NativeObject = element;
            }
        },
        methods: {
            EnsureDomElement: function () {
                if (this._domElement == null) {
                    this._domElement = this.NativeObject.getDomElement();
                }
            },
            GetDomElement: function () {
                this.EnsureDomElement();
                return this._domElement;
            },
            GetScrollHeight: function () {
                this.EnsureDomElement();
                if (this._domElement == null) {
                    return 0;
                } else {
                    return this._domElement.scrollHeight;
                }
            },
            ScrollTo: function (scroll) {
                this.EnsureDomElement();
                if (this._domElement != null) {
                    this._domElement.scrollTo(0, scroll);
                }
            },
            ScrollToBottom: function () {
                this.ScrollTo(this.GetScrollHeight());
            },
            SetStyle: function (key, value) {
                this.NativeObject.setStyle(key, value);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.interfaces.IDesktopApi", {
        inherits: [VistaLibQx.qx.interfaces.IAppApi,VistaLibQx.qx.interfaces.IFilesApi,VistaLibQx.qx.interfaces.IVmApi],
        $kind: "interface"
    });

    Bridge.define("VistaLibQx.qx.io.request.AbstractRequest", {
        inherits: [VistaLibQx.qx.core.Qobject],
        fields: {
            _contentType: null,
            _requestData: null,
            _url: null
        },
        props: {
            ContentType: {
                get: function () {
                    return this._contentType;
                },
                set: function (value) {
                    this._contentType = value;
                    this.NativeObject.setRequestHeader("Content-Type", this._contentType);
                }
            },
            Response: {
                get: function () {
                    return this.NativeObject.getResponse();
                }
            },
            ResponseJson: {
                get: function () {
                    return VistaLibQx.util.Json.Decode(this.ResponseText);
                }
            },
            ResponseText: {
                get: function () {
                    return this.NativeObject.getResponseText();
                }
            },
            RequestData: {
                get: function () {
                    return this._requestData;
                },
                set: function (value) {
                    this._requestData = value;
                    this.NativeObject.setRequestData(this._requestData);
                }
            },
            Url: {
                get: function () {
                    return this._url;
                },
                set: function (value) {
                    this._url = value;
                    this.NativeObject.setUrl(this._url);
                }
            }
        },
        methods: {
            Send: function () {
                this.NativeObject.send();
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.core.LayoutItem", {
        inherits: [VistaLibQx.qx.core.Qobject],
        fields: {
            _height: 0,
            _marginBottom: 0,
            _marginLeft: 0,
            _marginRight: 0,
            _marginTop: 0,
            _parent: null,
            _width: 0
        },
        props: {
            Height: {
                get: function () {
                    return this._height;
                },
                set: function (value) {
                    this._height = value;
                    if (this._height >= 0) {
                        this.NativeObject.setHeight(this._height);
                    }
                }
            },
            MarginBottom: {
                get: function () {
                    return this._marginBottom;
                },
                set: function (value) {
                    this._marginBottom = value;
                    if (this._marginBottom >= 0) {
                        this.NativeObject.setMarginBottom(this._marginBottom);
                    }
                }
            },
            MarginLeft: {
                get: function () {
                    return this._marginLeft;
                },
                set: function (value) {
                    this._marginLeft = value;
                    if (this._marginLeft >= 0) {
                        this.NativeObject.setMarginLeft(this._marginLeft);
                    }
                }
            },
            MarginRight: {
                get: function () {
                    return this._marginRight;
                },
                set: function (value) {
                    this._marginRight = value;
                    if (this._marginRight >= 0) {
                        this.NativeObject.setMarginRight(this._marginRight);
                    }
                }
            },
            MarginTop: {
                get: function () {
                    return this._marginTop;
                },
                set: function (value) {
                    this._marginTop = value;
                    if (this._marginTop >= 0) {
                        this.NativeObject.setMarginTop(this._marginTop);
                    }
                }
            },
            Parent: {
                get: function () {
                    return this._parent;
                },
                set: function (value) {
                    this._parent = value;
                }
            },
            Width: {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    this._width = value;
                    if (this._width >= 0) {
                        this.NativeObject.setWidth(this._width);
                    }
                }
            }
        },
        ctors: {
            ctor: function (qxClass) {
                if (qxClass === void 0) { qxClass = null; }

                this.$initialize();
                VistaLibQx.qx.core.Qobject.ctor.call(this, qxClass);
            }
        },
        methods: {
            DefaultHeight: function () {
                return this.DefaultSize();
            },
            DefaultMarginBottom: function () {
                return -1;
            },
            DefaultMarginLeft: function () {
                return -1;
            },
            DefaultMarginRight: function () {
                return -1;
            },
            DefaultMarginTop: function () {
                return -1;
            },
            DefaultSize: function () {
                return -1;
            },
            DefaultWidth: function () {
                return this.DefaultSize();
            },
            Init: function () {
                VistaLibQx.qx.core.Qobject.prototype.Init.call(this);
                this.Height = this.DefaultHeight();
                this.Width = this.DefaultWidth();
                this.MarginBottom = this.DefaultMarginBottom();
                this.MarginLeft = this.DefaultMarginLeft();
                this.MarginRight = this.DefaultMarginRight();
                this.MarginTop = this.DefaultMarginTop();
            },
            OnParentResize: function () { },
            QxClass: function () {
                return "qx.ui.core.LayoutItem";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.decoration.AbstractDecoration", {
        inherits: [VistaLibQx.qx.core.Qobject]
    });

    Bridge.define("VistaLibQx.qx.ui.layout.Abstract", {
        inherits: [VistaLibQx.qx.core.Qobject]
    });

    Bridge.define("VistaLibQx.qx.ui.menu.Manager", {
        inherits: [VistaLibQx.qx.core.Qobject],
        methods: {
            QxClass: function () {
                return "qx.ui.menu.Manager";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.table.AbstractTableModel", {
        inherits: [VistaLibQx.qx.core.Qobject],
        methods: {
            SetData: function (data) { },
            QxClass: function () {
                return "qx.ui.table.model.Abstract";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.table.BasicColumnModel", {
        inherits: [VistaLibQx.qx.core.Qobject],
        methods: {
            QxClass: function () {
                return "qx.ui.table.model.Abstract";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.util.TextMeasure", {
        inherits: [VistaLibQx.qx.core.Qobject],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (VistaLibQx.qx.ui.util.TextMeasure._instance == null) {
                            VistaLibQx.qx.ui.util.TextMeasure._instance = new VistaLibQx.qx.ui.util.TextMeasure();
                        }

                        return VistaLibQx.qx.ui.util.TextMeasure._instance;
                    }
                }
            },
            methods: {
                GetWidth: function (text, fontFamily, fontSize) {
                    return VistaLibQx.qx.ui.util.TextMeasure.Instance.MeasureText(text, fontFamily, fontSize);
                }
            }
        },
        fields: {
            _canvas: null,
            _ctx: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                VistaLibQx.qx.core.Qobject.ctor.call(this);
                this._canvas = document.createElement("canvas");
                this._ctx = this._canvas.getContext("2d");
            }
        },
        methods: {
            MeasureText: function (text, fontFamily, fontSize) {
                this._ctx.font = System.String.format("{0} '{1}'", fontSize, fontFamily);
                return this._ctx.measureText(text).width;
            }
        }
    });

    Bridge.define("VistaLibQx.util.NewsWriter", {
        inherits: [VistaLibQx.util.HtmlWriter],
        methods: {
            Generate: function () { },
            CloseNewsItem: function () {
                this.Newline();
                this.Newline();
            },
            OpenNewsItem: function (subject, date) {
                this.PrintBold(subject);
                this.PrintItalic(System.DateTime.format(date, "ddd, dd MMM yyyy HH:mm:ss UTC"));
            }
        }
    });

    Bridge.define("VistaLibQx.qx.io.request.Xhr", {
        inherits: [VistaLibQx.qx.io.request.AbstractRequest],
        fields: {
            _method: null
        },
        props: {
            Method: {
                get: function () {
                    return this._method;
                },
                set: function (value) {
                    this._method = value;
                    this.NativeObject.setMethod(this._method);
                }
            }
        },
        methods: {
            QxClass: function () {
                return "qx.io.request.Xhr";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.core.Widget", {
        inherits: [VistaLibQx.qx.ui.core.LayoutItem,VistaLibQx.util.IEventHandler],
        fields: {
            _backgroundColor: null,
            _contentElement: null,
            _decorator: null,
            _hasResized: false,
            _margins: null,
            _padding: null,
            _textColor: null
        },
        props: {
            BackgroundColor: {
                get: function () {
                    return this._backgroundColor;
                },
                set: function (value) {
                    this._backgroundColor = value;
                    if (this._backgroundColor.length > 0) {
                        this.NativeObject.setBackgroundColor(this._backgroundColor);
                    }
                }
            },
            Decorator: {
                get: function () {
                    return this._decorator;
                },
                set: function (value) {
                    this._decorator = value;
                    if (this._decorator != null) {
                        this.NativeObject.setDecorator(this._decorator.NativeObject);
                    }
                }
            },
            Enabled: {
                get: function () {
                    return this.NativeObject.getEnabled();
                },
                set: function (value) {
                    this.NativeObject.setEnabled(value);
                }
            },
            HasResized: {
                get: function () {
                    return this._hasResized;
                }
            },
            InnerHeight: {
                get: function () {
                    return this.NativeObject.getInnerSize().height;
                }
            },
            InnerWidth: {
                get: function () {
                    return this.NativeObject.getInnerSize().width;
                }
            },
            Margins: {
                get: function () {
                    return this._margins;
                },
                set: function (value) {
                    this._margins = value;
                    switch (this._margins.length) {
                        case 1: 
                            this.NativeObject.setMargin(this._margins[System.Array.index(0, this._margins)]);
                            break;
                        case 2: 
                            this.NativeObject.setMargin(this._margins[System.Array.index(0, this._margins)], this._margins[System.Array.index(1, this._margins)]);
                            break;
                        case 3: 
                            this.NativeObject.setMargin(this._margins[System.Array.index(0, this._margins)], this._margins[System.Array.index(1, this._margins)], this._margins[System.Array.index(2, this._margins)]);
                            break;
                        case 4: 
                            this.NativeObject.setMargin(this._margins[System.Array.index(0, this._margins)], this._margins[System.Array.index(1, this._margins)], this._margins[System.Array.index(2, this._margins)], this._margins[System.Array.index(3, this._margins)]);
                            break;
                    }
                }
            },
            Padding: {
                get: function () {
                    return this._padding;
                },
                set: function (value) {
                    this._padding = value;
                    switch (this._padding.length) {
                        case 1: 
                            this.NativeObject.setPadding(this._padding[System.Array.index(0, this._padding)]);
                            break;
                        case 2: 
                            this.NativeObject.setPadding(this._padding[System.Array.index(0, this._padding)], this._padding[System.Array.index(1, this._padding)]);
                            break;
                        case 3: 
                            this.NativeObject.setPadding(this._padding[System.Array.index(0, this._padding)], this._padding[System.Array.index(1, this._padding)], this._padding[System.Array.index(2, this._padding)]);
                            break;
                        case 4: 
                            this.NativeObject.setPadding(this._padding[System.Array.index(0, this._padding)], this._padding[System.Array.index(1, this._padding)], this._padding[System.Array.index(2, this._padding)], this._padding[System.Array.index(3, this._padding)]);
                            break;
                    }
                }
            },
            StyleFontFamily: {
                set: function (value) {
                    this.SetStyle("fontFamily", value);
                }
            },
            StyleFontSize: {
                set: function (value) {
                    this.SetStyle("fontSize", value);
                }
            },
            StyleTextAlign: {
                set: function (value) {
                    this.SetStyle("textAlign", value);
                }
            },
            TextColor: {
                get: function () {
                    return this._textColor;
                },
                set: function (value) {
                    this._textColor = value;
                    if (this._textColor.length > 0) {
                        this.NativeObject.setTextColor(this._textColor);
                    }
                }
            }
        },
        alias: ["HandleEvent", "VistaLibQx$util$IEventHandler$HandleEvent"],
        ctors: {
            ctor: function (qxClass) {
                if (qxClass === void 0) { qxClass = null; }

                this.$initialize();
                VistaLibQx.qx.ui.core.LayoutItem.ctor.call(this, qxClass);
            }
        },
        methods: {
            AddContent: function () { },
            AfterFirstResize: function () {
                this._hasResized = true;
                this.SetStyles();
            },
            AfterInit: function () {
                this.AddContent();
            },
            Decorate: function (decorateImplementor) {
                decorateImplementor.VistaLibQx$qx$interfaces$IDecorate$Decorate(this);
                return this;
            },
            DefaultBackgroundColor: function () {
                return "";
            },
            DefaultDecorator: function () {
                return null;
            },
            DefaultMargins: function () {
                return System.Array.init([], System.Int32);
            },
            DefaultPadding: function () {
                return System.Array.init([], System.Int32);
            },
            DefaultShow: function () {
                return false;
            },
            DefaultTextColor: function () {
                return "";
            },
            GetContentElement: function () {
                if (this._contentElement == null) {
                    this._contentElement = new VistaLibQx.qx.html.Element(this.NativeObject.getContentElement());
                }
                return this._contentElement;
            },
            HandleEvent: function (eventName) { },
            HandlesAppear: function () {
                return false;
            },
            Hide: function () {
                this.NativeObject.hide();
            },
            Init: function () {
                VistaLibQx.qx.ui.core.LayoutItem.prototype.Init.call(this);
                this._hasResized = false;
                this.BackgroundColor = this.DefaultBackgroundColor();
                this.Decorator = this.DefaultDecorator();
                this.Margins = this.DefaultMargins();
                this.Padding = this.DefaultPadding();
                if (this.HandlesAppear()) {
                    var appearHandler = Bridge.fn.cacheBind(this, this.OnAppear);
                    this.NativeObject.addListener("appear", appearHandler);
                }
                var resizeHandler = Bridge.fn.cacheBind(this, this.OnResize);
                this.NativeObject.addListener("resize", resizeHandler);
                if (this.DefaultShow()) {
                    this.Show();
                }
            },
            QxClass: function () {
                return "qx.ui.core.Widget";
            },
            OnAppear: function () { },
            OnResize: function () {
                if (!this._hasResized) {
                    this.AfterFirstResize();
                }
            },
            ScrollToBottom: function () {
                this.GetContentElement().ScrollToBottom();
            },
            SetStyle: function (key, value) {
                this.GetContentElement().SetStyle(key, value);
            },
            SetStyles: function () { },
            Show: function () {
                this.NativeObject.show();
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.decoration.Decorator", {
        inherits: [VistaLibQx.qx.ui.decoration.AbstractDecoration],
        props: {
            BackgroundColor: {
                get: function () {
                    return this.NativeObject.getBackgroundColor();
                },
                set: function (value) {
                    this.NativeObject.setBackgroundColor(value);
                }
            },
            Color: {
                get: function () {
                    return this.NativeObject.getColor();
                },
                set: function (value) {
                    this.NativeObject.setColor(value);
                }
            },
            ColorBottom: {
                get: function () {
                    return this.NativeObject.getColorBottom();
                },
                set: function (value) {
                    this.NativeObject.setColorBottom(value);
                }
            },
            ColorLeft: {
                get: function () {
                    return this.NativeObject.getColorLeft();
                },
                set: function (value) {
                    this.NativeObject.setColorLeft(value);
                }
            },
            ColorRight: {
                get: function () {
                    return this.NativeObject.getColorRight();
                },
                set: function (value) {
                    this.NativeObject.setColorRight(value);
                }
            },
            ColorTop: {
                get: function () {
                    return this.NativeObject.getColorTop();
                },
                set: function (value) {
                    this.NativeObject.setColorTop(value);
                }
            },
            EndColor: {
                get: function () {
                    return this.NativeObject.getEndColor();
                },
                set: function (value) {
                    this.NativeObject.setEndColor(value);
                }
            },
            EndColorPosition: {
                get: function () {
                    return this.NativeObject.getEndColorPosition();
                },
                set: function (value) {
                    this.NativeObject.setEndColorPosition(value);
                }
            },
            Orientation: {
                get: function () {
                    return this.NativeObject.getOrientation();
                },
                set: function (value) {
                    this.NativeObject.setOrientation(value);
                }
            },
            Radius: {
                get: function () {
                    return this.NativeObject.getRadius();
                },
                set: function (value) {
                    this.NativeObject.setRadius(value);
                }
            },
            StartColor: {
                get: function () {
                    return this.NativeObject.getStartColor();
                },
                set: function (value) {
                    this.NativeObject.setStartColor(value);
                }
            },
            StartColorPosition: {
                get: function () {
                    return this.NativeObject.getStartColorPosition();
                },
                set: function (value) {
                    this.NativeObject.setStartColorPosition(value);
                }
            },
            Width: {
                get: function () {
                    return this.NativeObject.getWidth();
                },
                set: function (value) {
                    this.NativeObject.setWidth(value);
                }
            },
            WidthBottom: {
                get: function () {
                    return this.NativeObject.getWidthBottom();
                },
                set: function (value) {
                    this.NativeObject.setWidthBottom(value);
                }
            },
            WidthLeft: {
                get: function () {
                    return this.NativeObject.getWidthLeft();
                },
                set: function (value) {
                    this.NativeObject.setWidthLeft(value);
                }
            },
            WidthRight: {
                get: function () {
                    return this.NativeObject.getWidthRight();
                },
                set: function (value) {
                    this.NativeObject.setWidthRight(value);
                }
            },
            WidthTop: {
                get: function () {
                    return this.NativeObject.getWidthTop();
                },
                set: function (value) {
                    this.NativeObject.setWidthTop(value);
                }
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.decoration.Decorator";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.Atom", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Atom";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.Basic", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Basic";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.Canvas", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Canvas";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.Dock", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Dock";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.Flow", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Flow";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.Grid", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Grid";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.Grow", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Grow";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.HBox", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        fields: {
            _spacing: 0
        },
        props: {
            Spacing: {
                get: function () {
                    return this._spacing;
                },
                set: function (value) {
                    this._spacing = value;
                    if (this._spacing > 0) {
                        this.NativeObject.setSpacing(this._spacing);
                    }
                }
            }
        },
        ctors: {
            ctor: function (spacing) {
                if (spacing === void 0) { spacing = 0; }

                this.$initialize();
                VistaLibQx.qx.ui.layout.Abstract.ctor.call(this);
                this.Spacing = spacing;
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.layout.HBox";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.layout.VBox", {
        inherits: [VistaLibQx.qx.ui.layout.Abstract],
        fields: {
            _spacing: 0
        },
        props: {
            Spacing: {
                get: function () {
                    return this._spacing;
                },
                set: function (value) {
                    this._spacing = value;
                    if (this._spacing > 0) {
                        this.NativeObject.setSpacing(this._spacing);
                    }
                }
            }
        },
        ctors: {
            ctor: function (spacing) {
                if (spacing === void 0) { spacing = 0; }

                this.$initialize();
                VistaLibQx.qx.ui.layout.Abstract.ctor.call(this);
                this.Spacing = spacing;
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.layout.VBox";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.table.ResizeColumnModel", {
        inherits: [VistaLibQx.qx.ui.table.BasicColumnModel],
        methods: {
            QxClass: function () {
                return "qx.ui.table.columnmodel.Resize";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.table.SimpleTableModel", {
        inherits: [VistaLibQx.qx.ui.table.AbstractTableModel],
        ctors: {
            ctor: function (nameArray, idArray) {
                if (idArray === void 0) { idArray = null; }

                this.$initialize();
                VistaLibQx.qx.ui.table.AbstractTableModel.ctor.call(this);
                this.SetColumns(nameArray, idArray);
            }
        },
        methods: {
            GetAnchorSelectionIndex: function () {
                return this.NativeObject.getAnchorSelectionIndex();
            },
            SetColumns: function (nameArray, idArray) {
                this.NativeObject.setColumns(nameArray, idArray);
            },
            SetData: function (data) {
                this.NativeObject.setData(data);
            },
            QxClass: function () {
                return "qx.ui.table.model.Simple";
            }
        }
    });

    Bridge.define("VistaLibQx.util.VillageNewsWriter", {
        inherits: [VistaLibQx.util.NewsWriter],
        fields: {
            siteParagraph1: null,
            siteParagraph2: null,
            vistaParagraph1: null,
            vistaParagraph2: null,
            vistaParagraph3: null
        },
        ctors: {
            init: function () {
                this.siteParagraph1 = "The site is being updated to match the coming desktop release.";
                this.siteParagraph2 = "Both the desktop and web Smalltalk implementations will use the same GUI items.";
                this.vistaParagraph1 = "Vista Smalltalk is a desktop implementation based on Microsoft's PythonVm 2.7.";
                this.vistaParagraph2 = "The GUI is built using HTML5 widgets and is compatible with Web-based applications.";
                this.vistaParagraph3 = "Expected release date is September 21, 2018.";
            }
        },
        methods: {
            Generate: function () {
                VistaLibQx.util.NewsWriter.prototype.Generate.call(this);
                this.GenerateSiteItem();
                this.GenerateVistaItem();
            },
            GenerateSiteItem: function () {
                this.OpenNewsItem("Site Under Construction", System.DateTime.getNow());
                this.PrintParagraphs([this.siteParagraph1, this.siteParagraph2]);
                this.CloseNewsItem();
            },
            GenerateVistaItem: function () {
                this.OpenNewsItem("Vista Smalltalk Desktop Release", System.DateTime.getNow());
                this.PrintParagraphs([this.vistaParagraph1, this.vistaParagraph2, this.vistaParagraph3]);
                this.CloseNewsItem();
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.basic.Atom", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            label: null
        },
        props: {
            Label: {
                get: function () {
                    return this.label;
                },
                set: function (value) {
                    this.label = value;
                    this.NativeObject.setLabel(this.label);
                }
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.basic.Atom";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.basic.Image", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        props: {
            Scale: {
                get: function () {
                    return this.NativeObject.getScale();
                },
                set: function (value) {
                    this.NativeObject.setScale(value);
                }
            },
            Source: {
                get: function () {
                    return this.NativeObject.getSource();
                },
                set: function (value) {
                    this.NativeObject.setSource(value);
                }
            }
        },
        methods: {
            DefaultScale: function () {
                return false;
            },
            DefaultSource: function () {
                return null;
            },
            Init: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.Init.call(this);
                var source = this.DefaultSource();
                if (source != null) {
                    this.Source = source;
                }
                this.Scale = this.DefaultScale();
            },
            QxClass: function () {
                return "qx.ui.basic.Image";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.container.Composite", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            _children: null,
            _layout: null
        },
        props: {
            Layout: {
                get: function () {
                    return this._layout;
                },
                set: function (value) {
                    this._layout = value;
                    this.NativeObject.setLayout(this._layout.NativeObject);
                }
            }
        },
        methods: {
            Add: function (child, options) {
                if (options === void 0) { options = null; }
                this.NativeObject.add(child.NativeObject, options);
                child.Parent = this;
                this._children.add(child);
            },
            Add$1: function (child, edgeName) {
                this.Add(child, { edge: edgeName });
                child.Parent = this;
            },
            AddCenter: function (child) {
                this.Add$1(child, "center");
            },
            AddEast: function (child) {
                this.Add$1(child, "east");
            },
            AddFlex: function (child, flexWeight) {
                if (flexWeight === void 0) { flexWeight = 1; }
                this.Add(child, { flex: flexWeight });
            },
            AddNorth: function (child) {
                this.Add$1(child, "north");
            },
            AddSouth: function (child) {
                this.Add$1(child, "south");
            },
            AddWest: function (child) {
                this.Add$1(child, "west");
            },
            DefaultHeight: function () {
                return -1;
            },
            DefaultLayout: function () {
                return new VistaLibQx.qx.ui.layout.Dock();
            },
            Init: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.Init.call(this);
                this._children = new (System.Collections.Generic.List$1(VistaLibQx.qx.ui.core.LayoutItem)).ctor();
                if (this.DefaultHeight() >= 0) {
                    this.NativeObject.setHeight(this.DefaultHeight());
                }
                this.Layout = this.DefaultLayout();
            },
            OnResize: function () {
                var $t;
                VistaLibQx.qx.ui.core.Widget.prototype.OnResize.call(this);
                $t = Bridge.getEnumerator(this._children);
                try {
                    while ($t.moveNext()) {
                        var child = $t.Current;
                        child.OnParentResize();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            QxClass: function () {
                return "qx.ui.container.Composite";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.core.scroll.AbstractScrollArea", {
        inherits: [VistaLibQx.qx.ui.core.Widget]
    });

    Bridge.define("VistaLibQx.qx.ui.embed.IFrame", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            _source: null
        },
        props: {
            Source: {
                get: function () {
                    return this._source;
                },
                set: function (value) {
                    this._source = value;
                    this.NativeObject.setSource(this._source);
                }
            }
        },
        methods: {
            AfterInit: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.AfterInit.call(this);
                var handler = Bridge.fn.cacheBind(this, this.OnLoad);
                this.NativeObject.addListener("load", handler);
            },
            DefaultSource: function () {
                return "";
            },
            OnLoad: function () {
                this.Source = this.DefaultSource();
            },
            QxClass: function () {
                return "qx.ui.embed.Iframe";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.HtmlEmbed", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            _cssClass: null,
            _html: null,
            _style: null
        },
        props: {
            CssClass: {
                get: function () {
                    return this._cssClass;
                },
                set: function (value) {
                    this._cssClass = value;
                    this.NativeObject.setCssClass(value);
                }
            },
            Html: {
                get: function () {
                    return this._html;
                },
                set: function (value) {
                    this._html = value;
                    this.RefreshHtml();
                }
            },
            Style: {
                get: function () {
                    return this._style;
                },
                set: function (value) {
                    this._style = value;
                }
            }
        },
        methods: {
            AfterFirstResize: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.AfterFirstResize.call(this);
                var cssClass = this.DefaultCssClass();
                if (cssClass != null) {
                    this.CssClass = cssClass;
                }
                var html = this.DefaultHtml();
                if (html != null) {
                    this.Html = html;
                }
            },
            DefaultCssClass: function () {
                return null;
            },
            DefaultHtml: function () {
                return null;
            },
            DefaultStyle: function () {
                return null;
            },
            QxClass: function () {
                return "qx.ui.embed.Html";
            },
            RefreshHtml: function () {
                this.NativeObject.setHtml(this.Html);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.AbstractField", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            _value: null
        },
        props: {
            Value: {
                get: function () {
                    return this.NativeObject.getValue();
                },
                set: function (value) {
                    this._value = value;
                    this.NativeObject.setValue(this._value);
                }
            }
        },
        methods: {
            Clear: function () {
                this.Value = "";
            },
            Init: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.Init.call(this);
                this.Clear();
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.SplitButton", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            _menu: null
        },
        props: {
            Label: {
                get: function () {
                    return this.NativeObject.getLabel();
                },
                set: function (value) {
                    this.NativeObject.setLabel(value);
                }
            },
            Menu: {
                get: function () {
                    return this._menu;
                },
                set: function (value) {
                    this._menu = value;
                    this.NativeObject.setMenu(value.NativeObject);
                }
            }
        },
        ctors: {
            ctor: function (label) {
                this.$initialize();
                VistaLibQx.qx.ui.core.Widget.ctor.call(this);
                this.Label = label;
                this.Menu = new VistaLibQx.qx.ui.menu.Menu();
            }
        },
        methods: {
            AddButton: function (label, handler) {
                var button = new VistaLibQx.qx.ui.menu.MenuButton(label, handler);
                button.Decorator = this.Decorator;
                button.TextColor = this.TextColor;
                this.Menu.Add(button);
                return button;
            },
            QxClass: function () {
                return "qx.ui.form.SplitButton";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.menu.AbstractButton", {
        inherits: [VistaLibQx.qx.ui.core.Widget]
    });

    Bridge.define("VistaLibQx.qx.ui.menu.Menu", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        methods: {
            Add: function (item) {
                this.NativeObject.add(item.NativeObject);
                return this;
            },
            QxClass: function () {
                return "qx.ui.menu.Menu";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.menu.Separator", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        methods: {
            QxClass: function () {
                return "qx.ui.menu.Separator";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.toolbar.ToolBar", {
        inherits: [VistaLibQx.qx.ui.core.Widget,VistaLibQx.qx.interfaces.IDecorate],
        alias: ["Decorate$1", "VistaLibQx$qx$interfaces$IDecorate$Decorate"],
        methods: {
            Add: function (child, options) {
                if (options === void 0) { options = null; }
                this.NativeObject.add(child.NativeObject, options);
            },
            AddButton: function (label) {
                var button = new VistaLibQx.qx.ui.toolbar.ToolbarButton.$ctor1(label, this);
                button.Decorate(this);
                this.Add(button);
                return button;
            },
            AddMenuButton: function (label) {
                var button = new VistaLibQx.qx.ui.form.Button.ctor(label);
                button.Decorate(this);
                this.Add(button);
                return button;
            },
            AddSeparator: function (color) {
                if (color === void 0) { color = null; }
                var separator = new VistaLibQx.qx.ui.toolbar.Separator(color);
                return separator;
            },
            AddSpacer: function () {
                var widget = new VistaLibQx.qx.ui.core.Widget();
                widget.Height = 10;
                widget.Width = 10;
                this.Add(widget, { flex: 1 });
                return widget;
            },
            AddSplitButton: function (label) {
                var button = new VistaLibQx.qx.ui.form.SplitButton(label);
                button.Decorate(this);
                this.Add(button);
                return button;
            },
            Decorate$1: function (widget) { },
            DefaultSpacing: function () {
                return 7;
            },
            Init: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.Init.call(this);
                if (this.DefaultSpacing() > 0) {
                    this.NativeObject.setSpacing(this.DefaultSpacing());
                }
            },
            QxClass: function () {
                return "qx.ui.toolbar.ToolBar";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.splitpane.Pane", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            _orientation: null
        },
        props: {
            Orientation: {
                get: function () {
                    return this._orientation;
                },
                set: function (value) {
                    this._orientation = value;
                    this.NativeObject.setOrientation(this._orientation);
                }
            }
        },
        ctors: {
            ctor: function (orientation) {
                if (orientation === void 0) { orientation = "horizontal"; }

                this.$initialize();
                VistaLibQx.qx.ui.core.Widget.ctor.call(this);
                this.Orientation = orientation;
            }
        },
        methods: {
            Add: function (widget, flex) {
                if (flex === void 0) { flex = 1; }
                this.NativeObject.add(widget.NativeObject, flex);
            },
            QxClass: function () {
                return "qx.ui.splitpane.Pane";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.table.Table", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            _columnModel: null,
            _tableModel: null
        },
        props: {
            ColumnModel: {
                get: function () {
                    return this._columnModel;
                },
                set: function (value) {
                    this._columnModel = value;
                }
            },
            ColumnVisibilityButtonVisible: {
                set: function (value) {
                    this.NativeObject.setColumnVisibilityButtonVisible(value);
                }
            },
            Data: {
                set: function (value) {
                    this._tableModel.SetData(value);
                }
            },
            StatusBarVisible: {
                set: function (value) {
                    this.NativeObject.setStatusBarVisible(value);
                }
            },
            ShowCellFocusIndicator: {
                set: function (value) {
                    this.NativeObject.setShowCellFocusIndicator(value);
                }
            },
            TableModel: {
                get: function () {
                    return this._tableModel;
                },
                set: function (value) {
                    this._tableModel = value;
                    this.NativeObject.setTableModel(this._tableModel.NativeObject);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                VistaLibQx.qx.ui.core.Widget.ctor.call(this);
            }
        },
        methods: {
            CreationArgs: function () {
                var resizeColumnModel = new VistaLibQx.qx.ui.table.ResizeColumnModel().NativeObject;
                var fn = function (obj) {
                    return resizeColumnModel;
                };
                var map = { tableColumnModel: fn };
                return System.Array.init([null, map], System.Object);
            },
            DefaultColumnVisibilityButtonVisible: function () {
                return false;
            },
            DefaultColumns: function () {
                return System.Array.init(["Id", "Data"], System.String);
            },
            DefaultIds: function () {
                var $t;
                var ids = new (System.Collections.Generic.List$1(System.String)).ctor();
                $t = Bridge.getEnumerator(this.DefaultColumns());
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        var id = System.String.replaceAll(col.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
                        ids.add(id);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return ids.ToArray();
            },
            DefaultShowCellFocusIndicator: function () {
                return false;
            },
            DefaultStatusBarVisible: function () {
                return false;
            },
            Init: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.Init.call(this);
                this.ColumnModel = new VistaLibQx.qx.ui.table.ResizeColumnModel();
                this.TableModel = new VistaLibQx.qx.ui.table.SimpleTableModel(this.DefaultColumns(), this.DefaultIds());
                this.ColumnVisibilityButtonVisible = this.DefaultColumnVisibilityButtonVisible();
                this.ShowCellFocusIndicator = this.DefaultShowCellFocusIndicator();
                this.StatusBarVisible = this.DefaultStatusBarVisible();
            },
            QxClass: function () {
                return "qx.ui.table.Table";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.tabview.TabView", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        methods: {
            Add: function (page) {
                this.NativeObject.add(page.NativeObject);
            },
            AddPage: function (label) {
                var $t;
                var page = ($t = new VistaLibQx.qx.ui.tabview.Page(), $t.Label = label, $t);
                this.Add(page);
                return page;
            },
            QxClass: function () {
                return "qx.ui.tabview.TabView";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.toolbar.Separator", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        ctors: {
            ctor: function (color) {
                if (color === void 0) { color = null; }

                this.$initialize();
                VistaLibQx.qx.ui.core.Widget.ctor.call(this);
                if (color != null) {
                    this.TextColor = color;
                }
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.toolbar.Separator";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.tree.core.AbstractItem", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        fields: {
            _label: null
        },
        props: {
            Label: {
                get: function () {
                    return this._label;
                },
                set: function (value) {
                    this._label = value;
                    this.NativeObject.setLabel(this._label);
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.Window", {
        inherits: [VistaLibQx.qx.ui.core.Widget,VistaLibQx.util.IEventHandler],
        fields: {
            _buttonBar: null,
            _caption: null,
            _contentPadding: 0,
            _delayedCentered: false,
            _delayedLocation: null,
            _layout: null
        },
        props: {
            Caption: {
                get: function () {
                    return this._caption;
                },
                set: function (value) {
                    this._caption = value;
                    this.NativeObject.setCaption(this._caption);
                }
            },
            ContentPadding: {
                get: function () {
                    return this._contentPadding;
                },
                set: function (value) {
                    this._contentPadding = value;
                    this.NativeObject.setContentPadding(this._contentPadding);
                }
            },
            Layout: {
                get: function () {
                    return this._layout;
                },
                set: function (value) {
                    this._layout = value;
                    this.NativeObject.setLayout(this._layout.NativeObject);
                }
            },
            ShowMaximize: {
                get: function () {
                    return this.NativeObject.getShowMaximize();
                },
                set: function (value) {
                    this.NativeObject.setShowMaximize(value);
                }
            },
            ShowMinimize: {
                get: function () {
                    return this.NativeObject.getShowMinimize();
                },
                set: function (value) {
                    this.NativeObject.setShowMinimize(value);
                }
            }
        },
        methods: {
            Add: function (child, options) {
                if (options === void 0) { options = null; }
                this.NativeObject.add(child.NativeObject, options);
            },
            Add$1: function (child, edgeName) {
                this.Add(child, { edge: edgeName });
            },
            AfterFirstResize: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.AfterFirstResize.call(this);
                this.Center(this._delayedCentered);
                this.MoveTo(this._delayedLocation);
            },
            AfterInit: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.AfterInit.call(this);
                if (this.HasButtonBar()) {
                    this.AddButtonBar();
                }
            },
            Init: function () {
                VistaLibQx.qx.ui.core.Widget.prototype.Init.call(this);
                this.ShowMinimize = false;
                var closeHandler = Bridge.fn.cacheBind(this, this.OnClose);
                this.NativeObject.addListener("close", closeHandler);
                this.Caption = this.DefaultCaption();
                this.Center(this.DefaultCentered());
                this.ContentPadding = this.DefaultContentPadding();
                this.Layout = this.DefaultLayout();
                this.MoveTo(this.DefaultLocation());
            },
            AddButtonBar: function () {
                this._buttonBar = this.CreateButtonBar();
                this._buttonBar.AddConfigs$1(this.DefaultButtons());
                this.Add$1(this._buttonBar, "south");
            },
            CreateButtonBar: function () {
                return new VistaLibQx.qx.ui.widgets.ButtonBar();
            },
            DefaultLayout: function () {
                return new VistaLibQx.qx.ui.layout.Dock();
            },
            Center: function (centered) {
                this._delayedCentered = centered;
                if (!this._hasResized) {
                    return;
                }
                this.NativeObject.center();
            },
            DefaultButtons: function () {
                return System.Array.init([], VistaLibQx.util.ButtonConfig);
            },
            DefaultCaption: function () {
                return "Window";
            },
            DefaultCentered: function () {
                return false;
            },
            DefaultContentPadding: function () {
                return 0;
            },
            DefaultHeight: function () {
                return 375;
            },
            DefaultLocation: function () {
                return System.Array.init([], System.Int32);
            },
            DefaultShow: function () {
                return true;
            },
            DefaultWidth: function () {
                return 475;
            },
            HasButtonBar: function () {
                return this.DefaultButtons().length > 0;
            },
            Maximize: function () {
                this.NativeObject.maximize();
            },
            Minimize: function () {
                this.NativeObject.minimize();
            },
            MoveTo: function (location) {
                this._delayedLocation = location;
                if (!this._hasResized) {
                    return;
                }
                if (location.length !== 2) {
                    return;
                }
                this.NativeObject.moveTo(location[System.Array.index(0, location)], location[System.Array.index(1, location)]);
            },
            OnClose: function () { },
            QxClass: function () {
                return "qx.ui.window.Window";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.Desktop", {
        inherits: [VistaLibQx.qx.ui.core.Widget],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (VistaLibQx.qx.ui.windows.Desktop._instance == null) {
                            VistaLibQx.qx.ui.windows.Desktop._instance = new VistaLibQx.qx.ui.windows.Desktop();
                        }
                        return VistaLibQx.qx.ui.windows.Desktop._instance;
                    }
                }
            }
        },
        methods: {
            Add: function ($window) {
                this.NativeObject.add($window.NativeObject);
            },
            Remove: function ($window) {
                this.NativeObject.remove($window.NativeObject);
            },
            QxClass: function () {
                return "qx.ui.window.Desktop";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.basic.NavbarImage", {
        inherits: [VistaLibQx.qx.ui.basic.Image],
        methods: {
            DefaultScale: function () {
                return true;
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.CodeMirrorEditor", {
        inherits: [VistaLibQx.qx.ui.embed.IFrame,VistaLibQx.qx.interfaces.ITextValue],
        fields: {
            _deferredValue: null,
            _editor: null
        },
        props: {
            Value: {
                get: function () {
                    if (this._editor != null) {
                        return this._editor.getValue();
                    } else {
                        return this._deferredValue;
                    }
                },
                set: function (value) {
                    if (this._editor != null) {
                        this._editor.setValue(value);
                    } else {
                        this._deferredValue = value;
                    }
                }
            }
        },
        alias: ["Value", "VistaLibQx$qx$interfaces$ITextValue$Value"],
        ctors: {
            ctor: function () {
                this.$initialize();
                VistaLibQx.qx.ui.embed.IFrame.ctor.call(this);
                this._deferredValue = "";
                this._editor = null;
            }
        },
        methods: {
            Clear: function () {
                this.Value = "";
            },
            DefaultSource: function () {
                return "iframes/codemirror/index.html";
            },
            InitEditor: function (editor) {
                this._editor = editor;
                this.Value = this._deferredValue;
            },
            OnLoad: function () {
                VistaLibQx.qx.ui.embed.IFrame.prototype.OnLoad.call(this);
                var frameCount = window.frames.length;
                if (frameCount > 0) {
                    var editor = window.frames[window.frames.length-1].editor;
                    if (editor != null) {
                        this.InitEditor(editor);
                    }
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.MonacoEditor", {
        inherits: [VistaLibQx.qx.ui.embed.HtmlEmbed,VistaLibQx.qx.interfaces.ITextValue],
        fields: {
            _editor: null
        },
        props: {
            Value: {
                get: function () {
                    if (this._editor != null) {
                        return this._editor.getValue();
                    } else {
                        return "";
                    }
                },
                set: function (value) {
                    if (this._editor != null) {
                        this._editor.setValue(value);
                    }
                }
            }
        },
        alias: ["Value", "VistaLibQx$qx$interfaces$ITextValue$Value"],
        methods: {
            Clear: function () {
                this.Value = "";
            },
            HandlesAppear: function () {
                return true;
            },
            OnAppear: function () {
                VistaLibQx.qx.ui.embed.HtmlEmbed.prototype.OnAppear.call(this);
                var divElement = this.GetContentElement().GetDomElement();
                var config = { language: "python", automaticLayout: true, minimap: { enabled: false } };
                this._editor = window.monaco.editor.create(divElement, config);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.NavbarLabel", {
        inherits: [VistaLibQx.qx.ui.embed.HtmlEmbed],
        methods: {
            DefaultCssClass: function () {
                return "navbar-label-text";
            },
            DefaultHtml: function () {
                return this.FormatLabelText(this.DefaultText());
            },
            DefaultHeight: function () {
                return 35;
            },
            DefaultText: function () {
                return "";
            },
            DefaultWidth: function () {
                return 200;
            },
            FormatLabelText: function (text) {
                var sb = new System.Text.StringBuilder();
                var span_format = "<span class=\"{0}\">{1}</span>";
                sb.appendLine(System.String.format(span_format, this.DefaultCssClass(), text));
                return sb.toString();
            },
            SetLabelText: function (text) {
                this.Html = this.FormatLabelText(text);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.ScrollableHtml", {
        inherits: [VistaLibQx.qx.ui.embed.HtmlEmbed],
        methods: {
            DefaultScrollX: function () {
                return true;
            },
            DefaultScrollY: function () {
                return true;
            },
            SetOverflow: function (x, y) {
                if (x) {
                    this.SetStyle("overflow-x", "scroll");
                }
                if (y) {
                    this.SetStyle("overflow-y", "scroll");
                }
            },
            SetStyles: function () {
                VistaLibQx.qx.ui.embed.HtmlEmbed.prototype.SetStyles.call(this);
                this.SetOverflow(this.DefaultScrollX(), this.DefaultScrollY());
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.Button", {
        inherits: [VistaLibQx.qx.ui.basic.Atom],
        fields: {
            _eventName: null,
            _handler: null
        },
        props: {
            EventName: {
                get: function () {
                    return this._eventName;
                },
                set: function (value) {
                    this._eventName = value;
                }
            },
            Handler: {
                get: function () {
                    return this._handler;
                },
                set: function (value) {
                    this._handler = value;
                }
            }
        },
        ctors: {
            ctor: function (label) {
                this.$initialize();
                VistaLibQx.qx.ui.basic.Atom.ctor.call(this);
                this.Label = label;
                this.Handler = this;
                this.EventName = System.String.replaceAll(label.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
            },
            $ctor1: function (label, handler) {
                this.$initialize();
                VistaLibQx.qx.ui.basic.Atom.ctor.call(this);
                this.Label = label;
                this.Handler = handler;
                this.EventName = System.String.replaceAll(label.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
            },
            $ctor2: function (config) {
                this.$initialize();
                VistaLibQx.qx.ui.basic.Atom.ctor.call(this);
                this.Label = config.Label;
                this.Handler = config.Handler;
                this.EventName = config.EventName;
            }
        },
        methods: {
            AfterInit: function () {
                var handler = Bridge.fn.cacheBind(this, this.HandleClick);
                this.NativeObject.addListener("click", handler);
            },
            HandleClick: function () {
                this.Handler.VistaLibQx$util$IEventHandler$HandleEvent(this.EventName);
            },
            QxClass: function () {
                return "qx.ui.form.Button";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.ListBox", {
        inherits: [VistaLibQx.qx.ui.core.scroll.AbstractScrollArea],
        methods: {
            Add: function (label) {
                var $t;
                var item = ($t = new VistaLibQx.qx.ui.form.ListItem(), $t.Label = label, $t);
                this.NativeObject.add(item.NativeObject);
            },
            Clear: function () {
                this.NativeObject.removeAll();
                this.NativeObject.setSelection(System.Array.init([], System.Object));
            },
            QxClass: function () {
                return "qx.ui.form.List";
            },
            SelectedLabel: function () {
                var selection = this.NativeObject.getSelection();
                if (Bridge.referenceEquals(selection.length, 0)) {
                    return "";
                }
                return selection[0].getLabel();
            },
            OnChangeSelectionHandler: function (fn) {
                this.AddListener("changeSelection", fn);
            },
            Update: function (labels) {
                var $t;
                this.Clear();
                $t = Bridge.getEnumerator(labels);
                try {
                    while ($t.moveNext()) {
                        var label = $t.Current;
                        this.Add(label);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.ListItem", {
        inherits: [VistaLibQx.qx.ui.basic.Atom],
        methods: {
            QxClass: function () {
                return "qx.ui.form.ListItem";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.TextField", {
        inherits: [VistaLibQx.qx.ui.form.AbstractField],
        methods: {
            QxClass: function () {
                return "qx.ui.form.TextField";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.TextArea", {
        inherits: [VistaLibQx.qx.ui.form.AbstractField],
        methods: {
            Newline: function () {
                this.Value = (this.Value || "") + "\n";
            },
            Print: function (msg) {
                this.Value = (this.Value || "") + ((System.String.format("{0}", [msg])) || "");
            },
            PrintLn: function (msg) {
                this.Print(msg);
                this.Newline();
            },
            QxClass: function () {
                return "qx.ui.form.TextArea";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.menu.CheckBox", {
        inherits: [VistaLibQx.qx.ui.menu.AbstractButton],
        methods: {
            QxClass: function () {
                return "qx.ui.menu.CheckBox";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.menu.MenuButton", {
        inherits: [VistaLibQx.qx.ui.menu.AbstractButton],
        fields: {
            _eventName: null,
            _handler: null
        },
        props: {
            EventName: {
                get: function () {
                    return this._eventName;
                },
                set: function (value) {
                    this._eventName = value;
                }
            },
            Handler: {
                get: function () {
                    return this._handler;
                },
                set: function (value) {
                    this._handler = value;
                }
            },
            Label: {
                get: function () {
                    return this.NativeObject.getLabel();
                },
                set: function (value) {
                    this.NativeObject.setLabel(value);
                }
            }
        },
        ctors: {
            ctor: function (label, handler) {
                this.$initialize();
                VistaLibQx.qx.ui.menu.AbstractButton.ctor.call(this);
                this.Label = label;
                this.Handler = handler;
                this.EventName = System.String.replaceAll(label.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
            }
        },
        methods: {
            AfterInit: function () {
                var handler = Bridge.fn.cacheBind(this, this.HandleClick);
                this.NativeObject.addListener("click", handler);
            },
            HandleClick: function () {
                this.Handler.VistaLibQx$util$IEventHandler$HandleEvent(this.EventName);
            },
            QxClass: function () {
                return "qx.ui.menu.Button";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.menu.RadioButton", {
        inherits: [VistaLibQx.qx.ui.menu.AbstractButton],
        methods: {
            QxClass: function () {
                return "qx.ui.menu.AbstractButton";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.menubar.MenuBar", {
        inherits: [VistaLibQx.qx.ui.toolbar.ToolBar],
        methods: {
            QxClass: function () {
                return "qx.ui.menubar.MenuBar";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.popup.Popup", {
        inherits: [VistaLibQx.qx.ui.container.Composite],
        statics: {
            methods: {
                ShowMessage: function (message) {
                    var popup = new VistaLibQx.qx.ui.popup.Popup(message);
                    popup.Show();
                }
            }
        },
        fields: {
            _delayedLocation: null,
            _html: null
        },
        props: {
            AutoHide: {
                set: function (value) {
                    this.NativeObject.setAutoHide(value);
                }
            }
        },
        ctors: {
            ctor: function (message) {
                this.$initialize();
                VistaLibQx.qx.ui.container.Composite.ctor.call(this);
                this._html.Html = message;
            }
        },
        methods: {
            AfterFirstResize: function () {
                VistaLibQx.qx.ui.container.Composite.prototype.AfterFirstResize.call(this);
                this.MoveTo(this._delayedLocation);
            },
            DefaultDecorator: function () {
                var $t;
                return ($t = new VistaLibQx.qx.ui.decoration.Decorator(), $t.Width = 1, $t.Radius = 7, $t);
            },
            DefaultHeight: function () {
                return 32;
            },
            DefaultLocation: function () {
                return System.Array.init([5, 45], System.Int32);
            },
            DefaultWidth: function () {
                return 135;
            },
            Init: function () {
                VistaLibQx.qx.ui.container.Composite.prototype.Init.call(this);
                this._html = new VistaLibQx.qx.ui.embed.HtmlEmbed();
                this.AddCenter(this._html);
                this.MoveTo(this.DefaultLocation());
            },
            MoveTo: function (location) {
                this._delayedLocation = location;
                if (!this._hasResized) {
                    return;
                }
                if (location.length !== 2) {
                    return;
                }
                this.NativeObject.moveTo(location[System.Array.index(0, location)], location[System.Array.index(1, location)]);
            },
            SetStyles: function () {
                VistaLibQx.qx.ui.container.Composite.prototype.SetStyles.call(this);
            },
            QxClass: function () {
                return "qx.ui.popup.Popup";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.tabview.Page", {
        inherits: [VistaLibQx.qx.ui.container.Composite],
        fields: {
            _label: null
        },
        props: {
            Label: {
                get: function () {
                    return this._label;
                },
                set: function (value) {
                    this._label = value;
                    this.NativeObject.setLabel(this._label);
                }
            }
        },
        methods: {
            DefaultLayout: function () {
                return new VistaLibQx.qx.ui.layout.Grow();
            },
            QxClass: function () {
                return "qx.ui.tabview.Page";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.tree.core.AbstractTreeItem", {
        inherits: [VistaLibQx.qx.ui.tree.core.AbstractItem],
        methods: {
            Add: function (child) {
                this.NativeObject.add(child.NativeObject);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.tree.Tree", {
        inherits: [VistaLibQx.qx.ui.core.scroll.AbstractScrollArea],
        fields: {
            _root: null
        },
        props: {
            Root: {
                get: function () {
                    return this._root;
                },
                set: function (value) {
                    this._root = value;
                    this.NativeObject.setRoot(this._root.NativeObject);
                }
            }
        },
        methods: {
            BuildNode: function (nodeData) {
                var $t;
                var node;
                if (nodeData.subclasses.length > 0) {
                    node = new VistaLibQx.qx.ui.tree.TreeFolder();
                    $t = Bridge.getEnumerator(nodeData.subclasses);
                    try {
                        while ($t.moveNext()) {
                            var subnodeData = Bridge.cast($t.Current, System.Object);
                            node.Add(this.BuildNode(subnodeData));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                } else {
                    node = new VistaLibQx.qx.ui.tree.TreeFile();
                }
                node.Label = nodeData.name;
                return node;
            },
            Refresh: function (data) {
                this.Root = this.BuildNode(data);
                this.Root.NativeObject.setOpen(true);
            },
            Init: function () {
                VistaLibQx.qx.ui.core.scroll.AbstractScrollArea.prototype.Init.call(this);
                this.NativeObject.setRootOpenClose(true);
            },
            QxClass: function () {
                return "qx.ui.tree.Tree";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.virtual.core.Scroller", {
        inherits: [VistaLibQx.qx.ui.core.scroll.AbstractScrollArea]
    });

    Bridge.define("VistaLibQx.qx.ui.widgets.ButtonBar", {
        inherits: [VistaLibQx.qx.ui.container.Composite,VistaLibQx.util.IEventHandler],
        fields: {
            _buttons: null,
            _proxyEventHandler: null
        },
        alias: ["HandleEvent", "VistaLibQx$util$IEventHandler$HandleEvent"],
        ctors: {
            init: function () {
                this._buttons = new (System.Collections.Generic.Dictionary$2(System.String,VistaLibQx.qx.ui.form.Button)).ctor();
            },
            ctor: function (proxyEventHandler) {
                if (proxyEventHandler === void 0) { proxyEventHandler = null; }

                this.$initialize();
                VistaLibQx.qx.ui.container.Composite.ctor.call(this);
                this._proxyEventHandler = proxyEventHandler;
            }
        },
        methods: {
            AddConfig: function (config) {
                if (config.Flex > 0) {
                    this.AddFlex$1(config.Flex);
                } else {
                    if (config.Width > 0) {
                        this.AddWidth(config.Width);
                    } else {
                        this.AddButton(config);
                    }
                }
            },
            AddConfigs: function () {
                this.AddConfigs$1(this.DefaultButtons());
                this.AdjustButtons();
            },
            AddConfigs$1: function (configs) {
                var $t;
                $t = Bridge.getEnumerator(configs);
                try {
                    while ($t.moveNext()) {
                        var config = $t.Current;
                        this.AddConfig(config);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            AddButton: function (config) {
                var button = new VistaLibQx.qx.ui.form.Button.$ctor2(config);
                this._buttons.setItem(config.EventName, button);
                this.Add(button);
            },
            AddFlex$1: function (flex) {
                var $t;
                var widget = ($t = new VistaLibQx.qx.ui.core.Widget(), $t.Height = 1, $t.Width = 1, $t);
                this.Add(widget, { flex: flex });
            },
            AddWidth: function (width) {
                var $t;
                var widget = ($t = new VistaLibQx.qx.ui.core.Widget(), $t.Height = 1, $t.Width = width, $t);
                this.Add(widget);
            },
            AdjustButtons: function () { },
            DefaultBackgroundColor: function () {
                return "#ccc";
            },
            DefaultDecorator: function () {
                var $t;
                return ($t = new VistaLibQx.qx.ui.decoration.Decorator(), $t.ColorTop = VistaLibQx.qx.constants.Colors.ColorSlateGray, $t.WidthTop = 1, $t);
            },
            DefaultButtons: function () {
                return System.Array.init([], VistaLibQx.util.ButtonConfig);
            },
            DefaultLayout: function () {
                return new VistaLibQx.qx.ui.layout.HBox(7);
            },
            DefaultPadding: function () {
                return System.Array.init([3, 7], System.Int32);
            },
            GetButton: function (key) {
                var button = { };
                this._buttons.tryGetValue(key, button);
                return button.v;
            },
            HandleEvent: function (eventName) {
                if (this._proxyEventHandler != null) {
                    this._proxyEventHandler.VistaLibQx$util$IEventHandler$HandleEvent(eventName);
                }
            },
            SetButtonBackgroundColor: function (key, color) {
                var button = this.GetButton(key);
                if (button != null) {
                    button.BackgroundColor = color;
                }
            },
            SetButtonEnabled: function (key, isEnabled) {
                var button = this.GetButton(key);
                if (button != null) {
                    button.Enabled = isEnabled;
                }
            },
            SetButtonEnabledStates: function (buttons, isEnabled) {
                var $t;
                $t = Bridge.getEnumerator(buttons);
                try {
                    while ($t.moveNext()) {
                        var button = $t.Current;
                        this.SetButtonEnabled(button, isEnabled);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            SetButtonLabel: function (key, label) {
                var button = this.GetButton(key);
                if (button != null) {
                    button.Label = label;
                }
            },
            SetButtonVisibilities: function (buttons, isVisible) {
                var $t;
                if (isVisible === void 0) { isVisible = true; }
                $t = Bridge.getEnumerator(buttons);
                try {
                    while ($t.moveNext()) {
                        var button = $t.Current;
                        this.SetButtonVisibility(button, isVisible);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            SetButtonVisibility: function (key, isVisible) {
                var button = this.GetButton(key);
                if (button != null) {
                    if (isVisible) {
                        button.Show();
                    } else {
                        button.Hide();
                    }
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.widgets.ImageWidget", {
        inherits: [VistaLibQx.qx.ui.container.Composite]
    });

    Bridge.define("VistaLibQx.qx.ui.widgets.navbar.ToolsButton", {
        inherits: [VistaLibQx.qx.ui.form.SplitButton],
        fields: {
            _handler: null
        },
        ctors: {
            ctor: function (decorator, handler) {
                this.$initialize();
                VistaLibQx.qx.ui.form.SplitButton.ctor.call(this, "Tools");
                this._handler = handler;
                this.Decorate(decorator);
                this.AddMenuButtons();
            }
        },
        methods: {
            AddMenuButtons: function () {
                this.AddButton("Transcript", this._handler);
                this.AddButton("ClassBrowser", this._handler);
                this.AddButton("Console", this._handler);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.class_browser.ClassBrowserMethodTabs", {
        inherits: [VistaLibQx.qx.ui.tabview.TabView],
        fields: {
            _classMethods: null,
            _classPage: null,
            _instanceMethods: null,
            _instancePage: null,
            _methodsData: null,
            _selectedMethod: null,
            _window: null
        },
        props: {
            IsClassMethod: {
                get: function () {
                    return Bridge.referenceEquals(this.SelectedTabName, "class");
                }
            },
            SelectedMethod: {
                get: function () {
                    return this._selectedMethod;
                }
            },
            SelectedTabName: {
                get: function () {
                    return this.NativeObject.getSelection()[0].getLabel().toLowerCase();
                }
            }
        },
        ctors: {
            ctor: function ($window) {
                this.$initialize();
                VistaLibQx.qx.ui.tabview.TabView.ctor.call(this);
                this._window = $window;
                this._classPage = new VistaLibQx.qx.ui.tabview.Page();
                this._classPage.Label = "Class";
                this._classMethods = new VistaLibQx.qx.ui.form.ListBox();
                this._classPage.Add(this._classMethods);
                this._instancePage = new VistaLibQx.qx.ui.tabview.Page();
                this._instancePage.Label = "Instance";
                this._instanceMethods = new VistaLibQx.qx.ui.form.ListBox();
                this._instancePage.Add(this._instanceMethods);
                this._methodsData = null;
                this._selectedMethod = "";
                this.Add(this._instancePage);
                this.Add(this._classPage);
            }
        },
        methods: {
            AddListeners: function () {
                var methodTabSelected = Bridge.fn.cacheBind(this, this.HandleTabSelection);
                this.NativeObject.addListener("changeSelection", methodTabSelected);
                var methodSelectedHandler = Bridge.fn.cacheBind(this, this.HandleShowMethod);
                this._classMethods.NativeObject.addListener("changeSelection", methodSelectedHandler);
                this._instanceMethods.NativeObject.addListener("changeSelection", methodSelectedHandler);
            },
            Clear: function () {
                this._selectedMethod = "";
                this.ClearMethods();
            },
            ClearMethods: function () {
                this._instanceMethods.Clear();
                this._classMethods.Clear();
            },
            HandleShowMethod: function () {
                this.ShowMethod();
            },
            HandleTabSelection: function () {
                this.ShowMethod();
            },
            ShowMethod: function () {
                var tabName = this.SelectedTabName;
                if (Bridge.referenceEquals(tabName, "instance")) {
                    this._selectedMethod = this._instanceMethods.SelectedLabel();
                } else {
                    this._selectedMethod = this._classMethods.SelectedLabel();
                }
                this._window.UpdateMethodSource();
            },
            Update: function (methods_data) {
                var $t, $t1;
                this.ClearMethods();
                this._methodsData = methods_data;
                $t = Bridge.getEnumerator(this._methodsData[0]);
                try {
                    while ($t.moveNext()) {
                        var name = Bridge.cast($t.Current, System.String);
                        this._instanceMethods.Add(name);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(this._methodsData[1]);
                try {
                    while ($t1.moveNext()) {
                        var name1 = Bridge.cast($t1.Current, System.String);
                        this._classMethods.Add(name1);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.class_browser.ClassBrowserWindow", {
        inherits: [VistaLibQx.qx.ui.windows.Window],
        fields: {
            _classTree: null,
            _hsplit: null,
            _methodTabs: null,
            _sourceEditor: null,
            _vsplit: null,
            _vmApi: null
        },
        alias: ["HandleEvent", "VistaLibQx$util$IEventHandler$HandleEvent"],
        ctors: {
            ctor: function (vmApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.Window.ctor.call(this);
                this._vmApi = vmApi;
                this.Refresh();
            }
        },
        methods: {
            DefaultCaption: function () {
                return "Class Browser";
            },
            DefaultButtons: function () {
                return System.Array.init([this.ButtonRefresh(), this.ButtonSave(), this.ButtonDelete(), this.ButtonSaveImage()], VistaLibQx.util.ButtonConfig);
            },
            DefaultCentered: function () {
                return true;
            },
            DefaultEditor: function () {
                return new VistaLibQx.qx.ui.embed.MonacoEditor();
            },
            DefaultVmApi: function () {
                return null;
            },
            Init: function () {
                VistaLibQx.qx.ui.windows.Window.prototype.Init.call(this);
                this._vsplit = new VistaLibQx.qx.ui.splitpane.Pane("vertical");
                this._vsplit.Add(this.BuildTopPanels());
                this._vsplit.Add(this.BuildBottomPanels());
                this.Add$1(this._vsplit, "center");
                this.AddListeners();
            },
            AddListeners: function () {
                this._classTree.AddListeners();
                this._methodTabs.AddListeners();
            },
            BuildBottomPanels: function () {
                this._sourceEditor = this.DefaultEditor();
                return this._sourceEditor;
            },
            BuildTopPanels: function () {
                this._classTree = new VistaLibQx.qx.ui.windows.class_browser.ClassBrowserTree(this);
                this._methodTabs = new VistaLibQx.qx.ui.windows.class_browser.ClassBrowserMethodTabs(this);
                this._hsplit = new VistaLibQx.qx.ui.splitpane.Pane("horizontal");
                this._hsplit.Add(this._classTree);
                this._hsplit.Add(this._methodTabs);
                return this._hsplit;
            },
            ButtonSave: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Save", this);
            },
            ButtonDelete: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Delete", this);
            },
            ButtonRefresh: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Refresh", this);
            },
            ButtonSaveImage: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Save Image", this);
            },
            ClearAll: function () {
                this._classTree.Clear();
                this._methodTabs.Clear();
                this._sourceEditor.Clear();
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_delete": 
                        this.OnDelete();
                        break;
                    case "on_refresh": 
                        this.OnRefresh();
                        break;
                    case "on_save": 
                        this.OnSave();
                        break;
                    case "on_save_image": 
                        this.OnSaveImage();
                        break;
                }
            },
            HandleDeleteReply: function (reply) {
                this.Refresh();
            },
            HandleRefreshReply: function (reply) {
                this._classTree.Refresh(reply);
                this.ClearAll();
            },
            HandleShowMethodReply: function (reply) {
                this._sourceEditor.Value = reply;
            },
            OnDelete: function () {
                if (this._classTree.SelectedClass.length === 0) {
                    return;
                }
                if (this._methodTabs.SelectedMethod.length === 0) {
                    this.OnDeleteClass();
                } else {
                    this.OnDeleteMethod();
                }
            },
            OnDeleteClass: function () {
                var fn = Bridge.fn.bind(this, function (delete_class_reply) {
                    this.PrintLog([delete_class_reply]);
                    this.Refresh();
                });
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$DeleteClass(this._classTree.SelectedClass, fn);
            },
            OnDeleteMethod: function () {
                var fn = Bridge.fn.bind(this, function (delete_method_reply) {
                    this.PrintLog([delete_method_reply]);
                    this.UpdateMethods();
                });
                var class_name = this._classTree.SelectedClass;
                var is_class_method = this._methodTabs.IsClassMethod;
                var method_name = this._methodTabs.SelectedMethod;
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$DeleteMethod(class_name, is_class_method, method_name, fn);
            },
            OnRefresh: function () {
                this.ClearAll();
                this.Refresh();
            },
            OnSave: function () {
                var src = this._sourceEditor.Value.trim();
                if (src.length === 0) {
                    return;
                }
                if (System.String.startsWith(src, "class ")) {
                    this.OnSaveClass();
                } else {
                    if (System.String.startsWith(src, "def ")) {
                        this.OnSaveMethod();
                    }
                }
            },
            OnSaveClass: function () {
                var fn = Bridge.fn.bind(this, function (save_class_reply) {
                    this.PrintLog([save_class_reply]);
                    VistaLibQx.qx.ui.popup.Popup.ShowMessage(save_class_reply);
                    this.Refresh();
                });
                var class_definition = this._sourceEditor.Value;
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$SaveClass(class_definition, fn);
            },
            OnSaveMethod: function () {
                var fn = Bridge.fn.bind(this, function (save_method_reply) {
                    this.PrintLog([save_method_reply]);
                    VistaLibQx.qx.ui.popup.Popup.ShowMessage(save_method_reply);
                    this.UpdateMethods();
                });
                var selected_class = this._classTree.SelectedClass;
                var is_class_method = this._methodTabs.IsClassMethod;
                var method_src = this._sourceEditor.Value;
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$SaveMethod(selected_class, is_class_method, method_src, fn);
            },
            OnSaveImage: function () {
                var fn = Bridge.fn.bind(this, function (save_image_reply) {
                    this.PrintLog([save_image_reply]);
                    VistaLibQx.qx.ui.popup.Popup.ShowMessage(save_image_reply);
                });
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$SaveImage(fn);
            },
            Refresh: function () {
                if (this._classTree == null) {
                    return;
                }
                var fn = Bridge.fn.bind(this, function (tree_data) {
                    this._classTree.Refresh(tree_data);
                });
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$GetClassTree(fn);
            },
            UpdateMethodSource: function () {
                var selectedClass = this._classTree.SelectedClass;
                var selectedMethod = this._methodTabs.SelectedMethod;
                var isClassMethod = this._methodTabs.IsClassMethod;
                var fn = Bridge.fn.bind(this, function (src) {
                    this.UpdateSource(src);
                });
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$GetMethodSource(selectedClass, selectedMethod, isClassMethod, fn);
            },
            UpdateMethods: function () {
                var selectedClass = this._classTree.SelectedClass;
                var updateSourceFn = Bridge.fn.bind(this, function (class_source) {
                    this.UpdateSource(class_source);
                });
                var updateClassMethodsFn = Bridge.fn.bind(this, function (class_methods_data) {
                    this._methodTabs.Update(class_methods_data);
                });
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$GetClassDefinition(selectedClass, updateSourceFn);
                this._vmApi.VistaLibQx$qx$interfaces$IVmApi$GetClassMethods(this._classTree.SelectedClass, updateClassMethodsFn);
            },
            UpdateSource: function (src) {
                if (src == null) {
                    this._sourceEditor.Clear();
                } else {
                    this._sourceEditor.Value = src;
                }
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.ConsoleWindow", {
        inherits: [VistaLibQx.qx.ui.windows.Window],
        fields: {
            _cin: null,
            _cout: null,
            _split: null,
            _vmApi: null
        },
        alias: ["HandleEvent", "VistaLibQx$util$IEventHandler$HandleEvent"],
        ctors: {
            ctor: function (vmApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.Window.ctor.call(this);
                this._vmApi = vmApi;
            }
        },
        methods: {
            CreateEditor: function () {
                return new VistaLibQx.qx.ui.embed.MonacoEditor();
            },
            DefaultEditor: function () {
                return new VistaLibQx.qx.ui.form.TextArea();
            },
            DefaultCaption: function () {
                return "Console";
            },
            DefaultButtons: function () {
                return System.Array.init([this.ButtonEval(), this.ButtonClearOut(), this.ButtonClearIn()], VistaLibQx.util.ButtonConfig);
            },
            DefaultCentered: function () {
                return true;
            },
            Init: function () {
                VistaLibQx.qx.ui.windows.Window.prototype.Init.call(this);
                this._cin = this.CreateEditor();
                this._cout = new VistaLibQx.qx.ui.form.TextArea();
                this._split = new VistaLibQx.qx.ui.splitpane.Pane("vertical");
                this._split.Add(this._cout);
                this._split.Add(this._cin);
                this.Add$1(this._split, "center");
            },
            ButtonClearIn: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Clear In", this);
            },
            ButtonClearOut: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Clear Out", this);
            },
            ButtonEval: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Eval", this);
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_clear_in": 
                        this.OnClearIn();
                        break;
                    case "on_clear_out": 
                        this.OnClearOut();
                        break;
                    case "on_eval": 
                        this.OnEval();
                        break;
                }
            },
            OnClearIn: function () {
                this._cin.Clear();
            },
            OnClearOut: function () {
                this._cout.Clear();
            },
            OnEval: function () {
                var fn = Bridge.fn.bind(this, function (x) {
                    this._cout.Value = System.String.concat(x, "");
                });
                var expr = this._cin.Value;
                this.VmEvalExpr(expr, fn);
            },
            VmEvalExpr: function (expr, fn) { }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.dashboard.DashboardWindow", {
        inherits: [VistaLibQx.qx.ui.windows.Window],
        fields: {
            _applicationsPage: null,
            _applicationsPanel: null,
            _messagesPage: null,
            _messagesPanel: null,
            _newsPage: null,
            _newsPanel: null,
            _serverApi: null,
            _settingsPage: null,
            _tabView: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.Window.ctor.call(this);
                this._serverApi = serverApi;
                this.BuildContent();
            }
        },
        methods: {
            BuildContent: function () {
                this._applicationsPanel = new VistaLibQx.qx.ui.windows.dashboard.panels.DashboardApplicationsPanel(this._serverApi);
                this._applicationsPage.Add(this._applicationsPanel);
                this._messagesPanel = new VistaLibQx.qx.ui.windows.dashboard.panels.DashboardMessagesPanel(this._serverApi);
                this._messagesPage.AddCenter(this._messagesPanel);
                this._newsPanel = new VistaLibQx.qx.ui.windows.dashboard.panels.DashboardNewsPanel(this._serverApi);
                this._newsPage.Add(this._newsPanel);
            },
            DefaultCaption: function () {
                return "Dashboard Window";
            },
            DefaultHeight: function () {
                return 475;
            },
            DefaultWidth: function () {
                return 535;
            },
            Init: function () {
                VistaLibQx.qx.ui.windows.Window.prototype.Init.call(this);
                this._tabView = new VistaLibQx.qx.ui.tabview.TabView();
                this.Add$1(this._tabView, "center");
                this._newsPage = this._tabView.AddPage("News");
                this._applicationsPage = this._tabView.AddPage("Applications");
                this._messagesPage = this._tabView.AddPage("Messages");
                this._settingsPage = this._tabView.AddPage("Settings");
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.dashboard.panels.DashboardApplicationsPanel", {
        inherits: [VistaLibQx.qx.ui.container.Composite],
        fields: {
            _serverApi: null,
            _table: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                VistaLibQx.qx.ui.container.Composite.ctor.call(this);
                this._serverApi = serverApi;
            }
        },
        methods: {
            Init: function () {
                VistaLibQx.qx.ui.container.Composite.prototype.Init.call(this);
                this._table = new VistaLibQx.qx.ui.windows.dashboard.panels.DashboardApplicationsTable();
                this.AddCenter(this._table);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.dashboard.panels.DashboardApplicationsTable", {
        inherits: [VistaLibQx.qx.ui.table.Table],
        methods: {
            DefaultColumns: function () {
                return System.Array.init(["App Name", "Owner", "Last Updated"], System.String);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.dashboard.panels.DashboardMessagesPanel", {
        inherits: [VistaLibQx.qx.ui.container.Composite],
        fields: {
            _serverApi: null,
            _table: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                VistaLibQx.qx.ui.container.Composite.ctor.call(this);
                this._serverApi = serverApi;
            }
        },
        methods: {
            Init: function () {
                VistaLibQx.qx.ui.container.Composite.prototype.Init.call(this);
                this._table = new VistaLibQx.qx.ui.windows.dashboard.panels.DashboardMessagesTable();
                this.AddCenter(this._table);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.dashboard.panels.DashboardMessagesTable", {
        inherits: [VistaLibQx.qx.ui.table.Table],
        methods: {
            DefaultColumns: function () {
                return System.Array.init(["From", "Subject", "Date"], System.String);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.FileBrowserWindow", {
        inherits: [VistaLibQx.qx.ui.windows.Window],
        statics: {
            fields: {
                fileDirPath: null
            },
            ctors: {
                init: function () {
                    this.fileDirPath = "python";
                }
            }
        },
        fields: {
            _filesApi: null,
            _list: null,
            _selectedFileName: null,
            _serverApi: null,
            _split: null,
            _src: null,
            _vmApi: null
        },
        alias: ["HandleEvent", "VistaLibQx$util$IEventHandler$HandleEvent"],
        ctors: {
            init: function () {
                this._selectedFileName = "";
            },
            ctor: function (fileApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.Window.ctor.call(this);
                this._filesApi = fileApi;
                this.Refresh();
            },
            $ctor1: function (filesApi, serverApi, vmApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.Window.ctor.call(this);
                this._filesApi = filesApi;
                this._serverApi = serverApi;
                this._vmApi = vmApi;
                this.Refresh();
            }
        },
        methods: {
            DefaultCaption: function () {
                return "File Browser";
            },
            DefaultButtons: function () {
                var buttons = Bridge.fn.bind(this, function (_o1) {
                        _o1.add(this.ButtonRefresh());
                        _o1.add(this.ButtonRun());
                        _o1.add(this.ButtonSave());
                        return _o1;
                    })(new (System.Collections.Generic.List$1(VistaLibQx.util.ButtonConfig)).ctor());
                return buttons.ToArray();
            },
            DefaultCentered: function () {
                return true;
            },
            DisplayContent: function (content) {
                this._src.Value = VistaLibQx.util.StringUtil.AsAscii(content);
            },
            DisplayList: function (fnames) {
                var $t;
                this._list.Clear();
                $t = Bridge.getEnumerator(fnames);
                try {
                    while ($t.moveNext()) {
                        var fname = $t.Current;
                        this._list.Add(fname);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            DisplayUpdated: function (msg) {
                this.Refresh();
            },
            OnChangeSelection: function () {
                var path = this.SelectedPath();
                if (path.length > 0) {
                    var fn = Bridge.fn.bind(this, function (x) {
                        this.DisplayContent(x);
                    });
                    this._filesApi.VistaLibQx$qx$interfaces$IFilesApi$ReadFile(path, fn);
                }
            },
            SelectedPath: function () {
                this._selectedFileName = this._list.SelectedLabel();
                if (this._selectedFileName.length === 0) {
                    return "";
                } else {
                    return System.String.format("{0}/{1}", VistaLibQx.qx.ui.windows.FileBrowserWindow.fileDirPath, this._selectedFileName);
                }
            },
            Init: function () {
                VistaLibQx.qx.ui.windows.Window.prototype.Init.call(this);
                this._list = new VistaLibQx.qx.ui.form.ListBox();
                this._list.OnChangeSelectionHandler(Bridge.fn.cacheBind(this, this.OnChangeSelection));
                this._src = this.CreatePythonEditor();
                this._split = new VistaLibQx.qx.ui.splitpane.Pane("horizontal");
                this._split.Add(this._list, 2);
                this._split.Add(this._src, 3);
                this.Add$1(this._split, "center");
            },
            ButtonRefresh: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Refresh", this);
            },
            ButtonRun: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Run", this);
            },
            ButtonSave: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Save", this);
            },
            ButtonUpload: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Upload", this);
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_refresh": 
                        this.OnRefresh();
                        break;
                    case "on_run": 
                        this.OnRun();
                        break;
                    case "on_save": 
                        this.OnSave();
                        break;
                    case "on_upload": 
                        this.OnUpload();
                        break;
                }
            },
            OnRefresh: function () {
                this.Refresh();
            },
            OnRun: function () { },
            OnSave: function () {
                this.Save();
            },
            OnUpload: function () {
                this.Upload();
            },
            Refresh: function () {
                this._selectedFileName = "";
                this._src.Clear();
                var fn = Bridge.fn.bind(this, function (x) {
                    var fnames = x;
                    this.DisplayList(fnames);
                });
                this._filesApi.VistaLibQx$qx$interfaces$IFilesApi$ListFiles(".", fn);
            },
            Save: function () {
                var path = this.SelectedPath();
                if (path.length === 0) {
                    return;
                }
            },
            Upload: function () {
                var path = this.SelectedPath();
                if (path.length === 0) {
                    return;
                }
                var fileName = this._selectedFileName;
                var content = this._src.Value;
                var fn = Bridge.fn.cacheBind(this, this.UploadReply);
                this._serverApi.VistaLibQx$qx$interfaces$IServerApi$UploadFile(fileName, content, fn);
            },
            UploadReply: function (reply) {
                VistaLibQx.qx.ui.popup.Popup.ShowMessage(reply);
                this.PrintLog([reply]);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.image_viewer.ImageViewerWindow", {
        inherits: [VistaLibQx.qx.ui.windows.Window],
        fields: {
            _scrollableImage: null
        },
        methods: {
            DefaultCaption: function () {
                return "VistaPython Desktop Screenshot";
            },
            DefaultImagePath: function () {
                return "docs/images/VistaPythonDesktop.PNG";
            },
            Init: function () {
                VistaLibQx.qx.ui.windows.Window.prototype.Init.call(this);
                this._scrollableImage = new VistaLibQx.qx.ui.embed.ScrollableImage(this.DefaultImagePath());
                this.Add$1(this._scrollableImage, "center");
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.TranscriptWindow", {
        inherits: [VistaLibQx.qx.ui.windows.Window],
        fields: {
            _transcriptPanel: null
        },
        alias: ["HandleEvent", "VistaLibQx$util$IEventHandler$HandleEvent"],
        methods: {
            Init: function () {
                VistaLibQx.qx.ui.windows.Window.prototype.Init.call(this);
                this._transcriptPanel = new VistaLibQx.qx.ui.form.TranscriptPanel();
            },
            AddContent: function () {
                this.Add$1(this._transcriptPanel, "center");
            },
            DefaultButtons: function () {
                return System.Array.init([this.ButtonClear()], VistaLibQx.util.ButtonConfig);
            },
            DefaultCaption: function () {
                return "Transcript";
            },
            DefaultLocation: function () {
                return System.Array.init([VistaLibQx.qx.constants.DesktopConstants.TranscriptLeftInset, VistaLibQx.qx.constants.DesktopConstants.TranscriptTopInset], System.Int32);
            },
            DefaultHeight: function () {
                return 325;
            },
            DefaultWidth: function () {
                return 235;
            },
            ButtonClear: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Clear", this);
            },
            HandleEvent: function (eventName) {
                this._transcriptPanel.Clear();
            },
            PerformAction$1: function (action, args) {
                switch (action) {
                    case "clear": 
                        this.Clear();
                        break;
                    case "newline": 
                        this._transcriptPanel.Newline();
                        break;
                    case "pr": 
                        this.Pr(args[System.Array.index(0, args)]);
                        break;
                    case "prn": 
                        this.Prn(args[System.Array.index(0, args)]);
                        break;
                    default: 
                        return VistaLibQx.qx.ui.windows.Window.prototype.PerformAction$1.call(this, action, args);
                }
                return true;
            },
            Clear: function () {
                this._transcriptPanel.Clear();
            },
            Newline: function () {
                this._transcriptPanel.Newline();
            },
            Pr: function (obj) {
                this._transcriptPanel.Print(obj);
            },
            Prn: function (obj) {
                this._transcriptPanel.PrintLn(obj);
            },
            Space: function () {
                this.Pr(Bridge.box(32, System.Char, String.fromCharCode, System.Char.getHashCode));
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.tutorial.TutorialWindow", {
        inherits: [VistaLibQx.qx.ui.windows.Window],
        fields: {
            _serverApi: null,
            _tutorialPanel: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.Window.ctor.call(this);
                this._serverApi = serverApi;
                this.BuildContent();
            }
        },
        methods: {
            BuildContent: function () {
                this._tutorialPanel = new VistaLibQx.qx.ui.embed.TutorialPanel(this._serverApi);
                this.Add$1(this._tutorialPanel, "center");
            },
            DefaultCaption: function () {
                return "Tutorial Window";
            },
            DefaultHeight: function () {
                return 475;
            },
            DefaultWidth: function () {
                return 535;
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.NewsPanel", {
        inherits: [VistaLibQx.qx.ui.embed.ScrollableHtml],
        fields: {
            _writer: null
        },
        methods: {
            DefaultPadding: function () {
                return System.Array.init([7, 12], System.Int32);
            },
            DefaultScrollX: function () {
                return false;
            },
            DefaultStyle: function () {
                return null;
            },
            DefaultWriter: function () {
                return new VistaLibQx.util.NewsWriter();
            },
            Generate: function () {
                if (this._writer == null) {
                    this._writer = this.DefaultWriter();
                }
                this._writer.Generate();
                this.Html = this._writer.toString();
            },
            SetStyles: function () {
                VistaLibQx.qx.ui.embed.ScrollableHtml.prototype.SetStyles.call(this);
                this.SetStyle("fontSize", "13px");
                this.SetStyle("fontFamily", "helvetica,arial,verdana,sans-serif");
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.ScrollableImage", {
        inherits: [VistaLibQx.qx.ui.embed.ScrollableHtml],
        fields: {
            _imageSrc: null
        },
        ctors: {
            ctor: function (imageSrc) {
                this.$initialize();
                VistaLibQx.qx.ui.embed.ScrollableHtml.ctor.call(this);
                this._imageSrc = imageSrc;
            }
        },
        methods: {
            DefaultHtml: function () {
                return System.String.format("<img src=\"{0}\">", [this._imageSrc]);
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.TutorialPanel", {
        inherits: [VistaLibQx.qx.ui.embed.ScrollableHtml],
        fields: {
            _serverApi: null
        },
        props: {
            TutorialPath: {
                get: function () {
                    return "docs/tutorial";
                }
            }
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                VistaLibQx.qx.ui.embed.ScrollableHtml.ctor.call(this);
                VistaLibQx.qx.ui.embed.ScrollableHtml.prototype.Init.call(this);
                this._serverApi = serverApi;
                this.LoadHtml();
            }
        },
        methods: {
            DefaultPadding: function () {
                return System.Array.init([7, 12], System.Int32);
            },
            DefaultStyle: function () {
                return null;
            },
            LoadHtml: function () {
                var fn = null;
                this.Html = "";

                fn = Bridge.fn.bind(this, function (html) {
                    this.Html = System.String.concat(this.Html, html);
                });
                this._serverApi.VistaLibQx$qx$interfaces$IServerApi$GetHtml(this.TutorialPath, "overview.html", fn);
            },
            SetStyles: function () {
                VistaLibQx.qx.ui.embed.ScrollableHtml.prototype.SetStyles.call(this);
                this.SetStyle("fontSize", "13px");
                this.SetStyle("fontFamily", "helvetica,arial,verdana,sans-serif");
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.embed.VistaLabel", {
        inherits: [VistaLibQx.qx.ui.embed.NavbarLabel]
    });

    Bridge.define("VistaLibQx.qx.ui.form.FormMenuButton", {
        inherits: [VistaLibQx.qx.ui.form.Button],
        fields: {
            _menu: null
        },
        props: {
            Menu: {
                get: function () {
                    return this._menu;
                },
                set: function (value) {
                    this._menu = value;
                }
            }
        },
        ctors: {
            ctor: function (label) {
                this.$initialize();
                VistaLibQx.qx.ui.form.Button.ctor.call(this, label);
                this.Menu = new VistaLibQx.qx.ui.menu.Menu();
            }
        },
        methods: {
            AddButton: function (label) {
                var button = new VistaLibQx.qx.ui.form.FormMenuButton(label);
                this.Menu.Add(button);
                return button;
            },
            QxClass: function () {
                return "qx.ui.form.MenuButton";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.PasswordField", {
        inherits: [VistaLibQx.qx.ui.form.TextField],
        methods: {
            QxClass: function () {
                return "qx.ui.form.PasswordField";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.form.TranscriptPanel", {
        inherits: [VistaLibQx.qx.ui.form.TextArea],
        methods: {
            Newline: function () {
                VistaLibQx.qx.ui.form.TextArea.prototype.Newline.call(this);
                this.ScrollToBottom();
            },
            SetStyles: function () { }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.toolbar.ToolbarButton", {
        inherits: [VistaLibQx.qx.ui.form.Button],
        ctors: {
            ctor: function (label) {
                this.$initialize();
                VistaLibQx.qx.ui.form.Button.ctor.call(this, label);
            },
            $ctor1: function (label, handler) {
                this.$initialize();
                VistaLibQx.qx.ui.form.Button.$ctor1.call(this, label, handler);
            },
            $ctor2: function (config) {
                this.$initialize();
                VistaLibQx.qx.ui.form.Button.$ctor2.call(this, config);
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.toolbar.Button";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.tree.TreeFile", {
        inherits: [VistaLibQx.qx.ui.tree.core.AbstractTreeItem],
        methods: {
            QxClass: function () {
                return "qx.ui.tree.TreeFile";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.tree.TreeFolder", {
        inherits: [VistaLibQx.qx.ui.tree.core.AbstractTreeItem],
        methods: {
            QxClass: function () {
                return "qx.ui.tree.TreeFolder";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.widgets.navbar.NavBar", {
        inherits: [VistaLibQx.qx.ui.menubar.MenuBar],
        fields: {
            _image: null,
            _label: null,
            NavHeight: 0
        },
        alias: ["Decorate$1", "VistaLibQx$qx$interfaces$IDecorate$Decorate"],
        methods: {
            AddButtons: function () { },
            AddImage: function () {
                this._image = this.CreateImage();
                if (this._image != null) {
                    this.Add(this._image);
                }
            },
            AddLabel: function () {
                this._label = this.CreateLabel();
                this.Add(this._label);
            },
            CreateImage: function () {
                return null;
            },
            CreateLabel: function () {
                return new VistaLibQx.qx.ui.embed.NavbarLabel();
            },
            Decorate$1: function (widget) {
                var decorator = new VistaLibQx.qx.ui.decoration.Decorator();
                decorator.BackgroundColor = this.DefaultBackgroundColor();
                widget.Decorator = decorator;
                widget.TextColor = VistaLibQx.qx.constants.Colors.ColorWhite;
            },
            DefaultBackgroundColor: function () {
                return VistaLibQx.qx.constants.Colors.ColorDarkBlue;
            },
            DefaultHeight: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarHeight;
            },
            DefaultNavBarLabelText: function () {
                return "a label";
            },
            DefaultPadding: function () {
                return System.Array.init([0, 25], System.Int32);
            },
            Init: function () {
                VistaLibQx.qx.ui.menubar.MenuBar.prototype.Init.call(this);
                this.AddImage();
                this.AddLabel();
                this.AddButtons();
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.class_browser.ClassBrowserTree", {
        inherits: [VistaLibQx.qx.ui.tree.Tree],
        fields: {
            _selected_class: null,
            _window: null
        },
        props: {
            SelectedClass: {
                get: function () {
                    return this._selected_class;
                }
            }
        },
        ctors: {
            ctor: function ($window) {
                this.$initialize();
                VistaLibQx.qx.ui.tree.Tree.ctor.call(this);
                this._window = $window;
                this._selected_class = "";
            }
        },
        methods: {
            AddListeners: function () {
                var handler = Bridge.fn.cacheBind(this, this.HandleChangeClassSelection);
                this.NativeObject.addListener("changeSelection", handler);
            },
            Clear: function () {
                this._selected_class = "";
            },
            HandleChangeClassSelection: function () {
                var selection = this.NativeObject.getSelection();
                if (Bridge.referenceEquals(selection.length, 0)) {
                    return;
                }
                this._selected_class = selection[0].getLabel();
                this._window.UpdateMethods();
            },
            Refresh: function (data) {
                VistaLibQx.qx.ui.tree.Tree.prototype.Refresh.call(this, data);
                this.Clear();
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.menubar.Button", {
        inherits: [VistaLibQx.qx.ui.form.FormMenuButton],
        ctors: {
            ctor: function (label) {
                this.$initialize();
                VistaLibQx.qx.ui.form.FormMenuButton.ctor.call(this, label);
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.menubar.Button";
            }
        }
    });

    Bridge.define("VistaLibQx.qx.ui.windows.dashboard.panels.DashboardNewsPanel", {
        inherits: [VistaLibQx.qx.ui.embed.NewsPanel],
        fields: {
            _serverApi: null
        },
        props: {
            NewsJsonPath: {
                get: function () {
                    return "docs/news";
                }
            }
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                VistaLibQx.qx.ui.embed.NewsPanel.ctor.call(this);
                this._serverApi = serverApi;
                this.LoadIndexJson();
            }
        },
        methods: {
            LoadHtmlList: function (topics) {
                var fn = null;

                if (topics.Count === 0) {
                    return;
                }
                var topic = topics.getItem(0);
                topics.removeAt(0);
                fn = Bridge.fn.bind(this, function (html) {
                    this.Html = System.String.concat(this.Html, html);
                    this.LoadHtmlList(topics);
                });
                this._serverApi.VistaLibQx$qx$interfaces$IServerApi$GetHtml(this.NewsJsonPath, topic, fn);
            },
            LoadIndexJson: function () {
                var fn = null;
                this.Html = "";

                fn = Bridge.fn.bind(this, function (val) {
                    var $t;
                    var str = val;
                    var list = System.String.split(str, [10].map(function (i) {{ return String.fromCharCode(i); }}));
                    var topics = new (System.Collections.Generic.List$1(System.String)).ctor();
                    $t = Bridge.getEnumerator(list);
                    try {
                        while ($t.moveNext()) {
                            var s = $t.Current;
                            var topic = s.trim();
                            if (topic.length === 0) {
                                continue;
                            }
                            topics.add(topic);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    this.LoadHtmlList(topics);
                });
                this._serverApi.VistaLibQx$qx$interfaces$IServerApi$GetTopicsList(this.NewsJsonPath, fn);
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJWaXN0YUxpYlF4LmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJxeC9jb25zdGFudHMvRGVza3RvcENvbnN0YW50cy5jcyIsInF4L2NvcmUvUW9iamVjdC5jcyIsInV0aWwvQmFzZTY0LmNzIiwidXRpbC9CdXR0b25Db25maWcuY3MiLCJ1dGlsL0h0bWxXcml0ZXIuY3MiLCJ1dGlsL0pzb24uY3MiLCJ1dGlsL1BhcnNlVXRpbC5jcyIsInV0aWwvU3RyaW5nVXRpbC5jcyIsInV0aWwvU3R5bGVVdGlsLmNzIiwicXgvaHRtbC9FbGVtZW50LmNzIiwicXgvaW8vcmVxdWVzdC9BYnN0cmFjdFJlcXVlc3QuY3MiLCJxeC91aS9jb3JlL0xheW91dEl0ZW0uY3MiLCJxeC91aS9tZW51L01hbmFnZXIuY3MiLCJxeC91aS90YWJsZS9BYnN0cmFjdFRhYmxlTW9kZWwuY3MiLCJxeC91aS90YWJsZS9CYXNpY0NvbHVtbk1vZGVsLmNzIiwicXgvdWkvdXRpbC9UZXh0TWVhc3VyZS5jcyIsInV0aWwvTmV3c1dyaXRlci5jcyIsInF4L2lvL3JlcXVlc3QvWGhyLmNzIiwicXgvdWkvY29yZS9XaWRnZXQuY3MiLCJxeC91aS9kZWNvcmF0aW9uL0RlY29yYXRvci5jcyIsInF4L3VpL2xheW91dC9BdG9tLmNzIiwicXgvdWkvbGF5b3V0L0Jhc2ljLmNzIiwicXgvdWkvbGF5b3V0L0NhbnZhcy5jcyIsInF4L3VpL2xheW91dC9Eb2NrLmNzIiwicXgvdWkvbGF5b3V0L0Zsb3cuY3MiLCJxeC91aS9sYXlvdXQvR3JpZC5jcyIsInF4L3VpL2xheW91dC9Hcm93LmNzIiwicXgvdWkvbGF5b3V0L0hCb3guY3MiLCJxeC91aS9sYXlvdXQvVkJveC5jcyIsInF4L3VpL3RhYmxlL1Jlc2l6ZUNvbHVtbk1vZGVsLmNzIiwicXgvdWkvdGFibGUvU2ltcGxlVGFibGVNb2RlbC5jcyIsInV0aWwvVmlsbGFnZU5ld3NXcml0ZXIuY3MiLCJxeC91aS9iYXNpYy9BdG9tLmNzIiwicXgvdWkvYmFzaWMvSW1hZ2UuY3MiLCJxeC91aS9jb250YWluZXIvQ29tcG9zaXRlLmNzIiwicXgvdWkvZW1iZWQvSUZyYW1lLmNzIiwicXgvdWkvZW1iZWQvSHRtbEVtYmVkLmNzIiwicXgvdWkvZm9ybS9BYnN0cmFjdEZpZWxkLmNzIiwicXgvdWkvZm9ybS9TcGxpdEJ1dHRvbi5jcyIsInF4L3VpL21lbnUvTWVudS5jcyIsInF4L3VpL21lbnUvU2VwYXJhdG9yLmNzIiwicXgvdWkvdG9vbGJhci9Ub29sQmFyLmNzIiwicXgvdWkvc3BsaXRwYW5lL1BhbmUuY3MiLCJxeC91aS90YWJsZS9UYWJsZS5jcyIsInF4L3VpL3RhYnZpZXcvVGFiVmlldy5jcyIsInF4L3VpL3Rvb2xiYXIvU2VwYXJhdG9yLmNzIiwicXgvdWkvdHJlZS9jb3JlL0Fic3RyYWN0SXRlbS5jcyIsInF4L3VpL3dpbmRvd3MvV2luZG93LmNzIiwicXgvdWkvd2luZG93cy9EZXNrdG9wLmNzIiwicXgvdWkvYmFzaWMvTmF2YmFySW1hZ2UuY3MiLCJxeC91aS9lbWJlZC9Db2RlTWlycm9yRWRpdG9yLmNzIiwicXgvdWkvZW1iZWQvTW9uYWNvRWRpdG9yLmNzIiwicXgvdWkvZW1iZWQvTmF2YmFyTGFiZWwuY3MiLCJxeC91aS9lbWJlZC9TY3JvbGxhYmxlSHRtbC5jcyIsInF4L3VpL2Zvcm0vQnV0dG9uLmNzIiwicXgvdWkvZm9ybS9MaXN0Qm94LmNzIiwicXgvdWkvZm9ybS9MaXN0SXRlbS5jcyIsInF4L3VpL2Zvcm0vVGV4dEZpZWxkLmNzIiwicXgvdWkvZm9ybS9UZXh0QXJlYS5jcyIsInF4L3VpL21lbnUvQ2hlY2tCb3guY3MiLCJxeC91aS9tZW51L01lbnVCdXR0b24uY3MiLCJxeC91aS9tZW51L1JhZGlvQnV0dG9uLmNzIiwicXgvdWkvbWVudWJhci9NZW51QmFyLmNzIiwicXgvdWkvcG9wdXAvUG9wdXAuY3MiLCJxeC91aS90YWJ2aWV3L1BhZ2UuY3MiLCJxeC91aS90cmVlL2NvcmUvQWJzdHJhY3RUcmVlSXRlbS5jcyIsInF4L3VpL3RyZWUvVHJlZS5jcyIsInF4L3VpL3dpZGdldHMvQnV0dG9uQmFyLmNzIiwicXgvdWkvd2lkZ2V0cy9uYXZiYXIvVG9vbHNCdXR0b24uY3MiLCJxeC91aS93aW5kb3dzL2NsYXNzX2Jyb3dzZXIvQ2xhc3NCcm93c2VyTWV0aG9kVGFicy5jcyIsInF4L3VpL3dpbmRvd3MvY2xhc3NfYnJvd3Nlci9DbGFzc0Jyb3dzZXJXaW5kb3cuY3MiLCJxeC91aS93aW5kb3dzL2NvbnNvbGUvQ29uc29sZVdpbmRvdy5jcyIsInF4L3VpL3dpbmRvd3MvZGFzaGJvYXJkL0Rhc2hib2FyZFdpbmRvdy5jcyIsInF4L3VpL3dpbmRvd3MvZGFzaGJvYXJkL3BhbmVscy9EYXNoYm9hcmRBcHBsaWNhdGlvbnNQYW5lbC5jcyIsInF4L3VpL3dpbmRvd3MvZGFzaGJvYXJkL3BhbmVscy9EYXNoYm9hcmRBcHBsaWNhdGlvbnNUYWJsZS5jcyIsInF4L3VpL3dpbmRvd3MvZGFzaGJvYXJkL3BhbmVscy9EYXNoYm9hcmRNZXNzYWdlc1BhbmVsLmNzIiwicXgvdWkvd2luZG93cy9kYXNoYm9hcmQvcGFuZWxzL0Rhc2hib2FyZE1lc3NhZ2VzVGFibGUuY3MiLCJxeC91aS93aW5kb3dzL2ZpbGVfYnJvd3Nlci9GaWxlQnJvd3NlcldpbmRvdy5jcyIsInF4L3VpL3dpbmRvd3MvaW1hZ2Vfdmlld2VyL0ltYWdlVmlld2VyV2luZG93LmNzIiwicXgvdWkvd2luZG93cy90cmFuc2NyaXB0L1RyYW5zY3JpcHRXaW5kb3cuY3MiLCJxeC91aS93aW5kb3dzL3R1dG9yaWFsL1R1dG9yaWFsV2luZG93LmNzIiwicXgvdWkvZW1iZWQvTmV3c1BhbmVsLmNzIiwicXgvdWkvZW1iZWQvU2Nyb2xsYWJsZUltYWdlLmNzIiwicXgvdWkvZW1iZWQvVHV0b3JpYWxQYW5lbC5jcyIsInF4L3VpL2Zvcm0vRm9ybU1lbnVCdXR0b24uY3MiLCJxeC91aS9mb3JtL1Bhc3N3b3JkRmllbGQuY3MiLCJxeC91aS9mb3JtL1RyYW5zY3JpcHRQYW5lbC5jcyIsInF4L3VpL3Rvb2xiYXIvVG9vbGJhckJ1dHRvbi5jcyIsInF4L3VpL3RyZWUvVHJlZUZpbGUuY3MiLCJxeC91aS90cmVlL1RyZWVGb2xkZXIuY3MiLCJxeC91aS93aWRnZXRzL25hdmJhci9OYXZCYXIuY3MiLCJxeC91aS93aW5kb3dzL2NsYXNzX2Jyb3dzZXIvQ2xhc3NCcm93c2VyVHJlZS5jcyIsInF4L3VpL21lbnViYXIvQnV0dG9uLmNzIiwicXgvdWkvd2luZG93cy9kYXNoYm9hcmQvcGFuZWxzL0Rhc2hib2FyZE5ld3NQYW5lbC5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQU00Q0E7b0RBQ1dBOzs7OztpREFLTEE7Ozs7OENBSUhBLHlEQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQ29EMUJBO29CQUV4QkEseUJBQXdDQSxNQUFNQTs7Ozs7Ozs7Ozs7b0JBMEIxQ0EsY0FBaUJBO29CQUNqQkEsT0FBT0E7Ozs7O29CQVFQQSxjQUFpQkE7b0JBQ2pCQSxPQUFPQTs7Ozs7NEJBNUZBQTs7OztnQkFFWEEsZ0JBQVdBO2dCQUNYQTs7OzttQ0FHNEJBLFdBQWtCQTtnQkFFOUNBLDhCQUF5QkEsV0FBV0E7OztnQ0FPZEE7Z0JBRXRCQSxPQUFPQSw2QkFBcUJBOzs7Z0JBSzVCQTtnQkFDQUE7Ozs7Z0JBS0FBLG9CQUFlQSxZQUFPQSx1Q0FBWUE7OzhCQUdiQTtnQkFFckJBLE9BQU9BLDJCQUFtREEsV0FBV0E7OztnQkFLckVBLE9BQU9BOztxQ0FLZUE7Z0JBRXRCQSxPQUFPQSxxQkFBY0EsUUFBUUE7O3VDQUdDQSxRQUFlQTtnQkFHN0NBOztnQ0FRaUJBOztnQkFFakJBLDJD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QUt2Q0E7Ozs7Ozs7Ozs7Ozs7b0JDa0RZQTs7Ozs7NEJBckRrQkE7OztnQkFFdEJBLGtCQUFhQTtnQkFDYkE7Ozs7b0NBR2NBO2dCQUUxQkEsU0FBNEJBOztnQkFFaEJBLElBQUlBO29CQUNBQTs7Z0JBQ0pBLFlBQWVBO2dCQUNmQTtnQkFDWkEsS0FBS0EsK0JBQUNBO29CQUVGQSw0Q0FBUUE7b0JBQ1JBLGtCQUFhQTs7Z0JBSUxBLDREQUFtQkEsbUJBQWNBLE9BQU9BLEFBQXlCQTs7O2dCQUs3RUEsU0FBNEJBO2dCQUNoQkE7O2dCQUVaQSxLQUFLQSwrQkFBQ0E7O29CQUVGQSxVQUFhQTtvQkFDYkEsV0FBZ0JBO29CQUNoQkEsYUFBc0JBLEtBQUlBO29CQUMxQkEsMEJBQXFCQTs7Ozs0QkFFakJBLFlBQWVBOzRCQUNmQSxJQUFJQTtnQ0FDQUE7OzRCQUNKQSxXQUFXQTs7Ozs7Ozs7b0JBR2ZBLGtCQUFhQTs7Z0JBSUxBLGtFQUF5QkEsbUJBQWNBLEFBQXlCQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC5jb25zdGFudHNcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBEZXNrdG9wQ29uc3RhbnRzXHJcbiAgICB7XHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBzdHJpbmcgTmF2YmFyQmFja2dyb3VuZENvbG9yID0gXCIjOTBhYWQ1XCI7XHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBpbnQgTmF2YmFySGVpZ2h0ID0gNTA7XHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBpbnRbXSBOYXZiYXJQYWRkaW5nID0gbmV3IGludFtdIHsgMTAsIDM1IH07XHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBpbnRbXSBOYXZiYXJQeXRob25JbWFnZU1hcmdpbnMgPSBuZXcgaW50W10geyAzLCAwIH07XHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBpbnQgTmF2YmFyUHl0aG9uSW1hZ2VTaXplID0gMzA7XHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBzdHJpbmcgTmF2YmFyUHl0aG9uSW1hZ2VTb3VyY2UgPSBcImltYWdlcy9wcHl0aG9uLnBuZ1wiO1xyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgc3RyaW5nIE5hdmJhclB5dGhvblRleHQgPSBcIlBZVEhPTlwiO1xyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgaW50IE5hdmJhclB5dGhvblRleHRIZWlnaHQgPSAzMjtcclxuICAgICAgICBzdGF0aWMgcHVibGljIGludCBOYXZiYXJWaXN0YUxvZ29IZWlnaHQgPSBOYXZiYXJQeXRob25UZXh0SGVpZ2h0O1xyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgc3RyaW5nIE5hdmJhclZpc3RhTG9nb1NvdXJjZSA9IFwiaW1hZ2VzL3Zpc3RhX29wdGlvbi5wbmdcIjtcclxuICAgICAgICBzdGF0aWMgcHVibGljIGludCBOYXZiYXJWaXN0YUxvZ29XaWR0aCA9IDk1O1xyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgaW50IFRyYW5zY3JpcHRMZWZ0SW5zZXQgPSAxNTtcclxuICAgICAgICBzdGF0aWMgcHVibGljIGludCBUcmFuc2NyaXB0VG9wSW5zZXQgPSBOYXZiYXJIZWlnaHQgKyBUcmFuc2NyaXB0TGVmdEluc2V0O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC5jb3JlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUW9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBkZWxlZ2F0ZSB2b2lkIEZuVm9pZCgpO1xyXG4gICAgICAgIHB1YmxpYyBkZWxlZ2F0ZSB2b2lkIEZuVm9pZEEoZHluYW1pYyBhKTtcclxuICAgICAgICBwdWJsaWMgZGVsZWdhdGUgdm9pZCBGblZvaWRCKGR5bmFtaWMgYSwgZHluYW1pYyBiKTtcclxuICAgICAgICBwdWJsaWMgZGVsZWdhdGUgZHluYW1pYyBGblZhbHVlQShkeW5hbWljIGEpO1xyXG5cclxuICAgICAgICBzdHJpbmcgX3F4Q2xhc3M7XHJcblxyXG4gICAgICAgIHB1YmxpYyBRb2JqZWN0KHN0cmluZyBxeENsYXNzID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9xeENsYXNzID0gcXhDbGFzcztcclxuICAgICAgICAgICAgQmFzZUluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgQWRkTGlzdGVuZXIoc3RyaW5nIGV2ZW50TmFtZSwgRm5Wb2lkIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZnRlckluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzdHJpbmcgQXNTdHJpbmcob2JqZWN0IG8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcInswfVwiLCBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQmFzZUluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdCgpO1xyXG4gICAgICAgICAgICBBZnRlckluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QgPSBDcmVhdGUoX3F4Q2xhc3MgPz8gUXhDbGFzcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkeW5hbWljIENyZWF0ZShzdHJpbmcgY2xhc3NOYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNjcmlwdC5DYWxsPGR5bmFtaWM+KFwicXhsaWIuYXBwLkFwcC5jcmVhdGVXaWRnZXRcIiwgY2xhc3NOYW1lLCBDcmVhdGlvbkFyZ3MoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBkeW5hbWljW10gQ3JlYXRpb25BcmdzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgTmF0aXZlT2JqZWN0IHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgUGVyZm9ybUFjdGlvbihzdHJpbmcgYWN0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBlcmZvcm1BY3Rpb24oYWN0aW9uLCBuZXcgb2JqZWN0W10geyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgUGVyZm9ybUFjdGlvbihzdHJpbmcgYWN0aW9uLCBvYmplY3RbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QcmludExvZyhzdHJpbmcuRm9ybWF0KFwiUGVyZm9ybUFjdGlvbjogezB9KHsxfSlcIiwgYWN0aW9uLCBhcmdzLkxlbmd0aCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdm9pZCBQcmludENvbnNvbGVMb2coZHluYW1pY1tdIG1lc3NhZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2NyaXB0LkNhbGwoXCJ3aW5kb3cuY29uc29sZS5sb2cuYXBwbHlcIiwgbnVsbCwgbWVzc2FnZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUHJpbnRMb2cocGFyYW1zIGR5bmFtaWNbXSBtZXNzYWdlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFByaW50Q29uc29sZUxvZyhtZXNzYWdlcyk7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LmNvcmUuT2JqZWN0XCI7XHJcbn1cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXQoc3RyaW5nIG5hbWUsIGR5bmFtaWMgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGZ1bGxOYW1lID0gc3RyaW5nLkZvcm1hdChcIndpbmRvdy57MH1cIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIFNjcmlwdC5TZXQoZnVsbE5hbWUsIG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBTZXRHbG9iYWxYKGR5bmFtaWMgeClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNldChcIlhcIiwgeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpbmRvd0hlaWdodFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWMgd2luZG93ID0gU2NyaXB0LkdldChcIndpbmRvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgV2luZG93V2lkdGhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljIHdpbmRvdyA9IFNjcmlwdC5HZXQoXCJ3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgudXRpbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQmFzZTY0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgc3RyaW5nIEVuY29kZShzdHJpbmcgcGxhaW5UZXh0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBsYWluVGV4dEJ5dGVzID0gRW5jb2RpbmcuVVRGOC5HZXRCeXRlcyhwbGFpblRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gQ29udmVydC5Ub0Jhc2U2NFN0cmluZyhwbGFpblRleHRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgcHVibGljIHN0cmluZyBEZWNvZGUoc3RyaW5nIGJhc2U2NEVuY29kZWREYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGJhc2U2NFN0cjtcclxuICAgICAgICAgICAgaWYgKGJhc2U2NEVuY29kZWREYXRhLlN0YXJ0c1dpdGgoXCJiJ1wiKSlcclxuICAgICAgICAgICAgICAgIGJhc2U2NFN0ciA9IGJhc2U2NEVuY29kZWREYXRhLlN1YnN0cmluZygyLCBiYXNlNjRFbmNvZGVkRGF0YS5MZW5ndGggLSAzKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYmFzZTY0U3RyID0gYmFzZTY0RW5jb2RlZERhdGE7XHJcbiAgICAgICAgICAgIHZhciBiYXNlNjRFbmNvZGVkQnl0ZXMgPSBDb252ZXJ0LkZyb21CYXNlNjRTdHJpbmcoYmFzZTY0U3RyKTtcclxuICAgICAgICAgICAgcmV0dXJuIEVuY29kaW5nLlVURjguR2V0U3RyaW5nKGJhc2U2NEVuY29kZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC51dGlsXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQnV0dG9uQ29uZmlnXHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9ldmVudE5hbWU7XHJcbiAgICAgICAgaW50IF9mbGV4O1xyXG4gICAgICAgIElFdmVudEhhbmRsZXIgX2hhbmRsZXI7XHJcbiAgICAgICAgc3RyaW5nIF9sYWJlbDtcclxuICAgICAgICBpbnQgX3dpZHRoO1xyXG5cclxuICAgICAgICBwdWJsaWMgQnV0dG9uQ29uZmlnKGludCBmbGV4LCBpbnQgd2lkdGggPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2ZsZXggPSBmbGV4O1xyXG4gICAgICAgICAgICBfd2lkdGggPSB3aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCdXR0b25Db25maWcoc3RyaW5nIGxhYmVsLCBJRXZlbnRIYW5kbGVyIGhhbmRsZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBIYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICAgICAgRXZlbnROYW1lID0gc3RyaW5nLkZvcm1hdChcIm9uX3swfVwiLCBMYWJlbC5Ub0xvd2VyKCkuUmVwbGFjZSgnICcsICdfJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJ1dHRvbkNvbmZpZyhzdHJpbmcgbGFiZWwsIElFdmVudEhhbmRsZXIgaGFuZGxlciwgc3RyaW5nIGV2ZW50TmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgICAgIEhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICBFdmVudE5hbWUgPSBldmVudE5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEV2ZW50TmFtZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZXZlbnROYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZXZlbnROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgRmxleFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2ZsZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElFdmVudEhhbmRsZXIgSGFuZGxlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaGFuZGxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2hhbmRsZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBMYWJlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbGFiZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sYWJlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF93aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3dpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC51dGlsXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBIdG1sV3JpdGVyXHJcbiAgICB7XHJcbiAgICAgICAgU3RyaW5nQnVpbGRlciBfc2I7XHJcbiAgICAgICAgU3RhY2s8c3RyaW5nPiBfdGFnU3RhY2s7XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zYiA9IG5ldyBTdHJpbmdCdWlsZGVyKCk7XHJcbiAgICAgICAgICAgIF90YWdTdGFjayA9IG5ldyBTdGFjazxzdHJpbmc+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSHRtbFdyaXRlciBOZXdsaW5lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zYi5BcHBlbmRMaW5lKFwiPGJyPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSHRtbFdyaXRlciBQcihzdHJpbmcgcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zYi5BcHBlbmQocyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEh0bWxXcml0ZXIgUHJpbnRCb2xkKHN0cmluZyBzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByaW50U2ltcGxlVGFnKFwiYlwiLCBzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyIFByaW50SXRhbGljKHN0cmluZyBzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByaW50U2ltcGxlVGFnKFwiaVwiLCBzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyIFByaW50TG4oc3RyaW5nIHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcihzKTtcclxuICAgICAgICAgICAgTmV3bGluZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyIFByaW50UGFyYWdyYXBoKHN0cmluZyBwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByblNpbXBsZVRhZyhcInBcIiwgcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSHRtbFdyaXRlciBQcmludFBhcmFncmFwaHMocGFyYW1zIHN0cmluZ1tdIHBsaXN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIHAgaW4gcGxpc3QpXHJcbiAgICAgICAgICAgICAgICBQcmludFBhcmFncmFwaChwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSHRtbFdyaXRlciBQcmludFNpbXBsZVRhZyhzdHJpbmcgdGFnLCBzdHJpbmcgY29udGVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFByblNpbXBsZVRhZyh0YWcsIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBOZXdsaW5lKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEh0bWxXcml0ZXIgUHJuKHN0cmluZyBzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NiLkFwcGVuZExpbmUocyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEh0bWxXcml0ZXIgUHJuU2ltcGxlVGFnKHN0cmluZyB0YWcsIHN0cmluZyBjb250ZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHMgPSBzdHJpbmcuRm9ybWF0KFwiPHswfT57MX08L3swfT5cIiwgdGFnLCBjb250ZW50KTtcclxuICAgICAgICAgICAgUHJuKHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyIFNwYWNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zYi5BcHBlbmQoJyAnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfc2IuVG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBCcmlkZ2U7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC51dGlsXHJcbntcclxuXHJcbiAgICBzdGF0aWMgcHVibGljIGNsYXNzIEpzb25cclxuICAgIHtcclxuICAgICAgICBzdGF0aWMgZHluYW1pYyBfbmF0aXZlSnNvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHN0YXRpYyBkeW5hbWljIE5hdGl2ZUpzb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX25hdGl2ZUpzb24gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfbmF0aXZlSnNvbiA9IFNjcmlwdC5HZXQoXCJ3aW5kb3cuSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbmF0aXZlSnNvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBkeW5hbWljIERlY29kZShzdHJpbmcganNvblN0cmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlSnNvbi5wYXJzZShqc29uU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoRXhjZXB0aW9uIGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLk1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgc3RyaW5nIEVuY29kZShkeW5hbWljIG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBOYXRpdmVKc29uLnN0cmluZ2lmeShvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFN5c3RlbS5UZXh0LlJlZ3VsYXJFeHByZXNzaW9ucztcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnV0aWxcclxue1xyXG4gICBwdWJsaWMgY2xhc3MgUGFyc2VVdGlsXHJcbiAgICB7XHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBzdHJpbmdbXSBQYXJzZUNsYXNzRGVmKHN0cmluZyBjbGFzc19kZWYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBNYXRjaCBtYXRjaCA9IFJlZ2V4Lk1hdGNoKGNsYXNzX2RlZiwgQFwiY2xhc3NcXHMrKFtBLVpdW0EtWmEtejAtOV9dKilcXHMqXFwoXFxzKihbQS1aXVtBLVphLXowLTlfXSopXFxzKlxcKVxccypcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaC5TdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdHJpbmdbXSB7IG1hdGNoLkdyb3Vwc1sxXS5WYWx1ZSwgbWF0Y2guR3JvdXBzWzJdLlZhbHVlIH07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgc3RyaW5nW10geyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW0uVGV4dC5SZWd1bGFyRXhwcmVzc2lvbnM7XHJcblxyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgudXRpbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU3RyaW5nVXRpbFxyXG4gICAge1xyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgc3RyaW5nIEFzQXNjaWkoc3RyaW5nIHRleHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVnZXguUmVwbGFjZSh0ZXh0LCBAXCJbXlxcdTAwMDAtXFx1MDA3Rl0rXCIsIHN0cmluZy5FbXB0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgudXRpbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU3R5bGVVdGlsXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgdm9pZCBTZXRDc3MoV2lkZ2V0IHdpZGdldCwgc3RyaW5nIGNzc1N0cilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNjcmlwdC5DYWxsKFwid2luZG93LnF4LmJvbS5lbGVtZW50LlN0eWxlLnNldENzc1wiLCB3aWRnZXQuR2V0Q29udGVudEVsZW1lbnQoKS5OYXRpdmVPYmplY3QsIGNzc1N0cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC5odG1sXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRWxlbWVudCA6IFFvYmplY3RcclxuICAgIHtcclxuICAgICAgICBkeW5hbWljIF9kb21FbGVtZW50O1xyXG5cclxuICAgICAgICBwdWJsaWMgRWxlbWVudChkeW5hbWljIGVsZW1lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QgPSBlbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgRW5zdXJlRG9tRWxlbWVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2RvbUVsZW1lbnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIF9kb21FbGVtZW50ID0gTmF0aXZlT2JqZWN0LmdldERvbUVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkeW5hbWljIEdldERvbUVsZW1lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW5zdXJlRG9tRWxlbWVudCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gX2RvbUVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IEdldFNjcm9sbEhlaWdodCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbnN1cmVEb21FbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChfZG9tRWxlbWVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZG9tRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTY3JvbGxUbyhpbnQgc2Nyb2xsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW5zdXJlRG9tRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoX2RvbUVsZW1lbnQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIF9kb21FbGVtZW50LnNjcm9sbFRvKDAsIHNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTY3JvbGxUb0JvdHRvbSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTY3JvbGxUbyhHZXRTY3JvbGxIZWlnaHQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRTdHlsZShzdHJpbmcga2V5LCBkeW5hbWljIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFN0eWxlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXguY29yZTtcclxudXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXguaW8ucmVxdWVzdFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEFic3RyYWN0UmVxdWVzdCA6IFFvYmplY3RcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX2NvbnRlbnRUeXBlO1xyXG4gICAgICAgIGR5bmFtaWMgX3JlcXVlc3REYXRhO1xyXG4gICAgICAgIHN0cmluZyBfdXJsO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIENvbnRlbnRUeXBlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRlbnRUeXBlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBfY29udGVudFR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZHluYW1pYyBSZXNwb25zZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0UmVzcG9uc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgUmVzcG9uc2VKc29uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpzb24uRGVjb2RlKFJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUmVzcG9uc2VUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRSZXNwb25zZVRleHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgUmVxdWVzdERhdGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlcXVlc3REYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfcmVxdWVzdERhdGEgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRSZXF1ZXN0RGF0YShfcmVxdWVzdERhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZW5kKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFVybFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdXJsID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0VXJsKF91cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC5jb3JlO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuY29yZVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIExheW91dEl0ZW0gOiBRb2JqZWN0XHJcbiAgICB7XHJcbiAgICAgICAgaW50IF9oZWlnaHQ7XHJcbiAgICAgICAgaW50IF9tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgaW50IF9tYXJnaW5MZWZ0O1xyXG4gICAgICAgIGludCBfbWFyZ2luUmlnaHQ7XHJcbiAgICAgICAgaW50IF9tYXJnaW5Ub3A7XHJcbiAgICAgICAgTGF5b3V0SXRlbSBfcGFyZW50O1xyXG4gICAgICAgIGludCBfd2lkdGg7XHJcblxyXG4gICAgICAgIHB1YmxpYyBMYXlvdXRJdGVtKHN0cmluZyBxeENsYXNzID0gbnVsbCkgOiBiYXNlKHF4Q2xhc3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIHZpcnR1YWwgaW50IERlZmF1bHRIZWlnaHQoKVxyXG57XHJcbiAgICByZXR1cm4gRGVmYXVsdFNpemUoKTtcclxufXByb3RlY3RlZCB2aXJ0dWFsIGludCBEZWZhdWx0TWFyZ2luQm90dG9tKClcclxue1xyXG4gICAgcmV0dXJuIC0xO1xyXG59cHJvdGVjdGVkIHZpcnR1YWwgaW50IERlZmF1bHRNYXJnaW5MZWZ0KClcclxue1xyXG4gICAgcmV0dXJuIC0xO1xyXG59cHJvdGVjdGVkIHZpcnR1YWwgaW50IERlZmF1bHRNYXJnaW5SaWdodCgpXHJcbntcclxuICAgIHJldHVybiAtMTtcclxufXByb3RlY3RlZCB2aXJ0dWFsIGludCBEZWZhdWx0TWFyZ2luVG9wKClcclxue1xyXG4gICAgcmV0dXJuIC0xO1xyXG59cHJvdGVjdGVkIHZpcnR1YWwgaW50IERlZmF1bHRTaXplKClcclxue1xyXG4gICAgcmV0dXJuIC0xO1xyXG59cHJvdGVjdGVkIHZpcnR1YWwgaW50IERlZmF1bHRXaWR0aCgpXHJcbntcclxuICAgIHJldHVybiBEZWZhdWx0U2l6ZSgpO1xyXG59XHJcbiAgICAgICAgcHVibGljIGludCBIZWlnaHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2hlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2hlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9oZWlnaHQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0SGVpZ2h0KF9oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KCkge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgSGVpZ2h0ID0gRGVmYXVsdEhlaWdodCgpO1xyXG4gICAgICAgICAgICBXaWR0aCA9IERlZmF1bHRXaWR0aCgpO1xyXG4gICAgICAgICAgICBNYXJnaW5Cb3R0b20gPSBEZWZhdWx0TWFyZ2luQm90dG9tKCk7XHJcbiAgICAgICAgICAgIE1hcmdpbkxlZnQgPSBEZWZhdWx0TWFyZ2luTGVmdCgpO1xyXG4gICAgICAgICAgICBNYXJnaW5SaWdodCA9IERlZmF1bHRNYXJnaW5SaWdodCgpO1xyXG4gICAgICAgICAgICBNYXJnaW5Ub3AgPSBEZWZhdWx0TWFyZ2luVG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IE1hcmdpbkJvdHRvbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWFyZ2luQm90dG9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbWFyZ2luQm90dG9tID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX21hcmdpbkJvdHRvbSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW5Cb3R0b20oX21hcmdpbkJvdHRvbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWFyZ2luTGVmdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWFyZ2luTGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX21hcmdpbkxlZnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfbWFyZ2luTGVmdCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW5MZWZ0KF9tYXJnaW5MZWZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBNYXJnaW5SaWdodFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWFyZ2luUmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9tYXJnaW5SaWdodCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9tYXJnaW5SaWdodCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW5SaWdodChfbWFyZ2luUmlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IE1hcmdpblRvcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWFyZ2luVG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbWFyZ2luVG9wID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX21hcmdpblRvcCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW5Ub3AoX21hcmdpblRvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgT25QYXJlbnRSZXNpemUoKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTGF5b3V0SXRlbSBQYXJlbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIF9wYXJlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuY29yZS5MYXlvdXRJdGVtXCI7XHJcbn1cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF93aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3dpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3dpZHRoID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFdpZHRoKF93aWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5tZW51XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgTWFuYWdlciA6IFFvYmplY3RcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudS5NYW5hZ2VyXCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS50YWJsZVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEFic3RyYWN0VGFibGVNb2RlbCA6IFFvYmplY3RcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIFNldERhdGEoZHluYW1pYyBkYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYmxlLm1vZGVsLkFic3RyYWN0XCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS50YWJsZVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEJhc2ljQ29sdW1uTW9kZWwgOiBRb2JqZWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYmxlLm1vZGVsLkFic3RyYWN0XCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIFZpc3RhTGliUXgucXguY29yZTtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLnV0aWxcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBUZXh0TWVhc3VyZSA6IFFvYmplY3RcclxuICAgIHtcclxuICAgICAgICBzdGF0aWMgVGV4dE1lYXN1cmUgX2luc3RhbmNlO1xyXG4gICAgICAgIGR5bmFtaWMgX2NhbnZhcztcclxuICAgICAgICBkeW5hbWljIF9jdHg7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW50IEdldFdpZHRoKHN0cmluZyB0ZXh0LCBzdHJpbmcgZm9udEZhbWlseSwgc3RyaW5nIGZvbnRTaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEluc3RhbmNlLk1lYXN1cmVUZXh0KHRleHQsIGZvbnRGYW1pbHksIGZvbnRTaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVGV4dE1lYXN1cmUgSW5zdGFuY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2luc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgX2luc3RhbmNlID0gbmV3IFRleHRNZWFzdXJlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pbnN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVGV4dE1lYXN1cmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NhbnZhcyA9IFNjcmlwdC5DYWxsPGR5bmFtaWM+KFwiZG9jdW1lbnQuY3JlYXRlRWxlbWVudFwiLCBcImNhbnZhc1wiKTtcclxuICAgICAgICAgICAgX2N0eCA9IF9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50IE1lYXN1cmVUZXh0KHN0cmluZyB0ZXh0LCBzdHJpbmcgZm9udEZhbWlseSwgc3RyaW5nIGZvbnRTaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2N0eC5mb250ID0gc3RyaW5nLkZvcm1hdChcInswfSAnezF9J1wiLCBmb250U2l6ZSwgZm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgIHJldHVybiBfY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnV0aWxcclxue1xyXG4gICAgcHVibGljIGNsYXNzIE5ld3NXcml0ZXIgOiBIdG1sV3JpdGVyXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgR2VuZXJhdGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENsb3NlTmV3c0l0ZW0oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmV3bGluZSgpO1xyXG4gICAgICAgICAgICBOZXdsaW5lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPcGVuTmV3c0l0ZW0oc3RyaW5nIHN1YmplY3QsIERhdGVUaW1lIGRhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcmludEJvbGQoc3ViamVjdCk7XHJcbiAgICAgICAgICAgIFByaW50SXRhbGljKGRhdGUuVG9TdHJpbmcoXCJkZGQsIGRkIE1NTSB5eXl5IEhIOm1tOnNzIFVUQ1wiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC5pby5yZXF1ZXN0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgWGhyIDogQWJzdHJhY3RSZXF1ZXN0XHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9tZXRob2Q7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTWV0aG9kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9tZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9tZXRob2QgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNZXRob2QoX21ldGhvZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LmlvLnJlcXVlc3QuWGhyXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC5odG1sO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZGVjb3JhdGlvbjtcclxudXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuY29yZVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFdpZGdldCA6IExheW91dEl0ZW0sIElFdmVudEhhbmRsZXJcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgc3RyaW5nIF9iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgRWxlbWVudCBfY29udGVudEVsZW1lbnQ7XHJcbiAgICAgICAgRGVjb3JhdG9yIF9kZWNvcmF0b3I7XHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgX2hhc1Jlc2l6ZWQ7XHJcbiAgICAgICAgcHJvdGVjdGVkIGludFtdIF9tYXJnaW5zO1xyXG4gICAgICAgIHByb3RlY3RlZCBpbnRbXSBfcGFkZGluZztcclxuICAgICAgICBzdHJpbmcgX3RleHRDb2xvcjtcclxuXHJcbiAgICAgICAgcHVibGljIFdpZGdldChzdHJpbmcgcXhDbGFzcyA9IG51bGwpIDogYmFzZShxeENsYXNzKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgQWRkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZnRlckZpcnN0UmVzaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9oYXNSZXNpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgU2V0U3R5bGVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZnRlckluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkQ29udGVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBCYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2JhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2JhY2tncm91bmRDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9iYWNrZ3JvdW5kQ29sb3IuTGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0QmFja2dyb3VuZENvbG9yKF9iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2lkZ2V0IERlY29yYXRlKElEZWNvcmF0ZSBkZWNvcmF0ZUltcGxlbWVudG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVjb3JhdGVJbXBsZW1lbnRvci5EZWNvcmF0ZSh0aGlzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGVjb3JhdG9yIERlY29yYXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZGVjb3JhdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZGVjb3JhdG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2RlY29yYXRvciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXREZWNvcmF0b3IoX2RlY29yYXRvci5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgRGVmYXVsdEJhY2tncm91bmRDb2xvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIERlY29yYXRvciBEZWZhdWx0RGVjb3JhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgaW50W10gRGVmYXVsdE1hcmdpbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBpbnRbXSBEZWZhdWx0UGFkZGluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGludFtdIHsgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIGJvb2wgRGVmYXVsdFNob3coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIERlZmF1bHRUZXh0Q29sb3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBFbmFibGVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRFbmFibGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRFbmFibGVkKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVsZW1lbnQgR2V0Q29udGVudEVsZW1lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50RWxlbWVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgX2NvbnRlbnRFbGVtZW50ID0gbmV3IEVsZW1lbnQoTmF0aXZlT2JqZWN0LmdldENvbnRlbnRFbGVtZW50KCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIGJvb2wgSGFuZGxlc0FwcGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYm9vbCBIYXNSZXNpemVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9oYXNSZXNpemVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5wdWJsaWMgdm9pZCBIaWRlKClcclxue1xyXG4gICAgTmF0aXZlT2JqZWN0LmhpZGUoKTtcclxufVxyXG4gICAgICAgIHB1YmxpYyBpbnQgSW5uZXJIZWlnaHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldElubmVyU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbm5lcldpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRJbm5lclNpemUoKS53aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX2hhc1Jlc2l6ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQmFja2dyb3VuZENvbG9yID0gRGVmYXVsdEJhY2tncm91bmRDb2xvcigpO1xyXG4gICAgICAgICAgICBEZWNvcmF0b3IgPSBEZWZhdWx0RGVjb3JhdG9yKCk7XHJcbiAgICAgICAgICAgIE1hcmdpbnMgPSBEZWZhdWx0TWFyZ2lucygpO1xyXG4gICAgICAgICAgICBQYWRkaW5nID0gRGVmYXVsdFBhZGRpbmcoKTtcclxuICAgICAgICAgICAgaWYgKEhhbmRsZXNBcHBlYXIoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRm5Wb2lkIGFwcGVhckhhbmRsZXIgPSBPbkFwcGVhcjtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihcImFwcGVhclwiLCBhcHBlYXJIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBGblZvaWQgcmVzaXplSGFuZGxlciA9IE9uUmVzaXplO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGlmIChEZWZhdWx0U2hvdygpKVxyXG4gICAgICAgICAgICAgICAgU2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGludFtdIE1hcmdpbnNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX21hcmdpbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9tYXJnaW5zID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9tYXJnaW5zLkxlbmd0aClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW4oX21hcmdpbnNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW4oX21hcmdpbnNbMF0sIF9tYXJnaW5zWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0TWFyZ2luKF9tYXJnaW5zWzBdLCBfbWFyZ2luc1sxXSwgX21hcmdpbnNbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW4oX21hcmdpbnNbMF0sIF9tYXJnaW5zWzFdLCBfbWFyZ2luc1syXSwgX21hcmdpbnNbM10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuY29yZS5XaWRnZXRcIjtcclxufVxyXG4gICAgICAgIHByb3RlY3RlZCBpbnRbXSBQYWRkaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYWRkaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfcGFkZGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfcGFkZGluZy5MZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0UGFkZGluZyhfcGFkZGluZ1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFBhZGRpbmcoX3BhZGRpbmdbMF0sIF9wYWRkaW5nWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0UGFkZGluZyhfcGFkZGluZ1swXSwgX3BhZGRpbmdbMV0sIF9wYWRkaW5nWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0UGFkZGluZyhfcGFkZGluZ1swXSwgX3BhZGRpbmdbMV0sIF9wYWRkaW5nWzJdLCBfcGFkZGluZ1szXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uQXBwZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uUmVzaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghX2hhc1Jlc2l6ZWQpXHJcbiAgICAgICAgICAgICAgICBBZnRlckZpcnN0UmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTY3JvbGxUb0JvdHRvbSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBHZXRDb250ZW50RWxlbWVudCgpLlNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRTdHlsZShzdHJpbmcga2V5LCBkeW5hbWljIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgR2V0Q29udGVudEVsZW1lbnQoKS5TZXRTdHlsZShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgU2V0U3R5bGVzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5wdWJsaWMgdm9pZCBTaG93KClcclxue1xyXG4gICAgTmF0aXZlT2JqZWN0LnNob3coKTtcclxufVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN0eWxlRm9udEZhbWlseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNldFN0eWxlKFwiZm9udEZhbWlseVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3R5bGVGb250U2l6ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNldFN0eWxlKFwiZm9udFNpemVcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN0eWxlVGV4dEFsaWduXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2V0U3R5bGUoXCJ0ZXh0QWxpZ25cIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFRleHRDb2xvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGV4dENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGV4dENvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RleHRDb2xvci5MZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRUZXh0Q29sb3IoX3RleHRDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5kZWNvcmF0aW9uXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRGVjb3JhdG9yIDogQWJzdHJhY3REZWNvcmF0aW9uXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRCYWNrZ3JvdW5kQ29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldEJhY2tncm91bmRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JCb3R0b21cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldENvbG9yQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2xvckJvdHRvbSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JMZWZ0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRDb2xvckxlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldENvbG9yTGVmdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JSaWdodFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0Q29sb3JSaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Q29sb3JSaWdodCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JUb3BcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldENvbG9yVG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2xvclRvcCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRW5kQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldEVuZENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRFbmRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgRW5kQ29sb3JQb3NpdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0RW5kQ29sb3JQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0RW5kQ29sb3JQb3NpdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgT3JpZW50YXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRPcmllbnRhdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmRlY29yYXRpb24uRGVjb3JhdG9yXCI7XHJcbn1cclxuICAgICAgICBwdWJsaWMgaW50IFJhZGl1c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0UmFkaXVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRSYWRpdXModmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN0YXJ0Q29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFN0YXJ0Q29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFN0YXJ0Q29sb3IodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFN0YXJ0Q29sb3JQb3NpdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0U3RhcnRDb2xvclBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTdGFydENvbG9yUG9zaXRpb24odmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRXaWR0aCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0V2lkdGgodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoQm90dG9tXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRXaWR0aEJvdHRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0V2lkdGhCb3R0b20odmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoTGVmdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0V2lkdGhMZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRXaWR0aExlZnQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoUmlnaHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFdpZHRoUmlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFdpZHRoUmlnaHQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoVG9wXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRXaWR0aFRvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0V2lkdGhUb3AodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkubGF5b3V0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQXRvbSA6IEFic3RyYWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5BdG9tXCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5sYXlvdXRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBCYXNpYyA6IEFic3RyYWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5CYXNpY1wiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkubGF5b3V0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ2FudmFzIDogQWJzdHJhY3RcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubGF5b3V0LkNhbnZhc1wiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkubGF5b3V0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRG9jayA6IEFic3RyYWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5Eb2NrXCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5sYXlvdXRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGbG93IDogQWJzdHJhY3RcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubGF5b3V0LkZsb3dcIjtcclxufSAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLmxheW91dFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEdyaWQgOiBBYnN0cmFjdFxyXG4gICAge1xyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5sYXlvdXQuR3JpZFwiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkubGF5b3V0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgR3JvdyA6IEFic3RyYWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5Hcm93XCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5sYXlvdXRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBIQm94IDogQWJzdHJhY3RcclxuICAgIHtcclxuICAgICAgICBpbnQgX3NwYWNpbmc7XHJcblxyXG4gICAgICAgIHB1YmxpYyBIQm94KGludCBzcGFjaW5nID0gMCkge1xyXG4gICAgICAgICAgICBTcGFjaW5nID0gc3BhY2luZztcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5IQm94XCI7XHJcbn1cclxuICAgICAgICBwdWJsaWMgaW50IFNwYWNpbmcge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zcGFjaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICBfc3BhY2luZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9zcGFjaW5nID4gMClcclxuICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0U3BhY2luZyhfc3BhY2luZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLmxheW91dFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFZCb3ggOiBBYnN0cmFjdFxyXG4gICAge1xyXG4gICAgICAgIGludCBfc3BhY2luZztcclxuXHJcbiAgICAgICAgcHVibGljIFZCb3goaW50IHNwYWNpbmcgPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3BhY2luZyA9IHNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5sYXlvdXQuVkJveFwiO1xyXG59XHJcbiAgICAgICAgcHVibGljIGludCBTcGFjaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zcGFjaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfc3BhY2luZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9zcGFjaW5nID4gMClcclxuICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0U3BhY2luZyhfc3BhY2luZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLnRhYmxlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUmVzaXplQ29sdW1uTW9kZWwgOiBCYXNpY0NvbHVtbk1vZGVsXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYmxlLmNvbHVtbm1vZGVsLlJlc2l6ZVwiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkudGFibGVcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFNpbXBsZVRhYmxlTW9kZWwgOiBBYnN0cmFjdFRhYmxlTW9kZWxcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIFNpbXBsZVRhYmxlTW9kZWwoc3RyaW5nW10gbmFtZUFycmF5LCBzdHJpbmdbXSBpZEFycmF5ID0gbnVsbCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNldENvbHVtbnMobmFtZUFycmF5LCBpZEFycmF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgR2V0QW5jaG9yU2VsZWN0aW9uSW5kZXgoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRBbmNob3JTZWxlY3Rpb25JbmRleCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0Q29sdW1ucyhzdHJpbmdbXSBuYW1lQXJyYXksIHN0cmluZ1tdIGlkQXJyYXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Q29sdW1ucyhuYW1lQXJyYXksIGlkQXJyYXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgU2V0RGF0YShkeW5hbWljIGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0RGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYmxlLm1vZGVsLlNpbXBsZVwiO1xyXG59XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgudXRpbFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFZpbGxhZ2VOZXdzV3JpdGVyIDogTmV3c1dyaXRlclxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBHZW5lcmF0ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIEdlbmVyYXRlU2l0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgR2VuZXJhdGVWaXN0YUl0ZW0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgR2VuZXJhdGVTaXRlSXRlbSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVuTmV3c0l0ZW0oXCJTaXRlIFVuZGVyIENvbnN0cnVjdGlvblwiLCBEYXRlVGltZS5Ob3cpO1xyXG4gICAgICAgICAgICBQcmludFBhcmFncmFwaHMoc2l0ZVBhcmFncmFwaDEsIHNpdGVQYXJhZ3JhcGgyKTtcclxuICAgICAgICAgICAgQ2xvc2VOZXdzSXRlbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBHZW5lcmF0ZVZpc3RhSXRlbSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVuTmV3c0l0ZW0oXCJWaXN0YSBTbWFsbHRhbGsgRGVza3RvcCBSZWxlYXNlXCIsIERhdGVUaW1lLk5vdyk7XHJcbiAgICAgICAgICAgIFByaW50UGFyYWdyYXBocyh2aXN0YVBhcmFncmFwaDEsIHZpc3RhUGFyYWdyYXBoMiwgdmlzdGFQYXJhZ3JhcGgzKTtcclxuICAgICAgICAgICAgQ2xvc2VOZXdzSXRlbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyaW5nIHNpdGVQYXJhZ3JhcGgxID0gXCJUaGUgc2l0ZSBpcyBiZWluZyB1cGRhdGVkIHRvIG1hdGNoIHRoZSBjb21pbmcgZGVza3RvcCByZWxlYXNlLlwiO1xyXG4gICAgICAgIHN0cmluZyBzaXRlUGFyYWdyYXBoMiA9IFwiQm90aCB0aGUgZGVza3RvcCBhbmQgd2ViIFNtYWxsdGFsayBpbXBsZW1lbnRhdGlvbnMgd2lsbCB1c2UgdGhlIHNhbWUgR1VJIGl0ZW1zLlwiO1xyXG5cclxuICAgICAgICBzdHJpbmcgdmlzdGFQYXJhZ3JhcGgxID0gXCJWaXN0YSBTbWFsbHRhbGsgaXMgYSBkZXNrdG9wIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIE1pY3Jvc29mdCdzIFB5dGhvblZtIDIuNy5cIjtcclxuICAgICAgICBzdHJpbmcgdmlzdGFQYXJhZ3JhcGgyID0gXCJUaGUgR1VJIGlzIGJ1aWx0IHVzaW5nIEhUTUw1IHdpZGdldHMgYW5kIGlzIGNvbXBhdGlibGUgd2l0aCBXZWItYmFzZWQgYXBwbGljYXRpb25zLlwiO1xyXG4gICAgICAgIHN0cmluZyB2aXN0YVBhcmFncmFwaDMgPSBcIkV4cGVjdGVkIHJlbGVhc2UgZGF0ZSBpcyBTZXB0ZW1iZXIgMjEsIDIwMTguXCI7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5iYXNpY1xyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEF0b20gOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgbGFiZWw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTGFiZWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBsYWJlbDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRMYWJlbChsYWJlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmJhc2ljLkF0b21cIjtcclxufSAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLmJhc2ljXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBJbWFnZSA6IFdpZGdldFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIERlZmF1bHRTY2FsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVmYXVsdFNvdXJjZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIHN0cmluZyBzb3VyY2UgPSBEZWZhdWx0U291cmNlKCk7XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIFNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICAgICAgU2NhbGUgPSBEZWZhdWx0U2NhbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFNjYWxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFNjYWxlKCk7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTY2FsZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU291cmNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFNvdXJjZSgpOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0U291cmNlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuYmFzaWMuSW1hZ2VcIjtcclxufSAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuY29yZTtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5sYXlvdXQ7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5jb250YWluZXJcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDb21wb3NpdGUgOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBMaXN0PExheW91dEl0ZW0+IF9jaGlsZHJlbjtcclxuICAgICAgICBBYnN0cmFjdCBfbGF5b3V0O1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoTGF5b3V0SXRlbSBjaGlsZCwgZHluYW1pYyBvcHRpb25zID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGQoY2hpbGQuTmF0aXZlT2JqZWN0LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgY2hpbGQuUGFyZW50ID0gdGhpcztcclxuICAgICAgICAgICAgX2NoaWxkcmVuLkFkZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoTGF5b3V0SXRlbSBjaGlsZCwgc3RyaW5nIGVkZ2VOYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkKGNoaWxkLCBuZXcgeyBlZGdlID0gZWRnZU5hbWUgfSk7XHJcbiAgICAgICAgICAgIGNoaWxkLlBhcmVudCA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRDZW50ZXIoTGF5b3V0SXRlbSBjaGlsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZChjaGlsZCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRFYXN0KExheW91dEl0ZW0gY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoY2hpbGQsIFwiZWFzdFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZEZsZXgoTGF5b3V0SXRlbSBjaGlsZCwgaW50IGZsZXhXZWlnaHQgPSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkKGNoaWxkLCBuZXcgeyBmbGV4ID0gZmxleFdlaWdodCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZE5vcnRoKExheW91dEl0ZW0gY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoY2hpbGQsIFwibm9ydGhcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRTb3V0aChMYXlvdXRJdGVtIGNoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkKGNoaWxkLCBcInNvdXRoXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkV2VzdChMYXlvdXRJdGVtIGNoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkKGNoaWxkLCBcIndlc3RcIik7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRIZWlnaHQoKVxyXG57XHJcbiAgICByZXR1cm4gLTE7XHJcbn1cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBBYnN0cmFjdCBEZWZhdWx0TGF5b3V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRG9jaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX2NoaWxkcmVuID0gbmV3IExpc3Q8TGF5b3V0SXRlbT4oKTtcclxuICAgICAgICAgICAgaWYgKERlZmF1bHRIZWlnaHQoKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldEhlaWdodChEZWZhdWx0SGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICBMYXlvdXQgPSBEZWZhdWx0TGF5b3V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQWJzdHJhY3QgTGF5b3V0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sYXlvdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sYXlvdXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRMYXlvdXQoX2xheW91dC5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblJlc2l6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKExheW91dEl0ZW0gY2hpbGQgaW4gX2NoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuT25QYXJlbnRSZXNpemUoKTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmNvbnRhaW5lci5Db21wb3NpdGVcIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5lbWJlZFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIElGcmFtZSA6IFdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIHN0cmluZyBfc291cmNlO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZnRlckluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5BZnRlckluaXQoKTtcclxuICAgICAgICAgICAgRm5Wb2lkIGhhbmRsZXIgPSBPbkxvYWQ7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihcImxvYWRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgRGVmYXVsdFNvdXJjZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Mb2FkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNvdXJjZSA9IERlZmF1bHRTb3VyY2UoKTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmVtYmVkLklmcmFtZVwiO1xyXG59XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTb3VyY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NvdXJjZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3NvdXJjZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFNvdXJjZShfc291cmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLmVtYmVkXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSHRtbEVtYmVkIDogV2lkZ2V0XHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9jc3NDbGFzcztcclxuICAgICAgICBzdHJpbmcgX2h0bWw7XHJcbiAgICAgICAgc3RyaW5nIF9zdHlsZTtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWZ0ZXJGaXJzdFJlc2l6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkFmdGVyRmlyc3RSZXNpemUoKTtcclxuICAgICAgICAgICAgc3RyaW5nIGNzc0NsYXNzID0gRGVmYXVsdENzc0NsYXNzKCk7XHJcbiAgICAgICAgICAgIGlmIChjc3NDbGFzcyAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgQ3NzQ2xhc3MgPSBjc3NDbGFzcztcclxuICAgICAgICAgICAgc3RyaW5nIGh0bWwgPSBEZWZhdWx0SHRtbCgpO1xyXG4gICAgICAgICAgICBpZiAoaHRtbCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgSHRtbCA9IGh0bWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIENzc0NsYXNzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jc3NDbGFzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2Nzc0NsYXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Q3NzQ2xhc3ModmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgRGVmYXVsdENzc0NsYXNzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIERlZmF1bHRIdG1sKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIERlZmF1bHRTdHlsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSHRtbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaHRtbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2h0bWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIFJlZnJlc2hIdG1sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmVtYmVkLkh0bWxcIjtcclxufVxyXG4gICAgICAgIHZvaWQgUmVmcmVzaEh0bWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldEh0bWwoSHRtbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN0eWxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3N0eWxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5mb3JtXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQWJzdHJhY3RGaWVsZCA6IFdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIHN0cmluZyBfdmFsdWU7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyKCkge1xyXG4gICAgICAgICAgICBWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBDbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBWYWx1ZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIF92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkubWVudTtcclxudXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuZm9ybVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFNwbGl0QnV0dG9uIDogV2lkZ2V0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIE1lbnUgX21lbnU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTcGxpdEJ1dHRvbihzdHJpbmcgbGFiZWwpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBNZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBNZW51QnV0dG9uIEFkZEJ1dHRvbihzdHJpbmcgbGFiZWwsIElFdmVudEhhbmRsZXIgaGFuZGxlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1lbnVCdXR0b24gYnV0dG9uID0gbmV3IE1lbnVCdXR0b24obGFiZWwsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICBidXR0b24uRGVjb3JhdG9yID0gRGVjb3JhdG9yO1xyXG4gICAgICAgICAgICBidXR0b24uVGV4dENvbG9yID0gVGV4dENvbG9yO1xyXG4gICAgICAgICAgICBNZW51LkFkZChidXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBMYWJlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0TGFiZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldExhYmVsKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIE1lbnUgTWVudVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWVudTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX21lbnUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNZW51KHZhbHVlLk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmZvcm0uU3BsaXRCdXR0b25cIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5tZW51XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBNZW51IDogV2lkZ2V0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBNZW51IEFkZChMYXlvdXRJdGVtIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkKGl0ZW0uTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5tZW51Lk1lbnVcIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5tZW51XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTZXBhcmF0b3IgOiBXaWRnZXRcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudS5TZXBhcmF0b3JcIjtcclxufSAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXguaW50ZXJmYWNlcztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb3JlO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmZvcm07XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS50b29sYmFyXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVG9vbEJhciA6IFdpZGdldCwgSURlY29yYXRlXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChMYXlvdXRJdGVtIGNoaWxkLCBkeW5hbWljIG9wdGlvbnMgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZChjaGlsZC5OYXRpdmVPYmplY3QsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRvb2xiYXJCdXR0b24gQWRkQnV0dG9uKHN0cmluZyBsYWJlbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRvb2xiYXJCdXR0b24gYnV0dG9uID0gbmV3IFRvb2xiYXJCdXR0b24obGFiZWwsIHRoaXMpO1xyXG4gICAgICAgICAgICBidXR0b24uRGVjb3JhdGUodGhpcyk7XHJcbiAgICAgICAgICAgIEFkZChidXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJ1dHRvbiBBZGRNZW51QnV0dG9uKHN0cmluZyBsYWJlbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbiBidXR0b24gPSBuZXcgQnV0dG9uKGxhYmVsKTtcclxuICAgICAgICAgICAgYnV0dG9uLkRlY29yYXRlKHRoaXMpO1xyXG4gICAgICAgICAgICBBZGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXBhcmF0b3IgQWRkU2VwYXJhdG9yKHN0cmluZyBjb2xvciA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXBhcmF0b3Igc2VwYXJhdG9yID0gbmV3IFNlcGFyYXRvcihjb2xvcik7XHJcbiAgICAgICAgICAgIC8vQWRkKHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2lkZ2V0IEFkZFNwYWNlcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaWRnZXQgd2lkZ2V0ID0gbmV3IFdpZGdldCgpO1xyXG4gICAgICAgICAgICB3aWRnZXQuSGVpZ2h0ID0gMTA7XHJcbiAgICAgICAgICAgIHdpZGdldC5XaWR0aCA9IDEwO1xyXG4gICAgICAgICAgICBBZGQod2lkZ2V0LCBuZXcgeyBmbGV4ID0gMSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHdpZGdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTcGxpdEJ1dHRvbiBBZGRTcGxpdEJ1dHRvbihzdHJpbmcgbGFiZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTcGxpdEJ1dHRvbiBidXR0b24gPSBuZXcgU3BsaXRCdXR0b24obGFiZWwpO1xyXG4gICAgICAgICAgICBidXR0b24uRGVjb3JhdGUodGhpcyk7XHJcbiAgICAgICAgICAgIEFkZChidXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBEZWNvcmF0ZShXaWRnZXQgd2lkZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIGludCBEZWZhdWx0U3BhY2luZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gNztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIGlmIChEZWZhdWx0U3BhY2luZygpID4gMClcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTcGFjaW5nKERlZmF1bHRTcGFjaW5nKCkpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkudG9vbGJhci5Ub29sQmFyXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuc3BsaXRwYW5lXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQYW5lIDogV2lkZ2V0XHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9vcmllbnRhdGlvbjtcclxuXHJcbiAgICAgICAgcHVibGljIFBhbmUoc3RyaW5nIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkKFdpZGdldCB3aWRnZXQsIGludCBmbGV4ID0gMSkge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkKHdpZGdldC5OYXRpdmVPYmplY3QsIGZsZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBPcmllbnRhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfb3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9vcmllbnRhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldE9yaWVudGF0aW9uKF9vcmllbnRhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnNwbGl0cGFuZS5QYW5lXCI7XHJcbn1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkudGFibGVcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBUYWJsZSA6IFdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIEJhc2ljQ29sdW1uTW9kZWwgX2NvbHVtbk1vZGVsO1xyXG4gICAgICAgIEFic3RyYWN0VGFibGVNb2RlbCBfdGFibGVNb2RlbDtcclxuXHJcbiAgICAgICAgcHVibGljIFRhYmxlKCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQmFzaWNDb2x1bW5Nb2RlbCBDb2x1bW5Nb2RlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfY29sdW1uTW9kZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9jb2x1bW5Nb2RlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBDb2x1bW5WaXNpYmlsaXR5QnV0dG9uVmlzaWJsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2x1bW5WaXNpYmlsaXR5QnV0dG9uVmlzaWJsZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBkeW5hbWljW10gQ3JlYXRpb25BcmdzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXNpemVDb2x1bW5Nb2RlbCA9IG5ldyBSZXNpemVDb2x1bW5Nb2RlbCgpLk5hdGl2ZU9iamVjdDtcclxuICAgICAgICAgICAgRm5WYWx1ZUEgZm4gPSBvYmogPT4geyByZXR1cm4gcmVzaXplQ29sdW1uTW9kZWw7IH07XHJcbiAgICAgICAgICAgIGR5bmFtaWMgbWFwID0gbmV3XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlQ29sdW1uTW9kZWwgPSBmblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGR5bmFtaWNbXSB7IG51bGwsIG1hcCB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgRGF0YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWJsZU1vZGVsLlNldERhdGEodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYm9vbCBEZWZhdWx0Q29sdW1uVmlzaWJpbGl0eUJ1dHRvblZpc2libGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nW10gRGVmYXVsdENvbHVtbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBzdHJpbmdbXSB7IFwiSWRcIiwgXCJEYXRhXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzdHJpbmdbXSBEZWZhdWx0SWRzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8c3RyaW5nPiBpZHMgPSBuZXcgTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBjb2wgaW4gRGVmYXVsdENvbHVtbnMoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nIGlkID0gY29sLlRvTG93ZXIoKS5SZXBsYWNlKCcgJywgJ18nKTtcclxuICAgICAgICAgICAgICAgIGlkcy5BZGQoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpZHMuVG9BcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgRGVmYXVsdFNob3dDZWxsRm9jdXNJbmRpY2F0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgRGVmYXVsdFN0YXR1c0JhclZpc2libGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgQ29sdW1uTW9kZWwgPSBuZXcgUmVzaXplQ29sdW1uTW9kZWwoKTtcclxuICAgICAgICAgICAgVGFibGVNb2RlbCA9IG5ldyBTaW1wbGVUYWJsZU1vZGVsKERlZmF1bHRDb2x1bW5zKCksIERlZmF1bHRJZHMoKSk7XHJcbiAgICAgICAgICAgIENvbHVtblZpc2liaWxpdHlCdXR0b25WaXNpYmxlID0gRGVmYXVsdENvbHVtblZpc2liaWxpdHlCdXR0b25WaXNpYmxlKCk7XHJcbiAgICAgICAgICAgIFNob3dDZWxsRm9jdXNJbmRpY2F0b3IgPSBEZWZhdWx0U2hvd0NlbGxGb2N1c0luZGljYXRvcigpO1xyXG4gICAgICAgICAgICBTdGF0dXNCYXJWaXNpYmxlID0gRGVmYXVsdFN0YXR1c0JhclZpc2libGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFN0YXR1c0JhclZpc2libGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0U3RhdHVzQmFyVmlzaWJsZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFNob3dDZWxsRm9jdXNJbmRpY2F0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0U2hvd0NlbGxGb2N1c0luZGljYXRvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBBYnN0cmFjdFRhYmxlTW9kZWwgVGFibGVNb2RlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGFibGVNb2RlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3RhYmxlTW9kZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRUYWJsZU1vZGVsKF90YWJsZU1vZGVsLk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYmxlLlRhYmxlXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLnRhYnZpZXdcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRhYlZpZXcgOiBXaWRnZXRcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkKFBhZ2UgcGFnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGQocGFnZS5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFBhZ2UgQWRkUGFnZShzdHJpbmcgbGFiZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQYWdlIHBhZ2UgPSBuZXcgUGFnZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBMYWJlbCA9IGxhYmVsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIEFkZChwYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS50YWJ2aWV3LlRhYlZpZXdcIjtcclxufVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLnRvb2xiYXJcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBTZXBhcmF0b3IgOiBXaWRnZXRcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIFNlcGFyYXRvcihzdHJpbmcgY29sb3IgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBUZXh0Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRvb2xiYXIuU2VwYXJhdG9yXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkudHJlZS5jb3JlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQWJzdHJhY3RJdGVtIDogV2lkZ2V0XHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9sYWJlbDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBMYWJlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbGFiZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sYWJlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldExhYmVsKF9sYWJlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkubGF5b3V0O1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLndpZGdldHM7XHJcbnVzaW5nIFZpc3RhTGliUXgudXRpbDtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLndpbmRvd3Ncclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBXaW5kb3cgOiBXaWRnZXQsIElFdmVudEhhbmRsZXJcclxuICAgIHtcclxuICAgICAgICBCdXR0b25CYXIgX2J1dHRvbkJhcjtcclxuICAgICAgICBzdHJpbmcgX2NhcHRpb247XHJcbiAgICAgICAgaW50IF9jb250ZW50UGFkZGluZztcclxuICAgICAgICBib29sIF9kZWxheWVkQ2VudGVyZWQ7XHJcbiAgICAgICAgaW50W10gX2RlbGF5ZWRMb2NhdGlvbjtcclxuICAgICAgICBBYnN0cmFjdCBfbGF5b3V0O1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoTGF5b3V0SXRlbSBjaGlsZCwgZHluYW1pYyBvcHRpb25zID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGQoY2hpbGQuTmF0aXZlT2JqZWN0LCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChMYXlvdXRJdGVtIGNoaWxkLCBzdHJpbmcgZWRnZU5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoY2hpbGQsIG5ldyB7IGVkZ2UgPSBlZGdlTmFtZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFmdGVyRmlyc3RSZXNpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5BZnRlckZpcnN0UmVzaXplKCk7XHJcbiAgICAgICAgICAgIENlbnRlcihfZGVsYXllZENlbnRlcmVkKTtcclxuICAgICAgICAgICAgTW92ZVRvKF9kZWxheWVkTG9jYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWZ0ZXJJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuQWZ0ZXJJbml0KCk7XHJcbiAgICAgICAgICAgIGlmIChIYXNCdXR0b25CYXIoKSlcclxuICAgICAgICAgICAgICAgIEFkZEJ1dHRvbkJhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgU2hvd01pbmltaXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEZuVm9pZCBjbG9zZUhhbmRsZXIgPSBPbkNsb3NlO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJjbG9zZVwiLCBjbG9zZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICAvL0Rlc2t0b3AuSW5zdGFuY2UuQWRkKHRoaXMpO1xyXG4gICAgICAgICAgICBDYXB0aW9uID0gRGVmYXVsdENhcHRpb24oKTtcclxuICAgICAgICAgICAgQ2VudGVyKERlZmF1bHRDZW50ZXJlZCgpKTtcclxuICAgICAgICAgICAgQ29udGVudFBhZGRpbmcgPSBEZWZhdWx0Q29udGVudFBhZGRpbmcoKTtcclxuICAgICAgICAgICAgTGF5b3V0ID0gRGVmYXVsdExheW91dCgpO1xyXG4gICAgICAgICAgICBNb3ZlVG8oRGVmYXVsdExvY2F0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBZGRCdXR0b25CYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2J1dHRvbkJhciA9IENyZWF0ZUJ1dHRvbkJhcigpO1xyXG4gICAgICAgICAgICBfYnV0dG9uQmFyLkFkZENvbmZpZ3MoRGVmYXVsdEJ1dHRvbnMoKSk7XHJcbiAgICAgICAgICAgIEFkZChfYnV0dG9uQmFyLCBcInNvdXRoXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgQnV0dG9uQmFyIENyZWF0ZUJ1dHRvbkJhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkJhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgQWJzdHJhY3QgRGVmYXVsdExheW91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERvY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ2FwdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9jYXB0aW9uOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfY2FwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldENhcHRpb24oX2NhcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDZW50ZXIoYm9vbCBjZW50ZXJlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9kZWxheWVkQ2VudGVyZWQgPSBjZW50ZXJlZDtcclxuICAgICAgICAgICAgaWYgKCFfaGFzUmVzaXplZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmNlbnRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb250ZW50UGFkZGluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9jb250ZW50UGFkZGluZzsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRlbnRQYWRkaW5nID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Q29udGVudFBhZGRpbmcoX2NvbnRlbnRQYWRkaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgQnV0dG9uQ29uZmlnW10gRGVmYXVsdEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWdbXSB7IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiV2luZG93XCI7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgdmlydHVhbCBib29sIERlZmF1bHRDZW50ZXJlZCgpXHJcbntcclxuICAgIHJldHVybiBmYWxzZTtcclxufXByb3RlY3RlZCB2aXJ0dWFsIGludCBEZWZhdWx0Q29udGVudFBhZGRpbmcoKVxyXG57XHJcbiAgICByZXR1cm4gMDtcclxufXByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbntcclxuICAgIHJldHVybiAzNzU7XHJcbn1cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBpbnRbXSBEZWZhdWx0TG9jYXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYm9vbCBEZWZhdWx0U2hvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdFdpZHRoKClcclxue1xyXG4gICAgcmV0dXJuIDQ3NTtcclxufVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSGFzQnV0dG9uQmFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWZhdWx0QnV0dG9ucygpLkxlbmd0aCA+IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQWJzdHJhY3QgTGF5b3V0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sYXlvdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sYXlvdXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRMYXlvdXQoX2xheW91dC5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBNYXhpbWl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QubWF4aW1pemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIE1pbmltaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5taW5pbWl6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgTW92ZVRvKGludFtdIGxvY2F0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2RlbGF5ZWRMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICBpZiAoIV9oYXNSZXNpemVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAobG9jYXRpb24uTGVuZ3RoICE9IDIpIHJldHVybjtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0Lm1vdmVUbyhsb2NhdGlvblswXSwgbG9jYXRpb25bMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkNsb3NlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vRGVza3RvcC5JbnN0YW5jZS5SZW1vdmUodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBTaG93TWF4aW1pemVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBOYXRpdmVPYmplY3QuZ2V0U2hvd01heGltaXplKCk7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTaG93TWF4aW1pemUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBTaG93TWluaW1pemVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBOYXRpdmVPYmplY3QuZ2V0U2hvd01pbmltaXplKCk7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTaG93TWluaW1pemUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS53aW5kb3cuV2luZG93XCI7XHJcbn1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2luZG93c1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGVza3RvcCA6IFdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIHN0YXRpYyBEZXNrdG9wIF9pbnN0YW5jZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgRGVza3RvcCBJbnN0YW5jZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChfaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfaW5zdGFuY2UgPSBuZXcgRGVza3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pbnN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkKFdpbmRvdyB3aW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkKHdpbmRvdy5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVtb3ZlKFdpbmRvdyB3aW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QucmVtb3ZlKHdpbmRvdy5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkud2luZG93LkRlc2t0b3BcIjtcclxufSAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuYmFzaWNcclxue1xyXG4gICAgcHVibGljICBjbGFzcyBOYXZiYXJJbWFnZSA6IEltYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgRGVmYXVsdFNjYWxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LmludGVyZmFjZXM7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5lbWJlZFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29kZU1pcnJvckVkaXRvciA6IElGcmFtZSwgSVRleHRWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIHN0cmluZyBfZGVmZXJyZWRWYWx1ZTtcclxuICAgICAgICBkeW5hbWljIF9lZGl0b3I7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb2RlTWlycm9yRWRpdG9yKCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9kZWZlcnJlZFZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgX2VkaXRvciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRTb3VyY2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaWZyYW1lcy9jb2RlbWlycm9yL2luZGV4Lmh0bWxcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRFZGl0b3IoZHluYW1pYyBlZGl0b3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgICAgICBWYWx1ZSA9IF9kZWZlcnJlZFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25Mb2FkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25Mb2FkKCk7XHJcbiAgICAgICAgICAgIGludCBmcmFtZUNvdW50ID0gU2NyaXB0LkdldDxpbnQ+KFwid2luZG93LmZyYW1lcy5sZW5ndGhcIik7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZUNvdW50ID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZHluYW1pYyBlZGl0b3IgPSBTY3JpcHQuR2V0PGR5bmFtaWM+KFwid2luZG93LmZyYW1lc1t3aW5kb3cuZnJhbWVzLmxlbmd0aC0xXS5lZGl0b3JcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgSW5pdEVkaXRvcihlZGl0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9lZGl0b3IgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2VkaXRvci5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZGVmZXJyZWRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9lZGl0b3IgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfZWRpdG9yLnNldFZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBfZGVmZXJyZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LmludGVyZmFjZXM7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5lbWJlZFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgTW9uYWNvRWRpdG9yIDogSHRtbEVtYmVkLCBJVGV4dFZhbHVlXHJcbiAgICB7XHJcbiAgICAgICAgZHluYW1pYyBfZWRpdG9yO1xyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmFsdWUgPSBzdHJpbmcuRW1wdHk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGJvb2wgSGFuZGxlc0FwcGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uQXBwZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25BcHBlYXIoKTtcclxuICAgICAgICAgICAgZHluYW1pYyBkaXZFbGVtZW50ID0gR2V0Q29udGVudEVsZW1lbnQoKS5HZXREb21FbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGR5bmFtaWMgY29uZmlnID0gbmV3XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gXCJweXRob25cIixcclxuICAgICAgICAgICAgICAgIGF1dG9tYXRpY0xheW91dCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtaW5pbWFwID0gbmV3XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIF9lZGl0b3IgPSBTY3JpcHQuQ2FsbDxkeW5hbWljPihcIndpbmRvdy5tb25hY28uZWRpdG9yLmNyZWF0ZVwiLCBkaXZFbGVtZW50LCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChfZWRpdG9yICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9lZGl0b3IuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9lZGl0b3IgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfZWRpdG9yLnNldFZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtLlRleHQ7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5lbWJlZFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgTmF2YmFyTGFiZWwgOiBIdG1sRW1iZWRcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDc3NDbGFzcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJuYXZiYXItbGFiZWwtdGV4dFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0SHRtbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0TGFiZWxUZXh0KERlZmF1bHRUZXh0KCkpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0SGVpZ2h0KClcclxue1xyXG4gICAgcmV0dXJuIDM1O1xyXG59cHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIERlZmF1bHRUZXh0KClcclxue1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1wcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRXaWR0aCgpXHJcbntcclxuICAgIHJldHVybiAyMDA7XHJcbn1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEZvcm1hdExhYmVsVGV4dChzdHJpbmcgdGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0cmluZ0J1aWxkZXIgc2IgPSBuZXcgU3RyaW5nQnVpbGRlcigpO1xyXG4gICAgICAgICAgICBzdHJpbmcgc3Bhbl9mb3JtYXQgPSBcIjxzcGFuIGNsYXNzPVxcXCJ7MH1cXFwiPnsxfTwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgc2IuQXBwZW5kTGluZShzdHJpbmcuRm9ybWF0KHNwYW5fZm9ybWF0LCBEZWZhdWx0Q3NzQ2xhc3MoKSwgdGV4dCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2IuVG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldExhYmVsVGV4dChzdHJpbmcgdGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEh0bWwgPSBGb3JtYXRMYWJlbFRleHQodGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLmVtYmVkXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTY3JvbGxhYmxlSHRtbCA6IEh0bWxFbWJlZFxyXG4gICAge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBib29sIERlZmF1bHRTY3JvbGxYKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgYm9vbCBEZWZhdWx0U2Nyb2xsWSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIFNldE92ZXJmbG93KGJvb2wgeCwgYm9vbCB5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHgpXHJcbiAgICAgICAgICAgICAgICBTZXRTdHlsZShcIm92ZXJmbG93LXhcIiwgXCJzY3JvbGxcIik7XHJcbiAgICAgICAgICAgIGlmICh5KVxyXG4gICAgICAgICAgICAgICAgU2V0U3R5bGUoXCJvdmVyZmxvdy15XCIsIFwic2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgU2V0U3R5bGVzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuU2V0U3R5bGVzKCk7XHJcbiAgICAgICAgICAgIFNldE92ZXJmbG93KERlZmF1bHRTY3JvbGxYKCksIERlZmF1bHRTY3JvbGxZKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5iYXNpYztcclxudXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuZm9ybVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEJ1dHRvbiA6IEF0b21cclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX2V2ZW50TmFtZTtcclxuICAgICAgICBJRXZlbnRIYW5kbGVyIF9oYW5kbGVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgQnV0dG9uKHN0cmluZyBsYWJlbCkge1xyXG4gICAgICAgICAgICBMYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBIYW5kbGVyID0gdGhpcztcclxuICAgICAgICAgICAgRXZlbnROYW1lID0gbGFiZWwuVG9Mb3dlcigpLlJlcGxhY2UoJyAnLCAnXycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJ1dHRvbihzdHJpbmcgbGFiZWwsIElFdmVudEhhbmRsZXIgaGFuZGxlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgICAgIEhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICBFdmVudE5hbWUgPSBsYWJlbC5Ub0xvd2VyKCkuUmVwbGFjZSgnICcsICdfJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnV0dG9uKEJ1dHRvbkNvbmZpZyBjb25maWcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYWJlbCA9IGNvbmZpZy5MYWJlbDtcclxuICAgICAgICAgICAgSGFuZGxlciA9IGNvbmZpZy5IYW5kbGVyO1xyXG4gICAgICAgICAgICBFdmVudE5hbWUgPSBjb25maWcuRXZlbnROYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWZ0ZXJJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZuVm9pZCBoYW5kbGVyID0gSGFuZGxlQ2xpY2s7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBFdmVudE5hbWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2V2ZW50TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2V2ZW50TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEhhbmRsZUNsaWNrKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEhhbmRsZXIuSGFuZGxlRXZlbnQoRXZlbnROYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJRXZlbnRIYW5kbGVyIEhhbmRsZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2hhbmRsZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9oYW5kbGVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmZvcm0uQnV0dG9uXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb3JlLnNjcm9sbDtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLmZvcm1cclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBMaXN0Qm94IDogQWJzdHJhY3RTY3JvbGxBcmVhXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChzdHJpbmcgbGFiZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMaXN0SXRlbSBpdGVtID0gbmV3IExpc3RJdGVtXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIExhYmVsID0gbGFiZWxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZChpdGVtLk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTZWxlY3Rpb24obmV3IGR5bmFtaWNbXSB7IH0pO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuZm9ybS5MaXN0XCI7XHJcbn1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNlbGVjdGVkTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZHluYW1pYyBzZWxlY3Rpb24gPSBOYXRpdmVPYmplY3QuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uWzBdLmdldExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBPbkNoYW5nZVNlbGVjdGlvbkhhbmRsZXIoRm5Wb2lkIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkTGlzdGVuZXIoXCJjaGFuZ2VTZWxlY3Rpb25cIiwgKHF4LmNvcmUuUW9iamVjdC5GblZvaWQpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVXBkYXRlKHN0cmluZ1tdIGxhYmVscylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBsYWJlbCBpbiBsYWJlbHMpXHJcbiAgICAgICAgICAgICAgICBBZGQobGFiZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkuYmFzaWM7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5mb3JtXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgTGlzdEl0ZW0gOiBBdG9tXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmZvcm0uTGlzdEl0ZW1cIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5mb3JtXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVGV4dEZpZWxkIDogQWJzdHJhY3RGaWVsZFxyXG4gICAge1xyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5mb3JtLlRleHRGaWVsZFwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLmZvcm1cclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBUZXh0QXJlYSA6IEFic3RyYWN0RmllbGQvLywgSVRyYW5zY3JpcHRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIE5ld2xpbmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmFsdWUgKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFByaW50KG9iamVjdCBtc2cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBWYWx1ZSArPSBzdHJpbmcuRm9ybWF0KFwiezB9XCIsIG1zZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcmludExuKG9iamVjdCBtc2cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcmludChtc2cpO1xyXG4gICAgICAgICAgICBOZXdsaW5lKCk7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5mb3JtLlRleHRBcmVhXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkubWVudVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIENoZWNrQm94IDogQWJzdHJhY3RCdXR0b25cclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudS5DaGVja0JveFwiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkubWVudVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIE1lbnVCdXR0b24gOiBBYnN0cmFjdEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIHN0cmluZyBfZXZlbnROYW1lO1xyXG4gICAgICAgIElFdmVudEhhbmRsZXIgX2hhbmRsZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBNZW51QnV0dG9uKHN0cmluZyBsYWJlbCwgSUV2ZW50SGFuZGxlciBoYW5kbGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGFiZWwgPSBsYWJlbDtcclxuICAgICAgICAgICAgSGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIEV2ZW50TmFtZSA9IGxhYmVsLlRvTG93ZXIoKS5SZXBsYWNlKCcgJywgJ18nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFmdGVySW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGblZvaWQgaGFuZGxlciA9IEhhbmRsZUNsaWNrO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRXZlbnROYW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9ldmVudE5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9ldmVudE5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBIYW5kbGVDbGljaygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBIYW5kbGVyLkhhbmRsZUV2ZW50KEV2ZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUV2ZW50SGFuZGxlciBIYW5kbGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9oYW5kbGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfaGFuZGxlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIExhYmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRMYWJlbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0TGFiZWwodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5tZW51LkJ1dHRvblwiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkubWVudVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUmFkaW9CdXR0b24gOiBBYnN0cmFjdEJ1dHRvblxyXG4gICAge1xyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5tZW51LkFic3RyYWN0QnV0dG9uXCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLnRvb2xiYXI7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5tZW51YmFyXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgTWVudUJhciA6IFRvb2xCYXJcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudWJhci5NZW51QmFyXCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvbnRhaW5lcjtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5kZWNvcmF0aW9uO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmVtYmVkO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkucG9wdXBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFBvcHVwIDogQ29tcG9zaXRlXHJcbiAgICB7XHJcbiAgICAgICAgaW50W10gX2RlbGF5ZWRMb2NhdGlvbjtcclxuICAgICAgICBIdG1sRW1iZWQgX2h0bWw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTaG93TWVzc2FnZShzdHJpbmcgbWVzc2FnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFBvcHVwIHBvcHVwID0gbmV3IFBvcHVwKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBwb3B1cC5TaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBQb3B1cChzdHJpbmcgbWVzc2FnZSkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9odG1sLkh0bWwgPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICAvL1dpZHRoID0gVGV4dE1lYXN1cmUuR2V0V2lkdGgobWVzc2FnZSwgR2xvYmFsRm9udHMuUG9wdXBGb250RmFtaWx5LCBHbG9iYWxGb250cy5Qb3B1cEZvbnRTaXplKSArIEdsb2JhbERpbWVuc2lvbnMuUG9wdXBQYWRkaW5nICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFmdGVyRmlyc3RSZXNpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5BZnRlckZpcnN0UmVzaXplKCk7XHJcbiAgICAgICAgICAgIE1vdmVUbyhfZGVsYXllZExvY2F0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBib29sIEF1dG9IaWRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldEF1dG9IaWRlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIERlY29yYXRvciBEZWZhdWx0RGVjb3JhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVjb3JhdG9yXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFdpZHRoID0gMSxcclxuICAgICAgICAgICAgICAgIC8vQ29sb3IgPSBHbG9iYWxDb2xvcnMuUG9wdXBCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBSYWRpdXMgPSA3XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRIZWlnaHQoKVxyXG57XHJcbiAgICByZXR1cm4gMzI7XHJcbn1cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBpbnRbXSBEZWZhdWx0TG9jYXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IDUsIDQ1IH07XHJcbiAgICAgICAgfVxyXG4vL3Byb3RlY3RlZCBvdmVycmlkZSBpbnRbXSBEZWZhdWx0UGFkZGluZygpXHJcbi8ve1xyXG4vLyAgICByZXR1cm4gbmV3IGludFtdIHsgR2xvYmFsRGltZW5zaW9ucy5Qb3B1cFBhZGRpbmcgfTtcclxuLy99XHJcbnByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdFdpZHRoKClcclxue1xyXG4gICAgcmV0dXJuIDEzNTtcclxufVxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIF9odG1sID0gbmV3IEh0bWxFbWJlZCgpO1xyXG4gICAgICAgICAgICBBZGRDZW50ZXIoX2h0bWwpO1xyXG4gICAgICAgICAgICBNb3ZlVG8oRGVmYXVsdExvY2F0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgTW92ZVRvKGludFtdIGxvY2F0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2RlbGF5ZWRMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICBpZiAoIV9oYXNSZXNpemVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAobG9jYXRpb24uTGVuZ3RoICE9IDIpIHJldHVybjtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0Lm1vdmVUbyhsb2NhdGlvblswXSwgbG9jYXRpb25bMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgU2V0U3R5bGVzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuU2V0U3R5bGVzKCk7XHJcbiAgICAgICAgICAgIC8vX2h0bWwuQmFja2dyb3VuZENvbG9yID0gR2xvYmFsQ29sb3JzLlBvcHVwQmFja2dyb3VuZDtcclxuICAgICAgICAgICAgLy9faHRtbC5TdHlsZUZvbnRTaXplID0gR2xvYmFsRm9udHMuUG9wdXBGb250U2l6ZTtcclxuICAgICAgICAgICAgLy9faHRtbC5TdHlsZUZvbnRGYW1pbHkgPSBHbG9iYWxGb250cy5Qb3B1cEZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIC8vX2h0bWwuU3R5bGVUZXh0QWxpZ24gPSBHbG9iYWxTdHlsZXMuVGV4dEFsaWduQ2VudGVyO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkucG9wdXAuUG9wdXBcIjtcclxufSAgICB9XHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb250YWluZXI7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkubGF5b3V0O1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkudGFidmlld1xyXG57XHJcbiAgICBcclxuICAgIHB1YmxpYyBjbGFzcyBQYWdlIDogQ29tcG9zaXRlXHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9sYWJlbDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIEFic3RyYWN0IERlZmF1bHRMYXlvdXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIExhYmVsIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbGFiZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIF9sYWJlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldExhYmVsKF9sYWJlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYnZpZXcuUGFnZVwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLnRyZWUuY29yZVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEFic3RyYWN0VHJlZUl0ZW0gOiBBYnN0cmFjdEl0ZW1cclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkKEFic3RyYWN0VHJlZUl0ZW0gY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkKGNoaWxkLk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb3JlLnNjcm9sbDtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS50cmVlLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS50cmVlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVHJlZSA6IEFic3RyYWN0U2Nyb2xsQXJlYVxyXG4gICAge1xyXG4gICAgICAgIEFic3RyYWN0VHJlZUl0ZW0gX3Jvb3Q7XHJcblxyXG4gICAgICAgIEFic3RyYWN0VHJlZUl0ZW0gQnVpbGROb2RlKGR5bmFtaWMgbm9kZURhdGEpIHtcclxuICAgICAgICAgICAgQWJzdHJhY3RUcmVlSXRlbSBub2RlO1xyXG4gICAgICAgICAgICBpZiAobm9kZURhdGEuc3ViY2xhc3Nlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gbmV3IFRyZWVGb2xkZXIoKTtcclxuICAgICAgICAgICAgICAgIGZvcmVhY2ggKGR5bmFtaWMgc3Vibm9kZURhdGEgaW4gbm9kZURhdGEuc3ViY2xhc3NlcylcclxuICAgICAgICAgICAgICAgICAgICBub2RlLkFkZChCdWlsZE5vZGUoc3Vibm9kZURhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIG5vZGUgPSBuZXcgVHJlZUZpbGUoKTtcclxuICAgICAgICAgICAgbm9kZS5MYWJlbCA9IG5vZGVEYXRhLm5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBSZWZyZXNoKGR5bmFtaWMgZGF0YSkge1xyXG4gICAgICAgICAgICBSb290ID0gQnVpbGROb2RlKGRhdGEpO1xyXG4gICAgICAgICAgICBSb290Lk5hdGl2ZU9iamVjdC5zZXRPcGVuKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRSb290T3BlbkNsb3NlKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEFic3RyYWN0VHJlZUl0ZW0gUm9vdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3Jvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIF9yb290ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Um9vdChfcm9vdC5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS50cmVlLlRyZWVcIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmNvbnN0YW50cztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb250YWluZXI7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuY29yZTtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5kZWNvcmF0aW9uO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmZvcm07XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkubGF5b3V0O1xyXG51c2luZyBWaXN0YUxpYlF4LnV0aWw7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2lkZ2V0c1xyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEJ1dHRvbkJhciA6IENvbXBvc2l0ZSwgSUV2ZW50SGFuZGxlclxyXG4gICAge1xyXG4gICAgICAgIERpY3Rpb25hcnk8c3RyaW5nLCBCdXR0b24+IF9idXR0b25zID0gbmV3IERpY3Rpb25hcnk8c3RyaW5nLCBCdXR0b24+KCk7XHJcbiAgICAgICAgcHJvdGVjdGVkIElFdmVudEhhbmRsZXIgX3Byb3h5RXZlbnRIYW5kbGVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgQnV0dG9uQmFyKElFdmVudEhhbmRsZXIgcHJveHlFdmVudEhhbmRsZXIgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3Byb3h5RXZlbnRIYW5kbGVyID0gcHJveHlFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFkZENvbmZpZyhCdXR0b25Db25maWcgY29uZmlnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5GbGV4ID4gMClcclxuICAgICAgICAgICAgICAgIEFkZEZsZXgoY29uZmlnLkZsZXgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjb25maWcuV2lkdGggPiAwKVxyXG4gICAgICAgICAgICAgICAgQWRkV2lkdGgoY29uZmlnLldpZHRoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgQWRkQnV0dG9uKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRDb25maWdzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZENvbmZpZ3MoRGVmYXVsdEJ1dHRvbnMoKSk7XHJcbiAgICAgICAgICAgIEFkanVzdEJ1dHRvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZENvbmZpZ3MoQnV0dG9uQ29uZmlnW10gY29uZmlncylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKEJ1dHRvbkNvbmZpZyBjb25maWcgaW4gY29uZmlncylcclxuICAgICAgICAgICAgICAgIEFkZENvbmZpZyhjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBZGRCdXR0b24oQnV0dG9uQ29uZmlnIGNvbmZpZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbiBidXR0b24gPSBuZXcgQnV0dG9uKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIF9idXR0b25zW2NvbmZpZy5FdmVudE5hbWVdID0gYnV0dG9uO1xyXG4gICAgICAgICAgICBBZGQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQWRkRmxleChpbnQgZmxleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZGdldCB3aWRnZXQgPSBuZXcgV2lkZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEhlaWdodCA9IDEsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgQWRkKHdpZGdldCwgbmV3IHsgZmxleCA9IGZsZXggfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFkZFdpZHRoKGludCB3aWR0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZGdldCB3aWRnZXQgPSBuZXcgV2lkZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEhlaWdodCA9IDEsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IHdpZHRoXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIEFkZCh3aWRnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZGp1c3RCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRCYWNrZ3JvdW5kQ29sb3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiI2NjY1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIERlY29yYXRvciBEZWZhdWx0RGVjb3JhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVjb3JhdG9yKCkgeyBDb2xvclRvcCA9IENvbG9ycy5Db2xvclNsYXRlR3JheSwgV2lkdGhUb3AgPSAxIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBCdXR0b25Db25maWdbXSBEZWZhdWx0QnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZ1tdIHsgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBBYnN0cmFjdCBEZWZhdWx0TGF5b3V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSEJveCg3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnRbXSBEZWZhdWx0UGFkZGluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGludFtdIHsgMywgNyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJ1dHRvbiBHZXRCdXR0b24oc3RyaW5nIGtleSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbiBidXR0b247XHJcbiAgICAgICAgICAgIF9idXR0b25zLlRyeUdldFZhbHVlKGtleSwgb3V0IGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9wcm94eUV2ZW50SGFuZGxlciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgX3Byb3h5RXZlbnRIYW5kbGVyLkhhbmRsZUV2ZW50KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRCdXR0b25CYWNrZ3JvdW5kQ29sb3Ioc3RyaW5nIGtleSwgc3RyaW5nIGNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnV0dG9uIGJ1dHRvbiA9IEdldEJ1dHRvbihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidXR0b24uQmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRCdXR0b25FbmFibGVkKHN0cmluZyBrZXksIGJvb2wgaXNFbmFibGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnV0dG9uIGJ1dHRvbiA9IEdldEJ1dHRvbihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidXR0b24uRW5hYmxlZCA9IGlzRW5hYmxlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldEJ1dHRvbkVuYWJsZWRTdGF0ZXMoc3RyaW5nW10gYnV0dG9ucywgYm9vbCBpc0VuYWJsZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3JlYWNoIChzdHJpbmcgYnV0dG9uIGluIGJ1dHRvbnMpXHJcbiAgICAgICAgICAgICAgICBTZXRCdXR0b25FbmFibGVkKGJ1dHRvbiwgaXNFbmFibGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldEJ1dHRvbkxhYmVsKHN0cmluZyBrZXksIHN0cmluZyBsYWJlbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbiBidXR0b24gPSBHZXRCdXR0b24oa2V5KTtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLkxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRCdXR0b25WaXNpYmlsaXRpZXMoc3RyaW5nW10gYnV0dG9ucywgYm9vbCBpc1Zpc2libGUgPSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIGJ1dHRvbiBpbiBidXR0b25zKVxyXG4gICAgICAgICAgICAgICAgU2V0QnV0dG9uVmlzaWJpbGl0eShidXR0b24sIGlzVmlzaWJsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRCdXR0b25WaXNpYmlsaXR5KHN0cmluZyBrZXksIGJvb2wgaXNWaXNpYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnV0dG9uIGJ1dHRvbiA9IEdldEJ1dHRvbihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSBidXR0b24uU2hvdygpOyBlbHNlIGJ1dHRvbi5IaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZm9ybTtcclxudXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2lkZ2V0cy5uYXZiYXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRvb2xzQnV0dG9uIDogU3BsaXRCdXR0b25cclxuICAgIHtcclxuICAgICAgICBJRXZlbnRIYW5kbGVyIF9oYW5kbGVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgVG9vbHNCdXR0b24oSURlY29yYXRlIGRlY29yYXRvciwgSUV2ZW50SGFuZGxlciBoYW5kbGVyKSA6IGJhc2UoXCJUb29sc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2hhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICBEZWNvcmF0ZShkZWNvcmF0b3IpO1xyXG4gICAgICAgICAgICBBZGRNZW51QnV0dG9ucygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBZGRNZW51QnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGRCdXR0b24oXCJUcmFuc2NyaXB0XCIsIF9oYW5kbGVyKTtcclxuICAgICAgICAgICAgQWRkQnV0dG9uKFwiQ2xhc3NCcm93c2VyXCIsIF9oYW5kbGVyKTtcclxuICAgICAgICAgICAgQWRkQnV0dG9uKFwiQ29uc29sZVwiLCBfaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkuZm9ybTtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS50YWJ2aWV3O1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2luZG93cy5jbGFzc19icm93c2VyXHJcbntcclxuXHJcbiAgICBjbGFzcyBDbGFzc0Jyb3dzZXJNZXRob2RUYWJzIDogVGFiVmlld1xyXG4gICAge1xyXG4gICAgICAgIExpc3RCb3ggX2NsYXNzTWV0aG9kcztcclxuICAgICAgICBQYWdlIF9jbGFzc1BhZ2U7XHJcbiAgICAgICAgTGlzdEJveCBfaW5zdGFuY2VNZXRob2RzO1xyXG4gICAgICAgIFBhZ2UgX2luc3RhbmNlUGFnZTtcclxuICAgICAgICBkeW5hbWljIF9tZXRob2RzRGF0YTtcclxuICAgICAgICBzdHJpbmcgX3NlbGVjdGVkTWV0aG9kO1xyXG4gICAgICAgIENsYXNzQnJvd3NlcldpbmRvdyBfd2luZG93O1xyXG5cclxuICAgICAgICBwdWJsaWMgQ2xhc3NCcm93c2VyTWV0aG9kVGFicyhDbGFzc0Jyb3dzZXJXaW5kb3cgd2luZG93KSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3dpbmRvdyA9IHdpbmRvdztcclxuICAgICAgICAgICAgX2NsYXNzUGFnZSA9IG5ldyBQYWdlKCk7XHJcbiAgICAgICAgICAgIF9jbGFzc1BhZ2UuTGFiZWwgPSBcIkNsYXNzXCI7XHJcbiAgICAgICAgICAgIF9jbGFzc01ldGhvZHMgPSBuZXcgTGlzdEJveCgpO1xyXG4gICAgICAgICAgICBfY2xhc3NQYWdlLkFkZChfY2xhc3NNZXRob2RzKTtcclxuICAgICAgICAgICAgX2luc3RhbmNlUGFnZSA9IG5ldyBQYWdlKCk7XHJcbiAgICAgICAgICAgIF9pbnN0YW5jZVBhZ2UuTGFiZWwgPSBcIkluc3RhbmNlXCI7XHJcbiAgICAgICAgICAgIF9pbnN0YW5jZU1ldGhvZHMgPSBuZXcgTGlzdEJveCgpO1xyXG4gICAgICAgICAgICBfaW5zdGFuY2VQYWdlLkFkZChfaW5zdGFuY2VNZXRob2RzKTtcclxuICAgICAgICAgICAgX21ldGhvZHNEYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgX3NlbGVjdGVkTWV0aG9kID0gXCJcIjtcclxuICAgICAgICAgICAgQWRkKF9pbnN0YW5jZVBhZ2UpO1xyXG4gICAgICAgICAgICBBZGQoX2NsYXNzUGFnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRm5Wb2lkIG1ldGhvZFRhYlNlbGVjdGVkID0gSGFuZGxlVGFiU2VsZWN0aW9uO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJjaGFuZ2VTZWxlY3Rpb25cIiwgbWV0aG9kVGFiU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBGblZvaWQgbWV0aG9kU2VsZWN0ZWRIYW5kbGVyID0gSGFuZGxlU2hvd01ldGhvZDtcclxuICAgICAgICAgICAgX2NsYXNzTWV0aG9kcy5OYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJjaGFuZ2VTZWxlY3Rpb25cIiwgbWV0aG9kU2VsZWN0ZWRIYW5kbGVyKTtcclxuICAgICAgICAgICAgX2luc3RhbmNlTWV0aG9kcy5OYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJjaGFuZ2VTZWxlY3Rpb25cIiwgbWV0aG9kU2VsZWN0ZWRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zZWxlY3RlZE1ldGhvZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIENsZWFyTWV0aG9kcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBDbGVhck1ldGhvZHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2luc3RhbmNlTWV0aG9kcy5DbGVhcigpO1xyXG4gICAgICAgICAgICBfY2xhc3NNZXRob2RzLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEhhbmRsZVNob3dNZXRob2QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2hvd01ldGhvZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEhhbmRsZVRhYlNlbGVjdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTaG93TWV0aG9kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc0NsYXNzTWV0aG9kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNlbGVjdGVkVGFiTmFtZSA9PSBcImNsYXNzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU2VsZWN0ZWRNZXRob2RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NlbGVjdGVkTWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHJpbmcgU2VsZWN0ZWRUYWJOYW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRTZWxlY3Rpb24oKVswXS5nZXRMYWJlbCgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgU2hvd01ldGhvZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgdGFiTmFtZSA9IFNlbGVjdGVkVGFiTmFtZTtcclxuICAgICAgICAgICAgaWYgKHRhYk5hbWUgPT0gXCJpbnN0YW5jZVwiKVxyXG4gICAgICAgICAgICAgICAgX3NlbGVjdGVkTWV0aG9kID0gX2luc3RhbmNlTWV0aG9kcy5TZWxlY3RlZExhYmVsKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIF9zZWxlY3RlZE1ldGhvZCA9IF9jbGFzc01ldGhvZHMuU2VsZWN0ZWRMYWJlbCgpO1xyXG4gICAgICAgICAgICBfd2luZG93LlVwZGF0ZU1ldGhvZFNvdXJjZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVXBkYXRlKGR5bmFtaWMgbWV0aG9kc19kYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2xlYXJNZXRob2RzKCk7XHJcbiAgICAgICAgICAgIF9tZXRob2RzRGF0YSA9IG1ldGhvZHNfZGF0YTtcclxuICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIG5hbWUgaW4gX21ldGhvZHNEYXRhWzBdKVxyXG4gICAgICAgICAgICAgICAgX2luc3RhbmNlTWV0aG9kcy5BZGQobmFtZSk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBuYW1lIGluIF9tZXRob2RzRGF0YVsxXSlcclxuICAgICAgICAgICAgICAgIF9jbGFzc01ldGhvZHMuQWRkKG5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZW1iZWQ7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkucG9wdXA7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuc3BsaXRwYW5lO1xyXG51c2luZyBWaXN0YUxpYlF4LnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS53aW5kb3dzLmNsYXNzX2Jyb3dzZXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENsYXNzQnJvd3NlcldpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIENsYXNzQnJvd3NlclRyZWUgX2NsYXNzVHJlZTtcclxuICAgICAgICBQYW5lIF9oc3BsaXQ7XHJcbiAgICAgICAgQ2xhc3NCcm93c2VyTWV0aG9kVGFicyBfbWV0aG9kVGFicztcclxuICAgICAgICBNb25hY29FZGl0b3IgX3NvdXJjZUVkaXRvcjtcclxuICAgICAgICBQYW5lIF92c3BsaXQ7XHJcbiAgICAgICAgSURlc2t0b3BBcGkgX3ZtQXBpO1xyXG5cclxuICAgICAgICBwdWJsaWMgQ2xhc3NCcm93c2VyV2luZG93KElEZXNrdG9wQXBpIHZtQXBpKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3ZtQXBpID0gdm1BcGk7XHJcbiAgICAgICAgICAgIFJlZnJlc2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2xhc3MgQnJvd3NlclwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIEJ1dHRvbkNvbmZpZ1tdIERlZmF1bHRCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnW10ge1xyXG4gICAgICAgICAgICAgICAgQnV0dG9uUmVmcmVzaCgpLCBCdXR0b25TYXZlKCksIEJ1dHRvbkRlbGV0ZSgpLCAgQnV0dG9uU2F2ZUltYWdlKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBib29sIERlZmF1bHRDZW50ZXJlZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIE1vbmFjb0VkaXRvciBEZWZhdWx0RWRpdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9uYWNvRWRpdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBJRGVza3RvcEFwaSBEZWZhdWx0Vm1BcGkoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfdnNwbGl0ID0gbmV3IFBhbmUoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgX3ZzcGxpdC5BZGQoQnVpbGRUb3BQYW5lbHMoKSk7XHJcbiAgICAgICAgICAgIF92c3BsaXQuQWRkKEJ1aWxkQm90dG9tUGFuZWxzKCkpO1xyXG4gICAgICAgICAgICBBZGQoX3ZzcGxpdCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgICAgIEFkZExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBZGRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NsYXNzVHJlZS5BZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgX21ldGhvZFRhYnMuQWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBXaWRnZXQgQnVpbGRCb3R0b21QYW5lbHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NvdXJjZUVkaXRvciA9IERlZmF1bHRFZGl0b3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9zb3VyY2VFZGl0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBXaWRnZXQgQnVpbGRUb3BQYW5lbHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NsYXNzVHJlZSA9IG5ldyBDbGFzc0Jyb3dzZXJUcmVlKHRoaXMpO1xyXG4gICAgICAgICAgICBfbWV0aG9kVGFicyA9IG5ldyBDbGFzc0Jyb3dzZXJNZXRob2RUYWJzKHRoaXMpO1xyXG4gICAgICAgICAgICBfaHNwbGl0ID0gbmV3IFBhbmUoXCJob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBfaHNwbGl0LkFkZChfY2xhc3NUcmVlKTtcclxuICAgICAgICAgICAgX2hzcGxpdC5BZGQoX21ldGhvZFRhYnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gX2hzcGxpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25TYXZlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiU2F2ZVwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25EZWxldGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJEZWxldGVcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIlJlZnJlc2hcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uU2F2ZUltYWdlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiU2F2ZSBJbWFnZVwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQ2xlYXJBbGwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NsYXNzVHJlZS5DbGVhcigpO1xyXG4gICAgICAgICAgICBfbWV0aG9kVGFicy5DbGVhcigpO1xyXG4gICAgICAgICAgICBfc291cmNlRWRpdG9yLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9kZWxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBPbkRlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uX3JlZnJlc2hcIjpcclxuICAgICAgICAgICAgICAgICAgICBPblJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9zYXZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25TYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fc2F2ZV9pbWFnZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uU2F2ZUltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSGFuZGxlRGVsZXRlUmVwbHkoZHluYW1pYyByZXBseSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJlZnJlc2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSGFuZGxlUmVmcmVzaFJlcGx5KGR5bmFtaWMgcmVwbHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY2xhc3NUcmVlLlJlZnJlc2gocmVwbHkpO1xyXG4gICAgICAgICAgICBDbGVhckFsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBIYW5kbGVTaG93TWV0aG9kUmVwbHkoZHluYW1pYyByZXBseSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zb3VyY2VFZGl0b3IuVmFsdWUgPSByZXBseTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25EZWxldGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jbGFzc1RyZWUuU2VsZWN0ZWRDbGFzcy5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKF9tZXRob2RUYWJzLlNlbGVjdGVkTWV0aG9kLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgT25EZWxldGVDbGFzcygpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBPbkRlbGV0ZU1ldGhvZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkRlbGV0ZUNsYXNzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZuVm9pZEEgZm4gPSAoZGVsZXRlX2NsYXNzX3JlcGx5KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcmludExvZyhkZWxldGVfY2xhc3NfcmVwbHkpO1xyXG4gICAgICAgICAgICAgICAgUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBfdm1BcGkuRGVsZXRlQ2xhc3MoX2NsYXNzVHJlZS5TZWxlY3RlZENsYXNzLCAocXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkRlbGV0ZU1ldGhvZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGblZvaWRBIGZuID0gKGRlbGV0ZV9tZXRob2RfcmVwbHkpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFByaW50TG9nKGRlbGV0ZV9tZXRob2RfcmVwbHkpO1xyXG4gICAgICAgICAgICAgICAgVXBkYXRlTWV0aG9kcygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdHJpbmcgY2xhc3NfbmFtZSA9IF9jbGFzc1RyZWUuU2VsZWN0ZWRDbGFzcztcclxuICAgICAgICAgICAgYm9vbCBpc19jbGFzc19tZXRob2QgPSBfbWV0aG9kVGFicy5Jc0NsYXNzTWV0aG9kO1xyXG4gICAgICAgICAgICBzdHJpbmcgbWV0aG9kX25hbWUgPSBfbWV0aG9kVGFicy5TZWxlY3RlZE1ldGhvZDtcclxuICAgICAgICAgICAgX3ZtQXBpLkRlbGV0ZU1ldGhvZChjbGFzc19uYW1lLCBpc19jbGFzc19tZXRob2QsIG1ldGhvZF9uYW1lLCAocXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblJlZnJlc2goKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2xlYXJBbGwoKTtcclxuICAgICAgICAgICAgUmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblNhdmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHNyYyA9IF9zb3VyY2VFZGl0b3IuVmFsdWUuVHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAoc3JjLkxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChzcmMuU3RhcnRzV2l0aChcImNsYXNzIFwiKSlcclxuICAgICAgICAgICAgICAgIE9uU2F2ZUNsYXNzKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNyYy5TdGFydHNXaXRoKFwiZGVmIFwiKSlcclxuICAgICAgICAgICAgICAgIE9uU2F2ZU1ldGhvZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblNhdmVDbGFzcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGblZvaWRBIGZuID0gKHNhdmVfY2xhc3NfcmVwbHkpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFByaW50TG9nKHNhdmVfY2xhc3NfcmVwbHkpO1xyXG4gICAgICAgICAgICAgICAgUG9wdXAuU2hvd01lc3NhZ2Uoc2F2ZV9jbGFzc19yZXBseSk7XHJcbiAgICAgICAgICAgICAgICBSZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0cmluZyBjbGFzc19kZWZpbml0aW9uID0gX3NvdXJjZUVkaXRvci5WYWx1ZTtcclxuICAgICAgICAgICAgX3ZtQXBpLlNhdmVDbGFzcyhjbGFzc19kZWZpbml0aW9uLCAocXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblNhdmVNZXRob2QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRm5Wb2lkQSBmbiA9IChzYXZlX21ldGhvZF9yZXBseSkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJpbnRMb2coc2F2ZV9tZXRob2RfcmVwbHkpO1xyXG4gICAgICAgICAgICAgICAgUG9wdXAuU2hvd01lc3NhZ2Uoc2F2ZV9tZXRob2RfcmVwbHkpO1xyXG4gICAgICAgICAgICAgICAgVXBkYXRlTWV0aG9kcygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdHJpbmcgc2VsZWN0ZWRfY2xhc3MgPSBfY2xhc3NUcmVlLlNlbGVjdGVkQ2xhc3M7XHJcbiAgICAgICAgICAgIGJvb2wgaXNfY2xhc3NfbWV0aG9kID0gX21ldGhvZFRhYnMuSXNDbGFzc01ldGhvZDtcclxuICAgICAgICAgICAgc3RyaW5nIG1ldGhvZF9zcmMgPSBfc291cmNlRWRpdG9yLlZhbHVlO1xyXG4gICAgICAgICAgICBfdm1BcGkuU2F2ZU1ldGhvZChzZWxlY3RlZF9jbGFzcywgaXNfY2xhc3NfbWV0aG9kLCBtZXRob2Rfc3JjLCAocXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblNhdmVJbWFnZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGblZvaWRBIGZuID0gKHNhdmVfaW1hZ2VfcmVwbHkpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFByaW50TG9nKHNhdmVfaW1hZ2VfcmVwbHkpO1xyXG4gICAgICAgICAgICAgICAgUG9wdXAuU2hvd01lc3NhZ2Uoc2F2ZV9pbWFnZV9yZXBseSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIF92bUFwaS5TYXZlSW1hZ2UoKHF4LmNvcmUuUW9iamVjdC5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NsYXNzVHJlZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBGblZvaWRBIGZuID0gKHRyZWVfZGF0YSkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NsYXNzVHJlZS5SZWZyZXNoKHRyZWVfZGF0YSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIF92bUFwaS5HZXRDbGFzc1RyZWUoKHF4LmNvcmUuUW9iamVjdC5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFVwZGF0ZU1ldGhvZFNvdXJjZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgc2VsZWN0ZWRDbGFzcyA9IF9jbGFzc1RyZWUuU2VsZWN0ZWRDbGFzcztcclxuICAgICAgICAgICAgc3RyaW5nIHNlbGVjdGVkTWV0aG9kID0gX21ldGhvZFRhYnMuU2VsZWN0ZWRNZXRob2Q7XHJcbiAgICAgICAgICAgIGJvb2wgaXNDbGFzc01ldGhvZCA9IF9tZXRob2RUYWJzLklzQ2xhc3NNZXRob2Q7XHJcbiAgICAgICAgICAgIEZuVm9pZEEgZm4gPSAoc3JjKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBVcGRhdGVTb3VyY2Uoc3JjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgX3ZtQXBpLkdldE1ldGhvZFNvdXJjZShzZWxlY3RlZENsYXNzLCBzZWxlY3RlZE1ldGhvZCwgaXNDbGFzc01ldGhvZCwgKHF4LmNvcmUuUW9iamVjdC5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFVwZGF0ZU1ldGhvZHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHNlbGVjdGVkQ2xhc3MgPSBfY2xhc3NUcmVlLlNlbGVjdGVkQ2xhc3M7XHJcbiAgICAgICAgICAgIEZuVm9pZEEgdXBkYXRlU291cmNlRm4gPSAoY2xhc3Nfc291cmNlKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBVcGRhdGVTb3VyY2UoY2xhc3Nfc291cmNlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgRm5Wb2lkQSB1cGRhdGVDbGFzc01ldGhvZHNGbiA9IChjbGFzc19tZXRob2RzX2RhdGEpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9tZXRob2RUYWJzLlVwZGF0ZShjbGFzc19tZXRob2RzX2RhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBfdm1BcGkuR2V0Q2xhc3NEZWZpbml0aW9uKHNlbGVjdGVkQ2xhc3MsIChxeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSl1cGRhdGVTb3VyY2VGbik7XHJcbiAgICAgICAgICAgIF92bUFwaS5HZXRDbGFzc01ldGhvZHMoX2NsYXNzVHJlZS5TZWxlY3RlZENsYXNzLCAocXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpdXBkYXRlQ2xhc3NNZXRob2RzRm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVXBkYXRlU291cmNlKHN0cmluZyBzcmMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc3JjID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBfc291cmNlRWRpdG9yLkNsZWFyKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIF9zb3VyY2VFZGl0b3IuVmFsdWUgPSBzcmM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZW1iZWQ7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZm9ybTtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5zcGxpdHBhbmU7XHJcbnVzaW5nIFZpc3RhTGliUXgudXRpbDtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLndpbmRvd3Ncclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDb25zb2xlV2luZG93IDogV2luZG93XHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIE1vbmFjb0VkaXRvciBfY2luO1xyXG4gICAgICAgIHByb3RlY3RlZCBUZXh0QXJlYSBfY291dDtcclxuICAgICAgICBQYW5lIF9zcGxpdDtcclxuICAgICAgICBwcm90ZWN0ZWQgSURlc2t0b3BBcGkgX3ZtQXBpO1xyXG5cclxuICAgICAgICBwdWJsaWMgQ29uc29sZVdpbmRvdyhJRGVza3RvcEFwaSB2bUFwaSkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF92bUFwaSA9IHZtQXBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgTW9uYWNvRWRpdG9yIENyZWF0ZUVkaXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbmFjb0VkaXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgVGV4dEFyZWEgRGVmYXVsdEVkaXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRleHRBcmVhKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNvbnNvbGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBCdXR0b25Db25maWdbXSBEZWZhdWx0QnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZ1tdIHtcclxuICAgICAgICAgICAgICAgIEJ1dHRvbkV2YWwoKSwgIEJ1dHRvbkNsZWFyT3V0KCksIEJ1dHRvbkNsZWFySW4oKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGJvb2wgRGVmYXVsdENlbnRlcmVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX2NpbiA9IENyZWF0ZUVkaXRvcigpO1xyXG4gICAgICAgICAgICBfY291dCA9IG5ldyBUZXh0QXJlYSgpO1xyXG4gICAgICAgICAgICBfc3BsaXQgPSBuZXcgUGFuZShcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICBfc3BsaXQuQWRkKF9jb3V0KTtcclxuICAgICAgICAgICAgX3NwbGl0LkFkZChfY2luKTtcclxuICAgICAgICAgICAgQWRkKF9zcGxpdCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQnV0dG9uQ29uZmlnIEJ1dHRvbkNsZWFySW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJDbGVhciBJblwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBCdXR0b25Db25maWcgQnV0dG9uQ2xlYXJPdXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJDbGVhciBPdXRcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQnV0dG9uQ29uZmlnIEJ1dHRvbkV2YWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJFdmFsXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgSGFuZGxlRXZlbnQoc3RyaW5nIGV2ZW50TmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fY2xlYXJfaW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBPbkNsZWFySW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9jbGVhcl9vdXRcIjpcclxuICAgICAgICAgICAgICAgICAgICBPbkNsZWFyT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fZXZhbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uRXZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uQ2xlYXJJbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY2luLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uQ2xlYXJPdXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NvdXQuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25FdmFsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZuVm9pZEEgZm4gPSAoeCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NvdXQuVmFsdWUgPSB4ICsgXCJcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RyaW5nIGV4cHIgPSBfY2luLlZhbHVlO1xyXG4gICAgICAgICAgICBWbUV2YWxFeHByKGV4cHIsIChxeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSlmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIFZtRXZhbEV4cHIoc3RyaW5nIGV4cHIsIEZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXguaW50ZXJmYWNlcztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5lbWJlZDtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS50YWJ2aWV3O1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLndpbmRvd3MuZGFzaGJvYXJkLnBhbmVscztcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLndpbmRvd3MuZGFzaGJvYXJkXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXNoYm9hcmRXaW5kb3cgOiBXaW5kb3dcclxuICAgIHtcclxuICAgICAgICBQYWdlIF9hcHBsaWNhdGlvbnNQYWdlO1xyXG4gICAgICAgIERhc2hib2FyZEFwcGxpY2F0aW9uc1BhbmVsIF9hcHBsaWNhdGlvbnNQYW5lbDtcclxuICAgICAgICBQYWdlIF9tZXNzYWdlc1BhZ2U7XHJcbiAgICAgICAgRGFzaGJvYXJkTWVzc2FnZXNQYW5lbCBfbWVzc2FnZXNQYW5lbDtcclxuICAgICAgICBQYWdlIF9uZXdzUGFnZTtcclxuICAgICAgICBOZXdzUGFuZWwgX25ld3NQYW5lbDtcclxuICAgICAgICBJU2VydmVyQXBpIF9zZXJ2ZXJBcGk7XHJcbiAgICAgICAgUGFnZSBfc2V0dGluZ3NQYWdlO1xyXG4gICAgICAgIFRhYlZpZXcgX3RhYlZpZXc7XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXNoYm9hcmRXaW5kb3coSVNlcnZlckFwaSBzZXJ2ZXJBcGkpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc2VydmVyQXBpID0gc2VydmVyQXBpO1xyXG4gICAgICAgICAgICBCdWlsZENvbnRlbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQnVpbGRDb250ZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9hcHBsaWNhdGlvbnNQYW5lbCA9IG5ldyBEYXNoYm9hcmRBcHBsaWNhdGlvbnNQYW5lbChfc2VydmVyQXBpKTtcclxuICAgICAgICAgICAgX2FwcGxpY2F0aW9uc1BhZ2UuQWRkKF9hcHBsaWNhdGlvbnNQYW5lbCk7XHJcbiAgICAgICAgICAgIF9tZXNzYWdlc1BhbmVsID0gbmV3IERhc2hib2FyZE1lc3NhZ2VzUGFuZWwoX3NlcnZlckFwaSk7XHJcbiAgICAgICAgICAgIF9tZXNzYWdlc1BhZ2UuQWRkQ2VudGVyKF9tZXNzYWdlc1BhbmVsKTtcclxuICAgICAgICAgICAgX25ld3NQYW5lbCA9IG5ldyBEYXNoYm9hcmROZXdzUGFuZWwoX3NlcnZlckFwaSk7XHJcbiAgICAgICAgICAgIF9uZXdzUGFnZS5BZGQoX25ld3NQYW5lbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkRhc2hib2FyZCBXaW5kb3dcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gNDc1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0V2lkdGgoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDUzNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIF90YWJWaWV3ID0gbmV3IFRhYlZpZXcoKTtcclxuICAgICAgICAgICAgQWRkKF90YWJWaWV3LCBcImNlbnRlclwiKTtcclxuICAgICAgICAgICAgX25ld3NQYWdlID0gX3RhYlZpZXcuQWRkUGFnZShcIk5ld3NcIik7XHJcbiAgICAgICAgICAgIF9hcHBsaWNhdGlvbnNQYWdlID0gX3RhYlZpZXcuQWRkUGFnZShcIkFwcGxpY2F0aW9uc1wiKTtcclxuICAgICAgICAgICAgX21lc3NhZ2VzUGFnZSA9IF90YWJWaWV3LkFkZFBhZ2UoXCJNZXNzYWdlc1wiKTtcclxuICAgICAgICAgICAgX3NldHRpbmdzUGFnZSA9IF90YWJWaWV3LkFkZFBhZ2UoXCJTZXR0aW5nc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXguaW50ZXJmYWNlcztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5jb250YWluZXI7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS53aW5kb3dzLmRhc2hib2FyZC5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhc2hib2FyZEFwcGxpY2F0aW9uc1BhbmVsIDogQ29tcG9zaXRlXHJcbiAgICB7XHJcbiAgICAgICAgSVNlcnZlckFwaSBfc2VydmVyQXBpO1xyXG4gICAgICAgIERhc2hib2FyZEFwcGxpY2F0aW9uc1RhYmxlIF90YWJsZTtcclxuXHJcbiAgICAgICAgcHVibGljIERhc2hib2FyZEFwcGxpY2F0aW9uc1BhbmVsKElTZXJ2ZXJBcGkgc2VydmVyQXBpKSA6YmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc2VydmVyQXBpID0gc2VydmVyQXBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX3RhYmxlID0gbmV3IERhc2hib2FyZEFwcGxpY2F0aW9uc1RhYmxlKCk7XHJcbiAgICAgICAgICAgIEFkZENlbnRlcihfdGFibGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS50YWJsZTtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLndpbmRvd3MuZGFzaGJvYXJkLnBhbmVsc1xyXG57XHJcbiAgICBjbGFzcyBEYXNoYm9hcmRBcHBsaWNhdGlvbnNUYWJsZSA6IFRhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZ1tdIERlZmF1bHRDb2x1bW5zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgc3RyaW5nW10geyBcIkFwcCBOYW1lXCIsIFwiT3duZXJcIiwgXCJMYXN0IFVwZGF0ZWRcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuY29udGFpbmVyO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2luZG93cy5kYXNoYm9hcmQucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXNoYm9hcmRNZXNzYWdlc1BhbmVsIDogQ29tcG9zaXRlXHJcbiAgICB7XHJcbiAgICAgICAgSVNlcnZlckFwaSBfc2VydmVyQXBpO1xyXG4gICAgICAgIERhc2hib2FyZE1lc3NhZ2VzVGFibGUgX3RhYmxlO1xyXG5cclxuICAgICAgICBwdWJsaWMgRGFzaGJvYXJkTWVzc2FnZXNQYW5lbChJU2VydmVyQXBpIHNlcnZlckFwaSkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zZXJ2ZXJBcGkgPSBzZXJ2ZXJBcGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfdGFibGUgPSBuZXcgRGFzaGJvYXJkTWVzc2FnZXNUYWJsZSgpO1xyXG4gICAgICAgICAgICBBZGRDZW50ZXIoX3RhYmxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkudGFibGU7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS53aW5kb3dzLmRhc2hib2FyZC5wYW5lbHNcclxue1xyXG4gICAgY2xhc3MgRGFzaGJvYXJkTWVzc2FnZXNUYWJsZSA6IFRhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZ1tdIERlZmF1bHRDb2x1bW5zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgc3RyaW5nW10geyBcIkZyb21cIiwgXCJTdWJqZWN0XCIsIFwiRGF0ZVwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXguaW50ZXJmYWNlcztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5lbWJlZDtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5mb3JtO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLnBvcHVwO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLnNwbGl0cGFuZTtcclxudXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLndpbmRvd3Ncclxue1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBGaWxlQnJvd3NlcldpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIElGaWxlc0FwaSBfZmlsZXNBcGk7XHJcbiAgICAgICAgY29uc3Qgc3RyaW5nIGZpbGVEaXJQYXRoID0gXCJweXRob25cIjtcclxuICAgICAgICBMaXN0Qm94IF9saXN0O1xyXG4gICAgICAgIHN0cmluZyBfc2VsZWN0ZWRGaWxlTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgSVNlcnZlckFwaSBfc2VydmVyQXBpO1xyXG4gICAgICAgIFBhbmUgX3NwbGl0O1xyXG4gICAgICAgIE1vbmFjb0VkaXRvciBfc3JjO1xyXG4gICAgICAgIElEZXNrdG9wQXBpIF92bUFwaTtcclxuXHJcbiAgICAgICAgcHVibGljIEZpbGVCcm93c2VyV2luZG93KElGaWxlc0FwaSBmaWxlQXBpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2ZpbGVzQXBpID0gZmlsZUFwaTtcclxuICAgICAgICAgICAgUmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEZpbGVCcm93c2VyV2luZG93KElGaWxlc0FwaSBmaWxlc0FwaSwgSVNlcnZlckFwaSBzZXJ2ZXJBcGksIElEZXNrdG9wQXBpIHZtQXBpKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2ZpbGVzQXBpID0gZmlsZXNBcGk7XHJcbiAgICAgICAgICAgIF9zZXJ2ZXJBcGkgPSBzZXJ2ZXJBcGk7XHJcbiAgICAgICAgICAgIF92bUFwaSA9IHZtQXBpO1xyXG4gICAgICAgICAgICBSZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkZpbGUgQnJvd3NlclwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIEJ1dHRvbkNvbmZpZ1tdIERlZmF1bHRCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8QnV0dG9uQ29uZmlnPiBidXR0b25zID0gZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkNhbGxGb3IobmV3IExpc3Q8QnV0dG9uQ29uZmlnPigpLChfbzEpPT57X28xLkFkZChCdXR0b25SZWZyZXNoKCkpO19vMS5BZGQoQnV0dG9uUnVuKCkpO19vMS5BZGQoQnV0dG9uU2F2ZSgpKTtyZXR1cm4gX28xO30pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucy5Ub0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYm9vbCBEZWZhdWx0Q2VudGVyZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBEaXNwbGF5Q29udGVudChzdHJpbmcgY29udGVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zcmMuVmFsdWUgPSBTdHJpbmdVdGlsLkFzQXNjaWkoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBEaXNwbGF5TGlzdChzdHJpbmdbXSBmbmFtZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfbGlzdC5DbGVhcigpO1xyXG4gICAgICAgICAgICBmb3JlYWNoIChzdHJpbmcgZm5hbWUgaW4gZm5hbWVzKVxyXG4gICAgICAgICAgICAgICAgX2xpc3QuQWRkKGZuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIERpc3BsYXlVcGRhdGVkKHN0cmluZyBtc2cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uQ2hhbmdlU2VsZWN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBwYXRoID0gU2VsZWN0ZWRQYXRoKCk7XHJcbiAgICAgICAgICAgIGlmIChwYXRoLkxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEZuVm9pZEEgZm4gPSAoeCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBEaXNwbGF5Q29udGVudCh4KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBfZmlsZXNBcGkuUmVhZEZpbGUocGF0aCwgKHF4LmNvcmUuUW9iamVjdC5GblZvaWRBKWZuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyaW5nIFNlbGVjdGVkUGF0aCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc2VsZWN0ZWRGaWxlTmFtZSA9IF9saXN0LlNlbGVjdGVkTGFiZWwoKTtcclxuICAgICAgICAgICAgaWYgKF9zZWxlY3RlZEZpbGVOYW1lLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5FbXB0eTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJ7MH0vezF9XCIsIGZpbGVEaXJQYXRoLCBfc2VsZWN0ZWRGaWxlTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfbGlzdCA9IG5ldyBMaXN0Qm94KCk7XHJcbiAgICAgICAgICAgIF9saXN0Lk9uQ2hhbmdlU2VsZWN0aW9uSGFuZGxlcigocXguY29yZS5Rb2JqZWN0LkZuVm9pZClPbkNoYW5nZVNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIF9zcmMgPSBDcmVhdGVQeXRob25FZGl0b3IoKTtcclxuICAgICAgICAgICAgX3NwbGl0ID0gbmV3IFBhbmUoXCJob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICBfc3BsaXQuQWRkKF9saXN0LCAyKTtcclxuICAgICAgICAgICAgX3NwbGl0LkFkZChfc3JjLCAzKTtcclxuICAgICAgICAgICAgQWRkKF9zcGxpdCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIlJlZnJlc2hcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uUnVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiUnVuXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uQ29uZmlnIEJ1dHRvblNhdmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJTYXZlXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uQ29uZmlnIEJ1dHRvblVwbG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIlVwbG9hZFwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBNb25hY29FZGl0b3IgQ3JlYXRlUHl0aG9uRWRpdG9yKCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEhhbmRsZUV2ZW50KHN0cmluZyBldmVudE5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uX3JlZnJlc2hcIjpcclxuICAgICAgICAgICAgICAgICAgICBPblJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9ydW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBPblJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uX3NhdmVcIjpcclxuICAgICAgICAgICAgICAgICAgICBPblNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl91cGxvYWRcIjpcclxuICAgICAgICAgICAgICAgICAgICBPblVwbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uUnVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vRm5Wb2lkQSBmbiA9ICh4KSA9PlxyXG4gICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgLy8gICAgLy9QcmludExvZyh4KTtcclxuICAgICAgICAgICAgLy99O1xyXG4gICAgICAgICAgICAvL3N0cmluZyBleHByID0gX3NyYy5WYWx1ZTtcclxuICAgICAgICAgICAgLy9fdm1BcGkuRXZhbFNtYWxsdGFsa0V4cHIoZXhwciwgZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblNhdmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2F2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblVwbG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBVcGxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc2VsZWN0ZWRGaWxlTmFtZSA9IHN0cmluZy5FbXB0eTtcclxuICAgICAgICAgICAgX3NyYy5DbGVhcigpO1xyXG4gICAgICAgICAgICBGblZvaWRBIGZuID0gKHgpID0+XHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgc3RyaW5nW10gZm5hbWVzID0geDtcclxuICAgICAgICAgICAgICAgICBEaXNwbGF5TGlzdChmbmFtZXMpO1xyXG4gICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgX2ZpbGVzQXBpLkxpc3RGaWxlcyhcIi5cIiwgKHF4LmNvcmUuUW9iamVjdC5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgU2F2ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgcGF0aCA9IFNlbGVjdGVkUGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAocGF0aC5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy9fZmlsZUFwaS5Xcml0ZUZpbGUocGF0aCwgX3NyYy5WYWx1ZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIFVwbG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgcGF0aCA9IFNlbGVjdGVkUGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAocGF0aC5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgc3RyaW5nIGZpbGVOYW1lID0gX3NlbGVjdGVkRmlsZU5hbWU7XHJcbiAgICAgICAgICAgIHN0cmluZyBjb250ZW50ID0gX3NyYy5WYWx1ZTtcclxuICAgICAgICAgICAgRm5Wb2lkQSBmbiA9IFVwbG9hZFJlcGx5O1xyXG4gICAgICAgICAgICBfc2VydmVyQXBpLlVwbG9hZEZpbGUoZmlsZU5hbWUsIGNvbnRlbnQsIChxeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSlmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIFVwbG9hZFJlcGx5KGR5bmFtaWMgcmVwbHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQb3B1cC5TaG93TWVzc2FnZShyZXBseSk7XHJcbiAgICAgICAgICAgIFByaW50TG9nKHJlcGx5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLmVtYmVkO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2luZG93cy5pbWFnZV92aWV3ZXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEltYWdlVmlld2VyV2luZG93IDogV2luZG93XHJcbiAgICB7XHJcbiAgICAgICAgU2Nyb2xsYWJsZUltYWdlIF9zY3JvbGxhYmxlSW1hZ2U7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVmlzdGFQeXRob24gRGVza3RvcCBTY3JlZW5zaG90XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgRGVmYXVsdEltYWdlUGF0aCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJkb2NzL2ltYWdlcy9WaXN0YVB5dGhvbkRlc2t0b3AuUE5HXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfc2Nyb2xsYWJsZUltYWdlID0gbmV3IFNjcm9sbGFibGVJbWFnZShEZWZhdWx0SW1hZ2VQYXRoKCkpO1xyXG4gICAgICAgICAgICBBZGQoX3Njcm9sbGFibGVJbWFnZSwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmNvbnN0YW50cztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5mb3JtO1xyXG51c2luZyBWaXN0YUxpYlF4LnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS53aW5kb3dzXHJcbntcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgVHJhbnNjcmlwdFdpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIFRyYW5zY3JpcHRQYW5lbCBfdHJhbnNjcmlwdFBhbmVsO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfdHJhbnNjcmlwdFBhbmVsID0gbmV3IFRyYW5zY3JpcHRQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoX3RyYW5zY3JpcHRQYW5lbCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQnV0dG9uQ29uZmlnW10gRGVmYXVsdEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWdbXSB7IEJ1dHRvbkNsZWFyKCkgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVHJhbnNjcmlwdFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludFtdIERlZmF1bHRMb2NhdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGludFtdIHsgRGVza3RvcENvbnN0YW50cy5UcmFuc2NyaXB0TGVmdEluc2V0LCBEZXNrdG9wQ29uc3RhbnRzLlRyYW5zY3JpcHRUb3BJbnNldCB9O1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0SGVpZ2h0KClcclxue1xyXG4gICAgcmV0dXJuIDMyNTtcclxufXByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdFdpZHRoKClcclxue1xyXG4gICAgcmV0dXJuIDIzNTtcclxufVxyXG4gICAgICAgIHByb3RlY3RlZCBCdXR0b25Db25maWcgQnV0dG9uQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJDbGVhclwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEhhbmRsZUV2ZW50KHN0cmluZyBldmVudE5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfdHJhbnNjcmlwdFBhbmVsLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBQZXJmb3JtQWN0aW9uKHN0cmluZyBhY3Rpb24sIG9iamVjdFtdIGFyZ3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNsZWFyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuZXdsaW5lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RyYW5zY3JpcHRQYW5lbC5OZXdsaW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJcIjpcclxuICAgICAgICAgICAgICAgICAgICBQcihhcmdzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcm5cIjpcclxuICAgICAgICAgICAgICAgICAgICBQcm4oYXJnc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlLlBlcmZvcm1BY3Rpb24oYWN0aW9uLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF90cmFuc2NyaXB0UGFuZWwuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIE5ld2xpbmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3RyYW5zY3JpcHRQYW5lbC5OZXdsaW5lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcihvYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3RyYW5zY3JpcHRQYW5lbC5QcmludChvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUHJuKG9iamVjdCBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfdHJhbnNjcmlwdFBhbmVsLlByaW50TG4ob2JqKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNwYWNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFByKCcgJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmVtYmVkO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2luZG93cy50dXRvcmlhbFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFR1dG9yaWFsV2luZG93IDogV2luZG93XHJcbiAgICB7XHJcbiAgICAgICAgSVNlcnZlckFwaSBfc2VydmVyQXBpO1xyXG4gICAgICAgIFR1dG9yaWFsUGFuZWwgX3R1dG9yaWFsUGFuZWw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBUdXRvcmlhbFdpbmRvdyhJU2VydmVyQXBpIHNlcnZlckFwaSkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zZXJ2ZXJBcGkgPSBzZXJ2ZXJBcGk7XHJcbiAgICAgICAgICAgIEJ1aWxkQ29udGVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBCdWlsZENvbnRlbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3R1dG9yaWFsUGFuZWwgPSBuZXcgVHV0b3JpYWxQYW5lbChfc2VydmVyQXBpKTtcclxuICAgICAgICAgICAgQWRkKF90dXRvcmlhbFBhbmVsLCBcImNlbnRlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVHV0b3JpYWwgV2luZG93XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRIZWlnaHQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDQ3NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdFdpZHRoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA1MzU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuZW1iZWRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBOZXdzUGFuZWwgOiBTY3JvbGxhYmxlSHRtbFxyXG4gICAge1xyXG4gICAgICAgIE5ld3NXcml0ZXIgX3dyaXRlcjtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludFtdIERlZmF1bHRQYWRkaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgaW50W10geyA3LCAxMiB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGJvb2wgRGVmYXVsdFNjcm9sbFgoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0U3R5bGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBOZXdzV3JpdGVyIERlZmF1bHRXcml0ZXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXdzV3JpdGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIEdlbmVyYXRlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfd3JpdGVyID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBfd3JpdGVyID0gRGVmYXVsdFdyaXRlcigpO1xyXG4gICAgICAgICAgICBfd3JpdGVyLkdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIEh0bWwgPSBfd3JpdGVyLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBTZXRTdHlsZXMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5TZXRTdHlsZXMoKTtcclxuICAgICAgICAgICAgU2V0U3R5bGUoXCJmb250U2l6ZVwiLCBcIjEzcHhcIik7XHJcbiAgICAgICAgICAgIFNldFN0eWxlKFwiZm9udEZhbWlseVwiLCBcImhlbHZldGljYSxhcmlhbCx2ZXJkYW5hLHNhbnMtc2VyaWZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuZW1iZWRcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFNjcm9sbGFibGVJbWFnZSA6IFNjcm9sbGFibGVIdG1sXHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9pbWFnZVNyYztcclxuXHJcbiAgICAgICAgcHVibGljIFNjcm9sbGFibGVJbWFnZShzdHJpbmcgaW1hZ2VTcmMpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfaW1hZ2VTcmMgPSBpbWFnZVNyYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdEh0bWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCI8aW1nIHNyYz1cXFwiezB9XFxcIj5cIiwgX2ltYWdlU3JjKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXguaW50ZXJmYWNlcztcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLmVtYmVkXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVHV0b3JpYWxQYW5lbCA6IFNjcm9sbGFibGVIdG1sXHJcbiAgICB7XHJcbiAgICAgICAgSVNlcnZlckFwaSBfc2VydmVyQXBpO1xyXG5cclxuICAgICAgICBwdWJsaWMgVHV0b3JpYWxQYW5lbChJU2VydmVyQXBpIHNlcnZlckFwaSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfc2VydmVyQXBpID0gc2VydmVyQXBpO1xyXG4gICAgICAgICAgICBMb2FkSHRtbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludFtdIERlZmF1bHRQYWRkaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgaW50W10geyA3LCAxMiB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0U3R5bGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIExvYWRIdG1sKClcclxuICAgICAgICB7XHJcblN5c3RlbS5BY3Rpb248ZHluYW1pYz4gZm4gPSBudWxsO1xuICAgICAgICAgICAgSHRtbCA9IFwiXCI7XHJcbiAgICAgICAgICAgIFxyXG5mbiA9IChodG1sKSA9PlxyXG57XHJcbiAgICBIdG1sICs9IGh0bWw7XHJcbn1cclxuXHJcbjtcbiAgICAgICAgICAgIF9zZXJ2ZXJBcGkuR2V0SHRtbChUdXRvcmlhbFBhdGgsIFwib3ZlcnZpZXcuaHRtbFwiLCAocXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgU2V0U3R5bGVzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuU2V0U3R5bGVzKCk7XHJcbiAgICAgICAgICAgIFNldFN0eWxlKFwiZm9udFNpemVcIiwgXCIxM3B4XCIpO1xyXG4gICAgICAgICAgICBTZXRTdHlsZShcImZvbnRGYW1pbHlcIiwgXCJoZWx2ZXRpY2EsYXJpYWwsdmVyZGFuYSxzYW5zLXNlcmlmXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyaW5nIFR1dG9yaWFsUGF0aFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImRvY3MvdHV0b3JpYWxcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5tZW51O1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkuZm9ybVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZvcm1NZW51QnV0dG9uIDogQnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgTWVudSBfbWVudTtcclxuXHJcbiAgICAgICAgcHVibGljIEZvcm1NZW51QnV0dG9uKHN0cmluZyBsYWJlbCkgOiBiYXNlKGxhYmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRm9ybU1lbnVCdXR0b24gQWRkQnV0dG9uKHN0cmluZyBsYWJlbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZvcm1NZW51QnV0dG9uIGJ1dHRvbiA9IG5ldyBGb3JtTWVudUJ1dHRvbihsYWJlbCk7XHJcbiAgICAgICAgICAgIE1lbnUuQWRkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTWVudSBNZW51XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9tZW51O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbWVudSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5mb3JtLk1lbnVCdXR0b25cIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5mb3JtXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUGFzc3dvcmRGaWVsZCA6IFRleHRGaWVsZFxyXG4gICAge1xyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5mb3JtLlBhc3N3b3JkRmllbGRcIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS5mb3JtXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUcmFuc2NyaXB0UGFuZWwgOiBUZXh0QXJlYVxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBOZXdsaW5lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuTmV3bGluZSgpO1xyXG4gICAgICAgICAgICBTY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgU2V0U3R5bGVzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vU3R5bGVGb250RmFtaWx5ID0gR2xvYmFsRm9udHMuVHJhbnNjcmlwdEZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIC8vU3R5bGVGb250U2l6ZSA9IEdsb2JhbEZvbnRzLlRyYW5zY3JpcHRGb250U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC51aS5mb3JtO1xyXG51c2luZyBWaXN0YUxpYlF4LnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgVmlzdGFMaWJReC5xeC51aS50b29sYmFyXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVG9vbGJhckJ1dHRvbiA6IEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBUb29sYmFyQnV0dG9uKHN0cmluZyBsYWJlbCkgOiBiYXNlKGxhYmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUb29sYmFyQnV0dG9uKHN0cmluZyBsYWJlbCwgSUV2ZW50SGFuZGxlciBoYW5kbGVyKSA6IGJhc2UobGFiZWwsIGhhbmRsZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRvb2xiYXJCdXR0b24oQnV0dG9uQ29uZmlnIGNvbmZpZykgOiBiYXNlKGNvbmZpZylcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS50b29sYmFyLkJ1dHRvblwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkudHJlZS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkudHJlZVxyXG57XHJcbiAgICBcclxuICAgIHB1YmxpYyBjbGFzcyBUcmVlRmlsZSA6IEFic3RyYWN0VHJlZUl0ZW1cclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkudHJlZS5UcmVlRmlsZVwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkudHJlZS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkudHJlZVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFRyZWVGb2xkZXIgOiBBYnN0cmFjdFRyZWVJdGVtXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRyZWUuVHJlZUZvbGRlclwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXguY29uc3RhbnRzO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmJhc2ljO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvcmU7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZGVjb3JhdGlvbjtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5lbWJlZDtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5tZW51YmFyO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2lkZ2V0cy5uYXZiYXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIE5hdkJhciA6IE1lbnVCYXJcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgTmF2YmFySW1hZ2UgX2ltYWdlO1xyXG4gICAgICAgIHByb3RlY3RlZCBOYXZiYXJMYWJlbCBfbGFiZWw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgTmF2SGVpZ2h0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIEFkZEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgQWRkSW1hZ2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2ltYWdlID0gQ3JlYXRlSW1hZ2UoKTtcclxuICAgICAgICAgICAgaWYgKF9pbWFnZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgQWRkKF9pbWFnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIEFkZExhYmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9sYWJlbCA9IENyZWF0ZUxhYmVsKCk7XHJcbiAgICAgICAgICAgIEFkZChfbGFiZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgTmF2YmFySW1hZ2UgQ3JlYXRlSW1hZ2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBOYXZiYXJMYWJlbCBDcmVhdGVMYWJlbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdmJhckxhYmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBEZWNvcmF0ZShXaWRnZXQgd2lkZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGVjb3JhdG9yIGRlY29yYXRvciA9IG5ldyBEZWNvcmF0b3IoKTtcclxuICAgICAgICAgICAgZGVjb3JhdG9yLkJhY2tncm91bmRDb2xvciA9IERlZmF1bHRCYWNrZ3JvdW5kQ29sb3IoKTtcclxuICAgICAgICAgICAgd2lkZ2V0LkRlY29yYXRvciA9IGRlY29yYXRvcjtcclxuICAgICAgICAgICAgd2lkZ2V0LlRleHRDb2xvciA9IENvbG9ycy5Db2xvcldoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0QmFja2dyb3VuZENvbG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb2xvcnMuQ29sb3JEYXJrQmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRGVza3RvcENvbnN0YW50cy5OYXZiYXJIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgRGVmYXVsdE5hdkJhckxhYmVsVGV4dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJhIGxhYmVsXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50W10gRGVmYXVsdFBhZGRpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IDAsIDI1IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBBZGRJbWFnZSgpO1xyXG4gICAgICAgICAgICBBZGRMYWJlbCgpO1xyXG4gICAgICAgICAgICBBZGRCdXR0b25zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LnVpLnRyZWU7XHJcblxyXG5cclxubmFtZXNwYWNlIFZpc3RhTGliUXgucXgudWkud2luZG93cy5jbGFzc19icm93c2VyXHJcbntcclxuICAgIGNsYXNzIENsYXNzQnJvd3NlclRyZWUgOiBUcmVlXHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9zZWxlY3RlZF9jbGFzcztcclxuICAgICAgICBDbGFzc0Jyb3dzZXJXaW5kb3cgX3dpbmRvdztcclxuXHJcbiAgICAgICAgcHVibGljIENsYXNzQnJvd3NlclRyZWUoQ2xhc3NCcm93c2VyV2luZG93IHdpbmRvdykgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF93aW5kb3cgPSB3aW5kb3c7XHJcbiAgICAgICAgICAgIF9zZWxlY3RlZF9jbGFzcyA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRm5Wb2lkIGhhbmRsZXIgPSBIYW5kbGVDaGFuZ2VDbGFzc1NlbGVjdGlvbjtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZExpc3RlbmVyKFwiY2hhbmdlU2VsZWN0aW9uXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NlbGVjdGVkX2NsYXNzID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU2VsZWN0ZWRDbGFzc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc2VsZWN0ZWRfY2xhc3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSGFuZGxlQ2hhbmdlQ2xhc3NTZWxlY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZHluYW1pYyBzZWxlY3Rpb24gPSBOYXRpdmVPYmplY3QuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICAgICAgX3NlbGVjdGVkX2NsYXNzID0gc2VsZWN0aW9uWzBdLmdldExhYmVsKCk7XHJcbiAgICAgICAgICAgIF93aW5kb3cuVXBkYXRlTWV0aG9kcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgUmVmcmVzaChkeW5hbWljIGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLlJlZnJlc2goKG9iamVjdClkYXRhKTtcclxuICAgICAgICAgICAgQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXgudWkuZm9ybTtcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLm1lbnViYXJcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBCdXR0b24gOiBGb3JtTWVudUJ1dHRvblxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgQnV0dG9uKHN0cmluZyBsYWJlbCkgOiBiYXNlKGxhYmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLm1lbnViYXIuQnV0dG9uXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmVtYmVkO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBWaXN0YUxpYlF4LnF4LnVpLndpbmRvd3MuZGFzaGJvYXJkLnBhbmVsc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGFzaGJvYXJkTmV3c1BhbmVsIDogTmV3c1BhbmVsXHJcbiAgICB7XHJcbiAgICAgICAgSVNlcnZlckFwaSBfc2VydmVyQXBpO1xyXG5cclxuICAgICAgICBwdWJsaWMgRGFzaGJvYXJkTmV3c1BhbmVsKElTZXJ2ZXJBcGkgc2VydmVyQXBpKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NlcnZlckFwaSA9IHNlcnZlckFwaTtcclxuICAgICAgICAgICAgTG9hZEluZGV4SnNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBMb2FkSHRtbExpc3QoTGlzdDxzdHJpbmc+IHRvcGljcylcclxuICAgICAgICB7XHJcblN5c3RlbS5BY3Rpb248ZHluYW1pYz4gZm4gPSBudWxsO1xuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0b3BpY3MuQ291bnQgPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgc3RyaW5nIHRvcGljID0gdG9waWNzWzBdO1xyXG4gICAgICAgICAgICB0b3BpY3MuUmVtb3ZlQXQoMCk7XHJcbmZuID0gKGh0bWwpID0+XHJcbntcclxuICAgIEh0bWwgKz0gaHRtbDtcclxuICAgIExvYWRIdG1sTGlzdCh0b3BpY3MpO1xyXG59XHJcblxyXG47XG4gICAgICAgICAgICBfc2VydmVyQXBpLkdldEh0bWwoTmV3c0pzb25QYXRoLCB0b3BpYywgKHF4LmNvcmUuUW9iamVjdC5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgTG9hZEluZGV4SnNvbigpXHJcbiAgICAgICAge1xyXG5TeXN0ZW0uQWN0aW9uPGR5bmFtaWM+IGZuID0gbnVsbDtcbiAgICAgICAgICAgIEh0bWwgPSBcIlwiO1xyXG4gICAgICAgICAgICBcclxuZm4gPSAodmFsKSA9PlxyXG57XHJcbiAgICBzdHJpbmcgc3RyID0gdmFsO1xyXG4gICAgc3RyaW5nW10gbGlzdCA9IHN0ci5TcGxpdCgnXFxuJyk7XHJcbiAgICBMaXN0PHN0cmluZz4gdG9waWNzID0gbmV3IExpc3Q8c3RyaW5nPigpO1xyXG4gICAgZm9yZWFjaCAoc3RyaW5nIHMgaW4gbGlzdClcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgdG9waWMgPSBzLlRyaW0oKTtcclxuICAgICAgICBpZiAodG9waWMuTGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIHRvcGljcy5BZGQodG9waWMpO1xyXG4gICAgfVxyXG5cclxuICAgIExvYWRIdG1sTGlzdCh0b3BpY3MpO1xyXG59XHJcblxyXG47XG4gICAgICAgICAgICBfc2VydmVyQXBpLkdldFRvcGljc0xpc3QoTmV3c0pzb25QYXRoLCAocXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyaW5nIE5ld3NKc29uUGF0aFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImRvY3MvbmV3c1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
