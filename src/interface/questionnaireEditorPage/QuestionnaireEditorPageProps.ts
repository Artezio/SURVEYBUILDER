import { QuestionnaireEditorPageStore } from "./QuestionnaireEditorPageStore";
import { RouteChildrenProps } from 'react-router';
import { Dispatch } from "../Dispatch";

export interface QuestionnaireEditorPageProps extends QuestionnaireEditorPageStore, RouteChildrenProps<{ questionnaireId: string }> {
    dispatch: Dispatch;
}