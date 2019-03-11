import * as React from 'react';
import * as Models from '@art-forms/models';
import Item from './Item';
import TextItem from './TextItem';


export const ItemProvider = (props: any) => {
    const { item } = props;
    switch (item.type) {
        case Models.DISPLAY: {
            return <Item {...props} />
        }
        case Models.QUESTION: {
            return <TextItem {...props} />
        }
        default: {
            return null;
        }
    }
}

export default ItemProvider;