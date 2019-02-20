import React from 'react';
import { connect } from 'react-redux';
import { TextItem, Questionnaire as QuestionnaireInterface } from '@art-forms/models';
import { Dispatch } from 'redux';
import Questionnaire from './Questionnaire';
import { addTextItem } from "../actions/questionnaire";
import { Store } from '../interfaces/store';

type QuestionnaireDesignerProps = {
    questionnaire: { questionnaire?: QuestionnaireInterface };
    addTextItem: (item: TextItem) => void;
}

export class QuestionnaireDesigner extends React.Component<QuestionnaireDesignerProps> {
    onClick = () => {
        const { addTextItem } = this.props;
        addTextItem && addTextItem({ id: '1', type: 2 });
    }
    render() {
        const { questionnaire } = this.props;
        return <div className="questionnaire-designer container border border-secondary">
            <div className="dropdown d-flex justify-content-end m-1">
                <button className="btn btn-secondary dropdown-toggle" role="button" id="context-menu-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Context menu
                </button>
                <div className="dropdown-menu" aria-labelledby="context-menu-link">
                    <button className="dropdown-item btn btn-primary" onClick={this.onClick}>Create text item</button>
                </div>
            </div>
            {questionnaire && <Questionnaire {...questionnaire.questionnaire as QuestionnaireInterface} />}
        </div>
    }
}

const mapStateToProps = (store: Store) => {
    return { questionnaire: store.questionnaire };
}
interface DispatchActions {
    addTextItem: (item: TextItem) => void;
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchActions => {
    return {
        addTextItem: (item: TextItem) => {
            dispatch(addTextItem(item));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireDesigner);