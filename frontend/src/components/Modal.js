import React, { useState } from "react";
import { connect } from "react-redux";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { registerUser } from "../actions";

const Modal = ({ handleClose, show, registerUser }) => {
	// const Modal = (props) => {

	const showHideClassName = show
		? "modal display-block"
		: "modal display-none";

	const [registration, setRegistration] = useState({
		email: "",
		username: "",
		password1: "",
		password2: "",
	});

	const USER_INFO = gql`mutation {
	      register(
	          email: "${registration.email}",
	          username: "${registration.username}",
	          password1: "${registration.password1}",
	          password2: "${registration.password2}"
	      ) {
	        success
	        errors
	        token
	        refreshToken
	      }
	    }`;

	const FIND_USER = gql`
		{
			users(username: "${registration.username}") {
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

	const [addUser] = useMutation(USER_INFO);
	const [finduser, { called, loading, data }] = useLazyQuery(FIND_USER);
	// console.log(registration);

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				{/* { children } */}
				<img
					className="pt-8 pl-64"
					src={require("../images/Logo.png")}
					alt="logo"
				/>

				<input
					className="modalinput"
					type="text"
					placeholder="Email"
					value={registration.email}
					onChange={(event) =>
						setRegistration({
							...registration,
							email: event.target.value,
						})
					}
				/>
				<br />
				<input
					className="modalinput"
					type="text"
					placeholder="Username"
					value={registration.username}
					onChange={(event) =>
						setRegistration({
							...registration,
							username: event.target.value,
						})
					}
				/>
				<br />

				<input
					className="bg-darkpurple rounded w-1/4 h-10 mt-12 ml-32 pl-4"
					type="text"
					placeholder="First Name"
				/>
				<input
					className="bg-darkpurple rounded w-36 h-10 ml-4 pl-5"
					type="text"
					placeholder="Last Name"
				/>

				<input
					className="modalinput"
					type="password"
					placeholder="Password"
					value={registration.password1}
					onChange={(event) =>
						setRegistration({
							...registration,
							password1: event.target.value,
						})
					}
				/>
				<br />
				<input
					className="modalinput"
					type="password"
					placeholder="Please enter password again"
					value={registration.password2}
					onChange={(event) =>
						setRegistration({
							...registration,
							password2: event.target.value,
						})
					}
				/>
				<br />

				<button
					className="bg-mainpink w-40 h-12 ml-56 mt-8 mb-8 rounded"
					onClick={(event) => {
						event.preventDefault();
						addUser().then(() => {
							finduser();
							console.log(data);
							console.log(called);
							console.log(data);
							registerUser(data);
						});
					}}
				>
					Register
				</button>

				<button>Close</button>
			</section>
		</div>
	);
};

export default connect(null, { registerUser })(Modal);
