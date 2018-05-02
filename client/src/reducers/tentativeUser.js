import { SET_TENTATIVE_USER_DATA } from '../actions/user'

const tentativeUser = (state = {
    userName: "",
    displayName: "",
    email: "",
    password: ""
}, action) => {
    switch (action.type) {
        case SET_TENTATIVE_USER_DATA:
            return Object.assign({}, state, {
                [action.target]: action.value
            });
        default:
            return state
    }
}

export default tentativeUser
