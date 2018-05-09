import * as Actions from '../actions/message'

const removeItem = (array, index) => {
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ]
}

export const test = {
    removeItem
}

const message = (state = {
    open: false,
    queue: [],
    current: {}
}, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            let newState = Object.assign({}, state, {
                open: !state.open,
                queue: [...queue, {
                    message: action.message,
                    key: new Date().getTime(),
                }]
            });
            return newState

        case CLOSE_MESSAGE:
            return Object.assign({}, state, {
                open: false
            })

        case EXITED_MESSAGE:
            if (state.queue.length > 0) {
                let message = state.queue[0]
                let newQueue = state.queue.slice();
                return Object.assign({}, state, {
                    open: true,
                    queue: newQueue,
                    current: message
                });
            }
        default:
            return state
    }
}




export default message
