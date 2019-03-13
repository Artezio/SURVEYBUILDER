import * as Models from '@art-forms/models';
import { Action } from '../interfaces/Action';
import { ACTION, CREATE_QUESTIONNAIRE_RESPONSE, UPDATE_QUESTIONNAIRE_RESPONSE, ADD_QUESTIONNAIRE_RESPONSE_ITEM, UPDATE_QUESTIONNAIRE_RESPONSE_ITEM } from '../constants/actions';


const INITIAL_STATE: Models.QuestionnaireResponse | null = null;

export const questionnaireResponse = (state: Models.QuestionnaireResponse | null = INITIAL_STATE, action: Action<ACTION, any>): Models.QuestionnaireResponse | null => {

    const copyItems = () => {
        const newItems = (state && state.items) ? state.items.slice() : [];
        return newItems;
    }

    switch (action.type) {
        case CREATE_QUESTIONNAIRE_RESPONSE: {
            return {
                ...action.payload
            }
        }
        case UPDATE_QUESTIONNAIRE_RESPONSE: {
            return {
                ...state as Models.QuestionnaireResponse,
                ...action.payload
            }
        }
        case ADD_QUESTIONNAIRE_RESPONSE_ITEM: {
            const newItems = copyItems();
            newItems.push(action.payload);
            return {
                ...state as Models.QuestionnaireResponse,
                items: newItems
            }
        }
        case UPDATE_QUESTIONNAIRE_RESPONSE_ITEM: {
            let newItems = copyItems();
            newItems = newItems.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state as Models.QuestionnaireResponse,
                items: newItems
            }
        }
        default: {
            return state;
        }
    }
}