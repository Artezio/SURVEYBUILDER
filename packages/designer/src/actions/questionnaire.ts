import { ADD_TEXT_ITEM, SET_TITLE, SET_DESCRIPTION } from '../constants/actions';
import { TextItem } from "@art-forms/models";
import { createActionCreator, createAction } from './helpers';
import uuidv1 from 'uuid/v1';
import { addTextItem as addTextItemAction } from '../interfaces/QuestionnaireComponentProps';


export const setTitle = createActionCreator<SET_TITLE, string>(SET_TITLE);
export const setDescription = createActionCreator<SET_DESCRIPTION, string>(SET_DESCRIPTION);

export const addTextItem: addTextItemAction = (textItem) => {
    return createAction<ADD_TEXT_ITEM, TextItem>(ADD_TEXT_ITEM, {
        id: uuidv1(),
        type: 2,
        ...textItem
    })
}