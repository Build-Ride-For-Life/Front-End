import React, {useState} from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import axios from 'axios'
import {Link} from "react-router-dom";

export default function Home() {
    return(
        <div>
            <Link className="main-buttons" to={"/driverlogin"}>Driver Login</Link>
            <Link className="main-buttons" to={"/userlogin"}>User Login</Link>
            <Link className="main-buttons" to={"/driversignup"}>Driver Signup</Link>
            <Link className="main-buttons" to={"/usersignup"}>User Signup</Link>
        </div>
    )
}