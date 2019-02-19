import React from 'react';
import { TextItem } from '../../../models/src';

export const TextItemComponent = (props: { item: TextItem }) => {
    const { item } = props;
    return <div>
        {JSON.stringify(item)}
    </div>
}

export default TextItemComponent;