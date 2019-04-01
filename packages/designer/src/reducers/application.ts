import { DESIGN } from "../constants/application";
import { Action } from "../interfaces/Action";
import { ACTION, SET_APP_MODE, CREATE_QUESTIONNAIRE_WITH_EMPTY_RESPONSE } from "../constants/actions";
import { Application } from "../interfaces/Application";
import * as Models from '@art-forms/models';


const INITIAL_STATE: Application = { mode: DESIGN };

export const application = (state: Application = INITIAL_STATE, action: Action<ACTION, any>): Application => {
    switch (action.type) {
        case SET_APP_MODE: {
            return {
                ...state,
                mode: action.payload
            }
        }
        case CREATE_QUESTIONNAIRE_WITH_EMPTY_RESPONSE: {
            const questionnaire = new Models.Questionnaire();
            return {
                ...state,
                questionnaire,
                questionnaireResponse: new Models.QuestionnaireResponse({ questionnaireId: questionnaire.id })
            }
        }
        default: {
            return state;
        }
    }
}

export default application;