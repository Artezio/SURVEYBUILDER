import * as Models from '@art-forms/models';
import { Action } from '../interfaces/actions/Action';
import { CREATE_QUESTIONNAIRE, ADD_ITEM, ACTION, SET_DESCRIPTION, SET_TITLE, REMOVE_ITEM, UPDATE_QUESTIONNAIRE, UPDATE_ITEM } from '../constants/actions';


const INITIAL_STATE: Models.Questionnaire | null = null;

export const questionnaire = (state: Models.Questionnaire | null = INITIAL_STATE, action: Action<ACTION, any>): Models.Questionnaire | null => {
    switch (action.type) {
        case CREATE_QUESTIONNAIRE: {
            return {
                ...action.payload
            }
        }
        case SET_DESCRIPTION: {
            return {
                ...state as Models.Questionnaire,
                description: action.payload
            }
        }
        case SET_TITLE: {
            return {
                ...state as Models.Questionnaire,
                title: action.payload
            }
        }
        case ADD_ITEM: {
            const newItems = (state && state.items) ? state.items.slice() : [];
            newItems.push(action.payload);
            return {
                ...state as Models.Questionnaire,
                items: newItems
            }
        }
        case REMOVE_ITEM: {
            const newItems = (state && state.items) ? state.items.filter(item => item !== action.payload) : [];
            return {
                ...state as Models.Questionnaire,
                items: newItems
            }
        }
        case UPDATE_QUESTIONNAIRE: {
            return {
                ...state as Models.Questionnaire,
                ...action.payload
            }
        }
        case UPDATE_ITEM: {
            let newItems = (state && state.items) ? state.items.slice() : [];
            newItems = newItems.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state as Models.Questionnaire,
                items: newItems
            }
        }
        default: {
            return state
        }
    }
}

export default questionnaire;