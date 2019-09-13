import { QuestionnaireListPageStore } from "./QuestionnaireListPageStore";
import { RouteChildrenProps } from "react-router";
import { Dispatch } from "../Dispatch";

export interface QuestionnaireListPageProps extends QuestionnaireListPageStore, RouteChildrenProps {
    dispatch: Dispatch;
}