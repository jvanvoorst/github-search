import React, { useState } from 'react';
import { InputLabel, MenuItem, Select, TextField } from '@material-ui/core';

import { languages, LanguagesType } from '../../data/languages';
import { sorts, SortsType } from '../../data/sorts';

import './searchBar.css';

export default function SearchBar({
    handleSearch,
}: {
    handleSearch: (searchTerm: string, sort: SortsType, language: LanguagesType) => void;
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState(sorts.BEST_MATCH);
    const [language, setLanguage] = useState(languages.ALL);
    const [error, setError] = useState('');

    const errorText = 'must be at least 3 characters';

    const onKeyPress = (key: string) => {
        if (key === 'Enter') search();
    };

    const onChangeLanguage = (language: any) => {
        setLanguage(language);
        search();
    };

    const onChangeSort = (sort: any) => {
        setSort(sort);
        search();
    };

    const search = () => {
        if (searchTerm.length < 3) return setError(errorText);

        setError('');
        handleSearch(searchTerm, sort, language);
    };

    return (
        <div className={'search-bar-container'}>
            <div className={'input-container'}>
                <InputLabel id={'search-label'}>Search</InputLabel>
                <TextField
                    type="string"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => onKeyPress(e.key)}
                    autoFocus
                    error={!!error}
                    helperText={error}
                    classes={{ root: 'text-field' }}
                />
            </div>
            <div className={'input-container'}>
                <InputLabel id={'language-label'}>Language</InputLabel>
                <Select
                    value={language}
                    id={'languageSelect'}
                    labelId={'language-label'}
                    onChange={(e) => onChangeLanguage(e.target.value)}
                >
                    {Object.values(languages).map((l) => (
                        <MenuItem key={l} value={l}>{l}</MenuItem>
                    ))}
                </Select>
            </div>
            <div className={'input-container'}>
                <InputLabel id={'sort-label'}>Sort</InputLabel>
                <Select
                    value={sort}
                    id={'sortSelect'}
                    labelId={'sort-label'}
                    onChange={(e) => onChangeSort(e.target.value)}
                >
                    {Object.values(sorts).map((s) => (
                        <MenuItem key={s} value={s}>{s}</MenuItem>
                    ))}
                </Select>
            </div>
            <div></div>
        </div>
    );
}
