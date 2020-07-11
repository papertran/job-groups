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
                <div className="flex justify-center">
                    <p className="bg-gray-400 mt-4 h-12 w-4/5 rounded">
                        {groupData.user.username}
                    </p>
                </div>
            </>
        )
    }

    render() {
        return (
            <>
                <div className="bg-darkpurple2 h-full mt-4 overflow-scroll">
                    {test.group.jobgroupsSet.map(this.renderUser)}
                </div>
            </>
        )
    }
}

export default UserList;