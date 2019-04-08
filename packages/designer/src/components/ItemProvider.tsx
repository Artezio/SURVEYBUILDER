import * as React from 'react';
import Item from './Item';
import * as Models from '@art-forms/models';
import GroupItem from '../components/GroupItem';
import TextItem from './questionItems/TextItem';
import StringItem from './questionItems/StringItem';
import DecimalItem from './questionItems/DecimalItem';


export const ItemProvider = (props: any) => {
    const { item } = props;
    switch ((item as Models.IItem).type) {
        case Models.DISPLAY: {
            return <Item {...props} />
        }
        case Models.GROUP: {
            return <GroupItem {...props} />
        }
        case Models.TEXT: {
            return <TextItem {...props} />
        }
        case Models.STRING: {
            return <StringItem {...props} />
        }
        case Models.DECIMAL: {
            return <DecimalItem {...props} />
        }
        default: {
            return null;
        }
    }
}

export default ItemProvider;