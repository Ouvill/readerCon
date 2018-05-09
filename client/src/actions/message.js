export const SET_MESSAGE = 'SET_MESSAGE'
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE'
export const EXITED_MESSAGE = 'EXITED_MESSAGE'

export function setMessage(message) {
    return {
        type: SET_MESSAGE,
        message: message
    }
}

export function closeMessage() {
    return {
        type: CLOSE_MESSAGE
    }
}

export function exitedMessage() {
    return {
        type: EXITED_MESSAGE
    }
}
