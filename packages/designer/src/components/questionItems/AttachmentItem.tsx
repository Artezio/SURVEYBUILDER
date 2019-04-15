import * as React from 'react';
import { AttachmentItemProps } from '../../interfaces/components/questionItems/AttachmentItemProps';
import useObservableModel from '../../HOCs/useObservableModel';


export class AttachmentItem extends React.Component<AttachmentItemProps> {
    render() {
        const { item } = this.props;
        return <div className="form-group">
            <div className="input-group">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id={`${item.id}-initial`} disabled={true} />
                    <label className="custom-file-label" htmlFor={`${item.id}-initial`}>Choose file</label>
                </div>
            </div>
        </div>
    }
}

export default useObservableModel<AttachmentItemProps>(AttachmentItem);