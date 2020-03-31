import * as Models from '@artezio/models';


export interface QuestionnairePlayerProps {
    questionnaire: Models.IQuestionnaire;
    questionnaireResponseModel: Models.QuestionnaireResponse;
    className?: string;
    onSubmit?: (questionnaireResponse: Models.IQuestionnaireResponse) => void;
    onError?: (err: any) => void;
    forwardRef?: React.RefObject<any>;
    buttons?: React.Component
}

export default QuestionnairePlayerProps;