import * as Models from '@artezio/models';

export const answerOptionFromModelConverter = (answerOption: Models.IAnswerOption): any => {
    const newAnswerOption: any = {
        id: answerOption.id,
        valueString: answerOption.value,
        initialSelected: answerOption.defaultSelected
    }
    return newAnswerOption;
}

export default answerOptionFromModelConverter;