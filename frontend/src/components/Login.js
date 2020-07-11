import React from 'react';
import '../tailwind.generated.css';
import '../index.css';
import Modal from './Modal';

import { Link } from 'react-router-dom';

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
                            postings which are asfgsvsvsdvdsksdkfnsddPEE.
                            <br />
                            <img
                                className="pl-40 h-auto"
                                src={require('../images/clumsy_w_jobs.png')}
                                alt="notfsadasduppypng"
                            ></img>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-secpurple w-2/5 h-full">
                        <form className="w-1/2">
                            <div className="w-3/4 border-b border-darkpurple py-2">
                                <input
                                    className="appearance-none bg-transparent border-none text-gray-700 leading-tight focus:outline-none w-3/4"
                                    type="text"
                                    placeholder="Username or email"
                                ></input>
                            </div>

                            <div className="flex items-center w-3/4 border-b border-darkpurple py-2 pt-10">
                                <input
                                    className="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-3/4"
                                    type="password"
                                    placeholder="Password"
                                ></input>
                            </div>

                            <div className="flex inline w-3/4 pt-10">
                                <Link to="/Home">
                                    <button
                                        className="flex-1 w-16 h-8 bg-darkpurple2 hover:bg-secpurple text-white rounded"
                                        type="button"
                                    >
                                        Login
                                    </button>
                                </Link>
                                <span className="w-2"></span>

                                <button
                                    onClick={this.showModal}
                                    className="w-20 h-8 bg-mainpink hover:bg-secpurple text-white rounded"
                                    type="button"
                                >
                                    Signup
                                </button>
                                <Modal
                                    show={this.state.show}
                                    handleClose={this.hideModal}
                                ></Modal>

                                <button
                                    className="text-xs text-darkpurple2 font-bold"
                                    type="button"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
