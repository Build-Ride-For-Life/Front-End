import React from 'react';

const ReviewCard = props => {

    return (
        <div className="card">
            <h5>Reviewer: {props.review.reviewer}</h5>
            <h5>Date: {props.review.review_date}</h5>
            <h5>Rating: {props.review.rating}</h5>
            <h3>Review: {props.review.review_text}</h3>
        </div>
    );
};

export default ReviewCard;

