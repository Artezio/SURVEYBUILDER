import * as Models from '@art-forms/models';
import questionnaireResponseItemConverter from '../questionnaireResponseItem';

export const answerToModelConverter = (answer: any): Models.IAnswer<any> => {
    const newAnswer: Models.IAnswer<any> = {
        id: answer.id,
        items: answer.item && answer.item.map(item => questionnaireResponseItemConverter.toModel(item)),
        value: answer.valueBoolean || answer.valueDecimal || answer.valueInteger || answer.valueDate || answer.valueDateTime || answer.valueTime || answer.valueString
    }

    return newAnswer;
}

export default answerToModelConverter;