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
var informed_1 = require("informed");
var TextItem = /** @class */ (function (_super) {
    __extends(TextItem, _super);
    function TextItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextItem.prototype.render = function () {
        var item = this.props.item;
        return React.createElement("div", { className: "col-11 border border-info py-1" },
            React.createElement("p", null, item.text),
            React.createElement(informed_1.Form, null,
                React.createElement("div", { className: "form-group" },
                    React.createElement(informed_1.Text, { className: "form-control", field: "value", initialValue: item.initialValue }))));
    };
    return TextItem;
}(React.Component));
exports.TextItem = TextItem;
exports.default = TextItem;
//# sourceMappingURL=TextItem.js.map