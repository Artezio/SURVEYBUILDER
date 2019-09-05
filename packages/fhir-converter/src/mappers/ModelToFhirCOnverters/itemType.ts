import * as Models from '@art-forms/models';
import * as FHIRItemType from "../../constants/FHIRItemType";


export const itemTypeFromModelConverter = (type: Models.ITEM_TYPE): FHIRItemType.FHIRItemType => {
    switch (type) {
        case Models.GROUP: return FHIRItemType.GROUP;
        case Models.DISPLAY: return FHIRItemType.DISPLAY;
        case Models.BOOLEAN: return FHIRItemType.BOOLEAN;
        case Models.ATTACHMENT: return FHIRItemType.ATTACHMENT;
        case Models.CHOICE: return FHIRItemType.CHOICE;
        case Models.DATE: return FHIRItemType.DATE;
        case Models.DATE_TIME: return FHIRItemType.DATE_TIME;
        case Models.DECIMAL: return FHIRItemType.DECIMAL;
        case Models.OPEN_CHOICE: return FHIRItemType.OPEN_CHOICE;
        case Models.STRING: return FHIRItemType.STRING;
        case Models.TIME: return FHIRItemType.TIME;
        case Models.TEXT: return FHIRItemType.TEXT;
        case Models.MULTI_CHOICE: return FHIRItemType.CHOICE;
        default: return FHIRItemType.DISPLAY;
    }
}

export default itemTypeFromModelConverter;