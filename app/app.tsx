/* eslint-disable no-unused-expressions */
// import { Card, Drawer, Button } from 'antd';
import { hot } from 'react-hot-loader'; // needs to be before react!
import React from 'react';
// import { Account } from '@src/generated';
import { ClimbingArea as Area } from '@src/generated';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// local
import Home from './pages/Home';
import Profile from './pages/Profile';
import Areas from './pages/Areas';
import Routes from './pages/Routes';
import Climbers from './pages/Climbers';
import Navbar from './components/Navbar';
import RouteDetailPage from './pages/RouteDetailPage';
import AreaDetailPage from './pages/AreaDetailPage';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/areas">
                        <Areas />
                    </Route>
                    <Route path="/areas/:area_id">
                        <AreaDetailPage />
                    </Route>
                    <Route exact path="/routes">
                        <Routes />
                    </Route>
                    <Route path="/routes/:route_id">
                        <RouteDetailPage />
                    </Route>
                    <Route exact path="/climbers">
                        <Climbers />
                    </Route>
                    <Route path="/climbers/:climber_id">
                        <Profile />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default hot(module)(App);
