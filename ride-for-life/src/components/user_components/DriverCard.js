import React from 'react';

const DriverCard = props => {

    return (
        <div className="card">
            <h5>Name: {props.driver.drivers_name}</h5>
            <h5>Location: {props.driver.drivers_plot}</h5>
            <h5>Price: {props.driver.drivers_price}</h5>
            <h5>Phone: {props.driver.drivers_phone_number}</h5>
            <h5>Email: {props.driver.drivers_email}</h5>
        </div>
    );
};

export default DriverCard;