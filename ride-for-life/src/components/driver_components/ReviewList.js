/*
PROTECTED ROUTE

- View (GET) all of their reviews
    - /api/drivers/:id/reviews
    - Extra/Stretch?
        - View (GET) a users profile page (who gave them a review)
            - Endpoint: /api/users/:id
 */

import React from 'react';

import ReviewCard from './ReviewCard';

const ReviewList = props => {
    return (
        <div className="container">
            {props.state.reviews.length ? ( //greater than 0? [0 = falsy]
                <div className="limited-row">
                    {props.state.reviews.map(item => (
                        <ReviewCard key={item.id} review={item} dispatch={props.dispatch} />
                    ))}
                </div>
            ) : (
                <div>You Don't Have Any Reviews</div>
            )}
        </div>
    );
};

export default ReviewList;
