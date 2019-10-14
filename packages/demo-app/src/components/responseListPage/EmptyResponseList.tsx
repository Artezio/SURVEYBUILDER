import * as React from 'react';
import { Link } from 'react-router-dom';
import { EmptyResponseListProps } from '../../interface/components/EmptyResponseListProps';

export const EmptyResponseList = (props: EmptyResponseListProps) => {
    const { questionnaire } = props;

    const onClick = () => {
        history.back();
    }

    return <div className="text-center">
        <p className="text-muted">There are no responses yet</p>
        {/* <div className="text-center">
            <Link to="/" className="btn btn-secondary mr-2" onClick={onClick}>Back</Link>
            <Link className="btn btn-outline-secondary" to={`/questionnaire/${questionnaire.id}/response`}>Add response</Link>
        </div> */}
    </div>
};

export default EmptyResponseList;