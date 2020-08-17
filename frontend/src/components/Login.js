import React from 'react';
import '../tailwind.generated.css';
import '../index.css';

// User registration query

class Login extends React.Component {
    //POPUP
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <>
                <div className="flex h-screen bg-mainpurple text-darkpurple">
                    <div className="w-1/2 self-center ml-auto">
                        <div className="h-64 ml-auto mr-auto w-3/4 flex flex-col">
                            <h1 className="text-3xl font-bold mb-4">
                                Welcome to Job Groups!
                            </h1>
                            <h2 className="text-lg">
                                Jobs groups is a web application meant to help
                                people search for jobs by helping others find
                                new job postings.
                                <br />
                                <br />
                                Invite your friends, share jobs, and help you
                                and your friends land your dream positions!
                            </h2>
                        </div>
                    </div>
                    <div className="w-1/2 self-center">
                        <img
                            className="ml-auto mr-auto"
                            src={require('../images/clumsy_w_jobs.png')}
                            alt="notfsadasduppypng"
                        ></img>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
