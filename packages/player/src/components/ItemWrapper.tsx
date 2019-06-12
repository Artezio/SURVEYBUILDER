import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemWrapperProps from '../interfaces/components/QuestionItemWrapperProps';
import { useObservableModel } from '@art-forms/observable';
import ItemProvider from './ItemProvider';
import { FormState, withFormApi } from 'informed';
import { ERROR_MESSAGES } from '../constants/errorMessages';


export class ItemWrapper extends React.PureComponent<ItemWrapperProps> {
    answerFactory: Models.AnswerFactory = new Models.AnswerFactory(this.props.questionnaireResponseItem);

    renderErrorMessage() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        if (!questionnaireResponseItem.isValidByRequired) {
            return formApi.getTouched(item.id) && <span className="error-message">{ERROR_MESSAGES.IS_REQUIRED}</span>
        }
        if (!questionnaireResponseItem.isValidByRegExp) {
            return formApi.getTouched(item.id) && <span className="error-message">{ERROR_MESSAGES.INVALID_INPUT}</span>
        }
    }

    render() {
        const { className = '', item, questionnaireResponseItem, formApi } = this.props;
        const wrongValue = formApi.getTouched(item.id) && (!questionnaireResponseItem.isValidByRegExp || !questionnaireResponseItem.isValidByRequired);
        return <div className={`questionnaire-response${item.type === Models.GROUP ? '-group' : ''}-item${wrongValue ? ' error-item' : ''} ${className}`}>
            {item.type !== Models.DISPLAY && <label htmlFor={item.id}><b>{item.text}{item.required && <span className="required-symbol">*</span>}</b></label>}
            <ItemProvider item={item} questionnaireResponseItem={questionnaireResponseItem} />
            {this.renderErrorMessage()}
        </div>
    }
}

export default withFormApi<ItemWrapperProps, FormState>(useObservableModel(ItemWrapper));