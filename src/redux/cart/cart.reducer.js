import { CartActionTypes } from './cart.types'

const INITIAL_STATE = {
    isCartHidden: true
}

const cartReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isCartHidden: !state.isCartHidden
            }
        default:
            return state;
    }
}

export default cartReducer;