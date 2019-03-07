"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models = require("@art-forms/models");
var mockQuestionnaire = {
    id: 'mockQuestionnaire_1',
    title: 'Super Puper Title',
    description: 'useless description',
    items: [
        {
            id: 'mockItem_1',
            type: Models.DISPLAY,
            text: 'Mock text'
        },
        {
            id: 'mockTextItem_1',
            type: Models.QUESTION,
            text: 'How Are You?',
            initialValue: "I'm fine"
        }
    ]
};
var INITIAL_STATE = mockQuestionnaire;
exports.questionnaire = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    return state;
};
//# sourceMappingURL=questionnaire.js.map