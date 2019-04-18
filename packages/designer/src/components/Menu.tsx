import * as React from 'react';
import { MenuProps } from '../interfaces/components/MenuProps';
import * as Models from '@art-forms/models';


export class Menu extends React.Component<MenuProps> {
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
        const newItem = this.itemFactory.createChoiceItem({ options: [Models.ChoiceOptionFactory.createChoiceOption({value: "Option 1"})] });
        item.addItem(newItem);
    }

    render() {
        return <div className="menu btn-group">
            <a className="btn btn-outline-secondary" title="Add text" href="javascript:void(0)" onClick={this.addItem.bind(this)}><i className="fas fa-align-left"></i></a>
            <a className="btn btn-outline-secondary" title="Add group" href="javascript:void(0)" onClick={this.addGroupItem.bind(this)}><i className="fas fa-layer-group"></i></a>
            <a className="btn btn-outline-secondary" title="Add question" href="javascript:void(0)" onClick={this.addChoiceItem.bind(this)}><i className="fas fa-plus"></i></a>
        </div>
    }
}

export default Menu;