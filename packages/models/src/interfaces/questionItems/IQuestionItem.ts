import { QUESTION } from '../../constants/itemTypes';
import { IItem } from '../IItem';
import { ANSWER_TYPE } from '../../constants/answerTypes';


export interface IQuestionItem<T> extends IItem {
    type: QUESTION;
    initialValue?: T;
    answerType: ANSWER_TYPE;
}


export default IQuestionItem;