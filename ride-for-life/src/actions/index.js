import axios from 'axios';
import {axiosWithAuth} from "../utils/axiosWithAuth";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const EDIT_DRIVER = 'EDIT_DRIVER';
export const REMOVE_DRIVER = 'REMOVE_DRIVER';

export const createDriver = (credentials) => dispatch => {
    dispatch({type: FETCH_START});
    axiosWithAuth().post('auth/register_driver', credentials)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', Date.now().toString());
            dispatch({type: FETCH_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            console.log("fail:");
            console.log(err)
        });
};

export const createUser = (credentials) => dispatch => {
    dispatch({type: FETCH_START});
    axiosWithAuth().post('auth/register_user', credentials)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', Date.now().toString());
            dispatch({type: FETCH_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            console.log("fail:");
            console.log(err)
        });
};

export const loginDriver = (credentials) => dispatch => {
    dispatch({type: FETCH_START});
    axiosWithAuth().post('auth/driver_login', credentials)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
            props.history.push('/protected');
        })
        .catch((err) => {
            console.log("fail:");
            console.log(err)
        });
};

export const loginUser = (credentials) => dispatch => {
    dispatch({type: FETCH_START});
    axiosWithAuth().post('auth/user_login', credentials)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
            props.history.push('/protected');
        })
        .catch((err) => {
            console.log("fail:");
            console.log(err)
        });
};

export const getDrivers = () => dispatch => {
    dispatch({type: FETCH_START});
    axiosWithAuth().get('drivers')
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
        })
        .catch((err) => {

        })

};

export const getDriver = (driverID) => dispatch => {
    dispatch({type: FETCH_START});
    axiosWithAuth().get(`drivers/${driverID}`)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
        })
        .catch((err) => {

        })
};

export const getReviews = (driverID) => dispatch => {
    dispatch({type: FETCH_START});
    axiosWithAuth().get(`drivers/${driverID}/reviews`)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
        })
        .catch((err) => {

        })
};

export const editDriver = (driverID) => {
    return { type: EDIT_DRIVER, payload: driverID };
    axiosWithAuth().put(`drivers/${driverID}`)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
        })
        .catch((err) => {

        })
};

export const deleteDriver = (driverID) => {
    return { type: REMOVE_DRIVER, payload: driverID };
    axiosWithAuth().delete(`drivers/${driverID}`)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
        })
        .catch((err) => {

        })
};