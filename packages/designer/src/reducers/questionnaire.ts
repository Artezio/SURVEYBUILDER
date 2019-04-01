import * as Models from '@art-forms/models';
import { Action } from '../interfaces/Action';
import { CREATE_QUESTIONNAIRE, ACTION } from '../constants/actions';


const INITIAL_STATE: Models.IQuestionnaire | null = null;

export const questionnaire = (state: Models.IQuestionnaire | null = INITIAL_STATE, action: Action<ACTION, any>): Models.IQuestionnaire | null => {
    switch (action.type) {
        case CREATE_QUESTIONNAIRE: {
            return new Models.Questionnaire();
        }
        default: {
            return state
        }
    }
}

export default questionnaire;