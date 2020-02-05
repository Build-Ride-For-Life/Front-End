/*
PROTECTED ROUTE

Post-Login Page

From here drivers can choose to:
- Edit (PUT) their profile details
- DELETE their profile
- View (GET) all of their reviews
 */

import React, {useState} from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";

const DriverProfile = (props) => {



    const method = () => {
        axiosWithAuth().get('drivers')
            .then((res) => {
                console.log("success:");
                console.log(res);
                localStorage.setItem('token', res.data["token"]);
            })
            .catch((err) => {
                console.log("get fail:");
                console.log(err)
            });
    };

    const logout = () => {
        localStorage.removeItem("token");
        props.history.push("/driverlogin");
    };

    const [] = useState();

    return (
        <div>
            <h1 onClick={method}>[Full Name]</h1>
            <h6>[Location/Plot]</h6> <h6>[Price]</h6>
            <h2>About [Full Name]</h2>
            <p>[Description]</p>
            <h4>Reviews</h4> <h5>See all [Review.length] Reviews</h5> {/*h5 -> Clickable*/}
            <p>[Review[0]]</p> <p>[Review[1]]</p> <p>[Review[2]]</p> {/*Map the first three*/}
            <h6>Edit Profile</h6> {/*Clickable*/}
            <button onClick={logout}>Logout</button>
        </div>
    )
};

export default DriverProfile;