import * as React from 'react';
import { ItemProps } from '../interfaces/components/ItemProps';


export class Item extends React.Component<ItemProps> {
    render() {
        const { item } = this.props;
        return <p>{item.text}</p>
    }
}

export default Item;