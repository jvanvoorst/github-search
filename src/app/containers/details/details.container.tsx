import React from 'react';
import { RepoType } from '../../store/types';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import moment from 'moment';

import './details.css';
import { Link } from '@material-ui/core';
import { formatNumber } from '../../services/util.service';

export default function DetailsContainer({ repo }: { repo: RepoType | undefined }) {
    const history = useHistory();
    if (!repo) {
        history.push('/');
    }

    return (
        <div className={'details-container'}>
            <div className={'back-link'}>
                <RouterLink to={'/'}>Back to Search Results</RouterLink>
            </div>
            <div className={'details-outer'}>
                <div className={'details-inner'}>
                    <div className={'title-row'}>
                        <img
                            width={'100'}
                            height={'100'}
                            src={repo?.owner?.avatar_url}
                            alt={'avatar'}
                        />
                        <div className={'owner-repo'}>
                            <p className={'owner-repo-text'}>Owner: {repo?.owner.login}</p>
                            <p className={'owner-repo-text'}>Repo: {repo?.name}</p>
                        </div>
                    </div>
                    <div className={'details-body'}>
                        <Link href={repo?.html_url}>{repo?.html_url ?? 'none'}</Link>
                        <p>{repo?.description}</p>
                        <p>Language: {repo?.language ?? 'not listed'}</p>
                        <p>
                            Stars:{' '}
                            {repo?.stargazers_count
                                ? formatNumber(repo?.stargazers_count ?? 0)
                                : null}
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
