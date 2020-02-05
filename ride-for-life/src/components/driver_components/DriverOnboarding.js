import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function DriverOnboarding(props) {

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        axiosWithAuth().post("auth/register_driver", data)
        .then(res => {
            console.log(res);
            props.history.push("/driverlogin"); //only move to log in if the API call is successful
        })
        .catch(err => {
            console.log(err);
        });
    };
    // const validateData = async (value) => {};

    return (
        <form className="DriverSignUp" onSubmit={handleSubmit(onSubmit)}>
            <h1>New Driver Sign Up</h1>
            <label>Name:</label>
            <input name="drivers_name" ref={register({ required: true })} />
            {errors.drivers_name && errors.drivers_name.type === "required" && (
                <p>This is required</p>
            )}

            <label>Email:</label>
            <input name="drivers_email" type="email" ref={register({ required: true })} />
            {errors.drivers_email && errors.drivers_email.type === "required" && (
                <p>This is required</p>
            )}

            <label>Phone Number:</label>
            <input name="drivers_phone_number" type="text" ref={register({ required: true })} />
            {errors.drivers_phone_number && errors.drivers_phone_number.type === "required" && (
                <p>This is required</p>
            )}

            <label>Address:</label>
            <input name="drivers_plot" type="text" ref={register({ required: true })} />
            {errors.drivers_plot && errors.drivers_plot.type === "required" && (
                <p>This is required</p>
            )}

            <label>Price:</label>
            <input name="drivers_price" type="text" ref={register({ required: true })} />
            {errors.drivers_price && errors.drivers_price.type === "required" && (
                <p>This is required</p>
            )}


            <label>Password:</label>
            <input name="password" type="password" ref={register({ required: true })} />
            {errors.password && errors.password.type === "required" && (
                <p>This is required</p>
            )}

            <label>Re-enter Password:</label>
            <input name="password" type="password" ref={register({ required: true })} />
            {errors.password && errors.password.type === "required" && (
                <p>This is required</p>
            )}

            <button type="submit">Submit</button>
        </form>
    )
}