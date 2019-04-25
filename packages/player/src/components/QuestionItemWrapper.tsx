import * as React from 'react';
import * as Models from '@art-forms/models';
import QuestionItemWrapperProps from '../interfaces/components/QuestionItemWrapperProps';
import useObservableModel from '../HOCs/useObservableModel';
import QuestionItemProvider from './QuestionItemProvider';


export class QuestionItemWrapper extends React.Component<QuestionItemWrapperProps> {
    answerFactory: Models.AnswerFactory = new Models.AnswerFactory(this.props.questionnaireResponseItem);

    render() {
        const { className = '', item, questionnaireResponseItem } = this.props;
        return <div className={`questionnaire-response-item ${className}`}>
            <label htmlFor={item.id}><b>{item.text}</b></label>
            <QuestionItemProvider item={item} questionnaireResponseItem={questionnaireResponseItem} />
        </div>
    }
}

export default useObservableModel<QuestionItemWrapperProps>(QuestionItemWrapper);