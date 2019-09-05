import * as Models from '@art-forms/models';

export interface QuestionItemProviderProps {
    item: Models.IQuestionItem<any>;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default QuestionItemProviderProps