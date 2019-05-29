import * as Models from '@art-forms/models';


export interface QuestionItemWrapperProps {
    item: Models.Item;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    className?: string;
}

export default QuestionItemWrapperProps;