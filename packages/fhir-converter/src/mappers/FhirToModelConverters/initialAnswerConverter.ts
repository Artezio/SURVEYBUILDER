import * as Models from '@art-forms/models';
import FHIRInitialAnswer from '../../interfaces/FHIRModels/InitialAnswer';

export const mapInitialAnswerToModel = (initialAnswer: FHIRInitialAnswer): Models.IInitialAnswer<any> => {
    const newInitialAnswer: Models.IInitialAnswer<any> = {
        id: initialAnswer.id,
        value: initialAnswer.value
    }
    return newInitialAnswer;
}

export default mapInitialAnswerToModel;