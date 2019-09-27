import * as React from 'react';
import { ResponseListProps } from '../../interface/components/ResponseListProps';
import { ResponseInstance } from './ResponseInstance';



export const ResponseList = (props: ResponseListProps) => {
    const { responseList } = props;
    return <div>
        <ul className="list-group list-group-flush">
            {responseList.map(response => <ResponseInstance key={response.id} response={response} />)}
        </ul>
    </div>
} 