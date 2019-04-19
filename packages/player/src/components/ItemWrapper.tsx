import * as React from 'react';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import QuestionItemProvider from './QuestionItemProvider';


export class ItemWrapper extends React.Component<ItemWrapperProps> {
    render() {
        const { className = '', item, questionnaireResponseItem } = this.props;
        return <div className={`questionnaire-response-item ${className}`}>
            <div className="d-flex justify-space-between">
                <label htmlFor={item.id}><b>{item.text}</b></label>
                {item.repeats && <button className="btn btn-outline-secondary"><i className="fas fa-trash"></i></button>}
            </div>
            <QuestionItemProvider item={item} questionnaireResponseItem={questionnaireResponseItem} />
            <div className="w-100% d-flex">
                <button className="btn btn-outline-secondary ml-auto">Add Answer</button>
            </div>
        </div>
    }
}

export default ItemWrapper;