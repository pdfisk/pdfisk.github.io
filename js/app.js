(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobolStudioApi = void 0;
const Viewport_1 = require("../ui/viewport/Viewport");
class CobolStudioApi {
    static getInstance() {
        if (!this.instance)
            this.instance = new CobolStudioApi;
        return this.instance;
    }
    start(root) {
        Viewport_1.Viewport.getInstance(root);
    }
}
exports.CobolStudioApi = CobolStudioApi;

},{"../ui/viewport/Viewport":57}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CobolStudioApi_1 = require("./api/CobolStudioApi");
const app = CobolStudioApi_1.CobolStudioApi.getInstance();
window.CobolStudioApi = app;

},{"./api/CobolStudioApi":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action constants define the names of
 * client actions requested by the Python vm.
 */
class ActionConstants {
}
ActionConstants.ActionAutotab = 'autotab';
ActionConstants.ActionChat = 'chat';
ActionConstants.ActionClear = 'clear';
ActionConstants.ActionClearIn = 'clear_in';
ActionConstants.ActionClearOut = 'clear_out';
ActionConstants.ActionCompile = 'compile';
ActionConstants.ActionConsole = 'console';
ActionConstants.ActionCopy = 'copy';
ActionConstants.ActionDelete = 'delete';
ActionConstants.ActionLogin = 'login';
ActionConstants.ActionLogout = 'logout';
ActionConstants.ActionModels = 'models';
ActionConstants.ActionMoveTile = 'move_tile';
ActionConstants.ActionNew = 'new';
ActionConstants.ActionParse = 'parse';
ActionConstants.ActionRefresh = 'refresh';
ActionConstants.ActionRegister = 'register';
ActionConstants.ActionRename = 'rename';
ActionConstants.ActionRun = 'run';
ActionConstants.ActionRunContinuously = 'run_continuously';
ActionConstants.ActionRunSingleStep = 'run_single_step';
ActionConstants.ActionRunStepping = 'run_stepping';
ActionConstants.ActionSave = 'save';
ActionConstants.ActionSend = 'send';
ActionConstants.ActionSetSize = 'set_size';
ActionConstants.ActionSetTileImage = 'set_tile_image';
ActionConstants.ActionSetTileText = 'set_tile_text';
ActionConstants.ActionStatus = 'status';
ActionConstants.ActionStatusLocal = 'local_status';
ActionConstants.ActionStatusRemote = 'remote_status';
ActionConstants.ActionSync = 'sync';
ActionConstants.FunctionGetBoardPanel = 'getBoardPanel';
ActionConstants.FunctionGetEditorPanel = 'getEditorPanel';
ActionConstants.FunctionGetTranscriptPanel = 'getTranscriptPanel';
ActionConstants.FunctionSetActiveTab = 'setActiveTab';
ActionConstants.MoveDirectionDown = 'down';
ActionConstants.MoveDirectionLeft = 'left';
ActionConstants.MoveDirectionRight = 'right';
ActionConstants.MoveDirectionUp = 'up';
ActionConstants.ServiceBoard = 'board';
ActionConstants.ServiceWorkbench = 'workbench';
ActionConstants.TabCode = 'code';
ActionConstants.TabBoard = 'board';
ActionConstants.TabJavaTranscript = 'java_transcript';
ActionConstants.TabTranscript = 'transcript';
ActionConstants.TabTypeScriptTranscript = 'typescript_transcript';
exports.default = ActionConstants;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppConstants {
}
AppConstants.timestamp = '2026-01-15T18:26:03Z';
AppConstants.version = '1.0.0';
exports.default = AppConstants;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharConstants {
}
CharConstants.DASH = '-';
CharConstants.NEWLINE = "\n";
CharConstants.SPACE = ' ';
CharConstants.UNDERSCORE = '_';
exports.default = CharConstants;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ColorConstants {
}
ColorConstants.BoardBackground = '#aaa';
ColorConstants.BoardTileBackground = '#ccc';
ColorConstants.ButtonBarBackground = '#aaa';
ColorConstants.DesktopBackgroundColor1 = '#054a74';
ColorConstants.DesktopBackgroundColor2 = '#012456';
ColorConstants.NavBarBackground = '#024059';
ColorConstants.ViewportBackground = '#ccc';
ColorConstants.White = 'white';
exports.default = ColorConstants;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventConstants {
}
EventConstants.EventSessionStatusChanged = 'session_status_changed';
EventConstants.QxEventLoaded = 'loaded';
EventConstants.WindowEventClose = 'close';
EventConstants.WindowEventMaximize = 'maximize';
EventConstants.WindowEventMinimize = 'minimize';
EventConstants.WindowEventRestore = 'restore';
exports.default = EventConstants;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FontConstants {
}
FontConstants.FontFamilyBruno = '"Bruno Ace SC", sans-serif';
FontConstants.FontFamilyMonospace = 'monospace, sans-serif';
FontConstants.FontSize12Px = '12px';
FontConstants.FontSize14Px = '14px';
FontConstants.FontSize18Px = '18px';
FontConstants.FontSize24Px = '24px';
FontConstants.FONT_FAMILY = 'fontFamily';
FontConstants.FONT_SIZE = 'fontSize';
exports.default = FontConstants;

},{}],9:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharConstants_1 = __importDefault(require("../constants/CharConstants"));
class LabelConstants {
}
LabelConstants.ButtonLabelChat = 'Chat';
LabelConstants.ButtonLabelChats = 'Chats';
LabelConstants.ButtonLabelClear = 'Clear';
LabelConstants.ButtonLabelClearIn = 'Clear In';
LabelConstants.ButtonLabelClearOut = 'Clear Out';
LabelConstants.ButtonLabelCompile = 'Compile';
LabelConstants.ButtonLabelCopy = 'Copy';
LabelConstants.ButtonLabelCobol = 'Cobol';
LabelConstants.ButtonLabelConsole = 'Console';
LabelConstants.ButtonLabelLLMConsole = 'LLM Console';
LabelConstants.ButtonLabelDelete = 'Delete';
LabelConstants.ButtonLabelLogin = 'Login';
LabelConstants.ButtonLabelLogout = 'Logout';
LabelConstants.ButtonLabelMobile = 'Mobile';
LabelConstants.ButtonLabelModels = 'Models';
LabelConstants.ButtonLabelNew = 'New';
LabelConstants.ButtonLabelLocalChats = 'Local Chats';
LabelConstants.ButtonLabelLocalScripts = 'Local Scripts';
LabelConstants.ButtonLabelLocalUsers = 'Local Users';
LabelConstants.ButtonLabelParse = 'Parse';
LabelConstants.ButtonLabelScripts = 'Scripts';
LabelConstants.ButtonLabelRefresh = 'Refresh';
LabelConstants.ButtonLabelRegister = 'Register';
LabelConstants.ButtonLabelRemoteChats = 'Remote Chats';
LabelConstants.ButtonLabelRemoteUsers = 'Remote Users';
LabelConstants.ButtonLabelRename = 'Rename';
LabelConstants.ButtonLabelRun = 'Run';
LabelConstants.ButtonLabelRunCompile = 'Compile';
LabelConstants.ButtonLabelRunContinuously = 'Run Continuously';
LabelConstants.ButtonLabelRunSingleStep = 'Run Single Step';
LabelConstants.ButtonLabelRunStepping = 'Run Stepping';
LabelConstants.ButtonLabelSave = 'Save';
LabelConstants.ButtonLabelSeparator = CharConstants_1.default.DASH;
LabelConstants.ButtonLabelStatus = 'Status';
LabelConstants.ButtonLabelStatusLocal = 'Local Status';
LabelConstants.ButtonLabelStatusRemote = 'Remote Status';
LabelConstants.ButtonLabelTranscript = 'Transcript';
LabelConstants.ButtonLabelUsers = 'Users';
LabelConstants.ButtonLabelViews = 'Views';
LabelConstants.ButtonLabelVisitors = 'Visitors';
LabelConstants.FieldLabelAuthor = 'Author';
LabelConstants.FieldLabelCategory = 'Category';
LabelConstants.FieldLabelCreatedAt = 'Created At';
LabelConstants.FieldLabelId = 'id';
LabelConstants.FieldLabelIpAddress = 'IP Address';
LabelConstants.FieldLabelLevel = 'Level';
LabelConstants.FieldLabelScript = 'Script';
LabelConstants.FieldLabelName = 'Name';
LabelConstants.FieldLabelPassword = 'Password';
LabelConstants.FieldLabelReceived = 'Received';
LabelConstants.FieldLabelSent = 'Sent';
LabelConstants.FieldLabelTag = 'Tag';
LabelConstants.FieldLabelUpdatedAt = 'Updated At';
LabelConstants.TabPageBoard = 'Board';
LabelConstants.TabPageCode = 'Code';
LabelConstants.TabPageDescription = 'Description';
LabelConstants.TabPageDetails = 'Details';
LabelConstants.TabPageReceived = 'Received';
LabelConstants.TabPageSent = 'Sent';
LabelConstants.TabPageTranscript = 'Transcript';
LabelConstants.SelectionLabelAll = '-- all --';
LabelConstants.WindowLabelChatBrowserLocal = 'Local Chats';
LabelConstants.WindowLabelChatBrowserRemote = 'Remote Chats';
LabelConstants.WindowCaptionCobol = 'Cobol Programs';
LabelConstants.WindowLabelConsole = 'Console';
LabelConstants.WindowLabelLLMConsole = 'LLM Console';
LabelConstants.WindowLabelLogin = 'Login';
LabelConstants.WindowLabelMobile = 'Mobile';
LabelConstants.WindowLabelModels = 'Models';
LabelConstants.WindowLabelScriptBrowserLocal = 'Script Browser (local)';
LabelConstants.WindowLabelScriptBrowserRemote = 'Script Browser (remote)';
LabelConstants.WindowLabelRegister = 'Register';
LabelConstants.WindowCaptionScripts = 'Scripts';
LabelConstants.WindowLabelTranscript = 'Transcript';
LabelConstants.WindowLabelUserBrowserLocal = 'Local Users';
LabelConstants.WindowLabelUserBrowserRemote = 'Remote Users';
LabelConstants.WindowLabelVisitors = 'Visitors';
exports.default = LabelConstants;

},{"../constants/CharConstants":5}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LayoutConstants {
}
LayoutConstants.AlignCenter = 'center';
LayoutConstants.AlignLeft = 'left';
LayoutConstants.AlignMiddle = 'middle';
LayoutConstants.AlignRight = 'right';
LayoutConstants.BoardGridSpacing = 3;
LayoutConstants.DefaultWindowButtonBarSpacing = 3;
exports.default = LayoutConstants;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QxConstants {
}
QxConstants.QxObjectName = 'QxObject';
QxConstants.TsObject = 'tsobject';
exports.default = QxConstants;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SizeConstants {
}
SizeConstants.DefaultWindowButtonBarHeight = 29;
SizeConstants.DefaultWindowButtonBarPadding = [3, 10, 3, 10];
SizeConstants.DefaultWindowButtonBarSpacing = 3;
SizeConstants.DefaultWindowContentPadding = 0;
SizeConstants.DefaultWindowHeight = 275;
SizeConstants.DefaultWindowWidth = 325;
SizeConstants.LabelSize24 = 24;
SizeConstants.LoginPanelColOneWidth = 175;
SizeConstants.LoginPanelColZeroWidth = 60;
SizeConstants.LoginPanelSpacingX = 2;
SizeConstants.LoginPanelSpacingY = 2;
SizeConstants.LoginWindowHeight = 135;
SizeConstants.LoginWindowWidth = 235;
SizeConstants.LogoPanelWidth = 135;
SizeConstants.MediumWindowHeight = 425;
SizeConstants.MediumWindowWidth = 525;
SizeConstants.NavBarHeight = 35;
SizeConstants.PanelPadding = 15;
SizeConstants.ProjectsWindowHeight = 435;
SizeConstants.ProjectsWindowWidth = 575;
SizeConstants.RegisterPanelColOneWidth = 175;
SizeConstants.RegisterPanelColZeroWidth = 60;
SizeConstants.RegisterPanelSpacingX = 2;
SizeConstants.RegisterPanelSpacingY = 2;
SizeConstants.RegisterWindowHeight = 135;
SizeConstants.RegisterWindowWidth = 235;
SizeConstants.StatusPanelWidth = 130;
SizeConstants.ToastRightOffset = 75;
SizeConstants.ToastVerticalSeparator = 15;
SizeConstants.UsersPanelColOneWidth = 175;
SizeConstants.UsersPanelColZeroWidth = 60;
SizeConstants.UsersPanelSpacingX = 2;
SizeConstants.UsersPanelSpacingY = 2;
SizeConstants.UsersWindowHeight = 435;
SizeConstants.UsersWindowWidth = 575;
SizeConstants.VisitorsPanelColOneWidth = 175;
SizeConstants.VisitorsPanelColZeroWidth = 60;
SizeConstants.VisitorsPanelSpacingX = 2;
SizeConstants.VisitorsPanelSpacingY = 2;
SizeConstants.VisitorsWindowHeight = 435;
SizeConstants.VisitorsWindowWidth = 575;
exports.default = SizeConstants;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StyleConstants {
}
StyleConstants.Background = 'background';
StyleConstants.BackgroundColor = 'backgroundColor';
StyleConstants.Border = 'border';
StyleConstants.Color = 'color';
StyleConstants.FontFamily = 'fontFamily';
StyleConstants.FontSize = 'fontSize';
StyleConstants.ImagePercentSize = 0.9;
StyleConstants.ObjectFit = 'objectFit';
StyleConstants.ObjectFitCover = 'cover';
StyleConstants.BorderSlateGray2 = '2px solid slategray';
exports.default = StyleConstants;

},{}],14:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InteropUtil_1 = __importDefault(require("../../interop/InteropUtil"));
class AbstractStore {
    constructor() {
        this.loadHandler = null;
        this.createStore();
    }
    createStore() {
        this.store = new window.qx.data.store.Json;
        this.refresh();
    }
    getModel() {
        return this.store.getModel();
    }
    loadFromDesktop() {
        var method = this.getListMethodName();
        var fn = this.getReplyFunction();
        window.send_message(method, fn);
    }
    loadFromServer() {
        this.store.addListener('loaded', this.onLoad, this);
        this.store.setUrl(this.getUrl());
    }
    onLoad() {
        if (this.loadHandler != null)
            this.loadHandler.handleOnLoad(this);
    }
    refresh() {
        if (InteropUtil_1.default.isDesktop())
            this.loadFromDesktop();
        else
            this.loadFromServer();
    }
    setUpdateListHandler(handler) {
        this.updateListHandler = handler;
    }
    setLoadHandler(handler) {
        this.loadHandler = handler;
    }
    updateListFromArray(values) {
        var _a;
        (_a = this.updateListHandler) === null || _a === void 0 ? void 0 : _a.updateListFromArray(values);
    }
}
exports.default = AbstractStore;

},{"../../interop/InteropUtil":18}],15:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InteropUtil_1 = __importDefault(require("../../interop/InteropUtil"));
const AbstractStore_1 = __importDefault(require("./AbstractStore"));
class CobolStore extends AbstractStore_1.default {
    static getInstance() {
        if (this.instance == null)
            this.instance = new CobolStore();
        return this.instance;
    }
    getValueByName(name, fn) {
        InteropUtil_1.default.getCobol(name, fn);
    }
    getListMethodName() {
        return 'list_cobol';
    }
    getReplyFunction() {
        return (reply) => {
            this.updateListFromArray(reply);
        };
    }
    getUrl() {
        return 'cobol';
    }
}
CobolStore.instance = null;
exports.default = CobolStore;

},{"../../interop/InteropUtil":18,"./AbstractStore":14}],16:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InteropUtil_1 = __importDefault(require("../../interop/InteropUtil"));
const AbstractStore_1 = __importDefault(require("./AbstractStore"));
class ModelsStore extends AbstractStore_1.default {
    static getInstance() {
        if (this.instance == null)
            this.instance = new ModelsStore();
        return this.instance;
    }
    getValueByName(name, fn) {
        InteropUtil_1.default.getModel(name, fn);
    }
    getListMethodName() {
        return 'list_models';
    }
    getReplyFunction() {
        return (reply) => {
            this.updateListFromArray(reply);
        };
    }
    getUrl() {
        return 'models';
    }
}
ModelsStore.instance = null;
exports.default = ModelsStore;

},{"../../interop/InteropUtil":18,"./AbstractStore":14}],17:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InteropUtil_1 = __importDefault(require("../../interop/InteropUtil"));
const AbstractStore_1 = __importDefault(require("./AbstractStore"));
class ScriptsStore extends AbstractStore_1.default {
    static getInstance() {
        if (this.instance == null)
            this.instance = new ScriptsStore();
        return this.instance;
    }
    getValueByName(name, fn) {
        InteropUtil_1.default.getScript(name, fn);
    }
    getListMethodName() {
        return 'list_scripts';
    }
    getReplyFunction() {
        return (reply) => {
            this.updateListFromArray(reply);
        };
    }
    getUrl() {
        return 'scripts';
    }
}
ScriptsStore.instance = null;
exports.default = ScriptsStore;

},{"../../interop/InteropUtil":18,"./AbstractStore":14}],18:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DesktopUtil_1 = __importDefault(require("./desktop/DesktopUtil"));
const FetchUtil_1 = __importDefault(require("./server/FetchUtil"));
class InteropUtil {
    static isDesktop() {
        const host = window.location.host;
        return host.length == 0;
    }
    static getCobol(fileName, fn) {
        const path = `cobol/${fileName}`;
        if (this.isDesktop())
            DesktopUtil_1.default.getCobol(fileName, fn);
        else
            FetchUtil_1.default.getText(path, fn);
    }
    static getModel(fileName, fn) {
        const path = `models/${fileName}`;
        if (this.isDesktop())
            DesktopUtil_1.default.getModel(fileName, fn);
        else
            FetchUtil_1.default.getText(path, fn);
    }
    static getScript(fileName, fn) {
        const path = `scripts/${fileName}`;
        if (this.isDesktop())
            DesktopUtil_1.default.getScript(fileName, fn);
        else
            FetchUtil_1.default.getText(path, fn);
    }
    static getText(path, fn) {
        if (this.isDesktop())
            DesktopUtil_1.default.getText(path, fn);
        else
            FetchUtil_1.default.getText(path, fn);
    }
    static runCode(code, fn) {
        if (this.isDesktop())
            DesktopUtil_1.default.runCode(code, fn);
        else {
            const fn2 = (response) => {
                response.json().then((data) => {
                    fn(data.reply);
                });
            };
            const payload = { Code: code };
            FetchUtil_1.default.postPath("run_code", payload, fn2);
        }
    }
}
exports.default = InteropUtil;

},{"./desktop/DesktopUtil":19,"./server/FetchUtil":20}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DesktopUtil {
    static getCobol(file_name, fn) {
        const method = 'get_cobol';
        window.send_message(method, fn, file_name);
    }
    static getModel(file_name, fn) {
        const method = 'get_model';
        window.send_message(method, fn, file_name);
    }
    static getScript(file_name, fn) {
        const method = 'get_script';
        window.send_message(method, fn, file_name);
    }
    static runCode(code, fn) {
        const method = 'run_code';
        window.send_message(method, fn, code);
    }
    static getText(file_name, fn) {
        const method = 'get_script';
        window.send_message(method, fn, file_name);
    }
}
exports.default = DesktopUtil;

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchUtil {
    static getPath(path, fn) {
        fetch(path).then((x) => { fn(x); });
    }
    static getText(path, fn) {
        const fn2 = (response) => {
            if (!response.ok) {
                fn('** error **');
                return;
            }
            response.text().then(fn);
        };
        this.getPath(path, fn2);
    }
    static postPath(path, data, fn) {
        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((x) => { fn(x); });
    }
}
exports.default = FetchUtil;

},{}],21:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxObject = void 0;
const QxConstants_1 = __importDefault(require("../../constants/QxConstants"));
class QxObject {
    constructor(widget) {
        this.widget = widget;
        this.id = QxObject.idCounter++;
        this.setQxId(this.generateQxId());
        this.widget.setUserData(QxConstants_1.default.TsObject, this);
        this.initialize();
    }
    generateQxId() {
        return `${this.getClassName()}-${this.id}`;
    }
    getId() {
        return this.id;
    }
    getQxId() {
        return this.widget.getQxObjectId();
    }
    getClassName() {
        return this.widget ? this.widget.classname : this.idClassName();
    }
    idClassName() {
        return QxConstants_1.default.QxObjectName;
    }
    initialize() {
    }
    setQxId(id) {
        this.widget.setQxObjectId(id);
    }
}
exports.QxObject = QxObject;
QxObject.idCounter = 0;

},{"../../constants/QxConstants":11}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxFactory = void 0;
class QxFactory {
    static atomLayout() {
        return new window.qx.ui.layout.Atom;
    }
    static basicAtom() {
        return new window.qx.ui.basic.Atom;
    }
    static basicImage() {
        return new window.qx.ui.basic.Image;
    }
    static basicLabel(text) {
        return new window.qx.ui.basic.Label(text);
    }
    static basicLayout() {
        return new window.qx.ui.layout.Basic;
    }
    static canvasLayout() {
        return new window.qx.ui.layout.Canvas;
    }
    static comboBox() {
        return new window.qx.ui.form.ComboBox;
    }
    static compositeContainer() {
        return new window.qx.ui.container.Composite;
    }
    static dialog() {
        return window.qxl.dialog.Dialog;
    }
    static dockLayout() {
        return new window.qx.ui.layout.Dock;
    }
    static embedHtml() {
        return new window.qx.ui.embed.Html;
    }
    static flowLayout() {
        return new window.qx.ui.layout.Flow;
    }
    static form() {
        return new window.qx.ui.form.Form;
    }
    static formButton() {
        return new window.qx.ui.form.Button;
    }
    static formMenuButton() {
        return new window.qx.ui.form.MenuButton;
    }
    static formRendererSingle(form) {
        return new window.qx.ui.form.renderer.Single(form);
    }
    static gridLayout() {
        return new window.qx.ui.layout.Grid;
    }
    static growLayout() {
        return new window.qx.ui.layout.Grow;
    }
    static hboxLayout() {
        return new window.qx.ui.layout.HBox;
    }
    static htmlIframe(url = '') {
        return new window.qx.html.Iframe(url);
    }
    static list() {
        return new window.qx.ui.list.List;
    }
    static listItem() {
        return new window.qx.ui.form.ListItem;
    }
    static menuButton(text = '') {
        return new window.qx.ui.menu.Button(text);
    }
    static menuMenu() {
        return new window.qx.ui.menu.Menu;
    }
    static menuSeparator() {
        return new window.qx.ui.menu.Separator;
    }
    static menubarButton() {
        return new window.qx.ui.menubar.Button;
    }
    static menubarMenuBar() {
        return new window.qx.ui.menubar.MenuBar;
    }
    static menuSplitButton(text = '') {
        return new window.qx.ui.form.SplitButton(text);
    }
    static popup() {
        return new window.qx.ui.popup.Popup;
    }
    static selectBox() {
        return new window.qx.ui.form.SelectBox;
    }
    static splitPane() {
        return new window.qx.ui.splitpane.Pane;
    }
    static tabPage() {
        return new window.qx.ui.tabview.Page;
    }
    static tabView() {
        return new window.qx.ui.tabview.TabView;
    }
    static textArea() {
        return new window.qx.ui.form.TextArea;
    }
    static textField() {
        return new window.qx.ui.form.TextField;
    }
    static toolbarButton() {
        return new window.qx.ui.toolbar.Button;
    }
    static toolbarMenuButton() {
        return new window.qx.ui.toolbar.MenuButton;
    }
    static toolbarSeparator() {
        return new window.qx.ui.toolbar.Separator;
    }
    static toolbarToolBar() {
        return new window.qx.ui.toolbar.ToolBar;
    }
    static vboxLayout() {
        return new window.qx.ui.layout.VBox;
    }
    static window() {
        return new window.qx.ui.window.Window;
    }
}
exports.QxFactory = QxFactory;

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxElement = void 0;
const QxNode_1 = require("./QxNode");
class QxElement extends QxNode_1.QxNode {
    constructor(widget) {
        super(widget);
    }
    add(widget) {
        this.widget.add(widget);
    }
    addClass(className) {
        this.widget.addClass(className);
    }
    setLastElementStyle(key, value) {
        const domElement = this.widget.getDomElement();
        if (!domElement)
            return;
        const lastDescendent = window.qx.dom.Hierarchy.getLastDescendant(domElement);
        if (!lastDescendent)
            return;
        lastDescendent.style[key] = value;
    }
    setStyle(key, value) {
        this.widget.setStyle(key, value);
    }
}
exports.QxElement = QxElement;

},{"./QxNode":24}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxNode = void 0;
const QxObject_1 = require("../core/QxObject");
class QxNode extends QxObject_1.QxObject {
    constructor(widget) {
        super(widget);
    }
}
exports.QxNode = QxNode;

},{"../core/QxObject":21}],25:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxBasicAtom = void 0;
const StyleConstants_1 = __importDefault(require("../../../constants/StyleConstants"));
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
class QxBasicAtom extends QxWidget_1.QxWidget {
    constructor(widget) {
        if (!widget)
            widget = QxFactory_1.QxFactory.basicAtom();
        super(widget);
        this.setCenter(true);
        this.setRich(true);
    }
    clear() {
        this.resetIcon();
        this.resetLabel();
    }
    getFirstChild() {
        const children = this.widget._getChildren();
        if (children.length === 0)
            return null;
        return children[0];
    }
    getIcon() {
        return this.widget.getIcon();
    }
    getLabel() {
        return this.widget.getLabel();
    }
    getShow() {
        return this.widget.getShow();
    }
    resetIcon() {
        this.widget.resetIcon();
    }
    resetLabel() {
        this.widget.resetLabel();
    }
    setCenter(value) {
        this.widget.setCenter(value);
    }
    setChildSize() {
        const width = this.widget.getMaxWidth();
        const height = this.widget.getMaxHeight();
        const child = this.getFirstChild();
        if (!child)
            return;
        child.setWidth(width * StyleConstants_1.default.ImagePercentSize);
        child.setHeight(height * StyleConstants_1.default.ImagePercentSize);
    }
    setIcon(path) {
        this.resetLabel();
        this.widget.setIcon(path);
        this.setIconStyle();
        this.setChildSize();
    }
    setIconStyle() {
        const image = this.getFirstChild();
        image.setScale(true);
        image.setForceRatio(true);
    }
    setLabel(label) {
        if (!this.widget)
            return;
        this.resetIcon();
        const html = `<span style="font-size:24px;font-family:monospace,sans;color:ivory;">${label}</span>`;
        this.widget.setLabel(html);
    }
    setRich(value) {
        this.widget.setRich(value);
    }
    setShow(show) {
        this.widget.setShow(show);
    }
}
exports.QxBasicAtom = QxBasicAtom;

},{"../../../constants/StyleConstants":13,"../../factory/QxFactory":22,"../core/QxWidget":28}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxComposite = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
const QxDockLayout_1 = require("../layout/QxDockLayout");
class QxComposite extends QxWidget_1.QxWidget {
    constructor(widget) {
        if (!widget)
            widget = QxFactory_1.QxFactory.compositeContainer();
        super(widget);
    }
    initialize() {
        super.initialize();
        this.setLayout(this.defaultLayout());
        this.setPadding(this.defaultPadding());
    }
    add(child, options = {}) {
        this.widget.add(child.widget, options);
    }
    addCenter(child) {
        this.widget.add(child.widget, { edge: 'center' });
    }
    addEast(child) {
        this.widget.add(child.widget, { edge: 'east' });
    }
    addNorth(child) {
        this.widget.add(child.widget, { edge: 'north' });
    }
    addRowColumn(child, row, column) {
        this.widget.add(child.widget, { row: row, column: column });
    }
    addSouth(child) {
        this.widget.add(child.widget, { edge: 'south' });
    }
    addWest(child) {
        this.widget.add(child.widget, { edge: 'west' });
    }
    defaultLayout() {
        return new QxDockLayout_1.QxDockLayout();
    }
    defaultPadding() {
        return [0];
    }
    remove(child) {
        this.widget.remove(child.widget);
    }
    removeAll() {
        this.widget.removeAll();
    }
    setLayout(layout) {
        this.widget.setLayout(layout.widget);
    }
}
exports.QxComposite = QxComposite;

},{"../../factory/QxFactory":22,"../core/QxWidget":28,"../layout/QxDockLayout":42}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxLayoutItem = void 0;
const QxObject_1 = require("../../core/QxObject");
class QxLayoutItem extends QxObject_1.QxObject {
    constructor(widget) {
        super(widget);
    }
    getSizeHint() {
        return this.widget.getSizeHint();
    }
}
exports.QxLayoutItem = QxLayoutItem;

},{"../../core/QxObject":21}],28:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxWidget = void 0;
const StyleConstants_1 = __importDefault(require("../../../constants/StyleConstants"));
const QxElement_1 = require("../../html/QxElement");
const QxLayoutItem_1 = require("./QxLayoutItem");
class QxWidget extends QxLayoutItem_1.QxLayoutItem {
    constructor(widget) {
        super(widget);
        this.contentElement = undefined;
        this.hasAppeared = false;
        if (this.defaultEnableOnAppear()) {
            this.enableOnAppear();
            this.enableOnDisappear();
        }
        if (this.defaultEnableOnResize())
            this.enableOnResize();
    }
    addClass(className) {
        this.getContentElement().addClass(className);
    }
    defaultEnableOnAppear() {
        return false;
    }
    defaultEnableOnResize() {
        return false;
    }
    enableOnAppear() {
        this.widget.addListener('appear', this.onAppear, this);
    }
    enableOnDisappear() {
        this.widget.addListener('disappear', this.onDisappear, this);
    }
    enableOnResize() {
        this.widget.addListener('resize', this.onResize, this);
    }
    getBounds() {
        return this.widget.getBounds();
    }
    getBoundsHeight() {
        return this.getBounds().height;
    }
    getBoundsWidth() {
        return this.getBounds().width;
    }
    getContentElement() {
        if (this.contentElement === undefined)
            this.contentElement = new QxElement_1.QxElement(this.widget.getContentElement());
        return this.contentElement;
    }
    getEnabled() {
        return this.widget.getEnabled();
    }
    hide() {
        this.widget.hide();
    }
    onAppear() {
        this.hasAppeared = true;
    }
    onDisappear() {
    }
    onResize() {
    }
    setAlignX(align) {
        this.widget.setAlignX(align);
    }
    setAlignY(align) {
        this.widget.setAlignY(align);
    }
    setBackground(value) {
        this.setStyle(StyleConstants_1.default.Background, value);
    }
    setBackgroundColor(color) {
        this.setStyle(StyleConstants_1.default.BackgroundColor, color);
    }
    setColor(color) {
        this.setStyle(StyleConstants_1.default.Color, color, true);
    }
    setEnabled(value) {
        this.widget.setEnabled(value);
        return this;
    }
    setFontFamily(fontFamily) {
        this.setStyle(StyleConstants_1.default.FontFamily, fontFamily);
    }
    setFontSize(fontSize) {
        this.setStyle(StyleConstants_1.default.FontSize, fontSize);
    }
    setHeight(height) {
        this.widget.setHeight(height);
    }
    setLayoutParent(parent) {
        this.widget.setLayoutParent(parent.widget);
    }
    setLeft(left) {
        this.widget.setDomLeft(left);
    }
    setMargin(margin) {
        this.widget.setMargin.apply(this.widget, margin);
    }
    setMarginAll(margin) {
        this.widget.setMargin(margin);
    }
    setMarginBottom(margin) {
        this.widget.setMarginBotton(margin);
    }
    setMarginLeft(margin) {
        this.widget.setMarginLeft(margin);
    }
    setMarginRight(margin) {
        this.widget.setMarginRight(margin);
    }
    setMarginTop(margin) {
        this.widget.setMarginTop(margin);
    }
    setMaxHeight(height) {
        this.widget.setMaxHeight(height);
    }
    setMaxWidth(width) {
        this.widget.setMaxWidth(width);
    }
    setObjectFit(fit) {
        this.setStyle(StyleConstants_1.default.ObjectFit, fit);
    }
    setObjectFitCover() {
        this.setObjectFit(StyleConstants_1.default.ObjectFitCover);
    }
    setPadding(padding) {
        this.widget.setPadding.apply(this.widget, padding);
    }
    setPaddingAll(padding) {
        this.widget.setPadding(padding);
    }
    setPaddingBottom(padding) {
        this.widget.setPaddingBotton(padding);
    }
    setPaddingLeft(padding) {
        this.widget.setPaddingLeft(padding);
    }
    setPaddingRight(padding) {
        this.widget.setPaddingRight(padding);
    }
    setPaddingTop(padding) {
        this.widget.setPaddingTop(padding);
    }
    setStyle(key, value, setLastElement = false) {
        const contentElement = this.getContentElement();
        contentElement.setStyle(key, value);
        if (setLastElement)
            contentElement.setLastElementStyle(key, value);
    }
    setTop(top) {
        this.widget.setDomTop(top);
    }
    setWidth(width) {
        this.widget.setWidth(width);
    }
    show() {
        this.widget.show();
    }
}
exports.QxWidget = QxWidget;

},{"../../../constants/StyleConstants":13,"../../html/QxElement":23,"./QxLayoutItem":27}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxEditor = void 0;
const QxComposite_1 = require("../container/QxComposite");
class QxEditor extends QxComposite_1.QxComposite {
    constructor() {
        super(...arguments);
        this.editor = null;
        this.hasRendered = false;
        this.initValue = '';
    }
    clear() {
        this.setValue('');
    }
    defaultEnableOnAppear() {
        return true;
    }
    getValue() {
        if (this.editor)
            return this.editor.getValue();
        return '';
    }
    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        const elem = this.getContentElement();
        const domNode = elem.widget._domNode;
        const mode = window.qx.lang.String.format('ace/mode/%1', ['python']);
        const config = { mode: mode, };
        const ace = window.ace;
        this.editor = ace.edit(domNode, config);
        this.editor.setValue(this.initValue);
        this.initValue = '';
        this.setRange();
        this.editor.setTheme('ace/theme/dreamweaver');
        this.editor.renderer.on('afterRender', () => {
            this.onRender();
        });
        window.X = this;
    }
    onRender() {
        this.hasRendered = true;
    }
    setRange() {
        this.editor.selection.setRange(new window.ace.Range(0, 0, 0, 0));
    }
    setValue(text) {
        if (this.hasRendered) {
            this.editor.setValue(text);
            this.setRange();
        }
        else
            this.initValue = text;
    }
}
exports.QxEditor = QxEditor;

},{"../container/QxComposite":26}],30:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxHtml = void 0;
const FontConstants_1 = __importDefault(require("../../../constants/FontConstants"));
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
class QxHtml extends QxWidget_1.QxWidget {
    constructor() {
        super(QxFactory_1.QxFactory.embedHtml());
    }
    clear() {
        this.setHtml('');
    }
    defaultEnableOnAppear() {
        return true;
    }
    getHtml() {
        return this.widget.getHtml();
    }
    onAppear() {
        this.setFontSize(FontConstants_1.default.FontSize14Px);
        this.setFontFamily(FontConstants_1.default.FontFamilyMonospace);
    }
    setHtml(html) {
        this.widget.setHtml(html);
    }
}
exports.QxHtml = QxHtml;

},{"../../../constants/FontConstants":8,"../../factory/QxFactory":22,"../core/QxWidget":28}],31:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxAbstractField = void 0;
const FontConstants_1 = __importDefault(require("../../../constants/FontConstants"));
const QxWidget_1 = require("../core/QxWidget");
class QxAbstractField extends QxWidget_1.QxWidget {
    constructor(widget) {
        super(widget);
        this.hasTextAppeared = false;
        this.initValue = '';
    }
    clear() {
        this.setValue('');
    }
    defaultEnableOnAppear() {
        return true;
    }
    getValue() {
        if (!this.widget)
            return '';
        let value = this.widget.getValue();
        if (typeof (value) !== 'string')
            value = '';
        return value;
    }
    initialize() {
        super.initialize();
        this.clear();
        this.setFontFamily(FontConstants_1.default.FontFamilyMonospace);
        this.setFontSize(FontConstants_1.default.FontSize24Px);
    }
    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.setFontSize(FontConstants_1.default.FontSize14Px);
            this.setFontFamily(FontConstants_1.default.FontFamilyMonospace);
            this.setValue(this.initValue);
            this.initValue = '';
        }
    }
    setValue(value) {
        if (this.hasAppeared)
            this.widget.setValue(value);
        else
            this.initValue += value;
    }
}
exports.QxAbstractField = QxAbstractField;

},{"../../../constants/FontConstants":8,"../core/QxWidget":28}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxForm = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
class QxForm extends QxWidget_1.QxWidget {
    constructor() {
        super(QxFactory_1.QxFactory.form());
    }
    add(item, label) {
        this.widget.add(item.widget, label);
    }
}
exports.QxForm = QxForm;

},{"../../factory/QxFactory":22,"../core/QxWidget":28}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxFormAbstractRenderer = void 0;
const QxWidget_1 = require("../core/QxWidget");
class QxFormAbstractRenderer extends QxWidget_1.QxWidget {
}
exports.QxFormAbstractRenderer = QxFormAbstractRenderer;

},{"../core/QxWidget":28}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxFormButton = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxBasicAtom_1 = require("../basic/QxBasicAtom");
class QxFormButton extends QxBasicAtom_1.QxBasicAtom {
    static create(label, fn) {
        const button = new QxFormButton();
        button.setLabel(label);
        if (fn)
            button.setClickHandler(fn);
        return button;
    }
    constructor(widget) {
        widget = widget ? widget : QxFactory_1.QxFactory.formButton();
        super(widget);
    }
    setClickHandler(fn) {
        this.widget.addListener('click', fn);
    }
    setLabel(label) {
        this.widget.setLabel(label);
    }
}
exports.QxFormButton = QxFormButton;

},{"../../factory/QxFactory":22,"../basic/QxBasicAtom":25}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxFormMenuButton = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxFormButton_1 = require("./QxFormButton");
class QxFormMenuButton extends QxFormButton_1.QxFormButton {
    static createWithMenu(label, menu) {
        const button = new QxFormMenuButton;
        button.setLabel(label);
        if (menu)
            button.setMenu(menu);
        return button;
    }
    constructor(widget = null) {
        widget = widget ? widget : QxFactory_1.QxFactory.formMenuButton();
        super(widget);
    }
    setMenu(menu) {
        this.widget.setMenu(menu.widget);
    }
}
exports.QxFormMenuButton = QxFormMenuButton;

},{"../../factory/QxFactory":22,"./QxFormButton":34}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxFormRendererSingle = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxFormAbstractRenderer_1 = require("./QxFormAbstractRenderer");
class QxFormRendererSingle extends QxFormAbstractRenderer_1.QxFormAbstractRenderer {
    constructor(form) {
        super(QxFactory_1.QxFactory.formRendererSingle(form.widget));
    }
}
exports.QxFormRendererSingle = QxFormRendererSingle;

},{"../../factory/QxFactory":22,"./QxFormAbstractRenderer":33}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxListItem = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
class QxListItem extends QxWidget_1.QxWidget {
    constructor(label) {
        super(QxFactory_1.QxFactory.listItem());
        this.setLabel(label);
    }
    setLabel(label) {
        this.widget.setLabel(label);
    }
}
exports.QxListItem = QxListItem;

},{"../../factory/QxFactory":22,"../core/QxWidget":28}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxSelectBox = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
const QxListItem_1 = require("./QxListItem");
class QxSelectBox extends QxWidget_1.QxWidget {
    constructor() {
        super(QxFactory_1.QxFactory.selectBox());
        this.widget.addListener('changeSelection', this.onChangeSelection, this);
    }
    addItem(label) {
        this.addItemWidget(new QxListItem_1.QxListItem(label));
    }
    addItemWidget(item) {
        this.widget.add(item.widget);
    }
    clear() {
        this.widget.removeAll();
    }
    getSelectedLabel() {
        const selection = this.widget.getSelection();
        if (selection && selection.length)
            return selection[0].getLabel();
        return '';
    }
    onChangeSelection() {
        if (typeof (this.changeHandlerFn) === 'function')
            this.changeHandlerFn.call(this);
    }
    setChangeHandlerFn(changeHandlerFn) {
        this.changeHandlerFn = changeHandlerFn;
    }
    setItems(labels) {
        this.clear();
        labels.forEach((label) => { this.addItem(label); });
    }
}
exports.QxSelectBox = QxSelectBox;

},{"../../factory/QxFactory":22,"../core/QxWidget":28,"./QxListItem":37}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxTextArea = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxAbstractField_1 = require("./QxAbstractField");
class QxTextArea extends QxAbstractField_1.QxAbstractField {
    constructor() {
        super(QxFactory_1.QxFactory.textArea());
    }
}
exports.QxTextArea = QxTextArea;

},{"../../factory/QxFactory":22,"./QxAbstractField":31}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxTextField = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxAbstractField_1 = require("./QxAbstractField");
class QxTextField extends QxAbstractField_1.QxAbstractField {
    constructor() {
        super(QxFactory_1.QxFactory.textField());
    }
}
exports.QxTextField = QxTextField;

},{"../../factory/QxFactory":22,"./QxAbstractField":31}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxAbstractLayout = void 0;
const QxObject_1 = require("../../core/QxObject");
class QxAbstractLayout extends QxObject_1.QxObject {
    constructor(widget) {
        super(widget);
    }
    setAlignX(alignment) {
        this.widget.setAlignX(alignment);
    }
    setAlignY(alignment) {
        this.widget.setAlignY(alignment);
    }
    setSpacing(spacing) {
        this.widget.setSpacing(spacing);
    }
}
exports.QxAbstractLayout = QxAbstractLayout;

},{"../../core/QxObject":21}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxDockLayout = void 0;
const QxAbstractLayout_1 = require("./QxAbstractLayout");
const QxFactory_1 = require("../../factory/QxFactory");
class QxDockLayout extends QxAbstractLayout_1.QxAbstractLayout {
    constructor() {
        super(QxFactory_1.QxFactory.dockLayout());
    }
}
exports.QxDockLayout = QxDockLayout;

},{"../../factory/QxFactory":22,"./QxAbstractLayout":41}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxFlowLayout = void 0;
const QxAbstractLayout_1 = require("./QxAbstractLayout");
const QxFactory_1 = require("../../factory/QxFactory");
class QxFlowLayout extends QxAbstractLayout_1.QxAbstractLayout {
    constructor() {
        super(QxFactory_1.QxFactory.flowLayout());
    }
}
exports.QxFlowLayout = QxFlowLayout;

},{"../../factory/QxFactory":22,"./QxAbstractLayout":41}],44:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxHBoxLayout = void 0;
const LayoutConstants_1 = __importDefault(require("../../../constants/LayoutConstants"));
const QxFactory_1 = require("../../factory/QxFactory");
const QxAbstractLayout_1 = require("./QxAbstractLayout");
class QxHBoxLayout extends QxAbstractLayout_1.QxAbstractLayout {
    constructor() {
        super(QxFactory_1.QxFactory.hboxLayout());
    }
    initialize() {
        super.initialize();
        this.setAlignX(this.defaultAlignX());
    }
    defaultAlignX() {
        return LayoutConstants_1.default.AlignLeft;
    }
}
exports.QxHBoxLayout = QxHBoxLayout;

},{"../../../constants/LayoutConstants":10,"../../factory/QxFactory":22,"./QxAbstractLayout":41}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxList = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
class QxList extends QxWidget_1.QxWidget {
    constructor() {
        super(QxFactory_1.QxFactory.list());
        this.widget.getSelection().addListener('change', this.onChange, this);
    }
    initSelection() {
        this.widget.initSelection();
    }
    onChange() {
        const selection = this.widget.getSelection();
        if (selection && selection.length) {
            const name = selection.getItem(0);
            if (this.changeHandlerFn)
                this.changeHandlerFn(name);
        }
    }
    refresh() {
        this.widget.refresh();
    }
    scrollToTop() {
        this.scrollToY(0);
    }
    scrollToY(y) {
        this.widget.scrollToY(y);
    }
    setChangeHandlerFn(fn) {
        this.changeHandlerFn = fn;
    }
    setData(labels) {
        const model = window.qx.data.marshal.Json.createModel(labels.sort());
        this.widget.setModel(model);
        this.scrollToTop();
    }
}
exports.QxList = QxList;

},{"../../factory/QxFactory":22,"../core/QxWidget":28}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxMenu = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
const QxMenuBarButton_1 = require("../menubar/QxMenuBarButton");
const QxToolBarButton_1 = require("../toolbar/QxToolBarButton");
const QxMenuButton_1 = require("./QxMenuButton");
const QxMenuSeparator_1 = require("./QxMenuSeparator");
class QxMenu extends QxWidget_1.QxWidget {
    constructor() {
        super(QxFactory_1.QxFactory.menuMenu());
    }
    add(item) {
        if (!this.hasItem(item))
            this.widget.add(item.widget);
    }
    addMenuButtonFn(label, fn) {
        const button = QxMenuButton_1.QxMenuButton.createMenuButtonFn(label, fn);
        this.add(button);
        return button;
    }
    addMenuButtonMenu(label, menu) {
        const button = QxMenuButton_1.QxMenuButton.createMenuButtonMenu(label, menu);
        this.add(button);
        return button;
    }
    addMenuBarButton(label, fn) {
        const button = QxMenuBarButton_1.QxMenuBarButton.createMenuBarButton(label, fn);
        this.add(button);
        return button;
    }
    addToolBarButton(label, fn) {
        const button = QxToolBarButton_1.QxToolBarButton.createToolBarButton(label, fn);
        this.add(button);
        return button;
    }
    addSeparator() {
        const separator = new QxMenuSeparator_1.QxMenuSeparator;
        this.add(separator);
        return separator;
    }
    hasItem(item) {
        return this.widget.getChildren().indexOf(item.widget) >= 0;
    }
    remove(item) {
        if (this.hasItem(item))
            this.widget.remove(item.widget);
    }
}
exports.QxMenu = QxMenu;

},{"../../factory/QxFactory":22,"../core/QxWidget":28,"../menubar/QxMenuBarButton":50,"../toolbar/QxToolBarButton":55,"./QxMenuButton":48,"./QxMenuSeparator":49}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxMenuAbstractButton = void 0;
const QxWidget_1 = require("../core/QxWidget");
class QxMenuAbstractButton extends QxWidget_1.QxWidget {
    constructor(widget) {
        super(widget);
    }
    getLabel() {
        return this.widget.getLabel();
    }
    setLabel(label) {
        this.widget.setLabel(label);
    }
    setMenu(menu) {
        this.widget.setMenu(menu.widget);
    }
}
exports.QxMenuAbstractButton = QxMenuAbstractButton;

},{"../core/QxWidget":28}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxMenuButton = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxMenuAbstractButton_1 = require("./QxMenuAbstractButton");
class QxMenuButton extends QxMenuAbstractButton_1.QxMenuAbstractButton {
    static createMenuButtonFn(label, fn) {
        const button = new QxMenuButton();
        button.setLabel(label);
        if (fn)
            button.setClickHandler(fn);
        return button;
    }
    static createMenuButtonMenu(label, menu) {
        const button = new QxMenuButton();
        button.setLabel(label);
        if (menu)
            button.setMenu(menu);
        return button;
    }
    constructor() {
        super(QxFactory_1.QxFactory.menuButton());
    }
    setClickHandler(fn) {
        this.widget.addListener('execute', fn);
    }
}
exports.QxMenuButton = QxMenuButton;

},{"../../factory/QxFactory":22,"./QxMenuAbstractButton":47}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxMenuSeparator = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
class QxMenuSeparator extends QxWidget_1.QxWidget {
    constructor() {
        super(QxFactory_1.QxFactory.menuSeparator());
    }
}
exports.QxMenuSeparator = QxMenuSeparator;

},{"../../factory/QxFactory":22,"../core/QxWidget":28}],50:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxMenuBarButton = void 0;
const ColorConstants_1 = __importDefault(require("../../../constants/ColorConstants"));
const QxFactory_1 = require("../../factory/QxFactory");
const QxFormMenuButton_1 = require("../form/QxFormMenuButton");
class QxMenuBarButton extends QxFormMenuButton_1.QxFormMenuButton {
    static createMenuBarButton(label, fn) {
        const button = new QxMenuBarButton();
        button.setLabel(label);
        if (fn)
            button.setClickHandler(fn);
        return button;
    }
    constructor() {
        super(QxFactory_1.QxFactory.menubarButton());
    }
    addButtonListeners() {
        this.widget.addListener('losecapture', this.onLoseCapture, this);
        this.widget.addListener('mouseout', this.onMouseOut, this);
        this.widget.addListener('mouseup', this.onMouseUp, this);
    }
    defaultEnableOnAppear() {
        return true;
    }
    onAppear() {
        super.onAppear();
        this.setColorWhite();
        this.addButtonListeners();
    }
    onLoseCapture() {
        this.setColorWhite();
    }
    onMouseOut() {
        this.setColorWhite();
    }
    onMouseUp() {
        this.setColorWhite();
    }
    setColorWhite() {
        const fn = () => {
            this.setColor(ColorConstants_1.default.White);
        };
        setTimeout(fn, 0);
    }
}
exports.QxMenuBarButton = QxMenuBarButton;

},{"../../../constants/ColorConstants":6,"../../factory/QxFactory":22,"../form/QxFormMenuButton":35}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxPopup = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
class QxPopup extends QxWidget_1.QxWidget {
    static alert(text, fn) {
        const message = text;
        const callback = fn;
        const context = this;
        const caption = 'Info';
        return QxFactory_1.QxFactory.dialog().alert(message, callback, context, caption);
    }
    static rename(oldName, callback) {
        const message = 'Enter new name';
        const context = this;
        const value = oldName;
        const caption = 'Rename Item';
        return QxFactory_1.QxFactory.dialog().prompt(message, callback, context, value, caption);
    }
}
exports.QxPopup = QxPopup;

},{"../../factory/QxFactory":22,"../core/QxWidget":28}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxSplitPane = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
class QxSplitPane extends QxWidget_1.QxWidget {
    static create(orientation) {
        const splitPane = new QxSplitPane();
        splitPane.setOrientation(orientation);
        return splitPane;
    }
    static createHorizontal() {
        return this.create('horizontal');
    }
    static createVertical() {
        return this.create('vertical');
    }
    constructor() {
        super(QxFactory_1.QxFactory.splitPane());
    }
    add(child, flex) {
        this.widget.add(child.widget, flex);
    }
    setOrientation(orientation) {
        this.widget.setOrientation(orientation);
    }
}
exports.QxSplitPane = QxSplitPane;

},{"../../factory/QxFactory":22,"../core/QxWidget":28}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxTabPage = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
const QxDockLayout_1 = require("../layout/QxDockLayout");
class QxTabPage extends QxWidget_1.QxWidget {
    constructor(label) {
        super(QxFactory_1.QxFactory.tabPage());
        this.setLayout(new QxDockLayout_1.QxDockLayout);
        this.setLabel(label);
    }
    addCenter(child) {
        this.widget.add(child.widget, { edge: 'center' });
    }
    setLabel(label) {
        this.widget.setLabel(label);
    }
    setLayout(layout) {
        this.widget.setLayout(layout.widget);
    }
}
exports.QxTabPage = QxTabPage;

},{"../../factory/QxFactory":22,"../core/QxWidget":28,"../layout/QxDockLayout":42}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxTabView = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
const QxTabPage_1 = require("./QxTabPage");
class QxTabView extends QxWidget_1.QxWidget {
    constructor() {
        super(QxFactory_1.QxFactory.tabView());
    }
    add(page) {
        this.widget.add(page.widget);
    }
    addPage(label, widget) {
        const page = new QxTabPage_1.QxTabPage(label);
        page.addCenter(widget);
        this.add(page);
        return page;
    }
    setSelection(page) {
        this.widget.setSelection([page.widget]);
    }
}
exports.QxTabView = QxTabView;

},{"../../factory/QxFactory":22,"../core/QxWidget":28,"./QxTabPage":53}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxToolBarButton = void 0;
const QxFactory_1 = require("../../factory/QxFactory");
const QxFormButton_1 = require("../form/QxFormButton");
class QxToolBarButton extends QxFormButton_1.QxFormButton {
    static createToolBarButton(label, fn) {
        const button = new QxToolBarButton;
        button.setLabel(label);
        if (fn)
            button.setClickHandler(fn);
        return button;
    }
    constructor() {
        super(QxFactory_1.QxFactory.toolbarButton());
    }
}
exports.QxToolBarButton = QxToolBarButton;

},{"../../factory/QxFactory":22,"../form/QxFormButton":34}],56:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QxWindow = void 0;
const EventConstants_1 = __importDefault(require("../../../constants/EventConstants"));
const SizeConstants_1 = __importDefault(require("../../../constants/SizeConstants"));
const QxFactory_1 = require("../../factory/QxFactory");
const QxWidget_1 = require("../core/QxWidget");
const QxDockLayout_1 = require("../layout/QxDockLayout");
class QxWindow extends QxWidget_1.QxWidget {
    constructor() {
        super(QxFactory_1.QxFactory.window());
    }
    initialize() {
        super.initialize();
        this.hide();
        this.setCaption(this.defaultCaption());
        this.setContentPadding(this.defaultContentPadding());
        this.setHeight(this.defaultHeight());
        this.setLayout(this.defaultLayout());
        this.setWidth(this.defaultWidth());
        this.setShowMaximize(this.defaultShowMaximize());
        this.setShowMinimize(this.defaultShowMinimize());
        this.addWindowHandlers();
        if (this.defaultShow())
            this.asyncShow();
    }
    add(child) {
        this.widget.add(child.widget, { edge: 'center' });
    }
    addSouth(child) {
        this.widget.add(child.widget, { edge: 'south' });
    }
    addWindowHandlers() {
        this.widget.addListener(EventConstants_1.default.WindowEventClose, this.onClose, this);
        this.widget.addListener(EventConstants_1.default.WindowEventMaximize, this.onMaximize, this);
        this.widget.addListener(EventConstants_1.default.WindowEventMinimize, this.onMinimize, this);
        this.widget.addListener(EventConstants_1.default.WindowEventRestore, this.onRestore, this);
    }
    asyncShow() {
        setTimeout(() => { this.show(); }, 0);
    }
    defaultCaption() {
        return 'a Window';
    }
    defaultContentPadding() {
        return SizeConstants_1.default.DefaultWindowContentPadding;
    }
    defaultHeight() {
        return SizeConstants_1.default.DefaultWindowHeight;
    }
    defaultLayout() {
        return new QxDockLayout_1.QxDockLayout();
    }
    defaultShow() {
        return true;
    }
    defaultShowMaximize() {
        return true;
    }
    defaultShowMinimize() {
        return true;
    }
    defaultWidth() {
        return SizeConstants_1.default.DefaultWindowWidth;
    }
    getCaption() {
        return this.widget.getCaption();
    }
    onClose() {
    }
    onMaximize() {
    }
    onMinimize() {
    }
    onRestore() {
    }
    restore() {
        this.widget.restore();
    }
    setAutoDestroy(value) {
        this.widget.setAutoDestroy(value);
    }
    setCaption(caption) {
        this.widget.setCaption(caption.valueOf());
    }
    setContentPadding(padding) {
        this.widget.setContentPadding(padding);
    }
    setLayout(layout) {
        this.widget.setLayout(layout.widget);
    }
    setShowMaximize(showMaximize) {
        this.widget.setShowMaximize(showMaximize);
    }
    setShowMinimize(showMinimize) {
        this.widget.setShowMinimize(showMinimize);
    }
    setResizable(resizable) {
        this.widget.setResizable(resizable);
    }
}
exports.QxWindow = QxWindow;

},{"../../../constants/EventConstants":7,"../../../constants/SizeConstants":12,"../../factory/QxFactory":22,"../core/QxWidget":28,"../layout/QxDockLayout":42}],57:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viewport = void 0;
const ColorConstants_1 = __importDefault(require("../../constants/ColorConstants"));
const DockPanel_1 = require("../widgets/DockPanel");
const Desktop_1 = require("./desktop/Desktop");
const NavBar_1 = require("./navbar/NavBar");
class Viewport extends DockPanel_1.DockPanel {
    static getInstance(root = null) {
        if (this.instance === undefined)
            this.instance = new Viewport(root);
        return this.instance;
    }
    constructor(root) {
        super();
        this.desktopHeight = 0;
        this.desktopWidth = 0;
        this.desktop = Desktop_1.Desktop.getInstance();
        this.navBar = NavBar_1.NavBar.getInstance();
        this.addNorth(this.navBar);
        this.addCenter(this.desktop);
        root.add(this.widget, { top: 0, right: 0, bottom: 0, left: 0 });
    }
    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants_1.default.ViewportBackground);
        //VmApi.setStdOut( TranscriptWindow.getInstance() );
        //MainModule.getInstance();
        //DesktopModule.getInstance();
        //SessionStatus.getInstance();
    }
    onResize() {
        const newDesktopWidth = window.innerWidth;
        const newDesktopHeight = window.innerHeight - this.navBar.getBoundsHeight();
        if (newDesktopWidth !== this.desktopWidth || newDesktopHeight != this.desktopHeight) {
            this.desktopWidth = newDesktopWidth;
            this.desktopHeight = newDesktopHeight;
            this.desktop.applyResize(this.desktopWidth, this.desktopHeight);
        }
    }
}
exports.Viewport = Viewport;

},{"../../constants/ColorConstants":6,"../widgets/DockPanel":72,"./desktop/Desktop":58,"./navbar/NavBar":60}],58:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desktop = void 0;
const ColorConstants_1 = __importDefault(require("../../../constants/ColorConstants"));
const StyleConstants_1 = __importDefault(require("../../../constants/StyleConstants"));
//import { ToastManager } from "../../../ui/dialogs/popup/toast/ToastManager";
const DockPanel_1 = require("../../widgets/DockPanel");
const Viewport_1 = require("../Viewport");
const FooterPanel_1 = require("./widgets/FooterPanel");
class Desktop extends DockPanel_1.DockPanel {
    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Desktop();
        return this.instance;
    }
    constructor() {
        super();
        this.height = 100;
        this.width = 100;
        this.setStyle(StyleConstants_1.default.Border, StyleConstants_1.default.BorderSlateGray2);
        this.setBackgroundColor(ColorConstants_1.default.DesktopBackgroundColor1);
        this.addDesktopListeners();
        this.footerPanel = FooterPanel_1.FooterPanel.getInstance();
        this.addSouth(this.footerPanel);
    }
    addDesktopListeners() {
        this.widget.addListener('click', this.setButtonColors, this);
        this.widget.addListener('mouseover', this.setButtonColors, this);
    }
    applyResize(width, height) {
        this.width = width;
        this.height = height;
        //ToastManager.applyResize( width, height );
    }
    setButtonColors() {
        Viewport_1.Viewport.getInstance().navBar.setButtonColors();
    }
}
exports.Desktop = Desktop;

},{"../../../constants/ColorConstants":6,"../../../constants/StyleConstants":13,"../../widgets/DockPanel":72,"../Viewport":57,"./widgets/FooterPanel":59}],59:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterPanel = void 0;
const SizeConstants_1 = __importDefault(require("../../../../constants/SizeConstants"));
const FlowPanel_1 = require("../../../widgets/FlowPanel");
//import { AbstractWindow } from '../../../windows/abstract/AbstractWindow';
class FooterPanel extends FlowPanel_1.FlowPanel {
    static getInstance() {
        if (this.instance === undefined)
            this.instance = new FooterPanel();
        return this.instance;
    }
    //addRestoreButton ( window: AbstractWindow ) {
    //    const name = window.getCaption();
    //    const btn: QxFormButton = QxFormButton.create( name );
    //    const fn: Function = () => {
    //        window.restore();
    //        this.remove( btn );
    //    };
    //    btn.setClickHandler( fn );
    //    this.add( btn );
    //}
    initialize() {
        super.initialize();
        this.setHeight(SizeConstants_1.default.DefaultWindowButtonBarHeight);
        this.setBackgroundColor('gray');
    }
}
exports.FooterPanel = FooterPanel;

},{"../../../../constants/SizeConstants":12,"../../../widgets/FlowPanel":74}],60:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const ColorConstants_1 = __importDefault(require("../../../constants/ColorConstants"));
const LayoutConstants_1 = __importDefault(require("../../../constants/LayoutConstants"));
const SizeConstants_1 = __importDefault(require("../../../constants/SizeConstants"));
const DockPanel_1 = require("../../widgets/DockPanel");
const HPanel_1 = require("../../widgets/HPanel");
const LoginButton_1 = require("./buttons/LoginButton");
const ViewsButton_1 = require("./buttons/ViewsButton");
const LogoPanel_1 = require("./logo/LogoPanel");
const StatusPanel_1 = require("./status/StatusPanel");
class NavBar extends DockPanel_1.DockPanel {
    static getInstance() {
        if (!this.instance)
            this.instance = new NavBar();
        return this.instance;
    }
    constructor() {
        super();
        this.buttons = [];
        this.loginButton = new LoginButton_1.LoginButton();
        this.viewsButton = new ViewsButton_1.ViewsButton();
    }
    initialize() {
        super.initialize();
        this.setHeight(SizeConstants_1.default.NavBarHeight);
        this.addLeftPanel();
        this.addButtonsPanel();
        this.addLogo();
    }
    addButton(button) {
        var _a;
        (_a = this.buttonsPanel) === null || _a === void 0 ? void 0 : _a.add(button);
        this.buttons.push(button);
    }
    addButtons() {
        this.addButton(this.viewsButton);
        this.addButton(this.loginButton);
    }
    addButtonsPanel() {
        this.buttonsPanel = new HPanel_1.HPanel();
        this.buttonsPanel.setWidth(100);
        this.buttonsPanel.setAlignX(LayoutConstants_1.default.AlignRight);
        this.addWidget(this.buttonsPanel);
    }
    addLeftPanel() {
        this.leftPanel = new HPanel_1.HPanel();
        this.addWest(this.leftPanel);
    }
    addLogo() {
        var _a;
        (_a = this.leftPanel) === null || _a === void 0 ? void 0 : _a.add(new LogoPanel_1.LogoPanel());
    }
    addNavBarListeners() {
        this.widget.addListener('click', this.setButtonColors, this);
        this.widget.addListener('mouseover', this.setButtonColors, this);
    }
    addRightPanel() {
        this.rightPanel = new HPanel_1.HPanel();
        this.rightPanel.setAlignY(LayoutConstants_1.default.AlignMiddle);
        this.rightPanel.add(new StatusPanel_1.StatusPanel());
        this.rightPanel.setAlignX(LayoutConstants_1.default.AlignRight);
        this.rightPanel.setPaddingTop(5);
        this.addEast(this.rightPanel);
    }
    addWidget(childWidget) {
        this.widget.add(childWidget.widget);
    }
    addWidgetLeft(childWidget) {
        var _a;
        (_a = this.leftPanel) === null || _a === void 0 ? void 0 : _a.add(childWidget);
    }
    defaultEnableOnAppear() {
        return true;
    }
    onAppear() {
        super.onAppear();
        this.setBackground(undefined);
        this.setBackgroundColor(ColorConstants_1.default.NavBarBackground);
        this.addButtons();
        this.addRightPanel();
        this.addNavBarListeners();
    }
    onEventStatusChanged(message) {
        const status = message.getData().status;
        this.setLoginLabel(status);
        this.setViewsMenu(status);
    }
    setButtonColors() {
        for (let button of this.buttons)
            button.setColorWhite();
    }
    setLoginLabel(status) {
        //    let label: string;
        //    if (status == SessionConstants.SessionLoggedInAsUser || status == SessionConstants.SessionLoggedInAsAdmin)
        //        label = LabelConstants.ButtonLabelLogout;
        //    else
        //        label = LabelConstants.ButtonLabelLogin;
        //    this.loginButton?.setLabel(label);
    }
    setViewsMenu(status) {
    }
}
exports.NavBar = NavBar;

},{"../../../constants/ColorConstants":6,"../../../constants/LayoutConstants":10,"../../../constants/SizeConstants":12,"../../widgets/DockPanel":72,"../../widgets/HPanel":75,"./buttons/LoginButton":61,"./buttons/ViewsButton":62,"./logo/LogoPanel":63,"./status/StatusPanel":64}],61:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginButton = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
//import { SessionConstants } from "../../../../vm/constants/SessionConstants";
//import { EventBus } from "../../../../vm/session/EventBus";
const QxMenu_1 = require("../../../../qx/ui/menu/QxMenu");
const QxMenuBarButton_1 = require("../../../../qx/ui/menubar/QxMenuBarButton");
//import { ToastManager } from "../../../dialogs/popup/toast/ToastManager";
//import { LoginWindow } from "../../../windows/login/LoginWindow";
//import { RegisterWindow } from "../../../windows/login/RegisterWindow";
class LoginButton extends QxMenuBarButton_1.QxMenuBarButton {
    initialize() {
        super.initialize();
        this.setLabel(LabelConstants_1.default.ButtonLabelLogin);
        this.setMenu(this.createMenu());
        //EventBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this)
    }
    createMenu() {
        const menu = new QxMenu_1.QxMenu();
        this.loginMenuButton = menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelLogin, () => {
            this.loginOrLogout();
        });
        menu.addSeparator();
        menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelRegister, () => {
            this.openRegister();
        });
        return menu;
    }
    getLoginLabel() {
        if (this.loginMenuButton)
            return this.loginMenuButton.getLabel();
        return '';
    }
    loginOrLogout() {
        //if (this.getLoginLabel() == LabelConstants.ButtonLabelLogin)
        //    LoginWindow.getInstance().show();
        //else {
        //    EventBus.dispatch(EventConstants.EventSessionStatusChanged, SessionConstants.SessionLoggedOut);
        //    ToastManager.toast('You are now logged out');
        //}
    }
    onEventStatusChanged(message) {
        //    const status = message.getData().status;
        //    if (status == SessionConstants.SessionLoggedInAsUser || status == SessionConstants.SessionLoggedInAsAdmin)
        //        this.setLoginLabel(LabelConstants.ButtonLabelLogout);
        //    else
        //        this.setLoginLabel(LabelConstants.ButtonLabelLogin);
    }
    openRegister() {
        //RegisterWindow.getInstance().show();
    }
    setLoginLabel(label) {
        if (this.loginMenuButton)
            this.loginMenuButton.setLabel(label);
    }
}
exports.LoginButton = LoginButton;

},{"../../../../constants/LabelConstants":9,"../../../../qx/ui/menu/QxMenu":46,"../../../../qx/ui/menubar/QxMenuBarButton":50}],62:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsButton = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const QxMenu_1 = require("../../../../qx/ui/menu/QxMenu");
const QxMenuBarButton_1 = require("../../../../qx/ui/menubar/QxMenuBarButton");
const CobolWindow_1 = require("../../../windows/cobol/CobolWindow");
const ModelsWindow_1 = require("../../../windows/models/ModelsWindow");
const ScriptsWindow_1 = require("../../../windows/scripts/ScriptsWindow");
class ViewsButton extends QxMenuBarButton_1.QxMenuBarButton {
    initialize() {
        super.initialize();
        this.setLabel(LabelConstants_1.default.ButtonLabelViews);
        this.setMenu(this.createMenu());
        //this.updateMenu(SessionConstants.SessionLoggedOut);
    }
    createMenu() {
        this.menu = new QxMenu_1.QxMenu();
        this.menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelScripts, () => {
            this.openScripts();
        });
        this.menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelCobol, () => {
            this.openCobol();
        });
        this.menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelModels, () => {
            this.openModels();
        });
        this.menu.addSeparator();
        this.menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelConsole, () => {
            this.openConsole();
        });
        this.menu.addSeparator();
        this.menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelLLMConsole, () => {
            this.openLlmConsole();
        });
        this.menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelMobile, () => {
            this.openMobile();
        });
        this.menu.addSeparator();
        this.menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelTranscript, () => {
            this.openTranscript();
        });
        return this.menu;
    }
    createSubmenuChats() {
        const menu = new QxMenu_1.QxMenu;
        menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelLocalChats, () => {
            this.openLocalChats();
        });
        menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelRemoteChats, () => {
            this.openRemoteChats();
        });
        return menu;
    }
    createSubmenuUsers() {
        const menu = new QxMenu_1.QxMenu;
        menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelLocalUsers, () => {
            this.openLocalUsers();
        });
        menu.addMenuButtonFn(LabelConstants_1.default.ButtonLabelRemoteUsers, () => {
            this.openRemoteUsers();
        });
        return menu;
    }
    openCobol() {
        new CobolWindow_1.CobolWindow();
        this.setColorWhite();
    }
    openConsole() {
        //new ConsoleWindow;
        this.setColorWhite();
    }
    openLlmConsole() {
        //new GeminiConsoleWindow;
        this.setColorWhite();
    }
    openLocalChats() {
        //new LocalChatsWindow();
        this.setColorWhite();
    }
    openLocalScripts() {
        //new LocalScriptsWindow();
        this.setColorWhite();
    }
    openLocalUsers() {
        //new LocalUsersWindow();
        this.setColorWhite();
    }
    openMobile() {
        //new MobileWindow;
        this.setColorWhite();
    }
    openModels() {
        new ModelsWindow_1.ModelsWindow();
        this.setColorWhite();
    }
    openRemoteChats() {
        //new RemoteChatsWindow();
        this.setColorWhite();
    }
    openScripts() {
        new ScriptsWindow_1.ScriptsWindow();
        this.setColorWhite();
    }
    openRemoteUsers() {
        //new RemoteUsersWindow();
        this.setColorWhite();
    }
    openTranscript() {
        //TranscriptWindow.getInstance().show();
        this.setColorWhite();
    }
    openUsers() {
        //new LocalUsersWindow();
        this.setColorWhite();
    }
    updateMenu(status) {
    }
}
exports.ViewsButton = ViewsButton;

},{"../../../../constants/LabelConstants":9,"../../../../qx/ui/menu/QxMenu":46,"../../../../qx/ui/menubar/QxMenuBarButton":50,"../../../windows/cobol/CobolWindow":80,"../../../windows/models/ModelsWindow":85,"../../../windows/scripts/ScriptsWindow":90}],63:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoPanel = void 0;
const ColorConstants_1 = __importDefault(require("../../../../constants/ColorConstants"));
const FontConstants_1 = __importDefault(require("../../../../constants/FontConstants"));
const SizeConstants_1 = __importDefault(require("../../../../constants/SizeConstants"));
const QxHtml_1 = require("../../../../qx/ui/embed/QxHtml");
class LogoPanel extends QxHtml_1.QxHtml {
    constructor() {
        super();
    }
    initialize() {
        super.initialize();
        this.setPaddingTop(5);
        this.setMarginLeft(10);
        this.setMarginRight(15);
        this.setHtml('Cobol AI Studio');
        this.setWidth(SizeConstants_1.default.LogoPanelWidth);
    }
    defaultEnableOnAppear() {
        return true;
    }
    onAppear() {
        super.onAppear();
        this.setColor(ColorConstants_1.default.White);
        this.setFontFamily(FontConstants_1.default.FontFamilyBruno);
        this.setFontSize(FontConstants_1.default.FontSize18Px);
    }
}
exports.LogoPanel = LogoPanel;

},{"../../../../constants/ColorConstants":6,"../../../../constants/FontConstants":8,"../../../../constants/SizeConstants":12,"../../../../qx/ui/embed/QxHtml":30}],64:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPanel = void 0;
const AppConstants_1 = __importDefault(require("../../../../constants/AppConstants"));
const ColorConstants_1 = __importDefault(require("../../../../constants/ColorConstants"));
const FontConstants_1 = __importDefault(require("../../../../constants/FontConstants"));
const SizeConstants_1 = __importDefault(require("../../../../constants/SizeConstants"));
const QxHtml_1 = require("../../../../qx/ui/embed/QxHtml");
class StatusPanel extends QxHtml_1.QxHtml {
    constructor() {
        super();
    }
    initialize() {
        super.initialize();
        this.setPaddingTop(5);
        this.setMarginLeft(15);
        this.setMarginRight(10);
        this.setHtml(AppConstants_1.default.timestamp);
        this.setWidth(SizeConstants_1.default.StatusPanelWidth);
    }
    defaultEnableOnAppear() {
        return true;
    }
    onAppear() {
        super.onAppear();
        this.setColor(ColorConstants_1.default.White);
        this.setFontFamily(FontConstants_1.default.FontFamilyBruno);
        this.setFontSize(FontConstants_1.default.FontSize12Px);
    }
}
exports.StatusPanel = StatusPanel;

},{"../../../../constants/AppConstants":4,"../../../../constants/ColorConstants":6,"../../../../constants/FontConstants":8,"../../../../constants/SizeConstants":12,"../../../../qx/ui/embed/QxHtml":30}],65:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractButtonBar = void 0;
const CharConstants_1 = __importDefault(require("../../constants/CharConstants"));
const LayoutConstants_1 = __importDefault(require("../../constants/LayoutConstants"));
const SizeConstants_1 = __importDefault(require("../../constants/SizeConstants"));
const QxFactory_1 = require("../../qx/factory/QxFactory");
const QxFormButton_1 = require("../../qx/ui/form/QxFormButton");
const QxHBoxLayout_1 = require("../../qx/ui/layout/QxHBoxLayout");
const HPanel_1 = require("./HPanel");
class AbstractButtonBar extends HPanel_1.HPanel {
    constructor(parentWindow) {
        super();
        this.parentWindow = parentWindow;
    }
    addButton(name) {
        const tag = this.createTagName(name);
        const fn = () => {
            this.parentWindow.onButtonClick(tag);
        };
        const btn = QxFormButton_1.QxFormButton.create(name, fn);
        this.widget.add(btn.widget);
        return btn;
    }
    addButtonListener(btn, label) {
        const selector = this.createTagName(label);
        //    btn.addListener('execute', () => {
        //        this.parentWindow.onButtonClick(selector);
        //    });
    }
    addSplitButton(label, items) {
        const btns = {};
        const menu = QxFactory_1.QxFactory.menuMenu();
        for (let i = 0; i < items.length; i++) {
            const menuLabel = items[i];
            let menuItem;
            if (menuLabel == CharConstants_1.default.DASH)
                menuItem = QxFactory_1.QxFactory.menuSeparator();
            else {
                menuItem = QxFactory_1.QxFactory.menuButton(menuLabel);
                this.addButtonListener(menuItem, menuLabel);
                btns[menuLabel] = menuItem;
            }
            menu.add(menuItem);
        }
        const button = QxFactory_1.QxFactory.menuSplitButton(label);
        this.addButtonListener(button, label);
        button.setMenu(menu);
        this.widget.add(button);
        return [button, btns];
    }
    createTagName(name) {
        return name.replaceAll(CharConstants_1.default.SPACE, CharConstants_1.default.UNDERSCORE).toLowerCase();
    }
    defaultLayout() {
        const layout = new QxHBoxLayout_1.QxHBoxLayout();
        layout.setAlignX(this.defaultAlignment());
        layout.setSpacing(LayoutConstants_1.default.DefaultWindowButtonBarSpacing);
        return layout;
    }
    defaultPadding() {
        return SizeConstants_1.default.DefaultWindowButtonBarPadding;
    }
}
exports.AbstractButtonBar = AbstractButtonBar;

},{"../../constants/CharConstants":5,"../../constants/LayoutConstants":10,"../../constants/SizeConstants":12,"../../qx/factory/QxFactory":22,"../../qx/ui/form/QxFormButton":34,"../../qx/ui/layout/QxHBoxLayout":44,"./HPanel":75}],66:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractForm = void 0;
const SizeConstants_1 = __importDefault(require("../../constants/SizeConstants"));
const QxForm_1 = require("../../qx/ui/form/QxForm");
const QxFormRendererSingle_1 = require("../../qx/ui/form/QxFormRendererSingle");
class AbstractForm extends QxFormRendererSingle_1.QxFormRendererSingle {
    constructor() {
        const form = new QxForm_1.QxForm;
        super(form);
        this.form = form;
    }
    defaultEnableOnAppear() {
        return true;
    }
    defaultEnableOnResize() {
        return true;
    }
    initialize() {
        super.initialize();
        this.setPadding([SizeConstants_1.default.PanelPadding]);
    }
}
exports.AbstractForm = AbstractForm;

},{"../../constants/SizeConstants":12,"../../qx/ui/form/QxForm":32,"../../qx/ui/form/QxFormRendererSingle":36}],67:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPanel = void 0;
const QxComposite_1 = require("../../qx/ui/container/QxComposite");
class AbstractPanel extends QxComposite_1.QxComposite {
    defaultEnableOnAppear() {
        return true;
    }
    defaultEnableOnResize() {
        return true;
    }
}
exports.AbstractPanel = AbstractPanel;

},{"../../qx/ui/container/QxComposite":26}],68:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBar = void 0;
const SizeConstants_1 = __importDefault(require("../../constants/SizeConstants"));
const QxSelectBox_1 = require("../../qx/ui/form/QxSelectBox");
const ButtonBarLeft_1 = require("./ButtonBarLeft");
const ButtonBarRight_1 = require("./ButtonBarRight");
const DockPanel_1 = require("./DockPanel");
class ButtonBar extends DockPanel_1.DockPanel {
    constructor(parentWindow) {
        super();
        this.buttonBarLeft = new ButtonBarLeft_1.ButtonBarLeft(parentWindow);
        this.buttonBarRight = new ButtonBarRight_1.ButtonBarRight(parentWindow);
        this.addWest(this.buttonBarLeft);
        this.addEast(this.buttonBarRight);
        if (this.defaultHasSelectBox())
            this.addSelectBox();
    }
    initialize() {
        super.initialize();
        this.setHeight(SizeConstants_1.default.DefaultWindowButtonBarHeight);
    }
    addButtonLeft(name) {
        return this.buttonBarLeft.addButton(name);
    }
    addButtonRight(name) {
        return this.buttonBarRight.addButton(name);
    }
    addSelectBox() {
        this.selectBox = new QxSelectBox_1.QxSelectBox;
        this.addCenter(this.selectBox);
    }
    addSplitButtonLeft(label, items) {
        return this.buttonBarLeft.addSplitButton(label, items);
    }
    addSplitButtonRight(label, items) {
        return this.buttonBarRight.addSplitButton(label, items);
    }
    defaultHasSelectBox() {
        return false;
    }
}
exports.ButtonBar = ButtonBar;

},{"../../constants/SizeConstants":12,"../../qx/ui/form/QxSelectBox":38,"./ButtonBarLeft":69,"./ButtonBarRight":70,"./DockPanel":72}],69:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBarLeft = void 0;
const LayoutConstants_1 = __importDefault(require("../../constants/LayoutConstants"));
const AbstractButtonBar_1 = require("./AbstractButtonBar");
class ButtonBarLeft extends AbstractButtonBar_1.AbstractButtonBar {
    constructor(parentWindow) {
        super(parentWindow);
    }
    defaultAlignment() {
        return LayoutConstants_1.default.AlignLeft;
    }
}
exports.ButtonBarLeft = ButtonBarLeft;

},{"../../constants/LayoutConstants":10,"./AbstractButtonBar":65}],70:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBarRight = void 0;
const LayoutConstants_1 = __importDefault(require("../../constants/LayoutConstants"));
const AbstractButtonBar_1 = require("./AbstractButtonBar");
class ButtonBarRight extends AbstractButtonBar_1.AbstractButtonBar {
    constructor(parentWindow) {
        super(parentWindow);
    }
    defaultAlignment() {
        return LayoutConstants_1.default.AlignRight;
    }
}
exports.ButtonBarRight = ButtonBarRight;

},{"../../constants/LayoutConstants":10,"./AbstractButtonBar":65}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataListPanel = void 0;
const QxList_1 = require("../../qx/ui/list/QxList");
const AbstractPanel_1 = require("./AbstractPanel");
class DataListPanel extends AbstractPanel_1.AbstractPanel {
    constructor(dataListWindow) {
        super();
        this.dataMap = new Map();
        this.loadHandlerKeys = [];
        this.list = new QxList_1.QxList;
        this.selectedData = null;
        this.addCenter(this.list);
        this.addChangeHandlerFn();
        this.addLoadHandlerFns();
    }
    addChangeHandlerFn() {
        const changeSelectionFn = (name) => {
            //const fn2: Function = (response: any) => {
            //    if (!response.ok)
            //        return 'error';
            //    const textResponse = response.text();
            //    textResponse.then((code: string) => {
            //        const data = { code: code };
            //        this.getDataListWindow().setValues(data);
            //    })
            //};
            const fn = (code) => {
                //let code = code64;
                //try {
                //    code = atob(code64);
                //} catch (e: any) {
                //    console.log(e.toString());
                //    console.log('[[', code64, ']]');
                //}
                const data = { code: code };
                this.getDataListWindow().setValues(data);
            };
            this.getValueByName(name, fn);
        };
        this.setChangeHandlerFn(changeSelectionFn);
    }
    addLoadHandlerFn(fn) {
        //    const key = this.dataStore?.addLoaderHandlerFn(fn);
        //    if (typeof (key) === 'number')
        //        this.loadHandlerKeys.push(key);
    }
    addLoadHandlerFns() {
        const updateListFn = (data) => {
            this.updateMapData(data);
        };
        this.addLoadHandlerFn(updateListFn);
    }
    clearSelection() {
        this.selectedData = null;
        this.list.initSelection();
    }
    getSelectedData() {
        if (!this.hasSelectedData())
            return null;
        return this.selectedData;
    }
    getSelectionValue(key) {
        this.selectedData = null;
        if (this.dataMap.has(key))
            this.selectedData = this.dataMap.get(key);
        return this.selectedData;
    }
    hasSelectedData() {
        return this.selectedData !== null && this.selectedData !== undefined;
    }
    isCategorySelected(item) {
        return true;
    }
    refresh() {
        this.clearSelection();
    }
    releaseHandlers() {
        //for (let key of this.loadHandlerKeys)
        //this.dataStore?.removeLoadHandlerFn(key);
    }
    setChangeHandler(changeHandler) {
        this.changeHandler = changeHandler;
    }
    setChangeHandlerFn(fn) {
        this.list.setChangeHandlerFn(fn);
    }
    updateList() {
        const keys = [];
        this.dataMap.values().forEach((item) => {
            keys.push(this.getListKey(item));
        });
        keys.sort();
        this.list.widget.initSelection();
        this.list.setData(keys);
    }
    updateMapData(data) {
        this.dataMap.clear();
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const key = this.getListKey(item);
            this.dataMap.set(key, item);
        }
        this.updateList();
    }
}
exports.DataListPanel = DataListPanel;

},{"../../qx/ui/list/QxList":45,"./AbstractPanel":67}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockPanel = void 0;
const QxDockLayout_1 = require("../../qx/ui/layout/QxDockLayout");
const AbstractPanel_1 = require("./AbstractPanel");
class DockPanel extends AbstractPanel_1.AbstractPanel {
    addEast(child) {
        this.widget.add(child.widget, { edge: 'east' });
        ;
    }
    addNorth(child) {
        this.widget.add(child.widget, { edge: 'north' });
        ;
    }
    addSouth(child) {
        this.widget.add(child.widget, { edge: 'south' });
        ;
    }
    addWest(child) {
        this.widget.add(child.widget, { edge: 'west' });
        ;
    }
    defaultLayout() {
        return new QxDockLayout_1.QxDockLayout();
    }
}
exports.DockPanel = DockPanel;

},{"../../qx/ui/layout/QxDockLayout":42,"./AbstractPanel":67}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorPanel = void 0;
const QxEditor_1 = require("../../qx/ui/editor/QxEditor");
const AbstractPanel_1 = require("./AbstractPanel");
class EditorPanel extends AbstractPanel_1.AbstractPanel {
    constructor() {
        super();
        this.codeObject = null;
        this.editor = new QxEditor_1.QxEditor();
        this.addCenter(this.editor);
    }
    clear() {
        this.editor.clear();
    }
    getCodeObject() {
        return this.codeObject;
    }
    getValue() {
        return this.editor.getValue();
    }
    setCodeObject(value) {
        this.codeObject = value;
    }
    setValue(text) {
        this.editor.setValue(text);
    }
}
exports.EditorPanel = EditorPanel;

},{"../../qx/ui/editor/QxEditor":29,"./AbstractPanel":67}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowPanel = void 0;
const QxFlowLayout_1 = require("../../qx/ui/layout/QxFlowLayout");
const AbstractPanel_1 = require("./AbstractPanel");
class FlowPanel extends AbstractPanel_1.AbstractPanel {
    defaultLayout() {
        return new QxFlowLayout_1.QxFlowLayout();
    }
}
exports.FlowPanel = FlowPanel;

},{"../../qx/ui/layout/QxFlowLayout":43,"./AbstractPanel":67}],75:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HPanel = void 0;
const LayoutConstants_1 = __importDefault(require("../../constants/LayoutConstants"));
const QxHBoxLayout_1 = require("../../qx/ui/layout/QxHBoxLayout");
const AbstractPanel_1 = require("./AbstractPanel");
class HPanel extends AbstractPanel_1.AbstractPanel {
    addAlignCenter(child) {
        child.setAlignY(LayoutConstants_1.default.AlignCenter);
        this.add(child);
    }
    defaultLayout() {
        return new QxHBoxLayout_1.QxHBoxLayout();
    }
}
exports.HPanel = HPanel;

},{"../../constants/LayoutConstants":10,"../../qx/ui/layout/QxHBoxLayout":44,"./AbstractPanel":67}],76:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextPanel = void 0;
const QxTextArea_1 = require("../../qx/ui/form/QxTextArea");
const AbstractPanel_1 = require("./AbstractPanel");
class TextPanel extends AbstractPanel_1.AbstractPanel {
    constructor() {
        super();
        this.textArea = new QxTextArea_1.QxTextArea;
        this.addCenter(this.textArea);
    }
    clear() {
        this.textArea.clear();
    }
    getValue() {
        return this.textArea.getValue();
    }
    setValue(text) {
        this.textArea.setValue(text.valueOf());
    }
}
exports.TextPanel = TextPanel;

},{"../../qx/ui/form/QxTextArea":39,"./AbstractPanel":67}],77:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscriptPanel = void 0;
const CharConstants_1 = __importDefault(require("../../constants/CharConstants"));
const TextPanel_1 = require("./TextPanel");
class TranscriptPanel extends TextPanel_1.TextPanel {
    append(text) {
        this.setValue(this.getValue() + text);
    }
    newline() {
        this.append(CharConstants_1.default.NEWLINE);
    }
    pr(text) {
        this.append(text);
    }
    prn(text) {
        this.pr(text);
        this.newline();
    }
    space() {
        this.append(CharConstants_1.default.SPACE);
    }
}
exports.TranscriptPanel = TranscriptPanel;

},{"../../constants/CharConstants":5,"./TextPanel":76}],78:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDataListWindow = void 0;
const AbstractWindow_1 = require("./AbstractWindow");
class AbstractDataListWindow extends AbstractWindow_1.AbstractWindow {
    constructor() {
        super();
        this.dataStore = this.getDefaultDataStore();
    }
    initialLoadData() {
    }
    onAppear() {
        super.onAppear();
        this.initialLoadData();
    }
}
exports.AbstractDataListWindow = AbstractDataListWindow;

},{"./AbstractWindow":79}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractWindow = void 0;
const QxWindow_1 = require("../../../qx/ui/window/QxWindow");
const ButtonBar_1 = require("../../widgets/ButtonBar");
class AbstractWindow extends QxWindow_1.QxWindow {
    constructor() {
        super(...arguments);
        this.hasAppeared = false;
        this.stdOutId = -1;
    }
    initialize() {
        super.initialize();
        this.addSouth(this.ensureButtonBar());
        this.addButtonsLeft();
        this.addButtonsRight();
        if (this.defaultAutoDestroy())
            this.setAutoDestroy(true);
    }
    addButtonLeft(label) {
        return this.ensureButtonBar().addButtonLeft(label);
    }
    addButtonRight(label) {
        return this.ensureButtonBar().addButtonRight(label);
    }
    addButtonsLeft() {
    }
    addButtonsRight() {
    }
    addComboBox() {
    }
    addSplitButtonLeft(label, items = []) {
        return this.ensureButtonBar().addSplitButtonLeft(label, items);
    }
    addSplitButtonRight(label, items) {
        return this.ensureButtonBar().addSplitButtonRight(label, items);
    }
    center() {
        this.widget.center();
    }
    close() {
        this.widget.close();
    }
    defaultAutoDestroy() {
        return true;
    }
    defaultButtonBar() {
        return new ButtonBar_1.ButtonBar(this);
    }
    defaultEnableOnAppear() {
        return true;
    }
    defaultEnableOnResize() {
        return true;
    }
    defaultInitialPosition() {
        return [];
    }
    ensureButtonBar() {
        if (!this.buttonBar)
            this.buttonBar = this.defaultButtonBar();
        return this.buttonBar;
    }
    getStdOut() {
        return this.stdOut;
    }
    getStdOutId() {
        return this.stdOutId;
    }
    initStdOut() {
    }
    moveTo(left, top) {
        this.widget.moveTo(left, top);
    }
    moveToInitialPosition() {
        const initialPosition = this.defaultInitialPosition();
        if (initialPosition.length > 1)
            this.moveTo(initialPosition[0], initialPosition[1]);
        else
            this.center();
    }
    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.initStdOut();
            this.registerObjects();
            this.moveToInitialPosition();
        }
    }
    onButtonClick(tag) {
        //DebugUtil.log( 'onButtonClick', tag );
    }
    onClose() {
        super.onClose();
        this.unregisterObjects();
    }
    onMinimize() {
        //FooterPanel.getInstance().addRestoreButton(this);
    }
    onResize() {
    }
    registerObjects() {
        //ObjectRegistry.registerObject(this);
        if (this.stdOut)
            this.registerStdOut();
    }
    registerStdOut() {
        //if (this.stdOut instanceof QxWidget)
        //this.stdOutId = ObjectRegistry.registerObject(this.stdOut);
    }
    setStdOut(stdOut) {
        this.stdOut = stdOut;
    }
    unregisterObjects() {
        //ObjectRegistry.removeId(this.getId());
        if (this.stdOut)
            this.unregisterStdOut();
    }
    unregisterStdOut() {
        //ObjectRegistry.removeId(this.stdOutId);
    }
}
exports.AbstractWindow = AbstractWindow;

},{"../../../qx/ui/window/QxWindow":56,"../../widgets/ButtonBar":68}],80:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobolWindow = void 0;
const ActionConstants_1 = __importDefault(require("../../../constants/ActionConstants"));
const LabelConstants_1 = __importDefault(require("../../../constants/LabelConstants"));
const SizeConstants_1 = __importDefault(require("../../../constants/SizeConstants"));
const CobolStore_1 = __importDefault(require("../../../data/stores/CobolStore"));
const QxPopup_1 = require("../../../qx/ui/popup/QxPopup");
const QxSplitPane_1 = require("../../../qx/ui/splitpane/QxSplitPane");
const AbstractDataListWindow_1 = require("../abstract/AbstractDataListWindow");
const CobolButtonBar_1 = require("./widgets/CobolButtonBar");
const CobolPanel_1 = require("./widgets/CobolPanel");
const CobolTabView_1 = require("./widgets/CobolTabView");
class CobolWindow extends AbstractDataListWindow_1.AbstractDataListWindow {
    initialize() {
        super.initialize();
        this.listPanel = this.buildListPanel();
        this.listModel = this.buildListModel();
        this.tabView = new CobolTabView_1.CobolTabView;
        this.splitPane = QxSplitPane_1.QxSplitPane.createHorizontal();
        this.splitPane.add(this.listPanel, 1);
        this.splitPane.add(this.tabView, 2);
        this.add(this.splitPane);
        this.updateEnabledButtons();
    }
    addButtonsLeft() {
        this.addButtonLeft(LabelConstants_1.default.ButtonLabelRefresh);
        const saveMenuButtons = [
            LabelConstants_1.default.ButtonLabelRename,
            LabelConstants_1.default.ButtonLabelNew,
            LabelConstants_1.default.ButtonLabelDelete
        ];
        const saveSplitBtns = this.addSplitButtonLeft(LabelConstants_1.default.ButtonLabelSave, saveMenuButtons);
        this.saveButton = saveSplitBtns[0];
        const moreMenuButtonMap = saveSplitBtns[1];
        this.renameButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelRename];
        this.newButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelNew];
        this.deleteButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelDelete];
        this.addHandlers();
        this.updateEnabledButtons();
    }
    addButtonsRight() {
        this.runButton = this.addButtonRight(LabelConstants_1.default.ButtonLabelRun);
        this.consoleButton = this.addButtonRight(LabelConstants_1.default.ButtonLabelConsole);
    }
    addHandlers() {
        const projectsButtonBar = this.buttonBar;
        if (projectsButtonBar.defaultHasSelectBox()) {
            projectsButtonBar.setSelectionHandlerFn(() => {
                var _a, _b;
                (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.showSelectedCategory(projectsButtonBar.getSelectedCategory());
                (_b = this.tabView) === null || _b === void 0 ? void 0 : _b.clear();
            });
        }
    }
    buildListModel() {
        var _a;
        const listModel = window.qx.data.marshal.Json.createModel([]);
        const list = (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.list.widget;
        list.setModel(listModel);
        return listModel;
    }
    buildListPanel() {
        const cobolList = new CobolPanel_1.CobolPanel(this);
        const fn = (value) => {
            this.onSelectionChange(value);
        };
        cobolList.setChangeHandler(fn);
        return cobolList;
    }
    defaultButtonBar() {
        return new CobolButtonBar_1.CobolButtonBar(this);
    }
    defaultCaption() {
        return LabelConstants_1.default.WindowCaptionCobol;
    }
    defaultHeight() {
        return SizeConstants_1.default.ProjectsWindowHeight;
    }
    defaultWidth() {
        return SizeConstants_1.default.ProjectsWindowWidth;
    }
    getAuthor() {
        if (this.tabView)
            return this.tabView.getAuthor();
        return '';
    }
    getCategory() {
        if (this.tabView)
            return this.tabView.getCategory();
        return '';
    }
    getCode() {
        if (this.tabView)
            return this.tabView.getCode();
        return '';
    }
    getCodeObject() {
        if (this.tabView)
            return this.tabView.getCodeObject();
        return null;
    }
    getDefaultDataStore() {
        const store = new CobolStore_1.default();
        if (this.listPanel)
            store.setUpdateListHandler(this);
        store.setLoadHandler(this);
        return store;
    }
    getDescription() {
        if (this.tabView)
            return this.tabView.getDescription();
        return '';
    }
    getEditorPanel() {
        var _a;
        return (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getEditorPanel();
    }
    getModule() {
        if (this.tabView)
            return this.tabView.getModule();
        return '';
    }
    getSelectedCategory() {
        return this.buttonBar.getSelectedCategory();
    }
    getTabViewId() {
        var _a;
        return this.tabView ? (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getId() : -1;
    }
    getTranscriptPanel() {
        var _a;
        return (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel();
    }
    handleOnLoad(store) {
        var _a;
        const model = store.getModel();
        const names = [];
        for (let i = 0; i < model.length; i++)
            names.push(model.getItem(i).getName());
        names.sort();
        const namesModel = window.qx.data.marshal.Json.createModel(names);
        const list = (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.list.widget;
        list.setModel(namesModel);
    }
    hasSelectedData() {
        return this.listPanel ? this.listPanel.hasSelectedData() : false;
    }
    initialLoadData() {
        this.refresh();
    }
    initStdOut() {
        var _a, _b;
        super.initStdOut();
        if ((_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel())
            this.setStdOut((_b = this.tabView) === null || _b === void 0 ? void 0 : _b.getTranscriptPanel());
    }
    isLoggedIn() {
        return false;
        //return SessionStatus.isLoggedIn();
    }
    onButtonClick(tag) {
        switch (tag) {
            case ActionConstants_1.default.ActionConsole:
                this.onCompile();
                break;
            case ActionConstants_1.default.ActionDelete:
                this.onDelete();
                break;
            case ActionConstants_1.default.ActionNew:
                this.onNew();
                break;
            case ActionConstants_1.default.ActionRefresh:
                this.onRefresh();
                break;
            case ActionConstants_1.default.ActionRename:
                this.onRename();
                break;
            case ActionConstants_1.default.ActionRun:
                this.onRun();
                break;
            case ActionConstants_1.default.ActionSave:
                this.onSave();
                break;
            default:
                //ErrorHandler.logError(ErrorConstants.ProjectsWindowOnButtonClick, tag);
                break;
        }
    }
    onCompile() {
        //const code: string = this.getCode();
        //ConsoleWindow.openOn(code);
    }
    onDelete() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.deleteProject();
        this.refresh();
    }
    onEventStatusChanged(message) {
        this.updateEnabledButtons();
    }
    onMaximize() {
        this.onResize();
    }
    onMinimize() {
        this.onResize();
    }
    onNew() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.newProject();
        this.refresh();
    }
    onRefresh() {
        this.refresh();
    }
    onRename() {
        var _a;
        const selectedData = (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.getSelectedData();
        if (!selectedData)
            return;
        const oldName = selectedData.name;
        const newNameFn = (newName) => {
            selectedData.name = newName;
            this.save();
        };
        QxPopup_1.QxPopup.rename(oldName, newNameFn);
    }
    onResize() {
    }
    onRestore() {
        this.onResize();
    }
    onRun() {
        //    const fn = (response: any) => {
        //        response.json().then((data: any) => {
        //            this.tabView?.setActiveTab(ActionConstants.TabTranscript);
        //            this.tabView?.getTranscriptPanel()?.prn(data.reply);
        //        });
        //    };
        //    const code = this.tabView?.getCode();
        //    const payload = { Code: code };
        //    InteropUtil.runCode("run_code", payload, fn);
    }
    onSave() {
        var _a, _b, _c, _d, _e, _f;
        if (this.isLoggedIn() && this.hasSelectedData()) {
            (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.updateAuthor(this.getAuthor());
            (_b = this.listPanel) === null || _b === void 0 ? void 0 : _b.updateCategory(this.getCategory());
            (_c = this.listPanel) === null || _c === void 0 ? void 0 : _c.updateCode(this.getCode());
            (_d = this.listPanel) === null || _d === void 0 ? void 0 : _d.updateCodeObject(JSON.stringify(this.getCodeObject()));
            (_e = this.listPanel) === null || _e === void 0 ? void 0 : _e.updateDescription(this.getDescription());
            (_f = this.listPanel) === null || _f === void 0 ? void 0 : _f.updateModule(this.getModule());
            this.save();
        }
    }
    onSelectionChange(value) {
        const tabView = this.tabView;
        tabView.setValue(value);
        this.updateEnabledButtons();
    }
    refresh() {
        var _a;
        this.tabView.clear();
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.refresh();
        this.updateEnabledButtons();
    }
    registerObjects() {
        super.registerObjects();
    }
    save() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.saveProject();
        this.refresh();
    }
    setActiveTab(tab) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setActiveTab(tab);
    }
    setCodeObject(codeObject) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setCodeObject(codeObject);
    }
    setValues(data) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setValue(data);
    }
    unregisterObjects() {
        var _a;
        super.unregisterObjects();
        //EventBus.unsubscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.releaseHandlers();
    }
    updateCategories(categories) {
        this.buttonBar.updateCategories(categories);
    }
    updateEnabledButtons() {
        const fn = () => {
            const enabled_1 = this.isLoggedIn();
            const enabled_2 = this.hasSelectedData();
            const enabled_3 = enabled_1 && enabled_2;
            if (this.deleteButton)
                this.deleteButton.setEnabled(enabled_3);
            if (this.moreButton)
                this.moreButton.setEnabled(enabled_1);
            if (this.newButton)
                this.newButton.setEnabled(enabled_1);
            if (this.renameButton)
                this.renameButton.setEnabled(enabled_3);
            if (this.runButton)
                this.runButton.setEnabled(enabled_2);
            if (this.saveButton)
                this.saveButton.setEnabled(enabled_1);
        };
        //DeferredCall.schedule(fn);
    }
    updateListFromArray(values) {
        values.sort();
        this.listModel.removeAll();
        this.listModel.append(values);
    }
}
exports.CobolWindow = CobolWindow;

},{"../../../constants/ActionConstants":3,"../../../constants/LabelConstants":9,"../../../constants/SizeConstants":12,"../../../data/stores/CobolStore":15,"../../../qx/ui/popup/QxPopup":51,"../../../qx/ui/splitpane/QxSplitPane":52,"../abstract/AbstractDataListWindow":78,"./widgets/CobolButtonBar":81,"./widgets/CobolPanel":83,"./widgets/CobolTabView":84}],81:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobolButtonBar = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const ButtonBar_1 = require("../../../widgets/ButtonBar");
class CobolButtonBar extends ButtonBar_1.ButtonBar {
    getSelectedCategory() {
        return this.selectBox.getSelectedLabel().trim();
    }
    setSelectionHandlerFn(handlerFn) {
        var _a;
        (_a = this.selectBox) === null || _a === void 0 ? void 0 : _a.setChangeHandlerFn(handlerFn);
    }
    updateCategories(categories) {
        var _a;
        categories.unshift(LabelConstants_1.default.SelectionLabelAll);
        (_a = this.selectBox) === null || _a === void 0 ? void 0 : _a.setItems(categories);
    }
}
exports.CobolButtonBar = CobolButtonBar;

},{"../../../../constants/LabelConstants":9,"../../../widgets/ButtonBar":68}],82:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobolDetailsPanel = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const QxTextField_1 = require("../../../../qx/ui/form/QxTextField");
const AbstractForm_1 = require("../../../widgets/AbstractForm");
class CobolDetailsPanel extends AbstractForm_1.AbstractForm {
    constructor() {
        super();
        this.moduleField = new QxTextField_1.QxTextField;
        this.authorField = new QxTextField_1.QxTextField;
        this.categoryField = new QxTextField_1.QxTextField;
        this.idField = new QxTextField_1.QxTextField;
        this.createdAtField = new QxTextField_1.QxTextField;
        this.updatedAtField = new QxTextField_1.QxTextField;
    }
    clear() {
        this.moduleField.clear();
        this.authorField.clear();
        this.categoryField.clear();
        this.idField.clear();
        this.createdAtField.clear();
        this.updatedAtField.clear();
    }
    getAuthor() {
        return this.authorField.getValue();
    }
    getCategory() {
        return this.categoryField.getValue();
    }
    getModule() {
        return this.moduleField.getValue();
    }
    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.moduleField, LabelConstants_1.default.FieldLabelScript);
            this.form.add(this.authorField, LabelConstants_1.default.FieldLabelAuthor);
            this.form.add(this.categoryField, LabelConstants_1.default.FieldLabelCategory);
            this.form.add(this.idField, LabelConstants_1.default.FieldLabelId);
            this.form.add(this.updatedAtField, LabelConstants_1.default.FieldLabelUpdatedAt);
            this.form.add(this.createdAtField, LabelConstants_1.default.FieldLabelCreatedAt);
            this.idField.setEnabled(false);
            this.updatedAtField.setEnabled(false);
            this.createdAtField.setEnabled(false);
        }
    }
    setAuthor(author) {
        this.authorField.setValue(author);
    }
    setCategory(category) {
        this.categoryField.setValue(category);
    }
    setCreatedAt(createdAt) {
        this.createdAtField.setValue(createdAt);
    }
    setId(id) {
        this.idField.setValue(id);
    }
    setModule(module) {
        this.moduleField.setValue(module);
    }
    setUpdatedAt(updatedAt) {
        this.updatedAtField.setValue(updatedAt);
    }
}
exports.CobolDetailsPanel = CobolDetailsPanel;

},{"../../../../constants/LabelConstants":9,"../../../../qx/ui/form/QxTextField":40,"../../../widgets/AbstractForm":66}],83:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobolPanel = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const CobolStore_1 = __importDefault(require("../../../../data/stores/CobolStore"));
const DataListPanel_1 = require("../../../widgets/DataListPanel");
class CobolPanel extends DataListPanel_1.DataListPanel {
    constructor(cobolWindow) {
        super(cobolWindow);
        this.cobolWindow = cobolWindow;
    }
    addLoadHandlerFns() {
        super.addLoadHandlerFns();
        const updateCategoriesFn = (dataRecords) => {
            const data = this.generateCategories(dataRecords);
            this.updateCategories(data);
        };
        this.addLoadHandlerFn(updateCategoriesFn);
    }
    deleteProject() {
        //this.dataStore?.deleteRecord(this.selectedData);
    }
    generateCategories(dataRecords) {
        const categories = [];
        for (let i = 0; i < dataRecords.length; i++) {
            const record = dataRecords.at(i);
            if (typeof (record.details) === 'string' && record.details.length > 2) {
                const data = JSON.parse(record.details);
                if (typeof (data.category) === 'string') {
                    const category = data.category;
                    if (category.length > 0 && !categories.includes(category))
                        categories.push(category);
                }
            }
        }
        categories.sort();
        return categories;
    }
    getDataListWindow() {
        return this.cobolWindow;
    }
    getDetailsCategory(details) {
        if (typeof (details) !== 'string' || details.length < 2)
            return null;
        const data = JSON.parse(details);
        return data.category;
    }
    getListKey(item) {
        return item.name;
    }
    getSelectionValue(name) {
        //return ScriptsStore.getInstance().getValueByName(name);
    }
    getValueByName(name, fn) {
        CobolStore_1.default.getInstance().getValueByName(name, fn);
    }
    isCategorySelected(item) {
        var _a;
        if (!((_a = this.cobolWindow.buttonBar) === null || _a === void 0 ? void 0 : _a.defaultHasSelectBox()))
            return true;
        const selectedCategory = this.cobolWindow.getSelectedCategory();
        if (selectedCategory == LabelConstants_1.default.SelectionLabelAll)
            return true;
        const itemCategory = this.getDetailsCategory(item.details);
        if (!itemCategory)
            return false;
        return itemCategory == selectedCategory;
    }
    newProject() {
        //this.dataStore?.newRecord();
    }
    saveProject() {
        //this.dataStore?.saveRecord(this.selectedData);
    }
    showSelectedCategory(category) {
        this.updateList();
    }
    updateCategories(categories) {
        this.cobolWindow.updateCategories(categories);
    }
    updateAuthor(author) {
        if (this.selectedData)
            this.selectedData.author = author;
    }
    updateCategory(category) {
        if (this.selectedData)
            this.selectedData.category = category;
    }
    updateCode(code) {
        if (this.selectedData)
            this.selectedData.code = code;
    }
    updateCodeObject(codeObject) {
        if (this.selectedData)
            this.selectedData.code_object = codeObject;
    }
    updateDescription(description) {
        if (this.selectedData)
            this.selectedData.description = description;
    }
    updateModule(module) {
        if (this.selectedData)
            this.selectedData.module = module;
    }
}
exports.CobolPanel = CobolPanel;

},{"../../../../constants/LabelConstants":9,"../../../../data/stores/CobolStore":15,"../../../widgets/DataListPanel":71}],84:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobolTabView = void 0;
const ActionConstants_1 = __importDefault(require("../../../../constants/ActionConstants"));
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const QxTabView_1 = require("../../../../qx/ui/tabview/QxTabView");
const EditorPanel_1 = require("../../../widgets/EditorPanel");
const TextPanel_1 = require("../../../widgets/TextPanel");
const TranscriptPanel_1 = require("../../../widgets/TranscriptPanel");
const CobolDetailsPanel_1 = require("./CobolDetailsPanel");
class CobolTabView extends QxTabView_1.QxTabView {
    constructor() {
        super();
        this.descriptionPanel = new TextPanel_1.TextPanel;
        this.detailsPanel = new CobolDetailsPanel_1.CobolDetailsPanel;
        this.editorPanel = new EditorPanel_1.EditorPanel;
        this.transcriptPanel = new TranscriptPanel_1.TranscriptPanel;
        this.codePage = this.addPage(LabelConstants_1.default.TabPageCode, this.editorPanel);
        this.descriptionPage = this.addPage(LabelConstants_1.default.TabPageDescription, this.descriptionPanel);
        this.detailsPage = this.addPage(LabelConstants_1.default.TabPageDetails, this.detailsPanel);
        this.transcriptPage = this.addPage(LabelConstants_1.default.TabPageTranscript, this.transcriptPanel);
    }
    clear() {
        this.clearCode();
        this.clearDescription();
        this.clearDetails();
        this.setSelection(this.codePage);
    }
    clearCode() {
        this.editorPanel.clear();
    }
    clearDescription() {
        this.descriptionPanel.clear();
    }
    clearDetails() {
        this.detailsPanel.clear();
    }
    defaultEnableOnAppear() {
        return true;
    }
    defaultEnableOnResize() {
        return true;
    }
    getAuthor() {
        return this.detailsPanel.getAuthor();
    }
    getCategory() {
        return this.detailsPanel.getCategory();
    }
    getCode() {
        return this.editorPanel.getValue();
    }
    getCodeObject() {
        return this.editorPanel.getCodeObject();
    }
    getDescription() {
        return this.descriptionPanel.getValue();
    }
    getEditorPanel() {
        return this.editorPanel;
    }
    getModule() {
        return this.detailsPanel.getModule();
    }
    getTranscriptPanel() {
        return this.transcriptPanel;
    }
    onAppear() {
        super.onAppear();
        this.editorPanel.widget.getLayoutParent().getLayoutParent().setPadding(0);
    }
    setActiveTab(tab) {
        switch (tab) {
            case ActionConstants_1.default.TabTranscript:
                this.setSelection(this.transcriptPage);
                break;
            default:
                //ErrorHandler.logError( ErrorConstants.ProjectsTabsUnknownTab, tab );
                break;
        }
    }
    setAuthor(author) {
        this.detailsPanel.setAuthor(author);
    }
    setCategory(category) {
        this.detailsPanel.setCategory(category);
    }
    setCode(code) {
        this.editorPanel.setValue(code);
    }
    setCodeObject(value) {
        this.editorPanel.setCodeObject(value);
    }
    setCreatedAt(createdAt) {
        this.detailsPanel.setCreatedAt(createdAt);
    }
    setDescription(text) {
        this.descriptionPanel.setValue(text);
    }
    setId(id) {
        this.detailsPanel.setId(`${id}`);
    }
    setModule(module) {
        this.detailsPanel.setModule(module);
    }
    setUpdatedAt(updatedAt) {
        this.detailsPanel.setUpdatedAt(updatedAt);
    }
    setValue(value) {
        //this.setAuthor( value.author );
        //this.setCategory( value.category );
        this.setCode(value.code);
        //this.setCodeObject( value.code_object );
        //this.setCreatedAt( value.created_at );
        //this.setDescription( value.description );
        //this.setId( value.id );
        //this.setModule( value.module );
        //this.setUpdatedAt( value.updated_at );
    }
}
exports.CobolTabView = CobolTabView;

},{"../../../../constants/ActionConstants":3,"../../../../constants/LabelConstants":9,"../../../../qx/ui/tabview/QxTabView":54,"../../../widgets/EditorPanel":73,"../../../widgets/TextPanel":76,"../../../widgets/TranscriptPanel":77,"./CobolDetailsPanel":82}],85:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsWindow = void 0;
const ActionConstants_1 = __importDefault(require("../../../constants/ActionConstants"));
const LabelConstants_1 = __importDefault(require("../../../constants/LabelConstants"));
const SizeConstants_1 = __importDefault(require("../../../constants/SizeConstants"));
const ModelsStore_1 = __importDefault(require("../../../data/stores/ModelsStore"));
const InteropUtil_1 = __importDefault(require("../../../interop/InteropUtil"));
const QxPopup_1 = require("../../../qx/ui/popup/QxPopup");
const QxSplitPane_1 = require("../../../qx/ui/splitpane/QxSplitPane");
const AbstractDataListWindow_1 = require("../abstract/AbstractDataListWindow");
const ModelsButtonBar_1 = require("./widgets/ModelsButtonBar");
const ModelsPanel_1 = require("./widgets/ModelsPanel");
const ModelsTabView_1 = require("./widgets/ModelsTabView");
class ModelsWindow extends AbstractDataListWindow_1.AbstractDataListWindow {
    initialize() {
        super.initialize();
        this.listPanel = this.buildListPanel();
        this.listModel = this.buildListModel();
        this.tabView = new ModelsTabView_1.ModelsTabView;
        this.splitPane = QxSplitPane_1.QxSplitPane.createHorizontal();
        this.splitPane.add(this.listPanel, 1);
        this.splitPane.add(this.tabView, 2);
        this.add(this.splitPane);
        this.updateEnabledButtons();
    }
    addButtonsLeft() {
        this.addButtonLeft(LabelConstants_1.default.ButtonLabelRefresh);
        const saveMenuButtons = [
            LabelConstants_1.default.ButtonLabelRename,
            LabelConstants_1.default.ButtonLabelNew,
            LabelConstants_1.default.ButtonLabelDelete
        ];
        const saveSplitBtns = this.addSplitButtonLeft(LabelConstants_1.default.ButtonLabelSave, saveMenuButtons);
        this.saveButton = saveSplitBtns[0];
        const moreMenuButtonMap = saveSplitBtns[1];
        this.renameButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelRename];
        this.newButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelNew];
        this.deleteButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelDelete];
        this.addHandlers();
        this.updateEnabledButtons();
    }
    addButtonsRight() {
        this.runButton = this.addButtonRight(LabelConstants_1.default.ButtonLabelRun);
        this.clearButton = this.addButtonRight(LabelConstants_1.default.ButtonLabelClear);
        this.copyButton = this.addButtonRight(LabelConstants_1.default.ButtonLabelCopy);
    }
    addHandlers() {
        const projectsButtonBar = this.buttonBar;
        if (projectsButtonBar.defaultHasSelectBox()) {
            projectsButtonBar.setSelectionHandlerFn(() => {
                var _a, _b;
                (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.showSelectedCategory(projectsButtonBar.getSelectedCategory());
                (_b = this.tabView) === null || _b === void 0 ? void 0 : _b.clear();
            });
        }
    }
    buildListModel() {
        var _a;
        const listModel = window.qx.data.marshal.Json.createModel([]);
        const list = (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.list.widget;
        list.setModel(listModel);
        return listModel;
    }
    buildListPanel() {
        const modelsPanel = new ModelsPanel_1.ModelsPanel(this);
        const fn = (value) => {
            this.onSelectionChange(value);
        };
        modelsPanel.setChangeHandler(fn);
        return modelsPanel;
    }
    defaultButtonBar() {
        return new ModelsButtonBar_1.ModelsButtonBar(this);
    }
    defaultCaption() {
        return LabelConstants_1.default.WindowLabelModels;
    }
    defaultHeight() {
        return SizeConstants_1.default.ProjectsWindowHeight;
    }
    defaultWidth() {
        return SizeConstants_1.default.ProjectsWindowWidth;
    }
    getAuthor() {
        if (this.tabView)
            return this.tabView.getAuthor();
        return '';
    }
    getCategory() {
        if (this.tabView)
            return this.tabView.getCategory();
        return '';
    }
    getCode() {
        if (this.tabView)
            return this.tabView.getCode();
        return '';
    }
    getCodeObject() {
        if (this.tabView)
            return this.tabView.getCodeObject();
        return null;
    }
    getDefaultDataStore() {
        const store = ModelsStore_1.default.getInstance();
        if (this.listPanel)
            store.setUpdateListHandler(this);
        store.setLoadHandler(this);
        return store;
    }
    getDescription() {
        if (this.tabView)
            return this.tabView.getDescription();
        return '';
    }
    getEditorPanel() {
        var _a;
        return (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getEditorPanel();
    }
    getModule() {
        if (this.tabView)
            return this.tabView.getModule();
        return '';
    }
    getSelectedCategory() {
        return this.buttonBar.getSelectedCategory();
    }
    getTabViewId() {
        var _a;
        return this.tabView ? (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getId() : -1;
    }
    getTranscriptPanel() {
        var _a;
        return (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel();
    }
    handleOnLoad(store) {
        const model = store.getModel();
        const names = [];
        for (let i = 0; i < model.length; i++)
            names.push(model.getItem(i).getName());
        this.updateListFromArray(names);
    }
    hasSelectedData() {
        return this.listPanel ? this.listPanel.hasSelectedData() : false;
    }
    initialLoadData() {
        this.refresh();
    }
    initStdOut() {
        var _a, _b;
        super.initStdOut();
        if ((_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel())
            this.setStdOut((_b = this.tabView) === null || _b === void 0 ? void 0 : _b.getTranscriptPanel());
    }
    isLoggedIn() {
        return false;
        //return SessionStatus.isLoggedIn();
    }
    onButtonClick(tag) {
        switch (tag) {
            case ActionConstants_1.default.ActionClear:
                this.onClear();
                break;
            case ActionConstants_1.default.ActionCopy:
                this.onCopy();
                break;
            case ActionConstants_1.default.ActionConsole:
                this.onCompile();
                break;
            case ActionConstants_1.default.ActionDelete:
                this.onDelete();
                break;
            case ActionConstants_1.default.ActionNew:
                this.onNew();
                break;
            case ActionConstants_1.default.ActionRefresh:
                this.onRefresh();
                break;
            case ActionConstants_1.default.ActionRename:
                this.onRename();
                break;
            case ActionConstants_1.default.ActionRun:
                this.onRun();
                break;
            case ActionConstants_1.default.ActionSave:
                this.onSave();
                break;
            default:
                //ErrorHandler.logError(ErrorConstants.ProjectsWindowOnButtonClick, tag);
                break;
        }
    }
    onClear() {
        var _a, _b;
        (_b = (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel()) === null || _b === void 0 ? void 0 : _b.clear();
    }
    onCompile() {
        //const code: string = this.getCode();
        //ConsoleWindow.openOn(code);
    }
    onCopy() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const text = (_b = (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel().getValue()) !== null && _b !== void 0 ? _b : '{}';
            window.X = text;
        });
    }
    onDelete() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.deleteProject();
        this.refresh();
    }
    onEventStatusChanged(message) {
        this.updateEnabledButtons();
    }
    onMaximize() {
        this.onResize();
    }
    onMinimize() {
        this.onResize();
    }
    onNew() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.newProject();
        this.refresh();
    }
    onRefresh() {
        this.refresh();
    }
    onRename() {
        var _a;
        const selectedData = (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.getSelectedData();
        if (!selectedData)
            return;
        const oldName = selectedData.name;
        const newNameFn = (newName) => {
            selectedData.name = newName;
            this.save();
        };
        QxPopup_1.QxPopup.rename(oldName, newNameFn);
    }
    onResize() {
    }
    onRestore() {
        this.onResize();
    }
    onRun() {
        var _a;
        const fn = (reply) => {
            var _a, _b, _c;
            (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setActiveTab(ActionConstants_1.default.TabTranscript);
            (_c = (_b = this.tabView) === null || _b === void 0 ? void 0 : _b.getTranscriptPanel()) === null || _c === void 0 ? void 0 : _c.prn(reply);
        };
        const code = (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getCode();
        InteropUtil_1.default.runCode(code, fn);
    }
    onSave() {
        var _a, _b, _c, _d, _e, _f;
        if (this.isLoggedIn() && this.hasSelectedData()) {
            (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.updateAuthor(this.getAuthor());
            (_b = this.listPanel) === null || _b === void 0 ? void 0 : _b.updateCategory(this.getCategory());
            (_c = this.listPanel) === null || _c === void 0 ? void 0 : _c.updateCode(this.getCode());
            (_d = this.listPanel) === null || _d === void 0 ? void 0 : _d.updateCodeObject(JSON.stringify(this.getCodeObject()));
            (_e = this.listPanel) === null || _e === void 0 ? void 0 : _e.updateDescription(this.getDescription());
            (_f = this.listPanel) === null || _f === void 0 ? void 0 : _f.updateModule(this.getModule());
            this.save();
        }
    }
    onSelectionChange(value) {
        console.log("ModelsWindow.onSelectionChange", value);
        const tabView = this.tabView;
        tabView.setValue(value);
        this.updateEnabledButtons();
    }
    refresh() {
        var _a;
        this.tabView.clear();
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.refresh();
        this.updateEnabledButtons();
    }
    registerObjects() {
        super.registerObjects();
    }
    save() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.saveProject();
        this.refresh();
    }
    setActiveTab(tab) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setActiveTab(tab);
    }
    setCodeObject(codeObject) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setCodeObject(codeObject);
    }
    setValues(data) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setValue(data);
    }
    unregisterObjects() {
        var _a;
        super.unregisterObjects();
        //EventBus.unsubscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.releaseHandlers();
    }
    updateCategories(categories) {
        this.buttonBar.updateCategories(categories);
    }
    updateEnabledButtons() {
        const fn = () => {
            const enabled_1 = this.isLoggedIn();
            const enabled_2 = this.hasSelectedData();
            const enabled_3 = enabled_1 && enabled_2;
            if (this.deleteButton)
                this.deleteButton.setEnabled(enabled_3);
            if (this.moreButton)
                this.moreButton.setEnabled(enabled_1);
            if (this.newButton)
                this.newButton.setEnabled(enabled_1);
            if (this.renameButton)
                this.renameButton.setEnabled(enabled_3);
            if (this.runButton)
                this.runButton.setEnabled(enabled_2);
            if (this.saveButton)
                this.saveButton.setEnabled(enabled_1);
        };
        //DeferredCall.schedule(fn);
    }
    updateListFromArray(values) {
        values.sort();
        this.listModel.removeAll();
        this.listModel.append(values);
    }
}
exports.ModelsWindow = ModelsWindow;

},{"../../../constants/ActionConstants":3,"../../../constants/LabelConstants":9,"../../../constants/SizeConstants":12,"../../../data/stores/ModelsStore":16,"../../../interop/InteropUtil":18,"../../../qx/ui/popup/QxPopup":51,"../../../qx/ui/splitpane/QxSplitPane":52,"../abstract/AbstractDataListWindow":78,"./widgets/ModelsButtonBar":86,"./widgets/ModelsPanel":88,"./widgets/ModelsTabView":89}],86:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsButtonBar = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const ButtonBar_1 = require("../../../widgets/ButtonBar");
class ModelsButtonBar extends ButtonBar_1.ButtonBar {
    getSelectedCategory() {
        return this.selectBox.getSelectedLabel().trim();
    }
    setSelectionHandlerFn(handlerFn) {
        var _a;
        (_a = this.selectBox) === null || _a === void 0 ? void 0 : _a.setChangeHandlerFn(handlerFn);
    }
    updateCategories(categories) {
        var _a;
        categories.unshift(LabelConstants_1.default.SelectionLabelAll);
        (_a = this.selectBox) === null || _a === void 0 ? void 0 : _a.setItems(categories);
    }
}
exports.ModelsButtonBar = ModelsButtonBar;

},{"../../../../constants/LabelConstants":9,"../../../widgets/ButtonBar":68}],87:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsDetailsPanel = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const QxTextField_1 = require("../../../../qx/ui/form/QxTextField");
const AbstractForm_1 = require("../../../widgets/AbstractForm");
class ModelsDetailsPanel extends AbstractForm_1.AbstractForm {
    constructor() {
        super();
        this.moduleField = new QxTextField_1.QxTextField;
        this.authorField = new QxTextField_1.QxTextField;
        this.categoryField = new QxTextField_1.QxTextField;
        this.idField = new QxTextField_1.QxTextField;
        this.createdAtField = new QxTextField_1.QxTextField;
        this.updatedAtField = new QxTextField_1.QxTextField;
    }
    clear() {
        this.moduleField.clear();
        this.authorField.clear();
        this.categoryField.clear();
        this.idField.clear();
        this.createdAtField.clear();
        this.updatedAtField.clear();
    }
    getAuthor() {
        return this.authorField.getValue();
    }
    getCategory() {
        return this.categoryField.getValue();
    }
    getModule() {
        return this.moduleField.getValue();
    }
    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.moduleField, LabelConstants_1.default.FieldLabelScript);
            this.form.add(this.authorField, LabelConstants_1.default.FieldLabelAuthor);
            this.form.add(this.categoryField, LabelConstants_1.default.FieldLabelCategory);
            this.form.add(this.idField, LabelConstants_1.default.FieldLabelId);
            this.form.add(this.updatedAtField, LabelConstants_1.default.FieldLabelUpdatedAt);
            this.form.add(this.createdAtField, LabelConstants_1.default.FieldLabelCreatedAt);
            this.idField.setEnabled(false);
            this.updatedAtField.setEnabled(false);
            this.createdAtField.setEnabled(false);
        }
    }
    setAuthor(author) {
        this.authorField.setValue(author);
    }
    setCategory(category) {
        this.categoryField.setValue(category);
    }
    setCreatedAt(createdAt) {
        this.createdAtField.setValue(createdAt);
    }
    setId(id) {
        this.idField.setValue(id);
    }
    setModule(module) {
        this.moduleField.setValue(module);
    }
    setUpdatedAt(updatedAt) {
        this.updatedAtField.setValue(updatedAt);
    }
}
exports.ModelsDetailsPanel = ModelsDetailsPanel;

},{"../../../../constants/LabelConstants":9,"../../../../qx/ui/form/QxTextField":40,"../../../widgets/AbstractForm":66}],88:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsPanel = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const ModelsStore_1 = __importDefault(require("../../../../data/stores/ModelsStore"));
const DataListPanel_1 = require("../../../widgets/DataListPanel");
class ModelsPanel extends DataListPanel_1.DataListPanel {
    constructor(modelsWindow) {
        super(modelsWindow);
        this.modelsWindow = modelsWindow;
    }
    addLoadHandlerFns() {
        super.addLoadHandlerFns();
        const updateCategoriesFn = (dataRecords) => {
            const data = this.generateCategories(dataRecords);
            this.updateCategories(data);
        };
        this.addLoadHandlerFn(updateCategoriesFn);
    }
    deleteProject() {
        //this.dataStore?.deleteRecord(this.selectedData);
    }
    generateCategories(dataRecords) {
        const categories = [];
        for (let i = 0; i < dataRecords.length; i++) {
            const record = dataRecords.at(i);
            if (typeof (record.details) === 'string' && record.details.length > 2) {
                const data = JSON.parse(record.details);
                if (typeof (data.category) === 'string') {
                    const category = data.category;
                    if (category.length > 0 && !categories.includes(category))
                        categories.push(category);
                }
            }
        }
        categories.sort();
        return categories;
    }
    getDataListWindow() {
        return this.modelsWindow;
    }
    getDetailsCategory(details) {
        if (typeof (details) !== 'string' || details.length < 2)
            return null;
        const data = JSON.parse(details);
        return data.category;
    }
    getListKey(item) {
        return item.name;
    }
    getSelectionValue(name) {
        return 'getSelectionValue';
    }
    getValueByName(name, fn) {
        ModelsStore_1.default.getInstance().getValueByName(name, fn);
    }
    isCategorySelected(item) {
        var _a;
        if (!((_a = this.modelsWindow.buttonBar) === null || _a === void 0 ? void 0 : _a.defaultHasSelectBox()))
            return true;
        const selectedCategory = this.modelsWindow.getSelectedCategory();
        if (selectedCategory == LabelConstants_1.default.SelectionLabelAll)
            return true;
        const itemCategory = this.getDetailsCategory(item.details);
        if (!itemCategory)
            return false;
        return itemCategory == selectedCategory;
    }
    newProject() {
        //this.dataStore?.newRecord();
    }
    saveProject() {
        //this.dataStore?.saveRecord(this.selectedData);
    }
    showSelectedCategory(category) {
        this.updateList();
    }
    updateCategories(categories) {
        this.modelsWindow.updateCategories(categories);
    }
    updateAuthor(author) {
        if (this.selectedData)
            this.selectedData.author = author;
    }
    updateCategory(category) {
        if (this.selectedData)
            this.selectedData.category = category;
    }
    updateCode(code) {
        if (this.selectedData)
            this.selectedData.code = code;
    }
    updateCodeObject(codeObject) {
        if (this.selectedData)
            this.selectedData.code_object = codeObject;
    }
    updateDescription(description) {
        if (this.selectedData)
            this.selectedData.description = description;
    }
    updateModule(module) {
        if (this.selectedData)
            this.selectedData.module = module;
    }
}
exports.ModelsPanel = ModelsPanel;

},{"../../../../constants/LabelConstants":9,"../../../../data/stores/ModelsStore":16,"../../../widgets/DataListPanel":71}],89:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsTabView = void 0;
const ActionConstants_1 = __importDefault(require("../../../../constants/ActionConstants"));
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const QxTabView_1 = require("../../../../qx/ui/tabview/QxTabView");
const EditorPanel_1 = require("../../../widgets/EditorPanel");
const TextPanel_1 = require("../../../widgets/TextPanel");
const TranscriptPanel_1 = require("../../../widgets/TranscriptPanel");
const ModelsDetailsPanel_1 = require("./ModelsDetailsPanel");
class ModelsTabView extends QxTabView_1.QxTabView {
    constructor() {
        super();
        this.descriptionPanel = new TextPanel_1.TextPanel;
        this.detailsPanel = new ModelsDetailsPanel_1.ModelsDetailsPanel;
        this.editorPanel = new EditorPanel_1.EditorPanel;
        this.transcriptPanel = new TranscriptPanel_1.TranscriptPanel;
        this.codePage = this.addPage(LabelConstants_1.default.TabPageCode, this.editorPanel);
        this.descriptionPage = this.addPage(LabelConstants_1.default.TabPageDescription, this.descriptionPanel);
        this.detailsPage = this.addPage(LabelConstants_1.default.TabPageDetails, this.detailsPanel);
        this.transcriptPage = this.addPage(LabelConstants_1.default.TabPageTranscript, this.transcriptPanel);
    }
    clear() {
        this.clearCode();
        this.clearDescription();
        this.clearDetails();
        this.setSelection(this.codePage);
    }
    clearCode() {
        this.editorPanel.clear();
    }
    clearDescription() {
        this.descriptionPanel.clear();
    }
    clearDetails() {
        this.detailsPanel.clear();
    }
    defaultEnableOnAppear() {
        return true;
    }
    defaultEnableOnResize() {
        return true;
    }
    getAuthor() {
        return this.detailsPanel.getAuthor();
    }
    getCategory() {
        return this.detailsPanel.getCategory();
    }
    getCode() {
        return this.editorPanel.getValue();
    }
    getCodeObject() {
        return this.editorPanel.getCodeObject();
    }
    getDescription() {
        return this.descriptionPanel.getValue();
    }
    getEditorPanel() {
        return this.editorPanel;
    }
    getModule() {
        return this.detailsPanel.getModule();
    }
    getTranscriptPanel() {
        return this.transcriptPanel;
    }
    onAppear() {
        super.onAppear();
        this.editorPanel.widget.getLayoutParent().getLayoutParent().setPadding(0);
    }
    setActiveTab(tab) {
        switch (tab) {
            case ActionConstants_1.default.TabTranscript:
                this.setSelection(this.transcriptPage);
                break;
            default:
                //ErrorHandler.logError( ErrorConstants.ProjectsTabsUnknownTab, tab );
                break;
        }
    }
    setAuthor(author) {
        this.detailsPanel.setAuthor(author);
    }
    setCategory(category) {
        this.detailsPanel.setCategory(category);
    }
    setCode(code) {
        this.editorPanel.setValue(code);
    }
    setCodeObject(value) {
        this.editorPanel.setCodeObject(value);
    }
    setCreatedAt(createdAt) {
        this.detailsPanel.setCreatedAt(createdAt);
    }
    setDescription(text) {
        this.descriptionPanel.setValue(text);
    }
    setId(id) {
        this.detailsPanel.setId(`${id}`);
    }
    setModule(module) {
        this.detailsPanel.setModule(module);
    }
    setUpdatedAt(updatedAt) {
        this.detailsPanel.setUpdatedAt(updatedAt);
    }
    setValue(value) {
        //this.setAuthor( value.author );
        //this.setCategory( value.category );
        this.setCode(value.code);
        //this.setCodeObject( value.code_object );
        //this.setCreatedAt( value.created_at );
        //this.setDescription( value.description );
        //this.setId( value.id );
        //this.setModule( value.module );
        //this.setUpdatedAt( value.updated_at );
    }
}
exports.ModelsTabView = ModelsTabView;

},{"../../../../constants/ActionConstants":3,"../../../../constants/LabelConstants":9,"../../../../qx/ui/tabview/QxTabView":54,"../../../widgets/EditorPanel":73,"../../../widgets/TextPanel":76,"../../../widgets/TranscriptPanel":77,"./ModelsDetailsPanel":87}],90:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptsWindow = void 0;
const ActionConstants_1 = __importDefault(require("../../../constants/ActionConstants"));
const LabelConstants_1 = __importDefault(require("../../../constants/LabelConstants"));
const SizeConstants_1 = __importDefault(require("../../../constants/SizeConstants"));
const ScriptsStore_1 = __importDefault(require("../../../data/stores/ScriptsStore"));
const InteropUtil_1 = __importDefault(require("../../../interop/InteropUtil"));
const QxPopup_1 = require("../../../qx/ui/popup/QxPopup");
const QxSplitPane_1 = require("../../../qx/ui/splitpane/QxSplitPane");
const AbstractDataListWindow_1 = require("../abstract/AbstractDataListWindow");
const ScriptsButtonBar_1 = require("./widgets/ScriptsButtonBar");
const ScriptsPanel_1 = require("./widgets/ScriptsPanel");
const ScriptsTabView_1 = require("./widgets/ScriptsTabView");
class ScriptsWindow extends AbstractDataListWindow_1.AbstractDataListWindow {
    initialize() {
        super.initialize();
        this.listPanel = this.buildListPanel();
        this.listModel = this.buildListModel();
        this.tabView = new ScriptsTabView_1.ScriptsTabView;
        this.splitPane = QxSplitPane_1.QxSplitPane.createHorizontal();
        this.splitPane.add(this.listPanel, 1);
        this.splitPane.add(this.tabView, 2);
        this.add(this.splitPane);
        //EventBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
        this.updateEnabledButtons();
    }
    addButtonsLeft() {
        this.addButtonLeft(LabelConstants_1.default.ButtonLabelRefresh);
        const saveMenuButtons = [
            LabelConstants_1.default.ButtonLabelRename,
            LabelConstants_1.default.ButtonLabelNew,
            LabelConstants_1.default.ButtonLabelDelete
        ];
        const saveSplitBtns = this.addSplitButtonLeft(LabelConstants_1.default.ButtonLabelSave, saveMenuButtons);
        this.saveButton = saveSplitBtns[0];
        const moreMenuButtonMap = saveSplitBtns[1];
        this.renameButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelRename];
        this.newButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelNew];
        this.deleteButton = moreMenuButtonMap[LabelConstants_1.default.ButtonLabelDelete];
        this.addHandlers();
        this.updateEnabledButtons();
    }
    addButtonsRight() {
        this.runButton = this.addButtonRight(LabelConstants_1.default.ButtonLabelRun);
        this.clearButton = this.addButtonRight(LabelConstants_1.default.ButtonLabelClear);
        this.copyButton = this.addButtonRight(LabelConstants_1.default.ButtonLabelCopy);
    }
    addHandlers() {
        const projectsButtonBar = this.buttonBar;
        if (projectsButtonBar.defaultHasSelectBox()) {
            projectsButtonBar.setSelectionHandlerFn(() => {
                var _a, _b;
                (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.showSelectedCategory(projectsButtonBar.getSelectedCategory());
                (_b = this.tabView) === null || _b === void 0 ? void 0 : _b.clear();
            });
        }
    }
    buildListModel() {
        var _a;
        const listModel = window.qx.data.marshal.Json.createModel([]);
        const list = (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.list.widget;
        list.setModel(listModel);
        return listModel;
    }
    buildListPanel() {
        const scriptsPanel = new ScriptsPanel_1.ScriptsPanel(this);
        const fn = (value) => {
            this.onSelectionChange(value);
        };
        scriptsPanel.setChangeHandler(fn);
        return scriptsPanel;
    }
    defaultButtonBar() {
        return new ScriptsButtonBar_1.ScriptsButtonBar(this);
    }
    defaultCaption() {
        return LabelConstants_1.default.WindowCaptionScripts;
    }
    defaultHeight() {
        return SizeConstants_1.default.ProjectsWindowHeight;
    }
    defaultWidth() {
        return SizeConstants_1.default.ProjectsWindowWidth;
    }
    getAuthor() {
        if (this.tabView)
            return this.tabView.getAuthor();
        return '';
    }
    getCategory() {
        if (this.tabView)
            return this.tabView.getCategory();
        return '';
    }
    getCode() {
        if (this.tabView)
            return this.tabView.getCode();
        return '';
    }
    getCodeObject() {
        if (this.tabView)
            return this.tabView.getCodeObject();
        return null;
    }
    getDefaultDataStore() {
        const store = ScriptsStore_1.default.getInstance();
        if (this.listPanel)
            store.setUpdateListHandler(this);
        store.setLoadHandler(this);
        return store;
    }
    getDescription() {
        if (this.tabView)
            return this.tabView.getDescription();
        return '';
    }
    getEditorPanel() {
        var _a;
        return (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getEditorPanel();
    }
    getModule() {
        if (this.tabView)
            return this.tabView.getModule();
        return '';
    }
    getSelectedCategory() {
        return this.buttonBar.getSelectedCategory();
    }
    getTabViewId() {
        var _a;
        return this.tabView ? (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getId() : -1;
    }
    getTranscriptPanel() {
        var _a;
        return (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel();
    }
    handleOnLoad(store) {
        const model = store.getModel();
        const names = [];
        for (let i = 0; i < model.length; i++)
            names.push(model.getItem(i).getName());
        this.updateListFromArray(names);
    }
    hasSelectedData() {
        return this.listPanel ? this.listPanel.hasSelectedData() : false;
    }
    initialLoadData() {
        this.refresh();
    }
    initStdOut() {
        var _a, _b;
        super.initStdOut();
        if ((_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel())
            this.setStdOut((_b = this.tabView) === null || _b === void 0 ? void 0 : _b.getTranscriptPanel());
    }
    isLoggedIn() {
        return false;
        //return SessionStatus.isLoggedIn();
    }
    onButtonClick(tag) {
        switch (tag) {
            case ActionConstants_1.default.ActionClear:
                this.onClear();
                break;
            case ActionConstants_1.default.ActionCopy:
                this.onCopy();
                break;
            case ActionConstants_1.default.ActionConsole:
                this.onCompile();
                break;
            case ActionConstants_1.default.ActionDelete:
                this.onDelete();
                break;
            case ActionConstants_1.default.ActionNew:
                this.onNew();
                break;
            case ActionConstants_1.default.ActionRefresh:
                this.onRefresh();
                break;
            case ActionConstants_1.default.ActionRename:
                this.onRename();
                break;
            case ActionConstants_1.default.ActionRun:
                this.onRun();
                break;
            case ActionConstants_1.default.ActionSave:
                this.onSave();
                break;
            default:
                //ErrorHandler.logError(ErrorConstants.ProjectsWindowOnButtonClick, tag);
                break;
        }
    }
    onClear() {
        var _a, _b;
        (_b = (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel()) === null || _b === void 0 ? void 0 : _b.clear();
    }
    onCompile() {
        //const code: string = this.getCode();
        //ConsoleWindow.openOn(code);
    }
    onCopy() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const text = (_b = (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getTranscriptPanel().getValue()) !== null && _b !== void 0 ? _b : '{}';
            window.X = text;
        });
    }
    onDelete() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.deleteProject();
        this.refresh();
    }
    onEventStatusChanged(message) {
        this.updateEnabledButtons();
    }
    onMaximize() {
        this.onResize();
    }
    onMinimize() {
        this.onResize();
    }
    onNew() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.newProject();
        this.refresh();
    }
    onRefresh() {
        this.refresh();
    }
    onRename() {
        var _a;
        const selectedData = (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.getSelectedData();
        if (!selectedData)
            return;
        const oldName = selectedData.name;
        const newNameFn = (newName) => {
            selectedData.name = newName;
            this.save();
        };
        QxPopup_1.QxPopup.rename(oldName, newNameFn);
    }
    onResize() {
    }
    onRestore() {
        this.onResize();
    }
    onRun() {
        var _a;
        const fn = (reply) => {
            var _a, _b, _c;
            (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setActiveTab(ActionConstants_1.default.TabTranscript);
            (_c = (_b = this.tabView) === null || _b === void 0 ? void 0 : _b.getTranscriptPanel()) === null || _c === void 0 ? void 0 : _c.prn(reply);
        };
        const code = (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.getCode();
        InteropUtil_1.default.runCode(code, fn);
    }
    onSave() {
        var _a, _b, _c, _d, _e, _f;
        if (this.isLoggedIn() && this.hasSelectedData()) {
            (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.updateAuthor(this.getAuthor());
            (_b = this.listPanel) === null || _b === void 0 ? void 0 : _b.updateCategory(this.getCategory());
            (_c = this.listPanel) === null || _c === void 0 ? void 0 : _c.updateCode(this.getCode());
            (_d = this.listPanel) === null || _d === void 0 ? void 0 : _d.updateCodeObject(JSON.stringify(this.getCodeObject()));
            (_e = this.listPanel) === null || _e === void 0 ? void 0 : _e.updateDescription(this.getDescription());
            (_f = this.listPanel) === null || _f === void 0 ? void 0 : _f.updateModule(this.getModule());
            this.save();
        }
    }
    onSelectionChange(value) {
        const tabView = this.tabView;
        tabView.setValue(value);
        this.updateEnabledButtons();
    }
    refresh() {
        var _a;
        this.tabView.clear();
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.refresh();
        this.updateEnabledButtons();
    }
    registerObjects() {
        super.registerObjects();
    }
    save() {
        var _a;
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.saveProject();
        this.refresh();
    }
    setActiveTab(tab) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setActiveTab(tab);
    }
    setCodeObject(codeObject) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setCodeObject(codeObject);
    }
    setValues(data) {
        var _a;
        (_a = this.tabView) === null || _a === void 0 ? void 0 : _a.setValue(data);
    }
    unregisterObjects() {
        var _a;
        super.unregisterObjects();
        //EventBus.unsubscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
        (_a = this.listPanel) === null || _a === void 0 ? void 0 : _a.releaseHandlers();
    }
    updateCategories(categories) {
        this.buttonBar.updateCategories(categories);
    }
    updateEnabledButtons() {
        const fn = () => {
            const enabled_1 = this.isLoggedIn();
            const enabled_2 = this.hasSelectedData();
            const enabled_3 = enabled_1 && enabled_2;
            if (this.deleteButton)
                this.deleteButton.setEnabled(enabled_3);
            if (this.moreButton)
                this.moreButton.setEnabled(enabled_1);
            if (this.newButton)
                this.newButton.setEnabled(enabled_1);
            if (this.renameButton)
                this.renameButton.setEnabled(enabled_3);
            if (this.runButton)
                this.runButton.setEnabled(enabled_2);
            if (this.saveButton)
                this.saveButton.setEnabled(enabled_1);
        };
        //DeferredCall.schedule(fn);
    }
    updateListFromArray(values) {
        values.sort();
        this.listModel.removeAll();
        this.listModel.append(values);
    }
}
exports.ScriptsWindow = ScriptsWindow;

},{"../../../constants/ActionConstants":3,"../../../constants/LabelConstants":9,"../../../constants/SizeConstants":12,"../../../data/stores/ScriptsStore":17,"../../../interop/InteropUtil":18,"../../../qx/ui/popup/QxPopup":51,"../../../qx/ui/splitpane/QxSplitPane":52,"../abstract/AbstractDataListWindow":78,"./widgets/ScriptsButtonBar":91,"./widgets/ScriptsPanel":93,"./widgets/ScriptsTabView":94}],91:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptsButtonBar = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const ButtonBar_1 = require("../../../widgets/ButtonBar");
class ScriptsButtonBar extends ButtonBar_1.ButtonBar {
    getSelectedCategory() {
        return this.selectBox.getSelectedLabel().trim();
    }
    setSelectionHandlerFn(handlerFn) {
        var _a;
        (_a = this.selectBox) === null || _a === void 0 ? void 0 : _a.setChangeHandlerFn(handlerFn);
    }
    updateCategories(categories) {
        var _a;
        categories.unshift(LabelConstants_1.default.SelectionLabelAll);
        (_a = this.selectBox) === null || _a === void 0 ? void 0 : _a.setItems(categories);
    }
}
exports.ScriptsButtonBar = ScriptsButtonBar;

},{"../../../../constants/LabelConstants":9,"../../../widgets/ButtonBar":68}],92:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptsDetailsPanel = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const QxTextField_1 = require("../../../../qx/ui/form/QxTextField");
const AbstractForm_1 = require("../../../widgets/AbstractForm");
class ScriptsDetailsPanel extends AbstractForm_1.AbstractForm {
    constructor() {
        super();
        this.moduleField = new QxTextField_1.QxTextField;
        this.authorField = new QxTextField_1.QxTextField;
        this.categoryField = new QxTextField_1.QxTextField;
        this.idField = new QxTextField_1.QxTextField;
        this.createdAtField = new QxTextField_1.QxTextField;
        this.updatedAtField = new QxTextField_1.QxTextField;
    }
    clear() {
        this.moduleField.clear();
        this.authorField.clear();
        this.categoryField.clear();
        this.idField.clear();
        this.createdAtField.clear();
        this.updatedAtField.clear();
    }
    getAuthor() {
        return this.authorField.getValue();
    }
    getCategory() {
        return this.categoryField.getValue();
    }
    getModule() {
        return this.moduleField.getValue();
    }
    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.moduleField, LabelConstants_1.default.FieldLabelScript);
            this.form.add(this.authorField, LabelConstants_1.default.FieldLabelAuthor);
            this.form.add(this.categoryField, LabelConstants_1.default.FieldLabelCategory);
            this.form.add(this.idField, LabelConstants_1.default.FieldLabelId);
            this.form.add(this.updatedAtField, LabelConstants_1.default.FieldLabelUpdatedAt);
            this.form.add(this.createdAtField, LabelConstants_1.default.FieldLabelCreatedAt);
            this.idField.setEnabled(false);
            this.updatedAtField.setEnabled(false);
            this.createdAtField.setEnabled(false);
        }
    }
    setAuthor(author) {
        this.authorField.setValue(author);
    }
    setCategory(category) {
        this.categoryField.setValue(category);
    }
    setCreatedAt(createdAt) {
        this.createdAtField.setValue(createdAt);
    }
    setId(id) {
        this.idField.setValue(id);
    }
    setModule(module) {
        this.moduleField.setValue(module);
    }
    setUpdatedAt(updatedAt) {
        this.updatedAtField.setValue(updatedAt);
    }
}
exports.ScriptsDetailsPanel = ScriptsDetailsPanel;

},{"../../../../constants/LabelConstants":9,"../../../../qx/ui/form/QxTextField":40,"../../../widgets/AbstractForm":66}],93:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptsPanel = void 0;
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const ScriptsStore_1 = __importDefault(require("../../../../data/stores/ScriptsStore"));
const DataListPanel_1 = require("../../../widgets/DataListPanel");
class ScriptsPanel extends DataListPanel_1.DataListPanel {
    constructor(scriptsWindow) {
        super(scriptsWindow);
        this.scriptsWindow = scriptsWindow;
    }
    addLoadHandlerFns() {
        super.addLoadHandlerFns();
        const updateCategoriesFn = (dataRecords) => {
            const data = this.generateCategories(dataRecords);
            this.updateCategories(data);
        };
        this.addLoadHandlerFn(updateCategoriesFn);
    }
    deleteProject() {
        //this.dataStore?.deleteRecord(this.selectedData);
    }
    generateCategories(dataRecords) {
        const categories = [];
        for (let i = 0; i < dataRecords.length; i++) {
            const record = dataRecords.at(i);
            if (typeof (record.details) === 'string' && record.details.length > 2) {
                const data = JSON.parse(record.details);
                if (typeof (data.category) === 'string') {
                    const category = data.category;
                    if (category.length > 0 && !categories.includes(category))
                        categories.push(category);
                }
            }
        }
        categories.sort();
        return categories;
    }
    getDataListWindow() {
        return this.scriptsWindow;
    }
    getDetailsCategory(details) {
        if (typeof (details) !== 'string' || details.length < 2)
            return null;
        const data = JSON.parse(details);
        return data.category;
    }
    getListKey(item) {
        return item.name;
    }
    getSelectionValue(name) {
        return 'getSelectionValue';
    }
    getValueByName(name, fn) {
        ScriptsStore_1.default.getInstance().getValueByName(name, fn);
    }
    isCategorySelected(item) {
        var _a;
        if (!((_a = this.scriptsWindow.buttonBar) === null || _a === void 0 ? void 0 : _a.defaultHasSelectBox()))
            return true;
        const selectedCategory = this.scriptsWindow.getSelectedCategory();
        if (selectedCategory == LabelConstants_1.default.SelectionLabelAll)
            return true;
        const itemCategory = this.getDetailsCategory(item.details);
        if (!itemCategory)
            return false;
        return itemCategory == selectedCategory;
    }
    newProject() {
        //this.dataStore?.newRecord();
    }
    saveProject() {
        //this.dataStore?.saveRecord(this.selectedData);
    }
    showSelectedCategory(category) {
        this.updateList();
    }
    updateCategories(categories) {
        this.scriptsWindow.updateCategories(categories);
    }
    updateAuthor(author) {
        if (this.selectedData)
            this.selectedData.author = author;
    }
    updateCategory(category) {
        if (this.selectedData)
            this.selectedData.category = category;
    }
    updateCode(code) {
        if (this.selectedData)
            this.selectedData.code = code;
    }
    updateCodeObject(codeObject) {
        if (this.selectedData)
            this.selectedData.code_object = codeObject;
    }
    updateDescription(description) {
        if (this.selectedData)
            this.selectedData.description = description;
    }
    updateModule(module) {
        if (this.selectedData)
            this.selectedData.module = module;
    }
}
exports.ScriptsPanel = ScriptsPanel;

},{"../../../../constants/LabelConstants":9,"../../../../data/stores/ScriptsStore":17,"../../../widgets/DataListPanel":71}],94:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptsTabView = void 0;
const ActionConstants_1 = __importDefault(require("../../../../constants/ActionConstants"));
const LabelConstants_1 = __importDefault(require("../../../../constants/LabelConstants"));
const QxTabView_1 = require("../../../../qx/ui/tabview/QxTabView");
const EditorPanel_1 = require("../../../widgets/EditorPanel");
const TextPanel_1 = require("../../../widgets/TextPanel");
const TranscriptPanel_1 = require("../../../widgets/TranscriptPanel");
const ScriptsDetailsPanel_1 = require("./ScriptsDetailsPanel");
class ScriptsTabView extends QxTabView_1.QxTabView {
    constructor() {
        super();
        this.descriptionPanel = new TextPanel_1.TextPanel;
        this.detailsPanel = new ScriptsDetailsPanel_1.ScriptsDetailsPanel;
        this.editorPanel = new EditorPanel_1.EditorPanel;
        this.transcriptPanel = new TranscriptPanel_1.TranscriptPanel;
        this.codePage = this.addPage(LabelConstants_1.default.TabPageCode, this.editorPanel);
        this.descriptionPage = this.addPage(LabelConstants_1.default.TabPageDescription, this.descriptionPanel);
        this.detailsPage = this.addPage(LabelConstants_1.default.TabPageDetails, this.detailsPanel);
        this.transcriptPage = this.addPage(LabelConstants_1.default.TabPageTranscript, this.transcriptPanel);
    }
    clear() {
        this.clearCode();
        this.clearDescription();
        this.clearDetails();
        this.setSelection(this.codePage);
    }
    clearCode() {
        this.editorPanel.clear();
    }
    clearDescription() {
        this.descriptionPanel.clear();
    }
    clearDetails() {
        this.detailsPanel.clear();
    }
    defaultEnableOnAppear() {
        return true;
    }
    defaultEnableOnResize() {
        return true;
    }
    getAuthor() {
        return this.detailsPanel.getAuthor();
    }
    getCategory() {
        return this.detailsPanel.getCategory();
    }
    getCode() {
        return this.editorPanel.getValue();
    }
    getCodeObject() {
        return this.editorPanel.getCodeObject();
    }
    getDescription() {
        return this.descriptionPanel.getValue();
    }
    getEditorPanel() {
        return this.editorPanel;
    }
    getModule() {
        return this.detailsPanel.getModule();
    }
    getTranscriptPanel() {
        return this.transcriptPanel;
    }
    onAppear() {
        super.onAppear();
        this.editorPanel.widget.getLayoutParent().getLayoutParent().setPadding(0);
    }
    setActiveTab(tab) {
        switch (tab) {
            case ActionConstants_1.default.TabTranscript:
                this.setSelection(this.transcriptPage);
                break;
            default:
                //ErrorHandler.logError( ErrorConstants.ProjectsTabsUnknownTab, tab );
                break;
        }
    }
    setAuthor(author) {
        this.detailsPanel.setAuthor(author);
    }
    setCategory(category) {
        this.detailsPanel.setCategory(category);
    }
    setCode(code) {
        this.editorPanel.setValue(code);
    }
    setCodeObject(value) {
        this.editorPanel.setCodeObject(value);
    }
    setCreatedAt(createdAt) {
        this.detailsPanel.setCreatedAt(createdAt);
    }
    setDescription(text) {
        this.descriptionPanel.setValue(text);
    }
    setId(id) {
        this.detailsPanel.setId(`${id}`);
    }
    setModule(module) {
        this.detailsPanel.setModule(module);
    }
    setUpdatedAt(updatedAt) {
        this.detailsPanel.setUpdatedAt(updatedAt);
    }
    setValue(value) {
        //this.setAuthor( value.author );
        //this.setCategory( value.category );
        this.setCode(value.code);
        //this.setCodeObject( value.code_object );
        //this.setCreatedAt( value.created_at );
        //this.setDescription( value.description );
        //this.setId( value.id );
        //this.setModule( value.module );
        //this.setUpdatedAt( value.updated_at );
    }
}
exports.ScriptsTabView = ScriptsTabView;

},{"../../../../constants/ActionConstants":3,"../../../../constants/LabelConstants":9,"../../../../qx/ui/tabview/QxTabView":54,"../../../widgets/EditorPanel":73,"../../../widgets/TextPanel":76,"../../../widgets/TranscriptPanel":77,"./ScriptsDetailsPanel":92}]},{},[2]);
