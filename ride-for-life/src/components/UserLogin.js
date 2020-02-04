import React, { useState } from "react";
import {useForm} from "react-hook-form";

export default function UserLogin() {

    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // })

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
    };
    const validateData = async (value) => {};

    return (
        <form className="UserLogin" onSubmit={handleSubmit(onSubmit)}>
            <h1>User Log in</h1>
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

            <label>Password:</label>
            <input name="password" type="password" ref={register({ required: true })} />
            {errors.password && errors.password.type === "required" && (
                <p>This is required</p>
            )}

            <button type="submit">Submit</button>
        </form>
    )
}