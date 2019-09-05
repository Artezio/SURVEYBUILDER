import * as React from 'react';
import { QuestionnaireEditor } from '../../pages/QuestionnaireEditor';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/store/store';
import { STATUS_LOADING, MODE } from '../../constants/questionnaireEditorPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


describe("QuestionnaireEditorPage", () => {
    it("questionnaireDesigner isn't mounted with unexisting questionnaire", () => {
        const page = mount(
            <Router>
                <Provider store={createStore({
                    questionnaireEditorPage: {
                        status: STATUS_LOADING.fetching,
                        mode: MODE.updating
                    }
                })}>
                    <QuestionnaireEditor match={{
                        params: {
                            questionnaireId: '1234'
                        }
                    }} />
                </Provider>
            </Router>
        );
        expect(page.find('div.questionnaire').length).toEqual(0);
    })
})