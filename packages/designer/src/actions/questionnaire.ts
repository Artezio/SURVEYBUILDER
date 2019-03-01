import uuid from 'uuid/v1';
import { ADD_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE, CREATE_QUESTIONNAIRE, ADD_TEXT_ITEM } from '../constants/actions';
import { createActionCreator, createAction } from './helpers';
import { AddItem, UpdateQuestionnaire, SetTitle, SetDescription, AddTextItem } from '../interfaces/actions/Questionnaire';
import { CreateQuestionnaire } from '../interfaces/actions/Questionnaire';


export const setTitle: SetTitle = createActionCreator(SET_TITLE);
export const setDescription: SetDescription = createActionCreator(SET_DESCRIPTION);

export const addItem: AddItem = (item) => {
    return createAction(ADD_ITEM, {
        id: uuid(),
        type: 2,
        ...item
    })
}

export const addTextItem: AddTextItem = (item) => {
    return createAction(ADD_TEXT_ITEM, {
        id: uuid(),
        type: 3,
        ...item
    })
}

export const updateQuestionnaire: UpdateQuestionnaire = (questionnaire) => {
    return createAction(UPDATE_QUESTIONNAIRE, {
        ...questionnaire
    })
}

export const createQuestionnaire: CreateQuestionnaire = (questionnaire) => {
    return createAction(CREATE_QUESTIONNAIRE, {
        id: uuid(),
        ...questionnaire
    });
};