import * as React from 'react';
import * as Models from '@artezio/models';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import { useObservableModel } from '@artezio/observable-react';
import ItemProvider from './ItemProvider';
import { FormState, withFormApi } from 'informed';

export const ERROR_ITEM_CLASS_NAME = 'error-item';

export class ItemWrapper extends React.Component<ItemWrapperProps> {

    static defaultProps: Partial<ItemWrapperProps> = {
        className: ''
    }

    renderErrorMessage() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        const errorMessage = questionnaireResponseItem.errorMessages[0];
        if (formApi.getTouched(item.id) && errorMessage !== undefined) {
            return <span className="d-block mt-n2 text-danger">{errorMessage}</span>
        }
    }

    renderQuestionText() {
        const { item } = this.props;
        if (item.type === Models.GROUP) {
            return <h2>{item.text}</h2>
        }
        if (item.type !== Models.DISPLAY) {
            return <label htmlFor={item.id}>
                {item.text}
                {item.required && <span className="text-danger">*</span>}
            </label>
        }
    }

    render() {
        const { className, item, questionnaireResponseItem, formApi } = this.props;
        const isTouchedAndNotValid = formApi.getTouched(item.id) && !questionnaireResponseItem.isValid;
        const validationStatus = isTouchedAndNotValid ? 'is-invalid' : '';
        let specificClassName;
        if (item.type === Models.GROUP) {
            specificClassName = 'response-group-item';
        } else if (item.type === Models.DISPLAY) {
            specificClassName = 'response-display-item';
        } else {
            specificClassName = 'response-item';
        }
        return questionnaireResponseItem.isEnable && <div className={`${specificClassName} ${isTouchedAndNotValid ? ERROR_ITEM_CLASS_NAME : ''} ${className}`}>
            {this.renderQuestionText()}
            {this.renderErrorMessage()}
            <ItemProvider item={item} questionnaireResponseItem={questionnaireResponseItem} validationStatus={validationStatus} />
        </div>
    }
}

export default withFormApi<Omit<ItemWrapperProps, 'formApi'>, FormState>(useObservableModel(ItemWrapper));