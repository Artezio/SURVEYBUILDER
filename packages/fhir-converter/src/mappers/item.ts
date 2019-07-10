import * as Models from '@art-forms/models';
import FHIRItem from '../interfaces/FHIRModels/Item';
import mapItemTypeToModel from './FhirToModelConverters/itemTypeConverter';
import mapEnableWhenToModel from './FhirToModelConverters/enableWhenConverter';
import mapEnableBehaviorToModel from './FhirToModelConverters/enableBehaviorConverter';
import mapInitialAnswerToModel from './FhirToModelConverters/initialAnswerConverter';
import mapAnswerOptionToModel from './FhirToModelConverters/answerOptionConverter';

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
            options: item.option && item.option.map(answerOption => mapAnswerOptionToModel(answerOption))
        }
        return newItem;
    }
}

export default itemMapper;