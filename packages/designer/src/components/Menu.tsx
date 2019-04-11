import * as React from 'react';
import { MenuProps } from '../interfaces/components/MenuProps';
import * as Models from '@art-forms/models';


export const Menu = (props: MenuProps) => {
    const { item, title } = props;
    const itemFactory = new Models.ItemFactory(item);
    const items = [
        { title: 'Add display text', action: item.addItem.bind(item, itemFactory.createItem()) },
        { title: 'Add group', action: item.addItem.bind(item, itemFactory.createGroupItem()) },
        { title: 'Add text question', action: item.addItem.bind(item, itemFactory.createTextItem()) },
        { title: 'Add string question', action: item.addItem.bind(item, itemFactory.createStringItem()) },
        { title: 'Add decimal question', action: item.addItem.bind(item, itemFactory.createDecimalItem()) },
        { title: 'Add boolean question', action: item.addItem.bind(item, itemFactory.createBooleanItem()) },
        { title: 'Add time question', action: item.addItem.bind(item, itemFactory.createTimeItem()) },
        { title: 'Add date question', action: item.addItem.bind(item, itemFactory.createDateItem()) },
        { title: 'Add date-time question', action: item.addItem.bind(item, itemFactory.createDateTimeItem()) },
        { title: 'Add attachment question', action: item.addItem.bind(item, itemFactory.createAttachmentItem()) },
        { title: 'Add choice question', action: item.addItem.bind(item, itemFactory.createChoiceItem()) }
    ]
    return <div>
        <button className="btn btn-sm dropdown-toggle" role="button" id="context-menu-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {title}
        </button>
        <div className="dropdown-menu" aria-labelledby="context-menu-link">
            {items.map((item, i) => <button key={i} className="dropdown-item btn" onClick={() => { item.action() }}>{item.title}</button>)}
        </div>
    </div>
}

export default Menu