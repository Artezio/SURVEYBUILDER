import * as Models from '@art-forms/models';
import { ACTION } from '../constants/actions';
import { Action } from '../interfaces/Action';


const mockQuestionnaire: Models.Questionnaire = {
    id: 'mockQuestionnaire123',
    title: 'Super Puper Title',
    description: 'useless description',
    items: [
        {
            id: 'mockItem',
            type: Models.DISPLAY,
            text: 'Mock text'
        }
    ]
}
const INITIAL_STATE: Models.Questionnaire | null = mockQuestionnaire;

export const questionnaire = (state: Models.Questionnaire | null = INITIAL_STATE, action: Action<ACTION, any>): Models.Questionnaire | null => {
    return state;
}