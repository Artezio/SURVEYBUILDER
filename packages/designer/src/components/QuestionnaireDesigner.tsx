import React from 'react';
import { connect } from 'react-redux';

interface QuestionnaireProps {
    title?: string;
    description?: string;
    // items?: DisplayItem[];
}

export class QuestionnaireDesigner extends React.Component<QuestionnaireProps> {
    render(): React.ReactNode {
        return <div className="questionnaire-designer container border border-secondary">
            <div className="from-group my-3">
                <input className="form-control" type="text" name="title" placeholder="Title" style={{ height: '50px', fontSize: '30px' }} autoFocus={true}></input>
            </div>
            <div className="from-group my-3">
                <textarea className="form-control" rows={3} name="description" placeholder="Description"></textarea>
            </div>
            <div className="item-list">

            </div>
        </div>
    }
}

export default connect()(QuestionnaireDesigner);