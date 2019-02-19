import { DisplayItem } from "../../../models/src";
import { Questionnaire } from '..//..//..//models'

const INITIAL_STATE: QuestionnaireState = {
    title: '',
    description: '',
    itemList: [],
    questionnaire: null
};
export interface QuestionnaireState {
    title?: string;
    description?: string;
    itemList: DisplayItem[];
    questionnaire: Questionnaire | null;
}
export enum QUESTIONNAIRE_ACTION_TYPES {
    SET_TITLE,
    SET_DESCRIPTION,
    ADD_ITEM,
    CREATE_QUESTIONNAIRE
}
export const questionnaireReducer = (state: QuestionnaireState = INITIAL_STATE, action: { type: QUESTIONNAIRE_ACTION_TYPES, payload: any }) => {
    switch (action.type) {
        case QUESTIONNAIRE_ACTION_TYPES.SET_DESCRIPTION: {
            return {
                ...state,
                description: action.payload
            }
        }
        case QUESTIONNAIRE_ACTION_TYPES.SET_TITLE: {
            return {
                ...state,
                title: action.payload
            }
        }
        case QUESTIONNAIRE_ACTION_TYPES.ADD_ITEM: {
            const newItemList = state.itemList.slice();
            newItemList.push(action.payload);
            console.log('reducer state', newItemList, state)
            return {
                ...state,
                itemList: newItemList
            }
        }
        case QUESTIONNAIRE_ACTION_TYPES.CREATE_QUESTIONNAIRE: {
            return {
                ...state,
                questionnaire: action.payload
            }
        }
        default: return state;
    }
}

export default questionnaireReducer;