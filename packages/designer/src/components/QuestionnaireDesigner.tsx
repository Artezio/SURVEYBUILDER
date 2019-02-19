import React from 'react';
import { connect } from 'react-redux';
import { TextItem, Questionnaire as QuestionnaireInterface } from '../../../models';
import { Dispatch } from 'redux';
import Questionnaire from './Questionnaire';
import { addTextItem } from "../actions";

interface QuestionnaireProps {
    addTextItem: (item: TextItem) => void;
}

export class QuestionnaireDesigner extends React.Component<QuestionnaireProps> {
    onClick = () => {
        const { addTextItem } = this.props;
        addTextItem && addTextItem({ id: '1', type: 2 });
    }
    render(): React.ReactNode {
        return <div className="questionnaire-designer container border border-secondary">
            <div className="dropdown d-flex justify-content-end m-1">
                <button className="btn btn-secondary dropdown-toggle" role="button" id="context-menu-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Context menu
                </button>
                <div className="dropdown-menu" aria-labelledby="context-menu-link">
                    <button className="dropdown-item btn btn-primary" onClick={this.onClick}>Create text item</button>
                </div>
            </div>
            <Questionnaire />
        </div>
    }
}

const mapStateToProps = (state: { questionnaire: { questionnaire?: QuestionnaireInterface } }) => {
    return state.questionnaire;
}

const mapDispatchToProps = (dispatch: Dispatch): { addTextItem: (item: TextItem) => void } => {
    return {
        addTextItem: (item: TextItem) => {
            dispatch(addTextItem(item));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireDesigner);