import * as React from 'react';
import { useObservableModel } from '@art-forms/observable';
import AttachmentItemProps from '../../interfaces/components/questionItems/AttachmentItemProps';


export class AttachmentItem extends React.Component<AttachmentItemProps> {
    fileNameList: string[] = [];
    dataTransfer: DataTransfer = new DataTransfer();
    fileInputRef: React.RefObject<HTMLInputElement> = React.createRef();

    handleChange(e: any) {
        const { item, questionnaireResponseItem } = this.props;
        const input = e.target;
        const fileList = input.files;
        if (item.multipleFiles) {
            for (let file of fileList) {
                if (this.fileNameList.indexOf(file.name) === -1) {
                    this.fileNameList.push(file.name);
                    this.dataTransfer.items.add(file);
                }
                else {
                    const index = this.fileNameList.indexOf(file.name);
                    this.fileNameList.splice(index, 1);
                    this.fileNameList.push(file.name);
                    this.dataTransfer.items.remove(index);
                    this.dataTransfer.items.add(file);
                    this.forceUpdate();
                }
            }
        }
        else {
            this.dataTransfer.items.clear();
            this.dataTransfer.items.add(fileList[0]);
            this.fileNameList = [fileList[0].name];
        }
        input.files = this.dataTransfer.files;
        questionnaireResponseItem.reply(this.fileNameList);
    }

    removeFile(fileName: string) {
        const { questionnaireResponseItem } = this.props;
        const index = this.fileNameList.indexOf(fileName);
        this.fileNameList.splice(index, 1);
        this.dataTransfer.items.remove(index);
        if (this.fileInputRef.current) {
            this.fileInputRef.current.files = this.dataTransfer.files;
        }
        const oldAnswer = questionnaireResponseItem.answers.find(answer => answer.value === fileName);
        oldAnswer && oldAnswer.remove();
        questionnaireResponseItem.reply(this.fileNameList);
    }

    renderFileList() {
        const { questionnaireResponseItem } = this.props;
        return <ul className="list-group list-group-flush">
            {questionnaireResponseItem.answers.map(answer => <li key={answer.value} className="list-group-item d-flex align-items-center">
                <button className="btn btn-outline-secondary mr-2" onClick={this.removeFile.bind(this, answer.value)}><i className="fas fa-times"></i></button>
                {answer.value}
            </li>
            )}
        </ul>
    }

    render() {
        const { item } = this.props;
        return <div className="form-group">
            <div className="input-group">
                <div className="custom-file">
                    <input type="file" multiple={item.multipleFiles} name="value" className="custom-file-input" id={item.id} onChange={this.handleChange.bind(this)} ref={this.fileInputRef} />
                    <label className="custom-file-label" htmlFor={item.id}>Chose file</label>
                </div>
            </div>
            {this.renderFileList()}
        </div>
    }
}

export default useObservableModel<AttachmentItemProps>(AttachmentItem);