import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Redux imports
import { connect } from 'react-redux';
import { fetchUser, addGroup, addJob, addUser } from './actions';

import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import AddGroupForm from './components/forms/AddGroupForm';
import AddJobForm from './components/forms/AddJobForm';
import AddUserForm from './components/forms/AddUserForm';
// import NotFound from './components/NotFound';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    renderHome() {
        if (this.props.auth.isSignedIn === null) {
            return <Login />;
        } else {
            return <Home />;
        }
    }

    render() {
        const { auth } = this.props;
        // console.log(this.props);
        return (
            <>
                <Header isSignedIn={auth.isSignedIn} />
                {/* {this.renderHome()} */}
                <Switch>
                    <Route exact path="/" render={() => this.renderHome()} />
                    {/* <Route path="/Home" component={Home} /> */}
                    <Route
                        path="/AddGroup"
                        exact
                        render={() => (
                            <AddGroupForm onSubmit={this.props.addGroup} />
                        )}
                    />
                    <Route
                        path="/AddJob"
                        exact
                        render={() => (
                            <AddJobForm onSubmit={this.props.addJob} />
                        )}
                    />

                    <Route
                        path="/AddUser"
                        exact
                        render={() => (
                            <AddUserForm onSubmit={this.props.addUser} />
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

export default connect(mapStateToProps, {
    fetchUser,
    addGroup,
    addJob,
    addUser,
})(App);
