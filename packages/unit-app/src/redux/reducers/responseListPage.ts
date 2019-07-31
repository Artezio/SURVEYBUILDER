import { ResponseListPageStore } from "../../interface/reponseListPage/ResponseListPageStore";
import { Action } from "../../interface/Action";
import { ACTIONS, STATUS_LOADING } from "../../constants/responseListPage";

const INITIAL_STATE: ResponseListPageStore = { status: {} };

export const responseListPage = (state: ResponseListPageStore = INITIAL_STATE, action: Action<ACTIONS, any>): ResponseListPageStore => {
    switch (action.type) {
        case ACTIONS.LOAD_RESPONSE_LIST_FETCHING: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: STATUS_LOADING.fetching
                }
            }
        }
        case ACTIONS.LOAD_RESPONSE_LIST_LOADED: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: STATUS_LOADING.loaded
                },
                responseList: action.payload
            }
        }
        case ACTIONS.LOAD_RESPONSE_LIST_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: STATUS_LOADING.error
                }
            }
        }
        default: return state;
    }
}