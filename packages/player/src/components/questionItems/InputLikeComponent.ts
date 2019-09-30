import * as React from 'react';
import QuestionItemProps from '../../interfaces/components/questionItems/QuestionItemProps';

export abstract class InputLikeComponent<T extends QuestionItemProps<any>> extends React.PureComponent<T> {
    initialValue?: any = this.props.questionnaireResponseItem.answers && this.props.questionnaireResponseItem.answers[0] && this.props.questionnaireResponseItem.answers[0].value;

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(formApi.getValue(item.id));
    }

    validate() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.validate();
        const errorMessages = questionnaireResponseItem.errorMessages.join(' ');
        return errorMessages === '' ? undefined : errorMessages;
    }
}

export default InputLikeComponent;