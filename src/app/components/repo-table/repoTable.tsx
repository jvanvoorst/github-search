import React from 'react';
import { Link } from '@material-ui/core';

import { RepoType } from '../../store/types';

import './repoTable.css';

export default function RepoTable({ repos }: { repos: Array<RepoType> }) {
    return (
        <div className={'repo-table-container'}>
            {repos.map((r) => (
                <RepoCard key={r.id} repo={r} />
            ))}
        </div>
    );
}

const RepoCard = ({ repo }: { repo: RepoType }) => (
    <div className={'repo-card-container'}>
        <Link>{repo.full_name}</Link>
        <div>{repo.description}</div>
        <div>{repo.language}</div>
        <div>{repo.stargazers_count}</div>
    </div>
);
