import {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import axios from 'axios';
import React from "react";

export default function Temp(props) {
    const [credentials, setCredentials] = useState({
        id: Date.now(),
        users_name: "abc123",
        users_plot: "abc",
        users_phone_number: "111-111-1111",
        users_email: "abc123@abc.com",
        password: "password"
    });

    const url = '';

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('auth/user_login', {
            users_email: "Dr@dr.com",
            password: "Karl"
        })
            .then((res) => {
                console.log("success:");
                console.log(res);
                localStorage.setItem('token', res.data["token"]);
            })
            .catch((err) => {
                console.log("fail:");
                console.log(err)
            });
    };

    const get = e => { //1580839393885
        e.preventDefault();
        axiosWithAuth().get('drivers')
            .then((res) => {
                console.log("success:");
                console.log(res);
                localStorage.setItem('token', res.data["token"]);
            })
            .catch((err) => {
                console.log("fail:");
                console.log(err)
            })
    };

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={login}>
                Name
                <input
                    type="text"
                    name="users_name"
                    value={credentials['users_name']}
                    onChange={handleChange}
                />
                Plot
                <input
                    type="text"
                    name="users_plot"
                    value={credentials['users_plot']}
                    onChange={handleChange}
                />
                Phone Number
                <input
                    type="text"
                    name="users_phone_number"
                    value={credentials['users_phone_number']}
                    onChange={handleChange}
                />
                Email
                <input
                    type="text"
                    name="users_email"
                    value={credentials['users_email']}
                    onChange={handleChange}
                />
                PW
                <input
                    type="text"
                    name="password"
                    value={credentials['password']}
                    onChange={handleChange}
                />
                <button onClick={login}>Log in</button>
                <button onClick={get}>Get</button>
            </form>
        </div>
    )
}