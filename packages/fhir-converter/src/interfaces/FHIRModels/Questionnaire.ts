import FHIRItem from './Item';

export interface FHIRQuestionnaire {
    resourceType: string;
    id: string;
    title?: string;
    description?: string;
    item?: FHIRItem[];
}

export default FHIRQuestionnaire;