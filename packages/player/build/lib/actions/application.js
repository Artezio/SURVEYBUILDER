"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var actions_1 = require("../constants/actions");
var application_1 = require("../constants/application");
exports.toggleAppModeToDesign = function () {
    return helpers_1.createAction(actions_1.SET_APP_MODE, application_1.DESIGN);
};
//# sourceMappingURL=application.js.map