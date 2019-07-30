import { QuestionnaireEditorStore } from "./QuestionnaireEditorStore";
import { RouteChildrenProps } from 'react-router';
import { Dispatch } from "redux";
import { Action } from 'redux-actions';

export interface QuestionnaireEditorProps extends QuestionnaireEditorStore, RouteChildrenProps<{ questionnaireId: string }> {
    dispatch: (args?: any) => void;
}