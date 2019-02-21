import React from 'react';

export interface DropdownItem {
    title: string;
    action: any;
}

export interface DropdownMenuProps {
    title: string;
    items: DropdownItem[];
}

export const DropdownMenu = (props: DropdownMenuProps) => {
    const { items, title } = props;
    return <div className="js-dropdown-menu">
        <button className="btn btn-secondary dropdown-toggle" role="button" id="context-menu-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {title}
        </button>
        <div className="dropdown-menu" aria-labelledby="context-menu-link">
            {items.map((item, i) => <button key={i} className="dropdown-item btn" onClick={item.action}>{item.title}</button>)}
        </div>
    </div>
}

export default DropdownMenu