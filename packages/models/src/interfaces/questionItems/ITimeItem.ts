import IQuestionItem from './IQuestionItem';
import { TIME } from '../../constants/itemTypes';


export interface ITimeItem extends IQuestionItem<string> {
    type: TIME;
};

export default ITimeItem;