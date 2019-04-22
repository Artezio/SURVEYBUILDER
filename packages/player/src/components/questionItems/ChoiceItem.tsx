import * as React from 'react';
import { Form, FormApi, RadioGroup, Radio } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import ChoiceItemProps from '../../interfaces/components/ChoiceItemProps';


export class ChoiceItem extends React.Component<ChoiceItemProps> {
    formApi!: FormApi<Models.IQuestionnaireResponseItem>;

    constructor(props: ChoiceItemProps) {
        super(props);
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IQuestionnaireResponseItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IQuestionnaireResponseItem>) {
        const { answer } = this.props;
        answer && answer.updateAnswer({ ...answer, ...values })
    }

    renderChoiceOptions() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="value" initialValue={item.initialValue}>
                {item.options.map(option => {
                    return <div className="form-check" key={option.id}>
                        <Radio className="form-check-input" id={option.id} value={option.value} onChange={this.submitForm.bind(this)} />
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