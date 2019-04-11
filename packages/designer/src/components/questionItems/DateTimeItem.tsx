import * as React from 'react';
import { DateTimeItemProps } from '../../interfaces/components/questionItems/DateTimeItemProps';
import { Form, Text, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';


export class DateTimeItem extends React.Component<DateTimeItemProps> {
    formApi!: FormApi<Models.IDateTimeItem>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IDateTimeItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IDateTimeItem>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.DateTimeItem);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="card-body p-2">
                <div className="form-group">
                    <label htmlFor={`${item.id}-text`}>Question</label>
                    <Text className="form-control" id={`${item.id}-text`} field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
                <div className="form-group mb-0">
                    <label htmlFor={`${item.id}-initial`}>Default answer</label>
                    <Text className="form-control" type="datetime-local" field="initialValue" id={`${item.id}-initial`} onBlur={this.submitForm.bind(this)} />
                </div>
            </div>
        </Form>
    }
}

export default useObservableModel<DateTimeItemProps>(DateTimeItem);