import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';

// render(
//     <Provider store={}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

render(
    <App />,
    document.getElementById('root')
);