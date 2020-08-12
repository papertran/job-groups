import React from 'react';
import { connect } from 'react-redux';

import user from './data/user.json';
import Group from './Group';
import UserList from './UserList';
import JobList from './JobList';
import AddListing from './AddListing';

class Home extends React.Component {
    renderEmptyUser() {
        console.log(
            this.props.auth.user.group,
            this.props.auth.user.group.length
        );

        if (this.props.auth.user.group.length === 0) {
            return (
                <>
                    <Group />
                    <div className="bg-darkpurple flex flex-col h-full mt-4">
                        <div className="text-white w-3/4 mt-10 self-center">
                            <h1 className="text-2xl font-bold">
                                Nothing to see here...yet
                            </h1>
                            <p className="text-lg mt-4">
                                Welcome! Start by creating a new job-group where
                                you can add friends and share jobs that your
                                friends might be interested in!
                            </p>
                        </div>
                        <div className="flex h-full items-center justify-center">
                            <img
                                className="rounded h-64"
                                src={require('../images/window_1.png')}
                            />
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Group />
                    <UserList />
                </>
            );
        }
    }

    renderEmptyJob() {
        if (this.props.auth.user.group.length === 0) {
            return (
                <>
                    <AddListing />
                    <div className="bg-darkpurple flex flex-col h-full items-center">
                        <div className="bg-gray-700 mt-20">
                            <img
                                className="rounded h-64"
                                src={require('../images/window_2.png')}
                            />
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <AddListing />
                    <JobList />
                </>
            );
        }
    }

    render() {
        console.log('im in home', this.props.auth);

        return (
            <>
                <div className="flex h-screen">
                    <div className="bg-secpurple w-2/5">
                        {this.renderEmptyUser()}
                        {/* <Group /> */}
                        {/* <UserList /> */}
                    </div>

                    <div className="bg-secpurple w-3/5 h-full">
                        {this.renderEmptyJob()}
                        {/* <AddListing /> */}
                        {/* <JobList /> */}
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps, null)(Home);
