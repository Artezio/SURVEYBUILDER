import createActionCreator from "./helpers";
import { REMOVE_ITEM } from "../constants/questionnaireActions";
import { DisplayItem } from "@art-forms/models";

export const removeItem = createActionCreator<REMOVE_ITEM, DisplayItem>(REMOVE_ITEM);