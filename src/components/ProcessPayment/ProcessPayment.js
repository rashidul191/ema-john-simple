import React from 'react';
import {  Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51HZrdZHFXxUpEUgNqYVJ2LFTOFXic2TGl7X7VW0MjvPfF2G2qLnCAoVEb35KZSnCjU5yrYhHbTY63LDI4vq4BGk500DBTvCtzQ');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
            {/* <SplitCardForm></SplitCardForm> */}
        </Elements>
    );
};

export default ProcessPayment;