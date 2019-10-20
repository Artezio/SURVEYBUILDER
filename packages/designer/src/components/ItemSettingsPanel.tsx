import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemSettingsPanelProps from '../interfaces/components/ItemSettingsPanelProps';
import { HumanReadableGuid } from '../helpers/humanReadableId';
import { questionTypes } from '../constants/questionTypes';
import EnableSettings from './enableWhen/EnableSettings';


interface ItemSettingsPanelState {
    openEnableSettings: boolean;
}

export class ItemSettingsPanel extends React.Component<ItemSettingsPanelProps, ItemSettingsPanelState> {
    static defaultProps: Partial<ItemSettingsPanelProps> = {
        className: ''
    }

    state = {
        openEnableSettings: false,
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

    toggleEnableSettingsDisplay() {
        this.setState({
            openEnableSettings: !this.state.openEnableSettings
        })
    }

    renderEnableSettings() {
        const { item, questionnaire } = this.props;
        const { openEnableSettings } = this.state;
        return <section className={`card ${openEnableSettings ? 'dropup' : ''}`}>
            {/* <div className="card-header"> */}
            <button className="btn btn-block card-header dropdown-toggle p-1" onClick={this.toggleEnableSettingsDisplay.bind(this)}>
                Enable settings
                </button>

            {/* </div> */}
            {openEnableSettings && <div className="card-body">
                <EnableSettings questionnaire={questionnaire} item={item} />
            </div>}
        </section>
    }

    render() {
        const { item } = this.props;
        return <div className="settings-panel">
            <header className="d-flex justify-content-between align-items-center">
                <span>#{this.humanReadableGuid.getHumanReadableId(item.id)}</span>
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