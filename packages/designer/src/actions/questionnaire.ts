import uuidv1 from 'uuid/v1';
import { ADD_DISPLAY_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE } from '../constants/questionnaireActions';
import { createActionCreator, createAction } from './helpers';
import { AddDisplayItem, UpdateQuestionnaire } from '../interfaces/QuestionnaireComponentProps';


export const setTitle = createActionCreator(SET_TITLE);
export const setDescription = createActionCreator(SET_DESCRIPTION);

export const addDisplayItem: AddDisplayItem = (item) => {
    return createAction(ADD_DISPLAY_ITEM, {
        id: uuidv1(),
        type: 2,
        ...item
    })
}

export const updateQuestionnaire: UpdateQuestionnaire = (questionnaire) => {
    return createAction(UPDATE_QUESTIONNAIRE, {
        ...questionnaire
    })
}