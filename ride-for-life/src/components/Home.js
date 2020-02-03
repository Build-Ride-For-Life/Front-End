import React from 'react';

export default function Home() {
    return(
        <div>
            <Link className="main-buttons" to={"/driverlogin"}>Driver</Link>
            <Link className="main-buttons" to={"/userlogin"}>User</Link>
        </div>
    )
}