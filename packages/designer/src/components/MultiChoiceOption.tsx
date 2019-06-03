import * as React from 'react';
import * as Models from '@art-forms/models';
import MultiChoiceOptionProps from '../interfaces/components/MultiChoiceOptionProps';
import { Form, Checkbox } from 'informed';
import QuestionItem from './questionItems/QuestionItem';

export class MultiChoiceOption extends QuestionItem<MultiChoiceOptionProps> {
    initialAnswerFactory: Models.initialAnswerFactory = new Models.initialAnswerFactory(this.props.item);
    initialAnswer?: Models.InitialAnswer<any> = this.props.item.initialAnswers.find(itm => itm.value === this.props.option.id);

    handleSubmit(values: Partial<Models.InitialAnswer<any>>) {
        // const { item, option } = this.props as any;
        // if (values.value) {
        //     this.initialAnswer = this.initialAnswerFactory.createInitialAnswer({ value: option.id });
        //     item.addInitialAnswer(this.initialAnswer);
        // }
        // else if (this.initialAnswer) {
        //     item.removeInitialAnswer(this.initialAnswer);
        //     this.initialAnswer = undefined;
        // }
    }

    componentDidUpdate() {
        // this.formApi && this.formApi.setValue('value', this.initialAnswer);
    }

    onBlur(e: any) {
        const { option } = this.props;
        option.setValue(e.target.value)
    }

    remove() {
        const { option } = this.props;
        option.remove();
    }

    renderCheckbox() {
        const { option } = this.props;
        return <div className="input-group-text">
            {/* <label className="mr-1" htmlFor={`${option.id}-checkbox`}>As default</label> */}
            <input type="checkbox" disabled={true} />
            {/* <Checkbox initialValue={!!this.initialAnswer} field="value" id={`${option.id}-checkbox`} onChange={this.submitForm.bind(this)} /> */}
        </div>
    }

    render() {
        const { option } = this.props;
        return <Form getApi={this.getFormApi.bind(this) as any} onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        {this.renderCheckbox()}
                    </div>
                    <input autoComplete="off" className="form-control" defaultValue={option.value} onBlur={this.onBlur.bind(this)} />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.remove.bind(this)} >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div >
        </Form>
    }
}

export default MultiChoiceOption;