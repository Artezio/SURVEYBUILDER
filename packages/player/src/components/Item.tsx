import * as React from 'react';
import { ItemProps } from '../interfaces/components/ItemProps';


export class Item extends React.Component<ItemProps> {
    render() {
        const { item } = this.props;
        return <div className="mb-3 plain-text">
            <p>{item.text}</p>
        </div>
    }
}

export default Item;