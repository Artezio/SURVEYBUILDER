import * as React from 'react';
import { BooleanItemProps } from '../../interfaces/components/questionItems/BooleanItemProps';
import { FormApi, Form, RadioGroup, Radio, Text, Checkbox } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import Ocations, { Trashcan } from '@githubprimer/octicons-react';


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
        const { item, className = '' } = this.props;
        return <div className={`item card card-sm mb-3 ${className}`}>
            <div className="card-header p-1 d-flex justify-content-end">
            </div>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                <div className="card-body p-2">
                    <div className="form-group">
                        <label htmlFor="boolean-item-text">Question</label>
                        <Text className="form-control" id="boolean-item-text" field="text" placeholder="My Question" onBlur={this.submitForm.bind(this)} />
                    </div>
                    <label>Default answer</label>
                    <button className="ml-5 btn btn-sm btn-secondary" onClick={() => this.formApi.setValue('initialValue', undefined)}>Reset</button>
                    <RadioGroup field="initialValue">
                        <div className="form-group mb-0">
                            <label htmlFor="boolean-item-initial-value-true">Yes<Radio className="form-control" id="boolean-item-initial-value-true" value={true} /></label>
                            <label className="ml-5" htmlFor="boolean-item-initial-value-false">No<Radio className="form-control" id="boolean-item-initial-value-false" value={false} /></label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="card-footer p-1 d-flex justify-content-between align-items-center">
                    <div className="custom-control mb-0">
                        <Checkbox field="required" type="checkbox" className="custom-control-input" id="item-required" />
                        <label className="custom-control-label" htmlFor="item-required">Required</label>
                    </div>
                    <button className="btn p-1 mr-2" onClick={item.remove.bind(item)}>
                        <Ocations icon={Trashcan} />
                    </button>
                </div>
            </Form>
        </div>
    }
}

export default useObservableModel<BooleanItemProps>(BooleanItem);