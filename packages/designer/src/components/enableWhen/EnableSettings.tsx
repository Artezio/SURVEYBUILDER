import * as React from 'react';
import * as Models from '@art-forms/models';
import EnableSettingsProps from '../../interfaces/components/enableWhen/EnableConditionsProps';
import { Form, Scope, FormApi, Select, Option } from 'informed';
import EnableWhen from './EnableWhen';
import { useObservableModel } from '../../observableConnector/useObservableModel';

export class EnableSettings extends React.Component<EnableSettingsProps> {
    formApi?: FormApi<Pick<Models.Item, 'enableWhen' | 'enableBehavior'>>;
    enableWhenFactory: Models.EnableWhenFactory;

    constructor(props: EnableSettingsProps) {
        super(props);
        this.enableWhenFactory = new Models.EnableWhenFactory(props.item);
    }

    getFormApi(formApi: FormApi<Pick<Models.Item, 'enableWhen' | 'enableBehavior'>>) {
        this.formApi = formApi;
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi && this.formApi.setValues(item);
    }

    fillQuestionList(list: Models.IQuestionItem<any>[], source: Models.IGroupItem | Models.IQuestionnaire) {
        source.items && source.items.forEach(item => {
            if (item.type === Models.GROUP) {
                this.fillQuestionList(list, item as Models.GroupItem);
            } else if (item.type !== Models.DISPLAY && item.type !== Models.ATTACHMENT) {
                list.push(item as Models.QuestionItem<any>);
            }
        })
    }

    prepareQuestionList(): Models.QuestionItem<any>[] {
        const { questionnaire: questionnaire } = this.props;
        const questionList: Models.QuestionItem<any>[] = [];
        this.fillQuestionList(questionList, questionnaire);
        return questionList;
    }

    addEnableWhen() {
        const { item } = this.props;
        const enableWhen = this.enableWhenFactory.createEnableWhen({ operator: Models.EQUAL })
        item.addEnableWhen(enableWhen);
    }

    removeAllEnableWhen() {
        const { item } = this.props;
        item.enableWhen = [];
    }

    setEnableBehavior() {
        const { item } = this.props;
        if (this.formApi) {
            item.enableBehavior = this.formApi.getValue('enableBehavior');
        }
    }

    render() {
        const { item } = this.props;
        const questionList = this.prepareQuestionList();
        return <div className="enable-when">
            <Form initialValues={item} getApi={this.getFormApi.bind(this)}>
                <div className="d-flex form-group">
                    <label htmlFor={`enableWhenBehavior-${item.id}`} className="mr-3">Logic operator: </label>
                    <Select id={`enableWhenBehavior-${item.id}`} className="form-control w-auto" field="enableBehavior" onChange={this.setEnableBehavior.bind(this)}>
                        <Option value={Models.AND}>All</Option>
                        <Option value={Models.OR}>Or</Option>
                    </Select>
                </div>
                <div>
                    <div className="list-group list-group-flush form-group">
                        {!!item.enableWhen.length && <div className="list-group-item list-group-item-action">
                            <div className="row">
                                <div className="col col-3">Question</div>
                                <div className="col col-3">Operator</div>
                                <div className="col col-5">Answer</div>
                                <div className="col col-1"></div>
                            </div>
                        </div>}
                        <Scope scope="enableWhen">
                            {item.enableWhen.map((enableWhen, i) => {
                                const filteredQuestionList = questionList.filter(question => question.id !== item.id);
                                return <React.Fragment key={enableWhen.id}>
                                    <EnableWhen questionList={filteredQuestionList} enableWhen={enableWhen} index={i} />
                                </React.Fragment>
                            })}
                        </Scope>
                    </div>
                </div>
                <div>
                    <button className="btn btn-outline-secondary border-0" onClick={this.addEnableWhen.bind(this)}>
                        <i className="fas fa-plus mr-1"></i>Add Rule
                    </button>
                </div>
            </Form>
        </div>
    }
}

export default useObservableModel<EnableSettingsProps>(EnableSettings);