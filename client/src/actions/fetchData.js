import * as message from './message'
import querystring from 'querystring'

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

function StatusCodeError(message) {
    this.message = message;
    var last_part = new Error().stack.match(/[^\s]+$/);
    this.stack = `${this.name} at ${last_part}`;
}
Object.setPrototypeOf(StatusCodeError, Error);
StatusCodeError.prototype = Object.create(Error.prototype);
StatusCodeError.prototype.name = "CustomError";
StatusCodeError.prototype.message = "";
StatusCodeError.prototype.constructor = StatusCodeError;

const statusCheck = (response) => {
    console.log(response);
    if (!response.ok) {
        return response.json().then((err) => {
            if (typeof (err.messageJa) !== 'undefined') {
                throw new StatusCodeError(err.messageJa)
            }
            if (typeof (err.message) !== 'undefined') {
                throw new StatusCodeError(err.message)
            }
        })
    } else {
        return response
    }
}

const fetchGetWithToken = (url, token, data) => {
    const headers = {
        'x-access-token': token,
        mode: 'cors',
        credentials: 'include'
    }

    url += '?' + querystring.stringify(data)

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

export const GET_METHOD = 'GET'
export const POST_METHOD = 'POST'
export const PUT_METHOD = 'PUT'
export const DELETE_METHOD = 'DELETE'

const fetchWithToken = (url, method, token, data) => {
    if (method === 'GET') return fetchGetWithToken(url, token)
    if (method === 'POST') return fetchPostWithToken(url, token, data)
}

export const fetchApiAction = (url, method, data, callbackAction, option) => {
    return (dispatch, getState) => {
        dispatch(request());
        fetchWithToken(url, method, data)
            .then(statusCheck)
            .then(response => response.json())
            .then(json => {
                if (json.result) {
                    dispatch(callbackAction(json, option));
                } else {
                    if (typeof (json.messageJa !== 'undefined')) {
                        dispatch(message.setMessage(json.messageJa))
                    } else if (typeof (json.message !== 'undefined')) {
                        dispatch(message.setMessage(json.message))
                    } else {
                        dispatch(message.setMessage('サーバーにアクセスできませんでした'))
                    }
                }
            })
            .catch(err => {
                console.log(err instanceof StatusCodeError);
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
