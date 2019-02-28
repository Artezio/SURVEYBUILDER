import React from 'react';
import DropdownMenu from './DropdownMenu';
import DisplayItemProps from '../interfaces/components/DisplayItemProps';
import { Form, TextArea, Text, FormApi } from 'informed';
import * as Models from '@art-forms/models';


export class DisplayItem extends React.Component<DisplayItemProps> {
    formApi!: FormApi<Models.DisplayItem>;

    removeItem = () => {
        const { item, actions } = this.props;
        actions.removeItem(item);
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.DisplayItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.DisplayItem>) {
        const { actions, item } = this.props;
        actions.updateDisplayItem({ ...item, ...values });
    }

    render() {
        const { item } = this.props;
        return <div className="container text-item border border-success my-1 py-1">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenu title="Context menu" items={[
                    { title: 'Remove item', action: this.removeItem }
                ]} />
            </div>
            <Form getApi={this.getFormApi.bind(this)} className="from-group" initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
                <Text className="form-control my-1" field="title" placeholder="Title" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                <TextArea className="form-control my-1" field="text" placeholder="Text" onBlur={this.submitForm.bind(this)} />
            </Form>
        </div>
    }
}

export default DisplayItem;