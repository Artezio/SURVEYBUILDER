import * as React from 'react';
import * as Models from '@art-forms/models';
import { FormApi } from 'informed';
import QuestionItemProps from '../../interfaces/components/QuestionItemProps';


export abstract class QuestionItem<T extends QuestionItemProps<any>> extends React.Component<T> {
    formApi?: FormApi<Models.IAnswer<any>>;

    submitForm() {
        this.formApi && this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IAnswer<any>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IAnswer<any>>) {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(values.value);
    }
}

export default QuestionItem;