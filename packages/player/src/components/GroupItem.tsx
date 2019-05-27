import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import ItemProvider from './ItemProvider';
import { useObservableModel } from '@art-forms/observable';
import { completeResponse } from '../mappers/completeResponse';


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