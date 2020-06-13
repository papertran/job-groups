import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';
import Home from './Home';
import App from '../App';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/Home" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;