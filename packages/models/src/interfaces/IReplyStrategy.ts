import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import AnswerFactory from "../factories/answerFactory";

export type ReplyStrategy = (value: string | undefined, questionnaireResponseItem: QuestionnaireResponseItem, answerFactory: AnswerFactory) => void;

export default ReplyStrategy;