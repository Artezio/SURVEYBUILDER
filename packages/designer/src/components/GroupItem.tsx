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
        this.highlightActiveItems();
    }

    clearSelected() {
        const selectedItems = document.querySelectorAll('.card-active');
        selectedItems.forEach(selectedItem => {
            selectedItem && selectedItem.classList.remove('card-active');
            selectedItem && selectedItem.classList.remove('shadow');
        })
    }

    itemListener(e: Event) {
        const target = e.currentTarget as HTMLElement;
        if (!target.classList.contains('card-active')) {
            this.clearSelected();
            target && target.classList.add('card-active');
            target && target.classList.add('shadow');
        }
    }

    highlightActiveItems() {
        document.querySelectorAll('.questionnaire-item').forEach(el => {
            el.removeEventListener('click', this.itemListener.bind(this), true);
            el.removeEventListener('focus', this.itemListener.bind(this), true);
            el.addEventListener('click', this.itemListener.bind(this), true);
            el.addEventListener('focus', this.itemListener.bind(this), true);
        })
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