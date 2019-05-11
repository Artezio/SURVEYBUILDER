import * as React from 'react';
import { Form, FormApi, RadioGroup, Radio } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import ChoiceItemProps from '../../interfaces/components/questionItems/ChoiceItemProps';


export class ChoiceItem extends React.Component<ChoiceItemProps> {
    formApi!: FormApi<Models.IAnswer<any>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IAnswer<any>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IAnswer<any>>) {
        const { questionnaireResponseItem, item } = this.props;
        const option = item.options.find(x => x.id === values.value);
        const value = option && option.value;
        const answer = questionnaireResponseItem.answers[0];
        answer && answer.updateAnswer({ ...answer, value });
    }

    renderChoiceOptions() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="value" initialValue={item.initialValue}>
                {item.options.map(option => {
                    return <div className="form-check" key={option.id}>
                        <Radio className="form-check-input" id={option.id} value={option.id} onChange={this.submitForm.bind(this)} />
                        <label className="form-check-label" htmlFor={option.id}>{option.value}</label>
                    </div>
                })}
            </RadioGroup>
        </Form>
    }

    render() {
        return <div className="form-group">
            {this.renderChoiceOptions()}
        </div>
    }
}

export default useObservableModel<ChoiceItemProps>(ChoiceItem);