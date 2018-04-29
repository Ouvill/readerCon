import {
    REQUEST_USERINFO,
    RECIEVE_USERINFO
} from '../actions/user'

const user = (state = { userInfo:{} }, action) => {
    switch (action.type) {
        case REQUEST_USERINFO:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECIEVE_USERINFO:
            return Object.assign({}, state, {
                isFetching: false,
                userInfo: action.userInfo,
            })

        default:
            return state
    }
}

export default user
