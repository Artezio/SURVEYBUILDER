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
var application_1 = require("../constants/application");
var actions_1 = require("../constants/actions");
var INITIAL_STATE = { mode: application_1.PLAY };
exports.application = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case actions_1.SET_APP_MODE: {
            return __assign({}, state, { mode: action.payload });
        }
        default: {
            return state;
        }
    }
};
exports.default = exports.application;
//# sourceMappingURL=application.js.map