import { QuestionnaireEditorStore } from "./QuestionnaireEditorStore";
import { RouteChildrenProps } from 'react-router';

export interface QuestionnaireEditorProps extends QuestionnaireEditorStore, RouteChildrenProps<{ questionnaireId: string }> {
    dispatch: (args?: any) => void;
}