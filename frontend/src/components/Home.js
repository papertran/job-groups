import React from 'react';
import user from './data/user.json';
import { Header } from './Header';
import Group from './Group';
import UserList from './UserList';

class Home extends React.Component {

    render () {
    
    console.log(user);

        return (
            <>
            <Header/>
            <div className="flex h-screen">
                <div className="bg-mainpurple w-2/5">
                    <Group/>
                    <UserList/>
                </div>

                <div className="bg-secpurple w-3/5 h-full">
                    hello again
                </div>
            </div>
            </>
        )
    }

}

export default Home;
