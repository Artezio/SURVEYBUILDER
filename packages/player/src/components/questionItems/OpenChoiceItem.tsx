import * as React from 'react';
import { Form, FormApi, RadioGroup, Radio, Text } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import OpenChoiceItemProps from '../../interfaces/components/OpenChoiceItemProps';


export class OpenChoiceItem extends React.Component<OpenChoiceItemProps> {
    formApi!: FormApi<Models.IQuestionnaireResponseItem>;
    state: { isOtherAnswerChosen: boolean }
    customOption!: Models.IChoiceOption;
    _isMounted: boolean = false;

    constructor(props: OpenChoiceItemProps) {
        super(props);
        this.state = { isOtherAnswerChosen: false }
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IQuestionnaireResponseItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IQuestionnaireResponseItem>) {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem && questionnaireResponseItem.updateQuestionnaireResponseItem({ ...questionnaireResponseItem, ...values })
    }

    setOtherAnswer(value: any) {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem && questionnaireResponseItem.updateQuestionnaireResponseItem({ ...questionnaireResponseItem, value });
    }

    resetAnswer() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem && questionnaireResponseItem.updateQuestionnaireResponseItem({ ...questionnaireResponseItem, value: undefined });
        const customInput = document.getElementById(`${this.customOption.id}-customOption`);
        customInput && setTimeout(() => { customInput && customInput.focus(); customInput && this.formApi.setValue('value', (customInput as any).value) });
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    toggleToOptions() {
        this.submitForm();
        this.setState({ isOtherAnswerChosen: false });
    }

    toggleToOtherAnswer() {
        this.resetAnswer();
        this.setState({ isOtherAnswerChosen: true });
        setTimeout(() => { (document.getElementById(this.customOption.id) as any).checked = true })
    }

    setOtherAnswer1() {
        const customInput = document.getElementById(`${this.customOption.id}-customOption`);
        this.formApi.setValue('value', (customInput as any).value);
        this.setOtherAnswer((customInput as any).value);
        setTimeout(() => { (document.getElementById(this.customOption.id) as any).checked = true })
    }

    renderChoiceOptions() {
        const { item } = this.props;
        this.customOption = Models.ChoiceOptionFactory.createChoiceOption();
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="value" initialValue={item.initialValue}>
                {item.options.map(item => {
                    return <div className="form-check" key={item.id}>
                        <Radio className="form-check-input" id={item.id} value={item.value} onChange={this.toggleToOptions.bind(this)} />
                        <label className="form-check-label" htmlFor={item.id}>{item.value}</label>
                    </div>
                })}
                <div className="form-check" key={this.customOption.id}>
                    <Radio className="form-check-input" id={this.customOption.id} value={0} onChange={this.toggleToOtherAnswer.bind(this)} />
                    <label className="form-check-label" htmlFor={this.customOption.id}>Other</label>
                </div>
            </RadioGroup>
            <input id={`${this.customOption.id}-customOption`} className="form-control" name="value" type="text" disabled={!this.state.isOtherAnswerChosen} onBlur={this.setOtherAnswer1.bind(this)} />
        </Form>
    }

    render() {
        const { item, className = '' } = this.props;
        return <div className={`mb-3 ${className}`}>
            <div className="form-group">
                <label className="mb-1">{item.text}</label>
                {this.renderChoiceOptions()}
            </div>
        </div>
    }
}

export default useObservableModel<OpenChoiceItemProps>(OpenChoiceItem);