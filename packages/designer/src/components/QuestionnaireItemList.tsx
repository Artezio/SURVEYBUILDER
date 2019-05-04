import * as React from 'react';
import ItemListProps from '../interfaces/components/ItemListProps';
import ItemWrapper from './ItemWrapper';
import { Droppable } from 'react-beautiful-dnd';


export class QuestionnaireItemList extends React.PureComponent<ItemListProps> {
    state = { isDropDisabled: true };

    onMouseLeave(e: any) {
        const { container } = this.props;
        console.log('LEAVE TYPE: ', container.id)
        !this.state.isDropDisabled && this.setState({ isDropDisabled: true });
    }

    onMouseOver(e: any) {
        const { container } = this.props;
        // console.log('OVER TYPE: ', container.id);
        if (!e.defaultPrevented) {
            this.state.isDropDisabled && this.setState({ isDropDisabled: false });
            e.preventDefault();
            console.log('OVER_INSIDE TYPE: ', container.id)
        }
        else {
            !this.state.isDropDisabled && this.setState({ isDropDisabled: true });
        }
    }

    render() {
        const { container, className = '', nestingLevel } = this.props;
        return <Droppable type={'nestingLevel'} droppableId={container.id} isDropDisabled={this.state.isDropDisabled}>
            {(provided, snapshot) => (
                <div {...provided.droppableProps}
                    ref={provided.innerRef}
                    onMouseOver={this.onMouseOver.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                    className={`questionnaire-item-list${snapshot.isDraggingOver ? ' isDraggingOver' : ''} ${className}`}
                >
                    {container.items.map((item, i) => <ItemWrapper item={item} key={item.id} nestingLevel={`${nestingLevel}:${i}`} />)}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    }
}

export default QuestionnaireItemList;