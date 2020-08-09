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
                <div className="flex h-screen inline">
                    <div className="bg-mainpurple w-3/5 h-full">
                        <h1 className="text-2xl font-mono font-bold pl-20 pt-12">
                            <img
                                className="inline"
                                src={require('../images/Logo.png')}
                                alt="idk"
                            ></img>
                            <span className="pl-12">
                                Welcome to Job Groups!
                            </span>
                        </h1>
                        <div className="font-mono pl-20 pt-12 pr-12">
                            Job groups is a web application meant to help people
                            search for jobs by helping others find new job
                            postings.
                            <br />
                            <img
                                className="pl-40 h-auto"
                                src={require('../images/clumsy_w_jobs.png')}
                                alt="notfsadasduppypng"
                            ></img>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-secpurple w-2/5 h-full">
                        <div className="flex inline w-3/4 pt-10">
                            <a
                                className="w-20 h-8 bg-mainpink hover:bg-secpurple text-white rounded"
                                href="http://localhost:5000/auth/google"
                            >
                                Login with Google
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
