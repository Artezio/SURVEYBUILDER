export enum ACTIONS {
    LOAD_QUESTIONNAIRE_FETCHING = 'LOAD_QUESTIONNAIRE_FETCHING',
    LOAD_QUESTIONNAIRE_LOADED = 'LOAD_QUESTIONNAIRE_LOADED',
    LOAD_QUESTIONNAIRE_ERROR = 'LOAD_QUESTIONNAIRE_ERROR',
    LOAD_RESPONSE_FETCHING = 'LOAD_RESPONSE_FETCHING',
    LOAD_RESPONSE_LOADED = 'LOAD_RESPONSE_LOADED',
    LOAD_RESPONSE_ERROR = 'LOAD_RESPONSE_ERROR',
    SET_MODE_TO_CREATING = 'SET_MODE_TO_CREATING',
    SET_MODE_TO_UPDATING = 'SET_MODE_TO_UPDATING',
    SAVE_RESPONSE_SAVING = 'SAVE_RESPONSE_SAVING',
    SAVE_RESPONSE_SAVED = 'SAVE_RESPONSE_SAVED',
    SAVE_RESPONSE_ERROR = 'SAVE_RESPONSE_ERROR',
    UPDATE_RESPONSE_UPDATING = 'UPDATE_RESPONSE_UPDATING',
    UPDATE_RESPONSE_UPDATED = 'UPDATE_RESPONSE_UPDATED',
    UPDATE_RESPONSE_ERROR = 'UPDATE_RESPONSE_ERROR'
}

export enum STATUS_RESPONSE_LOADING {
    fetching = 'fetching',
    loaded = 'loaded',
    error = 'error'
}

export enum STATUS_QUESTIONNAIRE_LOADING {
    fetching = 'fetching',
    loaded = 'loaded',
    error = 'error'
}

export enum STATUS_SAVING_RESPONSE {
    saving = 'saving',
    saved = 'saved',
    error = 'error'
}

export enum STATUS_UPDATING_RESPONSE {
    updating = 'updating',
    updated = 'updated',
    error = 'error'
}

export enum MODE {
    creating = 'creating',
    updating = 'updating'
}