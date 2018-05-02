import {
    SET_TENTATIVE_USER_DATA,
    RECIEVE_REGIST_RESULT
} from '../actions/user'

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

        case RECIEVE_REGIST_RESULT:
            return Object.assign({}, state, {



            })

        default:
            return state
    }
}

export default tentativeUser
