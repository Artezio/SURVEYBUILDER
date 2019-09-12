import * as Models from '@art-forms/models';
import { FHIRItem } from '../interfaces/FHIRModels/Item';
import { itemTypeToModelConverter } from './FhirToModelConverters/itemType';
import { enableWhenToModelConverter } from './FhirToModelConverters/enableWhen';
import { enableBehaviorToModelConverter } from './FhirToModelConverters/enableBehavior';
import { initialAnswerToModelConverter } from './FhirToModelConverters/initialAnswer';
import { answerOptionToModelConverter } from './FhirToModelConverters/answerOption';
import { itemTypeFromModelConverter } from './ModelToFhirCOnverters/itemType';
import { enableBehaviorFromModelConverter } from './ModelToFhirCOnverters/enableBehavior';
import { enableWhenFromModelConverter } from './ModelToFhirCOnverters/enableWhen';
import { answerOptionFromModelConverter } from './ModelToFhirCOnverters/answerOption';
import { initialAnswerFromModelConverter } from './ModelToFhirCOnverters/initialAnswer';

type FullItem = Models.IItem & Partial<Omit<Models.IQuestionItem<any>, 'type'>> & Partial<Omit<Models.IChoiceItem, 'type'>> & Partial<Omit<Models.IGroupItem, 'type'>> & { multipleFiles?: boolean };

export const questionnaireItemConverter = {
    toModel(item: FHIRItem): FullItem {
        const newItem: FullItem = {
            id: item.linkId,
            required: item.required,
            text: item.text,
            type: itemTypeToModelConverter(item.type, item.repeats),
            items: item.item && item.item.map(item => questionnaireItemConverter.toModel(item)),
            enableWhen: item.enableWhen && item.enableWhen.map(enableWhen => enableWhenToModelConverter(enableWhen)),
            enableBehavior: enableBehaviorToModelConverter(item.enableBehavior),
            initialAnswers: item.initial && item.initial.map(initial => initialAnswerToModelConverter(initial)),
            options: item.answerOption && item.answerOption.map(answerOption => answerOptionToModelConverter(answerOption)),
            multipleFiles: itemTypeToModelConverter(item.type, item.repeats) === Models.ATTACHMENT && item.repeats
        }
        return newItem;
    },
    fromModel(item: FullItem): FHIRItem {
        const newItem: FHIRItem = {
            linkId: item.id,
            required: item.required,
            text: item.text,
            type: itemTypeFromModelConverter(item.type),
            repeats: item.type === Models.MULTI_CHOICE || item.multipleFiles,
            item: item.items && item.items.map(item => questionnaireItemConverter.fromModel(item)),
            enableWhen: item.enableWhen && item.enableWhen.map(enableWhen => enableWhenFromModelConverter(enableWhen)),
            enableBehavior: enableBehaviorFromModelConverter(item.enableBehavior),
            initial: item.initialAnswers && item.initialAnswers.map(initialAnswer => initialAnswerFromModelConverter(initialAnswer, item.type)),
            answerOption: item.options && item.options.map(option => answerOptionFromModelConverter(option))
        }
        return newItem;
    }
}

export default questionnaireItemConverter;