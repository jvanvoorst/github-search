import React, { createContext, useReducer } from 'react';

import { repoReducer, searchReducer } from './reducers';
import { StoreType, StateType, ActionType } from './types';
import { sorts, _sorts } from '../data/sorts';
import { languages } from '../data/languages';

const initialState: StateType = {
    repos: [],
    search: {
        sort: _sorts.BEST_MATCH,
        language: languages.ALL.id,
        term: ''
    },
};

const AppContext = createContext<StoreType>({ state: initialState, dispatch: () => null });

const mainReducer = ({ repos, search }: StateType, action: ActionType): any => ({
    repos: repoReducer(repos, action),
    search: searchReducer(search, action),
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
