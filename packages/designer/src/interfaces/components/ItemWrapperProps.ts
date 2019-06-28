import * as Models from '@art-forms/models';


export interface ItemWrapperProps {
    item: Models.Item;
    className?: string;
    nestingLevel: string;
    subscribe?: () => void;
    choseEnableWhenItem: (item: Models.Item) => void;
}

export default ItemWrapperProps;