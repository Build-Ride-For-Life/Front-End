import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import {
    createDriver,
    createUser, deleteDriver,
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

function EditDriverProfile() {
    
    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = data => {
        console.log(data);
    };
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
            
            <button type="submit">Submit</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.driverReducer.isLoading,
        driver: state.driverReducer.driver,
        error: state.driverReducer.error
    };
};

export default connect(
    mapStateToProps,
    { createDriver, createUser, loginDriver,
        loginUser, getDrivers, getDriver,
        getReviews, editDriver, deleteDriver }
)(EditDriverProfile);