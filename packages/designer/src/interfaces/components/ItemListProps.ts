import * as Models from '@art-forms/models';


export interface ItemListProps {
    nestingLevel: string;
    className?: string;
    container: Models.Questionnaire | Models.GroupItem;
}

export default ItemListProps;