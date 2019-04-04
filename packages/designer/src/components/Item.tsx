import * as React from 'react';
import DropdownMenu from './DropdownMenu';
import ItemProps from '../interfaces/components/ItemProps';
import { Form, TextArea, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../HOCs/useObservableModel';


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

    render() {
        const { item } = this.props;
        return <div className="item card card-sm mb-3">
            <div className="card-header p-1 d-flex justify-content-end">
                <DropdownMenu title="Context menu" items={[
                    { title: 'Remove item', action: item.remove.bind(item) },
                ]} />
            </div>
            <div className="card-body p-2">
                <Form getApi={this.getFormApi.bind(this)} initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group mb-0">
                        <label htmlFor="item-text">Text</label>
                        <TextArea className="form-control" id="item-text" field="text" placeholder="My text" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    </div>
                </Form>
            </div>
        </div>
    }
}

export default useObservableModel<ItemProps>(Item);