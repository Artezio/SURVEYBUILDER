import * as Models from '@art-forms/models';


export interface QuestionnairePlayerProps {
    questionnaire: Models.IQuestionnaire;
    questionnaireResponseModel: Models.QuestionnaireResponse;
    className?: string;
    onSubmit?: (questionnaireResponse: Models.IQuestionnaireResponse) => void;
    onError?: (err: any) => void;
    forwardRef?: React.RefObject<any>;
}

export default QuestionnairePlayerProps;