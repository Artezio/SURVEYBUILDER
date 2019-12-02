import { DECIMAL } from "../../constants/itemTypes";
import { observable } from '@surveybuilder/observable';
import IDecimalItem from "../../interfaces/questionItems/IDecimalItem";
import QuestionItem from "./questionItem";

@observable
export class DecimalItem extends QuestionItem<number> implements IDecimalItem {
    type: DECIMAL = DECIMAL;
}

export default DecimalItem;