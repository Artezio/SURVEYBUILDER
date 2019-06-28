import * as Models from '@art-forms/models';


export interface GroupItemProps {
    item: Models.GroupItem;
    className?: string;
    nestingLevel: string;
    subscribe?: () => void;
    choseEnableWhenItem: (item: Models.Item) => void;
}

export default GroupItemProps;