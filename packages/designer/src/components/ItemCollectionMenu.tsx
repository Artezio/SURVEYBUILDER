import * as React from 'react';
import { ItemCollectionMenuProps } from '../interfaces/components/ItemCollectionMenuProps';
import * as Models from '@art-forms/models';


export class ItemCollectionMenu extends React.Component<ItemCollectionMenuProps> {
    itemFactory: Models.ItemFactory = new Models.ItemFactory(this.props.item);

    addItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createItem();
        item.addItem(newItem);
    }

    addGroupItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createGroupItem();
        item.addItem(newItem);
    }

    addChoiceItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createChoiceItem();
        const answerOptionFactory = new Models.AnswerOptionFactory(newItem);
        newItem.addAnswerOption(answerOptionFactory.createAnswerOption({ value: 'Option 1' }));
        item.addItem(newItem);
    }

    render() {
        return <div className="item-collection-menu btn-group">
            <button className="btn btn-secondary" title="Add text" onClick={this.addItem.bind(this)}><i className="fas fa-align-left"></i></button>
            <button className="btn btn-secondary" title="Add group" onClick={this.addGroupItem.bind(this)}><i className="fas fa-layer-group"></i></button>
            <button className="btn btn-secondary" title="Add question" onClick={this.addChoiceItem.bind(this)}><i className="fas fa-plus"></i></button>
        </div>
    }
}

export default ItemCollectionMenu;