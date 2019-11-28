import * as React from 'react';
import QuestionnaireItemListProps from '../interfaces/components/QuestionnaireItemListProps';
import ItemWrapper from './ItemWrapper';
import QuestionnaireContext from '../helpers/questionnaireContext';


export class QuestionnaireItemList extends React.Component<QuestionnaireItemListProps> {

    componentDidMount() {
        const { subscribe } = this.props;
        subscribe && subscribe();
    }

    render() {
        const { itemList, className = '', nestingLevel, subscribe, isItemActive } = this.props;
        return <div className={`questionnaire-item-list ${className}`} data-nesting-level={nestingLevel}>
            {itemList.map((item, i) => <QuestionnaireContext.Consumer key={item.id}>
                {consumeValues => <ItemWrapper item={item} nestingLevel={`${nestingLevel}:${i}`} subscribe={subscribe} isItemActive={isItemActive} {...consumeValues} />}
            </QuestionnaireContext.Consumer>)}
        </div>
    }
}

export default QuestionnaireItemList;