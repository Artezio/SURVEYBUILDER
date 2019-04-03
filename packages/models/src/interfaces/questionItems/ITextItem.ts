import IQuestionItem from './IQuestionItem';
import { TEXT } from '../../constants/itemTypes';


export interface ITextItem extends IQuestionItem<string> {
    answerType: TEXT;
};

export default ITextItem;