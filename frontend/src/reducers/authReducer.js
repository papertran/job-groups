import { SIGN_IN, SIGN_OUT, REGISTER_USER } from "../actions/types";

const INITIAL_STATE = {
	isSignedIn: null,
	user: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return { ...state, isSignedIn: true, user: action.payload };
		case SIGN_IN:
			return { ...state, isSignedIn: true, user: action.payload };
		case SIGN_OUT:
			return { ...state, isSignedIn: false, user: null };
	}
};
