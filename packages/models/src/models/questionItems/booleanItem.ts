import { BOOLEAN } from "../../constants/itemTypes";
import { observable } from '@surveybuilder/observable';
import QuestionItem from "./questionItem";
import { IBooleanItem } from "../../interfaces/questionItems/IBooleanItem";

@observable
export class BooleanItem extends QuestionItem<boolean> implements IBooleanItem {
    type: BOOLEAN = BOOLEAN;
}

export default BooleanItem;