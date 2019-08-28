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
        <div className="row justify-content-between">
            <div className="col">
                <Link className="btn btn-link" to={`/questionnaire/${questionnaire.id}`}>{questionnaire.title || 'Untitled Questionnaire'}</Link>
            </div>
            <div className="col d-flex justify-content-around">
                <Link to={`/responses/${questionnaire.id}`} className="btn btn-link">Responses</Link>
                <button className="btn btn-outline-danger" onClick={deleteQuestionnaire}><i className="fas fa-trash"></i></button>
                <Link to={`questionnaire/${questionnaire.id}/response`} className="btn btn-outline-success"><i className="fas fa-play"></i></Link>
            </div>
        </div>
    </li>
}