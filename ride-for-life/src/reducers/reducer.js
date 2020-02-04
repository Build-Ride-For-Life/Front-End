import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, EDIT_DRIVER, REMOVE_DRIVER } from "../actions";

const initialState = {
    isLoading: false,
    placeholderArray: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return state;
        case FETCH_SUCCESS:
            return state;
        case FETCH_FAILURE:
            return state;
        case EDIT_DRIVER:
            return state;
        case REMOVE_DRIVER:
            return state;
        default:
            return state;
    }
};