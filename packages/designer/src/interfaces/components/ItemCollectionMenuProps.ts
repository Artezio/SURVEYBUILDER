import * as Models from '@surveybuilder/models';


export interface ItemCollectionMenuProps {
    item: Models.GroupItem | Models.Questionnaire;
    selectTargetItem?: (item: Models.Item) => void;
}

export default ItemCollectionMenuProps;