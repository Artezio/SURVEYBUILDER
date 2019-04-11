import * as React from 'react';
import * as Models from '@art-forms/models';
import Item from './Item';
import TextItem from './questionItems/TextItem';
import { GroupItem } from './GroupItem';
import StringItem from './questionItems/StringItem';
import { DecimalItem } from './questionItems/DecimalItem';


export const ItemProvider = (props: any) => {
    const { item } = props;
    switch (item.type) {
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
            return < DecimalItem {...props} />
        }
        default: {
            return null;
        }
    }
}

export default ItemProvider;