import axios from 'axios';

export const axiosWithAuth = (token) => {
    return axios.create({ //returns an axios instance
        //config options
        baseURL: 'https://build-ride-for-life.herokuapp.com/api/',
        headers: {
            authorization: localStorage.getItem('token')
        }

    });
};