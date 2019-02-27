import { Item } from './Item';

export interface Questionnaire {
    id: string;
    title?: string;
    description?: string;
    dateEffective?: Date;
    dateExpires?: Date;
    items?: Item[];
}

export default Questionnaire;