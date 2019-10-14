import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionnaireEditorPageActions } from '../../redux/actions/questionnaireEditorPageActions';

export const QuestionnaireLoadError = () => {
    const dispatch = useDispatch();
    const createNewQuestionnaire = () => {
        dispatch(questionnaireEditorPageActions.createNewQuestionnaire())
    }

    return <div>
        <p className="text-center">This Questionnaire doesn't exist any more</p>
        <div className="row justify-content-center">
            <div className="col-6 d-flex justify-content-around">
                <Link to="/" className="btn btn-outline-dark" title="Back to questionnaire list">Back</Link>
                <Link to="/questionnaire" className="btn btn-outline-secondary" onClick={createNewQuestionnaire} title="Create new questionnaire">Create new Questionnaire</Link>
            </div>
        </div>
    </div>
}