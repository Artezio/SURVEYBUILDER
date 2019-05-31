import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import AnswerFactory from "../factories/answerFactory";
import IValidator from "./IValidator";

export type ReplyStrategy = (value: any, validator: IValidator, questionnaireResponseItem: QuestionnaireResponseItem, answerFactory: AnswerFactory) => void;

export default ReplyStrategy;