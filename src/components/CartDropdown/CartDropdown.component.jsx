import React from "react";
import CustomButton from "../CustomButton/CustomeButton.component";
import { connect } from "react-redux";
import "./CartDropdown.style.scss";
import CartItem from "../CartItem/CartItem.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
