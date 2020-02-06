import React from 'react';

const DriverCard = props => {

    const moreDetails = () => {
        props.history.push(`/drivers/${props.driver.id}`);
    };

    return (
        <div className="card">
            <h5>Name: {props.driver.drivers_name}</h5>
            <h5>Location: {props.driver.drivers_plot}</h5>
            <h5>Price: {props.driver.drivers_price}</h5>
            <button onClick={moreDetails}>More Details</button>
            {/*<button onClick={}>Request Ride</button>*/}
        </div>
    );
};

export default DriverCard;