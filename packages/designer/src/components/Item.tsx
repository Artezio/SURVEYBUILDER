import * as React from 'react';
import ItemProps from '../interfaces/components/ItemProps';
import { Form, TextArea, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '../observableConnector/useObservableModel';


export class Item extends React.Component<ItemProps> {
    formApi!: FormApi<Models.IItem>;
    inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    componentDidMount() {
        if (this.inputRef.current) {
            const x = window.pageXOffset;
            const y = window.pageYOffset;
            this.inputRef.current.focus();
            window.scrollTo(x, y)
        }
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IItem>) {
        const { item } = this.props;
        item.updateItem({ ...item, text: values.text });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi.setValues(item);
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="card-body">
                <div>
                    <label htmlFor={item.id}>Text</label>
                    <TextArea forwardedRef={this.inputRef} autoComplete="off" className="form-control" id={item.id} field="text" placeholder="My text" onBlur={this.submitForm.bind(this)} />
                </div>
            </div>
        </Form>
    }
}

export default useObservableModel<ItemProps>(Item);