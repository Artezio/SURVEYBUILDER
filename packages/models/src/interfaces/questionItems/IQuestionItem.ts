import { ANSWER_TYPE } from '../../constants/itemTypes';
import { IItem } from '../IItem';


export interface IQuestionItem<T> extends IItem {
    type: ANSWER_TYPE;
    initialValue?: T;
}


export default IQuestionItem;