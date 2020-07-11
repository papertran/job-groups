import { REGISTER_USER } from "./types";

// TODO refractor the graphql stuff.
export const registerUser = (data) => async (dispatch) => {
	console.log("INSIDE THE REGISTER");
	console.log(data);
	dispatch({ type: REGISTER_USER, payload: data });
};
