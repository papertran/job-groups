import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
// import NotFound from './components/NotFound';

class App extends React.Component {
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

export default App;
