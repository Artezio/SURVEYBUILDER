import * as React from 'react';
import { ChoiceItemProps } from '../../interfaces/components/questionItems/ChoiceItemProps';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import ChoiceOption from '../ChoiceOption';
import { Form, RadioGroup, FormApi } from 'informed';


export class ChoiceItem extends React.Component<ChoiceItemProps> {
    formApi!: FormApi<Models.IChoiceItem>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IChoiceItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IChoiceItem>) {
        const { item } = this.props;
        item.updateItem({ ...item, initialValue: values.initialValue })
    }

    reset() {
        const { item } = this.props;
        this.formApi && this.formApi.setValue('initialValue', undefined);
        item.updateItem({ ...item, initialValue: undefined });
    }

    addOption() {
        const { item } = this.props;
        const option = Models.ChoiceOptionFactory.createChoiceOption();
        item.addOption(option);
    }
    
    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item);
    }

    renderChoiceOptions() {
        const { item } = this.props;
        return <div className="option-list">
            <Form getApi={this.getFormApi.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <RadioGroup field="initialValue" initialValue={item.initialValue}>
                    {item.options.map(option => <ChoiceOption key={option.id} option={option} item={item} submitForm={this.submitForm.bind(this)} reset={this.reset.bind(this)} />)}
                </RadioGroup>
            </Form>
        </div>;
    }

    render() {
        return <div>
            <button className="btn btn-link text-secondary" onClick={this.reset.bind(this)}>
                Reset <i className="fas fa-undo small"></i>
            </button>
            {this.renderChoiceOptions()}
            <div>
                <button className="btn btn-outline-secondary form-control" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<ChoiceItemProps>(ChoiceItem);