import * as React from 'react';
import { BooleanItemProps } from '../../interfaces/components/questionItems/BooleanItemProps';
import { FormApi, Form, RadioGroup, Radio, Text } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';


export class BooleanItem extends React.Component<BooleanItemProps> {
    formApi!: FormApi<Omit<Models.IBooleanItem, 'type'>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Omit<Models.IBooleanItem, 'type'>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Omit<Models.IBooleanItem, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.IBooleanItem);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
            <div className="card-body p-2">
                <div className="form-group">
                    <label htmlFor={`${item.id}-text`}>Question</label>
                    <Text className="form-control" id={`${item.id}-text`} field="text" placeholder="My Question" onBlur={this.submitForm.bind(this)} />
                </div>
                <label>Default answer</label>
                <RadioGroup field="initialValue">
                    <div className="form-group mb-0">
                        <button className="btn btn-sm btn-outline-dark" onClick={() => this.formApi.setValue('initialValue', undefined)}>Reset</button>
                        <div className="form-check">
                            <Radio className="form-check-input" id={`${item.id}-true`} value={true} onChange={this.submitForm.bind(this)} />
                            <label className="form-check-label" htmlFor={`${item.id}-true`}>Yes</label>
                        </div>
                        <div className="form-check">
                            <Radio className="form-check-input" id={`${item.id}-false`} value={false} onChange={this.submitForm.bind(this)} />
                            <label className="form-check-label" htmlFor={`${item.id}-false`}>No</label>
                        </div>
                    </div>
                </RadioGroup>
            </div>
        </Form>
    }
}

export default useObservableModel<BooleanItemProps>(BooleanItem);