import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemSettingsPanelProps from '../interfaces/components/ItemSettingsPanelProps';
import { HumanReadableGuid } from '../helpers/humanReadableId';
import { questionTypes } from '../constants/questionTypes';
import { EnableSettings } from './enableWhen/EnableSettings';

export class ItemSettingsPanel extends React.Component<ItemSettingsPanelProps> {
    static defaultProps: Partial<ItemSettingsPanelProps> = {
        className: ''
    }

    state = {
        
    }

    humanReadableGuid = HumanReadableGuid.getHumanReadableGuid();

    getItemTypeTitle(): string {
        const { item } = this.props;
        if (item.type === Models.GROUP) {
            return 'Group';
        } else if (item.type === Models.DISPLAY) {
            return 'Display Item';
        }
        const questionType = questionTypes.find(questionType => questionType.value === item.type);
        if (questionType) {
            return questionType.title;
        }
        return 'Question';
    }

    getLabel() {
        const { item: { type } } = this.props;
        if (type === Models.GROUP) {
            return <label htmlFor="" className="settings-panel__group-label">Group Title</label>
        }
        if (type === Models.DISPLAY) {
            return <label htmlFor="" className="settings-panel__display-label">Text</label>
        }
        return <label htmlFor="" className="settings-panel__question-label">Question</label>
    }

    renderEnableSettings() {
        const { item, questionnaire } = this.props;
        return <section>
            <p>
                <a className="btn btn-primary" data-toggle="collapse" href={`#${item.id}-collapse-menu`} aria-expanded="false" aria-controls={`${item.id}-collapse-menu`}>
                    Enable settings
                </a>
            </p>
            <div className="collapse" id={`${item.id}-collapse-menu`}>
                <EnableSettings questionnaire={questionnaire} item={item} />
            </div>
        </section>
    }

    render() {
        const { item } = this.props;
        return <div className="settings-panel">
            <header>
                <span>{this.humanReadableGuid.getHumanReadableId(item.id)}</span>
                <span>{this.getItemTypeTitle()}</span>
            </header>
            <hr />
            <div className="form-group">
                {this.getLabel()}
                <input type="text" className="form-control" value={item.text} disabled={true} />
            </div>
            <hr />
            {this.renderEnableSettings()}
        </div>
    }

}

export default ItemSettingsPanel;