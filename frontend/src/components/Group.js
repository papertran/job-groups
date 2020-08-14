import React from 'react';
import { connect } from 'react-redux';
import { setCurrentGroup } from '../actions';

class Group extends React.Component {
    componentDidMount() {
        console.log('hi', this.props.currentGroup);
        if (this.props.auth.user.group.length === 1) {
            const group = this.props.auth.user.group[0];
            this.props.setCurrentGroup(group);
        }
    }

    componentWillMount() {
        console.log('hi', this.props.currentGroup);
    }

    renderGroups(group) {
        return (
            <option key={group._id} value={JSON.stringify(group)}>
                {group.name}
            </option>
        );
    }

    changeOption(e) {
        this.props.setCurrentGroup(JSON.parse(e.target.value));
    }

    render() {
        // console.log('hey', this.props.currentGroup);
        return (
            <>
                <div className="flex w-full mt-10">
                    <button className="bg-darkpurple mr-4 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        {this.props.currentGroup.name}
                    </button>
                    <form className="flex rounded items-center justify-end w-full ">
                        <select
                            // value={this.props.currentGroup}
                            onChange={(e) => this.changeOption(e)}
                            className="w-full h-10 rounded pr-8"
                        >
                            {this.props.auth.user.group.map(this.renderGroups)}
                        </select>
                    </form>
                    <button className="flex justify-center items-center bg-darkpurple w-16 h-10 self-center ml-4 rounded hover:bg-darkpurple2">
                        <img
                            className="h-8"
                            src={require('../images/icon-plus-white.svg')}
                        />
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentGroup: state.group.currentGroup };
};

export default connect(mapStateToProps, { setCurrentGroup })(Group);
