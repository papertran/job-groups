import { SIGN_OUT, FETCH_USER } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    user: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER:
            if (action.payload)
                return { ...state, isSignedIn: true, user: action.payload };
            return { ...state, isSignedIn: false, user: false };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, user: null };
        default:
            return state;
    }
};
