import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function UserLogin(props) {

    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // })

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        axiosWithAuth().post("auth/user_login", data)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data["token"]);
        })
        .catch(err => {
            console.log(err);
        })
        props.history.push("/user");
    };
    const validateData = async (value) => {};

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