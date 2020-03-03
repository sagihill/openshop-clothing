import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Q71qBHARkDzwhyZN9OLPbHAt00O6gz7UPL';

    //In the future the payment will be sent to the backend to make an actual purchase
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Openshop Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://image.flaticon.com/icons/png/512/2331/2331877.png'
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;