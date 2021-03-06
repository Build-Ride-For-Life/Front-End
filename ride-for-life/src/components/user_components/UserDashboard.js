/*
PROTECTED ROUTE

From here users can choose to either:
- Request a ride (Must this be built out for MVP?)
    - User would send out a request that notifies drivers and that a driver can accept
    - After a ride, a user can add (POST) a review
        - Endpoint: /api/reviews
- Search (GET) drivers (maybe add sorting options [price, distance, or # of reviews])
    - Endpoint: api/drivers
    - From which a user can click onto a driver and see (GET) their profile page
        - Endpoint: api/drivers/:id
        - From which a user can see (GET) their reviews
            - Endpoint: api/drivers/:id/reviews

- Extra/Stretch?
    - Create a User Profile page
        - Opens up a reason to use additional endpoints (e.g. user can edit reviews they gave)
 */

import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteDriver, editDriver, getDrivers, loginDriver, loginUser} from "../../actions";
import styled from "styled-components"

const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background:rgb(228, 217, 197);
padding: 18.7%;
`;

const UserDashboard = (props) => {

    const logout = () => {
        localStorage.removeItem("token");
        props.history.push("/userlogin");
    };

    const drivers = () => {
        console.log(props.drivers);
        console.log(props.reviews);
    };

    const getDrivers = () => {
        props.getDrivers(props.history);
    };

    return (
        <DashboardContainer>
            <button onClick={getDrivers}>Search for Drivers</button> {/*Clickable --> Shows DriversList.js*/}
            <Link to="/userreviews"><h5>Your Review(s)</h5></Link> {/*h5 -> Clickable*/}
            <button onClick={logout}>Logout</button>
            <button onClick={drivers}>Drivers?</button>
        </DashboardContainer>
    )
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.driversReducer.isLoading,
        drivers: state.driversReducer.drivers,
        reviews: state.driversReducer.reviews,
        error: state.driversReducer.error
    };
};

export default connect(
    mapStateToProps,
    {  loginDriver,
        loginUser, getDrivers, editDriver, deleteDriver }
)(UserDashboard);