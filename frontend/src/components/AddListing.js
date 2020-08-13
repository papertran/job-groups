import React from 'react';

const AddListing = () => {
    return (
        <div className="flex justify-end items-center h-14 w-full mt-10 mb-6">
            <h1 className="text-2xl font-bold">Listings</h1>
            <button className="bg-mainpink h-6 rounded ml-2 mr-4">
                <img className="" src={require('../images/icon-plus.svg')} />
            </button>
        </div>
    );
};

export default AddListing;
