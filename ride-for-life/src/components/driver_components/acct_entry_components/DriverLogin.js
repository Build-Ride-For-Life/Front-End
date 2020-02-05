import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import {connect} from "react-redux";
import {
    createDriver,
    createUser, deleteDriver,
    editDriver,
    getDriver,
    getDrivers,
    getReviews,
    loginDriver,
    loginUser
} from "../../../actions";

function DriverLogin(props) {

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        props.loginDriver(data, props.history); //page.push()
    };
    // const validateData = async (value) => {};

    return (
        <form className="DriverLogin" onSubmit={handleSubmit(onSubmit)}>
            <h1>Driver Log in</h1>

            <label>Email:</label>
            <input name="drivers_email" type="email" ref={register({ required: true })} />
            {errors.drivers_email && errors.drivers_email.type === "required" && (
                <p>This is required</p>
            )}

            <label>Password:</label>
            <input name="password" type="password" ref={register({ required: true })} />
            {errors.password && errors.password.type === "required" && (
                <p>This is required</p>
            )}

            <button type="submit">Submit</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.driverReducer.isLoading,
        driver: state.driverReducer.driver,
        error: state.driverReducer.error
    };
};

export default connect(
    mapStateToProps,
    { createDriver, createUser, loginDriver,
        loginUser, getDrivers, getDriver,
        getReviews, editDriver, deleteDriver }
)(DriverLogin);