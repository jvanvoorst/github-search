import React, { useContext } from 'react';
import { LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { RepoType } from '../../store/types';

import './repoTable.css';
import { AppContext } from '../../store/context';

export default function RepoTable({ repos }: { repos: Array<RepoType> }) {
    const { state } = useContext(AppContext);

    return (
        <>
            {state.loading ? <LinearProgress /> : <div className={'loading-placeholder'} />}
            <div className={'repo-table-container'}>
                {repos.map((r) => (
                    <RepoCard key={r.id} repo={r} />
                ))}
            </div>
        </>
    );
}

const RepoCard = ({ repo }: { repo: RepoType }) => (
    <div className={'repo-card-container'}>
        <Link to={`/details/${repo.id}`}>{repo.full_name}</Link>
        <div>{repo.description}</div>
        <div>{repo.language}</div>
        <div>{repo.stargazers_count}</div>
    </div>
);
