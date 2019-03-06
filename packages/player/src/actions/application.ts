import { createAction } from "./helpers";
import { SET_APP_MODE } from "../constants/actions";
import { DESIGN } from "../constants/application";


export const toggleAppModeToDesign = () => {
    return createAction<SET_APP_MODE, DESIGN>(SET_APP_MODE, DESIGN);
};