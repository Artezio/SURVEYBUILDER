import * as React from 'react';
import { AppProps } from '../interfaces/componentProps/App';
import { PLAY } from '../constants/application';
import Layout from './Layout';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


const mapStateToProps = (store: Store) => ({ application: store.application });

export const App = (props: AppProps) => {
    switch (props.application.mode) {
        case PLAY: {
            return <Layout />
        }
        default: {
            return null;
        }
    }
}

export default connect(mapStateToProps)(App);