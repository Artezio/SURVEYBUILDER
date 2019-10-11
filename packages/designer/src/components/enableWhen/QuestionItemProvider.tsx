import * as React from 'react';
import * as Models from '@art-forms/models';
import Input from './Input';
import QuestionItemProviderProps from '../../interfaces/components/enableWhen/QuestionItemProviderProps';
import Choice from './Choice';
import OpenChoice from './OpenChoice';
import Boolean from './Boolean';
import DefaultAnswerInput from './defaultAnswerInput';

export const QuestionItemProvider = (props: QuestionItemProviderProps) => {
    const { item = {} as { type: Models.QUESTION_TYPE }, index, enableWhen } = props;
    switch (item.type) {
        case Models.STRING: {
            return <Input enableWhen={enableWhen} index={index} type="text" />
        }
        case Models.TEXT: {
            return <Input enableWhen={enableWhen} index={index} type="textarea" />
        }
        case Models.TIME: {
            return <Input enableWhen={enableWhen} index={index} type="time" />
        }
        case Models.DATE: {
            return <Input enableWhen={enableWhen} index={index} type="date" />
        }
        case Models.DATE_TIME: {
            return <Input enableWhen={enableWhen} index={index} type="datetime-local" />
        }
        case Models.DECIMAL: {
            return <Input enableWhen={enableWhen} index={index} type="number" />
        }
        case Models.CHOICE: ;
        case Models.MULTI_CHOICE: {
            return <Choice enableWhen={enableWhen} index={index} item={item as Models.ChoiceItem} />
        }
        case Models.OPEN_CHOICE: {
            return <OpenChoice enableWhen={enableWhen} index={index} item={item as Models.OpenChoiceItem} />
        }
        case Models.BOOLEAN: {
            return <Boolean enableWhen={enableWhen} index={index} />
        }
        default: {
            return <DefaultAnswerInput />
        }
    }
}

export default QuestionItemProvider;