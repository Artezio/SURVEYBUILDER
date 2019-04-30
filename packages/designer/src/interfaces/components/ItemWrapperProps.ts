import * as Models from '@art-forms/models';


export interface ItemWrapperProps {
    item: Models.Item;
    className?: string;
    innerRef?: any;
    nestingLevel: string;
}

export default ItemWrapperProps;