import { RepoType, ActionType, SearchType } from './types';

export const repoReducer = (repos: RepoType[], action: ActionType) => {
    switch (action.type) {
        case 'set-repos':
            return action.payload;
        default:
            return repos
    }
};

export const searchReducer = (search: SearchType, action: ActionType) => {
    switch (action.type) {
        case 'set-search':
            return action.payload
        default:
            return search;
    }
}

export const loadingReducer = (loading: boolean, action: ActionType) => {
    if (action.type === 'set-loading') return action.payload

    return loading;
}


