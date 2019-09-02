/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2019
 * @compiler Bridge.NET 17.9.0
 */
Bridge.assembly("PythonLibQx", function ($asm, globals) {
    "use strict";

    Bridge.define("PythonLibQx.app.api.IronPythonApi", {
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (PythonLibQx.app.api.IronPythonApi._instance == null) {
                            PythonLibQx.app.api.IronPythonApi._instance = new PythonLibQx.app.api.IronPythonApi();
                        }
                        return PythonLibQx.app.api.IronPythonApi._instance;
                    }
                }
            }
        },
        fields: {
            _messageDispatcher: null,
            _requestCounter: 0,
            _responseMap: null,
            _serviceUtil: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this._messageDispatcher = new PythonLibQx.app.messages.MessageDispatcher();
                this._requestCounter = 0;
                this._responseMap = new (System.Collections.Generic.Dictionary$2(System.Int32,Function)).ctor();
                this._serviceUtil = new PythonLibQx.app.util.ServiceUtil();
                var fn = Bridge.fn.bind(this, function (x) {
                    PythonLibQx.app.util.DelayUtil.Run(Bridge.fn.bind(this, function () {
                        this.ProcessResponse(x);
                    }), PythonLibQx.app.constants.TimingConstants.ResponseDelay);
                    return "processing response";
                });
                window.QXAPI = fn;
            }
        },
        methods: {
            EvalExpr: function (expr, fn) {
                this.SendServiceRequest(this._serviceUtil.PythonEvalRequest(this.RegisterResponseHandler(fn), expr));
            },
            ListFiles: function (path, fn) {
                this.SendServiceRequest(this._serviceUtil.FilesListRequest(this.RegisterResponseHandler(fn), path));
            },
            ProcessResponse: function (json64Str) {
                var response = this._serviceUtil.DecodeJson64(json64Str);
                var messages = response.messages;
                if (messages != null) {
                    this._messageDispatcher.ProcessMessages(messages);
                }
                var id = response.id;
                var result = response.result;
                var fn = { };
                if (this._responseMap.tryGetValue(id, fn)) {
                    this._responseMap.remove(id);
                }
                if (!Bridge.staticEquals(fn.v, null) && result != null) {
                    fn.v.call(null, result);
                }
            },
            ReadFile: function (path, fn) {
                this.SendServiceRequest(this._serviceUtil.FilesReadRequest(this.RegisterResponseHandler(fn), path));
            },
            RegisterResponseHandler: function (fn) {
                var id = Bridge.identity(this._requestCounter, ((this._requestCounter = (this._requestCounter + 1) | 0)));
                this._responseMap.setItem(id, fn);
                return id;
            },
            SendServiceRequest: function (jsonStr) {
                window.external.notify(jsonStr);
            }
        }
    });

    Bridge.define("PythonLibQx.app.constants.TimingConstants", {
        statics: {
            fields: {
                ResponseDelay: 0,
                TranscriptDelay: 0
            },
            ctors: {
                init: function () {
                    this.ResponseDelay = 10;
                    this.TranscriptDelay = 10;
                }
            }
        }
    });

    Bridge.define("PythonLibQx.app.messages.MessageDispatcher", {
        methods: {
            ProcessMessages: function (messagesObj) {
                var $t;
                var messages = messagesObj;
                $t = Bridge.getEnumerator(messages);
                try {
                    while ($t.moveNext()) {
                        var message = $t.Current;
                        this.ProcessMessage(message);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            ProcessMessage: function (message) {
                var action = message._action;
                var arg = message._arg;
                switch (action) {
                    case "prn": 
                        this.MessagePrn(Bridge.toString(arg));
                        break;
                    default: 
                        this.MessagePrn(System.String.format("unknown action: [{0}]", [action]));
                        break;
                }
            },
            MessagePrn: function (text) {
                PythonLibQx.app.util.DelayUtil.Run(function () {
                    PythonLibQx.app.ui.windows.PythonTranscriptWindow.Instance.Prn(text);
                }, PythonLibQx.app.constants.TimingConstants.TranscriptDelay);
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.basic.PythonNavbarImage", {
        inherits: [VistaLibQx.qx.ui.basic.NavbarImage],
        methods: {
            DefaultMargins: function () {
                return System.Array.init([3, 0], System.Int32);
            },
            DefaultSize: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarPythonImageSize;
            },
            DefaultSource: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarPythonImageSource;
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.basic.PythonVistaLogo", {
        inherits: [VistaLibQx.qx.ui.basic.NavbarImage],
        methods: {
            DefaultHeight: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarVistaLogoHeight;
            },
            DefaultSource: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarVistaLogoSource;
            },
            DefaultWidth: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarVistaLogoWidth;
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.container.Viewport", {
        inherits: [VistaLibQx.qx.ui.container.Composite],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            _desktop: null,
            _navbar: null,
            _desktopApi: null
        },
        ctors: {
            ctor: function (vmApi) {
                this.$initialize();
                VistaLibQx.qx.ui.container.Composite.ctor.call(this);
                PythonLibQx.app.ui.container.Viewport.Instance = this;
                this._desktopApi = vmApi;
            }
        },
        methods: {
            Init: function () {
                var $t;
                VistaLibQx.qx.ui.container.Composite.prototype.Init.call(this);
                this._navbar = this.DefaultNavBar();
                this._desktop = ($t = new VistaLibQx.qx.ui.embed.HtmlEmbed(), $t.CssClass = this.DefaultCssClass(), $t);
                this.AddNorth(this._navbar);
                this.AddCenter(this._desktop);
            },
            DefaultCssClass: function () {
                return "desktop";
            },
            DefaultNavBar: function () {
                return new VistaLibQx.qx.ui.widgets.navbar.NavBar();
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.embed.PythonEditor", {
        inherits: [VistaLibQx.qx.ui.embed.MonacoEditor]
    });

    Bridge.define("PythonLibQx.app.ui.embed.PythonNavBarLabel", {
        inherits: [VistaLibQx.qx.ui.embed.NavbarLabel],
        methods: {
            DefaultHeight: function () {
                return 35;
            },
            DefaultText: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarPythonText;
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.widgets.navbar.PythonNavBar", {
        inherits: [VistaLibQx.qx.ui.widgets.navbar.NavBar],
        fields: {
            _vistaLogo: null
        },
        methods: {
            AddLabel: function () {
                this._vistaLogo = this.CreateVistaLogo();
                this.Add(this._vistaLogo);
                VistaLibQx.qx.ui.widgets.navbar.NavBar.prototype.AddLabel.call(this);
            },
            CreateImage: function () {
                return new PythonLibQx.app.ui.basic.PythonNavbarImage();
            },
            CreateLabel: function () {
                return new PythonLibQx.app.ui.embed.PythonNavBarLabel();
            },
            CreateVistaLogo: function () {
                return new PythonLibQx.app.ui.basic.PythonVistaLogo();
            },
            DefaultBackgroundColor: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarBackgroundColor;
            },
            DefaultPadding: function () {
                return VistaLibQx.qx.constants.DesktopConstants.NavbarPadding;
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.windows.PythonClassBrowserWindow", {
        inherits: [VistaLibQx.qx.ui.windows.class_browser.ClassBrowserWindow],
        ctors: {
            ctor: function (vmApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.class_browser.ClassBrowserWindow.ctor.call(this, vmApi);
            }
        },
        methods: {
            DefaultCaption: function () {
                return "Python Class Browser";
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.windows.PythonConsoleWindow", {
        inherits: [VistaLibQx.qx.ui.windows.ConsoleWindow],
        fields: {
            _ivmApi: null
        },
        ctors: {
            ctor: function (vmApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.ConsoleWindow.ctor.call(this, vmApi);
                this._ivmApi = vmApi;
            }
        },
        methods: {
            CreateEditor: function () {
                return new PythonLibQx.app.ui.embed.PythonEditor();
            },
            DefaultCaption: function () {
                return "Python Console";
            },
            VmEvalExpr: function (expr, fn) {
                this._ivmApi.VistaLibQx$qx$interfaces$IVmApi$EvalPythonExpr(expr, fn);
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.windows.PythonFileBrowserWindow", {
        inherits: [VistaLibQx.qx.ui.windows.FileBrowserWindow],
        ctors: {
            ctor: function (fileApi) {
                this.$initialize();
                VistaLibQx.qx.ui.windows.FileBrowserWindow.ctor.call(this, fileApi);
            }
        },
        methods: {
            CreatePythonEditor: function () {
                return new PythonLibQx.app.ui.embed.PythonEditor();
            }
        }
    });

    Bridge.define("PythonLibQx.app.ui.windows.PythonTranscriptWindow", {
        inherits: [VistaLibQx.qx.ui.windows.TranscriptWindow],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        PythonLibQx.app.ui.windows.PythonTranscriptWindow.Open();
                        return PythonLibQx.app.ui.windows.PythonTranscriptWindow._instance;
                    }
                }
            },
            methods: {
                Open: function () {
                    if (PythonLibQx.app.ui.windows.PythonTranscriptWindow._instance == null) {
                        PythonLibQx.app.ui.windows.PythonTranscriptWindow._instance = new PythonLibQx.app.ui.windows.PythonTranscriptWindow();
                    }
                }
            }
        },
        alias: ["HandleEvent", "VistaLibQx$util$IEventHandler$HandleEvent"],
        ctors: {
            ctor: function () {
                this.$initialize();
                VistaLibQx.qx.ui.windows.TranscriptWindow.ctor.call(this);
            }
        },
        methods: {
            ButtonConsole: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Console", this);
            },
            ButtonFiles: function () {
                return new VistaLibQx.util.ButtonConfig.$ctor1("Files", this);
            },
            DefaultButtons: function () {
                return System.Array.init([this.ButtonClear(), this.ButtonConsole(), this.ButtonFiles()], VistaLibQx.util.ButtonConfig);
            },
            DefaultCaption: function () {
                return "Python Transcript";
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_console": 
                        this.OpenConsole();
                        break;
                    case "on_files": 
                        this.OpenFiles();
                        break;
                    default: 
                        VistaLibQx.qx.ui.windows.TranscriptWindow.prototype.HandleEvent.call(this, eventName);
                        break;
                }
            },
            OpenConsole: function () {
                new PythonLibQx.app.ui.windows.PythonConsoleWindow(PythonLibQx.app.ui.container.Viewport.Instance._desktopApi);
            },
            OpenFiles: function () {
                new PythonLibQx.app.ui.windows.PythonFileBrowserWindow(PythonLibQx.app.ui.container.Viewport.Instance._desktopApi);
            }
        }
    });

    Bridge.define("PythonLibQx.app.util.DelayUtil", {
        statics: {
            methods: {
                Run: function (process, delay) {
                    setTimeout(process, delay);
                }
            }
        }
    });

    Bridge.define("PythonLibQx.app.util.EncodingUtil", {
        statics: {
            methods: {
                Unicode2Ascii: function (unicodeString) {
                    var ascii = System.Text.Encoding.ASCII;
                    var unicode = System.Text.Encoding.Unicode;

                    var unicodeBytes = unicode.GetBytes$2(unicodeString);

                    var asciiBytes = System.Text.Encoding.Convert(unicode, ascii, unicodeBytes);

                    var asciiChars = System.Array.init(ascii.GetCharCount$1(asciiBytes, 0, asciiBytes.length), 0, System.Char);
                    ascii.GetChars$2(asciiBytes, 0, asciiBytes.length, asciiChars, 0);
                    return System.String.fromCharArray(asciiChars);
                }
            }
        }
    });

    Bridge.define("PythonLibQx.app.util.Message", {
        fields: {
            _action: null,
            _arg: null
        },
        ctors: {
            ctor: function (action, arg) {
                this.$initialize();
                this._action = action;
                this._arg = arg;
            }
        }
    });

    Bridge.define("PythonLibQx.app.util.ServiceUtil", {
        methods: {
            EncodeRequest: function (id, service, method, args) {
                var request = { };
                request.id = id;
                request.service = service;
                request.method = method;
                request.args = args;
                return VistaLibQx.util.Json.Encode(request);
            },
            FilesListRequest: function (id, path) {
                return this.EncodeRequest(id, "files", "list", System.Array.init([path], System.Object));
            },
            FilesReadRequest: function (id, path) {
                return this.EncodeRequest(id, "files", "read", System.Array.init([path], System.Object));
            },
            PythonEvalRequest: function (id, expr) {
                return this.EncodeRequest(id, "python", "eval", System.Array.init([expr], System.Object));
            },
            DecodeJson64: function (json64Str) {
                var jsonStr = this.Base64Decode(json64Str);
                return VistaLibQx.util.Json.Decode(jsonStr);
            },
            Base64Encode: function (plainText) {
                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes$2(plainText);
                return System.Convert.toBase64String(plainTextBytes, null, null, null);
            },
            Base64Decode: function (base64EncodedData) {
                var base64EncodedBytes = System.Convert.fromBase64String(base64EncodedData);
                return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJQeXRob25MaWJReC5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiYXBwL2FwaS9Jcm9uUHl0aG9uQXBpLmNzIiwiYXBwL21lc3NhZ2VzL01lc3NhZ2VEaXNwYXRjaGVyLmNzIiwiYXBwL3VpL2Jhc2ljL1B5dGhvbk5hdmJhckltYWdlLmNzIiwiYXBwL3VpL2Jhc2ljL1B5dGhvblZpc3RhTG9nby5jcyIsImFwcC91aS9jb250YWluZXIvVmlld3BvcnQuY3MiLCJhcHAvdWkvZW1iZWQvUHl0aG9uTmF2QmFyTGFiZWwuY3MiLCJhcHAvdWkvd2lkZ2V0cy9uYXZiYXIvUHl0aG9uTmF2QmFyLmNzIiwiYXBwL3VpL3dpbmRvd3MvUHl0aG9uQ2xhc3NCcm93c2VyV2luZG93LmNzIiwiYXBwL3VpL3dpbmRvd3MvUHl0aG9uQ29uc29sZVdpbmRvdy5jcyIsImFwcC91aS93aW5kb3dzL1B5dGhvbkZpbGVCcm93c2VyV2luZG93LmNzIiwiYXBwL3VpL3dpbmRvd3MvUHl0aG9uVHJhbnNjcmlwdFdpbmRvdy5jcyIsImFwcC91dGlsL0RlbGF5VXRpbC5jcyIsImFwcC91dGlsL0VuY29kaW5nVXRpbC5jcyIsImFwcC91dGlsL01lc3NhZ2UuY3MiLCJhcHAvdXRpbC9TZXJ2aWNlVXRpbC5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFxQ2dCQSxJQUFJQSwrQ0FBYUE7NEJBRWJBLDhDQUFZQSxJQUFJQTs7d0JBRXBCQSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Z0JBdkJYQSwwQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBLG9CQUFlQSxLQUFJQTtnQkFDbkJBLG9CQUFlQSxJQUFJQTtnQkFDbkJBLFNBQXlDQSwrQkFBQ0E7b0JBRXRDQSxtQ0FBY0EsQUFBb0NBO3dCQUU5Q0EscUJBQWdCQTt3QkFDaEJBO29CQUNKQTs7Z0JBRUpBLGVBQTJCQTs7OztnQ0FlVkEsTUFBYUE7Z0JBRTlCQSx3QkFB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QkEsbUJBQXNCQSxtQkFBaUJBOztvQkFHdkNBLGlCQUFvQkEsNkJBQWlCQSxTQUFTQSxPQUFPQTs7b0JBR3JEQSxpQkFBb0JBLGtCQUFTQSxxQkFBbUJBLGVBQWVBO29CQUMvREEsaUJBQWVBLGVBQWVBLG1CQUFtQkE7b0JBQ2pEQSxPQUFPQSw0QkFBV0E7Ozs7Ozs7Ozs7Ozs0QkNiUEEsUUFBZUE7O2dCQUUxQkEsZUFBVUE7Z0JBQ1ZBLFlBQU9BOzs7Ozs7O3FDQ0RpQkEsSUFBUUEsU0FBZ0JBLFFBQWVBO2dCQUUvREEsY0FBa0JBO2dCQUNsQkEsYUFBYUE7Z0JBQ2JBLGtCQUFrQkE7Z0JBQ2xCQSxpQkFBaUJBO2dCQUNqQkEsZUFBZUE7Z0JBQ2ZBLE9BQU9BLDRCQUFZQTs7d0NBR1FBLElBQVFBO2dCQUVuQ0EsT0FBT0EsbUJBQWNBLHFCQUFxQkEsbUJBQWdCQTs7d0NBRy9CQSxJQUFRQTtnQkFFbkNBLE9BQU9BLG1CQUFjQSxxQkFBcUJBLG1CQUFnQkE7O3lDQUc5QkEsSUFBUUE7Z0JBRXBDQSxPQUFPQSxtQkFBY0Esc0JBQXNCQSxtQkFBZ0JBOztvQ0FHbkNBO2dCQUV4QkEsY0FBaUJBLGtCQUFhQTtnQkFDOUJBLE9BQU9BLDRCQUFZQTs7b0NBR0lBO2dCQUV2QkEscUJBQXFCQSxxQ0FBdUJBO2dCQUM1Q0EsT0FBT0EsOEJBQXVCQTs7b0NBR1BBO2dCQUV2QkEseUJBQXlCQSxnQ0FBeUJBO2dCQUNsREEsT0FBT0Esb0NBQXdCQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIFB5dGhvbkxpYlF4LmFwcC5jb25zdGFudHM7XHJcbnVzaW5nIFB5dGhvbkxpYlF4LmFwcC5tZXNzYWdlcztcclxudXNpbmcgUHl0aG9uTGliUXguYXBwLnV0aWw7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIFB5dGhvbkxpYlF4LmFwcC5hcGlcclxue1xyXG4gICAgcHVibGljIGNsYXNzIElyb25QeXRob25BcGlcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBJcm9uUHl0aG9uQXBpIF9pbnN0YW5jZTtcclxuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlciBfbWVzc2FnZURpc3BhdGNoZXI7XHJcbiAgICAgICAgaW50IF9yZXF1ZXN0Q291bnRlcjtcclxuICAgICAgICBEaWN0aW9uYXJ5PGludCwgVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkQT4gX3Jlc3BvbnNlTWFwO1xyXG4gICAgICAgIFNlcnZpY2VVdGlsIF9zZXJ2aWNlVXRpbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBJcm9uUHl0aG9uQXBpKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9tZXNzYWdlRGlzcGF0Y2hlciA9IG5ldyBNZXNzYWdlRGlzcGF0Y2hlcigpO1xyXG4gICAgICAgICAgICBfcmVxdWVzdENvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBfcmVzcG9uc2VNYXAgPSBuZXcgRGljdGlvbmFyeTxpbnQsIFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZEE+KCk7XHJcbiAgICAgICAgICAgIF9zZXJ2aWNlVXRpbCA9IG5ldyBTZXJ2aWNlVXRpbCgpO1xyXG4gICAgICAgICAgICBWaXN0YUxpYlF4LnF4LmNvcmUuUW9iamVjdC5GblZhbHVlQSBmbiA9ICh4KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEZWxheVV0aWwuUnVuKChWaXN0YUxpYlF4LnF4LmNvcmUuUW9iamVjdC5GblZvaWQpKCgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc1Jlc3BvbnNlKHgpO1xyXG4gICAgICAgICAgICAgICAgfSksIFRpbWluZ0NvbnN0YW50cy5SZXNwb25zZURlbGF5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInByb2Nlc3NpbmcgcmVzcG9uc2VcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgU2NyaXB0LlNldChcIndpbmRvdy5RWEFQSVwiLCBmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIElyb25QeXRob25BcGkgSW5zdGFuY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2luc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2luc3RhbmNlID0gbmV3IElyb25QeXRob25BcGkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEV2YWxFeHByKHN0cmluZyBleHByLCBWaXN0YUxpYlF4LnF4LmNvcmUuUW9iamVjdC5GblZvaWRBIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VuZFNlcnZpY2VSZXF1ZXN0KF9zZXJ2aWNlVXRpbC5QeXRob25FdmFsUmVxdWVzdChSZWdpc3RlclJlc3BvbnNlSGFuZGxlcigoVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSlmbiksIGV4cHIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIExpc3RGaWxlcyhzdHJpbmcgcGF0aCwgVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlbmRTZXJ2aWNlUmVxdWVzdChfc2VydmljZVV0aWwuRmlsZXNMaXN0UmVxdWVzdChSZWdpc3RlclJlc3BvbnNlSGFuZGxlcigoVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSlmbiksIHBhdGgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFByb2Nlc3NSZXNwb25zZShzdHJpbmcganNvbjY0U3RyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZHluYW1pYyByZXNwb25zZSA9IF9zZXJ2aWNlVXRpbC5EZWNvZGVKc29uNjQoanNvbjY0U3RyKTtcclxuICAgICAgICAgICAgc3RyaW5nIG1lc3NhZ2VzID0gcmVzcG9uc2UubWVzc2FnZXM7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcyAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgX21lc3NhZ2VEaXNwYXRjaGVyLlByb2Nlc3NNZXNzYWdlcyhtZXNzYWdlcyk7XHJcbiAgICAgICAgICAgIGludCBpZCA9IHJlc3BvbnNlLmlkO1xyXG4gICAgICAgICAgICBzdHJpbmcgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0O1xyXG4gICAgICAgICAgICBWaXN0YUxpYlF4LnF4LmNvcmUuUW9iamVjdC5GblZvaWRBIGZuO1xyXG4gICAgICAgICAgICBpZiAoX3Jlc3BvbnNlTWFwLlRyeUdldFZhbHVlKGlkLCBvdXQgZm4pKVxyXG4gICAgICAgICAgICAgICAgX3Jlc3BvbnNlTWFwLlJlbW92ZShpZCk7XHJcbiAgICAgICAgICAgIGlmIChmbiAhPSBudWxsICYmIHJlc3VsdCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgZm4uQ2FsbChudWxsLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVhZEZpbGUoc3RyaW5nIHBhdGgsIFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZW5kU2VydmljZVJlcXVlc3QoX3NlcnZpY2VVdGlsLkZpbGVzUmVhZFJlcXVlc3QoUmVnaXN0ZXJSZXNwb25zZUhhbmRsZXIoKFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpZm4pLCBwYXRoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnQgUmVnaXN0ZXJSZXNwb25zZUhhbmRsZXIoVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCBpZCA9IF9yZXF1ZXN0Q291bnRlcisrO1xyXG4gICAgICAgICAgICBfcmVzcG9uc2VNYXBbaWRdID0gZm47XHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgU2VuZFNlcnZpY2VSZXF1ZXN0KHN0cmluZyBqc29uU3RyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2NyaXB0LkNhbGwoXCJ3aW5kb3cuZXh0ZXJuYWwubm90aWZ5XCIsIGpzb25TdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBQeXRob25MaWJReC5hcHAuY29uc3RhbnRzO1xyXG51c2luZyBQeXRob25MaWJReC5hcHAudWkud2luZG93cztcclxudXNpbmcgUHl0aG9uTGliUXguYXBwLnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgUHl0aG9uTGliUXguYXBwLm1lc3NhZ2VzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBNZXNzYWdlRGlzcGF0Y2hlclxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcm9jZXNzTWVzc2FnZXMoZHluYW1pYyBtZXNzYWdlc09iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1lc3NhZ2VbXSBtZXNzYWdlcyA9IG1lc3NhZ2VzT2JqIDtcclxuICAgICAgICAgICAgZm9yZWFjaCAoTWVzc2FnZSBtZXNzYWdlIGluIG1lc3NhZ2VzKVxyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc01lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIFByb2Nlc3NNZXNzYWdlKE1lc3NhZ2UgbWVzc2FnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBhY3Rpb24gPSBtZXNzYWdlLl9hY3Rpb247XHJcbiAgICAgICAgICAgIG9iamVjdCBhcmcgPSBtZXNzYWdlLl9hcmc7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVBybihhcmcuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VQcm4oc3RyaW5nLkZvcm1hdChcInVua25vd24gYWN0aW9uOiBbezB9XVwiLCBhY3Rpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBNZXNzYWdlUHJuKHN0cmluZyB0ZXh0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGVsYXlVdGlsLlJ1bigoVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkKSgoKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQeXRob25UcmFuc2NyaXB0V2luZG93Lkluc3RhbmNlLlBybih0ZXh0KTtcclxuICAgICAgICAgICAgfSksIFRpbWluZ0NvbnN0YW50cy5UcmFuc2NyaXB0RGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmNvbnN0YW50cztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5iYXNpYztcclxuXHJcbm5hbWVzcGFjZSBQeXRob25MaWJReC5hcHAudWkuYmFzaWNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFB5dGhvbk5hdmJhckltYWdlIDogTmF2YmFySW1hZ2VcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludFtdIERlZmF1bHRNYXJnaW5zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgaW50W10geyAzLCAwIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRTaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZXNrdG9wQ29uc3RhbnRzLk5hdmJhclB5dGhvbkltYWdlU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdFNvdXJjZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRGVza3RvcENvbnN0YW50cy5OYXZiYXJQeXRob25JbWFnZVNvdXJjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBWaXN0YUxpYlF4LnF4LmNvbnN0YW50cztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5iYXNpYztcclxuXHJcbm5hbWVzcGFjZSBQeXRob25MaWJReC5hcHAudWkuYmFzaWNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFB5dGhvblZpc3RhTG9nbyA6IE5hdmJhckltYWdlXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRGVza3RvcENvbnN0YW50cy5OYXZiYXJWaXN0YUxvZ29IZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRTb3VyY2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIERlc2t0b3BDb25zdGFudHMuTmF2YmFyVmlzdGFMb2dvU291cmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0V2lkdGgoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIERlc2t0b3BDb25zdGFudHMuTmF2YmFyVmlzdGFMb2dvV2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmNvbnRhaW5lcjtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS5lbWJlZDtcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS53aWRnZXRzLm5hdmJhcjtcclxuXHJcbm5hbWVzcGFjZSBQeXRob25MaWJReC5hcHAudWkuY29udGFpbmVyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBWaWV3cG9ydCA6IENvbXBvc2l0ZVxyXG4gICAge1xyXG4gICAgICAgIEh0bWxFbWJlZCBfZGVza3RvcDtcclxuICAgICAgICBOYXZCYXIgX25hdmJhcjtcclxuICAgICAgICBwdWJsaWMgSURlc2t0b3BBcGkgX2Rlc2t0b3BBcGk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVmlld3BvcnQgSW5zdGFuY2UgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVmlld3BvcnQoSURlc2t0b3BBcGkgdm1BcGkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIF9kZXNrdG9wQXBpID0gdm1BcGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfbmF2YmFyID0gRGVmYXVsdE5hdkJhcigpO1xyXG4gICAgICAgICAgICBfZGVza3RvcCA9IG5ldyBIdG1sRW1iZWRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3NzQ2xhc3MgPSBEZWZhdWx0Q3NzQ2xhc3MoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBBZGROb3J0aChfbmF2YmFyKTtcclxuICAgICAgICAgICAgQWRkQ2VudGVyKF9kZXNrdG9wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHN0cmluZyBEZWZhdWx0Q3NzQ2xhc3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiZGVza3RvcFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgTmF2QmFyIERlZmF1bHROYXZCYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOYXZCYXIoKTtcclxuICAgICAgICB9XHJcblxuXHJcbiAgICBcbnByaXZhdGUgc3RhdGljIFZpZXdwb3J0IF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19JbnN0YW5jZT1udWxsO31cclxuXHJcbn1cclxuIiwidXNpbmcgVmlzdGFMaWJReC5xeC5jb25zdGFudHM7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZW1iZWQ7XHJcblxyXG5uYW1lc3BhY2UgUHl0aG9uTGliUXguYXBwLnVpLmVtYmVkXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQeXRob25OYXZCYXJMYWJlbCA6IE5hdmJhckxhYmVsXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbntcclxuICAgIHJldHVybiAzNTtcclxufXByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdFRleHQoKVxyXG57XHJcbiAgICByZXR1cm4gRGVza3RvcENvbnN0YW50cy5OYXZiYXJQeXRob25UZXh0O1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgUHl0aG9uTGliUXguYXBwLnVpLmJhc2ljO1xyXG51c2luZyBQeXRob25MaWJReC5hcHAudWkuZW1iZWQ7XHJcbnVzaW5nIFZpc3RhTGliUXgucXguY29uc3RhbnRzO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmJhc2ljO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLmVtYmVkO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLndpZGdldHMubmF2YmFyO1xyXG5cclxubmFtZXNwYWNlIFB5dGhvbkxpYlF4LmFwcC51aS53aWRnZXRzLm5hdmJhclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHl0aG9uTmF2QmFyIDogTmF2QmFyXHJcbiAgICB7XHJcbiAgICAgICAgTmF2YmFySW1hZ2UgX3Zpc3RhTG9nbztcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3Zpc3RhTG9nbyA9IENyZWF0ZVZpc3RhTG9nbygpO1xyXG4gICAgICAgICAgICBBZGQoX3Zpc3RhTG9nbyk7XHJcbiAgICAgICAgICAgIGJhc2UuQWRkTGFiZWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBOYXZiYXJJbWFnZSBDcmVhdGVJbWFnZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFB5dGhvbk5hdmJhckltYWdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgTmF2YmFyTGFiZWwgQ3JlYXRlTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQeXRob25OYXZCYXJMYWJlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIE5hdmJhckltYWdlIENyZWF0ZVZpc3RhTG9nbygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFB5dGhvblZpc3RhTG9nbygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0QmFja2dyb3VuZENvbG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZXNrdG9wQ29uc3RhbnRzLk5hdmJhckJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnRbXSBEZWZhdWx0UGFkZGluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRGVza3RvcENvbnN0YW50cy5OYXZiYXJQYWRkaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIFZpc3RhTGliUXgucXguaW50ZXJmYWNlcztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS53aW5kb3dzLmNsYXNzX2Jyb3dzZXI7XHJcblxyXG5uYW1lc3BhY2UgUHl0aG9uTGliUXguYXBwLnVpLndpbmRvd3Ncclxue1xyXG4gICAgcHVibGljIGNsYXNzIFB5dGhvbkNsYXNzQnJvd3NlcldpbmRvdyA6IENsYXNzQnJvd3NlcldpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBQeXRob25DbGFzc0Jyb3dzZXJXaW5kb3coSURlc2t0b3BBcGkgdm1BcGkpIDogYmFzZSh2bUFwaSlcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlB5dGhvbiBDbGFzcyBCcm93c2VyXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgUHl0aG9uTGliUXguYXBwLnVpLmVtYmVkO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZW1iZWQ7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkud2luZG93cztcclxuXHJcbm5hbWVzcGFjZSBQeXRob25MaWJReC5hcHAudWkud2luZG93c1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHl0aG9uQ29uc29sZVdpbmRvdyA6IENvbnNvbGVXaW5kb3dcclxuICAgIHtcclxuICAgICAgICAgSURlc2t0b3BBcGkgX2l2bUFwaTtcclxuXHJcbiAgICAgICAgcHVibGljIFB5dGhvbkNvbnNvbGVXaW5kb3coSURlc2t0b3BBcGkgdm1BcGkpIDogYmFzZSh2bUFwaSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pdm1BcGkgPSB2bUFwaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBNb25hY29FZGl0b3IgQ3JlYXRlRWRpdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHl0aG9uRWRpdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlB5dGhvbiBDb25zb2xlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBWbUV2YWxFeHByKHN0cmluZyBleHByLCBGblZvaWRBIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2l2bUFwaS5FdmFsUHl0aG9uRXhwcihleHByLCAoVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSlmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgUHl0aG9uTGliUXguYXBwLnVpLmVtYmVkO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkuZW1iZWQ7XHJcbnVzaW5nIFZpc3RhTGliUXgucXgudWkud2luZG93cztcclxuXHJcbm5hbWVzcGFjZSBQeXRob25MaWJReC5hcHAudWkud2luZG93c1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHl0aG9uRmlsZUJyb3dzZXJXaW5kb3cgOiBGaWxlQnJvd3NlcldpbmRvd1xyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgUHl0aG9uRmlsZUJyb3dzZXJXaW5kb3coSUZpbGVzQXBpIGZpbGVBcGkpIDogYmFzZShmaWxlQXBpKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBNb25hY29FZGl0b3IgQ3JlYXRlUHl0aG9uRWRpdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHl0aG9uRWRpdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBQeXRob25MaWJReC5hcHAudWkuY29udGFpbmVyO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LnVpLndpbmRvd3M7XHJcbnVzaW5nIFZpc3RhTGliUXgudXRpbDtcclxuXHJcbm5hbWVzcGFjZSBQeXRob25MaWJReC5hcHAudWkud2luZG93c1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHl0aG9uVHJhbnNjcmlwdFdpbmRvdyA6IFRyYW5zY3JpcHRXaW5kb3dcclxuICAgIHtcclxuICAgICAgICBzdGF0aWMgUHl0aG9uVHJhbnNjcmlwdFdpbmRvdyBfaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIFB5dGhvblRyYW5zY3JpcHRXaW5kb3coKVxyXG4gICAgICAgIHsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFB5dGhvblRyYW5zY3JpcHRXaW5kb3cgSW5zdGFuY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgcHVibGljIHZvaWQgT3BlbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2luc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2UgPSBuZXcgUHl0aG9uVHJhbnNjcmlwdFdpbmRvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEJ1dHRvbkNvbmZpZyBCdXR0b25Db25zb2xlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiQ29uc29sZVwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBCdXR0b25Db25maWcgQnV0dG9uRmlsZXMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJGaWxlc1wiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBCdXR0b25Db25maWdbXSBEZWZhdWx0QnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZ1tdIHsgQnV0dG9uQ2xlYXIoKSwgQnV0dG9uQ29uc29sZSgpLCBCdXR0b25GaWxlcygpIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlB5dGhvbiBUcmFuc2NyaXB0XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9jb25zb2xlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT3BlbkNvbnNvbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9maWxlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9wZW5GaWxlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLkhhbmRsZUV2ZW50KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIE9wZW5Db25zb2xlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBQeXRob25Db25zb2xlV2luZG93KFZpZXdwb3J0Lkluc3RhbmNlLl9kZXNrdG9wQXBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIE9wZW5GaWxlcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgUHl0aG9uRmlsZUJyb3dzZXJXaW5kb3coVmlld3BvcnQuSW5zdGFuY2UuX2Rlc2t0b3BBcGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxuXHJcbm5hbWVzcGFjZSBQeXRob25MaWJReC5hcHAudXRpbFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIERlbGF5VXRpbFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgUnVuKFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZCBwcm9jZXNzLCBpbnQgZGVsYXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTY3JpcHQuQ2FsbChcInNldFRpbWVvdXRcIiwgcHJvY2VzcywgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW0uVGV4dDtcclxuXHJcbm5hbWVzcGFjZSBQeXRob25MaWJReC5hcHAudXRpbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRW5jb2RpbmdVdGlsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdHJpbmcgVW5pY29kZTJBc2NpaShzdHJpbmcgdW5pY29kZVN0cmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVuY29kaW5nIGFzY2lpID0gRW5jb2RpbmcuQVNDSUk7XHJcbiAgICAgICAgICAgIEVuY29kaW5nIHVuaWNvZGUgPSBFbmNvZGluZy5Vbmljb2RlO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIGludG8gYSBieXRlIGFycmF5LlxyXG4gICAgICAgICAgICBieXRlW10gdW5pY29kZUJ5dGVzID0gdW5pY29kZS5HZXRCeXRlcyh1bmljb2RlU3RyaW5nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gdGhlIGNvbnZlcnNpb24gZnJvbSBvbmUgZW5jb2RpbmcgdG8gdGhlIG90aGVyLlxyXG4gICAgICAgICAgICBieXRlW10gYXNjaWlCeXRlcyA9IEVuY29kaW5nLkNvbnZlcnQodW5pY29kZSwgYXNjaWksIHVuaWNvZGVCeXRlcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBuZXcgYnl0ZVtdIGludG8gYSBjaGFyW10gYW5kIHRoZW4gaW50byBhIHN0cmluZy5cclxuICAgICAgICAgICAgY2hhcltdIGFzY2lpQ2hhcnMgPSBuZXcgY2hhclthc2NpaS5HZXRDaGFyQ291bnQoYXNjaWlCeXRlcywgMCwgYXNjaWlCeXRlcy5MZW5ndGgpXTtcclxuICAgICAgICAgICAgYXNjaWkuR2V0Q2hhcnMoYXNjaWlCeXRlcywgMCwgYXNjaWlCeXRlcy5MZW5ndGgsIGFzY2lpQ2hhcnMsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHN0cmluZyhhc2NpaUNoYXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFB5dGhvbkxpYlF4LmFwcC51dGlsXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBNZXNzYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBfYWN0aW9uO1xyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgX2FyZztcclxuXHJcbiAgICAgICAgcHVibGljIE1lc3NhZ2Uoc3RyaW5nIGFjdGlvbiwgb2JqZWN0IGFyZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9hY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIF9hcmcgPSBhcmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIE5ld3RvbnNvZnQuSnNvbjtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgVmlzdGFMaWJReC51dGlsO1xyXG5cclxubmFtZXNwYWNlIFB5dGhvbkxpYlF4LmFwcC51dGlsXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTZXJ2aWNlVXRpbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRW5jb2RlUmVxdWVzdChpbnQgaWQsIHN0cmluZyBzZXJ2aWNlLCBzdHJpbmcgbWV0aG9kLCBkeW5hbWljW10gYXJncylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGR5bmFtaWMgcmVxdWVzdCA9IG5ldyB7IH07XHJcbiAgICAgICAgICAgIHJlcXVlc3QuaWQgPSBpZDtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICAgICAgcmVxdWVzdC5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuYXJncyA9IGFyZ3M7XHJcbiAgICAgICAgICAgIHJldHVybiBKc29uLkVuY29kZShyZXF1ZXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRmlsZXNMaXN0UmVxdWVzdChpbnQgaWQsIHN0cmluZyBwYXRoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVuY29kZVJlcXVlc3QoaWQsIFwiZmlsZXNcIiwgXCJsaXN0XCIsIG5ldyBkeW5hbWljW10geyBwYXRoIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBGaWxlc1JlYWRSZXF1ZXN0KGludCBpZCwgc3RyaW5nIHBhdGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRW5jb2RlUmVxdWVzdChpZCwgXCJmaWxlc1wiLCBcInJlYWRcIiwgbmV3IGR5bmFtaWNbXSB7IHBhdGggfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFB5dGhvbkV2YWxSZXF1ZXN0KGludCBpZCwgc3RyaW5nIGV4cHIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRW5jb2RlUmVxdWVzdChpZCwgXCJweXRob25cIiwgXCJldmFsXCIsIG5ldyBkeW5hbWljW10geyBleHByIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgRGVjb2RlSnNvbjY0KHN0cmluZyBqc29uNjRTdHIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcganNvblN0ciA9IEJhc2U2NERlY29kZShqc29uNjRTdHIpO1xyXG4gICAgICAgICAgICByZXR1cm4gSnNvbi5EZWNvZGUoanNvblN0cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEJhc2U2NEVuY29kZShzdHJpbmcgcGxhaW5UZXh0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBsYWluVGV4dEJ5dGVzID0gRW5jb2RpbmcuVVRGOC5HZXRCeXRlcyhwbGFpblRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gQ29udmVydC5Ub0Jhc2U2NFN0cmluZyhwbGFpblRleHRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEJhc2U2NERlY29kZShzdHJpbmcgYmFzZTY0RW5jb2RlZERhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYmFzZTY0RW5jb2RlZEJ5dGVzID0gQ29udmVydC5Gcm9tQmFzZTY0U3RyaW5nKGJhc2U2NEVuY29kZWREYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIEVuY29kaW5nLlVURjguR2V0U3RyaW5nKGJhc2U2NEVuY29kZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
