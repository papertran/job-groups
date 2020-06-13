import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const username = "Raymond";
const USER_INFO = gql`
	{
		users(username: "Raymond") {
			username
			usergroupsSet {
				group {
					groupName
					jobgroupsSet {
						user {
							username
						}
						job {
							name
							url
							postDate
							endDate
							salary
							location
							position
						}
					}
				}
			}
		}
	}
`;

const Test = () => {
	const { loading, error, data } = useQuery(USER_INFO);

	// if (loading) return <div>Loading</div>;
	// if (error) return <div>Error</div>;
	if (data) {
		console.log(data);
	}
	return <div>Test</div>;
};

export default Test;
