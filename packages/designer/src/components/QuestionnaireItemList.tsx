import * as React from 'react';
import ItemListProps from '../interfaces/components/ItemListProps';
import ItemWrapper from './ItemWrapper';
import { Droppable } from 'react-beautiful-dnd';


export class QuestionnaireItemList extends React.Component<ItemListProps> {
    render() {
        const { container, className = '', nestingLevel } = this.props;
        return <Droppable type={nestingLevel} droppableId={container.id}>
            {(provided, snapshot) => (
                <div className={`questionnaire-item-list${snapshot.isDraggingOver ? ' isDraggingOver' : ''} ${className}`} ref={provided.innerRef} {...provided.droppableProps}>
                    {container.items.map((item, i) => <ItemWrapper item={item} key={item.id} nestingLevel={`${nestingLevel}:${i}`} />)}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    }
}

export default QuestionnaireItemList;