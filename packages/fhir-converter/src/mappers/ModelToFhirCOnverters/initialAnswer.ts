import * as Models from '@art-forms/models';

export const initialAnswerFromModelConverter = (initialAnswer: Models.IInitialAnswer<any>, questionType: Models.ITEM_TYPE): any => {
    let keyName;
    switch (questionType) {
        case Models.TEXT: {
            keyName = 'valueString';
            break;
        }
        case Models.STRING: {
            keyName = 'valueString';
            break;
        }
        case Models.DECIMAL: {
            keyName = 'valueDecimal';
            break;
        }
        case Models.BOOLEAN: {
            keyName = 'valueBoolean';
            break;
        }
        case Models.TIME: {
            keyName = 'valueTime';
            break;
        }
        case Models.DATE: {
            keyName = 'valueDate';
            break;
        }
        case Models.DATE_TIME: {
            keyName = 'valueDateTime';
            break;
        }
        case Models.ATTACHMENT: {
            keyName = 'valueAttachment';
            break;
        }
        default: {
            keyName = 'valueString';
        }
    }
    const newInitialAnswer: any = {
        id: initialAnswer.id,
        [keyName]: initialAnswer.value
    }
    return newInitialAnswer;
}

export default initialAnswerFromModelConverter;