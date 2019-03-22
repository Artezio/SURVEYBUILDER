import { QUESTION } from '../constants';
import { IItem } from './IItem';


export interface IQuestionItem<T> extends IItem {
    type: QUESTION;
    initialValue?: T;
}


export default IQuestionItem;