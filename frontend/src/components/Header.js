import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isSignedIn }) => {
    const renderNavbar = () => {
        if (isSignedIn) {
            return (
                <nav className="bg-darkpurple">
                    <div className="flex justify-between w-full h-16">
                        <img
                            className="self-center inline h-10 ml-4"
                            src={require('../images/Logo.png')}
                            alt="idk"
                        ></img>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="rounded-md shadow-sm">
                                    <Link
                                        to="/AddGroup"
                                        type="button"
                                        className="relative inline-flex items-center mr-4 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out"
                                    >
                                        <svg
                                            className="-ml-1 mr-2 h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>New Group</span>
                                    </Link>
                                    <span className="rounded-md shadow-sm">
                                        <Link
                                            to="/AddJob"
                                            type="button"
                                            className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out"
                                        >
                                            <svg
                                                className="-ml-1 mr-2 h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>New Job</span>
                                        </Link>
                                    </span>
                                </span>
                            </div>
                            <a
                                href="/auth/logout"
                                className="mx-3 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-darkpurple2 transition duration-150 ease-in-out"
                                role="menuitem"
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className="bg-darkpurple">
                    <div className="flex justify-between w-full h-16">
                        <img
                            className="self-center h-10 ml-4"
                            src={require('../images/Logo.png')}
                            alt="idk"
                        ></img>
                        <div className="self-center">
                            <a
                                href="/auth/google"
                                className="mr-3 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-darkpurple2 transition duration-150 ease-in-out"
                                role="menuitem"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </nav>
            );
        }
    };

    return <>{renderNavbar()}</>;
};

export default Header;
