import React, { useState } from "react";
import {useForm} from "react-hook-form";

export default function DriverLogin() {

    // const [driver, setDriver] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // })



    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const handleChanges = e => {}
    const onSubmit = data => {
        console.log(data);
    };
    const validateData = async (value) => {};

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