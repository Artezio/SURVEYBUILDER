import * as Models from '@art-forms/models';
import { ACTION } from '../constants/actions';
import { Action } from '../interfaces/Action';


const mockQuestionnaire: Models.Questionnaire = {
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
        } as Models.TextItem
    ]
}

const INITIAL_STATE: Models.Questionnaire | null = mockQuestionnaire;

export const questionnaire = (state: Models.Questionnaire | null = INITIAL_STATE, action: Action<ACTION, any>): Models.Questionnaire | null => {
    return state;
}