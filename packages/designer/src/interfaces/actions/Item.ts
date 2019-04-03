import * as Models from "@art-forms/models";
import { REMOVE_ITEM, UPDATE_ITEM } from "../../constants/actions";
import { Action } from "./Action";


export type RemoveItem = (item: Models.Item) => Action<REMOVE_ITEM, Models.Item>;
export type UpdateItem = (item: Models.Item) => Action<UPDATE_ITEM, Models.Item>;