import uuidv1 from 'uuid/v1';
import { ADD_DISPLAY_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE, CREATE_QUESTIONNAIRE } from '../constants/actions';
import { createActionCreator, createAction } from './helpers';
import { AddDisplayItem, UpdateQuestionnaire, SetTitle, SetDescription } from '../interfaces/actions/QuestionnaireActions';
import { CreateQuestionnaire } from '../interfaces/actions/QuestionnaireActions';


export const setTitle: SetTitle = createActionCreator(SET_TITLE);
export const setDescription: SetDescription = createActionCreator(SET_DESCRIPTION);

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

export const createQuestionnaire: CreateQuestionnaire = (questionnaire) => {
    return createAction(CREATE_QUESTIONNAIRE, {
        id: uuidv1(),
        ...questionnaire
    });
};