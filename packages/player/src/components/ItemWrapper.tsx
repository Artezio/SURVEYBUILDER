import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemWrapperProps from '../interfaces/components/QuestionItemWrapperProps';
import { useObservableModel } from '@art-forms/observable';
import ItemProvider from './ItemProvider';
import { FormState, withFormApi } from 'informed';
import * as JL from 'json-logic-js';

const findResponseItemById = (id: string): Models.QuestionnaireResponseItem => {
    return { answers: [5] } as any;
};
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

        // questionnaireResponseItem.


        const wrongValue = formApi.getTouched(item.id) && !questionnaireResponseItem.isValid;
        let condition,
            isEnable = true;
        if (item.enableWhen.length > 1) {
            condition = { [item.enableBehavior]: item.enableWhen.map(enableWhen => ({ [enableWhen.operator]: [enableWhen.answer, findResponseItemById(enableWhen.questionId).answers[0]] })) }
        } else if (item.enableWhen.length === 1) {
            const enableWhen = item.enableWhen[0];
            condition = { [enableWhen.operator]: [enableWhen.answer, findResponseItemById(enableWhen.questionId).answers[0]] }
        }
        if (condition) {
            isEnable = JL.apply(condition);
        }
        return isEnable && <div className={`questionnaire-response${item.type === Models.GROUP ? '-group' : ''}-item${wrongValue ? ' error-item' : ''} ${className}`}>
            {item.type !== Models.DISPLAY && <label htmlFor={item.id}><b>{item.text}{item.required && <span className="required-symbol">*</span>}</b></label>}
            <ItemProvider item={item} questionnaireResponseItem={questionnaireResponseItem} />
            {this.renderErrorMessage()}
        </div>
    }
}

export default withFormApi<Omit<ItemWrapperProps, 'formApi'>, FormState>(useObservableModel(ItemWrapper));