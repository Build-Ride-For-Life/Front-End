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
import {connect} from "react-redux";
import {deleteDriver, editDriver, getDrivers, loginDriver, loginUser} from "../../actions";
import styled from 'styled-components'

const ReviewContainer = styled.div`
background:rgb(228, 217, 197);
padding: 21.8%;
`

const ReviewList = props => {
    return (
        <ReviewContainer className="container">
            {props.reviews.length ? ( //greater than 0? [0 = falsy]
                <div className="limited-row">
                    {props.reviews.map(item => (
                        <ReviewCard key={item.id} review={item} />
                    ))}
                </div>
            ) : (
                <div>You Don't Have Any Reviews</div>
            )}
        </ReviewContainer>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.driverReducer.isLoading,
        driver: state.driverReducer.driver,
        reviews: state.driverReducer.reviews,
        // token: state.driverReducer.token,
        error: state.driverReducer.error
    };
};

export default connect(
    mapStateToProps,
    {  loginDriver,
        loginUser, getDrivers, editDriver, deleteDriver }
)(ReviewList);
