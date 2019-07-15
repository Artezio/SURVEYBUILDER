export interface ResponseItem {
    id: string;
    linkedId: string;
    text: string;
    answer: any[];
    item?: ResponseItem[];
}

export default ResponseItem;