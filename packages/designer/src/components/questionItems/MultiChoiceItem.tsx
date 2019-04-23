import * as React from 'react';
import { MultiChoiceItemProps } from '../../interfaces/components/questionItems/MultiChoiceItemProps';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import ChoiceOption from '../ChoiceOption';
import { Form, RadioGroup, FormApi } from 'informed';


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
        item && item.addOption(option);
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item);
    }

    renderChoiceOptions() {
        const { item } = this.props;
        return <div className="choice-options">
            {item.options.map(option => {})}
        </div>;
    }

    render() {
        return <div>
            <button className="btn btn-link text-secondary" onClick={this.reset.bind(this)}>
                Reset <i className="fas fa-undo"></i>
            </button>
            {this.renderChoiceOptions()}
            <div className="form-group">
                <button className="btn btn-outline-secondary form-control" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<MultiChoiceItemProps>(MultiChoiceItem);