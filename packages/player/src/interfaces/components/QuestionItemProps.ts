import * as Models from '@art-forms/models';


export interface QuestionItemProps<T> {
    item: Models.IQuestionItem<T>
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    className?: string;
}

export default QuestionItemProps;