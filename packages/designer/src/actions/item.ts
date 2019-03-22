import { createActionCreator, createAction } from "./helpers";
import { REMOVE_ITEM, UPDATE_ITEM } from "../constants/actions";
import * as Models from '@art-forms/models';


export const removeItem = createActionCreator<REMOVE_ITEM, Models.IItem>(REMOVE_ITEM);

export const updateItem = (item: Models.IItem) => {
    return createAction<UPDATE_ITEM, Models.IItem>(UPDATE_ITEM, {
        ...item as Models.IItem
    })
}