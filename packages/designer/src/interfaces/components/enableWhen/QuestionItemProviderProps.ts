import * as Models from '@surveybuilder/models';

export interface QuestionItemProviderProps {
    item: Models.IQuestionItem<any>;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default QuestionItemProviderProps