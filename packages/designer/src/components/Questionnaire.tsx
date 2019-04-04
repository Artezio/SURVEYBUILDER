import * as React from 'react';
import * as Models from '@art-forms/models';
import DropdownMenu from './DropdownMenu';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import { Form, Text, TextArea, FormApi } from 'informed';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';


export class Questionnaire extends React.Component<QuestionnaireProps> {
    formApi!: FormApi<Models.IQuestionnaire>;
    itemFactory = new Models.ItemFactory(this.props.questionnaire);

    handleSubmit(values: Partial<Models.IQuestionnaire>) {
        const { questionnaire } = this.props;
        questionnaire && questionnaire.updateQuestionnaire({ ...questionnaire, ...values });
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IQuestionnaire>) {
        this.formApi = formApi;
    }

    componentDidUpdate() {
        const { questionnaire } = this.props;
        this.formApi.setValues(questionnaire as Models.Questionnaire);
    }

    renderItemList() {
        const { questionnaire } = this.props;
        return (questionnaire && <div className="item-list">
            {questionnaire.items.map(item => <ItemProvider {...{ item }} key={item.id} />)}
        </div>)
    }

    addItem() {
        const { questionnaire } = this.props;
        const item = this.itemFactory.createItem();
        questionnaire && questionnaire.addItem(item);
    }

    addGroupItem() {
        const { questionnaire } = this.props;
        const item = this.itemFactory.createGroupItem();
        questionnaire && questionnaire.addItem(item);
    }

    addTextItem() {
        const { questionnaire } = this.props;
        const item = this.itemFactory.createTextItem();
        questionnaire && questionnaire.addItem(item);
    }

    renderMenu() {
        return <DropdownMenu title='Context menu' items={[
            { title: 'Add text', action: this.addItem.bind(this) },
            { title: 'Add long-text question', action: this.addTextItem.bind(this) },
            { title: 'Add group', action: this.addGroupItem.bind(this) }
        ]} />
    }

    render() {
        const { questionnaire, className = '' } = this.props;
        return questionnaire && <div className={`questionnaire ${className}`}>
            <div className="card card-sm mb-3">
                <div className="card-header p-1 d-flex justify-content-end">
                    {/* <Menu collection={questionnaire} factory={this.getFactory()}></Menu> */}
                    {this.renderMenu()}
                </div>
                <div className="card-body p-2">
                    <Form getApi={this.getFormApi.bind(this)} key={questionnaire.id} initialValues={questionnaire} onSubmit={this.handleSubmit.bind(this)} >
                        <div className="form-group mb-2">
                            <label htmlFor="questionnaire-title" className="small mb-0">Questionnaire Title</label>
                            <Text className="form-control form-control-sm" id="questionnaire-title" field="title" placeholder="My Questionnaire" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                        </div>
                        <div className="form-group mb-0">
                            <label htmlFor="questionnaire-description" className="small mb-0">Questionnaire Description</label>
                            <TextArea className="form-control form-control-sm" id="questionnaire-description" field="description" placeholder="My description" onBlur={this.submitForm.bind(this)} />
                        </div>
                    </Form>
                </div>
            </div>
            {this.renderItemList()}
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);