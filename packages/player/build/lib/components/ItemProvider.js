"use strict";
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
var Models = require("@art-forms/models");
var Item_1 = require("./Item");
var TextItem_1 = require("./TextItem");
exports.ItemProvider = function (props) {
    var item = props.item;
    switch (item.type) {
        case Models.DISPLAY: {
            return React.createElement(Item_1.default, __assign({}, props));
        }
        case Models.QUESTION: {
            return React.createElement(TextItem_1.default, { item: item });
        }
        default: {
            return null;
        }
    }
};
exports.default = exports.ItemProvider;
//# sourceMappingURL=ItemProvider.js.map