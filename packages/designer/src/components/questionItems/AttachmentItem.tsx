import * as React from 'react';
import { AttachmentItemProps } from '../../interfaces/components/questionItems/AttachmentItemProps';
import { FormApi, Form, Text, Checkbox } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import Ocations, { Trashcan } from '@githubprimer/octicons-react';


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
        const { item, className = '' } = this.props;
        return <div className={`item card card-sm mb-3 ${className}`}>
            <div className="card-header p-1 d-flex justify-content-end">
            </div>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                <div className="card-body p-2">
                    <div className="form-group">
                        <label htmlFor="attachment-item-text">Question</label>
                        <Text className="form-control" id="attachment-item-text" field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    </div>
                </div>
                <div className="card-footer p-1 d-flex justify-content-between align-items-center">
                    <div className="custom-control mb-0">
                        <Checkbox field="required" type="checkbox" className="custom-control-input" id="item-required" />
                        <label className="custom-control-label" htmlFor="item-required">Required</label>
                    </div>
                    <button className="btn p-1 mr-2" onClick={item.remove.bind(item)}>
                        <Ocations icon={Trashcan} />
                    </button>
                </div>
            </Form>
        </div>
    }
}

export default useObservableModel<AttachmentItemProps>(AttachmentItem);