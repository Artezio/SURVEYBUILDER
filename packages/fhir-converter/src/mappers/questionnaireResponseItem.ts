import * as Models from '@artezio/models';
import ResponseItem from '../interfaces/FHIRModels/ResponseItem';
import answerToModelConverter from './FhirToModelConverters/answer';
import answerFromModelConverter from './ModelToFhirCOnverters/answer';

export const questionnaireResponseItemConverter = {
    toModel(item: ResponseItem): Models.IQuestionnaireResponseItem {
        const newQuestionnaireResponseItem: Models.IQuestionnaireResponseItem = {
            id: item.id,
            text: item.text,
            questionId: item.linkId,
            items: item.item && item.item.map(itm => questionnaireResponseItemConverter.toModel(itm)),
            answers: item.answer && item.answer.map(answer => answerToModelConverter(answer))
        }
        return newQuestionnaireResponseItem;
    },
    fromModel(item: Models.IQuestionnaireResponseItem): ResponseItem {
        const newQuestionnaireResponseItem: ResponseItem = {
            id: item.id,
            linkId: item.questionId,
            text: item.text,
            answer: item.answers && item.answers.map(answer => answerFromModelConverter(answer)),
            item: item.items && item.items.map(item => questionnaireResponseItemConverter.fromModel(item))
        }
        return newQuestionnaireResponseItem;
    }
}

export default questionnaireResponseItemConverter;