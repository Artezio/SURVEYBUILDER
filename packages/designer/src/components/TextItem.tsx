import * as React from 'react';
import TextItemProps from '../interfaces/components/TextItemProps';
import DropdownMenu from './DropdownMenu';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';


export class TextItem extends React.Component<TextItemProps> {
    formApi!: FormApi<Models.ITextItem>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.ITextItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.ITextItem>) {
        const { actions, item } = this.props;
        actions.updateTextItem({ ...item, ...values });
    }

    render() {
        const { item, actions } = this.props;
        return <div className="text-item border border-info my-1 p-3">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenu title="Context menu" items={[
                    { title: 'Remove item', action: actions.removeItem.bind(actions, item) }
                ]} />
            </div>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="text-item-text">Title</label>
                    <Text className="form-control" id="text-item-text" field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="text-item-initial-value">Default answer</label>
                    <Text className="form-control" field="initialValue" id="text-item-initial-value" placeholder="Patient default answer" onBlur={this.submitForm.bind(this)} />
                </div>
            </Form>
        </div>
    }
}

export default TextItem;