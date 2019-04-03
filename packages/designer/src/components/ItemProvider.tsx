import * as React from 'react';
import Item from './Item';
import * as Models from '@art-forms/models';
import GroupItem from '../components/GroupItem';
import { QuestionItemProvider } from './QuestionItemProvider';


export const ItemProvider = (props: any) => {
    const { item } = props;
    switch ((item as Models.IItem).type) {
        case Models.DISPLAY: {
            return <Item {...props} />
        }
        case Models.QUESTION: {
            return QuestionItemProvider(props);
        }
        case Models.GROUP: {
            return <GroupItem {...props} />
        }
        default: {
            return null;
        }
    }
}

export default ItemProvider;