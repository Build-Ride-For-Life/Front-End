/* Same as driver_components/DriverDetails.js without the edit and logout buttons. */

/*
PROTECTED ROUTE

Post-Login Page

From here drivers can choose to:
- Edit (PUT) their profile details
- DELETE their profile
- View (GET) all of their reviews
 */

import React, {useState} from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {
    deleteDriver,
    editDriver,
    getDrivers,
    loginDriver,
    loginUser
} from "../../actions";

const DriverDetails = (props) => {

    const {drivers_name, drivers_plot, drivers_phone_number,
        drivers_email, drivers_price, about_me} = props.drivers.filter(driver => driver['id'].toString() === props.match.params.id)[0];

    /*const newReview = () => {
        props.history.push("/userlogin");
    };*/

    return (
        <div>
            <h1>Name: {drivers_name}</h1>
            <h5>Location: {drivers_plot}</h5> <h5>Address: {drivers_price}</h5>
            <h5>Phone: {drivers_phone_number}</h5> <h5>Email: {drivers_email}</h5>
            <h5>About Me: {about_me}</h5>
            <Link to={`/newreview/${props.match.params.id}`}><h4>Leave {drivers_name} a Review</h4></Link>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.driversReducer.isLoading,
        user: state.driversReducer.user,
        drivers: state.driversReducer.drivers,
        reviews: state.driversReducer.reviews,
        error: state.driversReducer.error
    };
};

export default connect(
    mapStateToProps,
    {  loginDriver,
        loginUser, getDrivers, editDriver, deleteDriver }
)(DriverDetails);