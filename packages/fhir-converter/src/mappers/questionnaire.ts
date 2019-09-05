import FHIRQuestionnaire from "../interfaces/FHIRModels/Questionnaire";
import * as Models from '@art-forms/models';
import { questionnaireItemConverter } from "./questionnaireItem";


export const questionnaireConverter = {
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