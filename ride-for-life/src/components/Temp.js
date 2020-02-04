import {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import React from "react";

export default function Temp(props) {
    const [credentials, setCredentials] = useState({
        users_name: "Example User 2",
        users_plot: "167",
        users_phone_number: "164-1535-1256",
        users_email: "exampleuser1@gmail.com",
        password: "password1"
    });

    const url = '';

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('auth/register_user', credentials)
            .then((res) => {
                console.log("success:");
                console.log(res);
                // localStorage.setItem('token', res.data.token);
            })
            .catch((err) => {
                console.log("fail:");
                console.log(err)
            });
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
            </form>
        </div>
    )
}