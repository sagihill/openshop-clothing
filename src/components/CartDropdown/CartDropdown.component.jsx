import React from 'react';
import CustomButton from '../CustomButton/CustomeButton.component';
import './CartDropdown.style.scss';
// import CartIcon from '../CartIcon/CartIcon.component';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

export default CartDropdown;