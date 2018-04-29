import fetch from 'cross-fetch'

export const REQUEST_USERINFO = 'REQUEST_USERINFO';
export const RECIEVE_USERINFO = 'RECIEVE_USERINFO';
export const LOGOUT = 'LOGOUT'

function requestUserInfo() {
    return {
        type: REQUEST_USERINFO
    }
}

function recieveUserInfo(json) {
    return {
        type: RECIEVE_USERINFO,
        res: json
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

export function fetchUserInfo() {
    return dispatch => {
        dispatch(requestUserInfo())
        return fetch('/api/userInfo')
            .then(response => response.json())
            .then(json => dispatch(recieveUserInfo(json)));
    }
}

export function fetchLogout() {
    return dispatch => {
        return fetch('/api/logout')
            .then(response => response.json())
            .then(json => dispatch(logout()))
    }
}
