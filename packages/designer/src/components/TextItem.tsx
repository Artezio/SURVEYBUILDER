import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/textItem';
import DropdownMenuComponent from './DropdownMenu';
import TextItemComponentProps, { TextItemComponentActions, TextItemComponentOwnProps } from '../interfaces/TextItemComponentProps';

const mapDispatchToProps: TextItemComponentActions = {
    removeItem
}

const mergeProps = (stateProps: null, dispatchProps: TextItemComponentActions, ownProps: TextItemComponentOwnProps): TextItemComponentProps => Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } });

export class TextItemComponent extends React.Component<TextItemComponentProps> {
    removeItem = () => {
        const { item } = this.props;
        const { removeItem } = this.props.actions;
        removeItem(item);
    }
    render() {
        const { item } = this.props;
        return <div className="container text-item border border-success my-1 py-1">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenuComponent title="Context menu" items={[
                    { title: 'Remove item', action: this.removeItem }
                ]} />
            </div>
            <input className="form-control" type="text" defaultValue={item.text} autoFocus={true} />
        </div>
    }
}

export default connect(null, mapDispatchToProps, mergeProps)(TextItemComponent);