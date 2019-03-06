"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux = require("redux");
var questionnaire_1 = require("../reducers/questionnaire");
var application_1 = require("../reducers/application");
exports.createStore = function (initialState) { return redux.createStore(redux.combineReducers({
    questionnaire: questionnaire_1.questionnaire,
    application: application_1.default
}), initialState); };
//# sourceMappingURL=store.js.map