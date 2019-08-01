import * as Models from '@art-forms/models';
import FHIRItem from '../interfaces/FHIRModels/Item';
import mapItemTypeToModel from './FhirToModelConverters/itemTypeConverter';
import mapEnableWhenToModel from './FhirToModelConverters/enableWhenConverter';
import mapEnableBehaviorToModel from './FhirToModelConverters/enableBehaviorConverter';
import mapInitialAnswerToModel from './FhirToModelConverters/initialAnswerConverter';
import mapAnswerOptionToModel from './FhirToModelConverters/answerOptionConverter';
import mapItemTypeFromModel from './ModelToFhirCOnverters/itemTypeConverter';
import mapEnableBehaviorFromModel from './ModelToFhirCOnverters/enableBehaviorConverter';
import mapEnableWhenFromModel from './ModelToFhirCOnverters/enableWhenConverter';
import { mapAnswerOptionFromModel } from './ModelToFhirCOnverters/answerOptionConverter';
import mapInitialAnswerFromModel from './ModelToFhirCOnverters/initialAnswerConverter';

type FullItem = Models.IItem & Partial<Omit<Models.IQuestionItem<any>, 'type'>> & Partial<Omit<Models.IChoiceItem, 'type'>> & Partial<Omit<Models.IGroupItem, 'type'>>;

export const itemMapper = {
    toModel(item: FHIRItem): FullItem {
        const newItem: FullItem = {
            id: item.linkId,
            required: item.required,
            text: item.text,
            type: mapItemTypeToModel(item.type, item.repeats),
            items: item.item && item.item.map(item => itemMapper.toModel(item)),
            enableWhen: item.enableWhen && item.enableWhen.map(enableWhen => mapEnableWhenToModel(enableWhen)),
            enableBehavior: mapEnableBehaviorToModel(item.enableBehavior),
            initialAnswers: item.initial && item.initial.map(initial => mapInitialAnswerToModel(initial)),
            options: item.answerOption && item.answerOption.map(answerOption => mapAnswerOptionToModel(answerOption))
        }
        return newItem;
    },
    fromModel(item: FullItem): FHIRItem {
        const newItem: FHIRItem = {
            linkId: item.id,
            required: item.required,
            text: item.text,
            type: mapItemTypeFromModel(item.type),
            repeats: item.type === Models.MULTI_CHOICE,
            item: item.items && item.items.map(item => itemMapper.fromModel(item)),
            enableWhen: item.enableWhen && item.enableWhen.map(enableWhen => mapEnableWhenFromModel(enableWhen)),
            enableBehavior: mapEnableBehaviorFromModel(item.enableBehavior),
            initial: item.initialAnswers && item.initialAnswers.map(initialAnswer => mapInitialAnswerFromModel(initialAnswer, item.type)),
            answerOption: item.options && item.options.map(option => mapAnswerOptionFromModel(option))
        }
        return newItem;
    }
}

export default itemMapper;