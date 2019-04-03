import { createActionCreator, createAction } from "./helpers";
import { REMOVE_ITEM, UPDATE_ITEM } from "../constants/actions";
import { UpdateItem, RemoveItem } from "../interfaces/actions/Item";


export const removeItem: RemoveItem = createActionCreator(REMOVE_ITEM);

export const updateItem: UpdateItem = (item) => {
    return createAction(UPDATE_ITEM, {
        ...item
    })
}