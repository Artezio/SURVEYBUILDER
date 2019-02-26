import createActionCreator from "./helpers";
import { REMOVE_ITEM } from "../constants/actions";
import { DisplayItem } from "@art-forms/models";

export const removeItem = createActionCreator<REMOVE_ITEM, DisplayItem>(REMOVE_ITEM);