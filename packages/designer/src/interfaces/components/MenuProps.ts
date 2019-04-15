import * as Models from '@art-forms/models';


export interface MenuProps {
    item: Models.GroupItem | Models.Questionnaire;
    title?: string;
}

export default MenuProps;