import React, {useState} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
import axios from 'axios'
import {Link} from "react-router-dom";

export default function Home() {
    return(
        <div>
            <Link className="main-buttons" to={"/driverlogin"}>Driver</Link>
            <Link className="main-buttons" to={"/userlogin"}>User</Link>
            <Link className="main-buttons" to={"/driver-signup"}>User</Link>
            <Link className="main-buttons" to={"/user-signup"}>User</Link>
        </div>
    )
}