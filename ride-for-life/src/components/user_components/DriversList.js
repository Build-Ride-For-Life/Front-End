import React from 'react';

import DriverCard from './DriverCard';

const DriverList = props => {
    return (
        <div className="container">
            {props.state.drivers.length ? ( //greater than 0? [0 = falsy]
                <div className="limited-row">
                    {props.state.drivers.map(item => (
                        <DriverCard key={item.id} driver={item} dispatch={props.dispatch} />
                    ))}
                </div>
            ) : (
                <div>You Don't Have Any Drivers</div>
            )}
        </div>
    );
};

export default DriverList;