import * as Models from '@art-forms/models';
import FHIRInitialAnswer from '../../interfaces/FHIRModels/InitialAnswer';

export const mapInitialAnswerFromModel = (initialAnswer: Models.IInitialAnswer<any>): FHIRInitialAnswer => {
    const newInitialAnswer: FHIRInitialAnswer = {
        id: initialAnswer.id,
        value: initialAnswer.value
    }
    return newInitialAnswer;
}

export default mapInitialAnswerFromModel;