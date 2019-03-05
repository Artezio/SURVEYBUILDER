import * as React from 'react';
import Questionnaire from './Questionnaire';


export class Layout extends React.Component {
    render() {
        const { questionnaire } = (this.props as any);
        return <div className="container-fluid">
            <div className="menu d-flex row py-2 bg-dark text-light ">
                <h1 className="col-5 font-weight-bold">Questionnaire</h1>
                <div className="d-flex justify-content-around col-7">
                    <button className="btn btn-info d-display">Back to design</button>
                </div>
            </div>
            <div className="main-area row justify-content-center my-5">
                {!questionnaire && <Questionnaire questionnaire={questionnaire} />}
            </div>
        </div>
    }
}

export default Layout;