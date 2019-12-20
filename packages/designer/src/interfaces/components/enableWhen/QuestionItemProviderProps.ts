import * as Models from '@artezio/models';

export interface QuestionItemProviderProps {
    item: Models.IQuestionItem<any>;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default QuestionItemProviderProps