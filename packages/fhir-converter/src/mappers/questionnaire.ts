import FHIRQuestionnaire from "../interfaces/FHIRModels/Questionnaire";
import * as Models from '@art-forms/models';
import { itemMapper } from "./item";


export const questionnaireMapper = {
    toModel(questionnaire: FHIRQuestionnaire): Models.IQuestionnaire {
        const mappedQuestionnaire: Models.IQuestionnaire = {
            description: questionnaire.description,
            title: questionnaire.title,
            id: questionnaire.id,
            items: questionnaire.item && questionnaire.item.map(item => itemMapper.toModel(item))
        }
        return mappedQuestionnaire;
    },
    // fromModel(questionnaire: Models.IQuestionnaire): FHIRQuestionnaire {

    // }
}

export default questionnaireMapper;