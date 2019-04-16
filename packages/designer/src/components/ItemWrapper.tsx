import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import useObservableModel from '../HOCs/useObservableModel';
import ItemProvider from './ItemProvider';
import Menu from './Menu';
import { FormApi, Form, Text } from 'informed';
import SelectMenu from './SelectMenu';


export class ItemWrapper extends React.Component<ItemWrapperProps> {
    formApi?: FormApi<Omit<Models.IItem, 'type'>>;
    factory: Models.ItemFactory = new Models.ItemFactory(this.props.item.parent);

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
        this.formApi && this.formApi.setValues(item as Models.Item);
    }

    renderHeader() {
        const { item } = this.props;
        if (item.type === Models.GROUP) {
            return <div className="d-flex justify-content-end">
                {<Menu title="Context menu" item={item as Models.GroupItem} />}
            </div>
        }
    }

    renderItemHeadLine() {
        const { item } = this.props;
        if (item.type !== Models.GROUP && item.type !== Models.DISPLAY) {
            return <div className="form-row">
                <div className="col-md-8">
                    <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor={`${item.id}-text`}>Question</label>
                            <Text autoComplete="off" className="form-control" id={`${item.id}-text`} field="text" placeholder="My Question" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                        </div>
                    </Form>
                </div>
                <div className="col-md-4">
                    <SelectMenu title="Question Type" item={item} />
                </div>
            </div>
        }
    }

    renderFooter() {
        const { item } = this.props;
        return <div className="d-flex">
            {item.type !== Models.GROUP && item.type !== Models.DISPLAY && <div className="form-group mb-0">
                <div className="custom-control">
                    <input name="required" type="checkbox" className="custom-control-input" id={`${item.id}-required`} />
                    <label className="custom-control-label" htmlFor={`${item.id}-required`}>Required</label>
                </div>
            </div>}
            <button className="btn btn-outline-danger ml-auto" onClick={item.remove.bind(item)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    }

    render() {
        const { item, className = '' } = this.props;
        return <div className={`item card card-sm mb-3 ${className}`}>
            <div className="card-header">
                {this.renderHeader()}
            </div>
            <div className="card-body">
                {this.renderItemHeadLine()}
                <ItemProvider item={item} />
            </div>
            <div className="card-footer">
                {this.renderFooter()}
            </div>
        </div>
    }
}

export default useObservableModel<ItemWrapperProps>(ItemWrapper);