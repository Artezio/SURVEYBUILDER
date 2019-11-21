import * as React from 'react';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './data/styles/artezioBootstrapTheme.scss';
import './data/styles/layoutContent.scss';
import MainLayout from './layouts/MainLayout';
import { Theme } from './interface/layouts/MainLayoutProps';

const themes: Theme[] = [
    {
        title: 'Minty(+)',
        href: '/bootstrapThemes/minty.css'
    },
    {
        title: 'Stale(+)',
        href: '/bootstrapThemes/stale.css'
    },
    {
        title: 'Sandstone(+)',
        href: '/bootstrapThemes/sandstone.css'
    },
    {
        title: 'Litera(+)',
        href: '/bootstrapThemes/litera.css'
    },
    {
        title: 'Journal(+)',
        href: '/bootstrapThemes/journal.css'
    }
]

export const App = () => <MainLayout themes={themes} />;

export default App;