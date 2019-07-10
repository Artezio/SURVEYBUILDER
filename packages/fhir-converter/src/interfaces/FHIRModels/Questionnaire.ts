import FHIRItem from './Item';

export interface FHIRQuestionnaire {
    id: string;
    title?: string;
    description?: string;
    item?: FHIRItem[];
}

export default FHIRQuestionnaire;