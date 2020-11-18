import React from 'react';
import { RepoType } from '../../store/types';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';

import './details.css';
import { Link } from '@material-ui/core';
import { formatNumber } from '../../services/util.service';

export default function DetailsContainer({ repo }: { repo: RepoType | undefined }) {
    return (
        <div className={'details-container'}>
            <div className={'back-link'}>
                <RouterLink to={'/'}>Back to Search Results</RouterLink>
            </div>
            <div className={'details-outer'}>
                <div className={'details-inner'}>
                    <div className={'title-row'}>
                        <img width={'100'} src={repo?.owner?.avatar_url} alt={'avatar'} />
                        <div className={'owner-repo'}>
                            <h2>Owner: {repo?.owner.login}</h2>
                            <h2>Repo: {repo?.name}</h2>
                        </div>
                    </div>
                    <div className={'details-body'}>
                        <Link>{repo?.html_url}</Link>
                        <p>{repo?.description}</p>
                        <p>Language: {repo?.language ?? 'not listed'}</p>
                        <p>
                            Stars:{' '}
                            {repo?.stargazers_count ? formatNumber(repo?.stargazers_count ?? 0) : null}
                        </p>
                        <p>Last Update: {moment(repo?.updated_at).fromNow()}</p>
                        <p>Issues: {repo?.open_issues ?? 'none'}</p>
                        <p>Forks: {repo?.forks_count ?? 'none'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
