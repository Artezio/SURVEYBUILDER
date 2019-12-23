import * as Models from '@artezio/surveybuilder';
import { Action } from "../../interface/Action";
import { ACTIONS, STATUS_QUESTIONNAIRE_LOADING, STATUS_RESPONSE_LOADING, MODE, STATUS_SAVING_RESPONSE } from '../../constants/responseEditorPage';
import { ResponseEditorPageStore } from "../../interface/responseERditorPage/ResponseEditorPageStore";
import { questionnaireConverter, questionnaireResponseConverter } from '@artezio/surveybuilder';

const INITIAL_STATE: ResponseEditorPageStore = { status: {} };

export const responseEditorPage = (state: ResponseEditorPageStore = INITIAL_STATE, action: Action<ACTIONS, any>): ResponseEditorPageStore => {
    switch (action.type) {
        case ACTIONS.LOAD_QUESTIONNAIRE_FETCHING: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingQuestionnaire: STATUS_QUESTIONNAIRE_LOADING.fetching
                }
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_LOADED: {
            const questionnaire = questionnaireConverter.toModel(action.payload);
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingQuestionnaire: STATUS_QUESTIONNAIRE_LOADING.loaded,
                    savingResponse: undefined
                },
                questionnaire: questionnaire
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingQuestionnaire: STATUS_QUESTIONNAIRE_LOADING.error
                }
            }
        }
        case ACTIONS.LOAD_RESPONSE_FETCHING: {
            return {
                ...state,
                mode: MODE.updating,
                status: {
                    ...state.status,
                    loadingResponse: STATUS_RESPONSE_LOADING.fetching
                }
            }
        }
        case ACTIONS.LOAD_RESPONSE_LOADED: {
            const response = questionnaireResponseConverter.toModel(action.payload);
            const responseModel = state.questionnaire && new Models.QuestionnaireResponse(state.questionnaire, response);
            return {
                ...state,
                mode: MODE.updating,
                status: {
                    ...state.status,
                    loadingResponse: STATUS_RESPONSE_LOADING.loaded
                },
                response: action.payload,
                responseModel: responseModel
            }
        }
        case ACTIONS.LOAD_RESPONSE_ERROR: {
            return {
                ...state,
                mode: MODE.updating,
                status: {
                    ...state.status,
                    loadingResponse: STATUS_RESPONSE_LOADING.error
                }
            }
        }
        case ACTIONS.SAVE_RESPONSE_SAVING: {
            return {
                ...state,
                status: {
                    ...state.status,
                    savingResponse: STATUS_SAVING_RESPONSE.saving
                }
            }
        }
        case ACTIONS.SAVE_RESPONSE_SAVED: {
            return {
                ...state,
                status: {
                    savingResponse: STATUS_SAVING_RESPONSE.saved,
                }
            }
        }
        case ACTIONS.SAVE_RESPONSE_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    savingResponse: STATUS_SAVING_RESPONSE.error
                }
            }
        }
        case ACTIONS.CREATE_NEW_RESPONSE: {
            const responseModel = state.questionnaire && new Models.QuestionnaireResponse(state.questionnaire);
            return {
                ...state,
                mode: MODE.creating,
                status: {
                    ...state.status,
                    loadingResponse: STATUS_RESPONSE_LOADING.loaded
                },
                responseModel: responseModel
            }
        }
        default: return state;
    }
}