import * as React from 'react';
import 'bootstrap-scss';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap';

export class App extends React.Component {

    render() {
        return <div className="main">
            <section className="p-3 bg-secondary">
                <div className="form-group row mb-0 d-flex justify-content-around">
                    <input value="https://fhirtest.uhn.ca/search" type="text" className="form-control col-10" disabled />
                    <button className="btn btn-light col-1">Search</button>
                </div>
            </section>
            <section className="p-3">
                {/* Controller */}
            </section>
        </div>
    }
}

export default App;