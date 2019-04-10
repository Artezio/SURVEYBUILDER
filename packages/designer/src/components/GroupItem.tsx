import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import DropdownMenu from './DropdownMenu';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';
import Ocations, { Trashcan } from '@githubprimer/octicons-react';


export class GroupItem extends React.Component<GroupItemProps> {
    formApi!: FormApi<Partial<Models.IGroupItem>>;
    itemFactory = new Models.ItemFactory(this.props.item);

    handleSubmit(values: Partial<Models.IGroupItem>) {
        const { item } = this.props;
        item && item.updateItem({ ...item, ...values });
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Partial<Models.IGroupItem>>) {
        this.formApi = formApi;
    }

    renderItemList() {
        const { item } = this.props;
        return item && <div className="item-list">
            {item.items.map(item => <ItemProvider {...{ item }} key={item.id} />)}
        </div>
    }

    remove() {
        const { item } = this.props;
        item.remove();
    }

    addItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createItem();
        item && item.addItem(newItem);
    }

    addGroupItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createGroupItem();
        item && item.addItem(newItem);
    }

    addTextItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createTextItem();
        item && item.addItem(newItem);
    }

    addStringItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createStringItem();
        item && item.addItem(newItem);
    }

    addDecimalItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createDecimalItem();
        item && item.addItem(newItem);
    }

    addBooleanItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createBooleanItem();
        item && item.addItem(newItem);
    }

    addTimeItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createTimeItem();
        item && item.addItem(newItem);
    }

    addDateItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createDateItem();
        item && item.addItem(newItem);
    }

    addDateTimeItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createDateTimeItem();
        item && item.addItem(newItem);
    }

    addAttachmentItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createAttachmentItem();
        item && item.addItem(newItem);
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.GroupItem);
    }

    addChoiceItem() {
        const { item } = this.props;
        const newItem = this.itemFactory.createChoiceItem();
        item && item.addItem(newItem);
    }

    renderMenu() {
        return <DropdownMenu title="Context menu" items={[
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
            { title: 'Add choice question', action: this.addChoiceItem.bind(this) }
        ]} />
    }

    render() {
        const { item, className = '' } = this.props;
        return <div className={`item card my-5 ${className}`}>
            <div className="card-header p-1 d-flex justify-content-end">
                {this.renderMenu()}
            </div>
            <div className="card-body p-2">
                <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="group-item-text">Group Title</label>
                        <Text className="form-control" id="group-item-text" field="text" placeholder="Questions group" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    </div>
                </Form>
                {this.renderItemList()}
            </div>
            <div className="card-footer p-1 d-flex justify-content-between align-items-center">
                <div className="custom-control mb-0">
                    <input name="required" type="checkbox" className="custom-control-input" id="item-required" />
                    <label className="custom-control-label" htmlFor="item-required">Required</label>
                </div>
                <button className="btn p-1 mr-2" onClick={item.remove.bind(item)}>
                    <Ocations icon={Trashcan} />
                </button>
            </div>
        </div>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);