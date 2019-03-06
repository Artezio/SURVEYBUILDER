import { Action } from "../interfaces/Action";
import { Application } from "../interfaces/Application";
export declare const application: (state: Application | undefined, action: Action<"SET_APP_MODE", any>) => Application;
export default application;
