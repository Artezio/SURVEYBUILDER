import * as Models from '@art-forms/models';

export interface QuestionItemProviderProps {
    item: Models.QuestionItem<any>;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default QuestionItemProviderProps