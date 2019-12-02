import * as Models from '@surveybuilder/models';


export interface BottomItemCollectionMenuProps {
    item: Models.Item;
    selectTargetItem?: (item: Models.Item) => void;
    close?: () => void;
}

export default BottomItemCollectionMenuProps;