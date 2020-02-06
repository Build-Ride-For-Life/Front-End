import axios from 'axios';

export const axiosWithAuth = (token) => {
    const tk = localStorage.getItem('token');
    console.log(tk);
    return axios.create({ //returns an axios instance
        //config options
        baseURL: 'https://build-ride-for-life.herokuapp.com/api/',
        headers: {
            authorization: tk
        }

    });
};