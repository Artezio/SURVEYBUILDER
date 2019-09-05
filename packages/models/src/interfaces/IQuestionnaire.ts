import { IItem } from './IItem';


export interface IQuestionnaire {
    id: string;
    title?: string;
    description?: string;
    items?: IItem[];
}

export default IQuestionnaire;