import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import { useObservableModel } from '../observableConnector/useObservableModel';
import ItemProvider from './ItemProvider';
import { FormState, withFormApi } from 'informed';

export class ItemWrapper extends React.Component<ItemWrapperProps> {

    renderErrorMessage() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        if (formApi.getTouched(item.id) && questionnaireResponseItem.errorMessages.length) {
            return <ul className={`${questionnaireResponseItem.errorMessages.length ? "alert alert-danger" : ''}`}>
                {questionnaireResponseItem.errorMessages.map((errorMessage, i) => <li key={i}>{errorMessage}</li>)}
            </ul>
        }
    }

    renderQuestionText() {
        const { item, questionnaireResponseItem, formApi } = this.props;
        const invalidAnswer = formApi.getTouched(item.id) && questionnaireResponseItem.errorMessages.length;
        if (item.type === Models.GROUP) {
            return <h4>{item.text}</h4>
        }
        if (item.type !== Models.DISPLAY) {
            return <label htmlFor={item.id} className={`font-weight-bold ${invalidAnswer ? 'text-danger' : ''}`}>
                {item.text}
                {item.required && <span className="text-danger">*</span>}
            </label>
        }
    }

    render() {
        const { className = '', item, questionnaireResponseItem, formApi } = this.props;
        const wrongValue = formApi.getTouched(item.id) && !questionnaireResponseItem.isValid;
        return questionnaireResponseItem.isEnable && <div className={`questionnaire-response${item.type === Models.GROUP ? '-group' : ''}-item${wrongValue ? ' error-item' : ''} ${className}`}>
            {this.renderQuestionText()}
            {this.renderErrorMessage()}
            <ItemProvider item={item} questionnaireResponseItem={questionnaireResponseItem} />
        </div>
    }
}

export default withFormApi<Omit<ItemWrapperProps, 'formApi'>, FormState>(useObservableModel(ItemWrapper));