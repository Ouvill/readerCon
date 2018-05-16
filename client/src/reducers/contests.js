import * as Actions from '../actions/contests'

const contests = (state = [], action) => {
    switch (action.type) {
        case Actions.RECIVE_CONTEST_LIST:
            return action.contests
        default:
            return state
    }
}


export default contests
