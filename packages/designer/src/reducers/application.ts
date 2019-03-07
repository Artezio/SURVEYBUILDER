import { DESIGN } from "../constants/application";
import { Action } from "../interfaces/Action";
import { ACTION, SET_APP_MODE } from "../constants/actions";
import { Application } from "../interfaces/Application";

const INITIAL_STATE: Application = { mode: DESIGN };

export const application = (state: Application = INITIAL_STATE, action: Action<ACTION, any>): Application => {
    switch (action.type) {
        case SET_APP_MODE: {
            return {
                ...state,
                mode: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default application;