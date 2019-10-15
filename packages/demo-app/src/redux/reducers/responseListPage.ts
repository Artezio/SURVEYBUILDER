import { ResponseListPageStore } from "../../interface/reponseListPage/ResponseListPageStore";
import { Action } from "../../interface/Action";
import { ACTIONS, STATUS_RESPONSE_LIST_LOADING, STATUS_QUESTIONNAIRE_LOADING, STATUS_QUESTIONNAIRE_DELETING } from "../../constants/responseListPage";

const INITIAL_STATE: ResponseListPageStore = { status: {} };

export const responseListPage = (state: ResponseListPageStore = INITIAL_STATE, action: Action<ACTIONS, any>): ResponseListPageStore => {
    switch (action.type) {
        case ACTIONS.LOAD_RESPONSE_LIST_FETCHING: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingResponseList: STATUS_RESPONSE_LIST_LOADING.fetching
                }
            }
        }
        case ACTIONS.LOAD_RESPONSE_LIST_LOADED: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingResponseList: STATUS_RESPONSE_LIST_LOADING.loaded
                },
                responseList: action.payload
            }
        }
        case ACTIONS.LOAD_RESPONSE_LIST_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingResponseList: STATUS_RESPONSE_LIST_LOADING.error
                }
            }
        }
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
        case ACTIONS.DELETE_QUESTIONNAIRE_DELETING: {
            return {
                ...state,
                status: {
                    deletingQuestionnaire: STATUS_QUESTIONNAIRE_DELETING.deleting
                }
            }
        }
        case ACTIONS.DELETE_QUESTIONNAIRE_DELETED: {
            return {
                ...state,
                status: {
                    deletingQuestionnaire: STATUS_QUESTIONNAIRE_DELETING.deleted
                }
            }
        }
        case ACTIONS.DELETE_QUESTIONNAIRE_ERROR: {
            return {
                ...state,
                status: {
                    deletingQuestionnaire: STATUS_QUESTIONNAIRE_DELETING.error
                }
            }
        }
        default: return state;
    }
}