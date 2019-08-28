import * as Models from '@art-forms/models';

export const answerOptionFromModelConverter = (answerOption: Models.IAnswerOption): any => {
    const newAnswerOption: any = {
        id: answerOption.id,
        valueString: answerOption.value,
        initialSelected: answerOption.defaultSelected
    }
    return newAnswerOption;
}

export default answerOptionFromModelConverter;