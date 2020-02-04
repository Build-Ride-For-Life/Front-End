import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const EDIT_DRIVER = 'EDIT_DRIVER';
export const REMOVE_DRIVER = 'REMOVE_DRIVER';

export const createDriver = () => dispatch => {
    dispatch({type: FETCH_START});
};

export const createUser = () => dispatch => {
    dispatch({type: FETCH_START});
};

export const getDrivers = () => dispatch => {
    dispatch({type: FETCH_START});

};

export const getDriver = (driverID) => dispatch => {
    dispatch({type: FETCH_START});
};

export const getReviews = (driverID) => dispatch => {
    dispatch({type: FETCH_START});
};

export const editDriver = (driverID) => {
    return { type: EDIT_DRIVER, payload: driverID };
};

export const deleteDriver = (driverID) => {
    return { type: REMOVE_DRIVER, payload: driverID };
};