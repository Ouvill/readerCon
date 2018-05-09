import * as Actions from '../actions/message'
import { stat } from 'fs';

const insertItem = (array, item, index, ) => {
    return [
        ...array.slice(0, index),
        item,
        ...array.slice(index)
    ]
}

const removeItem = (array, index) => {
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ]
}

const processQueue = (state) => {
    if (state.queue.length > 0) {
        let current = state.queue[0]
        let newQueue = removeItem(state.queue, 0);
        return {
            current: current,
            queue: newQueue,
            open: true,
        }
    }
    return state
}

const message = (state = {
    open: false,
    queue: [],
    current: {}
}, action) => {
    switch (action.type) {
        case Actions.SET_MESSAGE:
            let newState = Object.assign({}, state, {
                queue: [...state.queue, {
                    message: action.message,
                    key: new Date().getTime(),
                }]
            });
            if (state.open) {
                newState.open = false
                return newState
            } else {
                newState = processQueue(newState);
                return newState
            }

        case Actions.CLOSE_MESSAGE:
            return Object.assign({}, state, {
                open: false
            })

        case Actions.EXITED_MESSAGE:
            return processQueue(state)
        default:
            return state
    }
}



export const test = {
    removeItem,
    message
}

export default message
