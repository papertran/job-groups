import React from 'react';

const test = { "group": {
    "groupName": "Tier 1",
    "jobgroupsSet": [
        {
            "user": {
                "username": "Beau"
            },
            "job": {
                "name": "Google",
                "url": "http://www.google.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-01",
                "salary": 60000,
                "location": "California",
                "position": "Internship"
            }
        },
        {
            "user": {
                "username": "Beau"
            },
            "job": {
                "name": "Facebook",
                "url": "http://www.facebook.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-02",
                "salary": 120000,
                "location": "New York",
                "position": "Jr Developer"
            }
        },
        {
            "user": {
                "username": "Zucker"
            },
            "job": {
                "name": "Google",
                "url": "http://www.google.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-01",
                "salary": 60000,
                "location": "California",
                "position": "Internship"
            }
        },
        {
            "user": {
                "username": "Zucker"
            },
            "job": {
                "name": "Facebook",
                "url": "http://www.facebook.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-02",
                "salary": 120000,
                "location": "New York",
                "position": "Jr Developer"
            }
        },
        {
            "user": {
                "username": "Sherb"
            },
            "job": {
                "name": "Google",
                "url": "http://www.google.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-01",
                "salary": 60000,
                "location": "California",
                "position": "Internship"
            }
        },
        {
            "user": {
                "username": "Sherb"
            },
            "job": {
                "name": "Facebook",
                "url": "http://www.facebook.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-02",
                "salary": 120000,
                "location": "New York",
                "position": "Jr Developer"
            }
        },
        {
            "user": {
                "username": "Raymond"
            },
            "job": {
                "name": "Google",
                "url": "http://www.google.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-01",
                "salary": 60000,
                "location": "California",
                "position": "Internship"
            }
        },
        {
            "user": {
                "username": "Raymond"
            },
            "job": {
                "name": "Facebook",
                "url": "http://www.facebook.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-02",
                "salary": 120000,
                "location": "New York",
                "position": "Jr Developer"
            }
        },
        {
            "user": {
                "username": "Marshall"
            },
            "job": {
                "name": "Google",
                "url": "http://www.google.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-01",
                "salary": 60000,
                "location": "California",
                "position": "Internship"
            }
        },
        {
            "user": {
                "username": "Marshall"
            },
            "job": {
                "name": "Facebook",
                "url": "http://www.facebook.com",
                "postDate": "2020-05-23",
                "endDate": "2021-01-02",
                "salary": 120000,
                "location": "New York",
                "position": "Jr Developer"
            }
        },
        {
            "user": {
                "username": "Marshall"
            },
            "job": {
                "name": "Peepee",
                "url": "http://www.testpage.com",
                "postDate": "2020-05-30",
                "endDate": "2021-01-02",
                "salary": 69,
                "location": "Tallahassee, FL",
                "position": "Frontdesk"
            }
        }
    ]
}}

console.log('hey', test);
console.log('heyagain', test.group.jobgroupsSet);

class UserList extends React.Component {


    renderUser(groupData) {
        return (
            <>
                <div className="flex justify-center" key={groupData.user.username}>
                    <div className=" flex items-center bg-gray-400 mt-4 h-16 w-11/12 rounded">
                        <div className="rounded-full bg-mainpink ml-2 mr-2">
                        <img className="h-10 w-10 object-contain" src={require('../images/clumsy.png')}/>
                        </div>
                        <h2>{groupData.user.username}</h2>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <>
                <div className="bg-darkpurple2 h-full mt-4 overflow-scroll">
                    <button className="bg-mainpink rounded mt-6 ml-6">
                        <img src={require('../images/icon-plus.svg')}/>
                    </button>
                    {test.group.jobgroupsSet.map(this.renderUser)}
                </div>
            </>
        )
    }
}

export default UserList;