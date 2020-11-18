import { Dispatch } from 'react';
import { SortsType } from '../data/sorts';
import { LanguagesType } from '../data/languages';

export type RepoType = {
    id: number;
    full_name: string;
    description: string;
    stargazers_count: number;
    language: string;
    owner: { avatar_url: string; login: string };
    name: string;
    html_url: string;
    updated_at: string;
    open_issues: number;
    forks_count: number;
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
          type: 'set-searchTerm';
          payload: {};
      }
    | {
          type: 'set-sort';
          payload: SortsType;
      }
    | {
          type: 'set-language';
          payload: LanguagesType;
      }
    | {
          type: 'set-loading';
          payload: boolean;
      };
