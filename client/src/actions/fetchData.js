export const REQUEST = 'REQUEST'
export const RECIEVE = 'RECIEVE'
export const SHOW_PROGRESS = 'SHOW_PROGRESS'

export const request = () => {
    return {
        type: REQUEST
    }
}

export const recieve = () => {
    return {
        type: RECIEVE
    }
}
