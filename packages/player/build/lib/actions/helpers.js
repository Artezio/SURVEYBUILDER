"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAction(type, payload) {
    return {
        type: type,
        payload: payload
    };
}
exports.createAction = createAction;
function createActionCreator(type) {
    return function (payload) { return createAction(type, payload); };
}
exports.createActionCreator = createActionCreator;
//# sourceMappingURL=helpers.js.map