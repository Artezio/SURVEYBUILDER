import * as Models from '@art-forms/models';
import { ACTION, CREATE_QUESTIONNAIRE_RESPONSE } from '../constants/actions';
import { Action } from '../interfaces/Action';


const INITIAL_STATE: Models.IQuestionnaireResponse | null = null;

export const questionnaireResponse = (state: Models.IQuestionnaireResponse | null = INITIAL_STATE, action: Action<ACTION, any>): Models.IQuestionnaireResponse | null => {
    switch (action.type) {
        case CREATE_QUESTIONNAIRE_RESPONSE: {
            return new Models.QuestionnaireResponse(action.payload);
        }
        default: {
            return state;
        }
    }
}

export default questionnaireResponse;