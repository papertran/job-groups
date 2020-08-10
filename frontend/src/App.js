import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Redux imports
import { connect } from 'react-redux';
import { fetchUser } from './actions';

import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
// import NotFound from './components/NotFound';

import fetch from 'node-fetch';
class App extends React.Component {
    async componentDidMount() {
        this.props.fetchUser();

        // console.log('After fetch');
        // let response = await fetch('/auth/login/success', {
        //     method: 'GET',
        //     credentials: 'include',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Credentials': true,
        //     },
        // });

        // let json = await response.json();
        // console.log(json);
    }
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/Home" component={Home} />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </>
        );
    }
}

export default connect(null, { fetchUser })(App);
