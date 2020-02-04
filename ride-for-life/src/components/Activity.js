import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchActivity } from '../actions';
import Home from "./Home";

const Activity = (props) => {
    return (
        <div>
            <Switch>
                <PrivateRoute path='/driver' component={DriverProfile} />
                <PrivateRoute path='/user' component={UserDashboard} />
                <Route path="/userlogin" component={UserLogin} />
                <Route path="/driverlogin" component={DriverLogin} />
                <Route component={Home} /> {/*If no other path has been met, will default route to Home*!/*/}
            </Switch>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        activity: state.activity,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchActivity }
)(Activity);
