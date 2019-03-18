import { QUESTION } from '../constants';
import { Item } from './Item';


export interface QuestionItem<T> extends Item {
    type: QUESTION;
    initialValue?: T;
}


export default QuestionItem;