import IAnswerOption from "./IAnswerOption";
import IInitialAnswerCollection from "./IInitialAnswerCollection";
import { AnswerOption } from "..";

export interface IAnswerOptionCollection extends IInitialAnswerCollection {
    removeAnswerOption(answerOption: IAnswerOption): void;
    setSingleInitialAnswer(value: any): void;
    selectDefaultOption(answerOption: AnswerOption): void;
    unselectDefaultOption(answerOption: AnswerOption): void;
}

export default IAnswerOptionCollection