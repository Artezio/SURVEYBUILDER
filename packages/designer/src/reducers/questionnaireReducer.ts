const INITIAL_STATE: QuestionnaireState = {
    title: '',
    description: '',
};
export interface QuestionnaireState {
    title?: string;
    description?: string;
}
export enum QUESTIONNAIRE_ACTIONS {
    SET_TITLE,
    SET_DESCRIPTION
}
export const questionnaireReducer = (state: QuestionnaireState = INITIAL_STATE, action: { type: QUESTIONNAIRE_ACTIONS, value: any }) => {
    switch (action.type) {
        case QUESTIONNAIRE_ACTIONS.SET_DESCRIPTION: {
            return {
                ...state,
                description: action.value
            }
        }
        case QUESTIONNAIRE_ACTIONS.SET_TITLE: {
            return {
                ...state,
                title: action.value
            }
        }
        default: return state;
    }
}

export default questionnaireReducer;