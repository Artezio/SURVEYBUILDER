import React from 'react';
import Item from './Item';
import { TextItem } from './TextItem';
//import { DISPLAY, QUESTION } from '@art-forms/models';

export const ItemProvider = (props: any) => {
    const { item } = props;
    switch (item.type) {
        case 'DISPLAY': {
            return <Item {...props} />
        }
        case 'QUESTION': {
            return <TextItem {...props} />
        }
        default: {
            return null;
        }
    }
}

export default ItemProvider;