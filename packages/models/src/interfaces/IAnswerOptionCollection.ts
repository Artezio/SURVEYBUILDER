import IAnswerOption from "./IAnswerOption";
import IInitialAnswerCollection from "./IInitialAnswerCollection";

export interface IAnswerOptionCollection extends IInitialAnswerCollection {
    removeAnswerOption(answerOption: IAnswerOption): void;
    setSingleInitialAnswer(value: any): void;
}

export default IAnswerOptionCollection