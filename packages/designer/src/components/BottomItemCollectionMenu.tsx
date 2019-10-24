import * as React from 'react';
import * as Models from '@art-forms/models';
import BottomItemCollectionMenuProps from '../interfaces/components/BottomItemCollectionMenuProps';


export class BottomItemCollectionMenu extends React.Component<BottomItemCollectionMenuProps> {
    itemFactory: Models.ItemFactory = new Models.ItemFactory(this.props.item);

    addItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createItem();
        item.addSiblingItemAfter(newItem);
    }

    addGroupItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createGroupItem();
        item.addSiblingItemAfter(newItem);
    }

    addChoiceItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createChoiceItem();
        const answerOptionFactory = new Models.AnswerOptionFactory(newItem);
        newItem.addAnswerOption(answerOptionFactory.createAnswerOption({ value: 'Option 1' }));
        item.addSiblingItemAfter(newItem);
    }

    render() {
        return <div className="dropdown-menu dropdown-menu-right btn-group-vertical">
            <button className="btn btn-secondary" title="Add text" onClick={this.addItem.bind(this)}><i className="fas fa-align-left"></i></button>
            <button className="btn btn-secondary" title="Add group" onClick={this.addGroupItem.bind(this)}><i className="fas fa-layer-group"></i></button>
            <button className="btn btn-secondary" title="Add question" onClick={this.addChoiceItem.bind(this)}><i className="fas fa-plus"></i></button>
        </div>
    }
}

export default BottomItemCollectionMenu;