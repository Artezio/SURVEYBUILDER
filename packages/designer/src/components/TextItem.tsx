import React from 'react';
import DropdownMenuComponent from './DropdownMenu';
import TextItemComponentProps, { TextItemComponentActions, TextItemComponentOwnProps } from '../interfaces/TextItemComponentProps';
import { Form, Text, FormApi } from 'informed';
import { TextItem } from '@art-forms/models';


export class TextItemComponent extends React.Component<TextItemComponentProps> {
    formApi!: FormApi<TextItem>;

    removeItem = () => {
        const { item } = this.props;
        const { removeItem } = this.props.actions;
        removeItem(item);
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<TextItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<TextItem>) {
        const { actions, item } = this.props;
        actions.updateTextItem({ ...item, ...values });
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
                <Text className="form-control" field="text" autoFocus={true} onBlur={this.submitForm.bind(this)} />
            </Form>
        </div>
    }
}

export default TextItemComponent;