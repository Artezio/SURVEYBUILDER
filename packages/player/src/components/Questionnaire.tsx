import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import ItemProvider from './ItemProvider';
import { useObservableModel } from '@art-forms/observable';
import { completeResponse } from '../mappers/completeResponse';


export class Questionnaire extends React.Component<QuestionnaireProps> {
    constructor(props: QuestionnaireProps) {
        super(props);
        completeResponse(props.questionnaire, props.questionnaireResponse);/// toDo
    }

    renderItemList() {
        const { questionnaire, questionnaireResponse } = this.props;
        return <div className="response-item-list">
            {questionnaire.items && questionnaire.items.map(item => <ItemProvider key={item.id} item={item} questionnaireResponseItem={questionnaireResponse.items.find(responseItem => responseItem.id === item.id)} />)}
        </div>
    }

    render() {
        const { questionnaire, className = '' } = this.props;
        return <div className={`questionnaire-response ${className}`}>
            <div className="header">
                <h3>{questionnaire && questionnaire.title}</h3>
                <p>{questionnaire && questionnaire.description}</p>
            </div>
            {this.renderItemList()}
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);