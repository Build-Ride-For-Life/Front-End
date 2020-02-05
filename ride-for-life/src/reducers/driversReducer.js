import {API_START, API_SUCCESS, API_FAILURE, EDIT_DRIVER, REMOVE_DRIVER } from "../actions";
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
        }
    ],
    error: ''
};

export const driversReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_START:
            return state;
        case API_SUCCESS:
            return state;
        case API_FAILURE:
            return state;
        case EDIT_DRIVER:
            return state;
        case REMOVE_DRIVER:
            return state;
        default:
            return state;
    }
};