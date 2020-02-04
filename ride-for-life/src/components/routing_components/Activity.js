import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Loader from 'react-loader-spinner';

import { createDriver, createUser, getDrivers,
    getDriver, getReviews, editDriver,
    deleteDriver } from '../../actions';

import PrivateRoute from './PrivateRoute'
import Home from "../general_components/Home";
import Temp from "../Temp";
import DriverProfile from "../driver_components/DriverProfile";
import UserDashboard from "../user_components/UserDashboard";
import DriverLogin from "../driver_components/DriverLogin";
import UserLogin from "../user_components/UserLogin";
import DriverOnboarding from "../driver_components/DriverOnboarding";
import UserOnboarding from "../user_components/UserOnboarding";

const Activity = (props) => {
    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute path='/driver' component={DriverProfile} />
                    <PrivateRoute path='/user' component={UserDashboard} />
                    <Route path="/userlogin" component={UserLogin} />
                    <Route path="/driverlogin" component={DriverLogin} />
                    <Route path="/usersignup" component={UserOnboarding} />
                    <Route path="/driversignup" component={DriverOnboarding} />
                    <Route component={Temp} /> {/*If no other path has been met, will default route to Home*/}
                </Switch>
            </div>
        </Router>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        placeholderArray: state.placeholderArray,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { createDriver, createUser, getDrivers,
        getDriver, getReviews, editDriver,
        deleteDriver }
)(Activity);
