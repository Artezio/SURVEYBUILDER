import { Questionnaire } from "@art-forms/models";
import { createAction } from "./helpers";
import { CREATE_QUESTIONNAIRE } from "../constants/questionnaireActions";
import { CreateQuestionnaire } from '../interfaces/LayoutComponentProps';
import uuidv1 from 'uuid/v1';

export const createQuestionnaire: CreateQuestionnaire = (questionnaire?: Omit<Questionnaire, 'id'>) => {
    return createAction(CREATE_QUESTIONNAIRE, {
        id: uuidv1(),
        ...questionnaire
    });
};