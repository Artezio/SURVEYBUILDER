import uuid from 'uuid/v1';
import { ADD_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE, CREATE_QUESTIONNAIRE, ADD_TEXT_ITEM } from '../constants/actions';
import { createActionCreator, createAction } from './helpers';
import * as Models from '@art-forms/models';


export const setTitle = createActionCreator<SET_TITLE, string | undefined>(SET_TITLE);
export const setDescription = createActionCreator<SET_DESCRIPTION, string | undefined>(SET_DESCRIPTION);

export const addItem = (item?: Partial<Omit<Models.IItem, 'type'>>) => {
    return createAction<ADD_ITEM, Models.IItem>(ADD_ITEM, {
        id: uuid(),
        type: Models.DISPLAY,
        ...item
    })
}

export const addTextItem = (item?: Partial<Models.ITextItem>) => {
    return createAction<ADD_TEXT_ITEM, Models.ITextItem>(ADD_TEXT_ITEM, {
        id: uuid(),
        type: Models.QUESTION,
        ...item
    })
}

export const updateQuestionnaire = (questionnaire: Partial<Models.IQuestionnaire>) => {
    return createAction<UPDATE_QUESTIONNAIRE, Models.IQuestionnaire>(UPDATE_QUESTIONNAIRE, {
        ...questionnaire as Models.IQuestionnaire
    })
}

export const createQuestionnaire = (questionnaire?: Partial<Models.IQuestionnaire>) => {
    return createAction<CREATE_QUESTIONNAIRE, Models.Questionnaire>(CREATE_QUESTIONNAIRE, new Models.Questionnaire(questionnaire));
};