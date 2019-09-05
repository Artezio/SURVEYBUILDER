import IQuestionItem from './IQuestionItem';
import { TIME } from '../..';


export interface ITimeItem extends IQuestionItem<string> {
    type: TIME;
};

export default ITimeItem;