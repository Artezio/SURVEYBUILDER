import * as React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-scss';
import '@fortawesome/fontawesome-free/css/all.css';
import './data/styles/artezioBootstrapTheme.scss';
import './data/styles/layoutContent.scss';
import MainLayout from './layouts/MainLayout';
import { Theme } from './interface/layouts/MainLayoutProps';

const themes: Theme[] = [
    {
        title: 'Darkly theme',
        href: '/bootstrapThemes/darkly.css'
    },
    {
        title: 'Sketchy',
        href: '/bootstrapThemes/sketchy.css'
    },
    {
        title: 'Minty',
        href: '/bootstrapThemes/minty.css'
    },
    {
        title: 'Simplex',
        href: '/bootstrapThemes/simplex.css'
    },
    {
        title: 'Solar',
        href: '/bootstrapThemes/solar.css'
    },
    {
        title: 'United',
        href: '/bootstrapThemes/united.css'
    },
    {
        title: 'Yeti',
        href: '/bootstrapThemes/yeti.css'
    },
    {
        title: 'Superhero',
        href: '/bootstrapThemes/superhero.css'
    },
    {
        title: 'Stale',
        href: '/bootstrapThemes/stale.css'
    },
    {
        title: 'Sandstone',
        href: '/bootstrapThemes/sandstone.css'
    },
    {
        title: 'Pulse',
        href: '/bootstrapThemes/pulse.css'
    },
    {
        title: 'Materia',
        href: '/bootstrapThemes/materia.css'
    },
    {
        title: 'Lux',
        href: '/bootstrapThemes/lux.css'
    },
    {
        title: 'Lumen',
        href: '/bootstrapThemes/lumen.css'
    },
    {
        title: 'Litera',
        href: '/bootstrapThemes/litera.css'
    },
    {
        title: 'Journal',
        href: '/bootstrapThemes/journal.css'
    },
    {
        title: 'Flatly',
        href: '/bootstrapThemes/flatly.css'
    },
    {
        title: 'Cyborg',
        href: '/bootstrapThemes/cyborg.css'
    },
    {
        title: 'Cosmo',
        href: '/bootstrapThemes/cosmo.css'
    },
    {
        title: 'Cerulean',
        href: '/bootstrapThemes/cerulean.css'
    }
]

export const App = () => <MainLayout themes={themes} />;

export default App;