import {API_START, API_SUCCESS, DRIVER_SUCCESS,
    REVIEW_SUCCESS, API_FAILURE, EDIT_DRIVER, REMOVE_DRIVER } from "../actions";
import { REHYDRATE } from 'redux-persist';

// api/drivers

//make a version of initialState that takes data from localStorage

const initialState = {
    isLoading: false,
    driver: {
        id: 4,
        drivers_name: "Example Driver",
        drivers_plot: "126 Example Road",
        drivers_phone_number: "455-743-4567",
        drivers_email: "exampledriver@gmail.com",
        password: "$2a$11$mxRYg747sGwIGz1/TR4ocuTA7Y1okuzqp/g3sWKlDXZrpqAr/oajG",
        drivers_price: 50,
        about_me: "I've been working at the XYZ hospital for 7 years and I've loved every minute of it. I enjoy listening to jazz music and watching cricket in my spare time.",
        role: "driver"
    },
    reviews: [
        {
            id: 2,
            reviewer: "seeduser1",
            review_date: "2019-08-11",
            rating: 3,
            review_text: "Took a long time to get to my house but otherwise good",
            user_id: 1,
            driver_id: 3
        },
        {
            id: 3,
            reviewer: "seeduser1",
            review_date: "2019-08-11",
            rating: 4,
            review_text: "Very friendly and I love their speedy service!",
            user_id: 1,
            driver_id: 3
        },
        {
            id: 4,
            reviewer: "seeduser1",
            review_date: "2019-08-11",
            rating: 4,
            review_text: "Good",
            user_id: 1,
            driver_id: 3
        },
        {
            id: 5,
            reviewer: "seeduser1",
            review_date: "2019-08-11",
            rating: 4,
            review_text: "This review shouldn't get accessed.",
            user_id: 1,
            driver_id: 3
        },
    ],
    error: ''
};

export const driverReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            if (action.payload) {
                return {
                    ...state,
                    driver: action.payload.driverReducer.driver,
                    reviews: action.payload.driverReducer.reviews
                };
            } else {
                return state;
            }
        case API_START:
            return {
                ...state,
                isLoading: true
            };
        case DRIVER_SUCCESS:
            return {
                ...state,
                driver: action.payload
            };
        case REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reviews: action.payload
            };
        case API_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case EDIT_DRIVER:
            return state;
        case REMOVE_DRIVER:
            return state;
        default:
            return state;
    }
};