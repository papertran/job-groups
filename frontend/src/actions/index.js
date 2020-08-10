import fetch from 'node-fetch';
import { FETCH_USER } from './types';

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
