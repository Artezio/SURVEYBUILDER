import * as React from 'react';
import { ResponseListProps } from '../../interface/components/ResponseListProps';
import { ResponseInstance } from './ResponseInstance';
import EmptyResponseList from './EmptyResponseList';



export const ResponseList = (props: ResponseListProps) => {
    const { responseList, questionnaire } = props;
    if (Array.isArray(responseList) && responseList.length > 0) {
        return <div>
            <ul className="list-group list-group-flush">
                {responseList.map((response, i) => <ResponseInstance orderIndex={i + 1} key={response.id} response={response} />)}
            </ul>
        </div>
    }
    return <EmptyResponseList questionnaire={questionnaire} />;
} 