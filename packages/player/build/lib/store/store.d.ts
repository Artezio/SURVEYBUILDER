import * as redux from 'redux';
export declare const createStore: (initialState?: any) => redux.Store<{
    questionnaire: import("@art-forms/models").Questionnaire | null;
    application: import("../interfaces/Application").Application;
}, redux.AnyAction>;
