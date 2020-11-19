import React, { createContext, useReducer } from 'react';

import { repoReducer, searchReducer, loadingReducer } from './reducers';
import { StoreType, StateType, ActionType } from './types';
import { sorts } from '../data/sorts';
import { languages } from '../data/languages';

const initialState: StateType = {
    repos: [],
    search: {
        sort: sorts.BEST_MATCH,
        language: languages.ANY,
        term: ''
    },
    loading: false
};

const AppContext = createContext<StoreType>({ state: initialState, dispatch: () => null });

const mainReducer = ({ repos, search, loading }: StateType, action: ActionType): any => ({
    repos: repoReducer(repos, action),
    search: searchReducer(search, action),
    loading: loadingReducer(loading, action)
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
