import React, { useState } from "react";
import {useForm} from "react-hook-form";

export default function DriverLogin() {

    const [driver, setDriver] = useState({
        name: "",
        email: "",
        password: "",
    })

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
    };
    const validateData = async (value) => {};

    return (
        <form className="DriverLogin" onSubmit={handleSubmit(onSubmit)}>
            <h1>Driver Log in</h1>
            <label>Name:</label>
            <input name="name" value={driver.name} ref={register({ required: true })} />
            {errors.name && errors.name.type === "required" && (
                <p>This is required</p>
            )}

            <label>Email:</label>
            <input name="email" type="email" value={driver.email} ref={register({ required: true })} />
            {errors.email && errors.email.type === "required" && (
                <p>This is required</p>
            )}

            <label>Password:</label>
            <input name="password" type="password" value={driver.password} ref={register({ required: true })} />
            {errors.password && errors.password.type === "required" && (
                <p>This is required</p>
            )}

            <input name="submit"/>
        </form>
    )
}