import { TextItem, Questionnaire } from '@art-forms/models';
import { Action } from '../interfaces/actionTypes';
import { QUESTIONNAIRE_ACTIONS } from '../constants/actions';

const INITIAL_STATE: { questionnaire?: Questionnaire | undefined } = { questionnaire: undefined };

type QUESTIONNAIRE_PAYLOADS = string | TextItem | Questionnaire;

export const questionnaire = (state: { questionnaire?: Questionnaire } = INITIAL_STATE, action: Action<QUESTIONNAIRE_ACTIONS, QUESTIONNAIRE_PAYLOADS>): { questionnaire?: Questionnaire } => {
    switch (action.type) {
        case "CREATE_QUESTIONNAIRE": {
            return {
                questionnaire: action.payload as Questionnaire
            }
        }
        case "ADD_TEXT_ITEM": {
            const newItems = (state.questionnaire && state.questionnaire.items) ? state.questionnaire.items.slice() : [];
            newItems.push(action.payload as TextItem);
            return {
                questionnaire: { ...state.questionnaire, items: newItems } as Questionnaire
            }
        }
        default: return state;
    }
};

export default questionnaire;