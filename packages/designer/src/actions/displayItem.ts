import { createActionCreator, createAction } from "./helpers";
import { REMOVE_ITEM, UPDATE_DISPLAY_ITEM } from "../constants/questionnaireActions";
import { updateDisplayItem as updateDisplayItemAction, removeItem as removeItemAction } from "../interfaces/DisplayItemComponentProps";

export const removeItem: removeItemAction = createActionCreator(REMOVE_ITEM);

export const updateDisplayItem: updateDisplayItemAction = (textItem) => {
    return createAction(UPDATE_DISPLAY_ITEM, {
        ...textItem
    })
}