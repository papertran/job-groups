import fetch from 'node-fetch';
import { FETCH_USER, ADD_GROUP } from './types';

export const fetchUser = () => async (dispatch) => {
    const json = await (
        await fetch('http://localhost:5000/auth/login/success', {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            },
        })
    ).json();
    const user = json.user;
    // console.log(user);
    dispatch({ type: FETCH_USER, payload: user });
};

export const addGroup = (formValues) => async (dispatch, getState) => {
    const email = getState().auth.user.email;
    const body = { email, ...formValues };
    const response = await fetch('http://localhost:5000/api/group', {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    const group = await response.json();
    dispatch({ type: ADD_GROUP, payload: group });
};
