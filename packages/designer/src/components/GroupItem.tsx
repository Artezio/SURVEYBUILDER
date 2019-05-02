import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import useObservableModel from '../HOCs/useObservableModel';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';
import ItemList from './ItemList';


export class GroupItem extends React.Component<GroupItemProps> {
    formApi!: FormApi<Partial<Models.IGroupItem>>;

    handleSubmit(values: Partial<Models.IGroupItem>) {
        const { item } = this.props;
        item.updateItem({ ...item, text: values.text });
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Partial<Models.IGroupItem>>) {
        this.formApi = formApi;
    }

    renderItemList() {
        const { item, nestingLevel } = this.props;
        return <ItemList container={item} nestingLevel={nestingLevel} />
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item);
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