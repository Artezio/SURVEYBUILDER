import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import DropdownMenu from './DropdownMenu';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';

export class GroupItem extends React.Component<GroupItemProps> {
    formApi!: FormApi<Partial<Models.IGroupItem>>;

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
        return <div className="border border-primary my-1 p-3">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenu title="Context menu" items={[    //// Optimize (rise up logic)
                    { title: 'Remove item', action: item.remove.bind(item) },
                    { title: 'Create item', action: item.addItem.bind(item) },
                    { title: 'Create text item', action: item.addTextItem.bind(item) },
                    { title: 'Create group item', action: item.addGroupItem.bind(item) }
                ]} />
            </div>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="group-item-text">Title</label>
                    <Text className="form-control" id="group-item-text" field="text" placeholder="Questions group" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
            </Form>
            <div className="item-list my-3">
                {item.items.map(item =>
                    <div key={item.id}>
                        {ItemProvider({ item })}
                    </div>
                )}
            </div>
        </div>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);