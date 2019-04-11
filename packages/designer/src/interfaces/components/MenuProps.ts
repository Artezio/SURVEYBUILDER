import * as Models from '@art-forms/models';


export interface MenuProps {
    item: Models.GroupItem;
    title: string;
}

export interface DropdownItem {
    title: string;
    action: any;
}

export default MenuProps;