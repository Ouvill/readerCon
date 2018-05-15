import * as Actions from '../actions/contests'

const contest = (state = {
    title: "",
    novels: [],
    entryPeriod: "",
    startContestAt: "",
    contestPeriod: ""
}, action) => {
    switch (action.type) {
        case Actions.RECIEVE_CONTEST:
            return action.contest

        default:
            return state
    }
}

export default contest
