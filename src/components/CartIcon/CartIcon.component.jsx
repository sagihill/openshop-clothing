import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className={`${(itemCount>9 && itemCount<100)  ? 'item-count-large ' : ''}${itemCount>99  ? 'item-count-larger ' : ''}item-count` }>{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
  
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);