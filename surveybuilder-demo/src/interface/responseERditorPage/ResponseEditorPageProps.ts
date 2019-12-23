import { ResponseEditorPageStore } from "./ResponseEditorPageStore";
import { RouteChildrenProps } from "react-router";
import { Dispatch } from "../Dispatch";

export interface ResponseEditorPageProps extends ResponseEditorPageStore, RouteChildrenProps<{ questionnaireId: string, responseId: string }> {
    dispatch: Dispatch;
}