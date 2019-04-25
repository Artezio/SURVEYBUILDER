import * as React from 'react';
import useObservableModel from '../../HOCs/useObservableModel';
import AttachmentItemProps from '../../interfaces/components/questionItems/AttachmentItemProps';


export class AttachmentItem extends React.Component<AttachmentItemProps> {
    fileList: any[] = [];

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.fileList.push((e as any).target.files[0]);

    }

    render() {
        const { item } = this.props;
        return <form key={item.id} onSubmit={this.handleSubmit.bind(this)} method="post" encType="multipart/form-data">
            <div className="form-group">
                <div className="input-group">
                    <div className="custom-file">
                        <input type="file" multiple={item.multipleFiles} name="value" className="custom-file-input" id={item.id} onChange={this.handleChange.bind(this)} />
                        <label className="custom-file-label" htmlFor={item.id}>Chose file</label>
                    </div>
                </div>
            </div>
        </form>
    }
}

export default useObservableModel<AttachmentItemProps>(AttachmentItem);