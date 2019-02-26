import { ADD_TEXT_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE } from '../constants/actions';
import { TextItem, Questionnaire } from "@art-forms/models";
import { createActionCreator, createAction } from './helpers';
import uuidv1 from 'uuid/v1';
import { addTextItem as addTextItemAction, updateQuestionnaire as updateQuestionnaireAction } from '../interfaces/QuestionnaireComponentProps';
import questionnaire from '../reducers/questionnaire';


export const setTitle = createActionCreator<SET_TITLE, string | undefined>(SET_TITLE);
export const setDescription = createActionCreator<SET_DESCRIPTION, string | undefined>(SET_DESCRIPTION);

export const addTextItem: addTextItemAction = (textItem) => {
    return createAction<ADD_TEXT_ITEM, TextItem>(ADD_TEXT_ITEM, {
        id: uuidv1(),
        type: 2,
        ...textItem
    })
}

export const updateQuestionnaire: updateQuestionnaireAction = (questionnaire) => {
    return createAction<UPDATE_QUESTIONNAIRE, Partial<Questionnaire>>(UPDATE_QUESTIONNAIRE, {
        ...questionnaire
    })
}