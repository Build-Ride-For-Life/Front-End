import React from 'react';

import ReviewCard from './ReviewCard';
import {connect} from "react-redux";
import {deleteDriver, editDriver, getDrivers, loginDriver, loginUser} from "../../actions";

const ReviewList = props => {
    return (
        <div className="container">
            {props.reviews.length ? ( //greater than 0? [0 = falsy]
                <div className="limited-row">
                    {props.reviews.map(item => (
                        <ReviewCard key={item.id} review={item} driver={(props.drivers.find(driver => driver['id'] === item.driver_id))} history={props.history} />
                    ))}
                </div>
            ) : (
                <div>You Haven't Made Any Reviews</div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.driversReducer.isLoading,
        drivers: state.driversReducer.drivers,
        reviews: state.driversReducer.reviews,
        // token: state.driverReducer.token,
        error: state.driversReducer.error
    };
};

export default connect(
    mapStateToProps,
    {  loginDriver, loginUser, getDrivers, editDriver, deleteDriver }
)(ReviewList);