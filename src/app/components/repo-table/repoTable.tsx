import React, { useContext } from 'react';
import { LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { formatNumber, formatDescription } from '../../services/util.service';
import { RepoType } from '../../store/types';
import { AppContext } from '../../store/context';

import './repoTable.css';


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
        <p className={'description'}>{formatDescription(repo.description)}</p>
        <div className={'language'}>
            <p>{repo.language}</p>
        </div>
        <p>{formatNumber(repo.stargazers_count)} stars</p>
    </div>
);
