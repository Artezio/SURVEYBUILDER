import * as React from 'react';
import * as Models from '@art-forms/models';
import QuestionItemProps from '../../interfaces/components/ItemWrapperProps';
import QuestionItemProvider from '../QuestionItemProvider';
import useObservableModel from '../../HOCs/useObservableModel';


export class QuestionItemWrapper extends React.Component<QuestionItemProps> {
    answerFactory: Models.AnswerFactory = new Models.AnswerFactory(this.props.questionnaireResponseItem);

    renderResponseItems() {
        const { item, answer } = this.props;
        return <QuestionItemProvider item={item} answer={answer} key={answer.id} />
    }

    addAnswer() {
        const { questionnaireResponseItem, answerIndex } = this.props;
        questionnaireResponseItem.addAnswer(this.answerFactory.createAnswer(), answerIndex + 1);
    }

    render() {
        const { className = '', item, answer, answerIndex } = this.props;
        return <div className={`questionnaire-response-item ${className}`}>
            <div className="d-flex justify-content-between">
                <label htmlFor={item.id}><b>{item.text}</b></label>
                {!item.repeats && answerIndex !== 0 && <button className="btn btn-sm btn-outline-secondary" onClick={answer.remove.bind(answer)}><i className="fas fa-trash"></i></button>}
            </div>
            <QuestionItemProvider item={item} answer={answer} key={answer.id} />
            {!item.repeats && <div>
                <button className="btn btn-outline-secondary" onClick={this.addAnswer.bind(this)}>Add Answer</button>
            </div>}
        </div>
    }
}

export default useObservableModel<QuestionItemProps>(QuestionItemWrapper);