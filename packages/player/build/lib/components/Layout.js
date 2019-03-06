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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Questionnaire_1 = require("./Questionnaire");
var react_redux_1 = require("react-redux");
var application_1 = require("../actions/application");
var mapStateToProps = function (store) {
    return { questionnaire: store.questionnaire };
};
var mapDispatchToProps = {
    toggleAppModeToDesign: application_1.toggleAppModeToDesign
};
var mergeProps = function (stateProps, dispatchProps, ownProps) {
    return (__assign({}, ownProps, stateProps, { actions: __assign({}, dispatchProps) }));
};
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.toggleAppModeToDesign = function () {
        var actions = this.props.actions;
        actions.toggleAppModeToDesign();
    };
    Layout.prototype.render = function () {
        var questionnaire = (this.props).questionnaire;
        return React.createElement("div", { className: "container-fluid" },
            React.createElement("div", { className: "menu d-flex row py-2 bg-dark text-light " },
                React.createElement("h1", { className: "col-5 font-weight-bold" }, "Questionnaire"),
                React.createElement("div", { className: "d-flex justify-content-around col-7" },
                    React.createElement("button", { className: "btn btn-info d-display" /*onClick={this.toggleAppModeToDesign.bind(this)}*/ }, "Back to design"))),
            React.createElement("div", { className: "main-area row justify-content-center my-5" }, questionnaire && React.createElement(Questionnaire_1.default, { questionnaire: questionnaire })));
    };
    return Layout;
}(React.Component));
exports.Layout = Layout;
exports.ConnectedToReduxLayout = react_redux_1.connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);
exports.default = exports.ConnectedToReduxLayout;
//# sourceMappingURL=Layout.js.map