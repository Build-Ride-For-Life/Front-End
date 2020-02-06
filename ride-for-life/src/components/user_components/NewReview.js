/* Stretch Feature */

import React from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import { createReview } from "../../actions";
import {Link} from "react-router-dom";

function NewReview(props) {

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        let date = new Date();
        let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
            .toISOString()
            .split("T")[0];
        let fullData = {
            ...data,
            reviewer: props.user.users_name,
            review_date: dateString,
            user_id: props.user.id,
            driver_id: props.match.params.id
        };
        props.createReview(fullData, props.history);
    };

    const validateData = async (value) => {};

    return (
        <div>
            <form className="ReviewCreate" onSubmit={handleSubmit(onSubmit)}>
                <h1>New Review</h1>

                <label>Rating (1-5):</label>
                <input name="rating" type="number" ref={register({ required: true })} />

                <label>Review:</label>
                <input name="review_text" type="text" ref={register({ required: true })} />

                <button type="submit">Submit Review</button>
            </form>
            <Link to="/user"><button>Back to Profile</button></Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.driversReducer.isLoading,
        user: state.driversReducer.user,
        drivers: state.driversReducer.drivers,
        reviews: state.driversReducer.reviews,
        // token: state.driversReducer.token,
        error: state.driversReducer.error
    };
};

export default connect(
    mapStateToProps,
    { createReview }
)(NewReview);