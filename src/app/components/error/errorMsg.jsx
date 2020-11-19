import React from 'react';

import './errorMsg.css';

export default function ErrorMsg({children}) {
    return (
        <div className={'error-msg-container'}>
            <h2>{children}</h2>
        </div>
    );
}