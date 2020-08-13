import fetch from 'node-fetch';
import {
    FETCH_USER,
    ADD_GROUP,
    ADD_JOB,
    ADD_USER,
    SET_CURRENT_GROUP,
} from './types';

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

// This assumes everything is correct, does not check for errors.
export const addJob = (formValues) => async (dispatch) => {
    const { groupName, url, jobName, position, location, pay } = formValues;
    const body = {
        groupName: groupName,
        job: {
            name: jobName,
            position,
            url,
            location,
            pay,
        },
    };
    const response = await fetch('http://localhost:5000/api/group/addJobs', {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    const group = await response.json();
    console.log(group);
    dispatch({ type: ADD_JOB, payload: group });
};

// This assumes everything is correct, does not check for errors.
export const addUser = (formValues) => async (dispatch) => {
    const { groupName, email } = formValues;
    const body = {
        groupName: groupName,
        email,
    };
    const response = await fetch('http://localhost:5000/api/group/addUser', {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    const group = await response.json();
    console.log(group);
    dispatch({ type: ADD_USER, payload: group });
};

export const setCurrentGroup = (group) => {
    return {
        type: SET_CURRENT_GROUP,
        payload: group,
    };
};
