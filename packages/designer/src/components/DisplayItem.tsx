import React from 'react';
import DropdownMenuComponent from './DropdownMenu';
import DisplayItemComponentProps from '../interfaces/DisplayItemComponentProps';
import { Form, TextArea, Text, FormApi } from 'informed';
import { DisplayItem } from '@art-forms/models';


export class DisplayItemComponent extends React.Component<DisplayItemComponentProps> {
    formApi!: FormApi<DisplayItem>;

    removeItem = () => {
        const { item, actions } = this.props;
        actions.removeItem(item);
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<DisplayItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<DisplayItem>) {
        const { actions, item } = this.props;
        actions.updateDisplayItem({ ...item, ...values });
    }

    render() {
        const { item } = this.props;
        return <div className="container text-item border border-success my-1 py-1">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenuComponent title="Context menu" items={[
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

export default DisplayItemComponent;