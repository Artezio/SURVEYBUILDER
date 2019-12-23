import * as Models from '@artezio/surveybuilder';
import { ACTIONS, STATUS_LOADING, MODE, STATUS_SAVING } from '../../constants/questionnaireEditorPage';
import { QuestionnaireEditorPageStore } from '../../interface/questionnaireEditorPage/QuestionnaireEditorPageStore';
import { Action } from '../../interface/Action';
import { questionnaireConverter } from '@artezio/surveybuilder';

const INITIAL_STATE: QuestionnaireEditorPageStore = { status: {} };

export const questionnaireEditorPage = (state: QuestionnaireEditorPageStore = INITIAL_STATE, action: Action<ACTIONS, any>): QuestionnaireEditorPageStore => {
    switch (action.type) {
        case ACTIONS.LOAD_QUESTIONNAIRE_FETCHING: {
            return {
                ...state,
                mode: MODE.updating,
                status: {
                    ...state.status,
                    loading: STATUS_LOADING.fetching
                }
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_LOADED: {
            const questionnaire = questionnaireConverter.toModel(action.payload);
            const questionnaireModel = new Models.Questionnaire(questionnaire);
            return {
                ...state,
                mode: MODE.updating,
                status: {
                    ...state.status,
                    loading: STATUS_LOADING.loaded
                },
                questionnaire: action.payload,
                questionnaireModel: questionnaireModel
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: STATUS_LOADING.error
                },
            }
        }
        case ACTIONS.CREATE_NEW_QUESTIONNAIRE: {
            const questionnaireModel = new Models.Questionnaire();
            return {
                ...state,
                mode: MODE.creating,
                status: {
                    ...state.status,
                    loading: STATUS_LOADING.loaded
                },
                questionnaire: undefined,
                questionnaireModel: questionnaireModel
            }
        }
        case ACTIONS.SAVE_NEW_QUESTIONNAIRE_SAVING: {
            return {
                ...state,
                status: {
                    ...state.status,
                    saving: STATUS_SAVING.saving
                }
            }
        }
        case ACTIONS.SAVE_NEW_QUESTIONNAIRE_SAVED: {
            return {
                ...state,
                status: {
                    saving: STATUS_SAVING.saved,
                }
            }
        }
        case ACTIONS.SAVE_NEW_QUESTIONNAIRE_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    saving: STATUS_SAVING.error
                }
            }
        }
        default: return state;
    }
}

export default questionnaireEditorPage;