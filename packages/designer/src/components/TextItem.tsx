import React from 'react';
import { TextItem } from '@art-forms/models';
import TextItemActions from '../interfaces/TextItemActions';
import { connect } from 'react-redux';
import { removeItem } from '../actions/questionnaire';
import DropdownMenu from './DropdownMenu';

export interface TextItemComponentProps extends TextItemActions {
    item: TextItem;
}

const mapDispatchToProps: TextItemActions = {
    removeItem
}

export class TextItemComponent extends React.Component<TextItemComponentProps> {
    removeItem = () => {
        const { removeItem, item } = this.props;
        removeItem && removeItem(item);
    }
    render() {
        const { item } = this.props;
        return <div className="container text-item border border-success my-1 py-1">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenu title="Context menu" items={[
                    { title: 'Remove item', action: this.removeItem }
                ]} />
            </div>
            <input className="form-control" type="text" defaultValue={item.text} autoFocus={true} />
        </div>
    }
}

export default connect(store => store, mapDispatchToProps)(TextItemComponent);