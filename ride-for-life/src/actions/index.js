import axios from 'axios';
import {axiosWithAuth} from "../utils/axiosWithAuth";

export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const DRIVER_SUCCESS = 'DRIVER_SUCCESS';
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const EDIT_DRIVER = 'EDIT_DRIVER';
export const REMOVE_DRIVER = 'REMOVE_DRIVER';

export const loginDriver = (credentials, page) => dispatch => {
    dispatch({type: API_START});
    console.log("credentials still good:", credentials);
    axiosWithAuth().post("auth/driver_login", credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data["token"]);
            dispatch({type: TOKEN_SUCCESS, payload: res.data["token"]})
            return axiosWithAuth().get(`drivers/${res.data["id"]}`) //because only id & token are returned
        })
        .then((res) => {
            console.log(res);
            dispatch({type: DRIVER_SUCCESS, payload: res.data}); //use id for redux state
            return axiosWithAuth().get(`drivers/${res.data["id"]}/reviews`)
        })
        .then((res) => {
            console.log(res);
            dispatch({type: REVIEW_SUCCESS, payload: res.data}); //use id for redux state
            page.push("/driver"); //had to be moved inside promise because it hits before the response returns otherwise
        })
        .catch(err => {
            dispatch({ type: API_FAILURE, payload: err.response });
        });
};

export const loginUser = (credentials, page) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().post("auth/user_login", credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data["token"]);
            page.push("/user"); //had to be moved inside promise because it hits before the response returns otherwise
        })
        .catch(err => {
            dispatch({ type: API_FAILURE, payload: err.response });
        });
};

export const getDrivers = () => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().get('drivers')
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
        })
        .catch((err) => {
            dispatch({ type: API_FAILURE, payload: err.response });
        })

};

export const getDriver = (driverID) => dispatch => {

};

export const getReviews = (driverID) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().get(`drivers/${driverID}/reviews`)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', res.data["token"]);
        })
        .catch((err) => {
            dispatch({ type: API_FAILURE, payload: err.response });
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
            // dispatch({ type: API_FAILURE, payload: err.response });
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
            // dispatch({ type: API_FAILURE, payload: err.response });
        })
};