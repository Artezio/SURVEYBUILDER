import * as Models from '@surveybuilder/models';
import * as FHIRItemType from "../../constants/FHIRItemType";


export const itemTypeToModelConverter = (type: FHIRItemType.FHIRItemType, multipleAnswers?: boolean): Models.ITEM_TYPE => {
    if (type === FHIRItemType.CHOICE && multipleAnswers) {
        return Models.MULTI_CHOICE;
    }
    switch (type) {
        case FHIRItemType.GROUP: return Models.GROUP;
        case FHIRItemType.DISPLAY: return Models.DISPLAY;
        case FHIRItemType.BOOLEAN: return Models.BOOLEAN;
        case FHIRItemType.ATTACHMENT: return Models.ATTACHMENT;
        case FHIRItemType.CHOICE: return Models.CHOICE;
        case FHIRItemType.DATE: return Models.DATE;
        case FHIRItemType.DATE_TIME: return Models.DATE_TIME;
        case FHIRItemType.DECIMAL: return Models.DECIMAL;
        case FHIRItemType.OPEN_CHOICE: return Models.OPEN_CHOICE;
        case FHIRItemType.STRING: return Models.STRING;
        case FHIRItemType.TIME: return Models.TIME;
        case FHIRItemType.TEXT: return Models.TEXT;
        default: return Models.DISPLAY;
    }
}

export default itemTypeToModelConverter;