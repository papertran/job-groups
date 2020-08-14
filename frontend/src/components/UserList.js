import React from 'react';
import { connect } from 'react-redux';
import { setCurrentGroup } from '../actions';

class UserList extends React.Component {
    renderUser(groupData) {
        return (
            <div className="flex justify-center" key={groupData._id}>
                <div className=" flex items-center bg-gray-400 mt-4 h-16 w-11/12 rounded">
                    <div className="rounded-full bg-mainpink ml-2 mr-2">
                        <img
                            className="h-10 w-10 object-contain"
                            src={require('../images/clumsy.png')}
                        />
                    </div>
                    <h2>{groupData.name}</h2>
                </div>
            </div>
        );
    }

    render() {
        return (
            <>
                <div className="bg-darkpurple2 h-full mt-4 overflow-scroll">
                    {this.props.currentGroup.users.map(this.renderUser)}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentGroup: state.group.currentGroup };
};

export default connect(mapStateToProps, { setCurrentGroup })(UserList);
