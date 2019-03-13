import * as React from 'react';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/componentProps/Layout';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import * as Models from '@art-forms/models';
import { createQuestionnaireResponse, addQuestionnaireResponseItem } from '../actions/questionnaireResponse';
import { updateQuestionnaireResponseItem } from '../actions/questionnaireResponseItem';
import QuestionnairePlayer from './QuestionnairePlayer';


const mapStateToProps = (store: Store): LayoutState => {
    return {
        questionnaire: store.questionnaire as Models.Questionnaire,
        questionnaireResponse: store.questionnaireResponse as Models.QuestionnaireResponse
    }
}

const mapDispatchToProps = {
    createQuestionnaireResponse,
    addQuestionnaireResponseItem,
    updateQuestionnaireResponseItem
}

const mergeProps = (stateProps: LayoutState, dispatchProps: LayoutActions, ownProps: any): LayoutProps =>
    ({ ...ownProps, ...stateProps, ...{ actions: { ...dispatchProps } } });

export class Layout extends React.Component<LayoutProps> {

    render() {
        const { questionnaire, actions } = this.props;
        return <div className="container-fluid">
            <div className="menu d-flex row py-2 bg-dark text-light ">
                <h1 className="col-5 font-weight-bold">Questionnaire</h1>
                <div className="d-flex justify-content-around col-7">
                </div>
            </div>
            <div className="main-area row justify-content-center my-5">
                {questionnaire && <QuestionnairePlayer actions={{
                    createQuestionnaireResponse: actions.createQuestionnaireResponse,
                    addQuestionnaireResponseItem: actions.addQuestionnaireResponseItem,
                    updateQuestionnaireResponseItem: actions.updateQuestionnaireResponseItem
                }} questionnaire={questionnaire} />}
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);