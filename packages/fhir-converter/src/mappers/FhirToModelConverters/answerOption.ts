import * as Models from '@artezio/models';

export const answerOptionToModelConverter = (answerOption: any): Models.IAnswerOption => {
    const newAnswerOption: Models.IAnswerOption = {
        id: answerOption.id,
        value: answerOption.valueInteger || answerOption.valueDate || answerOption.valueTime || answerOption.valueString,
        defaultSelected: answerOption.initialSelected
    }
    return newAnswerOption;
}

export default answerOptionToModelConverter;