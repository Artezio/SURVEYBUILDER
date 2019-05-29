import * as React from 'react';
import * as Models from '@art-forms/models';
import QuestionItemWrapperProps from '../interfaces/components/QuestionItemWrapperProps';
import { useObservableModel } from '@art-forms/observable';
import ItemProvider from './ItemProvider';


export class ItemWrapper extends React.Component<QuestionItemWrapperProps> {
    answerFactory: Models.AnswerFactory = new Models.AnswerFactory(this.props.questionnaireResponseItem);

    render() {
        const { className = '', item, questionnaireResponseItem } = this.props;
        return <div className={`questionnaire-response${item.type === Models.GROUP ? '-group' : ''}-item ${className}`}>
            {item.type !== Models.DISPLAY && <label htmlFor={item.id}><b>{item.text}{item.required && <span className="required-symbol">*</span>}</b></label>}
            <ItemProvider item={item} questionnaireResponseItem={questionnaireResponseItem} />
        </div>
    }
}

export default useObservableModel<QuestionItemWrapperProps>(ItemWrapper);