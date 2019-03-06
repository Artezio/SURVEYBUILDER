import { Application } from "../Application";
import * as Models from '@art-forms/models';
import { toggleAppModeToDesign } from "../../actions/application";


export interface AppState {
    application: Application;
    questionnaire: Models.Questionnaire;
}

export interface AppActions {
    toggleAppModeToDesign: typeof toggleAppModeToDesign
}

export type AppProps = AppState & AssignToActions<AppActions>;