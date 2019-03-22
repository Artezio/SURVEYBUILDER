import { createAction } from "./helpers";
import { UPDATE_TEXT_ITEM } from "../constants/actions";
import * as Models from '@art-forms/models';


export const updateTextItem = (item: Models.ITextItem) => {
    return createAction(UPDATE_TEXT_ITEM, {
        ...item
    })
}