import { Dispatch } from 'react';
import { sorts, _sorts } from '../data/sorts';
import { languages } from '../data/languages';

export type RepoType = {
    id: number;
    full_name: string;
    description: string;
    stargazers_count: number;
    language: string;
};

// type SortType = keyof typeof sorts;
type LanguageTypes = keyof typeof languages;
export type SearchType = {
    sort: _sorts;
    language: LanguageTypes;
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
