import * as React from 'react';
import { MultiChoiceItemProps } from '../../interfaces/components/questionItems/MultiChoiceItemProps';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import { Form, FormApi } from 'informed';
import MultiChoiceOption from '../MultiChoiceOption';


export class MultiChoiceItem extends React.Component<MultiChoiceItemProps> {
    formApi!: FormApi<Models.IMultiChoiceItem>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IMultiChoiceItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IMultiChoiceItem>) {
        const { item } = this.props;
        console.log(values);
    }

    setTouched(field: string) {
        if (!this.formApi) return;
        this.formApi.setTouched(field, true);
    }

    addOption() {
        const { item } = this.props;
        const option = Models.MultiChoiceOptionFactory.createMultiChoiceOption();
        item && item.addOption(option);
        console.log(this.formApi.getState())
    }

    componentDidUpdate() {
        const { item } = this.props;
        if (!this.formApi) return;
        this.formApi.setValues(item);
    }

    renderChoiceOptions() {
        const { item } = this.props;
        return <div className="choice-options">
            <Form getApi={this.getFormApi.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                {item.options.map((option, i) => <MultiChoiceOption key={option.id} option={option} item={item} setTouched={this.setTouched.bind(this)} submitForm={this.submitForm.bind(this)} />)}
            </Form>
        </div>;
    }

    render() {
        return <div>
            {this.renderChoiceOptions()}
            <div className="form-group">
                <button className="btn btn-outline-secondary form-control" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<MultiChoiceItemProps>(MultiChoiceItem);