import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../store/context';

export default function SearchContainer() {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'set-repos', payload: repos});
        console.log('state', state);

    }, [])

    return (
        <div>Search</div>
    )
}

const repos = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    },
    {
        id:5
    }
]