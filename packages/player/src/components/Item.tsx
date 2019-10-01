import * as React from 'react';
import { ItemProps } from '../interfaces/components/ItemProps';

export const Item = (props: ItemProps) => <p className="font-italic">{props.item.text}</p>;

export default Item;