import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from "../actions";

const initialState = {
    isLoading: false,
    placeholderArray: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};