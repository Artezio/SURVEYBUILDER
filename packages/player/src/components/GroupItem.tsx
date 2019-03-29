import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';
import * as Models from '@art-forms/models';


export class GroupItem extends React.Component<GroupItemProps> {

    constructor(props: GroupItemProps) {
        super(props);
        props.item.items.forEach(x => {    //////////// CREATE ANOTHER SOLUTION!!!!
            (!props.questionnaireResponseItem.items.some(item => item.id === x.id)) && props.questionnaireResponseItem.addQuestionnaireResponseItem({ id: x.id, value: (x as Models.ITextItem).initialValue })
        })
    }
    render() {
        const { item, questionnaireResponseItem } = this.props;
        return <div className="border border-primary p-3 my-1">
            <p>{item.text}</p>
            {item.items.map(item => {
                return <div key={item.id}>
                    {ItemProvider({ item, questionnaireResponseItem: questionnaireResponseItem && questionnaireResponseItem.items.find(x => x.id === item.id) })}
                </div>
            })}
        </div>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);