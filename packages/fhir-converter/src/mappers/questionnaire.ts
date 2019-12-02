import FHIRQuestionnaire from "../interfaces/FHIRModels/Questionnaire";
import * as Models from '@surveybuilder/models';
import { questionnaireItemConverter } from "./questionnaireItem";
import { IQuestionnaireConverter } from '../interfaces/IQuestionnaireConverter';


export const questionnaireConverter: IQuestionnaireConverter = {
    toModel(questionnaire: FHIRQuestionnaire): Models.IQuestionnaire {
        const mappedQuestionnaire: Models.IQuestionnaire = {
            description: questionnaire.description,
            title: questionnaire.title,
            id: questionnaire.id,
            items: questionnaire.item && questionnaire.item.map(item => questionnaireItemConverter.toModel(item))
        }
        return mappedQuestionnaire;
    },
    fromModel(questionnaire: Models.IQuestionnaire): FHIRQuestionnaire {
        const newQuestionnaire: FHIRQuestionnaire = {
            resourceType: "Questionnaire",
            id: questionnaire.id,
            description: questionnaire.description,
            title: questionnaire.title,
            item: questionnaire.items && questionnaire.items.map(item => questionnaireItemConverter.fromModel(item))
        }
        return newQuestionnaire;
    }
}

export default questionnaireConverter;