import * as React from 'react';
import 'bootstrap-scss';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap';
import MainLayout from './layouts/MainLayout';


const themes = [
    {
        name: 'Dark theme',
        href: 'https://bootswatch.com/4/cyborg/bootstrap.css'
    }
]

export const App = () => <MainLayout themes={themes} />;

export default App;