import React, { useContext } from 'react';

import { AppContext } from '../../store/context';
import SearchBar from '../../components/search-bar/searchBar';
import * as APIService from '../../services/api.service';
import RepoTable from '../../components/repo-table/repoTable';

export default function SearchContainer() {
    const { state, dispatch } = useContext(AppContext);

    const handleSearch = async () => {
        dispatch({ type: 'set-loading', payload: true});
        try {
            const res = await APIService.search(state.search.term, state.search.sort, state.search.language);
            dispatch({ type: 'set-repos', payload: res.data.items });
            dispatch({ type: 'set-loading', payload: false });
        } catch (error) {
            console.error('There was an arror making search request', error);
            dispatch({ type: 'set-loading', payload: false });
        }
    };

    return (
        <>
            <SearchBar handleSearch={handleSearch} loading={state.loading} />
            <RepoTable repos={state.repos} />
        </>
    );
}
