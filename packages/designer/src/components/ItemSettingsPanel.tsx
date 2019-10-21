import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemSettingsPanelProps from '../interfaces/components/ItemSettingsPanelProps';
import { HumanReadableGuid } from '../helpers/humanReadableId';
import { questionTypes } from '../constants/questionTypes';
import EnableSettings from './enableWhen/EnableSettings';
import useObservableModel from '../observableConnector/useObservableModel';


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
        const { item } = this.props;
        const type = item.type;
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
        return <section className="settings-panel__enable-settings">
            <div className="card-header card-footer form-group p-0">
                <button className="btn btn-block d-flex justify-content-between align-items-center" onClick={this.toggleEnableSettingsDisplay.bind(this)}>
                    <span>Enable settings</span>
                    <i className={`fas fa-${openEnableSettings ? 'caret-up' : 'caret-down'}`}></i>
                </button>
            </div>
            {openEnableSettings && <div className="card-body">
                <EnableSettings key={item.id} questionnaire={questionnaire} item={item} />
            </div>}
        </section>
    }

    onChange(e) {
        const { item } = this.props;
        if (e.target.checked && !item.required) {
            item.required = true;
        } else {
            item.required = false;
        }
    }

    render() {
        const { item } = this.props;
        return <div className="settings-panel card h-100">
            <header className="card-header d-flex justify-content-between align-items-center">
                <span>#{this.humanReadableGuid.getHumanReadableId(item.id)}</span>
                <span>{this.getItemTypeTitle()}</span>
            </header>
            <div className="card-body">
                <div className="form-group">
                    {this.getLabel()}
                    <input type="text" className="form-control" value={item.text} disabled={true} />
                </div>
                {item.type !== Models.GROUP && item.type !== Models.DISPLAY && <div className="form-check">
                    <input
                        defaultChecked={item.required}
                        name="required"
                        type="checkbox"
                        className="form-check-input"
                        id={`${item.id}-required-settings-panel`}
                        onChange={this.onChange.bind(this)}
                    />
                    <label className="mb-0" htmlFor={`${item.id}-required-settings-panel`}>Required</label>
                </div>}
            </div>
            {this.renderEnableSettings()}
        </div>
    }

}

export default useObservableModel<ItemSettingsPanelProps>(ItemSettingsPanel);