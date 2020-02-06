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

const DriverProfile = (props) => {

    const {drivers_name, drivers_plot, drivers_phone_number,
        drivers_email, drivers_price, about_me} = props.driver;

    const logout = () => {
        localStorage.removeItem("token");
        props.history.push("/driverlogin");
    };

    const [] = useState();

    return (
        <div>
            <h1>{drivers_name}</h1>
            <h6>{drivers_plot}</h6> <h6>{drivers_price}</h6>
            <h2>About {drivers_name}</h2>
            <p>{about_me}</p>
            <h4>Reviews</h4> <Link to="driverreviews"><h5>See all {props.reviews.length} Review(s)</h5></Link> {/*h5 -> Clickable*/}
            {props.reviews.length > 0 && <p>{props.reviews[0].review_text}</p>} {/*Map the first three*/}
            {props.reviews.length > 1 && <p>{props.reviews[1].review_text}</p>}
            {props.reviews.length > 2 && <p>{props.reviews[2].review_text}</p>}
            <Link to="/driveredit"><h6>Edit Profile</h6></Link> {/*Clickable*/}
            <button onClick={logout}>Logout</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.driverReducer.isLoading,
        driver: state.driverReducer.driver,
        reviews: state.driverReducer.reviews,
        token: state.driverReducer.token,
        error: state.driverReducer.error
    };
};

export default connect(
    mapStateToProps,
    {  loginDriver,
        loginUser, getDrivers, editDriver, deleteDriver }
)(DriverProfile);