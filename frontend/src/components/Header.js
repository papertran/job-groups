import React from 'react';

export const Header = () => {
    return (
        <>
            <div className="flex justify-between w-full h-24 bg-darkpurple">
            <img className="inline h-16 mt-4 ml-12" src={require('../images/Logo.png')} alt="idk"></img>
            <img className="inline rounded-full h-16 mt-4 mr-12" src={require('../logo.svg')} alt="idk"></img>
                
            </div>
        </>
    )
}