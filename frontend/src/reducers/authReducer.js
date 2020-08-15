import {
    SIGN_OUT,
    FETCH_USER,
    ADD_GROUP,
    ADD_JOB,
    ADD_USER,
} from '../actions/types';

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
        case ADD_GROUP: {
            return { ...state, user: action.payload };
        }
        case ADD_JOB: {
            let user = state.user;
            let index = user.group.findIndex(
                (group) => group._id === action.payload._id
            );
            user.group[index] = action.payload;
            return { ...state, user };
        }
        case ADD_USER: {
            let user = state.user;
            let index = user.group.findIndex(
                (group) => group._id === action.payload._id
            );
            user.group[index] = action.payload;
            return { ...state, user };
        }
        default:
            return state;
    }
};
