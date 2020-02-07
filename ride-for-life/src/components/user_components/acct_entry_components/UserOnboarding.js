import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import Navigation from "../../general_components/Navigation"
import styled from "styled-components"
import Loader from "../../driver_components/acct_entry_components/DriverOnboarding";

const UserForm = styled.form`
display: flex;
flex-direction: column;
width: 31%;
flex-wrap: wrap;
margin: 9% auto 0%;
background: rgb(88, 110, 107);
`;

export default function UserOnboarding(props) {

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    let isLoading = false;
    const onSubmit = data => {
        isLoading = true;
        console.log(data);
        axiosWithAuth().post("auth/register_user", data)
        .then(res => {
            console.log(res);
            props.history.push("/userlogin"); //only move to log in if the API call is successful
            isLoading = false;
        })
        .catch(err => {
            console.log(err);
            isLoading = false;
        });
    };
    const validateData = async (value) => {};

    return (
        <div>
            <Navigation />
            {isLoading ?
                (<Loader
                    type="CradeLoader"
                    height={100}
                    width={100}
                />)
                :
                (<UserForm className="UserSignUp" style={{border: `3px solid`}} onSubmit={handleSubmit(onSubmit)}>
                    <h1 style={{margin: `0% 0% 5%`, border: `3px solid`}}>New User Sign Up</h1>

                    <div style={{margin:`0% 0% 3%`}}>
                        <input name="users_name" placeholder="Name" style={{margin:`0% 10% 0% 0%`, padding:`0% 8% 0% 0%`, border:`3px solid`}} ref={register({ required: true })} />
                        {errors.users_name && errors.users_name.type === "required" && (
                            <p>This is required</p>
                        )}

                        <input name="users_email" type="email" placeholder="Email" style={{margin:`0% 0% 0% 10%`, padding:`0% 0% 0% 8%`, border:`3px solid`}} ref={register({ required: true })} />
                        {errors.users_email && errors.users_email.type === "required" && (
                            <p>This is required</p>
                        )}

                    </div>

                    <div style={{margin:`0% 0% 3%`}}>
                        <input name="users_phone_number" type="text" placeholder="Phone Number" style={{margin:`0% 10% 0% 0%`, padding:`0% 8% 0% 0%`, border:`3px solid`}} ref={register({ required: true })} />
                        {errors.users_phone_number && errors.users_phone_number.type === "required" && (
                            <p>This is required</p>
                        )}

                        <input name="users_plot" type="text" placeholder="Address" style={{margin:`0% 0% 0% 10%`, padding:`0% 0% 0% 8%`, border:`3px solid`}} ref={register({ required: true })} ref={register({ required: true })} />
                        {errors.users_plot && errors.users_plot.type === "required" && (
                            <p>This is required</p>
                        )}
                    </div>

                    <div style={{margin:`0% 0% 4% -24%`}}>
                        <label>Expected Due Date</label>
                        <input name="due_date" type="date" placeholder="Expected Due Date" style={{border:`3px solid`}} ref={register({ required: false })} />
                    </div>

                    <div style={{margin:`0% 0% 3%`}}>
                        <input name="password" type="password" placeholder="Password" style={{margin:`0% 10% 0% 0%`, padding:`0% 8% 0% 0%`, border:`3px solid`}} ref={register({ required: true })} />
                        {errors.password && errors.password.type === "required" && (
                            <p>This is required</p>
                        )}

                        <input name="password" type="password" placeholder="Re-Enter Password" style={{margin:`0% 0% 0% 10%`, padding:`0% 0% 0% 8%`, border:`3px solid`}} ref={register({ required: true })} />
                        {errors.password && errors.password.type === "required" && (
                            <p>This is required</p>
                        )}
                    </div>
                    <div style={{margin: `0% 0% 12%`}}>
                        <button type="submit" style={{width: `38%`, padding: `4% 0%`, background: `rgb(182, 194, 170`, border: `3px solid`}}>Submit</button>
                    </div>
                </UserForm>)
            }
        </div>
    )
}