import React from 'react';

import DriverCard from './DriverCard';
import {connect} from "react-redux";
import {deleteDriver, editDriver, getDrivers, loginDriver, loginUser} from "../../actions";

const DriverList = props => {
    return (
        <div className="container">
            {props.drivers.length ? ( //greater than 0? [0 = falsy]
                <div className="limited-row">
                    {props.drivers.map(item => (
                        <DriverCard key={item.id} driver={item} history={props.history} getDriver={props.getDriver} />
                    ))}
                </div>
            ) : (
                <div>No Drivers Found</div>
            )}
        </div>
    );
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
)(DriverList);