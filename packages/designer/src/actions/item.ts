import { createActionCreator, createAction } from "./helpers";
import { REMOVE_ITEM, UPDATE_ITEM } from "../constants/actions";
import * as Models from '@art-forms/models';


export const removeItem = createActionCreator<REMOVE_ITEM, Models.Item>(REMOVE_ITEM);

export const updateItem = (item: Models.Item) => {
    return createAction<UPDATE_ITEM, Models.Item>(UPDATE_ITEM, {
        ...item as Models.Item
    })
}