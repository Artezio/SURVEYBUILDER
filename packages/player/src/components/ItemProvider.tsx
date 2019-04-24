import * as React from 'react';
import * as Models from '@art-forms/models';
import Item from './Item';
import GroupItem from './GroupItem';
import QuestionItemWrapper from './QuestionItemWrapper';


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
            return <QuestionItemWrapper {...props} />
        }
    }
}

export default ItemProvider;