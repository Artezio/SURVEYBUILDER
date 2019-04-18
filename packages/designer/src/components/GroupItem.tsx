import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import useObservableModel from '../HOCs/useObservableModel';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';
import ItemWrapper from './ItemWrapper';


export class GroupItem extends React.Component<GroupItemProps> {
    formApi!: FormApi<Partial<Models.GroupItem>>;

    handleSubmit(values: Partial<Models.GroupItem>) {
        const { item } = this.props;
        item && item.updateItem({ ...item, ...values as any });
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Partial<Models.GroupItem>>) {
        this.formApi = formApi;
    }

    renderItemList() {
        const { item } = this.props;
        return item && <div className="item-list">
            {item.items.map(item => <ItemWrapper item={item} key={item.id} />)}
        </div>
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.GroupItem);
    }

    render() {
        const { item } = this.props;
        return <>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor={item.id}>Group Title</label>
                    <Text autoComplete="off" className="form-control" id={item.id} field="text" placeholder="Questions group" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
            </Form>
            {this.renderItemList()}
        </>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);