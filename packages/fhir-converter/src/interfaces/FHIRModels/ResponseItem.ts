export interface ResponseItem {
    id: string;
    linkId: string;
    text: string;
    answer: any[];
    item?: ResponseItem[];
}

export default ResponseItem;