import * as React from 'react';
import LeftPart from './LeftFramePart';
import EnableWhenProps from '../../interfaces/components/enableWhen/EnableWhenProps';

export class EnableWhen extends React.Component<EnableWhenProps> {
    render() {
        return <div className="enable-when-frame">
            <header>
                <h2>Display conditions</h2>
                <div className="form-group row">
                    <label className="col-3">Enable behavior:</label>
                    <div className="form-check col-2">
                        <input type="radio" />
                        <label htmlFor="">All</label>
                    </div>
                    <div className="form-check col-2">
                        <input type="radio" />
                        <label htmlFor="">Any</label>
                    </div>
                </div>

            </header>
            <div className="main-section">
                <aside>
                    <LeftPart />
                </aside>
                <aside>
                    {/*RightFramePart*/}
                </aside>
            </div>
        </div>
    }
}

export default EnableWhen;