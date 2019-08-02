import { Action } from "../../interface/Action";
import { ACTIONS, STATUS_QUESTIONNAIRE_LOADING, STATUS_RESPONSE_LOADING, MODE, STATUS_SAVING_RESPONSE } from '../../constants/responseEditorPage';
import { ResponseEditorPageStore } from "../../interface/responseERditorPage/ResponseEditorPageStore";

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
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingQuestionnaire: STATUS_QUESTIONNAIRE_LOADING.loaded
                },
                questionnaire: action.payload
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
                status: {
                    ...state.status,
                    loadingResponse: STATUS_RESPONSE_LOADING.fetching
                }
            }
        }
        case ACTIONS.LOAD_RESPONSE_LOADED: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingResponse: STATUS_RESPONSE_LOADING.loaded
                },
                response: action.payload
            }
        }
        case ACTIONS.LOAD_RESPONSE_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingResponse: STATUS_RESPONSE_LOADING.error
                }
            }
        }
        case ACTIONS.SET_MODE_TO_CREATING: {
            return {
                ...state,
                mode: MODE.creating
            }
        }
        case ACTIONS.SET_MODE_TO_UPDATING: {
            return {
                ...state,
                mode: MODE.updating
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
                    ...state.status,
                    savingResponse: STATUS_SAVING_RESPONSE.saved,
                },
                // mode: MODE.updating,
                // response: action.payload
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
        case ACTIONS.RESET_SAVING_STATUS: {
            return {
                ...state,
                status: {
                    ...state.status,
                    savingResponse: undefined
                }
            }
        }
        default: return state;
    }
}