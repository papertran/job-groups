import React from 'react';
import { Link } from 'react-router-dom';

const AddListing = () => {
    return (
        <div className="flex justify-end items-center h-14 w-full mt-10 mb-6">
            <h1 className="text-2xl font-bold">Listings</h1>
            <Link
                to="/AddJob"
                type="button"
                className="bg-mainpink h-6 rounded ml-2 mr-4 hover:bg-red-200"
            >
                <img className="" src={require('../images/icon-plus.svg')} />
            </Link>
        </div>
    );
};

export default AddListing;
