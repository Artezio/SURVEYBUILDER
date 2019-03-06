import React from 'react';
import { ItemProps } from '../interfaces/componentProps/Item';


export class Item extends React.Component<ItemProps> {
    render() {
        const { item } = this.props;
        return <div className="col-11 border border-success my-1 py-1">
            <p>{item.text}</p>
        </div>
    }
}

export default Item;