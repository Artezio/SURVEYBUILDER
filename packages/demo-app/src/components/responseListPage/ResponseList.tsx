import * as React from 'react';
import { ResponseListProps } from '../../interface/components/ResponseListProps';
import { ResponseInstance } from './ResponseInstance';



export const ResponseList = (props: ResponseListProps) => {
    const { responseList } = props;
    return <div>
        <ul className="list-group list-group-flush">
            {responseList.map((response, i) => <ResponseInstance orderIndex={i + 1} key={response.id} response={response} />)}
        </ul>
    </div>
} 