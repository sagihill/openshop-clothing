//A list of all available user actions
import { UserActionTypes } from './user.types'

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})