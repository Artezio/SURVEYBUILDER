import * as Models from '@art-forms/models';
import IWithFormApi from '../IWithFormApi';


export interface ItemWrapperProps extends IWithFormApi {
    item: Models.IItem;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    className?: string;
}

export default ItemWrapperProps;