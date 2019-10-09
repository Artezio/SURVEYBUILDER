import * as React from 'react';
import { useObservableModel } from '../../observableConnector/useObservableModel';
import AttachmentItemProps from '../../interfaces/components/questionItems/AttachmentItemProps';
import { FileInput } from '../informedCustomInputs/FileInput';


export class AttachmentItem extends React.Component<AttachmentItemProps> {
    fileNameList: string[] = [];
    dataTransfer: DataTransfer = new DataTransfer();
    fileInputRef: React.RefObject<HTMLInputElement> = React.createRef();

    handleChange(e: any) {
        const { item, questionnaireResponseItem } = this.props;
        const input = e.target;
        const files = input.files;
        if (item.multipleFiles) {
            for (let file of files) {
                if (this.fileNameList.indexOf(file.name) === -1) {
                    this.fileNameList.push(file.name);
                    this.dataTransfer.items.add(file);
                    questionnaireResponseItem.reply(file.name);
                }
            }
        } else {
            this.dataTransfer.items.clear();
            this.dataTransfer.items.add(files[0]);
            this.fileNameList = [files[0].name];
            questionnaireResponseItem.reply(files[0].name);
        }
        input.files = this.dataTransfer.files;
    }

    removeFile(fileName: string) {
        const { questionnaireResponseItem } = this.props;
        const index = this.fileNameList.indexOf(fileName);
        this.fileNameList.splice(index, 1);
        this.dataTransfer.items.remove(index);
        if (this.fileInputRef.current) {
            this.fileInputRef.current.files = this.dataTransfer.files;
        }
        questionnaireResponseItem.reply(fileName);
    }

    validate() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.validate();
        const errorMessages = questionnaireResponseItem.errorMessages.join(' ');
        return errorMessages === '' ? undefined : errorMessages;
    }

    renderFileList() {
        const { questionnaireResponseItem } = this.props;
        return questionnaireResponseItem.answers.length > 0 && <div className="form-group">
            <ul className="list-group list-group-flush">
                {questionnaireResponseItem.answers.map(answer => {
                    return <li key={answer.value} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>{answer.value}</span>
                            <button className="btn btn-outline-secondary" onClick={this.removeFile.bind(this, answer.value)}><i className="fas fa-trash"></i></button>
                        </div>
                    </li>
                }
                )}
            </ul>
        </div>
    }

    render() {
        const { item, validationStatus } = this.props;
        return <div>
            <div className="form-group">
                <FileInput
                    validate={this.validate.bind(this)}
                    multiple={item.multipleFiles}
                    field={item.id}
                    className={`form-control-file ${validationStatus}`}
                    id={item.id}
                    onChange={this.handleChange.bind(this)}
                    forwardedRef={this.fileInputRef}
                />
            </div>
            {this.renderFileList()}
        </div>
    }
}

export default useObservableModel<AttachmentItemProps>(AttachmentItem);