import React from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import {
    deleteDriver,
    editDriver,
    getDriver,
    getDrivers,
    getReviews,
    loginDriver,
    loginUser
} from "../../actions";

/*
PROTECTED ROUTE

From here drivers can choose to:
- Edit (PUT) their profile details
    - Endpoint: /api/drivers/:id
- DELETE their profile
    - Endpoint: /api/drivers/:id
*/

function EditDriverProfile(props) {
    
    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        console.log(props)
        axiosWithAuth().put(`drivers/${props.driver.id}`, {drivers_name: "Success"})
        .then(res => {
            console.log(res);
             
        })
        .catch(err => {
            console.log(err);
        })
    };
    const deleteDriver = () => {
        axiosWithAuth().delete(`drivers/${props.driver.id}`)
        .then(res => {
            console.log(res);
             
        })
    }

    const validateData = async (value) => {};

    return (
        <form className="DriverProfileEdit" onSubmit={handleSubmit(onSubmit)}>
            <h1>Edit Profile</h1>
            <label>Name:</label>
            <input name="drivers_name" ref={register} />
            
            <label>Email:</label>
            <input name="drivers_email" type="email" ref={register} />
            
            <label>Phone Number:</label>
            <input name="drivers_phone_number" type="text" ref={register} />
            
            <label>Address:</label>
            <input name="drivers_plot" type="text" ref={register} />
            
            <label>Price:</label>
            <input name="drivers_price" type="text" ref={register} />
            
            <label>Password:</label>
            <input name="password" type="password" ref={register} />
            
            <button type="submit">Update Profile</button>
            <button onClick={() => deleteDriver}>Delete Profile</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.driverReducer.isLoading,
        driver: state.driverReducer.driver,
        reviews: state.driverReducer.reviews,
        error: state.driverReducer.error
    };
};

export default connect(
    mapStateToProps,
    { loginDriver,
        loginUser, getDrivers, getDriver,
        getReviews, editDriver, deleteDriver }
)(EditDriverProfile);