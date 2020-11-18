import { Dispatch } from 'react';
import { SortsType } from '../data/sorts';
import { LanguagesType } from '../data/languages';

export type RepoType = {
    id: number;
    full_name: string;
    description: string;
    stargazers_count: number;
    language: string;
};

export type SearchType = {
    sort: SortsType;
    language: LanguagesType;
    term: string;
};

export type StateType = {
    repos: RepoType[];
    search: SearchType;
    loading: boolean;
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
      }
    | {
          type: 'set-loading';
          payload: boolean;
      };
