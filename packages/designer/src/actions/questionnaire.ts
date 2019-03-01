import uuid from 'uuid/v1';
import { ADD_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE, CREATE_QUESTIONNAIRE, ADD_TEXT_ITEM } from '../constants/actions';
import { createActionCreator, createAction } from './helpers';
import * as Models from '@art-forms/models';


export const setTitle = createActionCreator<SET_TITLE, string | undefined>(SET_TITLE);
export const setDescription = createActionCreator<SET_DESCRIPTION, string | undefined>(SET_DESCRIPTION);

export const addItem = (item?: Omit<Models.Item, 'id' | 'type'>) => {
    return createAction<ADD_ITEM, Models.Item>(ADD_ITEM, {
        id: uuid(),
        type: "DISPLAY",
        ...item
    })
}

export const addTextItem = (item?: Omit<Models.TextItem, 'id' | 'type'>) => {
    return createAction<ADD_TEXT_ITEM, Models.TextItem>(ADD_TEXT_ITEM, {
        id: uuid(),
        type: 'QUESTION',
        ...item
    })
}

export const updateQuestionnaire = (questionnaire: Partial<Models.Questionnaire>) => {
    return createAction<UPDATE_QUESTIONNAIRE, Models.Questionnaire>(UPDATE_QUESTIONNAIRE, {
        ...questionnaire as Models.Questionnaire
    })
}

export const createQuestionnaire = (questionnaire?: Omit<Models.Questionnaire, 'id'>) => {
    return createAction<CREATE_QUESTIONNAIRE, Models.Questionnaire>(CREATE_QUESTIONNAIRE, {
        id: uuid(),
        ...questionnaire
    });
};