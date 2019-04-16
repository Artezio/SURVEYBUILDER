import * as React from 'react';
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

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item as Models.Item);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor={item.id}>Text</label>
                    <TextArea autoComplete="off" className="form-control" id={item.id} field="text" placeholder="My text" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                </div>
            </div>
        </Form>
    }
}

export default useObservableModel<ItemProps>(Item);