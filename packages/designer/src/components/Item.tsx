import * as React from 'react';
import ItemProps from '../interfaces/components/ItemProps';
import { Form, TextArea, FormApi, Checkbox } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../HOCs/useObservableModel';
import Ocations, { Trashcan } from '@githubprimer/octicons-react';


export class Item extends React.Component<ItemProps> {
    formApi!: FormApi<Models.IItem>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IItem>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.Item);
    }

    render() {
        const { item, className = '' } = this.props;
        return <div className={`item card card-sm mb-3 ${className}`}>
            <div className="card-header p-1 d-flex justify-content-end">
            </div>
            <Form getApi={this.getFormApi.bind(this)} initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
                <div className="card-body p-2">
                    <div className="form-group mb-0">
                        <label htmlFor="item-text">Text</label>
                        <TextArea className="form-control" id="item-text" field="text" placeholder="My text" autoFocus={true} onBlur={this.submitForm.bind(this)} />
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

export default useObservableModel<ItemProps>(Item);