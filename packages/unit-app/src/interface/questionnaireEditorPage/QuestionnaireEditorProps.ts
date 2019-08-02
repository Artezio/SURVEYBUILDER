import { QuestionnaireEditorStore } from "./QuestionnaireEditorStore";
import { RouteChildrenProps } from 'react-router';
import { Dispatch } from "../Dispatch";

export interface QuestionnaireEditorProps extends QuestionnaireEditorStore, RouteChildrenProps<{ questionnaireId: string }> {
    dispatch: Dispatch;
}