import * as React from 'react';
import * as Models from '@art-forms/models';
import EnableConditionsProps from '../../interfaces/components/enableWhen/EnableConditionsProps';
import { RadioGroup, Radio, Form, Scope, FormApi } from 'informed';
import EnableWhen from './EnableWhen';
import { useObservableModel } from '@art-forms/observable';

export class EnableSettings extends React.Component<EnableConditionsProps> {
    formApi?: FormApi<Pick<Models.Item, 'enableWhen' | 'enableBehavior'>>;
    enableWhenFactory: Models.EnableWhenFactory;

    constructor(props: EnableConditionsProps) {
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
        const { questionnaire } = this.props;
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
            <Form className="card-body" initialValues={item} getApi={this.getFormApi.bind(this)}>
                <section>
                    <div className="enable-when__row row">
                        <div className="col">Comparing logic: </div>
                        <div className="col-9 d-flex">
                            <RadioGroup field="enableBehavior" onChange={this.setEnableBehavior.bind(this)}>
                                <div className="mr-4">
                                    <Radio value={Models.AND} id="enableWhenOperatorAnd" />
                                    <label htmlFor="enableWhenOperatorAnd">And</label>
                                </div>
                                <div>
                                    <Radio value={Models.OR} id="enableWhenOperatorOr" />
                                    <label htmlFor="enableWhenOperatorOr">Or</label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="enable-when__row d-flex justify-content-end">
                        <button className="btn btn-outline-dark" onClick={this.removeAllEnableWhen.bind(this)}>Clear rules</button>
                    </div>
                </section>
                {!!item.enableWhen.length && <div className="enable-when__row row">
                    <div className="col-3">Question</div>
                    <div className="col-3">Operator</div>
                    <div className="col-5">Answer</div>
                    <div className="col-1"></div>
                </div>}
                <div className="enable-when-list mb-2">
                    <Scope scope="enableWhen">
                        {item.enableWhen.map((enableWhen, i) => {
                            const filteredQuestionList = questionList.filter(question => question.id !== item.id);
                            return <React.Fragment key={enableWhen.id}>
                                <EnableWhen questionList={filteredQuestionList} enableWhen={enableWhen} index={i} />
                                {item.enableWhen.length !== 0 && i !== item.enableWhen.length - 1 && <hr />}
                            </React.Fragment>
                        })}
                    </Scope>
                </div>
                <div className="enable-when__row d-flex justify-content-center">
                    <button className="btn btn-outline-secondary w-100" onClick={this.addEnableWhen.bind(this)}>Add Rule</button>
                </div>
            </Form>
        </div>
    }
}

export default useObservableModel<EnableConditionsProps>(EnableSettings);