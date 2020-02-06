import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import {connect} from "react-redux";
import {
    deleteDriver,
    editDriver,
    getDriver,
    getDrivers,
    getReviews,
    loginDriver,
    loginUser
} from "../../../actions";
import styled from "styled-components"
import Navigation from "../../general_components/Navigation"

const DriverForm = styled.form`
display: flex;
flex-direction: column;
width: 31%;
flex-wrap: wrap;
margin: 9% auto 0%;
background: rgb(88, 110, 107);
`;

function DriverLogin(props) {

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        props.loginDriver(data, props.history); //page.push()
    };
    // const validateData = async (value) => {};

    return (
        <div>
            <DriverForm className="DriverLogin" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1 style={{margin: `0% 0% 5%`, border: `3px solid`}}>Driver Log in</h1>
                </div>
                <div style={{margin:`0% 0% 3%`}}>
                    <input name="drivers_email" type="email" placeholder="Email" style={{margin:`0% 10% 0% 0%`, padding:`0% 8% 0% 0%`, border:`3px solid`}} ref={register({ required: true })} />
                    {errors.drivers_email && errors.drivers_email.type === "required" && (
                        <p>This is required</p>
                    )}

                    <input name="password" type="password" placeholder="Password" style={{margin:`0% 0% 0% 10%`, padding:`0% 0% 0% 8%`, border:`3px solid`}} ref={register({ required: true })} />
                    {errors.password && errors.password.type === "required" && (
                        <p>This is required</p>
                    )}
                </div>
                <div style={{margin: `0% 0% 12%`}}>
                    <button type="submit" style={{width: `38%`, padding: `4% 0%`, background: `rgb(182, 194, 170`, border: `3px solid`}}>Submit</button>
                </div>
            </DriverForm>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.driverReducer.isLoading,
        driver: state.driverReducer.driver,
        reviews: state.driverReducer.reviews,
        token: state.driverReducer.token,
        error: state.driverReducer.error
    };
};

export default connect(
    mapStateToProps,
    { loginDriver,
        loginUser, getDrivers, getDriver,
        getReviews, editDriver, deleteDriver }
)(DriverLogin);