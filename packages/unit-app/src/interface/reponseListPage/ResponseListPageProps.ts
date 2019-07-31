import { RouteChildrenProps } from "react-router";
import { ResponseListPageStore } from "./ResponseListPageStore";

export interface ResponseListPageProps extends ResponseListPageStore, RouteChildrenProps<{ questionnaireId: string }> {
    dispatch: (args?: any) => void;
}