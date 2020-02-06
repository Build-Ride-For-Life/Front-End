import {API_START, API_SUCCESS, API_FAILURE } from "../actions";
import { REHYDRATE } from 'redux-persist';
// api/drivers/:id
const initialState = {
    isLoading: false,
    drivers: [
        {
            id: 4,
            drivers_name: "Example Driver",
            drivers_plot: "126",
            drivers_phone_number: "455-743-4567",
            drivers_email: "exampledriver@gmail.com",
            password: "$2a$11$mxRYg747sGwIGz1/TR4ocuTA7Y1okuzqp/g3sWKlDXZrpqAr/oajG",
            drivers_price: 50,
            about_me: "test3",
            role: "driver"
        },
        {
            id: 5,
            drivers_name: "Example Driver",
            drivers_plot: "126",
            drivers_phone_number: "455-743-4567",
            drivers_email: "exampledriver@gmail.com",
            password: "$2a$11$mxRYg747sGwIGz1/TR4ocuTA7Y1okuzqp/g3sWKlDXZrpqAr/oajG",
            drivers_price: 50,
            about_me: "test3",
            role: "driver"
        },
        {
            id: 6,
            drivers_name: "Example Driver",
            drivers_plot: "126",
            drivers_phone_number: "455-743-4567",
            drivers_email: "exampledriver@gmail.com",
            password: "$2a$11$mxRYg747sGwIGz1/TR4ocuTA7Y1okuzqp/g3sWKlDXZrpqAr/oajG",
            drivers_price: 50,
            about_me: "test3",
            role: "driver"
        },
    ],
    token: null,
    error: ''
};

export const driversReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            if (action.payload) {
                return {
                    ...state,
                    drivers: action.payload.driversReducer.driver,
                    token: action.payload.driversReducer.token
                };
            } else {
                return state;
            }
        case API_START:
            return {
                ...state,
                isLoading: true
            };
        case API_SUCCESS:
            return {
                ...state,
                drivers: action.payload
            };
        case API_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};