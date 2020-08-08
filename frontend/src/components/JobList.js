import React from 'react';

const test = {
    group: {
        groupName: 'Tier 1',
        jobgroupsSet: [
            {
                user: {
                    username: 'Beau',
                },
                job: {
                    name: 'Google',
                    url: 'http://www.google.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-01',
                    salary: 60000,
                    location: 'California',
                    position: 'Internship',
                },
            },
            {
                user: {
                    username: 'Beau',
                },
                job: {
                    name: 'Facebook',
                    url: 'http://www.facebook.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-02',
                    salary: 120000,
                    location: 'New York',
                    position: 'Jr Developer',
                },
            },
            {
                user: {
                    username: 'Zucker',
                },
                job: {
                    name: 'Google',
                    url: 'http://www.google.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-01',
                    salary: 60000,
                    location: 'California',
                    position: 'Internship',
                },
            },
            {
                user: {
                    username: 'Zucker',
                },
                job: {
                    name: 'Facebook',
                    url: 'http://www.facebook.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-02',
                    salary: 120000,
                    location: 'New York',
                    position: 'Jr Developer',
                },
            },
            {
                user: {
                    username: 'Sherb',
                },
                job: {
                    name: 'Google',
                    url: 'http://www.google.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-01',
                    salary: 60000,
                    location: 'California',
                    position: 'Internship',
                },
            },
            {
                user: {
                    username: 'Sherb',
                },
                job: {
                    name: 'Facebook',
                    url: 'http://www.facebook.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-02',
                    salary: 120000,
                    location: 'New York',
                    position: 'Jr Developer',
                },
            },
            {
                user: {
                    username: 'Raymond',
                },
                job: {
                    name: 'Google',
                    url: 'http://www.google.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-01',
                    salary: 60000,
                    location: 'California',
                    position: 'Internship',
                },
            },
            {
                user: {
                    username: 'Raymond',
                },
                job: {
                    name: 'Facebook',
                    url: 'http://www.facebook.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-02',
                    salary: 120000,
                    location: 'New York',
                    position: 'Jr Developer',
                },
            },
            {
                user: {
                    username: 'Marshall',
                },
                job: {
                    name: 'Google',
                    url: 'http://www.google.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-01',
                    salary: 60000,
                    location: 'California',
                    position: 'Internship',
                },
            },
            {
                user: {
                    username: 'Marshall',
                },
                job: {
                    name: 'Facebook',
                    url: 'http://www.facebook.com',
                    postDate: '2020-05-23',
                    endDate: '2021-01-02',
                    salary: 120000,
                    location: 'New York',
                    position: 'Jr Developer',
                },
            },
            {
                user: {
                    username: 'Marshall',
                },
                job: {
                    name: 'Peepee',
                    url: 'http://www.testpage.com',
                    postDate: '2020-05-30',
                    endDate: '2021-01-02',
                    salary: 69,
                    location: 'Tallahassee, FL',
                    position: 'Frontdesk',
                },
            },
        ],
    },
};

const JobList = () => {
    console.log(test);

    const renderJobs = (groupData) => {
        console.log('groupdaa', groupData);
        return (
            <>
                <div className="flex justify-center">
                    <div className="flex items-center w-11/12 mt-4 h-12 rounded bg-secpurple">
                        <span className="w-1/3 text-center">
                            {groupData.job.position} @ {groupData.job.name}
                        </span>
                        <div className="bg-darkpurple h-full border-l border-solid border-darkpurple"></div>
                        <span className="w-24 ml-6 text-center">
                            {groupData.job.location}
                        </span>
                        <span className="w-24 text-center">
                            {groupData.job.salary}
                        </span>

                        <span className="w-48 flex justify-center">
                            <a href={groupData.job.url}>{groupData.job.url}</a>
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
            </>
        );
    };

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
                {test.group.jobgroupsSet.map(renderJobs)}
            </div>
        </>
    );
};

export default JobList;
