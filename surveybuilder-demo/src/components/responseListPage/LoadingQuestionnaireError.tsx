import * as React from 'react';
import { Link } from 'react-router-dom';

export const LoadingQuestionnaireError = () => {
    return <div className="d-flex justify-content-center">
        <span>Questionnaire does not exist any more</span>
        <br />
        <Link to='/' className="btn btn-primary" title="Back to home page">Home</Link>
    </div>
}

export default LoadingQuestionnaireError;