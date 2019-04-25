import * as React from 'react';
import * as Models from '@art-forms/models';
import { AttachmentItemProps } from '../../interfaces/components/questionItems/AttachmentItemProps';
import useObservableModel from '../../HOCs/useObservableModel';
import { FormApi, Form, Checkbox } from 'informed';


export class AttachmentItem extends React.Component<AttachmentItemProps> {
    formApi!: FormApi<Omit<Models.IAttachmentItem, 'type'>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Omit<Models.IAttachmentItem, 'type'>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Omit<Models.IAttachmentItem, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }
    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <div className="input-group">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id={`${item.id}-initial`} disabled={true} />
                        <label className="custom-file-label" htmlFor={`${item.id}-initial`}>Choose file</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <Checkbox className="form-check-input" field="multipleFiles" id={`${item.id}-multipleFiles`} onChange={this.submitForm.bind(this)} />
                    <label className="form-check-label" htmlFor={`${item.id}-multipleFiles`}>Allow multiple upload</label>
                </div>
            </div>
        </Form>
    }
}

export default useObservableModel<AttachmentItemProps>(AttachmentItem);