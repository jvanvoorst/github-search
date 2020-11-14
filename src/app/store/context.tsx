import React, { createContext, useReducer } from 'react';

import { repoReducer, searchReducer } from './reducers';
import { StoreType, StateType, ActionType } from './types';

const initialState: StateType = {
    repos: [],
    search: {
        sort: 'best-match',
        language: null,
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
