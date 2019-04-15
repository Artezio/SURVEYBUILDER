import * as React from 'react';
import { DateItemProps } from '../../interfaces/components/questionItems/DateItemProps';
import { Form, Text, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';


export class DateItem extends React.Component<DateItemProps> {
    formApi!: FormApi<Models.IDateItem>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IDateItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IDateItem>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.DateItem);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label htmlFor={`${item.id}-initial`}>Default answer</label>
                <Text className="form-control" type="date" field="initialValue" id={`${item.id}-initial`} onBlur={this.submitForm.bind(this)} />
            </div>
        </Form>
    }
}

export default useObservableModel<DateItemProps>(DateItem);