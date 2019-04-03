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


    render() {
        const { item } = this.props;
        return <div className="card my-5">
            <div className="card-header p-1 d-flex justify-content-end">
                <DropdownMenu title="Context menu" items={[
                    { title: 'Remove item', action: item.remove.bind(item) },
                    { title: 'Create item', action: item.addItem.bind(item, this.itemFactory.createItem()) },
                    { title: 'Create text item', action: item.addItem.bind(item, this.itemFactory.createTextItem()) },
                    { title: 'Create group item', action: item.addItem.bind(item, this.itemFactory.createGroupItem()) }
                ]} />
            </div>
            <div className="card-body p-2">
                <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="group-item-text" className="small mb-0">Group Title</label>
                        <Text className="form-control form-control-sm" id="group-item-text" field="text" placeholder="Questions group" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    </div>
                </Form>
                <div className="item-list">
                    {item.items.map(item => <ItemProvider {...{ item }} key={item.id} />)}
                </div>
            </div>
        </div>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);