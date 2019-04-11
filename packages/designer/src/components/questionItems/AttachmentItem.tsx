import * as React from 'react';
import { AttachmentItemProps } from '../../interfaces/components/questionItems/AttachmentItemProps';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';


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

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.AttachmentItem);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
            <div className="card-body p-2">
                <div className="form-group">
                    <label htmlFor="attachment-item-text">Question</label>
                    <Text className="form-control" id="attachment-item-text" field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id={item.id} disabled={true} />
                            <label className="custom-file-label" htmlFor={item.id}>Choose file</label>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    }
}

export default useObservableModel<AttachmentItemProps>(AttachmentItem);