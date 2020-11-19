import React, { useContext, useState } from 'react';

import { AppContext } from '../../store/context';
import SearchBar from '../../components/search-bar/searchBar';
import * as APIService from '../../services/api.service';
import RepoTable from '../../components/repo-table/repoTable';
import ErrorMsg from '../../components/error/errorMsg';

export default function SearchContainer() {
    const { state, dispatch } = useContext(AppContext);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSearch = async () => {
        dispatch({ type: 'set-loading', payload: true });
        try {
            const res = await APIService.search(
                state.search.term,
                state.search.sort,
                state.search.language
            );
            dispatch({ type: 'set-repos', payload: res.data.items });
            dispatch({ type: 'set-loading', payload: false });
        } catch (error) {
            const _error = 'There was an error making search request';
            console.error(_error, error);
            setErrorMsg(_error);
            dispatch({ type: 'set-loading', payload: false });
        }
    };

    return (
        <>
            <SearchBar handleSearch={handleSearch} loading={state.loading} />
            {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <RepoTable repos={state.repos} />}
        </>
    );
}
