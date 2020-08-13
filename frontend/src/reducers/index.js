import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import groupReducer from './groupReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    group: groupReducer,
});
