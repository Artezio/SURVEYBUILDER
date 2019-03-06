"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Questionnaire = /** @class */ (function (_super) {
    __extends(Questionnaire, _super);
    function Questionnaire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Questionnaire.prototype.render = function () {
        var questionnaire = this.props.questionnaire;
        return React.createElement("div", { className: "col-11 border border-secondary" },
            React.createElement("h2", null, questionnaire.title),
            React.createElement("h3", null, questionnaire.description),
            React.createElement("div", { className: "item-list row justify-items-center" }, questionnaire.items && questionnaire.items.length));
    };
    return Questionnaire;
}(React.Component));
exports.Questionnaire = Questionnaire;
exports.default = Questionnaire;
//# sourceMappingURL=Questionnaire.js.map