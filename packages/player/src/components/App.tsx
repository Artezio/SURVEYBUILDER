import * as React from 'react';
import Layout from './Layout';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


export const App = () => {
    return <Layout actions={{ toggleAppModeToDesign: () => { return 0; } }} />;
}

export default App;