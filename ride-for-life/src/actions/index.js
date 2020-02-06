import axios from 'axios';
import {axiosWithAuth} from "../utils/axiosWithAuth";

export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const DRIVER_SUCCESS = 'DRIVER_SUCCESS';
export const USER_SUCCESS = 'USER_SUCCESS';
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS';
export const NEW_REVIEW_SUCCESS = 'NEW_REVIEW_SUCCESS';
export const EDIT_REVIEW_SUCCESS = 'EDIT_REVIEW_SUCCESS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const API_FAILURE = 'API_FAILURE';

export const loginDriver = (credentials, page) => dispatch => {
    dispatch({type: API_START});
    console.log("credentials still good:", credentials);
    axiosWithAuth().post("auth/driver_login", credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data["token"]);
            // dispatch({type: TOKEN_SUCCESS, payload: res.data["token"]})
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
            page.push("/driver");
        })
        .catch(err => {
            dispatch({ type: API_FAILURE, payload: err.response });
        });
};

export const editDriver = (driverID, updatedData) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().put(`drivers/${driverID}`, updatedData)
        .then(res => {
            console.log(res);
            dispatch({ type: DRIVER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: API_FAILURE, payload: err.response });
        })
};

export const deleteDriver = (driverID, page) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().delete(`drivers/${driverID}`)
        .then(res => {
            console.log("deleted:", res);
            localStorage.clear();
            console.log(localStorage.getItem('token'));
            page.push("/driverlogin");
        })
        .catch(err => {
            dispatch({ type: API_FAILURE, payload: err.response });
        })
};

export const loginUser = (credentials, page) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().post("auth/user_login", credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data["token"]);
            return axiosWithAuth().get(`users/${res.data["id"]}`);
        })
        .then((res) => {
            console.log(res);
            dispatch({type: USER_SUCCESS, payload: res.data}); //use id for redux state
            return axiosWithAuth().get(`users/${res.data["id"]}/reviews`)
        })
        .then(res => {
            console.log(res);
            dispatch({type: REVIEW_SUCCESS, payload: res.data});
            page.push("/user");
        })
        .catch(err => {
            dispatch({ type: API_FAILURE, payload: err.response });
        });
};

export const getDrivers = (page) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().get('drivers')
        .then((res) => {
            dispatch({ type: API_SUCCESS, payload: res.data });
            page.push("/driverslist");
        })
        .catch((err) => {
            dispatch({ type: API_FAILURE, payload: err.response });
        })
};

export const createReview = (data, page) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().post('api/reviews', data)
        .then((res) => {
            dispatch({type: NEW_REVIEW_SUCCESS, payload: res.data });
            page.push("/driverslist");
        })
};

export const editReview = (reviewID, updatedData) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().put(`reviews/${reviewID}`, updatedData)
        .then(res => {
            console.log(res);
            dispatch({ type: EDIT_REVIEW_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: API_FAILURE, payload: err.response });
        })
};

export const deleteReview = (reviewID, page) => dispatch => {
    dispatch({type: API_START});
    axiosWithAuth().delete(`reviews/${reviewID}`)
        .then(res => {
            dispatch({ type: REMOVE_REVIEW, payload: reviewID });
            page.push("/userreviews");
        })
        .catch(err => {
            dispatch({ type: API_FAILURE, payload: err.response });
        })
};