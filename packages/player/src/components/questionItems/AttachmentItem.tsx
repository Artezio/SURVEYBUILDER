import * as React from 'react';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import AttachmentItemProps from '../../interfaces/components/questionItems/AttachmentItemProps';


export class AttachmentItem extends React.Component<AttachmentItemProps> {
    answerFactory: Models.AnswerFactory;
    fileList: string[] = [];
    dataTransfer: DataTransfer = new DataTransfer();
    fileInputRef: React.RefObject<HTMLInputElement> = React.createRef();

    constructor(props: AttachmentItemProps) {
        super(props);
        props.questionnaireResponseItem.answers = [];
        this.answerFactory = new Models.AnswerFactory(props.questionnaireResponseItem);
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    handleChange(e: any) {
        const { item, questionnaireResponseItem } = this.props;
        const input = e.target;
        const fileList = input.files;
        if (item.multipleFiles) {
            for (let file of fileList) {
                if (this.fileList.indexOf(file.name) === -1) {
                    questionnaireResponseItem.addAnswer(this.answerFactory.createAnswer({ value: file.name }));
                    this.fileList.push(file.name);
                    this.dataTransfer.items.add(file);
                }
                else {
                    const index = this.fileList.indexOf(file.name);
                    this.fileList.splice(index, 1);
                    this.fileList.push(file.name);
                    this.dataTransfer.items.remove(index);
                    this.dataTransfer.items.add(file);
                    this.forceUpdate();
                }
            }
        }
        else {
            this.dataTransfer.items.clear();
            this.dataTransfer.items.add(fileList[0]);
            this.fileList = [fileList[0].name];
            questionnaireResponseItem.answers = [this.answerFactory.createAnswer({ value: fileList[0].name })];
        }
        input.files = this.dataTransfer.files;
    }

    removeFile(fileName: string) {
        const { questionnaireResponseItem } = this.props;
        const index = this.fileList.indexOf(fileName);
        this.fileList.splice(index, 1);
        this.dataTransfer.items.remove(index);
        if (this.fileInputRef.current) {
            this.fileInputRef.current.files = this.dataTransfer.files;
        }
        const oldAnswer = questionnaireResponseItem.answers.find(answer => answer.value === fileName);
        oldAnswer && oldAnswer.remove();
    }

    renderFileList() {
        return <ul className="list-group list-group-flush">
            {this.fileList.map(fileName => <li key={fileName} className="list-group-item d-flex align-items-center">
                <button className="btn btn-outline-secondary mr-2" onClick={this.removeFile.bind(this, fileName)}><i className="fas fa-times"></i></button>
                {fileName}
            </li>
            )}
        </ul>
    }

    render() {
        const { item } = this.props;
        return <form onSubmit={this.handleSubmit.bind(this)} method="post" encType="multipart/form-data">
            <div className="form-group">
                <div className="input-group">
                    <div className="custom-file">
                        <input type="file" multiple={item.multipleFiles} name="value" className="custom-file-input" id={item.id} onChange={this.handleChange.bind(this)} ref={this.fileInputRef} />
                        <label className="custom-file-label" htmlFor={item.id}>Chose file</label>
                    </div>
                </div>
                {this.renderFileList()}
            </div>
        </form>
    }
}

export default useObservableModel<AttachmentItemProps>(AttachmentItem);