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

function UserLogin(props) {

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        props.loginUser(data, props.history); //page.push()
    };
    // const validateData = async (value) => {};

    return (
        <form className="UserLogin" onSubmit={handleSubmit(onSubmit)}>
            <h1>User Log in</h1>

            <label>Email:</label>
            <input name="users_email" type="email" ref={register({ required: true })} />
            {errors.users_email && errors.users_email.type === "required" && (
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

const mapStateToProps = state => {
    return {
        isLoading: state.driversReducer.isLoading,
        drivers: state.driversReducer.drivers,
        error: state.driversReducer.error
    };
};

export default connect(
    mapStateToProps,
    { createDriver, createUser, loginDriver,
        loginUser, getDrivers, getDriver,
        getReviews, editDriver, deleteDriver }
)(UserLogin);