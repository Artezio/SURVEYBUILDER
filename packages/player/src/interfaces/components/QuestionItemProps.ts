import * as Models from '@art-forms/models';


export interface QuestionItemProps<T> {
    item: Models.IQuestionItem<T>
    answer: Models.Answer<T>;
}

export default QuestionItemProps;