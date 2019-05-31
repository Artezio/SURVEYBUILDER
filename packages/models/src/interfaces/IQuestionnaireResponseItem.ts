import IAnswer from "./IAnswer";
import ReplyStrategy from "./IReplyStrategy";
import IValidator from "./IValidator";

export interface IQuestionnaireResponseItem {
    id: string;
    text?: string;
    answers?: IAnswer<any>[];
    items?: IQuestionnaireResponseItem[];
    replyStrategy: ReplyStrategy;
    validator: IValidator;
}