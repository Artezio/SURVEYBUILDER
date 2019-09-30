import * as Models from '@art-forms/models';
import IWithFormApi from '../../IWithFormApi';


export interface QuestionItemProps<T> extends IWithFormApi {
    item: Models.IQuestionItem<T>
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    validationStatus?: string;
}

export default QuestionItemProps;