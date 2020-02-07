import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import { getDrivers,
    loginDriver, loginUser, editDriver, deleteDriver } from '../../actions';

//General Components
import PrivateRoute from './PrivateRoute'
import Home from "../general_components/Home";
//Driver Components
import DriverOnboarding from "../driver_components/acct_entry_components/DriverOnboarding";
import DriverLogin from "../driver_components/acct_entry_components/DriverLogin";
import DriverProfile from "../driver_components/DriverProfile";
import EditDriverProfile from "../driver_components/EditDriverProfile"
import DReviewList from "../driver_components/ReviewList"
//User Components
import UserOnboarding from "../user_components/acct_entry_components/UserOnboarding";
import UserLogin from "../user_components/acct_entry_components/UserLogin";
import UserDashboard from "../user_components/UserDashboard";
import DriversList from "../user_components/DriversList"
import DriverDetails from "../user_components/DriverDetails"
import UReviewList from "../user_components/ReviewList"
import NewReview from "../user_components/NewReview"
import EditReview from "../user_components/EditReview"

const Activity = (props) => {
    return (
        <Router>
            <div>
                <Switch>
                    {/*Driver Routes*/}
                    <Route path="/driversignup" component={DriverOnboarding} />
                    <Route path="/driverlogin" component={DriverLogin} />
                    <PrivateRoute path='/driver' component={DriverProfile} />
                    <PrivateRoute path="/driveredit" component={EditDriverProfile} />
                    <PrivateRoute path="/driverreviews" component={DReviewList} />
                    {/*User Routes*/}
                    <Route path="/usersignup" component={UserOnboarding} />
                    <Route path="/userlogin" component={UserLogin} />
                    <PrivateRoute path='/user' component={UserDashboard} />
                    <PrivateRoute path="/driverslist" component={DriversList} />
                    <PrivateRoute path="/drivers/:id" component={DriverDetails} />
                    <PrivateRoute path="/newreview/:id" component={NewReview} />
                    <PrivateRoute path="/userreviews" component={UReviewList} />
                    <PrivateRoute path="/editreview/:id" component={EditReview} />
                    {/*General Route*/}
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
        loginUser, getDrivers, editDriver, deleteDriver }
)(Activity);
