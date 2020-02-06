import React from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import { deleteDriver, editDriver } from "../../actions";
import {Link} from "react-router-dom";

/*
PROTECTED ROUTE

From here drivers can choose to:
- Edit (PUT) their profile details
    - Endpoint: /api/drivers/:id
- DELETE their profile
    - Endpoint: /api/drivers/:id
*/

function EditDriverProfile(props) {

    const {drivers_name, drivers_plot, drivers_phone_number,
        drivers_email, drivers_price, about_me} = props.driver;

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        localStorage.setItem("token", props.token);
        props.editDriver(props.driver.id, data)
    };
    const deleteDriver = () => {
        localStorage.setItem("token", props.token);
        props.deleteDriver(props.driver.id, props.history);
    };

    const validateData = async (value) => {};

    return (
        <div>
            <form className="DriverProfileEdit" onSubmit={handleSubmit(onSubmit)}>
                <h1>Edit Profile</h1>
                <label>Name:</label>
                <input name="drivers_name" defaultValue={drivers_name} ref={register({ required: false })} />

                <label>Email:</label>
                <input name="drivers_email" defaultValue={drivers_email} type="email" ref={register({ required: false })} />

                <label>Phone Number:</label>
                <input name="drivers_phone_number" defaultValue={drivers_phone_number} type="text" ref={register({ required: false })} />

                <label>Address:</label>
                <input name="drivers_plot" defaultValue={drivers_plot} type="text" ref={register({ required: false })} />

                <label>Price:</label>
                <input name="drivers_price" defaultValue={drivers_price} type="text" ref={register({ required: false })} />

                <label>About Me:</label>
                <input name="about_me" defaultValue={about_me} type="text" ref={register({ required: false })} />

                <button type="submit">Update Profile</button>
            </form>
            <button onClick={deleteDriver}>Delete Profile</button>
            <Link to="/driver"><button>Back to Profile</button></Link> {/*Clickable*/}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.driverReducer.isLoading,
        driver: state.driverReducer.driver,
        reviews: state.driverReducer.reviews,
        token: state.driverReducer.token,
        error: state.driverReducer.error
    };
};

export default connect(
    mapStateToProps,
    { editDriver, deleteDriver }
)(EditDriverProfile);