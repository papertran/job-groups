import React from 'react';
import { connect } from 'react-redux';

const JobList = (props) => {
    const renderJobs = (groupData) => {
        return (
            <div className="flex justify-center" key={groupData._id}>
                <div className="flex items-center w-11/12 mt-4 h-12 rounded bg-secpurple">
                    <span className="w-1/3 text-center">
                        {groupData.position} @ {groupData.name}
                    </span>
                    <div className="bg-darkpurple h-full border-l border-solid border-darkpurple"></div>
                    <span className="w-24 ml-6 text-center">
                        {groupData.location}
                    </span>
                    <span className="w-24 text-center">{groupData.pay}</span>

                    <span className="w-48 flex justify-center">
                        <a href={groupData.url}>{groupData.url}</a>
                    </span>

                    <span className="w-32 flex justify-end">
                        <button className="flex justify-center w-6 rounded bg-darkpurple2 text-white">
                            <img
                                className="transform rotate-45"
                                src={require('../images/icon-plus.svg')}
                            />
                        </button>
                    </span>
                </div>
            </div>
        );
    };

    console.log('please', props.currentGroup);

    return (
        <>
            <div className="h-screen w-full bg-darkpurple overflow-scroll">
                <div className="flex justify-center">
                    <div className="flex w-11/12 mt-4 text-gray-400 border-b-2 leading-8">
                        <span className="w-1/3 text-center">position</span>
                        <span className="w-32 text-center">location</span>
                        <span className="w-20 text-center">salary</span>
                        <span className="w-48 text-center">url</span>
                    </div>
                </div>
                {/* {test.group.jobgroupsSet.map(renderJobs)} */}
                {props.currentGroup.jobs.map(renderJobs)}
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return { currentGroup: state.group.currentGroup };
};

export default connect(mapStateToProps, null)(JobList);
