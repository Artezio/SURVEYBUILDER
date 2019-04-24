import { QUESTION_TYPE } from '../../constants/itemTypes';
import { IItem } from '../IItem';


export interface IQuestionItem<T> extends IItem {
    type: QUESTION_TYPE;
    initialValue?: T;
}


export default IQuestionItem;