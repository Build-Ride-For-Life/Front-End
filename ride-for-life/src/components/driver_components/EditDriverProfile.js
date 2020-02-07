import React from "react";
import {useForm} from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import { deleteDriver, editDriver } from "../../actions";
import {Link} from "react-router-dom";
import styled from "styled-components"

/*
PROTECTED ROUTE

From here drivers can choose to:
- Edit (PUT) their profile details
    - Endpoint: /api/drivers/:id
- DELETE their profile
    - Endpoint: /api/drivers/:id
*/

const DriverEdit = styled.form`
display: flex;
flex-direction: column;
width: 31%;
flex-wrap: wrap;
margin: 9% auto 0%;
background: rgb(88, 110, 107);
padding: 0% 0% 2%;
`;

function EditDriverProfile(props) {

    const {drivers_name, drivers_plot, drivers_phone_number,
        drivers_email, drivers_price, about_me} = props.driver;

    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
        // localStorage.setItem("token", props.token);
        props.editDriver(props.driver.id, data)
    };
    const deleteDriver = () => {
        // localStorage.setItem("token", props.token);
        props.deleteDriver(props.driver.id, props.history);
    };

    const validateData = async (value) => {};

    return (
        <div>
            <DriverEdit className="DriverProfileEdit" style={{border: `3px solid`}} onSubmit={handleSubmit(onSubmit)}>
                <div style={{margin:`0% 0% 3%`}}>
                    <h1 style={{margin: `0% 0% 5%`, border: `3px solid`}}>Edit Profile</h1>
                </div>
                <div style={{margin:`0% 0% 3%`}}>
                    <label>Name:</label>
                    <input name="drivers_name" defaultValue={drivers_name} placeholder="Update Name" style={{padding:`0% 8% 0% 0%`, border:`3px solid`, margin:`0% 4% 0% 0%`}} ref={register({ required: false })} />
                    
                    <label>Email:</label>
                    <input name="drivers_email" defaultValue={drivers_email} type="email" placeholder="Email" style={{padding:`0% 0% 0% 8%`, border:`3px solid`}} ref={register({ required: false })} />
                </div>
                <div style={{margin:`0% 0% 3%`}}>
                    <label>Phone Number:</label>
                    <input name="drivers_phone_number" defaultValue={drivers_phone_number} type="text" placeholder="Phone Number" style={{border:`3px solid`, margin:`0% 4% 0% 0%`}} ref={register({ required: false })} />

                    <label>Address:</label>
                    <input name="drivers_plot" defaultValue={drivers_plot} type="text" placeholder="Address" placeholder="Price"style={{border:`3px solid`}} ref={register({ required: false })} />
                </div>
                <div style={{margin:`0% 0% 3%`}}>
                    <label>Price</label>
                    <input name="drivers_price" defaultValue={drivers_price} type="text" ref={register({ required: false })} />
                </div>
                <div style={{margin:`0% 7% 3% 0%`}}>
                    <label>About Me:</label>
                    <input name="about_me" defaultValue={about_me} type="text" placeholder="About Me" style={{margin:`0% 0% 7%`, border:`3px solid`}} ref={register({ required: false })} />
                </div>
                <div style={{margin: `0% 0% 12%`}}>
                    <button type="submit" style={{width: `38%`, padding: `4% 0%`, background: `rgb(182, 194, 170`, border: `3px solid`}}>Update Profile</button>
                    <button onClick={deleteDriver} style={{width: `38%`, padding: `4% 0%`, background: `rgb(182, 194, 170`, border: `3px solid`}}>Delete Profile</button>
                </div>
                <div>
                    <Link to="/driver" style={{width: `38%`, padding: `4% 0%`, background: `rgb(182, 194, 170`, border: `3px solid`}}><button>Back to Profile</button></Link>
                </div>
                </DriverEdit>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.driverReducer.isLoading,
        driver: state.driverReducer.driver,
        reviews: state.driverReducer.reviews,
        // token: state.driverReducer.token,
        error: state.driverReducer.error
    };
};

export default connect(
    mapStateToProps,
    { editDriver, deleteDriver }
)(EditDriverProfile);