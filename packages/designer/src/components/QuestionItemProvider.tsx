import * as React from 'react';
import * as Models from '@art-forms/models';
import TextItem from './TextItem';


export const QuestionItemProvider = (props: any) => {
    const { item } = props;
    switch ((item as Models.IQuestionItem<any>).answerType) {
        case Models.TEXT: {
            return <TextItem {...props} />
        }
        case Models.STRING: {

        }
        default: {
            return null;
        }
    }
}

export default QuestionItemProvider;