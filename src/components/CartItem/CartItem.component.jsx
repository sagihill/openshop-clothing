import React from 'react';
import './CartItem.style.scss';
// import CustomButton from '../CustomButton/CustomeButton.component';
// import { connect } from 'react-redux';
// import {addItem} from '../../redux/cart/cart.actions'
// import cartReducer from '../../redux/cart/cart.reducer';

const CartItem = ({item}) => {
    const {name, price, imageUrl, quantity} = item;
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;