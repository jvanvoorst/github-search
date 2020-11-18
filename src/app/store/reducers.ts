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
        case 'set-searchTerm':
            return {
                ...search,
                term: action.payload
            }
        case 'set-sort':
            return {
                ...search,
                sort: action.payload
            }
        case 'set-language':
            return {
                ...search,
                language: action.payload
            }
        default:
            return search;
    }
}

export const loadingReducer = (loading: boolean, action: ActionType) => {
    if (action.type === 'set-loading') return action.payload

    return loading;
}


