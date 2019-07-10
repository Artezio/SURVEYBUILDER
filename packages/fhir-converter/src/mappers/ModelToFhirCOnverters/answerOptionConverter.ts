import * as Models from '@art-forms/models';

export const mapAnswerOptionFromModel = (answerOption: Models.IAnswerOption): any => {
    let keyName;
    // switch(typeof answerOption.value) {
    //     case 
    // }
    const newAnswerOption: any = {
        id: answerOption.id,
        // value: answerOption.valueInteger || answerOption.valueDate || answerOption.valueTime || answerOption.valueString
    }
    return newAnswerOption;
}

// export default mapAnswerOptionToModel;