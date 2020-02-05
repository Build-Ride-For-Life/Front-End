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

const UserDashboard = (props) => {

    const logout = () => {
        localStorage.removeItem("token");
        props.history.push("/userlogin");
    };

    return (
        <div>
            <h2>Search for Drivers</h2> {/*Clickable --> Shows DriversList.js*/}
            <button onClick={logout}>Logout</button>
        </div>
    )
};

export default UserDashboard;