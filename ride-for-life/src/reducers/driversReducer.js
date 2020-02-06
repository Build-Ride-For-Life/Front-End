import {API_START, API_SUCCESS, API_FAILURE, USER_SUCCESS, REVIEW_SUCCESS, NEW_REVIEW_SUCCESS, EDIT_REVIEW_SUCCESS, REMOVE_REVIEW} from "../actions";
import { REHYDRATE } from 'redux-persist';
// api/drivers/:id
const initialState = {
    isLoading: false,
    user: {
        id: 4,
        users_name: "Example User",
        users_plot: "165",
        users_phone_number: "164-1535-1256",
        users_email: "exampleuser@gmail.com",
        password: "$2a$11$CtbBrM.jNqDHhUN3g1iZnOi8dSXndORhqk3203TK6AUafIhKSFP.2",
        due_date: "2019-12-15",
        role: "user"
    },
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
    // token: null,
    error: ''
};

export const driversReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            if (action.payload) {
                return {
                    ...state,
                    drivers: action.payload.driversReducer.drivers,
                    reviews: action.payload.driversReducer.reviews,
                    // token: action.payload.driversReducer.token
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
        case USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reviews: action.payload
            };
        case NEW_REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reviews: [...state.reviews, action.payload]
            };
        case EDIT_REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reviews: state.reviews.map(review => {
                    if (review.id === action.payload.id) {
                        return action.payload;
                    }
                    return review;
                })
            };
        case REMOVE_REVIEW:
            return {
                ...state,
                isLoading: false,
                reviews: state.reviews.filter(review => review.id !== action.payload)
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