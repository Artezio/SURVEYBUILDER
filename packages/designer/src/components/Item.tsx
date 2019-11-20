import * as React from 'react';
import ItemProps from '../interfaces/components/ItemProps';
import { Form, TextArea, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable-react';


export class Item extends React.Component<ItemProps> {
    formApi!: FormApi<Models.IItem>;
    // inputRef: React.RefObject<HTMLInputElement> = React.createRef();

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
        return <Form className="questionnaire-display-item__headline" getApi={this.getFormApi.bind(this)} initialValues={item} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label htmlFor={item.id}>Text</label>
                <TextArea
                    // forwardedRef={this.inputRef} 
                    autoFocus={true}
                    autoComplete="off"
                    className="form-control"
                    id={item.id}
                    field="text"
                    placeholder="My text"
                    onBlur={this.submitForm.bind(this)}
                />
            </div>
        </Form>
    }
}

export default useObservableModel<ItemProps>(Item);