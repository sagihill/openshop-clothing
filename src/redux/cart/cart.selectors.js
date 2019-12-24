import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.isCartHidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity,cartItem) => (
            accumulatedQuantity + cartItem.quantity
        ),0)
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedPrice,cartItem) => (
            accumulatedPrice + (cartItem.quantity*cartItem.price)
        ),0)
);