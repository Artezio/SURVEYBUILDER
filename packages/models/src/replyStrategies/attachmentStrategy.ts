import ReplyStrategy from "../interfaces/IReplyStrategy";

export const attachmentStrategy: ReplyStrategy = (value: string[], questionnaireResponseItem, answerFactory) => {
    questionnaireResponseItem.answers = value.map(fileName => answerFactory.createAnswer({ value: fileName }));
}

export default attachmentStrategy;