/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2019
 * @compiler Bridge.NET 17.9.0
 */
Bridge.assembly("PythonDesktopQx", function ($asm, globals) {
    "use strict";

    Bridge.define("PythonDesktopQx.app.api.DesktopApi", {
        inherits: [VistaLibQx.qx.interfaces.IDesktopApi],
        fields: {
            _ipApi: null
        },
        alias: [
            "DeleteClass", "VistaLibQx$qx$interfaces$IVmApi$DeleteClass",
            "DeleteMethod", "VistaLibQx$qx$interfaces$IVmApi$DeleteMethod",
            "EvalPythonExpr", "VistaLibQx$qx$interfaces$IVmApi$EvalPythonExpr",
            "GetClassDefinition", "VistaLibQx$qx$interfaces$IVmApi$GetClassDefinition",
            "GetClassMethods", "VistaLibQx$qx$interfaces$IVmApi$GetClassMethods",
            "GetClassTree", "VistaLibQx$qx$interfaces$IVmApi$GetClassTree",
            "GetMethodSource", "VistaLibQx$qx$interfaces$IVmApi$GetMethodSource",
            "HandleEvent", "VistaLibQx$qx$interfaces$IVmApi$HandleEvent",
            "ListFiles", "VistaLibQx$qx$interfaces$IFilesApi$ListFiles",
            "PrnTranscript", "VistaLibQx$qx$interfaces$IAppApi$PrnTranscript",
            "ReadFile", "VistaLibQx$qx$interfaces$IFilesApi$ReadFile",
            "SaveClass", "VistaLibQx$qx$interfaces$IVmApi$SaveClass",
            "SaveImage", "VistaLibQx$qx$interfaces$IVmApi$SaveImage",
            "SaveMethod", "VistaLibQx$qx$interfaces$IVmApi$SaveMethod",
            "WriteFile", "VistaLibQx$qx$interfaces$IFilesApi$WriteFile"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._ipApi = PythonLibQx.app.api.IronPythonApi.Instance;
            }
        },
        methods: {
            DeleteClass: function (class_name, fn) {
                System.Console.WriteLine("PythonVmApi: DeleteClass is not implemented");
            },
            DeleteMethod: function (class_name, is_class_method, method_name, fn) {
                System.Console.WriteLine("PythonVmApi: DeleteMethod is not implemented");
            },
            EvalPythonExpr: function (expr, fn) {
                this._ipApi.EvalExpr(expr, fn);
            },
            GetClassDefinition: function (class_name, fn) {
                System.Console.WriteLine("PythonVmApi: GetClassDefinition is not implemented");
            },
            GetClassMethods: function (class_name, fn) {
                System.Console.WriteLine("PythonVmApi: GetClassMethods is not implemented");
            },
            GetClassTree: function (fn) {
                System.Console.WriteLine("PythonVmApi: GetClassTree is not implemented");
            },
            GetMethodSource: function (class_name, method_name, is_class_method, fn) {
                System.Console.WriteLine("PythonVmApi: GetMethodSource is not implemented");
            },
            HandleEvent: function (proxyId, methodName) {
                System.Console.WriteLine("PythonVmApi: HandleEvent is not implemented");
            },
            ListFiles: function (path, fn) {
                this._ipApi.ListFiles(path, fn);
            },
            PrnTranscript: function (message) {
                PythonLibQx.app.ui.windows.PythonTranscriptWindow.Instance.Prn(message);
            },
            ReadFile$1: function (path, display) {
                throw new System.NotImplementedException.ctor();
            },
            ReadFile: function (path, fn) {
                this._ipApi.ReadFile(path, fn);
            },
            SaveClass: function (class_definition, fn) {
                System.Console.WriteLine("PythonVmApi: SaveClass is not implemented");
            },
            SaveImage: function (fn) {
                System.Console.WriteLine("PythonVmApi: SaveImage is not implemented");
            },
            SaveMethod: function (selected_class, is_class_method, src, fn) {
                System.Console.WriteLine("PythonVmApi: SaveMethod is not implemented");
            },
            WriteFile$1: function (path, text, display) {
                throw new System.NotImplementedException.ctor();
            },
            WriteFile: function (path, text, fn) {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("PythonDesktopQx.app.Application", {
        inherits: [VistaLibQx.qx.core.Qobject],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (PythonDesktopQx.app.Application._instance == null) {
                            PythonDesktopQx.app.Application._instance = new PythonDesktopQx.app.Application();
                        }
                        return PythonDesktopQx.app.Application._instance;
                    }
                }
            }
        },
        fields: {
            _desktopApi: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                VistaLibQx.qx.core.Qobject.ctor.call(this);
            }
        },
        methods: {
            Init: function () {
                this.NativeObject = qxlib.app.App.getInstance();
                this._desktopApi = new PythonDesktopQx.app.api.DesktopApi();
            },
            Start: function (root) {
                var viewport = new PythonDesktopQx.app.ui.container.PythonViewport(this._desktopApi);
                root.add(viewport.NativeObject, { top: 0, right: 0, bottom: 0, left: 0 });
            }
        }
    });

    Bridge.define("PythonDesktopQx.app.ui.container.PythonViewport", {
        inherits: [PythonLibQx.app.ui.container.Viewport],
        ctors: {
            ctor: function (desktopApi) {
                this.$initialize();
                PythonLibQx.app.ui.container.Viewport.ctor.call(this, desktopApi);
                PythonLibQx.app.ui.windows.PythonTranscriptWindow.Open();
            }
        },
        methods: {
            DefaultNavBar: function () {
                return new PythonLibQx.app.ui.widgets.navbar.PythonNavBar();
            }
        }
    });

    Bridge.define("VistaQx.App", {
        statics: {
            methods: {
                Start: function (root) {
                    PythonDesktopQx.app.Application.Instance.Start(root);
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJQeXRob25EZXNrdG9wUXguanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbImFwcC9hcGkvRGVza3RvcEFwaS5jcyIsImFwcC9BcHBsaWNhdGlvbi5jcyIsImFwcC91aS9jb250YWluZXIvUHl0aG9uVmlld3BvcnQuY3MiLCJzdGFydC9BcHAuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFjWUEsY0FBU0E7Ozs7bUNBR1dBLFlBQW1CQTtnQkFFdkNBOztvQ0FHcUJBLFlBQW1CQSxpQkFBc0JBLGFBQW9CQTtnQkFFbEZBOztzQ0FHdUJBLE1BQWFBO2dCQUVwQ0EscUJBQWdCQSxNQUFNQSxBQUFvQ0E7OzBDQUcvQkEsWUFBbUJBO2dCQUU5Q0E7O3VDQUd3QkEsWUFBbUJBO2dCQUUzQ0E7O29DQUdxQkE7Z0JBRXJCQTs7dUNBR3dCQSxZQUFtQkEsYUFBb0JBLGlCQUFzQkE7Z0JBRXJGQTs7bUNBR29CQSxTQUFhQTtnQkFFakNBOztpQ0FHa0JBLE1BQWFBO2dCQUUvQkEsc0JBQWlCQSxNQUFNQSxBQUFvQ0E7O3FDQUdyQ0E7Z0JBRXRCQSwrREFBb0NBOztrQ0FHbkJBLE1BQWFBO2dCQUU5QkEsTUFBTUEsSUFBSUE7O2dDQUdPQSxNQUFhQTtnQkFFOUJBLHFCQUFnQkEsTUFBTUEsQUFBb0NBOztpQ0FHeENBLGtCQUF5QkE7Z0JBRTNDQTs7aUNBR2tCQTtnQkFFbEJBOztrQ0FHbUJBLGdCQUF1QkEsaUJBQXNCQSxLQUFZQTtnQkFFNUVBOzttQ0FHa0JBLE1BQWFBLE1BQWFBO2dCQUU1Q0EsTUFBTUEsSUFBSUE7O2lDQUdRQSxNQUFhQSxNQUFhQTtnQkFFNUNBLE1BQU1BLElBQUlBOzs7Ozs7Ozs7MkJDeEZpQkE7Ozs7O3dCQVF2QkEsSUFBSUEsNkNBQWFBOzRCQUNiQSw0Q0FBWUEsSUFBSUE7O3dCQUNwQkEsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTVhBLG9CQUFlQTtnQkFDZkEsbUJBQWNBLElBQUlBOzs2QkFHSkE7Z0JBRWRBLGVBQTBCQSxJQUFJQSxnREFBZUE7Z0JBQzdDQSxTQUFTQSx1QkFBdUJBOzs7Ozs7Ozs0QkN2QmRBOztzRUFBK0JBO2dCQUVqREE7Ozs7O2dCQUtBQSxPQUFPQSxJQUFJQTs7Ozs7Ozs7aUNDWlVBO29CQUVyQkEsK0NBQTJCQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBQeXRob25MaWJReC5hcHAuYXBpO1xyXG51c2luZyBQeXRob25MaWJReC5hcHAudWkud2luZG93cztcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBWaXN0YUxpYlF4LnF4LmNvcmU7XHJcbnVzaW5nIFZpc3RhTGliUXgucXguaW50ZXJmYWNlcztcclxuXHJcbm5hbWVzcGFjZSBQeXRob25EZXNrdG9wUXguYXBwLmFwaVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGVza3RvcEFwaSA6IElEZXNrdG9wQXBpXHJcbiAgICB7XHJcbiAgICAgICAgSXJvblB5dGhvbkFwaSBfaXBBcGk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBEZXNrdG9wQXBpKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pcEFwaSA9IElyb25QeXRob25BcGkuSW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBEZWxldGVDbGFzcyhzdHJpbmcgY2xhc3NfbmFtZSwgVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiUHl0aG9uVm1BcGk6IERlbGV0ZUNsYXNzIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIERlbGV0ZU1ldGhvZChzdHJpbmcgY2xhc3NfbmFtZSwgYm9vbCBpc19jbGFzc19tZXRob2QsIHN0cmluZyBtZXRob2RfbmFtZSwgUW9iamVjdC5GblZvaWRBIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJQeXRob25WbUFwaTogRGVsZXRlTWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEV2YWxQeXRob25FeHByKHN0cmluZyBleHByLCBWaXN0YUxpYlF4LnF4LmNvcmUuUW9iamVjdC5GblZvaWRBIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2lwQXBpLkV2YWxFeHByKGV4cHIsIChWaXN0YUxpYlF4LnF4LmNvcmUuUW9iamVjdC5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldENsYXNzRGVmaW5pdGlvbihzdHJpbmcgY2xhc3NfbmFtZSwgVmlzdGFMaWJReC5xeC5jb3JlLlFvYmplY3QuRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiUHl0aG9uVm1BcGk6IEdldENsYXNzRGVmaW5pdGlvbiBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBHZXRDbGFzc01ldGhvZHMoc3RyaW5nIGNsYXNzX25hbWUsIFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIlB5dGhvblZtQXBpOiBHZXRDbGFzc01ldGhvZHMgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgR2V0Q2xhc3NUcmVlKFFvYmplY3QuRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiUHl0aG9uVm1BcGk6IEdldENsYXNzVHJlZSBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBHZXRNZXRob2RTb3VyY2Uoc3RyaW5nIGNsYXNzX25hbWUsIHN0cmluZyBtZXRob2RfbmFtZSwgYm9vbCBpc19jbGFzc19tZXRob2QsIFFvYmplY3QuRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiUHl0aG9uVm1BcGk6IEdldE1ldGhvZFNvdXJjZSBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBIYW5kbGVFdmVudChpbnQgcHJveHlJZCwgc3RyaW5nIG1ldGhvZE5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIlB5dGhvblZtQXBpOiBIYW5kbGVFdmVudCBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBMaXN0RmlsZXMoc3RyaW5nIHBhdGgsIFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfaXBBcGkuTGlzdEZpbGVzKHBhdGgsIChWaXN0YUxpYlF4LnF4LmNvcmUuUW9iamVjdC5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFByblRyYW5zY3JpcHQoc3RyaW5nIG1lc3NhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQeXRob25UcmFuc2NyaXB0V2luZG93Lkluc3RhbmNlLlBybihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlYWRGaWxlKHN0cmluZyBwYXRoLCBJRmlsZURpc3BsYXkgZGlzcGxheSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVhZEZpbGUoc3RyaW5nIHBhdGgsIFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfaXBBcGkuUmVhZEZpbGUocGF0aCwgKFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2F2ZUNsYXNzKHN0cmluZyBjbGFzc19kZWZpbml0aW9uLCBRb2JqZWN0LkZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIlB5dGhvblZtQXBpOiBTYXZlQ2xhc3MgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2F2ZUltYWdlKFFvYmplY3QuRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiUHl0aG9uVm1BcGk6IFNhdmVJbWFnZSBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTYXZlTWV0aG9kKHN0cmluZyBzZWxlY3RlZF9jbGFzcywgYm9vbCBpc19jbGFzc19tZXRob2QsIHN0cmluZyBzcmMsIFFvYmplY3QuRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiUHl0aG9uVm1BcGk6IFNhdmVNZXRob2QgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgV3JpdGVGaWxlKHN0cmluZyBwYXRoLCBzdHJpbmcgdGV4dCwgSUZpbGVEaXNwbGF5IGRpc3BsYXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFdyaXRlRmlsZShzdHJpbmcgcGF0aCwgc3RyaW5nIHRleHQsIFZpc3RhTGliUXgucXguY29yZS5Rb2JqZWN0LkZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBQeXRob25EZXNrdG9wUXguYXBwLmFwaTtcclxudXNpbmcgUHl0aG9uRGVza3RvcFF4LmFwcC51aS5jb250YWluZXI7XHJcbnVzaW5nIFZpc3RhTGliUXgucXguY29yZTtcclxudXNpbmcgVmlzdGFMaWJReC5xeC5pbnRlcmZhY2VzO1xyXG5cclxubmFtZXNwYWNlIFB5dGhvbkRlc2t0b3BReC5hcHBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcGxpY2F0aW9uIDogUW9iamVjdFxyXG4gICAge1xyXG5cclxuICAgICAgICBzdGF0aWMgQXBwbGljYXRpb24gX2luc3RhbmNlID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgSURlc2t0b3BBcGkgX2Rlc2t0b3BBcGk7XHJcbiAgICAgICAgQXBwbGljYXRpb24oKSB7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBBcHBsaWNhdGlvbiBJbnN0YW5jZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChfaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfaW5zdGFuY2UgPSBuZXcgQXBwbGljYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0ID0gU2NyaXB0LkNhbGw8ZHluYW1pYz4oXCJxeGxpYi5hcHAuQXBwLmdldEluc3RhbmNlXCIpO1xyXG4gICAgICAgICAgICBfZGVza3RvcEFwaSA9IG5ldyBEZXNrdG9wQXBpKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTdGFydChkeW5hbWljIHJvb3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQeXRob25WaWV3cG9ydCB2aWV3cG9ydCA9IG5ldyBQeXRob25WaWV3cG9ydChfZGVza3RvcEFwaSk7XHJcbiAgICAgICAgICAgIHJvb3QuYWRkKHZpZXdwb3J0Lk5hdGl2ZU9iamVjdCwgbmV3IHsgdG9wID0gMCwgcmlnaHQgPSAwLCBib3R0b20gPSAwLCBsZWZ0ID0gMCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFB5dGhvbkxpYlF4LmFwcC51aS5jb250YWluZXI7XHJcbnVzaW5nIFB5dGhvbkxpYlF4LmFwcC51aS53aWRnZXRzLm5hdmJhcjtcclxudXNpbmcgUHl0aG9uTGliUXguYXBwLnVpLndpbmRvd3M7XHJcbnVzaW5nIFZpc3RhTGliUXgucXguaW50ZXJmYWNlcztcclxudXNpbmcgVmlzdGFMaWJReC5xeC51aS53aWRnZXRzLm5hdmJhcjtcclxuXHJcbm5hbWVzcGFjZSBQeXRob25EZXNrdG9wUXguYXBwLnVpLmNvbnRhaW5lclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHl0aG9uVmlld3BvcnQgOiBWaWV3cG9ydFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgUHl0aG9uVmlld3BvcnQoSURlc2t0b3BBcGkgZGVza3RvcEFwaSkgOiBiYXNlKGRlc2t0b3BBcGkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQeXRob25UcmFuc2NyaXB0V2luZG93Lk9wZW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBOYXZCYXIgRGVmYXVsdE5hdkJhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFB5dGhvbk5hdkJhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJ1c2luZyBQeXRob25EZXNrdG9wUXguYXBwO1xyXG5cclxubmFtZXNwYWNlIFZpc3RhUXhcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTdGFydChkeW5hbWljIHJvb3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5JbnN0YW5jZS5TdGFydChyb290KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdCn0K
