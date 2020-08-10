import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isSignedIn }) => {
    const renderAuthButton = () => {
        if (isSignedIn) {
            return (
                <a
                    href="/auth/logout"
                    className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                    role="menuitem"
                >
                    Sign Out
                </a>
            );
        }
        return (
            <a
                href="/auth/google"
                className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                role="menuitem"
            >
                Sign In
            </a>
        );
    };
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src={require('../images/Logo.png')}
                                alt="Workflow logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src={require('../images/Logo.png')}
                                alt="Job Groups logo"
                            />
                        </div>
                        <div className="hidden md:ml-6 md:flex md:items-center">
                            <Link
                                to="/Home"
                                className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/Home"
                                className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                            >
                                Groups
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="rounded-md shadow-sm">
                                <button
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
                                </button>
                            </span>
                        </div>
                        <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                            <div className="ml-3 relative">
                                {renderAuthButton()}

                                {/* <Link
                                    to="/"
                                    className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    Sign out
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
