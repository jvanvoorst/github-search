import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import SearchContainer from './app/containers/search/search.container';
import DetailsContainer from './app/containers/details/details.container';
import Header from './app/components/header/header';
import { AppContext } from './app/store/context';

export default function App() {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={SearchContainer} />
                    <Route
                        path="/details/:id"
                        children={<Details />}
                        // render={() => (
                        //     <DetailsContainer repo={state.repos.find((i) => (i.id = id))} />
                        // )}
                    />
                </Switch>
            </Router>
        </>
    );
}

function Details() {
    const { state } = useContext(AppContext);
    const { id } = useParams();
    console.log('id', id);
    const repo = state.repos.find((i) => i.id === id)
    console.log('repos', state.repos)
    return <DetailsContainer repo={repo}/>
}
