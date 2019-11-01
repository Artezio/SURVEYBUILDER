import * as React from 'react';
import QuestionTypeMenuProps, { QuestionTypeMenuOption } from '../interfaces/components/SelectMenuProps';
import * as Models from '@art-forms/models';
import HumanReadableGuide from '../helpers/humanReadableId';
import { questionTypes } from '../constants/questionTypes';

export class QuestionTypeMenu extends React.Component<QuestionTypeMenuProps> {
    item: Models.Item;
    factory: Models.ItemFactory;
    options: QuestionTypeMenuOption[] = questionTypes;
    humanReadableGuide = HumanReadableGuide.getHumanReadableGuid();

    constructor(props: QuestionTypeMenuProps) {
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
            case Models.MULTI_CHOICE: {
                this.changeItemToMultiChoice();
                break;
            }
            default: return;
        }
    }

    changeItemToString() {
        const { item } = this.props;
        const newItem = this.factory.createStringItem({ text: item.text, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToText() {
        const { item } = this.props;
        const newItem = this.factory.createTextItem({ text: item.text, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToBoolean() {
        const { item } = this.props;
        const newItem = this.factory.createBooleanItem({ text: item.text, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToDecimal() {
        const { item } = this.props;
        const newItem = this.factory.createDecimalItem({ text: item.text, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToTime() {
        const { item } = this.props;
        const newItem = this.factory.createTimeItem({ text: item.text, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToDate() {
        const { item } = this.props;
        const newItem = this.factory.createDateItem({ text: item.text, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToDateTime() {
        const { item } = this.props;
        const newItem = this.factory.createDateTimeItem({ text: item.text, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToChoice() {
        const { item } = this.props;
        const answerOptionFactory = new Models.AnswerOptionFactory();
        let options;
        if ((item as Models.OpenChoiceItem).options === undefined ||
            (item as Models.OpenChoiceItem).options.length === 0 ||
            (item.type === Models.OPEN_CHOICE && (item as Models.OpenChoiceItem).options.length === 1)) {
            options = [answerOptionFactory.createAnswerOption({ value: "Option 1" })];
        }
        else {
            options = (item as Models.OpenChoiceItem).options.slice();
            if (item.type === Models.OPEN_CHOICE) {
                options.pop();
            }
        }
        const newItem = this.factory.createChoiceItem({ text: item.text, options, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        newItem.options.forEach(option => { option.parent = newItem });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToOpenChoice() {
        const { item } = this.props;
        const answerOptionFactory = new Models.AnswerOptionFactory();
        let options: Models.AnswerOption[];
        if ((item as Models.OpenChoiceItem).options === undefined) {
            options = [answerOptionFactory.createAnswerOption({ value: "Option 1" })];
        }
        else {
            options = (item as Models.OpenChoiceItem).options.length === 0 ?
                [answerOptionFactory.createAnswerOption({ value: "Option 1" })] :
                (item as Models.OpenChoiceItem).options.slice();
        }
        options.push(answerOptionFactory.createAnswerOption());
        const newItem = this.factory.createOpenChoiceItem({ text: item.text, options, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        newItem.options.forEach(option => { option.parent = newItem });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToMultiChoice() {
        const { item } = this.props;
        const answerOptionFactory = new Models.AnswerOptionFactory();
        let options;
        if ((item as Models.OpenChoiceItem).options === undefined ||
            (item as Models.OpenChoiceItem).options.length === 0 ||
            (item.type === Models.OPEN_CHOICE && (item as Models.OpenChoiceItem).options.length === 1)) {
            options = [answerOptionFactory.createAnswerOption({ value: "Option 1" })];
        }
        else {
            options = (item as Models.OpenChoiceItem).options.slice();
            if (item.type === Models.OPEN_CHOICE) {
                options.pop();
            }
        }
        const newItem = this.factory.createMultiChoiceItem({ text: item.text, options, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        newItem.options.forEach(option => { option.parent = newItem });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    changeItemToAttachment() {
        const { item } = this.props;
        const newItem = this.factory.createAttachmentItem({ text: item.text, required: item.required, enableWhen: item.enableWhen, enableBehavior: item.enableBehavior });
        item.replace(newItem);
        this.humanReadableGuide.updateKey(item.id, newItem.id);
    }

    render() {
        const { item, title } = this.props;
        return <div>
            <label htmlFor={`${item.id}-select-menu`}>{title}</label>
            <select id={`${item.id}-select-menu`} className="form-control" defaultValue={item.type} onChange={this.onChange.bind(this)}>
                {this.options.map(option => {
                    return <option key={`${item.id}-${option.value}`} value={option.value}>{option.title}</option>
                })}
            </select>
        </div>
    }
}

export default QuestionTypeMenu;