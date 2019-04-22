import * as React from 'react';
import CollectionWrapperProps from '../interfaces/components/CollectionWrapperProps';
import { QuestionItemWrapper } from './questionItems/QuestionItemWrapper';
import useObservableModel from '../HOCs/useObservableModel';

export class CollectionWrapper extends React.Component<CollectionWrapperProps> {
    render() {
        const { questionnaireResponseItem, item, className } = this.props;
        return <>
            {questionnaireResponseItem.answers.map((ans, i) => {
                return <div key={ans.id}>
                    <QuestionItemWrapper answerIndex={i} answer={ans} questionnaireResponseItem={questionnaireResponseItem} item={item} className={className} />
                    {questionnaireResponseItem.answers.length > 1 && questionnaireResponseItem.answers.length - 1 !== i && <hr />}
                </div>
            })}
        </>
    }
}

export default useObservableModel<CollectionWrapperProps>(CollectionWrapper);