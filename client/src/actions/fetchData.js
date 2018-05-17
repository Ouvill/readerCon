import * as message from './message'

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


const StatusCodeError = class extends Error { }
StatusCodeError.prototype.name = 'StatusCodeError'

const statusCheck = (response) => {
    if (!response.ok) {
        response.json().then((err) => {
            if (typeof (err.messageJa) !== 'undefined') {
                throw new StatusCodeError(err.messageJa)
            }
            if (typeof (err.message) !== 'undefined') {
                throw new StatusCodeError(err.message)
            }
        })
    } else {
        return response.json()
    }
}

const fetchGetWithToken = (url, token , data) => {
    const headers = {
        'x-access-token': token,
        mode: 'cors',
        credentials: 'include'
    }



    return fetch(url, {
        headers,
        method: 'GET'
    })
}

const fetchPostWithToken = (url, token, data) => {
    const headers = {
        'x-access-token': token,
        mode: 'cors',
        credentials: 'include',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    return fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(data)
    })
}


const fetchWithToken = (url, method, token, data) => {
    if (method == 'GET') return fetchGetWithToken(url, token)
    if (method == 'POST') return fetchPostWithToken(url, token , data)
}

export const fetchApiAction = (url, method, data, callbackAction, option) => {
    return (dispatch, getState) => {
        dispatch(request());
        fetchWithToken(url, method, data)
            .then(statusCheck)
            .then(response => {
                response.json()
            })
            .then(json => {
                if (json.result) {
                    dispatch(callbackAction(json, option));
                } else {
                    if (typeof (json.messageJa !== 'undefined')) {
                        dispatch(message.setMessage(json.messageJa))
                    } else if (typeof (json.messageJa !== 'undefined')) {
                        dispatch(message.setMessage(json.message))
                    } else {
                        dispatch(message.setMessage('サーバーにアクセスできませんでした'))
                    }
                }
            }).catch(err => {
                console.log(err.stack);
                if (err instanceof StatusCodeError) {
                    dispatch(message.setMessage(err.message))
                } else {
                    dispatch(message.setMessage('サーバーにアクセスできませんでした'))
                }
            }).finally(() => {
                dispatch(recieve());
            })
    }
}
