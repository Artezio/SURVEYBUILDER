import * as React from 'react';
import { ChoiceItemProps } from '../../interfaces/components/questionItems/ChoiceItemProps';
import { FormApi, Form, Text, Checkbox } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import Ocations, { Trashcan } from '@githubprimer/octicons-react';
import ChoiceOption from '../ChoiceOption';


export class ChoiceItem extends React.Component<ChoiceItemProps> {
    formApi!: FormApi<Omit<Models.IChoiceItem, 'type'>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Omit<Models.IChoiceItem, 'type'>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Omit<Models.IChoiceItem, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.ChoiceItem);
    }

    renderChoiceOptions() {
        const { item } = this.props;
        return item && (<div className="choice-options my-1">
            {item.options.map(option => <ChoiceOption key={option.id} option={option} item={item} />)}
        </div>);
    }

    addOption() {
        const { item } = this.props;
        const option = Models.ChoiceOptionFactory.createChoiceOption();
        item && item.addOption(option);
    }

    render() {
        const { item, className = '' } = this.props;
        return <div className={`item card card-sm mb-3 ${className}`}>
            <div className="card-header p-1 d-flex justify-content-end">
            </div>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                <div className="card-body p-2">
                    <div className="form-group">
                        <label htmlFor="choice-item-text">Question</label>
                        <Text className="form-control" id="choice-item-text" field="text" placeholder="My Question" onBlur={this.submitForm.bind(this)} />
                    </div>
                    {this.renderChoiceOptions()}
                    <div className="form-group">
                        <button className="btn btn-outline-secondary form-control mt-1" onClick={this.addOption.bind(this)}>Add option</button>
                    </div>
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

export default useObservableModel<ChoiceItemProps>(ChoiceItem);