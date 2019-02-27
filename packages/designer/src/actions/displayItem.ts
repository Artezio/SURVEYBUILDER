import { createActionCreator, createAction } from "./helpers";
import { REMOVE_ITEM, UPDATE_DISPLAY_ITEM } from "../constants/questionnaireActions";
import { UpdateDisplayItem, RemoveItem } from "../interfaces/DisplayItemComponentProps";

export const removeItem: RemoveItem = createActionCreator(REMOVE_ITEM);

export const updateDisplayItem: UpdateDisplayItem = (textItem) => {
    return createAction(UPDATE_DISPLAY_ITEM, {
        ...textItem
    })
}