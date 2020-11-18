import React, { useState, useContext } from 'react';
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';

import { languages } from '../../data/languages';
import { sorts } from '../../data/sorts';
import { AppContext } from '../../store/context';

import './searchBar.css';

export default function SearchBar({ handleSearch, loading }: { handleSearch: () => void, loading: boolean }) {
    const { state, dispatch } = useContext(AppContext);
    const [error, setError] = useState('');

    const errorText = 'must be at least 3 characters';

    const onKeyPress = (key: string) => {
        if (key === 'Enter') search();
    };

    const search = () => {
        if (state.search.term.length < 3) return setError(errorText);

        setError('');
        handleSearch();
    };

    return (
        <div className={'search-bar-container'}>
            <div className={'input-container'}>
                <InputLabel id={'search-label'}>Search</InputLabel>
                <TextField
                    type="string"
                    value={state.search.term}
                    onChange={(e) => dispatch({ type: 'set-searchTerm', payload: e.target.value })}
                    onKeyPress={(e) => onKeyPress(e.key)}
                    autoFocus
                    error={!!error}
                    helperText={error}
                    classes={{ root: 'text-field' }}
                    disabled={state.loading}
                />
            </div>
            <div className={'input-container'}>
                <InputLabel id={'language-label'}>Language</InputLabel>
                <Select
                    value={state.search.language}
                    id={'languageSelect'}
                    labelId={'language-label'}
                    onChange={(e) => dispatch({ type: 'set-language', payload: e.target.value })}
                    disabled={state.loading}
                >
                    {Object.values(languages).map((l) => (
                        <MenuItem key={l} value={l}>
                            {l}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <div className={'input-container'}>
                <InputLabel id={'sort-label'}>Sort</InputLabel>
                <Select
                    value={state.search.sort}
                    id={'sortSelect'}
                    labelId={'sort-label'}
                    onChange={(e) => dispatch({ type: 'set-sort', payload: e.target.value })}
                    disabled={state.loading}
                >
                    {Object.values(sorts).map((s) => (
                        <MenuItem key={s} value={s}>
                            {s}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <div className={'search-button-container'}>
                <Button disabled={state.search.term.length < 3 || loading} color={'primary'} onClick={() => search()}>Search</Button>
            </div>
            <div></div>
        </div>
    );
}
