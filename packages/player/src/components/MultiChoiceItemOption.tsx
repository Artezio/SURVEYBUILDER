import * as React from 'react';
import * as Models from '@art-forms/models';
import MultiChoiceItemOptionProps from '../interfaces/components/MultiChoiceItemOptionProps';
import { Checkbox, FormApi, Form } from 'informed';

export class MultiChoiceItemOption extends React.Component<MultiChoiceItemOptionProps> {
    formApi!: FormApi<Models.IAnswer<any>>;
    answerFactory: Models.AnswerFactory;

    constructor(props: MultiChoiceItemOptionProps) {
        super(props);
        this.answerFactory = new Models.AnswerFactory(props.questionnaireResponseItem);
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IAnswer<any>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IAnswer<any>>) {
        console.log(values);
    }

    render() {
        const { option } = this.props;
        return <div className="form-check">
            <Form getApi={this.getFormApi.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <Checkbox className="form-check-input" field="value" id={`${option.id}-checkbox`} />
                <label htmlFor={`${option.id}-checkbox`}>{option.value}</label>
            </Form>
        </div>
    }
}

export default MultiChoiceItemOption;