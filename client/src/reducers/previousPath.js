import { LOG_PREVIOUS_PATH } from '../actions/previousPath'

const previousPath = (state = '/', action) => {
    switch (action.type) {
        case LOG_PREVIOUS_PATH:
            return action.previousPath
        default:
            return state
    }
}

export default previousPath
