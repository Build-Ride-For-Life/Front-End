import React from 'react';

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