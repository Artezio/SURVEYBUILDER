import { TextItem, Questionnaire } from "../../../models/src";
import { QUESTIONNAIRE_ACTION_TYPES } from "../reducers/questionnaire";

const actionCreator = <ActionType, PayloadType>(type: ActionType) => (payload: PayloadType) => ({ type: type, payload: payload });


export const setTitle = actionCreator<QUESTIONNAIRE_ACTION_TYPES, string>(QUESTIONNAIRE_ACTION_TYPES.SET_TITLE);
export const setDescription = actionCreator<QUESTIONNAIRE_ACTION_TYPES, string>(QUESTIONNAIRE_ACTION_TYPES.SET_DESCRIPTION);
export const addTextItem = actionCreator<QUESTIONNAIRE_ACTION_TYPES, TextItem>(QUESTIONNAIRE_ACTION_TYPES.ADD_ITEM);


export const createQuestionnaire = actionCreator<QUESTIONNAIRE_ACTION_TYPES, Questionnaire>(QUESTIONNAIRE_ACTION_TYPES.CREATE_QUESTIONNAIRE);