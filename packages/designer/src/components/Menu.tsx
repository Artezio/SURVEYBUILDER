import * as React from 'react';
import { MenuProps, MenuItem } from '../interfaces/components/MenuProps';
import * as Models from '@art-forms/models';


export class Menu extends React.Component<MenuProps> {
    itemFactory: Models.ItemFactory = new Models.ItemFactory(this.props.item);
    items: MenuItem[] = [
        { title: 'Add display text', action: this.addItem.bind(this) },
        { title: 'Add group', action: this.addGroupItem.bind(this) },
        { title: 'Add text question', action: this.addTextItem.bind(this) },
        { title: 'Add string question', action: this.addStringItem.bind(this) },
        { title: 'Add decimal question', action: this.addDecimalItem.bind(this) },
        { title: 'Add boolean question', action: this.addBooleanItem.bind(this) },
        { title: 'Add time question', action: this.addTimeItem.bind(this) },
        { title: 'Add date question', action: this.addDateItem.bind(this) },
        { title: 'Add date-time question', action: this.addDateTimeItem.bind(this) },
        { title: 'Add attachment question', action: this.addAttachmentItem.bind(this) },
        { title: 'Add choice question', action: this.addChoiceItem.bind(this) },
        { title: 'Add open-choice question', action: this.addOpenChoiceItem.bind(this) }
    ]

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

    addTextItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createTextItem();
        item.addItem(newItem);
    }

    addStringItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createStringItem();
        item.addItem(newItem);
    }

    addDecimalItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createDecimalItem();
        item.addItem(newItem);
    }

    addBooleanItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createBooleanItem();
        item.addItem(newItem);
    }

    addTimeItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createTimeItem();
        item.addItem(newItem);
    }

    addDateItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createDateItem();
        item.addItem(newItem);
    }

    addDateTimeItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createDateTimeItem();
        item.addItem(newItem);
    }

    addAttachmentItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createAttachmentItem();
        item.addItem(newItem);
    }

    addChoiceItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createChoiceItem({ options: [Models.ChoiceOptionFactory.createChoiceOption()] });
        item.addItem(newItem);
    }

    addOpenChoiceItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createOpenChoiceItem({ options: [Models.ChoiceOptionFactory.createChoiceOption()] });
        item.addItem(newItem);
    }

    render() {
        const { title } = this.props;
        return <div>
            <button className="btn btn-sm dropdown-toggle" role="button" id="context-menu-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title}
            </button>
            <div className="dropdown-menu" aria-labelledby="context-menu-link">
                {this.items.map((item, i) => <button key={i} className="dropdown-item btn" onClick={item.action}>{item.title}</button>)}
            </div>
        </div>
    }
}

export default Menu