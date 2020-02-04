/*
PROTECTED ROUTE

Post-Login Page

From here drivers can choose to:
- Edit (PUT) their profile details
- DELETE their profile
- View (GET) all of their reviews
 */

import React from 'react';

const DriverProfile = (props) => {



    return (
        <div>
            <h1>[Full Name]</h1>
            <h6>[Location/Plot]</h6> <h6>[Price]</h6>
            <h2>About [Full Name]</h2>
            <p>[Description]</p>
            <h4>Reviews</h4> <h5>See all [Review.length] Reviews</h5> {/*h5 -> Clickable*/}
            <p>[Review[0]]</p> <p>[Review[1]]</p> <p>[Review[2]]</p> {/*Map the first three*/}
            <h6>Edit Profile</h6> {/*Clickable*/}
        </div>
    )
};

export default DriverProfile;