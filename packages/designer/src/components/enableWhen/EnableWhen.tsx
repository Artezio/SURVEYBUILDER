import * as React from 'react';
import * as Models from '@art-forms/models';
import EnableWhenProps from '../../interfaces/components/enableWhen/EnableWhenProps';
import { Select, Option, withFormApi, FormState } from 'informed';
import QuestionItemProvider from './QuestionItemProvider';
import { useObservableModel } from '@art-forms/observable';
import HumanReadableGuid from '../../interfaseHelpers/humanReadableId';

type OperatorType = { value: Models.EnableWhenOperator, text: string };

export class EnableWhen extends React.Component<EnableWhenProps> {
    state: { selectedQuestion?: Models.QuestionItem<any> } = {};
    operators: OperatorType[] = [
        { value: Models.EQUAL, text: 'Equal( == )' },
        { value: Models.NOT_EQUAL, text: 'Not equal( != )' },
        { value: Models.EXISTS, text: 'Exists( not null )' },
        { value: Models.MORE, text: 'More( > )' },
        { value: Models.LESS, text: 'Less( < )' },
        { value: Models.MORE_OR_EQUAL, text: 'More or equal( >= )' },
        { value: Models.LESS_OR_EQUAL, text: 'Less or equal( <= )' }
    ];
    humanReadableGuid = HumanReadableGuid.getHumanReadableGuid();

    constructor(props: EnableWhenProps) {
        super(props);
        const questionId = props.enableWhen.questionId;
        const question = props.questionList.find(question => question.id === questionId);
        this.state = {
            selectedQuestion: question
        }
    }

    selectQuestion(e: React.ChangeEvent<HTMLInputElement>) {
        const { questionList, enableWhen, formApi, index } = this.props;
        const questionId = formApi.getValue(`${index}][questionId`) as string;
        const question = questionList.find(question => question.id === questionId);
        enableWhen.questionId = questionId;
        this.setState({ selectedQuestion: question });
    }

    removeEnableWhen() {
        const { enableWhen } = this.props;
        enableWhen.remove();
    }

    setOperator(e: React.ChangeEvent<HTMLInputElement>) {
        const { enableWhen } = this.props;
        const operator = e.target.value as Models.EnableWhenOperator;

        enableWhen.operator = operator;
    }

    renderQuestionSelect() {
        const { questionList, index } = this.props;
        return <Select className="custom-select" field={`${index}][questionId`} onChange={this.selectQuestion.bind(this)}>
            <Option value='' disabled={true}>Select question</Option>
            {questionList.map(question => <Option className="dropdown-item" key={`${question.id}-${'enableWhenQuestion'}`} value={question.id}>
                {`#${this.humanReadableGuid.getHumanReadableId(question.id)} ${question.text === undefined ? '' : question.text}`}
            </Option>)}
        </Select>
    }

    renderOperatorSelect() {
        const { index } = this.props;
        return <Select className="custom-select" field={`${index}][operator`} onChange={this.setOperator.bind(this)}>
            <Option value='' disabled={true}>Select operator</Option>
            {this.operators.map((operator, i) => <Option key={i} value={operator.value}>
                {operator.text}
            </Option>)}
        </Select>
    }

    render() {
        const { index, enableWhen } = this.props;
        const { selectedQuestion } = this.state;
        return <div className="enable-when__row row align-items-center">
            <div className="col-3">
                {this.renderQuestionSelect()}
            </div>
            <div className="col-3">
                {this.renderOperatorSelect()}
            </div>
            <div className="col-5">
                {selectedQuestion && <QuestionItemProvider key={selectedQuestion.id} item={selectedQuestion} index={index} enableWhen={enableWhen} />}
            </div>
            <div className="col-1">
                <button className="btn btn-outline-secondary" onClick={this.removeEnableWhen.bind(this)}><i className="fas fa-trash"></i></button>
            </div>
        </div>
    }
}

export default withFormApi<Omit<EnableWhenProps, 'formApi'>, FormState>(useObservableModel(EnableWhen));