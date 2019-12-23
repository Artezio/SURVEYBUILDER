import { createAction } from 'redux-actions';
import { ACTIONS } from '../../constants/mainLayout';
import { Theme } from '../../interface/layouts/MainLayoutProps';

export const mainLayoutActions = {
    setCurrentBootstrapTheme: createAction<Theme>(ACTIONS.SET_CURRENT_BOOTSTRAP_THEME),
    setBootstrapThemes: createAction<Theme[]>(ACTIONS.SET_BOOTSTRAP_THEMES)
}