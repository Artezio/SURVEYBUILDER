import * as React from 'react';
import QuestionnaireItemListProps from '../interfaces/components/QuestionnaireItemListProps';
import ItemWrapper from './ItemWrapper';


export class QuestionnaireItemList extends React.Component<QuestionnaireItemListProps> {

    componentDidMount() {
        const { subscribe } = this.props;
        subscribe && subscribe();
    }

    render() {
        const { item, className = '', nestingLevel, subscribe, choseEnableWhenItem } = this.props;
        return <div className={`questionnaire-item-list ${className}`} data-nesting-level={nestingLevel}>
            {item.items.map((item, i) => <ItemWrapper item={item} key={item.id} nestingLevel={`${nestingLevel}:${i}`} subscribe={subscribe} choseEnableWhenItem={choseEnableWhenItem} />)}
        </div>
    }
}

export default QuestionnaireItemList;