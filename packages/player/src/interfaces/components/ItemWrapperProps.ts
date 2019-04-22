import * as Models from '@art-forms/models';


export interface QuestionItemProps {
    item: Models.QuestionItem<any>;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    className?: string;
    answer: Models.Answer<any>;
    answerIndex: number;
}

export default QuestionItemProps;