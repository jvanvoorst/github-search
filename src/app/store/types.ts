import { Dispatch } from 'react';

export type RepoType = {
    id: number;
};

export type SearchType = {
    sort: 'best-match' | 'most-stars';
    language: string | null;
    term: string;
};

export type StateType = {
    repos: RepoType[];
    search: SearchType;
};

export type StoreType = {
    state: StateType;
    dispatch: Dispatch<any>;
};

export type ActionType =
    | {
          type: 'set-repos';
          payload: {};
      }
    | {
          type: 'set-search';
          payload: {};
      };
