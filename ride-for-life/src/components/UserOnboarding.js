import React, { useState } from "react";
import {useForm} from "react-hook-form";

export default function UserOnboarding() {

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
    };
    const validateData = async (value) => {};

    return (
        <form className="UserSignUp" onSubmit={handleSubmit(onSubmit)}>
            <h1>New User Sign Up</h1>
            <label>Name:</label>
            <input name="name" value={newUser.name} ref={register({ required: true })} />
            {errors.name && errors.name.type === "required" && (
                <p>This is required</p>
            )}

            <label>Email:</label>
            <input name="email" type="email" value={newUser.email} ref={register({ required: true })} />
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

            <label>Expected Due Date:</label>
            <input name="date" type="date" ref={register({ required: true })} />

            <label>Password:</label>
            <input name="password" type="password" value={newUser.password} ref={register({ required: true })} />
            {errors.password && errors.password.type === "required" && (
                <p>This is required</p>
            )}

            <label>Re-enter Password:</label>
            <input name="enter" type="password" value={newUser.password} ref={register({ required: true })} />
            {errors.enter && errors.enter.type === "required" && (
                <p>This is required</p>
            )}

            <input name="submit"/>
        </form>
    )
}