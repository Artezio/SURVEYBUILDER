import { createActionCreator, createAction } from "./helpers";
import { SET_APP_MODE } from "../constants/actions";
import { APP_MODE, DESIGN, PLAY } from "../constants/application";


export const setAppMode = createActionCreator<SET_APP_MODE, APP_MODE>(SET_APP_MODE);

export const toggleAppModeToPlay = () => {
    return createAction<SET_APP_MODE, APP_MODE>(SET_APP_MODE, PLAY);
};

export const toggleAppModeToDesign = () => {
    return createAction<SET_APP_MODE, APP_MODE>(SET_APP_MODE, DESIGN);
};