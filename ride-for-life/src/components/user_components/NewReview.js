/* Stretch Feature */

import React from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import { createReview } from "../../actions";
import {Link} from "react-router-dom";
import styled from "styled-components"

const ReviewForm = styled.form`
display: flex;
flex-direction: column;
width: 31%;
flex-wrap: wrap;
margin: 9% auto 0%;
background: rgb(88, 110, 107);
`;

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
            <ReviewForm style={{border: `3px solid`}} className="ReviewCreate" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <h1 style={{margin: `0% 0% 5%`, border: `3px solid`}}>New Review</h1>
                </div>
                <div style={{margin:`0% 7% 0% 0%`}}>
                <label>Rating (1-5):</label>
                <input name="rating" type="number" style={{border:`3px solid`, padding:`0% 0% 0% 4%`}} ref={register({ required: true })} />
                </div>
                <div style={{margin:`0% 0% 3%`}}>
                <label>Review:</label>
                <input name="review_text" type="text" style={{border:`3px solid`}} ref={register({ required: true })} />
                </div>
                <div style={{margin: `0% 0% 6%`}}>
                <button type="submit" style={{width: `38%`, padding: `4% 0%`, background: `rgb(182, 194, 170`, border: `3px solid`}}>Submit Review</button>
                </div>
                <div>
                <Link to="/user"><button style={{width: `38%`, padding: `4% 0%`, background: `rgb(182, 194, 170`, border: `3px solid`}}>Back to Driver List</button></Link>
                </div>
            </ReviewForm>
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