import * as React from 'react';
import GroupItemProps from '../interfaces/components/GroupItemProps';
import { useObservableModel } from '@art-forms/observable';
import { FormApi, Form, Text } from 'informed';
import * as Models from '@art-forms/models';
import QuestionnaireItemList from './QuestionnaireItemList';


export class GroupItem extends React.Component<GroupItemProps> {
    formApi!: FormApi<Partial<Models.IGroupItem>>;
    inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    handleSubmit(values: Partial<Models.IGroupItem>) {
        const { item } = this.props;
        item.updateItem({ ...item, text: values.text });
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Partial<Models.IGroupItem>>) {
        this.formApi = formApi;
    }

    renderItemList() {
        const { item, nestingLevel } = this.props;
        return <QuestionnaireItemList item={item} nestingLevel={nestingLevel} />
    }

    componentDidMount() {
        if (this.inputRef.current) {
            const x = window.pageXOffset;
            const y = window.pageYOffset;
            this.inputRef.current.focus();
            window.scrollTo(x, y)
        }
    }

    componentDidUpdate() {
        const { item, subscribe } = this.props;
        this.formApi.setValues(item);
        subscribe && subscribe();
    }

    render() {
        const { item } = this.props;
        return <>
            <Form className="headline" getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor={item.id}>Group Title</label>
                    <Text forwardedRef={this.inputRef} autoComplete="off" className="form-control" id={item.id} field="text" placeholder="Questions group" onBlur={this.submitForm.bind(this)} />
                </div>
            </Form>
            {this.renderItemList()}
        </>
    }
}

export default useObservableModel<GroupItemProps>(GroupItem);