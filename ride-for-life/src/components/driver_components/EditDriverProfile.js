import { axiosWithAuth } from "../../utils/axiosWithAuth";

/*
PROTECTED ROUTE

From here drivers can choose to:
- Edit (PUT) their profile details
    - Endpoint: /api/drivers/:id
- DELETE their profile
    - Endpoint: /api/drivers/:id
*/

export default function EditDriverProfile() {
    
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