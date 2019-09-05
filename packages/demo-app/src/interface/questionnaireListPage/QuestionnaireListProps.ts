import { QuestionnaireListStore } from "./QuestionnaireListStore";
import { RouteChildrenProps } from "react-router";
import { Dispatch } from "../Dispatch";

export interface QuestionnaireListProps extends QuestionnaireListStore, RouteChildrenProps {
    dispatch: Dispatch;
}