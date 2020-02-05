import axios from 'axios';
import {axiosWithAuth} from "../utils/axiosWithAuth";

export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const DRIVER_SUCCESS = 'DRIVER_SUCCESS';
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const EDIT_DRIVER = 'EDIT_DRIVER';
export const REMOVE_DRIVER = 'REMOVE_DRIVER';

export const createDriver = (credentials) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().post('auth/register_driver', credentials)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', Date.now().toString());
            dispatch({type: API_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            console.log("fail:");
            console.log(err)
        });
};

export const createUser = (credentials) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().post('auth/register_user', credentials)
        .then((res) => {
            console.log("success:");
            console.log(res);
            localStorage.setItem('token', Date.now().toString());
            dispatch({type: API_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            console.log("fail:");
            console.log(err)
        });
};

export const loginDriver = (credentials, page) => dispatch => {
    dispatch({type: API_START});
    console.log("credentials still good:", credentials);
    axiosWithAuth().post("auth/driver_login", credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data["token"]);
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
            console.log(err);
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
            console.log(err);
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
            console.log("fail:");
            console.log(err)
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
            console.log("fail:");
            console.log(err)
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
            console.log("fail:");
            console.log(err)
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
            console.log("fail:");
            console.log(err)
        })
};