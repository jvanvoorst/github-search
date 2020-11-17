import React, { useContext } from 'react';

import { AppContext } from '../../store/context';
import SearchBar from '../../components/search-bar/searchBar';
import * as APIService from '../../services/api.service';
import RepoTable from '../../components/repo-table/repoTable';

export default function SearchContainer() {
    const { state, dispatch } = useContext(AppContext);

    const handleSearch = async (searchTerm: string, sort: string, language: string) => {
        try {
            const res = await APIService.search(searchTerm, sort, language);
            dispatch({ type: 'set-repos', payload: res.data.items });
        } catch (error) {
            console.error('There was an arror making search request', error);
        }
    };

    return (
        <>
            <SearchBar handleSearch={handleSearch} />
            <RepoTable repos={state.repos} />
        </>
    );
}
