import { QuestionnaireListStore } from "./QuestionnaireListStore";
import { RouteChildrenProps } from "react-router";

export interface QuestionnaireListProps extends QuestionnaireListStore, RouteChildrenProps {
    dispatch: (args?: any) => void;
}