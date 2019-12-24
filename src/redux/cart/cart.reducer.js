import { CartActionTypes } from './cart.types';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    isCartHidden: true,
    cartItems: []
}

const cartReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isCartHidden: !state.isCartHidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            };
        case CartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems,action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            };
        default:
            return state;
    }
}

export default cartReducer;