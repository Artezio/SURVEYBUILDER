import * as React from 'react';
import StringItemProps from '../../interfaces/components/questionItems/StringItemProps';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';


export class StringItem extends React.Component<StringItemProps> {
    formApi!: FormApi<Omit<Models.IStringItem, 'type'>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Omit<Models.IStringItem, 'type'>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Omit<Models.IStringItem, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.StringItem);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
            <div className="card-body p-2">
                <div className="form-group">
                    <label htmlFor="text-item-text">Question</label>
                    <Text className="form-control" id="text-item-text" field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
                <div className="form-group mb-0">
                    <label htmlFor="text-item-initial-value">Default answer</label>
                    <Text className="form-control" field="initialValue" id="text-item-initial-value" placeholder="Patient default answer" onBlur={this.submitForm.bind(this)} />
                </div>
            </div>
        </Form>
    }
}

export default useObservableModel<StringItemProps>(StringItem);