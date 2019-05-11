import * as React from 'react';
import StringItemProps from '../../interfaces/components/questionItems/StringItemProps';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';


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
        item.updateItem({ ...item, initialValue: values.initialValue });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label htmlFor={`${item.id}-initial`}>Default answer</label>
                <Text autoComplete="off" className="form-control" field="initialValue" id={`${item.id}-initial`} placeholder="Patient default answer" onBlur={this.submitForm.bind(this)} />
            </div>
        </Form>
    }
}

export default useObservableModel<StringItemProps>(StringItem);