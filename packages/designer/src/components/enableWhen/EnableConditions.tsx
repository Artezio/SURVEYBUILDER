import * as React from 'react';
import * as Models from '@art-forms/models';
import EnableConditionsProps from '../../interfaces/components/enableWhen/EnableConditionsProps';
import { RadioGroup, Radio, Form, Scope, FormApi } from 'informed';
import EnableWhen from './EnableWhen';
import { useObservableModel } from '@art-forms/observable';

export class EnableConditions extends React.Component<EnableConditionsProps> {
    formApi?: FormApi<Pick<Models.Item, 'enableWhen' | 'enableBehavior'>>;

    getFormApi(formApi: FormApi<Pick<Models.Item, 'enableWhen' | 'enableBehavior'>>) {
        this.formApi = formApi;
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi && this.formApi.setValues(item);
    }

    fillQuestionList(list: Models.QuestionItem<any>[], source: Models.GroupItem | Models.Questionnaire) {
        source.items.forEach(item => {
            if (item.type === Models.GROUP) {
                this.fillQuestionList(list, item as Models.GroupItem);
            } else if (item.type !== Models.DISPLAY) {
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
        const enableWhen = Models.enableWhenFactory.createEnableWhen({ operator: Models.EQUAL, questionId: item.id })
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
        const { item, closeEnableWhenFrame } = this.props;
        const questionList = this.prepareQuestionList();
        return <div className="enable-when">
            <div className="d-flex justify-content-end"><button className="btn btn-outline-danger ml-auto" onClick={closeEnableWhenFrame}><i className="fas fa-times"></i></button></div>
            <div className="main-section">
                <Form initialValues={item} getApi={this.getFormApi.bind(this)}>
                    <header>
                        <h3>{item.text}</h3>
                        <div>
                            <b>Comparing type: </b>
                            <RadioGroup field="enableBehavior" onChange={this.setEnableBehavior.bind(this)}>
                                <div>
                                    <Radio value={Models.AND} id="enableWhenOperatorAnd" />
                                    <label htmlFor="enableWhenOperatorAnd">And</label>
                                </div>
                                <div>
                                    <Radio value={Models.OR} id="enableWhenOperatorOr" />
                                    <label htmlFor="enableWhenOperatorOr">Or</label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger" onClick={this.removeAllEnableWhen.bind(this)}>Remove All</button>
                        </div>
                    </header>
                    {!!item.enableWhen.length && <div className="row">
                        <b className="col-3">Question</b>
                        <b className="col-3">Operator</b>
                        <b className="col-5">Answer</b>
                        <div className="col-1"></div>
                    </div>}
                    <div className="enable-when-list">
                        <Scope scope="enableWhen">
                            {item.enableWhen.map((enableWhen, i) => {
                                const filteredQuestionList = questionList.filter(question => question.id !== item.id);
                                return <React.Fragment key={enableWhen.id}>
                                    <EnableWhen questionList={filteredQuestionList} enableWhen={enableWhen} index={i} item={item} />
                                    {item.enableWhen.length !== 0 && i !== item.enableWhen.length - 1 && <hr />}
                                </React.Fragment>
                            })}
                        </Scope>
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary from-control" onClick={this.addEnableWhen.bind(this)}>Add EnableWhen</button>
                    </div>
                </Form>
            </div>
        </div>
    }
}

export default useObservableModel<EnableConditionsProps>(EnableConditions);