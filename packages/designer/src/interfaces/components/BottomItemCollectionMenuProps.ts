import * as Models from '@artezio/models';


export interface BottomItemCollectionMenuProps {
    item: Models.Item;
    selectTargetItem?: (item: Models.Item) => void;
    close?: () => void;
}

export default BottomItemCollectionMenuProps;