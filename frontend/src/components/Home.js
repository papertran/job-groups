import React from 'react';
import user from './data/user.json';
import { Header } from './Header';

class Home extends React.Component {

    render () {
    
    console.log(user);

        return (
            <>
            <Header/>
            <p>pee</p>
            </>
        )
    }

}

export default Home;