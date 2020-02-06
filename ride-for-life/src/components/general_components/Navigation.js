import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavContainer = styled.div`
display: flex;
justify-content: space-evenly;
background:rgb(145, 114, 96);
padding: 2% 0%;
font-size: 1.3rem;
`;

export default function Navigation(){
    return(
        <NavContainer>
            <a href="https://sharp-shirley-31af6a.netlify.com/index.html">Home</a>
            <a href="https://sharp-shirley-31af6a.netlify.com/about.html">About Us</a>
            <NavLink to="/">Login/Signup</NavLink>
        </NavContainer>
    )
}