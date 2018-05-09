import { OPEN_LOGIN_WINDOW } from '../actions/login'

const previousPath = (state = '/', action) => {
    switch (action.type) {
        case OPEN_LOGIN_WINDOW:
            return action.previousPath
        default:
            return state
    }
}

export default previousPath
