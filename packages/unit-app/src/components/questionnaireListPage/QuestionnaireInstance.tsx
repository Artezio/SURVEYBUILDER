import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionnaireListPageActions } from '../../redux/actions/questionnaireListPageActions';

export const QuestionnaireInstance = (props: any) => {
    const { questionnaire } = props;
    const dispatch = useDispatch() as any;
    const deleteQuestionnaire = () => {
        dispatch(questionnaireListPageActions.deleteQuestionnaire(questionnaire.id))
            .then(() => {
                dispatch(questionnaireListPageActions.loadQuestionnaireList())
            })
    }

    return <li className="list-group-item">
        <div className="row">
            <div className="col-4">
                <Link to={`/questionnaire/${questionnaire.id}`}>{questionnaire.title || 'Untitled Questionnaire'}</Link>
            </div>
            <div className="col-2">
                <button className="btn btn-outline-danger" onClick={deleteQuestionnaire}><i className="fas fa-trash"></i></button>
            </div>
            <div className="col-2">
                <Link to={`questionnaire/${questionnaire.id}/response`} className="btn btn-outline-success"><i className="fas fa-play"></i></Link>
            </div>
        </div>
    </li>
}