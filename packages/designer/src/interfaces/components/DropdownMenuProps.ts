export interface DropdownMenuProps {
    title: string;
    items: DropdownItem[];
}

export interface DropdownItem {
    title: string;
    action: any;
}

export default DropdownMenuProps;