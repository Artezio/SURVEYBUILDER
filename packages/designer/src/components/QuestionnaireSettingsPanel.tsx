import * as React from 'react';
import { QuestionnaireSettingsPanelProps } from '../interfaces/components/QuestionnaireSettingsPanelProps';
import ItemCollectionMenu from './ItemCollectionMenu';

export const QuestionnaireSettingsPanel = (props: QuestionnaireSettingsPanelProps) => {
    const { questionnaire } = props;
    return <div className="question-settings-panel__questionnaire-panel text-center card h-100">
        <div className="card-header d-flex justify-content-between align-items-center">
            <span>{questionnaire.title || 'Untitled questionnaire'}</span>
            <ItemCollectionMenu item={questionnaire} />
        </div>
        <div className="card-body">
            <span>Click on a question to start setting it up</span>
        </div>
    </div>
}