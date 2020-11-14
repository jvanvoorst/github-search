import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchContainer from './app/containers/search/search.container';
import DetailsContainer from './app/containers/details/details.container';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={SearchContainer} />
                <Route path="/details" render={(props) => <DetailsContainer {...props} />} />
            </Switch>
        </Router>
    );
}
