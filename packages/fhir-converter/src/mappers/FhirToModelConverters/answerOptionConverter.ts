import * as Models from '@art-forms/models';

export const mapAnswerOptionToModel = (answerOption: any): Models.IAnswerOption => {
    const newAnswerOption: Models.IAnswerOption = {
        id: answerOption.id,
        value: answerOption.valueInteger || answerOption.valueDate || answerOption.valueTime || answerOption.valueString
    }
    return newAnswerOption;
}

export default mapAnswerOptionToModel;