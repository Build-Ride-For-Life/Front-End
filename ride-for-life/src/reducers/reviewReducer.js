import {API_START, API_SUCCESS, API_FAILURE, EDIT_DRIVER, REMOVE_DRIVER } from "../actions";
// api/drivers/:id/reviews
const initialState = {
    isLoading: false,
    reviews: [
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

export const reviewReducer = (state = initialState, action) => {
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