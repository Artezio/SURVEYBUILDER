import * as React from 'react';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import ItemProvider from './ItemProvider';

const operator = '===';
const questionId = 'bla-bla-moi-id';
const answerValue = 'bla-bla-moi-otvet';
export class ItemWrapper extends React.Component<ItemWrapperProps> {


    render() {
        return <ItemProvider {...this.props} />
    }
}

export default ItemWrapper;