import React from 'react';

class Group extends React.Component {
    render() {
        return (
            <>
                <div className="flex w-full mt-10">
                    <button className="bg-darkpurple mr-4 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        GroupName
                    </button>

                    {/* <div className="bg-gray-400 rounded"> */}
                        <form className="flex bg-white rounded items-center justify-end w-full ">
                            <img className="h-6 ml-2 z-10" src={require('../images/icon-search.svg')}></img>
                            <input className="w-full rounded h-10 pl-10 -ml-8 focus:border-gray-400" type="text" placeholder="search">

                            </input>
                        </form>
                    {/* </div> */}

                </div>
            </>
        )
    }
}

export default Group;