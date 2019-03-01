import React from 'react';
import TextItemProps from '../interfaces/components/TextItemProps';
import DropdownMenu from './DropdownMenu';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';


export class TextItem extends React.Component<TextItemProps> {
    formApi!: FormApi<Models.TextItem>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.TextItem>) {
        this.formApi = formApi;
    }

    handleSubmit() {

    }

    removeItem = () => {
        const { item, actions } = this.props;
        actions.removeItem(item);
    }

    render() {
        const { item } = this.props;
        return <div className="text-item col-11">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenu title="Context menu" items={[
                    { title: 'Remove item', action: this.removeItem }
                ]} />
            </div>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="text-item-text">Title</label>
                    <Text className="form-control" id="text-item-text" field="text" placeholder="My Question" autoFocus={true} />
                </div>
                <div className="form-group">
                    <label htmlFor="text-item-initial-value">Default answer</label>
                    <Text className="form-control" field="initialValue" id="text-item-initial-value" placeholder="Patient default answer" />
                </div>
            </Form>
        </div>
    }
}

export default TextItem;