import * as Models from '@art-forms/models';


export interface SelectMenuProps {
    item: Models.Item;
    title: string;
}

export interface SelectMenuOption {
    title: string;
    value: string;
}

export default SelectMenuProps;