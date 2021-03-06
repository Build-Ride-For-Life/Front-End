/* NOT USED */

import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, EDIT_DRIVER, REMOVE_DRIVER } from "../actions";

const initialState = {
    isLoading: false,
    driver: {
        id: 4,
        drivers_name: "Example Driver",
        drivers_plot: "126",
        drivers_phone_number: "455-743-4567",
        drivers_email: "exampledriver@gmail.com",
        password: "$2a$11$mxRYg747sGwIGz1/TR4ocuTA7Y1okuzqp/g3sWKlDXZrpqAr/oajG",
        drivers_price: 50,
        about_me: "test3",
        role: "driver"
    }, // api/drivers
    drivers: [ // api/drivers/:id
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
    reviews: [ // api/drivers/:id/reviews
        {
            "id": 2,
            "reviewer": "seeduser1",
            "review_date": "2019-08-11",
            "rating": 3,
            "review_text": "Took a long time to get to my house but otherwise good",
            "user_id": 1,
            "driver_id": 3
        },
        {
            "id": 3,
            "reviewer": "seeduser1",
            "review_date": "2019-08-11",
            "rating": 3,
            "review_text": "Took a long time to get to my house but otherwise good",
            "user_id": 1,
            "driver_id": 3
        }
    ],
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