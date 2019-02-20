import React from 'react';
import { TextItem } from '@art-forms/models';

export const TextItemComponent = (props: { item: TextItem }) => {
    const { item } = props;
    return <div>
        {JSON.stringify(item)}
    </div>
}

export default TextItemComponent;