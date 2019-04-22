import * as Models from '@art-forms/models';


export interface CollectionWrapperProps {
    item: Models.QuestionItem<any>;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    className?: string;
}

export default CollectionWrapperProps;