import * as Models from '@art-forms/models';


export interface BottomItemCollectionMenuProps {
    item: Models.Item;
    selectTargetItem?: (item: Models.Item) => void;
    close?: () => void;
}

export default BottomItemCollectionMenuProps;