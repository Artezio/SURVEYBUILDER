import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionnaireListPageActions } from '../../redux/actions/questionnaireListPageActions';

export const QuestionnaireInstance = (props: any) => {
    const { questionnaire } = props;
    const dispatch = useDispatch() as any;
    const deleteQuestionnaire = () => {
        if (questionnaire.immortal) {
            alert('Impossible to delete this questionnaire!');
            return;
        }
        if (confirm('Are you sure you want to delete this questionnaire?')) {
            dispatch(questionnaireListPageActions.deleteQuestionnaire(questionnaire.id))
                .then(({ data, error }) => {
                    if (error) {
                        alert(error.message)
                    } else {
                        dispatch(questionnaireListPageActions.loadQuestionnaireList())
                    }
                })
        }
    }

    const buttonClass = 'btn btn-outline-secondary';

    return <li className="list-group-item questionnaires__questionnaire">
        <div className="d-flex justify-content-between align-items-center">
            <Link to={`/responses/${questionnaire.id}`} className="text-body">
                <span className="h4">{questionnaire.title || 'Untitled Questionnaire'}</span>
            </Link>
            <div className="btn-toolbar">
                <div className="btn-group mr-2">
                    <Link className={buttonClass} to={`/responses/${questionnaire.id}`}>Responses</Link>
                </div>
                <div className="btn-group">
                    <button className={buttonClass} onClick={deleteQuestionnaire}><i className="fas fa-trash"></i></button>
                    <Link className={buttonClass} to={`/questionnaire/${questionnaire.id}`}><i className="fas fa-pencil-alt"></i></Link>
                    <Link className={buttonClass} to={`questionnaire/${questionnaire.id}/response`}><i className="fas fa-play"></i></Link>
                </div>
            </div>
        </div>
    </li>
}