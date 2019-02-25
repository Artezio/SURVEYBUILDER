export interface DropdownMenuComponentProps {
    title: string;
    items: DropdownItem[];
}

export interface DropdownItem {
    title: string;
    action: any;
}