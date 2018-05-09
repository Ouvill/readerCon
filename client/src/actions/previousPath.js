export const LOG_PREVIOUS_PATH = 'LOG_PREVIOUS_PATH'

export const logPreviousPath = (previousPath) => {
    return {
        type: LOG_PREVIOUS_PATH,
        previousPath: previousPath
    }
}
