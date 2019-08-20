import * as Models from '@art-forms/models';
import { ACTIONS, STATUS_LOADING, MODE, STATUS_UPDATING, STATUS_SAVING } from '../../constants/questionnaireEditorPage';
import { QuestionnaireEditorStore } from '../../interface/questionnaireEditorPage/QuestionnaireEditorStore';
import { Action } from '../../interface/Action';
import { questionnaireMapper } from '@art-forms/fhir-converter';

const INITIAL_STATE: QuestionnaireEditorStore = { status: {} };

export const questionnaireEditorPage = (state: QuestionnaireEditorStore = INITIAL_STATE, action: Action<ACTIONS, any>): QuestionnaireEditorStore => {
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
            const questionnaire = questionnaireMapper.toModel(action.payload);
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
        case ACTIONS.UPDATE_QUESTIONNAIRE_UPDATING: {
            return {
                ...state,
                status: {
                    ...state.status,
                    updating: STATUS_UPDATING.updating
                }
            }
        }
        case ACTIONS.UPDATE_QUESTIONNAIRE_UPDATED: {
            return {
                ...state,
                status: {
                    updating: STATUS_UPDATING.updated
                }
            }
        }
        case ACTIONS.UPDATE_QUESTIONNAIRE_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    updating: STATUS_UPDATING.error
                }
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
            const questionnaire = questionnaireMapper.toModel(action.payload);
            const questionnaireModel = new Models.Questionnaire(questionnaire);
            return {
                ...state,
                status: {
                    saving: STATUS_SAVING.saved,
                },
                questionnaireModel: questionnaireModel
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