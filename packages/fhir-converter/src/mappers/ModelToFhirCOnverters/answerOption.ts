import * as Models from '@surveybuilder/models';

export const answerOptionFromModelConverter = (answerOption: Models.IAnswerOption): any => {
    const newAnswerOption: any = {
        id: answerOption.id,
        valueString: answerOption.value,
        initialSelected: answerOption.defaultSelected
    }
    return newAnswerOption;
}

export default answerOptionFromModelConverter;