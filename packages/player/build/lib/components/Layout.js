"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Questionnaire_1 = require("./Questionnaire");
var react_redux_1 = require("react-redux");
var mapStateToProps = function (store) {
    return { questionnaire: store.questionnaire };
};
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        var _a = this.props, questionnaire = _a.questionnaire, actions = _a.actions;
        return React.createElement("div", { className: "container-fluid" },
            React.createElement("div", { className: "menu d-flex row py-2 bg-dark text-light " },
                React.createElement("h1", { className: "col-5 font-weight-bold" }, "Questionnaire"),
                React.createElement("div", { className: "d-flex justify-content-around col-7" },
                    React.createElement("button", { className: "btn btn-info d-display", onClick: actions.toggleAppModeToDesign }, "Back to design"))),
            React.createElement("div", { className: "main-area row justify-content-center my-5" }, questionnaire && React.createElement(Questionnaire_1.default, { questionnaire: questionnaire })));
    };
    return Layout;
}(React.Component));
exports.Layout = Layout;
exports.default = react_redux_1.connect(mapStateToProps)(Layout);
//# sourceMappingURL=Layout.js.map