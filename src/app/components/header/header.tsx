import React from 'react';
import { useHistory } from 'react-router-dom';

import './header.css';

export default function Header() {
    return (
        <div className={'header-container'}>
            <h1>GitHub Search</h1>
        </div>
    );
}
