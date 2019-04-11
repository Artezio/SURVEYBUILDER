import * as React from 'react';
import { TimeItemProps } from '../../interfaces/components/questionItems/TimeItemProps';
import { Form, Text, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';


export class TimeItem extends React.Component<TimeItemProps> {
    formApi!: FormApi<Models.ITimeItem>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.ITimeItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.ITimeItem>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.TimeItem);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="card-body p-2">
                <div className="form-group">
                    <label htmlFor="time-item-text">Question</label>
                    <Text className="form-control" id="time-item-text" field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
                <div className="form-group mb-0">
                    <label htmlFor="time-item-initial-value">Default answer</label>
                    <Text className="form-control" type="time" field="initialValue" id="time-item-initial-value" onBlur={this.submitForm.bind(this)} />
                </div>
            </div>
        </Form>
    }
}

export default useObservableModel<TimeItemProps>(TimeItem);