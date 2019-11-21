import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionnaireListPageActions } from '../../redux/actions/questionnaireListPageActions';

export const QuestionnaireInstance = (props: any) => {
    const { questionnaire } = props;
    const dispatch = useDispatch() as any;
    const deleteQuestionnaire = () => {
        dispatch(questionnaireListPageActions.deleteQuestionnaireConfirmed(questionnaire.id))
            .then(({ data, error }) => {
                if (error) {
                    alert(error.message)
                } else {
                    dispatch(questionnaireListPageActions.loadQuestionnaireList())
                }
            })
    };

    const buttonClass = 'btn btn-outline-secondary';

    return <li className="list-group-item list-group-item-action questionnaires__questionnaire">
        <div className="d-flex justify-content-between align-items-center">
            <Link to={`/responses/${questionnaire.id}`} className="text-body" title="Questionnaire details">
                <span className="h4">{questionnaire.title || 'Untitled Questionnaire'}</span>
            </Link>
            <div className="btn-group">
                <button className={buttonClass} onClick={deleteQuestionnaire} title="Delete questionnaire">
                    <i className="fas fa-trash"></i>
                </button>
                <Link className={buttonClass} to={`/questionnaire/${questionnaire.id}`} title="Edit questionnaire">
                    <i className="fas fa-pencil-alt"></i>
                </Link>
                <Link className={buttonClass} to={`questionnaire/${questionnaire.id}/response`} title="Pass questionnaire">
                    <i className="fas fa-play"></i>
                </Link>
            </div>
        </div>
    </li>
}