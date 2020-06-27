import React from 'react';

class Group extends React.Component {
    render() {
        return (
            <>
                <div className="flex w-full mt-10">
                    <button className="bg-darkpurple mr-4 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Group
                    </button>

                    <div className="bg-gray-400 w-full rounded">
                        search bar
                    </div>

                </div>
            </>
        )
    }
}

export default Group;