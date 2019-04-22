import * as React from 'react';
import * as Models from '@art-forms/models';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';

const completeResponse = (item: Models.GroupItem, response: Models.QuestionnaireResponseItem) => {
    item.items && item.items.forEach(item => {
        let items,
            answers;
        if (item.type === Models.GROUP && (item as Models.IGroupItem).items !== undefined) {
            items = (item as Models.GroupItem).items.map(itm => new Models.QuestionnaireResponseItem({ id: itm.id, text: itm.text }))
        }
        else {
            const responseItem = response.items.find(responseItem => responseItem.id === item.id);
            if (responseItem && responseItem.answers !== undefined) {
                answers = responseItem.answers.length === 0 ? [new Models.Answer()] :
                    responseItem.answers;
            }
            else {
                answers = [new Models.Answer()];
            }
        }
        response.addQuestionnaireResponseItem(new Models.QuestionnaireResponseItem({ id: item.id, text: item.text, items, answers }))
    })
}

export class GroupItem extends React.Component<GroupItemProps> {

    constructor(props: GroupItemProps) {
        super(props);
        completeResponse(props.item, props.questionnaireResponseItem);
    }

    renderItemList() {
        const { item, questionnaireResponseItem } = this.props;
        return <div className="response-item-list">
            {item.items.map(item => <ItemProvider key={item.id} item={item} questionnaireResponseItem={questionnaireResponseItem.items.find(responseItem => responseItem.id === item.id)} />)}
        </div>
    }

    render() {
        const { item, className = '' } = this.props;
        return <div className={`questionnaire-response-group-item ${className}`}>
            <h5>{item.text}</h5>
            {this.renderItemList()}
        </div>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);