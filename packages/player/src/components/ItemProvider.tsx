import * as React from 'react';
import * as Models from '@art-forms/models';
import Item from './Item';
import GroupItem from './GroupItem';
import CollectionWrapper from './CollectionWrapper';


export const ItemProvider = (props: any) => {
    const { item } = props;
    switch (item.type) {
        case Models.DISPLAY: {
            return <Item {...props} />
        }
        case Models.GROUP: {
            return <GroupItem {...props} />
        }
        default: {
            return <CollectionWrapper {...props} />
        }
    }
}

export default ItemProvider;