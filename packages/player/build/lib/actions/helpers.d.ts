import { Action } from "../interfaces/Action";
export declare function createAction<T, P>(type: T, payload: P): Action<T, P>;
export declare function createActionCreator<T, P>(type: T): (payload: P) => Action<T, P>;
