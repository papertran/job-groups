import { SIGN_OUT, FETCH_USER, ADD_GROUP } from '../actions/types';

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
        case ADD_GROUP:
            let user = state.user;
            user.group.push(action.payload);
            return { ...state, user };
        default:
            return state;
    }
};
