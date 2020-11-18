import React from 'react';
import { RepoType } from '../../store/types';
import { Link } from 'react-router-dom';

// type DetailsContainerProps = RouteComponentProps;

export default function DetailsContainer({ repo }: { repo: RepoType}) {
    return (
        <div>
            <Link to={'/'}>Back to Search Results</Link>
        </div>
    );
}
