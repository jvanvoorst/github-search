import React, { useContext } from 'react';

import { AppContext } from '../../store/context';
import SearchBar from '../../components/search-bar/searchBar';
import * as APIService from '../../services/api.service';
import RepoTable from '../../components/repo-table/repoTable';

export default function SearchContainer() {
    const { state, dispatch } = useContext(AppContext);

    const handleSearch = async (searchTerm: string, sort: string, language: string) => {
        dispatch({ type: 'set-loading', payload: true});
        try {
            const res = await APIService.search(searchTerm, sort, language);
            dispatch({ type: 'set-repos', payload: res.data.items });
            dispatch({ type: 'set-loading', payload: false });
        } catch (error) {
            console.error('There was an arror making search request', error);
            dispatch({ type: 'set-loading', payload: false });
        }
    };

    return (
        <>
            <SearchBar handleSearch={handleSearch} />
            <RepoTable repos={state.repos} />
        </>
    );
}
