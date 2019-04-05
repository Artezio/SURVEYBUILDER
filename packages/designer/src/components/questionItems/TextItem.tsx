import * as React from 'react';
import TextItemProps from '../../interfaces/components/TextItemProps';
import DropdownMenu from '../DropdownMenu';
import { FormApi, Form, TextArea, Text } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';


export class TextItem extends React.Component<TextItemProps> {
    formApi!: FormApi<Omit<Models.ITextItem, 'type'>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Omit<Models.ITextItem, 'type'>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Omit<Models.ITextItem, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    render() {
        const { item, className = '' } = this.props;
        return <div className={`item card card-sm mb-3 ${className}`}>
            <div className="card-header p-1 d-flex justify-content-end">
                <DropdownMenu title="Context menu" items={[
                    { title: 'Remove item', action: item.remove.bind(item) }
                ]} />
            </div>
            <div className="card-body p-2">
                <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="text-item-text">Question</label>
                        <Text className="form-control" id="text-item-text" field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    </div>
                    <div className="form-group mb-0">
                        <label htmlFor="text-item-initial-value">Default answer</label>
                        <TextArea className="form-control" field="initialValue" id="text-item-initial-value" placeholder="Patient default answer" onBlur={this.submitForm.bind(this)} />
                    </div>
                </Form>
            </div>
        </div>
    }
}

export default useObservableModel<TextItemProps>(TextItem);