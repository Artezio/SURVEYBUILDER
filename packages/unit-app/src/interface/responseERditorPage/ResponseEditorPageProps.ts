import { ResponseEditorPageStore } from "./ResponseEditorPageStore";
import { RouteChildrenProps } from "react-router";

export interface ResponseEditorPageProps extends ResponseEditorPageStore, RouteChildrenProps<{ questionnaireId: string, responseId: string }> {
    dispatch: (args?: any) => void;
}