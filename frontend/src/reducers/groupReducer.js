import { SET_CURRENT_GROUP } from '../actions/types';

const INITIAL_STATE = {
    currentGroup: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_GROUP:
            return { currentGroup: action.payload };
        default:
            return state;
    }
};
