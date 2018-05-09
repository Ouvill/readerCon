import * as Actions from '../actions/fetchData'

const fetch = (state = {
    isFetching: false,
    showProgress: false
}, action) => {
    switch (action.type) {
        case Actions.REQUEST:
            return {
                ...state,
                isFetching: true,
                showProgress: true
            }

        case Actions.RECIEVE:
            return {
                ...state,
                isFetching: false,
                showProgress: false
            }

        default:
            return state
    }
}

export default fetch
