import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

//The user reducer - the input is the user to set
//The output is setting the user to be the current user
const userReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;