import * as Models from '@art-forms/models';


export interface GroupItemProps {
    item: Models.GroupItem;
    className?: string;
    nestingLevel: string;
    isItemActive?: boolean;
    subscribe?: () => void;
}

export default GroupItemProps;