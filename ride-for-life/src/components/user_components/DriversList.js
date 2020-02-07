import React from 'react';

import DriverCard from './DriverCard';
import {connect} from "react-redux";
import {deleteDriver, editDriver, getDrivers, loginDriver, loginUser} from "../../actions";
import styled from 'styled-components'

const CardContainer = styled.div`
background:rgb(228, 217, 197);
padding: 3.4%;
`

const DriverList = props => {
    return (
        <div className="container">
            {props.drivers.length ? ( //greater than 0? [0 = falsy]
                <CardContainer className="limited-row">
                    {props.drivers.map(item => (
                        <DriverCard key={item.id} driver={item} history={props.history} getDriver={props.getDriver} />
                    ))}
                </CardContainer>
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