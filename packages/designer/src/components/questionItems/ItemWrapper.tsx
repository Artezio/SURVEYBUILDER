import * as React from 'react';
import ItemWrapperProps from '../../interfaces/components/questionItems/ItemWrapperProps';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import ItemProvider from '../ItemProvider';
import Menu from '../Menu';


export class ItemWrapper extends React.Component<ItemWrapperProps> {
    render() {
        const { item, className = '' } = this.props;
        return <div className={`item card card-sm mb-3 ${className}`}>
            <div className="card-header p-1 d-flex justify-content-end">
                {item.type === Models.GROUP && <Menu title="Context menu" item={item as Models.GroupItem} />}
            </div>
            <div className="card-body p-2">
                <ItemProvider item={item} />
            </div>
            <div className="card-footer p-1 d-flex justify-content-between align-items-center">
                <div className="custom-control mb-0">
                    <input name="required" type="checkbox" className="custom-control-input" id="item-required" />
                    <label className="custom-control-label" htmlFor="item-required">Required</label>
                </div>
                <button className="btn p-1 mr-2" onClick={item.remove.bind(item)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    }
}

export default useObservableModel<ItemWrapperProps>(ItemWrapper);