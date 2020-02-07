import React from 'react';
import {connect} from "react-redux";
import {deleteDriver, editDriver, getDrivers, loginDriver, loginUser} from "../../actions";

const ReviewCard = props => {

    // const {drivers_name} = props.drivers.filter(driver => driver['id'] === props.review.id)[0]; //should have been props.review.driver_id not props.review.id
    // const driver = props.stableDrivers.find(driver => driver['id'] === props.review.id);
    const editReview = () => {
        props.history.push(`/editreview/${props.review.id}`);
    };

    return (
        <div className="card">
            <h5>Driver: {props.driver['drivers_name']}</h5>
            <h5>Date: {props.review.review_date}</h5>
            <h5>Rating: {props.review.rating}</h5>
            <h3>Review: {props.review.review_text}</h3>
            <button onClick={editReview}>Edit Review</button>
        </div>
    );
};

export default ReviewCard;