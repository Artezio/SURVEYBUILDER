import * as Models from '@surveybuilder/models';

export const initialAnswerToModelConverter = (initialAnswer: any): Models.IInitialAnswer<any> => {
    const newInitialAnswer: Models.IInitialAnswer<any> = {
        id: initialAnswer.id,
        value: initialAnswer.valueBoolean || initialAnswer.valueDecimal || initialAnswer.valueInteger || initialAnswer.valueDate || initialAnswer.valueDateTime || initialAnswer.valueTime || initialAnswer.valueString
    }
    return newInitialAnswer;
}

export default initialAnswerToModelConverter;