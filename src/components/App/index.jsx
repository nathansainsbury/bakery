import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './../Nav';
import Footer from './../Footer';

import Home from './../../pages/home';

export default () => (
    <Router>
        <Nav />
        <Switch>
            <Route path='/' component={Home} exact/>
        </Switch>
        <Footer />
    </Router>
);
