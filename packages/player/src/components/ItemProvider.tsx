import * as React from 'react';
import * as Models from '@art-forms/models';
import Item from './Item';
import TextItem from './TextItem';
import { ItemProviderProps } from '../interfaces/componentProps/ItemProvider';


export const ItemProvider = (props: ItemProviderProps) => {
    const { item } = props;
    switch (item.type) {
        case Models.DISPLAY: {
            return <Item {...props} />
        }
        case Models.QUESTION: {
            return <TextItem item={item as Models.TextItem} />
        }
        default: {
            return null;
        }
    }
}

export default ItemProvider;