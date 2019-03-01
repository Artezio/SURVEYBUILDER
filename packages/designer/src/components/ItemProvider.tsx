import React from 'react';
import Item from './Item';
import { TextItem } from './TextItem';
import { QUESTIONNAIRE_ITEM_TYPES } from '@art-forms/models';

// console.log(QUESTIONNAIRE_ITEM_TYPES)

export const ItemProvider = (props: any) => {
    const { item } = props;
    switch (item.type) {
        case 2: {
            return <Item {...props} />
        }
        case 3: {
            return <TextItem {...props} />
        }
        default: {
            return null;
        }
    }
}

export default ItemProvider;