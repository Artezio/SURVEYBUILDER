import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import DropdownMenu from './DropdownMenu';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';

export class GroupItem extends React.Component<GroupItemProps> {
    formApi!: FormApi<Partial<Models.IGroupItem>>;
    itemFactory = new Models.ItemFactory(this.props.item);

    handleSubmit(values: Partial<Models.IQuestionnaire>) {
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

    renderMenu() {
        return <DropdownMenu title="Context menu" items={[
            { title: 'Remove item', action: this.remove.bind(this) },
            { title: 'Add text', action: this.addItem.bind(this) },
            { title: 'Add long-text question', action: this.addTextItem.bind(this) },
            { title: 'Add group', action: this.addGroupItem.bind(this) }
        ]} />
    }

    render() {
        const { item, className } = this.props;
        return <div className={`card my-5 ${className}`}>
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
        </div>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);