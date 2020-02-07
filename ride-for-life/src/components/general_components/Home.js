import React from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import axios from 'axios'
import {Link} from "react-router-dom";
import styled from "styled-components"

const HomeContainer = styled.div`
display: flex;
justify-content: center;
background:rgb(228, 217, 197);
font-size: 2rem;
color:rgb(182, 194, 170);
`;

const LinkSpan = styled.span`
width: 50%;
padding: 11.1% 8%;
`;

const LinkDiv = styled.div`
background:rgb(149, 167, 145);
width: 100%;
padding: 20% 0%;
display: flex;
justify-content: center;
flex-direction: column;
border-radius: 4%;
`

// padding: 0% 0% 6%;


export default function Home() {
    return(
        <div>
            <HomeContainer>
                <LinkSpan className="driver-board" style={{border: 5, borderRightStyle: "dotted", borderColor: "black", padding:`11.2% 8%`}}>
                    <LinkDiv style={{padding:`20% 0% 19%`}}>
                        <Link className="main-buttons" to={"/driverlogin"} style={{padding: "2%", background:`rgb(145, 114, 96)`, width: "30%", margin:"1% auto"}}>Driver Login</Link>
                        <Link className="main-buttons" to={"/driversignup"} style={{padding: "2%", background:`rgb(145, 114, 96)`, width: "40%", margin:"1% auto"}}>Driver Signup</Link>
                    </LinkDiv>
                </LinkSpan>
                <LinkSpan className="user-board">
                    <LinkDiv>
                        <Link className="main-buttons" to={"/userlogin"} style={{padding: "2%", background:`rgb(145, 114, 96)`, width: "30%", margin:"1% auto"}}>User Login</Link>
                        <Link className="main-buttons" to={"/usersignup"} style={{padding: "2%", background:`rgb(145, 114, 96)`, width: "30%", margin:"1% auto"}}>User Signup</Link>
                    </LinkDiv>
                </LinkSpan>
            </HomeContainer>
        </div>
    )
}