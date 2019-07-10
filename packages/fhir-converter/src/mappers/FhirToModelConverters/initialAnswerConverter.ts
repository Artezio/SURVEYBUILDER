import * as Models from '@art-forms/models';

export const mapInitialAnswerToModel = (initialAnswer: any): Models.IInitialAnswer<any> => {
    const newInitialAnswer: Models.IInitialAnswer<any> = {
        id: initialAnswer.id,
        value: initialAnswer.valueBoolean || initialAnswer.valueDecimal || initialAnswer.valueInteger || initialAnswer.valueDate || initialAnswer.valueDateTime || initialAnswer.valueTime
    }
    return newInitialAnswer;
}

export default mapInitialAnswerToModel;