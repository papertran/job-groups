import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Redux imports
import { connect } from 'react-redux';
import { fetchUser, addGroup, addJob } from './actions';

import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import AddGroupForm from './components/AddGroupForm';
import AddJobForm from './components/AddJobForm';
// import NotFound from './components/NotFound';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();    
    }

    renderHome () {
        if(this.props.auth.isSignedIn === null) {
            return (
                <Login/>
            )
        }
        else {
            return (
                <Home/>
            )
        }
    }

    render() {
        const { auth } = this.props;
        // console.log(this.props);
        return (
            <>
                <Header isSignedIn={auth.isSignedIn} />
                {this.renderHome()}
                <Switch>
                    {/* <Route exact path="/" component={Login} /> */}
                    {/* <Route path="/Home" component={Home} /> */}
                    <Route
                        path="/AddGroup"
                        render={() => (
                            <AddGroupForm onSubmit={this.props.addGroup} />
                        )}
                    />
                    <Route
                        path="/AddJob"
                        render={() => (
                            <AddJobForm onSubmit={this.props.addJob} />
                        )}
                    />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser, addGroup, addJob })(App);
