import * as React from 'react';
import 'bootstrap-scss';
import './data/styles/sheet.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import './data/styles/index.css';
import 'bootstrap';
import Layout from './components/Layout';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


export const App = () => <Layout />

export default DragDropContext(HTML5Backend)(App);