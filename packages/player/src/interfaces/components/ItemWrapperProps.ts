import * as Models from '@art-forms/models';


export interface ItemWrapperProps {
    item: Models.QuestionItem<any>;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    className?: string;
}

export default ItemWrapperProps;