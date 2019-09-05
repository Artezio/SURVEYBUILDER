import * as React from 'react';
import QuestionnaireItemListProps from '../interfaces/components/QuestionnaireItemListProps';
import ItemWrapper from './ItemWrapper';


export class QuestionnaireItemList extends React.Component<QuestionnaireItemListProps> {

    componentDidMount() {
        const { subscribe } = this.props;
        subscribe && subscribe();
    }

    render() {
        const { itemList, className = '', nestingLevel, subscribe } = this.props;
        return <div className={`questionnaire-item-list ${className}`} data-nesting-level={nestingLevel}>
            {itemList.map((item, i) => <ItemWrapper item={item} key={item.id} nestingLevel={`${nestingLevel}:${i}`} subscribe={subscribe} />)}
        </div>
    }
}

export default QuestionnaireItemList;