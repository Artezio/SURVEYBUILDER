import uuidv1 from 'uuid/v1';
import { ADD_DISPLAY_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE, REMOVE_ITEM } from '../constants/questionnaireActions';
import { createActionCreator, createAction } from './helpers';
import { addDisplayItem as addDisplayItemAction, updateQuestionnaire as updateQuestionnaireAction } from '../interfaces/QuestionnaireComponentProps';


export const setTitle = createActionCreator(SET_TITLE);
export const setDescription = createActionCreator(SET_DESCRIPTION);

export const addTextItem: addDisplayItemAction = (textItem) => {
    return createAction(ADD_DISPLAY_ITEM, {
        id: uuidv1(),
        type: 2,
        ...textItem
    })
}

export const updateQuestionnaire: updateQuestionnaireAction = (questionnaire) => {
    return createAction(UPDATE_QUESTIONNAIRE, {
        ...questionnaire
    })
}