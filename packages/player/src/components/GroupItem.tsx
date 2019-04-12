import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';
import * as Models from '@art-forms/models';


export class GroupItem extends React.Component<GroupItemProps> {

    constructor(props: GroupItemProps) {
        super(props);
        props.questionnaireResponseItem.clearQuestionnaireResponseItems();
        props.item.items.forEach(item => {    //////////// CREATE ANOTHER SOLUTION!!!!
            props.questionnaireResponseItem.addQuestionnaireResponseItem({ id: item.id, value: (item as Models.IQuestionItem<any>).initialValue, text: item.text })
        })
    }

    renderItemList() {
        const { item, questionnaireResponseItem } = this.props;
        return <div className="item-list">
            {item.items.map(item => <ItemProvider key={item.id} {...{ item, questionnaireResponseItem: questionnaireResponseItem && questionnaireResponseItem.items.find(responseItem => responseItem.id === item.id) }} />)}
        </div>
    }

    render() {
        const { item, className } = this.props;
        return <div className={`my-5 ${className}`}>
            <h4 className="mb-3">{item.text}</h4>
            {this.renderItemList()}
        </div>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);