import * as React from 'react';
import SelectMenuProps, { SelectMenuOption } from '../interfaces/components/SelectMenuProps';
import * as Models from '@art-forms/models';


export class SelectMenu extends React.Component<SelectMenuProps> {
    item: Models.Item;
    factory: Models.ItemFactory;
    options: SelectMenuOption[] = [
        { title: "String (one row)", value: Models.STRING },
        { title: "Text (several rows)", value: Models.TEXT },
        { title: "Boolean question", value: Models.BOOLEAN },
        { title: "Decimal question", value: Models.DECIMAL },
        { title: "Time question", value: Models.TIME },
        { title: "Date question", value: Models.DATE },
        { title: "Date-time question", value: Models.DATE_TIME },
        { title: "Choice question", value: Models.CHOICE },
        { title: "Open-choice question", value: Models.OPEN_CHOICE },
        { title: "Attachment question", value: Models.ATTACHMENT },
    ];

    constructor(props: SelectMenuProps) {
        super(props);
        this.item = props.item;
        this.factory = new Models.ItemFactory(this.item.parent);
    }

    onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        switch (e.target.value) {
            case Models.STRING: {
                this.changeItemToString();
                break;
            }
            case Models.TEXT: {
                this.changeItemToText();
                break;
            }
            case Models.BOOLEAN: {
                this.changeItemToBoolean();
                break;
            }
            case Models.DECIMAL: {
                this.changeItemToDecimal();
                break;
            }
            case Models.TIME: {
                this.changeItemToTime();
                break;
            }
            case Models.DATE: {
                this.changeItemToDate();
                break;
            }
            case Models.DATE_TIME: {
                this.changeItemToDateTime();
                break;
            }
            case Models.CHOICE: {
                this.changeItemToChoice();
                break;
            }
            case Models.OPEN_CHOICE: {
                this.changeItemToOpenChoice();
                break;
            }
            case Models.ATTACHMENT: {
                this.changeItemToAttachment();
                break;
            }
            default: return;
        }
    }

    changeItemToString() {
        const { item } = this.props;
        const newItem = this.factory.createStringItem(item);
        item.replace(newItem);
    }

    changeItemToText() {
        const { item } = this.props;
        const newItem = this.factory.createTextItem(item);
        item.replace(newItem);
    }

    changeItemToBoolean() {
        const { item } = this.props;
        const newItem = this.factory.createBooleanItem(item);
        item.replace(newItem);
    }

    changeItemToDecimal() {
        const { item } = this.props;
        const newItem = this.factory.createDecimalItem(item);
        item.replace(newItem);
    }

    changeItemToTime() {
        const { item } = this.props;
        const newItem = this.factory.createTimeItem(item);
        item.replace(newItem);
    }

    changeItemToDate() {
        const { item } = this.props;
        const newItem = this.factory.createDateItem(item);
        item.replace(newItem);
    }

    changeItemToDateTime() {
        const { item } = this.props;
        const newItem = this.factory.createDateTimeItem(item);
        item.replace(newItem);
    }

    changeItemToChoice() {
        const { item } = this.props;
        const newItem = this.factory.createChoiceItem(item);
        item.replace(newItem);
    }

    changeItemToOpenChoice() {
        const { item } = this.props;
        const newItem = this.factory.createOpenChoiceItem(item);
        item.replace(newItem);
    }

    changeItemToAttachment() {
        const { item } = this.props;
        const newItem = this.factory.createAttachmentItem(item);
        item.replace(newItem);
    }

    render() {
        const { item, title } = this.props;
        return <div className="form-group">
            <label htmlFor={`${item.id}-select-menu`}>{title}</label>
            <select id={`${item.id}-select-menu`} className="form-control" defaultValue={item.type} onChange={this.onChange.bind(this)}>
                {this.options.map(option => {
                    return <option key={`${item.id}-${option.value}`} value={option.value}>{option.title}</option>
                })}
            </select>
        </div>
    }
}

export default SelectMenu;