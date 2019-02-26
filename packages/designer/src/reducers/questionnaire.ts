import { Questionnaire } from '@art-forms/models';
import { Action } from '../interfaces/Action';
import { CREATE_QUESTIONNAIRE, ADD_TEXT_ITEM, QUESTIONNAIRE_ACTION, SET_DESCRIPTION, SET_TITLE, REMOVE_ITEM, UPDATE_QUESTIONNAIRE, UPDATE_TEXT_ITEM } from '../constants/questionnaireActions';

const INITIAL_STATE: Questionnaire | null = null;

export const questionnaire = (state: Questionnaire | null = INITIAL_STATE, action: Action<QUESTIONNAIRE_ACTION, any>): Questionnaire | null => {
    switch (action.type) {
        case CREATE_QUESTIONNAIRE: {
            return {
                ...action.payload
            }
        }
        case SET_DESCRIPTION: {
            return {
                ...state as Questionnaire,
                description: action.payload
            }
        }
        case SET_TITLE: {
            return {
                ...state as Questionnaire,
                title: action.payload
            }
        }
        case ADD_TEXT_ITEM: {
            const newItems = (state && state.items) ? state.items.slice() : [];
            newItems.push(action.payload);
            return {
                ...state as Questionnaire,
                items: newItems
            }
        }
        case REMOVE_ITEM: {
            const newItems = (state && state.items) ? state.items.filter(item => item !== action.payload) : [];
            return {
                ...state as Questionnaire,
                items: newItems
            }
        }
        case UPDATE_QUESTIONNAIRE: {
            return {
                ...state as Questionnaire,
                ...action.payload
            }
        }
        case UPDATE_TEXT_ITEM: {
            let newItems = (state && state.items) ? state.items.slice() : [];
            newItems = newItems.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state as Questionnaire,
                items: newItems
            }
        }
        default: {
            return state
        }
    }
}

export default questionnaire;