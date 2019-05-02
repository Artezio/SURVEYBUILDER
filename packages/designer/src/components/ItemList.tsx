import * as React from 'react';
import ItemListProps from '../interfaces/components/ItemListProps';
import ItemWrapper from './ItemWrapper';
import { Droppable } from 'react-beautiful-dnd';


export class ItemList extends React.Component<ItemListProps> {
    render() {
        const { container, className = '', nestingLevel } = this.props;
        return <Droppable type={nestingLevel} droppableId={container.id}>
            {provided => (
                <div className={`questionnaire-item-list ${className}`} ref={provided.innerRef} {...provided.droppableProps}>
                    {container.items.map((item, i) => <ItemWrapper item={item} key={item.id} nestingLevel={`${nestingLevel}:${i}`} />)}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    }
}

export default ItemList;