import { QUESTION_TYPE } from '../../constants/itemTypes';
import { IItem } from '../IItem';
import IInitialAnswer from '../IInitialAnswer';


export interface IQuestionItem<T> extends IItem {
    type: QUESTION_TYPE;
    initialAnswers?: IInitialAnswer<T>[];
}


export default IQuestionItem;