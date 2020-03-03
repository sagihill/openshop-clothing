import React from "react";
import "./CheckoutPage.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart.selectors";
import ChekoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton.component';

//thr checkout page input is the cartItems and their total price
const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <ChekoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total: ${totalPrice}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for making payments*
      <br/>
      Card number: 4242 4242 4242 4242 - Exp: 01/20 - CVC: 123
    </div>
    <StripeCheckoutButton price={totalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
