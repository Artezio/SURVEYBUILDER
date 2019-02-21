import React from 'react';
import { connect } from 'react-redux';
import { TextItem, Questionnaire } from '@art-forms/models';
import { addTextItem } from "../actions/questionnaire";
import { Store } from '../interfaces/store';
import TextItemComponent from './TextItem';
import QuestionnaireActions from '../interfaces/QuestionnaireActions';
import DropdownMenu from './DropdownMenu';

export interface QuestionnaireComponentProps extends QuestionnaireActions {
    questionnaire: Questionnaire;
}

const mapStateToProps = (store: Store) => {
    return { questionnaire: store.questionnaire as Questionnaire };
}

const mapDispatchToProps: QuestionnaireActions = {
    addTextItem,
}

export class QuestionnaireComponent extends React.Component<QuestionnaireComponentProps> {
    onClick = () => {
        const { addTextItem } = this.props;
        addTextItem && addTextItem({ id: '1', type: 2 });
    }
    render() {
        const { questionnaire } = this.props;
        return <div className="questionnaire container border border-secondary">
            <div className="dropdown d-flex justify-content-end m-1">
                <DropdownMenu title='Context menu' items={[
                    { title: 'Create text item', action: this.onClick }
                ]} />
            </div>
            <div className="container">
                <div className="from-group my-3">
                    <input className="form-control" type="text" name="title" placeholder="Title" style={{ height: '50px', fontSize: '30px' }} autoFocus={true}></input>
                </div>
                <div className="from-group my-3">
                    <textarea className="form-control" rows={3} name="description" placeholder="Description"></textarea>
                </div>
                <div className="item-list">
                    {questionnaire.items && questionnaire.items.map(item => <TextItemComponent key={item.id} item={item as TextItem} />)}
                </div>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireComponent);