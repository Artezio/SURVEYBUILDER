import * as React from 'react';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import * as Models from '@art-forms/models';
import useObservableModel from '../HOCs/useObservableModel';
import ItemProvider from './ItemProvider';
import Menu from './Menu';
import { FormApi, Form, Text } from 'informed';


export class ItemWrapper extends React.Component<ItemWrapperProps> {
    formApi!: FormApi<Omit<Models.IItem, 'type'>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Omit<Models.IItem, 'type'>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Omit<Models.IItem, 'type'>>) {
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
                {item.type === Models.GROUP && <Menu title="Context menu" item={item as Models.GroupItem} />}
            </div>
            <div className="card-body p-2">
                <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor={`${item.id}-text`}>Question</label>
                        <Text className="form-control" id={`${item.id}-text`} field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    </div>
                </Form>
                <ItemProvider item={item} />
            </div>
            <div className="card-footer p-1 d-flex justify-content-between align-items-center">
                <div className="custom-control ml-2">
                    <input name="required" type="checkbox" className="custom-control-input" id={`${item.id}-required`} />
                    <label className="custom-control-label" htmlFor={`${item.id}-required`}>Required</label>
                </div>
                <button className="btn btn-outline-danger" onClick={item.remove.bind(item)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    }
}

export default useObservableModel<ItemWrapperProps>(ItemWrapper);