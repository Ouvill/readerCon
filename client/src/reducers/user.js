import {
    REQUEST_USERINFO,
    RECIEVE_USERINFO,
    LOGOUT,
} from '../actions/user'
import { SUCCESS_LOGIN } from '../actions/login'

const user = (state = { userInfo: {}  }, action) => {
    switch (action.type) {
        case REQUEST_USERINFO:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECIEVE_USERINFO:
            if (action.res.result) {
                return Object.assign({}, state, {
                    isFetching: false,
                    userInfo: action.res.userInfo,
                });
            } else {
                return state
            }
        case LOGOUT:
            return Object.assign({}, state, {
                userInfo: {}
            });

        case SUCCESS_LOGIN:
            return Object.assign({}, state, {
                token: action.token
            })

        default:
            return state
    }
}

export default user
