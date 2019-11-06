import * as Models from '@art-forms/models';


export interface ItemCollectionMenuProps {
    item: Models.GroupItem | Models.Questionnaire;
    selectTargetItem?: (item: Models.Item) => void;
}

export default ItemCollectionMenuProps;