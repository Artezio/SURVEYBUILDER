import { RouteChildrenProps } from "react-router";
import { ResponseListPageStore } from "./ResponseListPageStore";
import { Dispatch } from "../Dispatch";

export interface ResponseListPageProps extends ResponseListPageStore, RouteChildrenProps<{ questionnaireId: string }> {
    dispatch: Dispatch;
}