import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemWrapperProps from '../interfaces/components/QuestionItemWrapperProps';
import { useObservableModel } from '@art-forms/observable';
import ItemProvider from './ItemProvider';
import { FormState, withFormApi } from 'informed';

export class ItemWrapper extends React.Component<ItemWrapperProps> {

    renderErrorMessage() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        if (formApi.getTouched(item.id)) {
            return <ul>
                {questionnaireResponseItem.errorMessages.map((errorMessage, i) => <li key={i}>{errorMessage}</li>)}
            </ul>
        }
    }

    render() {
        const { className = '', item, questionnaireResponseItem, formApi } = this.props;
        const wrongValue = formApi.getTouched(item.id) && !questionnaireResponseItem.isValid;
        return questionnaireResponseItem.isEnable && <div className={`questionnaire-response${item.type === Models.GROUP ? '-group' : ''}-item${wrongValue ? ' error-item' : ''} ${className}`}>
            {item.type !== Models.DISPLAY && <label htmlFor={item.id}><b>{item.text}{item.required && <span className="required-symbol">*</span>}</b></label>}
            <ItemProvider item={item} questionnaireResponseItem={questionnaireResponseItem} />
            {this.renderErrorMessage()}
        </div>
    }
}

export default withFormApi<Omit<ItemWrapperProps, 'formApi'>, FormState>(useObservableModel(ItemWrapper));