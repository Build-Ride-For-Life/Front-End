import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Loader from 'react-loader-spinner';

import { getDrivers,
    loginDriver, loginUser, getDriver,
    getReviews, editDriver, deleteDriver } from '../../actions';

import PrivateRoute from './PrivateRoute'
import Home from "../general_components/Home";
import DriverProfile from "../driver_components/DriverProfile";
import UserDashboard from "../user_components/UserDashboard";
import DriverLogin from "../driver_components/acct_entry_components/DriverLogin";
import UserLogin from "../user_components/acct_entry_components/UserLogin";
import DriverOnboarding from "../driver_components/acct_entry_components/DriverOnboarding";
import UserOnboarding from "../user_components/acct_entry_components/UserOnboarding";
import EditDriverProfile from "../driver_components/EditDriverProfile"
import DriversList from "../user_components/DriversList"
import ReviewList from "../driver_components/ReviewList"

const Activity = (props) => {
    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute path='/driver' component={DriverProfile} />
                    <PrivateRoute path='/user' component={UserDashboard} />
                    <PrivateRoute path="/driveredit" component={EditDriverProfile} />
                    <PrivateRoute path="/driverslist" component={DriversList} />
                    <PrivateRoute path="/reviews" component={ReviewList} />
                    <Route path="/userlogin" component={UserLogin} />
                    <Route path="/driverlogin" component={DriverLogin} />
                    <Route path="/usersignup" component={UserOnboarding} />
                    <Route path="/driversignup" component={DriverOnboarding} />
                    <Route component={Home} /> {/*If no other path has been met, will default route to Home*/}
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
    {  loginDriver,
        loginUser, getDrivers, getDriver,
        getReviews, editDriver, deleteDriver }
)(Activity);
