import * as React from 'react';
import Questionnaire from './Questionnaire';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/Layout';
import { connect } from 'react-redux';



const mapStateToProps = (store: any): LayoutState => {
    return { questionnaire: store.questionnaire }
}

// const mapDispatchToProps: LayoutActions = {
//     toggleAppModeToDesign
// }


export class Layout extends React.Component<LayoutProps> {
    render() {
        const { questionnaire, actions } = (this.props);
        return <div className="container-fluid">
            <div className="menu d-flex row py-2 bg-dark text-light ">
                <h1 className="col-5 font-weight-bold">Questionnaire</h1>
                <div className="d-flex justify-content-around col-7">
                    <button className="btn btn-info d-display" onClick={actions.toggleAppModeToDesign}>Back to design</button>
                </div>
            </div>
            <div className="main-area row justify-content-center my-5">
                {questionnaire && <Questionnaire questionnaire={questionnaire} />}
            </div>
        </div>
    }
}

export default connect(mapStateToProps)(Layout);