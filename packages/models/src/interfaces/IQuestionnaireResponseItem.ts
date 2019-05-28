import IAnswer from "./IAnswer";
import ReplyStrategy from "./IReplyStrategy";

export interface IQuestionnaireResponseItem {
    id: string;
    text?: string;
    answers?: IAnswer<any>[];
    items?: IQuestionnaireResponseItem[];
    replyStrategy: ReplyStrategy;
}