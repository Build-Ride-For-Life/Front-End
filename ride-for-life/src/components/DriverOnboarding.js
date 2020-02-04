import React, { useState } from "react";
import useForm from "react-hook-form";

export default function DriverOnboarding() {

    const [newDriver, setNewDriver] = useState({
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
        <form className="DriverSignUp" onSubmit={handleSubmit(onSubmit)}>
            <h1>New Driver Sign Up</h1>
            <label>Name:</label>
            <input name="name" value={newDriver.name} ref={register({ required: true })} />
            {errors.name && errors.name.type === "required" && (
                <p>This is required</p>
            )}

            <label>Email:</label>
            <input name="email" type="email" value={newDriver.email} ref={register({ required: true })} />
            {errors.email && errors.email.type === "required" && (
                <p>This is required</p>
            )}

            <label>Phone Number:</label>
            <input name="number" type="text" ref={register({ required: true })} />
            {errors.number && errors.number.type === "required" && (
                <p>This is required</p>
            )}

            <label>Address:</label>
            <input name="address" type="text" ref={register({ required: true })} />
            {errors.address && errors.address.type === "required" && (
                <p>This is required</p>
            )}

            <label>Price:</label>
            <input name="price" type="text" ref={register({ required: true })} />
            {errors.price && errors.price.type === "required" && (
                <p>This is required</p>
            )}


            <label>Password:</label>
            <input name="password" type="password" value={newDriver.password} ref={register({ required: true })} />
            {errors.password && errors.password.type === "required" && (
                <p>This is required</p>
            )}

            <label>Re-enter Password:</label>
            <input name="enter" type="password" value={newDriver.password} ref={register({ required: true })} />
            {errors.enter && errors.enter.type === "required" && (
                <p>This is required</p>
            )}

            <input name="submit"/>
        </form>
    )
}