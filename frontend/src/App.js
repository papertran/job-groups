import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Redux imports
import { connect } from 'react-redux';
import { fetchUser, addGroup } from './actions';

import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import AddGroupForm from './components/AddGroupForm';
// import NotFound from './components/NotFound';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const { auth } = this.props;
        // console.log(this.props);
        return (
            <>
                <Header isSignedIn={auth.isSignedIn} />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/Home" component={Home} />
                    <Route
                        path="/AddGroup"
                        render={() => (
                            <AddGroupForm onSubmit={this.props.addGroup} />
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

export default connect(mapStateToProps, { fetchUser, addGroup })(App);
