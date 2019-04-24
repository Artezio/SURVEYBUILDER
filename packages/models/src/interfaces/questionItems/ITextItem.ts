import IQuestionItem from './IQuestionItem';
import { TEXT } from '../../constants/itemTypes';


export interface ITextItem extends IQuestionItem<string> {
    type: TEXT;
};

export default ITextItem;