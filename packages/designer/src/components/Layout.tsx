import * as React from 'react';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { DESIGN, PLAY } from '../constants/application';
import { addQuestionnaireResponseItem, createQuestionnaireResponse, updateQuestionnaireResponseItem, QuestionnairePlayer } from '@art-forms/player';
import QuestionnaireDesigner from './QuestionnaireDesigner';


// const mapStateToProps = (store: Store) => {
//     return {
//         questionnaireResponse: store.questionnaireResponse
//     };
// }

// const mapDispatchToProps = {
//     addQuestionnaireResponseItem,
//     createQuestionnaireResponse,
//     updateQuestionnaireResponseItem
// }

// const mergeProps = (stateProps: LayoutState, dispatchProps: LayoutActions, ownProps: any): LayoutProps =>
//     ({ ...ownProps, ...stateProps, ...{ actions: { ...dispatchProps, ...ownProps.actions } } });

export class Layout extends React.Component<LayoutProps> {

    render() {
        const { actions, application } = this.props;
        return <div className="container-fluid">
            <nav className="row navbar navbar-expand-sm navbar-light bg-light">
                <div className="navbar-collapse">
                    <a className="navbar-brand" href="#">Questionnaire Designer</a>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className={`nav-item ${application.mode === 'DESIGN' ? "active" : ""}`}>
                            <a className="nav-link" href="javascript:void(0)" onClick={actions.toggleModeToDesign}>Design mode</a>
                        </li>
                        <li className={`nav-item ${application.mode === 'PLAY' ? "active" : ""}`}>
                            <a className={`nav-link ${!application.questionnaire ? "disabled" : ""}`} href="javascript:void(0)" onClick={actions.toggleModeToPlay}>Play mode</a>
                        </li>
                    </ul>
                    <a className="nav-link ml-auto text-dark" href="javascript:void(0)" onClick={() => { actions.createQuestionnaire() }}>Create Questionnaire</a>
                </div>
            </nav>
            <div className="main-area row my-2">
                <div className="col-12">
                    {application.questionnaire && (application.mode === DESIGN ?
                        <QuestionnaireDesigner questionnaire={application.questionnaire} /> :
                        <QuestionnairePlayer questionnaire={application.questionnaire} questionnaireResponse={application.questionnaireResponse} />)
                    }
                </div>
            </div>
            {application.questionnaire && (application.mode === PLAY) && <button className="btn btn-primary mt-5 ml-auto" onClick={() => { console.log(application.questionnaireResponse) }}>Submit</button>}
        </div>
    }
}
export default Layout;