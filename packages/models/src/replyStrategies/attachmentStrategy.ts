import ReplyStrategy from "../interfaces/IReplyStrategy";
import AttachmentItem from "../models/questionItems/attachmentItem";

export const attachmentStrategy: ReplyStrategy = (value, questionnaireResponseItem, answerFactory) => {
    const answer = questionnaireResponseItem.answers.find(answer => answer.value === value);
    if (!answer) {
        if ((questionnaireResponseItem.questionItem as AttachmentItem).multipleFiles) {
            questionnaireResponseItem.addAnswer(answerFactory.createAnswer({ value }));
        } else {
            questionnaireResponseItem.setSingleAnswer(answerFactory.createAnswer({ value }));
        }
    } else {
        answer.remove();
    }
}

export default attachmentStrategy;