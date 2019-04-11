import * as React from 'react';
import { ItemProps } from '../interfaces/components/ItemProps';


export class Item extends React.Component<ItemProps> {
    render() {
        const { item, className } = this.props;
        return <div className={`mb-3 plain-text ${className}`}>
            <p>{item.text}</p>
        </div>
    }
}

export default Item;