import * as React from 'react';
import ReactDOM from 'react-dom';

export const Spinner = () => {
    return ReactDOM.createPortal(
        <div className="d-flex justify-content-center align-items-center" style={{ zIndex: 100, position: "fixed", width: '100%', height: '100%', left: 0, top: 0 }}>
            <i className="fas fa-spinner fa-spin fa-4x text-info"></i>
        </div>, document.getElementById('root') as any
    )
}