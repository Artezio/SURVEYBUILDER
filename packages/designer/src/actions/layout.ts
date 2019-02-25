import { Questionnaire } from "@art-forms/models";
import { createAction } from "./helpers";
import { CREATE_QUESTIONNAIRE } from "../constants/actions";
import { createQuestionnaire as createQuestionnaireAction } from '../interfaces/LayoutComponentProps';
import uuidv1 from 'uuid/v1';

export const createQuestionnaire: createQuestionnaireAction = (questionnaire?: Omit<Questionnaire, 'id'>) => {
    return createAction<CREATE_QUESTIONNAIRE, Questionnaire>(CREATE_QUESTIONNAIRE, {
        id: uuidv1(),
        ...questionnaire
    });
};