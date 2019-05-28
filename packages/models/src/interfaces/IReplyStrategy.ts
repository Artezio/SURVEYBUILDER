import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import AnswerFactory from "../factories/answerFactory";
import QuestionItem from "../models/questionItems/questionItem";

export type ReplyStrategy = (value: any, item: QuestionItem<any> | undefined, questionnaireResponseItem: QuestionnaireResponseItem, answerFactory: AnswerFactory) => void;

export default ReplyStrategy;