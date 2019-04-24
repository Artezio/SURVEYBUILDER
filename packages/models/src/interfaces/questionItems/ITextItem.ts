import IQuestionItem from './IQuestionItem';
import { TEXT } from '../../constants/itemTypes';


export interface ITextItem extends IQuestionItem<string> {
    type: TEXT;
    repeats: false;
};

export default ITextItem;