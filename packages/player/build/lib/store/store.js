"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux = require("redux");
var questionnaire_1 = require("../reducers/questionnaire");
exports.createStore = function (initialState) { return redux.createStore(redux.combineReducers({
    questionnaire: questionnaire_1.questionnaire
}), initialState); };
//# sourceMappingURL=store.js.map