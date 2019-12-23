import { MainLayoutStore } from '../../interface/layouts/MainLayoutProps';
import { ACTIONS } from '../../constants/mainLayout';
import { Action } from '../../interface/Action';

const INITIAL_STATE: MainLayoutStore = {};

export const mainLayout = (state: MainLayoutStore = INITIAL_STATE, action: Action<ACTIONS, any>): MainLayoutStore => {
    switch (action.type) {
        case ACTIONS.SET_BOOTSTRAP_THEMES: {
            return {
                ...state,
                bootstrapThemes: action.payload
            }
        }
        case ACTIONS.SET_CURRENT_BOOTSTRAP_THEME: {
            return {
                ...state,
                currentTheme: action.payload
            }
        }
        default: return state;
    }
}