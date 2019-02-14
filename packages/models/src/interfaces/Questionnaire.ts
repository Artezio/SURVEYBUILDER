import DisplayItem from './displayItem';

export interface Questionnaire {
    id: string;
    title?: string;
    description?: string;
    dateEffective?: Date;
    dateExpires?: Date;
    items?: DisplayItem[];
}

export default Questionnaire;