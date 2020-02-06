/* Stretch Feature */

import React from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import { deleteReview, editReview } from "../../actions";
import {Link} from "react-router-dom";

function EditReview(props) {

    const {id, reviewer, review_date, rating,
        review_text, user_id, driver_id} = props.reviews.filter(review => review['id'].toString() === props.match.params.id)[0];

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        props.editReview(id, data)
    };
    const deleteReview = () => {
        props.deleteReview(id, props.history);
    };

    const validateData = async (value) => {};

    return (
        <div>
            <form className="ReviewEdit" onSubmit={handleSubmit(onSubmit)}>
                <h1>Edit Review</h1>

                <label>Rating (1-5):</label>
                <input name="rating" defaultValue={rating} type="number" ref={register({ required: false })} />

                <label>Review:</label>
                <input name="review_text" defaultValue={review_text} type="text" ref={register({ required: false })} />

                <button type="submit">Edit Review</button>
            </form>
            <button onClick={deleteReview}>Delete Review</button>
            <Link to="/user"><button>Back to Profile</button></Link> {/*Clickable*/}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.driversReducer.isLoading,
        drivers: state.driversReducer.drivers,
        reviews: state.driversReducer.reviews,
        // token: state.driversReducer.token,
        error: state.driversReducer.error
    };
};

export default connect(
    mapStateToProps,
    { editReview, deleteReview }
)(EditReview);