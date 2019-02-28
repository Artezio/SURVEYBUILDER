import * as Models from "@art-forms/models";
import { REMOVE_ITEM, UPDATE_DISPLAY_ITEM } from "../../constants/actions";
import { Action } from "./Action";


export type RemoveItemAction = (item: Models.Item) => Action<REMOVE_ITEM, Models.Item>;
export type UpdateDisplayItem = (item: Models.DisplayItem) => Action<UPDATE_DISPLAY_ITEM, Models.Item>;