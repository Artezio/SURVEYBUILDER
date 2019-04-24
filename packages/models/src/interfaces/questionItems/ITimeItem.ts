import IQuestionItem from './IQuestionItem';
import { TIME } from '../..';


export interface ITimeItem extends IQuestionItem<string> {
    type: TIME;
    repeats: false;
};

export default ITimeItem;