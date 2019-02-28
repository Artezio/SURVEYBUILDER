import { Item } from './Item';


export interface Questionnaire {
    id: string;
    title?: string;
    description?: string;
    items?: Item[];
}

export default Questionnaire;