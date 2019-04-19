import * as React from 'react';
import { ItemProps } from '../interfaces/components/ItemProps';


export class Item extends React.Component<ItemProps> {
    render() {
        const { item, className = '' } = this.props;
        return <p className={className}>{item.text}</p>
    }
}

export default Item;