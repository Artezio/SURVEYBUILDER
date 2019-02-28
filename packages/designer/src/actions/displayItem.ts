import { createActionCreator, createAction } from "./helpers";
import { REMOVE_ITEM, UPDATE_DISPLAY_ITEM } from "../constants/actions";
import { UpdateDisplayItem, RemoveItemAction } from "../interfaces/actions/DisplayItem";


export const removeItem: RemoveItemAction = createActionCreator(REMOVE_ITEM);

export const updateDisplayItem: UpdateDisplayItem = (item) => {
    return createAction(UPDATE_DISPLAY_ITEM, {
        ...item
    })
}