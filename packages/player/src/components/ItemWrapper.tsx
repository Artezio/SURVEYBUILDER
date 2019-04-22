import * as React from 'react';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import QuestionItemProvider from './QuestionItemProvider';


export class ItemWrapper extends React.Component<ItemWrapperProps> {

    renderResponseItems() {
        const { item, questionnaireResponseItem } = this.props;
        return questionnaireResponseItem.answers.map(answer => <QuestionItemProvider item={item} answer={answer} key={answer.id} />)
    }

    render() {
        const { className = '', item, questionnaireResponseItem } = this.props;
        return <div className={`questionnaire-response-item ${className}`}>
            <div className="d-flex justify-space-between">
                <label htmlFor={item.id}><b>{item.text}</b></label>
                {item.repeats && <button className="btn btn-outline-secondary"><i className="fas fa-trash"></i></button>}
            </div>
            {this.renderResponseItems()}
            <div>
                <button className="btn btn-outline-secondary">Add Answer</button>
            </div>
        </div>
    }
}

export default ItemWrapper;