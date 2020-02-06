import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import Navigation from "../../general_components/Navigation"
import styled from "styled-components"

const DriverForm = styled.form`
display: flex;
flex-direction: column;
width: 31%;
flex-wrap: wrap;
margin: 9% auto 0%;
background: rgb(88, 110, 107);
`;

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
        <div>
            <Navigation />
            <DriverForm className="DriverSignUp" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1 style={{margin: `0% 0% 5%`, border: `3px solid`}}>New Driver Sign Up</h1>
                </div>
                <div style={{margin:`0% 0% 3%`}}>
                    <input name="drivers_name" placeholder="Name" style={{margin:`0% 10% 0% 0%`, padding:`0% 8% 0% 0%`, border:`3px solid`}} ref={register({ required: true })} />
                    {errors.drivers_name && errors.drivers_name.type === "required" && (
                        <p>This is required</p>
                    )}

                    <input name="drivers_email" type="email" placeholder="Email" style={{margin:`0% 0% 0% 10%`, padding:`0% 0% 0% 8%`, border:`3px solid`}} ref={register({ required: true })} />
                    {errors.drivers_email && errors.drivers_email.type === "required" && (
                        <p>This is required</p>
                    )}
                </div>
                <div style={{margin:`0% 0% 3%`}}>
                    <input name="drivers_phone_number" type="text" placeholder="Phone Number" style={{margin:`0% 10% 0% 0%`, padding:`0% 8% 0% 0%`, border:`3px solid`}} ref={register({ required: true })} />
                    {errors.drivers_phone_number && errors.drivers_phone_number.type === "required" && (
                        <p>This is required</p>
                    )}

                    <input name="drivers_plot" type="text" placeholder="Price" style={{margin:`0% 0% 0% 10%`, padding:`0% 0% 0% 8%`, border:`3px solid`}} ref={register({ required: true })} />
                    {errors.drivers_plot && errors.drivers_plot.type === "required" && (
                        <p>This is required</p>
                    )}
                </div>
                <div style={{margin:`0% 0% 3%`}}>
                    <input name="drivers_price" type="text" placeholder="Price" style={{margin:`0% 0% 7%`, border:`3px solid`}} ref={register({ required: true })} />
                    {errors.drivers_price && errors.drivers_price.type === "required" && (
                        <p>This is required</p>
                    )}
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
            </DriverForm>
        </div>
    )
}