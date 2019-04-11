import * as React from 'react';
import DecimalItemProps from '../../interfaces/components/questionItems/DecimalItemProps';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';


export class DecimalItem extends React.Component<DecimalItemProps> {
    formApi!: FormApi<Omit<Models.IDecimalItem, 'type'>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Omit<Models.IDecimalItem, 'type'>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Omit<Models.IDecimalItem, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.IDecimalItem);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
            <div className="card-body p-2">
                <div className="form-group">
                    <label htmlFor={`${item.id}-text`}>Question</label>
                    <Text className="form-control" id={`${item.id}-text`} field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
                <div className="form-group mb-0">
                    <label htmlFor={`${item.id}-initial`}>Default answer</label>
                    <Text className="form-control" type="number" field="initialValue" id={`${item.id}-initial`} placeholder="Patient default answer" onBlur={this.submitForm.bind(this)} />
                </div>
            </div>
        </Form>
    }
}

export default useObservableModel<DecimalItemProps>(DecimalItem);