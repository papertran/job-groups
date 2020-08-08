import React from 'react';
import user from './data/user.json';
import { Header } from './Header';
import Group from './Group';
import UserList from './UserList';
import JobList from './JobList';
import AddListing from './AddListing';

class Home extends React.Component {
    render() {
        console.log(user);

        return (
            <>
                <Header />
                <div className="flex h-screen">
                    <div className="bg-secpurple w-2/5">
                        <Group />
                        <UserList />
                    </div>

                    <div className="bg-secpurple w-3/5 h-full">
                        <AddListing />
                        <JobList />
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
