import * as Models from '@art-forms/models';


export interface QuestionItemWrapperProps {
    item: Models.QuestionItem<any>;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    className?: string;
}

export default QuestionItemWrapperProps;