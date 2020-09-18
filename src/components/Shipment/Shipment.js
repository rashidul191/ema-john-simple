import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const onSubmit = data => {
    console.log('form submitted', data);
    };
    return (
     
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Enter your name"/>
        {errors.name && <span className="error">Name is required</span>}
        
        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Enter your email"/>
        {errors.email && <span className="error">Email is required</span>}
        
        <input name="address" ref={register({ required: true })} placeholder="Enter your address"/>
        {errors.address && <span className="error">address is required</span>}
        
        <input name="zipCode" ref={register({ required: true })} placeholder="Enter your zip code"/>
        {errors.zipCode && <span className="error">Zip Code is required</span>}

        <input name="city" ref={register({ required: true })} placeholder="Enter your city name"/>
        {errors.city && <span className="error">City Name is required</span>}

        <input name="country" ref={register({ required: true })} placeholder="Enter your country name"/>
        {errors.country && <span className="error">Country Name is required</span>}

        <input name="phone" ref={register({ required: true })} placeholder="Enter your phone number"/>
        {errors.phone && <span className="error">Phone Number is required</span>}
        
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;