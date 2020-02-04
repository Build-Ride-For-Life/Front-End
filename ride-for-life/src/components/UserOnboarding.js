import React, { useState } from "react";
import {useForm} from "react-hook-form";

export default function UserOnboarding() {

    // const [newUser, setNewUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // });

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
            <input name="users_name" ref={register({ required: true })} />
            {errors.users_name && errors.users_name.type === "required" && (
                <p>This is required</p>
            )}

            <label>Email:</label>
            <input name="users_email" type="email" ref={register({ required: true })} />
            {errors.users_email && errors.users_email.type === "required" && (
                <p>This is required</p>
            )}

            <label>Phone Number:</label>
            <input name="users_phone_number" type="text" ref={register({ required: true })} />
            {errors.users_phone_number && errors.users_phone_number.type === "required" && (
                <p>This is required</p>
            )}

            <label>Address:</label>
            <input name="users_plot" type="text" ref={register({ required: true })} />
            {errors.users_plot && errors.users_plot.type === "required" && (
                <p>This is required</p>
            )}

            <label>Expected Due Date:</label>
            <input name="due_date" type="date" ref={register({ required: true })} />

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