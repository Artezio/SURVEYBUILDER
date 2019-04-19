import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import * as Models from '@art-forms/models';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';


const recursivelyCompleteResponseItem = (item: Models.Item): Models.QuestionnaireResponseItem => {
    const items = (item as Models.IGroupItem).items && (item as Models.GroupItem).items.map(itm => recursivelyCompleteResponseItem(itm))
    return new Models.QuestionnaireResponseItem({ id: item.id, text: item.text, items: items });
};

const completeResponse = (questionnaire: Models.IQuestionnaire, response: Models.QuestionnaireResponse) => {
    questionnaire.items && questionnaire.items.forEach(item => {
        let items,
            answers;
        if ((item as Models.IGroupItem).items !== undefined) {
            items = (item as Models.GroupItem).items.map(itm => recursivelyCompleteResponseItem(itm))
        }
        else {
            const responseItem = response.items.find(responseItem => responseItem.id === item.id);
            answers = responseItem && responseItem.answers;
        }
        response.addQuestionnaireResponseItem(new Models.QuestionnaireResponseItem({ id: item.id, text: item.text, items, answers }))
    })
}

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